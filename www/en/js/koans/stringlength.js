jshero.koans.add({
  id: "stringlength",
  title: "String: length",
  lesson:
    "Strings have the <code>length</code> property. This property represents the number of characters in a string.\nTo do this, you must append <code>.length</code> to the string or to the variable that contains the string:\n\n<pre><code>let charNumber = 'Ai'.length;</code/></pre>\n\n<code>'Ai'</code> has 2 characters. So <code>charNumber</code> has the value <code>2</code>.\n\n<pre><code>let name = 'Weiwei';\ncharNumber = name.length;</code/></pre>\n\n<code>'Weiwei'</code> has 6 characters. <code>charNumber</code> now has the value <code>6</code>.\n<pre><code>charNumber = ''.length;</code/></pre>\nThe empty string has no characters. The value of <code>charNumber</code> is <code>0</code>.",
  task: "Write a function <code>length</code> that takes a string and returns the number of characters of the string.<br><br>\nExample: <code>length('sun')</code> should return <code>3</code>.",
  solution:
    "<pre><code>function length(input) {\n  return input.length;\n}</code></pre>",
  tests: [
    function () {
      return jshero.testutil.assert_isFunction("length");
    },
    function () {
      return jshero.testutil.assert_functionHasNumOfParameter("length", 1);
    },
    function () {
      return jshero.testutil.assert_functionReturns("length('sun')", 3);
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "length('Hello world!')",
        12
      );
    },
    function () {
      return jshero.testutil.assert_functionReturns("length('')", 0);
    },
  ],
});
