'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminBrand = dynamic(() => import('@/PagesCom/Admin/Brand/AdminBrand'), { ssr: false })

export default function page() {
  return (
    <AdminBrand/>
  )
}
