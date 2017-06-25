if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Code-area control.
 */
jshero.code = (function() {

  var codeArea = document.getElementById('code-area');

  var get = function() {
    var code = codeArea.value;
    return code.trim();
  };
  
  var set = function(code) {
    codeArea.value = code;
    adjustCodeAreaHeight();
  };

  var adjustCodeAreaHeight = function() {
    if (codeArea.scrollHeight > codeArea.clientHeight) {
      codeArea.rows = codeArea.rows + 5;
      codeArea.style.height = "auto";
    }
  };

  codeArea.onkeyup = adjustCodeAreaHeight;

  return {
    get: get,
    set: set
  }

})();
