function Filter(a, b) {
  let filteredFriend = a;

  const searchKeywords: any = b
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g);

  if (searchKeywords) {
    const result = a.filter((friend) =>
      searchKeywords.every((kw) => friend.name.toLowerCase().indexOf(kw) !== -1)
    );
    filteredFriend = result;
  }
}
