import Character from '../Character';

describe('Character', () => {
  class TestCharacter extends Character {
    constructor(level) {
      super(level);
      this.attack = 10;
      this.defence = 10;
      this.health = 100;
    }
  }

  describe('levelUp', () => {
    test('should increase level by 1', () => {
      const char = new TestCharacter(1);
      char.levelUp();
      expect(char.level).toBe(2);
    });

    test('should increase attack by 20%', () => {
      const char = new TestCharacter(1);
      char.attack = 100;
      char.levelUp();
      expect(char.attack).toBe(120);
    });

    test('should increase defence by 20%', () => {
      const char = new TestCharacter(1);
      char.defence = 100;
      char.levelUp();
      expect(char.defence).toBe(120);
    });

    test('should set health to 100', () => {
      const char = new TestCharacter(1);
      char.health = 50;
      char.levelUp();
      expect(char.health).toBe(100);
    });

    test('should throw error when health is 0', () => {
      const char = new TestCharacter(1);
      char.health = 0;
      expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего персонажа');
    });
  });

  describe('damage', () => {
    test('should reduce health by correct amount', () => {
      const char = new TestCharacter(1);
      char.defence = 50;
      char.damage(100);
      expect(char.health).toBe(50);
    });

    test('should not reduce health below 0', () => {
      const char = new TestCharacter(1);
      char.health = 10;
      char.defence = 0;
      char.damage(100);
      expect(char.health).toBe(0);
    });

    test('should do nothing if health is already 0', () => {
      const char = new TestCharacter(1);
      char.health = 0;
      char.damage(100);
      expect(char.health).toBe(0);
    });

    test('should handle defence = 0 correctly', () => {
      const char = new TestCharacter(1);
      char.defence = 0;
      char.damage(50);
      expect(char.health).toBe(50);
    });

    test('should handle defence = 100 correctly', () => {
      const char = new TestCharacter(1);
      char.defence = 100;
      char.damage(100);
      expect(char.health).toBe(100);
    });
  });
});