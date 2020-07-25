(function(testutil){jshero.koans.add({id:"log2",title:"Logging variables",lesson:"Now let's log variables:\n\n<pre><code>let scientist = 'Ken Thompson';\nconsole.log(scientist);</code></pre>\n\nThe variable <code>scientist</code> is logged.\nThe console outputs <code>'Ken Thompson'</code>.",task:"Write a function <code>log</code>, that takes a parameter and logs this parameter.\n<code>log('Ken Thompson')</code> should log <code>'Ken Thompson'</code>.",hint:"<pre><code>function log(value) {\n  ...\n}</code></pre>",solution:"<pre><code>function log(value) {\n  console.log(value);\n}</code></pre>",tests:[function(){return testutil.assert_isFunction("log")},function(){return testutil.assert_functionHasNumOfParameter("log",1)},function(){return testutil.assert_functionLogs("log('Ken Thompson')","Ken Thompson")},function(){return testutil.assert_functionLogs("log('Dennis Ritchie')","Dennis Ritchie")}]})})(jshero.testutil);