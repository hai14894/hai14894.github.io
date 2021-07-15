// import React, { useState,createContext } from "react";
// export const AppContext = createContext()
// const AppContextProvider = (props) => {
//     const [products,setProducts] = useState(null)
//     return(
//         <AppContext.Provider value = {{products,setProducts}}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }
// export default AppContextProvider
import { createContext } from "react"

export default createContext(null)