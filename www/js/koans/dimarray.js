(function(testutil){jshero.koans.add({id:"dimarray",title:"Mehrdimensionale Arrays",lesson:"Bisher haben wir in Arrays Zahlen, Strings und boolsche Werte gespeichert.\nMan kann aber auch Arrays in Arrays speichern.\n\n<pre><code>let teams = [\n  ['Ruby', 'Angel'],\n  ['Mia', 'Yui', 'Merve', 'Elif'],\n  ['Saanvi', 'Giulia', 'Zeynep']\n];\n\nlet zeile1 = [4, 9, 2];\nlet zeile2 = [3, 5, 7];\nlet zeile3 = [8, 1, 6];\nlet loshu = [zeile1, zeile2, zeile3];</code></pre>\n\nIm ersten Beispiel werden 3 Teams in einem Array gespeichert. Jedes Team ist wiederum ein Array aus Namen.\nDie einzelnen Teams sind verschieden gro\xDF. Mit <pre><code>let team = teams[0];</code></pre> greift man auf ein Team zu\nund mit <pre><code>let member = teams[0][0];</code></pre> kann man auf die einzelnen Teammitglieder zugreifen.<br><br>\nArrays, die Arrays enthalten, nennt man auch zweidimensionals Arrays. Treibt man dies weiter, erh\xE4lt man\ndrei- bzw. mehrdimensionale Arrays.<br><br>\nIm zweiten Beispiel wird das <a href='https://de.wikipedia.org/wiki/Magisches_Quadrat'>magische Quadrat</a> Lo-Shu in einem\nzweidimensionalen Array gespeichert.",task:"Schreibe eine Funktion <code>flat</code>, die ein zweidimensionales Array mit 3 Eintr\xE4gen in ein\neinfaches Array \xFCberf\xFChrt. <code>flat(loshu)</code> sollte <code>[4, 9, 2, 3, 5, 7, 8, 1, 6]</code> ergeben.\nDabei ist <code>loshu</code> das magische Quadrat aus dem obigen Beispiel.",tests:[function(){return testutil.assert_isFunction("flat")},function(){return testutil.assert_functionHasNumOfParameter("flat",1)},function(){return testutil.assert_functionReturns("flat([[], [], []])",[])},function(){return testutil.assert_functionReturns("flat([[1], [], []])",[1])},function(){return testutil.assert_functionReturns("flat([[1], [2], [3]])",[1,2,3])},function(){return testutil.assert_functionReturns("flat([[1, 2], [3, 4], [5, 6]])",[1,2,3,4,5,6])},function(){return testutil.assert_functionReturns("flat([['a'], ['b', 'c'], ['d', 'e', 'f']])",["a","b","c","d","e","f"])}]})})(jshero.testutil);