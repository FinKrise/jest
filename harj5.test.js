const ale = require('./harj5');

 test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(ale(90)).toBe (90);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(ale(450)).toBe (405);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(ale(150)).toBe (142.5);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(ale(1000)).toBe (850);
});
test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ale()}).toThrow('ei parametria');  
 });
 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ale("a")}).toThrow('ei oikea luku');
 });
