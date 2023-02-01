// you attack alienShip1
// if alienShip1's hp > 0, then it attacks you
// if your hp > 0, you attack the alienShip1 again
// if alienShip1 > 0 still, it attacks you again...repeatedly
// if alienShip =< 0, you have the option to attack the next ship or retreat
// if you retreat(return), the game ends, perhaps leaving the game open for further developments or option
// You win the game if all alienship's hp =< 0.
// you lose if your hp =< 0.

    // The static methods are basically utility functions creating or making a copy of an object.
    // A static keyword is been used to declare a variable or a method as static.
    // In JavaScript, the static keyword is used with methods and classes too. USSAssembly
class Ship {
    static alienShip0Attack = 0;
    static USSAssemblyDestroyed = false 
    constructor(name, hull, firepower, accuracy) {
        this.name = name 
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    
    attack(TargetShip) { // The attack method is used to attack an opposing ship
        console.log('USS Assembly is attacking...')
        if (Math.random() < this.accuracy) {
            console.log('~ USS Assembly has hit an alien ship ~')
            TargetShip.hull -= TargetShip.firepower
            TargetShip.hull += Math.round((Math.random()*10))
            this.shipStatus
        } else {
            console.log("USS Assembly's attack has missed...")
        }
    }

alienAttack(TargetShip) { // ALiens attack USS Assembly
    console.log('An alien ship is attacking...')
    if (Math.random() < this.accuracy) {
        TargetShip.hull -= this.firepower
        console.log('The alien has attacked the USS Assembly...')
        this.shipStatus()
    }else {
        console.log('The alien attack has missed!')
    } 
}

shipStatus(){ // shipStatus method is used to check if a ship has been destroyed.
    if(this.name == "USSFighterShip" && this.hull <= 0){
        Ship.USSAssemblyDestroyed = true
        console.log(this.name + ' ship is destroyed...')
        console.log('You lose... The USS Assembly ship has been destroyed...')
    }else if (this.name == 'alien' && this.hull <= 0){
        Ship.alienShip0Attack++
        console.log(Ship.alienShip0Attack + "*** Alien Ship has been destroyed ***")
    }
}

static printStatus(USSAssembly, alien){
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('USS Assembly: Hull = ' + USSAssembly.hull + ', Firepower =' + USSAssembly.firepower + ', Accuracy = ' + USSAssembly.accuracy)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    for(let i = 0; i < alien.length; i++){
        if(alien[i].hull > 0){
            console.log('Alien Ship ' + (i+1) + ': Hull = ' + alien[i].hull + ', Firepower = ' + alien[i].firepower + ', Accuracy = ' + alien[i].accuracy)
            console.log('-----------------------------------------------------------')
        }
    }
}

static battle(USSAssembly, ship){ // battle method is used to initiate a battle between the USS Assembly ship and an alien ship
    while ((USSAssembly.hull > 0) && (ship.hull > 0)) {
        USSAssembly.attack(ship)
        if(ship.hull > 0 && Ship.USSAssemblyDestroyed == false)
        ship.alienAttack(USSAssembly)
    }
    if(Ship.USSAssemblyDestroyed == false && Ship.alienShip0Attack == alien.length) {
        Ship.printStatus(USSAssembly, alien)
        let promptAttackRetreat = prompt((totalAliens=Ship.alienShip0Attack) + 'Alienship left. Do you want to (attack) or (retreat)?')
        if(promptAttackRetreat == 'attack'){
            let promptNoOfShip = prompt('Give the number of AlienShip to be attacked: ')
            console.log('Attack AlienShip' + promptNoOfShip)
            Ship.battle(USSAssembly, alien[promptNoOfShip-1])
        }else if(promptAttackRetreat == "retreat"){
            console.log('Retreat!!!!!')
        }
    }else if(Ship.alienShip0Attack == alien.length){
        console.log('All Alien ships have been destroyed')
        console.log('Aliens lost the Battle. USS Assembly ship has won...')
    }
}

static playGame(USSAssembly, alien){ // playGame method is used to start the game
    Ship.printStatus(USSAssembly, alien)
    let promptNoOfShip = prompt("Give the Number of AlienShip to be attacked: ")
    console.log('Attack AlienShip' + promptNoOfShip)
    Ship.battle(USSAssembly, alien[promptNoOfShip-1])
}
}

function spawnShips(){
    USSAssembly = new Ship('USSFighterShip', 20, 5, 0.7)
    alien = [];
    for(let i = 0; i < 6; i++){
        alien.push(new Ship('alien', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), (Math.random() * (0.8 - 0.6) + 0.6).toFixed(1)))
    }
}

console.log('Space Battle OOP Lab')

let USSAssembly;
let alien = [];
spawnShips()
let totalAliens = alien.length 
Ship.playGame(USSAssembly, alien)
let anotherGame = prompt('Do you want to play another game? yes/no')
while(anotherGame == 'yes'){
    spawnShips()
    Ship.alienShip0Attack = 0;
    Ship.USSAssemblyDestroyed = false;
    console.log('Spacebattle')
    Ship.playGame(USSAssembly, alien)
    anotherGame = prompt('Do you want to play another game? yes/no')
}


