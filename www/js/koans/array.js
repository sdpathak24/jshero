(function (testutil) {
  jshero.koans.add({
    id: "array",
    title: "Arrays",
    lesson:
      "Arrays sind Objekte zur Speicherung vieler, meist \xE4hnlicher Werte. Diese sogenannten Elemente werden\nin einem Array der Reihe nach abgelegt. Arrays erzeugt man am besten mit eckigen Klammern.\n\n<pre><code>let sprachen = ['C', 'C++', 'Java', 'JavaScript'];\nlet primzahlen = [2, 3, 5, 7, 11];\nlet leeresArray = [];\nlet a = 'Douglas';\nlet b = 12;\nlet c = true;\nlet allesMoegliche = [a, b, c];</code></pre>\n\nDie Elemente eines Arrays k\xF6nnen, wie das letzte Beispiel zeigt, alle einen anderen Datentyp besitzen.",
    task: "Schreibe eine Funktion <code>toArray</code>, die 2 Paramter entgegennimmt und diese als Array zur\xFCckgibt.\n<br><br>Beispiel: <code>toArray(5, 9)</code> sollte das Array <code>[5, 9]</code> ergeben.",
    hint: "<pre><code>function toArray(a, b) {\n  return [...];\n}</code></pre>",
    solution:
      "<pre><code>function toArray(a, b) {\n  return [a, b];\n}</code></pre>",
    tests: [
      function () {
        return testutil.assert_isFunction("toArray");
      },
      function () {
        return testutil.assert_functionHasNumOfParameter("toArray", 2);
      },
      function () {
        return testutil.assert_functionReturnsType("toArray(1, 2)", "Array");
      },
      function () {
        return testutil.assert_functionReturns("toArray(1, 2)", [1, 2]);
      },
      function () {
        return testutil.assert_functionReturns(
          "toArray('H\xE4nsel', 'Gretel')",
          ["H\xE4nsel", "Gretel"]
        );
      },
      function () {
        return testutil.assert_functionReturns("toArray(1, 'Maus')", [
          1,
          "Maus",
        ]);
      },
    ],
  });
})(jshero.testutil);
