'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminProduct = dynamic(() => import('@/PagesCom/Admin/Product/AdminProduct'), { ssr: false })

export default function page() {
  return (
    <AdminProduct/>
  )
}
