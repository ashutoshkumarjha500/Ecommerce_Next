'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminMaincategory = dynamic(() => import('@/PagesCom/Admin/Maincategory/AdminMaincategory'), { ssr: false })

export default function page() {
  return (
    <AdminMaincategory/>
    
  )
}
