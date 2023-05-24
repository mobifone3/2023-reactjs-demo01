import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default function DataTable() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);

  useEffect(() => {
    if (!students?.[0] && !isApiCalled) {
      callGetAllStudents();
    }
  }, [students]);

  const callGetAllStudents = () => {
    setLoading(true);
    axios
      .get("https://5f9b85e1856f4c00168c26e6.mockapi.io/students")
      .then((response) => {
        setStudents(response?.data);
        setIsApiCalled(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRowClick = (std) => {
    console.log("CALLED IN PARENT --> ", std);
  };

  const handleDelRowClick = (std) => {
    console.log("CALLED IN PARENT DEL --> ", std);
    if (!std.id) return alert("Không có id");
    axios.delete("https://5f9b85e1856f4c00168c26e6.mockapi.io/students/" + std.id).then((response) => {
      console.log("CALL AFTER DELETE --> ", response);
      callGetAllStudents();
    });
  };

  return (
    <div style={{ backgroundColor: "white", maxHeight: "70vh", overflowY: "scroll" }}>
      <table className="table" style={{ height: "100%" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Thao Tác</th>
            <th scope="col">Tên</th>
            <th scope="col">Địa Chỉ</th>
          </tr>
        </thead>
        {students?.[0] ? (
          <tbody>
            {students.map((std, idx) => {
              return (
                <TableRow
                  key={idx}
                  student={std}
                  idx={idx}
                  handleRowClick={handleRowClick}
                  handleDelRowClick={handleDelRowClick}
                />
              );
              // return (
              //   <tr key={idx}>
              //     <th scope="row">{idx + 1}</th>
              //     <td>
              //       <button
              //         onClick={() => {
              //           handleRowClick(std);
              //         }}
              //         className="btn btn-sm btn-warning text-white"
              //       >
              //         Sửa
              //       </button>
              //     </td>
              //     <td>{std?.name}</td>
              //     <td>{std?.address}</td>
              //   </tr>
              // );
            })}
          </tbody>
        ) : loading ? (
          <div className="spinner-border" role="status"></div>
        ) : null}
      </table>
    </div>
  );
}
