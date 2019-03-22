const ala = require('./harj4');

test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ala()}).toThrow('ei parametreja');
 });
 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ala(4)}).toThrow('ei parametreja');
 });
 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ala(4,3)}).toThrow('ei parametreja');
 });
 test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(ala(4,3,2)).toBe (6);
});