"use server"

import { type Category, Navbar } from '@/components/navbar';

export default async function Home() {
  const categories: Category[] = [
    {
      id: "1",
      name: "Iphone"
    }
  ]
  return (
  <>
    <Navbar categories={categories}/>
  </>
  )
}

