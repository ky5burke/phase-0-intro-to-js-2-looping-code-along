//Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    debugger;
 }


 const gifts = ["teddy bear", "drone", "doll"]

 function wrapGifts(gifts) {
     for (let i = 0; i < gifts.length; i++) {
         console.log(`Wrapped ${gifts[i]} and added a bow!`);
         debugger;
     }
     return gifts;
 }

 wrapGifts(gifts);

//Practice Section:

let newList = []


function writeCards(list, event) {
    let newList = [];
  
    for (let i = 0; i < list.length; i++) {
      newList.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`);
    }
  
    return newList;
  }


writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

console.log(newList)


function countDown(i){

    while (i >= 0) {
        console.log(i);
        i--;
    }
}



