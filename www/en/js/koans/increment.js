(function(testutil){jshero.koans.add({id:"increment",title:"Increment",lesson:"In programming, you often want to increase or decrease a counter by one.\n    This can easily be done with the increment or decrement operator.\n\n<pre><code>var x = 1;\nx++;\nvar y = 10;\ny--;</code></pre>\n\n<code>x++</code> is the same as <code>x = x + 1</code> and <code>y--</code> is the same as <code>y = y - 1</code>.\nAfter executing the example code, <code>x</code> has the value <code>2</code> and <code>y</code> has the value\n<code>9</code>.",task:"Which value does x have after execution of the following code? \n<pre><code>var x = 3;\nx++;\nx = x * 2;\nx--;</code></pre>",solution:"<pre><code>7</code></pre>",tests:[function(){return testutil.assert_isValue("7")}]})})(jshero.testutil);