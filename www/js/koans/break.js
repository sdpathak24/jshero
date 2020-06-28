jshero.koans.add({id:"break",title:"break und continue",lesson:"Mit <code>break</code> wird eine Schleife beendet. Das Programm wird nach der Schleife fortgesetzt.\n\n<pre><code>let words = 'blau wei\xDF rot';\nlet indexFirstSpace = -1;\nfor (let i = 0; i < words.length; i++) {\n  if (words.charAt(i) === ' ') {\n    indexFirstSpace = i;\n    break;\n  }\n}</code></pre>\n\nIst das Zeichen mit dem Index <code>i</code> in <code>words</code> das Leerzeichen, so ist die\n<code>if</code>-Bedingung erf\xFCllt. <code>indexFirstSpace</code> bekommt den Laufindex <code>i</code> zugewisen\nund der <code>break</code>-Befehl wird ausgef\xFChrt. Die Schleife wird beendet.\nDie Codeausf\xFChrung wird nach der Schleife fortgesetzt. In unserem Beispiel ist das Zeichen mit dem Index <code>4</code>\ndas Leerzeichen. Sobald die Schleifenvariable <code>i</code> den Wert <code>4</code> erreicht hat,\nbekommt <code>indexFirstSpace</code> den Wert <code>4</code> zugewiesen und die Schleife wird beendet.<br><br>\n\nMit <code>continue</code> wird der aktuelle Schleifendurchlauf beendet. Die Programmausf\xFChrung springt zum Schleifenkopf.\n\n<pre><code>let sum = 0;\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n    continue;\n  }\n  sum = sum + i;\n}</code></pre>\n\nIst <code>i</code> eine ungerade Zahl, so gilt: i modulo 2 = 1. Die <code>if</code> - Bedingung ist nicht erf\xFCllt.\nDie Codeausf\xFChrung wird nach dem <code>if</code> fortgesetzt und <code>i</code> wird zu <code>sum</code> hinzugez\xE4hlt.\nIst <code>i</code> eine gerade Zahl, so gilt: i modulo 2 = 0. Die <code>if</code> - Bedingung ist erf\xFCllt und\n<code>continue</code> wird ausgef\xFChrt. Die Code-Ausf\xFChrung springt direkt zum Schleifenkopf. <code>i</code> wird nicht\nzu <code>sum</code> hinzugez\xE4hlt. So werden alle ungeraden Zahlen kleiner 10 aufaddiert.<br><br>\n<code>break</code> und <code>continue</code> kann man in allen Schleifen (for, while, do...while) verwenden.",task:"Schreibe eine Funktion <code>isPrime</code>. Sie soll pr\xFCfen, ob eine \xFCbergebene Zahl eine Primzahl ist oder\nnicht. Ist die Zahl prim, so soll <code>true</code> zur\xFCckgegeben werden, im anderen Fall <code>false</code>.\nDer Aufruf <code>isPrime(2)</code> soll <code>true</code> zur\xFCckgeben, <code>isPrime(4)</code> soll <code>false</code>\nergeben. Eine Primzahl ist eine nat\xFCrliche Zahl, die gr\xF6\xDFer als 1 und nur durch sich selbst und durch 1 teilbar ist.",tests:[function(){return jshero.testutil.assert_isFunction("isPrime")},function(){return jshero.testutil.assert_functionHasNumOfParameter("isPrime",1)},function(){return jshero.testutil.assert_functionReturns("isPrime(1)",false)},function(){return jshero.testutil.assert_functionReturns("isPrime(2)",true)},function(){return jshero.testutil.assert_functionReturns("isPrime(3)",true)},function(){return jshero.testutil.assert_functionReturns("isPrime(4)",false)},function(){return jshero.testutil.assert_functionReturns("isPrime(11)",true)},function(){return jshero.testutil.assert_functionReturns("isPrime(281)",true)},function(){return jshero.testutil.assert_functionReturns("isPrime(351)",false)}]});