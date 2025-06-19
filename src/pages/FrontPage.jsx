import React from "react";
import { ListGroup, ListGroupItem } from "flowbite-react";
import FrontPageNavbar from "../Components/FrontPageNavbar";
/*
function FrontPage() {
    return <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem href="#">Profile</ListGroupItem>
        <ListGroupItem href="#">Settings</ListGroupItem>
        <ListGroupItem href="#">Messages</ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
}

export default FrontPage;
*/



function FrontPage() {
  // Simulated contact list (you can later fetch this from API/backend)
  const contacts = [
    { id: 1, name: "Alice", lastMsg: "Hey there!" },
    { id: 2, name: "Bob", lastMsg: "Let's meet" },
    { id: 3, name: "Charlie", lastMsg: "See you tomorrow" },
  ];

  return (
<div className="flex flex-col fixed top-0 left-0 w-full z-40 bg-white shadow">
  <div className="w-full">
    <FrontPageNavbar />
  </div>
  <ListGroup className="w-full">
    <ListGroupItem href="#" active className="w-full">
      Profile
    </ListGroupItem>
    <ListGroupItem href="#" className="w-full">Settings</ListGroupItem>
    <ListGroupItem href="#" className="w-full">Messages</ListGroupItem>
    <ListGroupItem href="#" className="w-full">Download</ListGroupItem>
  </ListGroup>
</div>

  );
}






export default FrontPage;

