var display 		= document.querySelector("#display");
var containerDiv	= document.querySelector("#containerDiv");
var equals 			= document.querySelector("#equals");
var clear			= document.querySelector('#clear');
var backSpace		= document.querySelector("#backSpace");
var expression 		= "0";



containerDiv.addEventListener('click', justClick);

equals.addEventListener('click', function(){
	evaluate();
});

clear.addEventListener('click', function(){
	clean();
});

backSpace.addEventListener('click', function(){
	backSpaceFunction();
});


function backSpaceFunction(){
	if (expression !=="0") {
		expression = expression.substring(0, expression.length - 1);
		display.innerHTML= expression;
	}
};

function justClick(e) {
	if (e.target.value) {
		expression !=="0"	?	expression = expression + e.target.value : expression = e.target.value;
		display.innerHTML= expression;

	}
};

function evaluate(){
	expression = expression.replace(/([0-9])([(])/g, '$1*$2');
	expression = expression.replace(/([)])([0-9])/g, '$1*$2');
	expression = expression.replace(/([)])([(])/g, '$1*$2');
	//console.log(expression);
	expression = eval(expression).toString();
	//console.log(typeof expression);
	display.innerHTML= expression;
};

function clean(){
	expression="0";
	display.innerHTML= expression;
};