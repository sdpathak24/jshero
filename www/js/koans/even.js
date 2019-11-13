jshero.koans.add({id:"even",title:"Gerade Zahlen",task:"Schreibe eine Funktion <code>istGerade</code>, die pr\xFCft, ob eine Zahl gerade oder ungerade ist.\nIst die Zahl gerade, so soll die Funktion <code>true</code> zur\xFCckgeben, andernfalls <code>false</code>.\nDer Aufruf <code>istGerade(6)</code> soll <code>true</code> ergeben und <code>istGerade(7)</code> soll <code>false</code>\nzur\xFCckgeben.",hint:"Verwende den Modulo-Operator zusammen mit strikter Gleichheit, um zu bestimmen, ob eine Zahl gerade ist.",solution:"<pre><code>var istGerade = function(n) {\n  return n % 2 === 0;\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("istGerade")},function(){return jshero.testutil.assert_functionHasNumOfParameter("istGerade",1)},function(){return jshero.testutil.assert_functionReturns("istGerade(0)",true)},function(){return jshero.testutil.assert_functionReturns("istGerade(1)",false)},function(){return jshero.testutil.assert_functionReturns("istGerade(2)",true)},function(){return jshero.testutil.assert_functionReturns("istGerade(37)",false)},function(){return jshero.testutil.assert_functionReturns("istGerade(208)",true)}]});