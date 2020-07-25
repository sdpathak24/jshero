jshero.koans.add({id:"function2",title:"Multiple functions",lesson:"Now we define more then one function.\nAs a reminder: A function with name <code>color</code> returning the value\n<code>'red'</code> is defined as followed:\n\n<pre><code>function color() {\n  return 'red';\n}</code></pre>",task:"Define two functions. The first function <code>a</code> should return\n<code>'Hello a!'</code> and the second function <code>b</code> should return\n <code>'Hello b!'</code>.",tests:[function(){return jshero.testutil.assert_isFunction("a")},function(){return jshero.testutil.assert_isFunction("b")},function(){return jshero.testutil.assert_functionReturns("a()","Hello a!")},function(){return jshero.testutil.assert_functionReturns("b()","Hello b!")}]});