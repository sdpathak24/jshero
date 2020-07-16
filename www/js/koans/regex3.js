jshero.koans.add({id:"regex3",title:"Regex: Zeichenauswahl",lesson:"Die letzte Lektion f\xFChrte als Metazeichen den Punkt ein.\nEr steht f\xFCr ein beliebiges Zeichen. So steht <code>/M.ier/</code> sowohl f\xFCr <code>Maier</code>\nals auch f\xFCr <code>Meier</code>. Er steht aber auch f\xFCr <code>Mxier</code>.\nM\xF6chte man letzteres ausschlie\xDFen, so muss man die Zeichenauswahl auf <code>a</code>\nund <code>e</code> begrenzen. Dazu schreibt man die gew\xFCnschte Auswahl in eckige Klammern:\n\n<pre><code>let let t1 = /M[ae]ier/.test('Maier');\nlet t2 = /M[ae]ier/.test('Meier');\nlet t3 = /M[ae]ier/.test('Mxier');\nlet t4 = /M[ae]ier/.test('Maeier');</code></pre>\n\nDer Ausdruck in eckigen Klammern steht f\xFCr genau ein Zeichen aus diesem Ausdruck.\n<code>/[ae]/</code> steht also f\xFCr ein Zeichen, das ein <code>a</code> oder ein <code>e</code> ist.\n<code>/M[ae]ier/</code> steht dann f\xFCr <code>Maier</code> oder <code>Meier</code>.\nDie Variablen <code>t1</code> sowie <code>t2</code> sind <code>true</code> und <code>t3</code>\nist <code>false</code>. Da <code>/[ae]/</code> f\xFCr genau ein Zeichen steht, ist <code>t4</code>\nauch <code>false</code>.<br><br>\nDie Auswahl kann beliebig viele Zeichen enthalten. <code>/[abc]/</code> steht f\xFCr a, b oder c\nund <code>/[123456]/</code> steht f\xFCr eine Ziffer von 1 bis 6.",task:"Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String den Namen\nMeier in einer der 4 Schreibweisen Maier, Meier, Mayer oder Meyer enth\xE4lt.\n<code>pruefe('Frau Mayer')</code> sollte <code>true</code> und\n<code>pruefe('Herr Mezer')</code> sollte <code>false</code> ergeben.",hint:"<pre><code>function pruefe(s) {\n// Verwende die Zeichenauswahl\n// zweimal.\n}</code></pre>",solution:"<pre><code>function pruefe(s) {\n  return /M[ae][iy]er/.test(s);\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("pruefe")},function(){return jshero.testutil.assert_functionHasNumOfParameter("pruefe",1)},function(){return jshero.testutil.assert_functionReturns("pruefe('Maier')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Meier')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Mayer')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Meyer')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Mazer')",false)},function(){return jshero.testutil.assert_functionReturns("pruefe('Moyer')",false)}]});