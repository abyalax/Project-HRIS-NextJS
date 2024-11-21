import Dropdown from "@/ui/drop-down";
import { dataAttendanceMonthly, dataAttendanceWeekly, dataAttendanceYearly } from "@/utils/dummy";
import { getMinValue } from "@/utils/utils";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Attendance = () => {

    const [minY, setMinY] = useState(0)
    const [title, setTitle] = useState("Weekly")
    const [data, setData] = useState(dataAttendanceWeekly)

    useEffect(() => {
        const min = getMinValue(data, "attendance");
        setMinY(min - 5);
    }, [data, minY]);

    const dataChartAttendance = {
        labels: data.map((data) => data.title),
        datasets: [
            {
                label: "Total Attendance: ",
                data: data.map((data) => data.attendance),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
            }
        ]
    }

    const configAttendance = {
        plugins: {
            title: { display: false, },
            legend: { display: false }
        },
        aspectRatio: 3 / 1,
        scales: {
            y: {
                beginAtZero: false, min: minY, ticks: { stepSize: 2 }
            },
            x: {
                ticks: {
                    font: {
                        size: 15,
                    },
                    maxRotation: 0,
                    minRotation: 0,
                },
            },
        }
    }

    return (
        <div className="border-2 bg-white border-slate-200 h-fit w-full rounded-lg mr-4 p-4">
              <div className="flex justify-between m-2">
                <p className="text-start text-lg">Attendance Statistic {title}</p>

                <div className="relative">
                  
                  <button onClick={() => document.getElementById("attendance")?.classList.toggle('hidden')} className="px-2 py-1 border-2 border-slate-200 rounded-lg flex justify-between items-center gap-8">
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>

                  <Dropdown ID="attendance" custom="top-8 -right-1">
                    <div className="flex gap-2 w-32 flex-col p-2 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                      <button onClick={() => { setData(dataAttendanceWeekly); setTitle("Weekly"); document.getElementById("attendance")?.classList.add('hidden') }} className="hover:bg-slate-300 px-1 py-0.5 rounded">Weekly</button>
                      <button onClick={() => { setData(dataAttendanceMonthly); setTitle("Monthly"); document.getElementById("attendance")?.classList.add('hidden') }} className="hover:bg-slate-300 px-1 py-0.5 rounded">Monthly</button>
                      <button onClick={() => { setData(dataAttendanceYearly); setTitle("Yearly"); document.getElementById("attendance")?.classList.add('hidden') }} className="hover:bg-slate-300 px-1 py-0.5 rounded">Yearly</button>
                    </div>
                  </Dropdown>
                </div>
              </div>
              <div className="h-fit">
                <Bar data={dataChartAttendance} options={configAttendance} />
              </div>
            </div>
    )
};

export default Attendance;