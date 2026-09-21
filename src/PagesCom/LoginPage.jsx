"use client"
import React, { useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function LoginPage() {
    let [data, setData] = useState({
        username: '',
        password: ''
    })
    let [errorMessage, setErrorMessage] = useState("")

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    let navigate = useRouter()

    async function postData(e) {
        e.preventDefault()
        let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user`)
        response = await response.json()

        let item = response.find(x => x.username === data.username || x.email === data.username)
        if (item && item.password === data.password) {
            if (item.status === false)
                setErrorMessage("Your Account is Blocked Due to Some UnAuthorized Activity, Plase Contact Us to Unblock Your Account")
            else {
                localStorage.setItem("login", true)
                localStorage.setItem("userid", item.id)
                localStorage.setItem("name", item.name)
                localStorage.setItem("role", item.role)
                if (item.role === "Buyer")
                    navigate.push("/profile")
                else
                    navigate.push("/admin")
            }
        }
        else
            setErrorMessage("Invalid Username or Password")
    }
    return (
        <>
            <Breadcrum title="Signup" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-sm-11 m-auto">
                        <h5 className='text-center p-2 bg-primary text-light'>Login To Your Account</h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label>Username*</label>
                                    <input type="text" name="username" onChange={getInputData} placeholder='Username or Email Address' className={`${errorMessage ? 'border-danger' : 'border-dark'} form-control`} />
                                    {errorMessage ? <p className='text-danger'>{errorMessage}</p> : null}
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label>Password*</label>
                                    <input type="password" name="password" onChange={getInputData} placeholder='Password' className={`${errorMessage ? 'border-danger' : 'border-dark'} form-control`} />
                                </div>

                                <div className="col-12 mb-3">
                                    <button type="submit" className='btn btn-primary w-100'>login</button>
                                </div>
                            </div>
                        </form>
                        <div className='d-flex justify-content-between'>
                            <Link href="#">Forget Password?</Link>
                            <Link href="/signup">Does Not Have an Account? Create for Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
