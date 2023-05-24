import { Route, Routes } from "react-router";
import FormDemo from "./components/qlsv/FormDemo";
import Header from "./components/common/Header";
import DataTable from "./components/qlsv/DataTable";
import HomePrice from "./components/common/HomePrice";
import { useEffect, useState } from "react";

export default function () {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("APP --> EFF DEBUG --> ", students);
  }, [students]);

  const handleSetStudents = (_formData) => {
    setStudents([...students, _formData]);
  };

  return (
    <>
      <Header />
      <section className="search-banner text-white py-3 form-arka-plan" id="search-banner">
        <div className="container py-5 my-5">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 className="text-white siyah-cerceve">Web Gì Đó</h2>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<HomePrice />}></Route>
            <Route path="/table" element={<DataTable students={students} />}></Route>
            <Route path="/form" element={<FormDemo handleSetStudents={handleSetStudents} />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

// anonymous function (es5) es6 arrow function
