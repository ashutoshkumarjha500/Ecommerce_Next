import ProductPage from '@/PagesCom/ProductPage'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seodata`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })

  response = await response.json()
  let data = response.find(x => x.url === "/product")

  let slug = (await params).slug

  response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/product/${slug}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })


  let product = await response.json()
  let title = data?.title ? data.title.replace("[Product Name]", product.name) : `ShopStudio - ${product.name}`

  let description = data?.description ? data.description.replace("[Product Name]", product.name) : product.description

  let keywords = data?.keywords ? data.keywords.split(",").map(x => x.replace("[Product Name]", product.name)) : []

  return {
    title: title,
    description: description,
    keywords: keywords
  }
}

export default function page() {
  return (
    <ProductPage/>
  )
}
