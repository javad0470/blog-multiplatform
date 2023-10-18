(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.je;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var protoOf = kotlin_kotlin.$_$.da;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var listOf = kotlin_kotlin.$_$.v6;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var ComponentStyle$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var isObject = kotlin_kotlin.$_$.t9;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var ariaInvalid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var ariaRequired = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Unit = kotlin_kotlin.$_$.md;
  var isNumber = kotlin_kotlin.$_$.s9;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var autoComplete = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Label$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var Enum = kotlin_kotlin.$_$.sc;
  var classMeta = kotlin_kotlin.$_$.w8;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var minus = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var registerRefScope$composable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var Checkbox_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var getValue = kotlin_kotlin.$_$.h6;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j5;
  var mapCapacity = kotlin_kotlin.$_$.w6;
  var coerceAtLeast = kotlin_kotlin.$_$.ja;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var KMutableProperty0 = kotlin_kotlin.$_$.qa;
  var THROW_ISE = kotlin_kotlin.$_$.cd;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b9;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.q9;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var base$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var ColorSchemes_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(MD, 'MD', objectMeta);
  setMetadataFor(InputDefaults, 'InputDefaults', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  function get_padding() {
    return get_cssRem(0.188);
  }
  setMetadataFor(SwitchSize, 'SwitchSize', interfaceMeta);
  setMetadataFor(MD_0, 'MD', objectMeta, VOID, [SwitchSize]);
  setMetadataFor(LG, 'LG', objectMeta, VOID, [SwitchSize]);
  setMetadataFor(SwitchShape, 'SwitchShape', classMeta, Enum);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$composable$lambda$lambda$slambda, 'Surface$composable$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(BorderRadiusVars, 'BorderRadiusVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.v2j(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.v2j(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.v2j(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.v2j(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabVars() {
    TabVars_instance = this;
    this.a47_1 = StyleVariable(VOID, 'silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n2j();
    tmp.b47_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.c47_1 = StyleVariable(VOID, 'silk');
    this.d47_1 = StyleVariable(VOID, 'silk');
    this.e47_1 = StyleVariable(VOID, 'silk');
    this.f47_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.g47_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().s2f().n2j();
    tmp_1.h47_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.i47_1 = 0;
  }
  protoOf(TabVars).s47 = function () {
    return this.a47_1.v2j(this, Color$factory());
  };
  protoOf(TabVars).t47 = function () {
    return this.b47_1.v2j(this, BorderColor$factory());
  };
  protoOf(TabVars).u47 = function () {
    return this.c47_1.v2j(this, BackgroundColor$factory());
  };
  protoOf(TabVars).v47 = function () {
    return this.d47_1.v2j(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).w47 = function () {
    return this.e47_1.v2j(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).x47 = function () {
    return this.f47_1.v2j(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).y47 = function () {
    return this.g47_1.v2j(this, BorderThickness$factory());
  };
  protoOf(TabVars).z47 = function () {
    return this.h47_1.v2j(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_getInstance();
  }
  function TabsTabRowStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_getInstance());
    var tmp_0 = TabVars_getInstance().y47().n2j();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().t47().n2j());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.ny(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:51)');
    }
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.k3q(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.j3s(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.j3s(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.j3s(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().m2f()), Companion_getInstance_2().l2k(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().z47().n2j()).slice()), TabVars_getInstance().u47().n2j()), TabVars_getInstance().s47().n2j()), Companion_getInstance_3().k2i()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().y47().n2j();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().t47().n2j());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.i2f(TabVars_getInstance().y47().n2j());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), TabVars_getInstance().v47().n2j()), Companion_getInstance_1().n2f());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().w47().n2j());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().x47().n2j());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.r3n(Companion_getInstance_4().x2i());
    return Unit_getInstance();
  }
  function TabsStyle$factory() {
    return getPropertyCallableRef('TabsStyle', 0, KProperty0, function () {
      return get_TabsStyle();
    }, null);
  }
  function TabsTabRowStyle$factory() {
    return getPropertyCallableRef('TabsTabRowStyle', 0, KProperty0, function () {
      return get_TabsTabRowStyle();
    }, null);
  }
  function TabsTabStyle$factory() {
    return getPropertyCallableRef('TabsTabStyle', 0, KProperty0, function () {
      return get_TabsTabStyle();
    }, null);
  }
  function TabsPanelStyle$factory() {
    return getPropertyCallableRef('TabsPanelStyle', 0, KProperty0, function () {
      return get_TabsPanelStyle();
    }, null);
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.s47();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.t47();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u47();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.v47();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.w47();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.x47();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.y47();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.z47();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle$delegate = ComponentStyle(VOID, 'silk', TabsStyle$delegate$lambda);
      var tmp = Companion_getInstance_5();
      TabsTabRowStyle$delegate = base(tmp, VOID, 'silk', TabsTabRowStyle$delegate$lambda);
      var tmp_0 = TabsTabStyle$delegate$lambda;
      TabsTabStyle$delegate = ComponentStyle$composable(tmp_0, 'silk', TabsTabStyle$delegate$lambda_0);
      var tmp_1 = Companion_getInstance_5();
      TabsPanelStyle$delegate = base(tmp_1, VOID, 'silk', TabsPanelStyle$delegate$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.v2j(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.a48_1 = StyleVariable(VOID, 'silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().n2j();
    tmp.b48_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.c48_1 = StyleVariable(VOID, 'silk');
    this.d48_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().n2j();
    tmp_0.e48_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().s2f().n2j();
    tmp_1.f48_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.g48_1 = StyleVariable(VOID, 'silk');
    this.h48_1 = StyleVariable(VOID, 'silk');
    this.i48_1 = StyleVariable(VOID, 'silk');
    this.j48_1 = 0;
  }
  protoOf(ButtonVars).k48 = function () {
    return this.a48_1.v2j(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).l48 = function () {
    return this.b48_1.v2j(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).m48 = function () {
    return this.c48_1.v2j(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).n48 = function () {
    return this.d48_1.v2j(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).s47 = function () {
    return this.e48_1.v2j(this, Color$factory_0());
  };
  protoOf(ButtonVars).z47 = function () {
    return this.f48_1.v2j(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).o48 = function () {
    return this.g48_1.v2j(this, FontSize$factory());
  };
  protoOf(ButtonVars).p48 = function () {
    return this.h48_1.v2j(this, Height$factory());
  };
  protoOf(ButtonVars).q48 = function () {
    return this.i48_1.v2j(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.k3q(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.j3s(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.j3s(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.j3s(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_getInstance(), ButtonVars_getInstance().s47().n2j()), ButtonVars_getInstance().k48().n2j()), 1.2), ButtonVars_getInstance().p48().n2j()), ButtonVars_getInstance().p48().n2j()), ButtonVars_getInstance().o48().n2j()), Companion_getInstance_6().r2f()), Companion_getInstance_7().b2k()), VOID, ButtonVars_getInstance().q48().n2j()), Companion_getInstance_8().h2i()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_getInstance_3().k2i()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().z47().n2j())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.o3n(get_px(0));
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), ButtonVars_getInstance().m48().n2j()), Companion_getInstance_1().m2f());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_getInstance().u3m()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().l48().n2j());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), ButtonVars_getInstance().n48().n2j());
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.k48();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.l48();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.m48();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.n48();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.s47();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.z47();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.o48();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.p48();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.q48();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle$delegate = ComponentStyle(VOID, 'silk', ButtonStyle$delegate$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle$delegate.v2j(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.v2j(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.v2j(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.v2j(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.v2j(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.v2j(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.v2j(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n2j();
    tmp.r48_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.s48_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.t48_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.u48_1 = StyleVariable(VOID, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.v48_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.w48_1 = StyleVariable(VOID, 'silk');
    this.x48_1 = StyleVariable(VOID, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().n2j();
    tmp_3.y48_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.z48_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    this.a49_1 = StyleVariable(VOID, 'silk');
    this.b49_1 = StyleVariable(VOID, 'silk');
    this.c49_1 = StyleVariable(VOID, 'silk');
    this.d49_1 = StyleVariable(VOID, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().g49().n2j();
    tmp_5.e49_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    this.f49_1 = 0;
  }
  protoOf(CheckboxVars).t47 = function () {
    return this.r48_1.v2j(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).h49 = function () {
    return this.s48_1.v2j(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).i49 = function () {
    return this.t48_1.v2j(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).j49 = function () {
    return this.u48_1.v2j(this, Size$factory());
  };
  protoOf(CheckboxVars).k49 = function () {
    return this.v48_1.v2j(this, Spacing$factory());
  };
  protoOf(CheckboxVars).o48 = function () {
    return this.w48_1.v2j(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).l49 = function () {
    return this.x48_1.v2j(this, IconSize$factory());
  };
  protoOf(CheckboxVars).m49 = function () {
    return this.y48_1.v2j(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).n49 = function () {
    return this.z48_1.v2j(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).o49 = function () {
    return this.a49_1.v2j(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).p49 = function () {
    return this.b49_1.v2j(this, IconColor$factory());
  };
  protoOf(CheckboxVars).q49 = function () {
    return this.c49_1.v2j(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).r49 = function () {
    return this.d49_1.v2j(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).s49 = function () {
    return this.e49_1.v2j(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.k3q(CheckboxStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return cursor(fontSize(userSelect(gap(Companion_getInstance(), CheckboxVars_getInstance().k49().n2j()), Companion_getInstance_3().k2i()), CheckboxVars_getInstance().o48().n2j()), Companion_getInstance_1().m2f());
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.a3o(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.b3o(CheckboxEnabledAnim$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 0);
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 1);
  }
  function CheckboxIconContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.k3q(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_getInstance(), CheckboxVars_getInstance().l49().n2j()), CheckboxVars_getInstance().j49().n2j());
    var tmp_0 = CheckboxVars_getInstance().i49().n2j();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().t47().n2j()), CheckboxVars_getInstance().h49().n2j()), Companion_getInstance_2().l2k(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().s49().n2j()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().o49().n2j());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.k3q(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().q49().n2j());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.m3n(CheckboxVars_getInstance().q49().n2j());
    return Unit_getInstance();
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_getInstance(), CheckboxVars_getInstance().j49().n2j()), CheckboxVars_getInstance().p49().n2j());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.k3q(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.m3q(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.m3q(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_getInstance();
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, CheckboxVars_getInstance().n49().n2j(), CheckboxVars_getInstance().m49().n2j());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_getInstance(), CheckboxVars_getInstance().q49(), CheckboxVars_getInstance().r49().n2j());
  }
  function CheckboxStyle$factory() {
    return getPropertyCallableRef('CheckboxStyle', 0, KProperty0, function () {
      return get_CheckboxStyle();
    }, null);
  }
  function CheckboxEnabledAnim$factory() {
    return getPropertyCallableRef('CheckboxEnabledAnim', 0, KProperty0, function () {
      return get_CheckboxEnabledAnim();
    }, null);
  }
  function CheckboxIconContainerStyle$factory() {
    return getPropertyCallableRef('CheckboxIconContainerStyle', 0, KProperty0, function () {
      return get_CheckboxIconContainerStyle();
    }, null);
  }
  function UncheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('UncheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_UncheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('CheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_CheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckboxIconStyle$factory() {
    return getPropertyCallableRef('CheckboxIconStyle', 0, KProperty0, function () {
      return get_CheckboxIconStyle();
    }, null);
  }
  function CheckboxInputVariant$factory() {
    return getPropertyCallableRef('CheckboxInputVariant', 0, KProperty0, function () {
      return get_CheckboxInputVariant();
    }, null);
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.t47();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h49();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.i49();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.j49();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.k49();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.o48();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.l49();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.m49();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.n49();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.o49();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.p49();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.q49();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.r49();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s49();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp0_extraModifiers = rowClasses(Companion_getInstance(), VOID, CenterVertically_getInstance());
      CheckboxStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', CheckboxStyle$delegate$lambda);
      CheckboxEnabledAnim$delegate = Keyframes('silk', CheckboxEnabledAnim$delegate$lambda);
      CheckboxIconContainerStyle$delegate = ComponentStyle(VOID, 'silk', CheckboxIconContainerStyle$delegate$lambda);
      var tmp = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant$delegate = addVariantBase(tmp, VOID, UncheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant$delegate = addVariant(tmp_0, VOID, CheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_1 = Companion_getInstance_5();
      CheckboxIconStyle$delegate = base(tmp_1, VOID, 'silk', CheckboxIconStyle$delegate$lambda);
      var tmp_2 = get_InputStyle();
      CheckboxInputVariant$delegate = addVariant(tmp_2, VOID, CheckboxInputVariant$delegate$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle$delegate.v2j(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.v2j(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.v2j(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.v2j(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.v2j(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.v2j(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n2j();
    tmp.t49_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.u49_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().n2j();
    tmp_0.v49_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.w49_1 = StyleVariable(VOID, 'silk');
    this.x49_1 = StyleVariable(VOID, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().s2f().n2j();
    tmp_1.y49_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.z49_1 = StyleVariable(VOID, 'silk');
    this.a4a_1 = StyleVariable(VOID, 'silk');
    this.b4a_1 = StyleVariable(VOID, 'silk');
    this.c4a_1 = StyleVariable(VOID, 'silk');
    this.d4a_1 = StyleVariable(VOID, 'silk');
    this.e4a_1 = StyleVariable(VOID, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().n2j();
    tmp_2.f4a_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().n2j();
    tmp_3.g4a_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.h4a_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.i4a_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    this.j4a_1 = 0;
  }
  protoOf(InputVars).t47 = function () {
    return this.t49_1.v2j(this, BorderColor$factory_1());
  };
  protoOf(InputVars).h49 = function () {
    return this.u49_1.v2j(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).k4a = function () {
    return this.v49_1.v2j(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).l4a = function () {
    return this.w49_1.v2j(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).m4a = function () {
    return this.x49_1.v2j(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).z47 = function () {
    return this.y49_1.v2j(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).n4a = function () {
    return this.z49_1.v2j(this, FilledColor$factory());
  };
  protoOf(InputVars).o4a = function () {
    return this.a4a_1.v2j(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).p4a = function () {
    return this.b4a_1.v2j(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).o48 = function () {
    return this.c4a_1.v2j(this, FontSize$factory_1());
  };
  protoOf(InputVars).p48 = function () {
    return this.d4a_1.v2j(this, Height$factory_0());
  };
  protoOf(InputVars).q4a = function () {
    return this.e4a_1.v2j(this, Padding$factory());
  };
  protoOf(InputVars).r4a = function () {
    return this.f4a_1.v2j(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).s4a = function () {
    return this.g4a_1.v2j(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().q4a().n2j();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Input$composable_0(type, value, onValueChanged, modifier, variant, placeholder, size, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var size_0 = {_v: size};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1200462527);
    sourceInformation($composer_0, 'C(Input$composable)P(14,16,6,4,17,7,12,1,15,11,9,13!1,5,8)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onValueChanged) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.gz(variant_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.gz(placeholder_0._v) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.gz(size_0._v) : false) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.hz(enabled_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.hz(valid_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.hz(required_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.hz(readOnly_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.hz(spellCheck_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(autoComplete_0._v) ? 256 : 128);
    if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ((($default & 8192) === 0 ? $composer_0.jz(onCommit_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(placeholderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(focusBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(invalidBorderColor_0._v) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(ref_0._v) ? 8388608 : 4194304);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 23967451) === 4793490)) ? true : !$composer_0.ky()) {
      $composer_0.ry();
      if (($changed & 1) === 0 ? true : $composer_0.ly()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          variant_0._v = InputDefaults_getInstance().z4a_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          size_0._v = InputDefaults_getInstance().y4a_1;
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          InputDefaults_getInstance();
          enabled_0._v = true;
        }
        if (!(($default & 256) === 0)) {
          InputDefaults_getInstance();
          valid_0._v = true;
        }
        if (!(($default & 512) === 0)) {
          InputDefaults_getInstance();
          required_0._v = false;
        }
        if (!(($default & 1024) === 0)) {
          InputDefaults_getInstance();
          readOnly_0._v = false;
        }
        if (!(($default & 2048) === 0)) {
          InputDefaults_getInstance();
          spellCheck_0._v = false;
        }
        if (!(($default & 4096) === 0)) {
          autoComplete_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_9().hy_1) {
            // Inline function 'com.varabyte.kobweb.silk.components.forms.Input$composable.<anonymous>' call
            var value_0 = Input$composable$lambda;
            $composer_1.fz(value_0);
            tmp = value_0;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.oy();
          onCommit_0._v = tmp0;
          $dirty1 = $dirty1 & -7169;
        }
        if (!(($default & 16384) === 0)) {
          placeholderColor_0._v = null;
        }
        if (!(($default & 32768) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          invalidBorderColor_0._v = null;
        }
        if (!(($default & 131072) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.yy();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 8192) === 0))
          $dirty1 = $dirty1 & -7169;
      }
      $composer_0.sy();
      if (isTraceInProgress()) {
        traceEventStart(1200462527, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms.Input$composable (Input.kt:631)');
      }
      _Input$composable(type, value, onValueChanged, toModifier(size_0._v).s3l(modifier_0._v), variant_0._v, placeholder_0._v, enabled_0._v, valid_0._v, required_0._v, readOnly_0._v, spellCheck_0._v, autoComplete_0._v, onCommit_0._v, placeholderColor_0._v, focusBorderColor_0._v, invalidBorderColor_0._v, ref_0._v, $composer_0, 14 & $dirty | (8 & $dirty >> 3) << 3 | 112 & $dirty | 896 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 14 & $dirty1 >> 3 | 112 & $dirty1 >> 3 | 896 & $dirty1 >> 3 | 7168 & $dirty1 >> 3 | 57344 & $dirty1 >> 3 | 458752 & $dirty1 >> 3 | 3670016 & $dirty1 >> 3, 0);
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
      tmp0_safe_receiver.r1d(Input$composable$lambda_0(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, size_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function MD() {
    MD_instance = this;
    this.b4b_1 = FontSizeVars_getInstance().l4b().n2j();
    this.c4b_1 = get_cssRem(2.25);
    this.d4b_1 = get_cssRem(0.625);
    this.e4b_1 = BorderRadiusVars_getInstance().l4b().n2j();
    this.f4b_1 = 0;
  }
  protoOf(MD).r4b = function () {
    return this.b4b_1;
  };
  protoOf(MD).s4b = function () {
    return this.c4b_1;
  };
  protoOf(MD).t4b = function () {
    return this.d4b_1;
  };
  protoOf(MD).u4b = function () {
    return this.e4b_1;
  };
  var MD_instance;
  function MD_getInstance() {
    if (MD_instance == null)
      new MD();
    return MD_instance;
  }
  function InputDefaults() {
    InputDefaults_instance = this;
    this.t4a_1 = true;
    this.u4a_1 = true;
    this.v4a_1 = false;
    this.w4a_1 = false;
    this.x4a_1 = false;
    this.y4a_1 = MD_getInstance();
    this.z4a_1 = get_OutlinedInputVariant();
    this.a4b_1 = 0;
  }
  var InputDefaults_instance;
  function InputDefaults_getInstance() {
    if (InputDefaults_instance == null)
      new InputDefaults();
    return InputDefaults_instance;
  }
  function _Input$composable(type, value, onValueChanged, modifier, variant, placeholder, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1635273663);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onValueChanged) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.gz(variant_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.gz(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.hz(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.hz(valid_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.hz(required_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.hz(readOnly_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.hz(spellCheck_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(autoComplete_0._v) ? 32 : 16);
    if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ((($default & 4096) === 0 ? $composer_0.jz(onCommit_0._v) : false) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(placeholderColor_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(focusBorderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(invalidBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(ref_0._v) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.ky()) {
      $composer_0.ry();
      if (($changed & 1) === 0 ? true : $composer_0.ly()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          InputDefaults_getInstance();
          enabled_0._v = true;
        }
        if (!(($default & 128) === 0)) {
          InputDefaults_getInstance();
          valid_0._v = true;
        }
        if (!(($default & 256) === 0)) {
          InputDefaults_getInstance();
          required_0._v = false;
        }
        if (!(($default & 512) === 0)) {
          InputDefaults_getInstance();
          readOnly_0._v = false;
        }
        if (!(($default & 1024) === 0)) {
          InputDefaults_getInstance();
          spellCheck_0._v = false;
        }
        if (!(($default & 2048) === 0)) {
          autoComplete_0._v = null;
        }
        if (!(($default & 4096) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_9().hy_1) {
            // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
            var value_0 = _Input$composable$lambda;
            $composer_1.fz(value_0);
            tmp = value_0;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.oy();
          onCommit_0._v = tmp0;
          $dirty1 = $dirty1 & -897;
        }
        if (!(($default & 8192) === 0)) {
          placeholderColor_0._v = null;
        }
        if (!(($default & 16384) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 32768) === 0)) {
          invalidBorderColor_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.yy();
        if (!(($default & 4096) === 0))
          $dirty1 = $dirty1 & -897;
      }
      $composer_0.sy();
      if (isTraceInProgress()) {
        traceEventStart(-1635273663, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms._Input$composable (Input.kt:476)');
      }
      $composer_0.ny(-736449099);
      if (!(ref_0._v == null)) {
        var tmp_1 = Companion_getInstance();
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_10();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = toAttrs(display(tmp_1, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 61734468, true, _Input$composable$lambda_0(ref_0, $dirty1));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2.gz(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_2.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().hy_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_2.fz(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = tmp0_let_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        $composer_2.oy();
        Div$composable(tmp_2, tmp0_0, $composer_0, 48, 0);
      }
      $composer_0.oy();
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_6 = toModifier$composable(get_InputStyle(), [variant_0._v], $composer_0, 0);
      var tmp0_safe_receiver = placeholderColor_0._v;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toModifier_0(tmp0_safe_receiver);
      var tmp2_thenIf = setVariable(setVariable(tmp_6.s3l(tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs), InputVars_getInstance().k4a(), focusBorderColor_0._v), InputVars_getInstance().m4a(), invalidBorderColor_0._v);
      var tmp_7;
      if (!valid_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_7 = setVariable(ariaInvalid(Companion_getInstance()), InputVars_getInstance().t47(), InputVars_getInstance().m4a().n2j());
      } else {
        tmp_7 = Companion_getInstance();
      }
      var tmp4_thenIf = tmp2_thenIf.s3l(tmp_7);
      var tmp_8;
      if (!enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_8 = ariaDisabled(Companion_getInstance());
      } else {
        tmp_8 = Companion_getInstance();
      }
      var tmp6_thenIf = tmp4_thenIf.s3l(tmp_8);
      var tmp_9;
      if (required_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_9 = ariaRequired(Companion_getInstance());
      } else {
        tmp_9 = Companion_getInstance();
      }
      var tmp_10 = tmp6_thenIf.s3l(tmp_9).s3l(modifier_0._v);
      Input$composable(type, toAttrs(tmp_10, _Input$composable$lambda_1(value, placeholder_0, enabled_0, readOnly_0, required_0, spellCheck_0, autoComplete_0, onValueChanged, type, valid_0, onCommit_0)), $composer_0, 14 & $dirty);
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
      tmp0_safe_receiver_0.r1d(_Input$composable$lambda_2(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function toModifier(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), InputVars_getInstance().h49(), _this__u8e3s4.u4b()), InputVars_getInstance().o48(), _this__u8e3s4.r4b()), InputVars_getInstance().p48(), _this__u8e3s4.s4b()), InputVars_getInstance().q4a(), _this__u8e3s4.t4b());
  }
  function toModifier_0(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable_0(setVariable(Companion_getInstance(), InputVars_getInstance().s4a(), _this__u8e3s4.v4b_1), InputVars_getInstance().r4a(), _this__u8e3s4.w4b_1);
  }
  function InputGroupStyle$delegate$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().u3m());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_getInstance().u3m()), InputVars_getInstance().h49().n2j()), InputVars_getInstance().o48().n2j());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.k3q(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.j3s(InputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = backgroundColor(fontSize(height(color(styleModifier(tmp, InputStyle$delegate$lambda$lambda$lambda), get_ColorVar().n2j()), InputVars_getInstance().p48().n2j()), InputVars_getInstance().o48().n2j()), Colors_getInstance().u3m());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = outline(tmp_0, tmp_1, 'solid', Colors_getInstance().u3m());
    var tmp_3 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_2, tmp_3, 'solid', Colors_getInstance().u3m()), Companion_getInstance_2().l2k(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().z47().n2j()));
  }
  function InputStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_Input_kt__b04mg8();
    $this$styleModifier.l28('appearance', 'none');
    return Unit_getInstance();
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_getInstance(), InputVars_getInstance().r4a().n2j()), InputVars_getInstance().s4a().n2j());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k3q(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.j3s(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.j3s(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.j3s(OutlinedInputVariant$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_getInstance()), InputVars_getInstance().h49().n2j());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().t47().n2j());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().m4a().n2j());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m3n(InputVars_getInstance().l4a().n2j());
    return Unit_getInstance();
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().k4a().n2j());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k3q(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.j3s(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.j3s(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.j3s(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_getInstance()), InputVars_getInstance().n4a().n2j()), InputVars_getInstance().h49().n2j());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_getInstance().u3m());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_getInstance(), InputVars_getInstance().o4a().n2j());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_getInstance(), InputVars_getInstance().m4a().n2j());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_getInstance(), InputVars_getInstance().p4a().n2j()), InputVars_getInstance().k4a().n2j());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m3n($color);
      return Unit_getInstance();
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k3q(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.j3s(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.j3s(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).q3s(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.j3s(FlushedInputVariant$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$delegate$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().t47().n2j());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().m4a().n2j());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m3n(InputVars_getInstance().l4a().n2j());
    return Unit_getInstance();
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().k4a().n2j());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m3n($color);
      return Unit_getInstance();
    };
  }
  function UnstyledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function Input$composable$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function Input$composable$lambda_0($type, $value, $onValueChanged, $modifier, $variant, $placeholder, $size, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Input$composable_0($type, $value, $onValueChanged, $modifier._v, $variant._v, $placeholder._v, $size._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function _Input$composable$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function _Input$composable$lambda$lambda(it) {
    _init_properties_Input_kt__b04mg8();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
  }
  function _Input$composable$lambda_0($ref, $$dirty1) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(61734468, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous> (Input.kt:479)');
        }
        var tmp_1 = $ref._v;
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let === Companion_getInstance_9().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = _Input$composable$lambda$lambda;
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        registerRefScope$composable($this$Div, tmp_1, tmp$ret$4, $composer_0, 14 & $dirty | 112 & $$dirty1 >> 15);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function _Input$composable$lambda$lambda_0($onValueChanged, $type) {
    return function (evt) {
      $onValueChanged($type.t22(evt.a2b_1));
      return Unit_getInstance();
    };
  }
  function _Input$composable$lambda$lambda_1($valid, $onCommit) {
    return function (evt) {
      var tmp;
      if ($valid._v ? evt.u2c_1 === 'Enter' : false) {
        evt.m2b();
        evt.n2b();
        tmp = $onCommit._v();
      }
      return Unit_getInstance();
    };
  }
  function _Input$composable$lambda_1($value, $placeholder, $enabled, $readOnly, $required, $spellCheck, $autoComplete, $onValueChanged, $type, $valid, $onCommit) {
    return function ($this$toAttrs) {
      var tmp0_subject = $value;
      var tmp;
      if (typeof tmp0_subject === 'string') {
        $this$toAttrs.r26($value);
        tmp = Unit_getInstance();
      } else {
        if (isNumber(tmp0_subject)) {
          $this$toAttrs.s26($value);
          tmp = Unit_getInstance();
        } else {
          if (typeof tmp0_subject === 'boolean') {
            $this$toAttrs.t26($value);
            tmp = Unit_getInstance();
          } else {
            if (tmp0_subject instanceof Unit) {
              tmp = Unit_getInstance();
            } else {
              var tmp0_error = 'Unexpected `Input` value type: ' + getKClassFromExpression($value);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
      var tmp1_safe_receiver = $placeholder._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = placeholder($this$toAttrs, tmp1_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
      }
      var tmp_0;
      if (!$enabled._v) {
        disabled($this$toAttrs);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if ($readOnly._v) {
        readOnly($this$toAttrs);
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if ($required._v) {
        required($this$toAttrs);
        tmp_2 = Unit_getInstance();
      }
      $this$toAttrs.x1z($spellCheck._v);
      var tmp2_safe_receiver = $autoComplete._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = autoComplete($this$toAttrs, tmp2_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
      }
      $this$toAttrs.u26(_Input$composable$lambda$lambda_0($onValueChanged, $type));
      $this$toAttrs.b20(_Input$composable$lambda$lambda_1($valid, $onCommit));
      return Unit_getInstance();
    };
  }
  function _Input$composable$lambda_2($type, $value, $onValueChanged, $modifier, $variant, $placeholder, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      _Input$composable($type, $value, $onValueChanged, $modifier._v, $variant._v, $placeholder._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function InputGroupStyle$factory() {
    return getPropertyCallableRef('InputGroupStyle', 0, KProperty0, function () {
      return get_InputGroupStyle();
    }, null);
  }
  function InputStyle$factory() {
    return getPropertyCallableRef('InputStyle', 0, KProperty0, function () {
      return get_InputStyle();
    }, null);
  }
  function OutlinedInputVariant$factory() {
    return getPropertyCallableRef('OutlinedInputVariant', 0, KProperty0, function () {
      return get_OutlinedInputVariant();
    }, null);
  }
  function FilledInputVariant$factory() {
    return getPropertyCallableRef('FilledInputVariant', 0, KProperty0, function () {
      return get_FilledInputVariant();
    }, null);
  }
  function FlushedInputVariant$factory() {
    return getPropertyCallableRef('FlushedInputVariant', 0, KProperty0, function () {
      return get_FlushedInputVariant();
    }, null);
  }
  function UnstyledInputVariant$factory() {
    return getPropertyCallableRef('UnstyledInputVariant', 0, KProperty0, function () {
      return get_UnstyledInputVariant();
    }, null);
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.t47();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h49();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.k4a();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.l4a();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.m4a();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.z47();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.n4a();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.o4a();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.p4a();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.o48();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.p48();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.q4a();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.r4a();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.s4a();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_getInstance(), get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_getInstance_4().w2i()), Companion_getInstance_7().b2k());
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_11();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_getInstance_5();
      InputGroupStyle$delegate = base(tmp_0, VOID, 'silk', InputGroupStyle$delegate$lambda);
      InputStyle$delegate = ComponentStyle(VOID, 'silk', InputStyle$delegate$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant$delegate = addVariant(tmp_1, VOID, OutlinedInputVariant$delegate$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant$delegate = addVariant(tmp_2, VOID, FilledInputVariant$delegate$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant$delegate = addVariant(tmp_3, VOID, FlushedInputVariant$delegate$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant$delegate = addVariant(tmp_4, VOID, UnstyledInputVariant$delegate$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle$delegate.v2j(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.v2j(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.v2j(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.v2j(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.y4b_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.z4b_1 = StyleVariable(VOID, 'silk');
    this.a4c_1 = StyleVariable(VOID, 'silk');
    this.b4c_1 = StyleVariable(VOID, 'silk');
    this.c4c_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().n2j();
    tmp_0.d4c_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.e4c_1 = StyleVariable(VOID, 'silk');
    this.f4c_1 = StyleVariable(VOID, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().i4c().n2j();
    tmp_1.g4c_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.h4c_1 = 0;
  }
  protoOf(SwitchVars).h49 = function () {
    return this.y4b_1.v2j(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).j4c = function () {
    return this.z4b_1.v2j(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).k4c = function () {
    return this.a4c_1.v2j(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).l4c = function () {
    return this.b4c_1.v2j(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).m4c = function () {
    return this.c4c_1.v2j(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).n4c = function () {
    return this.d4c_1.v2j(this, FocusColor$factory());
  };
  protoOf(SwitchVars).o4c = function () {
    return this.e4c_1.v2j(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).p4c = function () {
    return this.f4c_1.v2j(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).s49 = function () {
    return this.g4c_1.v2j(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function MD_0() {
    MD_instance_0 = this;
    this.q4c_1 = get_cssRem(1.875);
    this.r4c_1 = get_cssRem(1);
    this.s4c_1 = 0;
  }
  protoOf(MD_0).t4c = function () {
    return this.q4c_1;
  };
  protoOf(MD_0).s4b = function () {
    return this.r4c_1;
  };
  var MD_instance_0;
  function MD_getInstance_0() {
    if (MD_instance_0 == null)
      new MD_0();
    return MD_instance_0;
  }
  function LG() {
    LG_instance = this;
    this.u4c_1 = get_cssRem(2.875);
    this.v4c_1 = get_cssRem(1.5);
    this.w4c_1 = 0;
  }
  protoOf(LG).t4c = function () {
    return this.u4c_1;
  };
  protoOf(LG).s4b = function () {
    return this.v4c_1;
  };
  var LG_instance;
  function LG_getInstance() {
    if (LG_instance == null)
      new LG();
    return LG_instance;
  }
  function SwitchSize() {
  }
  function Switch$composable(checked, onCheckedChange, modifier, variant, enabled, size, shape, colorScheme, thumbColor, focusBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Switch_kt__dwcqr0();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var shape_0 = {_v: shape};
    var colorScheme_0 = {_v: colorScheme};
    var thumbColor_0 = {_v: thumbColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-532119019);
    sourceInformation($composer_0, 'C(Switch$composable)P(!1,5,4,10,2,8,7!1,9)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(checked) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(onCheckedChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.hz(enabled_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.gz(size_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.gz(shape_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.gz(colorScheme_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.gz(thumbColor_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.gz(focusBorderColor_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.gz(ref_0._v) ? 4 : 2);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 11) === 2)) ? true : !$composer_0.ky()) {
      $composer_0.ry();
      if (($changed & 1) === 0 ? true : $composer_0.ly()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = MD_getInstance_0();
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          shape_0._v = SwitchShape_PILL_getInstance();
        }
        if (!(($default & 128) === 0)) {
          colorScheme_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          thumbColor_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.yy();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.sy();
      if (isTraceInProgress()) {
        traceEventStart(-532119019, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms.Switch$composable (Switch.kt:160)');
      }
      var colorMode = Companion_getInstance_12().v3q($composer_0, 6);
      var switchPalette = get_switch(toPalette(colorMode));
      var tmp = toAttrs(toModifier$composable(get_SwitchStyle(), [variant_0._v], $composer_0, 0).s3l(toModifier_2(size_0._v)).s3l(toModifier_1(shape_0._v)).s3l(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 927090219, true, Switch$composable$lambda(ref_0, $dirty1, checked, $dirty, onCheckedChange, enabled_0, colorScheme_0, colorMode, switchPalette, thumbColor_0, focusBorderColor_0, size_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Label$composable(null, tmp, tmp0, $composer_0, 384, 1);
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
      tmp0_safe_receiver.r1d(Switch$composable$lambda_0(checked, onCheckedChange, modifier_0, variant_0, enabled_0, size_0, shape_0, colorScheme_0, thumbColor_0, focusBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  var SwitchShape_PILL_instance;
  var SwitchShape_RECTANGLE_instance;
  var SwitchShape_entriesInitialized;
  function SwitchShape_initEntries() {
    if (SwitchShape_entriesInitialized)
      return Unit_getInstance();
    SwitchShape_entriesInitialized = true;
    SwitchShape_PILL_instance = new SwitchShape('PILL', 0);
    SwitchShape_RECTANGLE_instance = new SwitchShape('RECTANGLE', 1);
  }
  function SwitchShape(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toModifier_1(_this__u8e3s4) {
    _init_properties_Switch_kt__dwcqr0();
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp0_thenIf = Companion_getInstance();
    var tmp;
    if (_this__u8e3s4.equals(SwitchShape_RECTANGLE_getInstance())) {
      // Inline function 'com.varabyte.kobweb.silk.components.forms.toModifier.<anonymous>' call
      tmp = setVariable(Companion_getInstance(), SwitchVars_getInstance().h49(), get_px(0));
    } else {
      tmp = Companion_getInstance();
    }
    return tmp0_thenIf.s3l(tmp);
  }
  function toModifier_2(_this__u8e3s4) {
    _init_properties_Switch_kt__dwcqr0();
    return setVariable(setVariable(setVariable(Companion_getInstance(), SwitchVars_getInstance().j4c(), _this__u8e3s4.t4c()), SwitchVars_getInstance().k4c(), _this__u8e3s4.s4b()), SwitchVars_getInstance().l4c(), _this__u8e3s4.t4b());
  }
  function SwitchStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    return Unit_getInstance();
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.k3q(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).q3s(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.j3s(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'relative';
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(position(tmp, tmp$ret$3), SwitchVars_getInstance().j4c().n2j()), SwitchVars_getInstance().j4c().n2j()), SwitchVars_getInstance().k4c().n2j()), SwitchVars_getInstance().k4c().n2j()), SwitchVars_getInstance().l4c().n2j()), SwitchVars_getInstance().h49().n2j()), SwitchVars_getInstance().m4c().n2j()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().s49().n2j())]), Companion_getInstance_13().f2f());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().m2f());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.k3q(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.m3q(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().n4c().n2j());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), SwitchVars_getInstance().k4c().n2j()), SwitchVars_getInstance().h49().n2j()), SwitchVars_getInstance().p4c().n2j()), SwitchVars_getInstance().o4c().n2j()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().s49().n2j())]);
  }
  function Switch$composable$lambda$lambda($onCheckedChange, $checked) {
    return function (it) {
      $onCheckedChange(!$checked);
      return Unit_getInstance();
    };
  }
  function Switch$composable$lambda$lambda_0($checked, $size) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-94454863, $changed, -1, 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous> (Switch.kt:193)');
        }
        var tmp_0 = toModifier$composable(get_SwitchThumbStyle(), [], $composer_0, 64);
        var tmp_1 = SwitchVars_getInstance().o4c();
        var tmp_2;
        if ($checked) {
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp0_unsafeCast = minus($size._v.t4c(), $size._v.s4b());
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_unsafeCast;
          tmp$ret$1 = tmp$ret$0;
          tmp_2 = tmp$ret$1;
        } else {
          tmp_2 = get_percent(0);
        }
        var tmp_3 = setVariable(tmp_0, tmp_1, tmp_2);
        Box$composable(tmp_3, null, null, null, $composer_0, 0, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function Switch$composable$lambda($ref, $$dirty1, $checked, $$dirty, $onCheckedChange, $enabled, $colorScheme, $colorMode, $switchPalette, $thumbColor, $focusBorderColor, $size) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Label) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(927090219, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous> (Switch.kt:171)');
        }
        registerRefScope$composable_0($this$Label, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty1 << 3);
        var tmp_1 = Checkbox_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3 | 112 & $$dirty << 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.gz($onCheckedChange) | $composer_1.gz($checked));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Switch$composable$lambda$lambda($onCheckedChange, $checked);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        var tmp_4 = tmp$ret$4;
        var tmp_5 = get_SwitchInputVariant();
        var tmp_6 = $enabled._v;
        Input$composable_0(tmp_1, $checked, tmp_4, null, tmp_5, null, null, tmp_6, false, false, false, false, null, null, null, null, null, null, $composer_0, 6 | 112 & $$dirty << 3 | 29360128 & $$dirty << 9, 0, 261992);
        $composer_0.ny(1601864893);
        var tmp$ret$8;
        // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
        var tmp_7 = toModifier$composable(get_SwitchTrackStyle(), [], $composer_0, 64);
        var tmp_8 = SwitchVars_getInstance().m4c();
        var tmp_9;
        if ($checked) {
          var tmp0_safe_receiver = $colorScheme._v;
          var tmp_10;
          if (tmp0_safe_receiver == null) {
            tmp_10 = null;
          } else {
            var tmp$ret$6;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_return = $colorMode.o3v() ? tmp0_safe_receiver.b3w() : tmp0_safe_receiver.f3w();
            tmp$ret$5 = tmp0_return;
            tmp$ret$6 = tmp$ret$5;
            tmp_10 = tmp$ret$6;
          }
          var tmp1_elvis_lhs = tmp_10;
          tmp_9 = tmp1_elvis_lhs == null ? $switchPalette.y4c() : tmp1_elvis_lhs;
        } else {
          tmp_9 = $switchPalette.x4c();
        }
        var tmp2_thenIf = setVariable(setVariable(setVariable(tmp_7, tmp_8, tmp_9), SwitchVars_getInstance().p4c(), $thumbColor._v), SwitchVars_getInstance().n4c(), $focusBorderColor._v);
        var tmp3_thenIf = !$enabled._v;
        var tmp_11;
        if (tmp3_thenIf) {
          var tmp$ret$7;
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_return_0 = toModifier$composable(get_DisabledStyle(), [], $composer_0, 64);
          tmp$ret$7 = tmp0_return_0;
          tmp_11 = tmp$ret$7;
        } else {
          tmp_11 = Companion_getInstance();
        }
        tmp$ret$8 = tmp2_thenIf.s3l(tmp_11);
        var tmp0_group = tmp$ret$8;
        $composer_0.oy();
        var tmp$ret$15;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_12, -94454863, true, Switch$composable$lambda$lambda_0($checked, $size));
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz(dispatchReceiver);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_9().hy_1) {
          var tmp$ret$9;
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.fz(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_13;
        tmp$ret$11 = tmp$ret$10;
        var tmp_14 = tmp$ret$11;
        tmp$ret$12 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_2.oy();
        tmp$ret$13 = tmp0_0;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        Box$composable(tmp0_group, null, null, tmp$ret$15, $composer_0, 3072, 6);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp_0 = tmp_15;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function Switch$composable$lambda_0($checked, $onCheckedChange, $modifier, $variant, $enabled, $size, $shape, $colorScheme, $thumbColor, $focusBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Switch$composable($checked, $onCheckedChange, $modifier._v, $variant._v, $enabled._v, $size._v, $shape._v, $colorScheme._v, $thumbColor._v, $focusBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function SwitchShape_PILL_getInstance() {
    SwitchShape_initEntries();
    return SwitchShape_PILL_instance;
  }
  function SwitchShape_RECTANGLE_getInstance() {
    SwitchShape_initEntries();
    return SwitchShape_RECTANGLE_instance;
  }
  function SwitchStyle$factory() {
    return getPropertyCallableRef('SwitchStyle', 0, KProperty0, function () {
      return get_SwitchStyle();
    }, null);
  }
  function SwitchTrackStyle$factory() {
    return getPropertyCallableRef('SwitchTrackStyle', 0, KProperty0, function () {
      return get_SwitchTrackStyle();
    }, null);
  }
  function SwitchInputVariant$factory() {
    return getPropertyCallableRef('SwitchInputVariant', 0, KProperty0, function () {
      return get_SwitchInputVariant();
    }, null);
  }
  function SwitchThumbStyle$factory() {
    return getPropertyCallableRef('SwitchThumbStyle', 0, KProperty0, function () {
      return get_SwitchThumbStyle();
    }, null);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h49();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.j4c();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.k4c();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.l4c();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.m4c();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.n4c();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.o4c();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.p4c();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s49();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      SwitchStyle$delegate = ComponentStyle(VOID, 'silk', SwitchStyle$delegate$lambda);
      var tmp0_extraModifiers = ariaHidden(tabIndex(Companion_getInstance(), -1));
      SwitchTrackStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', SwitchTrackStyle$delegate$lambda);
      var tmp = get_InputStyle();
      SwitchInputVariant$delegate = addVariant(tmp, VOID, SwitchInputVariant$delegate$lambda);
      var tmp_0 = Companion_getInstance_5();
      SwitchThumbStyle$delegate = base(tmp_0, VOID, 'silk', SwitchThumbStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.v2j(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle(VOID, 'silk', CanvasStyle$delegate$lambda);
    }
  }
  function get_DividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return DividerStyle$delegate.v2j(null, DividerStyle$factory());
  }
  var DividerStyle$delegate;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n2j();
    tmp.z4c_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.a4d_1 = 0;
  }
  protoOf(DividerVars).s47 = function () {
    return this.z4c_1.v2j(this, Color$factory_1());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function DividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fillMaxWidth(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().s47().n2j()), get_percent(90));
  }
  function DividerStyle$factory() {
    return getPropertyCallableRef('DividerStyle', 0, KProperty0, function () {
      return get_DividerStyle();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.s47();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_getInstance_5();
      DividerStyle$delegate = base(tmp, VOID, 'silk', DividerStyle$delegate$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.v2j(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function SimpleGrid$composable(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(199594132);
    sourceInformation($composer_0, 'C(SimpleGrid$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(numColumns) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ky()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(199594132, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable (SimpleGrid.kt:72)');
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier$composable(get_SimpleGridStyle(), [variant_0._v], $composer_0, 0), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.q3t_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.r3t_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.s3t_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.t3t_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.u3t_1).s3l(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2129314893, true, SimpleGrid$composable$lambda(ref_0, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.r1d(SimpleGrid$composable$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.k3q(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().u1().c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.t1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.w1();
      $this$ComponentStyle.u3o(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
    }
    return Unit_getInstance();
  }
  function SimpleGridStyle$delegate$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.e2g(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.n2j();
      $this$gridTemplateColumns.z2f(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$delegate$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_getInstance();
      return gridTemplateColumns(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$composable$lambda($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-2129314893, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous> (SimpleGrid.kt:83)');
        }
        registerRefScope$composable_0($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        $content($composer_0, 14 & $$dirty >> 12);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function SimpleGrid$composable$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid$composable($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var tmp0_associateWith = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateWith, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = tmp0_associateWith.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = element.z4_1.toLowerCase();
        tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.l3(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.v2j(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function get_AnimatedColorSurfaceVariant() {
    _init_properties_Surface_kt__8o7unv();
    return AnimatedColorSurfaceVariant$delegate.v2j(null, AnimatedColorSurfaceVariant$factory());
  }
  var AnimatedColorSurfaceVariant$delegate;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().n2j();
    tmp.b4d_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().n2j();
    tmp_0.c4d_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.d4d_1 = 0;
  }
  protoOf(SurfaceVars).u47 = function () {
    return this.b4d_1.v2j(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).s47 = function () {
    return this.c4d_1.v2j(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface$composable(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1597616078);
    sourceInformation($composer_0, 'C(Surface$composable)P(3,5!1,2,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.gz(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        colorModeOverride_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        contentAlignment_0._v = TopStart_getInstance();
      }
      if (!(($default & 16) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1597616078, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable (Surface.kt:75)');
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
      if (false ? true : tmp0_let === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var surfaceElement$delegate = tmp0;
      var tmp_1 = toModifier$composable(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).s3l(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = ref_0._v;
      var $composer_2 = $composer_0;
      $composer_2.ny(-1124426577);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_2.gz(tmp1_remember$composable) | $composer_2.gz(surfaceElement$delegate));
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value_0 = Surface$composable$lambda_1(ref_0, surfaceElement$delegate);
        $composer_2.fz(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_2.oy();
      var tmp_5 = refScope(tmp0_0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1158565978, true, Surface$composable$lambda_2(colorModeOverride_0, content, $dirty, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ny(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_3.fz(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = tmp0_let_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_3.oy();
      Box$composable(tmp_1, tmp_2, tmp_5, tmp0_1, $composer_0, 3072 | 112 & $dirty >> 6, 0);
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
      tmp0_safe_receiver.r1d(Surface$composable$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$composable$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.w1();
  }
  function Surface$composable$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.ut(value);
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.k3q(SurfaceStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), SurfaceVars_getInstance().u47().n2j()), SurfaceVars_getInstance().s47().n2j());
  }
  function AnimatedColorSurfaceVariant$delegate$lambda($this$addVariant) {
    _init_properties_Surface_kt__8o7unv();
    var backgroundColorTransition = transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', TransitionDurationVars_getInstance().s2f().n2j())]);
    $this$addVariant.k3q(AnimatedColorSurfaceVariant$delegate$lambda$lambda(backgroundColorTransition));
    $this$addVariant.m3q(' div', AnimatedColorSurfaceVariant$delegate$lambda$lambda_0(backgroundColorTransition));
    return Unit_getInstance();
  }
  function AnimatedColorSurfaceVariant$delegate$lambda$lambda($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function AnimatedColorSurfaceVariant$delegate$lambda$lambda_0($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function Surface$composable$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$composable$lambda_0($surfaceElement$delegate, it);
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.g2l($ref._v);
      $this$refScope.f2l([], Surface$composable$lambda$lambda($surfaceElement$delegate));
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda$lambda$slambda($tmp0_safe_receiver, $currColorMode, resultContinuation) {
    this.m4d_1 = $tmp0_safe_receiver;
    this.n4d_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$lambda$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(Surface$composable$lambda$lambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        if (tmp === 0) {
          this.th_1 = 1;
          setSilkWidgetVariables(this.m4d_1, this.n4d_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new Surface$composable$lambda$lambda$slambda(this.m4d_1, this.n4d_1, completion);
    i.o4d_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$composable$lambda$lambda$slambda_0($tmp0_safe_receiver, $currColorMode, resultContinuation) {
    var i = new Surface$composable$lambda$lambda$slambda($tmp0_safe_receiver, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda$lambda_0($tmp0_safe_receiver, $content, $this_Box, $$dirty, $$dirty$1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous> (Surface.kt:88)');
        }
        var currColorMode = Companion_getInstance_12().v3q($composer_0, 6);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.gz($tmp0_safe_receiver) | $composer_1.gz(currColorMode));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Surface$composable$lambda$lambda$slambda_0($tmp0_safe_receiver, currColorMode, null);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        LaunchedEffect$composable(currColorMode, tmp$ret$4, $composer_0, 0);
        $content($this_Box, $composer_0, 14 & $$dirty | 112 & $$dirty$1 >> 12);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function Surface$composable$lambda_2($colorModeOverride, $content, $$dirty, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1158565978, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous> (Surface.kt:85)');
        }
        if (!($colorModeOverride._v == null)) {
          $composer_0.ny(-663071163);
          var tmp0_safe_receiver = Surface$composable$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$7;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = [$colorModeOverride._v.q3v()];
            var tmp$ret$6;
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -314059711, true, Surface$composable$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box, $dirty, $$dirty));
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable = $composer_0;
            var $composer_1 = tmp0_remember$composable;
            $composer_1.ny(-838505973);
            sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp0_cache = $composer_1;
            var tmp1_cache = $composer_1.gz(dispatchReceiver);
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp0_cache.ez();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_4;
            if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().hy_1) {
              var tmp$ret$0;
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
              var value = tmp$ret$0;
              tmp0_cache.fz(value);
              tmp_4 = value;
            } else {
              tmp_4 = tmp0_let;
            }
            tmp$ret$1 = tmp_4;
            tmp$ret$2 = tmp$ret$1;
            var tmp_5 = tmp$ret$2;
            tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
            var tmp0 = tmp$ret$3;
            $composer_1.oy();
            tmp$ret$4 = tmp0;
            tmp$ret$5 = tmp$ret$4;
            tmp$ret$6 = tmp$ret$5;
            CompositionLocalProvider$composable(tmp_2, tmp$ret$6, $composer_0, 48);
            tmp$ret$7 = Unit_getInstance();
            tmp_1 = Unit_getInstance();
          }
          var tmp0_group = tmp_1;
          $composer_0.oy();
        } else {
          $composer_0.ny(-663070738);
          $content($this$Box, $composer_0, 14 & $dirty | 112 & $$dirty >> 12);
          $composer_0.oy();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function Surface$composable$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  function AnimatedColorSurfaceVariant$factory() {
    return getPropertyCallableRef('AnimatedColorSurfaceVariant', 0, KProperty0, function () {
      return get_AnimatedColorSurfaceVariant();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u47();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.s47();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle(VOID, 'silk', SurfaceStyle$delegate$lambda);
      var tmp = get_SurfaceStyle();
      AnimatedColorSurfaceVariant$delegate = addVariant(tmp, VOID, AnimatedColorSurfaceVariant$delegate$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.v2j(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.p4d_1 = StyleVariable(VOID, 'silk');
    this.q4d_1 = 0;
  }
  protoOf(OverlayVars).u47 = function () {
    return this.p4d_1.v2j(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), OverlayVars_getInstance().u47().n2j());
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u47();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_getInstance_5();
      OverlayStyle$delegate = base(tmp, VOID, 'silk', OverlayStyle$delegate$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.v2j(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().i4c().n2j();
    tmp.r4d_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.s4d_1 = 0;
  }
  protoOf(PopupVars).s49 = function () {
    return this.r4d_1.v2j(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().s49().n2j())]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s49();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_5();
      PopupStyle$delegate = base(tmp, VOID, 'silk', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.v2j(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.v2j(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.v2j(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.v2j(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.v2j(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.v2j(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.v2j(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.v2j(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.v2j(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.v2j(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.v2j(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.v2j(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.v2j(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.v2j(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.t4d_1 = StyleVariable(VOID, 'silk');
    this.u4d_1 = StyleVariable(VOID, 'silk');
    this.v4d_1 = 0;
  }
  protoOf(TooltipVars).u47 = function () {
    return this.t4d_1.v2j(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).s47 = function () {
    return this.u4d_1.v2j(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().u47().n2j()), TooltipVars_getInstance().s47().n2j()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$delegate$lambda$lambda);
  }
  function TooltipArrowStyle$delegate$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.o3n(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.n3n('solid');
    return Unit_getInstance();
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().u47().n2j());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().u47().n2j());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u47().n2j());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.l28('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.l28('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.l28('border-color', 'transparent transparent transparent ' + $color);
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.l28('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_getInstance();
    };
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  function TopLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopLeftTooltipArrowVariant();
    }, null);
  }
  function TopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopTooltipArrowVariant();
    }, null);
  }
  function TopRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopRightTooltipArrowVariant();
    }, null);
  }
  function LeftTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTopTooltipArrowVariant();
    }, null);
  }
  function LeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTooltipArrowVariant();
    }, null);
  }
  function LeftBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftBottomTooltipArrowVariant();
    }, null);
  }
  function RightTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTopTooltipArrowVariant();
    }, null);
  }
  function RightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTooltipArrowVariant();
    }, null);
  }
  function RightBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightBottomTooltipArrowVariant();
    }, null);
  }
  function BottomLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomLeftTooltipArrowVariant();
    }, null);
  }
  function BottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomTooltipArrowVariant();
    }, null);
  }
  function BottomRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomRightTooltipArrowVariant();
    }, null);
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u47();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.s47();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_getInstance_5();
      TooltipStyle$delegate = base(tmp, VOID, 'silk', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_getInstance_5();
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant$delegate = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$delegate$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant$delegate = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$delegate$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant$delegate = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$delegate$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant$delegate = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$delegate$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant$delegate = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$delegate$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant$delegate = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$delegate$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant$delegate = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$delegate$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant$delegate = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$delegate$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant$delegate = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$delegate$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant$delegate = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$delegate$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant$delegate = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$delegate$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant$delegate = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$delegate$lambda);
      var tmp_13 = Companion_getInstance_5();
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle$delegate.v2j(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.v2j(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.v2j(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.ny(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().n2f());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().n2j())]);
  }
  function DisabledStyle$factory() {
    return getPropertyCallableRef('DisabledStyle', 0, KProperty0, function () {
      return get_DisabledStyle();
    }, null);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_getInstance_5();
      var tmp_0 = DisabledStyle$delegate$lambda;
      DisabledStyle$delegate = base$composable(tmp, tmp_0, 'silk', DisabledStyle$delegate$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().s2f().n2j();
      SmoothColorTransitionDurationVar$delegate = StyleVariable(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_getInstance_5();
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.j47_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.k47_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.l47_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.m47_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.n47_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.o47_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.p47_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.q47_1 = StyleVariable(tmp0_defaultFallback_6, 'silk');
    this.r47_1 = 0;
  }
  protoOf(TransitionDurationVars).g49 = function () {
    return this.l47_1.v2j(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).i4c = function () {
    return this.m47_1.v2j(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).s2f = function () {
    return this.n47_1.v2j(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.g49();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.i4c();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.s2f();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.v2j(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.v2j(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.v2j(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.v2j(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.v2j(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.v2j(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      ColorVar$delegate = StyleVariable(VOID, 'silk');
      BorderColorVar$delegate = StyleVariable(VOID, 'silk');
      FocusOutlineColorVar$delegate = StyleVariable(VOID, 'silk');
      PlaceholderOpacityVar$delegate = StyleVariable_0(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable(VOID, 'silk');
    }
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.g4b_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.h4b_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.i4b_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.j4b_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.k4b_1 = 0;
  }
  protoOf(FontSizeVars).l4b = function () {
    return this.i4b_1.v2j(this, MD$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.m4b_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.n4b_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.o4b_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.375);
    tmp_2.p4b_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.q4b_1 = 0;
  }
  protoOf(BorderRadiusVars).l4b = function () {
    return this.o4b_1.v2j(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.l4b();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.l4b();
    }, null);
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.v2j(null, DivTextStyle$factory());
  }
  var DivTextStyle$delegate;
  function DivTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_DivText_kt__50pfx0();
    return Unit_getInstance();
  }
  function DivTextStyle$factory() {
    return getPropertyCallableRef('DivTextStyle', 0, KProperty0, function () {
      return get_DivTextStyle();
    }, null);
  }
  var properties_initialized_DivText_kt_3artse;
  function _init_properties_DivText_kt__50pfx0() {
    if (!properties_initialized_DivText_kt_3artse) {
      properties_initialized_DivText_kt_3artse = true;
      DivTextStyle$delegate = ComponentStyle(VOID, 'silk', DivTextStyle$delegate$lambda);
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle$delegate.v2j(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.f3u_1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ctx.f3u_1.l3u_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = ColorSchemes_getInstance().k43_1.d3w().q3m().p3m(VOID, VOID, VOID, 0.5);
    var placeholder = ColorSchemes_getInstance().w43_1.d3w();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_getInstance().v3m();
    set_background(tmp0_apply.z43_1, Colors_getInstance().h3n());
    set_color(tmp0_apply.z43_1, color);
    set_border(tmp0_apply.z43_1, color.p3m(VOID, VOID, VOID, 0.2));
    set_focusOutline(tmp0_apply.z43_1, focusOutline);
    set_overlay(tmp0_apply.z43_1, color.p3m(VOID, VOID, VOID, 0.5));
    set_placeholder(tmp0_apply.z43_1, placeholder);
    var buttonBase = Colors_getInstance().h3n().m3m(0.2);
    (new MutableButton(tmp0_apply.z43_1)).e4e(buttonBase, buttonBase.m3m(0.2), Colors_getInstance().x3m(), buttonBase.m3m(0.4));
    (new MutableCheckbox(tmp0_apply.z43_1)).m4e(ColorSchemes_getInstance().k43_1.d3w(), ColorSchemes_getInstance().k43_1.e3w(), Colors_getInstance().h3n());
    var inputFilled = ColorSchemes_getInstance().w43_1.b3w();
    var tmp0_$this = new MutableInput(tmp0_apply.z43_1);
    var tmp1_filledFocus = Colors_getInstance().u3m();
    var tmp2_hoveredBorder = ColorSchemes_getInstance().w43_1.d3w();
    var tmp3_invalidBorder = ColorSchemes_getInstance().f43_1.g3w();
    var tmp4_filledHover = inputFilled.m3m(0.1);
    tmp0_$this.w4e(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = new MutableSwitch(tmp0_apply.z43_1);
    var tmp6_thumb = Colors_getInstance().h3n();
    var tmp7_backgroundOn = Colors_getInstance().b3n();
    var tmp8_backgroundOff = Colors_getInstance().c3n();
    tmp5_$this.m4e(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    (new MutableTab(tmp0_apply.z43_1)).q4f(Colors_getInstance().v3m(), Colors_getInstance().h3n(), Colors_getInstance().x3m(), VOID, VOID, Colors_getInstance().c3n(), Colors_getInstance().i3n(), Colors_getInstance().h3n());
    (new MutableTooltip(tmp0_apply.z43_1)).x4f(get_color_0(tmp0_apply.z43_1), get_background_0(tmp0_apply.z43_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_getInstance().h3n();
    set_background(tmp0_apply.a44_1, Colors_getInstance().v3m());
    set_color(tmp0_apply.a44_1, color_0);
    set_border(tmp0_apply.a44_1, color_0.p3m(VOID, VOID, VOID, 0.2));
    set_focusOutline(tmp0_apply.a44_1, focusOutline);
    set_overlay(tmp0_apply.a44_1, color_0.p3m(VOID, VOID, VOID, 0.5));
    set_placeholder(tmp0_apply.a44_1, placeholder);
    var buttonBase_0 = lightened(Colors_getInstance().v3m(), 0.2);
    (new MutableButton(tmp0_apply.a44_1)).e4e(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().d3n(), lightened(buttonBase_0, 0.4));
    (new MutableCheckbox(tmp0_apply.a44_1)).m4e(ColorSchemes_getInstance().k43_1.b3w(), ColorSchemes_getInstance().k43_1.c3w(), Colors_getInstance().v3m());
    var inputFilled_0 = ColorSchemes_getInstance().w43_1.g3w();
    var tmp0_$this_0 = new MutableInput(tmp0_apply.a44_1);
    var tmp1_filledFocus_0 = Colors_getInstance().u3m();
    var tmp2_hoveredBorder_0 = ColorSchemes_getInstance().w43_1.e3w();
    var tmp3_invalidBorder_0 = ColorSchemes_getInstance().f43_1.c3w();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.w4e(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = new MutableSwitch(tmp0_apply.a44_1);
    var tmp6_thumb_0 = Colors_getInstance().h3n();
    var tmp7_backgroundOn_0 = Colors_getInstance().d3n();
    var tmp8_backgroundOff_0 = Colors_getInstance().z3m();
    tmp5_$this_0.m4e(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    (new MutableTab(tmp0_apply.a44_1)).q4f(Colors_getInstance().h3n(), Colors_getInstance().v3m(), Colors_getInstance().d3n(), VOID, VOID, Colors_getInstance().a3n(), Colors_getInstance().z3m(), Colors_getInstance().v3m());
    (new MutableTooltip(tmp0_apply.a44_1)).x4f(get_color_0(tmp0_apply.a44_1), get_background_0(tmp0_apply.a44_1));
    mutableTheme.p3u(get_SilkColorsStyle());
    mutableTheme.p3u(get_DisabledStyle());
    mutableTheme.p3u(get_SmoothColorStyle());
    mutableTheme.p3u(get_ButtonStyle());
    mutableTheme.p3u(get_CanvasStyle());
    mutableTheme.p3u(get_CheckboxStyle());
    mutableTheme.y3u([get_CheckboxInputVariant()]);
    mutableTheme.p3u(get_CheckboxIconContainerStyle());
    mutableTheme.p3u(get_CheckboxIconStyle());
    mutableTheme.y3u([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.p3u(get_DividerStyle());
    mutableTheme.p3u(get_DivTextStyle());
    mutableTheme.p3u(get_OverlayStyle());
    mutableTheme.p3u(get_PopupStyle());
    mutableTheme.p3u(get_SimpleGridStyle());
    mutableTheme.p3u(get_SurfaceStyle());
    mutableTheme.y3u([get_AnimatedColorSurfaceVariant()]);
    mutableTheme.p3u(get_SwitchStyle());
    mutableTheme.p3u(get_SwitchTrackStyle());
    mutableTheme.p3u(get_SwitchThumbStyle());
    mutableTheme.y3u([get_SwitchInputVariant()]);
    mutableTheme.p3u(get_TabsStyle());
    mutableTheme.p3u(get_TabsTabRowStyle());
    mutableTheme.p3u(get_TabsTabStyle());
    mutableTheme.p3u(get_TabsPanelStyle());
    mutableTheme.p3u(get_InputStyle());
    mutableTheme.y3u([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.p3u(get_InputGroupStyle());
    mutableTheme.p3u(get_TooltipArrowStyle());
    mutableTheme.y3u([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.p3u(get_TooltipStyle());
    mutableTheme.p3u(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.e3u_1, get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().p3p_1, colorMode.p3v())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().p3p_1, colorMode)]);
  }
  function setSilkWidgetVariables$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(899333070);
    sourceInformation($composer_0, 'C(setSilkWidgetVariables$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(899333070, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:310)');
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
      if (false ? true : tmp0_let === Companion_getInstance_9().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable.<anonymous>' call
        var tmp_0 = _this__u8e3s4.getElementById('root');
        var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_1 = tmp;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var root = tmp0;
      setSilkWidgetVariables$composable_0(root, $composer_0, 0);
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
      tmp0_safe_receiver.r1d(setSilkWidgetVariables$composable$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables$composable_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(417149198);
    sourceInformation($composer_0, 'C(setSilkWidgetVariables$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(417149198, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:316)');
      }
      setSilkWidgetVariables(_this__u8e3s4, Companion_getInstance_12().v3q($composer_0, 6));
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
      tmp0_safe_receiver.r1d(setSilkWidgetVariables$composable$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.k3r_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().k48(), get_button(palette).y4f()), ButtonVars_getInstance().m48(), get_button(palette).u29()), ButtonVars_getInstance().n48(), get_button(palette).z4f()), CheckboxVars_getInstance().q49(), get_checkbox(palette).a4g()), CheckboxVars_getInstance().r49(), get_checkbox(palette).u29()), CheckboxVars_getInstance().p49(), get_checkbox(palette).b4g()), InputVars_getInstance().l4a(), get_input(palette).c4g()), InputVars_getInstance().m4a(), get_input(palette).d4g()), InputVars_getInstance().n4a(), get_input(palette).e4g()), InputVars_getInstance().o4a(), get_input(palette).f4g()), InputVars_getInstance().p4a(), get_input(palette).g4g()), OverlayVars_getInstance().u47(), get_overlay(palette)), SwitchVars_getInstance().p4c(), get_switch(palette).h4g()), TabVars_getInstance().s47(), get_tab(palette).b4g()), TabVars_getInstance().u47(), get_tab(palette).a4g()), TabVars_getInstance().v47(), get_tab(palette).i4g()), TabVars_getInstance().w47(), get_tab(palette).u29()), TabVars_getInstance().x47(), get_tab(palette).z4f()), TooltipVars_getInstance().u47(), get_tooltip(palette).a4g()), TooltipVars_getInstance().s47(), get_tooltip(palette).b4g());
  }
  function setSilkWidgetVariables$composable$lambda($this_setSilkWidgetVariables$composable, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables$composable($this_setSilkWidgetVariables$composable, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function setSilkWidgetVariables$composable$lambda_0($this_setSilkWidgetVariables$composable, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables$composable_0($this_setSilkWidgetVariables$composable, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SilkColorsStyle$factory() {
    return getPropertyCallableRef('SilkColorsStyle', 0, KProperty0, function () {
      return get_SilkColorsStyle();
    }, null);
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_getInstance_5();
      SilkColorsStyle$delegate = base(tmp, VOID, VOID, SilkColorsStyle$delegate$lambda);
    }
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.z4d_1 = this.k46();
    this.a4e_1 = this.k46();
    this.b4e_1 = this.k46();
    this.c4e_1 = this.k46();
    this.d4e_1 = 0;
  }
  protoOf(MutableButton).j4g = function (_set____db54di) {
    return this.z4d_1.g46(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).y4f = function () {
    return this.z4d_1.v2j(this, default$factory_0());
  };
  protoOf(MutableButton).k4g = function (_set____db54di) {
    return this.a4e_1.g46(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).u29 = function () {
    return this.a4e_1.v2j(this, hover$factory_0());
  };
  protoOf(MutableButton).l4g = function (_set____db54di) {
    return this.b4e_1.g46(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).m4g = function () {
    return this.b4e_1.v2j(this, focus$factory_0());
  };
  protoOf(MutableButton).n4g = function (_set____db54di) {
    return this.c4e_1.g46(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).z4f = function () {
    return this.c4e_1.v2j(this, pressed$factory_0());
  };
  protoOf(MutableButton).e4e = function (default_0, hover, focus, pressed) {
    this.j4g(default_0);
    this.k4g(hover);
    this.l4g(focus);
    this.n4g(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.i4e_1 = this.k46();
    this.j4e_1 = this.k46();
    this.k4e_1 = this.k46();
    this.l4e_1 = 0;
  }
  protoOf(MutableCheckbox).o4g = function (_set____db54di) {
    return this.i4e_1.g46(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).a4g = function () {
    return this.i4e_1.v2j(this, background$factory_0());
  };
  protoOf(MutableCheckbox).k4g = function (_set____db54di) {
    return this.j4e_1.g46(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).u29 = function () {
    return this.j4e_1.v2j(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).p4g = function (_set____db54di) {
    return this.k4e_1.g46(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).b4g = function () {
    return this.k4e_1.v2j(this, color$factory_0());
  };
  protoOf(MutableCheckbox).m4e = function (background, hover, color) {
    this.o4g(background);
    this.k4g(hover);
    this.p4g(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.q4e_1 = this.k46();
    this.r4e_1 = this.k46();
    this.s4e_1 = this.k46();
    this.t4e_1 = this.k46();
    this.u4e_1 = this.k46();
    this.v4e_1 = 0;
  }
  protoOf(MutableInput).q4g = function (_set____db54di) {
    return this.q4e_1.g46(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).c4g = function () {
    return this.q4e_1.v2j(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).r4g = function (_set____db54di) {
    return this.r4e_1.g46(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).d4g = function () {
    return this.r4e_1.v2j(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).s4g = function (_set____db54di) {
    return this.s4e_1.g46(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).e4g = function () {
    return this.s4e_1.v2j(this, filled$factory_0());
  };
  protoOf(MutableInput).t4g = function (_set____db54di) {
    return this.t4e_1.g46(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).f4g = function () {
    return this.t4e_1.v2j(this, filledHover$factory_0());
  };
  protoOf(MutableInput).u4g = function (_set____db54di) {
    return this.u4e_1.g46(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).g4g = function () {
    return this.u4e_1.v2j(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).w4e = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.q4g(hoveredBorder);
    this.r4g(invalidBorder);
    this.s4g(filled);
    this.t4g(filledHover);
    this.u4g(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.a4f_1 = this.k46();
    this.b4f_1 = this.k46();
    this.c4f_1 = this.k46();
    this.d4f_1 = 0;
  }
  protoOf(MutableSwitch).v4g = function (_set____db54di) {
    return this.a4f_1.g46(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).y4c = function () {
    return this.a4f_1.v2j(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).w4g = function (_set____db54di) {
    return this.b4f_1.g46(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).x4c = function () {
    return this.b4f_1.v2j(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).x4g = function (_set____db54di) {
    return this.c4f_1.g46(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).h4g = function () {
    return this.c4f_1.v2j(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).m4e = function (backgroundOn, backgroundOff, thumb) {
    this.v4g(backgroundOn);
    this.w4g(backgroundOff);
    this.x4g(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.h4f_1 = this.k46();
    this.i4f_1 = this.k46();
    this.j4f_1 = this.k46();
    this.k4f_1 = this.k46();
    this.l4f_1 = this.k46();
    this.m4f_1 = this.k46();
    this.n4f_1 = this.k46();
    this.o4f_1 = this.k46();
    this.p4f_1 = 0;
  }
  protoOf(MutableTab).p4g = function (_set____db54di) {
    return this.h4f_1.g46(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).b4g = function () {
    return this.h4f_1.v2j(this, color$factory_2());
  };
  protoOf(MutableTab).o4g = function (_set____db54di) {
    return this.i4f_1.g46(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).a4g = function () {
    return this.i4f_1.v2j(this, background$factory_2());
  };
  protoOf(MutableTab).y4g = function (_set____db54di) {
    return this.j4f_1.g46(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).z4g = function () {
    return this.j4f_1.v2j(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).a4h = function (_set____db54di) {
    return this.k4f_1.g46(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).b4h = function () {
    return this.k4f_1.v2j(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).c4h = function (_set____db54di) {
    return this.l4f_1.g46(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).d4h = function () {
    return this.l4f_1.v2j(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).k4g = function (_set____db54di) {
    return this.m4f_1.g46(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).u29 = function () {
    return this.m4f_1.v2j(this, hover$factory_4());
  };
  protoOf(MutableTab).n4g = function (_set____db54di) {
    return this.n4f_1.g46(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).z4f = function () {
    return this.n4f_1.v2j(this, pressed$factory_2());
  };
  protoOf(MutableTab).e4h = function (_set____db54di) {
    return this.o4f_1.g46(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).i4g = function () {
    return this.o4f_1.v2j(this, disabled$factory_0());
  };
  protoOf(MutableTab).f4h = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.p4g(color);
    this.o4g(background);
    this.y4g(selectedColor);
    this.a4h(selectedBackground);
    this.c4h(selectedBorder);
    this.k4g(hover);
    this.n4g(pressed);
    this.e4h(disabled);
  };
  protoOf(MutableTab).q4f = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.f4h(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.f4h.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.u4f_1 = this.k46();
    this.v4f_1 = this.k46();
    this.w4f_1 = 0;
  }
  protoOf(MutableTooltip).o4g = function (_set____db54di) {
    return this.u4f_1.g46(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).a4g = function () {
    return this.u4f_1.v2j(this, background$factory_4());
  };
  protoOf(MutableTooltip).p4g = function (_set____db54di) {
    return this.v4f_1.g46(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).b4g = function () {
    return this.v4f_1.v2j(this, color$factory_4());
  };
  protoOf(MutableTooltip).x4f = function (background, color) {
    this.o4g(background);
    this.p4g(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.a46('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.a46('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.a46('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.a46('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.a46('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.a46('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.l46('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.a46('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.l46('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.a46('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.l46('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.l46('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.l46('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.l46('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.y4f();
    }, function (receiver, value) {
      return receiver.j4g(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.y4f();
    }, function (receiver, value) {
      return receiver.j4g(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.m4g();
    }, function (receiver, value) {
      return receiver.l4g(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.m4g();
    }, function (receiver, value) {
      return receiver.l4g(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.z4f();
    }, function (receiver, value) {
      return receiver.n4g(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.z4f();
    }, function (receiver, value) {
      return receiver.n4g(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c4g();
    }, function (receiver, value) {
      return receiver.q4g(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c4g();
    }, function (receiver, value) {
      return receiver.q4g(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.d4g();
    }, function (receiver, value) {
      return receiver.r4g(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.d4g();
    }, function (receiver, value) {
      return receiver.r4g(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.e4g();
    }, function (receiver, value) {
      return receiver.s4g(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.e4g();
    }, function (receiver, value) {
      return receiver.s4g(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.f4g();
    }, function (receiver, value) {
      return receiver.t4g(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.f4g();
    }, function (receiver, value) {
      return receiver.t4g(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.g4g();
    }, function (receiver, value) {
      return receiver.u4g(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.g4g();
    }, function (receiver, value) {
      return receiver.u4g(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.y4c();
    }, function (receiver, value) {
      return receiver.v4g(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.y4c();
    }, function (receiver, value) {
      return receiver.v4g(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.x4c();
    }, function (receiver, value) {
      return receiver.w4g(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.x4c();
    }, function (receiver, value) {
      return receiver.w4g(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.h4g();
    }, function (receiver, value) {
      return receiver.x4g(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.h4g();
    }, function (receiver, value) {
      return receiver.x4g(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.z4g();
    }, function (receiver, value) {
      return receiver.y4g(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.z4g();
    }, function (receiver, value) {
      return receiver.y4g(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.b4h();
    }, function (receiver, value) {
      return receiver.a4h(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.b4h();
    }, function (receiver, value) {
      return receiver.a4h(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.d4h();
    }, function (receiver, value) {
      return receiver.c4h(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.d4h();
    }, function (receiver, value) {
      return receiver.c4h(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.u29();
    }, function (receiver, value) {
      return receiver.k4g(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.z4f();
    }, function (receiver, value) {
      return receiver.n4g(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.z4f();
    }, function (receiver, value) {
      return receiver.n4g(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.i4g();
    }, function (receiver, value) {
      return receiver.e4h(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.i4g();
    }, function (receiver, value) {
      return receiver.e4h(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.a4g();
    }, function (receiver, value) {
      return receiver.o4g(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.b4g();
    }, function (receiver, value) {
      return receiver.p4g(value);
    });
  }
  //region block: post-declaration
  protoOf(MD_0).t4b = get_padding;
  protoOf(LG).t4b = get_padding;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Switch$composable;
  _.$_$.b = SimpleGrid$composable;
  _.$_$.c = Surface$composable;
  _.$_$.d = numColumns;
  _.$_$.e = get_SmoothColorStyle;
  _.$_$.f = get_BorderColorVar;
  _.$_$.g = get_ColorVar;
  _.$_$.h = get_SilkColorsStyle;
  _.$_$.i = initSilkWidgets;
  _.$_$.j = setSilkWidgetVariables$composable;
  _.$_$.k = LG_getInstance;
  _.$_$.l = MD_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
