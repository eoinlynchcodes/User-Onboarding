import React, { useState } from "react";
import './Form.css';

function Form(props) {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        termsOfService: false,
    });

  return (
    <form>
      <label>Name:</label>
      <input 
      type="text" 
      placeholder="Name:" />

      <label>Email:</label>
      <input 
      type="email" 
      placeholder="Email:" />

      <label>Password</label>
      <input 
      type="password" 
      placeholder="password" />

      <label>Terms of Service:</label>
      <input 
      type="checkbox" />

      <button>Submit!</button>
    </form>
  );
}

export default Form;
