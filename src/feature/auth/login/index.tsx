import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginView = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const { push, query } = useRouter();
    const callbackUrl: string = Array.isArray(query.callbackUrl) ? query.callbackUrl[0] : query.callbackUrl ?? '/';

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        setFormState({
            ...formState,
            [type]: e.target.value
        })
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        if (formState.email == "" || formState.password == "") {
            setIsLoading(false)
            alert("Email dan kata sandi harus diisi")
            return
        }
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: formState.email,
                password: formState.password,
                callbackUrl
            })
            if (res?.status == 200) {
                alert("Login Berhasil")
                push(callbackUrl)
            }
            else {
                console.log(res?.error);
                alert("Login Gagal")
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const loginGoogle = async () => {
        try {
            setIsLoading(true)
            console.log({ callbackUrl })
            const res = await signIn("google", { callbackUrl })
            if (res) {
                push(callbackUrl)
            } else {
                console.log(res);
            }
            alert("Login berhasil")
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="relative flex min-h-screen justify-center items-center bg-[#edf0f7]">
            <button onClick={() => push("/")} className="absolute flex gap-3 top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 text-lg font-semibold rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short text-2xl font-semibold" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
                Back To Home
            </button>
            <div className="bg-white shadow-2xl  p-10 max-w-[400px] rounded-xl xl:w-2/3 lg:w-1/3 md:w-1/2  sm:w-2/3">
                <div className="flex justify-between items-center my-8">
                    <h2 className="text-2xl font-semibold ">Masuk ke HRIS</h2>
                    <Link href={"/auth/register"} className="text-sm font-bold text-end hover:text-primary">Daftar</Link>
                </div>
                <form className="w-full" onSubmit={onSubmit}>
                    <input type="email" name="email" placeholder="Masukkan Email" onChange={(e) => onChange(e, "email")} className="border border-gray-400 w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-lg" />
                    <p className="text-xs text-background font-medium mt-0">Contoh: example@gmail.com</p>

                    <input type="password" name="password" placeholder="Masukkan Kata Sandi" onChange={(e) => onChange(e, "password")} className="border border-gray-400 my-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-lg" />
                    <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded-xl my-3 font-semibold text-lg disabled:cursor-not-allowed disabled:bg-gray-500" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>

                </form>
                <div className="flex justify-between items-center gap-2 my-3">
                    <hr className="border w-1/3 border-slate-300" />
                    <p className="text-center text-sm w-auto text-nowrap text-gray-800">atau masuk dengan</p>
                    <hr className="border w-1/3 border-slate-300" />
                </div>
                <div className="flex flex-col gap-6">
                    <button onClick={loginGoogle} className="border flex justify-center items-center gap-3 border-slate-400 w-full p-2 rounded-xl font-semibold text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                        </svg>
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginView;
