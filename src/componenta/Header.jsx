import React from 'react'

const Header = () => {
  return (
   <header
   className="h-96 bg-cover bg-center flex items-center justify-center text-white"
   style={{backgroundImage:"url('https://imgs.search.brave.com/a_gbPMy_HlCf6tu_5aMCZwQ2dZcVurAqvowCwzlhOCs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bWluaW1hbC1mbG9y/YWwtYmFja2dyb3Vu/ZF83ODM3MC05NTE4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA')"}}>
    
    <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4">🚀Welcome to My Website</h1>
   </header>
  )
}

export default Header;