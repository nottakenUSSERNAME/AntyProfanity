walk(document.body);

function walk(node) {



	var child, next;

	switch (node.nodeType) {
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			makeItCultural(node);
			break;
	}
}

function makeItCultural(textNode) {
	var text = textNode.nodeValue;

	// А-Я AntiProfanity Хотфикс ( Обновление 1.22.12

	text = text.replace(/❌а/g, randomWord(["❌"]));
	text = text.replace(/❌а/i, randomWord(["❌"]));
	text = text.replace(/❌б/g, randomWord(["❌"]));
	text = text.replace(/❌б/i, randomWord(["❌"]));
	text = text.replace(/❌в/g, randomWord(["❌"]));
	text = text.replace(/❌в/i, randomWord(["❌"]));
	text = text.replace(/❌г/g, randomWord(["❌"]));
	text = text.replace(/❌г/i, randomWord(["❌"]));
	text = text.replace(/❌д/g, randomWord(["❌"]));
	text = text.replace(/❌д/i, randomWord(["❌"]));
	text = text.replace(/❌е/g, randomWord(["❌"]));
	text = text.replace(/❌е/i, randomWord(["❌"]));
	text = text.replace(/❌ё/g, randomWord(["❌"]));
	text = text.replace(/❌ё/i, randomWord(["❌"]));
	text = text.replace(/❌ж/g, randomWord(["❌"]));
	text = text.replace(/❌ж/i, randomWord(["❌"]));
	text = text.replace(/❌з/g, randomWord(["❌"]));
	text = text.replace(/❌з/i, randomWord(["❌"]));
	text = text.replace(/❌и/g, randomWord(["❌"]));
	text = text.replace(/❌и/i, randomWord(["❌"]));
	text = text.replace(/❌й/g, randomWord(["❌"]));
	text = text.replace(/❌й/i, randomWord(["❌"]));
	text = text.replace(/❌к/g, randomWord(["❌"]));
	text = text.replace(/❌к/i, randomWord(["❌"]));
	text = text.replace(/❌л/g, randomWord(["❌"]));
	text = text.replace(/❌л/i, randomWord(["❌"]));
	text = text.replace(/❌м/g, randomWord(["❌"]));
	text = text.replace(/❌м/i, randomWord(["❌"]));
	text = text.replace(/❌н/g, randomWord(["❌"]));
	text = text.replace(/❌н/i, randomWord(["❌"]));
	text = text.replace(/❌о/g, randomWord(["❌"]));
	text = text.replace(/❌о/i, randomWord(["❌"]));
	text = text.replace(/❌п/g, randomWord(["❌"]));
	text = text.replace(/❌п/i, randomWord(["❌"]));
	text = text.replace(/❌р/g, randomWord(["❌"]));
	text = text.replace(/❌р/i, randomWord(["❌"]));
	text = text.replace(/❌с/g, randomWord(["❌"]));
	text = text.replace(/❌с/i, randomWord(["❌"]));
	text = text.replace(/❌т/g, randomWord(["❌"]));
	text = text.replace(/❌т/i, randomWord(["❌"]));
	text = text.replace(/❌у/g, randomWord(["❌"]));
	text = text.replace(/❌у/i, randomWord(["❌"]));
	text = text.replace(/❌ф/g, randomWord(["❌"]));
	text = text.replace(/❌Ф/i, randomWord(["❌"]));
	text = text.replace(/❌х/g, randomWord(["❌"]));
	text = text.replace(/❌х/i, randomWord(["❌"]));
	text = text.replace(/❌ц/g, randomWord(["❌"]));
	text = text.replace(/❌ц/i, randomWord(["❌"]));
	text = text.replace(/❌Ч/g, randomWord(["❌"]));
	text = text.replace(/❌ч/i, randomWord(["❌"]));
	text = text.replace(/❌ш/g, randomWord(["❌"]));
	text = text.replace(/❌ш/i, randomWord(["❌"]));
	text = text.replace(/❌щ/g, randomWord(["❌"]));
	text = text.replace(/❌щ/i, randomWord(["❌"]));
	text = text.replace(/❌ь/g, randomWord(["❌"]));
	text = text.replace(/❌ь/i, randomWord(["❌"]));
	text = text.replace(/❌ъ/g, randomWord(["❌"]));
	text = text.replace(/❌ъ/i, randomWord(["❌"]));
	text = text.replace(/❌э/g, randomWord(["❌"]));
	text = text.replace(/❌э/i, randomWord(["❌"]));
	text = text.replace(/❌ю/g, randomWord(["❌"]));
	text = text.replace(/❌ю/i, randomWord(["❌"]));
	text = text.replace(/❌я/g, randomWord(["❌"]));
	text = text.replace(/❌я/i, randomWord(["❌"]));


	text = text.replace(/А❌/g, randomWord(["❌"]));
	text = text.replace(/а❌/i, randomWord(["❌"]));
	text = text.replace(/Б❌/g, randomWord(["❌"]));
	text = text.replace(/б❌/i, randomWord(["❌"]));
	text = text.replace(/В❌/g, randomWord(["❌"]));
	text = text.replace(/в❌/i, randomWord(["❌"]));
	text = text.replace(/Г❌/g, randomWord(["❌"]));
	text = text.replace(/г❌/i, randomWord(["❌"]));
	text = text.replace(/Д❌/g, randomWord(["❌"]));
	text = text.replace(/д❌/i, randomWord(["❌"]));
	text = text.replace(/Е❌/g, randomWord(["❌"]));
	text = text.replace(/е❌/i, randomWord(["❌"]));
	text = text.replace(/Ё❌/g, randomWord(["❌"]));
	text = text.replace(/ё❌/i, randomWord(["❌"]));
	text = text.replace(/Ж❌/g, randomWord(["❌"]));
	text = text.replace(/ж❌/i, randomWord(["❌"]));
	text = text.replace(/З❌/g, randomWord(["❌"]));
	text = text.replace(/з❌/i, randomWord(["❌"]));
	text = text.replace(/И❌/g, randomWord(["❌"]));
	text = text.replace(/и❌/i, randomWord(["❌"]));
	text = text.replace(/Й❌/g, randomWord(["❌"]));
	text = text.replace(/й❌/i, randomWord(["❌"]));
	text = text.replace(/К❌/g, randomWord(["❌"]));
	text = text.replace(/к❌/i, randomWord(["❌"]));
	text = text.replace(/Л❌/g, randomWord(["❌"]));
	text = text.replace(/л❌/i, randomWord(["❌"]));
	text = text.replace(/М❌/g, randomWord(["❌"]));
	text = text.replace(/м❌/i, randomWord(["❌"]));
	text = text.replace(/Н❌/g, randomWord(["❌"]));
	text = text.replace(/н❌/i, randomWord(["❌"]));
	text = text.replace(/О❌/g, randomWord(["❌"]));
	text = text.replace(/о❌/i, randomWord(["❌"]));
	text = text.replace(/П❌/g, randomWord(["❌"]));
	text = text.replace(/п❌/i, randomWord(["❌"]));
	text = text.replace(/Р❌/g, randomWord(["❌"]));
	text = text.replace(/р❌/i, randomWord(["❌"]));
	text = text.replace(/С❌/g, randomWord(["❌"]));
	text = text.replace(/с❌/i, randomWord(["❌"]));
	text = text.replace(/Т❌/g, randomWord(["❌"]));
	text = text.replace(/т❌/i, randomWord(["❌"]));
	text = text.replace(/У❌/g, randomWord(["❌"]));
	text = text.replace(/у❌/i, randomWord(["❌"]));
	text = text.replace(/Ф❌/g, randomWord(["❌"]));
	text = text.replace(/Ф❌/i, randomWord(["❌"]));
	text = text.replace(/Х❌/g, randomWord(["❌"]));
	text = text.replace(/х❌/i, randomWord(["❌"]));
	text = text.replace(/Ц❌/g, randomWord(["❌"]));
	text = text.replace(/ц❌/i, randomWord(["❌"]));
	text = text.replace(/Ч❌/g, randomWord(["❌"]));
	text = text.replace(/ч❌/i, randomWord(["❌"]));
	text = text.replace(/Ш❌/g, randomWord(["❌"]));
	text = text.replace(/ш❌/i, randomWord(["❌"]));
	text = text.replace(/Щ❌/g, randomWord(["❌"]));
	text = text.replace(/щ❌/i, randomWord(["❌"]));
	text = text.replace(/Ь❌/g, randomWord(["❌"]));
	text = text.replace(/ь❌/i, randomWord(["❌"]));
	text = text.replace(/Ъ❌/g, randomWord(["❌"]));
	text = text.replace(/ъ❌/i, randomWord(["❌"]));
	text = text.replace(/Э❌/g, randomWord(["❌"]));
	text = text.replace(/э❌/i, randomWord(["❌"]));
	text = text.replace(/Ю❌/g, randomWord(["❌"]));
	text = text.replace(/ю❌/i, randomWord(["❌"]));
	text = text.replace(/Я❌/g, randomWord(["❌"]));
	text = text.replace(/я❌/i, randomWord(["❌"]));

	// А-Я АнтиМат Хотфикс ) Обновление 1.22.12

	textNode.nodeValue = text;
}
function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}


