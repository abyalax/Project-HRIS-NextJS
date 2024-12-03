import { showcase } from "@/utils/getter-image";
import Image from "next/image";

const FeatRequest = () => {
    return (
        <section className="w-full ">

            <div className="min-h-[70vh] bg-white p-4 w-full rounded-2xl text-start flex flex-col gap-4 border-2 border-slate-300">

                <div className="p-2">
                    <p className="text-xl font-semibold text-blue-600 mb-2">Features</p>
                    <h2 className="text-2xl font-semibold">Leave and Overtime</h2>
                    <p className="text-lg my-1">
                        Manual leave and overtime requests can be time-consuming and confusing.
                        This feature enables efficient submission with flexible types,
                        providing self-monitored submission history and status.
                    </p>
                </div>

                <div className="relative p-2 rounded-xl backdrop-blur-xl">
                    <Image src={showcase.request} alt={"Showcase Dashboard"} className="rounded-xl backdrop-blur-xl " />
                    <span className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>

            </div>
        </section>
    )
};

export default FeatRequest;