import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import LotteryOne from "../components/app";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>くじ引きアプリ</title>
        <meta content="くじ引きアプリです。選択に困ったとき、簡単な操作でくじを引き取捨選択を行うことができます。お気軽にご利用ください。" name="description"></meta>
        <meta property="og:title" content="くじ引きアプリ" />
        <meta property="og:description" content="くじ引きアプリです。選択に困ったとき、簡単な操作でくじを引き取捨選択を行うことができます。お気軽にご利用ください。" />
        <meta property="og:type" content="くじ引きアプリ" />
        <meta property="og:url" content="https://lottery-app-khaki.vercel.app/" />
        <meta property="og:site_name" content="くじ引きアプリ" />
        <meta property="og:locale" content="ja_JP"  />
        <meta name="keywords" content="くじ,くじ引き,取捨選択,意思決定"></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0628991062376576"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 mt-8">くじ</h1>
        <LotteryOne />

        <h2 class="text-4xl font-bold mb-4 mt-8">結果</h2>
        <div
          id="result"
          class="mt-8 p-4 bg-white border border-gray-300 rounded"
        ></div>
      </div>
    </div>
  );
}
