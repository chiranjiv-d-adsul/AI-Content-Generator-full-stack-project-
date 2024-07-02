"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Home, WalletCards, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen relative p-5 shadow-sm border-2 bg-white">
      <div className="flex justify-start">
        <Image src={'/logo.svg'} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-3.5 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index} passHref>
            <div
              className={`flex items-center space-x-2 p-3 gap-2 mb-2 hover:bg-gray-200 hover:rounded-md cursor-pointer
              ${path === menu.path ? 'bg-primary text-white rounded-md' : 'rounded-md'}
              `}
            >
              <menu.icon size={20} />
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
