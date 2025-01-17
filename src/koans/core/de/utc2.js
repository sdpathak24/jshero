jshero.koans.add({

  id: 'utc2',

  title: 'UTC Setter und Getter',

  lesson: `Die bisher vorgestellten sieben Date-Getter und -Setter beziehen sich auf die lokale Zeit. Repräsentiert ein Date-Objekt den
31.12.2022 22:00 Uhr UTC, so liefern die Methoden <code>getFullYear()</code>, <code>getMonth()</code>, <code>getDate()</code> und <code>getHours()</code>
in Deutschland (UTC+1) die Werte <code>2022</code>, <code>11</code>, <code>31</code> und <code>23</code>. In Japan (UTC+9) erhielte man
<code>2023</code>, <code>0</code>, <code>1</code> und <code>7</code>.
<br><br>
Analog zu den sieben lokalen Date-Gettern und -Settern gibt es sieben UTC Date-Getter und -Setter: <code>getUTCFullYear()</code>, <code>setUTCFullYear()</code>,
<code>getUTCMonth()</code> usw. Für obiges Datum liefern die Methoden <code>getUTCFullYear()</code>, <code>getUTCMonth()</code>, <code>getUTCDate()</code>
und <code>getUTCHours()</code> unabhängig vom Ort die Werte <code>2022</code>, <code>11</code>, <code>31</code> und <code>22</code>.`,

  task: `Schreibe eine Funktion <code>toJSTDateTimeString</code>, die ein Date entgegennimmt und das Datum inkl. Uhrzeit als String in der Japan Standard Time (JST)
zurückgibt. Die Uhrzeit soll dabei ohne Millisekunden angegeben werden.<br><br>Beispiel: Für <code>date = new Date(Date.UTC(2022, 12, 31, 22, 0))</code> sollte
<code>toJSTDateTimeString(date)</code>den String <code>'2023-01-01T07:00:00 JST'</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('nikolausUTC');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nikolausUTC', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolausUTC(2017)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'nikolausUTC(2017)',
        new Date(Date.UTC(2017, 11, 6)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolausUTC(1960)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'nikolausUTC(1960)',
        new Date(Date.UTC(1960, 11, 6)), {
          'utc': true
        });
    }
  ]

});

