jshero.koans.add({id:"date",title:"Datum und Uhrzeit",lesson:"Um mit Datum und Uhrzeit zu arbeiten, verwendet man <code>Date</code>-Objekte. Ein <code>Date</code>-Objekt repr\xE4sentiert\neinen Zeitpunkt, also ein Datum zusammen mit einer Uhrzeit. Die Uhrzeit wird dabei auf die Millisekunde genau festgelegt.\nEin Date-Objekt erzeugt man mit <code>new Date()</code>. Es gibt 4 m\xF6gliche Aufrufe:\n\n<pre><code>// aktueller Zeitpunkt\nlet d1 = new Date();</code></pre>\n\nOhne Parameter erzeugt <code>new Date()</code> ein Date-Objekt, das dem Zeitpunkt seines Aufrufs entspricht. Wird obiges Beispiel\nam 1. Mai 2017 um 8:15 Uhr aufgerufen, so enth\xE4lt <code>d1</code> eben diesen Zeitpunkt.\n\n<pre><code>// Aufruf mit Jahr, Monat, Tag, Stunde,\n// Stunde, Minute, Sekunde, Millisekunde\nlet d2 = new Date(2017, 2, 8, 16, 31, 10, 117);</code></pre>\n\nM\xF6chte man ein Date-Objekt zu einem bestimmten Zeitpunkt erstellen, verwendet man am besten die zweite M\xF6glichkeit.\nHier \xFCbergibt man als Parameter das Jahr, den Monat, den Tag, die Stunde, die Minute, die Sekunde und die Millisekunde.\nDas Jahr muss in voller L\xE4nge \xFCbergeben werden. <code>17</code> ergibt das Jahr 17 n. Chr. und <code>2017</code> das Jahr 2017 n. Chr.\nBei dem Monat muss man aufpassen. JavaScript nummeriert die Monate von 0 (Januar) bis 11 (Dezember).\nAlle weiteren Zahlen entsprechen der \xFCblichen Bedeutung. <code>d2</code> repr\xE4sentiert also den\nZeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden.<br>\nDie Parameter Millisekunde, Sekunde, Minute, Stunde und Tag sind - in dieser Reihenfolge - optional. Man kann sie weglassen.\nGibt man sie nicht an, werden die Zeitangaben automatisch auf 0 gesetzt. Der Tag wird auf den Monatsersten gesetzt.\nDas ist besonders praktisch, wenn man nur mit einem Datum arbeiten m\xF6chte.\nDann l\xE4\xDFt man einfach alle Zeitangaben weg. <code>new&nbsp;Date(2017, 5, 2)</code> ist der 2.6.2017, 0:00 Uhr.\n\n<pre><code>// Millisekunden seit dem 1.1.1970\nlet d3 = new Date(86400000);</code></pre>\n\nBei der dritten Variante \xFCbergibt man die vergangenen Millisekunden seit dem 1.1.1970, 0:00 Uhr.\nDer Bezugspunkt 1.1.1970 f\xFCr Datumsangaben ist seit den Tagen von Unix und der Programmiersprache C in der IT \xFCblich geworden.\nEin Tag hat 24 * 60 * 60 * 1000 = 86400000 Millisekunden. <code>d3</code> ist also der 2.1.1970, 0:00 Uhr.\n\n<pre><code>// \xDCbergabe eines Datumsstrings\nlet d4 = new Date('2017-3-8T16:31:10.117');</code></pre>\n\nBei der vierten Variante wird ein Datumsstring in einem bestimmten Format, d.h. in einer bestimmten Schreibweise, \xFCbergeben.\n<code>d4</code> entspricht ebenfalls dem Zeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden. Diese Varainte ist jedoch nicht zu empfehlen,\nda verschiedene Browser leichte Unterschiede bei der Bestimmung des Datums aufweisen.",task:"Schreibe eine Funktion <code>nikolaus</code>, die eine Jahreangabe als Zahl entgegennimmt und die ein Date-Objekt mit dem 6. Dezember\ndes \xFCbergebenen Jahres, 0:00 Uhr, zur\xFCckgibt. <code>nikolaus(2017)</code> sollte ein Date-Objekt mit dem Zeitpunkt 6.12.2017, 0:00 Uhr zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("nikolaus")},function(){return jshero.testutil.assert_functionHasNumOfParameter("nikolaus",1)},function(){return jshero.testutil.assert_functionReturnsType("nikolaus(2017)","Date")},function(){return jshero.testutil.assert_functionReturns("nikolaus(2017)",new Date(2017,11,6))},function(){return jshero.testutil.assert_functionReturnsType("nikolaus(1960)","Date")},function(){return jshero.testutil.assert_functionReturns("nikolaus(1960)",new Date(1960,11,6))}]});