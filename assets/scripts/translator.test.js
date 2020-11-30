import Translator from './translator.js';
import { alphabet, morse } from './data.js';
import { expect } from '@jest/globals';

// Valid Inputs
it('Should translate a to .-', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateMorse('a');
	expect(result).toBe('.-');
});
it('Should translate .- to a', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('.-');
	expect(result).toBe('a');
});

// Invalid Inputs

// Null/No Inputs
it('Should return please input valid text when input is null', () => {
	const translator = new Translator();
	const englishResult = translator.translateEnglish('');
	const morseResult = translator.translateMorse('');
	expect(englishResult).toBe('Please write a message to translate');
	expect(morseResult).toBe('Please write a message to translate');
});
