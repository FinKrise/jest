const jako = require('./harj2');

test('Jaetaan kaksi lukua keskenään', () => {
    expect(jako(4, 2)).toBe(2);
});

 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        jako()}).toThrow('ei parametreja');
 });
 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        jako("a")}).toThrow('ei parametreja');
 });
 test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        jako("a","b")}).toThrow('ei oikea luku');
 });
 test('Jakolaskussa nolla jakajana', () => {
    expect(() => {
        jako(5,0)}).toThrow('ei voi jakaa nollalla');
 });