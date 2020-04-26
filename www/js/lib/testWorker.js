importScripts("../util/nodeutil.js","../util/polyfill.js","../util/util.js","../util/i18n.js","../util/array.js","../util/object.js","../util/date.js","koans.js","log.js","evaluator.js","testutil.js");(function(){var cloneError=function(e){var clone={message:e.message};if(e.lineNumber){clone.lineNumber=e.lineNumber}if(e.columnNumber){clone.columnNumber=e.columnNumber}if(e.line){clone.line=e.line}return clone};(function(log,i18n,evaluator){var I18N;var code;var koanId;var testIndex;var language;var readCode=function(){var result;log.clear();try{evaluator.init(code).evalParse();result={ok:true,msg:I18N("noSyntaxError")}}catch(e){result={ok:false,msg:I18N("syntaxError"),e:cloneError(e)}}result.logs=log.getAll();return result};var testCode=function(){importKoan();var koan=jshero.koans.get();var result;try{evaluator.init(code);log.clear();result=koan.tests[testIndex]()}catch(exc){result={ok:false,msg:I18N("unknownError"),e:exc}}if(result.e){result.e=cloneError(result.e)}else{result.isLast=testIndex===koan.tests.length-1}result.logs=log.getAll();return result};var init=function(){initI18n();return{ok:true}};var initI18n=function(){i18n.setLanguage(language);I18N=i18n.get};var importKoan=function(){var koanUrl=language==="de"?"../koans/":"../../en/js/koans/";koanUrl+=koanId+".js?v=401";importScripts(koanUrl)};onmessage=function(event){code=event.data.code;testIndex=event.data.testIndex;koanId=event.data.koanId;language=event.data.language;var action=event.data.action;var result;if(action==="init"){result=init()}else if(action==="read"){result=readCode()}else if(action==="test"){result=testCode()}postMessage(result)}})(jshero.log,jshero.i18n,jshero.evaluator)})();