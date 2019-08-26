let inputArray=[2,-4,1,0,3,-1];
let arr1=[];
let arr2=[];
let found=[];

let len=inputArray.length;
let flag;

for(i=0;i<len;i++)
{
  for(j=i+1;j<=len;j++)
  {
    arr1=inputArray.slice(j,j+3);
    if(arr1.length<3)
    {
      break;
    }
    arr2=[inputArray[i],...arr1];
    if(arr2.reduce(sumOfArray=(a,b)=> a+b)==0)
    {
      console.log(`set of four integer is ${arr2} sums to zero` );
      found.push(arr2);
    }
  }
}

if(found.length==0)
{
  console.log("no such set available");
}


