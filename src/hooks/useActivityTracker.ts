"use client";

import { useState } from 'react';
import { Activity } from '@/types/Activity'; 

export const useActivityTracker = () => {
    const [activityData, setActivityData] = useState<Activity[]>([]);
  
    const addActivity = (name: string, duration: number) => {
      const newActivity: Activity = {
        id: Date.now(),  
        type: name,
        duration,
        date: new Date().toLocaleDateString(),  
      };
      setActivityData([...activityData, newActivity]);  
    };
  
    return { activityData, addActivity };
  };