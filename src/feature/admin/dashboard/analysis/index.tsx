import { Bar } from "react-chartjs-2";
import DashboardAdminLayouts from "../layout"
import { dataAttendanceMonthly, dataAttendanceWeekly, dataAttendanceYearly, dataTotalEmployeeByDepartement } from "@/utils/dummy";
import { useEffect, useState } from "react";
import { getMinValue } from "@/utils/utils";

const AdminAnalytics = () => {
  const [minY, setMinY] = useState(0)
  const [data, setData] = useState(dataAttendanceWeekly)
  const [title, setTitle] = useState("Weekly")

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
        label: "Total Headcount ",
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
      legend: { display: false, },
      labels: { font: { size: 14 }, },
    },
    aspectRatio: 4 / 1,
    scales: {
      y: {
        beginAtZero: false, min: getMinValue(dataTotalEmployeeByDepartement, "total") - 2, ticks: { stepSize: 2 }
      }
    }
  }

  return (
    <DashboardAdminLayouts>
      <main className="mb-96">

        <div className="border-2 bg-white border-slate-200 h-fit w-full rounded-lg my-4 mr-4 p-2">
          <p className="text-lg my-2 mx-4 font-semibold">Headcount by Department</p>
          <div className="h-[40vh] w-full">
            <Bar data={dataChartHeadCount} options={configHeadCount} />
          </div>
        </div>

        <div className="w-1/2">
          <div className="border-2 bg-white border-slate-200 h-fit w-full rounded-lg mr-4 p-2">
            <p className="text-center">Attendance Statistics {title}</p>
            <div className="h-[40vh]">
              <Bar data={dataChartAttendance} options={configAttendance} />
            </div>
          </div>


          <div className=" bg-white rounded-lg border-2 border-slate-200 p-3 text-white">
            <p className="text-gray-700 font-semibold text-lg">Attendance : 70</p>
            <div className="flex gap-4 items-center">
              <p className="text-gray-700 font-semibold text-lg">Filter :</p>
              <button className="py-1 px-4 rounded-md bg-green-500 hover:bg-green-600 my-1" onClick={() => { setData(dataAttendanceWeekly); setTitle("Weekly") }}>Weekly</button>
              <button className="py-1 px-4 rounded-md bg-blue-500 hover:bg-blue-600 my-1" onClick={() => { setData(dataAttendanceMonthly); setTitle("Monthly") }}>Monthly</button>
              <button className="py-1 px-4 rounded-md bg-yellow-500 hover:bg-yellow-600 my-1" onClick={() => { setData(dataAttendanceYearly); setTitle("Yearly") }}>Year</button>
            </div>
          </div>

        </div>

      </main>
    </DashboardAdminLayouts>
  )
};

export default AdminAnalytics;