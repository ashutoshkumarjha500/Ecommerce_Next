// 'use client'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import Link from 'next/link'
// import { useRouter } from "next/navigation"

// import Breadcrum from '@/Components/Breadcrum'
// import AdminSidebar from '@/Components/AdminSidebar'

// import FormValidator from "@/Validators/FormValidator"

// import { getSeoData, createSeoData } from "@/Redux/ActionCreators/SeoDataActionCreators"
// export default function AdminCreateSeoData() {
//     let [data, setData] = useState({
//         url: "",
//         title: "",
//         description: "",
//         keywords: "",
//         status: true
//     })
//     let [errorMessage, setErrorMessage] = useState({
//         url: "URL Field is Mendatory",
//         title: "Title Field is Mendatory",
//         description: "Description Field is Mendatory",
//         keywords: "Keywords Field is Mendatory",
//     })
//     let [show, setShow] = useState(false)

//     let SeoDataStateData = useSelector(state => state.SeoDataStateData)
//     let dispatch = useDispatch()
//     let navigate = useRouter()

//     function getInputData(e) {
//         let { name, value } = e.target

//         setErrorMessage(old => {
//             return {
//                 ...old,
//                 [name]: FormValidator(e)
//             }
//         })

//         setData(old => {
//             return {
//                 ...old,
//                 [name]: name === "status" ? (value === "1" ? true : false) : value
//             }
//         })
//     }

//     function postData(e) {
//         e.preventDefault()
//         let error = Object.values(errorMessage).find(x => x !== "")
//         if (error)
//             setShow(true)
//         else {
//             let item = SeoDataStateData?.find(x => x.url.toLocaleLowerCase() === data.url.toLocaleLowerCase())
//             if (item) {
//                 setShow(true)
//                 setErrorMessage(old => {
//                     return {
//                         ...old,
//                         'url': 'SeoData With This URL Already Exist'
//                     }
//                 })
//             }
//             else {
//                 dispatch(createSeoData({ ...data }))
//                 navigate.push("/admin/seodata")
//             }
//         }
//     }

//     useEffect(() => {
//         (() => {
//             dispatch(getSeoData())
//         })()
//     }, [SeoDataStateData?.length])
//     return (
//         <>
//             <Breadcrum title="Admin" />
//             <div className="container-fluid my-3">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <AdminSidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='border p-2 text-center'>Create SeoData <Link href="/admin/SeoData"> <i className='fa fa-arrow-left float-end'></i></Link></h5>

//                         <form onSubmit={postData}>
//                             <div className="row">
//                                 <div className="col-12 mb-3">
//                                     <label>Url*</label>
//                                     <input type="text" name="url" onChange={getInputData} placeholder='Url' className={`${show && errorMessage.url ? 'border-danger' : ''} form-control`} />
//                                     {show && errorMessage.url ? <p className='text-danger'>{errorMessage.url}</p> : null}
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <label>Title*</label>
//                                     <textarea type="text" name="title" onChange={getInputData} placeholder='Title' rows={3} className={`${show && errorMessage.title ? 'border-danger' : ''} form-control`}></textarea>
//                                     {show && errorMessage.title ? <p className='text-danger'>{errorMessage.title}</p> : null}
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <label>Description*</label>
//                                     <textarea type="text" name="description" onChange={getInputData} placeholder='Description' rows={3} className={`${show && errorMessage.description ? 'border-danger' : ''} form-control`}></textarea>
//                                     {show && errorMessage.description ? <p className='text-danger'>{errorMessage.description}</p> : null}
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <label>Keywords*</label>
//                                     <textarea type="text" name="keywords" onChange={getInputData} placeholder='Keywords' rows={3} className={`${show && errorMessage.keywords ? 'border-danger' : ''} form-control`}></textarea>
//                                     {show && errorMessage.keywords ? <p className='text-danger'>{errorMessage.keywords}</p> : null}
//                                 </div>

//                                 <div className="col-lg-6 mb-3">
//                                     <label>Status*</label>
//                                     <select name="status" onChange={getInputData} className='form-select'>
//                                         <option value="1">Active</option>
//                                         <option value="0">Inctive</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <button type="submit" className='btn btn-primary w-100'>Create</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Breadcrum from "@/Components/Breadcrum";
import AdminSidebar from "@/Components/AdminSidebar";
import FormValidator from "@/Validators/FormValidator";
import {
  getSeoData,
  createSeoData,
} from "@/Redux/ActionCreators/SeoDataActionCreators";

export default function AdminCreateSeoData() {
  const [data, setData] = useState({
    url: "",
    title: "",
    description: "",
    keywords: "",
    status: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    url: "",
    title: "",
    description: "",
    keywords: "",
  });

  const [show, setShow] = useState(false);

  const SeoDataStateData = useSelector((state) => state.SeoDataStateData || []);
  const dispatch = useDispatch();
  const router = useRouter();

  function getInputData(e) {
    let { name, value } = e.target;

    setErrorMessage((old) => ({
      ...old,
      [name]: FormValidator(e),
    }));

    setData((old) => ({
      ...old,
      [name]: name === "status" ? value === "1" : value,
    }));
  }

  function postData(e) {
    e.preventDefault();

    let error = Object.values(errorMessage).find((x) => x !== "");

    if (error) {
      setShow(true);
    } else {
      let item = SeoDataStateData.find(
        (x) => x.url.toLowerCase() === data.url.toLowerCase(),
      );

      if (item) {
        setShow(true);
        setErrorMessage((old) => ({
          ...old,
          url: "SeoData With This URL Already Exist",
        }));
      } else {
        dispatch(createSeoData(data));
        router.push("/admin/seodata");
      }
    }
  }

  useEffect(() => {
    dispatch(getSeoData());
  }, []);

  return (
    <>
      <Breadcrum title="Admin" />

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>

          <div className="col-md-9">
            <h5 className="border p-2 text-center">
              Create SeoData
              <Link href="/admin/seodata">
                <i className="fa fa-arrow-left float-end"></i>
              </Link>
            </h5>

            <form onSubmit={postData}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label>Url*</label>
                  <input
                    type="text"
                    name="url"
                    placeholder="Url of the page"
                    onChange={getInputData}
                    className={`form-control ${show && errorMessage.url ? "border-danger" : ""}`}
                  />
                  {show && errorMessage.url && (
                    <p className="text-danger">{errorMessage.url}</p>
                  )}
                </div>

                <div className="col-12 mb-3">
                  <label>Title*</label>
                  <textarea
                    name="title"
                    onChange={getInputData}
                    placeholder="Title"
                    rows={3}
                    className={`form-control ${show && errorMessage.title ? "border-danger" : ""}`}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Description*</label>
                  <textarea
                    name="description"
                    onChange={getInputData}
                    placeholder="Descriptions"
                    rows={3}
                    className={`form-control ${show && errorMessage.description ? "border-danger" : ""}`}
                  />
                   {show && errorMessage.description ? (
                    <p className="text-danger">{errorMessage.description}</p>
                  ) : null}
                </div>

                <div className="col-12 mb-3">
                  <label>Keywords*</label>
                  <textarea
                    name="keywords"
                    placeholder="Keywords"
                    onChange={getInputData}
                    rows={3}
                    className={`form-control ${show && errorMessage.keywords ? "border-danger" : ""}`}
                  />
                  {show && errorMessage.keywords ? (
                    <p className="text-danger">{errorMessage.keywords}</p>
                  ) : null}
                </div>

                <div className="col-lg-6 mb-3">
                  <label>Status*</label>
                  <select
                    name="status"
                    onChange={getInputData}
                    className="form-select"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
