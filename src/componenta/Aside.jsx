import React from 'react'
import {FaBook, FaReact, FaRocket }from "react-icons/fa"

const asidelinks =[
  {
    icon:<FaBook/>,
    name:"Vite Documentation",
    href:"https://www.bing.com/ck/a?!&&p=6f93cdc35592126c58b32ee2521c618227fbb8c72da5d5f28b9101d17d3f9627JmltdHM9MTc1NTczNDQwMA&ptn=3&ver=2&hsh=4&fclid=319efe42-f70b-6f54-0fc0-ec59f6ad6e11&psq=vite+documentation&u=a1aHR0cHM6Ly92aXRlLmRldi9ndWlkZS8&ntb=1"
  },
  {
    icon:<FaReact/>,
    name:"React Guide",
    href:"https://www.bing.com/ck/a?!&&p=6492c70cf47df24fa6c663e6ad4b2eec06b2dd021b4a90d38cfc5631d4b0c2ddJmltdHM9MTc1NTczNDQwMA&ptn=3&ver=2&hsh=4&fclid=319efe42-f70b-6f54-0fc0-ec59f6ad6e11&psq=react+guide&u=a1aHR0cHM6Ly9yZWFjdC5kZXYvbGVhcm4&ntb=1"
  },
  {
    icon:<FaRocket/>,
    name:"Frontend Trends",
    href:"https://www.bing.com/ck/a?!&&p=839f0e1f5c39621226424729541663d4ff54591c83c0c827e1f942318afa0ac6JmltdHM9MTc1NTczNDQwMA&ptn=3&ver=2&hsh=4&fclid=319efe42-f70b-6f54-0fc0-ec59f6ad6e11&psq=frontend+trends&u=a1aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvYmxvZ3MvdG9wLWZyb250ZW5kLWRldmVsb3BtZW50LXRyZW5kcy8&ntb=1"
  }
]
const Aside = () => {
  return (
    <aside className='continer bg-gray-200 rounded shadow-md p-6'>
        <h2 className='text-xl font-bold'>📌Related links</h2>
        <ul className='space-y-2 mt-2'>

          {asidelinks.map((links, index) => (
                        <li key={index}>
                          <a href={links.href} className='flex items-center text-blue-500 gap-1 hover:underline'>
                            {links.icon}{links.name}
                          </a>
                        </li>

          ))}

        </ul>
    </aside>
  )
}

export default Aside 