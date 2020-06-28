jshero.koans.add({id:"regex5neu",title:"Regex: Zeichenklassen",lesson:"F\xFCr einige besondere Zeichenbereiche gibt es Buchstaben als Abk\xFCrzung.\n<code>/\\d/</code> steht f\xFCr eine Ziffer (engl.: digit) und ist identisch mit\n<code>/[0-9]/</code>. Der Regex <code>/\\w/</code> steht f\xFCr ein alphanumerisches Zeichen oder\nden Unterstrich (engl.: word character). <code>/\\w/</code> ist identisch mit <code>/[0-9a-zA-Z_]/</code>.\nDer Abk\xFCrzung ist ein Backslash vorangestellt, damit sie nicht als normaler Buchstabe\ngelesen wird. Abk\xFCrzungen kann man auch innerhalb einer Zeichenauswahl verwenden.\n<code>/[\\da-z]/</code> steht f\xFCr eine Ziffer oder einen Kleinbuchstaben.<br><br>\nEin weitere n\xFCtzliche Zeichenklasse ist <code>\\s</code>. Sie steht f\xFCr ein sogenannten Leerraum-Zeichen\n(engl.: whitespace character). Sie umfasst das gew\xF6hnliche Leerzeichen, das Tabulator-Zeichen, den Zeilenumbruch\nund weitere \xE4hnliche Zeichen.<br><br>\nVerwendet man anstelle des Kleinbuchstaben den Gro\xDFbuchstaben, kann man die negierte Zeichenklasse darstellen.\n<code>\\D</code> steht f\xFCr alle Zeichen, die keine Ziffer sind, <code>\\W</code> f\xFCr alle Zeichen, die kein\nWord Character sind und <code>\\S</code> steht f\xFCr alle Zeichen, die kein Leerraum-Zeichen sind.",task:"Schreibe eine Funktion <code>test</code>, die pr\xFCft, ob ein String 5 aufeinanderfolgende\nZiffern enth\xE4lt. <code>test('28205')</code> sollte <code>true</code> ergeben.",hint:"<pre><code>let test = function(s) {\n// Verwende \\d f\xFCnfmal.\n};</code></pre>",solution:"<pre><code>let test = function(s) {\n  return /\\d\\d\\d\\d\\d/.test(s);\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("test")},function(){return jshero.testutil.assert_functionHasNumOfParameter("test",1)},function(){return jshero.testutil.assert_functionReturns("test('28205 Bremen')",true)},function(){return jshero.testutil.assert_functionReturns("test('06493 Neudorf')",true)},function(){return jshero.testutil.assert_functionReturns("test('123456')",true)},function(){return jshero.testutil.assert_functionReturns("test('1000 kg')",false)},function(){return jshero.testutil.assert_functionReturns("test('1000-1=999')",false)}]});