import { Avatar, TextInput, Button } from 'flowbite-react';

export  function PersonalPage() {
  return (
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your email</Label>
          </div>
          <TextInput id="email1" type="email" placeholder="Personal page" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
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

export default PersonalPage;