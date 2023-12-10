"use client"

import { Menu, Search, ShoppingBag, User } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export type Category =  {
    id: string,
    name: string
}

export function Navbar({categories}: {categories: Category[]}) {

    return (
    <nav className='flex p-4 justify-between'>
      <Sheet>
        <SheetTrigger>
          <Menu/>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader className='text-start'>
            <SheetTitle>Belanja</SheetTitle>
            {categories.map(category => (
              <SheetDescription id={category.id} className='pl-4'>{category.name}</SheetDescription>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>        
      <div className='flex gap-8'>
        <button>
          <Search/>
        </button>
        <button>
          <ShoppingBag />
        </button>
        <button>
          <User />
        </button>
      </div>
    </nav>
    )
  }