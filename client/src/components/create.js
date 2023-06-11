import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./create.css";
 
export default function Create() {
 const [form, setForm] = useState({
  name: "",
  MinTemperature: "",
  MaxTemperature:"",
  size: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/Fish/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "",MinTemperature: "",MaxTemperature:"", size: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div className="form-container">
   <div>
    <div><h3>Agrega un nuevo pez</h3></div>
     <form onSubmit={onSubmit}>


       <div className="form-group">
         <label htmlFor="name" alignment>Especie</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>


       <div className="form-group">
         <label htmlFor="MinTemperature">Temperatura Minima</label>
         <input
           type="text"
           className="form-control"
           id="MinTemperature"
           value={form.MinTemperature}
           onChange={(e) => updateForm({ MinTemperature: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="MaxTemperature">Temperatura Maxima</label>
         <input
           type="text"
           className="form-control"
           id="MaxTemperature"
           value={form.MaxTemperature}
           onChange={(e) => updateForm({ MaxTemperature: e.target.value })}
         />
       </div>


       <div className="form-group">
         <label htmlFor="size">Tamano</label>
         <input
           type="text"
           className="form-control"
           id="size"
           value={form.size}
           onChange={(e) => updateForm({ size: e.target.value })}
         />
       </div>
     
       <div className="form-group button-container">
         <input
           type="submit"
           value="Create Fish"
           alignment="right"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
   </div>
 );
}