jshero.koans.add({id:"regexgroup",title:"Regex: Gruppen",lesson:"Klammern hatten wir schon kennengelernt. Sie begrenzen die Anwendung eines Operators auf den eingeklammerten\nBereich. Klammern haben aber noch eine weitere wichtige Funktion. Eingeklammerte Bereiche definieren eine Gruppe.\nDiese Gruppen werden von 1 bis 9 durchnummeriert (mehr Gruppen kann man nicht definieren).\nMit <code>\\1</code> bis <code>\\9</code> kann man innerhalb des Regex auf eine Gruppe zugreifen.\nDamit kann man nach Wiederholungen suchen.<br>\n<code>/([a-z])\\1/</code> findet doppelte Kleinbuchstaben und <code>/(\\d)(\\d).*\\1\\2/</code>\nfindet doppelte zweistellige Zahlen.\n\n<pre><code>let t1 = /([a-z])\\1/.test('Affe'); // true\nlet t2 = /(\\d)(\\d).*\\1\\2/.test(12 mal 12'); // true</code></pre>",task:"Schreibe eine Funktion <code>test</code>, die feststellt, ob ein String ein doppeltes Wort enth\xE4lt.\nEin Wort soll aus mindestens einem Buchstaben bestehen. Zugrunde liegt das englische Alphabet.\nKlein- oder Gro\xDFschreibung soll keine Rolle spielen.<br><br>Beispiel: <code>test('Apfel Birne Apfel')</code> sollte\ntrue und <code>test('Apfel Birne')</code> sollte <code>false</code> ergeben.",tests:[function(){return jshero.testutil.assert_isFunction("test")},function(){return jshero.testutil.assert_functionHasNumOfParameter("test",1)},function(){return jshero.testutil.assert_functionReturns("test('Apfel Birne Apfel')",true)},function(){return jshero.testutil.assert_functionReturns("test('Apfel Birne')",false)},function(){return jshero.testutil.assert_functionReturns("test('ApfelApfel')",false)},function(){return jshero.testutil.assert_functionReturns("test('Apfel Apfel')",true)},function(){return jshero.testutil.assert_functionReturns("test('Apfel Apfelmus')",false)},function(){return jshero.testutil.assert_functionReturns("test('ein rein')",false)}]});