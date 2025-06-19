import React, { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";

export function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    dp: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/Authorization/signup", formData);
      alert("Signup successful!");
    } catch (error) {
      console.error(error);
      alert("Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <TextInput id="name" name="name" required value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <TextInput id="password" name="password" type="password" required value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <TextInput id="age" name="age" type="number" required value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="mobile">Mobile</Label>
        <TextInput id="mobile" name="mobile" required value={formData.mobile} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="dp">Display Picture URL</Label>
        <TextInput id="dp" name="dp" type="url" required value={formData.dp} onChange={handleChange} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SignUpPage;
