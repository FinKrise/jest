const ika = require('./harj1');

test('Tarkistetaan käyttäjän täysi-ikäisyys', () => {
    expect(ika(18)).toBe (true);
});
test('parametrit puuttuvat, heitetään poikkeus', () => { 
    expect(() => {
      ika()}).toThrow('ei parametreja');
  });
  test('Tarkistetaan käyttäjän täysi-ikäisyys', () => {
    expect(ika(16)).toBe (false);
});