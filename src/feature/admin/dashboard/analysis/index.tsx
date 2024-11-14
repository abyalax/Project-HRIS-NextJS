import { Bar } from "react-chartjs-2";
import DashboardAdminLayouts from "../layout"
import { dataAttendanceMonthly, dataAttendanceWeekly, dataAttendanceYearly, dataTotalEmployeeByDepartement } from "@/utils/dummy";
import { useEffect, useState } from "react";
import { getMinValue } from "@/utils/utils";

const AdminAnalytics = () => {
  const [minY, setMinY] = useState(0)
  const [data, setData] = useState(dataAttendanceWeekly)
  const [title, setTitle] = useState("")

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
    scales: {
      y: {
        beginAtZero: false, min: minY, ticks: { stepSize: 2 }
      }
    }
  }
  const dataChartHeadCount = {
    labels: dataTotalEmployeeByDepartement.map((data) => data.title),
    datasets: [
      {
        label: "Total Headcount: ",
        data: dataTotalEmployeeByDepartement.map((data) => data.total),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      }
    ]
  }
  const configHeadCount = {
    plugins: {
      title: { display: false, },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: false, min: getMinValue(dataTotalEmployeeByDepartement, "total") - 2, ticks: { stepSize: 2 }
      }
    }
  }

  return (
    <DashboardAdminLayouts>
      <main>

        <div className="flex gap-5">
          <div className="border-2 bg-white border-slate-200 h-fit w-1/2 rounded-lg my-4 mr-4 p-2">
            <p className="text-center">Attendance Statistics {title}</p>
            <div className="h-[40vh]">
              <Bar data={dataChartAttendance} options={configAttendance} />
            </div>
          </div>

          <div className="w-1/5 bg-white rounded-lg border-2 border-slate-200 p-3 text-white">
            <p className="text-center text-gray-700 font-semibold text-lg">Filter</p>
            <button className="py-1 w-full rounded-md bg-green-500 my-1" onClick={() => { setData(dataAttendanceWeekly); setTitle("Weekly") }}>Weekly</button>
            <button className="py-1 w-full rounded-md bg-blue-500 my-1" onClick={() => { setData(dataAttendanceMonthly); setTitle("Monthly") }}>Monthly</button>
            <button className="py-1 w-full rounded-md bg-yellow-500 my-1" onClick={() => { setData(dataAttendanceYearly); setTitle("Yearly") }}>Year</button>
          </div>
        </div>

        <div className="border-2 bg-white border-slate-200 h-fit w-full rounded-lg my-4 mr-4 p-2">
          <p className="text-center">Headcount by Department</p>
          <div className="h-[40vh] w-full">
            <Bar data={dataChartHeadCount} options={configHeadCount} />
          </div>
        </div>

      </main>
    </DashboardAdminLayouts>
  )
};

export default AdminAnalytics;