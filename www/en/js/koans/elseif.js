jshero.koans.add({id:"elseif",title:"else if",lesson:"If you want to distinguish multiple cases, you can supplement an <code>if</code> with any number of\n<code>else if</code>. Finally, a single <code>else</code> can be added.\n\n<pre><code>var message;\nif (amount > 1000) {\n  message = 'Too high. No payout possible!';\n} else if (amount < 10) {\n  message = 'Too low. No payout possible!';\n} else {\n  message = 'The amount will be paid out!';\n}</code></pre>\n\nFirst it is checked whether <code>amount</code> is greater than <code>1000</code>.\nIf so, the 'Too high ...' message is set and the code will be continued at the end of the entire block.\nIf not, it is checked whether <code>amount</code> is less than <code>10</code>.\nIf so, the 'Too low ...' message is set and the code will be continued at the end of the entire block.\nIf no condition is met, the final <code>else</code> block is executed.",task:"Write a function <code>addWithSurcharge</code> that adds two amounts with surcharge.\nFor each amount less than or equal to <code>10</code>, the surcharge is <code>1</code>.\nFor each amount greater than <code>10</code> and less than or equal to <code>20</code>, the surcharge is <code>2</code>.\nFor each amount greater than <code>20</code>, the surcharge is <code>3</code>.\nThe call <code>addWithSurcharge(10, 30)</code> should return <code>44</code>.",tests:[function(){return jshero.testutil.assert_isFunction("addWithSurcharge")},function(){return jshero.testutil.assert_functionHasNumOfParameter("addWithSurcharge",2)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(1, 1)",4)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(10, 9)",21)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(11, 10)",24)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(10, 11)",24)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(13, 20)",37)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(20, 13)",37)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(15, 27)",47)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(27, 15)",47)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(25, 5)",34)},function(){return jshero.testutil.assert_functionReturns("addWithSurcharge(5, 25)",34)}]});