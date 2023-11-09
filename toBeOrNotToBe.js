function expect(val){
    return {
        toBe : (num) => {
            if(val === num){
                return true
            }
            else{
                throw new Error('Not Equal')
            }

        },
        notToBe: (num) => {
            if(typeof val === 'object' && typeof num === 'object'){
                throw new Error('Equal') 
            }
            else if(val !== num){
                return true
            }
            else{
                throw new Error('Not Equal')
            }
        }
    }
}
try{
    console.log({"value" :expect(5).notToBe(8)})
}
catch(e){
    console.log(e)
}