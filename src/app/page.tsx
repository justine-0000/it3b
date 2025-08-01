"use client";

import { useEffect, useState } from "react";

interface User{
  id: number;
  name: string | null;
  email: string | null;
  address: string | null;
  createdAt: string | null;
  UpdatedAt: string | null;
}

export default function HomePage() {
  const[users, setUsers] = useState<User[]>([]);
  
  useEffect(() =>{
  async function fetchUsers(){
    try {
      const response = await fetch("/api/users");
      if(!response.ok){
        throw new Error("Failed to fetch users:");
      }
      const data: User[] = await response.json();
      setUsers(data);
    }catch(error){
      console.error("Error fetching users:", error);
    }
  }
  void fetchUsers();

  })

  return (
   <main className="bg-blue-500">
    <code>{JSON.stringify(users, null, 2)}</code>
   </main>
  );
}
