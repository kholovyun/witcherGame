const Griffin = {
    hp: 2000,
    defense: 120,
    str: 150,
    weapon: 0,
    changeHp: function(health) {
        this.hp += health
       },
    getStatus: function() {
        console.log(`
        Griffin's health: ${this.hp}
        `)
    },
};

const Witcher = {
    hp: 1000,
    defense: 100,
    str: 120,
    weapon: 250,
    lutikPhrases: ['Хватит валять дурака, пора уже тушить пожар в этой программе.', 'Говорят, грифон никогда не наступит на лежащего ведьмака.', 
    'Когда скромняга бард, отдыхал от дел, с Геральтом из Ривии, он песню эту пел...', ' Трус умирает сто раз. Мужественный человек – лишь однажды.',
    'Людям для жизни необходимы три вещи: еда, питье и сплетни.'],
    getRandomLutikPhrase: function () {
        index = Math.floor(Math.random() * 5)
        return console.log(this.lutikPhrases[index])
    },
    changeHp: function(health) {
     this.hp += health 
    },
    getStatus: function() {
        console.log(`
        Witcher's health: ${this.hp}
        `)
    },
    getIgniDamage: function () {
        return Math.floor(Math.random() * (200 - 150 + 1) ) + 150
    },
    getSwallowHeal: function () {
        return Math.floor(Math.random() * (200 - 150 + 1) ) + 150
    },
    drinkSwallow: function() {
        this.changeHp(this.getSwallowHeal())
        this.getStatus()
        return console.log('Witcher used Swallow and healed for ' + this.getSwallowHeal())
    },
};

const getRandom = () => {
    return Math.ceil(Math.random() * 100);
};

const witcherMove = () => {
    if(75 >= getRandom())
        {
            Griffin.changeHp(-(Witcher.str + Witcher.weapon - Griffin.defense))
            Griffin.getStatus()
            console.log('Griffin was damaged by Witcher for ' + (Witcher.str + Witcher.weapon - Griffin.defense))
            console.log('******************************************************************************')
        } else {
            console.log('Witcher missed' )
            Griffin.getStatus()
            console.log('******************************************************************************')
        }  
};
const griffinMove = () => {
    if(75 >= getRandom())
        {
            Witcher.changeHp(-(Griffin.str + Griffin.weapon - Witcher.defense))
            Witcher.getStatus()
            console.log('Witcher was damaged by Griffin for ' + (Griffin.str + Griffin.weapon - Witcher.defense))
            console.log('******************************************************************************')
        } else {
            console.log('Griffin took off' )
            Witcher.getStatus()
            console.log('******************************************************************************')
        }  
}


while(true){
    if(Griffin.hp <= 0){
        console.log('Witcher won')
        break
    };
    if(Witcher.hp <= 0){
        console.log('Witcher lost')
        break
    };
    const userInput = prompt('Choose what to do by choosing a number of action \n' + '1- Attack Griffin \n' + '2-Attack with an Igni \n' + '3- What Lutik says ? \n' + '4- Heal yourself \n' + '5-  Run from fight');
    if(userInput > 5 || userInput < 0){
        alert('You can enter only actions from 1 to 4, please enter right number')
        continue
    } 
    if(userInput === null){
        console.log('Game Ended')
        break
    }
    if(userInput == 1){
        witcherMove()
        griffinMove()
    }
    if(userInput == 2){
        Griffin.changeHp(-(Witcher.getIgniDamage()))
        Griffin.getStatus()
        console.log('Witcher used Igni and damaged Griffin for ' + Witcher.getIgniDamage())
        console.log('******************************************************************************')
        griffinMove()
    }
    if(userInput == 3){
        Witcher.getRandomLutikPhrase();
        console.log('******************************************************************************')
        griffinMove();
    }
    if(userInput == 4){
        Witcher.drinkSwallow()
        console.log('******************************************************************************')
        griffinMove();
    }
    if(userInput == 5){
        console.log('Witcher left the fight')
        Witcher.getStatus()
        Griffin.getStatus()
        console.log('******************************************************************************')
        console.log('game over')
        break
    }
   

}

