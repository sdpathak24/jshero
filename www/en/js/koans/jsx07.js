(function(testutil){jshero.koans.add({id:"jsx07",title:"What is x?",task:"Which value does <code>x</code> have after execution of the following code?\n<pre><code>function double(name) {\n  return name + ' and ' + name;\n}\n\nlet x = double('Roy');</code></pre>",solution:"<pre><code>'Roy and Roy'</code></pre>",tests:[function(){return testutil.assert_isString("Roy and Roy")}]})})(jshero.testutil);