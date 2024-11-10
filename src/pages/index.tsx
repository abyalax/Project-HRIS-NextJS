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

  const {push} = useRouter()

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} 
        grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>

      <header className="">
        <h2 className="text-3xl font-semibold mb-6">Welcome to Human Resource Information System</h2>
        <p>Sign Up fisrt for register your account</p>
      </header>

      <div className="flex gap-6 items-center justify-center">
        <button onClick={() => push('/auth/login')} className="rounded-full font-semibold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          Login
        </button>
        <button onClick={() => push('/auth/register')} className="rounded-full font-semibold border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          Sign Up
        </button>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h2 className="text-3xl">This App is still Development</h2>
      </footer>
    </div>
  );
}
