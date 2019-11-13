(function(testutil){jshero.koans.add({id:"jsx02",title:"Neuzuweisung",lesson:"Einer Variablen kann man jederzeit mit dem Gleichheitszeichen einen neuen Wert zuweisen.\nDas Schl\xFCsselwort <code>var</code> wird dabei nicht nochmal verwendet.\n<pre><code>var farbe = 'rot';\nfarbe = 'gr\xFCn';</code></pre>\nDie Variable <code>farbe</code> wird mit dem Wert <code>'rot'</code> initialisiert. Danach erh\xE4lt sie den Wert <code>'gr\xFCn'</code>.",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>var x = 'Georg';\nx = 'Karl';\nx = 'Gregor';</code></pre>",solution:"<pre><code>'Gregor'</code></pre>",tests:[function(){return testutil.assert_isString("Gregor")}]})})(jshero.testutil);