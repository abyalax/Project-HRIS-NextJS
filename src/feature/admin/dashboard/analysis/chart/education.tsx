import { dataEmployeeEducation } from "@/utils/dummy";
import { ChartData, ChartOptions } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const Education = () => {

    const dataChart: ChartData<"pie", number[], string> = {
        labels: dataEmployeeEducation.map((data) => data.category),
        datasets: [
            {
                label: "Employee by Education",
                data: dataEmployeeEducation.map((data) => data.total),
                backgroundColor: [
                    "rgba(75,192,192,1)",   // Biru muda
                    "#FFC300",               // Kuning cerah
                    "#900C3F",               // Merah tua
                    "#FF5733",               // Merah terang
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
                text: "Employee by Education",
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
        <div className="border-2 bg-white border-slate-200 flex justify-center items-center rounded-lg my-4 mr-4">
            <Pie data={dataChart} options={configChart} />
        </div>
    )
};

export default Education;