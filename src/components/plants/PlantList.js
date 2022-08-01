import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPlants } from "../modules/PlantManager"
import { PlantCard } from "./PlantCard"


export const PlantList = () => {
    const navigate = useNavigate()

    //gets local storage user info
    const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

    const [plants, setPlants] = useState([])
    const [filteredPlants, setFilteredPlants] = useState([])


    //gets plants from api thru manager
    const getPlants = () => {
        getAllPlants().then(plantsFromAPI => {
            setPlants(plantsFromAPI)
        })        
    }



    useEffect(
        () => {
            if (plantUserObject.isAdmin) {
                //for admin
                setFilteredPlants(plants)

            }
            else {
                //for users
                const myPlants = plants.filter(plant => plant.userId === plantUserObject.id)
                setFilteredPlants(myPlants)
            }
        },
        [plants]
    )
    // const handleUpdatePlant = (id) => {
    //     const editedPlant = {
    //         id: id,
            
    //     }
    //     updatePlant(editedPlant).then(() => getAllPlants().then(setPlants))
    // }

    //sets plants
    useEffect(() => {
        getPlants()
    }, [])


    return (
        <>
        
        <button type="button"
            className="add_plant_button"
            onClick={() => {navigate("/plants/add")}}>Did you buy another plant you fool?!</button>
        
        <h2>The plant hoard...</h2>
        <article className="plant_list">
        {
                filteredPlants.map(
                    (filteredPlant) => <PlantCard key={`filteredPlants--${filteredPlant.id}`}
                    getAllPlants={getAllPlants}
                    currentUser={plantUserObject}
                    plantObject={filteredPlant} />
                )
            }



            {/* {plants.map((plant) => {
                
                    return (
              <PlantCard
                    key={plant.id}                                    
                    plant ={plant}
                     />  
            )}  
                    
            )} */}
        </article>                                    
        </>
    )
}


