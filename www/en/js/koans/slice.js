jshero.koans.add({id:"slice",title:"Array: slice()",lesson:"With <code>slice</code> you can copy a subarray from an array:\n\n<pre><code>var abcd = ['a', 'b', 'c', 'd'];\nvar ab = abcd.slice(0, 2);\nvar bc = abcd.slice(1, 3);\nvar bcd = abcd.slice(1, 4);</code></pre>\n\nThe first parameter specifies the start index (included) and the second parameter specifies the end index (excluded).\nThe original array will not be modified.",task:"Write a function <code>halve</code> that copies the first half of an array.\nWith an odd number of array elements, the middle element should belong to the first half.\n<code>halve([1,&nbsp;2,&nbsp;3,&nbsp;4])</code> should return <code>[1,&nbsp;2]</code>.",tests:[function(){return jshero.testutil.assert_isFunction("halve")},function(){return jshero.testutil.assert_functionHasNumOfParameter("halve",1)},function(){return jshero.testutil.assert_functionReturns("halve([1, 2])",[1])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3])",[1,2])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3, 4])",[1,2])},function(){return jshero.testutil.assert_functionReturns("halve([1, 2, 3, 4, 5])",[1,2,3])}]});