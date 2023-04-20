function minValue(values){
  console.log(values.sort((a, b) => a -b).filter((el, idx, arr) => el !== arr[idx - 1]).join(''))

  return +values.sort((a, b) => a -b).filter((el, idx, arr) => el !== arr[idx - 1]).join('');
}


console.log(minValue([4, 7, 5, 7]))