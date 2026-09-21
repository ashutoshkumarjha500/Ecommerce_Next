'use client'
import React from 'react'

import dynamic from 'next/dynamic'

const AdminSetting = dynamic(() => import('@/PagesCom/Admin/Setting/AdminSetting'), { ssr: false })

export default function page() {
  return (
    <AdminSetting/>
  )
}
