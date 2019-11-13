jshero.koans.add({id:"if2",title:"Zwei return-Anweisungen",lesson:"Mit der <code>if</code>-Anweisung hat man die M\xF6glichkeit, Funktionen mit zwei <code>return</code>-Anweisungen\nzu schreiben:\n\n<pre><code>var gewinn = function(zahl) {\n  if (zahl === 6) {\n    return 100;\n  }\n  return 0;\n};</code></pre>\n\nHat <code>zahl</code> den Wert <code>6</code>, so ist die <code>if</code>-Bedingung erf\xFCllt und die erste\n<code>return</code>-Anweisung wird ausgef\xFChrt. Die Funktion wird beendet und gibt <code>100</code> zur\xFCck.\nHat <code>zahl</code> nicht den Wert <code>6</code>, so ist die <code>if</code>-Bedingung nicht erf\xFCllt.\nDie Codeausf\xFCfrung wird hinter dem zur <code>if</code>-Anweisung geh\xF6rigen Block fortgesetzt. Die zweite\n<code>return</code>-Anweisung wird ausgef\xFChrt. Die Funktion gibt <code>0</code> zur\xFCck.<br><br>\nAber Achtung: Zwei oder auch mehr <code>return</code>-Anweisungen in einer Funktion sollte man sorgsam verwenden.\nAndernfalls wird der Code un\xFCbersichtlich.",task:"Schreibe eine Funktion <code>schnapszahl</code>, die feststellt, ob eine zweistellige Zahl eine Schnapszahl ist\noder nicht. Ist die Zahl eine Schnapszahl, soll <code>'Schnaps!'</code> zur\xFCckgegeben werden, andernfalls\n<code>'Kein Schnaps!'</code>. <code>schnapszahl(22)</code> sollte <code>'Schnaps!'</code> und\n<code>schnapszahl(23)</code> sollte <code>'Kein Schnaps!'</code> zur\xFCckgeben.\n<br><br>\nEine <a href='https://de.wikipedia.org/wiki/Schnapszahl'>Schnapszahl</a> ist eine mehrstellige Zahl, die ausschlie\xDFlich\ndurch identische Ziffern dargestellt wird.",hint:"<pre><code>var schnapszahl = function(n) {\n// Berechne die Einerstelle\n// von n mit Modulo 10.\n// Berechne die Zehnerstelle\n// von n mit Division\n// durch 10 und Abrunden.\n// Vergleiche Einer- und\n// Zehnerstelle.\n};</code></pre>",solution:"<pre><code>var schnapszahl = function(n) {\n  var einer = n % 10;\n  var zehner = Math.floor(n / 10);\n  if (einer === zehner) {\n    return 'Schnaps!';\n  }\n  return 'Kein Schnaps!';\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("schnapszahl")},function(){return jshero.testutil.assert_functionHasNumOfParameter("schnapszahl",1)},function(){return jshero.testutil.assert_functionReturns("schnapszahl(11)","Schnaps!")},function(){return jshero.testutil.assert_functionReturns("schnapszahl(55)","Schnaps!")},function(){return jshero.testutil.assert_functionReturns("schnapszahl(99)","Schnaps!")},function(){return jshero.testutil.assert_functionReturns("schnapszahl(10)","Kein Schnaps!")},function(){return jshero.testutil.assert_functionReturns("schnapszahl(12)","Kein Schnaps!")},function(){return jshero.testutil.assert_functionReturns("schnapszahl(98)","Kein Schnaps!")}]});