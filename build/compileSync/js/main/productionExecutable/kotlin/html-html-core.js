(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var protoOf = kotlin_kotlin.$_$.da;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.je;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var asList = kotlin_kotlin.$_$.i5;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.f5;
  var to = kotlin_kotlin.$_$.ie;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var Pair = kotlin_kotlin.$_$.yc;
  var classMeta = kotlin_kotlin.$_$.w8;
  var toString = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var equals = kotlin_kotlin.$_$.z8;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.td;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var toString_0 = kotlin_kotlin.$_$.he;
  var toBoolean = kotlin_kotlin.$_$.yb;
  var hashCode = kotlin_kotlin.$_$.f9;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var numberToDouble = kotlin_kotlin.$_$.z9;
  var getNumberHashCode = kotlin_kotlin.$_$.c9;
  var defineProp = kotlin_kotlin.$_$.y8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Collection = kotlin_kotlin.$_$.s4;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var listOfNotNull = kotlin_kotlin.$_$.t6;
  var joinToString = kotlin_kotlin.$_$.l6;
  var joinToString_0 = kotlin_kotlin.$_$.m6;
  var contains = kotlin_kotlin.$_$.xa;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var isObject = kotlin_kotlin.$_$.t9;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.y5;
  var copyToArray = kotlin_kotlin.$_$.w5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ge;
  var lazy = kotlin_kotlin.$_$.yd;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  function onClick(listener) {
    Companion_getInstance_1();
    this.z1z(new MouseEventListener('click', listener));
  }
  function onKeyUp(listener) {
    Companion_getInstance_1();
    this.z1z(new KeyboardEventListener('keyup', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.t1z(asList(classes));
  }
  function id(value) {
    Companion_getInstance_0();
    return this.h1z('id', value);
  }
  function tabIndex(value) {
    Companion_getInstance_0();
    return this.h1z('tabindex', value.toString());
  }
  function spellCheck(value) {
    Companion_getInstance_0();
    return this.h1z('spellcheck', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope]);
  setMetadataFor(InputType, 'InputType', classMeta);
  setMetadataFor(InputTypeWithUnitValue, 'InputTypeWithUnitValue', classMeta, InputType);
  setMetadataFor(Button, 'Button', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(InputTypeCheckedValue, 'InputTypeCheckedValue', classMeta, InputType);
  setMetadataFor(Checkbox, 'Checkbox', objectMeta, InputTypeCheckedValue);
  setMetadataFor(InputTypeWithStringValue, 'InputTypeWithStringValue', classMeta, InputType);
  setMetadataFor(Color, 'Color', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Date_0, 'Date', objectMeta, InputTypeWithStringValue);
  setMetadataFor(DateTimeLocal, 'DateTimeLocal', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Email, 'Email', objectMeta, InputTypeWithStringValue);
  setMetadataFor(File, 'File', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Hidden, 'Hidden', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Month, 'Month', objectMeta, InputTypeWithStringValue);
  setMetadataFor(InputTypeNumberValue, 'InputTypeNumberValue', classMeta, InputType);
  setMetadataFor(Number_0, 'Number', objectMeta, InputTypeNumberValue);
  setMetadataFor(Password, 'Password', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Radio, 'Radio', objectMeta, InputTypeCheckedValue);
  setMetadataFor(Range, 'Range', objectMeta, InputTypeNumberValue);
  setMetadataFor(Search, 'Search', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Submit, 'Submit', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(Tel, 'Tel', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Text_0, 'Text', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Time, 'Time', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Url, 'Url', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Week, 'Week', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(InputEventListener, 'InputEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputAttrsScope, 'InputAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(TextAreaAttrsScope, 'TextAreaAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSCalcValue, 'CSSCalcValue', classMeta);
  setMetadataFor(CSSMinus, 'CSSMinus', classMeta);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.q28(propertyName, tmp$ret$2);
  }
  function property_0(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.q28(propertyName, tmp$ret$2);
  }
  function variable(variableName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.s28(variableName, tmp$ret$2);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder]);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGB, 'RGB', classMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function add(selector, style) {
    this.t27(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.u29();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.s29(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.s29(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.p29(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder]);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticInputEvent, 'SyntheticInputEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('type', value.f1z_1);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('href', value);
  }
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('placeholder', value);
  }
  function readOnly(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('readonly', '');
  }
  function required(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('required', '');
  }
  function autoComplete(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.h1z('autocomplete', value);
  }
  function forId(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('for', value);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.h1z('src', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.i1z_1 = 'class';
    this.j1z_1 = 'id';
    this.k1z_1 = 'hidden';
    this.l1z_1 = 'title';
    this.m1z_1 = 'dir';
    this.n1z_1 = 'draggable';
    this.o1z_1 = 'contenteditable';
    this.p1z_1 = 'lang';
    this.q1z_1 = 'tabindex';
    this.r1z_1 = 'spellcheck';
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.c20_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d20_1 = LinkedHashMap_init_$Create$();
    this.e20_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.f20_1 = ArrayList_init_$Create$();
    this.g20_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.h20_1 = ArrayList_init_$Create$();
    this.i20_1 = 8;
  }
  protoOf(AttrsScopeBuilder).a20 = function (listener) {
    this.c20_1.a20(listener);
  };
  protoOf(AttrsScopeBuilder).b20 = function (listener) {
    this.c20_1.b20(listener);
  };
  protoOf(AttrsScopeBuilder).z1z = function (listener) {
    this.c20_1.z1z(listener);
  };
  protoOf(AttrsScopeBuilder).t1z = function (classes) {
    this.h20_1.j(classes);
  };
  protoOf(AttrsScopeBuilder).u1z = function (classes) {
    addAll(this.h20_1, classes);
  };
  protoOf(AttrsScopeBuilder).s1z = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.e20_1);
  };
  protoOf(AttrsScopeBuilder).h1z = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.d20_1.l3(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).y1z = function (update, value) {
    var tmp = to(update, value);
    this.f20_1.a(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).l20 = function () {
    return this.d20_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.m20_1 = 'copy';
    this.n20_1 = 'cut';
    this.o20_1 = 'paste';
    this.p20_1 = 'contextmenu';
    this.q20_1 = 'click';
    this.r20_1 = 'dblclick';
    this.s20_1 = 'focus';
    this.t20_1 = 'blur';
    this.u20_1 = 'focusin';
    this.v20_1 = 'focusout';
    this.w20_1 = 'keydown';
    this.x20_1 = 'keyup';
    this.y20_1 = 'mousedown';
    this.z20_1 = 'mouseup';
    this.a21_1 = 'mouseenter';
    this.b21_1 = 'mouseleave';
    this.c21_1 = 'mousemove';
    this.d21_1 = 'mouseout';
    this.e21_1 = 'mouseover';
    this.f21_1 = 'wheel';
    this.g21_1 = 'scroll';
    this.h21_1 = 'select';
    this.i21_1 = 'touchcancel';
    this.j21_1 = 'touchend';
    this.k21_1 = 'touchmove';
    this.l21_1 = 'touchstart';
    this.m21_1 = 'animationcancel';
    this.n21_1 = 'animationend';
    this.o21_1 = 'animationiteration';
    this.p21_1 = 'animationstart';
    this.q21_1 = 'beforeinput';
    this.r21_1 = 'input';
    this.s21_1 = 'change';
    this.t21_1 = 'invalid';
    this.u21_1 = 'drag';
    this.v21_1 = 'drop';
    this.w21_1 = 'dragstart';
    this.x21_1 = 'dragend';
    this.y21_1 = 'dragover';
    this.z21_1 = 'dragenter';
    this.a22_1 = 'dragleave';
    this.b22_1 = 'submit';
    this.c22_1 = 'reset';
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j20_1 = ArrayList_init_$Create$();
    this.k20_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).z1z = function (listener) {
    this.j20_1.a(listener);
  };
  protoOf(EventsListenerScopeBuilder).d22 = function () {
    return this.j20_1;
  };
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.h22_1 = 0;
  }
  var Button_instance;
  function Button_getInstance() {
    if (Button_instance == null)
      new Button();
    return Button_instance;
  }
  function Checkbox() {
    Checkbox_instance = this;
    InputTypeCheckedValue.call(this, 'checkbox');
    this.p22_1 = 0;
  }
  var Checkbox_instance;
  function Checkbox_getInstance() {
    if (Checkbox_instance == null)
      new Checkbox();
    return Checkbox_instance;
  }
  function Color() {
    Color_instance = this;
    InputTypeWithStringValue.call(this, 'color');
    this.x22_1 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  function Date_0() {
    Date_instance = this;
    InputTypeWithStringValue.call(this, 'date');
    this.e23_1 = 0;
  }
  var Date_instance;
  function Date_getInstance() {
    if (Date_instance == null)
      new Date_0();
    return Date_instance;
  }
  function DateTimeLocal() {
    DateTimeLocal_instance = this;
    InputTypeWithStringValue.call(this, 'datetime-local');
    this.i23_1 = 0;
  }
  var DateTimeLocal_instance;
  function DateTimeLocal_getInstance() {
    if (DateTimeLocal_instance == null)
      new DateTimeLocal();
    return DateTimeLocal_instance;
  }
  function Email() {
    Email_instance = this;
    InputTypeWithStringValue.call(this, 'email');
    this.m23_1 = 0;
  }
  var Email_instance;
  function Email_getInstance() {
    if (Email_instance == null)
      new Email();
    return Email_instance;
  }
  function File() {
    File_instance = this;
    InputTypeWithStringValue.call(this, 'file');
    this.q23_1 = 0;
  }
  var File_instance;
  function File_getInstance() {
    if (File_instance == null)
      new File();
    return File_instance;
  }
  function Hidden() {
    Hidden_instance = this;
    InputTypeWithStringValue.call(this, 'hidden');
    this.u23_1 = 0;
  }
  var Hidden_instance;
  function Hidden_getInstance() {
    if (Hidden_instance == null)
      new Hidden();
    return Hidden_instance;
  }
  function Month() {
    Month_instance = this;
    InputTypeWithStringValue.call(this, 'month');
    this.y23_1 = 0;
  }
  var Month_instance;
  function Month_getInstance() {
    if (Month_instance == null)
      new Month();
    return Month_instance;
  }
  function Number_0() {
    Number_instance = this;
    InputTypeNumberValue.call(this, 'number');
    this.c24_1 = 0;
  }
  var Number_instance;
  function Number_getInstance() {
    if (Number_instance == null)
      new Number_0();
    return Number_instance;
  }
  function Password() {
    Password_instance = this;
    InputTypeWithStringValue.call(this, 'password');
    this.j24_1 = 0;
  }
  var Password_instance;
  function Password_getInstance() {
    if (Password_instance == null)
      new Password();
    return Password_instance;
  }
  function Radio() {
    Radio_instance = this;
    InputTypeCheckedValue.call(this, 'radio');
    this.n24_1 = 0;
  }
  var Radio_instance;
  function Radio_getInstance() {
    if (Radio_instance == null)
      new Radio();
    return Radio_instance;
  }
  function Range() {
    Range_instance = this;
    InputTypeNumberValue.call(this, 'range');
    this.r24_1 = 0;
  }
  var Range_instance;
  function Range_getInstance() {
    if (Range_instance == null)
      new Range();
    return Range_instance;
  }
  function Search() {
    Search_instance = this;
    InputTypeWithStringValue.call(this, 'search');
    this.v24_1 = 0;
  }
  var Search_instance;
  function Search_getInstance() {
    if (Search_instance == null)
      new Search();
    return Search_instance;
  }
  function Submit() {
    Submit_instance = this;
    InputTypeWithUnitValue.call(this, 'submit');
    this.z24_1 = 0;
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function Tel() {
    Tel_instance = this;
    InputTypeWithStringValue.call(this, 'tel');
    this.d25_1 = 0;
  }
  var Tel_instance;
  function Tel_getInstance() {
    if (Tel_instance == null)
      new Tel();
    return Tel_instance;
  }
  function Text_0() {
    Text_instance = this;
    InputTypeWithStringValue.call(this, 'text');
    this.h25_1 = 0;
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text_0();
    return Text_instance;
  }
  function Time() {
    Time_instance = this;
    InputTypeWithStringValue.call(this, 'time');
    this.l25_1 = 0;
  }
  var Time_instance;
  function Time_getInstance() {
    if (Time_instance == null)
      new Time();
    return Time_instance;
  }
  function Url() {
    Url_instance = this;
    InputTypeWithStringValue.call(this, 'url');
    this.p25_1 = 0;
  }
  var Url_instance;
  function Url_getInstance() {
    if (Url_instance == null)
      new Url();
    return Url_instance;
  }
  function Week() {
    Week_instance = this;
    InputTypeWithStringValue.call(this, 'week');
    this.t25_1 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.a23_1 = 0;
  }
  protoOf(InputTypeWithStringValue).t22 = function (event) {
    return Week_getInstance().u25(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.k22_1 = 0;
  }
  protoOf(InputTypeWithUnitValue).l22 = function (event) {
    return Unit_getInstance();
  };
  protoOf(InputTypeWithUnitValue).t22 = function (event) {
    this.l22(event);
    return Unit_getInstance();
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.s22_1 = 0;
  }
  protoOf(InputTypeCheckedValue).t22 = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.checked;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
  };
  function InputTypeNumberValue(name) {
    InputType.call(this, name);
    this.f24_1 = 0;
  }
  protoOf(InputTypeNumberValue).t22 = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.valueAsNumber;
    return tmp2_elvis_lhs == null ? null : tmp2_elvis_lhs;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).v25 = function (type) {
    var tmp;
    switch (type) {
      case 'button':
        tmp = Button_getInstance();
        break;
      case 'checkbox':
        tmp = Checkbox_getInstance();
        break;
      case 'color':
        tmp = Color_getInstance();
        break;
      case 'date':
        tmp = Date_getInstance();
        break;
      case 'datetime-local':
        tmp = DateTimeLocal_getInstance();
        break;
      case 'email':
        tmp = Email_getInstance();
        break;
      case 'file':
        tmp = File_getInstance();
        break;
      case 'hidden':
        tmp = Hidden_getInstance();
        break;
      case 'month':
        tmp = Month_getInstance();
        break;
      case 'number':
        tmp = Number_getInstance();
        break;
      case 'password':
        tmp = Password_getInstance();
        break;
      case 'radio':
        tmp = Radio_getInstance();
        break;
      case 'range':
        tmp = Range_getInstance();
        break;
      case 'search':
        tmp = Search_getInstance();
        break;
      case 'submit':
        tmp = Submit_getInstance();
        break;
      case 'tel':
        tmp = Tel_getInstance();
        break;
      case 'text':
        tmp = Text_getInstance();
        break;
      case 'time':
        tmp = Time_getInstance();
        break;
      case 'url':
        tmp = Url_getInstance();
        break;
      case 'week':
        tmp = Week_getInstance();
        break;
      default:
        var tmp0_error = 'fromString got unknown type - ' + type;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function InputType(typeStr) {
    Companion_getInstance_2();
    this.f1z_1 = typeStr;
    this.g1z_1 = 0;
  }
  protoOf(InputType).u25 = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.value;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
  };
  function SyntheticEventListener(event, listener) {
    this.w25_1 = event;
    this.x25_1 = listener;
    this.y25_1 = this.w25_1;
    this.z25_1 = 0;
  }
  protoOf(SyntheticEventListener).a26 = function () {
    return this.y25_1;
  };
  protoOf(SyntheticEventListener).pi = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new SyntheticEvent(event);
    this.x25_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.pi(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    var tmp;
    if (eventName === VOID) {
      Companion_getInstance_1();
      tmp = 'input';
    } else {
      tmp = eventName;
    }
    eventName = tmp;
    SyntheticEventListener.call(this, eventName, listener);
    this.f26_1 = inputType;
  }
  protoOf(InputEventListener).pi = function (event) {
    var value = this.f26_1.t22(event);
    this.x25_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.pi(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).pi = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.x25_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.pi(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(KeyboardEventListener).pi = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.x25_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.pi(event);
  };
  function InputAttrsScope(inputType, attrsScope) {
    this.o26_1 = inputType;
    this.p26_1 = attrsScope;
    this.q26_1 = 8;
  }
  protoOf(InputAttrsScope).h1z = function (attr, value) {
    return this.p26_1.h1z(attr, value);
  };
  protoOf(InputAttrsScope).u1z = function (classes) {
    this.p26_1.u1z(classes);
  };
  protoOf(InputAttrsScope).t1z = function (classes) {
    this.p26_1.t1z(classes);
  };
  protoOf(InputAttrsScope).v1z = function (value) {
    return this.p26_1.v1z(value);
  };
  protoOf(InputAttrsScope).a20 = function (listener) {
    this.p26_1.a20(listener);
  };
  protoOf(InputAttrsScope).b20 = function (listener) {
    this.p26_1.b20(listener);
  };
  protoOf(InputAttrsScope).y1z = function (update, value) {
    this.p26_1.y1z(update, value);
  };
  protoOf(InputAttrsScope).z1z = function (listener) {
    this.p26_1.z1z(listener);
  };
  protoOf(InputAttrsScope).x1z = function (value) {
    return this.p26_1.x1z(value);
  };
  protoOf(InputAttrsScope).s1z = function (builder) {
    this.p26_1.s1z(builder);
  };
  protoOf(InputAttrsScope).w1z = function (value) {
    return this.p26_1.w1z(value);
  };
  protoOf(InputAttrsScope).r26 = function (value) {
    var tmp0_subject = this.o26_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.h1z('value', value);
    } else {
      this.y1z(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).s26 = function (value) {
    this.r26(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).t26 = function (checked) {
    this.y1z(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).u26 = function (listener) {
    Companion_getInstance_1();
    this.z1z(new InputEventListener('input', this.o26_1, listener));
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = element.name;
      tmp = charSequenceLength(tmp0_isNotEmpty) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().d2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = get_controlledRadioGroups();
        var tmp2_set = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var tmp3_set = LinkedHashSet_init_$Create$();
        tmp1_set.l3(tmp2_set, tmp3_set);
      }
      ensureNotNull(get_controlledRadioGroups().h2(element.name)).a(element);
    }
  }
  function DisposeRadioGroupEffect$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.ny(-1867048565);
    if (isTraceInProgress()) {
      traceEventStart(-1867048565, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect$composable(null, DisposeRadioGroupEffect$composable$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_getInstance_2().v25(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().h2(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = tmp0_safe_receiver.c();
          while (tmp0_iterator.d()) {
            var element = tmp0_iterator.e();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_getInstance();
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function restoreControlledTextAreaState(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    if (get_controlledInputsValuesWeakMap().has(element)) {
      element.value = toString_0(get_controlledInputsValuesWeakMap().get(element));
    }
  }
  function _no_name_provided__qut3iv($ref) {
    this.v26_1 = $ref;
  }
  protoOf(_no_name_provided__qut3iv).ql = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().h2(this.v26_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v9(this.v26_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().h2(this.v26_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k()) === true) {
      get_controlledRadioGroups().xa(this.v26_1.name);
    }
  };
  function DisposeRadioGroupEffect$composable$lambda($this_DisposeRadioGroupEffect$composable) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect$composable.w26($this$DisposableEffect);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(ref);
      return tmp$ret$0;
    };
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function TextAreaAttrsScope(attrsScope) {
    this.x26_1 = attrsScope;
    this.y26_1 = 8;
  }
  protoOf(TextAreaAttrsScope).h1z = function (attr, value) {
    return this.x26_1.h1z(attr, value);
  };
  protoOf(TextAreaAttrsScope).u1z = function (classes) {
    this.x26_1.u1z(classes);
  };
  protoOf(TextAreaAttrsScope).t1z = function (classes) {
    this.x26_1.t1z(classes);
  };
  protoOf(TextAreaAttrsScope).v1z = function (value) {
    return this.x26_1.v1z(value);
  };
  protoOf(TextAreaAttrsScope).a20 = function (listener) {
    this.x26_1.a20(listener);
  };
  protoOf(TextAreaAttrsScope).b20 = function (listener) {
    this.x26_1.b20(listener);
  };
  protoOf(TextAreaAttrsScope).y1z = function (update, value) {
    this.x26_1.y1z(update, value);
  };
  protoOf(TextAreaAttrsScope).z1z = function (listener) {
    this.x26_1.z1z(listener);
  };
  protoOf(TextAreaAttrsScope).x1z = function (value) {
    return this.x26_1.x1z(value);
  };
  protoOf(TextAreaAttrsScope).s1z = function (builder) {
    this.x26_1.s1z(builder);
  };
  protoOf(TextAreaAttrsScope).w1z = function (value) {
    return this.x26_1.w1z(value);
  };
  protoOf(TextAreaAttrsScope).r26 = function (value) {
    this.y1z(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).z26 = function (listener) {
    Companion_getInstance_1();
    this.z1z(new InputEventListener('input', Text_getInstance(), listener));
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.b27_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.d27_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.e27_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.f27_1 = keyframe;
    this.g27_1 = style;
    this.h27_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).i27 = function () {
    return this.g27_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).j27 = function () {
    return this.f27_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.f27_1 + ', style=' + this.g27_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.f27_1);
    result = imul(result, 31) + hashCode(this.g27_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.f27_1, tmp0_other_with_cast.f27_1))
      return false;
    if (!equals(this.g27_1, tmp0_other_with_cast.g27_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.k27_1 = name;
    this.l27_1 = keys;
    this.m27_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).j27 = function () {
    return '@keyframes ' + this.k27_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.k27_1 + ', keys=' + this.l27_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.k27_1);
    result = imul(result, 31) + hashCode(this.l27_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.k27_1 === tmp0_other_with_cast.k27_1))
      return false;
    if (!equals(this.l27_1, tmp0_other_with_cast.l27_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.n27_1 = string;
    this.o27_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.n27_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.n27_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.n27_1 === tmp0_other_with_cast.n27_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.p27_1 = name;
    this.q27_1 = value;
    this.r27_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.p27_1 === other.p27_1 ? toString_0(this.q27_1) === toString_0(other.q27_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.q27_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.q27_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.p27_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.s27(rulesBuild);
    _this__u8e3s4.t27(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.u27_1 = query;
    this.v27_1 = rules;
    this.w27_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).x27 = function () {
    return this.v27_1;
  };
  protoOf(CSSMediaRuleDeclaration).j27 = function () {
    return '@media ' + this.u27_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.v27_1, other.v27_1) ? equals(this.u27_1, other.u27_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSCalcValue(op) {
    this.y27_1 = op;
    this.z27_1 = 8;
  }
  protoOf(CSSCalcValue).toString = function () {
    return 'calc' + this.y27_1;
  };
  protoOf(CSSCalcValue).hashCode = function () {
    return hashCode(this.y27_1);
  };
  protoOf(CSSCalcValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSCalcValue))
      return false;
    var tmp0_other_with_cast = other instanceof CSSCalcValue ? other : THROW_CCE();
    if (!equals(this.y27_1, tmp0_other_with_cast.y27_1))
      return false;
    return true;
  };
  function minus(_this__u8e3s4, b) {
    return new CSSCalcValue(new CSSMinus(_this__u8e3s4, b));
  }
  function CSSMinus(l, r) {
    this.a28_1 = l;
    this.b28_1 = r;
  }
  protoOf(CSSMinus).toString = function () {
    return '(' + this.a28_1 + ' - ' + this.b28_1 + ')';
  };
  protoOf(CSSMinus).hashCode = function () {
    var result = hashCode(this.a28_1);
    result = imul(result, 31) + hashCode(this.b28_1) | 0;
    return result;
  };
  protoOf(CSSMinus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSMinus))
      return false;
    var tmp0_other_with_cast = other instanceof CSSMinus ? other : THROW_CCE();
    if (!equals(this.a28_1, tmp0_other_with_cast.a28_1))
      return false;
    if (!equals(this.b28_1, tmp0_other_with_cast.b28_1))
      return false;
    return true;
  };
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.c28_1 = selector;
    this.d28_1 = style;
    this.e28_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).i27 = function () {
    return this.d28_1;
  };
  protoOf(CSSStyleRuleDeclaration).j27 = function () {
    return this.c28_1.g28();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.c28_1 + ', style=' + this.d28_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.c28_1);
    result = imul(result, 31) + hashCode(this.d28_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.c28_1, tmp0_other_with_cast.c28_1))
      return false;
    if (!equals(this.d28_1, tmp0_other_with_cast.d28_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.k28_1 = 0;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    Companion_getInstance_10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitValueTyped(value, unit) {
    this.v28_1 = value;
    this.w28_1 = unit;
    this.x28_1 = 0;
  }
  protoOf(CSSUnitValueTyped).w1 = function () {
    return this.v28_1;
  };
  protoOf(CSSUnitValueTyped).y28 = function () {
    return this.w28_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.v28_1 + this.w28_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.v28_1);
    result = imul(result, 31) + hashCode(this.w28_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.v28_1, tmp0_other_with_cast.v28_1))
      return false;
    if (!equals(this.w28_1, tmp0_other_with_cast.w28_1))
      return false;
    return true;
  };
  function rgb(r, g, b) {
    return new RGB(r, g, b);
  }
  function rgba(r, g, b, a) {
    return new RGBA(r, g, b, a);
  }
  function RGB(r, g, b) {
    this.z28_1 = r;
    this.a29_1 = g;
    this.b29_1 = b;
  }
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.z28_1) + ', ' + toString(this.a29_1) + ', ' + toString(this.b29_1) + ')';
  };
  function RGBA(r, g, b, a) {
    this.c29_1 = r;
    this.d29_1 = g;
    this.e29_1 = b;
    this.f29_1 = a;
  }
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.c29_1) + ', ' + toString(this.d29_1) + ', ' + toString(this.e29_1) + ', ' + toString(this.f29_1) + ')';
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n28_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o28_1 = ArrayList_init_$Create$();
    this.p28_1 = 0;
  }
  protoOf(StyleScopeBuilder).t28 = function () {
    return this.n28_1;
  };
  protoOf(StyleScopeBuilder).u28 = function () {
    return this.o28_1;
  };
  protoOf(StyleScopeBuilder).q28 = function (propertyName, value) {
    this.t28().a(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).s28 = function (variableName, value) {
    this.u28().a(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.t28(), other.t28()) ? nativeEquals(this.u28(), other.u28()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.g29_1 = name;
    this.h29_1 = value;
    this.i29_1 = 8;
  }
  protoOf(StylePropertyDeclaration).j3 = function () {
    return this.g29_1;
  };
  protoOf(StylePropertyDeclaration).k3 = function () {
    return this.h29_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.g29_1 + ', value=' + this.h29_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.g29_1);
    result = imul(result, 31) + hashCode(this.h29_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.g29_1 === tmp0_other_with_cast.g29_1))
      return false;
    if (!equals(this.h29_1, tmp0_other_with_cast.h29_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.f() === properties.f()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.l(tmp0);
        if (!(element.g29_1 === otherProp.g29_1 ? toString(element.h29_1) === toString(otherProp.h29_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.j29_1 = 0;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function StyleSheet(rulesHolder, usePrefix) {
    Companion_getInstance_11();
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    this.k29_1 = rulesHolder;
    this.l29_1 = usePrefix;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m29_1 = LinkedHashMap_init_$Create$();
    this.n29_1 = 0;
  }
  protoOf(StyleSheet).o29 = function () {
    return this.k29_1.o29();
  };
  protoOf(StyleSheet).t27 = function (cssRule) {
    this.k29_1.t27(cssRule);
  };
  protoOf(StyleSheet).p29 = function (selector, style) {
    this.k29_1.p29(selector, style);
  };
  protoOf(StyleSheet).q29 = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StyleSheet();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    return tmp0_apply.o29();
  };
  protoOf(StyleSheet).s27 = function (rulesBuild) {
    return this.q29(rulesBuild);
  };
  protoOf(StyleSheet).s29 = function (selector, cssRule) {
    return this.r29(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.v29_1 = mutableStateListOf();
    this.w29_1 = 0;
  }
  protoOf(CSSRulesHolderState).o29 = function () {
    return this.v29_1;
  };
  protoOf(CSSRulesHolderState).t27 = function (cssRule) {
    this.v29_1.q17(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.y29_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.y29_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.y29_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.y29_1 === tmp0_other_with_cast.y29_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.a2a_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.a2a_1 === other.a2a_1 ? this.b2a() == other.b2a() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).b2a = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.b2a();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.a2a_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.q28('background-color', value);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.q28('border-width', width);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.q28('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    _this__u8e3s4.q28('border', tmp0_apply);
  }
  function CSSBorder() {
    this.d2a_1 = null;
    this.e2a_1 = null;
    this.f2a_1 = null;
    this.g2a_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.d2a_1, other.d2a_1) ? equals(this.e2a_1, other.e2a_1) : false) ? equals(this.f2a_1, other.f2a_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.d2a_1, this.e2a_1, this.f2a_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.d2a_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.e2a_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.f2a_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.q28('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.q28('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.q28('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.q28('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.q28('max-width', value);
  }
  function maxHeight(_this__u8e3s4, value) {
    _this__u8e3s4.q28('max-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.l28('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.q28('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.m28('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.q28('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.l28('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.l28('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.l28('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.l28('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.l28('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.l28('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.l28('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.q28('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.q28('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.q28('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.q28('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l28('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.m28('opacity', value);
  }
  function opacity_0(_this__u8e3s4, value) {
    _this__u8e3s4.m28('opacity', value.value / 100);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.l28('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.q28('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.l28('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.f28_1 = 0;
  }
  protoOf(CSSSelector).g28 = function () {
    return toString(this);
  };
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
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
      if (false ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var $composer_2 = $composer_0;
      $composer_2.zy();
      if ($composer_2.jy()) {
        var tmp_1 = $composer_2;
        tmp_1.az(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.bz();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp2_anonymous = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.g20_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous).ny(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var tmp0_anonymous = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous));
      Updater__set_impl_v7kwss(tmp0_anonymous, attrsScope.h20_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss(tmp0_anonymous, attrsScope.e20_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.l20();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.c20_1.d22();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss(tmp0_anonymous, attrsScope.f20_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous).oy();
      $composer_2.ny(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $composer_4 = $composer_2;
      $composer_4.ny(-1128047990);
      content == null || content(scope, $composer_4, 14 & 8 | 112 & $dirty >> 3);
      $composer_4.oy();
      $composer_2.oy();
      $composer_2.cz();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    var tmp1_safe_receiver = $composer_0.uy();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.r1d(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.j2a_1 = node;
    this.k2a_1 = emptyList();
  }
  protoOf(DomElementWrapper).r1x = function () {
    return this.j2a_1;
  };
  protoOf(DomElementWrapper).l2a = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.k2a_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j2a_1.removeEventListener(element.a26(), element);
    }
    this.k2a_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.k2a_1.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j2a_1.addEventListener(element_0.a26(), element_0);
    }
  };
  protoOf(DomElementWrapper).m2a = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.j3();
      var item = element.k3();
      applicator(this.j2a_1, item);
    }
  };
  protoOf(DomElementWrapper).n2a = function (styleApplier) {
    var tmp0_subject = this.j2a_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.j2a_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.j2a_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.t28().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.j3();
        var value = element.k3();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.u28().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.j3();
        var value_0 = element_0.k3();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).o2a = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.j2a_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.j2a_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.u1().c();
    while (tmp0_iterator.d()) {
      var element_0 = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.j2a_1.setAttribute(element_0.t1(), element_0.w1());
    }
  };
  protoOf(DomElementWrapper).p2a = function (classes) {
    this.j2a_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.k()) {
      var tmp = this.j2a_1.classList;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.c1l();
      $scope.t2a(node);
      tmp$ret$0 = new DomElementWrapper(node);
      return tmp$ret$0;
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.p2a(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.n2a(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.o2a(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.l2a(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.m2a(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($tmp0_safe_receiver, $scope) {
    return function ($this$DisposableEffect) {
      return $tmp0_safe_receiver($this$DisposableEffect, $scope.u2a());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).t2a = function (_set____db54di) {
    this.s2a_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).u2a = function () {
    var tmp = this.s2a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).w26 = function (_this__u8e3s4) {
    return this.u2a();
  };
  function ElementScopeBase() {
    this.v2a_1 = 0;
    this.w2a_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  function get_Input() {
    _init_properties_Elements_kt__eyv5nt();
    return Input;
  }
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button_0;
  }
  var Button_0;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    el$factory();
    return $this.y2a_1.w1();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.x2a_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.x2a_1 = tagName;
    var tmp = this;
    tmp.y2a_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).c1l = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.r1d(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
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
      if (false ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        var value_0 = Text$composable$lambda;
        $composer_1.fz(value_0);
        tmp = value_0;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var $composer_2 = $composer_0;
      $composer_2.ny(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.iy();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.zy();
      if ($composer_2.jy()) {
        var tmp_2 = $composer_2;
        tmp_2.az(Text$composable$lambda_0(tmp0));
      } else {
        $composer_2.bz();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var tmp3_anonymous = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp3_anonymous, value, Text$composable$lambda_1);
      $composer_2.cz();
      $composer_2.oy();
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
      tmp0_safe_receiver.r1d(Text$composable$lambda_2(value, $changed));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-155327957, $dirty, -1, 'org.jetbrains.compose.web.dom.Span$composable (Elements.kt:593)');
      }
      TagElement$composable(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.r1d(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input$composable(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1013116589);
    sourceInformation($composer_0, 'C(Input$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013116589, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable (Elements.kt:1054)');
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
      if (false ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-1058148781);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_2.gz(type) | $composer_2.gz(keyForRestoringControlledState)) | $composer_2.gz(attrs));
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value_0 = Input$composable$lambda(type, attrs, keyForRestoringControlledState);
        $composer_2.fz(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_2.oy();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 558133459, true, Input$composable$lambda_0(type, keyForRestoringControlledState));
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
      var tmp_6;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_3.fz(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_3.oy();
      TagElement$composable(tmp_1, tmp_4, tmp0_1, $composer_0, 384);
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
      tmp0_safe_receiver.r1d(Input$composable$lambda_1(type, attrs, $changed));
    }
  }
  function Ul$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-114341698);
    sourceInformation($composer_0, 'C(Ul$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114341698, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul$composable (Elements.kt:603)');
      }
      TagElement$composable(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.r1d(Ul$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-456299496);
    sourceInformation($composer_0, 'C(Li$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-456299496, $dirty, -1, 'org.jetbrains.compose.web.dom.Li$composable (Elements.kt:615)');
      }
      TagElement$composable(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.r1d(Li$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(294823474, $dirty, -1, 'org.jetbrains.compose.web.dom.A$composable (Elements.kt:501)');
      }
      var tmp = get_A();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = href_0._v;
      var tmp1_remember$composable = attrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.ny(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.gz(tmp0_remember$composable) | $composer_1.gz(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        var value = A$composable$lambda(href_0, attrs_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      TagElement$composable(tmp, tmp0, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.r1d(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-767970749, $dirty, -1, 'org.jetbrains.compose.web.dom.Button$composable (Elements.kt:521)');
      }
      TagElement$composable(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.r1d(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function TextArea$composable(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-577256683);
    sourceInformation($composer_0, 'C(TextArea$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        value_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-577256683, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable (Elements.kt:729)');
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
      if (false ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.fz(value_1);
        tmp = value_1;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var firstProvidedValueWasNotNull = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.fz(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.oy();
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = [keyForRestoringControlledState, attrs_0._v, firstProvidedValueWasNotNull, value_0._v];
      var $composer_3 = $composer_0;
      $composer_3.ny(-1603429786);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = tmp2_remember$composable.length;
      while (inductionVariable < last) {
        var key = tmp2_remember$composable[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_3.gz(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_3 = TextArea$composable$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        $composer_3.fz(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_3.oy();
      var tmp_6 = tmp0_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 614898220, true, TextArea$composable$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ny(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_4.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_4.fz(value_4);
        tmp_8 = value_4;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_2 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_4.oy();
      TagElement$composable(tmp_3, tmp_6, tmp0_2, $composer_0, 384);
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
      tmp0_safe_receiver.r1d(TextArea$composable$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Label$composable(forId, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var forId_0 = {_v: forId};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-493483649);
    sourceInformation($composer_0, 'C(Label$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(forId_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        forId_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-493483649, $dirty, -1, 'org.jetbrains.compose.web.dom.Label$composable (Elements.kt:833)');
      }
      var tmp = get_Label();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = forId_0._v;
      var tmp1_remember$composable = attrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.ny(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.gz(tmp0_remember$composable) | $composer_1.gz(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Label$composable.<anonymous>' call
        var value = Label$composable$lambda(forId_0, attrs_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      TagElement$composable(tmp, tmp0, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.r1d(Label$composable$lambda_0(forId_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Img$composable(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-878444342);
    sourceInformation($composer_0, 'C(Img$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-878444342, $dirty, -1, 'org.jetbrains.compose.web.dom.Img$composable (Elements.kt:621)');
      }
      var tmp = get_Img();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = alt_0._v;
      var tmp1_remember$composable = attrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.ny(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_1.gz(src) | $composer_1.gz(tmp0_remember$composable)) | $composer_1.gz(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img$composable.<anonymous>' call
        var value = Img$composable$lambda(src, alt_0, attrs_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      TagElement$composable(tmp, tmp0, null, $composer_0, 384);
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
      tmp0_safe_receiver.r1d(Img$composable$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Style$composable(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1688263201, $dirty, -1, 'org.jetbrains.compose.web.dom.Style$composable (Elements.kt:978)');
      }
      var tmp = get_Style();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = applyAttrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(tmp0_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        var value = Style$composable$lambda(applyAttrs_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var tmp_2 = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().hy_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.oy();
      TagElement$composable(tmp, tmp_2, tmp0_0, $composer_0, 384);
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
      tmp0_safe_receiver.r1d(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < tmp0_repeat);
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($tmp1_ComposeNode$composable) {
    return function () {
      return $tmp1_ComposeNode$composable();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.r1x();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Input$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.ut($keyForRestoringControlledState.w1() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function Input$composable$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type(inputAttrsBuilder, $type);
      inputAttrsBuilder.u26(Input$composable$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).ql = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.w26($this$DisposableEffect));
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0();
      return tmp$ret$0;
    };
  }
  function Input$composable$lambda_0($type, $keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable.<anonymous> (Elements.kt:1073)');
        }
        $composer_0.ny(-1270925487);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect$composable($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.oy();
        var tmp_1 = $keyForRestoringControlledState.w1();
        DisposableEffect$composable(tmp_1, Input$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
  function Input$composable$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input$composable($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Ul$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Li$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function A$composable$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function A$composable$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A$composable($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TextArea$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.ut($keyForRestoringControlledState.w1() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function TextArea$composable$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.z26(TextArea$composable$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.r26(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).ql = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.w26($this$DisposableEffect));
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1();
      return tmp$ret$0;
    };
  }
  function TextArea$composable$lambda_0($keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous> (Elements.kt:754)');
        }
        var tmp_1 = $keyForRestoringControlledState.w1();
        DisposableEffect$composable(tmp_1, TextArea$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function TextArea$composable$lambda_1($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      TextArea$composable($value._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Label$composable$lambda($forId, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($forId._v == null)) {
        forId($this$TagElement, $forId._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Label$composable$lambda_0($forId, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Label$composable($forId._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Img$composable$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Img$composable$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img$composable($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_2($cssStylesheet) {
    this.z2a_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_2).ql = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.z2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.w26($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      var tmp0_safe_receiver = cssStylesheet;
      if (tmp0_safe_receiver == null)
        null;
      else {
        setCSSRules(tmp0_safe_receiver, $cssRules);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2(cssStylesheet);
      return tmp$ret$0;
    };
  }
  function Style$composable$lambda_0($cssRules, $$dirty) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.f();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button_0 = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.j27() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.i27().t28().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.j3();
        var value = element.k3();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.i27().u28().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.j3();
        var value_0 = element_0.k3();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.x27().c();
        while (tmp0_iterator_1.d()) {
          var element_1 = tmp0_iterator_1.e();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.l27_1.c();
          while (tmp0_iterator_2.d()) {
            var element_2 = tmp0_iterator_2.e();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.j27() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.j27() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.a2b_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2b_1 = this.a2b_1.target;
    this.c2b_1 = this.a2b_1.bubbles;
    this.d2b_1 = this.a2b_1.cancelable;
    this.e2b_1 = this.a2b_1.composed;
    this.f2b_1 = this.a2b_1.currentTarget;
    this.g2b_1 = this.a2b_1.eventPhase;
    this.h2b_1 = this.a2b_1.defaultPrevented;
    this.i2b_1 = this.a2b_1.timeStamp;
    this.j2b_1 = this.a2b_1.type;
    this.k2b_1 = this.a2b_1.isTrusted;
    this.l2b_1 = 0;
  }
  protoOf(SyntheticEvent).m2b = function () {
    return this.a2b_1.preventDefault();
  };
  protoOf(SyntheticEvent).n2b = function () {
    return this.a2b_1.stopPropagation();
  };
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.a2c_1 = value;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = nativeEvent.data;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp0_safe_receiver;
    }
    tmp.b2c_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_0 = nativeEvent.dataTransfer;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_2 = tmp0_safe_receiver_0;
    }
    tmp_1.c2c_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_1 = nativeEvent.inputType;
    var tmp_4;
    if (tmp0_safe_receiver_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_4 = tmp0_safe_receiver_1;
    }
    tmp_3.d2c_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_2 = nativeEvent.isComposing;
    var tmp_6;
    if (tmp0_safe_receiver_2 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_6 = tmp0_safe_receiver_2;
    }
    var tmp1_elvis_lhs = tmp_6;
    tmp_5.e2c_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.f2c_1 = 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.s2c_1 = nativeEvent;
    this.t2c_1 = nativeEvent.altKey;
    this.u2c_1 = nativeEvent.code;
    this.v2c_1 = nativeEvent.ctrlKey;
    this.w2c_1 = nativeEvent.isComposing;
    this.x2c_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y2c_1 = toString(nativeEvent.locale);
    this.z2c_1 = nativeEvent.location;
    this.a2d_1 = nativeEvent.metaKey;
    this.b2d_1 = nativeEvent.repeat;
    this.c2d_1 = nativeEvent.shiftKey;
    this.d2d_1 = 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.q2d_1 = nativeEvent;
    this.r2d_1 = nativeEvent.altKey;
    this.s2d_1 = nativeEvent.button;
    this.t2d_1 = nativeEvent.buttons;
    this.u2d_1 = nativeEvent.clientX;
    this.v2d_1 = nativeEvent.clientY;
    this.w2d_1 = nativeEvent.ctrlKey;
    this.x2d_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.y2d_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.z2d_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.a2e_1 = nativeEvent.offsetX;
    this.b2e_1 = nativeEvent.offsetY;
    this.c2e_1 = nativeEvent.pageX;
    this.d2e_1 = nativeEvent.pageY;
    this.e2e_1 = nativeEvent.region;
    this.f2e_1 = nativeEvent.relatedTarget;
    this.g2e_1 = nativeEvent.screenX;
    this.h2e_1 = nativeEvent.screenY;
    this.i2e_1 = nativeEvent.shiftKey;
    this.j2e_1 = nativeEvent.x;
    this.k2e_1 = nativeEvent.y;
    this.l2e_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).v1z = id;
  protoOf(AttrsScopeBuilder).w1z = tabIndex;
  protoOf(AttrsScopeBuilder).x1z = spellCheck;
  protoOf(EventsListenerScopeBuilder).a20 = onClick;
  protoOf(EventsListenerScopeBuilder).b20 = onKeyUp;
  protoOf(StyleScopeBuilder).l28 = property;
  protoOf(StyleScopeBuilder).m28 = property_0;
  protoOf(StyleScopeBuilder).r28 = variable;
  protoOf(CSSRuleBuilderImpl).l28 = property;
  protoOf(CSSRuleBuilderImpl).m28 = property_0;
  protoOf(CSSRuleBuilderImpl).r28 = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.w1();
  }, VOID);
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.y28();
  }, VOID);
  protoOf(StyleSheet).r29 = style_0;
  protoOf(StyleSheet).t29 = style;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).u29 = get_hover;
  protoOf(CSSRulesHolderState).p29 = add;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Checkbox_getInstance;
  _.$_$.b = Password_getInstance;
  _.$_$.c = Text_getInstance;
  _.$_$.d = Companion_getInstance_6;
  _.$_$.e = Companion_getInstance_7;
  _.$_$.f = From_getInstance;
  _.$_$.g = To_getInstance;
  _.$_$.h = Companion_getInstance_3;
  _.$_$.i = Companion_getInstance_8;
  _.$_$.j = Companion_getInstance_9;
  _.$_$.k = Companion_getInstance_4;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = classes;
  _.$_$.n = id;
  _.$_$.o = spellCheck;
  _.$_$.p = tabIndex;
  _.$_$.q = AttrsScope;
  _.$_$.r = onClick;
  _.$_$.s = onKeyUp;
  _.$_$.t = autoComplete;
  _.$_$.u = placeholder;
  _.$_$.v = readOnly;
  _.$_$.w = required;
  _.$_$.x = CSSBorder;
  _.$_$.y = CSSKeyframeRuleDeclaration;
  _.$_$.z = CSSKeyframesRuleDeclaration;
  _.$_$.a1 = MediaFeature;
  _.$_$.b1 = Raw;
  _.$_$.c1 = invoke;
  _.$_$.d1 = style;
  _.$_$.e1 = get_hover;
  _.$_$.f1 = returnHoverSelector;
  _.$_$.g1 = returnUniversalSelector;
  _.$_$.h1 = property;
  _.$_$.i1 = property_0;
  _.$_$.j1 = variable;
  _.$_$.k1 = StyleScopeBuilder;
  _.$_$.l1 = StyleScope;
  _.$_$.m1 = style_0;
  _.$_$.n1 = StyleSheet;
  _.$_$.o1 = alignItems;
  _.$_$.p1 = alignSelf;
  _.$_$.q1 = backgroundColor;
  _.$_$.r1 = borderRadius;
  _.$_$.s1 = borderWidth;
  _.$_$.t1 = border;
  _.$_$.u1 = bottom;
  _.$_$.v1 = boxSizing;
  _.$_$.w1 = color;
  _.$_$.x1 = color_0;
  _.$_$.y1 = get_cssRem;
  _.$_$.z1 = display;
  _.$_$.a2 = flexDirection;
  _.$_$.b2 = flexGrow;
  _.$_$.c2 = fontFamily;
  _.$_$.d2 = fontSize;
  _.$_$.e2 = get_fr;
  _.$_$.f2 = gap;
  _.$_$.g2 = gridArea;
  _.$_$.h2 = gridAutoColumns;
  _.$_$.i2 = gridAutoRows;
  _.$_$.j2 = gridTemplateColumns;
  _.$_$.k2 = gridTemplateRows;
  _.$_$.l2 = height;
  _.$_$.m2 = justifyContent;
  _.$_$.n2 = left;
  _.$_$.o2 = lineHeight;
  _.$_$.p2 = margin;
  _.$_$.q2 = maxHeight;
  _.$_$.r2 = maxWidth;
  _.$_$.s2 = media;
  _.$_$.t2 = minHeight;
  _.$_$.u2 = minWidth;
  _.$_$.v2 = minus;
  _.$_$.w2 = get_ms;
  _.$_$.x2 = opacity;
  _.$_$.y2 = opacity_0;
  _.$_$.z2 = padding;
  _.$_$.a3 = get_percent;
  _.$_$.b3 = position;
  _.$_$.c3 = get_px;
  _.$_$.d3 = rgba;
  _.$_$.e3 = rgb;
  _.$_$.f3 = right;
  _.$_$.g3 = style_1;
  _.$_$.h3 = top;
  _.$_$.i3 = unaryMinus;
  _.$_$.j3 = get_vh;
  _.$_$.k3 = width_0;
  _.$_$.l3 = width;
  _.$_$.m3 = A$composable;
  _.$_$.n3 = Button$composable;
  _.$_$.o3 = Div$composable;
  _.$_$.p3 = ElementBuilder;
  _.$_$.q3 = Img$composable;
  _.$_$.r3 = Input$composable;
  _.$_$.s3 = Label$composable;
  _.$_$.t3 = Li$composable;
  _.$_$.u3 = Span$composable;
  _.$_$.v3 = Style$composable;
  _.$_$.w3 = TagElement$composable;
  _.$_$.x3 = Text$composable;
  _.$_$.y3 = TextArea$composable;
  _.$_$.z3 = Ul$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
