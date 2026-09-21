'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminSeoData = dynamic(() => import('@/PagesCom/Admin/SeoData/AdminSeoData'), { ssr: false })

export default function page() {
  return (
    <AdminSeoData/>
  )
}
