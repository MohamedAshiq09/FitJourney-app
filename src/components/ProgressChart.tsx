// src/components/ProgressChart.tsx
import { Activity } from '@/types/Activity';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ProgressChartProps {
  activities: Activity[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ activities }) => {
  const groupedData = activities.reduce((acc, activity) => {
    acc[activity.type] = (acc[activity.type] || 0) + activity.duration;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: 'Duration (min)',
        data: Object.values(groupedData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default ProgressChart;
