﻿// walk(document.body);

// function walk(node) {

// 	var child, next;

// 	switch (node.nodeType) {
// 		case 1:  // Element
// 		case 9:  // Document
// 		case 11: // Document fragment
// 			child = node.firstChild;
// 			while (child) {
// 				next = child.nextSibling;
// 				walk(child);
// 				child = next;
// 			}
// 			break;

// 		case 3: // Text node
// 			makeItCultural(node);
// 			break;
// 	}
// }

// function makeItCultural(textNode) {
// 	var text = textNode.nodeValue;

// 	// Обновление 1.22.12 (

// 	text = text.replace(/(плохое словоer|плохое словоing|плохое словоal|плохое словоali|плохое словоat|плохое словобуду|плохое словое|плохое словодки|плохое словодовать|плохое словодство|плохое словодун|плохое словодуны|плохое словодунья|плохое словодюга|плохое словоь|плохое словоя|плохое словон|плохое словоусь|плохое словоывать|плохое словоать|плохое словоен|плохое словонулся|плохое словон|плохое словоываться|плохое словоа|плохое словоы|плохое словоед|плохое словолинк|плохое словоист|плохое словоануть|плохое словоать|плохое словоун|плохое словоуха|плохое словоо|плохое словоьник|плохое словоамать|плохое словоат|плохое словоческий|плохое словоный|плохое словоныйврот|плохое словоое|плохое словоуть|плохое словоуться|плохое словоый|плохое словоько|плохое словоория|плохое словоь|плохое словоь-копать|плохое словоься|плохое словон|плохое словося|плохое словое|плохое словоее|плохое словоий|плохое словоим|плохое словочить|плохое словоа|плохое словоал|плохое словоанец|плохое словоастая|плохое словоастый|❌ать|❌аться|❌ашить|❌истое|❌истое|❌истые|❌истые|❌истый|❌истый|❌ись|❌ошить|❌ываться|❌а|❌аться|❌ить|❌иться|за❌чить|❌учая|❌учее|❌учий|❌ся|❌ся|❌ошек|❌вошка|❌вошки|❌чик|❌чица|❌ль|❌л|❌ла|❌стый|❌на❌л|❌и|❌о|❌ник|❌ся|❌нивающе|❌ть|❌о|❌ец|❌ина|❌ья|❌е|❌у|❌aс|❌ас|❌асы|❌ы|❌асы|❌ка|❌ок|❌ы|❌нуть|❌ваньчик|❌то|❌тое|❌тый|❌ь|❌ься|❌ы|❌н|❌нья|❌❌ся|❌ил|❌ила|❌или|❌у|❌у|❌ка|❌анка|❌ать|❌а|❌ать|❌ство|❌а|❌и|❌ь|❌и|❌ня|❌ня|❌овато|❌овина|❌овый|❌вато|❌венький|❌вина|❌во|❌вый|❌вый|❌к|❌к|❌л|❌нч|❌ныш|❌нький|❌лет|❌плёт|❌промышленник|❌рик|❌рыло|❌сос|❌соска|❌та|❌тень|❌ком|❌ло|❌ня|❌рик|❌ще|❌л|❌к|❌кать|❌кнуть|❌ра|❌се|❌чить|❌ник)/g, "плохое слово");
// 	text = text.replace(/(плохое словоer|плохое словоing|плохое словоal|плохое словоali|плохое словоat|плохое словобуду|плохое словое|плохое словодки|плохое словодовать|плохое словодство|плохое словодун|плохое словодуны|плохое словодунья|плохое словодюга|плохое словоь|плохое словоя|плохое словон|плохое словоусь|плохое словоывать|плохое словоать|плохое словоен|плохое словонулся|плохое словон|плохое словоываться|плохое словоа|плохое словоы|плохое словоед|плохое словолинк|плохое словоист|плохое словоануть|плохое словоать|плохое словоун|плохое словоуха|плохое словоо|плохое словоьник|плохое словоамать|плохое словоат|плохое словоческий|плохое словоный|плохое словоныйврот|плохое словоое|плохое словоуть|плохое словоуться|плохое словоый|плохое словоько|плохое словоория|плохое словоь|плохое словоь-копать|плохое словоься|плохое словон|плохое словося|плохое словое|плохое словоее|плохое словоий|плохое словоим|плохое словочить|плохое словоа|плохое словоал|плохое словоанец|плохое словоастая|плохое словоастый|плохое словоать|плохое словоаться|плохое словоашить|❌истое|❌истое|❌истые|❌истые|❌истый|❌истый|❌ись|❌ошить|❌ываться|❌а|❌аться|❌ить|❌иться|за❌чить|❌учая|❌учее|❌учий|❌ся|❌ся|❌ошек|❌вошка|❌вошки|❌чик|❌чица|❌ль|❌л|❌ла|❌стый|❌на❌л|❌и|❌о|❌ник|❌ся|❌нивающе|❌ть|❌о|❌ец|❌ина|❌ья|❌е|❌у|❌aс|❌ас|❌асы|❌ы|❌асы|❌ка|❌ок|❌ы|❌нуть|❌ваньчик|❌то|❌тое|❌тый|❌ь|❌ься|❌ы|❌н|❌нья|❌❌ся|❌ил|❌ила|❌или|❌у|❌у|❌ка|❌анка|❌ать|❌а|❌ать|❌ство|❌а|❌и|❌ь|❌и|❌ня|❌ня|❌овато|❌овина|❌овый|❌вато|❌венький|❌вина|❌во|❌вый|❌вый|❌к|❌к|❌л|❌нч|❌ныш|❌нький|❌лет|❌плёт|❌промышленник|❌рик|❌рыло|❌сос|❌соска|❌та|❌тень|❌ком|❌ло|❌ня|❌рик|❌ще|❌л|❌к|❌кать|❌кнуть|❌ра|❌се|❌чить|❌ник)/i, "плохое слово");

