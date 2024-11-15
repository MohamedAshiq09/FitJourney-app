import { useState } from 'react';
import { Activity } from '@/types/Activity'; 

export const useActivityTracker = () => {
    const [activityData, setActivityData] = useState<Activity[]>([]);
  
    const addActivity = (type: string, duration: number) => {
      const newActivity: Activity = {
        id: new Date().toISOString(), // Using ISO string for unique ID
        type,                        // Activity type (e.g., "Running")
        duration,                    // Activity duration in minutes
        date: new Date().toLocaleDateString(), // Current date as a string
      };
  
      setActivityData((prevData) => [...prevData, newActivity]);
    };
  
    return { activityData, addActivity };
  };