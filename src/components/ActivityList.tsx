import { Activity } from "@/types/Activity";

interface ActivityListProps {
    activities: Activity[];
  }
  
  const ActivityList: React.FC<ActivityListProps> = ({ activities }) => (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.date} - {activity.type} for {activity.duration} minutes
        </li>
      ))}
    </ul>
  );
  
  export default ActivityList;