import Translator from './translator.js';
import { alphabet, morse } from './data.js';


const translator = new Translator(alphabet, morse);

const translateToMorse = () => {
		const element = document.getElementById('input');
		const translation = translator.translateMorse(element.value);
		document.getElementById('output').innerHTML = translation;
	};

	document.getElementById('translateMorse').addEventListener('click', () => {
		console.log("translating to morse")
		translateToMorse();
	});



const translateToEnglish = () => {
		const element = document.getElementById('input');
		const translation = translator.translateEnglish(element.value);
		document.getElementById('output').innerHTML = translation;
	};

	document.getElementById('translateEnglish').addEventListener('click', () => {
		console.log("translating to eng")
		translateToEnglish();
	});