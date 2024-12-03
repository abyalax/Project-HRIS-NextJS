import { showcase } from "@/utils/getter-image";
import Image from "next/image";

const FeatAfterSales = () => {
    return (
        <section className="text-center px-32 w-full">
            <h2 className="text-3xl font-semibold">Efficient Human Resource Information System</h2>
            <p className="text-2xl font-semibold mt-3 mb-6">for Management</p>

            <div className="bg-white p-4 w-full rounded-2xl text-start flex gap-4 my-10 drop-shadow-blue">

                <div className="p-8">
                    <p className="text-xl font-semibold text-blue-600 mb-2">Features</p>
                    <h2 className="text-2xl font-semibold">Best After Sales Process</h2>
                    <p className="text-lg">
                        Manual HR systems often lack support after implementation.
                        I provide free implementation training and support and monthly training,
                        as well as access to comprehensive tutorials to ensure full support
                        and ease the transition to an automated system.
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

export default FeatAfterSales;