import { showcase } from "@/utils/getter-image";
import Image from "next/image";
const FeatEmployRequest = () => {
    return (
        <section className="text-center px-32 w-full">

            <div className="bg-white p-8 w-full rounded-2xl text-start border-2 border-slate-300">

                <div className="bg-[#edf0f7] p-2 w-full rounded-2xl ">

                    <div className="relative p-2 rounded-xl backdrop-blur-xl w-1/2 mx-auto">
                        <Image src={showcase.employRequest} alt={"Showcase Dashboard"} className="rounded-xl backdrop-blur-xl" />
                        <span className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-semibold">Instant Leave and Overtime Request</h2>
                        <p className="text-lg">
                            Leave requests, attendance corrections, reimbursement requests,
                            and pay slip distribution are automatically done in one application.
                            HRIS ensures employees needs are met and always connected to the company
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default FeatEmployRequest;