// 	text = text.replace(/плохое словостая/g, "плохое слово");
// 	text = text.replace(/плохое словостая/i, "плохое слово");
// 	text = text.replace(/плохое словоыйврот/g, "плохое слово");
// 	text = text.replace(/плохое словоыйврот/i, "плохое слово");
// 	text = text.replace(/плохое словося/g, "плохое слово");
// 	text = text.replace(/плохое словося/i, "плохое слово");
// 	text = text.replace(/плохое словоые/g, "плохое слово");
// 	text = text.replace(/плохое словоые/i, "плохое слово");
// 	text = text.replace(/плохое словоый/g, "плохое слово");
// 	text = text.replace(/плохое словоый/i, "плохое слово");
// 	text = text.replace(/наплохое слово/g, "плохое слово");
// 	text = text.replace(/наплохое слово/i, "плохое слово");
// 	text = text.replace(/плохое словоить/g, "плохое слово");
// 	text = text.replace(/плохое словоить/i, "плохое слово");
// 	text = text.replace(/плохое словоыш/g, "плохое слово");
// 	text = text.replace(/плохое словонка/i, "плохое слово");
// 	text = text.replace(/плохое словоький/g, "плохое слово");
// 	text = text.replace(/плохое словоький/i, "плохое слово");
// 	text = text.replace(/плохое словоаньчик/g, "плохое слово");
// 	text = text.replace(/плохое словоаньчик/i, "плохое слово");
// 	text = text.replace(/плохое словошник/g, "плохое слово");
// 	text = text.replace(/плохое словошник/i, "плохое слово");
// 	text = text.replace(/плохое словод/g, "плохое слово");
// 	text = text.replace(/плохое словод/i, "плохое слово");
// 	text = text.replace(/выплохое слово/g, "плохое слово");
// 	text = text.replace(/выплохое слово/i, "плохое слово");
// 	text = text.replace(/плохое словон/g, "плохое слово");
// 	text = text.replace(/плохое словон/i, "плохое слово");
// 	text = text.replace(/плохое слово-копать/g, "плохое слово");
// 	text = text.replace(/плохое слово-копать/i, "плохое слово");
// 	text = text.replace(/плохое словонец/g, "плохое слово");
// 	text = text.replace(/плохое словонец/i, "плохое слово");
// 	text = text.replace(/плохое словоый/g, "плохое слово");
// 	text = text.replace(/плохое словоый/i, "плохое слово");
// 	text = text.replace(/плохое словоть/g, "плохое слово");
// 	text = text.replace(/плохое словоть/i, "плохое слово");
// 	text = text.replace(/плохое словот/g, "плохое слово");
// 	text = text.replace(/плохое словот/i, "плохое слово");
// 	text = text.replace(/плохое словое/g, "плохое слово");
// 	text = text.replace(/плохое словое/i, "плохое слово");
// 	text = text.replace(/плохое словое/g, "плохое слово");
// 	text = text.replace(/плохое словое/i, "плохое слово");
// 	text = text.replace(/плохое слововающе/g, "плохое слово");
// 	text = text.replace(/плохое слововающе/i, "плохое слово");
// 	text = text.replace(/плохое словоить/g, "плохое слово");
// 	text = text.replace(/плохое словоить/i, "плохое слово");
// 	text = text.replace(/плохое словоый/g, "плохое слово");
// 	text = text.replace(/плохое словоый/i, "плохое слово");
// 	text = text.replace(/плохое словоц/g, "плохое слово");
// 	text = text.replace(/плохое словоц/i, "плохое слово");
// 	text = text.replace(/плохое словоя/g, "плохое слово");
// 	text = text.replace(/плохое словоя/i, "плохое слово");
// 	text = text.replace(/плохое словосы/g, "плохое слово");
// 	text = text.replace(/плохое словосы/i, "плохое слово");
// 	text = text.replace(/плохое словоч/g, "плохое слово");
// 	text = text.replace(/плохое словоч/i, "плохое слово");

// 	// Обновление 1.22.12 )



// 	textNode.nodeValue = text;
// }
// function randomWord(words) {
// 	return words[Math.floor(Math.random() * words.length)];
// }


