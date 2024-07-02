import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm'; // Make sure eq is correctly imported
import { AIOutput, UserSubscription } from '@/utils/schema';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

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
  const [maxWords, setMaxWords] = useState<number>(10000); // Corrected type for maxWords
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setLoading(true);
        setError(null); // Clear previous errors

        try {
          await GetData();
          await IsUserSubscribed(); // Corrected function name
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
      GetData();
    }
  }, [updateCreditUsage, user]);

  const GetData = async () => {
    const email = user?.primaryEmailAddress?.emailAddress || '';
    if (!user?.primaryEmailAddress?.emailAddress) {
      throw new Error('User email address is not available');
    }

    try {
      const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, email));
      GetTotalUsage(result);
    } catch (err) {
      throw new Error();
    }
  };

  const IsUserSubscribed = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      throw new Error('User email address is not available');
    }

    try {
      const result = await db.select().from(AIOutput).where(
        eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress ?? '')
      ); // Ensure email is accessed correctly
      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(1000000);
      }
    } catch (err) {
      throw new Error();
    }
  };

  const GetTotalUsage = (result: { aiResponse?: string | null }[]) => {
    let total: number = 0;
    result.forEach((element) => {
      // Check if aiResponse exists and is not null before adding its length
      if (element.aiResponse && typeof element.aiResponse === 'string') {
        total += element.aiResponse.length;
      }
    });
    setTotalUsage(total);
    if (total > maxWords) {
      setShowAlert(true);
      setShowModal(true); // Show the modal when the limit is exceeded
    } else {
      setShowAlert(false);
    }
    console.log(total);
  };


  const handleCloseModal = () => {
    setShowModal(false);
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
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default UsageTrack;
