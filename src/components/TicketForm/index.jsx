import React, { useState, useEffect } from "react";
import Last from "../Last";
import DateInput from "../DateInput";
import TimeInput from "../TimeInput";
import TicketNumberInput from "../TicketNumberInput";

const TicketForm = ({ onReservationComplete, onAnimateTrain }) => {
  const [values, setValues] = useState({
    TicketNumber: "",
    Date: "",
    Time: "",
  });
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const handleReservationComplete = () => {
    onReservationComplete();
    onAnimateTrain();
  };

  useEffect(() => {
    setIsTicketValid(values.TicketNumber === "0573");
  }, [values.TicketNumber]);

  useEffect(() => {
    setIsDateValid(values.Date === "22.09.2019");
  }, [values.Date]);

  useEffect(() => {
    setIsTimeValid(values.Time === "21:11");
  }, [values.Time]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      {!isReserved && (
        <div>
          <TicketNumberInput
            value={values.TicketNumber}
            onChange={handleChange}
          />
          {isTicketValid && (
            <DateInput value={values.Date} onChange={handleChange} />
          )}
          {isDateValid && (
            <TimeInput value={values.Time} onChange={handleChange} />
          )}
          {isTimeValid && (
            <div>
              <button className="btn-reservation" onClick={handleReservationComplete}>Přerezervovat</button>
            </div>
          )}
        </div>
      )}
      {isReserved && <Last animateTrain={isReserved} />}
    </div>
  );
};

export default TicketForm;