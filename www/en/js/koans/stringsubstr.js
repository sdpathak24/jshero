jshero.koans.add({
  id: "stringsubstr",
  title: "String: substr()",
  lesson:
    "The <code>substr</code> method extracts a substring from a string:\n\n<pre><code>let see = 'see and stop'.substr(0, 3);\nlet and = 'see and stop'.substr(4, 3);\nlet stop = 'see and stop'.substr(8);</code></pre>\n\nThe first parameter specifies the position at which to start extracting.\nThe second parameter specifies the number of characters to extract.\nIf the second parameter is not set, all the characters from start position to the end of the string are extracted.",
  task: "Write a function <code>firstWord</code>, taking a string and returning the first word in that string.\nThe first word are all characters up to the first space.<br><br>\nExample: <code>firstWord('see and stop')</code> should return <code>'see'</code>.",
  hint: "<pre><code>function firstWord(s) {\n// Determine with indexOf\n// the position of the\n// first space. Then use\n// the substr method.\n}</code></pre>",
  solution:
    "<pre><code>function firstWord(s) {\n  let firstBlank = s.indexOf(' ');\n  return s.substr(0, firstBlank);\n}</code></pre>",
  tests: [
    function () {
      return jshero.testutil.assert_isFunction("firstWord");
    },
    function () {
      return jshero.testutil.assert_functionHasNumOfParameter("firstWord", 1);
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "firstWord('see and stop')",
        "see"
      );
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "firstWord('speak again')",
        "speak"
      );
    },
  ],
});
