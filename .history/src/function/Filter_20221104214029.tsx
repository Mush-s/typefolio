export function Filter(array, keyword) {
  let filteredFriend = array;

  const searchKeywords: any = keyword
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g);

  if (searchKeywords) {
    const result = array.filter((friend) =>
      searchKeywords.every((kw) => friend.name.toLowerCase().indexOf(kw) !== -1)
    );
    filteredFriend = result;

    return filteredFriend;
  }
}
