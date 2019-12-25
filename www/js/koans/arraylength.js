(function(){var random=function(){return Math.round(Math.random()*10)};jshero.koans.add({id:"arraylength",title:"Array: length",lesson:"Die Eigenschaft <code>length</code> hatten wird schon bei Strings kennengelernt. Dort gab sie die Anzahl\nder Zeichen eines Strings zur\xFCck. Bei Arrays gibt sie die Anzahl der Elemente zur\xFCck.\n\n<pre><code>var sprachen = [];\nvar l0 = sprachen.length;\nsprachen[0] = 'C';\nvar l1 = sprachen.length;\nsprachen[1] = 'C++';\nvar l2 = sprachen.length;</code></pre>\n\nDas leere Array zu Anfang enth\xE4lt keine Elemente. <code>l0</code> ist also <code>0</code>.\nNun f\xFCllen wir das Array nach und nach. <code>l1</code> und <code>l2</code> haben dann die Werte <code>1</code> und <code>2</code>.\nBeachte: Die L\xE4nge eines Arrays ist immer um 1 gr\xF6\xDFer als der h\xF6chste Index des Arrays.",task:"Schreibe eine Funktion <code>getLastElement</code>, die ein Array entgegennimmt und die das letzte Element des Arrays zur\xFCckgibt.\n<code>getLastElement([1, 2])</code> sollte <code>2</code> zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("getLastElement")},function(){return jshero.testutil.assert_functionHasNumOfParameter("getLastElement",1)},function(){return jshero.testutil.assert_functionReturns("getLastElement([1, 2])",2)},function(){return jshero.testutil.assert_functionReturns("getLastElement(['H\xE4nsel', 'Gretel'])","Gretel")},function(){return jshero.testutil.assert_functionReturns("getLastElement(['a', 'b', 'c'])","c")},function(){return jshero.testutil.assert_functionReturns("getLastElement(['Maus', 1])",1)},function(){var testArray=new Array;var testArrayString="[";var size=4;for(var i=0;i<size-1;i++){testArray[i]=random();testArrayString+=testArray[i]+", "}testArray[size-1]=random();testArrayString+=testArray[size-1]+"]";return jshero.testutil.assert_functionReturns("getLastElement("+testArrayString+")",testArray[size-1])}]})})();