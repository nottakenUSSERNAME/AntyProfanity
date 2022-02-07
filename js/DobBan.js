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

		case 3: // Text node
			makeItCultural(node);
			break;
	}
}

function makeItCultural(textNode) {
	var text = textNode.nodeValue;


	//Статус расширения

	text = text.replace(/AntiProfanity/g, "AntiProfanity установлено");
	text = text.replace(/AntiProfanity/i, "AntiProfanity установлено");

	//Статус расширения

	// Патч 1.21.13 (Б) (

	text = text.replace(/Блядистость/g, "плохое слово");
	text = text.replace(/блядистость/i, "плохое слово");
	text = text.replace(/Блядина/g, "Падшая женщина");
	text = text.replace(/блядина/i, "Падшая женщина");
	text = text.replace(/БлЯдях/g, "падших женщинах");
	text = text.replace(/блЯдях/i, "Падших женщинах");
	text = text.replace(/Бляди/g, "Падшие женщины");
	text = text.replace(/бляди/i, "плохое слово");
	text = text.replace(/Бляди/g, "плохое слово");
	text = text.replace(/бляди/i, "плохое слово");
	text = text.replace(/Блядский/g, "плохое слово");
	text = text.replace(/блядский/i, "плохое слово");


	text = text.replace(/(\s|^|"|«|\()Хуй/g, randomWord(["плохое слово"]));
	text = text.replace(/(\s|^|"|«|\()хуй/i, randomWord(["плохое слово"]));
	text = text.replace(/(\s|^|"|«|\()Ебаться/g, randomWord(["плохое слово"]));
	text = text.replace(/(\s|^|"|«|\()ебаться/i, randomWord(["плохое слово"]));

	text = text.replace(/(\s|^|"|«|\()Ебля/g, randomWord(["плохое слово"]));
	text = text.replace(/(\s|^|"|«|\()ебля/i, randomWord(["плохое слово"]));
	text = text.replace(/Хуй/g, "плохое слово");
	text = text.replace(/хуй/i, "плохое слово");
	text = text.replace(/Блядь/g, "плохое слово");
	text = text.replace(/блядь/i, "плохое слово");
	text = text.replace(/Ебанись/g, randomWord(["плохое слово"]));
	text = text.replace(/ебанись/i, randomWord(["плохое слово"]));
	text = text.replace(/Ебанитесь/g, randomWord(["плохое слово"]));
	text = text.replace(/ебанитесь/i, randomWord(["плохое слово"]));
	text = text.replace(/Ебать/g, "плохое слово");
	text = text.replace(/ебать/i, "плохое слово");
	text = text.replace(/Ебат/g, "плохое слово");
	text = text.replace(/ебат/i, "плохое слово");
	text = text.replace(/Еблан/g, "плохое слово");
	text = text.replace(/еблан/i, "плохое слово");
	text = text.replace(/Ебаться/g, randomWord(["плохое слово"]));
	text = text.replace(/ебаться/i, randomWord(["плохое слово"]));
	text = text.replace(/Ебануться/g, randomWord(["плохое слово"]));
	text = text.replace(/ебануться/i, randomWord(["плохое слово"]));

	text = text.replace(/Отпизди$/g, randomWord(["плохое слово"]));
	text = text.replace(/отпизди$/i, randomWord(["плохое слово"]));
	text = text.replace(/Отпиздят/g, randomWord(["плохое слово"]));
	text = text.replace(/отпиздят/i, randomWord(["плохое слово"]));
	text = text.replace(/Отпизд/g, randomWord(["плохое слово"]));
	text = text.replace(/отпизд/i, randomWord(["плохое слово"]));
	text = text.replace(/Отпизжен(н|)/g, randomWord(["плохое слово"]));
	text = text.replace(/отпизжен(н|)/i, randomWord(["плохое слово"]));
	text = text.replace(/Отпизжу/g, randomWord(["плохое слово"]));
	text = text.replace(/отпизжу/i, randomWord(["плохое слово"]));
	text = text.replace(/От(ъ|)ебись/g, "плохое слово");
	text = text.replace(/от(ъ|)ебись/i, "плохое слово");
	text = text.replace(/От(ъ|)ебитесь/g, "плохое слово");
	text = text.replace(/от(ъ|)ебитесь/i, "плохое слово");


	text = text.replace(/Пидорас/g, "плохое слово");
	text = text.replace(/пидорас/i, "плохое слово");
	text = text.replace(/Пидарас/g, "плохое слово");
	text = text.replace(/пидарас/i, "плохое слово");
	text = text.replace(/Пидорасы/g, "плохое слово");
	text = text.replace(/пидорасы/i, "плохое слово");
	text = text.replace(/Пидарасы/g, "плохое слово");
	text = text.replace(/пидарасы/i, "плохое слово");
	text = text.replace(/Прихуел ли/g, "плохое слово");
	text = text.replace(/прихуел ли/i, "плохое слово");
	text = text.replace(/Пидорасу/g, "плохое слово");
	text = text.replace(/пидорасу/i, "плохое слово");
	text = text.replace(/Пидорасом/g, "плохое слово");
	text = text.replace(/пидорасом/i, "плохое слово");
	text = text.replace(/Пидорасе/g, "плохое слово");
	text = text.replace(/пидорасе/i, "плохое слово");
	text = text.replace(/Пидорасы/g, "плохое слово");
	text = text.replace(/пидорасы/i, "плохое слово");
	text = text.replace(/Пидорасов/g, "плохое слово");
	text = text.replace(/пидорасов/i, "плохое слово");
	text = text.replace(/Пидораса(ми|и|м)/g, "плохое слово");
	text = text.replace(/пидораса(ми|и|м)/i, "плохое слово");
	text = text.replace(/Пидорасов/g, "плохое слово");
	text = text.replace(/пидорасов/i, "плохое слово");
	text = text.replace(/Пидорасах/g, "плохое слово");
	text = text.replace(/пидорасах/i, "плохое слово");
	text = text.replace(/Пидорасам(и)/g, "плохое слово");
	text = text.replace(/пидорасам(и)/i, "плохое слово");
	text = text.replace(/Пидораса(ми|х|и)/g, randomWord(["плохое слово"]));
	text = text.replace(/Пидораса(ми|х|и)/i, randomWord(["плохое слово"]));
	text = text.replace(/Пидорас(а|ов|ы|у)/g, "плохое слово");
	text = text.replace(/пидорас(а|ов|ы|у)/i, "плохое слово");
	text = text.replace(/Пидорас/g, "плохое слово");
	text = text.replace(/пидорас/i, "плохое слово");
	text = text.replace(/Пиздец/g, randomWord(["плохое слово"]));
	text = text.replace(/пиздец/i, randomWord(["плохое слово"]));
	text = text.replace(/Пизд(о|а)бол/g, randomWord(["плохое слово"]));
	text = text.replace(/пизд(о|а)бол/i, randomWord(["плохое слово"]));
	text = text.replace(/Пизд(о|а)нуться/g, randomWord(["плохое слово"]));
	text = text.replace(/пизд(о|а)нуться/i, randomWord(["плохое слово"]));
	text = text.replace(/Пизд(е|ё)ж/g, randomWord(["плохое слово"]));
	text = text.replace(/пизд(е|ё)ж/i, randomWord(["плохое слово"]));
	text = text.replace(/Пиздеть/g, randomWord(["плохое слово"]));
	text = text.replace(/пиздеть/i, randomWord(["плохое слово"]));
	text = text.replace(/Пиздишь/g, randomWord(["плохое слово"]));
	text = text.replace(/пиздишь/i, randomWord(["плохое слово"]));
	text = text.replace(/пизда/i, randomWord(["плохое слово"]));
	text = text.replace(/Пизда/g, randomWord(["плохое слово"]));
	text = text.replace(/Пидор/g, randomWord(["плохое слово"]));
	text = text.replace(/пидор/g, randomWord(["плохое слово"]));

	text = text.replace(/B3ъeб/g, "плохое слово");
	text = text.replace(/b3ъeб/i, "плохое слово");
	text = text.replace(/Cock/g, "плохое слово");
	text = text.replace(/cock/i, "плохое слово");
	text = text.replace(/eblan/g, "плохое слово");
	text = text.replace(/eblan/i, "плохое слово");
	text = text.replace(/Fuck/g, "плохое слово");
	text = text.replace(/fuck/i, "плохое слово");
	text = text.replace(/Fucker/g, "плохое слово");
	text = text.replace(/fucker/i, "плохое слово");
	text = text.replace(/Fucking/g, "плохое слово");
	text = text.replace(/fucking/i, "плохое слово");
	text = text.replace(/Zaeb/g, "плохое слово");
	text = text.replace(/zaeb/i, "плохое слово");
	text = text.replace(/Zaebal/g, "плохое слово");
	text = text.replace(/zaebal/i, "плохое слово");
	text = text.replace(/Zaebali/g, "плохое слово");
	text = text.replace(/zaebali/i, "плохое слово");
	text = text.replace(/Zaebat/g, "плохое слово");
	text = text.replace(/zaebat/i, "плохое слово");
	text = text.replace(/Заебали/g, "плохое слово");
	text = text.replace(/заебали/i, "надоели");

	textNode.nodeValue = text;
}
function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}


