import Link from "next/link";
import DashboardAdminLayouts from "../layout";
import Image from "next/image";
import { user } from "@/utils/getter-image";

const AdminSettings = () => {
  return (
    <DashboardAdminLayouts>
      <main className="p-2">
        <h2 className="text-2xl my-2 mx-1 text-gray-700">Account Settings</h2>
        <div className="border-2 bg-white border-slate-200 flex rounded-lg p-4 ">
          <aside className="w-1/6 border-r-2 border-slate-200 py-2 pl-2 pr-6">
            <div className="flex flex-col gap-2">
              <Link href={""} className="text-slate-600 bg-slate-200 font-semibold rounded-lg px-2 py-2">My Profile</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Security</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Team Members</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Notifications</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Data Export</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Preferences</Link>
              <Link href={""} className="text-slate-600 hover:bg-slate-100 rounded-lg px-2 py-2">Delete Account</Link>
            </div>
          </aside>


          <main className="w-5/6 pl-6 pr-2">
            <h2 className="text-xl font-semibold my-2">My Profile</h2>
            <div className="border-2 border-slate-200 rounded-lg p-3 flex">

              <Image src={user} alt="User Profile" width={100} height={100} className="w-16 h-16 rounded-full my-4 mr-4 ml-2" />
              <div className="flex justify-between w-full">

                <div className="flex flex-col gap-1">
                  <h2>User Name</h2>
                  <p>Team Manager</p>
                  <p>Leads United Kingdoms</p>
                </div>

                <div>
                  <button>Edit</button>
                </div>

              </div>
            </div>
          </main>
        </div>
      </main>
    </DashboardAdminLayouts>
  )
};

export default AdminSettings;