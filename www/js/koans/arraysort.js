jshero.koans.add({id:"arraysort",title:"Arrays sortieren",lesson:"Jetzt k\xF6nnen wir Arrays mit vorgegebener L\xE4nge sortieren.",task:"Schreibe eine Funktion <code>sortiere</code>, die ein mit 3 beliebigen Zahlen gef\xFClltes Array entgegennimmt\nund die diese 3 Zahlen aufsteigend sortiert als Array  zur\xFCckgibt.\n<code>sortiere([2,&nbsp;3,&nbsp;1])</code> sollte\n<code>[1,&nbsp;2,&nbsp;3]</code> und <code>sortiere([11,&nbsp;-1,&nbsp;4])</code> sollte\n<code>[-1,&nbsp;4,&nbsp;11]</code>ergeben.",tests:[function(){return jshero.testutil.assert_isFunction("sortiere")},function(){return jshero.testutil.assert_functionHasNumOfParameter("sortiere",1)},function(){return jshero.testutil.assert_functionReturns("sortiere([1, 2, 3])",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("sortiere([1, 3, 2])",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("sortiere([2, 1, 3])",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("sortiere([2, 3, 1])",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("sortiere([3, 1, 2])",[1,2,3])},function(){return jshero.testutil.assert_functionReturns("sortiere([3, 2, 1])",[1,2,3])}]});