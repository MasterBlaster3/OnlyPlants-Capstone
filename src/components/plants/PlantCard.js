//Where I want to place the plant card for each plant object that I can then populate the collection with
import { deletePlant, updatePlant, getAllPlants } from "../modules/PlantManager"
import "./PlantCard.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export const PlantCard = ({plantObject, getAllPlants}) => {
    const [ plants, setPlants ] = useState([])
    const navigate = useNavigate()


    const getPlants = () => {
        
        getAllPlants().then(plantsFromAPI => {
            setPlants(plantsFromAPI)
        })        
    }
    

    //pulls in the deletePlant fetch from plantmanager and handles deleting the clicked on plant
    const handleDeletePlant = () => {
        deletePlant(plantObject.id)
        .then(getPlants)
    }

    


    
    //this is the plant card that gets populated in plantlist with the plant array that gets called into it
    return (
        <>
            <div className="plant_card">
                <div className="plant-content">    
                    <h2>
                        <span className="card_plant_name">{plantObject?.plantName}
                        </span>
                    </h2>
                    <p>Species: {plantObject.species}</p>
                    <p>Lighting Needs: {plantObject.light}</p>
                    <p>Soil Preferences: {plantObject.soil}</p>
                    <p>pH Range: {plantObject.phBalance}</p>
                    <p>Temperature Range: {plantObject.tempRange}</p>
                    <p>Plant Variety: {plantObject.plantType}</p>
                    <p>Watering Needs: {plantObject.water}</p>


                    <button className="delete_btn" onClick={handleDeletePlant}>Delete</button>
                    <button className="update_btn" onClick={() => {navigate(`/plants/edit/${plantObject.id}`)}}>Edit</button>                    
                </div>
            </div>
        </>
    )
}