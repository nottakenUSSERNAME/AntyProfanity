var inputs, index, mat;
var found = false;
var res;


var dictionary = Array();
dictionary = [{
    mat: 'блять',
    nemat: ' '
}, {
    mat: 'хуй',
    nemat: ' '
}, {
    mat: 'хуи',
    nemat: ' '
}, {
    mat: 'хуе',
    nemat: ' *'
}, {
    mat: 'хуя',
    nemat: ' '
}, {
    mat: 'ёбитс',
    nemat: ' '
}, {
    mat: 'взъеб',
    nemat: ' '
}, {
    mat: 'ебал',
    nemat: ' '
}, {
    mat: 'еблан',
    nemat: ' '
}, {
    mat: 'ебуч',
    nemat: ' '
}, {
    mat: 'ебат',
    nemat: ' '
}, {
    mat: 'ебус',
    nemat: ' еб*с'
}, {
    mat: 'ебну',
    nemat: ' *'
}, {
    mat: 'ёбну',
    nemat: ' *'
}, {
    mat: 'въеб',
    nemat: ' '
}, {
    mat: 'бляд',
    nemat: ' '
}, {
    mat: 'ебыват',
    nemat: ' '
}, {
    mat: 'ебанамать',
    nemat: ' '
}, {
    mat: 'ебуч',
    nemat: ' '
}, {
    mat: 'ебет',
    nemat: ' '
}, {
    mat: 'ебошит',
    nemat: ' '
}, {
    mat: 'заебал',
    nemat: ' '
}, {
    mat: 'заеба',
    nemat: ' '
}, {
    mat: 'заёба',
    nemat: ' '
}, {
    mat: 'заеби',
    nemat: ' '
}, {
    mat: 'заёби',
    nemat: ' '
}, {
    mat: 'заебо',
    nemat: ' '
}, {
    mat: 'запиз',
    nemat: ' '
}, {
    mat: 'мудак',
    nemat: ' '
}, {
    mat: 'мудаг',
    nemat: ' '
}, {
    mat: 'мудазв',
    nemat: ' '
}, {
    mat: 'мудел',
    nemat: ' '
}, {
    mat: 'мудил',
    nemat: ' '
}, {
    mat: 'вротъ',
    nemat: ' '
}, {
    mat: 'ибаццо',
    nemat: ' '
}, {
    mat: 'въебен',
    nemat: ' '
}, {
    mat: 'ебенить',
    nemat: ' '
}, {
    mat: 'пиздяч',
    nemat: ' '
}, {
    mat: 'объебо',
    nemat: ' '
}, {
    mat: 'мудоха',
    nemat: ' '
}, {
    mat: 'пиздит',
    nemat: ' '
}, {
    mat: 'пиздят',
    nemat: ' '
}, {
    mat: 'пидарас',
    nemat: ' '
}, {
    mat: 'пездит',
    nemat: ' '
}, {
    mat: 'пезден',
    nemat: ' '
}, {
    mat: 'пиздят',
    nemat: ' '
}, {
    mat: 'пиzдец',
    nemat: ' '
}, {
    mat: 'еёбок',
    nemat: ' '
}, {
    mat: 'пиздо',
    nemat: ' '
}, {
    mat: 'пизду',
    nemat: ' '
}, {
    mat: 'пизды',
    nemat: ' '
}, {
    mat: 'пиздю',
    nemat: ' '
}, {
    mat: 'пиздя',
    nemat: ' '
}, {
    mat: 'проеб',
    nemat: ' '
}, {
    mat: 'проёб',
    nemat: ' '
}, {
    mat: 'разъеб',
    nemat: ' '
}, {
    mat: 'спизде',
    nemat: ' '
}, {
    mat: 'спизди',
    nemat: ' '
}, {
    mat: 'уебат',
    nemat: ' '
}, {
    mat: 'уебищ',
    nemat: ' '
}, {
    mat: 'уёбищ',
    nemat: ' '
}, {
    mat: 'уебки',
    nemat: ' '
}, {
    mat: 'уёбки',
    nemat: ' '
}, {
    mat: 'уебок',
    nemat: ' '
}, {
    mat: 'уёбок',
    nemat: ' '
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