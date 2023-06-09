import React from "react";

const DateInput = ({ value, onChange }) => {
    return (
      <div>
        Datum (DD.MM.RRRR):<br />
        <input
          type="text"
          name="Date"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

export default DateInput