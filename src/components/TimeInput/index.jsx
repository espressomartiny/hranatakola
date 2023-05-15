import React from "react";

const TimeInput = ({ value, onChange }) => {
    return (
      <div>
        Čas:<br />
        <input
          type="text"
          name="Time"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

export default TimeInput