import React from 'react'

const TableRow = ({ title, rating,awards }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{awards}</td>
    </tr>
  )
}
export default TableRow;