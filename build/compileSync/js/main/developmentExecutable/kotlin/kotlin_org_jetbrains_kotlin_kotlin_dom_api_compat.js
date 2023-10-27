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
  var Regex_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toSet = kotlin_kotlin.$_$.t8;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var isCharSequence = kotlin_kotlin.$_$.ua;
  var trim = kotlin_kotlin.$_$.ge;
  var toString = kotlin_kotlin.$_$.tb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var joinToString = kotlin_kotlin.$_$.g7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.ca;
  var joinTo = kotlin_kotlin.$_$.i7;
  var ensureNotNull = kotlin_kotlin.$_$.sf;
  var protoOf = kotlin_kotlin.$_$.ob;
  var classMeta = kotlin_kotlin.$_$.ea;
  var VOID = kotlin_kotlin.$_$.ig;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EventListenerHandler, 'EventListenerHandler', classMeta);
  //endregion
  function hasClass(_this__u8e3s4, cssClass) {
    // Inline function 'kotlin.text.matches' call
    var tmp1_matches = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var tmp0_toRegex = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    return Regex_init_$Create$(tmp0_toRegex).matches_qvb2fs_k$(tmp1_matches);
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
      var tmp3_filter = Regex_init_$Create$('\\s+').split_8rwwda_k$(tmp1_split, 0);
      // Inline function 'kotlin.collections.filterTo' call
      var tmp0_filterTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp3_filter.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.contains_2ehdt1_k$(element_0)) {
          tmp0_filterTo.add_1j60pz_k$(element_0);
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
        tmp0_filterNotTo.add_1j60pz_k$(element);
      }
    }
    var missingClasses = tmp0_filterNotTo;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      tmp0_apply.append_ssq29y_k$(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        tmp0_apply.append_ssq29y_k$(' ');
      }
      joinTo(missingClasses, tmp0_apply, ' ');
      _this__u8e3s4.className = tmp0_apply.toString();
      return true;
    }
    return false;
  }
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function EventListenerHandler(handler) {
    this.handler_1 = handler;
  }
  protoOf(EventListenerHandler).handleEvent_78xx5q_k$ = function (event) {
    this.handler_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + this.handler_1 + ')';
  };
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_0(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function EventSourceInit(withCredentials) {
    withCredentials = withCredentials === VOID ? false : withCredentials;
    var o = {};
    o['withCredentials'] = withCredentials;
    return o;
  }
  function get_1(_this__u8e3s4, key) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[key];
  }
  function set(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[key] = value;
  }
  function get_2(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function RequestInit(method, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, window_0) {
    method = method === VOID ? undefined : method;
    headers = headers === VOID ? undefined : headers;
    body = body === VOID ? undefined : body;
    referrer = referrer === VOID ? undefined : referrer;
    referrerPolicy = referrerPolicy === VOID ? undefined : referrerPolicy;
    mode = mode === VOID ? undefined : mode;
    credentials = credentials === VOID ? undefined : credentials;
    cache = cache === VOID ? undefined : cache;
    redirect = redirect === VOID ? undefined : redirect;
    integrity = integrity === VOID ? undefined : integrity;
    keepalive = keepalive === VOID ? undefined : keepalive;
    window_0 = window_0 === VOID ? undefined : window_0;
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    return o;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = clear;
  _.$_$.c = hasClass;
  _.$_$.d = removeClass;
  _.$_$.e = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
