// import Image from "next/image";
// import styles from "./page.module.css";
import HomePage from "@/PagesCom/HomePage";

// import HomePage from '@/PagesComponents/HomePage'
// import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seodata`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })

  response = await response.json()
  let data = response.find(x => x.url === "/")

  return {
    title: data?.title ?? "ShopStudio - Home",
    description: data?.description ?? "",
    keywords: data.keywords?.split(",") || []
  }
}

// export default function Page({ params, searchParams }) {
//   return (
//     <HomePage />
//   )
// }

export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
