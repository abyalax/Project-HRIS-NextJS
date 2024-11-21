import { imageAdmin } from "@/utils/getter-image";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Input from "../ui/input";
import AdminSettingsLayouts from "../layout";


const AdminSettingsProfile = () => {
    const [disableProfile, setDisableProfile] = useState(true);
    const [disablePersonal, setDisablePersonal] = useState(true);
    const [disableAddress, setDisableAddress] = useState(true);

    const { data } = useSession();

    return (
        <AdminSettingsLayouts>
            <main className="w-5/6 pl-6 pr-2">
                <h2 className="font-semibold my-2">My Profile</h2>

                <div className="border-2 border-slate-200 rounded-lg p-3 flex my-4">
                    <div className="w-1/6">
                        <Image src={imageAdmin} alt="User Profile" width={100} height={100} className=" w-20 h-20 object-center object-cover rounded-full my-4 mx-auto" />
                    </div>

                    <div className="flex justify-between w-full items-center">

                        <div className="flex flex-col gap-1">
                            <input type="text" placeholder={data?.user.name} disabled={disableProfile} className="placeholder:text-gray-700 bg-transparent focus:outline-none focus:placeholder:text-transparent" />
                            <input type="text" placeholder="Team Manager" disabled={disableProfile} className="placeholder:text-gray-700 bg-transparent focus:outline-none focus:placeholder:text-transparent" />
                            <input type="text" placeholder="Leads United Kingdoms" disabled={disableProfile} className="placeholder:text-gray-700 bg-transparent focus:outline-none focus:placeholder:text-transparent" />
                        </div>

                        <button onClick={() => setDisableProfile(!disableProfile)} className="flex gap-2  text-gray-500 px-4 py-2 rounded-full h-fit border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                            {disableProfile ? "Edit" : "Save"}
                        </button>

                    </div>
                </div>

                <div className="border-2 border-slate-200 rounded-lg p-3 my-4">

                    <div className="flex justify-between w-full p-2">
                        <h2 className="font-bold">Personal Information</h2>

                        <button onClick={() => setDisablePersonal(!disablePersonal)} className="flex gap-2  text-gray-500 px-4 py-2 rounded-full border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                            {disablePersonal ? "Edit" : "Save"}
                        </button>
                    </div>
                    <div className="flex gap-8">

                        <div className="w-2/5 ">
                            <Input disabled={disablePersonal} type="text" placeholder="Abigail" label="Username" />
                            <Input disabled={disablePersonal} type="email" placeholder={data?.user.email} label="Email" />
                            <Input disabled={disablePersonal} type="text" placeholder="Team Manager" label="Bio" />

                        </div>

                        <div className="w-3/5 pr-6">
                            <Input disabled={disablePersonal} type="text" placeholder="Yulisa" label="Last Name" />
                            <Input disabled={disablePersonal} type="number" placeholder="0877-1234-1234" label="Phone" />
                        </div>

                    </div>
                </div>

                <div className="border-2 border-slate-200 rounded-lg p-3 my-4">

                    <div className="flex justify-between w-full p-2">
                        <h2 className="font-bold">Address</h2>
                        <button onClick={() => setDisableAddress(!disableAddress)} className="px-4 py-2 rounded-full flex gap-2   border border-gray-300 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                            {disableAddress ? "Edit" : "Save"}
                        </button>
                    </div>
                    <div className="flex gap-8">

                        <div className="w-2/5 ">
                            <Input disabled={disableAddress} type="text" placeholder="United Kingdom" label="Country" />
                            <Input disabled={disableAddress} type="text" placeholder="ERT254" label="Postal Code" />
                        </div>

                        <div className="w-3/5 pr-6">

                            <Input disabled={disableAddress} type="text" placeholder="leads England" label="City / State" />
                            <Input disabled={disableAddress} type="text" placeholder="leads England" label="Tax ID" />
                        </div>

                    </div>
                </div>

            </main>
        </AdminSettingsLayouts>
    )
};

export default AdminSettingsProfile;