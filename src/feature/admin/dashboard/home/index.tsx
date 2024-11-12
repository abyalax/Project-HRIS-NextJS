import Link from "next/link";
import DashboardAdminLayouts from "..";
import { dataAttendanceWeekly, dataRequest, employeeDayOff, employeeOnVacation, employeeSickLeave, employeeWFH } from "@/utils/dummy";
import { Bar } from "react-chartjs-2";
import CardEmploye from "@/ui/card-employee";
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js/auto";
import { stylingStatus } from "@/utils/utils";
import { imageAdmin } from "@/utils/getter-image";
import Image from "next/image";

Chart.register(CategoryScale);

const AdminDashboard = () => {

    const chartData = {
        labels: dataAttendanceWeekly.map((data) => data.day),
        datasets: [
            {
                label: "Total Attendance: ",
                data: dataAttendanceWeekly.map((data) => data.attendance),
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
                beginAtZero: false, min: 45, ticks: { stepSize: 2 }
            }
        }
    }

    return (
        <DashboardAdminLayouts>


            <div className="w-full">

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Login as Admin</h2>
                    <div className="border-2 bg-white border-slate-200 h-12 p-2 w-1/4 my-2 rounded-lg">
                <p>pencarian</p>
            </div>
                    <div className="h-14 w-1/4 my-2 rounded-lg p-2 flex gap-4 justify-center item-center">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-fill mt-4" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg>
                            <span className="absolute top-4  z-10 right-0 h-2 w-2 rounded-full bg-red-500 ">.</span>
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell-fill mt-4" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                            <span className="absolute top-4  z-10 right-0 h-2 w-2 rounded-full bg-red-500 ">.</span>
                        </div>
                        <Image src={imageAdmin} alt="admin" width={50} height={50} className="w-14 h-14 object-cover rounded-full border-2 border-white" />
                        <div className="">
                            <p className="text-lg">Admin HRD</p>
                            <p className="text-sm">adminhr@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="h-15 w-full my-2 flex gap-4 text-nowrap text-black">
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Marketing</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Finance</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Bisnis Inteligence</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Sales Departemen</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Research & Development</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Customer Services</p>
                    <p className="py-3 px-2 bg-gray-400 rounded-lg">Informatics</p>
                </div>


                <div className="w-full">

                    <div className="flex gap-4">

                        <div className="border-2 bg-white border-slate-200 h-fit w-1/2 rounded-lg m-1 p-2">
                            <p className="text-center">Attendance Statistics weekly</p>
                            <div className="h-[40vh]">
                                <Bar data={chartData} options={configBar} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-4 mt-6 mb-8 h-28 ">

                                <CardEmploye data={employeeWFH} title="Works From Home" />
                                <CardEmploye data={employeeOnVacation} title="On Vacation" />
                                <CardEmploye data={employeeDayOff} title="Day Off" />
                                <CardEmploye data={employeeSickLeave} title="Sick Leave" />

                            </div>
                            <div className="flex gap-4">

                                <div className="w-1/5 bg-white rounded-lg border-2 border-slate-200 p-3 text-white">
                                    <p className="text-center text-gray-700 font-semibold text-lg">Filter</p>
                                    <button className="py-1 w-full rounded-md bg-green-500 my-1">Weekly</button>
                                    <button className="py-1 w-full rounded-md bg-blue-500 my-1">Monthly</button>
                                    <button className="py-1 w-full rounded-md bg-yellow-500 my-1">Year</button>
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
                                            <p>Total arrived late</p>
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

                    </div>
                </div>


            </div>
        </DashboardAdminLayouts>
    )
};

export default AdminDashboard;