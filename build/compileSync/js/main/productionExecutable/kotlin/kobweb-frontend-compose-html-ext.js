(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './html-html-core.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib-js-ir'], this['html-html-core'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ca;
  var objectCreate = kotlin_kotlin.$_$.aa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.e9;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var classMeta = kotlin_kotlin.$_$.v8;
  var VOID = kotlin_kotlin.$_$.he;
  var setMetadataFor = kotlin_kotlin.$_$.da;
  var Unit_getInstance = kotlin_kotlin.$_$.i4;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var interfaceMeta = kotlin_kotlin.$_$.g9;
  var toString = kotlin_kotlin.$_$.ha;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var copyToArray = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.l6;
  var lastOrNull = kotlin_kotlin.$_$.q6;
  var get_lastIndex = kotlin_kotlin.$_$.o6;
  var joinToString_0 = kotlin_kotlin.$_$.k6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var listOf = kotlin_kotlin.$_$.t6;
  var emptyList = kotlin_kotlin.$_$.x5;
  var addAll = kotlin_kotlin.$_$.f5;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var listOfNotNull = kotlin_kotlin.$_$.s6;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var isObject = kotlin_kotlin.$_$.s9;
  var isNumber = kotlin_kotlin.$_$.r9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.sd;
  var removeSuffix = kotlin_kotlin.$_$.nb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var isWhitespace = kotlin_kotlin.$_$.jb;
  var toList = kotlin_kotlin.$_$.m7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var isInterface = kotlin_kotlin.$_$.p9;
  var TagElement$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var to = kotlin_kotlin.$_$.ge;
  var lazy = kotlin_kotlin.$_$.xd;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.sa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c9;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var json = kotlin_kotlin.$_$.v9;
  var Enum = kotlin_kotlin.$_$.rc;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Exception = kotlin_kotlin.$_$.tc;
  var decodeToString = kotlin_kotlin.$_$.ya;
  var isCharSequence = kotlin_kotlin.$_$.l9;
  var trim = kotlin_kotlin.$_$.lc;
  var isBlank = kotlin_kotlin.$_$.gb;
  var split = kotlin_kotlin.$_$.rb;
  var compareTo = kotlin_kotlin.$_$.w8;
  var repeat = kotlin_kotlin.$_$.ob;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var intercepted = kotlin_kotlin.$_$.w7;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var isUpperCase = kotlin_kotlin.$_$.ib;
  var isLowerCase = kotlin_kotlin.$_$.hb;
  var get_lastIndex_0 = kotlin_kotlin.$_$.kb;
  var toString_0 = kotlin_kotlin.$_$.b2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  function unaryMinus(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(-1 * ' + _this__u8e3s4 + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(SVGElementScope, 'SVGElementScope', classMeta);
  setMetadataFor(SVGShapeElementScope, 'SVGShapeElementScope', classMeta, SVGElementScope);
  setMetadataFor(SVGPathScope, 'SVGPathScope', classMeta, SVGShapeElementScope);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, [3, 4]);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.v2b_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w2b_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.x2b_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.y2b_1 = LinkedHashSet_init_$Create$();
    this.z2b_1 = null;
    this.a2c_1 = 8;
  }
  protoOf(ComparableAttrsScope).g1y = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.w2b_1.j3(attr, value);
    this.v2b_1.g1y(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).s1y = function (classes) {
    this.x2b_1.j(classes);
  };
  protoOf(ComparableAttrsScope).w1y = function (listener) {
    this.y2b_1.a(listener);
    this.v2b_1.w1y(listener);
  };
  protoOf(ComparableAttrsScope).r1y = function (builder) {
    var tmp0_elvis_lhs = this.z2b_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.z2b_1 = style;
    this.v2b_1.r1y(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.w2b_1, this.w2b_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.x2b_1, this.x2b_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.y2b_1, this.y2b_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.z2b_1, this.z2b_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.w2b_1);
    result = imul(31, result) + hashCode(this.x2b_1) | 0;
    result = imul(31, result) + hashCode(this.y2b_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z2b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).g1y = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).s1y = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).w1y = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).r1y = function (builder) {
    return Unit_getInstance();
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.z26('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.d2c_1 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).e2c = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).f2c = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).g2c = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JustifyItems(value) {
    Companion_getInstance_2();
    this.h2c_1 = value;
    this.i2c_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.h2c_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.z26('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.l2c_1 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).e2c = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).f2c = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).g2c = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JustifySelf(value) {
    Companion_getInstance_3();
    this.m2c_1 = value;
    this.n2c_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.m2c_1;
  };
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.z26('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.u26('border-style', lineStyle);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    _this__u8e3s4.z26('border-bottom', tmp0_apply);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    _this__u8e3s4.z26('border-top', tmp0_apply);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).o2c = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function BoxSizing(value) {
    Companion_getInstance_4();
    this.p2c_1 = value;
    this.q2c_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.p2c_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      tmp0_apply.n6('inset');
      tmp0_apply.m5(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.m6(offsetX);
    tmp0_apply.m5(_Char___init__impl__6a9atx(32));
    tmp0_apply.m6(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.m5(_Char___init__impl__6a9atx(32));
      tmp0_apply.m6(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.m5(_Char___init__impl__6a9atx(32));
        tmp0_apply.m5(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.m5(_Char___init__impl__6a9atx(32));
      tmp0_apply.m6(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.m5(_Char___init__impl__6a9atx(32));
      tmp0_apply.m6(color);
    }
    tmp$ret$1 = tmp0_apply.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.u26('box-shadow', value);
  }
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_getInstance());
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
    CalcScopeInstance_instance = this;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    if (CalcScopeInstance_instance == null)
      new CalcScopeInstance();
    return CalcScopeInstance_instance;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s2c_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.t2c_1 = LinkedHashMap_init_$Create$();
    this.u2c_1 = 0;
  }
  protoOf(ComparableStyleScope).z26 = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.s2c_1;
    var tmp1_set = toString(value);
    tmp0_set.j3(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).b27 = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.t2c_1;
    var tmp1_set = toString(value);
    tmp0_set.j3(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.s2c_1, other.s2c_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.t2c_1, other.t2c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.s2c_1);
    result = imul(31, result) + hashCode(this.t2c_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.s2c_1.k()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.t2c_1.k();
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).v2c = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).w2c = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Cursor(value) {
    Companion_getInstance_5();
    this.x2c_1 = value;
    this.y2c_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.x2c_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.z26('cursor', cursor);
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).z2c = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_3).a2d = function () {
    return new FontWeight('600');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FontWeight(value) {
    Companion_getInstance_6();
    this.b2d_1 = value;
    this.c2d_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.b2d_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.z26('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.f2d_1 = 0;
  }
  protoOf(GridTrackBuilder).g2d = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var tmp1_toTypedArray = tmp0_apply.h2d_1;
    var repeatTracks = copyToArray(tmp1_toTypedArray);
    this.h2d_1.a(Companion_getInstance_8().j2d(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h2d_1 = ArrayList_init_$Create$();
    this.i2d_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).k2d = function (track) {
    this.h2d_1.a(track);
  };
  protoOf(GridTrackBuilderInRepeat).l2d = function (value) {
    return this.k2d(Companion_getInstance_7().o2d(value));
  };
  protoOf(GridTrackBuilderInRepeat).m2d = function (min, max) {
    return this.k2d(Companion_getInstance_7().p2d(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).n2d = function (min, max) {
    return this.m2d(Companion_getInstance_7().q2d(min), Companion_getInstance_7().o2d(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.u2d_1 = min;
    this.v2d_1 = max;
    this.w2d_1 = 0;
  }
  function Flex(value) {
    TrackSize.call(this, value);
    this.a2e_1 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.e2e_1 = 0;
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, value);
    this.j2e_1 = 0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).q2d = function (value) {
    return new Fixed(toString(value));
  };
  protoOf(Companion_4).o2d = function (value) {
    return new Flex(toString(value));
  };
  protoOf(Companion_4).p2d = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
    this.o2e_1 = 0;
  }
  function Auto() {
  }
  function TrackSize(value) {
    Companion_getInstance_7();
    GridEntry.call(this, value);
    this.r2e_1 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.u2e_1 = entries;
    this.v2e_1 = 0;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.y2e_1 = names;
    this.z2e_1 = 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).j2d = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function GridEntry(value) {
    Companion_getInstance_8();
    this.a2f_1 = value;
    this.b2f_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.a2f_1;
  };
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var tmp1_anonymous = accumulator;
      var prev = lastOrNull(tmp1_anonymous);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(tmp1_anonymous);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.plus' call
        var tmp0_plus = prev.y2e_1;
        var tmp1_plus = element.y2e_1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_plus.concat(tmp1_plus);
        tmp1_anonymous.u9(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        tmp1_anonymous.a(element);
      }
      accumulator = tmp1_anonymous;
    }
    tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            var tmp0_filterIsInstance = element.u2e_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0_filterIsInstance.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0_filterIsInstance[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                tmp0_filterIsInstanceTo.a(element_0);
              }
            }
            var tmp_0;
            if (tmp0_filterIsInstanceTo.k()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              throw IllegalStateException_init_$Create$('repeat() must contain at least one track size');
            } else {
              tmp_0 = tmp0_filterIsInstanceTo;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(tmp0_flatMapTo, list);
    }
    var trackSizes = tmp0_flatMapTo;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.k()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.c();
    while (tmp0_iterator.d()) {
      var element_2 = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          throw IllegalStateException_init_$Create$('Cannot use flex values with auto-repeat');
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            throw IllegalStateException_init_$Create$('Cannot use keywords with auto-repeat');
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              throw IllegalStateException_init_$Create$('Cannot use fit-content with auto-repeat');
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.u2d_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.v2d_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_1 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_1));
                }
              }
            }
          }
        }
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(tmp0_apply.h2d_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp0_apply.g2f(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.l2f_1 = 0;
  }
  function GridBuilderInAuto() {
    this.c2f_1 = null;
    this.d2f_1 = null;
    this.e2f_1 = null;
    this.f2f_1 = 8;
  }
  protoOf(GridBuilderInAuto).m2f = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.c2f_1 = tmp0_apply.h2d_1;
  };
  protoOf(GridBuilderInAuto).n2f = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.d2f_1 = tmp0_apply.h2d_1;
  };
  protoOf(GridBuilderInAuto).g2f = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.c2f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.d2f_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.e2f_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.c2f_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.d2f_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_getInstance();
      }
    }
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).o2f = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function VerticalAlign(value) {
    Companion_getInstance_9();
    this.p2f_1 = value;
    this.q2f_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.p2f_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.z26('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.u26('padding-inline', joinToString(value, ' '));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.v26('z-index', value);
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).r2f = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ListStyleType(value) {
    Companion_getInstance_10();
    this.s2f_1 = value;
    this.t2f_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.s2f_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.z26('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.z26('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.z26('list-style-image', image);
    }
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).u2f = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function ObjectFit(value) {
    Companion_getInstance_11();
    this.v2f_1 = value;
    this.w2f_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.v2f_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.z26('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(tmp0_apply);
    _this__u8e3s4.z26('outline', tmp0_apply);
  }
  function CSSOutline() {
    this.x2f_1 = null;
    this.y2f_1 = null;
    this.z2f_1 = null;
    this.a2g_1 = 8;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.x2f_1, other.x2f_1) ? equals(this.y2f_1, other.y2f_1) : false) ? equals(this.z2f_1, other.z2f_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.z2f_1, this.y2f_1, this.x2f_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.x2f_1 = $width;
      $this$outline.y2f_1 = $style;
      $this$outline.z2f_1 = $color;
      return Unit_getInstance();
    };
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).b2g = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_9).c2g = function () {
    return new Overflow('auto');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Overflow(value) {
    Companion_getInstance_12();
    this.d2g_1 = value;
    this.e2g_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.d2g_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.z26('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.z26('overflow', overflow);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
    this.i2g_1 = 0;
  }
  protoOf(PropertyValue).j2g = function (fallback) {
    return this.n2g(fallback);
  };
  protoOf(PropertyValue).o2g = function (fallback) {
    return this.j2g((fallback == null ? true : isObject(fallback)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
    this.t2g_1 = 0;
  }
  protoOf(NumberValue).j2g = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.n2g(tmp);
  };
  protoOf(NumberValue).o2g = function (fallback) {
    return this.j2g((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.k2g_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = '' + prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.l2g_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.m2g_1 = 0;
  }
  protoOf(StyleVariable).p2g = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.o2g(fallback) : $super.o2g.call(this, fallback);
  };
  protoOf(StyleVariable).n2g = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.k2g_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.l2g_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.u2g_1 = defaultFallback;
    this.v2g_1 = prefix;
    this.w2g_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).x2g = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.u2g_1, this.v2g_1);
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.y2g_1 = defaultFallback;
    this.z2g_1 = prefix;
    this.a2h_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).x2g = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.y2g_1, this.z2g_1);
  };
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      tmp0_apply.n6(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).qd())), '-vars'), '-variables'));
      tmp0_apply.m5(_Char___init__impl__6a9atx(45));
    }
    tmp0_apply.n6(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return tmp0_apply.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.z26('--' + variable.l2g_1, value);
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).r2f = function () {
    return new UserSelect('none');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function UserSelect(value) {
    Companion_getInstance_13();
    this.b2h_1 = value;
    this.c2h_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.b2h_1;
  };
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).d2h = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_11).e2h = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function WhiteSpace(value) {
    Companion_getInstance_14();
    this.f2h_1 = value;
    this.g2h_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.f2h_1;
  };
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).e2c = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_12).f2c = function () {
    return new TextAlign('start');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function TextAlign(value) {
    Companion_getInstance_15();
    this.h2h_1 = value;
    this.i2h_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.h2h_1;
  };
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).j2h = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_13).r2f = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_16();
    this.k2h_1 = value;
    this.l2h_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.k2h_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.z26('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.z26('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.z26('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.u26('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.z26('translate', tx);
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).m2h = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return copyToArray(tmp0_mapTo);
  };
  protoOf(Companion_14).n2h = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.m2h(properties, duration, timingFunction, delay) : $super.m2h.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_18().o2h(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_17();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.p2h_1 = property;
    this.q2h_1 = duration;
    this.r2h_1 = timingFunction;
    this.s2h_1 = delay;
    this.t2h_1 = 0;
  }
  protoOf(CSSTransition).toString = function () {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    tmp0_apply.a(this.p2h_1.toString());
    var tmp0_safe_receiver = this.q2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.a(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.r2h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.a(toString(tmp1_safe_receiver));
    }
    if (!(this.s2h_1 == null)) {
      if (this.q2h_1 == null) {
        tmp0_apply.a('0s');
      }
      tmp0_apply.a(toString(this.s2h_1));
    }
    tmp$ret$6 = tmp0_apply.db();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.p2h_1);
    result = imul(result, 31) + (this.q2h_1 == null ? 0 : hashCode(this.q2h_1)) | 0;
    result = imul(result, 31) + (this.r2h_1 == null ? 0 : hashCode(this.r2h_1)) | 0;
    result = imul(result, 31) + (this.s2h_1 == null ? 0 : hashCode(this.s2h_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.p2h_1, tmp0_other_with_cast.p2h_1))
      return false;
    if (!equals(this.q2h_1, tmp0_other_with_cast.q2h_1))
      return false;
    if (!equals(this.r2h_1, tmp0_other_with_cast.r2h_1))
      return false;
    if (!equals(this.s2h_1, tmp0_other_with_cast.s2h_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).o2h = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        var last = customValue.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TransitionProperty(value) {
    Companion_getInstance_18();
    this.u2h_1 = value;
    this.v2h_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.u2h_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.u26('transition', joinToString(transitions));
    }
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).ol = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.w2h_1 = handle;
    this.x2h_1 = 0;
  }
  protoOf(Simple).y2h = function (scope, element) {
    this.w2h_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.z2h_1 = keys;
    this.a2i_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.z2h_1 + ', refCallback=' + this.a2i_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.z2h_1);
    result = imul(result, 31) + hashCode(this.a2i_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.z2h_1, tmp0_other_with_cast.z2h_1))
      return false;
    if (!equals(this.a2i_1, tmp0_other_with_cast.a2i_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b2i_1 = ArrayList_init_$Create$();
    this.c2i_1 = 8;
  }
  protoOf(Builder).d2i = function (keys, handle) {
    this.b2i_1.a(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).e2i = function (other) {
    if (!(other == null)) {
      this.b2i_1.j(other.f2i_1);
    }
  };
  protoOf(Builder).db = function () {
    return new ElementRefScope(this.b2i_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.f2i_1 = keyedCallbacks;
    this.g2i_1 = 8;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.f2i_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.f2i_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.f2i_1, tmp0_other_with_cast.f2i_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ly(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.cz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda;
      $composer_1.dz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.my();
    registerRefScope$composable_0(_this__u8e3s4, scope, tmp0, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(tmp0_apply);
    return tmp0_apply.db();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(886891411);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.my();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.f2i_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.z2h_1;
      var tmp = copyToArray(tmp0_toTypedArray).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($element, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.a2i_1.y2h($this$DisposableEffect, $transform($this_registerRefScope$composable.m25($this$DisposableEffect)));
    };
  }
  function GenericTag$composable(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(-1742022847);
    sourceInformation($composer_0, 'C(GenericTag$composable)P(2,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.ez(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.hz(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.hz(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.iy()) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1742022847, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag$composable (GenericTag.kt:125)');
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>' call
        tmp = Companion_getInstance_19().i2i(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_20().k2i(name) : tmp1_elvis_lhs;
      TagElement$composable(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    var tmp0_safe_receiver_0 = $composer_0.sy();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.p1d(GenericTag$composable$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2i_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_16).i2i = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.h2i_1;
    var tmp1_getOrPut = to(namespace, qualifiedName);
    var value = tmp0_getOrPut.f2(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0_getOrPut.j3(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    element$factory();
    return $this.n2i_1.u1();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.l2i_1, this$0.m2i_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_19();
    this.l2i_1 = namespace;
    this.m2i_1 = qualifiedName;
    var tmp = this;
    tmp.n2i_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
    this.o2i_1 = 8;
  }
  protoOf(GenericNamespacedElementBuilder).b1k = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_17() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j2i_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_17).k2i = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.j2i_1;
    var value = tmp0_getOrPut.f2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      tmp0_getOrPut.j3(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_17;
  function Companion_getInstance_20() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    element$factory_0();
    return $this.q2i_1.u1();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.p2i_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_20();
    this.p2i_1 = name;
    var tmp = this;
    tmp.q2i_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
    this.r2i_1 = 8;
  }
  protoOf(GenericElementBuilder).b1k = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$composable$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag$composable($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h_0(receiver);
    }, null);
  }
  function Svg$composable(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(1737887414);
    sourceInformation($composer_0, 'C(Svg$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.iy()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1737887414, $dirty, -1, 'com.varabyte.kobweb.compose.dom.Svg$composable (Svg.kt:137)');
      }
      GenericTag$composable('svg', 'http://www.w3.org/2000/svg', attrs_0._v, content, $composer_0, 54 | 896 & $dirty << 6 | 7168 & $dirty << 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    var tmp0_safe_receiver = $composer_0.sy();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.p1d(Svg$composable$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Path$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(-132115974);
    sourceInformation($composer_0, 'C(Path$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(scope) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-132115974, $dirty, -1, 'com.varabyte.kobweb.compose.dom.Path$composable (Svg.kt:425)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.ez(scope);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.varabyte.kobweb.compose.dom.Path$composable.<anonymous>' call
        var value = Path$composable$lambda(scope);
        $composer_1.dz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.my();
      var tmp_1 = tmp0;
      GenericTag$composable('path', 'http://www.w3.org/2000/svg', tmp_1, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    var tmp0_safe_receiver = $composer_0.sy();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.p1d(Path$composable$lambda_0(_this__u8e3s4, scope, $changed));
    }
  }
  function SVGPathScope(attrs) {
    SVGShapeElementScope.call(this, attrs);
    this.v2i_1 = attrs;
    this.w2i_1 = 8;
  }
  function SVGShapeElementScope(attrs) {
    SVGElementScope.call(this, attrs);
    this.c2j_1 = 0;
  }
  function SVGElementScope(attrs) {
    this.x2i_1 = attrs;
    this.y2i_1 = 8;
  }
  protoOf(SVGElementScope).z2i = function (name, value) {
    this.x2i_1.g1y(name, value);
  };
  function Svg$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg$composable($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Path$composable$lambda($scope) {
    return function ($this$GenericTag) {
      $scope(new SVGPathScope($this$GenericTag));
      return Unit_getInstance();
    };
  }
  function Path$composable$lambda_0($this_Path$composable, $scope, $$changed) {
    return function ($composer, $force) {
      Path$composable($this_Path$composable, $scope, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function fetch(_this__u8e3s4, method, resource, headers, body, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(headers == null ? true : headers.k())) {
      tmp_0 = true;
    } else {
      tmp_0 = !(body == null);
    }
    if (tmp_0) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = json([]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.http.fetch.<anonymous>' call
      if (!(body == null)) {
        tmp0_apply['Content-Length'] = body.length;
        tmp0_apply['Content-Type'] = 'application/octet-stream';
      }
      if (headers == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = headers.s1().c();
        while (tmp0_iterator.d()) {
          var tmp1_loop_parameter = tmp0_iterator.e();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.r1();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.u1();
          tmp0_apply[key] = value;
        }
      }
      tmp = tmp0_apply;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var tmp1_RequestInit = method.x4_1;
    var tmp2_RequestInit = headersJson == null ? undefined : headersJson;
    var tmp3_RequestInit = body == null ? undefined : body;
    var tmp4_RequestInit = undefined;
    var tmp5_RequestInit = undefined;
    var tmp6_RequestInit = undefined;
    var tmp7_RequestInit = undefined;
    var tmp8_RequestInit = undefined;
    var tmp9_RequestInit = undefined;
    var tmp10_RequestInit = undefined;
    var tmp11_RequestInit = undefined;
    var tmp12_RequestInit = undefined;
    var o = {};
    o['method'] = tmp1_RequestInit;
    o['headers'] = tmp2_RequestInit;
    o['body'] = tmp3_RequestInit;
    o['referrer'] = tmp4_RequestInit;
    o['referrerPolicy'] = tmp5_RequestInit;
    o['mode'] = tmp6_RequestInit;
    o['credentials'] = tmp7_RequestInit;
    o['cache'] = tmp8_RequestInit;
    o['redirect'] = tmp9_RequestInit;
    o['integrity'] = tmp10_RequestInit;
    o['keepalive'] = tmp11_RequestInit;
    o['window'] = tmp12_RequestInit;
    var requestInit = o;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.e2j_1;
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.tn($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function ResponseException(response, bodyBytes) {
    var tmp$ret$15;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>' call
    tmp0_apply.n6('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp1_safe_receiver = bodyBytes == null ? null : decodeToString(bodyBytes);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString(trim((!(tmp1_safe_receiver == null) ? isCharSequence(tmp1_safe_receiver) : false) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp2_safe_receiver)) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.m5(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.c();
        if (!iterator.d()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var maxValue = iterator.e().length;
        while (iterator.d()) {
          // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var v = iterator.e().length;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.n6(boundary).m5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        tmp0_apply.n6(tmp0_appendLine).m5(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.n6(boundary).m5(_Char___init__impl__6a9atx(10));
    }
    tmp$ret$15 = tmp0_apply.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.w2j_1 = response;
    this.x2j_1 = bodyBytes;
    this.y2j_1 = 0;
  }
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.un(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.wn(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.wn(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.q2k_1 = $result;
    this.r2k_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).i1g = function ($this$launch, $completion) {
    var tmp = this.j1g($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(getBodyBytesAsync$slambda).ni = function (p1, $completion) {
    return this.i1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = getBodyBytes(this.r2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.q2k_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 2) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).j1g = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.q2k_1, this.r2k_1, completion);
    i.s2k_1 = $this$launch;
    return i;
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.i1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getBodyBytes$lambda($safe) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$2;
        var tmp$ret$1;
        // Inline function 'org.khronos.webgl.get' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = int8Array;
        tmp$ret$1 = tmp$ret$0[tmp_2];
        tmp$ret$2 = tmp$ret$1;
        tmp_1[tmp_2] = tmp$ret$2;
        tmp = tmp + 1 | 0;
      }
      var tmp0_resume = tmp_1;
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_1();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      $safe.r3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function getBodyBytes$lambda_0($safe) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = new Int8Array(0);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_1();
      tmp$ret$0 = _Result___init__impl__xyqfz8(tmp0_resume);
      $safe.r3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o2j_1 = _this__u8e3s4;
    this.p2j_1 = method;
    this.q2j_1 = resource;
    this.r2j_1 = headers;
    this.s2j_1 = body;
    this.t2j_1 = logOnError;
    this.u2j_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = fetch(this.o2j_1, this.p2j_1, this.q2j_1, this.r2j_1, this.s2j_1, this.u2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v2j_1 = suspendResult;
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_0 = this.vh_1;
            if (tmp_0 instanceof Error) {
              var t = this.vh_1;
              var tmp_1 = this;
              if (this.t2j_1) {
                console.log('Error fetching resource "' + this.q2j_1 + '"\n\n' + t);
              }
              tmp_1.v2j_1 = null;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.v2j_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 3) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2k_1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = this.h2k_1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            suspendResult = returnIfSuspended(safe.md(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 2) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    http$factory();
    return http$delegate.u1();
  }
  var http$delegate;
  function HttpFetcher(window_0) {
    this.t2k_1 = window_0;
    this.u2k_1 = false;
    this.v2k_1 = 8;
  }
  protoOf(HttpFetcher).w2k = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.t2k_1, HttpMethod_POST_getInstance(), resource, headers, body, this.u2k_1, abortController, $completion);
  };
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    var last = str.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var isUpper = isUpperCase(item);
      if (isUpper) {
        var tmp;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tmp0_apply) > 0) {
          tmp = !lastIsUpper ? true : tmp1 < get_lastIndex_0(tmp0_apply) ? isLowerCase(tmp0_apply.l9(tmp1 + 1 | 0)) : false;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp0_apply.n6('-');
        }
      }
      var tmp$ret$5;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = toString_0(item).toLowerCase();
      tmp0_apply.n6(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return tmp0_apply.toString();
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).t1y = classes;
  protoOf(ComparableAttrsScope).u1y = id;
  protoOf(ComparableAttrsScope).v1y = tabIndex;
  protoOf(ComparableAttrsScope).x1y = onClick;
  protoOf(DummyAttrsScope).t1y = classes;
  protoOf(DummyAttrsScope).u1y = id;
  protoOf(DummyAttrsScope).v1y = tabIndex;
  protoOf(DummyAttrsScope).x1y = onClick;
  protoOf(CalcScopeInstance).r2c = unaryMinus;
  protoOf(ComparableStyleScope).u26 = property;
  protoOf(ComparableStyleScope).v26 = property_0;
  protoOf(ComparableStyleScope).a27 = variable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ComparableStyleScope;
  _.$_$.b = NumberValue;
  _.$_$.c = StyleVariable_1;
  _.$_$.d = StyleVariable_0;
  _.$_$.e = borderBottom;
  _.$_$.f = borderColor;
  _.$_$.g = borderStyle;
  _.$_$.h = borderTop;
  _.$_$.i = boxShadow;
  _.$_$.j = boxSizing_0;
  _.$_$.k = calc;
  _.$_$.l = cursor;
  _.$_$.m = fontWeight;
  _.$_$.n = gridTemplateColumns_0;
  _.$_$.o = grid;
  _.$_$.p = isNotEmpty;
  _.$_$.q = justifyItems;
  _.$_$.r = justifySelf;
  _.$_$.s = listStyle;
  _.$_$.t = objectFit;
  _.$_$.u = outline;
  _.$_$.v = overflowY;
  _.$_$.w = overflow;
  _.$_$.x = paddingInline;
  _.$_$.y = setVariable;
  _.$_$.z = textAlign;
  _.$_$.a1 = textDecorationLine;
  _.$_$.b1 = transition;
  _.$_$.c1 = translateX;
  _.$_$.d1 = userSelect;
  _.$_$.e1 = verticalAlign;
  _.$_$.f1 = whiteSpace;
  _.$_$.g1 = zIndex;
  _.$_$.h1 = Path$composable;
  _.$_$.i1 = Svg$composable;
  _.$_$.j1 = refScope;
  _.$_$.k1 = registerRefScope$composable;
  _.$_$.l1 = get_http;
  _.$_$.m1 = titleCamelCaseToKebabCase;
  _.$_$.n1 = ComparableAttrsScope_init_$Create$;
  _.$_$.o1 = CSSTransition_init_$Create$;
  _.$_$.p1 = Companion_getInstance_4;
  _.$_$.q1 = Companion_getInstance_17;
  _.$_$.r1 = Companion_getInstance_5;
  _.$_$.s1 = Companion_getInstance_6;
  _.$_$.t1 = Companion_getInstance_2;
  _.$_$.u1 = Companion_getInstance_3;
  _.$_$.v1 = Companion_getInstance_10;
  _.$_$.w1 = Companion_getInstance_11;
  _.$_$.x1 = Companion_getInstance_12;
  _.$_$.y1 = Companion_getInstance_15;
  _.$_$.z1 = Companion_getInstance_16;
  _.$_$.a2 = Companion_getInstance_13;
  _.$_$.b2 = Companion_getInstance_9;
  _.$_$.c2 = Companion_getInstance_14;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
