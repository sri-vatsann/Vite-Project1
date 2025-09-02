import React from 'react'

const tableheading=[
    {
        colName:"Avatar",
        icon :"🤵",

    },
    {
        colName:"Name",
        icon :"📛",

    },
    {
        colName:"Status",
        icon :"✅",

    }
];

const tabledata=[
    {
        avatar:"https://th.bing.com/th/id/OIP._350NcZ1cVkRCpsg0m9gQQHaHa?w=207&h=207&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        name:"Alice",
        status:"Active"
    },{
        avatar:"https://th.bing.com/th/id/OIP._350NcZ1cVkRCpsg0m9gQQHaHa?w=207&h=207&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        name:"Bob",
        status:"Inactive"
    }
]
const Table = () => {
  return (
    <div className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4'>📊 User Data</h2>
        <table className='border border-collapse min-w-full'>
            <thead>
                <tr>
                    {tableheading.map((heading)=>(
                        <th key={heading.colName} className='border border-gray-600 px-4 py-2 bg-gray-200'>
                            {heading.icon}{heading.colName}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {tabledata.map((user, index)=>(
                    <tr key={index}>
                        <td className=' border border-gray-300 px-4 py-2'>
                            <img height={50} width={50} src={user.avatar} alt="" />
                        </td>
                        <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                        <td className={`border border-gray-300 px-4 py-2 ${user.status == "Active"? `text-green-500` :`text-red-500`}`}>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table