import Link from "next/link";
import DashboardAdminLayouts from "../layout";
import { dataEmployeeDayOff, dataEmployeeOnVacation, dataEmployeeSickLeave, dataEmployeeWFH, dataRequest } from "@/utils/dummy";
import CardEmploye from "@/ui/card-employee";
import { stylingStatus } from "@/utils/utils";
import Attendance from "../analysis/chart/attendance";

const AdminDashboard = () => {

    return (
        <DashboardAdminLayouts>
            <div className="w-full">


                <div className="w-full">
                    <div className="flex gap-4 justify-center">

                        <div className="w-1/2 h-28  m-1 py-4">
                            <Attendance />
                        </div>

                        <div className="flex flex-col ">
                            <div className="grid grid-cols-4 my-4 ">

                                <CardEmploye data={dataEmployeeWFH} title="Works From Home" />
                                <CardEmploye data={dataEmployeeOnVacation} title="On Vacation" />
                                <CardEmploye data={dataEmployeeDayOff} title="Day Off" />
                                <CardEmploye data={dataEmployeeSickLeave} title="Sick Leave" />

                            </div>
                            <div className="flex gap-4">

                                <div className="border-2 bg-white w-full border-slate-200 h-40 rounded-lg m-1 px-6 py-2">
                                    <h2 className="text-xl font-semibold">Today Information</h2>
                                    <div className="flex justify-between items-center">
                                        <p>Attendance Percentage</p>
                                        <h2 className="text-3xl font-semibold">94%</h2>
                                    </div>
                                    <div className="h-1/2">
                                        <div className="flex justify-between items-center">
                                            <p>Total Attendance</p>
                                            <p>58</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Total Arrived Late</p>
                                            <p>7</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Total Permissions</p>
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2 w-2/6">

                            <div className="border-2 bg-white border-slate-200 h-fit rounded-lg m-1 p-3 flex flex-col gap-4">
                                <div className="my-2">
                                    <h2>Event</h2>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-2">
                                    <div className="flex justify-between p-1 mb-4">
                                        <p>Weekly Meeting</p>
                                        <p>10.00 pm - 11.00 pm</p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="bg-orange-200 text-orange-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Meeting
                                        </div>
                                        <div className="bg-gray-200 text-gray-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Emplyee Issues
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-slate-200 rounded-lg p-2">
                                    <div className="flex justify-between p-1 mb-4">
                                        <p>Weekly Meeting</p>
                                        <p>10.00 pm - 11.00 pm</p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="bg-orange-200 text-orange-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Meeting
                                        </div>
                                        <div className="bg-gray-200 text-gray-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Emplyee Issues
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-slate-200 rounded-lg p-2">
                                    <div className="flex justify-between p-1 mb-4">
                                        <p>Weekly Meeting</p>
                                        <p>10.00 pm - 11.00 pm</p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="bg-orange-200 text-orange-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Meeting
                                        </div>
                                        <div className="bg-gray-200 text-gray-600 flex justify-center items-center px-3 py-1 rounded-lg w-fit text-sm">
                                            Emplyee Issues
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

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
                                            <td className="px-3 py-2">{data.name?.length !== undefined && data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}</td>
                                            <td className="px-3 py-2">{data.period}</td>
                                            <td className="px-3 py-2">{data.type}</td>
                                            <td className="px-3 py-2 flex items-center">
                                                <div className={`${stylingStatus(data.status)} w-3 h-3 mr-1 rounded-full text-transparent`} />
                                                {data.status}
                                            </td>
                                            <td className="px-3 py-2">{data.date}</td>
                                            <td className="px-3 py-2">{data.notes?.length !== undefined && data.notes.length > 14 ? data.notes.slice(0, 15) + "..." : data.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </div>
        </DashboardAdminLayouts>
    )
};

export default AdminDashboard;