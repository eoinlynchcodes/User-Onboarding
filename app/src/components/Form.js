import React, { useState } from "react";
import './Form.css';

function Form(props) {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        termsOfService: false,
    });

    const handleChanges = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>Name:</label>
      <input 
      type="text" 
      placeholder="Name:"
      name="name"
      value={formData.name}
      onChange={event => handleChanges(event)}
      />

      <label>Email:</label>
      <input 
      type="email" 
      placeholder="Email:" 
      name="email"
      value={formData.email}
      onChange={event => handleChanges(event)}
      />

      <label>Password</label>
      <input 
      type="password" 
      placeholder="password"
      name="password"
      value={formData.password}
      onChange={event => handleChanges(event)}
      />

      <label>Terms of Service:</label>
      <input 
      type="checkbox"
      name="termsOfService"
      value={formData.termsOfService}
      />

      <button>Submit!</button>
    </form>
  );
}

export default Form;
