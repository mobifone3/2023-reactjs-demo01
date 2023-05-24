import React, { useEffect, useState } from "react";
import "./FormDemo.css";

export default function FormDemo({ handleAddStudent, ...props }) {
  const [formData, setFormData] = useState({});

  // #################################################################################
  // I. SIDE EFFECT HANDLE SECTION
  // #################################################################################

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
    if (!formData["address"] || !formData["name"]) return alert("Không Có Address");
    handleAddStudent(formData);
  };

  // #################################################################################
  // III. JSX RENDER SECTION
  // #################################################################################
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card acik-renk-form">
          <div className="card-body">
            <div id="login">
              <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                      <form id="login-form" className="form">
                        <h3 className="text-center text-secondary">Nhập Sinh Viên</h3>
                        <div className="form-group">
                          <label htmlFor="name" className="text-secondary">
                            Tên:
                          </label>
                          <input
                            value={formData["name"]}
                            onChange={handleOnChangeForm}
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="address" className="text-secondary">
                            Địa Chỉ:
                          </label>
                          <input
                            onChange={handleOnChangeForm}
                            type="text"
                            name="address"
                            id="address"
                            className="form-control mb-5"
                          />
                        </div>
                        <div className="form-group d-grid gap-2">
                          <button
                            type="button"
                            onClick={handleSubmitForm}
                            name="submit"
                            className="btn btn-success btn-md btn-block"
                          >
                            Cập Nhập
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
