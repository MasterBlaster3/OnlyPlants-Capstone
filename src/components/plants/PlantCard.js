//Where I want to place the plant card for each plant object that I can then populate the collection with

import { Link } from "react-router-dom"
import { deletePlant } from "../modules/ApiManager"
import "./PlantCard.css"


export const PlantCard = ({singlePlant, handleUpdatePlant, getPlants}) => {
    
    
    const handleDeletePlant = () => {
        deletePlant(singlePlant.id)
        .then(getPlants)
    }

    


    
    
    return (
        <>
            <div className="plant_card">
                <div className="plant-content">    
                    <h2>
                        <span className="card_plantname">{singlePlant.plants.plantName}
                        </span>
                    </h2>
                    <p>Species: {singlePlant.plants.species}</p>
                    <p>Lighting Needs: {singlePlant.plants.light}</p>
                    <p>Soil Preferences: {singlePlant.plants.soil}</p>
                    <p>pH Range: {singlePlant.plants.phBalance}</p>
                    <p>Temperature Range: {singlePlant.plants.tempRange}</p>
                    <p>Plant Variety: {singlePlant.plants.plantType}</p>
                    <p>Watering Needs: {singlePlant.plants.water}</p>

                    {/* <Link  to={`/plants/${singlePlant.id}/edit`} >
                        <button class="btn">Edit</button>
                        </Link> */}

                        <Link to={`/plants`} >
                        <button class="btn" onClick={handleDeletePlant}>Delete</button>
                        </Link>
                        
                </div>
            </div>
        </>
    )
}