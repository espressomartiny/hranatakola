import React from "react";

const TicketNumberInput = ({ value, onChange }) => {
    return (
      <div>
        Číslo jízdenky:<br />
        <input
          type="text"
          name="TicketNumber"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default TicketNumberInput;