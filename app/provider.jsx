'use client'
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useUser } from "@clerk/nextjs";
import axios from 'axios';
const Provider = ({ children }) => {
  
  // Save User in Database
  const {user} = useUser();

  useEffect(()=>{
    user && CheckUserAuth();
  },[user]);

  const CheckUserAuth = async()=> {
    const result = await axios.post('/api/users', {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress
    });
    console.log(result.data);
    // change as requirement
    if(result){
      
    }
  }
  
  return (
    <div>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">{children}</div>
    </div>
  );
};

export default Provider;
