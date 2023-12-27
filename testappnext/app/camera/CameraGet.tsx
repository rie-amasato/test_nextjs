"use client"

import {useEffect} from 'react'

export default function CameraGet(){


    useEffect(()=>{
      const elm_video=document.getElementById("camera")! as HTMLVideoElement

      navigator.mediaDevices.getUserMedia(
        {
          audio: false,
          video: {
            facingMode: {exact: "environment"}
        }
        })
        .then((stream)=>{
            elm_video.srcObject=(stream)
            console.log(stream.getTracks())

            const track=stream.getTracks()[0]
            console.log(track.getCapabilities())
            elm_video.play()
          }
        )
    }, [])

    return(
        <div>
            <video id="camera" />
        </div>
    )
}