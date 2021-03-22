function randomInt(min,max){
  if (min>=0&&max>min) {
    return Math.floor(Math.random()*(max-min))+min;
  }
  else{
    return 'Неправильный диапазон';
  }
}
function stringLength(stringChecked,maxLength){
  if (stringChecked.length<=maxLength) {
    return true;
  }
  else{
    return false;
  }
}
