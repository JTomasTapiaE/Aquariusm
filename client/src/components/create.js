import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
  name: "",
  temperature: "",
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
 
   setForm({ name: "",temperature: "",size: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Add New Fish</h3>
     <form onSubmit={onSubmit}>


       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>


       <div className="form-group">
         <label htmlFor="temperature">temperature</label>
         <input
           type="text"
           className="form-control"
           id="temperature"
           value={form.temperature}
           onChange={(e) => updateForm({ temperature: e.target.value })}
         />
       </div>


       <div className="form-group">
         <label htmlFor="size">size</label>
         <input
           type="text"
           className="form-control"
           id="size"
           value={form.size}
           onChange={(e) => updateForm({ size: e.target.value })}
         />
       </div>
     
       <div className="form-group">
         <input
           type="submit"
           value="Create Fish"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}