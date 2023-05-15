import React from 'react';
import { render } from 'react-dom';
import './style.css';
import TicketForm from './components/TicketForm/index';
import Last from './components/Last/index';
import train from './img/train2.png';

const App = () => {
  const [isReservationComplete, setReservationComplete] = React.useState(false);
  const [isAnimatingTrain, setAnimatingTrain] = React.useState(false);

  const handleReservationComplete = () => {
    setReservationComplete(true);
  };

  const handleAnimateTrain = () => {
    setAnimatingTrain(true);
  };

  return (
    <div className={`container ${isReservationComplete ? 'complete' : 'normal'}`}>
      <header>
        
      </header>
      <main>
        
        <img className="train-image" src={train} alt="Train" />
       
        {!isReservationComplete ? (
          <TicketForm
            onReservationComplete={handleReservationComplete}
            onAnimateTrain={handleAnimateTrain}
          />
        ) : (
          <Last animateTrain={isAnimatingTrain} />
        )}
      </main>
      <footer>
        <p>Hranatá kola, s.r.o.</p>
      </footer>
    </div>
  );
};

render(<App />, document.getElementById('app'));