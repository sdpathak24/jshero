jshero.koans.add({id:"stringindexof",title:"String: indexOf()",lesson:"To determine the first occurrence of a string within another string, use the <code>indexOf</code> method:\n\n<pre><code>var n1 = 'bit'.indexOf('it');\nvar n2 = 'bit'.indexOf('js');\nvar n3 = 'bit'.indexOf('IT');</code></pre>\n\n<code>n1</code> is <code>1</code>, because the starting position of <code>'it'</code> in <code>'bit'</code> is <code>1</code>.\nAs usual, counting starts at 0. <code>indexOf</code> returns <code>-1</code> if the search string does not occur in the calling string.\nThus <code>n2</code> is <code>-1</code>. The <code>indexOf</code> method is case sensitive. So <code>n3</code> is also <code>-1</code>.",task:"Write a function <code>indexOfIgnoreCase</code> taking two strings\nand determining the first occurrence of the second string in the first string. The function should be case insensitive.\n<code>indexOfIgnoreCase('bit','it')</code> and <code>indexOfIgnoreCase('bit','IT')</code> should return <code>1</code>.",hint:"<pre><code>var indexOfIgnoreCase = function(s1, s2) {\n// Change s1 and s2\n// first to lowercase.\n// Then use the\n// indexOf method. \n};</code></pre>",solution:"<pre><code>var indexOfIgnoreCase = function(s1, s2) {\n  var s1Lower = s1.toLowerCase();\n  var s2Lower = s2.toLowerCase();\n  return s1Lower.indexOf(s2Lower);\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("indexOfIgnoreCase")},function(){return jshero.testutil.assert_functionHasNumOfParameter("indexOfIgnoreCase",2)},function(){return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('bit', 'bi')",0)},function(){return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('bit', 'it')",1)},function(){return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('bit', 'T')",2)},function(){return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('bit', 'js')",-1)}]});