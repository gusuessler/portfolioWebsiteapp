import Image from 'next/image'
import React from "react";
import { sql } from "@vercel/postgres";
// pages/index.tsx
import prisma from '../lib/prisma.ts';

function Home() {
  return (
    <body>
      <svg width="1920" height="960" viewBox="0 0 1920 960" fill="none" className="absolute top-0 mx-auto h-auto w-full max-w-[1820px] stroke-current">
        <line x1="1.74846e-7" y1="239.5" x2="1920" y2="239.5" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1.74846e-7" y1="479.5" x2="1920" y2="479.5" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1.74846e-7" y1="719.5" x2="1920" y2="719.5" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="239.5" y1="960" x2="239.5" y2="-2.18557e-8" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="959.5" y1="720" x2="959.5" y2="-1.31134e-8" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1199.5" y1="720" x2="1199.5" y2="-2.18254e-8" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1439.5" y1="720" x2="1439.5" y2="-1.63918e-8" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1679.5" y1="720" x2="1679.5" y2="-2.18254e-8" stroke="#151515" stroke-opacity="0.10"></line>
        <line x1="1680.35" y1="479.354" x2="1440.35" y2="719.354" stroke="#151515" stroke-opacity="0.10"></line>
        {/* <path d="M1691 478H1668V481H1691V478Z" fill="#000000" stroke-opacity="0.10"></path>
        <path d="M1681 468H1678V491H1681V468Z" fill="#000000" stroke-opacity="0.10"></path> */}
      </svg>
      
      
  
      <h2 className='Head'>Uessler.com Index Page</h2>
      <div className='box2'>
        Portfolio Website under Construction.
      </div>
    </body>
  )
}

export default Home;

