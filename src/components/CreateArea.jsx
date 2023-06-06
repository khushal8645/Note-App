import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitbtn(event) {
    props.onadd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitbtn}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
