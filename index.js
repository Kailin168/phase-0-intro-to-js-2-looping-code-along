function writeCards(names, event) {
    const collectionOfNames = []
    for (let i = 0; i < names.length; i++) {
        collectionOfNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return collectionOfNames
}

function countDown (number){
    while (number >= 0){
        console.log (number--)
    }
   
}