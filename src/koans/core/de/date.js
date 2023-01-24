jshero.koans.add({

  id: 'date',

  title: 'Datum und Uhrzeit',

  lesson: `Um mit Datum und Uhrzeit zu arbeiten, verwendet man <code>Date</code>-Objekte. Ein <code>Date</code>-Objekt repräsentiert
einen Zeitpunkt, also ein Datum zusammen mit einer Uhrzeit. Die Uhrzeit wird dabei auf die Millisekunde genau festgelegt.
Ein Date-Objekt erzeugt man mit <code>new Date()</code>. Es gibt 4 mögliche Aufrufe:

<pre><code>// aktueller Zeitpunkt
let d1 = new Date();</code></pre>

Ohne Parameter erzeugt <code>new Date()</code> ein Date-Objekt, das dem Zeitpunkt seines Aufrufs entspricht. Wird obiges Beispiel
am 1. Mai 2017 um 8:15 Uhr aufgerufen, so enthält <code>d1</code> eben diesen Zeitpunkt.

<pre><code>// Aufruf mit Jahr, Monat, Tag,
// Stunde, Minute, Sekunde, Millisekunde
let d2 = new Date(2017, 2, 8, 16, 31, 10, 117);</code></pre>

Bei der zweiten Variante übergibt man als Parameter das Jahr, den Monat, den Tag, die Stunde, die Minute, die Sekunde und die Millisekunde.
Das Jahr sollte man in voller Länge übergeben. Aufpassen muss man für Jahreszahlen zwischen 0 und 99. Hier wird unglücklicherweise 1900 hinzuaddiert.
<code>17</code> ergibt das Jahr 1917. Bei dem Monat muss man ebenfalls aufpassen. JavaScript nummeriert die Monate von 0 (Januar) bis 11 (Dezember).
Alle weiteren Zahlen entsprechen der üblichen Bedeutung. <code>d2</code> repräsentiert also den
Zeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden.<br>
Die Parameter Millisekunde, Sekunde, Minute, Stunde und Tag sind - in dieser Reihenfolge - optional. Man kann sie weglassen.
Gibt man sie nicht an, werden die Zeitangaben automatisch auf 0 gesetzt. Der Tag wird auf den Monatsersten gesetzt.
Das ist besonders praktisch, wenn man nur mit einem Datum arbeiten möchte.
Dann läßt man einfach alle Zeitangaben weg. <code>new&nbsp;Date(2017, 5, 2)</code> ist der 2.6.2017, 0:00 Uhr.

<pre><code>// Millisekunden seit dem 1.1.1970
let d3 = new Date(86400000);</code></pre>

Bei der dritten Variante übergibt man die vergangenen Millisekunden seit dem 1.1.1970, 0:00 Uhr.
Der Bezugspunkt 1.1.1970 für Datumsangaben ist seit den Tagen von Unix und der Programmiersprache C in der IT üblich geworden.
Ein Tag hat 24 * 60 * 60 * 1000 = 86400000 Millisekunden. <code>d3</code> ist also der 2.1.1970, 0:00 Uhr.

<pre><code>// Übergabe eines Datumsstrings
let d4 = new Date('2017-03-08T16:31:10.117');</code></pre>

Bei der vierten Variante wird ein Datumsstring im sogenannten <a href="https://de.wikipedia.org/wiki/ISO_8601">ISO-Format</a> übergeben.
<code>d4</code> entspricht ebenfalls dem Zeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden.`,

  task: `Schreibe eine Funktion <code>nikolaus</code>, die eine Jahresangabe als Zahl entgegennimmt und die ein Date-Objekt mit dem 6. Dezember
des übergebenen Jahres, 0:00 Uhr, zurückgibt.<br><br>
Beispiel: <code>nikolaus(2017)</code> sollte ein Date-Objekt mit dem Zeitpunkt 6.12.2017, 0:00 Uhr zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('nikolaus');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nikolaus', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolaus(2017)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns('nikolaus(2017)', new Date(2017, 11, 6));
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolaus(1960)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns('nikolaus(1960)', new Date(1960, 11, 6));
    }
  ]

});