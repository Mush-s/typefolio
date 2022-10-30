import React, { useState } from "react";

const AddFriend = () => {
  const [name, setName] = useState();
  const [link, setLink] = useState();
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
    </form>
  );
};

export default AddFriend;
