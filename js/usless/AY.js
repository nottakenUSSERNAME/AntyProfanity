// walk(document.body);

// function walk(node) {



// 	var child, next;

// 	switch (node.nodeType) {
// 		case 1:
// 		case 9:
// 		case 11:
// 			child = node.firstChild;
// 			while (child) {
// 				next = child.nextSibling;
// 				walk(child);
// 				child = next;
// 			}
// 			break;

// 		case 3:
// 			makeItCultural(node);
// 			break;
// 	}
// }

// function makeItCultural(textNode) {
// 	var text = textNode.nodeValue;

// 	// А-Я AntiProfanity Хотфикс ( Обновление 1.22.12

// 	text = text.replace(/плохое словоа/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоа/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоб/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоб/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словов/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словов/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словог/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словог/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словод/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словод/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словое/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словое/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоё/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоё/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словож/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словож/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоз/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоз/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словои/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словои/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словой/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словой/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словок/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словок/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словол/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словол/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словом/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словом/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словон/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словон/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоо/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоо/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоп/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоп/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словор/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словор/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словос/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словос/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словот/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словот/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоу/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоу/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоф/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоФ/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словох/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словох/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоц/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоц/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоЧ/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоч/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словош/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словош/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словощ/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словощ/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоь/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоь/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоъ/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоъ/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоэ/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоэ/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словою/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словою/i, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоя/g, randomWord(["плохое слово"]));
// 	text = text.replace(/плохое словоя/i, randomWord(["плохое слово"]));


// 	text = text.replace(/Аплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/аплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Бплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/бплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Вплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/вплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Гплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/гплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Дплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/дплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Еплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/еплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Ёплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/ёплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Жплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/жплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Зплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/зплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Иплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/иплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Йплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/йплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Кплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/кплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Лплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/лплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Мплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/мплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Нплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/нплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Оплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/оплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Пплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/пплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Рплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/рплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Сплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/сплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Тплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/тплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Уплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/уплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Фплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/Фплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Хплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/хплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Цплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/цплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Чплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/чплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Шплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/шплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Щплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/щплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Ьплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/ьплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Ъплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/ъплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Эплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/эплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Юплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/юплохое слово/i, randomWord(["плохое слово"]));
// 	text = text.replace(/Яплохое слово/g, randomWord(["плохое слово"]));
// 	text = text.replace(/яплохое слово/i, randomWord(["плохое слово"]));

// 	// А-Я АнтиМат Хотфикс ) Обновление 1.22.12

// 	textNode.nodeValue = text;
// }
// function randomWord(words) {
// 	return words[Math.floor(Math.random() * words.length)];
// }


