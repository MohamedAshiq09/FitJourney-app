import React from 'react';
import { useActivityTracker } from './hooks/useActivityTracker';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import ProgressChart from './components/ProgressChart';
import Layout from './components/Layout';

const App: React.FC = () => {
  const { activityData, addActivity } = useActivityTracker();  

  return (
    <Layout>
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activityData} />  {/* Pass activityData */}
      <ProgressChart activities={activityData} />  {/* Pass activityData */}
    </Layout>
  );
};

export default App;
