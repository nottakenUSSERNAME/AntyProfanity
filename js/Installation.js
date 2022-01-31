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

	//Статус расширения

	text = text.replace(/AntiProfanity установлено установлено/g, "✔Установлено AntiProfanity");
	text = text.replace(/AntiProfanity установлено установлено/i, "✔Установлено AntiProfanity");


	//Статус расширения

	// Патч ( Обновление 1.22.12

	text = text.replace(/❌ый/g, "❌");
	text = text.replace(/❌ый/i, "❌");
	text = text.replace(/❌ть/g, "❌");
	text = text.replace(/❌ть/i, "❌");
	text = text.replace(/❌й/g, "❌");
	text = text.replace(/❌й/i, "❌");
	text = text.replace(/❌я/g, "❌");
	text = text.replace(/❌я/i, "❌");
	text = text.replace(/❌ый/g, "❌");
	text = text.replace(/❌ый/i, "❌");
	text = text.replace(/❌ть/g, "❌");
	text = text.replace(/❌ть/i, "❌");
	text = text.replace(/❌ек/g, "❌");
	text = text.replace(/❌ек/i, "❌");
	text = text.replace(/❌уть/g, "❌");
	text = text.replace(/❌уть/i, "❌");
	text = text.replace(/❌ли/g, "❌");
	text = text.replace(/❌ли/i, "❌");
	text = text.replace(/❌л/g, "❌");
	text = text.replace(/❌л/i, "❌");
	text = text.replace(/❌ивающе/g, "❌");
	text = text.replace(/❌ивающе/i, "❌");
	text = text.replace(/осто❌/g, "❌");
	text = text.replace(/осто❌/i, "❌");
	text = text.replace(/❌ить/g, "❌");
	text = text.replace(/❌ить/i, "❌");
	text = text.replace(/❌а/g, "❌");
	text = text.replace(/❌а/i, "❌");
	text = text.replace(/❌к/g, "❌");
	text = text.replace(/❌к/i, "❌");
	text = text.replace(/❌ы/g, "❌");
	text = text.replace(/❌ы/i, "❌");
	text = text.replace(/❌аньчик/g, "❌");
	text = text.replace(/❌аньчик/i, "❌");
	text = text.replace(/❌м/g, "❌");
	text = text.replace(/❌м/i, "❌");
	text = text.replace(/❌о/g, "❌");
	text = text.replace(/❌о/i, "❌");
	text = text.replace(/❌то/g, "❌");
	text = text.replace(/❌то/i, "❌");
	text = text.replace(/❌ньчик/g, "❌");
	text = text.replace(/❌ньчик/i, "❌");
	text = text.replace(/❌а/g, "❌");
	text = text.replace(/❌а/i, "❌");
	text = text.replace(/e❌/g, "❌");
	text = text.replace(/e❌/i, "❌");

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

	// Патч ) Обновление 1.22.12

	textNode.nodeValue = text;
}
function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}


