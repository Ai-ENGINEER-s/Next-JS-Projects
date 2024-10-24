

import React from 'react';


export const metadata = {

    title:"test-application" , 
    description: "test-application implemented" ,
}
const RootLayout = ({children}) => {
  return (
 <html lang='eng'>

<body className>

<div>

    {children}

</div>

</body>

 </html>
  )
}

export default RootLayout 