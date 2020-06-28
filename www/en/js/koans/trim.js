jshero.koans.add({id:"trim",title:"String: trim()",lesson:"The <code>trim</code> method removes whitespaces from both ends of a string.\n\n<pre><code>let input = ' Rosa Parks ';\nlet name = input.trim();</code></pre>\n\n<code>name</code> contains the string <code>'Rosa Parks'</code>.\nNotice that <code>input</code> still contains the string <code>' Rosa Parks '</code>.",task:"Write a function <code>firstChar</code>, which returns the first character that is not a space\nwhen a string is passed. <code>firstChar(' Rosa Parks ')</code> should return <code>'R'</code>.",hint:"<pre><code>let firstChar = function(text) {\n// Trim first.\n// Then use the\n// charAt method.\n};</code></pre>",solution:"<pre><code>let firstChar = function(text) {\n  let trimmedText = text.trim();\n  return trimmedText.charAt(0);\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("firstChar")},function(){return jshero.testutil.assert_functionHasNumOfParameter("firstChar",1)},function(){return jshero.testutil.assert_functionReturns("firstChar('Rosa')","R")},function(){return jshero.testutil.assert_functionReturns("firstChar(' Louise')","L")},function(){return jshero.testutil.assert_functionReturns("firstChar('  Parks')","P")}]});