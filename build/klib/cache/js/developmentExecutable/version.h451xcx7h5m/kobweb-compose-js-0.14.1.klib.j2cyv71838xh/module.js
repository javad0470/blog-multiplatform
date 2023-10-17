(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    root['kobweb-frontend-kobweb-compose'] = factory(typeof this['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-compose'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.lb;
  var interfaceMeta = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.cg;
  var setMetadataFor = kotlin_kotlin.$_$.mb;
  var objectMeta = kotlin_kotlin.$_$.kb;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.te;
  var isObject = kotlin_kotlin.$_$.za;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.d9;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Annotation = kotlin_kotlin.$_$.de;
  var classMeta = kotlin_kotlin.$_$.ca;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sf;
  var equals = kotlin_kotlin.$_$.fa;
  var isInterface = kotlin_kotlin.$_$.wa;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r8;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.t7;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.v7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.a7;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.b7;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.o7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.p7;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.q7;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.z6;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.y6;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var style_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var selector = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var combine = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var plus = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var plus_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.l6;
  var get_universal = kotlin_org_jetbrains_compose_html_html_core.$_$.k6;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var className = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var attr = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var attr$default = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var attrEquals = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var attrEquals$default = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var attrListContains = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var attrListContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var attrHyphened = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var attrHyphened$default = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var attrPrefixed = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var attrPrefixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var attrSuffixed = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var attrSuffixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var attrContains = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var attrContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var group = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var descendant = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var desc = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var desc_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var desc_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var desc_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var child = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var sibling = kotlin_org_jetbrains_compose_html_html_core.$_$.f6;
  var adjacent = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var hover = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var get_anyLink = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var get_link = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var get_visited = kotlin_org_jetbrains_compose_html_html_core.$_$.o6;
  var get_localLink = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var get_target = kotlin_org_jetbrains_compose_html_html_core.$_$.h6;
  var get_targetWithin = kotlin_org_jetbrains_compose_html_html_core.$_$.i6;
  var get_scope = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var get_active = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var get_focus = kotlin_org_jetbrains_compose_html_html_core.$_$.r4;
  var get_focusVisible = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var get_playing = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var get_paused = kotlin_org_jetbrains_compose_html_html_core.$_$.s5;
  var get_autofill = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var get_enabled = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var get_disabled = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var get_readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var get_readWrite = kotlin_org_jetbrains_compose_html_html_core.$_$.y5;
  var get_placeholderShown = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var get_default = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var get_checked = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var get_indeterminate = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var get_blank = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var get_valid = kotlin_org_jetbrains_compose_html_html_core.$_$.n6;
  var get_invalid = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var get_inRange = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var get_outOfRange = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var get_required = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var get_optional = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var get_userInvalid = kotlin_org_jetbrains_compose_html_html_core.$_$.m6;
  var get_root = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var get_empty = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var get_first = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var get_firstChild = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var get_lastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var get_onlyChild = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var get_firstOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var get_lastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var get_onlyOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var get_host = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var host = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var get_defined = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var get_left = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var get_right = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var nthChild = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var nthLastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var nthOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var nthLastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var not = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var get_after = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var get_before = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var get_cue = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var get_cueRegion = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var get_firstLetter = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var get_firstLine = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var get_fileSelectorButton = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var get_selection = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var slotted = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var hashCode = kotlin_kotlin.$_$.la;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Long = kotlin_kotlin.$_$.ne;
  var toString = kotlin_kotlin.$_$.sd;
  var toString_0 = kotlin_kotlin.$_$.qb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var numberToInt = kotlin_kotlin.$_$.ib;
  var roundToInt = kotlin_kotlin.$_$.sb;
  var getNumberHashCode = kotlin_kotlin.$_$.ia;
  var coerceIn = kotlin_kotlin.$_$.wb;
  var get_PI = kotlin_kotlin.$_$.rb;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.c7;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var borderWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.h7;
  var borderWidth_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.f7;
  var borderWidth_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.g7;
  var borderWidth_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.e7;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.d7;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.i7;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.n8;
  var opacity_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m8;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.m7;
  var visibility = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.u7;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var overflowX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.i8;
  var maxHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.f8;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.o8;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.a8;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.d8;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.z8;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var resize = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.g8;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.j8;
  var zIndex = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.q8;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.w8;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.c8;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.u8;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.j7;
  var scrollBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.s7;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.r7;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(End, 'End', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Start, 'Start', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Top, 'Top', objectMeta, VOID, [Vertical]);
  setMetadataFor(Bottom, 'Bottom', objectMeta, VOID, [Vertical]);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  }
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  function weight(_this__u8e3s4, value) {
    return flexGrow_0(_this__u8e3s4, value);
  }
  setMetadataFor(FlexScope, 'FlexScope', interfaceMeta);
  function align_0(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta, VOID, [FlexScope]);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(LayoutScopeMarker, 'LayoutScopeMarker', classMeta, VOID, [Annotation]);
  function align_1(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta, VOID, [FlexScope]);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Vertical_0, 'Vertical', interfaceMeta);
  setMetadataFor(Horizontal_0, 'Horizontal', interfaceMeta);
  setMetadataFor(Alignment, 'Alignment', interfaceMeta);
  setMetadataFor(TopStart, 'TopStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(Center_0, 'Center', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(Top_0, 'Top', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Start_0, 'Start', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(End_0, 'End', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta, VOID, [Alignment, Horizontal_0, Vertical_0]);
  function then(other) {
    return other === Companion_getInstance_7() ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(WebModifier, 'WebModifier', interfaceMeta, VOID, [Element]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [WebModifier]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [WebModifier]);
  function darkened$default(byPercent, $super) {
    var tmp;
    if (byPercent === VOID) {
      Companion_getInstance_8();
      tmp = 0.3;
    } else {
      tmp = byPercent;
    }
    byPercent = tmp;
    return $super === VOID ? this.darkened_3k65o0_k$(byPercent) : $super.darkened_3k65o0_k$.call(this, byPercent);
  }
  setMetadataFor(Color, 'Color', interfaceMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, VOID, [Color]);
  setMetadataFor(Hsl, 'Hsl', classMeta, VOID, [Color]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  //endregion
  function get_$stableprop() {
    return 0;
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
  function get_$stableprop_4() {
    return 0;
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
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function End() {
    End_instance = this;
    this.$stable_1 = 0;
  }
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Start() {
    Start_instance = this;
    this.$stable_1 = 0;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function Top() {
    Top_instance = this;
    this.$stable_1 = 0;
  }
  var Top_instance;
  function Top_getInstance() {
    if (Top_instance == null)
      new Top();
    return Top_instance;
  }
  function Bottom() {
    Bottom_instance = this;
    this.$stable_1 = 0;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    if (Bottom_instance == null)
      new Bottom();
    return Bottom_instance;
  }
  function Center() {
    Center_instance = this;
    this.$stable_1 = 0;
  }
  var Center_instance;
  function Center_getInstance() {
    if (Center_instance == null)
      new Center();
    return Center_instance;
  }
  function SpaceEvenly() {
    SpaceEvenly_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    if (SpaceEvenly_instance == null)
      new SpaceEvenly();
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    SpaceBetween_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    if (SpaceBetween_instance == null)
      new SpaceBetween();
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    SpaceAround_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    if (SpaceAround_instance == null)
      new SpaceAround();
    return SpaceAround_instance;
  }
  function FromStyle() {
    FromStyle_instance = this;
    this.$stable_1 = 0;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    if (FromStyle_instance == null)
      new FromStyle();
    return FromStyle_instance;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function Arrangement() {
    Arrangement_instance = this;
    this.$stable_1 = 0;
  }
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName_0($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function BoxScope() {
  }
  function Box$composable(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(921036704);
    sourceInformation($composer_0, 'C(Box$composable)P(2,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_getInstance();
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().lambda_1_r8sbbp_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(921036704, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable (Box.kt:44)');
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 721727587, true, Box$composable$lambda(ref_0, $dirty, content_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Box$composable$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:43)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  protoOf(ComposableSingletons$BoxKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().ContentAlignment_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function get_$stableprop_9() {
    return 8;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.ContentAlignment_1 = TopStart_getInstance();
    this.$stable_1 = 8;
  }
  protoOf(BoxDefaults).get_ContentAlignment_3kz1oz_k$ = function () {
    return this.ContentAlignment_1;
  };
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$composable$lambda($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(721727587, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous> (Box.kt:46)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 3);
        $content._v(BoxScopeInstance_getInstance(), $composer_0, 6 | 112 & $$dirty >> 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Box$composable$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box$composable($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName_1($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function ColumnScope() {
  }
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1435219930);
    sourceInformation($composer_0, 'C(Column$composable)P(2,4,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_7();
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().VerticalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().HorizontalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1435219930, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable (Column.kt:48)');
      }
      var tmp = toAttrs(columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1861113368, true, Column$composable$lambda(ref_0, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Column$composable$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function get_$stableprop_10() {
    return 0;
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.VerticalArrangement_1 = Top_getInstance();
    this.HorizontalAlignment_1 = Start_getInstance_0();
    this.$stable_1 = 0;
  }
  protoOf(ColumnDefaults).get_VerticalArrangement_saziz9_k$ = function () {
    return this.VerticalArrangement_1;
  };
  protoOf(ColumnDefaults).get_HorizontalAlignment_d8l8ra_k$ = function () {
    return this.HorizontalAlignment_1;
  };
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().VerticalArrangement_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().HorizontalAlignment_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-col', toClassName_3(verticalArrangement), toClassName_1(horizontalAlignment)]);
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function Column$composable$lambda($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1861113368, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous> (Column.kt:50)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        $content(ColumnScopeInstance_getInstance(), $composer_0, 6 | 112 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Column$composable$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column$composable($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FlexScope() {
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.foundation.layout.LayoutScopeMarker()';
  };
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().HorizontalArrangement_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().VerticalAlignment_1 : verticalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-row', toClassName_2(horizontalArrangement), toClassName(verticalAlignment)]);
  }
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2022945866);
    sourceInformation($composer_0, 'C(Row$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(verticalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_7();
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().HorizontalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().VerticalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(2022945866, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable (Row.kt:49)');
      }
      var tmp = toAttrs(rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1725920680, true, Row$composable$lambda(ref_0, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Row$composable$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function RowScope() {
  }
  function get_$stableprop_11() {
    return 0;
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.HorizontalArrangement_1 = Start_getInstance();
    this.VerticalAlignment_1 = Top_getInstance_0();
    this.$stable_1 = 0;
  }
  protoOf(RowDefaults).get_HorizontalArrangement_ucg5j7_k$ = function () {
    return this.HorizontalArrangement_1;
  };
  protoOf(RowDefaults).get_VerticalAlignment_e9x2ys_k$ = function () {
    return this.VerticalAlignment_1;
  };
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function Row$composable$lambda($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1725920680, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous> (Row.kt:51)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        $content(RowScopeInstance_getInstance(), $composer_0, 6 | 112 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Row$composable$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row$composable($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_getInstance_0())) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_getInstance())) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_getInstance_0())) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_getInstance())) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_getInstance())) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_getInstance())) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_getInstance())) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_getInstance_0())) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_getInstance())) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_getInstance())) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_getInstance())) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_getInstance())) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_getInstance_0())) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_getInstance())) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_getInstance_0())) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, End_getInstance())) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(_this__u8e3s4, Start_getInstance())) {
        tmp = 'kobweb-arrange-start';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_3(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_getInstance())) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(_this__u8e3s4, Bottom_getInstance())) {
        tmp = 'kobweb-arrange-bottom';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_4(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Center_getInstance())) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(_this__u8e3s4, SpaceAround_getInstance())) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(_this__u8e3s4, SpaceBetween_getInstance())) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(_this__u8e3s4, SpaceEvenly_getInstance())) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance())) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.invoke_wa7zhx_k$('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.invoke_wa7zhx_k$('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.invoke_wa7zhx_k$('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.invoke_wa7zhx_k$('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function get_$stableprop_12() {
    return 0;
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.cols_7660aa_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.rows_hrwja0_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$cols) {
    $this$cols.minmax_ye66s7_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.minmax_ye66s7_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet.call(this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
    this.$stable_2 = 0;
  }
  protoOf(KobwebComposeStyleSheet).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
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
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function Vertical_0() {
  }
  function Horizontal_0() {
  }
  function TopStart() {
    TopStart_instance = this;
    this.$stable_1 = 0;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    if (TopStart_instance == null)
      new TopStart();
    return TopStart_instance;
  }
  function TopCenter() {
    TopCenter_instance = this;
    this.$stable_1 = 0;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    if (TopCenter_instance == null)
      new TopCenter();
    return TopCenter_instance;
  }
  function TopEnd() {
    TopEnd_instance = this;
    this.$stable_1 = 0;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    if (TopEnd_instance == null)
      new TopEnd();
    return TopEnd_instance;
  }
  function CenterStart() {
    CenterStart_instance = this;
    this.$stable_1 = 0;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    if (CenterStart_instance == null)
      new CenterStart();
    return CenterStart_instance;
  }
  function Center_0() {
    Center_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    if (Center_instance_0 == null)
      new Center_0();
    return Center_instance_0;
  }
  function CenterEnd() {
    CenterEnd_instance = this;
    this.$stable_1 = 0;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    if (CenterEnd_instance == null)
      new CenterEnd();
    return CenterEnd_instance;
  }
  function BottomStart() {
    BottomStart_instance = this;
    this.$stable_1 = 0;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    if (BottomStart_instance == null)
      new BottomStart();
    return BottomStart_instance;
  }
  function BottomCenter() {
    BottomCenter_instance = this;
    this.$stable_1 = 0;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    if (BottomCenter_instance == null)
      new BottomCenter();
    return BottomCenter_instance;
  }
  function BottomEnd() {
    BottomEnd_instance = this;
    this.$stable_1 = 0;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    if (BottomEnd_instance == null)
      new BottomEnd();
    return BottomEnd_instance;
  }
  function Top_0() {
    Top_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    if (Top_instance_0 == null)
      new Top_0();
    return Top_instance_0;
  }
  function CenterVertically() {
    CenterVertically_instance = this;
    this.$stable_1 = 0;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    if (CenterVertically_instance == null)
      new CenterVertically();
    return CenterVertically_instance;
  }
  function Bottom_0() {
    Bottom_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    if (Bottom_instance_0 == null)
      new Bottom_0();
    return Bottom_instance_0;
  }
  function Start_0() {
    Start_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    if (Start_instance_0 == null)
      new Start_0();
    return Start_instance_0;
  }
  function CenterHorizontally() {
    CenterHorizontally_instance = this;
    this.$stable_1 = 0;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    if (CenterHorizontally_instance == null)
      new CenterHorizontally();
    return CenterHorizontally_instance;
  }
  function End_0() {
    End_instance_0 = this;
    this.$stable_1 = 0;
  }
  var End_instance_0;
  function End_getInstance_0() {
    if (End_instance_0 == null)
      new End_0();
    return End_instance_0;
  }
  function FromStyle_0() {
    FromStyle_instance_0 = this;
    this.$stable_1 = 0;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    if (FromStyle_instance_0 == null)
      new FromStyle_0();
    return FromStyle_instance_0;
  }
  function Alignment() {
  }
  function thenIf(_this__u8e3s4, condition, lazyProduce) {
    return _this__u8e3s4.then_6jcr1i_k$(condition ? lazyProduce() : Companion_getInstance_7());
  }
  function Element() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fold_s9dnuv_k$ = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).then_6jcr1i_k$ = function (other) {
    return other;
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Modifier() {
  }
  function thenIf_0(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp = other;
    } else {
      tmp = Companion_getInstance_7();
    }
    return _this__u8e3s4.then_6jcr1i_k$(tmp);
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _get_next__daux88($this) {
    return $this.next_1;
  }
  function ChainedModifier(current, next) {
    this.current_1 = current;
    this.next_1 = next;
  }
  protoOf(ChainedModifier).fold_s9dnuv_k$ = function (initial, operation) {
    return this.next_1.fold_s9dnuv_k$(this.current_1.fold_s9dnuv_k$(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.current_1, other.current_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.next_1, other.next_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.current_1) + imul(31, hashCode(this.next_1)) | 0;
  };
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function get_$stableprop_29() {
    return 0;
  }
  function StyleModifier(styles) {
    this.styles_1 = styles;
    this.$stable_1 = 0;
  }
  protoOf(StyleModifier).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.styles_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.then_6jcr1i_k$(new StyleModifier(styles));
  }
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function WebModifier() {
  }
  function get_$stableprop_30() {
    return 0;
  }
  function AttrsModifier(attrs) {
    this.attrs_1 = attrs;
    this.$stable_1 = 0;
  }
  protoOf(AttrsModifier).get_attrs_iou0l5_k$ = function () {
    return this.attrs_1;
  };
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.attrs_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.then_6jcr1i_k$(new AttrsModifier(attrs));
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.styles_1($this_null);
      }
      return Unit_getInstance();
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_s9dnuv_k$(Unit_getInstance(), toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.styles_1($this$style);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.attrs_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.style_sa2yps_k$(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_s9dnuv_k$(Unit_getInstance(), toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_31() {
    return 0;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function toInRangeInt(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(new Long(0, -1)).and_jhajnj_k$(_this__u8e3s4).equals(new Long(0, 0))) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.toInRangeInt.<anonymous>' call
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var message = 'Got an invalid hex color (0x' + toString(_this__u8e3s4, 16).toUpperCase() + ') value larger than 0xFFFFFFFF';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.toInt_1tsl84_k$();
  }
  function Rgb(value) {
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Rgb).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Rgb).get_red_18ix20_k$ = function () {
    return this.value_1 >> 16 & 255;
  };
  protoOf(Rgb).get_green_is36qi_k$ = function () {
    return this.value_1 >> 8 & 255;
  };
  protoOf(Rgb).get_blue_wojj4z_k$ = function () {
    return this.value_1 >> 0 & 255;
  };
  protoOf(Rgb).get_alpha_iooth1_k$ = function () {
    return this.value_1 >> 24 & 255;
  };
  protoOf(Rgb).get_redf_wotlby_k$ = function () {
    return toColorFloat(this.get_red_18ix20_k$());
  };
  protoOf(Rgb).get_greenf_dxud3g_k$ = function () {
    return toColorFloat(this.get_green_is36qi_k$());
  };
  protoOf(Rgb).get_bluef_ip8ppf_k$ = function () {
    return toColorFloat(this.get_blue_wojj4z_k$());
  };
  protoOf(Rgb).get_alphaf_b0gxxt_k$ = function () {
    return toColorFloat(this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).inverted_adp911_k$ = function () {
    return Companion_getInstance_8().rgba_2wpmgk_k$(255 - this.get_red_18ix20_k$() | 0, 255 - this.get_green_is36qi_k$() | 0, 255 - this.get_blue_wojj4z_k$() | 0, this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).darkened_3k65o0_k$ = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_getInstance_8().rgba_yjhdu4_k$(this.get_redf_wotlby_k$() * darkeningMultiplier, this.get_greenf_dxud3g_k$() * darkeningMultiplier, this.get_bluef_ip8ppf_k$() * darkeningMultiplier, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).copy_2hj87f_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_8().rgba_2wpmgk_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copy$default_z5pom3_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_red_18ix20_k$() : red;
    green = green === VOID ? this.get_green_is36qi_k$() : green;
    blue = blue === VOID ? this.get_blue_wojj4z_k$() : blue;
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    return $super === VOID ? this.copy_2hj87f_k$(red, green, blue, alpha) : $super.copy_2hj87f_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).copyf_t7rrzj_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_8().rgba_yjhdu4_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copyf$default_1ypp37_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_redf_wotlby_k$() : red;
    green = green === VOID ? this.get_greenf_dxud3g_k$() : green;
    blue = blue === VOID ? this.get_bluef_ip8ppf_k$() : blue;
    alpha = alpha === VOID ? this.get_alphaf_b0gxxt_k$() : alpha;
    return $super === VOID ? this.copyf_t7rrzj_k$(red, green, blue, alpha) : $super.copyf_t7rrzj_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).toRgb_1tsrpu_k$ = function () {
    return this;
  };
  protoOf(Rgb).toHsl_1tskli_k$ = function () {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.get_redf_wotlby_k$();
    var tmp1_maxOf = this.get_greenf_dxud3g_k$();
    var tmp2_maxOf = this.get_bluef_ip8ppf_k$();
    var chromaMax = Math.max(tmp0_maxOf, tmp1_maxOf, tmp2_maxOf);
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp3_minOf = this.get_redf_wotlby_k$();
    var tmp4_minOf = this.get_greenf_dxud3g_k$();
    var tmp5_minOf = this.get_bluef_ip8ppf_k$();
    var chromaMin = Math.min(tmp3_minOf, tmp4_minOf, tmp5_minOf);
    var chromaDelta = chromaMax - chromaMin;
    var lightness = (chromaMin + chromaMax) / 2.0;
    // Inline function 'kotlin.math.abs' call
    var tmp6_abs = 2.0 * lightness - 1.0;
    var saturation = chromaDelta / (1.0 - Math.abs(tmp6_abs));
    var tmp;
    if (chromaDelta === 0.0) {
      tmp = 0.0;
    } else {
      var tmp_0;
      if (chromaMax === this.get_redf_wotlby_k$()) {
        tmp_0 = (this.get_greenf_dxud3g_k$() - this.get_bluef_ip8ppf_k$()) / chromaDelta % 6;
      } else if (chromaMax === this.get_greenf_dxud3g_k$()) {
        tmp_0 = (this.get_bluef_ip8ppf_k$() - this.get_redf_wotlby_k$()) / chromaDelta + 2.0;
      } else if (chromaMax === this.get_bluef_ip8ppf_k$()) {
        tmp_0 = (this.get_redf_wotlby_k$() - this.get_greenf_dxud3g_k$()) / chromaDelta + 4.0;
      } else {
        var tmp7_error = 'Unexpected chromaMax value ' + chromaMax;
        throw IllegalStateException_init_$Create$(toString_0(tmp7_error));
      }
      tmp = 60.0 * tmp_0;
    }
    var hue = tmp;
    return Companion_getInstance_8().hsla_u2xvsw_k$(hue, saturation, lightness, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).toString = function () {
    return this.get_alpha_iooth1_k$() === 255 ? 'rgb(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ')' : 'rgba(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ', ' + this.get_alphaf_b0gxxt_k$() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.get_red_18ix20_k$() === other.get_red_18ix20_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.get_green_is36qi_k$() === other.get_green_is36qi_k$();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.get_blue_wojj4z_k$() === other.get_blue_wojj4z_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.get_alpha_iooth1_k$() === other.get_alpha_iooth1_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.get_red_18ix20_k$();
    result = imul(31, result) + this.get_green_is36qi_k$() | 0;
    result = imul(31, result) + this.get_blue_wojj4z_k$() | 0;
    result = imul(31, result) + this.get_alpha_iooth1_k$() | 0;
    return result;
  };
  function Hsl(hue, saturation, lightness, alpha) {
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.lightness_1 = lightness;
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(Hsl).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(Hsl).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(Hsl).get_lightness_jv7mx0_k$ = function () {
    return this.lightness_1;
  };
  protoOf(Hsl).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Hsl).inverted_adp911_k$ = function () {
    return this.toRgb_1tsrpu_k$().inverted_adp911_k$();
  };
  protoOf(Hsl).darkened_3k65o0_k$ = function (byPercent) {
    return this.toRgb_1tsrpu_k$().darkened_3k65o0_k$(byPercent);
  };
  protoOf(Hsl).copy_skjbed_k$ = function (hue, saturation, lightness, alpha) {
    return Companion_getInstance_8().hsla_u2xvsw_k$(hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).copy$default_vk74rp_k$ = function (hue, saturation, lightness, alpha, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    lightness = lightness === VOID ? this.lightness_1 : lightness;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_skjbed_k$(hue, saturation, lightness, alpha) : $super.copy_skjbed_k$.call(this, hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).toRgb_1tsrpu_k$ = function () {
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = 2 * this.lightness_1 - 1;
    var chroma = (1 - Math.abs(tmp0_abs)) * this.saturation_1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = this.hue_1 / 60 % 2 - 1;
    var intermediateValue = chroma * (1 - Math.abs(tmp1_abs));
    var hueSection = (numberToInt(this.hue_1) % 360 | 0) / 60 | 0;
    var r;
    var g;
    var b;
    switch (hueSection) {
      case 0:
        r = chroma;
        g = intermediateValue;
        b = 0.0;
        break;
      case 1:
        r = intermediateValue;
        g = chroma;
        b = 0.0;
        break;
      case 2:
        r = 0.0;
        g = chroma;
        b = intermediateValue;
        break;
      case 3:
        r = 0.0;
        g = intermediateValue;
        b = chroma;
        break;
      case 4:
        r = intermediateValue;
        g = 0.0;
        b = chroma;
        break;
      default:
        // Inline function 'kotlin.check' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.check' call

        // Inline function 'kotlin.contracts.contract' call

        if (!(hueSection === 5)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString_0(message));
        }

        r = chroma;
        g = 0.0;
        b = intermediateValue;
        break;
    }
    var lightnessAdjustment = this.lightness_1 - chroma / 2;
    return Companion_getInstance_8().rgba_yjhdu4_k$(r + lightnessAdjustment, g + lightnessAdjustment, b + lightnessAdjustment, this.alpha_1);
  };
  protoOf(Hsl).toHsl_1tskli_k$ = function () {
    return this;
  };
  protoOf(Hsl).toString = function () {
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.hue_1 * 10;
    var hueRounded = roundToInt(tmp0_roundToInt) / 10.0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = this.saturation_1 * 1000;
    var saturationPercent = roundToInt(tmp1_roundToInt) / 10.0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt = this.lightness_1 * 1000;
    var lightnessPercent = roundToInt(tmp2_roundToInt) / 10.0;
    return this.alpha_1 === 1.0 ? 'hsl(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%)' : 'hsla(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%, ' + this.alpha_1 + ')';
  };
  protoOf(Hsl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Hsl) {
      tmp_2 = this.hue_1 === other.hue_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.saturation_1 === other.saturation_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.lightness_1 === other.lightness_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.alpha_1 === other.alpha_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hsl).hashCode = function () {
    var result = getNumberHashCode(this.hue_1);
    result = imul(31, result) + getNumberHashCode(this.saturation_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lightness_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_SHIFTING_PERCENT_1 = 0.3;
  }
  protoOf(Companion_0).get_DEFAULT_SHIFTING_PERCENT_bgdcr7_k$ = function () {
    return this.DEFAULT_SHIFTING_PERCENT_1;
  };
  protoOf(Companion_0).rgb_hjb4t0_k$ = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).argb_kwjsfp_k$ = function (value) {
    return new Rgb(value);
  };
  protoOf(Companion_0).argb_8r2xdi_k$ = function (value) {
    return this.argb_kwjsfp_k$(toInRangeInt(value, this));
  };
  protoOf(Companion_0).rgba_9ecc6r_k$ = function (value) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.rgba.<anonymous>' call
    var alpha = (value & 255) << 24;
    var rgb = value >> 8;
    return this.argb_kwjsfp_k$(alpha | rgb);
  };
  protoOf(Companion_0).rgba_784c9u_k$ = function (value) {
    return this.rgba_9ecc6r_k$(toInRangeInt(value, this));
  };
  protoOf(Companion_0).rgb_ncqb1w_k$ = function (r, g, b) {
    return this.rgba_2wpmgk_k$(r, g, b, 255);
  };
  protoOf(Companion_0).rgba_2wpmgk_k$ = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).argb_xx08ss_k$ = function (a, r, g, b) {
    return this.rgba_2wpmgk_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgb_fip3nl_k$ = function (r, g, b) {
    return this.rgb_ncqb1w_k$(toColorInt(r), toColorInt(g), toColorInt(b));
  };
  protoOf(Companion_0).rgba_yjhdu4_k$ = function (r, g, b, a) {
    return this.rgba_2wpmgk_k$(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  protoOf(Companion_0).argb_j85n4c_k$ = function (a, r, g, b) {
    return this.rgba_yjhdu4_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgba_oyxpup_k$ = function (r, g, b, a) {
    return this.rgba_2wpmgk_k$(r, g, b, toColorInt(a));
  };
  protoOf(Companion_0).argb_w73dfl_k$ = function (a, r, g, b) {
    return this.rgba_oyxpup_k$(r, g, b, a);
  };
  protoOf(Companion_0).hsl_t08kgw_k$ = function (h, s, l) {
    return this.hsl_5d7ooj_k$(h, s, l);
  };
  protoOf(Companion_0).hsla_qz6e31_k$ = function (h, s, l, a) {
    return this.hsla_u2xvsw_k$(h, s, l, a);
  };
  protoOf(Companion_0).hsl_5d7ooj_k$ = function (h, s, l) {
    return new Hsl(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_u2xvsw_k$ = function (h, s, l, a) {
    return new Hsl(h, s, l, a);
  };
  protoOf(Companion_0).rgb_qm2dwq_k$ = function (r, g, b) {
    return this.rgba_s8oif1_k$(r, g, b, 1.0);
  };
  protoOf(Companion_0).rgba_abxsgg_k$ = function (r, g, b, a) {
    return this.rgba_yjhdu4_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a.value / 100.0);
  };
  protoOf(Companion_0).rgba_s8oif1_k$ = function (r, g, b, a) {
    return this.rgba_yjhdu4_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a);
  };
  protoOf(Companion_0).argb_chscaw_k$ = function (a, r, g, b) {
    return this.argb_j85n4c_k$(a.value / 100.0, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).argb_950gcf_k$ = function (a, r, g, b) {
    return this.argb_j85n4c_k$(a, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).hsl_wg0ugj_k$ = function (h, s, l) {
    return this.hsla_ok8ugw_k$(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_ok8ugw_k$ = function (h, s, l, alpha) {
    return this.hsla_u2xvsw_k$(toDegrees(h), s.value / 100.0, l.value / 100.0, alpha);
  };
  protoOf(Companion_0).hsla_ouuvxv_k$ = function (h, s, l, alpha) {
    return this.hsla_ok8ugw_k$(h, s, l, alpha.value / 100.0);
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Color() {
  }
  function get_$stableprop_33() {
    return 0;
  }
  function Colors() {
    Colors_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(Colors).get_Transparent_cxh4g9_k$ = function () {
    return Companion_getInstance_8().rgba_2wpmgk_k$(0, 0, 0, 0);
  };
  protoOf(Colors).get_AliceBlue_26ti33_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 248, 255);
  };
  protoOf(Colors).get_AntiqueWhite_ftryr7_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 235, 215);
  };
  protoOf(Colors).get_Aqua_wnyk9x_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 255);
  };
  protoOf(Colors).get_Aquamarine_wf4kkn_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(127, 255, 212);
  };
  protoOf(Colors).get_Azure_i7cg92_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 255, 255);
  };
  protoOf(Colors).get_Beige_i7ikyj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 245, 220);
  };
  protoOf(Colors).get_Bisque_3pilya_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 196);
  };
  protoOf(Colors).get_Black_i7mvue_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 0);
  };
  protoOf(Colors).get_BlanchedAlmond_1qzwzr_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 235, 205);
  };
  protoOf(Colors).get_Blue_wnz3k3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 255);
  };
  protoOf(Colors).get_BlueViolet_dh8vfm_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(138, 43, 226);
  };
  protoOf(Colors).get_Brown_i7r0ml_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(165, 42, 42);
  };
  protoOf(Colors).get_BurlyWood_8ugz0w_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(222, 184, 135);
  };
  protoOf(Colors).get_CadetBlue_p1vowq_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(95, 158, 160);
  };
  protoOf(Colors).get_Chartreuse_sf60ap_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(127, 255, 0);
  };
  protoOf(Colors).get_Chocolate_hzt5e5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(210, 105, 30);
  };
  protoOf(Colors).get_Coral_i88xyg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 127, 80);
  };
  protoOf(Colors).get_CornflowerBlue_r6uqqi_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(100, 149, 237);
  };
  protoOf(Colors).get_Cornsilk_wq0qna_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 248, 220);
  };
  protoOf(Colors).get_Crimson_p5oht6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(220, 20, 60);
  };
  protoOf(Colors).get_Cyan_wnzzpo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 255);
  };
  protoOf(Colors).get_DarkBlue_1y795z_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 139);
  };
  protoOf(Colors).get_DarkCyan_1y6d0e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 139, 139);
  };
  protoOf(Colors).get_DarkGoldenRod_c3b5lt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(184, 134, 11);
  };
  protoOf(Colors).get_DarkGray_1y3y8u_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGrey_1y3y5e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGreen_anpmxw_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 100, 0);
  };
  protoOf(Colors).get_DarkKhaki_apqcmb_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(189, 183, 107);
  };
  protoOf(Colors).get_DarkMagenta_njr8wa_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 0, 139);
  };
  protoOf(Colors).get_DarkOliveGreen_81ck6f_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(85, 107, 47);
  };
  protoOf(Colors).get_DarkOrange_ky6wwj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 140, 0);
  };
  protoOf(Colors).get_DarkOrchid_ky5rby_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(153, 50, 204);
  };
  protoOf(Colors).get_DarkRed_ie5ln2_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 0, 0);
  };
  protoOf(Colors).get_DarkSalmon_jb5x3n_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(233, 150, 122);
  };
  protoOf(Colors).get_DarkSeaGreen_yymm7n_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(143, 188, 143);
  };
  protoOf(Colors).get_DarkSlateBlue_s42xdg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(72, 61, 139);
  };
  protoOf(Colors).get_DarkSlateGray_s468al_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkSlateGrey_s468e1_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkTurquoise_8s04jm_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 206, 209);
  };
  protoOf(Colors).get_DarkViolet_hrkt6q_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(148, 0, 211);
  };
  protoOf(Colors).get_DeepPink_kcbez9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 20, 147);
  };
  protoOf(Colors).get_DeepSkyBlue_2ykmii_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 191, 255);
  };
  protoOf(Colors).get_DimGray_ep5xby_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(105, 105, 105);
  };
  protoOf(Colors).get_DimGrey_ep5x8i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(105, 105, 105);
  };
  protoOf(Colors).get_DodgerBlue_w4tkwu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(30, 144, 255);
  };
  protoOf(Colors).get_FireBrick_yjvehq_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(178, 34, 34);
  };
  protoOf(Colors).get_FloralWhite_l3nfn0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 240);
  };
  protoOf(Colors).get_ForestGreen_rtf599_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(34, 139, 34);
  };
  protoOf(Colors).get_Fuchsia_k799e6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 255);
  };
  protoOf(Colors).get_Gainsboro_426zpx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(220, 220, 220);
  };
  protoOf(Colors).get_GhostWhite_l7lzsz_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(248, 248, 255);
  };
  protoOf(Colors).get_Gold_wo2ci1_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 215, 0);
  };
  protoOf(Colors).get_GoldenRod_khhved_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(218, 165, 32);
  };
  protoOf(Colors).get_Gray_wo2eh8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 128);
  };
  protoOf(Colors).get_Grey_wo2eko_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 128);
  };
  protoOf(Colors).get_Green_iahrqy_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 128, 0);
  };
  protoOf(Colors).get_GreenYellow_73rc9a_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(173, 255, 47);
  };
  protoOf(Colors).get_HoneyDew_wqvfes_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 255, 240);
  };
  protoOf(Colors).get_HotPink_o2ezdy_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 105, 180);
  };
  protoOf(Colors).get_IndianRed_tuu69d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(205, 92, 92);
  };
  protoOf(Colors).get_Indigo_bq1ad_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(75, 0, 130);
  };
  protoOf(Colors).get_Ivory_ibo4m8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 240);
  };
  protoOf(Colors).get_Khaki_icihfd_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 230, 140);
  };
  protoOf(Colors).get_Lavender_hd40j4_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(230, 230, 250);
  };
  protoOf(Colors).get_LavenderBlush_p15ihc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 240, 245);
  };
  protoOf(Colors).get_LawnGreen_blu54i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(124, 252, 0);
  };
  protoOf(Colors).get_LemonChiffon_t7hz2f_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 205);
  };
  protoOf(Colors).get_LightBlue_i1kdo9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(173, 216, 230);
  };
  protoOf(Colors).get_LightCoral_8wyb8k_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 128, 128);
  };
  protoOf(Colors).get_LightCyan_i1jhio_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(224, 255, 255);
  };
  protoOf(Colors).get_LightGoldenRodYellow_yxbqf9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 250, 210);
  };
  protoOf(Colors).get_LightGray_i1h2r4_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGrey_i1h2no_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGreen_8z7512_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(144, 238, 144);
  };
  protoOf(Colors).get_LightPink_i1bi8t_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 182, 193);
  };
  protoOf(Colors).get_LightSalmon_dzaed_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 160, 122);
  };
  protoOf(Colors).get_LightSeaGreen_yvslb5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(32, 178, 170);
  };
  protoOf(Colors).get_LightSkyBlue_74jx4i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(135, 206, 250);
  };
  protoOf(Colors).get_LightSlateGray_pobgb3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSlateGrey_pobgej_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSteelBlue_nuj33s_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(176, 196, 222);
  };
  protoOf(Colors).get_LightYellow_2ihllt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 224);
  };
  protoOf(Colors).get_Lime_wo5f0e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 0);
  };
  protoOf(Colors).get_LimeGreen_33bue3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(50, 205, 50);
  };
  protoOf(Colors).get_Linen_id36i9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 240, 230);
  };
  protoOf(Colors).get_Magenta_siy4ww_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 255);
  };
  protoOf(Colors).get_Maroon_1dk715_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 0, 0);
  };
  protoOf(Colors).get_MediumAquaMarine_9nmz8c_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(102, 205, 170);
  };
  protoOf(Colors).get_MediumBlue_ghumeg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 205);
  };
  protoOf(Colors).get_MediumOrchid_6dr9cv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(186, 85, 211);
  };
  protoOf(Colors).get_MediumPurple_5usidi_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(147, 112, 219);
  };
  protoOf(Colors).get_MediumSeaGreen_uimfda_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(60, 179, 113);
  };
  protoOf(Colors).get_MediumSlateBlue_cvjwbv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(123, 104, 238);
  };
  protoOf(Colors).get_MediumSpringGreen_68myrc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 250, 154);
  };
  protoOf(Colors).get_MediumTurquoise_w7mp5p_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(72, 209, 204);
  };
  protoOf(Colors).get_MediumVioletRed_cpazro_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(199, 21, 133);
  };
  protoOf(Colors).get_MidnightBlue_di5bxv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(25, 25, 112);
  };
  protoOf(Colors).get_MintCream_b9kfih_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 255, 250);
  };
  protoOf(Colors).get_MistyRose_83ke2m_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 225);
  };
  protoOf(Colors).get_Moccasin_tjrwhu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 181);
  };
  protoOf(Colors).get_NavajoWhite_yqbnct_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 222, 173);
  };
  protoOf(Colors).get_Navy_wo6ja7_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 128);
  };
  protoOf(Colors).get_OldLace_5z8ndh_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(253, 245, 230);
  };
  protoOf(Colors).get_Olive_iesdxu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 0);
  };
  protoOf(Colors).get_OliveDrab_ei6q5d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(107, 142, 35);
  };
  protoOf(Colors).get_Orange_2kp26v_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 165, 0);
  };
  protoOf(Colors).get_OrangeRed_4r1q9y_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 69, 0);
  };
  protoOf(Colors).get_Orchid_2kq7rg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(218, 112, 214);
  };
  protoOf(Colors).get_PaleGoldenRod_ekls2d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(238, 232, 170);
  };
  protoOf(Colors).get_PaleGreen_crlqds_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(152, 251, 152);
  };
  protoOf(Colors).get_PaleTurquoise_6api32_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(175, 238, 238);
  };
  protoOf(Colors).get_PaleVioletRed_jtguyp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(219, 112, 147);
  };
  protoOf(Colors).get_PapayaWhip_vnp0lx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 239, 213);
  };
  protoOf(Colors).get_PeachPuff_bn3oi5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 218, 185);
  };
  protoOf(Colors).get_Peru_wo7w4h_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(205, 133, 63);
  };
  protoOf(Colors).get_Pink_wo7yzj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 192, 203);
  };
  protoOf(Colors).get_Plum_wo81dp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(221, 160, 221);
  };
  protoOf(Colors).get_PowderBlue_ha8x0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(176, 224, 230);
  };
  protoOf(Colors).get_Purple_33oyqt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 0, 128);
  };
  protoOf(Colors).get_RebeccaPurple_6mafj6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(102, 51, 153);
  };
  protoOf(Colors).get_Red_18jks8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 0);
  };
  protoOf(Colors).get_RosyBrown_gx67d6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(188, 143, 143);
  };
  protoOf(Colors).get_RoyalBlue_n7lkjc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(65, 105, 225);
  };
  protoOf(Colors).get_SaddleBrown_xa0bbu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 69, 19);
  };
  protoOf(Colors).get_Salmon_47q1zr_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 128, 114);
  };
  protoOf(Colors).get_SandyBrown_fjstbe_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(244, 164, 96);
  };
  protoOf(Colors).get_SeaGreen_gor2g3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(46, 139, 87);
  };
  protoOf(Colors).get_SeaShell_gibx12_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 245, 238);
  };
  protoOf(Colors).get_Sienna_4bzyjf_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(160, 82, 45);
  };
  protoOf(Colors).get_Silver_4c4l6e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(192, 192, 192);
  };
  protoOf(Colors).get_SkyBlue_6hycxa_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(135, 206, 235);
  };
  protoOf(Colors).get_SlateBlue_ac83li_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(106, 90, 205);
  };
  protoOf(Colors).get_SlateGray_ac4sod_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(112, 128, 144);
  };
  protoOf(Colors).get_SlateGrey_ac4skx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(112, 128, 144);
  };
  protoOf(Colors).get_Snow_wo9zos_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 250);
  };
  protoOf(Colors).get_SpringGreen_t4r3al_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 127);
  };
  protoOf(Colors).get_SteelBlue_c5x5vo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(70, 130, 180);
  };
  protoOf(Colors).get_Tan_18jje0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(210, 180, 140);
  };
  protoOf(Colors).get_Teal_woafnp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 128, 128);
  };
  protoOf(Colors).get_Thistle_6jdsp2_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(216, 191, 216);
  };
  protoOf(Colors).get_Tomato_4wh6wj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 99, 71);
  };
  protoOf(Colors).get_Turquoise_toawfc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(64, 224, 208);
  };
  protoOf(Colors).get_Violet_5rb5wo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(238, 130, 238);
  };
  protoOf(Colors).get_Wheat_ij43a6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 222, 179);
  };
  protoOf(Colors).get_White_ij46ow_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 255);
  };
  protoOf(Colors).get_WhiteSmoke_gvtxtb_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 245, 245);
  };
  protoOf(Colors).get_Yellow_746xzx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 0);
  };
  protoOf(Colors).get_YellowGreen_wl0z8m_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(154, 205, 50);
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function toDegrees(_this__u8e3s4) {
    var tmp;
    switch (toString_0(_this__u8e3s4.unit)) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / get_PI();
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var tmp0_error = 'Unexpected unit type ' + _this__u8e3s4.unit;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
    return tmp % 360.0;
  }
  function lightened(_this__u8e3s4, byPercent) {
    var tmp;
    if (byPercent === VOID) {
      Companion_getInstance_8();
      tmp = 0.3;
    } else {
      tmp = byPercent;
    }
    byPercent = tmp;
    return _this__u8e3s4.inverted_adp911_k$().darkened_3k65o0_k$(byPercent).inverted_adp911_k$();
  }
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaRequired(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaRequired$lambda(value));
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaInvalid(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaInvalid$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.attr_z3nk29_k$('aria-hidden', $value.toString());
      return Unit_getInstance();
    };
  }
  function ariaRequired$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.attr_z3nk29_k$('aria-required', $value.toString());
      return Unit_getInstance();
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.attr_z3nk29_k$('aria-disabled', $value.toString());
      return Unit_getInstance();
    };
  }
  function ariaInvalid$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.attr_z3nk29_k$('aria-invalid', $value.toString());
      return Unit_getInstance();
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_getInstance();
    };
  }
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda(scope));
  }
  function _get_styleScope__yp0uyw($this) {
    return $this.styleScope_1;
  }
  function _get_subproperty__gwyexo($this) {
    return $this.subproperty_1;
  }
  function get_$stableprop_34() {
    return 8;
  }
  function BorderScope(styleScope, subproperty) {
    subproperty = subproperty === VOID ? '' : subproperty;
    this.styleScope_1 = styleScope;
    this.subproperty_1 = subproperty;
    this.$stable_1 = 8;
  }
  protoOf(BorderScope).color_l9e3mp_k$ = function (color) {
    return borderColor(this.styleScope_1, color);
  };
  protoOf(BorderScope).style_rtp57f_k$ = function (lineStyle) {
    return borderStyle(this.styleScope_1, lineStyle);
  };
  protoOf(BorderScope).width_s81s8c_k$ = function (width) {
    return borderWidth(this.styleScope_1, width);
  };
  protoOf(BorderScope).width_vntn6z_k$ = function (topAndBottom, leftAndRight) {
    return borderWidth_0(this.styleScope_1, topAndBottom, leftAndRight);
  };
  protoOf(BorderScope).width_9jv8ss_k$ = function (top, leftAndRight, bottom) {
    return borderWidth_1(this.styleScope_1, top, leftAndRight, bottom);
  };
  protoOf(BorderScope).width_zbfbcl_k$ = function (top, right, bottom, left) {
    return borderWidth_2(this.styleScope_1, top, right, bottom, left);
  };
  function borderRadius_0(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_1(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda_0(width, style, color));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_getInstance();
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      border($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return styleModifier(_this__u8e3s4, boxShadow$lambda(offsetX, offsetY, blurRadius, spreadRadius, color, inset));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset);
      return Unit_getInstance();
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_getInstance();
    };
  }
  function opacity_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function opacity_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda_0(value));
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function opacity$lambda_0($value) {
    return function ($this$styleModifier) {
      opacity_0($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_getInstance();
    };
  }
  function visibility_0(_this__u8e3s4, visibility) {
    return styleModifier(_this__u8e3s4, visibility$lambda(visibility));
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function visibility$lambda($visibility) {
    return function ($this$styleModifier) {
      visibility($this$styleModifier, $visibility);
      return Unit_getInstance();
    };
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function id_0(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$($classes.slice());
      return Unit_getInstance();
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.id_xxyy5i_k$($value);
      return Unit_getInstance();
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function disabled_0(_this__u8e3s4) {
    return attrsModifier(_this__u8e3s4, disabled$lambda);
  }
  function disabled$lambda($this$attrsModifier) {
    disabled($this$attrsModifier);
    return Unit_getInstance();
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_getInstance();
    };
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.tabIndex_coguxw_k$($value);
      return Unit_getInstance();
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_getInstance();
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_getInstance();
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.onClick_3adsri_k$($listener);
      return Unit_getInstance();
    };
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function maxHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, maxHeight$lambda(size));
  }
  function padding_0(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda(top, right, bottom, left));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function padding_2(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda_1(all));
  }
  function overflow_0(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda(overflow));
  }
  function size(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, size$lambda(size));
  }
  function resize_0(_this__u8e3s4, resize) {
    return styleModifier(_this__u8e3s4, resize$lambda(resize));
  }
  function margin_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda(all));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function padding_3(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_2(top, leftRight, bottom));
  }
  function margin_1(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_0(top, right, bottom, left));
  }
  function margin_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, leftRight, bottom));
  }
  function _get_styleScope__yp0uyw_0($this) {
    return $this.styleScope_1;
  }
  function get_$stableprop_35() {
    return 8;
  }
  function OverflowScope(styleScope) {
    this.styleScope_1 = styleScope;
    this.$stable_1 = 8;
  }
  protoOf(OverflowScope).x_x8a8vs_k$ = function (overflowX_0) {
    return overflowX(this.styleScope_1, overflowX_0);
  };
  protoOf(OverflowScope).y_1audnb_k$ = function (overflowY_0) {
    return overflowY(this.styleScope_1, overflowY_0);
  };
  function maxWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(size));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function margin_3(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_2(topBottom, leftRight));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function overflow_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(scope));
  }
  function zIndex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, zIndex$lambda(value));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function maxHeight$lambda($size) {
    return function ($this$styleModifier) {
      maxHeight($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function padding$lambda($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString_0($value));
      return Unit_getInstance();
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function overflow$lambda($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function resize$lambda($resize) {
    return function ($this$styleModifier) {
      resize($this$styleModifier, $resize);
      return Unit_getInstance();
    };
  }
  function margin$lambda($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_0($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function maxWidth$lambda($size) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function margin$lambda_2($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function overflow$lambda_0($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_getInstance();
    };
  }
  function zIndex$lambda($value) {
    return function ($this$styleModifier) {
      zIndex($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_getInstance();
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_getInstance();
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, $type, $position, $image);
      return Unit_getInstance();
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_getInstance();
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_getInstance();
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      top($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      left($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      right($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      bottom($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function scrollBehavior_0(_this__u8e3s4, scrollBehavior) {
    return styleModifier(_this__u8e3s4, scrollBehavior$lambda(scrollBehavior));
  }
  function scrollBehavior$lambda($scrollBehavior) {
    return function ($this$styleModifier) {
      scrollBehavior($this$styleModifier, $scrollBehavior);
      return Unit_getInstance();
    };
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_getInstance();
    };
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_getInstance();
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_getInstance();
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_getInstance();
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_getInstance();
    };
  }
  function transition_0(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_getInstance();
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_getInstance();
    };
  }
  function setVariable_1(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable_2(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda_0(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(BoxScopeInstance).align_8yhdm5_k$ = align;
  protoOf(ColumnScopeInstance).align_xk6b6i_k$ = align_0;
  protoOf(ColumnScopeInstance).weight_6kztfe_k$ = weight;
  protoOf(RowScopeInstance).align_oawnis_k$ = align_1;
  protoOf(RowScopeInstance).weight_6kztfe_k$ = weight;
  protoOf(KobwebComposeStyleSheet).style_4edtvi_k$ = style;
  protoOf(KobwebComposeStyleSheet).style_5otx79_k$ = style_0;
  protoOf(KobwebComposeStyleSheet).style_68ppe6_k$ = style_1;
  protoOf(KobwebComposeStyleSheet).invoke_qvgdhg_k$ = invoke;
  protoOf(KobwebComposeStyleSheet).invoke_wa7zhx_k$ = invoke_0;
  protoOf(KobwebComposeStyleSheet).selector_vsua3m_k$ = selector;
  protoOf(KobwebComposeStyleSheet).combine_75bnet_k$ = combine;
  protoOf(KobwebComposeStyleSheet).plus_nlz2mk_k$ = plus;
  protoOf(KobwebComposeStyleSheet).plus_85zybx_k$ = plus_0;
  protoOf(KobwebComposeStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(KobwebComposeStyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(KobwebComposeStyleSheet).type_gwc96h_k$ = type;
  protoOf(KobwebComposeStyleSheet).className_ykinvi_k$ = className;
  protoOf(KobwebComposeStyleSheet).id_xxyy5i_k$ = id;
  protoOf(KobwebComposeStyleSheet).attr_8c4xcm_k$ = attr;
  protoOf(KobwebComposeStyleSheet).attr$default_c3gqj1_k$ = attr$default;
  protoOf(KobwebComposeStyleSheet).attrEquals_ekinah_k$ = attrEquals;
  protoOf(KobwebComposeStyleSheet).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(KobwebComposeStyleSheet).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(KobwebComposeStyleSheet).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(KobwebComposeStyleSheet).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(KobwebComposeStyleSheet).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(KobwebComposeStyleSheet).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(KobwebComposeStyleSheet).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(KobwebComposeStyleSheet).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(KobwebComposeStyleSheet).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(KobwebComposeStyleSheet).attrContains_2muovr_k$ = attrContains;
  protoOf(KobwebComposeStyleSheet).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(KobwebComposeStyleSheet).group_po2tbv_k$ = group;
  protoOf(KobwebComposeStyleSheet).descendant_x63x3d_k$ = descendant;
  protoOf(KobwebComposeStyleSheet).desc_ej3sir_k$ = desc;
  protoOf(KobwebComposeStyleSheet).desc_8daddi_k$ = desc_0;
  protoOf(KobwebComposeStyleSheet).desc_npizau_k$ = desc_1;
  protoOf(KobwebComposeStyleSheet).desc_w7b77z_k$ = desc_2;
  protoOf(KobwebComposeStyleSheet).child_4w4v4o_k$ = child;
  protoOf(KobwebComposeStyleSheet).sibling_tzh2by_k$ = sibling;
  protoOf(KobwebComposeStyleSheet).adjacent_gxbr7y_k$ = adjacent;
  protoOf(KobwebComposeStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(KobwebComposeStyleSheet).hover_gby0bi_k$ = hover;
  protoOf(KobwebComposeStyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(KobwebComposeStyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(KobwebComposeStyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(KobwebComposeStyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(KobwebComposeStyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(KobwebComposeStyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(KobwebComposeStyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(KobwebComposeStyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(KobwebComposeStyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(KobwebComposeStyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(KobwebComposeStyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(KobwebComposeStyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(KobwebComposeStyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(KobwebComposeStyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(KobwebComposeStyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(KobwebComposeStyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(KobwebComposeStyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(KobwebComposeStyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(KobwebComposeStyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(KobwebComposeStyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(KobwebComposeStyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(KobwebComposeStyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(KobwebComposeStyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(KobwebComposeStyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(KobwebComposeStyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(KobwebComposeStyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(KobwebComposeStyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(KobwebComposeStyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(KobwebComposeStyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(KobwebComposeStyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(KobwebComposeStyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(KobwebComposeStyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(KobwebComposeStyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(KobwebComposeStyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(KobwebComposeStyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(KobwebComposeStyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(KobwebComposeStyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(KobwebComposeStyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(KobwebComposeStyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(KobwebComposeStyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(KobwebComposeStyleSheet).host_93x8z6_k$ = host;
  protoOf(KobwebComposeStyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(KobwebComposeStyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(KobwebComposeStyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(KobwebComposeStyleSheet).lang_xkki7h_k$ = lang;
  protoOf(KobwebComposeStyleSheet).nthChild_tigwrk_k$ = nthChild;
  protoOf(KobwebComposeStyleSheet).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(KobwebComposeStyleSheet).nthOfType_n46p53_k$ = nthOfType;
  protoOf(KobwebComposeStyleSheet).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(KobwebComposeStyleSheet).not_di0wzr_k$ = not;
  protoOf(KobwebComposeStyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(KobwebComposeStyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(KobwebComposeStyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(KobwebComposeStyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(KobwebComposeStyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(KobwebComposeStyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(KobwebComposeStyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(KobwebComposeStyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(KobwebComposeStyleSheet).slotted_iujblx_k$ = slotted;
  protoOf(ChainedModifier).then_6jcr1i_k$ = then;
  protoOf(StyleModifier).fold_s9dnuv_k$ = fold;
  protoOf(StyleModifier).then_6jcr1i_k$ = then;
  protoOf(AttrsModifier).fold_s9dnuv_k$ = fold;
  protoOf(AttrsModifier).then_6jcr1i_k$ = then;
  protoOf(Rgb).darkened$default_a76wb7_k$ = darkened$default;
  protoOf(Hsl).darkened$default_a76wb7_k$ = darkened$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = Column$composable;
  _.$_$.c = Row$composable;
  _.$_$.d = rowClasses;
  _.$_$.e = lightened;
  _.$_$.f = ariaDisabled;
  _.$_$.g = ariaHidden;
  _.$_$.h = ariaInvalid;
  _.$_$.i = ariaRequired;
  _.$_$.j = backgroundColor_0;
  _.$_$.k = borderBottom_0;
  _.$_$.l = borderRadius_0;
  _.$_$.m = borderTop_0;
  _.$_$.n = border_1;
  _.$_$.o = border_0;
  _.$_$.p = bottom_0;
  _.$_$.q = boxShadow_0;
  _.$_$.r = boxSizing_0;
  _.$_$.s = classNames;
  _.$_$.t = color_0;
  _.$_$.u = cursor_0;
  _.$_$.v = disabled_0;
  _.$_$.w = display_0;
  _.$_$.x = fillMaxHeight;
  _.$_$.y = fillMaxSize;
  _.$_$.z = fillMaxWidth;
  _.$_$.a1 = flexGrow_0;
  _.$_$.b1 = fontFamily_0;
  _.$_$.c1 = fontSize_0;
  _.$_$.d1 = fontWeight_0;
  _.$_$.e1 = gap_0;
  _.$_$.f1 = gridTemplateColumns_0;
  _.$_$.g1 = height_0;
  _.$_$.h1 = id_0;
  _.$_$.i1 = left_0;
  _.$_$.j1 = lineHeight_0;
  _.$_$.k1 = listStyle_0;
  _.$_$.l1 = margin_1;
  _.$_$.m1 = margin_3;
  _.$_$.n1 = margin_0;
  _.$_$.o1 = margin_2;
  _.$_$.p1 = maxHeight_0;
  _.$_$.q1 = maxWidth_0;
  _.$_$.r1 = minHeight_0;
  _.$_$.s1 = minWidth_0;
  _.$_$.t1 = objectFit_0;
  _.$_$.u1 = onClick;
  _.$_$.v1 = opacity_2;
  _.$_$.w1 = opacity_1;
  _.$_$.x1 = outline_0;
  _.$_$.y1 = overflow_1;
  _.$_$.z1 = overflow_0;
  _.$_$.a2 = paddingInline_0;
  _.$_$.b2 = padding_2;
  _.$_$.c2 = padding_0;
  _.$_$.d2 = padding_3;
  _.$_$.e2 = padding_1;
  _.$_$.f2 = position_0;
  _.$_$.g2 = resize_0;
  _.$_$.h2 = right_0;
  _.$_$.i2 = scrollBehavior_0;
  _.$_$.j2 = setVariable_1;
  _.$_$.k2 = setVariable_2;
  _.$_$.l2 = size;
  _.$_$.m2 = tabIndex;
  _.$_$.n2 = textAlign_0;
  _.$_$.o2 = textDecorationLine_0;
  _.$_$.p2 = top_0;
  _.$_$.q2 = transition_0;
  _.$_$.r2 = transition_1;
  _.$_$.s2 = translateX_0;
  _.$_$.t2 = userSelect_0;
  _.$_$.u2 = verticalAlign_0;
  _.$_$.v2 = visibility_0;
  _.$_$.w2 = whiteSpace_0;
  _.$_$.x2 = width_0;
  _.$_$.y2 = zIndex_0;
  _.$_$.z2 = Modifier;
  _.$_$.a3 = StyleModifier;
  _.$_$.b3 = attrsModifier;
  _.$_$.c3 = styleModifier;
  _.$_$.d3 = thenIf_0;
  _.$_$.e3 = toAttrs;
  _.$_$.f3 = toStyles;
  _.$_$.g3 = Center_getInstance;
  _.$_$.h3 = SpaceBetween_getInstance;
  _.$_$.i3 = Start_getInstance;
  _.$_$.j3 = Top_getInstance;
  _.$_$.k3 = KobwebComposeStyleSheet_getInstance;
  _.$_$.l3 = Companion_getInstance_8;
  _.$_$.m3 = Colors_getInstance;
  _.$_$.n3 = BottomEnd_getInstance;
  _.$_$.o3 = CenterEnd_getInstance;
  _.$_$.p3 = CenterHorizontally_getInstance;
  _.$_$.q3 = CenterVertically_getInstance;
  _.$_$.r3 = Center_getInstance_0;
  _.$_$.s3 = TopCenter_getInstance;
  _.$_$.t3 = TopStart_getInstance;
  _.$_$.u3 = Companion_getInstance_7;
  //endregion
  return _;
}));
