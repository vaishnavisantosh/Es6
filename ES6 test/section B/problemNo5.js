let string="vaishnavi";

for(let i=0;i<string.length;i++)
{
  let firstUniqueChar=true;
  for(let j=0;j<string.length;j++)
  {
    if(string.charAt(i)==string.charAt(j) && i!=j)
    {
     firstUniqueChar=false;
     break; 
    }
  }
  if(firstUniqueChar)
  {
    console.log(`first non repeating char in ${string} is ${string.charAt(i)}`);
    break;
  }
}
