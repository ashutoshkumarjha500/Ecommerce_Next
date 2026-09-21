'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AdminCheckout = dynamic(() => import('@/PagesCom/Admin/Checkout/AdminCheckout'), { ssr: false })

export default function page() {
  return (
    <AdminCheckout/>
  )
}
