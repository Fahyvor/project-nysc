import React from 'react'

const Members = () => {
  return (
    <div>
            <div className='assignment-container'>
        <div className='assignment-header text-center mt-5'>
            <h3 className='font-bold'>Corps Members</h3>
        </div>

        <table className='w-full mt-5'>
            <tr className='flex members-table-head
            px-5 w-full'>
                <th>Member ID</th>
                <th>Name</th>
                <th>State</th>
                <th>LGA</th>
                <th>Organization</th>
                <th>Postion</th>
                <th>Months Left</th>
            </tr>

            <tr className='flex members-table-body px-5 w-full'>
                <td>10001</td>
                <td>Chinasa</td>
                <td>Abia State</td>
                <td>Ikwuano</td>
                <td>Secondary School</td>
                <td>Teacher</td>
                <td>3months</td>
            </tr>

        </table>
    </div>
    </div>
  )
}

export default Members