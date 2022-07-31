import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {

    const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

    if (plantUserObject.admin === true) {
        return <AdminViews />
    } else {
        return <UserViews />
    }
}