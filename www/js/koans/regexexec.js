jshero.koans.add({id:"regexexec",title:"Regex: exec",lesson:"Neben der Methode <code>test</code> besitzen regul\xE4re Ausdr\xFCcke noch die Methode <code>exec</code>.\nW\xE4hrend <code>test</code> feststellt, ob ein Regex in einem String gefunden wird, gibt <code>exec</code>\nauch den gefundenen String und alle gefundenen Gruppen zur\xFCck. Das geschiet in Form eines Arrays.\nDieses Array hat dar\xFCber hinaus die beiden Eigenschaften <code>index</code> und <code>input</code>.\n<code>index</code> enth\xE4lt den 0-basierten Index des gefundenen Strings und <code>input</code>\nden originalen String.<br>\n\n<pre><code>let resultat = /(\\d+):(\\d+)/.exec(\"Kiel-Flensburg 23:25\");\nlet endstand = resultat[0]; // \"23:25\"\nlet toreKiel = resultat[1]; // \"23\"\nlet toreFlensburg = resultat[2]; // \"25\"\nlet index = resultat.index; // 15</code></pre>\n\nWird der regul\xE4re Ausdruck nicht gefunden, gibt <code>exec</code> <code>null</code> zur\xFCck.",task:"Schreibe eine Funktion <code>parseDate</code>, die einen String mit einem Datum entgegennimmt und die dieses\nDatum als Date mit UTC 0:00 Uhr zur\xFCckgibt. Das Datum liegt im deutschen Format dd.mm.yyyy vor. F\xFChrende Nullen sind\noptional. Das Datum kann mitten im String stehen. Enth\xE4lt der String kein g\xFCltiges Datum, soll <code>null</code>\nzur\xFCckgegeben werden.<br>\n<code>parseDate(\"Geburt: 12.07.2001\")</code> sollte ein Date-Objekt mit dem Zeitpunkt 12.07.2001 0:00 UTC zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("parseDate")},function(){return jshero.testutil.assert_functionHasNumOfParameter("parseDate",1)},function(){return jshero.testutil.assert_functionReturnsType("parseDate(\"23.10.2019\")","Date")},function(){return jshero.testutil.assert_functionReturns("parseDate(\"23.10.2019\")",new Date(Date.UTC(2019,9,23)),{"utc":true})},function(){return jshero.testutil.assert_functionReturns("parseDate(\"2.5.1912\")",new Date(Date.UTC(1912,4,2)),{"utc":true})},function(){return jshero.testutil.assert_functionReturns("parseDate(\"...31.12.2000...\")",new Date(Date.UTC(2000,11,31)),{"utc":true})},function(){return jshero.testutil.assert_functionReturns("parseDate(\"..ab.12.2000...\")",null)},function(){return jshero.testutil.assert_functionReturns("parseDate(\"32.12.2000\")",null)},function(){return jshero.testutil.assert_functionReturns("parseDate(\"01.13.2000\")",null)}]});