jshero.koans.add({
  id: "arguments",
  title: "The arguments object",
  lesson:
    "Inside every function an <code>arguments</code> object is accessible.\nIt is an Array-like object that contains the values of the arguments passed to the function.\n\n<pre><code>function add() {\n  let arg0 = arguments[0];\n  let arg1 = arguments[1];\n  return arg0 + arg1;\n}\n\nlet sum = add(1, 2);</code></pre>\n\n<code>add</code> is called with arguments <code>1</code> and <code>2</code>.\nSo <code>arguments[0]</code> contains the value <code>1</code> and <code>arguments[1]</code> contains the value\n<code>2</code>.<br><br>\nWith the <code>arguments</code> object you can access the passed arguments without parameters.\nThis is useful, for example, if you want to write a function that processes an arbitrary number of arguments.\n\n<pre><code>function add() {\n  let sum = 0;\n  for (let i = 0; i < arguments.length; i++) {\n    sum = sum + arguments[i];\n  }\n  return sum;\n}\n\nlet s1 = add(2, 4);\nlet s2 = add(2, 3, 5, 7);</code></pre>\n\nWe iterate over all passed arguments and sum them up.\nThereby <code>arguments.length</code> returns the number of passed arguments.\nNow we can call <code>add</code> with an arbitrary number of arguments.",
  task: "Write a function <code>max</code> that calculates the maximum of an arbitrary number of numbers.<br><br>\nExample: <code>max(1, 2)</code> should return <code>2</code> and <code>max(2, 3, 1)</code> should return <code>3</code>.",
  tests: [
    function () {
      return jshero.testutil.assert_isFunction("max");
    },
    function () {
      return jshero.testutil.assert_functionReturns("max(1)", 1);
    },
    function () {
      return jshero.testutil.assert_functionReturns("max(15, 2)", 15);
    },
    function () {
      return jshero.testutil.assert_functionReturns("max(1, 15, 3)", 15);
    },
    function () {
      return jshero.testutil.assert_functionReturns("max(-1, 0, 9, 8)", 9);
    },
  ],
});
