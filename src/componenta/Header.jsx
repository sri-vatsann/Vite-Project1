import React from 'react'

const Header = () => {
  return (
   <header
   className="h-96 bg-cover bg-center flex items-center justify-center text-white"
   style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.SjwtoF77oPIDKz6-JBXuegHaEk?w=276&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3')"}}>
    
    <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4">🚀Welcome to My Website</h1>
   </header>
  )
}

export default Header;