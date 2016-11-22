var name = prompt ('Who are you?')
console.log(name)

 if (name === 'Stephen') {
    var home = prompt ('How are you getting home? 1.Truck 2. Bus 3. Friend')

   if (home === '1') {
     var garage = prompt ('Did you park in the garage? 1. Yes 2. No')
     if (garage === '1') {
       console.log("Pay and go home")
     } else if (garage === '2'){
        var where = prompt ('Did you park elsewhere?')
    }
 }
