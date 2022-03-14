// too small to be a react component plus it does not have any data is just pure html
import React from "react";

function Opening() {
  return (
    <div className="opening-time">
      <h3>Opening Time</h3>
      <table className="opening-time">
        <tr>Monday-Friday : 10:00-20:00</tr>
        <tr>Staurday : 12:00-22:00</tr>
        <tr>Sunday : 12:00-18:00</tr>
      </table>
    </div>
  );
}

export default Opening;
