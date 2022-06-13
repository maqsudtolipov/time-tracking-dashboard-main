import { useState } from 'react';

import Container from './components/UI/Container.jsx';
import Profile from './components/Profile/Profile.jsx';
import Card from './components/Card/Card.jsx';
import data from './data.json';

function App() {
  const [time, setTime] = useState('Weekly');

  return (
    <div className='app'>
      <Container>
        <Profile time={time} setTime={setTime} />
        {data.map((card, id) => {
          return (
            <Card
              key={id}
              title={card.title}
              timeframes={card.timeframes}
              time={time}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
