import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   temperature: "",
   size: "",
   fish: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/Fish/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Fish with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      temperature: form.temperature,
      size: form.size,
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Fish</h3>
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
        <br />
  
        <div className="form-group">
          <input
            type="submit"
            value="Update Fish"
            className="btn btn-primary"
          />
       </div>
     </form>
   </div>
 );
}