(function(testutil){jshero.koans.add({id:"object3",title:"Eigenschaften auslesen",lesson:"Auf Objekt-Eigenschaften kann man mit der Punkt-Notation zugreifen:\n\n<pre><code>let person = {\n  name: 'Constanze Kurz',\n  geburtstag: new Date(1974, 2, 2),\n  geburtsort: 'Ost-Berlin'\n};\n\nlet pName = person.name;\nlet pGeburtstag = person.geburtstag;\nlet pGeburtsort = person.geburtsort;</code></pre>\n\nDie drei Eigenschaften des Objekts <code>person</code> werden in drei Variablen gespeichert.",task:"Schreibe eine Funktion <code>distance</code>, die den Abstand eines Punkts zum Nullpunkt berechnet.\nHier und im Folgenden ist ein Punkt ein Objekt mit den Eigenschaften x und y.\n<code>distance({x:&nbsp3,&nbspy:&nbsp;4})</code> sollte <code>5</code> zur\xFCckgeben.",hint:"Der Abstand eines  Punkts mit den Koordinaten x und y zum Nullpunkt ist &radic;(x&sup2;&nbsp;+&nbsp;y&sup2;).",solution:"<pre><code>let distance = function(point) {\n  let xSquare = Math.pow(point.x, 2);\n  let ySquare = Math.pow(point.y, 2);\n  return Math.sqrt(xSquare + ySquare);\n};</code></pre>",tests:[function(){return testutil.assert_isFunction("distance")},function(){return testutil.assert_functionHasNumOfParameter("distance",1)},function(){return testutil.assert_functionReturns("distance({x: 2, y: 0})",2)},function(){return testutil.assert_functionReturns("distance({x: 0, y: -3})",3)},function(){return testutil.assert_functionReturns("distance({x: 3, y: 4})",5)}]})})(jshero.testutil);