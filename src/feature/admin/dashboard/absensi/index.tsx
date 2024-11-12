import Link from "next/link";
import DashboardAdminLayouts from ".."
import { dataRequest } from "@/utils/dummy";
import { stylingStatus } from "@/utils/utils";

const AdminAbsensi = () => {
  return (
    <DashboardAdminLayouts>
      <div className="bg-white border-2 border-slate-200 h-fit rounded-lg m-1 w-4/6 mb-96">
        <div className="flex justify-between my-2">
          <h2 className="text-xl font-semibold mx-3">Requests</h2>
          <Link href={""} className="text-sm mx-3 font-semibold hover:text-blue-500">View All</Link>
        </div>
        <table className="w-full h-[50vh]">
          <thead className="bg-[#f5f6fa] p-4">
            <tr className="p-4">
              <td className="px-3 py-2">Name</td>
              <td className="px-3 py-2">Period</td>
              <td className="px-3 py-2">Type</td>
              <td className="px-3 py-2">Status</td>
              <td className="px-3 py-2">Date</td>
              <td className="px-3 py-2">Notes</td>
            </tr>
          </thead>
          <tbody>
            {dataRequest.slice(0, 6).map((data) => (
              <tr key={data.period.toString() + data.type}>
                <td className="px-3 py-2">{data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}</td>
                <td className="px-3 py-2">{data.period}</td>
                <td className="px-3 py-2">{data.type}</td>
                <td className="px-3 py-2 flex items-center">
                  <div className={`${stylingStatus(data.status)} w-3 h-3 mr-1 rounded-full text-transparent`} />
                  {data.status}
                </td>
                <td className="px-3 py-2">{data.date}</td>
                <td className="px-3 py-2">{data.notes.length > 14 ? data.notes.slice(0, 15) + "..." : data.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </DashboardAdminLayouts>
  )
};

export default AdminAbsensi;