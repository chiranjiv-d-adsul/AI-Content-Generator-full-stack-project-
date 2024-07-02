

"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [userSubscription, setUserSubscription]=useState<boolean>(false);
  const [updatCreditUsage, setUpdateCreditUsage]= useState<any>();

  return (
    <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
      <UpdateCreditUsageContext.Provider value={{updatCreditUsage, setUpdateCreditUsage}}>
    <div className='bg-slate-100 h-screen'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
      {children}
      </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
  )
}

export default layout
