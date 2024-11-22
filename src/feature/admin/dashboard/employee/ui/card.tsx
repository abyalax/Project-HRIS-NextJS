import Image from "next/image";
import { imageAdmin } from "@/utils/getter-image";


const CardEmploye = () => {
    return (
        <div className="bg-white rounded-xl p-2 shadow-xl">
            <div className="p-2">
                <div className="flex gap-4 justify-start p-2">
                    <Image src={imageAdmin} alt="admin" width={200} height={200} className="w-20 h-20 object-cover rounded-full" />
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold">Bessie Cooper</h2>
                        <p className="text-xs">Project Manager</p>
                        <span className="px-3 py-1 w-fit rounded-lg bg-green-500 text-xs text-white">Aktif</span>
                    </div>
                    <button className="cursor-pointer pt-1 flex justify-start items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </button>
                </div>
                <div className="border-2 border-slate-200 bg-[#e4e9f4] rounded-lg p-2 mt-2">
                    <div className="flex justify-between py-2 border-b-2 border-slate-300">
                        <div className="text-sm mb-2">
                            <p className="font-semibold">Departemen</p>
                            <p className="text-xs">Marketing</p>
                        </div>
                        <div className="text-sm mb-2">
                            <p className="font-semibold">Hired Date</p>
                            <p className="text-xs">01/01/2023</p>
                        </div>
                    </div>
                    <div className="py-2 text-sm">
                        <div className="flex gap-2 items-center my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg>
                            <p className="font-semibold cursor-pointer">
                                Handikanr@gmail.com
                            </p>
                        </div>
                        <div className="flex gap-2 items-center my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-inbound" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <p className="cursor-pointer">087765290292</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardEmploye;