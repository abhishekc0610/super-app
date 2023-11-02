import React, { useEffect, useState } from "react";

// styles
import "./NoteCard.css";

function NoteCard() {
    const [note, setNote] = useState("")

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem('notes-data', JSON.stringify(note))
    }, [note])


  return (
    <div className="make-notes">
      <h1>All Notes</h1>
      <textarea name="note" value={note} onChange={handleChange} placeholder="write a note..."></textarea>
    </div>
  );
}

export default NoteCard;
