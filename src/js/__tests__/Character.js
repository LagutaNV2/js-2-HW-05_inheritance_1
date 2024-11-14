import Character from '../Character';

test('invalid length name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Robin', 'InvalidType')).toThrow('Type must be one of Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
