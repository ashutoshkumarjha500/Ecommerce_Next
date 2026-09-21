// import AdminSubcategory from '@/PagesCom/Admin/Subcategory/AdminSubcategory'
'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminSubcategory = dynamic(() => import('@/PagesCom/Admin/Subcategory/AdminSubcategory'), { ssr: false })

export default function page() {
  return (
    <AdminSubcategory/>
  )
}
