'use client';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import axio from 'axios';
import { Loader2Icon } from 'lucide-react';
import moment from 'moment';
import { useContext, useState } from 'react';

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const {user}=useUser();
  const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext)

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axio.post('/api/create-subscription', {});

      console.log(resp.data);
      OnPayment(resp.data.id);
    } catch (error) {
      setLoading(false);
    }
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: 'AI Content Generator',
      description: 'Monthly Subscription',
      handler: async (resp: any) => {
        console.log(resp);
        if(resp){
          SaveSubscription(resp.razorpay_payment_id)
        }
        setLoading(false);
      }
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription=async(paymentId:string)=>{
    const result=await db.insert(UserSubscription).values({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      active:true,
      paymentId:paymentId,
      joinDate:moment().format('DD/MM/YYYY')
    });
    console.log(result);
    if(result){
      window.location.reload();
    }

  }

  return (
    <>
      <div className="background"></div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      <div className="flex flex-col items-center justify-center gap-20 py-14 m-0 text-gray-900 bg-blue-100 md:flex-row">
        <article className="flex flex-col items-center p-12 bg-white rounded-md text-lg">
          <h2 className="text-2xl font-medium">Free</h2>
          <var className="text-4xl font-light my-4">
            <abbr className="no-underline">$</abbr>0<small className="text-base">/MO</small>
          </var>
          <ul className="list-none p-0 mb-6">
            <li className="flex items-center gap-2 my-2">
              <p>10 user requests</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>24/7 support</p>
            </li>
          </ul>
          <button className="grid place-items-center min-w-[150px] py-3 border-2 border-blue-500 rounded-md bg-transparent text-black hover:bg-blue-500 hover:text-white transition">
            {!userSubscription?'Active Plan':''}
          </button>
        </article>
        <article className="flex flex-col items-center p-12 bg-white rounded-md text-lg">
          <h2 className="text-2xl font-medium">Mid</h2>
          <var className="text-4xl font-light my-4">
            <abbr className="no-underline">$</abbr>99<small className="text-base">/MO</small>
          </var>
          <ul className="list-none p-0 mb-6">
            <li className="flex items-center gap-2 my-2">
              <p>10 user requests</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>Lorem ipsum dolor si.</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>Email support</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>100 Lorem ipsum dolor.</p>
            </li>
            <li className="flex items-center gap-2 my-2">
              <p>24/7 support</p>
            </li>
          </ul>
          <button
            disabled={loading}
            onClick={CreateSubscription}
            className="grid place-items-center min-w-[150px] py-3 border-2 border-blue-500 rounded-md bg-blue-500 text-white transition"
          >
            {loading && <Loader2Icon className="animate-spin" />}
          {userSubscription?'Active Plan':'Get Started'}
          </button>
        </article>
      </div>
    </>
  );
};

export default Billing;
