import Dropdown from "@/ui/drop-down";
import { dataTotalEmployeeByDepartement } from "@/utils/dummy";
import { getMinValue } from "@/utils/utils";
import { Bar } from "react-chartjs-2";

const Headcount = () => {
    const labels = dataTotalEmployeeByDepartement.map((data) => data.title.length > 18 ? data.title.split(' ').join('\n') + "..." : data.title)
  console.log(labels);

    const dataChart = {
        labels: dataTotalEmployeeByDepartement.map((data) => data.title.length > 18 ? data.title.slice(0, 18) + "..." : data.title),
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
    const configChart = {
        plugins: {
            title: { display: false },
            legend: { display: false },
            datalabels: {
                display: false,  // Menonaktifkan tampilan label data
            },
        },
        aspectRatio: 4 / 1,
        scales: {
            y: {
                beginAtZero: false,
                min: getMinValue(dataTotalEmployeeByDepartement, "total") - 2,
                ticks: { stepSize: 2 },
            },
            x: {
                ticks: {
                    font: {
                        size: 16,
                    },
                    maxRotation: 0,
                    minRotation: 0,
                },
            },
        },
    };

    return (
        <div className="border-2 bg-white border-slate-200 h-fit w-full rounded-lg my-4 mr-4 p-2">
            <div className="flex justify-between m-2">
                <p className="text-start text-lg">Headcount by Department</p>

                <div className="relative">
                    <button onClick={() => document.getElementById("department")?.classList.toggle('hidden')} className="px-2 py-1 border-2 border-slate-200 rounded-lg flex justify-between items-center gap-8">
                        All Department
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                    
                    <Dropdown ID="department" custom="top-8 -right-1">
                        <div className="flex gap-2 w-44 flex-col p-2 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                            <button className="hover:bg-slate-300 px-1 py-0.5 rounded">All Department</button>
                            <button className="hover:bg-slate-300 px-1 py-0.5 rounded">Revenue Teams</button>
                            <button className="hover:bg-slate-300 px-1 py-0.5 rounded">Support Teams</button>
                            <button className="hover:bg-slate-300 px-1 py-0.5 rounded">Strategic Teams</button>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div className="h-fit w-full">
                <Bar data={dataChart} options={configChart} />
            </div>
        </div>
    )
};

export default Headcount;