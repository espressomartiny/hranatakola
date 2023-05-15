import React, { useState } from 'react';
import Last from './Last';

const TicketForm = () => {
  const [values, setValues] = useState({
    TicketNumber: '',
    Date: '',
    Time: ''
  });
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    if (name === 'TicketNumber') {
      setIsTicketValid(value === '0573');
    }
    if (name === 'Date') {
      setIsDateValid(value === '22.09.2019');
    }
    if (name === 'Time') {
      setIsTimeValid(value === '21:11');
    }
  };

  const handleReserve = () => {
    if (isTicketValid && isDateValid && isTimeValid) {
      setIsReserved(true);
    } else {
      console.log('Neplatné údaje rezervace!');
    }
  };

  return (
    <div>
      {!isReserved && (
        <div>
          <div>
            Cislo jizdenky:<br />
            <input
              type="text"
              name="TicketNumber"
              value={values.TicketNumber}
              onChange={handleChange}
            />
          </div>
          {isTicketValid && (
            <div>
              Datum:<br />
              <input
                type="text"
                name="Date"
                value={values.Date}
                onChange={handleChange}
              />
            </div>
          )}
          {isDateValid && (
            <div>
              Cas:<br />
              <input
                type="text"
                name="Time"
                value={values.Time}
                onChange={handleChange}
              />
            </div>
          )}
          {isTimeValid && (
            <div>
              <button type="button" onClick={handleReserve}>Prerezervovat</button>
            </div>
          )}
        </div>
      )}
      {isReserved && <Last />}
    </div>
  );
};

export default TicketForm;
