 countNumberOfZeros=(n)=>{
  let count;
  let arr=[];
  for(let i=1;i<=n;i++)
  {
    let num=i;
    whilelet(num!=0)
    {
    count = num % 10;
    if(count==0)
    arr.push(i);
    num=Math.floor(num/10);
    //console.log(num);
    }
  }
  if(arr.length>0)
  console.log(`Total number of zeroes from 1 to ${n} is ${arr.length}`);  
  else
  console.log("no zeroes");
}

countNumberOfZeros(100);






