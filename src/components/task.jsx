import React, { useState } from "react";

export default function Task(props) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task">
      <p style={{ textDecorationLine: completed ? "line-through" : "none" }}>
        {props.task}
      </p>
      <div>
        <button
          onClick={() => {
            setCompleted(!completed && true);
          }}
        >
          ✅
        </button>
        <button onClick={() => props.onDeleteTask(props.task)}>❌</button>
      </div>
    </div>
  );
}
