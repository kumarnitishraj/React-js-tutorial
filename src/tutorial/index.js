let obj = {
    id:1,
    name:'React',
    details:{
      title:'React JS'
    }
   }
   let newObj = {...obj};
   obj.id = 2;
   
   console.log(newObj)
   console.log('*****************')
   console.log(obj)

   -----------------

   let obj = {
    id:1,
    name:'React',
    details:{
      title:'React JS'
    }
   }
   let newObj = {
     ...obj,
     details:{...obj.details}
     };
   obj.details.title = 'React Native';
   
   console.log(newObj)
   console.log('*****************')
   console.log(obj)

   -------------------------

   let obj = {
    id:1,
    name:'React',
    details:{
      title:'React JS'
    }
   }
   let newObj = {
     ...obj,
     details:{...obj.details},
     description:'this is react class'
     };
   obj.details.title = 'React Native';
   
   console.log(newObj)
   console.log('*****************')
   console.log(obj)

   ---------------------------------------------
   var exaple = ()=> new Promise((resolve, reject)=> {
    if(true){
      setTimeout(()=>{
          resolve('Done !!')
        }, 5000)
    }else{
      reject('Some Error !')
    }
   })
   exaple().then((response)=> console.log(response)).catch((error)=>console.log(error))



   

