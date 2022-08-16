import { Outlet, Route, Routes } from "react-router-dom"
import { PlantEditForm } from "../plants/EditPlantForm"
import { PlantForm } from "../plants/PlantForm"
import { PlantList } from "../plants/PlantList"



export const AdminViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>OnlyPlants</h1>
                    <div>An incredibly well thought out app to help you keep your living things alive.</div>

                    <Outlet />
                </>
            }>
                <Route path="plants" element={ <PlantList /> } />
                <Route path="plants/add" element={<PlantForm />} />
                <Route path="plants/edit" element={<PlantEditForm />} />
            </Route>
        </Routes>
    )
}