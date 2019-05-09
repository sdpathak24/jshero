(function(testutil, evaluator) {

  var evalDice = function() {
    return evaluator.evalTest('dice()');
  };

  var isOneToSix = function(x) {
    return x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6;
  };

  var throwA = function(x) {
    var result;
    for (var i = 0; i < 1000; i++) {
      result = evalDice();
      if (result === x) {
        return true;
      }
    }
    return false;
  };

  var testWith = function(x) {
    var ok, msg, e;
    try {
      ok = throwA(x);
      if (ok) {
        msg = '<code>dice()</code> returned at least once <code>' + x + '</code> at 1000 calls.';
      } else {
        msg = '<code>dice()</code> did not return <code>' + x + '</code> at 1000 calls.';
      }
    } catch (exc) {
      ok = false;
      msg = 'Error when calling <code>dice()</code>.';
      e = exc;
    }
    return {
      ok: ok,
      msg: msg,
      e: e
    };
  };

  jshero.koans.add({

    id: 'random',

    title: 'Random numbers',

    lesson: `<code>Math.random()</code> returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

<pre><code>var x = Math.random();</code></pre>

<code>x</code> could, for example, get the value <code>0.6206372241429993</code>.
Each call of <code>Math.random()</code> generates a new random number.
The numbers are equally distributed between 0 and 1. They are called pseudo-random numbers,
because they look random but are still calculated.
If you want to get random numbers in another range or with a different distribution,
you have to transform the numbers generated by <code>Math.random()</code> adequately.
This should be practiced now.`,

    task: 'Write a function <code>dice</code> that returns like a dice a random number between 1 and 6.',

    tests: [
      function() {
        return jshero.testutil.assert_isFunction('dice');
      },

      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('dice', 0);
      },

      function() {
        var ok, msg, e;
        try {
          ok = true;
          var result;
          for (var i = 0; i < 1000; i++) {
            result = evalDice();
            if (!isOneToSix(result)) {
              ok = false;
              break;
            }
          }
          if (ok) {
            msg = '<code>dice()</code> returns only natural numbers between <code>1</code> and <code>6</code> at 1000 calls.';
          } else {
            msg = '<code>dice()</code> returns at least once <code>' + JSON.stringify(result) + ' </code> at 1000 calls. This is not a natural number between <code>1</code> and <code>6</code>.';
          }
        } catch (exc) {
          ok = false;
          msg = 'Error when calling <code>dice()</code>.';
          e = exc;
        }
        return {
          ok: ok,
          msg: msg,
          e: e
        };
      },

      function() {
        return testWith(1);
      },
      function() {
        return testWith(2);
      },
      function() {
        return testWith(3);
      },
      function() {
        return testWith(4);
      },
      function() {
        return testWith(5);
      },
      function() {
        return testWith(6);
      }

    ]

  });

})(jshero.testutil, jshero.evaluator);
