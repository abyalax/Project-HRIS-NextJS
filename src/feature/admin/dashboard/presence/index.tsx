import Dropdown from "@/ui/drop-down";
import DashboardAdminLayouts from "../layout"
import { dataPresent } from "@/utils/dummy";
import { convertLateDuration, stylingStatus } from "@/utils/utils";
import Link from "next/link";

const AdminAbsensi = () => {
  return (
    <DashboardAdminLayouts>
      <main className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl ml-2 font-semibold">Attendance</h2>

          <div className="flex gap-2 pr-5 mt-6 mb-3">
            <button className="py-2 px-4 rounded-lg text-gray-700 bg-white font-semibold flex gap-3 border-2 border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="gray" className="bi bi-funnel" viewBox="0 0 16 16">
                <path stroke="currentColor" strokeWidth="0.8" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
              Filter
            </button>
            <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" stroke="currentColor" strokeWidth="0.8" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                <path fillRule="evenodd" stroke="currentColor" strokeWidth="0.8" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z" />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 h-fit rounded-xl m-1 mb-96">
          <table className="w-full  rounded-xl">
            <thead className="bg-[#f5f6fa] p-4 rounded-xl">
              <tr className="p-4">
                <td className="px-3 py-2">Name</td>
                <td className="px-3 py-2">Position</td>
                <td className="px-3 py-2">Work Type</td>
                <td className="px-3 py-2">Status</td>
                <td className="px-3 py-2">Late Duration</td>
                <td className="px-3 py-2">Notes</td>
                <td className="px-1 py-2 text-center">Action</td>
              </tr>
            </thead>
            <tbody>
              {dataPresent.slice(0, 6).map((data, index) => (

                <tr key={index}>
                  <td className="px-3 py-3">{data.name?.length !== undefined && data.name.length > 50 ? data.name.slice(0, 50) + "..." : data.name}</td>
                  <td className="px-3 py-3">{data.position}</td>
                  <td className="px-3 py-3">{data.workType}</td>
                  <td className="px-3 py-3 flex items-center">
                    <div className={`${stylingStatus(data.status)} w-3 h-3 mr-1 rounded-full text-transparent`} />
                    {data.status}
                  </td>
                  <td className="px-3 py-3">{data.status === "Absent" ? "-" : convertLateDuration(data.lateDuration)}</td>
                  <td className="px-3 py-3">{data.notes.length > 38 ? data.notes.slice(0, 38) + "..." : data.notes}</td>
                  <td className="px-1 py-3 flex justify-center items-center">
                    <button onClick={() => document.getElementById(`action-${index}`)?.classList.toggle('hidden')} className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                      <Dropdown ID={`action-${index}`} custom="right-4 top-2">
                        <div className="flex gap-2 flex-col p-2 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                          <Link href={""} className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-400 flex items-center justify-center rounded text-white text-sm">Details</Link>
                          <Link href={""} className="px-2.5 py-1.5 bg-green-600 hover:bg-green-400 flex items-center justify-center rounded text-white text-sm">Contact</Link>
                          <Link href={""} className="px-2.5 py-1.5 bg-red-500 hover:bg-red-400 flex items-center justify-center rounded text-white text-sm">Report</Link>
                          <Link href={""} className="px-2.5 py-1.5 bg-yellow-500 hover:bg-yellow-300 flex items-center justify-center rounded text-white text-sm">Dismiss</Link>
                        </div>
                      </Dropdown>
                    </button>
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