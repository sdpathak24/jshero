(function(testutil){jshero.koans.add({id:"fakultaet",title:"Fakult\xE4t",lesson:"Die <code>for</code>-Schleife soll nochmal anhand der in der Mathematik verwendeten Funktion\n<a href='https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)'>Fakult\xE4t</a> ge\xFCbt werden.\nDie Fakult\xE4t einer nat\xFCrlichen Zahl n ist das Produkt aller nat\xFCrlichen Zahlen (ohne Null) kleiner oder gleich n.\nSie wird durch ein nachgestelltes Ausrufezeichen abgek\xFCrzt: 3! = 1*2*3 = 6. Per Definition gilt 0! = 1.",task:"Schreibe eine Funktion <code>fakultaet</code>, die die Fakult\xE4t einer nat\xFCrlichen Zahl berechnet.\n<code>fakultaet(3)</code> sollte <code>1*2*3</code> = <code>6</code> ergeben.",hint:"<pre><code>var fakultaet = function(n) {\n      var result = 1;\n      for (...) {\n        ...\n      }\n      return result;\n    };</pre></code>",solution:"<pre><code>var fakultaet = function(n) {\n  var result = 1;\n  for (var i = 1; i <= n; i++) {\n    result = result * i;\n  }\n  return result;\n};</pre></code>",tests:[function(){return testutil.assert_isFunction("fakultaet")},function(){return testutil.assert_functionHasNumOfParameter("fakultaet",1)},function(){return testutil.assert_functionReturns("fakultaet(0)",1)},function(){return testutil.assert_functionReturns("fakultaet(1)",1)},function(){return testutil.assert_functionReturns("fakultaet(2)",2)},function(){return testutil.assert_functionReturns("fakultaet(3)",6)},function(){return testutil.assert_functionReturns("fakultaet(4)",24)},function(){return testutil.assert_functionReturns("fakultaet(9)",362880)}]})})(jshero.testutil);