'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminNewsletter = dynamic(() => import('@/PagesCom/Admin/Newsletter/AdminNewsletter'), { ssr: false })

export default function page() {
  return (
    <AdminNewsletter/>
  )
}
