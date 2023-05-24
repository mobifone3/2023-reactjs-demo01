import React from "react";

export default function TableItem({ student, idx }) {
  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <th scope="row">
        <button className="btn btn-small btn-warning text-white">Sửa</button>
      </th>
      <td>{student?.name}</td>
      <td>{student?.address}</td>
    </tr>
  );
}
