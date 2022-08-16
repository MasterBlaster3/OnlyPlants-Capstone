import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { updatePlant, getSpecificPlant } from "../modules/PlantManager"

export const PlantEditForm = () => {

    //defines current user
    const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

    const navigate = useNavigate()
    
    const { plantId } = useParams()

    const [plant, setPlant] = useState({
        userId: plantUserObject.id,
        plantName: "",
        species: "",
        light:  "",
        soil: "",
        phBalance: "",
        tempRange: "",
        plantType: "",
        water:  ""
    }) 


    const stateToChange = { ...plant }
    const handleFieldChange = (evt) => {
        stateToChange[evt.target.id] = evt.target.value
        setPlant(stateToChange)
    }

    const updateCurrentPlant = (evt)  => {
        evt.preventDefault()
        

        const editedPlant = {
            id: plantId,
            plantName: plant.plantName,
            species: plant.species,
            light: plant.light,
            soil: plant.soil,
            phBalance: plant.phBalance,
            tempRange: plant.tempRange,
            plantType: plant.plantType,
            water: plant.water
        }
        

        updateEditedPlant(editedPlant)
    } 

    const getPlantToEdit = () =>{
      return getSpecificPlant(plantId).then(specificPlant =>{
          setPlant(specificPlant)
      })
    }
 
  

    const updateEditedPlant = (newObject) => {
      updatePlant(newObject).then(() =>navigate("/plants"))
    }    

    useEffect(() => {
      getPlantToEdit()         
      }, [])


    return (
        <>

            <h1 className="plant_entry-header">Make changes to your plant:</h1>
            <form className="plant_entry_page">
                <div className="plant_entry_form">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="plantName">What kind of plant did you buy this time???</label><br />
                            <input type="text" id="plantName" onChange={handleFieldChange} required placeholder="Plant name" value={plant.plantName} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="species">What is the species name?</label><br />
                            <input type="text" id="species" onChange={handleFieldChange} required placeholder="Species" value={plant.species} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="light">How much light does this new plant thrive with?</label><br />
                            <input type="text" id="light" onChange={handleFieldChange} required placeholder="Lighting needs" value={plant.light} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="soil">What soil type is best for this plant?</label><br />
                            <input type="text" id="soil" onChange={handleFieldChange} required placeholder="Soil type" value={plant.soil} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="phBalance">What's the preferred pH level for this plant's soil?</label><br />
                            <input type="text" id="phBalance" onChange={handleFieldChange} required placeholder="Plant phBalance" value={plant.phBalance} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="tempRange">What is the optimal temp range for this plant?</label><br />
                            <input type="text" id="tempRange" onChange={handleFieldChange} required placeholder="Optimal temperature" value={plant.tempRange} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="plantType">What is the variety of plant?</label><br />
                            <input type="text" id="plantType" onChange={handleFieldChange} required placeholder="Plant Type" value={plant.plantType} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="water">What are this plants watering needs?</label><br />
                            <input type="text" id="water" onChange={handleFieldChange} required placeholder="Watering needs" value={plant.water} />
                        </div>
                    </fieldset>
                    
                    <button type="button" className="btn btn-primary"
                        onClick={updateCurrentPlant}>
                        Save changes
                    </button>
                </div>
                
            </form>
        </>
      );
    }