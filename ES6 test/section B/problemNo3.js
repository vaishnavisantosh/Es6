ispalindrom=(str)=>{
  let lengthOfstr=str.length;
  let start=0;
  let end=str.length-1;
   
  if(lengthOfstr<2)
  {
    return true;
  }
  while(start<end)
  {
    if(str[start]!=str[end])
    {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(ispalindrom('aba'));