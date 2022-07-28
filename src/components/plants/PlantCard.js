//Where I want to place the plant card for each plant object that I can then populate the collection with

import React, { useState } from 'react'
import "./PlantCard.css"


export const PlantCard = ({singlePlant}) => {
    
    
    return (
        <>
            <div className="plant_container">
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

                        
                </div>
            </div>
        </>
    )
}