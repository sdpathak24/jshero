jshero.koans.add({id:"parameter2a",title:"Parameternamen",lesson:"Bitte achte darauf, dass du eventuelle Parameter deiner Funktion anders nennst als die Funktion selbst.\nDie Funktion <code>f1</code> zum Beispiel\n\n<pre><code>let f1 = function(f1) {\n  return f1;\n};</code></pre>\n\nmacht das gleiche wie diese Funktion:\n\n<pre><code>let f2 = function(eingabe) {\n  return eingabe;\n};</code></pre>\n\nDie zweite Funktionsdefinition ist aber besser, weil der Parameter <code>eingabe</code> hei\xDFt\nund damit anders als die Funktion selbst.",task:"Schreibe eine Funktion <code>ping</code>, die einen Parameter hat und dessen Wert einfach zur\xFCckgibt.\nAchte darauf, dass der Parameter anders hei\xDFt, als die Funktion selbst.",tests:[function(){return jshero.testutil.assert_isFunction("ping")},function(){return jshero.testutil.assert_functionHasNumOfParameter("ping",1)},function(){return jshero.testutil.assert_functionReturns("ping('Test')","Test")},function(){return jshero.testutil.assert_functionReturns("ping('Hallo Welt!')","Hallo Welt!")}]});