(function(testutil){jshero.koans.add({id:"regexi",title:"Regex: case-insensitive",lesson:"Regul\xE4re Ausdr\xFCcke kann man durch Flags erg\xE4nzen. Eines dieser Flags ist <code>i</code>.\nIst es gesetzt, unterscheidet das Pattern nicht zwischen Gro\xDF- und Kleinschreibung. Der Regex ist case-insensitive.\nFlags werden dem Regex einfach angeh\xE4ngt:\n\n<pre><code>let t1 = /es/i.test(\"War es\"); // true\nlet t2 = /es/i.test(\"Es war\"); // true\nlet t3 = /es/i.test(\"ES\"); // true</code></pre>",task:"Schreibe eine Funktion <code>test</code>, die feststellt, ob ein String das Wort <code>JavaScript</code>\noder <code>JS</code> enth\xE4lt. Dabei soll Gro\xDF- oder Kleinschreibung keine Rolle spielen.",tests:[function(){return testutil.assert_isFunction("test")},function(){return testutil.assert_functionHasNumOfParameter("test",1)},function(){return testutil.assert_functionReturns("test('JAVASCRIPT')",true)},function(){return testutil.assert_functionReturns("test('hello javascript')",true)},function(){return testutil.assert_functionReturns("test('JavaScript Hero')",true)},function(){return testutil.assert_functionReturns("test('JS')",true)},function(){return testutil.assert_functionReturns("test('hello js')",true)},function(){return testutil.assert_functionReturns("test('JS Hero')",true)},function(){return testutil.assert_functionReturns("test('HelloJavaScript')",false)},function(){return testutil.assert_functionReturns("test('JavaScriptHero')",false)},function(){return testutil.assert_functionReturns("test('Java')",false)},function(){return testutil.assert_functionReturns("test('JSF')",false)},function(){return testutil.assert_functionReturns("test('JJS')",false)}]})})(jshero.testutil);