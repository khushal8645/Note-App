import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function addnote(note) {
    setnotes((prevnotes) => {
      return [...prevnotes, note];
    });
  }

  function deletenote(id) {
    setnotes((prevnotes) => {
      return prevnotes.filter((notesitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((notesitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesitem.title}
            content={notesitem.content}
            ondelete={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
