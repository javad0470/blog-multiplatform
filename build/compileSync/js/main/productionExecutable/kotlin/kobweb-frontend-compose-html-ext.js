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
  var protoOf = kotlin_kotlin.$_$.ea;
  var objectCreate = kotlin_kotlin.$_$.ca;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var classMeta = kotlin_kotlin.$_$.w8;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var objectMeta = kotlin_kotlin.$_$.da;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var toString = kotlin_kotlin.$_$.ja;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var copyToArray = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.m6;
  var lastOrNull = kotlin_kotlin.$_$.r6;
  var get_lastIndex = kotlin_kotlin.$_$.p6;
  var joinToString_0 = kotlin_kotlin.$_$.l6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.de;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var listOf = kotlin_kotlin.$_$.u6;
  var emptyList = kotlin_kotlin.$_$.y5;
  var addAll = kotlin_kotlin.$_$.g5;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var listOfNotNull = kotlin_kotlin.$_$.t6;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var isObject = kotlin_kotlin.$_$.t9;
  var isNumber = kotlin_kotlin.$_$.s9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var removeSuffix = kotlin_kotlin.$_$.qb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var isWhitespace = kotlin_kotlin.$_$.mb;
  var toList = kotlin_kotlin.$_$.n7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.q9;
  var TagElement$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var to = kotlin_kotlin.$_$.me;
  var lazy = kotlin_kotlin.$_$.ce;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var KProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var isBlank = kotlin_kotlin.$_$.jb;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var json = kotlin_kotlin.$_$.w9;
  var Enum = kotlin_kotlin.$_$.wc;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Exception = kotlin_kotlin.$_$.yc;
  var decodeToString = kotlin_kotlin.$_$.bb;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var trim = kotlin_kotlin.$_$.qc;
  var split = kotlin_kotlin.$_$.vb;
  var compareTo = kotlin_kotlin.$_$.x8;
  var repeat = kotlin_kotlin.$_$.rb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var intercepted = kotlin_kotlin.$_$.x7;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var isUpperCase = kotlin_kotlin.$_$.lb;
  var isLowerCase = kotlin_kotlin.$_$.kb;
  var get_lastIndex_0 = kotlin_kotlin.$_$.nb;
  var toString_0 = kotlin_kotlin.$_$.c2;
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
  setMetadataFor(Resize, 'Resize', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Visibility, 'Visibility', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(SVGElementScope, 'SVGElementScope', classMeta);
  setMetadataFor(SVGShapeElementScope, 'SVGShapeElementScope', classMeta, SVGElementScope);
  setMetadataFor(SVGPathScope, 'SVGPathScope', classMeta, SVGShapeElementScope);
  setMetadataFor(LoadContext, 'LoadContext', classMeta);
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
    this.h2f_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i2f_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.j2f_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.k2f_1 = LinkedHashSet_init_$Create$();
    this.l2f_1 = null;
    this.m2f_1 = 8;
  }
  protoOf(ComparableAttrsScope).h1z = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.i2f_1.l3(attr, value);
    this.h2f_1.h1z(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).t1z = function (classes) {
    this.j2f_1.j(classes);
  };
  protoOf(ComparableAttrsScope).y1z = function (update, value) {
    this.h2f_1.y1z(update, value);
  };
  protoOf(ComparableAttrsScope).z1z = function (listener) {
    this.k2f_1.a(listener);
    this.h2f_1.z1z(listener);
  };
  protoOf(ComparableAttrsScope).s1z = function (builder) {
    var tmp0_elvis_lhs = this.l2f_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.l2f_1 = style;
    this.h2f_1.s1z(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.i2f_1, this.i2f_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.j2f_1, this.j2f_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.k2f_1, this.k2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.l2f_1, this.l2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.i2f_1);
    result = imul(31, result) + hashCode(this.j2f_1) | 0;
    result = imul(31, result) + hashCode(this.k2f_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.l2f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).h1z = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).t1z = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).y1z = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).z1z = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).s1z = function (builder) {
    return Unit_getInstance();
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.x28('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.p2f_1 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).q2f = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).r2f = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).s2f = function () {
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
    this.t2f_1 = value;
    this.u2f_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.t2f_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.x28('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.x2f_1 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).q2f = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).r2f = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).s2f = function () {
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
    this.y2f_1 = value;
    this.z2f_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.y2f_1;
  };
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.x28('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s28('border-style', lineStyle);
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
    _this__u8e3s4.x28('border-bottom', tmp0_apply);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    _this__u8e3s4.x28('border-top', tmp0_apply);
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
  protoOf(Companion_1).a2g = function () {
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
    this.b2g_1 = value;
    this.c2g_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.b2g_1;
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
      tmp0_apply.q6('inset');
      tmp0_apply.o5(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.p6(offsetX);
    tmp0_apply.o5(_Char___init__impl__6a9atx(32));
    tmp0_apply.p6(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.o5(_Char___init__impl__6a9atx(32));
      tmp0_apply.p6(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.o5(_Char___init__impl__6a9atx(32));
        tmp0_apply.o5(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.o5(_Char___init__impl__6a9atx(32));
      tmp0_apply.p6(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.o5(_Char___init__impl__6a9atx(32));
      tmp0_apply.p6(color);
    }
    tmp$ret$1 = tmp0_apply.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.s28('box-shadow', value);
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
    tmp.e2g_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.f2g_1 = LinkedHashMap_init_$Create$();
    this.g2g_1 = 0;
  }
  protoOf(ComparableStyleScope).x28 = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.e2g_1;
    var tmp1_set = toString(value);
    tmp0_set.l3(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).z28 = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.f2g_1;
    var tmp1_set = toString(value);
    tmp0_set.l3(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.e2g_1, other.e2g_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.f2g_1, other.f2g_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.e2g_1);
    result = imul(31, result) + hashCode(this.f2g_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.e2g_1.k()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.f2g_1.k();
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).h2g = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).i2g = function () {
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
    this.j2g_1 = value;
    this.k2g_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.j2g_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.x28('cursor', cursor);
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).l2g = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_3).m2g = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_3).n2g = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_3).o2g = function () {
    return new FontWeight('bold');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FontWeight(value) {
    Companion_getInstance_6();
    this.p2g_1 = value;
    this.q2g_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.p2g_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.x28('font-weight', weight);
  }
  function disabled(_this__u8e3s4) {
    _this__u8e3s4.h1z('disabled', 'true');
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.t2g_1 = 0;
  }
  protoOf(GridTrackBuilder).u2g = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var tmp1_toTypedArray = tmp0_apply.v2g_1;
    var repeatTracks = copyToArray(tmp1_toTypedArray);
    this.v2g_1.a(Companion_getInstance_8().x2g(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2g_1 = ArrayList_init_$Create$();
    this.w2g_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).y2g = function (track) {
    this.v2g_1.a(track);
  };
  protoOf(GridTrackBuilderInRepeat).z2g = function (value) {
    return this.y2g(Companion_getInstance_7().c2h(value));
  };
  protoOf(GridTrackBuilderInRepeat).a2h = function (min, max) {
    return this.y2g(Companion_getInstance_7().d2h(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).b2h = function (min, max) {
    return this.a2h(Companion_getInstance_7().e2h(min), Companion_getInstance_7().c2h(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.i2h_1 = min;
    this.j2h_1 = max;
    this.k2h_1 = 0;
  }
  function Flex(value) {
    TrackSize.call(this, value);
    this.o2h_1 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.s2h_1 = 0;
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, value);
    this.x2h_1 = 0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).e2h = function (value) {
    return new Fixed(toString(value));
  };
  protoOf(Companion_4).c2h = function (value) {
    return new Flex(toString(value));
  };
  protoOf(Companion_4).d2h = function (min, max) {
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
    this.c2i_1 = 0;
  }
  function Auto() {
  }
  function TrackSize(value) {
    Companion_getInstance_7();
    GridEntry.call(this, value);
    this.f2i_1 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.i2i_1 = entries;
    this.j2i_1 = 0;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.m2i_1 = names;
    this.n2i_1 = 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).x2g = function (count, entries) {
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
    this.o2i_1 = value;
    this.p2i_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.o2i_1;
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
        var tmp0_plus = prev.m2i_1;
        var tmp1_plus = element.m2i_1;
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
            var tmp0_filterIsInstance = element.i2i_1;
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
                var tmp_2 = element_2.i2h_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.j2h_1;
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
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(tmp0_apply.v2g_1));
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
    tmp0_apply.u2i(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.z2i_1 = 0;
  }
  function GridBuilderInAuto() {
    this.q2i_1 = null;
    this.r2i_1 = null;
    this.s2i_1 = null;
    this.t2i_1 = 8;
  }
  protoOf(GridBuilderInAuto).a2j = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.q2i_1 = tmp0_apply.v2g_1;
  };
  protoOf(GridBuilderInAuto).b2j = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.r2i_1 = tmp0_apply.v2g_1;
  };
  protoOf(GridBuilderInAuto).u2i = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.q2i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.r2i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.s2i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.q2i_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.r2i_1;
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
  protoOf(Companion_6).c2j = function () {
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
    this.d2j_1 = value;
    this.e2j_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.d2j_1;
  };
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).f2j = function () {
    return new Resize('none');
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Resize(value) {
    Companion_getInstance_10();
    this.g2j_1 = value;
    this.h2j_1 = 0;
  }
  protoOf(Resize).toString = function () {
    return this.g2j_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.x28('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.s28('padding-inline', joinToString(value, ' '));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.t28('z-index', value);
  }
  function resize(_this__u8e3s4, resize) {
    _this__u8e3s4.x28('resize', resize);
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).f2j = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function ListStyleType(value) {
    Companion_getInstance_11();
    this.i2j_1 = value;
    this.j2j_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.i2j_1;
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
      _this__u8e3s4.x28('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.x28('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.x28('list-style-image', image);
    }
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).k2j = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_9).l2j = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ObjectFit(value) {
    Companion_getInstance_12();
    this.m2j_1 = value;
    this.n2j_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.m2j_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.x28('object-fit', objectFit);
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
    _this__u8e3s4.x28('outline', tmp0_apply);
  }
  function CSSOutline() {
    this.o2j_1 = null;
    this.p2j_1 = null;
    this.q2j_1 = null;
    this.r2j_1 = 8;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.o2j_1, other.o2j_1) ? equals(this.p2j_1, other.p2j_1) : false) ? equals(this.q2j_1, other.q2j_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.q2j_1, this.p2j_1, this.o2j_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.o2j_1 = $width;
      $this$outline.p2j_1 = $style;
      $this$outline.q2j_1 = $color;
      return Unit_getInstance();
    };
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).s2j = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_10).t2j = function () {
    return new Overflow('auto');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Overflow(value) {
    Companion_getInstance_13();
    this.u2j_1 = value;
    this.v2j_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.u2j_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.x28('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.x28('overflow', overflow);
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).w2j = function () {
    return new ScrollBehavior('smooth');
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function ScrollBehavior(value) {
    Companion_getInstance_14();
    this.x2j_1 = value;
    this.y2j_1 = 0;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.x2j_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.x28('scroll-behavior', scrollBehavior);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
    this.c2k_1 = 0;
  }
  protoOf(PropertyValue).d2k = function (fallback) {
    return this.h2k(fallback);
  };
  protoOf(PropertyValue).i2k = function (fallback) {
    return this.d2k((fallback == null ? true : isObject(fallback)) ? fallback : THROW_CCE());
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
    this.n2k_1 = 0;
  }
  protoOf(NumberValue).d2k = function (fallback) {
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
    return this.h2k(tmp);
  };
  protoOf(NumberValue).i2k = function (fallback) {
    return this.d2k((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.e2k_1 = defaultFallback;
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
    tmp.f2k_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.g2k_1 = 0;
  }
  protoOf(StyleVariable).j2k = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.i2k(fallback) : $super.i2k.call(this, fallback);
  };
  protoOf(StyleVariable).h2k = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.e2k_1 : fallback;
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
    return 'var(--' + this.f2k_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.o2k_1 = defaultFallback;
    this.p2k_1 = prefix;
    this.q2k_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).r2k = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.o2k_1, this.p2k_1);
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.s2k_1 = defaultFallback;
    this.t2k_1 = prefix;
    this.u2k_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).r2k = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.s2k_1, this.t2k_1);
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
      tmp0_apply.q6(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).qd())), '-vars'), '-variables'));
      tmp0_apply.o5(_Char___init__impl__6a9atx(45));
    }
    tmp0_apply.q6(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return tmp0_apply.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.x28('--' + variable.f2k_1, value);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.t28('--' + variable.f2k_1, value);
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).f2j = function () {
    return new UserSelect('none');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function UserSelect(value) {
    Companion_getInstance_15();
    this.v2k_1 = value;
    this.w2k_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.v2k_1;
  };
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).x2k = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_13).y2k = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function WhiteSpace(value) {
    Companion_getInstance_16();
    this.z2k_1 = value;
    this.a2l_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.z2k_1;
  };
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).q2f = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_14).r2f = function () {
    return new TextAlign('start');
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TextAlign(value) {
    Companion_getInstance_17();
    this.b2l_1 = value;
    this.c2l_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.b2l_1;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).d2l = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_15).f2j = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_18();
    this.e2l_1 = value;
    this.f2l_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.e2l_1;
  };
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).g2l = function () {
    return new TextOverflow('ellipsis');
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TextOverflow(value) {
    Companion_getInstance_19();
    this.h2l_1 = value;
    this.i2l_1 = 0;
  }
  protoOf(TextOverflow).toString = function () {
    return this.h2l_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.x28('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.x28('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.x28('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.s28('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function textOverflow(_this__u8e3s4, textOverflow) {
    _this__u8e3s4.x28('text-overflow', textOverflow);
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.x28('translate', tx);
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).j2l = function (properties, duration, timingFunction, delay) {
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
  protoOf(Companion_17).k2l = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.j2l(properties, duration, timingFunction, delay) : $super.j2l.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_17;
  function Companion_getInstance_20() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_21().l2l(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_20();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.m2l_1 = property;
    this.n2l_1 = duration;
    this.o2l_1 = timingFunction;
    this.p2l_1 = delay;
    this.q2l_1 = 0;
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
    tmp0_apply.a(this.m2l_1.toString());
    var tmp0_safe_receiver = this.n2l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.a(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.o2l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.a(toString(tmp1_safe_receiver));
    }
    if (!(this.p2l_1 == null)) {
      if (this.n2l_1 == null) {
        tmp0_apply.a('0s');
      }
      tmp0_apply.a(toString(this.p2l_1));
    }
    tmp$ret$6 = tmp0_apply.db();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.m2l_1);
    result = imul(result, 31) + (this.n2l_1 == null ? 0 : hashCode(this.n2l_1)) | 0;
    result = imul(result, 31) + (this.o2l_1 == null ? 0 : hashCode(this.o2l_1)) | 0;
    result = imul(result, 31) + (this.p2l_1 == null ? 0 : hashCode(this.p2l_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.m2l_1, tmp0_other_with_cast.m2l_1))
      return false;
    if (!equals(this.n2l_1, tmp0_other_with_cast.n2l_1))
      return false;
    if (!equals(this.o2l_1, tmp0_other_with_cast.o2l_1))
      return false;
    if (!equals(this.p2l_1, tmp0_other_with_cast.p2l_1))
      return false;
    return true;
  };
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).l2l = function (customValue) {
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
  protoOf(Companion_18).r2l = function () {
    return new TransitionProperty('all');
  };
  var Companion_instance_18;
  function Companion_getInstance_21() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TransitionProperty(value) {
    Companion_getInstance_21();
    this.s2l_1 = value;
    this.t2l_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.s2l_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.s28('transition', joinToString(transitions));
    }
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).u2l = function () {
    return new Visibility('visible');
  };
  protoOf(Companion_19).s2j = function () {
    return new Visibility('hidden');
  };
  var Companion_instance_19;
  function Companion_getInstance_22() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Visibility(value) {
    Companion_getInstance_22();
    this.v2l_1 = value;
    this.w2l_1 = 0;
  }
  protoOf(Visibility).toString = function () {
    return this.v2l_1;
  };
  function visibility(_this__u8e3s4, visibility) {
    _this__u8e3s4.x28('visibility', visibility);
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).ql = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.x2l_1 = handle;
    this.y2l_1 = 0;
  }
  protoOf(Simple).z2l = function (scope, element) {
    this.x2l_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.a2m_1 = keys;
    this.b2m_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.a2m_1 + ', refCallback=' + this.b2m_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.a2m_1);
    result = imul(result, 31) + hashCode(this.b2m_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.a2m_1, tmp0_other_with_cast.a2m_1))
      return false;
    if (!equals(this.b2m_1, tmp0_other_with_cast.b2m_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c2m_1 = ArrayList_init_$Create$();
    this.d2m_1 = 8;
  }
  protoOf(Builder).e2m = function (keys, handle) {
    this.c2m_1.a(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).f2m = function (other) {
    if (!(other == null)) {
      this.c2m_1.j(other.g2m_1);
    }
  };
  protoOf(Builder).db = function () {
    return new ElementRefScope(this.c2m_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.g2m_1 = keyedCallbacks;
    this.h2m_1 = 8;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.g2m_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.g2m_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.g2m_1, tmp0_other_with_cast.g2m_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ny(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda;
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.oy();
    registerRefScope$composable_0(_this__u8e3s4, scope, tmp0, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
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
    $composer_0.ny(886891411);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.oy();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.g2m_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.a2m_1;
      var tmp = copyToArray(tmp0_toTypedArray).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($element, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.b2m_1.z2l($this$DisposableEffect, $transform($this_registerRefScope$composable.d27($this$DisposableEffect)));
    };
  }
  function GenericTag$composable(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1742022847);
    sourceInformation($composer_0, 'C(GenericTag$composable)P(2,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.ky()) {
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
        tmp = Companion_getInstance_23().j2m(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_24().l2m(name) : tmp1_elvis_lhs;
      TagElement$composable(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    var tmp0_safe_receiver_0 = $composer_0.uy();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.r1d(GenericTag$composable$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i2m_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_20).j2m = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.i2m_1;
    var tmp1_getOrPut = to(namespace, qualifiedName);
    var value = tmp0_getOrPut.h2(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0_getOrPut.l3(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_20;
  function Companion_getInstance_23() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    element$factory();
    return $this.o2m_1.w1();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.m2m_1, this$0.n2m_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_23();
    this.m2m_1 = namespace;
    this.n2m_1 = qualifiedName;
    var tmp = this;
    tmp.o2m_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
    this.p2m_1 = 8;
  }
  protoOf(GenericNamespacedElementBuilder).c1l = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k2m_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_21).l2m = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.k2m_1;
    var value = tmp0_getOrPut.h2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      tmp0_getOrPut.l3(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_21;
  function Companion_getInstance_24() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    element$factory_0();
    return $this.r2m_1.w1();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.q2m_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_24();
    this.q2m_1 = name;
    var tmp = this;
    tmp.r2m_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
    this.s2m_1 = 8;
  }
  protoOf(GenericElementBuilder).c1l = function () {
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
    $composer_0 = $composer_0.ty(1737887414);
    sourceInformation($composer_0, 'C(Svg$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
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
      $composer_0.yy();
    }
    var tmp0_safe_receiver = $composer_0.uy();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r1d(Svg$composable$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Path$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-132115974);
    sourceInformation($composer_0, 'C(Path$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(scope) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-132115974, $dirty, -1, 'com.varabyte.kobweb.compose.dom.Path$composable (Svg.kt:425)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(scope);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.varabyte.kobweb.compose.dom.Path$composable.<anonymous>' call
        var value = Path$composable$lambda(scope);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var tmp_1 = tmp0;
      GenericTag$composable('path', 'http://www.w3.org/2000/svg', tmp_1, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    var tmp0_safe_receiver = $composer_0.uy();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r1d(Path$composable$lambda_0(_this__u8e3s4, scope, $changed));
    }
  }
  function SVGPathScope(attrs) {
    SVGShapeElementScope.call(this, attrs);
    this.w2m_1 = attrs;
    this.x2m_1 = 8;
  }
  function SVGShapeElementScope(attrs) {
    SVGElementScope.call(this, attrs);
    this.d2n_1 = 0;
  }
  function SVGElementScope(attrs) {
    this.y2m_1 = attrs;
    this.z2m_1 = 8;
  }
  protoOf(SVGElementScope).a2n = function (name, value) {
    this.y2m_1.h1z(name, value);
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
  function loadDataUrlFromDisk(_this__u8e3s4, accept, onLoaded) {
    accept = accept === VOID ? '' : accept;
    var tmp = FileReader$readAsDataURL$ref();
    loadFromDisk(_this__u8e3s4, accept, tmp, loadDataUrlFromDisk$lambda, onLoaded);
  }
  function LoadContext(filename, mimeType) {
    this.e2n_1 = filename;
    this.f2n_1 = mimeType;
    this.g2n_1 = 0;
  }
  function loadFromDisk(_this__u8e3s4, accept, triggerLoad, deserialize, onLoading) {
    accept = accept === VOID ? '' : accept;
    // Inline function 'kotlin.apply' call
    var tmp = _this__u8e3s4.createElement('input');
    var tmp0_apply = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.file.loadFromDisk.<anonymous>' call
    tmp0_apply.type = 'file';
    tmp0_apply.style.display = 'none';
    tmp0_apply.accept = accept;
    tmp0_apply.multiple = false;
    var tempInput = tmp0_apply;
    tempInput.onchange = loadFromDisk$lambda(triggerLoad, onLoading, deserialize);
    ensureNotNull(_this__u8e3s4.body).append(tempInput);
    tempInput.click();
    tempInput.remove();
  }
  function FileReader$readAsDataURL$ref() {
    var l = function (p0, p1) {
      p0.readAsDataURL(p1);
      return Unit_getInstance();
    };
    l.callableName = 'readAsDataURL';
    return l;
  }
  function loadDataUrlFromDisk$lambda(result) {
    return result;
  }
  function loadFromDisk$lambda$lambda($onLoading, $file, $deserialize) {
    return function (loadEvt) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = loadEvt.target;
      tmp$ret$0 = tmp0_asDynamic;
      var tmp = tmp$ret$0.result;
      var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp_0 = $file.name;
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      var tmp1_takeIf = $file.type;
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.file.loadFromDisk.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$1 = !isBlank(tmp1_takeIf);
      tmp$ret$2 = tmp$ret$1;
      if (tmp$ret$2) {
        tmp_1 = tmp1_takeIf;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      $onLoading(new LoadContext(tmp_0, tmp$ret$3), $deserialize(result));
      return Unit_getInstance();
    };
  }
  function loadFromDisk$lambda($triggerLoad, $onLoading, $deserialize) {
    return function (changeEvt) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = changeEvt.target;
      tmp$ret$0 = tmp0_asDynamic;
      var tmp = tmp$ret$0.files[0];
      var file = tmp instanceof File ? tmp : THROW_CCE();
      var reader = new FileReader();
      reader.onload = loadFromDisk$lambda$lambda($onLoading, file, $deserialize);
      $triggerLoad(reader, file);
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
        var tmp0_iterator = headers.u1().c();
        while (tmp0_iterator.d()) {
          var tmp1_loop_parameter = tmp0_iterator.e();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.t1();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.w1();
          tmp0_apply[key] = value;
        }
      }
      tmp = tmp0_apply;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var tmp1_RequestInit = method.z4_1;
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
      requestInitDynamic['signal'] = abortController.i2n_1;
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.vn($completion);
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
    tmp0_apply.q6('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
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
      tmp0_apply.o5(_Char___init__impl__6a9atx(10));
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
      tmp0_apply.q6(boundary).o5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        tmp0_apply.q6(tmp0_appendLine).o5(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.q6(boundary).o5(_Char___init__impl__6a9atx(10));
    }
    tmp$ret$15 = tmp0_apply.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.a2o_1 = response;
    this.b2o_1 = bodyBytes;
    this.c2o_1 = 0;
  }
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.wn(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.yn(new ResponseException($res, bodyBytes));
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
      return $responseBytesDeferred.yn(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.u2o_1 = $result;
    this.v2o_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(getBodyBytesAsync$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = getBodyBytes(this.v2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.u2o_1(ARGUMENT);
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
  protoOf(getBodyBytesAsync$slambda).l1f = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.u2o_1, this.v2o_1, completion);
    i.w2o_1 = $this$launch;
    return i;
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
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
      $safe.t3(tmp$ret$3);
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
      $safe.t3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2n_1 = _this__u8e3s4;
    this.t2n_1 = method;
    this.u2n_1 = resource;
    this.v2n_1 = headers;
    this.w2n_1 = body;
    this.x2n_1 = logOnError;
    this.y2n_1 = abortController;
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
            suspendResult = fetch(this.s2n_1, this.t2n_1, this.u2n_1, this.v2n_1, this.w2n_1, this.y2n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z2n_1 = suspendResult;
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_0 = this.vh_1;
            if (tmp_0 instanceof Error) {
              var t = this.vh_1;
              var tmp_1 = this;
              if (this.x2n_1) {
                console.log('Error fetching resource "' + this.u2n_1 + '"\n\n' + t);
              }
              tmp_1.z2n_1 = null;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.z2n_1;
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
    this.l2o_1 = _this__u8e3s4;
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
            var tmp_0 = this.l2o_1.arrayBuffer();
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
    return http$delegate.w1();
  }
  var http$delegate;
  function HttpFetcher(window_0) {
    this.x2o_1 = window_0;
    this.y2o_1 = false;
    this.z2o_1 = 8;
  }
  protoOf(HttpFetcher).a2p = function (resource, headers, abortController, $completion) {
    return fetch(this.x2o_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).b2p = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.a2p(resource, headers, abortController, $completion) : $super.a2p.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).c2p = function (resource, headers, abortController, $completion) {
    return tryFetch(this.x2o_1, HttpMethod_GET_getInstance(), resource, headers, null, this.y2o_1, abortController, $completion);
  };
  protoOf(HttpFetcher).d2p = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.x2o_1, HttpMethod_POST_getInstance(), resource, headers, body, this.y2o_1, abortController, $completion);
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
          tmp0_apply.q6('-');
        }
      }
      var tmp$ret$5;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = toString_0(item).toLowerCase();
      tmp0_apply.q6(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return tmp0_apply.toString();
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).u1z = classes;
  protoOf(ComparableAttrsScope).v1z = id;
  protoOf(ComparableAttrsScope).w1z = tabIndex;
  protoOf(ComparableAttrsScope).x1z = spellCheck;
  protoOf(ComparableAttrsScope).a20 = onClick;
  protoOf(ComparableAttrsScope).b20 = onKeyDown;
  protoOf(ComparableAttrsScope).c20 = onKeyUp;
  protoOf(ComparableAttrsScope).d20 = onFocusIn;
  protoOf(ComparableAttrsScope).e20 = onFocusOut;
  protoOf(DummyAttrsScope).u1z = classes;
  protoOf(DummyAttrsScope).v1z = id;
  protoOf(DummyAttrsScope).w1z = tabIndex;
  protoOf(DummyAttrsScope).x1z = spellCheck;
  protoOf(DummyAttrsScope).a20 = onClick;
  protoOf(DummyAttrsScope).b20 = onKeyDown;
  protoOf(DummyAttrsScope).c20 = onKeyUp;
  protoOf(DummyAttrsScope).d20 = onFocusIn;
  protoOf(DummyAttrsScope).e20 = onFocusOut;
  protoOf(CalcScopeInstance).d2g = unaryMinus;
  protoOf(ComparableStyleScope).s28 = property;
  protoOf(ComparableStyleScope).t28 = property_0;
  protoOf(ComparableStyleScope).y28 = variable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CSSTransition;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_1;
  _.$_$.e = StyleVariable_0;
  _.$_$.f = borderBottom;
  _.$_$.g = borderColor;
  _.$_$.h = borderStyle;
  _.$_$.i = borderTop;
  _.$_$.j = boxShadow;
  _.$_$.k = boxSizing_0;
  _.$_$.l = calc;
  _.$_$.m = cursor;
  _.$_$.n = disabled;
  _.$_$.o = fontWeight;
  _.$_$.p = gridTemplateColumns_0;
  _.$_$.q = grid;
  _.$_$.r = isNotEmpty;
  _.$_$.s = justifyItems;
  _.$_$.t = justifySelf;
  _.$_$.u = listStyle;
  _.$_$.v = objectFit;
  _.$_$.w = outline;
  _.$_$.x = overflowY;
  _.$_$.y = overflow;
  _.$_$.z = paddingInline;
  _.$_$.a1 = resize;
  _.$_$.b1 = scrollBehavior;
  _.$_$.c1 = setVariable;
  _.$_$.d1 = setVariable_0;
  _.$_$.e1 = textAlign;
  _.$_$.f1 = textDecorationLine;
  _.$_$.g1 = textOverflow;
  _.$_$.h1 = transition;
  _.$_$.i1 = translateX;
  _.$_$.j1 = userSelect;
  _.$_$.k1 = verticalAlign;
  _.$_$.l1 = visibility;
  _.$_$.m1 = whiteSpace;
  _.$_$.n1 = zIndex;
  _.$_$.o1 = Path$composable;
  _.$_$.p1 = Svg$composable;
  _.$_$.q1 = refScope;
  _.$_$.r1 = registerRefScope$composable;
  _.$_$.s1 = registerRefScope$composable_0;
  _.$_$.t1 = loadDataUrlFromDisk;
  _.$_$.u1 = get_http;
  _.$_$.v1 = titleCamelCaseToKebabCase;
  _.$_$.w1 = ComparableAttrsScope_init_$Create$;
  _.$_$.x1 = CSSTransition_init_$Create$;
  _.$_$.y1 = Companion_getInstance_4;
  _.$_$.z1 = Companion_getInstance_20;
  _.$_$.a2 = Companion_getInstance_5;
  _.$_$.b2 = Companion_getInstance_6;
  _.$_$.c2 = Companion_getInstance_2;
  _.$_$.d2 = Companion_getInstance_3;
  _.$_$.e2 = Companion_getInstance_11;
  _.$_$.f2 = Companion_getInstance_12;
  _.$_$.g2 = Companion_getInstance_13;
  _.$_$.h2 = Companion_getInstance_10;
  _.$_$.i2 = Companion_getInstance_14;
  _.$_$.j2 = Companion_getInstance_17;
  _.$_$.k2 = Companion_getInstance_18;
  _.$_$.l2 = Companion_getInstance_19;
  _.$_$.m2 = Companion_getInstance_21;
  _.$_$.n2 = Companion_getInstance_15;
  _.$_$.o2 = Companion_getInstance_9;
  _.$_$.p2 = Companion_getInstance_22;
  _.$_$.q2 = Companion_getInstance_16;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
