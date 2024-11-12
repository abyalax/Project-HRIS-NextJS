import Dropdown from "@/ui/drop-down";
import DashboardAdminLayouts from "../layout"
import { dataRequest } from "@/utils/dummy";
import { stylingStatus } from "@/utils/utils";

const AdminAbsensi = () => {
  return (
    <DashboardAdminLayouts>
      <main className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mx-3">Requests</h2>
          <div className="flex gap-2 pr-5">
            <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">Filter</button>
            <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">Export</button>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 h-fit rounded-lg m-1 mb-96">
          <table className="w-full h-[50vh]">
            <thead className="bg-[#f5f6fa] p-4">
              <tr className="p-4">
                <td className="px-3 py-2">Name</td>
                <td className="px-3 py-2">Period</td>
                <td className="px-3 py-2">Type</td>
                <td className="px-3 py-2">Status</td>
                <td className="px-3 py-2">Date</td>
                <td className="px-3 py-2">Notes</td>
                <td className="px-1 py-2 text-center">Action</td>
              </tr>
            </thead>
            <tbody>
              {dataRequest.slice(0, 6).map((data) => (
                <tr key={data.period.toString() + data.type}>
                  <td className="px-3 py-2">{data.name.length > 50 ? data.name.slice(0, 50) + "..." : data.name}</td>
                  <td className="px-3 py-2">{data.period}</td>
                  <td className="px-3 py-2">{data.type}</td>
                  <td className="px-3 py-2 flex items-center">
                    <div className={`${stylingStatus(data.status)} w-3 h-3 mr-1 rounded-full text-transparent`} />
                    {data.status}
                  </td>
                  <td className="px-3 py-2">{data.date}</td>
                  <td className="px-3 py-2">{data.notes.length > 50 ? data.notes.slice(0, 50) + "..." : data.notes}</td>
                  <td className="px-1 py-2 flex justify -center items-center">
                    <button onClick={() => document.getElementById('action')?.classList.toggle('hidden')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                    </button>
                    <Dropdown ID="action" custom="left-2 top-2">
                      <div>
                        button
                      </div>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

    </DashboardAdminLayouts>
  )
};

export default AdminAbsensi;