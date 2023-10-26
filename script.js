// Remove duplicates from the array
const uniqueArr = [...new Set(arr)];

// Sort the array in descending order
uniqueArr.sort((a, b) => b - a);

if (uniqueArr.length <= 1) {
  return -Infinity;
}

return uniqueArr[1];
