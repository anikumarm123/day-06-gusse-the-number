// gusse the secret number//
let gnum;
let lastseennum;
let chance;
console.log("Welcome");
person = (prompt("Enter your Name"));
console.log("Welcome to the game  "+person);
secretnum = 8;
n = 5;
for (chance = 1; chance <= n;chance++){
    gnum = parseInt(prompt("guess the number is 1 to 9",""));
    if (gnum > 9 || gnum < 0){
        console.log("your gess the number is out of range"); 
        chance = chance - 1;
        continue;
    }
    if (lastseennum == gnum) {
        chance = chance - 1;
        console.log("The number entered is same as previous number");
      } else if (gnum < secretnum) {
        console.log("Entered number is smaller than the secret number");
      } else if (gnum > secretnum) {
        console.log("Entered number is larger than the secret number");
      } else {
        console.log(
          "congragulation on guessing the secret number,the number of chance used :" +
            chance
        );
        console.log(" remaining chance  is :" + (n - chance));
        break;
      }
      lastseennum = gnum;
      console.log("remaining chance is :" + (n - chance));
    }
