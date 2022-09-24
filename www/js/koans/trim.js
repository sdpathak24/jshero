jshero.koans.add({id:"trim",title:"String: trim()",lesson:"Die Methode <code>trim</code> entfernt Leerzeichen an beiden Enden eines Strings.\nDer an den Enden um Leerzeichen bereinigte String wird zur\xFCckgegeben.\nDer urspr\xFCgliche String bleibt unver\xE4ndert.\n\n<pre><code>let eingabe = ' Rosa Parks ';\nlet name = eingabe.trim();</code></pre>\n\n<code>name</code> enth\xE4lt den String <code>'Rosa Parks'</code>.\nWie angedeutet werden Benutzereingaben h\xE4ufig vor der Verarbeitung getrimmt.",task:"Schreibe eine Funktion <code>firstChar</code>, die bei \xDCbergabe eines Strings das erste Zeichen,\ndas kein Leerzeichen ist, zur\xFCckgibt.<br><br>Beispiel: <code>firstChar(' Rosa')</code> sollte <code>'R'</code>\nzur\xFCckgeben.",hint:"<pre><code>function firstChar(text) {\n// Trimme zuerst text.\n// Verwende dann die\n// charAt-Methode.\n}</code></pre>",solution:"<pre><code>function firstChar(text) {\n  let textGetrimmt = text.trim();\n  return textGetrimmt.charAt(0);\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("firstChar")},function(){return jshero.testutil.assert_functionHasNumOfParameter("firstChar",1)},function(){return jshero.testutil.assert_functionReturns("firstChar('Rosa')","R")},function(){return jshero.testutil.assert_functionReturns("firstChar(' Louise')","L")},function(){return jshero.testutil.assert_functionReturns("firstChar('  Parks')","P")}]});