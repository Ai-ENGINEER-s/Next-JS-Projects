import React from 'react'
import globals from './globals.css' ; 
import { title } from 'process';



export const metadata = {
    title : "test application" , 

    description : "test app for backend mongodb testing application " , 

}




const RootLayout = ({children}) => {
  return (
<html lang='eng'>
<body>
   
<div>
{children}   
</div>

</body>
</html>
  )
}

export default RootLayout  