jshero.koans.add({
  id: "var2",
  title: "Several variables",
  lesson:
    "Several variables are declared and initialized in 2 program lines:\n<pre><code>let city = 'Lubumbashi';\nlet country = 'Congo';</code></pre>",
  task: "Declare a variable <code>flower</code> and assign it the value <code>'rose'</code>.\nDeclare a second variable <code>tree</code> and assign it the value <code>'maple'</code>.",
  solution: "<pre><code>let flower = 'rose';\nlet tree = 'maple;</code></pre>",
  tests: [
    function () {
      return jshero.testutil.assert_variableDefined("flower");
    },
    function () {
      return jshero.testutil.assert_variableHasValue("flower", "rose");
    },
    function () {
      return jshero.testutil.assert_variableDefined("tree");
    },
    function () {
      return jshero.testutil.assert_variableHasValue("tree", "maple");
    },
  ],
});
