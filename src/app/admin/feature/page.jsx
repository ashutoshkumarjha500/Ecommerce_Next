'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminFeature = dynamic(() => import('@/PagesCom/Admin/Feature/AdminFeature'), { ssr: false })

export default function page() {
  return (
    <AdminFeature/>
  )
}
