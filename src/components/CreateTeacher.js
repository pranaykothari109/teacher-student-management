import { Button } from "@mui/material";
import React, { useState } from "react";

function CreateTeacher() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
  }

  return (
    <>
      <form className="container text-center mt-5 col-lg-6" onSubmit={handleSubmit}>
        <div className=" mb-3 row">
          <label className="col-sm-4 col-form-label">Name</label>
          <div className="col-sm-6">
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Age</label>
          <div className="col-sm-6">
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={handleChange}
              value={formData.age}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-6">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">City</label>
          <div className="col-sm-6">
            <input
              type="text"
              name="city"
              className="form-control"
              onChange={handleChange}
              value={formData.city}
            />
          </div>
        </div>
        <div className="mt-5">
            {/* <button className="btn btn-primary" style={{width: 150}}>Submit</button> */}
            <Button type="submit" variant="contained" color="secondary" style={{width: 150}}>Submit</Button>
        </div>
      </form>
    </>
  );
}

export default CreateTeacher