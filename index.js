class Hero {

   constructor(name, type, age, attack, ){
   this.name = name
   this.type = type,
   this.age = age,
   this.attack = attack
  }
  
present(){
   console.log(`Você atacou com ${this.name} usando ${this.attack}`)
   console.log(`Informações do personagem\nIdade:${this.age} anos.\nTipo:${this.type}.`)
}

      
}   
const heros ={
  guerreiro: new Hero(`sayman`, `guerreiro`, 100, `Espada`),
  ninja: new Hero(`Kay`, `Ninja`, 90, `shuriken`),
  monge:new Hero(`jyn`, `Monge`, 800, `Artes Marciais`),
  mago: new Hero(`Seykon`, `Mago`, 500, `Magía`),
  ogro: new Hero (`shoku`, `Monstro`, 1000, `feitiçaria`)
}

function getAvatar(heroName) {
   heroName = heroName.toLowerCase();
   if(heros[heroName]){
      heros[heroName].present();
   }
   else{
      console.log(`Escolha um personagem válido!`)
   }   
   }   
getAvatar(`mago`)