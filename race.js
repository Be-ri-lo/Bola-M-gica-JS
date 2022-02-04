let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)

let earlyRacer = false
console.log(earlyRacer)

let ageRacer = 17
console.log(ageRacer)

if (ageRacer >= 18 && earlyRacer === false) {
  console.log(`Late adults run at 11:00 am ${raceNumber}`)  
} else if (ageRacer < 18 ) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) ${raceNumber}`)
} else {
  console.log(`Your race start at 930 am, your number is: ${raceNumber += 1000}`)
}


