import Link from "next/link";
import DashboardAdminLayouts from "../layout";
import { dataAttendanceMonthly, dataAttendanceWeekly, dataAttendanceYearly, dataEmployeeDayOff, dataEmployeeOnVacation, dataEmployeeSickLeave, dataEmployeeWFH, dataRequest } from "@/utils/dummy";
import { Bar } from "react-chartjs-2";
import CardEmploye from "@/ui/card-employee";
import { getMinValue, stylingStatus } from "@/utils/utils";
import { useEffect, useState } from "react";

const AdminDashboard = () => {

    const [dataAttendance, setDataAttendance] = useState(dataAttendanceWeekly)
    const [title, setTitle] = useState("")
    const [minY, setMinY] = useState<number>(0)

    useEffect(() => {
        const min = getMinValue(dataAttendance, "attendance");
        setMinY(min - 5);
    }, [dataAttendance, minY]);


    const chartData = {
        labels: dataAttendance.map((data) => data.title),
        datasets: [
            {
                label: "Total Attendance: ",
                data: dataAttendance.map((data) => data.attendance),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
            }
        ]
    }
    const configBar = {
        plugins: {
            title: { display: false, },
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: false, min: minY, ticks: { stepSize: 2 }
            }
        }
    }

    return (
        <DashboardAdminLayouts>
            <div className="w-full">


                <div className="w-full">
                    <div className="flex gap-4">

                        <div className="border-2 bg-white border-slate-200 h-fit w-1/2 rounded-lg m-1 p-2">
                            <p className="text-center">Attendance Statistics {title ? title : "Weekly"}</p>
                            <div className="h-[40vh]">
                                <Bar data={chartData} options={configBar} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-4 mt-6 mb-8 h-28 ">

                                <CardEmploye data={dataEmployeeWFH} title="Works From Home" />
                                <CardEmploye data={dataEmployeeOnVacation} title="On Vacation" />
                                <CardEmploye data={dataEmployeeDayOff} title="Day Off" />
                                <CardEmploye data={dataEmployeeSickLeave} title="Sick Leave" />

                            </div>
                            <div className="flex gap-4">

                                <div className="w-1/5 bg-white rounded-lg border-2 border-slate-200 p-3 text-white">
                                    <p className="text-center text-gray-700 font-semibold text-lg">Filter</p>
                                    <button className="py-1 w-full rounded-md bg-green-500 my-1" onClick={() => { setDataAttendance(dataAttendanceWeekly); setTitle("Weekly") }}>Weekly</button>
                                    <button className="py-1 w-full rounded-md bg-blue-500 my-1" onClick={() => { setDataAttendance(dataAttendanceMonthly); setTitle("Monthly") }}>Monthly</button>
                                    <button className="py-1 w-full rounded-md bg-yellow-500 my-1" onClick={() => { setDataAttendance(dataAttendanceYearly); setTitle("Yearly") }}>Year</button>
                                </div>

                                <div className="border-2 bg-white w-4/5 border-slate-200 h-40 rounded-lg m-1 px-6 py-2">
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