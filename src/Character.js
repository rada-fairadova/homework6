export default class Character {
    constructor(level, type = 'generic') {
      this.level = level;
      this.attack = 0;
      this.defence = 0;
      this.health = 50;
      this.type = type;
      if (new.target.name === 'Character') {
        throw new Error('Нельзя создавать экземпляры класса Character');
      }
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('Нельзя повысить левел умершего персонажа');
      }
  
      this.level += 1;
      this.attack = Math.max(this.attack, this.attack * 1.2);
      this.defence = Math.max(this.defence, this.defence * 1.2);
      this.health = Math.min(this.health + 80, 100);
    }
  
    damage(points) {
      if (this.health <= 0) {
        return;
      }
  
      const damageTaken = points * (1 - this.defence / 100);
      this.health -= damageTaken;
      this.health = Math.max(this.health, 0);
    }
  }