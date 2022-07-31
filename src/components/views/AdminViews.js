import { Outlet, Route, Routes } from "react-router-dom"
import { PlantList } from "../plants/PlantList"


export const AdminViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>OnlyPlants</h1>
                    <div>Your one-stop-shop to get all your plants fixed</div>

                    <Outlet />
                </>
            }>
                <Route path="plants" element={ <PlantList /> } />
                
            </Route>
        </Routes>
    )
}