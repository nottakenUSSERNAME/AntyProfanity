var inputs, index, mat;
var found = false;
var res;


var dictionary = Array();
dictionary = [{
    mat: 'блять',
    nemat: 'блин'
}, {
    mat: 'хуй',
    nemat: 'член'
}, {
    mat: 'хуи',
    nemat: 'члены'
}, {
    mat: 'хуе',
    nemat: 'Подозрительный набор'
}, {
    mat: 'хуя',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ёбитс',
    nemat: 'Подозрительный набор'
}, {
    mat: 'взъеб',
    nemat: 'Подстегивание'
}, {
    mat: 'ебал',
    nemat: 'Чпокал'
}, {
    mat: 'еблан',
    nemat: 'Дурак'
}, {
    mat: 'ебуч',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебат',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебус',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебну',
    nemat: 'ударю'
}, {
    mat: 'ёбну',
    nemat: 'ударю'
}, {
    mat: 'въеб',
    nemat: 'провинность'
}, {
    mat: 'блядь',
    nemat: 'Падшая женщина'
}, {
    mat: 'ебыват',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебанамать',
    nemat: 'Как это произошло'
}, {
    mat: 'ебуч',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебет',
    nemat: 'Чпокает'
}, {
    mat: 'ебошит',
    nemat: 'Вкалывает'
}, {
    mat: 'заебал',
    nemat: 'Надоел'
}, {
    mat: 'заеба',
    nemat: 'Подозрительный набор'
}, {
    mat: 'заёба',
    nemat: 'Подозрительный набор'
}, {
    mat: 'заеби',
    nemat: 'надоешь'
}, {
    mat: 'заёби',
    nemat: 'Подозрительный набор'
}, {
    mat: 'заебо',
    nemat: 'Подозрительный набор'
}, {
    mat: 'запиз',
    nemat: 'Подозрительный набор'
}, {
    mat: 'мудак',
    nemat: 'Плохой человек'
}, {
    mat: 'мудаг',
    nemat: 'Плохой человек'
}, {
    mat: 'мудазв',
    nemat: 'Подозрительный набор'
}, {
    mat: 'мудел',
    nemat: 'Подозрительный набор'
}, {
    mat: 'мудил',
    nemat: 'Подозрительный набор'
}, {
    mat: 'вротъ',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ибаццо',
    nemat: 'Подозрительный набор'
}, {
    mat: 'въебен',
    nemat: 'Подозрительный набор'
}, {
    mat: 'ебенить',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пиздяч',
    nemat: 'Подозрительный набор'
}, {
    mat: 'объебо',
    nemat: 'Подозрительный набор'
}, {
    mat: 'мудоха',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пиздит',
    nemat: 'бьет'
}, {
    mat: 'пиздят',
    nemat: 'бьют'
}, {
    mat: 'пидарас',
    nemat: 'гей'
}, {
    mat: 'пездит',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пезден',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пиzдец',
    nemat: 'Возмутительно'
}, {
    mat: 'еёбок',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пиздо',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пизду',
    nemat: 'Вагину'
}, {
    mat: 'пизды',
    nemat: 'Вагины'
}, {
    mat: 'пиздю',
    nemat: 'Подозрительный набор'
}, {
    mat: 'пиздя',
    nemat: 'Подозрительный набор'
}, {
    mat: 'проеб',
    nemat: 'Рассос'
}, {
    mat: 'проёб',
    nemat: 'Рассос'
}, {
    mat: 'разъеб',
    nemat: 'Наказание'
}, {
    mat: 'спизде',
    nemat: 'Подозрительный набор'
}, {
    mat: 'спизди',
    nemat: 'укради'
}, {
    mat: 'уебат',
    nemat: 'Подозрительный набор'
}, {
    mat: 'уебищ',
    nemat: 'Подозрительный набор'
}, {
    mat: 'уёбищ',
    nemat: 'Подозрительный набор'
}, {
    mat: 'уебки',
    nemat: 'Плохие люди'
}, {
    mat: 'уёбки',
    nemat: 'Плохие люди'
}, {
    mat: 'уебок',
    nemat: 'Плохой человек'
}, {
    mat: 'уёбок',
    nemat: 'Плохой человек'
}];
chrome.storage.local.get({
    worked: true
}, function (items) {
    if (items.worked) {
        check();
    }
});
function fuckingword(val) {

    val.onkeypress = handle;
    function handle(e) {

        if (e) {

            var line = e.srcElement.value;
            var one_word = e.srcElement.value.split(" ");

            one_word.forEach(
                function each_fucking_word(value) {
                    for (var i = 0; i < dictionary.length; i++) {
                        if (dictionary[i].mat == value) {
                            e.srcElement.value = line.split(value)
                                .join(dictionary[i].nemat);
                            break;
                        }
                    }
                });
        }
    }
}
//
function check() {

    inputs = document.getElementsByTagName('input');
    for (input = 0; input < inputs.length; ++input) {
        if (inputs[input].type == 'password' || inputs[input].type == 'pass') {
            continue;
        }
        fuckingword(inputs[input]);
    }

    textareas = document.getElementsByTagName('textarea');
    for (textarea = 0; textarea < textareas.length; ++textarea) {
        fuckingword(textareas[textarea]);
    }
}