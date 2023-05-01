import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import MyComponent from "../components/app";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tailwind CSS Template</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 mt-8">くじ</h1>
        <MyComponent />
        <div
          id="result"
          class="mt-8 p-4 bg-white border border-gray-300 rounded"
        ></div>
      </div>
    </div>
  );
}
