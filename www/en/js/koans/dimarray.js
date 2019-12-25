(function(testutil){jshero.koans.add({id:"dimarray",title:"Array of arrays",lesson:"So far we have stored numbers, strings and boolean values in arrays.\nBut you can also store arrays in arrays:\n\n<pre><code>var teams = [\n  ['Ruby', 'Angel'],\n  ['Mia', 'Yui', 'Merve', 'Elif'],\n  ['Saanvi', 'Giulia', 'Zeynep']\n];\n\nvar row1 = [4, 9, 2];\nvar row2 = [3, 5, 7];\nvar row3 = [8, 1, 6];\nvar loshu = [row1, row2, row3];</code></pre>\n\nIn the first example, 3 teams are stored in an array. Each team itself is an array of names.\nThe individual teams have different sizes. With <pre><code>var team = teams[0];</code></pre> you can access a team and\nwith <pre><code>var member = teams[0][0];</code></pre> you can access an individual team member.<br><br>\nArrays that contain arrays are also called two-dimensional arrays.\nCarrying this on, you get three- or multidimensional arrays.<br><br>\nIn the second example, the <a href='https://en.wikipedia.org/wiki/Lo_Shu_Square'>Lo Shu Square</a>\nis stored in a two-dimensional array.",task:"Write a function <code>flat</code> that flattens a two-dimensional array with 3 entries.\n<code>flat(loshu)</code> should return <code>[4, 9, 2, 3, 5, 7, 8, 1, 6]</code>.\nThereby <code>loshu</code> is the magic square from the example above.",tests:[function(){return testutil.assert_isFunction("flat")},function(){return testutil.assert_functionHasNumOfParameter("flat",1)},function(){return testutil.assert_functionReturns("flat([[], [], []])",[])},function(){return testutil.assert_functionReturns("flat([[1], [], []])",[1])},function(){return testutil.assert_functionReturns("flat([[1], [2], [3]])",[1,2,3])},function(){return testutil.assert_functionReturns("flat([[1, 2], [3, 4], [5, 6]])",[1,2,3,4,5,6])},function(){return testutil.assert_functionReturns("flat([['a'], ['b', 'c'], ['d', 'e', 'f']])",["a","b","c","d","e","f"])}]})})(jshero.testutil);