import React from "react";
import Link from 'next/link';

const Button = ({ styles ,text,href }) => (
  <Link href={href}  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient 
  rounded-[10px] outline-none ${styles} 
  object-cover border-2 border-white shadow-lg hover:shadow-2xl transition-transform transition-200 transform hover:scale-105 hover:border-blue-500`}>
    {text}
  </Link>
);

export default Button;