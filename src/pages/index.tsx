import { useSession } from "next-auth/react";
import localFont from "next/font/local";
import { useRouter } from "next/router";

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

  const { push } = useRouter()
  const { data, status } = useSession();

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} 
        grid grid-rows-[20px_1fr_20px] bg-[#edf0f7] items-center justify-items-center min-h-screen px-8 pt-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>

      <nav className="fixed bg-[#fefefe] top-4 my-7 flex gap-16 justify-between shadow-2xl py-6 px-8 rounded-full">

        <div className="ml-6">
          <h2 className="text-xl font-semibold">Welcome to Human Resource Information System</h2>
          <p>Sign Up fisrt for register your account </p>
        </div>

        <div className="flex gap-6 items-end justify-end">
          <button onClick={() => push('/auth/login')}
            className="rounded-full font-semibold bg-blue-500 text-white  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Login
          </button>
          <button onClick={() => push('/auth/register')}
            className="rounded-full font-semibold bg-blue-500 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Sign Up
          </button>
        </div>

      </nav>

      <main className="row-start-2 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Data User</h2>
        {status === "authenticated" && <pre>{JSON.stringify(data.user, null, 2)} authenticated</pre>}
        {status === "unauthenticated" && <pre>{JSON.stringify(data, null, 2)} unauthenticated</pre>}
        {status === "loading" && <pre>Loading</pre>}

      </main>

      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center">
        <h2 className="text-3xl font-semibold">This is a Demo App</h2>
        <h2 className="text-3xl font-semibold">Go to The Routes /admin to see the dashboard or Click This Button</h2>
        <button onClick={() => push('/admin')} className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
          See Dashboard
        </button>
      </footer>
    </div>
  )
}
