import { useState } from "react";
import DashboardKaryawanLayouts from "../layout";
import { useSession } from "next-auth/react";

const KaryawanPresence = () => {

    const [open, setOpen] = useState(false);

    const { data } = useSession()

    return (
        <DashboardKaryawanLayouts>
            {open && (
                <section className="bg-black/50 fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">

                    <form className="bg-white rounded-lg p-4 flex flex-col gap-2 min-w-96">
                        <h2 className="font-semibold text-lg mb-2">Create Absence</h2>
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" placeholder="Your Name" defaultValue={data?.user.name} className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                        <label htmlFor="type">Type</label>
                        <input name="type" type="text" placeholder="Type of absence" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                        <label htmlFor="reason">Reason</label>
                        <input name="reason" type="text" placeholder="Reason for absence" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none focus:outline-none" />
                        <div className="flex justify-between my-2">
                            <button className="px-4 py-2 w-fit rounded-lg bg-blue-500 text-white font-semibold">Submit</button>
                            <button onClick={() => setOpen(false)} className="px-4 py-2 w-fit font-semibold">Cancel</button>
                        </div>
                    </form>
                </section>
            )}
            <main className="flex flex-col gap-8">

                <div className="flex gap-4 w-full justify-between">
                    <div className="text-gray-700">
                        <p className="">Sunday, 24 May 2023</p>
                        <h1 className="text-xl font-semibold mt-4">Good Morning, John Doe</h1>
                        <p className="">{"Cheers, John! Today is a new opportunity"}</p>
                    </div>
                    <div>
                        <div className="flex gap-4 items-end mt-4">
                            <h2 className=" text-slate-600">Work Starts In </h2>
                            <h2 className="text-3xl font-semibold">00:03:02</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="text-2xl font-semibold">Your entry schedule today is 09.00 AM</h2>
                    <p>You haven{"'"}t checked in yet. Let{"'"}s Check In Today</p>
                    <button className="px-4 py-2 w-fit rounded-lg text-lg bg-blue-500 text-white">Check In</button>
                    <p className="">Check in before 09.00 AM</p>
                    <p>Are you unable to attend work today? Confirm your absence <button onClick={() => setOpen(true)} className="text-blue-500 font-semibold">here</button></p>
                </div>

            </main>
            <section className="p-2">
                <h2 className="my-2 text-lg font-semibold ">History Attendance</h2>
                <div className="bg-white border-2 border-slate-200 h-fit rounded-xl mb-96">
                    <table className="w-full rounded-xl overflow-hidden">
                        <thead className="bg-[#f5f6fa] p-4 rounded-xl">
                            <tr className="p-4">
                                <td className="px-3 py-2">Date</td>
                                <td className="px-3 py-2">Type</td>
                                <td className="px-3 py-2">Status</td>
                                <td className="px-3 py-2">Duration</td>
                                <td className="px-3 py-2">Notes</td>
                                <td className="px-1 py-2 text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-3">2024-11-20</td>
                                <td className="px-3 py-3">Check-In</td>
                                <td className="px-3 py-3">Present</td>
                                <td className="px-3 py-3">08:00 AM - 05:00 PM</td>
                                <td className="px-3 py-3">-</td>
                                <td className="px-1 py-3 flex justify-center items-center">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-3">2024-11-19</td>
                                <td className="px-3 py-3">Leave</td>
                                <td className="px-3 py-3">Absent</td>
                                <td className="px-3 py-3">-</td>
                                <td className="px-3 py-3">Sick Leave</td>
                                <td className="px-1 py-3 flex justify-center items-center">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-3">2024-11-18</td>
                                <td className="px-3 py-3">Check-In</td>
                                <td className="px-3 py-3">Late</td>
                                <td className="px-3 py-3">09:30 AM - 05:00 PM</td>
                                <td className="px-3 py-3">Late by 30 minutes</td>
                                <td className="px-1 py-3 flex justify-center items-center">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-3">2024-11-17</td>
                                <td className="px-3 py-3">Check-In</td>
                                <td className="px-3 py-3">Present</td>
                                <td className="px-3 py-3">08:00 AM - 05:00 PM</td>
                                <td className="px-3 py-3">-</td>
                                <td className="px-1 py-3 flex justify-center items-center">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 py-3">2024-11-16</td>
                                <td className="px-3 py-3">Leave</td>
                                <td className="px-3 py-3">Absent</td>
                                <td className="px-3 py-3">-</td>
                                <td className="px-3 py-3">Personal Leave</td>
                                <td className="px-1 py-3 flex justify-center items-center">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </section>
        </DashboardKaryawanLayouts>
    )
};

export default KaryawanPresence;