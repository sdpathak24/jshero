jshero.koans.add({id:"regex4",title:"Regex: Bereiche",lesson:"M\xF6chte man mit der Zeichenauswahl alle Ziffern zulassen, so kann man\ndaf\xFCr <code>/[0123456789]/</code> verwenden. Das ist aber recht umst\xE4ndlich. \nMit einem Bindestrich kann man gr\xF6\xDFere, zusammenh\xE4ngende Zeichenbereiche leicht darstellen:\n\n<pre><code>var pruefeZiffer = /[0-9]/;\nvar pruefe1Bis6 = /[1-6]/;\nvar pruefeABisZ = /[A-Z]/;\nvar pruefeaBisz = /[a-z]/; \nvar pruefeDeutschesAlphabet = /[a-z\xE4\xF6\xFC\xDF]/;\nvar pruefeABisz = /[A-Za-z]/;\nvar pruefeMBisT = /[M-T]/;</code></pre>\n\n<code>/[0-9]/</code> steht wie der Regex oben f\xFCr genau eine Ziffer.\nDen Ziffernbereich kann man, wie <code>/[1-6]/</code> zeigt, leicht auf eine gew\xFCnschte Auswahl\n(z.B. Schulnote) einschr\xE4nken. Der Bindestrich funktioniert aber nicht nur f\xFCr Ziffern,\nsondern auch f\xFCr Buchstaben. Dabei muss man zwischen Klein- und\nGro\xDFbuchstaben unterscheiden. <code>/[A-Z]/</code> steht f\xFCr einen der 26 Gro\xDFbuchstaben und\n<code>/[a-z]/</code> f\xFCr einen Kleinbuchstaben. Wichtig ist, dass hier\n\xE4, \xF6, \xFC und \xDF nicht mit erfasst werden. M\xF6chte man das, so muss man diese Buchstaben gesondert\nauff\xFChren. Dazu schreibt man die Umlaute und das Eszett wie bei einer gew\xF6hnlichen Auswahl\neinfach vor oder hinter den Bereich (<code>/[a-z\xE4\xF6\xFC\xDF]/</code>). Ebenso kann man zwei Bereiche\nhintereinander auff\xFChren. <code>/[A-Za-z]/</code> steht f\xFCr genau einen Klein- oder Gro\xDFbuchstaben.\nDen Buchstabenbereich kann man wie bei Ziffern beliebig einschr\xE4nken (<code>/[M-T]/</code>).",task:"Schreibe eine Funktion <code>pruefe</code>, die testet, ob ein String eine\nZeichenfolge wie 'Klasse 2b' enth\xE4lt. Dabei sind Klassen von 1 bis 6 und a bis d\nzul\xE4ssig. <code>pruefe('Die Klasse 1a')</code> sollte <code>true</code> ergeben.",hint:"<pre><code>var pruefe = function(s) {\n// Verwende Literale\n// und Bereiche.  \n};</code></pre>",solution:"<pre><code>var pruefe = function(s) {\n  return /Klasse [1-6][a-d]/.test(s);\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("pruefe")},function(){return jshero.testutil.assert_functionHasNumOfParameter("pruefe",1)},function(){return jshero.testutil.assert_functionReturns("pruefe('Klasse 1a')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Klasse 6d')",true)},function(){return jshero.testutil.assert_functionReturns("pruefe('Klasse 0a')",false)},function(){return jshero.testutil.assert_functionReturns("pruefe('Klasse 1e')",false)},function(){return jshero.testutil.assert_functionReturns("pruefe('Klasse 7d')",false)},function(){return jshero.testutil.assert_functionReturns("pruefe('Kasse 1a')",false)}]});