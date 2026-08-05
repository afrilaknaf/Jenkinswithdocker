import { useRef } from "react"
import { toast, ToastContainer } from "react-toastify"
import { useMutation } from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"

export default function Signup() {

    const name = useRef("")
    const email = useRef("")
    const password = useRef("")
    const confrimpassword = useRef("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const url = import.meta.env.VITE_URL
    const navigate = useNavigate()


    const mutation = useMutation({
        mutationFn: async (payload) => {
            let res = await fetch(`${url}api/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(payload)
            })
            return await res.json()
        },
        onSuccess: (data) => {
            toast.success(data.msg)
            name.current.value = ""
            password.current.value = ""
            confrimpassword.current.value = ""
            email.current.value = ""
            setTimeout(()=>{
                navigate("/login")
            },5000)
        },
        onError: (error) => {
            toast.error("Something Wents Wrong 🩻")
            console.log(error)
        }
    })


    function handlesubmit(e) {
        e.preventDefault()
        if (!(name.current.value.length >= 3)) {
            toast.error("Wrong name")
            return
        }
        if (!(emailRegex.test(email.current.value))) {
            toast.error("Invalid Email Format")
            return
        }
        if (!(passwordRegex.test(password.current.value))) {
            toast.error("Invalid Password Format")
            return
        }
        if (!(password.current.value === confrimpassword.current.value)) {
            toast.error("Not Macthes the Password")
            return
        }

        let payload = {
            Name: name.current.value,
            Email: email.current.value,
            Password: password.current.value
        }

        mutation.mutate(payload)

    }



    return (
        <>
            <div className="w-full h-[100vh] bg-[url(https://www.omegawatches.com/static/version1776758105/frontend/Omega/default/default/Reflet_PageBuilder/images/pp-planet-ocean/po-step-08-desktop.jpg?w=1920)] bg-cover flex flex-col justify-center items-center gap-5 p-5">

                <h1 className="text-3xl text-white">Signup</h1>

                <div className="w-[100%]  h-auto h-auto p-5  bg-white/10 md:bg-white/0">
                    <form className="flex justify-center items-center flex-col gap-3" onSubmit={handlesubmit}>
                        <input type="text" placeholder="Name" className="w-[300px] border p-2 rounded bg-white text-black" ref={name} />
                        <input type="email" placeholder="Email" className="w-[300px] border p-2 rounded bg-white text-black" ref={email} />
                        <input type="password" placeholder="Password" className="w-[300px] border p-2 rounded bg-white text-black" ref={password} />
                        <input type="password" placeholder="Confrim Password" className="w-[300px] border p-2 rounded bg-white text-black" ref={confrimpassword} />
                        <input type="submit" disabled={mutation.isPending} value={mutation.isPending ? "Please Wait" : "Signup"} className="w-[300px] border p-2 rounded bg-[#C91F28] text-black" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}