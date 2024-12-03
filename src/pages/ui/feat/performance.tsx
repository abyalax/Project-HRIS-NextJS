import { showcase } from "@/utils/getter-image";
import Image from "next/image";


const FeatPerformance = () => {
    return (
        <section className="w-full ">

            <div className="min-h-[70vh] bg-white p-4 w-full rounded-2xl text-start flex flex-col gap-4 border-2 border-slate-300">

                <div className="p-2">
                    <p className="text-xl font-semibold text-blue-600 mb-2">Features</p>
                    <h2 className="text-2xl font-semibold">Performance</h2>
                    <p className="text-lg my-1">
                        Assess employee performance without complicated methods with GreatDay HR{"'"}s Performance feature.
                        Complete with various types of KPI metrics and rounding calculations,
                        employee progress history, and 360-degree reviews.
                    </p>
                </div>

                <div className="relative p-2 rounded-xl backdrop-blur-xl">
                    <Image src={showcase.attendance} alt={"Showcase Dashboard"} className="rounded-xl backdrop-blur-xl" />
                    <span className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>

            </div>
        </section>
    )
};

export default FeatPerformance;