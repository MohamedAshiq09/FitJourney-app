// src/components/ActivityForm.tsx
import { useState } from 'react';
import { ActivityType } from '@/types/Activity';

interface ActivityFormProps {
  onAddActivity: (type: ActivityType, duration: number) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddActivity }) => {
  const [type, setType] = useState<ActivityType>("Running");
  const [duration, setDuration] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (duration > 0) {
      onAddActivity(type, duration);
      setDuration(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value as ActivityType)}>
        <option value="Running">Running</option>
        <option value="Cycling">Cycling</option>
        <option value="Swimming">Swimming</option>
      </select>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(parseInt(e.target.value))}
        placeholder="Duration (min)"
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
