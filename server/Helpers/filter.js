module.exports = {
  filterEntries: (array, field, type) => {
    let filtered = [];
    let temp = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i][field] === type) {
        temp = {};
        temp = array[i];
        filtered.push(temp);
      }
    }
    return filtered;
  },
  filterRange: (array, field, value, range) => {
    // range must be "greater" or "lesser"
    let filtered = [];
    let temp = {};
    for (let i = 0; i < array.length; i++) {
      if (range === 'greater') {
        if (array[i][field] >= value) {
          temp = {};
          temp = array[i];
          filtered.push(temp);
        }
      }
      if (range === 'lesser') {
        if (array[i][field] <= value) {
          temp = {};
          temp = array[i];
          filtered.push(temp);
        }
      }
    }
    return filtered;
  }
  
}