"use client";

import { useState } from 'react';
import { Activity } from '@/types/Activity'; 

export const useActivityTracker = () => {
    const [activityData, setActivityData] = useState<Activity[]>([]);
  
    const addActivity = (name: string, duration: number) => {
      const newActivity: Activity = {
        id: Date.now(),  // Generate a unique ID for each activity
        type: name,
        duration,
        date: new Date().toLocaleDateString(),  // Use the current date
      };
      setActivityData([...activityData, newActivity]);  // Add new activity to the list
    };
  
    return { activityData, addActivity };
  };