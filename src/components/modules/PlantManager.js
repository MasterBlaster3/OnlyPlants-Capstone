
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


export const deletePlant = (plantId) => {
    return fetch(`${ApiURL}/${plantId}`, {
        method: "DELETE" 
        }).then(result => result.json())    
}


// export const updatePlant = (singleTask) => {
//     return fetch (`${ApiURL}/plants/${singleTask.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(singleTask)
//     }).then(data => data.json())
// }

// export const getPlantById=(plantId)=>{
//     return fetch(`${ApiURL}/plants/${plantId}`)
//   .then(res => res.json())
// }