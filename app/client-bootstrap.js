"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientBootstrap({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </div>
  );
}
