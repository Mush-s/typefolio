import React, { useState } from "react";

const AddFriend = () => {
  const [name, setName] = useState<string>();
  const [link, setLink] = useState<string>();
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
      <input type="submit"/>
    </form>
  );
};

export default AddFriend;
