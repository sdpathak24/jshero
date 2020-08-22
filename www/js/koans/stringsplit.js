jshero.koans.add({id:"stringsplit",title:"String: split()",lesson:"Die Methode <code>split</code> zerlegt einen String anhand eines Trennstrings in Teilstrings.\nDie Teilstrings werden als Array zur\xFCckgegeben. Der urspr\xFCngliche String wird nicht ver\xE4ndert.\n\n<pre><code>let date = '31-10-2017';\nlet parts = date.split('-');\nlet day = parts[0]; // '31'\nlet month = parts[1]; // '10'\nlet year = parts[2]; // '2017'</code></pre>\n\nDer Trennstring ist hier der Bindestrich. Er zerlegt den Datumsstring in drei Teile. Diese drei Teile werden als\nArray der Variablen <code>parts</code> zugewiesen. Anschlie\xDFend werden die einzelnen Teile aus dem Array ausgelesen\nund gesonderten Variablen zugewiesen. Die Variable <code>date</code> hat weiterhin den Wert <code>'31-10-2017'</code>.",task:"Schreibe eine Funktion <code>add</code>, die einen String mit einer Additionsaufgabe entgegennimmt und\ndie das Ergebnis der Addition als Zahl zur\xFCckgibt. Es sollen endlich viele nat\xFCrliche Zahlen addiert werden.\nDie Additionsaufgabe ist ein String der Form '1+19+...+281'.<br><br>Beispiel: <code>add('7+12+100')</code> sollte\n<code>119</code> ergeben.",tests:[function(){return jshero.testutil.assert_isFunction("add")},function(){return jshero.testutil.assert_functionHasNumOfParameter("add",1)},function(){return jshero.testutil.assert_functionReturns("add('1+2')",3)},function(){return jshero.testutil.assert_functionReturns("add('12+5+1+10')",28)},function(){return jshero.testutil.assert_functionReturns("add('50000+4000+300+20+1')",54321)},function(){return jshero.testutil.assert_functionReturns("add('13+2+4+100+3')",122)}]});