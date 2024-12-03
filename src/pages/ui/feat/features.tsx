import { useSession } from "next-auth/react";

const Features = () => {

    const { status } = useSession();

    return (
        <section id="features" className="mt-10 w-full px-20">
            <h3 className="text-3xl font-bold">Manage Operational</h3>
            {status === "authenticated" ? (
                <div className="flex gap-6 justify-center items-start mt-6">

                    <div className="bg-white p-4 rounded-lg shadow w-1/2">
                        <div className="flex items-center gap-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <h4 className="font-semibold">Employee</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">
                            <h2 className="font-semibold">Quick Summary</h2>
                            <div className="flex justify-between p-1">
                                <p>Remote Work</p>
                                <p>7</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>New Hires</p>
                                <p>1</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Pending Aproval</p>
                                <p>1</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Total Sick Leave</p>
                                <p>3</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Total Employee</p>
                                <p>55</p>
                            </div>
                            <h2 className="font-semibold">Employee Requests</h2>
                            <div className="flex justify-between p-1">
                                <p>Work leave</p>
                                <p>2</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Remote Work </p>
                                <p>5</p>
                            </div>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Manage Employee</button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow w-4/5">
                        <div className="flex gap-3 items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg>
                            <h4 className="font-semibold">Payroll Summary</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">

                            <h2 className="font-semibold">Summary</h2>
                            <div className="flex justify-between p-1">
                                <p>Current Month</p>
                                <p>Rp 199.230.000,00</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Last Month</p>
                                <p>Rp 187.400.000,00</p>
                            </div>

                            <h2 className="font-semibold">Overtime Hours</h2>
                            <div className="flex justify-between p-1">
                                <p>This Month</p>
                                <p>45 Hours</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Last Motnh </p>
                                <p>37 Hours</p>
                            </div>

                            <h2 className="font-semibold">Pending Payroll Issue</h2>
                            <div className="flex justify-between p-1">
                                <p>Emily Brown</p>
                                <p>Missing Bank Details</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Michael Green </p>
                                <p>Overtime has not been approved</p>
                            </div>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Manage Payroll</button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow w-4/5">
                        <div className="flex gap-3 items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data" viewBox="0 0 16 16">
                                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
                            </svg>
                            <h4 className="font-semibold">Report</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">
                            <h2 className="font-semibold">Key Performance Indicator</h2>
                            <div className="flex justify-between p-1">
                                <p>Average Absence</p>
                                <p>2 days/month</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Complaints</p>
                                <p>3 Case this Month</p>
                            </div>

                            <h2 className="font-semibold">Monthly Trends</h2>
                            <div className="flex justify-between p-1">
                                <p>WFH</p>
                                <p>Increasing by 2%</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>On Site </p>
                                <p>Stable</p>
                            </div>

                            <h2 className="font-semibold">Department Highlights</h2>

                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr className="text-nowrap">
                                        <td className="px-2 py-1">IT</td>
                                        <td className="px-2 py-1 text-green-500 font-semibold">High Perform</td>
                                        <td className="px-2 py-1">Delivere key projects on Time</td>
                                    </tr>
                                    <tr className="text-nowrap">
                                        <td className="px-2 py-1">Sales</td>
                                        <td className="px-2 py-1 text-red-500 font-semibold">Low Perform</td>
                                        <td className="px-2 py-1">Missed target 10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Analyze Report</button>
                    </div>

                </div>
            ) : (
                <div className="flex gap-6 justify-center items-start mt-6">

                    <div className="bg-white p-4 rounded-lg shadow w-1/2">
                        <div className="flex items-center gap-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <h4 className="font-semibold">Employee</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">
                            <h2 className="font-semibold">Quick Summary</h2>
                            <div className="flex justify-between p-1">
                                <p>Remote Work</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>New Hires</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Pending Aproval</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Total Sick Leave</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Total Employee</p>
                            </div>
                            <h2 className="font-semibold">Employee Requests</h2>
                            <div className="flex justify-between p-1">
                                <p>Work leave</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Remote Work </p>
                            </div>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Manage Employee</button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow w-4/5">
                        <div className="flex gap-3 items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg>
                            <h4 className="font-semibold">Payroll Summary</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">

                            <h2 className="font-semibold">Summary</h2>
                            <div className="flex justify-between p-1">
                                <p>Current Month</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Last Month</p>
                            </div>

                            <h2 className="font-semibold">Overtime Hours</h2>
                            <div className="flex justify-between p-1">
                                <p>This Month</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Last Motnh </p>
                            </div>

                            <h2 className="font-semibold">Pending Payroll Issue</h2>
                            <div className="flex justify-between p-1">
                                <p>Employee</p>
                                <p>Example Issues</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Employee</p>
                                <p>Example Issues</p>
                            </div>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Manage Payroll</button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow w-4/5">
                        <div className="flex gap-3 items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data" viewBox="0 0 16 16">
                                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
                            </svg>
                            <h4 className="font-semibold">Report</h4>
                        </div>
                        <div className=" border border-slate-300 p-2 rounded-md">
                            <h2 className="font-semibold">Key Performance Indicator</h2>
                            <div className="flex justify-between p-1">
                                <p>Average Something</p>
                            </div>
                            <div className="flex justify-between p-1">
                                <p>Complaints</p>
                            </div>

                            <h2 className="font-semibold">Monthly Trends</h2>
                            <h2 className="font-semibold">Department Highlights</h2>

                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr className="text-nowrap">
                                        <td className="px-2 py-1">Certain Department</td>
                                        <td className="px-2 py-1 text-green-500 font-semibold">High Perform</td>
                                        <td className="px-2 py-1">Delivere key projects on Time</td>
                                    </tr>
                                    <tr className="text-nowrap">
                                        <td className="px-2 py-1">Certain Department</td>
                                        <td className="px-2 py-1 text-red-500 font-semibold">Low Perform</td>
                                        <td className="px-2 py-1">Missed target 10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Analyze Report</button>
                    </div>

                </div>
            )}



        </section>
    )
};

export default Features;