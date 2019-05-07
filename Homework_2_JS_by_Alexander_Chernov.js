	/** 
	 * Создаём анонимную самовызывающуюся функцию, 
	 * чтобы не загрезнять глобальное пространство имён
	 */
(function () {
		// Задание #1
	
	function splitAndMerge (str, sp) {
		return str.replace(/(\S)(?=(\S{1})+(\s|$))/g, `$1${sp}`);
	};
	const test1 = splitAndMerge("Hello World!", "!");
	console.log("================#1=================");
	console.log(test1);

		// Задание #2
		// используем конструктор Object , используем метод entries, который преобразовываем твой объект/хеш в массив массивов
	function convertHashArray(obj) {
		return Object.entries(obj);
	};

	const test2 = convertHashArray({
		name: 'Jeremy', 
		age: 24, 
		role: 'Software Engineer'
	});
	console.log("================#2=================");
	console.log(test2);

		// Задание #3
		
		// Сначала мы через метод toLowerCase преобразовываем значения строки в нижний регистр
		//
		// Далее для этой же строки вызываем метод replace, который по определённому шаблону меняет строку
		// 1. 	Первый аргумент replace - это регулярное выражение (РВ)
		// 		начинается РВ через символ /
		// 		далее указываются все символы, что будут в новой строке. обозначим их через [...]
		//		далее через РВ мы переходим к следующему элементу
		//		если же он не входит в [...], то отбрасываем и переходим к следующему 
		//		и в последствии к нему применяем стрелочную функцию
		// 		далее используется флаг g, чтобы мы прошли через все вхождения 
		// 2. 	Второй аргумент replace - это сама функция, которая будет менять наши значения
		//		В данном случае для красоты кода используется стрелочная функция (сахар для JS)
		//		функция (x) => x*2 аналогична function (x) { return x*2; };
		//		У данной функции два аргумента: 
		//		m - это подстрока, которая начинается с отбрасываемого символа и заканчивается на допустимом символе из [...]
		//		chr - это сам символ, до которого мы дошли и которому надо поменять регистр
		//		сама же функция возвращает элемент в верхнем регистре, преобразовав его через метод toUpperCase
	function toCamelCase(str) {
   	 	return str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]+(.)/g, (m, chr) => chr.toUpperCase());
	};
	const test3 = toCamelCase("the-0stealth0stealth-?warrior.test^ttt@ddd");
	console.log("================#3=================");
	console.log(test3);

		// Задание #4
	const _reverseItem = (item) => {
		return (item === '') ? '' : _reverseItem(item.substr(1)) + item.charAt(0);
	}; 
	function stringReverse2(str) {
		return str.split(" ").map(
			(item) => _reverseItem(item)
		).join(" ");
	};
	const test42 = stringReverse2("A fun little challenge!");
	console.log("================#4.2=================");
	console.log(test42);

		// Задание #5
		// Задание сделаем по аналогии с #3
	function stringExpansion(str) {
   	 	return str.replace(/[0-9]+(.)/g, (m, chr) => chr.repeat(m[m.length-2]));
	};
	const test5 = stringExpansion("3d332f2a");
	console.log("================#5=================");
	console.log(test5);

		// Задание #6
		// Передаём в функцию через запятую неограниченное количество аргументов
		// Далее получаем их в виде массива - осташихся параметров
		// Берём объект Math, работаем с маскимальным значением и передаём в неё массив аргументов через apply
	function getMaxArg(...value) {
		return Math.max.apply(null, value);
	};
	const test6 = getMaxArg(2, 0, 1, -5, 100, 3);
	console.log("================#6=================");
	console.log(test6);

		// Задание #7
		// Обходим массив через map, в глобальном объекте генерируем переменные и заносим в них IIFE (анонимную самовызывающуюся функцию),
		// которая возвращает значение (которое в неё передали во время генерации переменных) 
	function transform (arr) {
		arr.map((item, index) => {
			window[`newArray${index}`] = (function () { return item; }())
		});
	};

	transform([40,41,42]);
	console.log(newArray2)

		// Задание #8
	function sum() {
	    let add = (a, b) => a + b,
	        value = Array.prototype.reduce.call(arguments, add, 0),
	        f = () => {
		        value = Array.prototype.reduce.call(arguments, add, value);
		        return f;
	        };

	    f.toString = () => value;

	    return f.toString();
	}

	const test8 = sum(2, 0, 1, -5, 100, 3);
	console.log("================#8=================");
	console.log(test8);

		// Задание #9
		// Здесь обычный таймер, который запускает функцию _timerRun раз в 1 секунду
		// в ней идёт проверка значения ~value (~ - побитовое НЕ)
		// далее тернарный оператор с постдекрементом и прекращением работы таймера
	function timer (value) {
		setInterval(function _timerRun() {
			(~value) ? console.log(value--) : clearInterval(_timerRun)
		}, 1000);
	};

	timer(3);

		// Задание #10
	Function.prototype.myBind = function(newThis) {
			// Согласно стандарту ES5 мы должны проверить, является ли объект вызываемым
	  	if (typeof this !== "function") {
	  	  	throw new Error(this + "cannot be bound as it's not callable");
	  	}

	  	var boundTargetFunction = this;
	  	var boundArguments = Array.prototype.slice.call(arguments, 1);

	  	return function boundFunction() {
	  	  	// here the arguments refer to the second time when we call the target function returned from bind
	  	  	var targetArguments = Array.prototype.slice.call(arguments);
	  	  	return boundTargetFunction.apply(
	  	  	  	newThis,
	  	  	  	boundArguments.concat(targetArguments)
	  	  	);
	  	};
	};

	function addPropToNumber(number) { 
		return this.prop + number; 
	} 

	var bound = addPropToNumber.myBind({ prop: 9 }); 
	bound(1) // 10

}());