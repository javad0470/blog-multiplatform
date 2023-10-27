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
  var VOID = kotlin_kotlin.$_$.ig;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r8;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var Unit_getInstance = kotlin_kotlin.$_$.q4;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var listOf = kotlin_kotlin.$_$.q7;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.n7;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var KProperty0 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var ComponentStyle$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var isObject = kotlin_kotlin.$_$.bb;
  var interfaceMeta = kotlin_kotlin.$_$.pa;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.e9;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var ariaInvalid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var ariaRequired = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.h9;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.tb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Unit = kotlin_kotlin.$_$.kf;
  var isNumber = kotlin_kotlin.$_$.ab;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var autoComplete = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Label$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.i9;
  var THROW_ISE = kotlin_kotlin.$_$.af;
  var enumEntries = kotlin_kotlin.$_$.t9;
  var Enum = kotlin_kotlin.$_$.oe;
  var classMeta = kotlin_kotlin.$_$.ea;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var minus = kotlin_org_jetbrains_compose_html_html_core.$_$.k8;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var registerRefScope$composable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var Checkbox_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var getValue = kotlin_kotlin.$_$.c7;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.t7;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var mapCapacity = kotlin_kotlin.$_$.r7;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var KMutableProperty0 = kotlin_kotlin.$_$.fc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ja;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.ya;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var SuspendFunction1 = kotlin_kotlin.$_$.p9;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.x8;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var base$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.l8;
  var ColorSchemes_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var KMutableProperty1 = kotlin_kotlin.$_$.gc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(InputSize, 'InputSize', interfaceMeta);
  setMetadataFor(XS, 'XS', objectMeta, VOID, [InputSize]);
  setMetadataFor(SM, 'SM', objectMeta, VOID, [InputSize]);
  setMetadataFor(MD, 'MD', objectMeta, VOID, [InputSize]);
  setMetadataFor(LG, 'LG', objectMeta, VOID, [InputSize]);
  setMetadataFor(InputDefaults, 'InputDefaults', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  function get_padding() {
    return get_cssRem(0.188);
  }
  setMetadataFor(SwitchSize, 'SwitchSize', interfaceMeta);
  setMetadataFor(SM_0, 'SM', objectMeta, VOID, [SwitchSize]);
  setMetadataFor(MD_0, 'MD', objectMeta, VOID, [SwitchSize]);
  setMetadataFor(LG_0, 'LG', objectMeta, VOID, [SwitchSize]);
  setMetadataFor(SwitchShape, 'SwitchShape', classMeta, Enum);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$composable$lambda$lambda$slambda, 'Surface$composable$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(PlaceholderColor, 'PlaceholderColor', classMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(BorderRadiusVars, 'BorderRadiusVars', objectMeta);
  setMetadataFor(Button, 'Button', interfaceMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup, [ColorGroup, Button]);
  setMetadataFor(Checkbox, 'Checkbox', interfaceMeta);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup, [ColorGroup, Checkbox]);
  setMetadataFor(Input, 'Input', interfaceMeta);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup, [ColorGroup, Input]);
  setMetadataFor(Switch, 'Switch', interfaceMeta);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup, [ColorGroup, Switch]);
  setMetadataFor(Tab, 'Tab', interfaceMeta);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup, [ColorGroup, Tab]);
  setMetadataFor(Tooltip, 'Tooltip', interfaceMeta);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup, [ColorGroup, Tooltip]);
  setMetadataFor(SilkWidgetColorGroups, 'SilkWidgetColorGroups', objectMeta);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.getValue_1h979_k$(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.getValue_1h979_k$(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.getValue_1h979_k$(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.getValue_1h979_k$(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function get_$stableprop() {
    return 0;
  }
  function TabVars() {
    TabVars_instance = this;
    this.Color$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_x2j5m8_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.BackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.DisabledBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.HoverBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.PressedBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.BorderThickness$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_x2j5m8_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(TabVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_1h979_k$(this, Color$factory());
  };
  protoOf(TabVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_1h979_k$(this, BorderColor$factory());
  };
  protoOf(TabVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_1h979_k$(this, BackgroundColor$factory());
  };
  protoOf(TabVars).get_DisabledBackgroundColor_cqusog_k$ = function () {
    return this.DisabledBackgroundColor$delegate_1.getValue_1h979_k$(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).get_HoverBackgroundColor_uy6r32_k$ = function () {
    return this.HoverBackgroundColor$delegate_1.getValue_1h979_k$(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).get_PressedBackgroundColor_ow7ud8_k$ = function () {
    return this.PressedBackgroundColor$delegate_1.getValue_1h979_k$(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).get_BorderThickness_psvqzl_k$ = function () {
    return this.BorderThickness$delegate_1.getValue_1h979_k$(this, BorderThickness$factory());
  };
  protoOf(TabVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_1h979_k$(this, ColorTransitionDuration$factory());
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
    var tmp_0 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_x2j5m8_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:51)');
    }
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.base_li7hyk_k$(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$()), Companion_getInstance_2().group$default_tjw00v_k$(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_x2j5m8_k$()).slice()), TabVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$()), TabVars_getInstance().get_Color_i88tui_k$().value$default_x2j5m8_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_x2j5m8_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.unaryMinus_7m2z60_k$(TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_x2j5m8_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$().value$default_x2j5m8_k$()), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$().value$default_x2j5m8_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$().value$default_x2j5m8_k$());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.y_1audnb_k$(Companion_getInstance_4().get_Auto_wnyn88_k$());
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
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_DisabledBackgroundColor_cqusog_k$();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_HoverBackgroundColor_uy6r32_k$();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_PressedBackgroundColor_ow7ud8_k$();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.get_BorderThickness_psvqzl_k$();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
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
    return ButtonStyle$delegate.getValue_1h979_k$(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function get_$stableprop_0() {
    return 0;
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.BackgroundDefaultColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().value$default_x2j5m8_k$();
    tmp.BackgroundFocusColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.BackgroundHoverColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.BackgroundPressedColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_x2j5m8_k$();
    tmp_0.Color$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_x2j5m8_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.FontSize$delegate_1 = StyleVariable(VOID, 'silk');
    this.Height$delegate_1 = StyleVariable(VOID, 'silk');
    this.PaddingHorizontal$delegate_1 = StyleVariable(VOID, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(ButtonVars).get_BackgroundDefaultColor_so3bvr_k$ = function () {
    return this.BackgroundDefaultColor$delegate_1.getValue_1h979_k$(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundFocusColor_4vb99e_k$ = function () {
    return this.BackgroundFocusColor$delegate_1.getValue_1h979_k$(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundHoverColor_qkbxz2_k$ = function () {
    return this.BackgroundHoverColor$delegate_1.getValue_1h979_k$(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundPressedColor_qp3aco_k$ = function () {
    return this.BackgroundPressedColor$delegate_1.getValue_1h979_k$(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_1h979_k$(this, Color$factory_0());
  };
  protoOf(ButtonVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_1h979_k$(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_1h979_k$(this, FontSize$factory());
  };
  protoOf(ButtonVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_1h979_k$(this, Height$factory());
  };
  protoOf(ButtonVars).get_PaddingHorizontal_u991sc_k$ = function () {
    return this.PaddingHorizontal$delegate_1.getValue_1h979_k$(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.base_li7hyk_k$(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$().value$default_x2j5m8_k$()), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$().value$default_x2j5m8_k$()), 1.2), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_x2j5m8_k$()), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_x2j5m8_k$()), ButtonVars_getInstance().get_FontSize_oos3dz_k$().value$default_x2j5m8_k$()), Companion_getInstance_6().get_SemiBold_aid1c4_k$()), Companion_getInstance_7().get_NoWrap_21tqz8_k$()), VOID, ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$().value$default_x2j5m8_k$()), Companion_getInstance_8().get_Middle_1hpdq6_k$()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_getInstance_3().get_None_wo6tgh_k$()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_x2j5m8_k$())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.width_s81s8c_k$(get_px(0));
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$().value$default_x2j5m8_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
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
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$().value$default_x2j5m8_k$());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$().value$default_x2j5m8_k$());
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundDefaultColor_so3bvr_k$();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundFocusColor_4vb99e_k$();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundHoverColor_qkbxz2_k$();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundPressedColor_qp3aco_k$();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.get_PaddingHorizontal_u991sc_k$();
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
    return CheckboxStyle$delegate.getValue_1h979_k$(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.getValue_1h979_k$(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.getValue_1h979_k$(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.getValue_1h979_k$(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.getValue_1h979_k$(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.getValue_1h979_k$(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.getValue_1h979_k$(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function get_$stableprop_1() {
    return 0;
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_x2j5m8_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.BorderRadius$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.BorderWidth$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.Size$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.Spacing$delegate_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.FontSize$delegate_1 = StyleVariable(VOID, 'silk');
    this.IconSize$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().value$default_x2j5m8_k$();
    tmp_3.FocusOutlineColor$delegate_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.FocusOutlineSpread$delegate_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    this.UncheckedBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.IconColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.IconBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.IconBackgroundHoverColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().get_VeryFast_7jhf2z_k$().value$default_x2j5m8_k$();
    tmp_5.TransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(CheckboxVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_1h979_k$(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_1h979_k$(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).get_BorderWidth_hanxcf_k$ = function () {
    return this.BorderWidth$delegate_1.getValue_1h979_k$(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).get_Size_wo9w8a_k$ = function () {
    return this.Size$delegate_1.getValue_1h979_k$(this, Size$factory());
  };
  protoOf(CheckboxVars).get_Spacing_4hcb0m_k$ = function () {
    return this.Spacing$delegate_1.getValue_1h979_k$(this, Spacing$factory());
  };
  protoOf(CheckboxVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_1h979_k$(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).get_IconSize_s3avwj_k$ = function () {
    return this.IconSize$delegate_1.getValue_1h979_k$(this, IconSize$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineColor_j0f8fk_k$ = function () {
    return this.FocusOutlineColor$delegate_1.getValue_1h979_k$(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineSpread_spl6o6_k$ = function () {
    return this.FocusOutlineSpread$delegate_1.getValue_1h979_k$(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).get_UncheckedBackgroundColor_cj7b3k_k$ = function () {
    return this.UncheckedBackgroundColor$delegate_1.getValue_1h979_k$(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconColor_i8bnoh_k$ = function () {
    return this.IconColor$delegate_1.getValue_1h979_k$(this, IconColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundColor_fqf24z_k$ = function () {
    return this.IconBackgroundColor$delegate_1.getValue_1h979_k$(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundHoverColor_gda561_k$ = function () {
    return this.IconBackgroundHoverColor$delegate_1.getValue_1h979_k$(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_1h979_k$(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.base_li7hyk_k$(CheckboxStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return cursor(fontSize(userSelect(gap(Companion_getInstance(), CheckboxVars_getInstance().get_Spacing_4hcb0m_k$().value$default_x2j5m8_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), CheckboxVars_getInstance().get_FontSize_oos3dz_k$().value$default_x2j5m8_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.from_jm5c7n_k$(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.to_6u3zwe_k$(CheckboxEnabledAnim$delegate$lambda$lambda_0);
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
    $this$ComponentStyle.base_li7hyk_k$(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_getInstance(), CheckboxVars_getInstance().get_IconSize_s3avwj_k$().value$default_x2j5m8_k$()), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_x2j5m8_k$());
    var tmp_0 = CheckboxVars_getInstance().get_BorderWidth_hanxcf_k$().value$default_x2j5m8_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$()), CheckboxVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$()), Companion_getInstance_2().group$default_tjw00v_k$(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_x2j5m8_k$()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_UncheckedBackgroundColor_cj7b3k_k$().value$default_x2j5m8_k$());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_li7hyk_k$(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_x2j5m8_k$());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.color_l9e3mp_k$(CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_x2j5m8_k$());
    return Unit_getInstance();
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_x2j5m8_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$().value$default_x2j5m8_k$());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_li7hyk_k$(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.cssRule_ehgmzl_k$(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.cssRule_ehgmzl_k$(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_getInstance();
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, CheckboxVars_getInstance().get_FocusOutlineSpread_spl6o6_k$().value$default_x2j5m8_k$(), CheckboxVars_getInstance().get_FocusOutlineColor_j0f8fk_k$().value$default_x2j5m8_k$());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$().value$default_x2j5m8_k$());
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
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.get_BorderWidth_hanxcf_k$();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.get_Size_wo9w8a_k$();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.get_Spacing_4hcb0m_k$();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.get_IconSize_s3avwj_k$();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineColor_j0f8fk_k$();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineSpread_spl6o6_k$();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_UncheckedBackgroundColor_cj7b3k_k$();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconColor_i8bnoh_k$();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundColor_fqf24z_k$();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundHoverColor_gda561_k$();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
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
    return InputGroupStyle$delegate.getValue_1h979_k$(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.getValue_1h979_k$(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.getValue_1h979_k$(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.getValue_1h979_k$(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.getValue_1h979_k$(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.getValue_1h979_k$(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function get_$stableprop_2() {
    return 0;
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_x2j5m8_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.BorderRadius$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_x2j5m8_k$();
    tmp_0.BorderFocusColor$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.BorderHoverColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.BorderInvalidColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_x2j5m8_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.FilledColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.FilledHoverColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.FilledFocusColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.FontSize$delegate_1 = StyleVariable(VOID, 'silk');
    this.Height$delegate_1 = StyleVariable(VOID, 'silk');
    this.Padding$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().value$default_x2j5m8_k$();
    tmp_2.PlaceholderOpacity$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().value$default_x2j5m8_k$();
    tmp_3.PlaceholderColor$delegate_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.InsetLeftWidth$delegate_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.InsetRightWidth$delegate_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(InputVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_1h979_k$(this, BorderColor$factory_1());
  };
  protoOf(InputVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_1h979_k$(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).get_BorderFocusColor_guhvfk_k$ = function () {
    return this.BorderFocusColor$delegate_1.getValue_1h979_k$(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).get_BorderHoverColor_4uita4_k$ = function () {
    return this.BorderHoverColor$delegate_1.getValue_1h979_k$(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).get_BorderInvalidColor_3xft0h_k$ = function () {
    return this.BorderInvalidColor$delegate_1.getValue_1h979_k$(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_1h979_k$(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).get_FilledColor_27lcwo_k$ = function () {
    return this.FilledColor$delegate_1.getValue_1h979_k$(this, FilledColor$factory());
  };
  protoOf(InputVars).get_FilledHoverColor_z8l4su_k$ = function () {
    return this.FilledHoverColor$delegate_1.getValue_1h979_k$(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).get_FilledFocusColor_e3i8gm_k$ = function () {
    return this.FilledFocusColor$delegate_1.getValue_1h979_k$(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_1h979_k$(this, FontSize$factory_1());
  };
  protoOf(InputVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_1h979_k$(this, Height$factory_0());
  };
  protoOf(InputVars).get_Padding_fgkl54_k$ = function () {
    return this.Padding$delegate_1.getValue_1h979_k$(this, Padding$factory());
  };
  protoOf(InputVars).get_PlaceholderOpacity_y4d5tt_k$ = function () {
    return this.PlaceholderOpacity$delegate_1.getValue_1h979_k$(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).get_PlaceholderColor_fqs0o7_k$ = function () {
    return this.PlaceholderColor$delegate_1.getValue_1h979_k$(this, PlaceholderColor$factory());
  };
  protoOf(InputVars).get_InsetLeftWidth_8un9fv_k$ = function () {
    return this.InsetLeftWidth$delegate_1.getValue_1h979_k$(this, InsetLeftWidth$factory());
  };
  protoOf(InputVars).get_InsetRightWidth_1gxxby_k$ = function () {
    return this.InsetRightWidth$delegate_1.getValue_1h979_k$(this, InsetRightWidth$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().get_Padding_fgkl54_k$().value$default_x2j5m8_k$();
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1200462527);
    sourceInformation($composer_0, 'C(Input$composable)P(14,16,6,4,17,7,12,1,15,11,9,13!1,5,8)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onValueChanged) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.changed_ga7h3f_k$(size_0._v) : false) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(valid_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(required_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(readOnly_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(spellCheck_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(autoComplete_0._v) ? 256 : 128);
    if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ((($default & 8192) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onCommit_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(placeholderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(focusBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(invalidBorderColor_0._v) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 23967451) === 4793490)) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          variant_0._v = InputDefaults_getInstance().Variant_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          size_0._v = InputDefaults_getInstance().Size_1;
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
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
            // Inline function 'com.varabyte.kobweb.silk.components.forms.Input$composable.<anonymous>' call
            var value_0 = Input$composable$lambda;
            $composer_1.updateRememberedValue_l1colo_k$(value_0);
            tmp = value_0;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 8192) === 0))
          $dirty1 = $dirty1 & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1200462527, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms.Input$composable (Input.kt:631)');
      }
      _Input$composable(type, value, onValueChanged, toModifier(size_0._v).then_6jcr1i_k$(modifier_0._v), variant_0._v, placeholder_0._v, enabled_0._v, valid_0._v, required_0._v, readOnly_0._v, spellCheck_0._v, autoComplete_0._v, onCommit_0._v, placeholderColor_0._v, focusBorderColor_0._v, invalidBorderColor_0._v, ref_0._v, $composer_0, 14 & $dirty | (8 & $dirty >> 3) << 3 | 112 & $dirty | 896 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 14 & $dirty1 >> 3 | 112 & $dirty1 >> 3 | 896 & $dirty1 >> 3 | 7168 & $dirty1 >> 3 | 57344 & $dirty1 >> 3 | 458752 & $dirty1 >> 3 | 3670016 & $dirty1 >> 3, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Input$composable$lambda_0(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, size_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
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
  function XS() {
    XS_instance = this;
    this.fontSize_1 = FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_x2j5m8_k$();
    this.height_1 = get_cssRem(1.25);
    this.padding_1 = get_cssRem(0.375);
    this.borderRadius_1 = BorderRadiusVars_getInstance().get_XS_kntocc_k$().value$default_x2j5m8_k$();
    this.$stable_1 = 0;
  }
  protoOf(XS).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(XS).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(XS).get_padding_c2ipjs_k$ = function () {
    return this.padding_1;
  };
  protoOf(XS).get_borderRadius_quu3af_k$ = function () {
    return this.borderRadius_1;
  };
  var XS_instance;
  function XS_getInstance() {
    if (XS_instance == null)
      new XS();
    return XS_instance;
  }
  function SM() {
    SM_instance = this;
    this.fontSize_1 = FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_x2j5m8_k$();
    this.height_1 = get_cssRem(1.75);
    this.padding_1 = get_cssRem(0.5);
    this.borderRadius_1 = BorderRadiusVars_getInstance().get_SM_kntogt_k$().value$default_x2j5m8_k$();
    this.$stable_1 = 0;
  }
  protoOf(SM).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(SM).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(SM).get_padding_c2ipjs_k$ = function () {
    return this.padding_1;
  };
  protoOf(SM).get_borderRadius_quu3af_k$ = function () {
    return this.borderRadius_1;
  };
  var SM_instance;
  function SM_getInstance() {
    if (SM_instance == null)
      new SM();
    return SM_instance;
  }
  function MD() {
    MD_instance = this;
    this.fontSize_1 = FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_x2j5m8_k$();
    this.height_1 = get_cssRem(2.25);
    this.padding_1 = get_cssRem(0.625);
    this.borderRadius_1 = BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_x2j5m8_k$();
    this.$stable_1 = 0;
  }
  protoOf(MD).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(MD).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(MD).get_padding_c2ipjs_k$ = function () {
    return this.padding_1;
  };
  protoOf(MD).get_borderRadius_quu3af_k$ = function () {
    return this.borderRadius_1;
  };
  var MD_instance;
  function MD_getInstance() {
    if (MD_instance == null)
      new MD();
    return MD_instance;
  }
  function LG() {
    LG_instance = this;
    this.fontSize_1 = FontSizeVars_getInstance().get_LG_knton0_k$().value$default_x2j5m8_k$();
    this.height_1 = get_cssRem(2.5);
    this.padding_1 = get_cssRem(0.375);
    this.borderRadius_1 = BorderRadiusVars_getInstance().get_LG_knton0_k$().value$default_x2j5m8_k$();
    this.$stable_1 = 0;
  }
  protoOf(LG).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(LG).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(LG).get_padding_c2ipjs_k$ = function () {
    return this.padding_1;
  };
  protoOf(LG).get_borderRadius_quu3af_k$ = function () {
    return this.borderRadius_1;
  };
  var LG_instance;
  function LG_getInstance() {
    if (LG_instance == null)
      new LG();
    return LG_instance;
  }
  function InputSize() {
  }
  function get_$stableprop_7() {
    return 0;
  }
  function InputDefaults() {
    InputDefaults_instance = this;
    this.Valid_1 = true;
    this.Enabled_1 = true;
    this.ReadOnly_1 = false;
    this.Required_1 = false;
    this.SpellCheck_1 = false;
    this.Size_1 = MD_getInstance();
    this.Variant_1 = get_OutlinedInputVariant();
    this.$stable_1 = 0;
  }
  protoOf(InputDefaults).get_Valid_iifz5f_k$ = function () {
    return this.Valid_1;
  };
  protoOf(InputDefaults).get_Enabled_26c20o_k$ = function () {
    return this.Enabled_1;
  };
  protoOf(InputDefaults).get_ReadOnly_py2dzf_k$ = function () {
    return this.ReadOnly_1;
  };
  protoOf(InputDefaults).get_Required_xslitk_k$ = function () {
    return this.Required_1;
  };
  protoOf(InputDefaults).get_SpellCheck_cpmys7_k$ = function () {
    return this.SpellCheck_1;
  };
  protoOf(InputDefaults).get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  protoOf(InputDefaults).get_Variant_wpmdto_k$ = function () {
    return this.Variant_1;
  };
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1635273663);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onValueChanged) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(valid_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(required_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(readOnly_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(spellCheck_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(autoComplete_0._v) ? 32 : 16);
    if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ((($default & 4096) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onCommit_0._v) : false) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(placeholderColor_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(focusBorderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(invalidBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
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
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
            // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
            var value_0 = _Input$composable$lambda;
            $composer_1.updateRememberedValue_l1colo_k$(value_0);
            tmp = value_0;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 4096) === 0))
          $dirty1 = $dirty1 & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1635273663, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms._Input$composable (Input.kt:476)');
      }
      $composer_0.startReplaceableGroup_rp6air_k$(-736449099);
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
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_2.updateRememberedValue_l1colo_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = tmp0_let_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        $composer_2.endReplaceableGroup_er37p7_k$();
        Div$composable(tmp_2, tmp0_0, $composer_0, 48, 0);
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_6 = toModifier$composable(get_InputStyle(), [variant_0._v], $composer_0, 0);
      var tmp0_safe_receiver = placeholderColor_0._v;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toModifier_0(tmp0_safe_receiver);
      var tmp2_thenIf = setVariable(setVariable(tmp_6.then_6jcr1i_k$(tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$(), focusBorderColor_0._v), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), invalidBorderColor_0._v);
      var tmp_7;
      if (!valid_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_7 = setVariable(ariaInvalid(Companion_getInstance()), InputVars_getInstance().get_BorderColor_hljtgy_k$(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_x2j5m8_k$());
      } else {
        tmp_7 = Companion_getInstance();
      }
      var tmp4_thenIf = tmp2_thenIf.then_6jcr1i_k$(tmp_7);
      var tmp_8;
      if (!enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_8 = ariaDisabled(Companion_getInstance());
      } else {
        tmp_8 = Companion_getInstance();
      }
      var tmp6_thenIf = tmp4_thenIf.then_6jcr1i_k$(tmp_8);
      var tmp_9;
      if (required_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>' call
        tmp_9 = ariaRequired(Companion_getInstance());
      } else {
        tmp_9 = Companion_getInstance();
      }
      var tmp_10 = tmp6_thenIf.then_6jcr1i_k$(tmp_9).then_6jcr1i_k$(modifier_0._v);
      Input$composable(type, toAttrs(tmp_10, _Input$composable$lambda_1(value, placeholder_0, enabled_0, readOnly_0, required_0, spellCheck_0, autoComplete_0, onValueChanged, type, valid_0, onCommit_0)), $composer_0, 14 & $dirty);
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
      tmp0_safe_receiver_0.updateScope_xhrf9y_k$(_Input$composable$lambda_2(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function toModifier(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), InputVars_getInstance().get_BorderRadius_tko1mv_k$(), _this__u8e3s4.get_borderRadius_quu3af_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$(), _this__u8e3s4.get_fontSize_pr9n47_k$()), InputVars_getInstance().get_Height_xmnjk_k$(), _this__u8e3s4.get_height_e7t92o_k$()), InputVars_getInstance().get_Padding_fgkl54_k$(), _this__u8e3s4.get_padding_c2ipjs_k$());
  }
  function toModifier_0(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable_0(setVariable(Companion_getInstance(), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$(), _this__u8e3s4.get_color_ipu8u2_k$()), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$(), _this__u8e3s4.get_opacity_jowogu_k$());
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
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_x2j5m8_k$());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.base_li7hyk_k$(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(InputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = backgroundColor(fontSize(height(color(styleModifier(tmp, InputStyle$delegate$lambda$lambda$lambda), get_ColorVar().value$default_x2j5m8_k$()), InputVars_getInstance().get_Height_xmnjk_k$().value$default_x2j5m8_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_x2j5m8_k$()), Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = outline(tmp_0, tmp_1, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_3 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_2, tmp_3, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_2().group$default_tjw00v_k$(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_x2j5m8_k$()));
  }
  function InputStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_Input_kt__b04mg8();
    $this$styleModifier.property_ze5ozi_k$('appearance', 'none');
    return Unit_getInstance();
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_getInstance(), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$().value$default_x2j5m8_k$()), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$().value$default_x2j5m8_k$());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_li7hyk_k$(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.invoke_ifmuo5_k$(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.invoke_ifmuo5_k$(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ifmuo5_k$(OutlinedInputVariant$delegate$lambda$lambda_2);
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
    var tmp = borderRadius(inputPadding(Companion_getInstance()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_x2j5m8_k$());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_l9e3mp_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_x2j5m8_k$());
    return Unit_getInstance();
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_x2j5m8_k$());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_li7hyk_k$(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.invoke_ifmuo5_k$(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.invoke_ifmuo5_k$(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ifmuo5_k$(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_getInstance()), InputVars_getInstance().get_FilledColor_27lcwo_k$().value$default_x2j5m8_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$().value$default_x2j5m8_k$());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_x2j5m8_k$());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$().value$default_x2j5m8_k$()), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_x2j5m8_k$());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_l9e3mp_k$($color);
      return Unit_getInstance();
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_li7hyk_k$(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.invoke_ifmuo5_k$(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.invoke_ifmuo5_k$(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_1jnq5l_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ifmuo5_k$(FlushedInputVariant$delegate$lambda$lambda_2);
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
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_x2j5m8_k$());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_l9e3mp_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_x2j5m8_k$());
    return Unit_getInstance();
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_x2j5m8_k$());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_l9e3mp_k$($color);
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(61734468, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous> (Input.kt:479)');
        }
        var tmp_1 = $ref._v;
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = _Input$composable$lambda$lambda;
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        registerRefScope$composable($this$Div, tmp_1, tmp$ret$4, $composer_0, 14 & $dirty | 112 & $$dirty1 >> 15);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function _Input$composable$lambda$lambda_0($onValueChanged, $type) {
    return function (evt) {
      $onValueChanged($type.inputValue_wt6s86_k$(evt.get_nativeEvent_skldba_k$()));
      return Unit_getInstance();
    };
  }
  function _Input$composable$lambda$lambda_1($valid, $onCommit) {
    return function (evt) {
      var tmp;
      if ($valid._v ? evt.get_code_wok7xy_k$() === 'Enter' : false) {
        evt.preventDefault_xrmx2w_k$();
        evt.stopPropagation_5pvg9l_k$();
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
        $this$toAttrs.value_h8ym4w_k$($value);
        tmp = Unit_getInstance();
      } else {
        if (isNumber(tmp0_subject)) {
          $this$toAttrs.value_jlq9ug_k$($value);
          tmp = Unit_getInstance();
        } else {
          if (typeof tmp0_subject === 'boolean') {
            $this$toAttrs.checked_sfde8d_k$($value);
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
      $this$toAttrs.spellCheck_ra9ojq_k$($spellCheck._v);
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
      $this$toAttrs.onInput_9lpwcz_k$(_Input$composable$lambda$lambda_0($onValueChanged, $type));
      $this$toAttrs.onKeyUp_u3a7vt_k$(_Input$composable$lambda$lambda_1($valid, $onCommit));
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
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderFocusColor_guhvfk_k$();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderHoverColor_4uita4_k$();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderInvalidColor_3xft0h_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledColor_27lcwo_k$();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledHoverColor_z8l4su_k$();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledFocusColor_e3i8gm_k$();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.get_Padding_fgkl54_k$();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderOpacity_y4d5tt_k$();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderColor_fqs0o7_k$();
    }, null);
  }
  function InsetLeftWidth$factory() {
    return getPropertyCallableRef('InsetLeftWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetLeftWidth_8un9fv_k$();
    }, null);
  }
  function InsetRightWidth$factory() {
    return getPropertyCallableRef('InsetRightWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetRightWidth_1gxxby_k$();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_getInstance(), get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_getInstance_4().get_Hidden_viqel_k$()), Companion_getInstance_7().get_NoWrap_21tqz8_k$());
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
    return SwitchStyle$delegate.getValue_1h979_k$(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.getValue_1h979_k$(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.getValue_1h979_k$(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.getValue_1h979_k$(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function get_$stableprop_8() {
    return 0;
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.BorderRadius$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.TrackWidth$delegate_1 = StyleVariable(VOID, 'silk');
    this.TrackHeight$delegate_1 = StyleVariable(VOID, 'silk');
    this.TrackPadding$delegate_1 = StyleVariable(VOID, 'silk');
    this.TrackBackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_x2j5m8_k$();
    tmp_0.FocusColor$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.ThumbOffset$delegate_1 = StyleVariable(VOID, 'silk');
    this.ThumbColor$delegate_1 = StyleVariable(VOID, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_x2j5m8_k$();
    tmp_1.TransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(SwitchVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_1h979_k$(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).get_TrackWidth_vulqlg_k$ = function () {
    return this.TrackWidth$delegate_1.getValue_1h979_k$(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).get_TrackHeight_e8ng3b_k$ = function () {
    return this.TrackHeight$delegate_1.getValue_1h979_k$(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).get_TrackPadding_t5kbzj_k$ = function () {
    return this.TrackPadding$delegate_1.getValue_1h979_k$(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).get_TrackBackgroundColor_6g6jkd_k$ = function () {
    return this.TrackBackgroundColor$delegate_1.getValue_1h979_k$(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).get_FocusColor_4uzwmk_k$ = function () {
    return this.FocusColor$delegate_1.getValue_1h979_k$(this, FocusColor$factory());
  };
  protoOf(SwitchVars).get_ThumbOffset_629rpc_k$ = function () {
    return this.ThumbOffset$delegate_1.getValue_1h979_k$(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).get_ThumbColor_g0t1d6_k$ = function () {
    return this.ThumbColor$delegate_1.getValue_1h979_k$(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_1h979_k$(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function SM_0() {
    SM_instance_0 = this;
    this.width_1 = get_cssRem(1.375);
    this.height_1 = get_cssRem(0.75);
    this.$stable_1 = 0;
  }
  protoOf(SM_0).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(SM_0).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  var SM_instance_0;
  function SM_getInstance_0() {
    if (SM_instance_0 == null)
      new SM_0();
    return SM_instance_0;
  }
  function MD_0() {
    MD_instance_0 = this;
    this.width_1 = get_cssRem(1.875);
    this.height_1 = get_cssRem(1);
    this.$stable_1 = 0;
  }
  protoOf(MD_0).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(MD_0).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  var MD_instance_0;
  function MD_getInstance_0() {
    if (MD_instance_0 == null)
      new MD_0();
    return MD_instance_0;
  }
  function LG_0() {
    LG_instance_0 = this;
    this.width_1 = get_cssRem(2.875);
    this.height_1 = get_cssRem(1.5);
    this.$stable_1 = 0;
  }
  protoOf(LG_0).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(LG_0).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  var LG_instance_0;
  function LG_getInstance_0() {
    if (LG_instance_0 == null)
      new LG_0();
    return LG_instance_0;
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-532119019);
    sourceInformation($composer_0, 'C(Switch$composable)P(!1,5,4,10,2,8,7!1,9)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(checked) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onCheckedChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.changed_ga7h3f_k$(size_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(shape_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorScheme_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(thumbColor_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(focusBorderColor_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 4 : 2);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 11) === 2)) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-532119019, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms.Switch$composable (Switch.kt:160)');
      }
      var colorMode = Companion_getInstance_12().$get_current$$composable_lr7uxx_k$($composer_0, 6);
      var switchPalette = get_switch(toPalette(colorMode));
      var tmp = toAttrs(toModifier$composable(get_SwitchStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(toModifier_2(size_0._v)).then_6jcr1i_k$(toModifier_1(shape_0._v)).then_6jcr1i_k$(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 927090219, true, Switch$composable$lambda(ref_0, $dirty1, checked, $dirty, onCheckedChange, enabled_0, colorScheme_0, colorMode, switchPalette, thumbColor_0, focusBorderColor_0, size_0));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Label$composable(null, tmp, tmp0, $composer_0, 384, 1);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Switch$composable$lambda_0(checked, onCheckedChange, modifier_0, variant_0, enabled_0, size_0, shape_0, colorScheme_0, thumbColor_0, focusBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  var SwitchShape_PILL_instance;
  var SwitchShape_RECTANGLE_instance;
  function values() {
    return [SwitchShape_PILL_getInstance(), SwitchShape_RECTANGLE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PILL':
        return SwitchShape_PILL_getInstance();
      case 'RECTANGLE':
        return SwitchShape_RECTANGLE_getInstance();
      default:
        SwitchShape_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SwitchShape_entriesInitialized;
  function SwitchShape_initEntries() {
    if (SwitchShape_entriesInitialized)
      return Unit_getInstance();
    SwitchShape_entriesInitialized = true;
    SwitchShape_PILL_instance = new SwitchShape('PILL', 0);
    SwitchShape_RECTANGLE_instance = new SwitchShape('RECTANGLE', 1);
  }
  var $ENTRIES;
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
      tmp = setVariable(Companion_getInstance(), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$(), get_px(0));
    } else {
      tmp = Companion_getInstance();
    }
    return tmp0_thenIf.then_6jcr1i_k$(tmp);
  }
  function toModifier_2(_this__u8e3s4) {
    _init_properties_Switch_kt__dwcqr0();
    return setVariable(setVariable(setVariable(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$(), _this__u8e3s4.get_width_j0q4yl_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$(), _this__u8e3s4.get_height_e7t92o_k$()), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$(), _this__u8e3s4.get_padding_c2ipjs_k$());
  }
  function SwitchStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    return Unit_getInstance();
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.base_li7hyk_k$(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).plus_1jnq5l_k$(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.invoke_ifmuo5_k$(SwitchTrackStyle$delegate$lambda$lambda_0);
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
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(position(tmp, tmp$ret$3), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_TrackBackgroundColor_6g6jkd_k$().value$default_x2j5m8_k$()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_x2j5m8_k$())]), Companion_getInstance_13().get_ContentBox_h63h2z_k$());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.base_li7hyk_k$(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.cssRule_ehgmzl_k$(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().get_FocusColor_4uzwmk_k$().value$default_x2j5m8_k$());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$().value$default_x2j5m8_k$()), SwitchVars_getInstance().get_ThumbOffset_629rpc_k$().value$default_x2j5m8_k$()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_x2j5m8_k$())]);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-94454863, $changed, -1, 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous> (Switch.kt:193)');
        }
        var tmp_0 = toModifier$composable(get_SwitchThumbStyle(), [], $composer_0, 64);
        var tmp_1 = SwitchVars_getInstance().get_ThumbOffset_629rpc_k$();
        var tmp_2;
        if ($checked) {
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp0_unsafeCast = minus($size._v.get_width_j0q4yl_k$(), $size._v.get_height_e7t92o_k$());
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Switch$composable$lambda($ref, $$dirty1, $checked, $$dirty, $onCheckedChange, $enabled, $colorScheme, $colorMode, $switchPalette, $thumbColor, $focusBorderColor, $size) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Label) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.changed_ga7h3f_k$($onCheckedChange) | $composer_1.changed_ga7h3f_k$($checked));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Switch$composable$lambda$lambda($onCheckedChange, $checked);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_4 = tmp$ret$4;
        var tmp_5 = get_SwitchInputVariant();
        var tmp_6 = $enabled._v;
        Input$composable_0(tmp_1, $checked, tmp_4, null, tmp_5, null, null, tmp_6, false, false, false, false, null, null, null, null, null, null, $composer_0, 6 | 112 & $$dirty << 3 | 29360128 & $$dirty << 9, 0, 261992);
        $composer_0.startReplaceableGroup_rp6air_k$(1601864893);
        var tmp$ret$8;
        // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
        var tmp_7 = toModifier$composable(get_SwitchTrackStyle(), [], $composer_0, 64);
        var tmp_8 = SwitchVars_getInstance().get_TrackBackgroundColor_6g6jkd_k$();
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
            var tmp0_return = $colorMode.get_isDark_evw91l_k$() ? tmp0_safe_receiver.get__200_wogdh8_k$() : tmp0_safe_receiver.get__700_wogh6p_k$();
            tmp$ret$5 = tmp0_return;
            tmp$ret$6 = tmp$ret$5;
            tmp_10 = tmp$ret$6;
          }
          var tmp1_elvis_lhs = tmp_10;
          tmp_9 = tmp1_elvis_lhs == null ? $switchPalette.get_backgroundOn_11s1ze_k$() : tmp1_elvis_lhs;
        } else {
          tmp_9 = $switchPalette.get_backgroundOff_wj5pl4_k$();
        }
        var tmp2_thenIf = setVariable(setVariable(setVariable(tmp_7, tmp_8, tmp_9), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$(), $thumbColor._v), SwitchVars_getInstance().get_FocusColor_4uzwmk_k$(), $focusBorderColor._v);
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
        tmp$ret$8 = tmp2_thenIf.then_6jcr1i_k$(tmp_11);
        var tmp0_group = tmp$ret$8;
        $composer_0.endReplaceableGroup_er37p7_k$();
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
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          var tmp$ret$9;
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Switch$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_13;
        tmp$ret$11 = tmp$ret$10;
        var tmp_14 = tmp$ret$11;
        tmp$ret$12 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_2.endReplaceableGroup_er37p7_k$();
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
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.get_TrackWidth_vulqlg_k$();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.get_TrackHeight_e8ng3b_k$();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.get_TrackPadding_t5kbzj_k$();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_TrackBackgroundColor_6g6jkd_k$();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusColor_4uzwmk_k$();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbOffset_629rpc_k$();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbColor_g0t1d6_k$();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
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
    return CanvasStyle$delegate.getValue_1h979_k$(null, CanvasStyle$factory());
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
    return DividerStyle$delegate.getValue_1h979_k$(null, DividerStyle$factory());
  }
  var DividerStyle$delegate;
  function get_$stableprop_12() {
    return 0;
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_x2j5m8_k$();
    tmp.Color$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(DividerVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_1h979_k$(this, Color$factory_1());
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
    return fillMaxWidth(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_x2j5m8_k$()), get_percent(90));
  }
  function DividerStyle$factory() {
    return getPropertyCallableRef('DividerStyle', 0, KProperty0, function () {
      return get_DividerStyle();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
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
    return SimpleGridStyle$delegate.getValue_1h979_k$(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGrid$composable(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(199594132);
    sourceInformation($composer_0, 'C(SimpleGrid$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(numColumns) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier$composable(get_SimpleGridStyle(), [variant_0._v], $composer_0, 0), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.get_base_wojaxm_k$()), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.get_sm_kntnod_k$()), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.get_md_kntnts_k$()), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.get_lg_kntnuk_k$()), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.get_xl_kntnk3_k$()).then_6jcr1i_k$(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2129314893, true, SimpleGrid$composable$lambda(ref_0, $dirty, content));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>.<anonymous>' call
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SimpleGrid$composable$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.base_li7hyk_k$(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.get_value_j01efc_k$();
      $this$ComponentStyle.invoke_l1l5p_k$(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
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
    $this$repeat.size_1hd6kw_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.value$default_x2j5m8_k$();
      $this$gridTemplateColumns.repeat_iremn9_k$(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      var tmp0_iterator = tmp0_associateWith.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = element.get_name_woqyms_k$().toLowerCase();
        tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.put_3mhbri_k$(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.getValue_1h979_k$(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function get_AnimatedColorSurfaceVariant() {
    _init_properties_Surface_kt__8o7unv();
    return AnimatedColorSurfaceVariant$delegate.getValue_1h979_k$(null, AnimatedColorSurfaceVariant$factory());
  }
  var AnimatedColorSurfaceVariant$delegate;
  function get_$stableprop_13() {
    return 0;
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().value$default_x2j5m8_k$();
    tmp.BackgroundColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_x2j5m8_k$();
    tmp_0.Color$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(SurfaceVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_1h979_k$(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_1h979_k$(this, Color$factory_2());
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1597616078);
    sourceInformation($composer_0, 'C(Surface$composable)P(3,5!1,2,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var surfaceElement$delegate = tmp0;
      var tmp_1 = toModifier$composable(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = ref_0._v;
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_2.changed_ga7h3f_k$(tmp1_remember$composable) | $composer_2.changed_ga7h3f_k$(surfaceElement$delegate));
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value_0 = Surface$composable$lambda_1(ref_0, surfaceElement$delegate);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var tmp_5 = refScope(tmp0_0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1158565978, true, Surface$composable$lambda_2(colorModeOverride_0, content, $dirty, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = tmp0_let_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_1, tmp_2, tmp_5, tmp0_1, $composer_0, 3072 | 112 & $dirty >> 6, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Surface$composable$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$composable$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.get_value_j01efc_k$();
  }
  function Surface$composable$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.set_value_rnwamw_k$(value);
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.base_li7hyk_k$(SurfaceStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), SurfaceVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$()), SurfaceVars_getInstance().get_Color_i88tui_k$().value$default_x2j5m8_k$());
  }
  function AnimatedColorSurfaceVariant$delegate$lambda($this$addVariant) {
    _init_properties_Surface_kt__8o7unv();
    var backgroundColorTransition = transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_x2j5m8_k$())]);
    $this$addVariant.base_li7hyk_k$(AnimatedColorSurfaceVariant$delegate$lambda$lambda(backgroundColorTransition));
    $this$addVariant.cssRule_ehgmzl_k$(' div', AnimatedColorSurfaceVariant$delegate$lambda$lambda_0(backgroundColorTransition));
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
      $this$refScope.add_wiwqkq_k$($ref._v);
      $this$refScope.ref_djwlwl_k$([], Surface$composable$lambda$lambda($surfaceElement$delegate));
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda$lambda$slambda($tmp0_safe_receiver, $currColorMode, resultContinuation) {
    this.$tmp0_safe_receiver_1 = $tmp0_safe_receiver;
    this.$currColorMode_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Surface$composable$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          setSilkWidgetVariables(this.$tmp0_safe_receiver_1, this.$currColorMode_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Surface$composable$lambda$lambda$slambda(this.$tmp0_safe_receiver_1, this.$currColorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Surface$composable$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Surface$composable$lambda$lambda$slambda_0($tmp0_safe_receiver, $currColorMode, resultContinuation) {
    var i = new Surface$composable$lambda$lambda$slambda($tmp0_safe_receiver, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda$lambda_0($tmp0_safe_receiver, $content, $this_Box, $$dirty, $$dirty$1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous> (Surface.kt:88)');
        }
        var currColorMode = Companion_getInstance_12().$get_current$$composable_lr7uxx_k$($composer_0, 6);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.changed_ga7h3f_k$($tmp0_safe_receiver) | $composer_1.changed_ga7h3f_k$(currColorMode));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Surface$composable$lambda$lambda$slambda_0($tmp0_safe_receiver, currColorMode, null);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Surface$composable$lambda_2($colorModeOverride, $content, $$dirty, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1158565978, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous> (Surface.kt:85)');
        }
        if (!($colorModeOverride._v == null)) {
          $composer_0.startReplaceableGroup_rp6air_k$(-663071163);
          var tmp0_safe_receiver = Surface$composable$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$7;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = [$colorModeOverride._v.provide_53xuu7_k$()];
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
            $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
            sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp0_cache = $composer_1;
            var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_4;
            if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
              var tmp$ret$0;
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
              var value = tmp$ret$0;
              tmp0_cache.updateRememberedValue_l1colo_k$(value);
              tmp_4 = value;
            } else {
              tmp_4 = tmp0_let;
            }
            tmp$ret$1 = tmp_4;
            tmp$ret$2 = tmp$ret$1;
            var tmp_5 = tmp$ret$2;
            tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
            var tmp0 = tmp$ret$3;
            $composer_1.endReplaceableGroup_er37p7_k$();
            tmp$ret$4 = tmp0;
            tmp$ret$5 = tmp$ret$4;
            tmp$ret$6 = tmp$ret$5;
            CompositionLocalProvider$composable(tmp_2, tmp$ret$6, $composer_0, 48);
            tmp$ret$7 = Unit_getInstance();
            tmp_1 = Unit_getInstance();
          }
          var tmp0_group = tmp_1;
          $composer_0.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_0.startReplaceableGroup_rp6air_k$(-663070738);
          $content($this$Box, $composer_0, 14 & $dirty | 112 & $$dirty >> 12);
          $composer_0.endReplaceableGroup_er37p7_k$();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
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
    return OverlayStyle$delegate.getValue_1h979_k$(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function get_$stableprop_14() {
    return 0;
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(OverlayVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_1h979_k$(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
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
    return PopupStyle$delegate.getValue_1h979_k$(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function get_$stableprop_15() {
    return 0;
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_x2j5m8_k$();
    tmp.TransitionDuration$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(PopupVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_1h979_k$(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_x2j5m8_k$())]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
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
    return TooltipStyle$delegate.getValue_1h979_k$(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.getValue_1h979_k$(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function get_$stableprop_16() {
    return 0;
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.Color$delegate_1 = StyleVariable(VOID, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(TooltipVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_1h979_k$(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_1h979_k$(this, Color$factory_3());
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
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$()), TooltipVars_getInstance().get_Color_i88tui_k$().value$default_x2j5m8_k$()), get_px(6));
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
    $this$border.width_s81s8c_k$(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.style_rtp57f_k$('solid');
    return Unit_getInstance();
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_x2j5m8_k$());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent transparent transparent ' + $color);
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', '' + $color + ' transparent transparent transparent');
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
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
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
    return DisabledStyle$delegate.getValue_1h979_k$(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.getValue_1h979_k$(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.getValue_1h979_k$(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().value$default_x2j5m8_k$())]);
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
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_x2j5m8_k$();
      SmoothColorTransitionDurationVar$delegate = StyleVariable(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_getInstance_5();
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function get_$stableprop_17() {
    return 8;
  }
  function PlaceholderColor(color, opacity) {
    opacity = opacity === VOID ? 1 : opacity;
    this.color_1 = color;
    this.opacity_1 = opacity;
    this.$stable_1 = 8;
  }
  protoOf(PlaceholderColor).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(PlaceholderColor).get_opacity_jowogu_k$ = function () {
    return this.opacity_1;
  };
  function get_$stableprop_18() {
    return 0;
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.Instant$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.UltraFast$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.VeryFast$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.Fast$delegate_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.Normal$delegate_1 = StyleVariable(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.Slow$delegate_1 = StyleVariable(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.VerySlow$delegate_1 = StyleVariable(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.UltraSlow$delegate_1 = StyleVariable(tmp0_defaultFallback_6, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(TransitionDurationVars).get_Instant_9uzajs_k$ = function () {
    return this.Instant$delegate_1.getValue_1h979_k$(this, Instant$factory());
  };
  protoOf(TransitionDurationVars).get_UltraFast_5ch09t_k$ = function () {
    return this.UltraFast$delegate_1.getValue_1h979_k$(this, UltraFast$factory());
  };
  protoOf(TransitionDurationVars).get_VeryFast_7jhf2z_k$ = function () {
    return this.VeryFast$delegate_1.getValue_1h979_k$(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).get_Fast_wo1fb9_k$ = function () {
    return this.Fast$delegate_1.getValue_1h979_k$(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).get_Normal_22avww_k$ = function () {
    return this.Normal$delegate_1.getValue_1h979_k$(this, Normal$factory());
  };
  protoOf(TransitionDurationVars).get_Slow_wo9y7e_k$ = function () {
    return this.Slow$delegate_1.getValue_1h979_k$(this, Slow$factory());
  };
  protoOf(TransitionDurationVars).get_VerySlow_7jpxz4_k$ = function () {
    return this.VerySlow$delegate_1.getValue_1h979_k$(this, VerySlow$factory());
  };
  protoOf(TransitionDurationVars).get_UltraSlow_5c8hdo_k$ = function () {
    return this.UltraSlow$delegate_1.getValue_1h979_k$(this, UltraSlow$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function Instant$factory() {
    return getPropertyCallableRef('Instant', 1, KProperty1, function (receiver) {
      return receiver.get_Instant_9uzajs_k$();
    }, null);
  }
  function UltraFast$factory() {
    return getPropertyCallableRef('UltraFast', 1, KProperty1, function (receiver) {
      return receiver.get_UltraFast_5ch09t_k$();
    }, null);
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.get_VeryFast_7jhf2z_k$();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.get_Fast_wo1fb9_k$();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.get_Normal_22avww_k$();
    }, null);
  }
  function Slow$factory() {
    return getPropertyCallableRef('Slow', 1, KProperty1, function (receiver) {
      return receiver.get_Slow_wo9y7e_k$();
    }, null);
  }
  function VerySlow$factory() {
    return getPropertyCallableRef('VerySlow', 1, KProperty1, function (receiver) {
      return receiver.get_VerySlow_7jpxz4_k$();
    }, null);
  }
  function UltraSlow$factory() {
    return getPropertyCallableRef('UltraSlow', 1, KProperty1, function (receiver) {
      return receiver.get_UltraSlow_5c8hdo_k$();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.getValue_1h979_k$(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.getValue_1h979_k$(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.getValue_1h979_k$(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.getValue_1h979_k$(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.getValue_1h979_k$(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.getValue_1h979_k$(null, PlaceholderColorVar$factory());
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
  function get_$stableprop_19() {
    return 0;
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.XS$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.SM$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.MD$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.LG$delegate_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(FontSizeVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_1h979_k$(this, XS$factory());
  };
  protoOf(FontSizeVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_1h979_k$(this, SM$factory());
  };
  protoOf(FontSizeVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_1h979_k$(this, MD$factory());
  };
  protoOf(FontSizeVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_1h979_k$(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.XS$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.SM$delegate_1 = StyleVariable(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.MD$delegate_1 = StyleVariable(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.375);
    tmp_2.LG$delegate_1 = StyleVariable(tmp0_defaultFallback_2, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(BorderRadiusVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_1h979_k$(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_1h979_k$(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_1h979_k$(this, MD$factory_0());
  };
  protoOf(BorderRadiusVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_1h979_k$(this, LG$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory_0() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
    }, null);
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.getValue_1h979_k$(null, DivTextStyle$factory());
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
    return SilkColorsStyle$delegate.getValue_1h979_k$(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = ColorSchemes_getInstance().get_Blue_wnz3k3_k$().get__500_wogfpb_k$().toRgb_1tsrpu_k$().copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.5);
    var placeholder = ColorSchemes_getInstance().get_Gray_wo2eh8_k$().get__500_wogfpb_k$();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_getInstance().get_Black_i7mvue_k$();
    set_background(tmp0_apply.get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(tmp0_apply.get_light_iuogdp_k$(), color);
    set_border(tmp0_apply.get_light_iuogdp_k$(), color.copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(tmp0_apply.get_light_iuogdp_k$(), focusOutline);
    set_overlay(tmp0_apply.get_light_iuogdp_k$(), color.copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(tmp0_apply.get_light_iuogdp_k$(), placeholder);
    var buttonBase = Colors_getInstance().get_White_ij46ow_k$().darkened_3k65o0_k$(0.2);
    (new MutableButton(tmp0_apply.get_light_iuogdp_k$())).set_agw0ix_k$(buttonBase, buttonBase.darkened_3k65o0_k$(0.2), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), buttonBase.darkened_3k65o0_k$(0.4));
    (new MutableCheckbox(tmp0_apply.get_light_iuogdp_k$())).set_p21n25_k$(ColorSchemes_getInstance().get_Blue_wnz3k3_k$().get__500_wogfpb_k$(), ColorSchemes_getInstance().get_Blue_wnz3k3_k$().get__600_woggg0_k$(), Colors_getInstance().get_White_ij46ow_k$());
    var inputFilled = ColorSchemes_getInstance().get_Gray_wo2eh8_k$().get__200_wogdh8_k$();
    var tmp0_$this = new MutableInput(tmp0_apply.get_light_iuogdp_k$());
    var tmp1_filledFocus = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder = ColorSchemes_getInstance().get_Gray_wo2eh8_k$().get__500_wogfpb_k$();
    var tmp3_invalidBorder = ColorSchemes_getInstance().get_Red_18jks8_k$().get__900_wogio3_k$();
    var tmp4_filledHover = inputFilled.darkened_3k65o0_k$(0.1);
    tmp0_$this.set_tz2nu9_k$(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = new MutableSwitch(tmp0_apply.get_light_iuogdp_k$());
    var tmp6_thumb = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn = Colors_getInstance().get_DodgerBlue_w4tkwu_k$();
    var tmp8_backgroundOff = Colors_getInstance().get_LightGray_i1h2r4_k$();
    tmp5_$this.set_p21n25_k$(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    (new MutableTab(tmp0_apply.get_light_iuogdp_k$())).set$default_opxhpz_k$(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), VOID, VOID, Colors_getInstance().get_LightGray_i1h2r4_k$(), Colors_getInstance().get_WhiteSmoke_gvtxtb_k$(), Colors_getInstance().get_White_ij46ow_k$());
    (new MutableTooltip(tmp0_apply.get_light_iuogdp_k$())).set_60o1sz_k$(get_color_0(tmp0_apply.get_light_iuogdp_k$()), get_background_0(tmp0_apply.get_light_iuogdp_k$()));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_getInstance().get_White_ij46ow_k$();
    set_background(tmp0_apply.get_dark_wokkvz_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_color(tmp0_apply.get_dark_wokkvz_k$(), color_0);
    set_border(tmp0_apply.get_dark_wokkvz_k$(), color_0.copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(tmp0_apply.get_dark_wokkvz_k$(), focusOutline);
    set_overlay(tmp0_apply.get_dark_wokkvz_k$(), color_0.copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(tmp0_apply.get_dark_wokkvz_k$(), placeholder);
    var buttonBase_0 = lightened(Colors_getInstance().get_Black_i7mvue_k$(), 0.2);
    (new MutableButton(tmp0_apply.get_dark_wokkvz_k$())).set_agw0ix_k$(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), lightened(buttonBase_0, 0.4));
    (new MutableCheckbox(tmp0_apply.get_dark_wokkvz_k$())).set_p21n25_k$(ColorSchemes_getInstance().get_Blue_wnz3k3_k$().get__200_wogdh8_k$(), ColorSchemes_getInstance().get_Blue_wnz3k3_k$().get__300_woge7x_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    var inputFilled_0 = ColorSchemes_getInstance().get_Gray_wo2eh8_k$().get__900_wogio3_k$();
    var tmp0_$this_0 = new MutableInput(tmp0_apply.get_dark_wokkvz_k$());
    var tmp1_filledFocus_0 = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder_0 = ColorSchemes_getInstance().get_Gray_wo2eh8_k$().get__600_woggg0_k$();
    var tmp3_invalidBorder_0 = ColorSchemes_getInstance().get_Red_18jks8_k$().get__300_woge7x_k$();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.set_tz2nu9_k$(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = new MutableSwitch(tmp0_apply.get_dark_wokkvz_k$());
    var tmp6_thumb_0 = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn_0 = Colors_getInstance().get_LightSkyBlue_74jx4i_k$();
    var tmp8_backgroundOff_0 = Colors_getInstance().get_DarkGray_1y3y8u_k$();
    tmp5_$this_0.set_p21n25_k$(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    (new MutableTab(tmp0_apply.get_dark_wokkvz_k$())).set$default_opxhpz_k$(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), VOID, VOID, Colors_getInstance().get_DarkSlateGray_s468al_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    (new MutableTooltip(tmp0_apply.get_dark_wokkvz_k$())).set_60o1sz_k$(get_color_0(tmp0_apply.get_dark_wokkvz_k$()), get_background_0(tmp0_apply.get_dark_wokkvz_k$()));
    mutableTheme.registerComponentStyle_35os1s_k$(get_SilkColorsStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisabledStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SmoothColorStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_ButtonStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_CanvasStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_CheckboxStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_CheckboxInputVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_CheckboxIconContainerStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_CheckboxIconStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_DividerStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DivTextStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_OverlayStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_PopupStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SimpleGridStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SurfaceStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_AnimatedColorSurfaceVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchTrackStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchThumbStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_SwitchInputVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsTabRowStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsTabStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsPanelStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_InputStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_InputGroupStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipArrowStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().get_name_woqyms_k$(), colorMode.get_opposite_ywslzk_k$())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().get_name_woqyms_k$(), colorMode)]);
  }
  function setSilkWidgetVariables$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(899333070);
    sourceInformation($composer_0, 'C(setSilkWidgetVariables$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(899333070, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:310)');
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
      if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable.<anonymous>' call
        var tmp_0 = _this__u8e3s4.getElementById('root');
        var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_1 = tmp;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var root = tmp0;
      setSilkWidgetVariables$composable_0(root, $composer_0, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(setSilkWidgetVariables$composable$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables$composable_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(417149198);
    sourceInformation($composer_0, 'C(setSilkWidgetVariables$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(417149198, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:316)');
      }
      setSilkWidgetVariables(_this__u8e3s4, Companion_getInstance_12().$get_current$$composable_lr7uxx_k$($composer_0, 6));
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(setSilkWidgetVariables$composable$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), get_button(palette).get_default_qtagd4_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), get_button(palette).get_hover_islez7_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), get_button(palette).get_pressed_3zxk93_k$()), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), get_checkbox(palette).get_background_stpfw7_k$()), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$(), get_checkbox(palette).get_hover_islez7_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$(), get_checkbox(palette).get_color_ipu8u2_k$()), InputVars_getInstance().get_BorderHoverColor_4uita4_k$(), get_input(palette).get_hoveredBorder_pnis3i_k$()), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), get_input(palette).get_invalidBorder_suexpi_k$()), InputVars_getInstance().get_FilledColor_27lcwo_k$(), get_input(palette).get_filled_dbz78r_k$()), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$(), get_input(palette).get_filledHover_panomn_k$()), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$(), get_input(palette).get_filledFocus_pbrnir_k$()), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_overlay(palette)), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$(), get_switch(palette).get_thumb_iz2gml_k$()), TabVars_getInstance().get_Color_i88tui_k$(), get_tab(palette).get_color_ipu8u2_k$()), TabVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tab(palette).get_background_stpfw7_k$()), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$(), get_tab(palette).get_disabled_rbmjej_k$()), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$(), get_tab(palette).get_hover_islez7_k$()), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$(), get_tab(palette).get_pressed_3zxk93_k$()), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tooltip(palette).get_background_stpfw7_k$()), TooltipVars_getInstance().get_Color_i88tui_k$(), get_tooltip(palette).get_color_ipu8u2_k$());
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
  function Button() {
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.focus$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableButton).set_default_uv4i87_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_ovgpf8_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_1h979_k$(this, default$factory_0());
  };
  protoOf(MutableButton).set_hover_5g49pw_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_ovgpf8_k$(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_1h979_k$(this, hover$factory_0());
  };
  protoOf(MutableButton).set_focus_v838b4_k$ = function (_set____db54di) {
    return this.focus$delegate_1.setValue_ovgpf8_k$(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_focus_irhg33_k$ = function () {
    return this.focus$delegate_1.getValue_1h979_k$(this, focus$factory_0());
  };
  protoOf(MutableButton).set_pressed_a5ywgq_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_ovgpf8_k$(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_1h979_k$(this, pressed$factory_0());
  };
  protoOf(MutableButton).set_agw0ix_k$ = function (default_0, hover, focus, pressed) {
    this.set_default_uv4i87_k$(default_0);
    this.set_hover_5g49pw_k$(hover);
    this.set_focus_v838b4_k$(focus);
    this.set_pressed_a5ywgq_k$(pressed);
  };
  function Checkbox() {
  }
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableCheckbox).set_background_j61p34_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_ovgpf8_k$(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_1h979_k$(this, background$factory_0());
  };
  protoOf(MutableCheckbox).set_hover_5g49pw_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_ovgpf8_k$(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_1h979_k$(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).set_color_mffmcl_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_ovgpf8_k$(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_1h979_k$(this, color$factory_0());
  };
  protoOf(MutableCheckbox).set_p21n25_k$ = function (background, hover, color) {
    this.set_background_j61p34_k$(background);
    this.set_hover_5g49pw_k$(hover);
    this.set_color_mffmcl_k$(color);
  };
  function Input() {
  }
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.hoveredBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.invalidBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filled$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledHover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledFocus$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableInput).set_hoveredBorder_h6u8gx_k$ = function (_set____db54di) {
    return this.hoveredBorder$delegate_1.setValue_ovgpf8_k$(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_hoveredBorder_pnis3i_k$ = function () {
    return this.hoveredBorder$delegate_1.getValue_1h979_k$(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).set_invalidBorder_rcvt17_k$ = function (_set____db54di) {
    return this.invalidBorder$delegate_1.setValue_ovgpf8_k$(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_invalidBorder_suexpi_k$ = function () {
    return this.invalidBorder$delegate_1.getValue_1h979_k$(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).set_filled_i2nhmc_k$ = function (_set____db54di) {
    return this.filled$delegate_1.setValue_ovgpf8_k$(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filled_dbz78r_k$ = function () {
    return this.filled$delegate_1.getValue_1h979_k$(this, filled$factory_0());
  };
  protoOf(MutableInput).set_filledHover_jy396a_k$ = function (_set____db54di) {
    return this.filledHover$delegate_1.setValue_ovgpf8_k$(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledHover_panomn_k$ = function () {
    return this.filledHover$delegate_1.getValue_1h979_k$(this, filledHover$factory_0());
  };
  protoOf(MutableInput).set_filledFocus_pb1u7m_k$ = function (_set____db54di) {
    return this.filledFocus$delegate_1.setValue_ovgpf8_k$(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledFocus_pbrnir_k$ = function () {
    return this.filledFocus$delegate_1.getValue_1h979_k$(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).set_tz2nu9_k$ = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.set_hoveredBorder_h6u8gx_k$(hoveredBorder);
    this.set_invalidBorder_rcvt17_k$(invalidBorder);
    this.set_filled_i2nhmc_k$(filled);
    this.set_filledHover_jy396a_k$(filledHover);
    this.set_filledFocus_pb1u7m_k$(filledFocus);
  };
  function Switch() {
  }
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.backgroundOn$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.backgroundOff$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.thumb$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableSwitch).set_backgroundOn_xdnmbl_k$ = function (_set____db54di) {
    return this.backgroundOn$delegate_1.setValue_ovgpf8_k$(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOn_11s1ze_k$ = function () {
    return this.backgroundOn$delegate_1.getValue_1h979_k$(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).set_backgroundOff_5bjgd5_k$ = function (_set____db54di) {
    return this.backgroundOff$delegate_1.setValue_ovgpf8_k$(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOff_wj5pl4_k$ = function () {
    return this.backgroundOff$delegate_1.getValue_1h979_k$(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).set_thumb_7aiwfm_k$ = function (_set____db54di) {
    return this.thumb$delegate_1.setValue_ovgpf8_k$(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_thumb_iz2gml_k$ = function () {
    return this.thumb$delegate_1.getValue_1h979_k$(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).set_p21n25_k$ = function (backgroundOn, backgroundOff, thumb) {
    this.set_backgroundOn_xdnmbl_k$(backgroundOn);
    this.set_backgroundOff_5bjgd5_k$(backgroundOff);
    this.set_thumb_7aiwfm_k$(thumb);
  };
  function Tab() {
  }
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedColor$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBackground$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.disabled$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableTab).set_color_mffmcl_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_ovgpf8_k$(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_1h979_k$(this, color$factory_2());
  };
  protoOf(MutableTab).set_background_j61p34_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_ovgpf8_k$(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_1h979_k$(this, background$factory_2());
  };
  protoOf(MutableTab).set_selectedColor_imhz7k_k$ = function (_set____db54di) {
    return this.selectedColor$delegate_1.setValue_ovgpf8_k$(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedColor_mfz4gv_k$ = function () {
    return this.selectedColor$delegate_1.getValue_1h979_k$(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).set_selectedBackground_z4mad7_k$ = function (_set____db54di) {
    return this.selectedBackground$delegate_1.setValue_ovgpf8_k$(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBackground_7y8aq6_k$ = function () {
    return this.selectedBackground$delegate_1.getValue_1h979_k$(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).set_selectedBorder_i89kl5_k$ = function (_set____db54di) {
    return this.selectedBorder$delegate_1.setValue_ovgpf8_k$(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBorder_f0tq34_k$ = function () {
    return this.selectedBorder$delegate_1.getValue_1h979_k$(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).set_hover_5g49pw_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_ovgpf8_k$(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_1h979_k$(this, hover$factory_4());
  };
  protoOf(MutableTab).set_pressed_a5ywgq_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_ovgpf8_k$(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_1h979_k$(this, pressed$factory_2());
  };
  protoOf(MutableTab).set_disabled_p20ng2_k$ = function (_set____db54di) {
    return this.disabled$delegate_1.setValue_ovgpf8_k$(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_disabled_rbmjej_k$ = function () {
    return this.disabled$delegate_1.getValue_1h979_k$(this, disabled$factory_0());
  };
  protoOf(MutableTab).set_u3ethb_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.set_color_mffmcl_k$(color);
    this.set_background_j61p34_k$(background);
    this.set_selectedColor_imhz7k_k$(selectedColor);
    this.set_selectedBackground_z4mad7_k$(selectedBackground);
    this.set_selectedBorder_i89kl5_k$(selectedBorder);
    this.set_hover_5g49pw_k$(hover);
    this.set_pressed_a5ywgq_k$(pressed);
    this.set_disabled_p20ng2_k$(disabled);
  };
  protoOf(MutableTab).set$default_opxhpz_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.set_u3ethb_k$(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.set_u3ethb_k$.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function Tooltip() {
  }
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableTooltip).set_background_j61p34_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_ovgpf8_k$(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_1h979_k$(this, background$factory_4());
  };
  protoOf(MutableTooltip).set_color_mffmcl_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_ovgpf8_k$(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_1h979_k$(this, color$factory_4());
  };
  protoOf(MutableTooltip).set_60o1sz_k$ = function (background, color) {
    this.set_background_j61p34_k$(background);
    this.set_color_mffmcl_k$(color);
  };
  function get_$stableprop_27() {
    return 0;
  }
  function SilkWidgetColorGroups() {
    SilkWidgetColorGroups_instance = this;
    this.$stable_1 = 0;
  }
  var SilkWidgetColorGroups_instance;
  function SilkWidgetColorGroups_getInstance() {
    if (SilkWidgetColorGroups_instance == null)
      new SilkWidgetColorGroups();
    return SilkWidgetColorGroups_instance;
  }
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
    return _this__u8e3s4.getValue_77wvui_k$('overlay');
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
    return _this__u8e3s4.getValue_77wvui_k$('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('background');
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
  function get_OVERLAY_KEY() {
    return OVERLAY_KEY;
  }
  var OVERLAY_KEY;
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function get_PLACEHOLDER_KEY() {
    return PLACEHOLDER_KEY;
  }
  var PLACEHOLDER_KEY;
  function get_FOCUS_OUTLINE_KEY() {
    return FOCUS_OUTLINE_KEY;
  }
  var FOCUS_OUTLINE_KEY;
  function get_BORDER_KEY() {
    return BORDER_KEY;
  }
  var BORDER_KEY;
  function get_COLOR_KEY() {
    return COLOR_KEY;
  }
  var COLOR_KEY;
  function get_BACKGROUND_KEY() {
    return BACKGROUND_KEY;
  }
  var BACKGROUND_KEY;
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('border', value);
  }
  function get_border_0(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('border');
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('focusOutline', value);
  }
  function get_focusOutline_0(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('focusOutline');
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('overlay', value);
  }
  function get_overlay_0(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('overlay');
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.set_oci0ne_k$('placeholder', value);
  }
  function get_placeholder_1(_this__u8e3s4) {
    return _this__u8e3s4.getValue_77wvui_k$('placeholder');
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_uv4i87_k$(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_uv4i87_k$(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_v838b4_k$(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_v838b4_k$(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_a5ywgq_k$(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_a5ywgq_k$(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_h6u8gx_k$(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_h6u8gx_k$(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_rcvt17_k$(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_rcvt17_k$(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_i2nhmc_k$(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_i2nhmc_k$(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_jy396a_k$(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_jy396a_k$(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_pb1u7m_k$(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_pb1u7m_k$(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_xdnmbl_k$(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_xdnmbl_k$(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_5bjgd5_k$(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_5bjgd5_k$(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_7aiwfm_k$(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_7aiwfm_k$(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_imhz7k_k$(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_imhz7k_k$(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_z4mad7_k$(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_z4mad7_k$(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_i89kl5_k$(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_i89kl5_k$(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_5g49pw_k$(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_a5ywgq_k$(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_a5ywgq_k$(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_p20ng2_k$(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_p20ng2_k$(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_j61p34_k$(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_mffmcl_k$(value);
    });
  }
  //region block: post-declaration
  protoOf(SM_0).get_padding_c2ipjs_k$ = get_padding;
  protoOf(MD_0).get_padding_c2ipjs_k$ = get_padding;
  protoOf(LG_0).get_padding_c2ipjs_k$ = get_padding;
  //endregion
  //region block: init
  OVERLAY_KEY = 'overlay';
  PLACEHOLDER_KEY = 'placeholder';
  FOCUS_OUTLINE_KEY = 'focusOutline';
  BORDER_KEY = 'border';
  COLOR_KEY = 'color';
  BACKGROUND_KEY = 'background';
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
  _.$_$.k = LG_getInstance_0;
  _.$_$.l = MD_getInstance_0;
  //endregion
  return _;
}));
