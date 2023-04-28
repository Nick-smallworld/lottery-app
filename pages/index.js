import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import MyComponent from '../components/app';

export default function Home() {
  return (
    <div>
        <h1>くじ</h1>
            <MyComponent />
        <p>結果</p>
        <div id="result" ></div>
    </div>

    
  )
}
