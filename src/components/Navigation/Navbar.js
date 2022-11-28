import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";

import Nav from "./Nav";

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const showAnim = gsap
      .from(navRef.current, {
        yPercent: -150,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  function handleNavbar() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='container fixed top-4 z-50 mx-auto w-full px-4 lg:px-10'>
      <div
        className={classNames(
          "transform overflow-hidden rounded-2xl bg-secondary transition-all duration-500 ease-in-out",
          isMenuOpen ? "h-[370px]" : "h-16"
        )}
        ref={navRef}
      >
        <div className='flex justify-between p-4 text-xl'>
          <Link to='/'>gstm.studio</Link>
          <button onClick={handleNavbar}>Menu {isMenuOpen ? "-" : "+"}</button>
        </div>
        <Nav />
      </div>
    </nav>
  );
}
