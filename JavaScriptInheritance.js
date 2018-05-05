
// javascript iheritance 

var person = function (name,dateofbirth,job)
{
    this.name=name;
    this.dateofbirth=dateofbirth;
    this.job=job;
    
}
          var CalculateAge = function()
    {
             console.log(2018 - dateofbirth);
    }

var john = person('narendra',1990,'software');
var jane = person('nari',1994,'hardware');
var mark = person('vema',2000,'electrical');

john.CalculateAge();
jane.CalculateAge();
mark.CalculateAge();
console.log(john);
console.log(jane);
console.log(mark);
