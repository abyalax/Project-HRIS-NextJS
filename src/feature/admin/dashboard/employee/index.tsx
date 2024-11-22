import DashboardAdminLayouts from "../layout";
import CardEmploye from "./ui/card";

const AdminKaryawan = () => {

    return (
        <DashboardAdminLayouts>
            <main className="p-2 flex gap-4 flex-wrap text-gray-700 justify-self-start ">
                <CardEmploye />
                <CardEmploye />
                <CardEmploye />
                <CardEmploye />
                <CardEmploye />
                <CardEmploye />
            </main>
        </DashboardAdminLayouts>
    )
};

export default AdminKaryawan;