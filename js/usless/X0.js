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


// 	text = text.replace(/плохое слово/g, randomWord([" "]));
// 	text = text.replace(/плохое слово/i, randomWord([" "]));


// 	textNode.nodeValue = text;
// }
// function randomWord(words) {
// 	return words[Math.floor(Math.random() * words.length)];
// }


