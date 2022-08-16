
const ApiURL = "http://localhost:8088/plants";



export const getAllPlants = () => {
    return fetch(`${ApiURL}`)
        .then(res => res.json())
}

export const getSpecificPlant = (id) => {
    return fetch(`${ApiURL}/${id}`)
    .then(res => res.json())
}

export const addPlant=(newPlant) => {
    return fetch(`${ApiURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)
        }).then(response => response.json())    
}


export const deletePlant = (plant) => {
    return fetch(`${ApiURL}/${plant}`, {
        method: "DELETE" 
        })   
}

export const updatePlant = (singlePlant) => {
    return fetch (`${ApiURL}/${singlePlant.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePlant)
    }).then((data) => data.json())
}

export const getPlantById=(plantId)=>{
    return fetch(`${ApiURL}/plants/${plantId}`)
  .then(res => res.json())
}
