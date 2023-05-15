import React from 'react';
import { render } from 'react-dom';
import './style.css';
import TicketForm from './components/TicketForm';
import Last from './components/Last';

const App = () => {
  const [isReservationComplete, setReservationComplete] = React.useState(false);

  const handleReservationComplete = () => {
    setReservationComplete(true);
  };

  return (
    <div className={`container ${isReservationComplete ? 'OK' : 'normal'}`}>
      <header>
        <div className="logo" />
        <h1>Hranatá kola</h1>
      </header>
      <main>
        {!isReservationComplete ? (
          <TicketForm onReservationComplete={handleReservationComplete} />
        ) : (
          <Last />
        )}
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};

render(<App />, document.getElementById('app'));