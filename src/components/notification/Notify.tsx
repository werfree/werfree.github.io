import React from "react";
import "./Notify.css";
function Notify() {
  return (
    <div className="flex px-2 py-1 mx-2">
      <div className="status-ellipse-wrapper flex items-center justify-center m-auto blink">
        <div className="status-ellipse m-auto"></div>
      </div>
      <div className="flex m-auto pt-[0.5px] ml-2 font text-sm font-semibold">
        Available for Projects
      </div>
    </div>
  );
}

export default Notify;
