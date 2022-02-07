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

	// // Словарь замен 


	// (Охуе Ахуе) 
	
	text = text.replace(/Охуенчик/g, "Офигенно");             
	text = text.replace(/Охуеете/g, "Офигеете");
	text = text.replace(/Охуеем/g, "Офигеем");
	text = text.replace(/Охуеть/g, "Офигеть");
	text = text.replace(/Охует/g, "Подозрительный набор");
	text = text.replace(/Охуели/g, "Офигели");
	text = text.replace(/Охуела/g, "Офигела");
	text = text.replace(/Охуеют/g, "Офигеют");
	text = text.replace(/Охуею/g, "Офигею");
	text = text.replace(/Охуейте/g, "Офигейте");
	text = text.replace(/Охуело/g, "Офигело");
	text = text.replace(/охуенчик/i, "Офигенно");
	text = text.replace(/охуеете/i, "Офигеете");
	text = text.replace(/охуеем/i, "Офигеем");
	text = text.replace(/охуеть/i, "Офигеть");
	text = text.replace(/охует/i, "Подозрительный набор");
	text = text.replace(/охуели/i, "Офигели");
	text = text.replace(/охуела/i, "Офигела");
	text = text.replace(/охуеют/i, "Офигеют");
	text = text.replace(/охуею/i, "Офигею");
	text = text.replace(/охуейте/i, "Офигейте");
	text = text.replace(/охуело/i, "Офигело");

	text = text.replace(/Ахуенчик/g, "Афигенно");
	text = text.replace(/Ахуеете/g, "Афигеете");
	text = text.replace(/Ахуеем/g, "Афигеем");
	text = text.replace(/Ахуеть/g, "Афигеть");
	text = text.replace(/Ахует/g, "Подозрительный набор");
	text = text.replace(/Ахуели/g, "Афигели");
	text = text.replace(/Ахуела/g, "Афигела");
	text = text.replace(/Ахуеют/g, "Афигеют");
	text = text.replace(/Ахуею/g, "Афигею");
	text = text.replace(/Ахуейте/g, "Афигейте");
	text = text.replace(/Ахуело/g, "Афигело");
	text = text.replace(/ахуенчик/i, "Афигенно");
	text = text.replace(/ахуеете/i, "Афигеете");
	text = text.replace(/ахуеем/i, "Афигеем");
	text = text.replace(/ахуеть/i, "Афигеть");
	text = text.replace(/ахует/i, "Подозрительный набор");
	text = text.replace(/ахуели/i, "Афигели");
	text = text.replace(/ахуела/i, "Афигела");
	text = text.replace(/ахуеют/i, "Афигеют");
	text = text.replace(/ахуею/i, "Афигею");
	text = text.replace(/ахуейте/i, "Афигейте");
	text = text.replace(/ахуело/i, "Афигело");


	// (Охуе Ахуе) 

	// (Бля) 

	
	
	text = text.replace(/Блядьям/g, "Падшим женщинам");
	text = text.replace(/Блядьми/g, "Падшими женщинами");
	text = text.replace(/Блядях/g, "Падших женщинах");
	text = text.replace(/Блядей/g, "АфигелоПадших женщин");
	text = text.replace(/Блядство/g, "Свинарник");
	text = text.replace(/Блядский/g, "Гадский");
	text = text.replace(/Блядское/g, "Гадское");
	text = text.replace(/Блядские/g, "Гадские");
	text = text.replace(/Бляхомудила/g, "Что-то на зоновском");
	text = text.replace(/Блядословник/g, "Балабол");
	text = text.replace(/Блядогон/g, "Что-то на зоновском");
	text = text.replace(/Блядина/g, "Падшая женщина");
	text = text.replace(/Бляди/g, "Падшие женщины");
	text = text.replace(/Блядистость/g, "Поведение падшей женщины");
	text = text.replace(/Бля/g, "Блин");

	

	text = text.replace(/блядьям/i, "Падшим женщинам");
	text = text.replace(/блядьми/i, "Падшими женщинами");
	text = text.replace(/блядях/i, "Падших женщинах");
	text = text.replace(/блядей/i, "АфигелоПадших женщин");
	text = text.replace(/блядство/i, "Свинарник");
	text = text.replace(/блядский/i, "Гадский");
	text = text.replace(/блядское/i, "Гадское");
	text = text.replace(/блядские/i, "Гадские");
	text = text.replace(/бляхомудила/i, "Что-то на зоновском");
	text = text.replace(/блядословник/i, "Балабол");
	text = text.replace(/блядогон/i, "Что-то на зоновском");
	text = text.replace(/блядина/i, "Падшая женщина");
	text = text.replace(/бляди/i, "Падшие женщины");
	text = text.replace(/блядистость/i, "Поведение падшей женщины");
	ext = text.replace(/бля/i, "Блин");

	// (Бля) 


	// (ХУ)

	text = text.replace(/Хуеплет/g, "Врун");
	text = text.replace(/Хуеплёт/g, "Врун");
	text = text.replace(/Хуйня/g, "Чушь");
	text = text.replace(/Хуйло/g, "Плохой человек");
	text = text.replace(/Хуйню/g, "Чушь");
	text = text.replace(/Хуйней/g, "Чушью");
	text = text.replace(/Хуйнёй/g, "Чушью");
	text = text.replace(/Хуесос/g, "Слабак");
	text = text.replace(/Хуем/g, "Членом");
	text = text.replace(/Хуя/g, "Вот тебе на");
	text = text.replace(/Хую/g, "Члену");
	text = text.replace(/Хуёв/g, "Членов");
	text = text.replace(/Хуев/g, "Членов");
	text = text.replace(/Хули/g, "Зачем");
	text = text.replace(/Хуй/g, "Член");
	text = text.replace(/Хуйнуться/g, "Упасть");
	text = text.replace(/Хуинуться/g, "Упасть");
	text = text.replace(/хуеплет/i, "Врун");
	text = text.replace(/хуеплёт/i, "Врун");
	text = text.replace(/хуйня/i, "Чушь");
	text = text.replace(/хуйло/i, "Плохой человек");
	text = text.replace(/хуйню/i, "Чушь");
	text = text.replace(/хуйней/i, "Чушью");
	text = text.replace(/хуйнёй/i, "Чушью");
	text = text.replace(/хуесос/i, "Слабак");
	text = text.replace(/хуем/i, "Членом");
	text = text.replace(/хуя/i, "Вот тебе на");
	text = text.replace(/хую/i, "Члену");
	text = text.replace(/хуёв/i, "Членов");
	text = text.replace(/хуев/i, "Членов");
	text = text.replace(/хули/i, "зачем");
	text = text.replace(/хуй/i, "Член");
	text = text.replace(/хуйнуться/i, "Упасть");
	text = text.replace(/хуинуться/i, "Упасть");
	

	// (ХУ)

	// (ЕБ) 
	text = text.replace(/Ебанулся/g, "Сошел с ума");
	text = text.replace(/Ебанулись/g, "Сошли с ума");
	text = text.replace(/Ебануться/g, "Сойти с ума");
	text = text.replace(/Ебанувшийся/g, "Сумасшедший");
	text = text.replace(/Ебанувшись/g, "Сойдя с ума");
	text = text.replace(/Ебанусь/g, "Сойду с ума");
	text = text.replace(/Ебанешься/g, "Сойдешь с ума");
	text = text.replace(/Ебанется/g, "Тронется умом");
	text = text.replace(/Ебанемся/g, "Тронемся умом");
	text = text.replace(/Ебанетесь/g, "Тронетесь умом");
	text = text.replace(/Ебанутся/g, "Тронутся умом");
	text = text.replace(/Ебанулась/g, "Тронулась умом");
	text = text.replace(/Ебанулось/g, "Упало");
	text = text.replace(/Ебанись/g, "Свехнись");
	text = text.replace(/Ебанитесь/g, "Свехнитесь");
	text = text.replace(/Еблан/g, "Идиот");
	text = text.replace(/Ебаться/g, "Заниматься любовью");
	text = text.replace(/Ебнуться/g, "Свихнуться");
	text = text.replace(/Ебаная/g, "Сильно надоевшая");
	text = text.replace(/Ебнутый/g, "Сумасшедший");
	text = text.replace(/Ебнутая/g, "Сумасшедшая");
	text = text.replace(/Ебут/g, "Нагибают");
	text = text.replace(/Ебет/g, "Нагибает");

	text = text.replace(/ебет/g, "Нагибает");
	text = text.replace(/ебанулся/i, "Сошел с ума");
	text = text.replace(/ебанулись/i, "Сошли с ума");
	text = text.replace(/ебануться/i, "Сойти с ума");
	text = text.replace(/ебанувшийся/i, "Сумасшедший");
	text = text.replace(/ебанувшись/i, "Сойдя с ума");
	text = text.replace(/ебанусь/i, "Сойду с ума");
	text = text.replace(/ебанешься/i, "Сойдешь с ума");
	text = text.replace(/ебанёшься/i, "Сойдешь с ума");
	text = text.replace(/ебанешся/i, "Сойдешь с ума");
	text = text.replace(/ебанёшся/i, "Сойдешь с ума");
	text = text.replace(/ебанется/i, "Тронется умом");
	text = text.replace(/ебанемся/i, "Тронемся умом");
	text = text.replace(/ебанетесь/i, "Тронетесь умом");
	text = text.replace(/ебанутся/i, "Тронутся умом");
	text = text.replace(/ебанулась/i, "Тронулась умом");
	text = text.replace(/ебанулось/i, "Упало");
	text = text.replace(/ебанись/i, "Свехнись");
	text = text.replace(/ебанитесь/i, "Свехнитесь");
	text = text.replace(/еблан/i, "Идиот");
	text = text.replace(/ебаться/i, "Заниматься любовью");
	text = text.replace(/ебнуться/i, "Свихнуться");
	text = text.replace(/ебаная/i, "Сильно надоевшая");
	text = text.replace(/ебнутый/i, "Сумасшедший");
	text = text.replace(/ебнутая/i, "Сумасшедшая");
	text = text.replace(/ебут/i, "Нагибают");
	

	// (ЕБ) 


	// (ОТ) 

	

	text = text.replace(/Отпизди/g, "Избей");
	text = text.replace(/Отпиздят/g, "Изобьют");
	text = text.replace(/Отпиздил/g, "Избил");
	text = text.replace(/Отпизжен/g, "Избит");
	text = text.replace(/Отпизжу/g, "Изобью");
	text = text.replace(/Отъебитесь/g, "Отстаньте");
	text = text.replace(/Отъебись/g, "Отстань");
	text = text.replace(/Отебись/g, "Отстань");
	text = text.replace(/Отебитесь/g, "Отстаньте");

	text = text.replace(/отпизди/i, "Избей");
	text = text.replace(/отпиздят/i, "Изобьют");
	text = text.replace(/отпиздил/i, "Избил");
	text = text.replace(/отпизжен/i, "Избит");
	text = text.replace(/отпизжу/i, "Изобью");
	text = text.replace(/отъебитесь/i, "Отстаньте");
	text = text.replace(/отъебись/i, "Отстань");
	text = text.replace(/отебись/i, "Отстань");
	text = text.replace(/отебитесь/i, "Отстаньте");


	// (ОТ) 

	// (РА) 

	text = text.replace(/Разъебывай/g, "Ломай");
	text = text.replace(/Разъебывайте/g, "Ломайте");
	text = text.replace(/Разъебанный/g, "Сломанный");
	text = text.replace(/Разъебанная/g, "Сломанная");
	text = text.replace(/Разъебанное/g, "Сломанное");

	text = text.replace(/разъебывай/i, "Ломай");
	text = text.replace(/разъебывайте/i, "Ломайте");
	text = text.replace(/разъебанный/i, "Сломанный");
	text = text.replace(/разъебанная/i, "Сломанная");
	text = text.replace(/разъебанное/i, "Сломанное");
	

	// (РА) )

	// (ПИ ПРИ) )

	text = text.replace(/Пи(дорасах|дорасы|дорасом|дорасе|дорасов|дорасами|дорасах|дораса|дорасов|дорасы|дорасу|здеть|здишь|здат|зде)/g, randomWord(["***"]));
	text = text.replace(/Пи(дорасах|дорасы|дорасом|дорасе|дорасов|дорасами|дорасах|дораса|дорасов|дорасы|дорасу|здеть|здишь|здат|зде)/i, randomWord(["***"]));

	text = text.replace(/Пизд(о|а)боль/g, randomWord(["***"]));
	text = text.replace(/пизд(о|а)боль/i, randomWord(["***"]));
	text = text.replace(/Пизд(о|а)нуться/g, randomWord(["***"]));
	text = text.replace(/пизд(о|а)нуться/i, randomWord(["***"]));
	text = text.replace(/Пизд(е|ё)ж/g, randomWord(["***"]));
	text = text.replace(/пизд(е|ё)ж/i, randomWord(["***"]));

	// (ПИ ПРИ) )

	// (Еба) )

	text = text.replace(/Еба(вшись|ться|лось)/g, randomWord(["***"]));
	text = text.replace(/еба(вшись|ться|лось)/i, randomWord(["***"]));


	// (Еба) )


	text = text.replace(/На(е|и)бнуться/g, randomWord(["плохое слово"]));
	text = text.replace(/на(е|и)бнуться/i, randomWord(["плохое слово"]));
	text = text.replace(/Наебнуться/g, "плохое слово");
	text = text.replace(/наебнуться/i, "плохое слово");




	text = text.replace(/(По(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|До пизды)/g, randomWord(["плохое слово"]));
	text = text.replace(/(по(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|до пизды)/i, randomWord(["плохое слово"]));
	text = text.replace(/(На(\s|)ху(й|ю)($|.|\s|,|\?|!)|(В|Ф)(\s|)п(из|ес)ду)/g, randomWord(["плохое слово"]));
	text = text.replace(/(на(\s|)ху(й|ю)($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/i, randomWord(["плохое слово"]));
	text = text.replace(/(На(\s|)хуя($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/g, randomWord(["плохое слово"]));
	text = text.replace(/(О|А)ху(ен|(ет|)итель)н/g, randomWord(["плохое слово"]));
	text = text.replace(/(о|а)ху(ен|(ет|)итель)н/i, randomWord(["плохое слово"]));
	text = text.replace(/(О|А|При)хуеть/g, "плохое слово");
	text = text.replace(/(о|а|при)хуеть/i, "плохое слово");
	text = text.replace(/(О|А|При)хуе(л(а|)|ю|ешь|вае(шь|те|т|тся))/g, randomWord(["плохое слово"]));
	text = text.replace(/(о|а|при)хуе(л(а|)|ю|ешь|вае(шь|те|т|тся))/i, randomWord(["плохое слово"]));


	// Обновление словаря

	text = text.replace(/Взбляд/g, "Подозрительный набор");
	text = text.replace(/взбляд/i, "Подозрительный набор");
	text = text.replace(/Впиздчил/g, "Подозрительный набор");
	text = text.replace(/впиздчил/i, "Подозрительный набор");
	text = text.replace(/Выблядовал/g, "Нагулял");
	text = text.replace(/выблядовал/i, "Нагулял");
	text = text.replace(/Глупизди/g, "Подозрительный набор");
	text = text.replace(/глупизди/i, "Подозрительный набор");
	text = text.replace(/Дерьмохеропиздократ/g, "плохое слово");
	text = text.replace(/дерьмохеропиздократ/i, "плохое слово");
	text = text.replace(/Дерьмохеропиздократия/g, "плохое слово");
	text = text.replace(/дерьмохеропиздократия/i, "плохое слово");
	text = text.replace(/Ебашит/g, "Вкалывает");
	text = text.replace(/ебашит/i, "вкалывает");
	text = text.replace(/Ёбкость/g, "плохое слово");
	text = text.replace(/ёбкость/i, "плохое слово");
	text = text.replace(/Ёбнул/g, "плохое слово");
	text = text.replace(/ёбнул/i, "плохое слово");
	text = text.replace(/Жидоёб/g, "Ненавистник евреев");
	text = text.replace(/жидоёб/i, "плохое слово");
	text = text.replace(/Жидоёбка/g, "плохое слово");
	text = text.replace(/жидоёбка/i, "плохое слово");
	text = text.replace(/Жидоёск/g, "плохое слово");
	text = text.replace(/жидоёск/i, "плохое слово");
	text = text.replace(/Выёбыва(ется|ются|ться)/g, randomWord(["плохое слово"]));
	text = text.replace(/выёбыва(ется|ются|ться)/i, randomWord(["плохое слово"]));
	text = text.replace(/Ебнул/g, "плохое слово");
	text = text.replace(/ебнул/i, "плохое слово");
	text = text.replace(/Козлоёб/g, "плохое слово");
	text = text.replace(/козлоёб/i, "плохое слово");
	text = text.replace(/Косоёб/g, "плохое слово");
	text = text.replace(/косоёб/i, "плохое слово");
	text = text.replace(/Многопиздная/g, "плохое слово");
	text = text.replace(/многопиздная/i, "плохое слово");
	text = text.replace(/Наблядовал/g, "плохое слово");
	text = text.replace(/наблядовал/i, "плохое слово");
	text = text.replace(/Наебашился/g, "много выпил");
	text = text.replace(/наебашился/i, "много выпил");
	text = text.replace(/Наебну/g, "плохое слово");
	text = text.replace(/наебну/i, "плохое слово");
	text = text.replace(/Опиздоумел/g, "плохое слово");
	text = text.replace(/опиздоумел/i, "плохое слово");
	text = text.replace(/Оскотоёбился/g, "плохое слово");
	text = text.replace(/оскотоёбился/i, "плохое слово");
	text = text.replace(/Пёзды/g, "плохое слово");
	text = text.replace(/пёзды/i, "плохое слово");
	text = text.replace(/Пиздо(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ы|э|ю|я)/g, "плохое слово");
	text = text.replace(/пиздо(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ы|э|ю|я)/i, "плохое слово");
	text = text.replace(/Пиздрик/g, "плохое слово");
	text = text.replace(/пиздрик/i, "плохое слово");
	text = text.replace(/Подъёб/g, "плохое слово");
	text = text.replace(/подъёб/i, "плохое слово");
	text = text.replace(/Распиздошил/g, "плохое слово");
	text = text.replace(/распиздошил/i, "плохое слово");
	text = text.replace(/Скотоёб/g, "плохое слово");
	text = text.replace(/скотоёб/i, "плохое слово");
	text = text.replace(/Страхоёбище/g, "плохое слово");
	text = text.replace(/страхоёбище/i, "плохое слово");
	text = text.replace(/Ёбится/g, "плохое слово");
	text = text.replace(/ёбится/i, "плохое слово");
	text = text.replace(/Ебанашка/g, "плохое слово");
	text = text.replace(/ебанашка/i, "тупица");

	textNode.nodeValue = text;
}
function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}