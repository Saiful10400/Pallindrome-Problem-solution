const isPalindrome=(text)=>{
    const isAlphabet=/^[a-zA-Z]+$/
    const textArray=text.split("")
    const filteredArray=[]
    textArray.forEach(item=>{
        if(isAlphabet.test(item)){
            filteredArray.push(item)
        }
    })
    const reverseOfFilteredArray=[...filteredArray].reverse()
    const baseText=filteredArray.join("").toUpperCase()
    const reverseText=reverseOfFilteredArray.join("").toUpperCase()
    console.log(baseText,reverseText)
    if(baseText===reverseText){
        return true

    }
    else{
        return false
    }
}



console.log(isPalindrome(`Madam, in Eden, I'm Adam: "Madam, in Eden, I'm Adam"`))
// The expected result would be "true".