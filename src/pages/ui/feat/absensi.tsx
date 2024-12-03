import { showcase } from "@/utils/getter-image";
import Image from "next/image";

const FeatAbsensi = () => {
    return (

        <section className="w-full ">

            <div className="min-h-[70vh] bg-white p-4 w-full rounded-2xl text-start flex flex-col gap-4 border-2 border-slate-300">
                <div>
                    <div className="p-2">
                        <p className="text-xl font-semibold text-blue-600 mb-2">Features</p>
                        <h2 className="text-2xl font-semibold">Attendance</h2>
                        <p className="text-lg my-1">
                            Manual attendance is often inaccurate and difficult to track.
                            Our Attendance feature records online attendance efficiently,
                            provides accurate attendance history and integrates with payroll.
                        </p>
                    </div>

                    <div className="relative p-2 rounded-xl backdrop-blur-xl">
                        <Image src={showcase.attendance} alt={"Showcase Dashboard"} className="rounded-xl backdrop-blur-xl" />
                        <span className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                    </div>
                </div>

            </div>
        </section>

    )
};

export default FeatAbsensi;