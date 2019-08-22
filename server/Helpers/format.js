module.exports = {

  mainList: (arr) => {

    let formattedArr = [];
    let formatted = {};
    for (let i = 0; i < arr.length; i++) {
      formatted = {};
      formatted["id"] = arr[i]["id"];
      formatted["Date"] = arr[i]["Bdate"];
      formatted["Description"] = arr[i]["Bdesc"];
      formatted["Amount"] = arr[i]["Bamount"];
      formatted["Transaction Type"] = arr[i]["Btransaction"];
      formatted["Category"] = arr[i]["Bcat"];
      formatted["Account Name"] = arr[i]["Baccount"];
      formattedArr[i] = formatted;
    }
    return formattedArr;
  },

  pieFormat: (arr) => {
    let formattedArr = [];
    let formatted = {};
    let tally = {};
    for (let i = 0; i < arr.length; i++) {
      if(!tally[arr[i]["Category"]]) {
        tally[arr[i]["Category"]] = 0;
      }
      tally[arr[i]["Category"]] += arr[i]["Amount"];
    }
    if (Object.keys(tally).length === 1) {
      tally = {};
      for (let i = 0; i < arr.length; i++) {
        if(!tally[arr[i]["Description"]]) {
          tally[arr[i]["Description"]] = 0;
        }
        tally[arr[i]["Description"]] += arr[i]["Amount"];
      }
    }
    for (let i in tally) {
      formatted = {};
      formatted["x"] = i;
      formatted["y"] = tally[i].toFixed(2);
      formattedArr.push(formatted);
    }
    return formattedArr;
  },
  
  findBalance: (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]["Transaction Type"] === "debit") {
        total -= arr[i]["Amount"];
      }
      if (arr[i]["Transaction Type"] === "credit") {
        total += arr[i]["Amount"];
      }
    }
    return total.toFixed(2);
  }
}