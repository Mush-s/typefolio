import React, { useState } from "react";

const AddFriend = () => {
  const [name, setName] = useState<string>();
  const [link, setLink] = useState<string>();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  return (
    <form>
      <input type="text" value={name} onChange={(e) => changeName(e)} />
      <input type="text" value={link} onChange={(e) => changeLink(e)} />
      <input type="submit" />
    </form>
  );
};

export default AddFriend;
