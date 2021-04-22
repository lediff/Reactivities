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
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'/>
        <List></List>
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title} {activity.city}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
