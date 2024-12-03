import { showcase } from "@/utils/getter-image";
import Image from "next/image";

const FeatPayroll = () => {
    return (
        <section className="text-center px-32 w-full">

            <div className="bg-white p-4 w-full rounded-2xl text-start flex gap-4 border-2 border-slate-300">

                <div className="p-8">
                    <p className="text-xl font-semibold text-blue-600 mb-2">Features</p>
                    <h2 className="text-2xl font-semibold">Payroll</h2>
                    <p className="text-lg">
                        Without an automated Payroll system, salary calculation can be time-consuming and error-prone.
                        With this feature, salaries are automatically calculated, complete components,
                        multibank distribution, and digital slips,
                        overcoming the difficulties of manual payroll.
                    </p>
                </div>

                <div className="relative p-2 rounded-xl backdrop-blur-xl">
                    <Image src={showcase.dashboard} alt={"Showcase Dashboard"} className="rounded-xl backdrop-blur-xl" />
                    <span className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
            </div>
        </section>
    )
};

export default FeatPayroll;