import FaqPage from '@/Components/Faq'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seodata`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })

  response = await response.json()
  let data = response.find(x => x.url === "/faq")

  return {
    title: data?.title ?? "ShopStudio - Home",
    description: data?.description ?? "",
    keywords: data.keywords?.split(",") || []
  }
}

export default function page() {
  return (
    <FaqPage/>
  )
}
