jshero.koans.add({id:"slice",title:"Array: slice()",lesson:"Mit <code>slice</code> kopiert man aus einem Array ein Teilarray:\n\n<pre><code>var abcd = ['a', 'b', 'c', 'd'];\nvar ab = abcd.slice(0, 2);\nvar bc = abcd.slice(1, 3);\nvar bcd = abcd.slice(1, 4);</code></pre>\n\nDer erste Parameter gibt den Startindex (einschlie\xDFlich), der zweite den Endindex (ausschlie\xDFlich) an.\nDas urspr\xFCngliche Array wird nicht ver\xE4ndert.",task:"Schreibe eine Funktion <code>halve</code>, die aus einem Array die erste H\xE4lfte kopiert.\nBei einer ungeraden Anzahl von Array-Elementen soll das mittlere Element zu der ersten H\xE4lfte geh\xF6ren.<br><br>Beispiel:\n<code>halve([1,&nbsp;2,&nbsp;3,&nbsp;4])</code> sollte <code>[1,&nbsp;2]</code> zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("halve")},function(){return jshero.testutil.assert_functionHasNumOfParameter("halve",1)},function(){return jshero.testutil.assert_functionReturns("halve([1, 2])",[1])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3])",[1,2])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3, 4])",[1,2])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3, 4, 5])",[1,2,3])}]});