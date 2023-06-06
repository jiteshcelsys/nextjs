import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="header">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/About">About</Link>
    </div>
  );
}

export default Navbar;
