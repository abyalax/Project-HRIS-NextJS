import Link from "next/link";
import DashboardKaryawanLayouts from "../layout";
import { dataEmployeeAttendanceMontly, dataEmployeeAttendanceYearly } from "@/utils/dummy";
import { ChartData, ChartOptions } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Dropdown from "@/ui/drop-down";
import { useState } from "react";

const KaryawanDashboard = () => {
    const [title, setTitle] = useState("Change Range")
    const [data, setData] = useState(dataEmployeeAttendanceMontly)

    const dataChart: ChartData<"pie", number[], string> = {
        labels: data.map((data) => data.category),
        datasets: [
            {
                label: " Jumlah",
                data: data.map((data) => data.total),
                backgroundColor: [
                    "rgba(34, 193, 195, 1)",  // Hijau terang - Hadir
                    "rgba(255, 165, 0, 1)",    // Oranye - Terlambat
                    "rgba(255, 0, 0, 1)",      // Merah - Tidak Hadir
                    "rgba(0, 191, 255, 1)",    // Biru terang - Cuti/Izin
                ],
                hoverOffset: 4,
            },
        ],
    };

    const configChart: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${title === "Change Range" ? "Monthly" : title} Attendance Percentage`,
                font: {
                    size: 18,
                },
            },
            legend: {
                display: true,
                position: "bottom",
            },
            datalabels: {
                color: "#fff", // Warna teks
                font: {
                    weight: "bold",
                    size: 14, // Ukuran teks
                },
                formatter: (value: number, context) => {
                    const total = (context.dataset.data as number[]).reduce(
                        (sum, current) => sum + (current ?? 0),
                        0
                    );
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${percentage}%`;
                },

            },
        },
        aspectRatio: 1,
    };

    return (
        <DashboardKaryawanLayouts>
            <section className="flex flex-col gap-4 text-gray-700 pt-6">
                <header className="flex gap-4">
                    <div className="bg-white rounded-lg w-1/3 p-3">
                        <h2 className="text-lg font-semibold">Today Information</h2>
                        <div className="flex w-full justify-between">
                            <p>Status</p>
                            <p>Attended</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p>Work Duration</p>
                            <p>08.00 - 17.00</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p>Notes</p>
                            <p>You Are Late</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-1/3 p-3">
                        <h2 className="text-3xl font-semibold text-center">09:45:00</h2>
                        <div className="flex w-full justify-between">
                            <p>Check In</p>
                            <p>08.15 AM</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p>Check Out</p>
                            <p>05.00 PM</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-1/3 p-3">
                        <h2 className="text-lg font-semibold">Today{"'"}s attendance.</h2>
                        <p>You have checked in at 08.15 AM</p>
                        <p>See the attendance history <Link href={"/karyawan/presence"} className="text-blue-500 font-semibold">here</Link></p>
                    </div>
                </header>
                <main className="w-full flex gap-4">

                    <div className="bg-white rounded-lg w-2/3 p-4">
                        <h2 className="text-xl font-semibold mb-2">Agenda Meeting</h2>
                        <div className="flex justify-between pb-2 mb-2 border-b-2 border-slate-300">
                            <div>
                                <h2 className="font-semibold">Team Sync: Weekly Standup</h2>
                                <p className="text-sm my-1">Monday, November 22, 2024</p>
                                <p className="text-sm">Meeting Room A1</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-sm">10:00 AM - 11:00 AM</p>
                                <span className="px-3 py-1 w-fit rounded-lg bg-green-500 text-xs text-white">On Going</span>
                            </div>
                        </div>

                        <div className="flex justify-between pb-2 mb-2 border-b-2 border-slate-300">
                            <div>
                                <h2 className="font-semibold">Project Discussion: Feature X</h2>
                                <p className="text-sm my-1">Tuesday, November 23, 2024</p>
                                <p className="text-sm">Zoom Link: [link]</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-sm">2:00 PM - 3:00 PM</p>
                                <span className="px-3 py-1 w-fit rounded-lg bg-blue-500 text-xs text-white">Scheduled</span>
                            </div>
                        </div>

                        <div className="flex justify-between pb-2 mb-2 border-b-2 border-slate-300">
                            <div>
                                <h2 className="font-semibold">Client Meeting: Project Demo</h2>
                                <p className="text-sm my-1">Wednesday, November 24, 2024</p>
                                <p className="text-sm">Meeting Room B2</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-sm">9:00 AM - 10:00 AM</p>
                                <span className="px-3 py-1 w-fit rounded-lg bg-gray-500 text-xs text-white">Completed</span>
                            </div>
                        </div>

                        <div className="flex justify-between pb-2 mb-2 border-b-2 border-slate-300">
                            <div>
                                <h2 className="font-semibold">Design Review: New UI</h2>
                                <p className="text-sm my-1">Thursday, November 25, 2024</p>
                                <p className="text-sm">Meeting Room C3</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-sm">4:00 PM - 5:00 PM</p>
                                <span className="px-3 py-1 w-fit rounded-lg bg-blue-500 text-xs text-white">Scheduled</span>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white rounded-lg w-1/3 p-3">
                        <div className="w-full flex justify-end">
                            <div className="relative">

                                <button onClick={() => document.getElementById("attendance")?.classList.toggle('hidden')} className="px-2 py-1 w-48 border-2 border-slate-200 rounded-lg flex justify-between items-center gap-8">
                                    {title} 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </button>

                                <Dropdown ID="attendance" custom="top-8 right-0">
                                    <div className="flex gap-2 w-48 flex-col p-1 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                                        <button onClick={() => { setData(dataEmployeeAttendanceMontly); setTitle("Monthly"); document.getElementById("attendance")?.classList.add('hidden') }} className="hover:bg-slate-300 w-full py-0.5 mx-auto rounded">Monthly</button>
                                        <button onClick={() => { setData(dataEmployeeAttendanceYearly); setTitle("Yearly"); document.getElementById("attendance")?.classList.add('hidden') }} className="hover:bg-slate-300 w-full py-0.5 mx-auto rounded">Yearly</button>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <Pie data={dataChart} options={configChart} />
                        </div>
                    </div>
                </main>
            </section>

        </DashboardKaryawanLayouts>
    )
};

export default KaryawanDashboard;