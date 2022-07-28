import { Outlet, Route, Routes } from "react-router-dom"
// import { Profile } from "../profile/Profile"
// import { TicketEdit } from "../tickets/TicketEdit"
import { PlantForm } from "../plants/PlantForm"
import { PLantList } from "../plants/PlantList"

export const UserViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>OnlyPlants</h1>
                    <div>Your one-stop-shop to get all your plants fixed</div>

                    <Outlet />
                </>
            }>

                {/* <Route path="tickets" element={ <TicketList /> } />
				<Route path="ticket/create" element={ <TicketForm /> } />
                <Route path="profile" element={ <Profile />} />
                <Route path="tickets/:ticketId/edit" element={ <TicketEdit />} /> */}
            </Route>
        </Routes>
    )
}