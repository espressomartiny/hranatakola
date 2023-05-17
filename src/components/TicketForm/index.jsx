import React, { useState, useEffect } from "react";
import Last from "../Last";
import DateInput from "../DateInput";
import TimeInput from "../TimeInput";
import TicketNumberInput from "../TicketNumberInput";
import validationData from "../../validationData";

const TicketForm = ({ onReservationComplete, onAnimateTrain }) => {
  const [values, setValues] = useState({
    TicketNumber: "",
    Date: "",
    Time: ""
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
    setIsTicketValid(values.TicketNumber === validationData.ticketNumber);
  }, [values.TicketNumber]);

  useEffect(() => {
    setIsDateValid(values.Date === validationData.date);
  }, [values.Date]);

  useEffect(() => {
    setIsTimeValid(values.Time === validationData.time);
  }, [values.Time]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div>
      {!isReserved && (
        <div>
          <form name="reservation-form">
            <TicketNumberInput
              name="TicketNumber"
              value={values.TicketNumber}
              onChange={handleChange}
            />
            {isTicketValid && (
              <DateInput
                name="Date"
                value={values.Date}
                onChange={handleChange}
              />
            )}
            {isDateValid && (
              <TimeInput
                name="Time"
                value={values.Time}
                onChange={handleChange}
              />
            )}
            {isTimeValid && (
              <div>
                <button className="btn-reservation" onClick={handleReservationComplete}>
                  Přerezervovat
                </button>
              </div>
            )}
          </form>
        </div>
      )}
      {isReserved && <Last animateTrain={isReserved} />}
    </div>
  );
};

export default TicketForm;
