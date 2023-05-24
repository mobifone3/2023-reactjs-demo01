import React, { useEffect } from "react";

export default function DataTable({ students, ...props }) {
  useEffect(() => {
    console.log("TBL --> ", students);
  }, [students]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {students?.[0]
            ? students.map((std, idx) => {
                return (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{std?.username}</td>
                    <td>{std?.password}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
