"use client"
import {useState, useRef, useCallback, useEffect} from "react"
import CameraGet from "./CameraGet"

export default function Home() { 
  const [huga, sethuga]=useState<String>("")
  
  function change_huga(e: any){
    sethuga(e.target.value)
  }

  return (
    <div>
      <span>双方向バインドテスト</span><input style={{color: "black"}} onChange={change_huga} type="text"></input>
      <div>{huga}</div>
      <CameraGet />
    </div>
    )
}
  