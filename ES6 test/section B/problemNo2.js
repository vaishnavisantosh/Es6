let random=(num)=> {
  let x,i;
  if(num==5)
  {
    i=0;

  }

  else
  {
    i=num-5;
  }

  x=Math.floor(Math.random()*(5+i) +1);
  
  return x;
}


console.log(random(8));
