import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Formik, Field, Form } from 'formik';

// import Header from "./Header";
import "./Styles.css";

export function HookForm({callbackForAdd}) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  useEffect(() => {
    if (data){
      callbackForAdd(data)
    }
  },[data]);
  return (
    <div style={{ marginBottom: 10 }}>
      <h1 className="h1">Registration Form</h1>

      <form onSubmit={handleSubmit((data) => setData(data))}>
        
        <input {...register("firstName")} placeholder="First name" />
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select {...register("category", { required: true })}>
          <option value="">Select the Category</option>
          <option value="Working Profession">Working Profession</option>
          <option value="Student B">Student B</option>
        </select>
        <div className="gender-container">
          <h2>Gender</h2>
        <div>
          <input type="radio" name="gender" id="male" value='male' {...register('gender')}/>
          <label htmlFor="male">Male</label>
            
        </div>
        <div>
          <input type="radio" name="gender" id="female" value='female' {...register('gender')}/>
          <label htmlFor="female">Female</label>
            
        </div>
        </div>
        <div className="skill-container">
          <h2>Skills</h2>
        <div>
        <input type="checkbox" name="skills" id="html" value='HTML' {...register('skills')}  />
        <label htmlFor="html">HTML</label>
        </div>
        <div>
        <input type="checkbox" name="skills" id="css" value='CSS' {...register('skills')}  />
        <label htmlFor="css">CSS</label>
        </div>
        <div>
        <input type="checkbox" name="skills" id="javascript" value='Java Script' {...register('skills')}  />
        <label htmlFor="javascript">Java Script</label>
        </div>
        </div>
        <input id="submit" type="submit" />
      </form>




    </div>
  );
}
