let check = (...number)=>{
  
  let invalidArg=[];
  (number.filter(invalid=(num)=>{
    if(isNaN(num)==true)
    {
      invalidArg.push(num);
    }
  }));

  if(invalidArg.length>0)
  {
    console.log(`invalid arguments are : ${invalidArg}`);
  }
  else
  {
    console.log(`sum of all arguments is =  ${number.reduce(sumOfArray=(a,b)=> a+b)}`);
    console.log(`maximum value from given arguments is = ${Math.max(...number)}`);
    console.log(`minimum value from given arguments is = ${Math.min(...number)}`);
  }
}

check(30,40,50,80,100);
check('vaishnavi');