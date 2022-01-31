walk(document.body);

function walk(node) 
{

	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child ) 
			{
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

function makeItCultural(textNode) 
{
	var text = textNode.nodeValue;
	
// // Обновление 1.22.12 (
	

// (Охуе Ахуе) ) 15.05.2017

	text = text.replace(/Охуе(нчик|ете|ем|ть|т|ли|ла|ют|ю|йте|ло)/g, randomWord(["❌"]));
	text = text.replace(/охуе(нчик|ете|ем|ть|т|ли|ла|ют|ю|йте|ло)/i, randomWord(["❌"]));
	text = text.replace(/Ахуе(нчик|ете|ем|ть|т|ли|ла|ют|ю|йте|ло)/g, randomWord(["❌"]));
	text = text.replace(/ахуе(нчик|ете|ем|ть|т|ли|ла|ют|ю|йте|ло)/i, randomWord(["❌"]));
	
// (Охуе Ахуе) )

// (Бля) )

  	text = text.replace(/Бля(дьям|дьми|дях|дях|дей|дство|дский|дское|дские|хомудила|дословник|догон|дина|диада|дистость)/g, randomWord(["❌"]));
	text = text.replace(/бля(дьям|дьми|дях|дях|дей|дство|дский|дское|дские|хомудила|дословник|догон|дина|диада|дистость)/i, randomWord(["❌"]));
	
// (Бля) )


// (ХУ) ) 15.05.2017

	text = text.replace(/Ху(йня|йло|йне|йню|нёй|ней|есос|ем|я|ю|ёв|ев|ли|й|йнуться|инуться|еплет)/g, "❌");
	text = text.replace(/ху(йня|йло|йне|йню|нёй|ней|есос|ем|я|ю|ёв|ев|ли|й|йнуться|инуться|еплет)/i, "❌");
	
// (ХУ) )
	
// (ЕБ) ) 25.04.2017

	text = text.replace(/Еб(анулся|анулись|нуться|анувшийся|анувшись|анусь|анёшься|анётся|анёмся|анётесь|анутся|анулась|анулос|анись|анитес|лан|аться|ануться|анаю|аная|ут)/g, "❌");
	text = text.replace(/еб(анулся|анулись|нуться|анувшийся|анувшись|анусь|анёшься|анётся|анёмся|анётесь|анутся|анулась|анулос|анись|анитес|лан|аться|ануться|анаю|аная|ут)/i, "❌");
	
// (ЕБ) )
	

// (ОТ) )

	text = text.replace(/От(пизди|пиздят|пиздил|пизжен|пизжу|ъебись|ъебитесь|ебись|ебитесь)/g, randomWord(["❌"]));
	text = text.replace(/от(пизди|пиздят|пиздил|пизжен|пизжу|ъебись|ъебитесь|ебись|ебитесь)/i, randomWord(["❌"]));
	
// (ОТ) )
	
// (РА) )

	text = text.replace(/Ра(ебывай|ёбывай|зёбанный|зъёбанный|зъебай|зъебать)/g, randomWord(["❌"]));
	text = text.replace(/Ра(ебывай|ёбывай|зёбанный|зъёбанный|зъебай|зъебать)/i, randomWord(["❌"]));

// (РА) )

// (ПИ ПРИ) )
 
 	text = text.replace(/Пи(дорасах|дорасы|дорасом|дорасе|дорасов|дорасами|дорасах|дораса|дорасов|дорасы|дорасу|здеть|здишь|здат|зде)/g, randomWord(["❌"]));
	text = text.replace(/Пи(дорасах|дорасы|дорасом|дорасе|дорасов|дорасами|дорасах|дораса|дорасов|дорасы|дорасу|здеть|здишь|здат|зде)/i, randomWord(["❌"]));
  
	text = text.replace(/Пизд(о|а)боль/g, randomWord(["❌"]));
	text = text.replace(/пизд(о|а)боль/i, randomWord(["❌"]));
	text = text.replace(/Пизд(о|а)нуться/g, randomWord(["❌"]));
	text = text.replace(/пизд(о|а)нуться/i, randomWord(["❌"]));
	text = text.replace(/Пизд(е|ё)ж/g, randomWord(["❌"]));
	text = text.replace(/пизд(е|ё)ж/i, randomWord(["❌"]));
	
// (ПИ ПРИ) )

// (Еба) )

	text = text.replace(/Еба(вшись|ться|лось)/g, randomWord(["❌"]));
	text = text.replace(/еба(вшись|ться|лось)/i, randomWord(["❌"]));

	
// (Еба) )

// Обновление 1.22.12 )


  // Патч 1.11.69 ( 25.04.2017
  
	text = text.replace(/На(е|и)бнуться/g, randomWord(["❌"]));
	text = text.replace(/на(е|и)бнуться/i, randomWord(["❌"]));
	text = text.replace(/Наебнуться/g, "❌");
	text = text.replace(/наебнуться/i, "❌");
 
  // Патч 1.11.69 )
  
 

  // Beta(

	text = text.replace(/(По(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|До пизды)/g, randomWord(["❌"]));
	text = text.replace(/(по(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|до пизды)/i, randomWord(["❌"]));
	text = text.replace(/(На(\s|)ху(й|ю)($|.|\s|,|\?|!)|(В|Ф)(\s|)п(из|ес)ду)/g, randomWord(["❌"]));
	text = text.replace(/(на(\s|)ху(й|ю)($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/i, randomWord(["❌"]));
	text = text.replace(/(На(\s|)хуя($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/g, randomWord(["❌"]));
	text = text.replace(/(О|А)ху(ен|(ет|)итель)н/g, randomWord(["❌"]));
	text = text.replace(/(о|а)ху(ен|(ет|)итель)н/i, randomWord(["❌"]));
	text = text.replace(/(О|А|При)хуеть/g, "❌");
	text = text.replace(/(о|а|при)хуеть/i, "❌");
	text = text.replace(/(О|А|При)хуе(л(а|)|ю|ешь|вае(шь|те|т|тся))/g, randomWord(["❌"]));
	text = text.replace(/(о|а|при)хуе(л(а|)|ю|ешь|вае(шь|те|т|тся))/i, randomWord(["❌"]));	
	
  // Beta)
 

	
  // Патч 1.11.70)
  
  // Обновление 1.23.22 ) www.russki-mat.net Словарь мата
  
	text = text.replace(/Взбляд/g, "❌");
	text = text.replace(/взбляд/i, "❌");
	text = text.replace(/Впиздчил/g, "❌");
	text = text.replace(/впиздчил/i, "❌");
	text = text.replace(/Выблядовал/g, "❌");
	text = text.replace(/выблядовал/i, "❌");
	text = text.replace(/Глупизди/g, "❌");
	text = text.replace(/глупизди/i, "❌");
	text = text.replace(/Дерьмохеропиздократ/g, "❌");
	text = text.replace(/дерьмохеропиздократ/i, "❌");
	text = text.replace(/Дерьмохеропиздократия/g, "❌");
	text = text.replace(/дерьмохеропиздократия/i, "❌");
	text = text.replace(/Ебашит/g, "❌");
	text = text.replace(/ебашит/i, "❌");
	text = text.replace(/Ёбкость/g, "❌");
	text = text.replace(/ёбкость/i, "❌");
	text = text.replace(/Ёбнул/g, "❌");
	text = text.replace(/ёбнул/i, "❌");
	text = text.replace(/Жидоёб/g, "❌");
	text = text.replace(/жидоёб/i, "❌");
	text = text.replace(/Жидоёбка/g, "❌");
	text = text.replace(/жидоёбка/i, "❌");
	text = text.replace(/Жидоёск/g, "❌");
	text = text.replace(/жидоёск/i, "❌");
	text = text.replace(/Выёбыва(ется|ются|ться)/g, randomWord(["❌"]));
	text = text.replace(/выёбыва(ется|ются|ться)/i, randomWord(["❌"]));
	text = text.replace(/Ебнул/g, "❌");
	text = text.replace(/ебнул/i, "❌");
	text = text.replace(/Козлоёб/g, "❌");
	text = text.replace(/козлоёб/i, "❌");
	text = text.replace(/Косоёб/g, "❌");
	text = text.replace(/косоёб/i, "❌");
	text = text.replace(/Многопиздная/g, "❌");
	text = text.replace(/многопиздная/i, "❌");
	text = text.replace(/Наблядовал/g, "❌");
	text = text.replace(/наблядовал/i, "❌");
	text = text.replace(/Наебашился/g, "❌");
	text = text.replace(/наебашился/i, "❌");
	text = text.replace(/Наебну/g, "❌");
	text = text.replace(/наебну/i, "❌");
	text = text.replace(/Опиздоумел/g, "❌");
	text = text.replace(/опиздоумел/i, "❌");
	text = text.replace(/Оскотоёбился/g, "❌");
	text = text.replace(/оскотоёбился/i, "❌");
	text = text.replace(/Пёзды/g, "❌");
	text = text.replace(/пёзды/i, "❌");
	text = text.replace(/Пиздо(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ы|э|ю|я)/g, "❌");
	text = text.replace(/пиздо(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ы|э|ю|я)/i, "❌");
	text = text.replace(/Пиздрик/g, "❌");
	text = text.replace(/пиздрик/i, "❌");
	text = text.replace(/Подъёб/g, "❌");
	text = text.replace(/подъёб/i, "❌");
	text = text.replace(/Распиздошил/g, "❌");
	text = text.replace(/распиздошил/i, "❌");
	text = text.replace(/Скотоёб/g, "❌");
	text = text.replace(/скотоёб/i, "❌");
	text = text.replace(/Страхоёбище/g, "❌");
	text = text.replace(/страхоёбище/i, "❌");
	text = text.replace(/Ёбится/g, "❌");
	text = text.replace(/ёбится/i, "❌");
	text = text.replace(/Ебанашка/g, "❌");
	text = text.replace(/ебанашка/i, "❌");

  // Обновление 1.23.22 ) www.russki-mat.net Словарь мата
  
	textNode.nodeValue = text;
}
function randomWord(words)
{
	return words[Math.floor(Math.random() * words.length)];
}