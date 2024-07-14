'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system'?systemTheme:theme;
  useEffect(()=>setMounted(true),[])

  return (
    <div className="flex justify-center items-center">
      {mounted && (currentTheme === 'dark'?
      <MdLightMode className=" cursor-pointer hover:text-accent text-[22px] " onClick={()=>setTheme('light')}/>:
      <MdDarkMode className=" cursor-pointer hover:text-accent text-[22px] " onClick={()=>setTheme('dark')}/>)}
    </div>
  )
}
