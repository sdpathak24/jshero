jshero.koans.add({
  id: "arrayindexof",
  title: "Array: indexOf()",
  lesson:
    "The <code>indexOf</code> method returns the first index at which a given element can be found in the array,\nor -1 if it is not present. Counting starts with 0.\n\n<pre><code>let systems = ['Debian', 'Ubuntu', 'Mint'];\nlet i1 = systems.indexOf('Mint');\nlet i2 = systems.indexOf('Windows');</code></pre>\n\n<code>i1</code> gets the value <code>2</code> and <code>i2</code> gets the value <code>-1</code>.\nFor a complete reference see\n<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'>\nMDN&nbsp;web&nbsp;docs</a>.",
  task: "Write a function <code>add</code> that adds an element to the end of an array.\nHowever, the element should only be added if it is not already in the array.<br><br>\nExample: <code>add([1,&nbsp;2],&nbsp;3)</code> should return <code>[1,&nbsp;2,&nbsp;3]</code> and\n<code>add([1,&nbsp;2],&nbsp;2)</code> should return <code>[1,&nbsp;2]</code>.",
  solution: "<pre><code>function add(arr, num){\nif(arr.indexOf(num) === -1){\narr.push(num)\n}\nreturn arr;}</code></pre>",
  tests: [
    function () {
      return jshero.testutil.assert_isFunction("add");
    },
    function () {
      return jshero.testutil.assert_functionHasNumOfParameter("add", 2);
    },
    function () {
      return jshero.testutil.assert_functionReturns("add(['J'], 'S')", [
        "J",
        "S",
      ]);
    },
    function () {
      return jshero.testutil.assert_functionReturns("add(['J'], 'J')", ["J"]);
    },
    function () {
      return jshero.testutil.assert_functionReturns(
        "add([1, 2], 3)",
        [1, 2, 3]
      );
    },
    function () {
      return jshero.testutil.assert_functionReturns("add([1, 2], 2)", [1, 2]);
    },
  ],
});
