import { useState } from "react";

export const useMouseOnOverLay = ()=>{
  const [isShowOverlay, setisShowOverlay] = useState(false);
  const handleMouseOver = () => {
    setisShowOverlay(true)
  }
  const handleMouseLeave = () => {
    setisShowOverlay(false)
  }
  return [isShowOverlay, handleMouseOver, handleMouseLeave]
}