import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPlants } from "../modules/PlantManager"
import { PlantCard } from "./PlantCard"


export const PlantList = () => {
    const navigate = useNavigate()
    // const [admin, setAdmin] = useState([])

    const [plants, setPlants] = useState([])
    // const [filteredPlants, setFilteredPlants] = useState([])

    const getPlants = () => {
        getAllPlants().then(plantsFromAPI => {
            setPlants(plantsFromAPI)
        })        
    }



    // const handleUpdatePlant = (id) => {
    //     const editedPlant = {
    //         id: id,
            
    //     }
    //     updatePlant(editedPlant).then(() => getAllPlants().then(setPlants))
    // }
    useEffect(() => {
        getPlants()
    }, [])


    return (
        <>
        
        <button type="button"
            className="add_plant_button"
            onClick={() => {navigate("/plants/add")}}>You got another plant you fool!</button>
        
        <h2>The plant hoard...</h2>
        <div className="plant_list">
            {plants.map((plant) => {
                
                    return (
              <PlantCard
                    key={plant.id}                                    
                    plant ={plant}
                     />  
            )}  
                    
            )}
        </div>                                    
        </>
    )
}


