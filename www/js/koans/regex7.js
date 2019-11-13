(function(testutil){jshero.koans.add({id:"regex7",title:"Regex: beliebige Wiederholung",lesson:"Zwei weitere wichtige Quantoren sind <code>*</code> und <code>+</code>. Beide bedeuten, dass\nder voranstehende Ausdruck beliebig oft vorkommen darf. Bei <code>*</code> darf er auch keinmal vorkommen.\nBei <code>+</code> muss er mindestens einmal vorkommen.\n<code>b\xE4h*</code> steht f\xFCr b\xE4, b\xE4h, b\xE4hh und so weiter. <code>[01]+</code> steht f\xFCr\neine beliebige <a href='https://de.wikipedia.org/wiki/Dualsystem'>bin\xE4re Zahl</a> wie zum Beispiel\n0, 1, 001, 10111 oder 11001100. Soll das Pattern die Wiederholung einer Zeichenfolge beschreiben, so muss man\nKlammern verwenden. <code>(ha)+</code> steht f\xFCr ha, haha, hahaha und so weiter.",task:"Schreibe eine Funktion <code>hasQuote</code>, die feststellt, ob ein String ein mit doppelten\nAnf\xFChrungszeichen gekennzeichnetes Zitat enth\xE4lt. Innerhalb des Zitats sind beliebige Zeichen\nzul\xE4ssig. Ein leeres Zitat ist auch zugelassen. Das Zitat soll nicht \xFCber mehrere Zeilen gehen.\nEin Zeilenumbruch innerhalb des Zitats ist also nicht zul\xE4ssig.\n<code>hasQuote('\"Ja!\"')</code> sollte <code>true</code> und\n<code>hasQuote('Nein')</code> sollte <code>false</code> ergeben.",hint:"<pre><code>var hasQuote = function(s) {\n// Benutze .*\n};</code></pre>",solution:"<pre><code>var hasQuote = function(s) {\n  return /\".*\"/.test(s);\n};</code></pre>",tests:[function(){return testutil.assert_isFunction("hasQuote")},function(){return testutil.assert_functionHasNumOfParameter("hasQuote",1)},function(){return testutil.assert_functionReturns("hasQuote('\"\"')",true)},function(){return testutil.assert_functionReturns("hasQuote('\"Topp!\"')",true)},function(){return testutil.assert_functionReturns("hasQuote('Stimme: \"Ist gerettet!\"')",true)},function(){return testutil.assert_functionReturns("hasQuote('nein')",false)},function(){return testutil.assert_functionReturns("hasQuote('32\"')",false)}]})})(jshero.testutil);