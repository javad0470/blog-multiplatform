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
  var protoOf = kotlin_kotlin.$_$.lb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.fa;
  var hashCode = kotlin_kotlin.$_$.la;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var classMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.cg;
  var setMetadataFor = kotlin_kotlin.$_$.mb;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var objectMeta = kotlin_kotlin.$_$.kb;
  var THROW_ISE = kotlin_kotlin.$_$.ue;
  var enumEntries = kotlin_kotlin.$_$.r9;
  var Enum = kotlin_kotlin.$_$.ie;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.a9;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.v8;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.l7;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r8;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.k7;
  var Number_0 = kotlin_kotlin.$_$.pe;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var toString = kotlin_kotlin.$_$.qb;
  var interfaceMeta = kotlin_kotlin.$_$.na;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.s6;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t6;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.v6;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u6;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.r6;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.q6;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.p6;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.x6;
  var copyToArray = kotlin_kotlin.$_$.o6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.te;
  var Annotation = kotlin_kotlin.$_$.de;
  var lastOrNull = kotlin_kotlin.$_$.l7;
  var get_lastIndex = kotlin_kotlin.$_$.j7;
  var joinToString_0 = kotlin_kotlin.$_$.f7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var listOf = kotlin_kotlin.$_$.o7;
  var emptyList = kotlin_kotlin.$_$.r6;
  var addAll = kotlin_kotlin.$_$.v5;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.y7;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.o7;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.z7;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.w7;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.x7;
  var listOfNotNull = kotlin_kotlin.$_$.n7;
  var isObject = kotlin_kotlin.$_$.za;
  var isNumber = kotlin_kotlin.$_$.ya;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.mf;
  var removeSuffix = kotlin_kotlin.$_$.ad;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var charSequenceGet = kotlin_kotlin.$_$.z9;
  var isWhitespace = kotlin_kotlin.$_$.vc;
  var Collection = kotlin_kotlin.$_$.z4;
  var isInterface = kotlin_kotlin.$_$.wa;
  var checkCountOverflow = kotlin_kotlin.$_$.y5;
  var checkIndexOverflow = kotlin_kotlin.$_$.z5;
  var getOrNull = kotlin_kotlin.$_$.a7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var toList = kotlin_kotlin.$_$.m8;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.g2;
  var plus = kotlin_kotlin.$_$.x7;
  var plus_0 = kotlin_kotlin.$_$.y7;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.e9;
  var TagElement$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.l9;
  var to = kotlin_kotlin.$_$.bg;
  var lazy = kotlin_kotlin.$_$.rf;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var KProperty1 = kotlin_kotlin.$_$.ec;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ja;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var isBlank = kotlin_kotlin.$_$.sc;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var json = kotlin_kotlin.$_$.db;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Exception = kotlin_kotlin.$_$.ke;
  var decodeToString = kotlin_kotlin.$_$.kc;
  var isCharSequence = kotlin_kotlin.$_$.sa;
  var trim = kotlin_kotlin.$_$.ae;
  var split = kotlin_kotlin.$_$.fd;
  var compareTo = kotlin_kotlin.$_$.da;
  var repeat = kotlin_kotlin.$_$.bd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.w9;
  var CoroutineImpl = kotlin_kotlin.$_$.m9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var intercepted = kotlin_kotlin.$_$.z8;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.n9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var isUpperCase = kotlin_kotlin.$_$.uc;
  var isLowerCase = kotlin_kotlin.$_$.tc;
  var get_lastIndex_0 = kotlin_kotlin.$_$.wc;
  var replace = kotlin_kotlin.$_$.cd;
  var last = kotlin_kotlin.$_$.yc;
  var first = kotlin_kotlin.$_$.qc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(CalcNum, 'CalcNum', classMeta, Number_0);
  function times(_this__u8e3s4, b) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(' + _this__u8e3s4 + ' * ' + toString(b) + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function times_0(_this__u8e3s4, unit) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(' + toString(_this__u8e3s4) + ' * ' + unit + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function div(_this__u8e3s4, num) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(' + _this__u8e3s4 + ' / ' + toString(num) + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function plus_1(_this__u8e3s4, b) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(' + _this__u8e3s4 + ' + ' + b + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function minus(_this__u8e3s4, b) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(' + _this__u8e3s4 + ' - ' + b + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
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
  function unaryPlus(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'calc(1 * ' + _this__u8e3s4 + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function num(num) {
    return new CalcNum(toString(num));
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
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(GridDslMarker, 'GridDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Resize, 'Resize', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ListStylePosition, 'ListStylePosition', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StringValue, 'StringValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Visibility, 'Visibility', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, CSSImage);
  setMetadataFor(Url, 'Url', classMeta, CSSImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Stop, 'Stop', classMeta, Color);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(SVGElementScope, 'SVGElementScope', classMeta);
  setMetadataFor(SVGShapeElementScope, 'SVGShapeElementScope', classMeta, SVGElementScope);
  setMetadataFor(SVGPathScope, 'SVGPathScope', classMeta, SVGShapeElementScope);
  setMetadataFor(PathDataScope, 'PathDataScope', classMeta);
  setMetadataFor(SVGPaintType, 'SVGPaintType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillRule, 'SVGFillRule', classMeta, Enum);
  setMetadataFor(PathDataScopeMarker, 'PathDataScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(LoadContext, 'LoadContext', classMeta);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(AbortController_0, 'AbortController', classMeta);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function get_$stableprop() {
    return 8;
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributes_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.classes_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.listeners_1 = LinkedHashSet_init_$Create$();
    this.style_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_ch8v2y_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributes_1.put_3mhbri_k$(attr, value);
    this.wrapped_1.attr_z3nk29_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_m2xsyo_k$ = function (classes) {
    this.classes_1.addAll_oxxjjk_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    this.wrapped_1.prop_mo7bqj_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    this.listeners_1.add_1j60pz_k$(listener);
    this.wrapped_1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_sa2yps_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_sa2yps_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_r9zm5w_k$ = function (effect) {
    this.wrapped_1.ref_6wvjf3_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_m2xsyo_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_sa2yps_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_r9zm5w_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_lwhspk_k$('justify-items', justifyItems);
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_362a2d_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_he27se_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function JustifyItems(value) {
    Companion_getInstance_2();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_lwhspk_k$('justify-self', justifySelf);
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function BaselineAlignment_0(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment_0(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_8ikg8d_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_23mdn8_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function JustifySelf(value) {
    Companion_getInstance_3();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  var $ENTRIES;
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = self_0.get_name_woqyms_k$().toLowerCase();
      tmp0_apply.append_ssq29y_k$(tmp$ret$1);
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_ssq29y_k$('baseline');
    return tmp0_apply.toString();
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  var $ENTRIES_0;
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.get_name_woqyms_k$().toLowerCase() + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.property_lwhspk_k$('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('border-style', lineStyle);
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
    _this__u8e3s4.property_lwhspk_k$('border-bottom', tmp0_apply);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    _this__u8e3s4.property_lwhspk_k$('border-top', tmp0_apply);
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
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_BorderBox_q3yb4a_k$ = function () {
    return new BoxSizing('border-box');
  };
  protoOf(Companion_1).get_ContentBox_h63h2z_k$ = function () {
    return new BoxSizing('content-box');
  };
  protoOf(Companion_1).get_Inherit_a1a9e6_k$ = function () {
    return new BoxSizing('inherit');
  };
  protoOf(Companion_1).get_Initial_a0h2v9_k$ = function () {
    return new BoxSizing('initial');
  };
  protoOf(Companion_1).get_Revert_3t1tzh_k$ = function () {
    return new BoxSizing('revert');
  };
  protoOf(Companion_1).get_Unset_ii4mhs_k$ = function () {
    return new BoxSizing('unset');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function BoxSizing(value) {
    Companion_getInstance_4();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.value_1;
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
      tmp0_apply.append_ssq29y_k$('inset');
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_t8pm91_k$(offsetX);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(color);
    }
    tmp$ret$1 = tmp0_apply.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('box-shadow', value);
  }
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_getInstance());
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function CalcNum(value) {
    Number_0.call(this);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CalcNum).toString = function () {
    return this.value_1;
  };
  protoOf(CalcNum).toInt_1tsl84_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toLong_edfucp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toFloat_jhbgwv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toDouble_ygsx0s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toByte_edm0nx_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).toShort_ja8oqn_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).plus_g0pz5y_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_r5k44c_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_djukqa_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_r3oq71_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  protoOf(CalcNum).unaryMinus_6uz0qp_k$ = function () {
    return new CalcNum('calc(-1 * ' + this + ')');
  };
  protoOf(CalcNum).unaryPlus_g9fn1l_k$ = function () {
    return new CalcNum('calc(1 * ' + this + ')');
  };
  protoOf(CalcNum).plus_g0q064_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_r5k54i_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_djulqg_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_r3or77_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
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
  function get_$stableprop_12() {
    return 0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.properties_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.variables_1 = LinkedHashMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_lwhspk_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.properties_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).variable_3743rz_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.variables_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.properties_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.variables_1.isEmpty_y1axqb_k$();
    }
    return tmp;
  }
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_2).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_2).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_2).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_2).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_2).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_2).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_2).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_2).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_2).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_2).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_2).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_2).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_2).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_2).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_2).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_2).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_2).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_2).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_2).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_2).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_2).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_2).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_2).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_2).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_2).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_2).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_2).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_2).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_2).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_2).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_2).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_2).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_2).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_2).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function Cursor(value) {
    Companion_getInstance_5();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_lwhspk_k$('cursor', cursor);
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Thin_woai2q_k$ = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_3).get_ExtraLight_ov7yxb_k$ = function () {
    return new FontWeight('200');
  };
  protoOf(Companion_3).get_Light_id31e5_k$ = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_3).get_Medium_1fiba6_k$ = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_3).get_SemiBold_aid1c4_k$ = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_3).get_ExtraBold_xklwd0_k$ = function () {
    return new FontWeight('800');
  };
  protoOf(Companion_3).get_Black_i7mvue_k$ = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_3).get_ExtraBlack_oprtdk_k$ = function () {
    return new FontWeight('950');
  };
  protoOf(Companion_3).get_Normal_22avww_k$ = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_3).get_Bold_wnz5ke_k$ = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_3).get_Lighter_vm6n22_k$ = function () {
    return new FontWeight('lighter');
  };
  protoOf(Companion_3).get_Bolder_3mclb9_k$ = function () {
    return new FontWeight('bolder');
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    return new FontWeight('inherit');
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    return new FontWeight('initial');
  };
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = function () {
    return new FontWeight('revert');
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    return new FontWeight('unset');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function FontWeight(value) {
    Companion_getInstance_6();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.value_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_lwhspk_k$('font-weight', weight);
  }
  function disabled(_this__u8e3s4) {
    _this__u8e3s4.attr_z3nk29_k$('disabled', 'true');
  }
  function get_$stableprop_15() {
    return 0;
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridTrackBuilder).repeat_iremn9_k$ = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var tmp1_toTypedArray = tmp0_apply.tracks_1;
    var repeatTracks = copyToArray(tmp1_toTypedArray);
    this.tracks_1.add_1j60pz_k$(Companion_getInstance_8().repeat_vk9ufv_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_s4mbx9_k$ = function (type, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var tmp1_toTypedArray = tmp0_apply.tracks_1;
    var repeatTracks = copyToArray(tmp1_toTypedArray);
    this.tracks_1.add_1j60pz_k$(Companion_getInstance_8().repeat_px5yp9_k$(type, repeatTracks.slice()));
  };
  function get_$stableprop_16() {
    return 8;
  }
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tracks_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_7().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_7().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_7().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_k3cuq9_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_527vur_k$ = function (track) {
    this.tracks_1.add_1j60pz_k$(track);
  };
  protoOf(GridTrackBuilderInRepeat).size_6a7122_k$ = function (value) {
    return this.size_527vur_k$(Companion_getInstance_7().invoke_hkq2lq_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_1hd6kw_k$ = function (value) {
    return this.size_527vur_k$(Companion_getInstance_7().invoke_x6prq0_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_8l4mpf_k$ = function (value) {
    return this.size_527vur_k$(Companion_getInstance_7().fitContent_73iiqm_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_kyd3yx_k$ = function (min, max) {
    return this.size_527vur_k$(Companion_getInstance_7().minmax_ujylyi_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_y72wdf_k$ = function (min, max) {
    return this.size_527vur_k$(Companion_getInstance_7().minmax_ujylyi_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_lf3wfg_k$ = function (min, max) {
    return this.minmax_kyd3yx_k$(min, Companion_getInstance_7().invoke_x6prq0_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_95naki_k$ = function (min, max) {
    return this.minmax_kyd3yx_k$(min, Companion_getInstance_7().invoke_hkq2lq_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_dhahqc_k$ = function (min, max) {
    return this.minmax_y72wdf_k$(Companion_getInstance_7().invoke_hkq2lq_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_3am13n_k$ = function (min, max) {
    return this.minmax_y72wdf_k$(Companion_getInstance_7().invoke_hkq2lq_k$(min), Companion_getInstance_7().invoke_hkq2lq_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_ye66s7_k$ = function (min, max) {
    return this.minmax_y72wdf_k$(Companion_getInstance_7().invoke_hkq2lq_k$(min), Companion_getInstance_7().invoke_x6prq0_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).lineNames_dv7qoq_k$ = function (names) {
    this.tracks_1.add_1j60pz_k$(Companion_getInstance_8().lineNames_dnbafd_k$(names.slice()));
  };
  function get_$stableprop_17() {
    return 0;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function FitContent(value) {
    TrackSize.call(this, 'fit-content(' + value + ')');
    this.$stable_3 = 0;
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.min_1 = min;
    this.max_1 = max;
    this.$stable_3 = 0;
  }
  protoOf(MinMax).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  function Flex(value) {
    TrackSize.call(this, value);
    this.$stable_3 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.$stable_3 = 0;
  }
  function Keyword(value) {
    Inflexible.call(this, value);
    this.$stable_4 = 0;
  }
  function Fixed(value) {
    Inflexible.call(this, value);
    this.$stable_4 = 0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_Auto_wnyn88_k$ = function () {
    return new Keyword('auto');
  };
  protoOf(Companion_4).get_MinContent_hspenk_k$ = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_4).get_MaxContent_n32482_k$ = function () {
    return new Keyword('max-content');
  };
  protoOf(Companion_4).invoke_hkq2lq_k$ = function (value) {
    return new Fixed(toString(value));
  };
  protoOf(Companion_4).invoke_x6prq0_k$ = function (value) {
    return new Flex(toString(value));
  };
  protoOf(Companion_4).minmax_ujylyi_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_4).fitContent_73iiqm_k$ = function (value) {
    return new FitContent(value);
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0, 'auto-fill');
    Type_AutoFit_instance = new Type('AutoFit', 1, 'auto-fit');
  }
  var $ENTRIES_1;
  function Type(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Type).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_25() {
    return 0;
  }
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
    this.$stable_3 = 0;
  }
  function Auto(type, entries) {
    Repeat.call(this, type, entries);
    this.$stable_3 = 0;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function TrackSize(value) {
    Companion_getInstance_7();
    GridEntry.call(this, value);
    this.$stable_2 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.entries_1 = entries;
    this.$stable_2 = 0;
  }
  protoOf(Repeat).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.names_1 = names;
    this.$stable_2 = 0;
  }
  protoOf(LineNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).repeat_vk9ufv_k$ = function (count, entries) {
    return new Track(count, entries.slice());
  };
  protoOf(Companion_5).repeat_px5yp9_k$ = function (type, entries) {
    return new Auto(type, entries.slice());
  };
  protoOf(Companion_5).lineNames_dnbafd_k$ = function (names) {
    return new LineNames(names.slice());
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function GridEntry(value) {
    Companion_getInstance_8();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.value_1;
  };
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    other instanceof GridDslMarker || THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker()';
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
        var tmp0_plus = prev.names_1;
        var tmp1_plus = element.names_1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_plus.concat(tmp1_plus);
        tmp1_anonymous.set_meu351_k$(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        tmp1_anonymous.add_1j60pz_k$(element);
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
            var tmp0_filterIsInstance = element.entries_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0_filterIsInstance.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0_filterIsInstance[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                tmp0_filterIsInstanceTo.add_1j60pz_k$(element_0);
              }
            }
            var tmp_0;
            if (tmp0_filterIsInstanceTo.isEmpty_y1axqb_k$()) {
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
    if (!!trackSizes.isEmpty_y1axqb_k$()) {
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
    var tmp0_iterator = trackSizes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator.next_20eer_k$();
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
                var tmp_2 = element_2.min_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.max_1;
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
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(tmp0_apply.tracks_1));
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
    tmp0_apply.buildInto_4p4aiu_k$(_this__u8e3s4);
  }
  function get_$stableprop_29() {
    return 0;
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridBuilder).auto_d25ild_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.autoBuilder_1 = tmp0_apply;
  };
  function get_$stableprop_30() {
    return 8;
  }
  function GridBuilderInAuto() {
    this.cols_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(GridBuilderInAuto).set_cols_bzfeb1_k$ = function (_set____db54di) {
    this.cols_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_cols_wok858_k$ = function () {
    return this.cols_1;
  };
  protoOf(GridBuilderInAuto).set_rows_te20jr_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_jqzsk7_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).col_ok4zvf_k$ = function (value) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.col.<anonymous>' call
    tmp0_apply.size_6a7122_k$(value);
    tmp.cols_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).col_4dqgcv_k$ = function (value) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.col.<anonymous>' call
    tmp0_apply.size_1hd6kw_k$(value);
    tmp.cols_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).row_k6ojpb_k$ = function (value) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.row.<anonymous>' call
    tmp0_apply.size_6a7122_k$(value);
    tmp.rows_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).row_dhw6h_k$ = function (value) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.row.<anonymous>' call
    tmp0_apply.size_1hd6kw_k$(value);
    tmp.rows_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).cols_7660aa_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.cols_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_hrwja0_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp.rows_1 = tmp0_apply.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_4p4aiu_k$ = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.cols_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.cols_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
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
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.property_lwhspk_k$('vertical-align', verticalAlign);
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.property_nit37e_k$('z-index', value);
  }
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_None_wo6tgh_k$ = function () {
    return new Resize('none');
  };
  protoOf(Companion_6).get_Both_wnz5re_k$ = function () {
    return new Resize('both');
  };
  protoOf(Companion_6).get_Horizontal_zacjeb_k$ = function () {
    return new Resize('horizontal');
  };
  protoOf(Companion_6).get_Vertical_7hctpb_k$ = function () {
    return new Resize('vertical');
  };
  protoOf(Companion_6).get_Block_i7n684_k$ = function () {
    return new Resize('block');
  };
  protoOf(Companion_6).get_Inline_bkx8e_k$ = function () {
    return new Resize('inline');
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    return new Resize('inherit');
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    return new Resize('initial');
  };
  protoOf(Companion_6).get_Revert_3t1tzh_k$ = function () {
    return new Resize('revert');
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    return new Resize('unset');
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_31() {
    return 0;
  }
  function Resize(value) {
    Companion_getInstance_9();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Resize).toString = function () {
    return this.value_1;
  };
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('padding-inline', joinToString(value, ' '));
  }
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_Baseline_bu5gku_k$ = function () {
    return new VerticalAlign('baseline');
  };
  protoOf(Companion_7).get_Sub_18jjnt_k$ = function () {
    return new VerticalAlign('sub');
  };
  protoOf(Companion_7).get_Super_ih5fzm_k$ = function () {
    return new VerticalAlign('super');
  };
  protoOf(Companion_7).get_TextTop_5chtr3_k$ = function () {
    return new VerticalAlign('text-top');
  };
  protoOf(Companion_7).get_TextBottom_zaoo69_k$ = function () {
    return new VerticalAlign('text-bottom');
  };
  protoOf(Companion_7).get_Middle_1hpdq6_k$ = function () {
    return new VerticalAlign('middle');
  };
  protoOf(Companion_7).get_Top_18jj1w_k$ = function () {
    return new VerticalAlign('top');
  };
  protoOf(Companion_7).get_Bottom_3m75bg_k$ = function () {
    return new VerticalAlign('bottom');
  };
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = function () {
    return new VerticalAlign('inherit');
  };
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = function () {
    return new VerticalAlign('initial');
  };
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = function () {
    return new VerticalAlign('revert');
  };
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = function () {
    return new VerticalAlign('unset');
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function VerticalAlign(value) {
    Companion_getInstance_10();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.value_1;
  };
  function resize(_this__u8e3s4, resize) {
    _this__u8e3s4.property_lwhspk_k$('resize', resize);
  }
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).of_yqlxgq_k$ = function (text) {
    return new ListStyleType(wrapQuotesIfNecessary(text));
  };
  protoOf(Companion_8).get_ArabicIndic_7dczms_k$ = function () {
    return new ListStyleType('arabic-indic');
  };
  protoOf(Companion_8).get_Armenian_glp6oq_k$ = function () {
    return new ListStyleType('armenian');
  };
  protoOf(Companion_8).get_Bengali_p42yft_k$ = function () {
    return new ListStyleType('bengali');
  };
  protoOf(Companion_8).get_Cambodian_yjaltx_k$ = function () {
    return new ListStyleType('cambodian');
  };
  protoOf(Companion_8).get_Circle_38hx53_k$ = function () {
    return new ListStyleType('circle');
  };
  protoOf(Companion_8).get_CjkDecimal_eqj52u_k$ = function () {
    return new ListStyleType('cjk-decimal');
  };
  protoOf(Companion_8).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    return new ListStyleType('cjk-earthly-branch');
  };
  protoOf(Companion_8).get_CjkHeavenlyStem_v60yes_k$ = function () {
    return new ListStyleType('cjk-heavenly-stem');
  };
  protoOf(Companion_8).get_CjkIdeographic_325ofc_k$ = function () {
    return new ListStyleType('cjk-ideographic');
  };
  protoOf(Companion_8).get_Decimal_gq8r08_k$ = function () {
    return new ListStyleType('decimal');
  };
  protoOf(Companion_8).get_DecimalLeadingZero_5q6aue_k$ = function () {
    return new ListStyleType('decimal-leading-zero');
  };
  protoOf(Companion_8).get_Devanagari_fiqhev_k$ = function () {
    return new ListStyleType('devanagari');
  };
  protoOf(Companion_8).get_Disc_wo0b9a_k$ = function () {
    return new ListStyleType('disc');
  };
  protoOf(Companion_8).get_DisclosureClosed_juf1pa_k$ = function () {
    return new ListStyleType('disclosure-closed');
  };
  protoOf(Companion_8).get_DisclosureOpen_l759fk_k$ = function () {
    return new ListStyleType('disclosure-open');
  };
  protoOf(Companion_8).get_Georgian_4lk93_k$ = function () {
    return new ListStyleType('georgian');
  };
  protoOf(Companion_8).get_Gujarati_j012pe_k$ = function () {
    return new ListStyleType('gujarati');
  };
  protoOf(Companion_8).get_Gurumukhi_5jh3xm_k$ = function () {
    return new ListStyleType('gurumukhi');
  };
  protoOf(Companion_8).get_Hebrew_xqwd4_k$ = function () {
    return new ListStyleType('hebrew');
  };
  protoOf(Companion_8).get_Hiragana_hja76u_k$ = function () {
    return new ListStyleType('hiragana');
  };
  protoOf(Companion_8).get_HiraganaIroha_z3xrq1_k$ = function () {
    return new ListStyleType('hiragana-iroha');
  };
  protoOf(Companion_8).get_JapaneseFormal_srlfzd_k$ = function () {
    return new ListStyleType('japanese-formal');
  };
  protoOf(Companion_8).get_JapaneseInformal_8qufwu_k$ = function () {
    return new ListStyleType('japanese-informal');
  };
  protoOf(Companion_8).get_Kannada_d9ddmn_k$ = function () {
    return new ListStyleType('kannada');
  };
  protoOf(Companion_8).get_Katakana_cguuob_k$ = function () {
    return new ListStyleType('katakana');
  };
  protoOf(Companion_8).get_KatakanaIroha_xgvh3q_k$ = function () {
    return new ListStyleType('katakana-iroha');
  };
  protoOf(Companion_8).get_Khmer_iciq6s_k$ = function () {
    return new ListStyleType('khmer');
  };
  protoOf(Companion_8).get_KoreanHangulFormal_rvp4md_k$ = function () {
    return new ListStyleType('korean-hangul-formal');
  };
  protoOf(Companion_8).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    return new ListStyleType('korean-hanja-formal');
  };
  protoOf(Companion_8).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    return new ListStyleType('korean-hanja-informal');
  };
  protoOf(Companion_8).get_Lao_18jpbj_k$ = function () {
    return new ListStyleType('lao');
  };
  protoOf(Companion_8).get_LowerAlpha_wmhyme_k$ = function () {
    return new ListStyleType('lower-alpha');
  };
  protoOf(Companion_8).get_LowerArmenian_u6eqrt_k$ = function () {
    return new ListStyleType('lower-armenian');
  };
  protoOf(Companion_8).get_LowerGreek_wpwbvs_k$ = function () {
    return new ListStyleType('lower-greek');
  };
  protoOf(Companion_8).get_LowerLatin_wscrak_k$ = function () {
    return new ListStyleType('lower-latin');
  };
  protoOf(Companion_8).get_LowerRoman_wvwbad_k$ = function () {
    return new ListStyleType('lower-roman');
  };
  protoOf(Companion_8).get_Malayalam_4qmsf2_k$ = function () {
    return new ListStyleType('malayalam');
  };
  protoOf(Companion_8).get_Mongolian_e4gexh_k$ = function () {
    return new ListStyleType('mongolian');
  };
  protoOf(Companion_8).get_Myanmar_h909b8_k$ = function () {
    return new ListStyleType('myanmar');
  };
  protoOf(Companion_8).get_Oriya_iew7xh_k$ = function () {
    return new ListStyleType('oriya');
  };
  protoOf(Companion_8).get_Persian_hkpriv_k$ = function () {
    return new ListStyleType('persian');
  };
  protoOf(Companion_8).get_SimpChineseFormal_vtcj22_k$ = function () {
    return new ListStyleType('simp-chinese-formal');
  };
  protoOf(Companion_8).get_SimpChineseInformal_q999un_k$ = function () {
    return new ListStyleType('simp-chinese-informal');
  };
  protoOf(Companion_8).get_Square_4go9ja_k$ = function () {
    return new ListStyleType('square');
  };
  protoOf(Companion_8).get_Tamil_ihcepm_k$ = function () {
    return new ListStyleType('tamil');
  };
  protoOf(Companion_8).get_Telugu_4qz0i9_k$ = function () {
    return new ListStyleType('telugu');
  };
  protoOf(Companion_8).get_Thai_woahvp_k$ = function () {
    return new ListStyleType('thai');
  };
  protoOf(Companion_8).get_TradChineseFormal_7jy5gu_k$ = function () {
    return new ListStyleType('trad-chinese-formal');
  };
  protoOf(Companion_8).get_TradChineseInformal_j8y7ih_k$ = function () {
    return new ListStyleType('trad-chinese-informal');
  };
  protoOf(Companion_8).get_UpperAlpha_f6mwsb_k$ = function () {
    return new ListStyleType('upper-alpha');
  };
  protoOf(Companion_8).get_UpperArmenian_gf87di_k$ = function () {
    return new ListStyleType('upper-armenian');
  };
  protoOf(Companion_8).get_UpperGreek_f38jix_k$ = function () {
    return new ListStyleType('upper-greek');
  };
  protoOf(Companion_8).get_UpperLatin_f0s445_k$ = function () {
    return new ListStyleType('upper-latin');
  };
  protoOf(Companion_8).get_UpperRoman_ex8k4c_k$ = function () {
    return new ListStyleType('upper-roman');
  };
  protoOf(Companion_8).get_None_wo6tgh_k$ = function () {
    return new ListStyleType('none');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new ListStyleType('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new ListStyleType('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new ListStyleType('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new ListStyleType('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_33() {
    return 0;
  }
  function ListStyleType(value) {
    Companion_getInstance_11();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Inside_bggkb_k$ = function () {
    return new ListStylePosition('inside');
  };
  protoOf(Companion_9).get_Outside_ai50v0_k$ = function () {
    return new ListStylePosition('outside');
  };
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = function () {
    return new ListStylePosition('inherit');
  };
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = function () {
    return new ListStylePosition('initial');
  };
  protoOf(Companion_9).get_Revert_3t1tzh_k$ = function () {
    return new ListStylePosition('revert');
  };
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = function () {
    return new ListStylePosition('unset');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function ListStylePosition(value) {
    Companion_getInstance_12();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStylePosition).toString = function () {
    return this.value_1;
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
      _this__u8e3s4.property_lwhspk_k$('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_lwhspk_k$('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_lwhspk_k$('list-style-image', image);
    }
  }
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_10).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_10).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_10).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_10).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_10).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_10).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_10).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_10).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function ObjectFit(value) {
    Companion_getInstance_13();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_lwhspk_k$('object-fit', objectFit);
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
    _this__u8e3s4.property_lwhspk_k$('outline', tmp0_apply);
  }
  function get_$stableprop_36() {
    return 8;
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSOutline).set_width_63m8iw_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_eysa9r_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_ynz953_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Visible_yikvpz_k$ = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_11).get_Hidden_viqel_k$ = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_11).get_Clip_wnzq9l_k$ = function () {
    return new Overflow('clip');
  };
  protoOf(Companion_11).get_Scroll_48xiie_k$ = function () {
    return new Overflow('scroll');
  };
  protoOf(Companion_11).get_Auto_wnyn88_k$ = function () {
    return new Overflow('auto');
  };
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = function () {
    return new Overflow('inherit');
  };
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = function () {
    return new Overflow('initial');
  };
  protoOf(Companion_11).get_Revert_3t1tzh_k$ = function () {
    return new Overflow('revert');
  };
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = function () {
    return new Overflow('unset');
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function get_$stableprop_37() {
    return 0;
  }
  function Overflow(value) {
    Companion_getInstance_14();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.value_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.property_lwhspk_k$('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_lwhspk_k$('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.property_lwhspk_k$('overflow', overflow);
  }
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_Auto_wnyn88_k$ = function () {
    return new ScrollBehavior('auto');
  };
  protoOf(Companion_12).get_Smooth_4edjo7_k$ = function () {
    return new ScrollBehavior('smooth');
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return new ScrollBehavior('inherit');
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return new ScrollBehavior('initial');
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return new ScrollBehavior('revert');
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return new ScrollBehavior('unset');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function get_$stableprop_38() {
    return 0;
  }
  function ScrollBehavior(value) {
    Companion_getInstance_15();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.value_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.property_lwhspk_k$('scroll-behavior', scrollBehavior);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_nit37e_k$('--' + variable.name_1, value);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_lwhspk_k$('--' + variable.name_1, value);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).getValue_1h979_k$ = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function get_$stableprop_40() {
    return 0;
  }
  function get_$stableprop_41() {
    return 0;
  }
  function get_$stableprop_42() {
    return 0;
  }
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
    this.$stable_2 = 0;
  }
  protoOf(PropertyValue).value_nbkpaf_k$ = function (fallback) {
    return this.variableValue_tjkwob_k$(fallback);
  };
  protoOf(PropertyValue).value_nbkp8p_k$ = function (fallback) {
    return this.value_nbkpaf_k$((fallback == null ? true : isObject(fallback)) ? fallback : THROW_CCE());
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
    this.$stable_2 = 0;
  }
  protoOf(NumberValue).value_nbkpaf_k$ = function (fallback) {
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
    return this.variableValue_tjkwob_k$(tmp);
  };
  protoOf(NumberValue).value_nbkp8p_k$ = function (fallback) {
    return this.value_nbkpaf_k$((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StringValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
    this.$stable_2 = 0;
  }
  protoOf(StringValue).value_xj3dn3_k$ = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_tjkwob_k$(tmp);
  };
  protoOf(StringValue).value_nbkp8p_k$ = function (fallback) {
    return this.value_xj3dn3_k$((fallback == null ? true : typeof fallback === 'string') ? fallback : THROW_CCE());
  };
  function get_$stableprop_43() {
    return 0;
  }
  function StyleVariable(name, defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
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
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable).value$default_x2j5m8_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_nbkp8p_k$(fallback) : $super.value_nbkp8p_k$.call(this, fallback);
  };
  protoOf(StyleVariable).variableValue_tjkwob_k$ = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.defaultFallback_1 : fallback;
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
    return 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function _get_defaultFallback__wdjuwe_1($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).getValue_1h979_k$ = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      tmp0_apply.append_ssq29y_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).get_simpleName_r6f8py_k$())), '-vars'), '-variables'));
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    }
    tmp0_apply.append_ssq29y_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return tmp0_apply.toString();
  }
  function _get_value__a43j40_14($this) {
    return $this.value_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_13).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_13).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_13).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_13).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function get_$stableprop_45() {
    return 0;
  }
  function UserSelect(value) {
    Companion_getInstance_16();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_15($this) {
    return $this.value_1;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_Normal_22avww_k$ = function () {
    return new WhiteSpace('normal');
  };
  protoOf(Companion_14).get_NoWrap_21tqz8_k$ = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_14).get_Pre_18jlye_k$ = function () {
    return new WhiteSpace('pre');
  };
  protoOf(Companion_14).get_PreWrap_nintz8_k$ = function () {
    return new WhiteSpace('pre-wrap');
  };
  protoOf(Companion_14).get_PreLine_nigmr2_k$ = function () {
    return new WhiteSpace('pre-line');
  };
  protoOf(Companion_14).get_BreakSpaces_6b23jx_k$ = function () {
    return new WhiteSpace('break-spaces');
  };
  protoOf(Companion_14).get_Inherit_a1a9e6_k$ = function () {
    return new WhiteSpace('inherit');
  };
  protoOf(Companion_14).get_Initial_a0h2v9_k$ = function () {
    return new WhiteSpace('initial');
  };
  protoOf(Companion_14).get_Revert_3t1tzh_k$ = function () {
    return new WhiteSpace('revert');
  };
  protoOf(Companion_14).get_Unset_ii4mhs_k$ = function () {
    return new WhiteSpace('unset');
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function get_$stableprop_46() {
    return 0;
  }
  function WhiteSpace(value) {
    Companion_getInstance_17();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_16($this) {
    return $this.value_1;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_15).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_15).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_15).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_15).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_15).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_15).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_15).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function get_$stableprop_47() {
    return 0;
  }
  function TextAlign(value) {
    Companion_getInstance_18();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_17($this) {
    return $this.value_1;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_16).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_16).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_16).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_16).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_16).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_16).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_16).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function get_$stableprop_48() {
    return 0;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_19();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_lwhspk_k$('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_lwhspk_k$('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_lwhspk_k$('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_ze5ozi_k$('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_lwhspk_k$('translate', tx);
  }
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.property_ze5ozi_k$('transition', joinToString(transitions));
    }
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).group_8mv6tz_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    return copyToArray(tmp0_mapTo);
  };
  protoOf(Companion_17).group$default_tjw00v_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_8mv6tz_k$(properties, duration, timingFunction, delay) : $super.group_8mv6tz_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_17).group_xeysqd_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    return copyToArray(tmp0_mapTo);
  };
  protoOf(Companion_17).group$default_gmjvw9_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_xeysqd_k$(properties, duration, timingFunction, delay) : $super.group_xeysqd_k$.call(this, properties, duration, timingFunction, delay);
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
    CSSTransition.call($this, Companion_getInstance_21().of_yqlxgq_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function get_$stableprop_49() {
    return 0;
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_20();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.$stable_1 = 0;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    tmp0_apply.add_1j60pz_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.add_1j60pz_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp0_apply.add_1j60pz_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        tmp0_apply.add_1j60pz_k$('0s');
      }
      tmp0_apply.add_1j60pz_k$(toString(this.delay_1));
    }
    tmp$ret$6 = tmp0_apply.build_1k0s4u_k$();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_irqi13_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_o0mzgy_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_irqi13_k$(property, duration, timingFunction, delay) : $super.copy_irqi13_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function _get_value__a43j40_18($this) {
    return $this.value_1;
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).of_yqlxgq_k$ = function (customValue) {
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
  protoOf(Companion_18).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_18).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_18).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_18).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_18).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_18).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_18;
  function Companion_getInstance_21() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function get_$stableprop_50() {
    return 0;
  }
  function TransitionProperty(value) {
    Companion_getInstance_21();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_19($this) {
    return $this.value_1;
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).get_Visible_yikvpz_k$ = function () {
    return new Visibility('visible');
  };
  protoOf(Companion_19).get_Hidden_viqel_k$ = function () {
    return new Visibility('hidden');
  };
  protoOf(Companion_19).get_Collapse_tuc2om_k$ = function () {
    return new Visibility('collapse');
  };
  protoOf(Companion_19).get_Inherit_a1a9e6_k$ = function () {
    return new Visibility('inherit');
  };
  protoOf(Companion_19).get_Initial_a0h2v9_k$ = function () {
    return new Visibility('initial');
  };
  protoOf(Companion_19).get_Revert_3t1tzh_k$ = function () {
    return new Visibility('revert');
  };
  protoOf(Companion_19).get_Unset_ii4mhs_k$ = function () {
    return new Visibility('unset');
  };
  var Companion_instance_19;
  function Companion_getInstance_22() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function get_$stableprop_51() {
    return 0;
  }
  function Visibility(value) {
    Companion_getInstance_22();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Visibility).toString = function () {
    return this.value_1;
  };
  function visibility(_this__u8e3s4, visibility) {
    _this__u8e3s4.property_lwhspk_k$('visibility', visibility);
  }
  function _get_value__a43j40_20($this) {
    return $this.value_1;
  }
  function Keyword_0(value) {
    CSSImage.call(this, value);
  }
  function Url(url) {
    CSSImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).of_5r4von_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_20).of_24wexh_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_20).get_None_wo6tgh_k$ = function () {
    return new Keyword_0('none');
  };
  protoOf(Companion_20).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_0('inherit');
  };
  protoOf(Companion_20).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_0('initial');
  };
  protoOf(Companion_20).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_0('revert');
  };
  protoOf(Companion_20).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_0('unset');
  };
  var Companion_instance_20;
  function Companion_getInstance_23() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function get_$stableprop_52() {
    return 0;
  }
  function CSSImage(value) {
    Companion_getInstance_23();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSImage).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_53() {
    return 0;
  }
  function get_$stableprop_54() {
    return 0;
  }
  function get_$stableprop_55() {
    return 0;
  }
  function Simple(value) {
    Color.call(this, '' + value);
    this.$stable_2 = 0;
  }
  function Stop(color, stop) {
    Color.call(this, '' + color + ' ' + stop);
    this.$stable_2 = 0;
  }
  function StopRange(color, from, to) {
    Color.call(this, '' + color + ' ' + from + ' ' + to);
    this.$stable_2 = 0;
  }
  function get_$stableprop_56() {
    return 0;
  }
  function get_$stableprop_57() {
    return 0;
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color(value) {
    Entry.call(this, value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Color).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function get_$stableprop_58() {
    return 8;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp0_count = this.entries_1;
      var tmp;
      if (isInterface(tmp0_count, Collection)) {
        tmp = tmp0_count.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = tmp0_count.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        if (element instanceof Color) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$0 >= 2)) {
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator_0 = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp3_anonymous = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, tmp3_anonymous - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.entries_1, tmp3_anonymous + 1 | 0);
          tmp_0 = tmp_2 instanceof Color;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp_0) {
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = this.entries_1;
    return copyToArray(tmp4_toTypedArray);
  };
  protoOf(ColorStopsBuilder).add_v2zte8_k$ = function (color) {
    return this.entries_1.add_1j60pz_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_x2bhad_k$ = function (color, stop) {
    return this.entries_1.add_1j60pz_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_o340yi_k$ = function (color, from, to) {
    return this.entries_1.add_1j60pz_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_twxelb_k$ = function (hint) {
    return this.entries_1.add_1j60pz_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_59() {
    return 0;
  }
  function CSSUrl(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function registerRefScope$composable(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(886891411);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.keyedCallbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.keys_1;
      var tmp = copyToArray(tmp0_toTypedArray).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda_0;
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    registerRefScope$composable(_this__u8e3s4, scope, tmp0, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(tmp0_apply);
    return tmp0_apply.build_1k0s4u_k$();
  }
  function get_$stableprop_60() {
    return 0;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function get_$stableprop_61() {
    return 0;
  }
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
    this.$stable_1 = 0;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_1jjxys_k$ = function (scope, element) {
    this.handle_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
    this.$stable_1 = 0;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_1jjxys_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function get_$stableprop_62() {
    return 8;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_7udkeq_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_xzh8d2_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_7udkeq_k$(keys, refCallback) : $super.copy_7udkeq_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.keyedCallbacks_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(Builder).ref_djwlwl_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_wrpb68_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_wiwqkq_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_oxxjjk_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function get_$stableprop_63() {
    return 8;
  }
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
    this.$stable_1 = 8;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_9g1vtr_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_za44lh_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_9g1vtr_k$(keyedCallbacks) : $super.copy_9g1vtr_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope$composable$lambda($element, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.refCallback_1.invoke_1jjxys_k$($this$DisposableEffect, $transform($this_registerRefScope$composable.get_scopeElement_mn83kc_k$($this$DisposableEffect)));
    };
  }
  function registerRefScope$composable$lambda_0(it) {
    return it;
  }
  function get_ALPHANUMERICS() {
    _init_properties_ElementUtils_kt__9yjtit();
    return ALPHANUMERICS;
  }
  var ALPHANUMERICS;
  var properties_initialized_ElementUtils_kt_gopq0n;
  function _init_properties_ElementUtils_kt__9yjtit() {
    if (!properties_initialized_ElementUtils_kt_gopq0n) {
      properties_initialized_ElementUtils_kt_gopq0n = true;
      ALPHANUMERICS = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    }
  }
  function GenericTag$composable(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1742022847);
    sourceInformation($composer_0, 'C(GenericTag$composable)P(2,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        tmp = Companion_getInstance_24().create_o2d4ue_k$(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_25().create_b1vg3p_k$(name) : tmp1_elvis_lhs;
      TagElement$composable(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_xhrf9y_k$(GenericTag$composable$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function _get_cachedBuilders__emr31r($this) {
    return $this.cachedBuilders_1;
  }
  function _get_namespace__iwxsq2($this) {
    return $this.namespace_1;
  }
  function _get_qualifiedName__o5yty($this) {
    return $this.qualifiedName_1;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_21).create_o2d4ue_k$ = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.cachedBuilders_1;
    var tmp1_getOrPut = to(namespace, qualifiedName);
    var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
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
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    element$factory();
    return $this.element$delegate_1.get_value_j01efc_k$();
  }
  function get_$stableprop_64() {
    return 8;
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.namespace_1, this$0.qualifiedName_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_24();
    this.namespace_1 = namespace;
    this.qualifiedName_1 = qualifiedName;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(GenericNamespacedElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function _get_cachedBuilders__emr31r_0($this) {
    return $this.cachedBuilders_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_22).create_b1vg3p_k$ = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.cachedBuilders_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      tmp0_getOrPut.put_3mhbri_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_25() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    element$factory_0();
    return $this.element$delegate_1.get_value_j01efc_k$();
  }
  function get_$stableprop_65() {
    return 8;
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.name_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_25();
    this.name_1 = name;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(GenericElementBuilder).create_md4cuc_k$ = function () {
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1737887414);
    sourceInformation($composer_0, 'C(Svg$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Svg$composable$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Path$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-132115974);
    sourceInformation($composer_0, 'C(Path$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(scope) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-132115974, $dirty, -1, 'com.varabyte.kobweb.compose.dom.Path$composable (Svg.kt:425)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(scope);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.compose.dom.Path$composable.<anonymous>' call
        var value = Path$composable$lambda(scope);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_1 = tmp0;
      GenericTag$composable('path', 'http://www.w3.org/2000/svg', tmp_1, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Path$composable$lambda_0(_this__u8e3s4, scope, $changed));
    }
  }
  function _get_attrs__jrgg41($this) {
    return $this.attrs_2;
  }
  function get_$stableprop_66() {
    return 8;
  }
  function SVGPathScope(attrs) {
    SVGShapeElementScope.call(this, attrs);
    this.attrs_2 = attrs;
    this.$stable_3 = 8;
  }
  protoOf(SVGPathScope).d_xxuwux_k$ = function (scope) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new PathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    scope(tmp0_apply);
    this.attrs_2.attr_z3nk29_k$('d', joinToString_0(tmp0_apply.pathCommands_1, ' '));
  };
  function get_$stableprop_67() {
    return 0;
  }
  function SVGShapeElementScope$strokeDashArray$lambda(it) {
    return toString(it);
  }
  function SVGShapeElementScope$strokeDashArray$lambda_0(it) {
    return toString(it);
  }
  function SVGShapeElementScope(attrs) {
    SVGElementScope.call(this, attrs);
    this.$stable_2 = 0;
  }
  protoOf(SVGShapeElementScope).stroke_kdjq2y_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke', toString(value));
  };
  protoOf(SVGShapeElementScope).stroke_94elth_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke', value.toString());
  };
  protoOf(SVGShapeElementScope).strokeDashArray_4jwhtj_k$ = function (values) {
    this.attr_uf64yq_k$('stroke-dasharray', joinToString(values, ',', VOID, VOID, VOID, VOID, SVGShapeElementScope$strokeDashArray$lambda));
  };
  protoOf(SVGShapeElementScope).strokeDashArray_hp7pee_k$ = function (values) {
    this.attr_uf64yq_k$('stroke-dasharray', joinToString(values, ',', VOID, VOID, VOID, VOID, SVGShapeElementScope$strokeDashArray$lambda_0));
  };
  protoOf(SVGShapeElementScope).strokeDashOffset_eobda5_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-dashoffset', toString(value));
  };
  protoOf(SVGShapeElementScope).strokeDashOffset_2n3fge_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-dashoffset', toString(value));
  };
  protoOf(SVGShapeElementScope).strokeLineCap_1vy8nf_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-linecap', value.toString());
  };
  protoOf(SVGShapeElementScope).strokeLineJoin_o59yin_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-linejoin', value.toString());
  };
  protoOf(SVGShapeElementScope).strokeMiterLimit_qagiq4_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-miterlimit', toString(value));
  };
  protoOf(SVGShapeElementScope).strokeOpacity_umamlj_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-opacity', toString(value));
  };
  protoOf(SVGShapeElementScope).strokeWidth_z7jp0s_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-width', toString(value));
  };
  protoOf(SVGShapeElementScope).strokeWidth_xna5ar_k$ = function (value) {
    return this.attr_uf64yq_k$('stroke-width', toString(value));
  };
  protoOf(SVGShapeElementScope).fill_c7i5fj_k$ = function (value) {
    return this.attr_uf64yq_k$('fill', toString(value));
  };
  protoOf(SVGShapeElementScope).fill_uzm0f4_k$ = function (value) {
    return this.attr_uf64yq_k$('fill', value.toString());
  };
  protoOf(SVGShapeElementScope).fillRule_u3yt4f_k$ = function (value) {
    return this.attr_uf64yq_k$('fill-rule', value.toString());
  };
  protoOf(SVGShapeElementScope).fillOpacity_36bv72_k$ = function (value) {
    return this.attr_uf64yq_k$('fill-opacity', toString(value));
  };
  function get_$stableprop_68() {
    return 8;
  }
  function PathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pathCommands_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(PathDataScope).get_pathCommands_p1akmi_k$ = function () {
    return this.pathCommands_1;
  };
  protoOf(PathDataScope).moveTo_uwgwon_k$ = function (x, y) {
    this.pathCommands_1.add_1j60pz_k$('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).lineTo_ep11u4_k$ = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).lineTo$default_2510zu_k$ = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.lineTo_ep11u4_k$(x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lineTo_ep11u4_k$.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).verticalLineTo_2w68ab_k$ = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x));
  };
  protoOf(PathDataScope).verticalLineTo$default_as3qt1_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.verticalLineTo_2w68ab_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.verticalLineTo_2w68ab_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).horizontalLineTo_3mt7tt_k$ = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x));
  };
  protoOf(PathDataScope).horizontalLineTo$default_7nboir_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.horizontalLineTo_3mt7tt_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.horizontalLineTo_3mt7tt_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).curveTo_feea23_k$ = function (x1, y1, x2, y2, x, y, isRelative) {
    var command = isRelative ? 'c' : 'C';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).curveTo$default_33mgml_k$ = function (x1, y1, x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.curveTo_feea23_k$(x1, y1, x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.curveTo_feea23_k$.call(this, x1, y1, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).smoothCurveTo_y5r4j3_k$ = function (x2, y2, x, y, isRelative) {
    var command = isRelative ? 's' : 'S';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).smoothCurveTo$default_ycoosv_k$ = function (x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.smoothCurveTo_y5r4j3_k$(x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.smoothCurveTo_y5r4j3_k$.call(this, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).quadraticBezierCurve_runsl_k$ = function (x1, y1, x, y, isRelative) {
    var command = isRelative ? 'q' : 'Q';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).smoothQuadraticBezierCurve_es3iuj_k$ = function (x, y, isRelative) {
    var command = isRelative ? 't' : 'T';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).ellipticalArc_e4i9kz_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.pathCommands_1.add_1j60pz_k$(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(PathDataScope).ellipticalArc$default_blunwf_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.ellipticalArc_e4i9kz_k$(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ellipticalArc_e4i9kz_k$.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(PathDataScope).closePath_hmmm1g_k$ = function () {
    this.pathCommands_1.add_1j60pz_k$('Z');
  };
  function _get_attrs__jrgg41_0($this) {
    return $this.attrs_1;
  }
  function get_$stableprop_69() {
    return 8;
  }
  function SVGElementScope(attrs) {
    this.attrs_1 = attrs;
    this.$stable_1 = 8;
  }
  protoOf(SVGElementScope).attr_uf64yq_k$ = function (name, value) {
    this.attrs_1.attr_z3nk29_k$(name, value);
  };
  var SVGPaintType_None_instance;
  var SVGPaintType_CurrentColor_instance;
  function values_2() {
    return [SVGPaintType_None_getInstance(), SVGPaintType_CurrentColor_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'None':
        return SVGPaintType_None_getInstance();
      case 'CurrentColor':
        return SVGPaintType_CurrentColor_getInstance();
      default:
        SVGPaintType_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var SVGPaintType_entriesInitialized;
  function SVGPaintType_initEntries() {
    if (SVGPaintType_entriesInitialized)
      return Unit_getInstance();
    SVGPaintType_entriesInitialized = true;
    SVGPaintType_None_instance = new SVGPaintType('None', 0);
    SVGPaintType_CurrentColor_instance = new SVGPaintType('CurrentColor', 1);
  }
  var $ENTRIES_2;
  function SVGPaintType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGPaintType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  function values_3() {
    return [SVGStrokeLineCap_Butt_getInstance(), SVGStrokeLineCap_Round_getInstance(), SVGStrokeLineCap_Square_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Butt':
        return SVGStrokeLineCap_Butt_getInstance();
      case 'Round':
        return SVGStrokeLineCap_Round_getInstance();
      case 'Square':
        return SVGStrokeLineCap_Square_getInstance();
      default:
        SVGStrokeLineCap_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  var $ENTRIES_3;
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  function values_4() {
    return [SVGStrokeLineJoin_Miter_getInstance(), SVGStrokeLineJoin_Round_getInstance(), SVGStrokeLineJoin_Bevel_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'Miter':
        return SVGStrokeLineJoin_Miter_getInstance();
      case 'Round':
        return SVGStrokeLineJoin_Round_getInstance();
      case 'Bevel':
        return SVGStrokeLineJoin_Bevel_getInstance();
      default:
        SVGStrokeLineJoin_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  var $ENTRIES_4;
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillRule_NonZero_instance;
  var SVGFillRule_EvenOdd_instance;
  function values_5() {
    return [SVGFillRule_NonZero_getInstance(), SVGFillRule_EvenOdd_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'NonZero':
        return SVGFillRule_NonZero_getInstance();
      case 'EvenOdd':
        return SVGFillRule_EvenOdd_getInstance();
      default:
        SVGFillRule_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var SVGFillRule_entriesInitialized;
  function SVGFillRule_initEntries() {
    if (SVGFillRule_entriesInitialized)
      return Unit_getInstance();
    SVGFillRule_entriesInitialized = true;
    SVGFillRule_NonZero_instance = new SVGFillRule('NonZero', 0);
    SVGFillRule_EvenOdd_instance = new SVGFillRule('EvenOdd', 1);
  }
  var $ENTRIES_5;
  function SVGFillRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillRule).toString = function () {
    return toSvgValue(this);
  };
  function PathDataScopeMarker() {
  }
  protoOf(PathDataScopeMarker).equals = function (other) {
    if (!(other instanceof PathDataScopeMarker))
      return false;
    other instanceof PathDataScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(PathDataScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(PathDataScopeMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.dom.PathDataScopeMarker()';
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp0_replaceFirstChar = _this__u8e3s4.get_name_woqyms_k$();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_replaceFirstChar) > 0) {
      var tmp$ret$4;
      // Inline function 'com.varabyte.kobweb.compose.dom.toSvgValue.<anonymous>' call
      var tmp1_anonymous = charSequenceGet(tmp0_replaceFirstChar, 0);
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toString_0(tmp1_anonymous).toLowerCase();
      var tmp_0 = toString(tmp$ret$4);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + tmp0_replaceFirstChar.substring(1);
    } else {
      tmp = tmp0_replaceFirstChar;
    }
    return tmp;
  }
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
  function SVGPaintType_None_getInstance() {
    SVGPaintType_initEntries();
    return SVGPaintType_None_instance;
  }
  function SVGPaintType_CurrentColor_getInstance() {
    SVGPaintType_initEntries();
    return SVGPaintType_CurrentColor_instance;
  }
  function SVGStrokeLineCap_Butt_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Butt_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineCap_Square_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Square_instance;
  }
  function SVGStrokeLineJoin_Miter_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Miter_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGStrokeLineJoin_Bevel_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Bevel_instance;
  }
  function SVGFillRule_NonZero_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_NonZero_instance;
  }
  function SVGFillRule_EvenOdd_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_EvenOdd_instance;
  }
  function loadDataUrlFromDisk(_this__u8e3s4, accept, onLoaded) {
    accept = accept === VOID ? '' : accept;
    var tmp = FileReader$readAsDataURL$ref();
    loadFromDisk(_this__u8e3s4, accept, tmp, loadDataUrlFromDisk$lambda, onLoaded);
  }
  function get_$stableprop_70() {
    return 0;
  }
  function LoadContext(filename, mimeType) {
    this.filename_1 = filename;
    this.mimeType_1 = mimeType;
    this.$stable_1 = 0;
  }
  protoOf(LoadContext).get_filename_r2po7k_k$ = function () {
    return this.filename_1;
  };
  protoOf(LoadContext).get_mimeType_g7ccbb_k$ = function () {
    return this.mimeType_1;
  };
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
    if (!(headers == null ? true : headers.isEmpty_y1axqb_k$())) {
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
        var tmp0_iterator = headers.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.get_value_j01efc_k$();
          tmp0_apply[key] = value;
        }
      }
      tmp = tmp0_apply;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var tmp1_RequestInit = method.get_name_woqyms_k$();
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
      requestInitDynamic['signal'] = abortController.get_signal_jhh4tt_k$();
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.await_xhs9og_k$($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  function values_6() {
    return [HttpMethod_DELETE_getInstance(), HttpMethod_GET_getInstance(), HttpMethod_HEAD_getInstance(), HttpMethod_OPTIONS_getInstance(), HttpMethod_PATCH_getInstance(), HttpMethod_POST_getInstance(), HttpMethod_PUT_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'DELETE':
        return HttpMethod_DELETE_getInstance();
      case 'GET':
        return HttpMethod_GET_getInstance();
      case 'HEAD':
        return HttpMethod_HEAD_getInstance();
      case 'OPTIONS':
        return HttpMethod_OPTIONS_getInstance();
      case 'PATCH':
        return HttpMethod_PATCH_getInstance();
      case 'POST':
        return HttpMethod_POST_getInstance();
      case 'PUT':
        return HttpMethod_PUT_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
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
  var $ENTRIES_6;
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function get_$stableprop_71() {
    return 0;
  }
  function ResponseException(response, bodyBytes) {
    var tmp$ret$15;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
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
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var maxValue = iterator.next_20eer_k$().length;
        while (iterator.hasNext_bitz1p_k$()) {
          // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var v = iterator.next_20eer_k$().length;
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
      tmp0_apply.append_ssq29y_k$(boundary).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        tmp0_apply.append_ssq29y_k$(tmp0_appendLine).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.append_ssq29y_k$(boundary).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
    tmp$ret$15 = tmp0_apply.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
    this.$stable_1 = 0;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_8y7ynm_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_7s0ccc_k$(new ResponseException($res, bodyBytes));
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
      return $responseBytesDeferred.completeExceptionally_7s0ccc_k$(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getBodyBytesAsync$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.$result_1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(getBodyBytesAsync$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
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
      $safe.resumeWith_s3a3yh_k$(tmp$ret$3);
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
      $safe.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function HttpMethod_DELETE_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_DELETE_instance;
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_HEAD_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_HEAD_instance;
  }
  function HttpMethod_OPTIONS_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_OPTIONS_instance;
  }
  function HttpMethod_PATCH_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PATCH_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function HttpMethod_PUT_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PUT_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.resource_1 = resource;
    this.headers_1 = headers;
    this.body_1 = body;
    this.logOnError_1 = logOnError;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.resource_1, this.headers_1, this.body_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this.logOnError_1) {
                console.log('Error fetching resource "' + this.resource_1 + '"\n\n' + t);
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = this._this__u8e3s4__1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    http$factory();
    return http$delegate.get_value_j01efc_k$();
  }
  var http$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function get_$stableprop_72() {
    return 8;
  }
  function HttpFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(HttpFetcher).set_logOnError_rg5mft_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(HttpFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(HttpFetcher).delete_77j3ik_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).delete$default_ej9bxn_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_77j3ik_k$(resource, headers, abortController, $completion) : $super.delete_77j3ik_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete_oce7os_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete$default_8x1c9d_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_oce7os_k$(resource, headers, abortController, $completion) : $super.tryDelete_oce7os_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).get_nc2n7l_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).get$default_jrzehs_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_nc2n7l_k$(resource, headers, abortController, $completion) : $super.get_nc2n7l_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet_rtbz5r_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet$default_d582li_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_rtbz5r_k$(resource, headers, abortController, $completion) : $super.tryGet_rtbz5r_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).head_jhlirb_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).head$default_jddxzq_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_jhlirb_k$(resource, headers, abortController, $completion) : $super.head_jhlirb_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead_ojg9wf_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead$default_77ct2y_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_ojg9wf_k$(resource, headers, abortController, $completion) : $super.tryHead_ojg9wf_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).options_fcfhdl_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).options$default_ild8h4_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_fcfhdl_k$(resource, headers, abortController, $completion) : $super.options_fcfhdl_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions_f67xfb_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions$default_t3jeum_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_f67xfb_k$(resource, headers, abortController, $completion) : $super.tryOptions_f67xfb_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).patch_a99beb_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).patch$default_gqr31j_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_a99beb_k$(resource, headers, body, abortController, $completion) : $super.patch_a99beb_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch_9ygkcv_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch$default_92opb7_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_9ygkcv_k$(resource, headers, body, abortController, $completion) : $super.tryPatch_9ygkcv_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post_hpos63_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post$default_3cmhwx_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_hpos63_k$(resource, headers, body, abortController, $completion) : $super.post_hpos63_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost_q2xj1_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost$default_o37ux7_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_q2xj1_k$(resource, headers, body, abortController, $completion) : $super.tryPost_q2xj1_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put_e5ym44_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put$default_xssrs0_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_e5ym44_k$(resource, headers, body, abortController, $completion) : $super.put_e5ym44_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut_cb2syy_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut$default_j6oh50_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_cb2syy_k$(resource, headers, body, abortController, $completion) : $super.tryPut_cb2syy_k$.call(this, resource, headers, body, abortController, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function get_$stableprop_73() {
    return 8;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
    this.$stable_1 = 8;
  }
  protoOf(AbortController_0).get_signal_jhh4tt_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_l9xn1b_k$ = function () {
    this.controller_1.abort();
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
          tmp = !lastIsUpper ? true : tmp1 < get_lastIndex_0(tmp0_apply) ? isLowerCase(tmp0_apply.get_a7b70_k$(tmp1 + 1 | 0)) : false;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp0_apply.append_ssq29y_k$('-');
        }
      }
      var tmp$ret$5;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = toString_0(item).toLowerCase();
      tmp0_apply.append_ssq29y_k$(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return tmp0_apply.toString();
  }
  function wrapQuotesIfNecessary(_this__u8e3s4) {
    var tmp;
    if ((_this__u8e3s4.length >= 2 ? first(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) ? last(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) {
      tmp = _this__u8e3s4;
    } else {
      tmp = '"' + replace(_this__u8e3s4, '"', '\\"') + '"';
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_mog12g_k$ = classes;
  protoOf(ComparableAttrsScope).id_xxyy5i_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_898wkp_k$ = title;
  protoOf(ComparableAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_mog12g_k$ = classes;
  protoOf(DummyAttrsScope).id_xxyy5i_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_898wkp_k$ = title;
  protoOf(DummyAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(DummyAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(CalcScopeInstance).times_xyl21y_k$ = times;
  protoOf(CalcScopeInstance).times_day2qi_k$ = times_0;
  protoOf(CalcScopeInstance).div_oz0whb_k$ = div;
  protoOf(CalcScopeInstance).plus_z13eyi_k$ = plus_1;
  protoOf(CalcScopeInstance).minus_qey9gw_k$ = minus;
  protoOf(CalcScopeInstance).unaryMinus_7m2z60_k$ = unaryMinus;
  protoOf(CalcScopeInstance).unaryPlus_yauhr4_k$ = unaryPlus;
  protoOf(CalcScopeInstance).num_7y4ztx_k$ = num;
  protoOf(ComparableStyleScope).property_ze5ozi_k$ = property;
  protoOf(ComparableStyleScope).property_nit37e_k$ = property_0;
  protoOf(ComparableStyleScope).variable_d7dn6f_k$ = variable;
  protoOf(ComparableStyleScope).variable_pbiwyn_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_ie9e5n_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_49si7m_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_tbupf6_k$ = invoke_1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CSSTransition;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_0;
  _.$_$.e = StyleVariable_1;
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
  _.$_$.x = overflowX;
  _.$_$.y = overflowY;
  _.$_$.z = overflow;
  _.$_$.a1 = paddingInline;
  _.$_$.b1 = resize;
  _.$_$.c1 = scrollBehavior;
  _.$_$.d1 = setVariable_0;
  _.$_$.e1 = setVariable;
  _.$_$.f1 = textAlign;
  _.$_$.g1 = textDecorationLine;
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
  _.$_$.r1 = registerRefScope$composable_0;
  _.$_$.s1 = registerRefScope$composable;
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
  _.$_$.f2 = Companion_getInstance_13;
  _.$_$.g2 = Companion_getInstance_14;
  _.$_$.h2 = Companion_getInstance_9;
  _.$_$.i2 = Companion_getInstance_15;
  _.$_$.j2 = Companion_getInstance_18;
  _.$_$.k2 = Companion_getInstance_19;
  _.$_$.l2 = Companion_getInstance_21;
  _.$_$.m2 = Companion_getInstance_16;
  _.$_$.n2 = Companion_getInstance_10;
  _.$_$.o2 = Companion_getInstance_22;
  _.$_$.p2 = Companion_getInstance_17;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
