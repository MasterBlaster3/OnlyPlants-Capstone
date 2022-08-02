
const ApiURL = "http://localhost:8088/plants";



export const getAllPlants = () => {
    return fetch(`${ApiURL}`)
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
