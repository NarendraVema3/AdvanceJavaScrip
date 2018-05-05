

function occupation(job)
{
     if(job == 'software')
     {
         return function (name)
         {
            console.log('mr ' ,name,'your doing software job' );
         }
     }else if( job == 'hardware')
     {
            return function (name)
            {
                console.log('mr' , name , 'your were doing hardware jon man');
            }
            
     }else if (job == 'electrical')
     {
         return function (name)
         {
         
            console.log('your are electrical guy mr' , name);
         }
     }else
     {
          return function(name)
          {
            console.log('what job your doing man?',name);
          }
     }

}

var designation =  occupation('software');

designation('narendra');


