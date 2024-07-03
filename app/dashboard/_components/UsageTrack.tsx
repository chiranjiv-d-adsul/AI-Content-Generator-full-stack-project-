import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 w-96">
        <h2 className="text-lg font-bold mb-4">Upgrade Plan</h2>
        <p className="mb-4">You have exceeded your credit limit! Please upgrade your plan to continue using the service.</p>
        <div className="flex justify-end">
          <Button onClick={onClose} className="mr-2">Cancel</Button>
          <Button className="bg-primary text-white">Upgrade Now</Button>
        </div>
      </div>
    </div>
  );
};

const UsageTrack: React.FC = () => {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [maxWords, setMaxWords] = useState(10000);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setLoading(true);
        setError(null); // Clear previous errors

        try {
          await getData();
          await isUserSubscribed();
        } catch (err) {
          console.error('Error fetching data:', err);
          setError('Failed to fetch usage data.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [updateCreditUsage, user]);

  const isUserSubscribed = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) {
      console.error('User email address is not available');
      throw new Error('User email address is not available');
    }

    try {
      const result = await db.select().from(UserSubscription)
        .where(eq(UserSubscription.email, email));
      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(1000000);
      } else {
        setUserSubscription(false);
        setMaxWords(10000); // Or set to a default value if user is not subscribed
      }
    } catch (err) {
      console.error('Database query error:', err);
      throw new Error('Database query error');
    }
  };

  const getData = async () => {
    const userName = user?.username; // Assuming you have the userName from the user object
    if (!userName) {
      console.error("User's username is undefined");
      throw new Error("User's username is undefined");
    }

    try {
      // First, retrieve the user's email address from the UserSubscription table
      const subscriptionResult = await db.select().from(UserSubscription).where(eq(UserSubscription.userName, userName));

      if (subscriptionResult.length === 0) {
        console.error("User not found in UserSubscription table");
        throw new Error("User not found in UserSubscription table");
      }

      const email = subscriptionResult[0].email;
      if (email) {
        // Now perform the query on the AIOutput table using the email
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, email));
        getTotalUsage(result);
      } else {
        console.error("User's email address is undefined");
        throw new Error("User's email address is undefined");
      }
    } catch (err) {
      console.error('Database query error:', err);
      throw new Error('Database query error');
    }
  };

  const getTotalUsage = (result: { aiResponse?: string | null }[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length || 0);
    });
    setTotalUsage(total);
    if (total > maxWords) {
      setShowAlert(true);
      // setShowModal(true); // Uncomment if modal should be shown when limit is exceeded
    } else {
      setShowAlert(false);
    }
    console.log(total);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='mx-5'>
      <div className='bg-primary text-white rounded-lg p-3'>
        <h2>Credits</h2>
        <div className='h-2 bg-[#5f7bc9] w-full rounded-full'>
          <div
            className='h-2 bg-white rounded-full'
            style={{
              width: (totalUsage / maxWords) * 100 + '%',
            }}
          ></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage} words used out of {maxWords}</h2>
        {showAlert && <div className='text-red-500'>You have exceeded your credit limit! Please upgrade your plan.</div>}
      </div>
      <Button className='bg-[#c4c1c1] hover:bg-primary text-black hover:text-white rounded-md p-2 mt-2 w-full'>
        <a href="/dashboard/billing">Upgrade Plan</a>
      </Button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UsageTrack;
