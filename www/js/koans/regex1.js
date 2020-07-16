(function(testutil){jshero.koans.add({id:"regex1",title:"Regex: Zeichenliterale",lesson:"<a href='https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck'>Regul\xE4re Ausdr\xFCcke</a>,\nkurz Regex (engl.: regular expression), sind Muster zum Beschreiben von Zeichenketten.\nSie bilden eine kleine, eigenst\xE4ndige Sprache, die Teil von JavaScript\nund vielen weiteren Sprachen (Python, Perl, ...) und Programmen (LibreOffice, Emacs, ...) ist.\nRegul\xE4re Ausdr\xFCcke sind leistungsstark, aber auch sehr kryptisch.\n<br><br>\nIn JavaScript werden regul\xE4re Ausdr\xFCcke zwischen Schr\xE4gstrichen notiert:\n\n<pre><code>let pruefeAufOF = /OF/;</code></pre>\n\nHier ist <code>OF</code> der regul\xE4rer Ausdruck. Es ist ein sogenanntes Zeichenliteral und steht f\xFCr sich selbst.\nMit ihm kann man testen, ob ein anderer String die Zeichenfolge <code>OF</code> enth\xE4lt:\n\n<pre><code>let t1 = /OF/.test('OF-C 79');\nlet t2 = /OF/.test('B-OF 61')\nlet t3 = /OF/.test('HB-F 42');\nlet t4 = /OF/.test('Ofen');</code></pre>\n\n<code>test()</code> ist eine Regex-Methode. Sie gibt <code>true</code> zur\xFCck, wenn\nder ihr \xFCbergebene String das durch den Regex beschriebene Muster enth\xE4lt.\nIn unserem Fall ist das Muster die Zeichenfolge <code>OF</code>. <code>'OF-C 79'</code> und\n<code>'B-OF 61'</code> enthalten <code>OF</code>, also erhalten <code>t1</code> und <code>t2</code>\nden Wert <code>true</code>. Der String <code>'HB-F 42'</code> enth\xE4lt nicht <code>OF</code>.\n<code>t3</code> ist <code>false</code>.\n<br>\nRegul\xE4re Ausdr\xFCcke unterscheiden zwischen Gro\xDF- und Kleinschreibung.\n<code>'Ofen'</code> enth\xE4lt zwar <code>Of</code>, aber nicht <code>OF</code>.\n<code>t4</code> ist <code>false</code>.",task:"Schreibe eine Funktion <code>enthaeltRose</code>, die pr\xFCft, ob ein String den Teilstring\n<code>'Rose'</code> enth\xE4lt. <code>enthaeltRose('eine Rose')</code> sollte <code>true</code> und\n<code>enthaeltRose('ein Blatt')</code> sollte <code>false</code> ergeben.",hint:"<pre><code>Benutze den Regex /Rose/.</pre></code>",solution:"<pre><code>function enthaeltRose(s) {\n  return /Rose/.test(s);\n}</pre></code>",tests:[function(){return testutil.assert_isFunction("enthaeltRose")},function(){return testutil.assert_functionHasNumOfParameter("enthaeltRose",1)},function(){return testutil.assert_functionReturns("enthaeltRose('eine Rose')",true)},function(){return testutil.assert_functionReturns("enthaeltRose('zwei Rosen')",true)},function(){return testutil.assert_functionReturns("enthaeltRose('ein Blatt')",false)},function(){return testutil.assert_functionReturns("enthaeltRose('zwei Bl\xE4tter')",false)}]})})(jshero.testutil);