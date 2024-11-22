import { useSession } from "next-auth/react";
import DashboardKaryawanLayouts from "../layout";
import { stylingStatus } from "@/utils/utils";
import { dataRequestPribadi } from "@/utils/dummy";

const KaryawanRequests = () => {

    const { data } = useSession()
    const status = "Pending"

    return (
        <DashboardKaryawanLayouts>

            <div className="grid grid-cols-2 my-4">
                <h2 className="text-2xl font-semibold">Requests</h2>
                <h2 className="text-2xl font-semibold">Progress Requests</h2>
            </div>

            <main className="flex justify-between gap-8">
                <form className="w-1/2 flex flex-col gap-2 text-gray-500 border-r-2 border-slate-300 pr-4">
                    <label htmlFor="name">Request Name</label>
                    <input name="name" type="text" placeholder="Request Name" defaultValue={data?.user.name} className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />

                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" placeholder="Type" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />

                    <label htmlFor="reason">Reason</label>
                    <textarea name="reason" placeholder="Reason" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-3 my-2">
                            <p className="text-gray-500">Periode</p>
                            <div>
                                <label htmlFor="start" className="mr-2 text-gray-500">Start</label>
                                <input name="start" type="date" placeholder="" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="end" className="mr-3 text-gray-500">End</label>
                                <input name="end" type="date" placeholder="" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 my-2 p-2">
                            <label htmlFor="document">Documents</label>
                            <input name="document" type="file" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                            <p className="text-sm">*Optional</p>
                            <p className="text-sm">Dokumen dapat berupa surat izin, cuti, dll</p>
                        </div>
                    </div>

                    <button className="px-4 py-2 text-lg rounded-lg bg-blue-500 text-white w-fit">Submit</button>

                </form>
                <div className="w-1/2">
                    <div className="p-2 bg-white rounded-lg">
                        {dataRequestPribadi.map((data, index) => (
                            <div key={index} className="p-1 border-b-2 border-slate-300 my-6 flex justify-between">
                                <div>
                                    <p className="font-semibold">{data.name}</p>
                                    <p>{data.dateRange}</p>
                                    <p>{data.reason}</p>
                                </div>
                                <div className="text-end">
                                    <p>{data.submissionDate}</p>
                                    <span className={`px-2 py-1 rounded-lg text-white ${stylingStatus(data.status)}`}>{data.status}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>
        </DashboardKaryawanLayouts>
    )
};

export default KaryawanRequests;