describe('PalindromeTester', function() {
	var tester;

	beforeEach(function() {
		tester = new PalindromeTester();
	});

	it('should test an empty string', function() {
		expect(tester.run('')).toBeTruthy();
	});

	it('should test a non-palindrom', function() {
		expect(tester.run('dotandbo')).toBeFalsy();
	});

	it('should test a palindrome', function() {
		expect(tester.run('ana')).toBeTruthy();
	});

	it('should test when the string has capitalized characters', function() {
		expect(tester.run('Avid diva')).toBeTruthy();
	});

	it('should test when the string has punctuation characters', function() {
		expect(tester.run('A car, a man, a maraca.')).toBeTruthy();
	});
});