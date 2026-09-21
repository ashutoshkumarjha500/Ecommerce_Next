'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminFaq = dynamic(() => import('@/PagesCom/Admin/Faq/AdminFaq'), { ssr: false })

export default function page() {
  return (
    <AdminFaq/>
  )
}
