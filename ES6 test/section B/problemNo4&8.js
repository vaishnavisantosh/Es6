//creation of unsorted array with one number missing 
let createUnsortedArray =(limit)=>{
  let randomNumber;
  let unsortedArray=new Array();
  for(let i=1;i<limit;i++)
  {
    let flag=true;
    randomNumber=Math.floor(Math.random()*limit+1);
    for(j=0;j<limit;j++)
    {
      if(randomNumber==unsortedArray[j])
      {
        flag=false;
      }

    }    

    if(flag)
    {
      unsortedArray.push(randomNumber);
    } 
    else
    {
      i--;
    }
  } 
  return unsortedArray;
}


let arrayOfNumbers =createUnsortedArray(100);
//console.log(arrayOfNumber);
let sortedArray=arrayOfNumbers.sort((a,b) => a-b);
//console.log(sortedArray);
  let index=0;
  for(let i=1;i<=arrayOfNumbers.length+1;i++)
  {
    if(!(sortedArray[index]==i))
    {
      console.log(`missing number is ${i}`);
      break;
    }
    index++;
  }




