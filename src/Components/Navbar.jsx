// "use client"
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { getSetting } from "@/Redux/ActionCreators/SettingActionCreators"
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// export default function Navbar() {
// let [loginData, setLoginData] = useState({
//     login: false,
//     name: "",
//     role: ""
// })

//     let [siteName, setSiteName] = useState(process.env.NEXT_PUBLIC_SITE_NAME)

//     let SettingStateData = useSelector(state => state.SettingStateData)

//     let dispatch = useDispatch()

//     let navigate = useRouter()
//     function logout() {
//         localStorage.clear()
//         navigate.push("/login")
//     }

//     useEffect(() => {
//         (() => {
//             dispatch(getSetting())
//             if (SettingStateData.length && SettingStateData[0].siteName) {
//                 setSiteName(SettingStateData[0].siteName)
//             }
//         })()
//     }, [SettingStateData.length])
//     return (
//         <div className="container-fluid sticky-top">
//             <div className="container">
//                 <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
//                     <Link href="/" className="navbar-brand">
//                         <h1>{siteName}</h1>
//                     </Link>
//                     <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
//                         data-bs-target="#navbarCollapse">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarCollapse">
//                         <div className="navbar-nav ms-auto">
//                             <Link href="/" className="nav-item nav-link active">Home</Link>
//                             <Link href="/about" className="nav-item nav-link">About</Link>
//                             <Link href="/shop" className="nav-item nav-link">Shop</Link>
//                             <Link href="/features" className="nav-item nav-link">Features</Link>
//                             <Link href="/testimonials" className="nav-item nav-link">Testimonial</Link>
//                             <Link href="/faq" className="nav-item nav-link">Faq</Link>
//                             <Link href="/contactus" className="nav-item nav-link">Contact</Link>
//                             {
//                                 loginData.login ?
//                                     <>
//                                         <div className="nav-item dropdown">
//                                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{loginData.name}</a>
//                                             <div className="dropdown-menu bg-light mt-2">
//                                                 <Link href="/profile" className="dropdown-item">Profile</Link>
//                                                 {loginData.role !== "Buyer" ? <Link href="/admin" className="dropdown-item">Admin Dashboard</Link> : null}
//                                                 <Link href="/cart" className="dropdown-item">Cart</Link>
//                                                 <Link href="/checkout" className="dropdown-item">Checkout</Link>
//                                                 <button onClick={logout} className="dropdown-item">Logout</button>
//                                             </div>
//                                         </div>
//                                     </> : <Link href="/login" className="nav-item nav-link text-danger">Login</Link>
//                             }
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     )
// }

"use client"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSetting } from "@/Redux/ActionCreators/SettingActionCreators"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {

  const [loginData, setLoginData] = useState({
    login: false,
    name: "",
    role: ""
  })

  const [siteName, setSiteName] = useState(process.env.NEXT_PUBLIC_SITE_NAME)

  const SettingStateData = useSelector(state => state.SettingStateData)
  const dispatch = useDispatch()
  const router = useRouter()

  function logout() {
    localStorage.clear()
    router.push("/login")
  }

  useEffect(() => {

    dispatch(getSetting())

    if (SettingStateData.length && SettingStateData[0].siteName) {
      setSiteName(SettingStateData[0].siteName)
    }

    let name = localStorage.getItem("name")
    let role = localStorage.getItem("role")

    if (name) {
      setLoginData({
        login: true,
        name: name,
        role: role
      })
    }

  }, [SettingStateData.length])

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light py-3">

          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <h2 className="fw-bold text-dark m-0">{siteName}</h2>
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto align-items-center">

              <Link href="/" className="nav-item nav-link">Home</Link>
              <Link href="/about" className="nav-item nav-link">About</Link>
              <Link href="/shop" className="nav-item nav-link">Shop</Link>
              <Link href="/features" className="nav-item nav-link">Features</Link>
              <Link href="/testimonials" className="nav-item nav-link">Testimonial</Link>
              <Link href="/faq" className="nav-item nav-link">Faq</Link>
              <Link href="/contactus" className="nav-item nav-link">Contact</Link>

              {
                loginData.login ?

                  <div className="nav-item dropdown ms-3">

                    <a
                      href="#"
                      className="nav-link dropdown-toggle fw-semibold"
                      // data-bs-toggle="dropdown"
                    >
                      {loginData.name}
                    </a>

                    <div className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">

                      <Link href="/profile" className="dropdown-item">
                        Profile
                      </Link>

                      {loginData.role !== "Buyer" ?
                        <Link href="/admin" className="dropdown-item">
                          Admin Dashboard
                        </Link> : null
                      }

                      <Link href="/cart" className="dropdown-item">
                        Cart
                      </Link>

                      <Link href="/checkout" className="dropdown-item">
                        Checkout
                      </Link>

                      <div className="dropdown-divider"></div>

                      <button
                        onClick={logout}
                        className="dropdown-item text-danger"
                      >
                        Logout
                      </button>

                    </div>

                  </div>

                  :

                  <Link href="/login" className="nav-item nav-link text-danger fw-semibold">
                    Login
                  </Link>
              }

            </div>
          </div>

        </nav>

      </div>
    </div>
  )
}
