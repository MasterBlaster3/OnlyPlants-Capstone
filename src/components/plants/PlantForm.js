//Where the new plant form will live
import { addPlant } from "../modules/PlantManager"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export const PlantForm = () => {
    const navigate = useNavigate()

    //defines current user
    const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

     // sets the initial plant state
     const [plant, setPlant] = useState({
        userId: plantUserObject.id,
        plantName: "",
        species: "",
        light: "",
        soil: "",
        phBalance: "",
        tempRange: "",
        plantType: "",
        water: "",
    })

    
    //when "change" happens in the form, the value is changed in the object useState
    const handleControlledInputChange = (event) => {
        const newPlant = { ...plant }
        let selectedVal = event.target.value
        newPlant[event.target.id] = selectedVal
        setPlant(newPlant)
    }
    // when the add plant button is clicked, the plant object in the useState is saved with a fetch call to the plants array in the api. the user receives an alert and once they click "ok" they navigate back to the plants collection page
    const handleClickSavePlant = (event) => {
        event.preventDefault()
        addPlant(plant)
            .then(() => {
                alert(`You added ${plant.plantName} to your plant list!`)
            })
            .then(() => { navigate("/plants") })
    }

    // new plant entry page
    return (
        <>

            <h1 className="plant_entry-header">Add a plant to your collection:</h1>
            <form className="plant_entry_page">
                <div className="plant_entry_form">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="plantName">What kind of plant did you buy this time???</label><br />
                            <input type="text" id="plantName" onChange={handleControlledInputChange} required placeholder="Plant name" value={plant.plantName} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="species">What is the species name?</label><br />
                            <input type="text" id="species" onChange={handleControlledInputChange} required placeholder="Species" value={plant.species} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="light">How much light does this new plant thrive with?</label><br />
                            <input type="text" id="light" onChange={handleControlledInputChange} required placeholder="Lighting needs" value={plant.light} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="soil">What soil type is best for this plant?</label><br />
                            <input type="text" id="soil" onChange={handleControlledInputChange} required placeholder="Soil type" value={plant.soil} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="phBalance">What's the preferred pH level for this plant's soil?</label><br />
                            <input type="text" id="phBalance" onChange={handleControlledInputChange} required placeholder="Plant phBalance" value={plant.phBalance} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="tempRange">What is the optimal temp range for this plant?</label><br />
                            <input type="text" id="tempRange" onChange={handleControlledInputChange} required placeholder="Optimal temperature" value={plant.tempRange} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="plantType">What is the variety of plant?</label><br />
                            <input type="text" id="plantType" onChange={handleControlledInputChange} required placeholder="Plant Type" value={plant.plantType} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="water">What are this plants watering needs?</label><br />
                            <input type="text" id="water" onChange={handleControlledInputChange} required placeholder="Watering needs" value={plant.water} />
                        </div>
                    </fieldset>
                    
                    <button type="button" className="btn btn-primary"
                        onClick={handleClickSavePlant}>
                        Add Plant
                    </button>
                </div>
                
            </form>
        </>
    )
}
