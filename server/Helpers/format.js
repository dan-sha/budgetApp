module.exports = {
  mainList: (arr) => {
    // console.log(arr[1]);
    // console.log(arr[2]);
    let formattedArr = [];
    let formatted = {};
    for (let i = 0; i < arr.length; i++) {
      formatted = {};
      formatted["Date"] = arr[i]["Bdate"];
      formatted["Description"] = arr[i]["Bdesc"];
      formatted["Amount"] = arr[i]["Bamount"];
      formatted["Transaction Type"] = arr[i]["Btransaction"];
      formatted["Category"] = arr[i]["Bcat"];
      formatted["Account Name"] = arr[i]["Baccount"];
    //   console.log(formatted);
      formattedArr[i] = formatted;
    }
    // console.log(formattedArr);
    return formattedArr;
  }
}