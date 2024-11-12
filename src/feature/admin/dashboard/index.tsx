import SidebarNavigation from "@/utils/route-sidebar";
import Link from "next/link";

const DashboardAdminLayouts = ({ children }: { children: React.ReactNode }) => {

  const routes = SidebarNavigation()
  
  return (

    <div className="flex flex-row w-full min-h-screen  bg-[#edf0f7]  text-gray-700">

      <div className="relative h-full w-full px-10">
        <aside className='fixed left-0 top-0 bg-white  h-screen w-64 flex flex-col space-y-2 gap-2 p-4'>
          <div className='flex flex-col justify-between h-full'>


            <div className='flex flex-col gap-2'>
              <div className="mb-14 mt-10 mx-auto">
                <h1 className='text-2xl font-semibold'>Human</h1>
                <span className="text-sm text-gray-500">Resourch Information System</span>
              </div>

              {routes.map((item, index) => (
                <Link href={item.path} key={`item-${item.name}-${index}`}
                  className={`w-full flex flex-row gap-2 items-center py-3 pl-2 rounded-xl font-semibold hover:bg-[#f5f5f5] hover:text-gray-700
                  ${item.active && 'bg-blue-500 text-white'} `}>
                  {item.icon}
                  {item.name}
                </Link>

              ))}

            </div>


            <div className='w-full border-t-2 border-gray-300'>
              <button className="hover:bg-slate-500 bg-transparent rounded-xl text-gray-600 hover:text-white flex gap-3 items-center justify-center text-base font-semibold py-3 w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                  <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                </svg>
                Sign Out
              </button>
            </div>


          </div>
        </aside>

        <main className="pl-60 pt-12 w-full">
          {children}
        </main>

      </div>

    </div>


  )
}

export default DashboardAdminLayouts;