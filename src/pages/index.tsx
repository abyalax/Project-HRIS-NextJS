import { useSession } from "next-auth/react";
import localFont from "next/font/local";
import Image from "next/image";
import { imageAdmin } from "@/utils/getter-image";
import Link from "next/link";
import { useRouter } from "next/router";
import Features from "./ui/feat/features";
import FeatAfterSales from "./ui/feat/aftersales";
import FeatAbsensi from "./ui/feat/absensi";
import FeatPayroll from "./ui/feat/payroll";
import FeatRequest from "./ui/feat/request";
import FeatPerformance from "./ui/feat/performance";
import FeatDaily from "./ui/feat/daily";
import FeatEmployRequest from "./ui/feat/employee-request";
import FeatReport from "./ui/feat/report";
import Contact from "./ui/contact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const { status, data } = useSession();
  const { push } = useRouter();

  return (
    <div className={`w-full font-[family-name:var(--font-geist-sans)] min-h-screen  bg-[#edf0f7]  text-gray-700 ${geistSans.variable} ${geistMono.variable}`}>

      <header className="bg-white bg-opacity-65 fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-4 w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 22">
              <path d="M7 14.001h2v2H7z"></path>
              <path d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"></path>
            </svg>
            <h1 className="text-2xl font-bold">HRIS</h1>
          </div>
          <nav className="w-1/3 flex justify-center">
            <ul className="flex space-x-4 items-center text-xl font-semibold">
              <li><a href="#employees" className="font-semibold hover:text-blue-500">Employees</a></li>
              <li><a href="#payroll" className="font-semibold hover:text-blue-500">Payroll</a></li>
              <li><a href="#reports" className="font-semibold hover:text-blue-500">Reports</a></li>
              <li><a href="#settings" className="font-semibold hover:text-blue-500">Settings</a></li>
            </ul>
          </nav>
          <div className="flex gap-4 w-1/3 justify-end">
            {status === "authenticated" ? (
              <>
                <Image src={imageAdmin} alt="admin" width={38} height={38} className="w-14 h-14 object-cover rounded-full border-2 border-white" />
                <div className="">
                  <p className="text-lg">{data?.user.name ? data?.user.name : data?.user.email.split("@")[0]}</p>
                  <p className="text-sm">{data?.user.email}</p>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => push("/auth/login")} className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600">
                  Login
                </button>
                <button onClick={() => push("/auth/register")} className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-4 items-center justify-center pb-10 pt-28">
        <section className="text-center">
          <h2 className="text-4xl font-bold">Welcome to HRIS</h2>

          <p className="my-2 text-sm">Access Demo System With this credentials</p>
          <p className="my-2 text-sm">for login as admin</p>
          <p className="text-sm">{JSON.stringify({
            email: "handikanr@gmail.com",
            password: "adminPass"
          })}</p>

          <h2 className="mt-6 text-lg font-semibold mb-2">Login As</h2>
          <div className="flex justify-center items-center gap-4">
            <button onClick={() => push("/admin")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <Link href="/admin" >Admin</Link>
            </button>
            <button onClick={() => push("/karyawan")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <Link href="/karyawan" >Karyawan</Link>
            </button>
          </div>
        </section>

        <FeatAfterSales />

        <div className="w-full flex px-32 gap-7">
          <FeatAbsensi />
          <FeatRequest />
        </div>

        <FeatPayroll />

        <div className="w-full flex px-32 gap-7">
          <FeatPerformance />
          <FeatDaily />
        </div>

        <FeatEmployRequest />
        <FeatReport />
        <Contact />

      </main>

      <footer className="flex flex-col gap-6 flex-wrap items-end justify-end py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 HRIS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
