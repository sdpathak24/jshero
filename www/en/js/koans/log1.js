(function(testutil){jshero.koans.add({id:"log1",title:"Logging",lesson:"Programming always includes the search for errors.\nOne way to find errors is logging.\nDuring program execution, selective outputs are made.\nTo do this in JavaScript, use the <code>console.log</code> function:\n\n<pre><code>console.log('Hello console!');</code></pre>\n\nHere, <code>console.log</code> outputs <code>'Hello console!'</code>.\nWhere you can see the output depends on your JavaScript environment.\nIn browsers you do not see the log normally.\nBut most desktop browsers have so-called\n<a href='https://en.wikipedia.org/wiki/Web_development_tools'>developer tools</a>.\nThese are powerful tools to support web developers. One of these tools is the console.\nThe log is displayed there. How to open the developer tools depends on your browser.\nOn many desktop browsers, they are opened with the F12 key.\nYou can then select the console as a tab. Alternatively, you can open the console via the browser menu.\nThe developer tools are not available on mobile devices.\nTherefore JS Hero writes the log additionally into the test output.",task:"Write a function <code>log</code> that logs <code>'Hello Console!'</code>.\nIf you are working with a desktop browser, open the developer tools to see the output there as well.",hint:"<pre><code>var log = function() {\n  console.log(...);\n};</code></pre>",solution:"<pre><code>var log = function() {\n  console.log('Hello Console!');\n};</code></pre>",tests:[function(){return testutil.assert_isFunction("log")},function(){return testutil.assert_functionLogs("log()","Hello Console!")}]})})(jshero.testutil);