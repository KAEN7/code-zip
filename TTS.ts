export const textToSpeech = (text: string, isActionHandler: (isAction: boolean) => void) => {
	const synthesis = window.speechSynthesis;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "ko-KR";
	utterance.onend = function (event) {
		isActionHandler(false);
	};
	synthesis.speak(utterance);
};
