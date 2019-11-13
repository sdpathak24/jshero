jshero.koans.add({id:"concat",title:"Array: concat()",lesson:"Using the <code>concat</code> method you can concatenate two arrays:\n\n<pre><code>var a1 = [1, 2, 3];\nvar a2 = [4, 5, 6];\nvar a3 = a1.concat(a2);</code></pre>\n\n<code>a3</code> contains the array <code>[1, 2, 3, 4, 5, 6]</code>.\nThe two existing arrays <code>a1</code> and <code>a2</code> will not be changed.",task:"Write a function <code>concatUp</code> that concatenate two arrays.\nThe longer array should be appended to the shorter array.\nIf both arrays are equally long, the second array should be appended to the first array.\n<code>concatUp([1, 2], [3])</code> should return <code>[3, 1, 2]</code>\nand <code>concatUp([5, 7], [6, 8])</code> should return <code>[5, 7, 6, 8]</code>.",tests:[function(){return jshero.testutil.assert_isFunction("concatUp")},function(){return jshero.testutil.assert_functionHasNumOfParameter("concatUp",2)},function(){return jshero.testutil.assert_functionReturns("concatUp([5, 7], [6])",[6,5,7])},function(){return jshero.testutil.assert_functionReturns("concatUp(['x'], ['a', 'b'])",["x","a","b"])},function(){return jshero.testutil.assert_functionReturns("concatUp([5, 7], [6, 8])",[5,7,6,8])}]});