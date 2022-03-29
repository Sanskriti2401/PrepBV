import React from "react";
import Nav from "../../nav/nav";
import "./questions.css"
  export default function Checkbox() {
    const [checked, setChecked] = React.useState(false);
  
    return (
      <label>
        <input type="checkbox" className="check"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    );
  }