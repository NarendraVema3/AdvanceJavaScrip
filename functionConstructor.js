
// normal obje
var john = {
  
   name="",
   dateofbirth="",
   job=""

}


var person = function (name,dateofbirth,job)
{
    this.name=name;
    this.dateofbirth=dateofbirth;
    this.job=job;
    this.person = function()
    {
             console.log(2018 - dateofbirth);
    }
}

var john = person('narendra',1990,'software');

console.log(john);
