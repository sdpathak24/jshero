(function(testutil){jshero.koans.add({id:"jsx06",title:"What is x?",task:"Which value does <code>x</code> have after execution of the following code?\n<pre><code>let whereIs = function(name) {\n  return 'Where is ' + name + '?';\n};\n\nlet x = whereIs('Jacky');</code></pre>",solution:"<pre><code>'Where is Jacky?'</code></pre>",tests:[function(){return testutil.assert_isString("Where is Jacky?")}]})})(jshero.testutil);