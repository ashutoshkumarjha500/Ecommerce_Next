'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminContactUs = dynamic(() => import('@/PagesCom/Admin/ContactUs/AdminContactUs'), { ssr: false })

export default function page() {
  return (
    <AdminContactUs/>
  )
}
