import React from "react";
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square className="square"/>
        <Square className="square"/>
        <Square className="square"/>
      </div>
      <div className="board-row">
        <Square className="square"/>
        <Square className="square"/>
        <Square className="square"/>
      </div>
      <div className="board-row">
        <Square className="square"/>
        <Square className="square"/>
        <Square className="square"/>
      </div>
    </div>
  );
}

function Square () {
  return <button>1</button>
}
