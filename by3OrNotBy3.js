function divisibleByThree(str){
   let arr = str.split('')
   console.log(arr)
  const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
  initialValue
);
  console.log(sumWithInitial)
  if (sumWithInitial % 3 === 0){
  return true
  }else{
    return false
  }
}
