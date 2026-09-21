"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import store from '@/Redux/Store';

export default function MasterLayout({ children }) {
  return (
    <Provider store={store}>
        <Suspense>
          <Navbar/>
          {children}
          <Footer/>
          </Suspense>

    </Provider>
  )
}
