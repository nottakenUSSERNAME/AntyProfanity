walk(document.body);

function walk(node) 
{

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
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

function makeItCultural(textNode) 
{
	var text = textNode.nodeValue;

// Обновление 1.22.12 (
	
	text = text.replace(/(❌er|❌ing|❌al|❌ali|❌at|❌буду|❌е|❌дки|❌довать|❌дство|❌дун|❌дуны|❌дунья|❌дюга|❌ь|❌я|❌н|❌усь|❌ывать|❌ать|❌ен|❌нулся|❌н|❌ываться|❌а|❌ы|❌ед|❌линк|❌ист|❌ануть|❌ать|❌ун|❌уха|❌о|❌ьник|❌амать|❌ат|❌ческий|❌ный|❌ныйврот|❌ое|❌уть|❌уться|❌ый|❌ько|❌ория|❌ь|❌ь-копать|❌ься|❌н|❌ся|❌е|❌ее|❌ий|❌им|❌чить|❌а|❌ал|❌анец|❌астая|❌астый|❌ать|❌аться|❌ашить|❌истое|❌истое|❌истые|❌истые|❌истый|❌истый|❌ись|❌ошить|❌ываться|❌а|❌аться|❌ить|❌иться|за❌чить|❌учая|❌учее|❌учий|❌ся|❌ся|❌ошек|❌вошка|❌вошки|❌чик|❌чица|❌ль|❌л|❌ла|❌стый|❌на❌л|❌и|❌о|❌ник|❌ся|❌нивающе|❌ть|❌о|❌ец|❌ина|❌ья|❌е|❌у|❌aс|❌ас|❌асы|❌ы|❌асы|❌ка|❌ок|❌ы|❌нуть|❌ваньчик|❌то|❌тое|❌тый|❌ь|❌ься|❌ы|❌н|❌нья|❌❌ся|❌ил|❌ила|❌или|❌у|❌у|❌ка|❌анка|❌ать|❌а|❌ать|❌ство|❌а|❌и|❌ь|❌и|❌ня|❌ня|❌овато|❌овина|❌овый|❌вато|❌венький|❌вина|❌во|❌вый|❌вый|❌к|❌к|❌л|❌нч|❌ныш|❌нький|❌лет|❌плёт|❌промышленник|❌рик|❌рыло|❌сос|❌соска|❌та|❌тень|❌ком|❌ло|❌ня|❌рик|❌ще|❌л|❌к|❌кать|❌кнуть|❌ра|❌се|❌чить|❌ник)/g, "❌");
	text = text.replace(/(❌er|❌ing|❌al|❌ali|❌at|❌буду|❌е|❌дки|❌довать|❌дство|❌дун|❌дуны|❌дунья|❌дюга|❌ь|❌я|❌н|❌усь|❌ывать|❌ать|❌ен|❌нулся|❌н|❌ываться|❌а|❌ы|❌ед|❌линк|❌ист|❌ануть|❌ать|❌ун|❌уха|❌о|❌ьник|❌амать|❌ат|❌ческий|❌ный|❌ныйврот|❌ое|❌уть|❌уться|❌ый|❌ько|❌ория|❌ь|❌ь-копать|❌ься|❌н|❌ся|❌е|❌ее|❌ий|❌им|❌чить|❌а|❌ал|❌анец|❌астая|❌астый|❌ать|❌аться|❌ашить|❌истое|❌истое|❌истые|❌истые|❌истый|❌истый|❌ись|❌ошить|❌ываться|❌а|❌аться|❌ить|❌иться|за❌чить|❌учая|❌учее|❌учий|❌ся|❌ся|❌ошек|❌вошка|❌вошки|❌чик|❌чица|❌ль|❌л|❌ла|❌стый|❌на❌л|❌и|❌о|❌ник|❌ся|❌нивающе|❌ть|❌о|❌ец|❌ина|❌ья|❌е|❌у|❌aс|❌ас|❌асы|❌ы|❌асы|❌ка|❌ок|❌ы|❌нуть|❌ваньчик|❌то|❌тое|❌тый|❌ь|❌ься|❌ы|❌н|❌нья|❌❌ся|❌ил|❌ила|❌или|❌у|❌у|❌ка|❌анка|❌ать|❌а|❌ать|❌ство|❌а|❌и|❌ь|❌и|❌ня|❌ня|❌овато|❌овина|❌овый|❌вато|❌венький|❌вина|❌во|❌вый|❌вый|❌к|❌к|❌л|❌нч|❌ныш|❌нький|❌лет|❌плёт|❌промышленник|❌рик|❌рыло|❌сос|❌соска|❌та|❌тень|❌ком|❌ло|❌ня|❌рик|❌ще|❌л|❌к|❌кать|❌кнуть|❌ра|❌се|❌чить|❌ник)/i, "❌");
	
	text = text.replace(/❌стая/g, "❌");
	text = text.replace(/❌стая/i, "❌");
	text = text.replace(/❌ыйврот/g, "❌");
	text = text.replace(/❌ыйврот/i, "❌");
	text = text.replace(/❌ся/g, "❌");
	text = text.replace(/❌ся/i, "❌");
	text = text.replace(/❌ые/g, "❌");
	text = text.replace(/❌ые/i, "❌");
	text = text.replace(/❌ый/g, "❌");
	text = text.replace(/❌ый/i, "❌");
	text = text.replace(/на❌/g, "❌");
	text = text.replace(/на❌/i, "❌");
	text = text.replace(/❌ить/g, "❌");
	text = text.replace(/❌ить/i, "❌");
	text = text.replace(/❌ыш/g, "❌");
	text = text.replace(/❌нка/i, "❌");
	text = text.replace(/❌ький/g, "❌");
	text = text.replace(/❌ький/i, "❌");
	text = text.replace(/❌аньчик/g, "❌");
	text = text.replace(/❌аньчик/i, "❌");
	text = text.replace(/❌шник/g, "❌");
	text = text.replace(/❌шник/i, "❌");
	text = text.replace(/❌д/g, "❌");
	text = text.replace(/❌д/i, "❌");
	text = text.replace(/вы❌/g, "❌");
	text = text.replace(/вы❌/i, "❌");
	text = text.replace(/❌н/g, "❌");
	text = text.replace(/❌н/i, "❌");
	text = text.replace(/❌-копать/g, "❌");
	text = text.replace(/❌-копать/i, "❌");
	text = text.replace(/❌нец/g, "❌");
	text = text.replace(/❌нец/i, "❌");
	text = text.replace(/❌ый/g, "❌");
	text = text.replace(/❌ый/i, "❌");
	text = text.replace(/❌ть/g, "❌");
	text = text.replace(/❌ть/i, "❌");
	text = text.replace(/❌т/g, "❌");
	text = text.replace(/❌т/i, "❌");
	text = text.replace(/❌е/g, "❌");
	text = text.replace(/❌е/i, "❌");
	text = text.replace(/❌е/g, "❌");
	text = text.replace(/❌е/i, "❌");
	text = text.replace(/❌вающе/g, "❌");
	text = text.replace(/❌вающе/i, "❌");
	text = text.replace(/❌ить/g, "❌");
	text = text.replace(/❌ить/i, "❌");
	text = text.replace(/❌ый/g, "❌");
	text = text.replace(/❌ый/i, "❌");
	text = text.replace(/❌ц/g, "❌");
	text = text.replace(/❌ц/i, "❌");
	text = text.replace(/❌я/g, "❌");
	text = text.replace(/❌я/i, "❌");
	text = text.replace(/❌сы/g, "❌");
	text = text.replace(/❌сы/i, "❌");
	text = text.replace(/❌ч/g, "❌");
	text = text.replace(/❌ч/i, "❌");
	
// Обновление 1.22.12 )

	
	
	textNode.nodeValue = text;
}
function randomWord(words)
{
	return words[Math.floor(Math.random() * words.length)];
}


	