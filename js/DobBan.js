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

	//Диана Шурыгина АнтиСпам

	text = text.replace(/Диана Шурыгина/g, " ");
	text = text.replace(/Диана Шурыгина/i, " ");

	//Диана Шурыгина АнтиСпам

	//Статус расширения

	text = text.replace(/AntiProfanity/g, "AntiProfanity установлено");
	text = text.replace(/AntiProfanity/i, "AntiProfanity установлено");

	//Статус расширения

	// Патч 1.21.13 (Б) (

	text = text.replace(/Блядистость/g, "❌");
	text = text.replace(/блядистость/i, "❌");
	text = text.replace(/Блядина/g, "❌");
	text = text.replace(/блядина/i, "❌");
	text = text.replace(/БлЯдях/g, "❌");
	text = text.replace(/блЯдях/i, "❌");
	text = text.replace(/Бляди/g, "❌");
	text = text.replace(/бляди/i, "❌");
	text = text.replace(/Бляди/g, "❌");
	text = text.replace(/бляди/i, "❌");
	text = text.replace(/Блядский/g, "❌");
	text = text.replace(/блядский/i, "❌");
	text = text.replace(/(\s|^|"|«|\()Бл(я|дь|ть|ть!|ть,|ть;|ть.|ть?)/g, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()Бл(я|дь|ть|ть!|ть,|ть;|ть.|ть?)/i, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()бл(я|дь|ть|ть!|ть,|ть;|ть.|ть?)/g, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()бл(я|дь|ть|ть!|ть,|ть;|ть.|ть?)/i, randomWord(["❌"]));

	text = text.replace(/(\s|^|"|«|\()Хуй/g, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()хуй/i, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()Ебаться/g, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()ебаться/i, randomWord(["❌"]));

	text = text.replace(/(\s|^|"|«|\()Ебля/g, randomWord(["❌"]));
	text = text.replace(/(\s|^|"|«|\()ебля/i, randomWord(["❌"]));
	text = text.replace(/Хуй/g, "❌");
	text = text.replace(/хуй/i, "❌");
	text = text.replace(/Блядь/g, "❌");
	text = text.replace(/блядь/i, "❌");
	text = text.replace(/Ебанись/g, randomWord(["❌"]));
	text = text.replace(/ебанись/i, randomWord(["❌"]));
	text = text.replace(/Ебанитесь/g, randomWord(["❌"]));
	text = text.replace(/ебанитесь/i, randomWord(["❌"]));
	text = text.replace(/Ебать/g, "❌");
	text = text.replace(/ебать/i, "❌");
	text = text.replace(/Ебат/g, "❌");
	text = text.replace(/ебат/i, "❌");
	text = text.replace(/Еблан/g, "❌");
	text = text.replace(/еблан/i, "❌");
	text = text.replace(/Ебаться/g, randomWord(["❌"]));
	text = text.replace(/ебаться/i, randomWord(["❌"]));
	text = text.replace(/Ебануться/g, randomWord(["❌"]));
	text = text.replace(/ебануться/i, randomWord(["❌"]));

	text = text.replace(/Отпизди$/g, randomWord(["❌"]));
	text = text.replace(/отпизди$/i, randomWord(["❌"]));
	text = text.replace(/Отпиздят/g, randomWord(["❌"]));
	text = text.replace(/отпиздят/i, randomWord(["❌"]));
	text = text.replace(/Отпизд/g, randomWord(["❌"]));
	text = text.replace(/отпизд/i, randomWord(["❌"]));
	text = text.replace(/Отпизжен(н|)/g, randomWord(["❌"]));
	text = text.replace(/отпизжен(н|)/i, randomWord(["❌"]));
	text = text.replace(/Отпизжу/g, randomWord(["❌"]));
	text = text.replace(/отпизжу/i, randomWord(["❌"]));
	text = text.replace(/От(ъ|)ебись/g, "❌");
	text = text.replace(/от(ъ|)ебись/i, "❌");
	text = text.replace(/От(ъ|)ебитесь/g, "❌");
	text = text.replace(/от(ъ|)ебитесь/i, "❌");


	text = text.replace(/Пидорасы/g, "❌");
	text = text.replace(/пидорасы/i, "❌");
	text = text.replace(/Прихуел ли/g, "❌");
	text = text.replace(/прихуел ли/i, "❌");
	text = text.replace(/Пидорасу/g, "❌");
	text = text.replace(/пидорасу/i, "❌");
	text = text.replace(/Пидорасом/g, "❌");
	text = text.replace(/пидорасом/i, "❌");
	text = text.replace(/Пидорасе/g, "❌");
	text = text.replace(/пидорасе/i, "❌");
	text = text.replace(/Пидорасы/g, "❌");
	text = text.replace(/пидорасы/i, "❌");
	text = text.replace(/Пидорасов/g, "❌");
	text = text.replace(/пидорасов/i, "❌");
	text = text.replace(/Пидораса(ми|и|м)/g, "❌");
	text = text.replace(/пидораса(ми|и|м)/i, "❌");
	text = text.replace(/Пидорасов/g, "❌");
	text = text.replace(/пидорасов/i, "❌");
	text = text.replace(/Пидорасах/g, "❌");
	text = text.replace(/пидорасах/i, "❌");
	text = text.replace(/Пидорасам(и)/g, "❌");
	text = text.replace(/пидорасам(и)/i, "❌");
	text = text.replace(/Пидораса(ми|х|и)/g, randomWord(["❌"]));
	text = text.replace(/Пидораса(ми|х|и)/i, randomWord(["❌"]));
	text = text.replace(/Пидорас(а|ов|ы|у)/g, "❌");
	text = text.replace(/пидорас(а|ов|ы|у)/i, "❌");
	text = text.replace(/Пидорас/g, "❌");
	text = text.replace(/пидорас/i, "❌");
	text = text.replace(/Пиздец/g, randomWord(["❌"]));
	text = text.replace(/пиздец/i, randomWord(["❌"]));
	text = text.replace(/Пизд(о|а)бол/g, randomWord(["❌"]));
	text = text.replace(/пизд(о|а)бол/i, randomWord(["❌"]));
	text = text.replace(/Пизд(о|а)нуться/g, randomWord(["❌"]));
	text = text.replace(/пизд(о|а)нуться/i, randomWord(["❌"]));
	text = text.replace(/Пизд(е|ё)ж/g, randomWord(["❌"]));
	text = text.replace(/пизд(е|ё)ж/i, randomWord(["❌"]));
	text = text.replace(/Пиздеть/g, randomWord(["❌"]));
	text = text.replace(/пиздеть/i, randomWord(["❌"]));
	text = text.replace(/Пиздишь/g, randomWord(["❌"]));
	text = text.replace(/пиздишь/i, randomWord(["❌"]));

	text = text.replace(/B3ъeб/g, "❌");
	text = text.replace(/b3ъeб/i, "❌");
	text = text.replace(/Cock/g, "❌");
	text = text.replace(/cock/i, "❌");
	text = text.replace(/eblan/g, "❌");
	text = text.replace(/eblan/i, "❌");
	text = text.replace(/Fuck/g, "❌");
	text = text.replace(/fuck/i, "❌");
	text = text.replace(/Fucker/g, "❌");
	text = text.replace(/fucker/i, "❌");
	text = text.replace(/Fucking/g, "❌");
	text = text.replace(/fucking/i, "❌");
	text = text.replace(/Zaeb/g, "❌");
	text = text.replace(/zaeb/i, "❌");
	text = text.replace(/Zaebal/g, "❌");
	text = text.replace(/zaebal/i, "❌");
	text = text.replace(/Zaebali/g, "❌");
	text = text.replace(/zaebali/i, "❌");
	text = text.replace(/Zaebat/g, "❌");
	text = text.replace(/zaebat/i, "❌");
	text = text.replace(/Заебали/g, "❌");
	text = text.replace(/заебали/i, "❌");

	textNode.nodeValue = text;
}
function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}


