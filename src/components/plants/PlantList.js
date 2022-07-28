import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPlants } from "../modules/ApiManager"
import { PlantCard } from "./PlantCard"


export const PlantList = () => {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState([])

    const [plants, setPlants] = useState([])
    const [filteredPlants, setFilteredPlants] = useState([])

    const getPlants = () => {
        getAllPlants().then(plantsFromAPI => {
            setPlants(plantsFromAPI)
        })        
    }

    return (
        <>
        <section className="plant_cards">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/plants/add")}}>New Plant!</button>
        </section>
        <div className="container_cards">
            {plants.map((plant) => {
                
                    return (
              <PlantCard
                    key={plants.id}                    
                    getPlants={getPlants}
                     />  
            )}  
                    
            )}
        </div>                                    
        </>
    )
}


