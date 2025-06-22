import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginPage() { //Defines an async function that handles login when a form is submitted.

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();//stops the default browser behavior — in a form, it prevents the page from reloading after submit.
    try {
      const res = await axios.post("http://localhost:3000/api/Authorization/login", {
        email,
        password,
      });
      alert("Login successful!");
      //console.log(res.data);
      const userId = res.data.user.id;  //obtain id from data os user
      navigate(`../FrontPage/${userId}`);


    } catch (err) {
      console.error(err);
      alert("Invalid credentials.");
    }
  };

  return (<form className="flex max-w-md flex-col gap-4"onSubmit={handleLogin}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="login page"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput
          id="password1"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
      <p className="text-sm text-gray-600">
        New user?{" "}
        <a href="/SignUpPage" className="text-blue-600 hover:underline">
           Sign in
        </a>
      </p>
    </form>
  );
}

export default LoginPage;
