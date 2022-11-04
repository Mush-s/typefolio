function Filter() {
  let filteredFriend = friends;

  const searchKeywords: any = enteredName
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g);

  if (searchKeywords) {
    const result = friends.filter((friend) =>
      searchKeywords.every((kw) => friend.name.toLowerCase().indexOf(kw) !== -1)
    );
    filteredFriend = result;
  }
}
