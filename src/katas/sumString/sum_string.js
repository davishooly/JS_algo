function sumStrings(a,b){

    let int1 = a.replace(/^0*/g, "").split("").reverse()
    let int2 = b.replace(/^0*/g, "").split("").reverse()

    let sum = "";
    let count = 0;
    let num = 0;

  while(count < int1.length || count < int2.length){
    let tempSum = (parseInt(int1[count]) || 0) + (parseInt(int2[count]) || 0) + num
    if(tempSum > 9){
      sum = `${tempSum - 10}` + sum
      num = 1
    } else {
      sum = `${tempSum}` + sum
      num = 0
    }
    count++
  }
  return num ? `1${sum}` : sum
}
sumStrings("50095301248058391139327916261", "81055900096023504197206408605");