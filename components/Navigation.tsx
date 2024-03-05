"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation(){
   const path = usePathname();
   const[count,setCount] = useState(0)
    return(
    <div>
       <ul>
          <li><Link href="/">home</Link></li>{path==="/"?"🎁🎁":""}
          <li><Link href="/about-us">About us</Link>{path==="/"?"🎁🎁":""}</li>
          <li><button onClick={() => setCount((c) => c+1)}>{count}</button></li>
       </ul>
    </div>
 );
}