   var fn = num => {
     return new Promise((resolve, reject) => {
       console.log('destion:' + num)
       if (typeof num == 'number') {
         resolve(num)
       } else {
         reject(num)
       }
     })
   }

   fn(2).then((num) => {
     console.log('first:' + num)
     return num + 1
   }).then((num) => {
     console.log('reject')
   })