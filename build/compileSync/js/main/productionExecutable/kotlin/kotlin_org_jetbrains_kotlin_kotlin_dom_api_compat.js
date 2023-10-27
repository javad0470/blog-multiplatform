(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toSet = kotlin_kotlin.$_$.r7;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var trim = kotlin_kotlin.$_$.qc;
  var toString = kotlin_kotlin.$_$.ja;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.l6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var joinTo = kotlin_kotlin.$_$.n6;
  var protoOf = kotlin_kotlin.$_$.ea;
  var classMeta = kotlin_kotlin.$_$.w8;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EventListenerHandler, 'EventListenerHandler', classMeta);
  //endregion
  function hasClass(_this__u8e3s4, cssClass) {
    // Inline function 'kotlin.text.matches' call
    var tmp1_matches = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var tmp0_toRegex = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    return Regex_init_$Create$(tmp0_toRegex).lf(tmp1_matches);
  }
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = _this__u8e3s4.className;
      var tmp1_split = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      var tmp3_filter = Regex_init_$Create$('\\s+').of(tmp1_split, 0);
      // Inline function 'kotlin.collections.filterTo' call
      var tmp0_filterTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp3_filter.c();
      while (tmp0_iterator.d()) {
        var element_0 = tmp0_iterator.e();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.m(element_0)) {
          tmp0_filterTo.a(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(tmp0_filterTo, ' ');
      return true;
    }
    return false;
  }
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var tmp0_filterNotTo = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      if (!hasClass(_this__u8e3s4, element)) {
        tmp0_filterNotTo.a(element);
      }
    }
    var missingClasses = tmp0_filterNotTo;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.k()) {
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      tmp0_apply.q6(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        tmp0_apply.q6(' ');
      }
      joinTo(missingClasses, tmp0_apply, ' ');
      _this__u8e3s4.className = tmp0_apply.toString();
      return true;
    }
    return false;
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.oi_1 = handler;
  }
  protoOf(EventListenerHandler).pi = function (event) {
    this.oi_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.pi(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + this.oi_1 + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = hasClass;
  _.$_$.c = removeClass;
  _.$_$.d = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
