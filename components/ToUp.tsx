'use client'

import { useEffect, useState } from "react"


const ToUp = () => {
  
  const [clas, setClas] = useState('')

  useEffect(()=>{
    window.onscroll = function () {this.scrollY>=700?setClas('show'):setClas('')}
  },[])

  const scrlTop=()=>{
    if(typeof window != undefined){
      window.scrollTo({top:0})
      console.log(clas)
    }
  }

  return (
    <div className={"scrollTop px-6 text-dark font-bold  " + clas} onClick={scrlTop}>للأعلى</div>
  )
}



/* let scrlTop = document.getElementById("scrlTop")
window.onscroll = function () {this.scrollY>=300?scrlTop.classList.add('show'):scrlTop.classList.remove('show')}
scrlTop.onclick=function(){window.scrollTo({top:0})} */

export default ToUp