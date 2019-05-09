(function(testutil) {

  jshero.koans.add({

    id: 'string',

    title: 'Strings',

    lesson: `We have seen that a variable is a container for a value. A value can be a text like <code>'Hello world!'</code>.
Values have a type. The type of <code>'Hello world!'</code> is string. You can use single or double quotes.
<code>'Hello world!'</code> is the same string as <code>"Hello world!"</code>.<br>
You can work with strings. For example, they can be concatenated. This is done with the <code>+</code> sign.
<code>'Java' + 'Script'</code> results in the string <code>'JavaScript'</code>.
The following function appends <code>' is great!'</code> to the passed parameter and returns the result:

<pre><code>var praise = function(name) {
  return name + ' is great!';
};</code></pre>

<code>praise('JavaScript')</code> will return <code>'JavaScript is great!'</code>.`,

    task: `Write a function <code>greet</code> having one parameter and returning <code>'Hello &lt;parameter&gt;!'</code>.
<code>greet('Ada')</code> should return <code>'Hello Ada!'</code> and <code>greet('Tayo')</code> should return
<code>'Hello Tayo!'</code>.`,

    hint: `<pre><code>var greet = function(name) {
  return ...
};</code></pre>`,

    solution: `<pre><code>var greet = function(name) {
  return 'Hello ' + name + '!';
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('greet');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('greet', 1);
      },

      function() {
        return testutil.assert_functionReturns("greet('Ada')", 'Hello Ada!');
      },

      function() {
        return testutil.assert_functionReturns("greet('Tayo')", 'Hello Tayo!');
      }

    ]
  });

})(jshero.testutil);