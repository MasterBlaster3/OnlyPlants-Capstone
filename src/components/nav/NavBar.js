import { UserNav } from "./UserNav"
import { AdminNav } from "./AdminNav"
import "./NavBar.css"

export const NavBar= () => {
	
	const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

	if (plantUserObject.admin === true) {
		return <AdminNav />
	}
	else {
		return <UserNav />
	}
}

