//Where I want to place the plant card for each plant object that I can then populate the collection with

import { Link } from "react-router-dom"
import { deletePlant } from "../modules/PlantManager"
import "./PlantCard.css"


export const PlantCard = ({plant}) => {
    
    
    // const handleDeletePlant = () => {
    //     deletePlant(singlePlant.id)
    //     .then(getPlants)
    // }

    


    
    
    return (
        <>
            <div className="plant_card">
                <div className="plant-content">    
                    <h2>
                        <span className="card_plant_name">{plant?.plantName}
                        </span>
                    </h2>
                    <p>Species: {plant?.species}</p>
                    <p>Lighting Needs: {plant?.light}</p>
                    <p>Soil Preferences: {plant?.soil}</p>
                    <p>pH Range: {plant?.phBalance}</p>
                    <p>Temperature Range: {plant?.tempRange}</p>
                    <p>Plant Variety: {plant?.plantType}</p>
                    <p>Watering Needs: {plant?.water}</p>

                    {/* <Link  to={`/plants/${singlePlant.id}/edit`} >
                        <button class="btn">Edit</button>
                        </Link> */}

                        {/* <Link to={`/plants`} >
                        <button class="btn" onClick={handleDeletePlant}>Delete</button>
                        </Link> */}
                        
                </div>
            </div>
        </>
    )
}