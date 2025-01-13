import React from "react"
import { useSelector } from "react-redux"
import DarkMode from "./DarkMode"
import LightMode from "./LightMode"

const PrismTheme = () => {
  const themeState = useSelector(state => state.theme) || { theme: 'light' }
  const { theme } = themeState

  return <>{theme === "light" ? <LightMode /> : <DarkMode />}</>
}

export default PrismTheme
