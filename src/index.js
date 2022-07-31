
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  } else {
    let newMatrix = matrix.map((value, index) => {
      if (index % 2 > 0) {
        return value.reverse();
      } else {
       return value;
      }
    });
    return newMatrix.flat()
  }
}
