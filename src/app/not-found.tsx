"use client"

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';
import Maintenance from '../components/Maintenance';

const maintenanceEndDate = new Date('2025-01-05T00:00:00');
const isMaintenance = true;

const NotFoundContent = dynamic(() => import('@/components/NotFoundContent'), {
  ssr: false
})

export default function NotFound() {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  if (isMaintenance && Date.now() < maintenanceEndDate.getTime()) {
    return <Maintenance endDate={maintenanceEndDate} />;
  }

  return <NotFoundContent />;
}
