jshero.koans.add({

  id: 'parseint',

  title: 'parseInt()',

  lesson: `Häufig möchte man eine Zahl, die als String vorliegt, in eine Zahl vom Typ Number umwandeln.
Für das Umwandeln von ganzen Zahlen (..., -2, -1, 0, 1, 2, ..) gibt es in JavaScript die Funktion <code>parseInt</code>.
Folgende Beispiele geben <code>19</code> oder <code>-19</code> zurück:
<pre><code>let n1 = parseInt('19', 10);
let n2 = parseInt('+19', 10);
let n3 = parseInt('-19', 10);
let n4 = parseInt('19 Grad', 10);
let n5 = parseInt('19.1', 10);
let n6 = parseInt('019', 10);
let n7 = parseInt(' 19', 10);</code></pre>
Neben dem direkten Einlesen von ganzen Zahlen mit oder ohne Vorzeichen (n1, n2, n3) beherrscht <code>parseInt</code>
auch einige komplexe Fälle. Nicht-numerische Zeichen nach der ganzen Zahl (n4, n5) sowie Nullen (n6) und
Leerzeichen (n7) vor der Zahl werden ignoriert.<br><br>
In allen Beispielen ist der zweite an <code>parseInt</code> übergebene Parameter <code>10</code>.
Dieser Paramter gibt an, zu welcher Basis die Zahl interpretiert werden soll. <code>10</code> steht für das
übliche Dezimalsystem. Läßt man den zweiten Paramter weg, wird normalerweise das Dezimalsystem als Default verwendet.
Da es aber von dieser Regel Ausnahmen gibt und diese Ausnahmen in verschiedenen Browsern auch noch unterschiedlich
gehandhabt werden, sollte man immer die Basis mit angeben!
<br><br>
Kann <code>parseInt</code> keine Zahl einlesen, gibt sie den Wert <code>NaN</code> (engl.: Not a Number) zurück:
<pre><code>let n1 = parseInt('Nur Text', 10);
let n2 = parseInt('Nr. 8', 10);</code></pre>
Im ersten Fall ist überhaupt keine Zahl vorhanden. Im zweiten Fall gibt es nicht-numerische Zeichen vor der
eigentlichen Zahl. Auch das ist nicht zulässig und führt zur Rückgabe <code>NaN</code>.
<br><br>
Eine ausführliche Dokumentation von <code>parseInt</code> findest du bei
<a href='https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt'>Mozilla web docs</a>.`,

  task: `Schreibe eine Funktion <code>add</code>, die einen String mit einer Additionsaufgabe entgegennimmt und die das
Ergebnis der Addition als Zahl zurückgibt. Es sollen zwei natürliche Zahlen addiert werden. Die Additionsaufgabe ist
ein String der Form <code>'102+17'</code>.
<br><br>Beispiel: Der Aufruf <code>add('102+17')</code> soll die Zahl <code>119</code> zurückgeben.`,

  hint: `Bestimme mit <code>parseInt</code> den ersten Summanden.
Bestimme mit <code>indexOf</code> die Position des Plus-Zeichens.
Bestimme mit <code>substr</code> den Teilstring nach dem Plus-Zeichen.
Bestimme mit <code>parseInt</code> aus diesem Teilstring den zweiten Summanden.`,

  solution: `<pre><code>function add(s) {
  let summand1 = parseInt(s, 10);
  let indexPlus = s.indexOf('+');
  let sAfterPlus = s.substr(indexPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('1+2')", 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('10+100')", 110);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('100123+456')", 100579);
    }
  ]

});
