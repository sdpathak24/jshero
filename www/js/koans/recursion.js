(function(testutil,evaluator){jshero.koans.add({id:"recursion",title:"Rekursion",lesson:"Funktionen k\xF6nnen sich auch selbst aufrufen. Das nennt man <a href='https://de.wikipedia.org/wiki/Rekursive_Programmierung'>Rekursion</a>.\nDas bekannteste Beispiel ist die Berechnung der Fakult\xE4t:\n\n<pre><code>var fakultaet = function(n) {\n  if (n === 0) {\n    return 1;\n  }\n  return fakultaet(n - 1) * n;\n};</code></pre>\n\nDie <a href='https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)'>Fakult\xE4t</a> einer nat\xFCrlichen Zahl ist das Produkt aller\nnat\xFCrlichen Zahlen (ohne Null) kleiner oder gleich dieser Zahl. Sie wird durch ein nachgestelltes Ausrufezeichen abgek\xFCrzt:\nn! = 1 * 2 * 3 ... (n-1) * n. Man sieht, dass man f\xFCr die Berechnung der Fakult\xE4t von n die Fakult\xE4t von n-1 benutzen kann: n! = (n-1)! * n.\nDas Beispielprogramm ist die Umsetzung dieser Formel. Um die Fakult\xE4t von n zu berechnen, muss man die Fakult\xE4t von n-1 berechnen und\ndas Ergebnis mit n multiplizieren. So ruft sich die Funktion <code>fakultaet</code> immer wieder selbst mit einem um 1 verminderten Wert auf.\nNun ben\xF6tigt man noch eine Abbruchbedingung, damit die Rekursion nicht unendlich weiterl\xE4uft. Diese Abbruchbedingung ist mit der\n<code>if</code>-Bedingung formuliert. Ist n bei 0 angekommen, ruft sich <code>fakultaet</code> nicht mehr selbst auf,\nsondern das Ergebnis, n\xE4mlich 0! = 1, wird direkt zur\xFCckgegeben.",task:"Schreibe eine Funktion <code>reverse</code>, die die Reihenfolge der Zeichen in einem String umkehrt.\n<code>reverse('Nebel')</code> sollte <code>'lebeN'</code> zur\xFCckgeben. Die Funktion soll rekursiv sein.",tests:[function(){return testutil.assert_isFunction("reverse")},function(){return testutil.assert_functionHasNumOfParameter("reverse",1)},function(){return testutil.assert_functionReturns("reverse('')","")},function(){return testutil.assert_functionReturns("reverse('X')","X")},function(){return testutil.assert_functionReturns("reverse('az')","za")},function(){return testutil.assert_functionReturns("reverse('Nebel')","lebeN")},function(){var numOfCalls=evaluator.evalNumOfCalls("reverse('Nebel')","reverse");var ok=numOfCalls>=1;var msg;if(ok){msg="<code>reverse</code> ruft sich selbst auf."}else{msg="<code>reverse</code> ruft sich nicht selbst auf."}return{ok:ok,msg:msg}}]})})(jshero.testutil,jshero.evaluator);