 
 var years = [1990,1992,1994,1996,1998,2000];
 
 function stepOneCreation( ages,fn)
 {
      ArryOrg = [];
         
         for( i = 0; i < ages.length ; i++)
         {
            ArrayOrg.push(fn(ages[i]));
         }
         return ArrayOrg;
 
 }

function calculateAge(ele)
{
    return 2016 - ele;
}

function isFullAge(ele)
{
    return ele < 18;
}

var Ages = stepOneCreation(years,calculateAge);

console.log(Ages);

var FullAge = stepOneCreation(Ages,isFullAge);

console.log(FullAge);
