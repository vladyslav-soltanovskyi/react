import React from "react";
import PropTypes  from "prop-types";
import cn from "classnames";

TaskItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggleStatus: PropTypes.func,
}

function TaskItem ({ id, text, done, onDelete, onToggleStatus }) {
  return (
    <li className={cn("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => onToggleStatus(id)}
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
}


export default TaskItem;