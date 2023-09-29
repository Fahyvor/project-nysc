import React from 'react'
import './assignment.css'

const Assignment = () => {
  return (
    <div className='assignment-container'>
        <div className='assignment-header text-center mt-5'>
            <h3 className='font-bold'>Place of Primary Assignment</h3>
        </div>

        <table className='w-full mt-5'>
            <tr className='flex table-head text-left
            px-5 w-full'>
                <th>Name</th>
                <th>State</th>
                <th>LGA</th>
                <th>Organization</th>
                <th>Organization's Head</th>
            </tr>

            <tr className='flex table-body px-5 w-full'>
                <td>Chinasa</td>
                <td>Abia State</td>
                <td>Ikwuano</td>
                <td>Secondary School</td>
                <td>Miss Chioma J. Onwuzo</td>
            </tr>

            <tr className='flex table-body px-5 w-full'>
                <td>Chidera</td>
                <td>Abia State</td>
                <td>Ikwuano</td>
                <td>Secondary School</td>
                <td>Dr. Chinasa</td>
            </tr>
        </table>
    </div>
  )
}

export default Assignment