import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Activities').then(response => {
      console.log(response);
      setActivities(response.data);
    }) 
  }, [])


  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List bulleted>
        {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title} {activity.city}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
