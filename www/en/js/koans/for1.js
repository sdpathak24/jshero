(function(testutil){jshero.koans.add({id:"for1",title:"for loop",lesson:"Loops can execute code blocks several times. JavaScript knows different kinds of loops. The simplest one is\nthe <code>for</code> loop.\n\n<pre><code>let sum = 0;\nfor (let i = 1; i < 3; i++) {\n  sum = sum + i;\n}</code></pre>\n\nThe <code>for</code> loop consists of three control expressions and the loop code.\nThe three control expressions follow the <code>for</code> keyword in parentheses.\nThey are separated by semicolons. The first expression is the start expression. It is executed once at the beginning\nof the loop. The so-called loop variable is normally initialized here. The second expression is the loop condition.\nIt is evaluated to <code>true</code> or <code>false</code> before each loop iteration. If this expression evaluates\nto <code>true</code>, the loop code is executed. If this expression evaluates to <code>false</code>, the loop is\nterminated and the program execution continues after the loop. The third expression, called the final expression,\nis executed after each loop iteration. The loop variable is normally increased here. Then a new loop iteration is\nstarted with a new evaluation of the loop condition. The loop code follows the three control expressions in brackets.\nIn our example <code>sum</code> has the value <code>0</code> initially. In the start expression <code>i</code> is\ninitialized with <code>1</code>. The loop condition <code>1 < 3</code> is fulfilled, so the loop code is executed.\n<code>sum</code> receives the value <code>0 + 1</code>, i. e. <code>1</code>. Now in the final expression\n<code>i</code> is increased by <code>1</code>. (<code>i++</code> is identical to <code>i = i + 1</code>).\n<code>i</code> thus receives the value <code>2</code>. The second loop starts with the evaluation of the loop condition.\nThis condition (<code>2 < 3</code>) is still fulfilled.\nThe loop code is executed again and <code>sum</code> is now given the value <code>1 + 2</code>, that is <code>3</code>.\nIn the final expression <code>i</code> is increased again and gets the value <code>3</code>.\nThe loop condition <code>3 < 3</code> is no longer fulfilled. The loop is terminated and the program execution continues\nafter the loop. Our code example has added all natural numbers smaller than 3.",task:"Write a function <code>addTo</code> that accepts a number as a parameter and adds all natural numbers\nsmaller or equal than the parameter. The result is to be returned. <code>addTo(3)</code> should return\n<code>1+2+3</code> = <code>6</code>.",hint:"<pre><code>function addTo(n) {\n  let sum = 0;\n  for (let i = 0; i <= n; i++) {\n    ...\n  }\n  return sum;\n}</pre></code>",solution:"<pre><code>function addTo(n) {\n  let sum = 0;\n  for (let i = 0; i <= n; i++) {\n    sum = sum + i;\n  }\n  return sum;\n}</pre></code>",tests:[function(){return testutil.assert_isFunction("addTo")},function(){return testutil.assert_functionHasNumOfParameter("addTo",1)},function(){return testutil.assert_functionReturns("addTo(0)",0)},function(){return testutil.assert_functionReturns("addTo(1)",1)},function(){return testutil.assert_functionReturns("addTo(2)",3)},function(){return testutil.assert_functionReturns("addTo(3)",6)},function(){return testutil.assert_functionReturns("addTo(9)",45)}]})})(jshero.testutil);