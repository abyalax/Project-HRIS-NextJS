import Link from "next/link";
import DashboardAdminLayouts from "../layout";
import { SidebarNavigation } from "@/utils/route-sidebar";

const AdminSettingsLayouts = ({ children }: { children: React.ReactNode }) => {
  const { routesAccountSettings } = SidebarNavigation()
  return (
    <DashboardAdminLayouts>
      <main className="p-2">
        <h2 className="text-2xl font-semibold my-2 mx-1 text-gray-700">Account Settings</h2>
        <div className="border-2 bg-white border-slate-200 flex rounded-lg p-4 ">

          <aside className="w-1/6 border-r-2 border-slate-200 py-2 pl-2 pr-6 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {routesAccountSettings.map((item, index) => (
                <Link key={index} href={item.path} className={`text-slate-600 ${item.active ? "bg-slate-200 font-semibold" : "hover:bg-slate-100"} rounded-lg px-2 py-2`}>{item.name}</Link>
              ))}
            </div>
            <button className="text-red-500 font-semibold hover:bg-red-200 rounded-lg border-t border-slate-200 mt-7 px-2 py-2">Delete Account</button>
          </aside>

          {children}

        </div>
      </main>
    </DashboardAdminLayouts>
  )
};

export default AdminSettingsLayouts;
