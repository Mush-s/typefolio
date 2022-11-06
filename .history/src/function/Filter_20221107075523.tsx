export function Filter(array, keyword) {
  let filteredFriend = array;

  const searchKeywords: any = keyword
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g);

  if (searchKeywords) {
    const result = array.filter((friend) =>
      searchKeywords.every((key) => friend.name.toLowerCase().indexOf(key) !== -1)
    );
    filteredFriend = result;

    return filteredFriend;
  }
}
