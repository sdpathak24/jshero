jshero.koans.add({
  id: "array2",
  title: "Get array elements",
  lesson:
    "The elements of an array are accessed by an index beginning with 0.\n\n<pre><code>let languages = ['C', 'C++', 'Java'];\nlet c = languages[0];\nlet cPlusPlus = languages[1];\nlet java = languages[2];</code></pre>",
  task: "Write a function <code>getFirstElement</code> that takes an array and returns the first element of the array.<br><br>\nExample: <code>getFirstElement([1, 2])</code> should return <code>1</code>.",
  solution: "<pre><code>function getFirstElement(arr){return arr[0];</code></pre>",
  tests: [
    function () {
      return jshero.testutil.assert_isFunction("getFirstElement");
    },
    function () {
      return jshero.testutil.assert_functionHasNumOfParameter(
        "getFirstElement",
        1
      );
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "getFirstElement([1, 2])",
        1
      );
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "getFirstElement(['Firefox', 'Chrome'])",
        "Firefox"
      );
    },
  ],
});
