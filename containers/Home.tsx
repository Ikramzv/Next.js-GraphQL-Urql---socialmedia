import { User } from 'next-auth';
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import logo from "../assets/logowhite.png";
import Sidebar from "../components/Sidebar";


type Props = {
  user: User
}

const Home = ({ user } : Props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen duration-75 ease-out' >
        <div className='hidden md:flex h-screen flex-initial' >
          <Sidebar />
        </div>
        <div className='flex md:hidden flex-row' >
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <Link href={"/"} >
            <Image 
              src={logo}
              alt='logo'
              width={130}
            />
          </Link>
          <Link href={`/profile/${user?.id}`} >
            <Image 
              src={user.image as string}
              className="w-28"
              alt='logo'
              height={100}
              width={100}
              priority
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in' >
            <div className='absolute w-full flex justify-end items-center p-2' >
              <AiFillClockCircle 
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
          </div>
        )}
    </div>
  )
}

export default Home