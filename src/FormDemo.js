import React, { useEffect, useState } from "react";
import "./FormDemo.css";

export default function FormDemo() {
  const [formData, setFormData] = useState({});

  // #################################################################################
  // I. SIDE EFFECT HANDLE SECTION
  // #################################################################################
  useEffect(() => {
    console.log("EFF DEBUG --> ", formData);
  }, [formData]);

  // #################################################################################
  // II. HELPER SECTION
  // #################################################################################
  /**
   * Hàm xử lý khi form thay đổi
   * @param {*} e : input element nhận vào
   */
  const handleOnChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    console.log("FUNC LOG -> ", formData);
    if (!formData["password"]) alert("Không Có Pass");
  };

  // #################################################################################
  // III. JSX RENDER SECTION
  // #################################################################################
  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action method="post">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Username:
                  </label>
                  <input
                    value={formData["username"]}
                    onChange={handleOnChangeForm}
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <input onChange={handleOnChangeForm} type="text" name="password" id="password" className="form-control" />
                </div>
                <div className="form-group d-grid gap-2">
                  <button type="button" onClick={handleSubmitForm} name="submit" className="btn btn-info btn-md btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
