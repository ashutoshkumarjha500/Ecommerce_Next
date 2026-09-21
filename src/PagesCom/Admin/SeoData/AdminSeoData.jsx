'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux';

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';


import Breadcrum from '@/Components/Breadcrum'
import AdminSidebar from '@/Components/AdminSidebar'

import { deleteSeoData, getSeoData } from "@/Redux/ActionCreators/SeoDataActionCreators"
export default function AdminSeoData() {
    let SeoDataStateData = useSelector(state => state.SeoDataStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete That Record : ")) {
            dispatch(deleteSeoData({ id: id }))
            getAPIData()
        }
    }

    function getAPIData() {
        dispatch(getSeoData())
        let time = setTimeout(() => {
            $('#DataTable').DataTable()
        }, 500)
        return time
    }
    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [SeoDataStateData?.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Seo Data <Link href="/admin/seodata/create"> <i className='fa fa-plus float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table id='DataTable' className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Url</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Keywords</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        SeoDataStateData?.map(item => {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.url}</td>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.keywords}</td>
                                                <td>{item.status ? "Active" : "Inactive"}</td>
                                                <td><Link className='btn btn-primary' href={`/admin/seodata/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
                                                <td>{localStorage.getItem("role") === "Super Admin" ? <button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button> : null}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
