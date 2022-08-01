//Where I want to place the plant card for each plant object that I can then populate the collection with
import { deletePlant } from "../modules/PlantManager"
import "./PlantCard.css"


export const PlantCard = ({plantObject, getPlants}) => {
    
    
    const handleDeletePlant = () => {
        deletePlant(plantObject.id)
        .then(getPlants)
    }

    


    
    
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
                    {/* <Link  to={`/plants/${singlePlant.id}/edit`} >
                        <button class="btn">Edit</button>
                        </Link> */}

                        
                </div>
            </div>
        </>
    )
}