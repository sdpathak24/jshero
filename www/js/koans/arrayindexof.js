jshero.koans.add({id:"arrayindexof",title:"Array: indexOf()",lesson:"Mit der <code>indexOf</code> Methode kann man die Positions des \xFCbergebenen Elements innerhalb eines\nArrays bestimmen. Die Z\xE4hlung beginnt mit 0:\n\n<pre><code>var systems = ['Debian', 'Ubuntu', 'Mint'];\nvar i1 = systems.indexOf('Mint');\nvar i2 = systems.indexOf('Windows');</code></pre>\n\n<code>i1</code> erh\xE4lt den Wert <code>2</code>, da <code>'Mint'</code> das 2te Element in\n<code>systems</code> ist. <code>i2</code> erh\xE4lt den Wert <code>-1</code>.\nDieser Wert wird zur\xFCckgegeben, wenn sich das \xFCbergebene Element nicht im Array befindet.",task:"Schreibe eine Funktion <code>add</code>, die ein Element an das Ende eines Arrays h\xE4ngt.\nDas Element soll aber nur dann angeh\xE4ngt werden, wenn es sich nicht schon im Array befindet.<br><br>Beispiel:\n<code>add([1, 2], 3)</code> sollte <code>[1, 2, 3]</code> und <code>add([1, 2], 2)</code> sollte\n<code>[1, 2]</code> zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("add")},function(){return jshero.testutil.assert_functionHasNumOfParameter("add",2)},function(){return jshero.testutil.assert_functionReturns("add(['J'], 'S')",["J","S"])},function(){return jshero.testutil.assert_functionReturns("add(['J'], 'J')",["J"])},function(){return jshero.testutil.assert_functionReturns("add([1, 2], 3)",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("add([1, 2], 2)",[1,2])}]});