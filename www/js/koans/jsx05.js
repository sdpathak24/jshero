(function(testutil){jshero.koans.add({id:"jsx05",title:"Was ist x?",lesson:"Auch bei Funktionen mit Parametern wollen wir den Funktionsaufruf \xFCben.",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>function reply(phrase) {\n  return phrase;\n}\n\nlet x = reply('How do you do?');</code></pre>",solution:"<pre><code>'How do you do?'</code></pre>",tests:[function(){return testutil.assert_isString("How do you do?")}]})})(jshero.testutil);