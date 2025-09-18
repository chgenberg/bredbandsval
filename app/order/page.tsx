'use client';

import { useEffect, useState } from 'react';
import OrderPage from '@/components/OrderPage';

export default function Order() {
  const [prefilledAddress, setPrefilledAddress] = useState({
    address: 'Södra Skjutbanevägen 10',
    postalCode: '439 55',
    city: 'Åsa'
  });

  useEffect(() => {
    // Försök hämta adressinfo från sessionStorage
    const storedAddress = sessionStorage.getItem('userAddress');
    if (storedAddress) {
      try {
        const parsed = JSON.parse(storedAddress);
        setPrefilledAddress(parsed);
      } catch (e) {
        console.error('Could not parse stored address:', e);
      }
    }
  }, []);

  return <OrderPage prefilledAddress={prefilledAddress} />;
}
