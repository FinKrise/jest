const lippu = require('./harj3');

test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        lippu()}).toThrow('ei parametreja');
 });
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(lippu(input=6)).toBe (hinta=0);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(lippu(input=12)).toBe (hinta=1);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(lippu(input=20)).toBe (hinta=1.50);
});
test('Annetaan matkustajalle iän mukaan lipunhinta', () => {
    expect(lippu(input=30)).toBe (hinta=3);
});