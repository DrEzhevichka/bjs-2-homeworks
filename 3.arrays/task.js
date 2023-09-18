function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(gndr => gndr.gender === gender).map(ages => ages.age).reduce((acc, item, index, users) => {
    acc += item;
    if (index === users.length - 1) {
      return acc / users.length;
    }
    return acc;
  }, 0);
  if (users.length === 0) {
    return 0;
  }
  return result;
}