import { useState } from "react";
import { Button } from "@mantine/core";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";


function Floating() {
    const form = [
      { name: "name", label: "Name" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone" },
      { name: "message", label: "Message" }
    ];

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone){
        newErrors.phone = "Phone is required";
      } else if (/^[a-z]+$/i.test(formData.phone)){
        newErrors.phone = "letters are not allowed";
      }
      if (!formData.message) newErrors.message = "Message is required";
      return newErrors;

    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const validationErrors = validate();
      // console.log(validationErrors)
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        // Form is valid, submit data
        
         await addDoc(collection(db, "portfolio"),formData)
        alert("Message sent Successfuly")
        setFormData("")
      }else{
        alert("something went wrong")
      }
    };
  
  
    return (
    <form  className=" mt-4">
        {form.map((field, index) => (
          <div key={index} className="relative mb-4">
            <input
               type={field.name === "email" ? "email" : "text"}
               name={field.name}
              value={formData[field.name]}
            onChange={handleChange}
              // id={`floating_outlined_${field.name}`}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#64FFDA] peer"
              placeholder=" "
            />
            <label
              htmlFor={`floating_outlined_${field.name}`}
              className="absolute text-sm bg-[#112240] text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#64FFDA] peer-focus:text-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {field.label}
            </label>
            {errors[field.name] && (
            <p className="text-red-500  text-sm mt-1">{errors[field.name]}</p>
          )}
          </div>
        ))}
         <div className="flex justify-center items-center">
       <Button onClick={handleSubmit}   className="mt-7 text-[#112240]  bg-[#64FFDA] w-[50%]"    radius="md" component="a"  target="_blank">
            Send
          </Button>
       </div>
      </form>
    );
  }
  
  export default Floating;
  