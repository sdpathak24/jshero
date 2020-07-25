jshero.koans.add({id:"comment",title:"Comments",lesson:"If needed, you can add comments to a program. Comments are used to explain programs.\nThey help us humans to understand programs. Computers ignore comments.<br><br>\nIn JavaScript there are two ways to write comments:\nLine comments are introduced with <code>//</code> and are valid until the end of the line.\nBlock comments start with <code>/*</code> and end with <code>*/</code>.\nAny text in between is a comment.\n\n<pre><code>// That's a line comment.\n\n// This line comment\n// covers 2 lines.\n\n/* That's a block comment. */\n\n/* This block comment\ncovers 2 lines. */\n\n/**\n * This is also a block comment.\n * The additional stars between\n * the beginning and the end of the\n * block comment are only for decoration.\n */</code></pre>\n\n Block comments are often used to explain functions. Line comments explain the code flow.\n\n <pre><code>/**\n * Checks whether a string contains\n * any characters other than spaces.\n */\nfunction isBlank(string) {\n  // The method trim() removes spaces at\n  // the beginning and the end of a string.\n  let trimmedString = string.trim();\n  return trimmedString.length === 0;\n}</code></pre>\n\nComments can't be checked with the tests used here.\nIt follows a task where you have to apply much of what you have learned so far.",task:"Write a function <code>median</code> that takes an array of ascending numbers and returns the\n<a href='https://en.wikipedia.org/wiki/Median'>median</a> of that numbers.\n<code>median([1, 2, 10])</code> should return <code>2</code> and <code>median([1, 2, 10, 100])</code> should return\n<code>6</code>.",hint:"The median of a sorted series of numbers is the value in the middle.\nIf the number of values is even, the median is the mean of the two middle numbers.",tests:[function(){return jshero.testutil.assert_isFunction("median")},function(){return jshero.testutil.assert_functionHasNumOfParameter("median",1)},function(){return jshero.testutil.assert_functionReturns("median([1])",1)},function(){return jshero.testutil.assert_functionReturns("median([1, 2])",1.5)},function(){return jshero.testutil.assert_functionReturns("median([1, 2, 10])",2)},function(){return jshero.testutil.assert_functionReturns("median([1, 1, 2, 10, 100, 101])",6)}]});