import { SidebarNavigation } from "@/routes/karyawan";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { imageAdmin } from "@/utils/getter-image";
import Chart, { registerables } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useRouter } from "next/router";

Chart.register(...registerables, ChartDataLabels);

const DashboardKaryawanLayouts = ({ children }: { children: React.ReactNode }) => {

  const { routesDashboard } = SidebarNavigation()
  const [isClient, setIsClient] = useState(false);

  const { data } = useSession();
  const { push } = useRouter()

  useEffect(() => {
    setIsClient(true)
    return () => { };
  }, []);

  return (

    <div className="flex flex-row w-full min-h-screen  bg-[#edf0f7]  text-gray-700">

      <div className="relative h-full w-full px-10">
        <aside className='fixed z-30 left-0 top-0 bg-white  h-screen w-56 flex flex-col space-y-2 gap-2 p-4'>
          <div className='flex flex-col justify-between h-full'>

            <div className='flex flex-col gap-2'>
              <div className="mb-14 mt-10 mx-auto">
                <h1 className='text-2xl font-semibold'>Human</h1>
                <span className="text-sm text-gray-500">Resourch Information System</span>
              </div>

              {routesDashboard.map((item, index) => (
                <Link href={item.path} key={`item-${item.name}-${index}`}
                  className={`w-full flex flex-row gap-2 items-center py-3 pl-2 rounded-xl font-semibold
                  ${item.active ? 'bg-blue-500 text-white' : 'hover:bg-[#f5f5f5] hover:text-gray-700'} `}>
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>

            <div className='w-full border-t-2 border-gray-300'>
              {isClient && (
                <button onClick={() => signOut({ callbackUrl: "/auth/login" })} className="hover:bg-slate-500 bg-transparent rounded-xl text-gray-600 hover:text-white flex gap-3 items-center justify-center text-base font-semibold py-3 w-full ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                  </svg>
                  Sign Out
                </button>
              )}
            </div>

          </div>
        </aside>

        <main className="pl-52 pt-4 w-full sticky top-0 bg-[#edf0f7] z-20">
          <div className="flex justify-between items-center">

            <div className="border-2 bg-white border-slate-200 h-12 w-1/2 my-2 rounded-lg flex">
              <div className="w-1/12 h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <input type="text" placeholder="Search Here..." className="w-full h-full p-2 border-b border-t border-l border-l-slate-400 border-slate-200 focus:outline-none appearance-none focus:ring-0 placeholder:text-slate-600 rounded-tr-lg rounded-br-lg" />
            </div>

            <div className="h-14 w-1/3 my-2 rounded-lg p-2 flex gap-4 justify-center item-center">
              <div className="relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-fill mt-4" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <span className="absolute top-4  z-10 right-0 h-2 w-2 rounded-full bg-red-500 ">.</span>
              </div>
              <div className="relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell-fill mt-4" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
                <span className="absolute top-4  z-10 right-0 h-2 w-2 rounded-full bg-red-500 ">.</span>
              </div>
              <Image onClick={() => push("/karyawan/settings")} src={imageAdmin} alt="admin" width={50} height={50} className="w-14 h-14 object-cover rounded-full border-2 border-white cursor-pointer" />
              <div onClick={() => push("/karyawan/settings")} className="cursor-pointer">
                <p className="text-lg">{data?.user.name}</p>
                <p className="text-sm">{data?.user.email}</p>
              </div>
            </div>
          </div>

        </main>
        <section className="pl-52 pt-2">
          {children}
        </section>

      </div>

    </div>


  )
}

export default DashboardKaryawanLayouts;