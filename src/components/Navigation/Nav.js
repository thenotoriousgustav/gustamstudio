import React from "react";
import Button from "../Button";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div className='mt-3 border-t border-background px-3'>
      <ul className='mt-5 text-3xl font-light'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/work'>Work</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
      </ul>

      <div className='mt-4'>
        <Button variant='short'>Get in touch</Button>
      </div>
    </div>
  );
}
