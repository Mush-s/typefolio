import React, { useState } from "react";

const AddFriend = () => {
  const [name, setName] = useState();
  const [link, setLink] = useState();
  return (
    <form>
      <input text="type" value={name} />
      <input text="type" value={link} />
    </form>
  );
};

export default AddFriend;
