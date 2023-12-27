function calculator(actions, values){
   let num = values[0]
   for(let i = 1; i < actions.length - 1; i++){
    if(actions[i].toLowerCase() === 'add'){
        num += values[i]
    }
    if(actions[i].toLowerCase() === 'subtract'){
        num -= values[i]
    }
    if(actions[i].toLowerCase() === 'multiply'){
        num *= values[i]
    }
    if(actions[i].toLowerCase() === 'divide'){
        if( values[i] !== 0){
            num /= values[i]
        }
        else{
            return "Division by zero is not allowed"
        }
    }
    if(actions[i].toLowerCase() === 'power'){
        num **= values[i]
    }
   }
   return num
}
console.log(calculator( ["Calculator", "add", "dIvide", "getResult"],  [10, 5, 3]))