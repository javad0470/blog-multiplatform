(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir'], this['html-internal-html-core-runtime'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Annotation = kotlin_kotlin.$_$.je;
  var classMeta = kotlin_kotlin.$_$.ea;
  var VOID = kotlin_kotlin.$_$.ig;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var Unit_getInstance = kotlin_kotlin.$_$.q4;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var asList = kotlin_kotlin.$_$.y5;
  var interfaceMeta = kotlin_kotlin.$_$.pa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.v5;
  var to = kotlin_kotlin.$_$.hg;
  var Pair = kotlin_kotlin.$_$.we;
  var toString = kotlin_kotlin.$_$.tb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var THROW_ISE = kotlin_kotlin.$_$.af;
  var Enum = kotlin_kotlin.$_$.oe;
  var NamedEventListener = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.d;
  var equals = kotlin_kotlin.$_$.ha;
  var charSequenceLength = kotlin_kotlin.$_$.ca;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var ensureNotNull = kotlin_kotlin.$_$.sf;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var toString_0 = kotlin_kotlin.$_$.gg;
  var toBoolean = kotlin_kotlin.$_$.rd;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var hashCode = kotlin_kotlin.$_$.na;
  var joinToString = kotlin_kotlin.$_$.g7;
  var getStringHashCode = kotlin_kotlin.$_$.ma;
  var objectCreate = kotlin_kotlin.$_$.mb;
  var toList = kotlin_kotlin.$_$.o8;
  var numberToDouble = kotlin_kotlin.$_$.jb;
  var getNumberHashCode = kotlin_kotlin.$_$.ka;
  var defineProp = kotlin_kotlin.$_$.ga;
  var isInterface = kotlin_kotlin.$_$.ya;
  var Collection = kotlin_kotlin.$_$.a5;
  var ReadOnlyProperty = kotlin_kotlin.$_$.wb;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var toMutableList = kotlin_kotlin.$_$.r8;
  var listOf = kotlin_kotlin.$_$.q7;
  var listOf_0 = kotlin_kotlin.$_$.p7;
  var listOfNotNull = kotlin_kotlin.$_$.o7;
  var joinToString_0 = kotlin_kotlin.$_$.h7;
  var contains = kotlin_kotlin.$_$.mc;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var isObject = kotlin_kotlin.$_$.bb;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var emptyList = kotlin_kotlin.$_$.s6;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var DOMScope = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fg;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var lazy = kotlin_kotlin.$_$.xf;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var mapOf = kotlin_kotlin.$_$.t7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalComposeWebApi, 'ExperimentalComposeWebApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function onContextMenu(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('contextmenu', listener));
  }
  function onClick(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('click', listener));
  }
  function onDoubleClick(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('dblclick', listener));
  }
  function onMouseDown(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mousedown', listener));
  }
  function onMouseUp(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseup', listener));
  }
  function onMouseEnter(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseenter', listener));
  }
  function onMouseLeave(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseleave', listener));
  }
  function onMouseMove(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mousemove', listener));
  }
  function onMouseOut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseout', listener));
  }
  function onMouseOver(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseover', listener));
  }
  function onWheel(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseWheelEventListener('wheel', listener));
  }
  function onDrag(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('drag', listener));
  }
  function onDrop(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('drop', listener));
  }
  function onDragStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragstart', listener));
  }
  function onDragEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragend', listener));
  }
  function onDragOver(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragover', listener));
  }
  function onDragEnter(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragenter', listener));
  }
  function onDragLeave(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragleave', listener));
  }
  function onCopy(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('copy', listener));
  }
  function onCut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('cut', listener));
  }
  function onPaste(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('paste', listener));
  }
  function onKeyDown(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new KeyboardEventListener('keydown', listener));
  }
  function onKeyUp(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new KeyboardEventListener('keyup', listener));
  }
  function onFocus(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focus', listener));
  }
  function onBlur(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('blur', listener));
  }
  function onFocusIn(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focusin', listener));
  }
  function onFocusOut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focusout', listener));
  }
  function onTouchCancel(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchcancel', listener));
  }
  function onTouchMove(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchmove', listener));
  }
  function onTouchEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchend', listener));
  }
  function onTouchStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchstart', listener));
  }
  function onAnimationEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationend', listener));
  }
  function onAnimationIteration(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationiteration', listener));
  }
  function onAnimationStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationstart', listener));
  }
  function onScroll(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener('scroll', listener));
  }
  function addEventListener(eventName, listener) {
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener(eventName, listener));
  }
  function addEventListener_0(eventName, listener) {
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener(eventName, listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.classes_m2xsyo_k$(asList(classes));
  }
  function id(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('id', value);
  }
  function hidden() {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('hidden', 'true');
  }
  function title(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('title', value);
  }
  function dir(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('dir', value.get_dirStr_cdza7h_k$());
  }
  function draggable(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('draggable', value.get_str_18ivy0_k$());
  }
  function contentEditable(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('contenteditable', value.toString());
  }
  function lang(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('lang', value);
  }
  function tabIndex(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('tabindex', value.toString());
  }
  function spellCheck(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('spellcheck', value.toString());
  }
  function inputMode(value) {
    return this.attr_z3nk29_k$('inputmode', value);
  }
  function inputMode_0(value) {
    return this.attr_z3nk29_k$('inputmode', value.get_str_18ivy0_k$());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope]);
  setMetadataFor(HtmlAttrMarker, 'HtmlAttrMarker', classMeta, VOID, [Annotation]);
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
  setMetadataFor(DirType, 'DirType', classMeta);
  setMetadataFor(Ltr, 'Ltr', objectMeta, DirType);
  setMetadataFor(Rtl, 'Rtl', objectMeta, DirType);
  setMetadataFor(Auto, 'Auto', objectMeta, DirType);
  setMetadataFor(Draggable, 'Draggable', classMeta, Enum);
  setMetadataFor(InputMode, 'InputMode', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(AutoComplete, 'AutoComplete', interfaceMeta);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta, VOID, [NamedEventListener]);
  setMetadataFor(InputEventListener, 'InputEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(ChangeEventListener, 'ChangeEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(SelectEventListener, 'SelectEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(MouseWheelEventListener, 'MouseWheelEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(DragEventListener, 'DragEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(ClipboardEventListener, 'ClipboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(FocusEventListener, 'FocusEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(TouchEventListener, 'TouchEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputAttrsScope, 'InputAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(TextAreaAttrsScope, 'TextAreaAttrsScope', classMeta, VOID, [AttrsScope]);
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
    return this.property_lwhspk_k$(propertyName, tmp$ret$2);
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
    return this.property_lwhspk_k$(propertyName, tmp$ret$2);
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
    return this.variable_3743rz_k$(variableName, tmp$ret$2);
  }
  function variable_0(variableName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.variable_3743rz_k$(variableName, tmp$ret$2);
  }
  function invoke(_this__u8e3s4, value) {
    this.variable_d7dn6f_k$(_this__u8e3s4.name_1, toString(value));
  }
  function invoke_0(_this__u8e3s4, value) {
    this.variable_d7dn6f_k$(_this__u8e3s4.name_1, value);
  }
  function invoke_1(_this__u8e3s4, value) {
    this.variable_pbiwyn_k$(_this__u8e3s4.name_1, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(CSSStyleRuleBuilder, 'CSSStyleRuleBuilder', interfaceMeta, VOID, [StyleScope]);
  function add(selector, style) {
    this.add_nvgmad_k$(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function selector(selector) {
    return new RawSelector(selector);
  }
  function combine(selectors) {
    return new Combine_1(toMutableList(selectors));
  }
  function plus(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_1) {
      _this__u8e3s4.selectors_1.add_1j60pz_k$(selector);
      tmp = _this__u8e3s4;
    } else {
      if (selector instanceof Combine_1) {
        selector.selectors_1.add_ydlf05_k$(0, _this__u8e3s4);
        tmp = selector;
      } else {
        tmp = this.combine_75bnet_k$([_this__u8e3s4, selector]);
      }
    }
    return tmp;
  }
  function plus_0(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_1) {
      _this__u8e3s4.selectors_1.add_1j60pz_k$(this.selector_vsua3m_k$(selector));
      tmp = _this__u8e3s4;
    } else {
      tmp = this.combine_75bnet_k$([_this__u8e3s4, this.selector_vsua3m_k$(selector)]);
    }
    return tmp;
  }
  function returnUniversalSelector() {
    return get_Universal();
  }
  function get_universal() {
    return get_Universal();
  }
  function type(type) {
    return new RawSelector(type);
  }
  function className(className) {
    return new RawSelector('.' + className);
  }
  function id_0(id) {
    return new RawSelector('#' + id);
  }
  function attr(name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  }
  function attr$default(name, value, operator, caseSensitive, $super) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attr_8c4xcm_k$(name, value, operator, caseSensitive) : attr(name, value, operator, caseSensitive);
  }
  function attrEquals(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Equals_getInstance(), caseSensitive);
  }
  function attrEquals$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrEquals_ekinah_k$(name, value, caseSensitive) : attrEquals(name, value, caseSensitive);
  }
  function attrListContains(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_ListContains_getInstance(), caseSensitive);
  }
  function attrListContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrListContains_xb78l5_k$(name, value, caseSensitive) : attrListContains(name, value, caseSensitive);
  }
  function attrHyphened(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Hyphened_getInstance(), caseSensitive);
  }
  function attrHyphened$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrHyphened_1nnzy3_k$(name, value, caseSensitive) : attrHyphened(name, value, caseSensitive);
  }
  function attrPrefixed(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Prefixed_getInstance(), caseSensitive);
  }
  function attrPrefixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrPrefixed_ju2x2d_k$(name, value, caseSensitive) : attrPrefixed(name, value, caseSensitive);
  }
  function attrSuffixed(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Suffixed_getInstance(), caseSensitive);
  }
  function attrSuffixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrSuffixed_gk0h2_k$(name, value, caseSensitive) : attrSuffixed(name, value, caseSensitive);
  }
  function attrContains(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Contains_getInstance(), caseSensitive);
  }
  function attrContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrContains_2muovr_k$(name, value, caseSensitive) : attrContains(name, value, caseSensitive);
  }
  function group(selectors) {
    return new Group(toList(selectors));
  }
  function descendant(parent, selected) {
    return this.desc_ej3sir_k$(parent, selected);
  }
  function desc(parent, selected) {
    return new Descendant(parent, selected);
  }
  function desc_0(parent, selected) {
    return this.desc_ej3sir_k$(parent, this.selector_vsua3m_k$(selected));
  }
  function desc_1(parent, selected) {
    return this.desc_ej3sir_k$(this.selector_vsua3m_k$(parent), selected);
  }
  function desc_2(parent, selected) {
    return this.desc_ej3sir_k$(this.selector_vsua3m_k$(parent), this.selector_vsua3m_k$(selected));
  }
  function child(parent, selected) {
    return new Child(parent, selected);
  }
  function sibling(sibling, selected) {
    return new Sibling(sibling, selected);
  }
  function adjacent(sibling, selected) {
    return new Adjacent(sibling, selected);
  }
  function returnHoverSelector() {
    return this.get_hover_islez7_k$();
  }
  function hover(selector) {
    return this.plus_nlz2mk_k$(selector, this.get_hover_islez7_k$());
  }
  function get_anyLink() {
    return new PseudoClassInternal('any-link');
  }
  function get_link() {
    return new PseudoClassInternal('link');
  }
  function get_visited() {
    return new PseudoClassInternal('visited');
  }
  function get_localLink() {
    return new PseudoClassInternal('local-link');
  }
  function get_target() {
    return new PseudoClassInternal('target');
  }
  function get_targetWithin() {
    return new PseudoClassInternal('target-within');
  }
  function get_scope() {
    return new PseudoClassInternal('scope');
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  function get_active() {
    return new PseudoClassInternal('active');
  }
  function get_focus() {
    return new PseudoClassInternal('focus');
  }
  function get_focusVisible() {
    return new PseudoClassInternal('focus-visible');
  }
  function get_playing() {
    return new PseudoClassInternal('playing');
  }
  function get_paused() {
    return new PseudoClassInternal('paused');
  }
  function get_autofill() {
    return new PseudoClassInternal('autofill');
  }
  function get_enabled() {
    return new PseudoClassInternal('enabled');
  }
  function get_disabled() {
    return new PseudoClassInternal('disabled');
  }
  function get_readOnly() {
    return new PseudoClassInternal('read-only');
  }
  function get_readWrite() {
    return new PseudoClassInternal('read-write');
  }
  function get_placeholderShown() {
    return new PseudoClassInternal('placeholder-shown');
  }
  function get_default() {
    return new PseudoClassInternal('default');
  }
  function get_checked() {
    return new PseudoClassInternal('checked');
  }
  function get_indeterminate() {
    return new PseudoClassInternal('indeterminate');
  }
  function get_blank() {
    return new PseudoClassInternal('blank');
  }
  function get_valid() {
    return new PseudoClassInternal('valid');
  }
  function get_invalid() {
    return new PseudoClassInternal('invalid');
  }
  function get_inRange() {
    return new PseudoClassInternal('in-range');
  }
  function get_outOfRange() {
    return new PseudoClassInternal('out-of-range');
  }
  function get_required() {
    return new PseudoClassInternal('required');
  }
  function get_optional() {
    return new PseudoClassInternal('optional');
  }
  function get_userInvalid() {
    return new PseudoClassInternal('user-invalid');
  }
  function get_root() {
    return new PseudoClassInternal('root');
  }
  function get_empty() {
    return new PseudoClassInternal('empty');
  }
  function get_first() {
    return new PseudoClassInternal('first');
  }
  function get_firstChild() {
    return new PseudoClassInternal('first-child');
  }
  function get_lastChild() {
    return new PseudoClassInternal('last-child');
  }
  function get_onlyChild() {
    return new PseudoClassInternal('only-child');
  }
  function get_firstOfType() {
    return new PseudoClassInternal('first-of-type');
  }
  function get_lastOfType() {
    return new PseudoClassInternal('last-of-type');
  }
  function get_onlyOfType() {
    return new PseudoClassInternal('only-of-type');
  }
  function get_host() {
    return new PseudoClassInternal('host');
  }
  function get_defined() {
    return new PseudoClassInternal('defined');
  }
  function get_left() {
    return new PseudoClassInternal('left');
  }
  function get_right() {
    return new PseudoClassInternal('right');
  }
  function lang_0(langCode) {
    return new Lang(langCode);
  }
  function nthChild(nth) {
    return new NthChild(nth);
  }
  function nthLastChild(nth) {
    return new NthLastChild(nth);
  }
  function nthOfType(nth) {
    return new NthOfType(nth);
  }
  function nthLastOfType(nth) {
    return new NthLastOfType(nth);
  }
  function host(selector) {
    return new Host(selector);
  }
  function not(selector) {
    return new Not_0(selector);
  }
  function get_after() {
    return new PseudoElementInternal('after');
  }
  function get_before() {
    return new PseudoElementInternal('before');
  }
  function get_cue() {
    return new PseudoElementInternal('cue');
  }
  function get_cueRegion() {
    return new PseudoElementInternal('cue-region');
  }
  function get_firstLetter() {
    return new PseudoElementInternal('first-letter');
  }
  function get_firstLine() {
    return new PseudoElementInternal('first-line');
  }
  function get_fileSelectorButton() {
    return new PseudoElementInternal('file-selector-button');
  }
  function get_selection() {
    return new PseudoElementInternal('selection');
  }
  function slotted(selector) {
    return new Slotted(selector);
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke_2(_this__u8e3s4, cssRule) {
    this.style_n9akw7_k$(_this__u8e3s4, cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.style_n9akw7_k$(_this__u8e3s4, cssRule);
  }
  function invoke_3(_this__u8e3s4, cssRule) {
    this.style_n9akw7_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style_0(_this__u8e3s4, cssRule) {
    this.style_n9akw7_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  setMetadataFor(CSSBuilder, 'CSSBuilder', interfaceMeta, VOID, [CSSStyleRuleBuilder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder]);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [CSSStyleRuleBuilder, StyleScopeBuilder]);
  setMetadataFor(CSSBuilderImpl, 'CSSBuilderImpl', classMeta, CSSRuleBuilderImpl, [CSSRuleBuilderImpl, CSSBuilder, CSSRulesHolder]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(StylePropertyEnum, 'StylePropertyEnum', interfaceMeta);
  setMetadataFor(DisplayStyle, 'DisplayStyle', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(LineStyle, 'LineStyle', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Position, 'Position', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(AnimationTimingFunction, 'AnimationTimingFunction', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(StepPosition, 'StepPosition', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(AlignItems, 'AlignItems', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(AlignSelf, 'AlignSelf', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FlexDirection, 'FlexDirection', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(JustifyContent, 'JustifyContent', interfaceMeta, VOID, [StylePropertyEnum]);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(Percentage, 'Percentage', classMeta, CSSKeyframe);
  setMetadataFor(Combine, 'Combine', classMeta, CSSKeyframe);
  setMetadataFor(CSSRuleDeclaration, 'CSSRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  setMetadataFor(CSSNamedKeyframes, 'CSSNamedKeyframes', interfaceMeta);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSNamedKeyframes]);
  setMetadataFor(CSSKeyframesBuilder, 'CSSKeyframesBuilder', classMeta);
  setMetadataFor(Enum_0, 'Enum', classMeta, Enum);
  setMetadataFor(CSSMediaQuery, 'CSSMediaQuery', interfaceMeta);
  setMetadataFor(Invertible, 'Invertible', interfaceMeta, VOID, [CSSMediaQuery]);
  setMetadataFor(Combinable, 'Combinable', interfaceMeta, VOID, [CSSMediaQuery]);
  setMetadataFor(Atomic, 'Atomic', interfaceMeta, VOID, [Invertible, Combinable]);
  setMetadataFor(Raw, 'Raw', classMeta, VOID, [Atomic]);
  setMetadataFor(MediaType, 'MediaType', classMeta, VOID, [Atomic]);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta, VOID, [CSSMediaQuery, Atomic]);
  setMetadataFor(NotFeature, 'NotFeature', classMeta, VOID, [CSSMediaQuery]);
  setMetadataFor(And, 'And', classMeta, VOID, [CSSMediaQuery, Invertible, Combinable]);
  setMetadataFor(Not, 'Not', classMeta, VOID, [CSSMediaQuery]);
  setMetadataFor(Combine_0, 'Combine', classMeta, VOID, [CSSMediaQuery]);
  setMetadataFor(Only, 'Only', classMeta, VOID, [CSSMediaQuery, Invertible]);
  setMetadataFor(Or, 'Or', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta, VOID, [CSSRuleDeclaration]);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSCalcValue, 'CSSCalcValue', classMeta);
  setMetadataFor(CSSMinus, 'CSSMinus', classMeta);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  setMetadataFor(CSSUnit, 'CSSUnit', interfaceMeta);
  setMetadataFor(CSSUnitLengthOrPercentage, 'CSSUnitLengthOrPercentage', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(CSSUnitPercentage, 'CSSUnitPercentage', interfaceMeta, VOID, [CSSUnitLengthOrPercentage]);
  setMetadataFor(percent, 'percent', interfaceMeta, VOID, [CSSUnitPercentage]);
  setMetadataFor(CSSUnitLength, 'CSSUnitLength', interfaceMeta, VOID, [CSSUnitLengthOrPercentage]);
  setMetadataFor(CSSUnitRel, 'CSSUnitRel', interfaceMeta, VOID, [CSSUnitLength]);
  setMetadataFor(em, 'em', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ex, 'ex', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ch, 'ch', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(ic, 'ic', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(rem, 'rem', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(lh, 'lh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(rlh, 'rlh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vw, 'vw', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vh, 'vh', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vi, 'vi', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vb, 'vb', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vmin, 'vmin', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(vmax, 'vmax', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(cm, 'cm', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(mm, 'mm', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(Q, 'Q', interfaceMeta, VOID, [CSSUnitRel]);
  setMetadataFor(CSSUnitAbs, 'CSSUnitAbs', interfaceMeta, VOID, [CSSUnitLength]);
  setMetadataFor(pt, 'pt', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(pc, 'pc', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(px, 'px', interfaceMeta, VOID, [CSSUnitAbs]);
  setMetadataFor(CSSUnitAngle, 'CSSUnitAngle', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(deg, 'deg', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(grad, 'grad', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(rad, 'rad', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(turn, 'turn', interfaceMeta, VOID, [CSSUnitAngle]);
  setMetadataFor(CSSUnitTime, 'CSSUnitTime', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(s, 's', interfaceMeta, VOID, [CSSUnitTime]);
  setMetadataFor(ms, 'ms', interfaceMeta, VOID, [CSSUnitTime]);
  setMetadataFor(CSSUnitFrequency, 'CSSUnitFrequency', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(Hz, 'Hz', interfaceMeta, VOID, [CSSUnitFrequency]);
  setMetadataFor(kHz, 'kHz', interfaceMeta, VOID, [CSSUnitFrequency]);
  setMetadataFor(CSSUnitResolution, 'CSSUnitResolution', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(dpi, 'dpi', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(dpcm, 'dpcm', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(dppx, 'dppx', interfaceMeta, VOID, [CSSUnitResolution]);
  setMetadataFor(CSSUnitFlex, 'CSSUnitFlex', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(fr, 'fr', interfaceMeta, VOID, [CSSUnitFlex]);
  setMetadataFor(number, 'number', interfaceMeta, VOID, [CSSUnit]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGB, 'RGB', classMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(CSSVariable, 'CSSVariable', interfaceMeta);
  setMetadataFor(CSSStyleVariable, 'CSSStyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(sam$kotlin_properties_ReadOnlyProperty$0, 'sam$kotlin_properties_ReadOnlyProperty$0', classMeta, VOID, [ReadOnlyProperty]);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(StyleSheet$CSSHolder$provideDelegate$selector$1, VOID, classMeta, CSSSelector);
  setMetadataFor(sam$kotlin_properties_ReadOnlyProperty$0_0, 'sam$kotlin_properties_ReadOnlyProperty$0', classMeta, VOID, [ReadOnlyProperty]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(CSSSelfSelector, 'CSSSelfSelector', classMeta, CSSSelector);
  setMetadataFor(CSSHolder, 'CSSHolder', classMeta);
  setMetadataFor(CSSKeyframesHolder, 'CSSKeyframesHolder', classMeta);
  function style_1(selector, cssRule) {
    this.add_6geiun_k$(selector, buildCSSStyleRule(cssRule));
  }
  function style_2(selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder]);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(Combine_1, 'Combine', classMeta, CSSSelector);
  setMetadataFor(Attribute, 'Attribute', classMeta, CSSSelector);
  setMetadataFor(Group, 'Group', classMeta, CSSSelector);
  setMetadataFor(Descendant, 'Descendant', classMeta, CSSSelector);
  setMetadataFor(Child, 'Child', classMeta, CSSSelector);
  setMetadataFor(Sibling, 'Sibling', classMeta, CSSSelector);
  setMetadataFor(Adjacent, 'Adjacent', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(Lang, 'Lang', classMeta, PseudoClassInternal);
  setMetadataFor(NthChild, 'NthChild', classMeta, PseudoClassInternal);
  setMetadataFor(NthLastChild, 'NthLastChild', classMeta, PseudoClassInternal);
  setMetadataFor(NthOfType, 'NthOfType', classMeta, PseudoClassInternal);
  setMetadataFor(NthLastOfType, 'NthLastOfType', classMeta, PseudoClassInternal);
  setMetadataFor(Host, 'Host', classMeta, PseudoClassInternal);
  setMetadataFor(Not_0, 'Not', classMeta, PseudoClassInternal);
  setMetadataFor(PseudoElementInternal, 'PseudoElementInternal', classMeta, CSSSelector);
  setMetadataFor(Slotted, 'Slotted', classMeta, PseudoElementInternal);
  setMetadataFor(StyleSheetBuilderImpl, 'StyleSheetBuilderImpl', classMeta, VOID, [StyleSheetBuilder]);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta);
  setMetadataFor(Operator, 'Operator', classMeta, Enum);
  setMetadataFor(Attribute_0, 'Attribute', objectMeta);
  setMetadataFor(PseudoClass, 'PseudoClass', objectMeta);
  setMetadataFor(PseudoElement, 'PseudoElement', objectMeta);
  setMetadataFor(Nth, 'Nth', interfaceMeta);
  setMetadataFor(FunctionalImpl, 'FunctionalImpl', classMeta, VOID, [Nth]);
  setMetadataFor(OddImpl, 'OddImpl', objectMeta, VOID, [Nth]);
  setMetadataFor(EvenImpl, 'EvenImpl', objectMeta, VOID, [Nth]);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(selectorScope$1, VOID, classMeta, VOID, [SelectorsScope]);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  function DisposableRefEffect(effect) {
    illegalDecoyCallException('DisposableRefEffect');
  }
  function DisposableRefEffect$composable(effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-912649705);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-912649705, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScope.DisposableRefEffect$composable (ElementScope.kt:55)');
    }
    this.DisposableRefEffect$composable_921rlw_k$(null, effect, $composer_0, 6 | 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  setMetadataFor(ElementScope, 'ElementScope', interfaceMeta, VOID, [DOMScope]);
  setMetadataFor(DomEffectScope, 'DomEffectScope', interfaceMeta);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta, VOID, [ElementScope]);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase);
  setMetadataFor(DomDisposableEffectHolder, 'DomDisposableEffectHolder', classMeta, VOID, [RememberObserver, DomEffectScope]);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RadioGroupScope, 'RadioGroupScope', classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticChangeEvent, 'SyntheticChangeEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticClipboardEvent, 'SyntheticClipboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticFocusEvent, 'SyntheticFocusEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticInputEvent, 'SyntheticInputEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticDragEvent, 'SyntheticDragEvent', classMeta, SyntheticMouseEvent);
  setMetadataFor(SyntheticWheelEvent, 'SyntheticWheelEvent', classMeta, SyntheticMouseEvent);
  setMetadataFor(SyntheticSelectEvent, 'SyntheticSelectEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticTouchEvent, 'SyntheticTouchEvent', classMeta, SyntheticEvent);
  //endregion
  function ExperimentalComposeWebApi() {
  }
  protoOf(ExperimentalComposeWebApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeWebApi))
      return false;
    other instanceof ExperimentalComposeWebApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeWebApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeWebApi).toString = function () {
    return '@org.jetbrains.compose.web.ExperimentalComposeWebApi()';
  };
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  function get_setTextAreaDefaultValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setTextAreaDefaultValue;
  }
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function type_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('type', value.get_typeStr_cucz82_k$());
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('href', value);
  }
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('placeholder', value);
  }
  function readOnly(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('readonly', '');
  }
  function required(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('required', '');
  }
  function autoComplete(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.attr_z3nk29_k$('autocomplete', value);
  }
  function forId(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('for', value);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_z3nk29_k$('src', value);
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
  function get_setClassList() {
    _init_properties_AttrsScope_kt__ek7k4y();
    return setClassList;
  }
  var setClassList;
  function Companion() {
    Companion_instance = this;
    this.CLASS_1 = 'class';
    this.ID_1 = 'id';
    this.HIDDEN_1 = 'hidden';
    this.TITLE_1 = 'title';
    this.DIR_1 = 'dir';
    this.DRAGGABLE_1 = 'draggable';
    this.CONTENT_EDITABLE_1 = 'contenteditable';
    this.LANG_1 = 'lang';
    this.TAB_INDEX_1 = 'tabindex';
    this.SPELLCHECK_1 = 'spellcheck';
  }
  protoOf(Companion).get_CLASS_i7lkq7_k$ = function () {
    return this.CLASS_1;
  };
  protoOf(Companion).get_ID_kntopo_k$ = function () {
    return this.ID_1;
  };
  protoOf(Companion).get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  protoOf(Companion).get_TITLE_igwjrj_k$ = function () {
    return this.TITLE_1;
  };
  protoOf(Companion).get_DIR_18jvuk_k$ = function () {
    return this.DIR_1;
  };
  protoOf(Companion).get_DRAGGABLE_lgsxfg_k$ = function () {
    return this.DRAGGABLE_1;
  };
  protoOf(Companion).get_CONTENT_EDITABLE_pkf1hv_k$ = function () {
    return this.CONTENT_EDITABLE_1;
  };
  protoOf(Companion).get_LANG_wo4kl3_k$ = function () {
    return this.LANG_1;
  };
  protoOf(Companion).get_TAB_INDEX_us6klb_k$ = function () {
    return this.TAB_INDEX_1;
  };
  protoOf(Companion).get_SPELLCHECK_xv0ui1_k$ = function () {
    return this.SPELLCHECK_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
  }
  function get_$stableprop() {
    return 8;
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.eventsListenerScopeBuilder_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributesMap_1 = LinkedHashMap_init_$Create$();
    this.styleScope_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.propertyUpdates_1 = ArrayList_init_$Create$();
    this.refEffect_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.classes_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(AttrsScopeBuilder).get_eventsListenerScopeBuilder_j7bhoj_k$ = function () {
    return this.eventsListenerScopeBuilder_1;
  };
  protoOf(AttrsScopeBuilder).addEventListener_rnhydf_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_rnhydf_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).addEventListener_y3hr2r_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_y3hr2r_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationEnd_35pssj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationEnd_35pssj_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationIteration_qwyfwf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationIteration_qwyfwf_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationStart_jojejg_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationStart_jojejg_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onBlur_jks72x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onBlur_jks72x_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onClick_3adsri_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onClick_3adsri_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onContextMenu_rqaeiw_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onContextMenu_rqaeiw_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCopy_takkx5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCopy_takkx5_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCut_ol4js_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCut_ol4js_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDoubleClick_o3ltf3_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDoubleClick_o3ltf3_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrag_vg0lyh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrag_vg0lyh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnd_y7ewx8_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnd_y7ewx8_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnter_uyubsn_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnter_uyubsn_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragLeave_nnon60_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragLeave_nnon60_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragOver_ti99sb_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragOver_ti99sb_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragStart_w5ys4t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragStart_w5ys4t_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrop_3mkg4y_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrop_3mkg4y_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocus_f0s6pg_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocus_f0s6pg_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusIn_o8fbjl_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusIn_o8fbjl_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusOut_pmzsfc_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusOut_pmzsfc_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyDown_xycn2o_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyDown_xycn2o_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyUp_u3a7vt_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyUp_u3a7vt_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseDown_em11hd_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseDown_em11hd_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseEnter_g3bz11_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseEnter_g3bz11_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseLeave_4qyrg6_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseLeave_4qyrg6_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseMove_609snk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseMove_609snk_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOut_alj067_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOut_alj067_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOver_66zdzh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOver_66zdzh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseUp_qybdyy_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseUp_qybdyy_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onPaste_rubsh5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onPaste_rubsh5_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onScroll_3uphub_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onScroll_3uphub_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchCancel_ufddza_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchCancel_ufddza_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchEnd_u7mt1j_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchEnd_u7mt1j_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchMove_f4qr3x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchMove_f4qr3x_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchStart_sporrm_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchStart_sporrm_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onWheel_cg2j2t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onWheel_cg2j2t_k$(listener);
  };
  protoOf(AttrsScopeBuilder).registerEventListener_wc34s5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(AttrsScopeBuilder).get_attributesMap_p5yisk_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).get_styleScope_i1qedw_k$ = function () {
    return this.styleScope_1;
  };
  protoOf(AttrsScopeBuilder).get_propertyUpdates_qy3v4c_k$ = function () {
    return this.propertyUpdates_1;
  };
  protoOf(AttrsScopeBuilder).set_refEffect_4u0az6_k$ = function (_set____db54di) {
    this.refEffect_1 = _set____db54di;
  };
  protoOf(AttrsScopeBuilder).get_refEffect_m4bgrp_k$ = function () {
    return this.refEffect_1;
  };
  protoOf(AttrsScopeBuilder).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(AttrsScopeBuilder).classes_m2xsyo_k$ = function (classes) {
    this.classes_1.addAll_oxxjjk_k$(classes);
  };
  protoOf(AttrsScopeBuilder).classes_mog12g_k$ = function (classes) {
    addAll(this.classes_1, classes);
  };
  protoOf(AttrsScopeBuilder).style_sa2yps_k$ = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.styleScope_1);
  };
  protoOf(AttrsScopeBuilder).ref_6wvjf3_k$ = function (effect) {
    this.refEffect_1 = effect;
  };
  protoOf(AttrsScopeBuilder).attr_z3nk29_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributesMap_1.put_3mhbri_k$(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).prop_mo7bqj_k$ = function (update, value) {
    var tmp = to(update, value);
    this.propertyUpdates_1.add_1j60pz_k$(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).collect_fp9wdm_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).copyFrom_5fvenn_k$ = function (attrsScope) {
    this.refEffect_1 = attrsScope.refEffect_1;
    this.styleScope_1.copyFrom_j2fwtz_k$(attrsScope.styleScope_1);
    this.attributesMap_1.putAll_mee1c3_k$(attrsScope.attributesMap_1);
    this.propertyUpdates_1.addAll_oxxjjk_k$(attrsScope.propertyUpdates_1);
    this.eventsListenerScopeBuilder_1.copyListenersFrom_jbuovr_k$(attrsScope.eventsListenerScopeBuilder_1);
  };
  function setClassList$lambda(e, classList) {
    _init_properties_AttrsScope_kt__ek7k4y();
    (function () {
      var $externalVarargReceiverTmp = e.classList;
      return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(classList.slice()));
    }.call(this));
    return Unit_getInstance();
  }
  var properties_initialized_AttrsScope_kt_jxswks;
  function _init_properties_AttrsScope_kt__ek7k4y() {
    if (!properties_initialized_AttrsScope_kt_jxswks) {
      properties_initialized_AttrsScope_kt_jxswks = true;
      setClassList = setClassList$lambda;
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.COPY_1 = 'copy';
    this.CUT_1 = 'cut';
    this.PASTE_1 = 'paste';
    this.CONTEXTMENU_1 = 'contextmenu';
    this.CLICK_1 = 'click';
    this.DBLCLICK_1 = 'dblclick';
    this.FOCUS_1 = 'focus';
    this.BLUR_1 = 'blur';
    this.FOCUSIN_1 = 'focusin';
    this.FOCUSOUT_1 = 'focusout';
    this.KEYDOWN_1 = 'keydown';
    this.KEYUP_1 = 'keyup';
    this.MOUSEDOWN_1 = 'mousedown';
    this.MOUSEUP_1 = 'mouseup';
    this.MOUSEENTER_1 = 'mouseenter';
    this.MOUSELEAVE_1 = 'mouseleave';
    this.MOUSEMOVE_1 = 'mousemove';
    this.MOUSEOUT_1 = 'mouseout';
    this.MOUSEOVER_1 = 'mouseover';
    this.WHEEL_1 = 'wheel';
    this.SCROLL_1 = 'scroll';
    this.SELECT_1 = 'select';
    this.TOUCHCANCEL_1 = 'touchcancel';
    this.TOUCHEND_1 = 'touchend';
    this.TOUCHMOVE_1 = 'touchmove';
    this.TOUCHSTART_1 = 'touchstart';
    this.ANIMATIONCANCEL_1 = 'animationcancel';
    this.ANIMATIONEND_1 = 'animationend';
    this.ANIMATIONITERATION_1 = 'animationiteration';
    this.ANIMATIONSTART_1 = 'animationstart';
    this.BEFOREINPUT_1 = 'beforeinput';
    this.INPUT_1 = 'input';
    this.CHANGE_1 = 'change';
    this.INVALID_1 = 'invalid';
    this.DRAG_1 = 'drag';
    this.DROP_1 = 'drop';
    this.DRAGSTART_1 = 'dragstart';
    this.DRAGEND_1 = 'dragend';
    this.DRAGOVER_1 = 'dragover';
    this.DRAGENTER_1 = 'dragenter';
    this.DRAGLEAVE_1 = 'dragleave';
    this.SUBMIT_1 = 'submit';
    this.RESET_1 = 'reset';
  }
  protoOf(Companion_0).get_COPY_wnz45a_k$ = function () {
    return this.COPY_1;
  };
  protoOf(Companion_0).get_CUT_18jwav_k$ = function () {
    return this.CUT_1;
  };
  protoOf(Companion_0).get_PASTE_iek8y2_k$ = function () {
    return this.PASTE_1;
  };
  protoOf(Companion_0).get_CONTEXTMENU_n7w1rv_k$ = function () {
    return this.CONTEXTMENU_1;
  };
  protoOf(Companion_0).get_CLICK_i7lq9r_k$ = function () {
    return this.CLICK_1;
  };
  protoOf(Companion_0).get_DBLCLICK_lnqjqb_k$ = function () {
    return this.DBLCLICK_1;
  };
  protoOf(Companion_0).get_FOCUS_i9awzz_k$ = function () {
    return this.FOCUS_1;
  };
  protoOf(Companion_0).get_BLUR_wnyf1s_k$ = function () {
    return this.BLUR_1;
  };
  protoOf(Companion_0).get_FOCUSIN_1ple5w_k$ = function () {
    return this.FOCUSIN_1;
  };
  protoOf(Companion_0).get_FOCUSOUT_hzoq81_k$ = function () {
    return this.FOCUSOUT_1;
  };
  protoOf(Companion_0).get_KEYDOWN_c6wzs_k$ = function () {
    return this.KEYDOWN_1;
  };
  protoOf(Companion_0).get_KEYUP_ibvyep_k$ = function () {
    return this.KEYUP_1;
  };
  protoOf(Companion_0).get_MOUSEDOWN_6q4qv6_k$ = function () {
    return this.MOUSEDOWN_1;
  };
  protoOf(Companion_0).get_MOUSEUP_xp42d3_k$ = function () {
    return this.MOUSEUP_1;
  };
  protoOf(Companion_0).get_MOUSEENTER_4ls4bg_k$ = function () {
    return this.MOUSEENTER_1;
  };
  protoOf(Companion_0).get_MOUSELEAVE_4pgjwb_k$ = function () {
    return this.MOUSELEAVE_1;
  };
  protoOf(Companion_0).get_MOUSEMOVE_6pz00j_k$ = function () {
    return this.MOUSEMOVE_1;
  };
  protoOf(Companion_0).get_MOUSEOUT_ku6wmm_k$ = function () {
    return this.MOUSEOUT_1;
  };
  protoOf(Companion_0).get_MOUSEOVER_6pxl8w_k$ = function () {
    return this.MOUSEOVER_1;
  };
  protoOf(Companion_0).get_WHEEL_iiiz9u_k$ = function () {
    return this.WHEEL_1;
  };
  protoOf(Companion_0).get_SCROLL_3qqzfa_k$ = function () {
    return this.SCROLL_1;
  };
  protoOf(Companion_0).get_SELECT_3rqj2d_k$ = function () {
    return this.SELECT_1;
  };
  protoOf(Companion_0).get_TOUCHCANCEL_dnulf4_k$ = function () {
    return this.TOUCHCANCEL_1;
  };
  protoOf(Companion_0).get_TOUCHEND_wewr97_k$ = function () {
    return this.TOUCHEND_1;
  };
  protoOf(Companion_0).get_TOUCHMOVE_aehk55_k$ = function () {
    return this.TOUCHMOVE_1;
  };
  protoOf(Companion_0).get_TOUCHSTART_wrtgr0_k$ = function () {
    return this.TOUCHSTART_1;
  };
  protoOf(Companion_0).get_ANIMATIONCANCEL_s7fx11_k$ = function () {
    return this.ANIMATIONCANCEL_1;
  };
  protoOf(Companion_0).get_ANIMATIONEND_8qz940_k$ = function () {
    return this.ANIMATIONEND_1;
  };
  protoOf(Companion_0).get_ANIMATIONITERATION_txi5cu_k$ = function () {
    return this.ANIMATIONITERATION_1;
  };
  protoOf(Companion_0).get_ANIMATIONSTART_qbysnt_k$ = function () {
    return this.ANIMATIONSTART_1;
  };
  protoOf(Companion_0).get_BEFOREINPUT_vjk3z6_k$ = function () {
    return this.BEFOREINPUT_1;
  };
  protoOf(Companion_0).get_INPUT_iaxxfl_k$ = function () {
    return this.INPUT_1;
  };
  protoOf(Companion_0).get_CHANGE_3rivk7_k$ = function () {
    return this.CHANGE_1;
  };
  protoOf(Companion_0).get_INVALID_pha976_k$ = function () {
    return this.INVALID_1;
  };
  protoOf(Companion_0).get_DRAG_wnzszh_k$ = function () {
    return this.DRAG_1;
  };
  protoOf(Companion_0).get_DROP_wnztbs_k$ = function () {
    return this.DROP_1;
  };
  protoOf(Companion_0).get_DRAGSTART_l9va57_k$ = function () {
    return this.DRAGSTART_1;
  };
  protoOf(Companion_0).get_DRAGEND_q9f4de_k$ = function () {
    return this.DRAGEND_1;
  };
  protoOf(Companion_0).get_DRAGOVER_wrllwv_k$ = function () {
    return this.DRAGOVER_1;
  };
  protoOf(Companion_0).get_DRAGENTER_lhnulh_k$ = function () {
    return this.DRAGENTER_1;
  };
  protoOf(Companion_0).get_DRAGLEAVE_ldzf0m_k$ = function () {
    return this.DRAGLEAVE_1;
  };
  protoOf(Companion_0).get_SUBMIT_40d0rl_k$ = function () {
    return this.SUBMIT_1;
  };
  protoOf(Companion_0).get_RESET_ifqdqe_k$ = function () {
    return this.RESET_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.listeners_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).registerEventListener_wc34s5_k$ = function (listener) {
    this.listeners_1.add_1j60pz_k$(listener);
  };
  protoOf(EventsListenerScopeBuilder).copyListenersFrom_jbuovr_k$ = function (from) {
    this.listeners_1.addAll_oxxjjk_k$(from.listeners_1);
  };
  protoOf(EventsListenerScopeBuilder).collectListeners_sutf4b_k$ = function () {
    return this.listeners_1;
  };
  function HtmlAttrMarker() {
  }
  protoOf(HtmlAttrMarker).equals = function (other) {
    if (!(other instanceof HtmlAttrMarker))
      return false;
    other instanceof HtmlAttrMarker || THROW_CCE();
    return true;
  };
  protoOf(HtmlAttrMarker).hashCode = function () {
    return 0;
  };
  protoOf(HtmlAttrMarker).toString = function () {
    return '@org.jetbrains.compose.web.attributes.HtmlAttrMarker()';
  };
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
  function get_$stableprop_8() {
    return 0;
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
  function get_$stableprop_12() {
    return 0;
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
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithStringValue).inputValue_wt6s86_k$ = function (event) {
    return Week_getInstance().valueAsString_a6pbbh_k$(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithUnitValue).inputValue_js0p55_k$ = function (event) {
    return Unit_getInstance();
  };
  protoOf(InputTypeWithUnitValue).inputValue_wt6s86_k$ = function (event) {
    this.inputValue_js0p55_k$(event);
    return Unit_getInstance();
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeCheckedValue).inputValue_wt6s86_k$ = function (event) {
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
    this.$stable_2 = 0;
  }
  protoOf(InputTypeNumberValue).inputValue_wt6s86_k$ = function (event) {
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
  protoOf(Companion_1).fromString_2a1yvu_k$ = function (type) {
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
  function get_$stableprop_25() {
    return 0;
  }
  function InputType(typeStr) {
    Companion_getInstance_2();
    this.typeStr_1 = typeStr;
    this.$stable_1 = 0;
  }
  protoOf(InputType).get_typeStr_cucz82_k$ = function () {
    return this.typeStr_1;
  };
  protoOf(InputType).valueAsString_a6pbbh_k$ = function (event) {
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
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function Ltr() {
    Ltr_instance = this;
    DirType.call(this, 'ltr');
    this.$stable_2 = 0;
  }
  var Ltr_instance;
  function Ltr_getInstance() {
    if (Ltr_instance == null)
      new Ltr();
    return Ltr_instance;
  }
  function Rtl() {
    Rtl_instance = this;
    DirType.call(this, 'rtl');
    this.$stable_2 = 0;
  }
  var Rtl_instance;
  function Rtl_getInstance() {
    if (Rtl_instance == null)
      new Rtl();
    return Rtl_instance;
  }
  function Auto() {
    Auto_instance = this;
    DirType.call(this, 'auto');
    this.$stable_2 = 0;
  }
  var Auto_instance;
  function Auto_getInstance() {
    if (Auto_instance == null)
      new Auto();
    return Auto_instance;
  }
  function get_$stableprop_29() {
    return 0;
  }
  function DirType(dirStr) {
    this.dirStr_1 = dirStr;
    this.$stable_1 = 0;
  }
  protoOf(DirType).get_dirStr_cdza7h_k$ = function () {
    return this.dirStr_1;
  };
  var Draggable_True_instance;
  var Draggable_False_instance;
  var Draggable_Auto_instance;
  function values() {
    return [Draggable_True_getInstance(), Draggable_False_getInstance(), Draggable_Auto_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'True':
        return Draggable_True_getInstance();
      case 'False':
        return Draggable_False_getInstance();
      case 'Auto':
        return Draggable_Auto_getInstance();
      default:
        Draggable_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_True_instance = new Draggable('True', 0, 'true');
    Draggable_False_instance = new Draggable('False', 1, 'false');
    Draggable_Auto_instance = new Draggable('Auto', 2, 'auto');
  }
  function Draggable(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(Draggable).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  var InputMode_None_instance;
  var InputMode_Text_instance;
  var InputMode_Decimal_instance;
  var InputMode_Numeric_instance;
  var InputMode_Tel_instance;
  var InputMode_Search_instance;
  var InputMode_Email_instance;
  var InputMode_Url_instance;
  function values_0() {
    return [InputMode_None_getInstance(), InputMode_Text_getInstance(), InputMode_Decimal_getInstance(), InputMode_Numeric_getInstance(), InputMode_Tel_getInstance(), InputMode_Search_getInstance(), InputMode_Email_getInstance(), InputMode_Url_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'None':
        return InputMode_None_getInstance();
      case 'Text':
        return InputMode_Text_getInstance();
      case 'Decimal':
        return InputMode_Decimal_getInstance();
      case 'Numeric':
        return InputMode_Numeric_getInstance();
      case 'Tel':
        return InputMode_Tel_getInstance();
      case 'Search':
        return InputMode_Search_getInstance();
      case 'Email':
        return InputMode_Email_getInstance();
      case 'Url':
        return InputMode_Url_getInstance();
      default:
        InputMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InputMode_entriesInitialized;
  function InputMode_initEntries() {
    if (InputMode_entriesInitialized)
      return Unit_getInstance();
    InputMode_entriesInitialized = true;
    InputMode_None_instance = new InputMode('None', 0, 'none');
    InputMode_Text_instance = new InputMode('Text', 1, 'text');
    InputMode_Decimal_instance = new InputMode('Decimal', 2, 'decimal');
    InputMode_Numeric_instance = new InputMode('Numeric', 3, 'numeric');
    InputMode_Tel_instance = new InputMode('Tel', 4, 'tel');
    InputMode_Search_instance = new InputMode('Search', 5, 'search');
    InputMode_Email_instance = new InputMode('Email', 6, 'email');
    InputMode_Url_instance = new InputMode('Url', 7, 'url');
  }
  function InputMode(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(InputMode).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_off_18iz96_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'off';
  };
  protoOf(Companion_2).get_on_kntnrs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'on';
  };
  protoOf(Companion_2).get_name_woqyms_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'name';
  };
  protoOf(Companion_2).get_honorificPrefix_18bb6y_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'honorific-prefix';
  };
  protoOf(Companion_2).get_givenName_wt5kvz_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'given-name';
  };
  protoOf(Companion_2).get_additionalName_h8z8t7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'additional-name';
  };
  protoOf(Companion_2).get_familyName_6ytaaw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'family-name';
  };
  protoOf(Companion_2).get_honorificSuffix_2p4755_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'honorific-suffix';
  };
  protoOf(Companion_2).get_nickname_umul6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nickname';
  };
  protoOf(Companion_2).get_email_iqwbqr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'email';
  };
  protoOf(Companion_2).get_username_ytz5i7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'username';
  };
  protoOf(Companion_2).get_newPassword_g8455a_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'new-password';
  };
  protoOf(Companion_2).get_currentPassword_q3lfez_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'current-password';
  };
  protoOf(Companion_2).get_oneTimeCode_htasnd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'one-time-code';
  };
  protoOf(Companion_2).get_organizationTitle_rufdj0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'organization-title';
  };
  protoOf(Companion_2).get_organization_o1gozg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'organization';
  };
  protoOf(Companion_2).get_streetAddress_17ko8o_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'street-address';
  };
  protoOf(Companion_2).get_addressLine1_8m9zea_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line1';
  };
  protoOf(Companion_2).get_addressLine2_8m9zeb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line2';
  };
  protoOf(Companion_2).get_addressLine3_8m9zec_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line3';
  };
  protoOf(Companion_2).get_addressLevel1_gzwrmw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level1';
  };
  protoOf(Companion_2).get_addressLevel2_gzwrmv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level2';
  };
  protoOf(Companion_2).get_addressLevel3_gzwrmu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level3';
  };
  protoOf(Companion_2).get_addressLevel4_gzwrmt_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level4';
  };
  protoOf(Companion_2).get_country_h3tl7x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'country';
  };
  protoOf(Companion_2).get_countryName_aj0oq0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'country-name';
  };
  protoOf(Companion_2).get_postalCode_d34wrl_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'postal-code';
  };
  protoOf(Companion_2).get_ccName_bt06xg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-name';
  };
  protoOf(Companion_2).get_ccGivenName_3v4b0f_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-given-name';
  };
  protoOf(Companion_2).get_ccAdditionalName_9q4a5h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-additional-name';
  };
  protoOf(Companion_2).get_ccFamilyName_j4jx7c_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-family-name';
  };
  protoOf(Companion_2).get_ccNumber_jcvx4e_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-number';
  };
  protoOf(Companion_2).get_ccExp_iplsac_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp';
  };
  protoOf(Companion_2).get_ccExpMonth_5x3iwc_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp-month';
  };
  protoOf(Companion_2).get_ccExpYear_kfb19r_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp-year';
  };
  protoOf(Companion_2).get_ccSecurityCode_jvaqxi_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-csc';
  };
  protoOf(Companion_2).get_ccType_bt4ipv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-type';
  };
  protoOf(Companion_2).get_transactionCurrency_n3np9i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'transaction-currency';
  };
  protoOf(Companion_2).get_transactionAmount_4n7orx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'transaction-amount';
  };
  protoOf(Companion_2).get_language_cjhhk1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'language';
  };
  protoOf(Companion_2).get_birthdate_bhbxrw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday';
  };
  protoOf(Companion_2).get_birthdateDay_tkstvs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-day';
  };
  protoOf(Companion_2).get_birthdateMonth_brctb8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-month';
  };
  protoOf(Companion_2).get_birthdateYear_6i0gip_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-year';
  };
  protoOf(Companion_2).get_sex_18iwar_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sex';
  };
  protoOf(Companion_2).get_tel_18ivke_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel';
  };
  protoOf(Companion_2).get_telCountryCode_emt8r5_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-country-code';
  };
  protoOf(Companion_2).get_telNational_5x07lw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-national';
  };
  protoOf(Companion_2).get_telAreaCode_fk08a4_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-area-code';
  };
  protoOf(Companion_2).get_telLocal_gckpnd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-local';
  };
  protoOf(Companion_2).get_telExtension_n0w5eb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-extension';
  };
  protoOf(Companion_2).get_impp_woo0od_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'impp';
  };
  protoOf(Companion_2).get_url_18iuii_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'url';
  };
  protoOf(Companion_2).get_photo_iwv5zd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'photo';
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function AutoComplete() {
  }
  function AutoComplete_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Draggable_True_getInstance() {
    Draggable_initEntries();
    return Draggable_True_instance;
  }
  function Draggable_False_getInstance() {
    Draggable_initEntries();
    return Draggable_False_instance;
  }
  function Draggable_Auto_getInstance() {
    Draggable_initEntries();
    return Draggable_Auto_instance;
  }
  function InputMode_None_getInstance() {
    InputMode_initEntries();
    return InputMode_None_instance;
  }
  function InputMode_Text_getInstance() {
    InputMode_initEntries();
    return InputMode_Text_instance;
  }
  function InputMode_Decimal_getInstance() {
    InputMode_initEntries();
    return InputMode_Decimal_instance;
  }
  function InputMode_Numeric_getInstance() {
    InputMode_initEntries();
    return InputMode_Numeric_instance;
  }
  function InputMode_Tel_getInstance() {
    InputMode_initEntries();
    return InputMode_Tel_instance;
  }
  function InputMode_Search_getInstance() {
    InputMode_initEntries();
    return InputMode_Search_instance;
  }
  function InputMode_Email_getInstance() {
    InputMode_initEntries();
    return InputMode_Email_instance;
  }
  function InputMode_Url_getInstance() {
    InputMode_initEntries();
    return InputMode_Url_instance;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function SyntheticEventListener(event, listener) {
    this.event_1 = event;
    this.listener_1 = listener;
    this.name_1 = this.event_1;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEventListener).get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  protoOf(SyntheticEventListener).get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  protoOf(SyntheticEventListener).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(SyntheticEventListener).handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new SyntheticEvent(event);
    this.listener_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    eventName = eventName === VOID ? Companion_getInstance_1().get_INPUT_iaxxfl_k$() : eventName;
    SyntheticEventListener.call(this, eventName, listener);
    this.inputType_1 = inputType;
  }
  protoOf(InputEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputEventListener).handleEvent_78xx5q_k$ = function (event) {
    var value = this.inputType_1.inputValue_wt6s86_k$(event);
    this.listener_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function ChangeEventListener(inputType, listener) {
    SyntheticEventListener.call(this, Companion_getInstance_1().get_CHANGE_3rivk7_k$(), listener);
    this.inputType_1 = inputType;
  }
  protoOf(ChangeEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(ChangeEventListener).handleEvent_78xx5q_k$ = function (event) {
    var value = this.inputType_1.inputValue_wt6s86_k$(event);
    this.listener_1(new SyntheticChangeEvent(value, event));
  };
  protoOf(ChangeEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function SelectEventListener(listener) {
    SyntheticEventListener.call(this, Companion_getInstance_1().get_SELECT_3rqj2d_k$(), listener);
  }
  protoOf(SelectEventListener).handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = event.target;
    this.listener_1(new SyntheticSelectEvent(event, tmp$ret$1));
  };
  protoOf(SelectEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function MouseWheelEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseWheelEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticWheelEvent(event));
  };
  protoOf(MouseWheelEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function DragEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(DragEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticDragEvent(event));
  };
  protoOf(DragEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function ClipboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(ClipboardEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticClipboardEvent(event));
  };
  protoOf(ClipboardEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(KeyboardEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function FocusEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(FocusEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticFocusEvent(event));
  };
  protoOf(FocusEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function TouchEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(TouchEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticTouchEvent(event));
  };
  protoOf(TouchEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(AnimationEventListener).handleEvent_78xx5q_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function get_$stableprop_31() {
    return 8;
  }
  function InputAttrsScope(inputType, attrsScope) {
    this.inputType_1 = inputType;
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(InputAttrsScope).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputAttrsScope).addEventListener_rnhydf_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_rnhydf_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).addEventListener_y3hr2r_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_y3hr2r_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_z3nk29_k$(attr, value);
  };
  protoOf(InputAttrsScope).classes_mog12g_k$ = function (classes) {
    this.$$delegate_0__1.classes_mog12g_k$(classes);
  };
  protoOf(InputAttrsScope).classes_m2xsyo_k$ = function (classes) {
    this.$$delegate_0__1.classes_m2xsyo_k$(classes);
  };
  protoOf(InputAttrsScope).contentEditable_oklk6b_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_oklk6b_k$(value);
  };
  protoOf(InputAttrsScope).dir_9tgcjq_k$ = function (value) {
    return this.$$delegate_0__1.dir_9tgcjq_k$(value);
  };
  protoOf(InputAttrsScope).draggable_ghcstc_k$ = function (value) {
    return this.$$delegate_0__1.draggable_ghcstc_k$(value);
  };
  protoOf(InputAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(InputAttrsScope).id_xxyy5i_k$ = function (value) {
    return this.$$delegate_0__1.id_xxyy5i_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_q3xdho_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_q3xdho_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_ni4l5s_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_ni4l5s_k$(value);
  };
  protoOf(InputAttrsScope).lang_xkki7h_k$ = function (value) {
    return this.$$delegate_0__1.lang_xkki7h_k$(value);
  };
  protoOf(InputAttrsScope).onAnimationEnd_35pssj_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_35pssj_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationIteration_qwyfwf_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_qwyfwf_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationStart_jojejg_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_jojejg_k$(listener);
  };
  protoOf(InputAttrsScope).onBlur_jks72x_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_jks72x_k$(listener);
  };
  protoOf(InputAttrsScope).onClick_3adsri_k$ = function (listener) {
    this.$$delegate_0__1.onClick_3adsri_k$(listener);
  };
  protoOf(InputAttrsScope).onContextMenu_rqaeiw_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_rqaeiw_k$(listener);
  };
  protoOf(InputAttrsScope).onCopy_takkx5_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_takkx5_k$(listener);
  };
  protoOf(InputAttrsScope).onCut_ol4js_k$ = function (listener) {
    this.$$delegate_0__1.onCut_ol4js_k$(listener);
  };
  protoOf(InputAttrsScope).onDoubleClick_o3ltf3_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_o3ltf3_k$(listener);
  };
  protoOf(InputAttrsScope).onDrag_vg0lyh_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_vg0lyh_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnd_y7ewx8_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_y7ewx8_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnter_uyubsn_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_uyubsn_k$(listener);
  };
  protoOf(InputAttrsScope).onDragLeave_nnon60_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nnon60_k$(listener);
  };
  protoOf(InputAttrsScope).onDragOver_ti99sb_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_ti99sb_k$(listener);
  };
  protoOf(InputAttrsScope).onDragStart_w5ys4t_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_w5ys4t_k$(listener);
  };
  protoOf(InputAttrsScope).onDrop_3mkg4y_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_3mkg4y_k$(listener);
  };
  protoOf(InputAttrsScope).onFocus_f0s6pg_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_f0s6pg_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusIn_o8fbjl_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_o8fbjl_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusOut_pmzsfc_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_pmzsfc_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyDown_xycn2o_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_xycn2o_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyUp_u3a7vt_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_u3a7vt_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseDown_em11hd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_em11hd_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseEnter_g3bz11_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_g3bz11_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseLeave_4qyrg6_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_4qyrg6_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseMove_609snk_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_609snk_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOut_alj067_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_alj067_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOver_66zdzh_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_66zdzh_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseUp_qybdyy_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_qybdyy_k$(listener);
  };
  protoOf(InputAttrsScope).onPaste_rubsh5_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_rubsh5_k$(listener);
  };
  protoOf(InputAttrsScope).onScroll_3uphub_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_3uphub_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchCancel_ufddza_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_ufddza_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchEnd_u7mt1j_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_u7mt1j_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchMove_f4qr3x_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_f4qr3x_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchStart_sporrm_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_sporrm_k$(listener);
  };
  protoOf(InputAttrsScope).onWheel_cg2j2t_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_cg2j2t_k$(listener);
  };
  protoOf(InputAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    this.$$delegate_0__1.prop_mo7bqj_k$(update, value);
  };
  protoOf(InputAttrsScope).ref_t3nern_k$ = function (effect) {
    this.$$delegate_0__1.ref_6wvjf3_k$(effect);
  };
  protoOf(InputAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_t3nern_k$(effect);
  };
  protoOf(InputAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(InputAttrsScope).spellCheck_ra9ojq_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_ra9ojq_k$(value);
  };
  protoOf(InputAttrsScope).style_sa2yps_k$ = function (builder) {
    this.$$delegate_0__1.style_sa2yps_k$(builder);
  };
  protoOf(InputAttrsScope).tabIndex_coguxw_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_coguxw_k$(value);
  };
  protoOf(InputAttrsScope).title_898wkp_k$ = function (value) {
    return this.$$delegate_0__1.title_898wkp_k$(value);
  };
  protoOf(InputAttrsScope).value_h8ym4w_k$ = function (value) {
    var tmp0_subject = this.inputType_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.attr_z3nk29_k$('value', value);
    } else {
      this.prop_mo7bqj_k$(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).value_jlq9ug_k$ = function (value) {
    this.value_h8ym4w_k$(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).checked_sfde8d_k$ = function (checked) {
    this.prop_mo7bqj_k$(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).defaultChecked_plyi8q_k$ = function () {
    this.attr_z3nk29_k$('checked', '');
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_e47tyn_k$ = function (value) {
    this.attr_z3nk29_k$('value', value);
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_brg693_k$ = function (value) {
    this.attr_z3nk29_k$('value', toString(value));
    return this;
  };
  protoOf(InputAttrsScope).onInvalid_xz9m1k_k$ = function (listener) {
    this.addEventListener_rnhydf_k$(Companion_getInstance_1().get_INVALID_pha976_k$(), listener);
  };
  protoOf(InputAttrsScope).onInput_9lpwcz_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new InputEventListener(Companion_getInstance_1().get_INPUT_iaxxfl_k$(), this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onChange_cawpsx_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new ChangeEventListener(this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onBeforeInput_n5s62c_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new InputEventListener(Companion_getInstance_1().get_BEFOREINPUT_vjk3z6_k$(), this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onSelect_f2fvx2_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new SelectEventListener(listener));
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
      if (!get_controlledRadioGroups().containsKey_wgk31w_k$(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = get_controlledRadioGroups();
        var tmp2_set = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var tmp3_set = LinkedHashSet_init_$Create$();
        tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
      }
      ensureNotNull(get_controlledRadioGroups().get_1mhr4y_k$(element.name)).add_1j60pz_k$(element);
    }
  }
  function DisposeRadioGroupEffect$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1867048565);
    if (isTraceInProgress()) {
      traceEventStart(-1867048565, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect$composable(null, DisposeRadioGroupEffect$composable$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_getInstance_2().fromString_2a1yvu_k$(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().get_1mhr4y_k$(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
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
    this.$ref_1 = $ref;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().get_1mhr4y_k$(this.$ref_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.remove_8hbkc6_k$(this.$ref_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().get_1mhr4y_k$(this.$ref_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isEmpty_y1axqb_k$()) === true) {
      get_controlledRadioGroups().remove_8hbkc0_k$(this.$ref_1.name);
    }
  };
  function DisposeRadioGroupEffect$composable$lambda($this_DisposeRadioGroupEffect$composable) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect$composable.get_scopeElement_mn83kc_k$($this$DisposableEffect);
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
  function get_$stableprop_32() {
    return 8;
  }
  function TextAreaAttrsScope(attrsScope) {
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(TextAreaAttrsScope).addEventListener_rnhydf_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_rnhydf_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).addEventListener_y3hr2r_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_y3hr2r_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_z3nk29_k$(attr, value);
  };
  protoOf(TextAreaAttrsScope).classes_mog12g_k$ = function (classes) {
    this.$$delegate_0__1.classes_mog12g_k$(classes);
  };
  protoOf(TextAreaAttrsScope).classes_m2xsyo_k$ = function (classes) {
    this.$$delegate_0__1.classes_m2xsyo_k$(classes);
  };
  protoOf(TextAreaAttrsScope).contentEditable_oklk6b_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_oklk6b_k$(value);
  };
  protoOf(TextAreaAttrsScope).dir_9tgcjq_k$ = function (value) {
    return this.$$delegate_0__1.dir_9tgcjq_k$(value);
  };
  protoOf(TextAreaAttrsScope).draggable_ghcstc_k$ = function (value) {
    return this.$$delegate_0__1.draggable_ghcstc_k$(value);
  };
  protoOf(TextAreaAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(TextAreaAttrsScope).id_xxyy5i_k$ = function (value) {
    return this.$$delegate_0__1.id_xxyy5i_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_q3xdho_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_q3xdho_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_ni4l5s_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_ni4l5s_k$(value);
  };
  protoOf(TextAreaAttrsScope).lang_xkki7h_k$ = function (value) {
    return this.$$delegate_0__1.lang_xkki7h_k$(value);
  };
  protoOf(TextAreaAttrsScope).onAnimationEnd_35pssj_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_35pssj_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationIteration_qwyfwf_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_qwyfwf_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationStart_jojejg_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_jojejg_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onBlur_jks72x_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_jks72x_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onClick_3adsri_k$ = function (listener) {
    this.$$delegate_0__1.onClick_3adsri_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onContextMenu_rqaeiw_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_rqaeiw_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCopy_takkx5_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_takkx5_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCut_ol4js_k$ = function (listener) {
    this.$$delegate_0__1.onCut_ol4js_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDoubleClick_o3ltf3_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_o3ltf3_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrag_vg0lyh_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_vg0lyh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnd_y7ewx8_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_y7ewx8_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnter_uyubsn_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_uyubsn_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragLeave_nnon60_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nnon60_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragOver_ti99sb_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_ti99sb_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragStart_w5ys4t_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_w5ys4t_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrop_3mkg4y_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_3mkg4y_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocus_f0s6pg_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_f0s6pg_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusIn_o8fbjl_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_o8fbjl_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusOut_pmzsfc_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_pmzsfc_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyDown_xycn2o_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_xycn2o_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyUp_u3a7vt_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_u3a7vt_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseDown_em11hd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_em11hd_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseEnter_g3bz11_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_g3bz11_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseLeave_4qyrg6_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_4qyrg6_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseMove_609snk_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_609snk_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOut_alj067_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_alj067_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOver_66zdzh_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_66zdzh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseUp_qybdyy_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_qybdyy_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onPaste_rubsh5_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_rubsh5_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onScroll_3uphub_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_3uphub_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchCancel_ufddza_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_ufddza_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchEnd_u7mt1j_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_u7mt1j_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchMove_f4qr3x_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_f4qr3x_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchStart_sporrm_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_sporrm_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onWheel_cg2j2t_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_cg2j2t_k$(listener);
  };
  protoOf(TextAreaAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    this.$$delegate_0__1.prop_mo7bqj_k$(update, value);
  };
  protoOf(TextAreaAttrsScope).ref_epq6x5_k$ = function (effect) {
    this.$$delegate_0__1.ref_6wvjf3_k$(effect);
  };
  protoOf(TextAreaAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_epq6x5_k$(effect);
  };
  protoOf(TextAreaAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(TextAreaAttrsScope).spellCheck_ra9ojq_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_ra9ojq_k$(value);
  };
  protoOf(TextAreaAttrsScope).style_sa2yps_k$ = function (builder) {
    this.$$delegate_0__1.style_sa2yps_k$(builder);
  };
  protoOf(TextAreaAttrsScope).tabIndex_coguxw_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_coguxw_k$(value);
  };
  protoOf(TextAreaAttrsScope).title_898wkp_k$ = function (value) {
    return this.$$delegate_0__1.title_898wkp_k$(value);
  };
  protoOf(TextAreaAttrsScope).value_h8ym4w_k$ = function (value) {
    this.prop_mo7bqj_k$(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).defaultValue_e47tyn_k$ = function (value) {
    this.prop_mo7bqj_k$(get_setTextAreaDefaultValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).onInput_3q4ryq_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new InputEventListener(Companion_getInstance_1().get_INPUT_iaxxfl_k$(), Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onChange_i3v930_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new ChangeEventListener(Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onBeforeInput_ibayi7_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new InputEventListener(Companion_getInstance_1().get_BEFOREINPUT_vjk3z6_k$(), Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onSelect_4eiyni_k$ = function (listener) {
    this.registerEventListener_wc34s5_k$(new SelectEventListener(listener));
  };
  function appendRule(_this__u8e3s4, cssRule) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
  }
  function CSSBuilder() {
  }
  function _get_currentRoot__jkxtsa($this) {
    return $this.currentRoot_1;
  }
  function get_$stableprop_33() {
    return 8;
  }
  function CSSBuilderImpl(currentRoot, self_0, rulesHolder) {
    CSSRuleBuilderImpl.call(this);
    this.currentRoot_1 = currentRoot;
    this.self_1 = self_0;
    this.$$delegate_0__1 = rulesHolder;
    this.$stable_3 = 8;
  }
  protoOf(CSSBuilderImpl).get_self_wou8id_k$ = function () {
    return this.self_1;
  };
  protoOf(CSSBuilderImpl).get_cssRules_jdoznh_k$ = function () {
    return this.$$delegate_0__1.get_cssRules_jdoznh_k$();
  };
  protoOf(CSSBuilderImpl).add_nvgmad_k$ = function (cssRule) {
    this.$$delegate_0__1.add_nvgmad_k$(cssRule);
  };
  protoOf(CSSBuilderImpl).add_6geiun_k$ = function (selector, style) {
    this.$$delegate_0__1.add_6geiun_k$(selector, style);
  };
  protoOf(CSSBuilderImpl).style_hxkm7v_k$ = function (selector, cssRule) {
    var tmp;
    if (selector.contains_2pzjqz_k$(this.self_1) ? true : selector.contains_2pzjqz_k$(this.currentRoot_1)) {
      tmp = selector;
    } else {
      tmp = this.desc_ej3sir_k$(this.self_1, selector);
    }
    var resolvedSelector = tmp;
    var tmp0_container = buildCSS(this.currentRoot_1, resolvedSelector, cssRule);
    var style = tmp0_container.component1_7eebsc_k$();
    var rules = tmp0_container.component2_7eebsb_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = rules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.css.CSSBuilderImpl.style.<anonymous>' call
      this.add_nvgmad_k$(element);
    }
    this.add_6geiun_k$(resolvedSelector, style);
  };
  protoOf(CSSBuilderImpl).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_hxkm7v_k$(selector, cssRule);
  };
  protoOf(CSSBuilderImpl).buildRules_unxnun_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBuilderImpl(this.currentRoot_1, this.self_1, new StyleSheetBuilderImpl());
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    return tmp0_apply.get_cssRules_jdoznh_k$();
  };
  protoOf(CSSBuilderImpl).buildRules_6uc0gb_k$ = function (rulesBuild) {
    return this.buildRules_unxnun_k$(rulesBuild);
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Block_i7n684_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'block';
  };
  protoOf(Companion_3).get_Inline_bkx8e_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline';
  };
  protoOf(Companion_3).get_InlineBlock_dx9ywb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-block';
  };
  protoOf(Companion_3).get_Flex_wo1n4y_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex';
  };
  protoOf(Companion_3).get_LegacyInlineFlex_bx32c_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-flex';
  };
  protoOf(Companion_3).get_Grid_wo2enj_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grid';
  };
  protoOf(Companion_3).get_LegacyInlineGrid_bxukx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-grid';
  };
  protoOf(Companion_3).get_FlowRoot_2ttlax_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flow-root';
  };
  protoOf(Companion_3).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_3).get_Contents_uww6pv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contents';
  };
  protoOf(Companion_3).get_Table_ihc6md_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table';
  };
  protoOf(Companion_3).get_TableRow_phjndh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table-row';
  };
  protoOf(Companion_3).get_ListItem_8hh2km_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'list-item';
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DisplayStyle() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_4).get_Hidden_viqel_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hidden';
  };
  protoOf(Companion_4).get_Dotted_2o3wrx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dotted';
  };
  protoOf(Companion_4).get_Dashed_2vtwyu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dashed';
  };
  protoOf(Companion_4).get_Solid_ih1j6q_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'solid';
  };
  protoOf(Companion_4).get_Double_2o3myu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'double';
  };
  protoOf(Companion_4).get_Groove_17ey1p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'groove';
  };
  protoOf(Companion_4).get_Ridge_igdqoy_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ridge';
  };
  protoOf(Companion_4).get_Inset_ibj3dg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inset';
  };
  protoOf(Companion_4).get_Outset_2mooe5_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'outset';
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function LineStyle() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Static_4hz9g7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'static';
  };
  protoOf(Companion_5).get_Relative_v4kdkl_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'relative';
  };
  protoOf(Companion_5).get_Absolute_25kja8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'absolute';
  };
  protoOf(Companion_5).get_Sticky_4i40sy_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sticky';
  };
  protoOf(Companion_5).get_Fixed_i9smcr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fixed';
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Position() {
  }
  function StylePropertyEnum() {
  }
  function DisplayStyle_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function LineStyle_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Position_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_Ease_wo0sbb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease';
  };
  protoOf(Companion_6).get_EaseIn_2esdgk_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-in';
  };
  protoOf(Companion_6).get_EaseOut_3pbekp_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-out';
  };
  protoOf(Companion_6).get_EaseInOut_7d98oe_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-in-out';
  };
  protoOf(Companion_6).get_Linear_10u5ou_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'linear';
  };
  protoOf(Companion_6).get_StepStart_7bah8z_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'step-start';
  };
  protoOf(Companion_6).get_StepEnd_2ir2xm_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'step-end';
  };
  protoOf(Companion_6).cubicBezier_9c65ad_k$ = function (x1, y1, x2, y2) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')';
  };
  protoOf(Companion_6).steps_7ihcar_k$ = function (count, stepPosition) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'steps(' + count + ', ' + stepPosition + ')';
  };
  protoOf(Companion_6).steps_jwa1l2_k$ = function (count) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'steps(' + count + ')';
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function AnimationTimingFunction() {
  }
  function AnimationTimingFunction_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_JumpStart_i85v5h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-start';
  };
  protoOf(Companion_7).get_JumpEnd_81cg5g_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-end';
  };
  protoOf(Companion_7).get_JumpNone_yykj9t_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-none';
  };
  protoOf(Companion_7).get_JumpBoth_yys6yw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-both';
  };
  protoOf(Companion_7).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_7).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function StepPosition() {
  }
  function StepPosition_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function get_value(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_8).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_8).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_8).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_8).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_8).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_8).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_8).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_8).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_8).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function AlignItems() {
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Auto_wnyn88_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_9).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_9).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_9).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_9).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_9).get_SelfStart_di8gbx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-start';
  };
  protoOf(Companion_9).get_SelfEnd_9ir8ka_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-end';
  };
  protoOf(Companion_9).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_9).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_9).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_9).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_9).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_9).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function AlignSelf() {
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Row_18jkj3_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row';
  };
  protoOf(Companion_10).get_RowReverse_d0ukpd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row-reverse';
  };
  protoOf(Companion_10).get_Column_35am4h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column';
  };
  protoOf(Companion_10).get_ColumnReverse_rkbov1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column-reverse';
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FlexDirection() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_11).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_11).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_11).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_11).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_11).get_Left_wo5bw0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_11).get_Right_igdsyb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_11).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_11).get_SpaceBetween_5p3wqd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-between';
  };
  protoOf(Companion_11).get_SpaceAround_1tvu22_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-around';
  };
  protoOf(Companion_11).get_SpaceEvenly_3s2yx0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-evenly';
  };
  protoOf(Companion_11).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  protoOf(Companion_11).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_11).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function JustifyContent() {
  }
  function AlignItems_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AlignSelf_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function FlexDirection_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function JustifyContent_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function get_$stableprop_36() {
    return 8;
  }
  function get_$stableprop_37() {
    return 8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.$stable_2 = 0;
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
    this.$stable_2 = 0;
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
  function Percentage(value) {
    CSSKeyframe.call(this);
    this.value_1 = value;
    this.$stable_2 = 8;
  }
  protoOf(Percentage).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).toString = function () {
    return toString(this.value_1);
  };
  protoOf(Percentage).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).copy_ry1872_k$ = function (value) {
    return new Percentage(value);
  };
  protoOf(Percentage).copy$default_78oefb_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_ry1872_k$(value) : $super.copy_ry1872_k$.call(this, value);
  };
  protoOf(Percentage).hashCode = function () {
    return hashCode(this.value_1);
  };
  protoOf(Percentage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Percentage))
      return false;
    var tmp0_other_with_cast = other instanceof Percentage ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Combine(values) {
    CSSKeyframe.call(this);
    this.values_1 = values;
    this.$stable_2 = 8;
  }
  protoOf(Combine).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).toString = function () {
    return joinToString(this.values_1, ', ');
  };
  protoOf(Combine).component1_7eebsc_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).copy_pikks8_k$ = function (values) {
    return new Combine(values);
  };
  protoOf(Combine).copy$default_qyu3by_k$ = function (values, $super) {
    values = values === VOID ? this.values_1 : values;
    return $super === VOID ? this.copy_pikks8_k$(values) : $super.copy_pikks8_k$.call(this, values);
  };
  protoOf(Combine).hashCode = function () {
    return hashCode(this.values_1);
  };
  protoOf(Combine).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine))
      return false;
    var tmp0_other_with_cast = other instanceof Combine ? other : THROW_CCE();
    if (!equals(this.values_1, tmp0_other_with_cast.values_1))
      return false;
    return true;
  };
  function get_$stableprop_38() {
    return 0;
  }
  function CSSKeyframe() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_39() {
    return 8;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.keyframe_1 = keyframe;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).get_keyframe_nerrnt_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.keyframe_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).copy_a48hbz_k$ = function (keyframe, style) {
    return new CSSKeyframeRuleDeclaration(keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).copy$default_5ghk9i_k$ = function (keyframe, style, $super) {
    keyframe = keyframe === VOID ? this.keyframe_1 : keyframe;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_a48hbz_k$(keyframe, style) : $super.copy_a48hbz_k$.call(this, keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.keyframe_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.keyframe_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.keyframe_1, tmp0_other_with_cast.keyframe_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function get_$stableprop_40() {
    return 8;
  }
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.name_1 = name;
    this.keys_1 = keys;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@keyframes ' + this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).copy_hrvg8b_k$ = function (name, keys) {
    return new CSSKeyframesRuleDeclaration(name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).copy$default_ypmit1_k$ = function (name, keys, $super) {
    name = name === VOID ? this.name_1 : name;
    keys = keys === VOID ? this.keys_1 : keys;
    return $super === VOID ? this.copy_hrvg8b_k$(name, keys) : $super.copy_hrvg8b_k$.call(this, name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.name_1 + ', keys=' + this.keys_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.keys_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    return true;
  };
  function CSSKeyframesBuilder_init_$Init$(init, $this) {
    CSSKeyframesBuilder.call($this);
    init($this);
    return $this;
  }
  function CSSKeyframesBuilder_init_$Create$(init) {
    return CSSKeyframesBuilder_init_$Init$(init, objectCreate(protoOf(CSSKeyframesBuilder)));
  }
  function get_$stableprop_41() {
    return 8;
  }
  function CSSKeyframesBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.frames_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframesBuilder).get_frames_dgqchb_k$ = function () {
    return this.frames_1;
  };
  protoOf(CSSKeyframesBuilder).from_f15r57_k$ = function (style) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.frames_1;
    var tmp1_plusAssign = new CSSKeyframeRuleDeclaration(From_getInstance(), buildCSSStyleRule(style));
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  protoOf(CSSKeyframesBuilder).to_blt0wq_k$ = function (style) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.frames_1;
    var tmp1_plusAssign = new CSSKeyframeRuleDeclaration(To_getInstance(), buildCSSStyleRule(style));
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  protoOf(CSSKeyframesBuilder).each_bd3n8l_k$ = function (keys, style) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.frames_1;
    var tmp1_plusAssign = new CSSKeyframeRuleDeclaration(new Combine(toList(keys)), buildCSSStyleRule(style));
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  protoOf(CSSKeyframesBuilder).invoke_2k15qe_k$ = function (_this__u8e3s4, style) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.frames_1;
    var tmp1_plusAssign = new CSSKeyframeRuleDeclaration(new Percentage(_this__u8e3s4), buildCSSStyleRule(style));
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  function CSSNamedKeyframes() {
  }
  function buildKeyframes(name, builder) {
    var frames = CSSKeyframesBuilder_init_$Create$(builder).frames_1;
    return new CSSKeyframesRuleDeclaration(name, frames);
  }
  function get_$stableprop_42() {
    return 0;
  }
  var Enum_All_instance;
  var Enum_Print_instance;
  var Enum_Screen_instance;
  var Enum_Speech_instance;
  function values_1() {
    return [Enum_All_getInstance(), Enum_Print_getInstance(), Enum_Screen_getInstance(), Enum_Speech_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'All':
        return Enum_All_getInstance();
      case 'Print':
        return Enum_Print_getInstance();
      case 'Screen':
        return Enum_Screen_getInstance();
      case 'Speech':
        return Enum_Speech_getInstance();
      default:
        Enum_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Enum_entriesInitialized;
  function Enum_initEntries() {
    if (Enum_entriesInitialized)
      return Unit_getInstance();
    Enum_entriesInitialized = true;
    Enum_All_instance = new Enum_0('All', 0);
    Enum_Print_instance = new Enum_0('Print', 1);
    Enum_Screen_instance = new Enum_0('Screen', 2);
    Enum_Speech_instance = new Enum_0('Speech', 3);
  }
  function Enum_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_43() {
    return 0;
  }
  function Enum_All_getInstance() {
    Enum_initEntries();
    return Enum_All_instance;
  }
  function Enum_Print_getInstance() {
    Enum_initEntries();
    return Enum_Print_instance;
  }
  function Enum_Screen_getInstance() {
    Enum_initEntries();
    return Enum_Screen_instance;
  }
  function Enum_Speech_getInstance() {
    Enum_initEntries();
    return Enum_Speech_instance;
  }
  function get_$stableprop_44() {
    return 8;
  }
  function get_$stableprop_45() {
    return 8;
  }
  function get_$stableprop_46() {
    return 8;
  }
  function get_$stableprop_47() {
    return 8;
  }
  function get_$stableprop_48() {
    return 8;
  }
  function get_$stableprop_49() {
    return 8;
  }
  function get_$stableprop_50() {
    return 8;
  }
  function Invertible() {
  }
  function Combinable() {
  }
  function Atomic() {
  }
  function Raw(string) {
    this.string_1 = string;
    this.$stable_1 = 0;
  }
  protoOf(Raw).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(Raw).toString = function () {
    return this.string_1;
  };
  protoOf(Raw).component1_7eebsc_k$ = function () {
    return this.string_1;
  };
  protoOf(Raw).copy_3t26ic_k$ = function (string) {
    return new Raw(string);
  };
  protoOf(Raw).copy$default_uiaeej_k$ = function (string, $super) {
    string = string === VOID ? this.string_1 : string;
    return $super === VOID ? this.copy_3t26ic_k$(string) : $super.copy_3t26ic_k$.call(this, string);
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.string_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.string_1 === tmp0_other_with_cast.string_1))
      return false;
    return true;
  };
  function MediaType(type) {
    this.type_1 = type;
    this.$stable_1 = 0;
  }
  protoOf(MediaType).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(MediaType).toString = function () {
    return this.type_1.get_name_woqyms_k$();
  };
  protoOf(MediaType).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(MediaType).copy_kglsb2_k$ = function (type) {
    return new MediaType(type);
  };
  protoOf(MediaType).copy$default_4atsph_k$ = function (type, $super) {
    type = type === VOID ? this.type_1 : type;
    return $super === VOID ? this.copy_kglsb2_k$(type) : $super.copy_kglsb2_k$.call(this, type);
  };
  protoOf(MediaType).hashCode = function () {
    return this.type_1.hashCode();
  };
  protoOf(MediaType).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MediaType))
      return false;
    var tmp0_other_with_cast = other instanceof MediaType ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  protoOf(MediaFeature).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(MediaFeature).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.name_1 === other.name_1 ? toString_0(this.value_1) === toString_0(other.value_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.value_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.value_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function NotFeature(query) {
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(NotFeature).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(NotFeature).toString = function () {
    return '(not ' + this.query_1 + ')';
  };
  protoOf(NotFeature).component1_7eebsc_k$ = function () {
    return this.query_1;
  };
  protoOf(NotFeature).copy_6x2wov_k$ = function (query) {
    return new NotFeature(query);
  };
  protoOf(NotFeature).copy$default_o8ddp3_k$ = function (query, $super) {
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_6x2wov_k$(query) : $super.copy_6x2wov_k$.call(this, query);
  };
  protoOf(NotFeature).hashCode = function () {
    return hashCode(this.query_1);
  };
  protoOf(NotFeature).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotFeature))
      return false;
    var tmp0_other_with_cast = other instanceof NotFeature ? other : THROW_CCE();
    if (!this.query_1.equals(tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function And(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(And).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(And).toString = function () {
    return joinToString(this.mediaList_1, ' and ');
  };
  protoOf(And).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(And).copy_1cyzz8_k$ = function (mediaList) {
    return new And(mediaList);
  };
  protoOf(And).copy$default_s3u2wa_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_1cyzz8_k$(mediaList) : $super.copy_1cyzz8_k$.call(this, mediaList);
  };
  protoOf(And).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(And).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof And))
      return false;
    var tmp0_other_with_cast = other instanceof And ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function Not(query) {
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(Not).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(Not).toString = function () {
    return 'not ' + this.query_1;
  };
  protoOf(Not).component1_7eebsc_k$ = function () {
    return this.query_1;
  };
  protoOf(Not).copy_okr01h_k$ = function (query) {
    return new Not(query);
  };
  protoOf(Not).copy$default_tryxjb_k$ = function (query, $super) {
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_okr01h_k$(query) : $super.copy_okr01h_k$.call(this, query);
  };
  protoOf(Not).hashCode = function () {
    return hashCode(this.query_1);
  };
  protoOf(Not).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Not))
      return false;
    var tmp0_other_with_cast = other instanceof Not ? other : THROW_CCE();
    if (!equals(this.query_1, tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function Combine_0(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(Combine_0).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Combine_0).toString = function () {
    return joinToString(this.mediaList_1, ', ');
  };
  protoOf(Combine_0).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Combine_0).copy_bsxaq_k$ = function (mediaList) {
    return new Combine_0(mediaList);
  };
  protoOf(Combine_0).copy$default_sddy1e_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_bsxaq_k$(mediaList) : $super.copy_bsxaq_k$.call(this, mediaList);
  };
  protoOf(Combine_0).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(Combine_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine_0))
      return false;
    var tmp0_other_with_cast = other instanceof Combine_0 ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function Only(type, query) {
    this.type_1 = type;
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(Only).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Only).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(Only).toString = function () {
    return 'only ' + this.type_1 + ' and ' + this.query_1;
  };
  protoOf(Only).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(Only).component2_7eebsb_k$ = function () {
    return this.query_1;
  };
  protoOf(Only).copy_9s2s3z_k$ = function (type, query) {
    return new Only(type, query);
  };
  protoOf(Only).copy$default_6ax53z_k$ = function (type, query, $super) {
    type = type === VOID ? this.type_1 : type;
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_9s2s3z_k$(type, query) : $super.copy_9s2s3z_k$.call(this, type, query);
  };
  protoOf(Only).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + hashCode(this.query_1) | 0;
    return result;
  };
  protoOf(Only).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Only))
      return false;
    var tmp0_other_with_cast = other instanceof Only ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.query_1, tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function Or(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(Or).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Or).toString = function () {
    return joinToString(this.mediaList_1, ' or ');
  };
  protoOf(Or).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Or).copy_hmdbus_k$ = function (mediaList) {
    return new Or(mediaList);
  };
  protoOf(Or).copy$default_12q7ne_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_hmdbus_k$(mediaList) : $super.copy_hmdbus_k$.call(this, mediaList);
  };
  protoOf(Or).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(Or).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Or))
      return false;
    var tmp0_other_with_cast = other instanceof Or ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function CSSMediaQuery() {
  }
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.buildRules_6uc0gb_k$(rulesBuild);
    _this__u8e3s4.add_nvgmad_k$(new CSSMediaRuleDeclaration(query, rules));
  }
  function get_$stableprop_51() {
    return 0;
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.query_1 = query;
    this.rules_1 = rules;
    this.$stable_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(CSSMediaRuleDeclaration).get_rules_iy6zf2_k$ = function () {
    return this.rules_1;
  };
  protoOf(CSSMediaRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@media ' + this.query_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.rules_1, other.rules_1) ? equals(this.query_1, other.query_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function get_$stableprop_52() {
    return 8;
  }
  function CSSCalcValue(op) {
    this.op_1 = op;
    this.$stable_1 = 8;
  }
  protoOf(CSSCalcValue).set_op_skoki4_k$ = function (_set____db54di) {
    this.op_1 = _set____db54di;
  };
  protoOf(CSSCalcValue).get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  protoOf(CSSCalcValue).toString = function () {
    return 'calc' + this.op_1;
  };
  protoOf(CSSCalcValue).component1_7eebsc_k$ = function () {
    return this.op_1;
  };
  protoOf(CSSCalcValue).copy_al1c64_k$ = function (op) {
    return new CSSCalcValue(op);
  };
  protoOf(CSSCalcValue).copy$default_i676uc_k$ = function (op, $super) {
    op = op === VOID ? this.op_1 : op;
    return $super === VOID ? this.copy_al1c64_k$(op) : $super.copy_al1c64_k$.call(this, op);
  };
  protoOf(CSSCalcValue).hashCode = function () {
    return hashCode(this.op_1);
  };
  protoOf(CSSCalcValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSCalcValue))
      return false;
    var tmp0_other_with_cast = other instanceof CSSCalcValue ? other : THROW_CCE();
    if (!equals(this.op_1, tmp0_other_with_cast.op_1))
      return false;
    return true;
  };
  function minus(_this__u8e3s4, b) {
    return new CSSCalcValue(new CSSMinus(_this__u8e3s4, b));
  }
  function CSSMinus(l, r) {
    this.l_1 = l;
    this.r_1 = r;
  }
  protoOf(CSSMinus).set_l_xbobeb_k$ = function (_set____db54di) {
    this.l_1 = _set____db54di;
  };
  protoOf(CSSMinus).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(CSSMinus).set_r_e1t66r_k$ = function (_set____db54di) {
    this.r_1 = _set____db54di;
  };
  protoOf(CSSMinus).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(CSSMinus).toString = function () {
    return '(' + this.l_1 + ' - ' + this.r_1 + ')';
  };
  protoOf(CSSMinus).component1_7eebsc_k$ = function () {
    return this.l_1;
  };
  protoOf(CSSMinus).component2_7eebsb_k$ = function () {
    return this.r_1;
  };
  protoOf(CSSMinus).copy_ajaqd_k$ = function (l, r) {
    return new CSSMinus(l, r);
  };
  protoOf(CSSMinus).copy$default_vhir4k_k$ = function (l, r, $super) {
    l = l === VOID ? this.l_1 : l;
    r = r === VOID ? this.r_1 : r;
    return $super === VOID ? this.copy_ajaqd_k$(l, r) : $super.copy_ajaqd_k$.call(this, l, r);
  };
  protoOf(CSSMinus).hashCode = function () {
    var result = hashCode(this.l_1);
    result = imul(result, 31) + hashCode(this.r_1) | 0;
    return result;
  };
  protoOf(CSSMinus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSMinus))
      return false;
    var tmp0_other_with_cast = other instanceof CSSMinus ? other : THROW_CCE();
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    return true;
  };
  function CSSStyleRuleBuilder() {
  }
  function CSSRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function get_$stableprop_53() {
    return 8;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.selector_1 = selector;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  protoOf(CSSStyleRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).copy_y673ka_k$ = function (selector, style) {
    return new CSSStyleRuleDeclaration(selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).copy$default_qc2uhg_k$ = function (selector, style, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_y673ka_k$(selector, style) : $super.copy_y673ka_k$.call(this, selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.selector_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.selector_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.selector_1, tmp0_other_with_cast.selector_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
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
  function get_$stableprop_54() {
    return 0;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.$stable_2 = 0;
  }
  function percent() {
  }
  function em() {
  }
  function ex() {
  }
  function ch() {
  }
  function ic() {
  }
  function rem() {
  }
  function lh() {
  }
  function rlh() {
  }
  function vw() {
  }
  function vh() {
  }
  function vi() {
  }
  function vb() {
  }
  function vmin() {
  }
  function vmax() {
  }
  function cm() {
  }
  function mm() {
  }
  function Q() {
  }
  function pt() {
  }
  function pc() {
  }
  function px() {
  }
  function deg() {
  }
  function grad() {
  }
  function rad() {
  }
  function turn() {
  }
  function s() {
  }
  function ms() {
  }
  function Hz() {
  }
  function kHz() {
  }
  function dpi() {
  }
  function dpcm() {
  }
  function dppx() {
  }
  function fr() {
  }
  function number() {
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_percent_9yntlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '%';
  };
  protoOf(Companion_12).get_em_knto0f_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'em';
  };
  protoOf(Companion_12).get_ex_knto04_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ex';
  };
  protoOf(Companion_12).get_ch_knto2a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ch';
  };
  protoOf(Companion_12).get_ic_kntnx9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ic';
  };
  protoOf(Companion_12).get_rem_18ix1r_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rem';
  };
  protoOf(Companion_12).get_lh_kntnuj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lh';
  };
  protoOf(Companion_12).get_rlh_18iwvv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rlh';
  };
  protoOf(Companion_12).get_vw_kntnli_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vw';
  };
  protoOf(Companion_12).get_vh_kntnlx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vh';
  };
  protoOf(Companion_12).get_vi_kntnlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vi';
  };
  protoOf(Companion_12).get_vb_kntnm3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vb';
  };
  protoOf(Companion_12).get_vmin_wowbc5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmin';
  };
  protoOf(Companion_12).get_vmax_wowb5j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmax';
  };
  protoOf(Companion_12).get_cm_knto25_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cm';
  };
  protoOf(Companion_12).get_mm_kntntj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mm';
  };
  protoOf(Companion_12).get_Q_1mhr54_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Q';
  };
  protoOf(Companion_12).get_pt_kntnqr_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pt';
  };
  protoOf(Companion_12).get_pc_kntnr8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pc';
  };
  protoOf(Companion_12).get_px_kntnqn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'px';
  };
  protoOf(Companion_12).get_deg_18j7fn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'deg';
  };
  protoOf(Companion_12).get_grad_womu1j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grad';
  };
  protoOf(Companion_12).get_rad_18ix5g_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rad';
  };
  protoOf(Companion_12).get_turn_wov7ie_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'turn';
  };
  protoOf(Companion_12).get_s_1mhr62_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's';
  };
  protoOf(Companion_12).get_ms_kntntd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ms';
  };
  protoOf(Companion_12).get_Hz_kntop1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Hz';
  };
  protoOf(Companion_12).get_kHz_18j2x8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kHz';
  };
  protoOf(Companion_12).get_dpi_18j764_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpi';
  };
  protoOf(Companion_12).get_dpcm_wokvnj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpcm';
  };
  protoOf(Companion_12).get_dppx_wokvz1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dppx';
  };
  protoOf(Companion_12).get_fr_kntnzf_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fr';
  };
  protoOf(Companion_12).get_number_hay53m_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'number';
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function CSSUnit() {
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function CSSUnitLength() {
  }
  function CSSUnitTime() {
  }
  function CSSUnitLengthOrPercentage() {
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    Companion_getInstance_13();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitPercentage() {
  }
  function CSSUnitRel() {
  }
  function CSSUnitAbs() {
  }
  function CSSUnitAngle() {
  }
  function CSSUnitFrequency() {
  }
  function CSSUnitResolution() {
  }
  function CSSUnitFlex() {
  }
  function get_$stableprop_55() {
    return 0;
  }
  function CSSUnitValueTyped(value, unit) {
    this.value_1 = value;
    this.unit_1 = unit;
    this.$stable_1 = 0;
  }
  protoOf(CSSUnitValueTyped).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).get_unit_wovp3h_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.value_1 + this.unit_1;
  };
  protoOf(CSSUnitValueTyped).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).component2_7eebsb_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).copy_5lbdn6_k$ = function (value, unit) {
    return new CSSUnitValueTyped(value, unit);
  };
  protoOf(CSSUnitValueTyped).copy$default_2yx0b8_k$ = function (value, unit, $super) {
    value = value === VOID ? this.value_1 : value;
    unit = unit === VOID ? this.unit_1 : unit;
    return $super === VOID ? this.copy_5lbdn6_k$(value, unit) : $super.copy_5lbdn6_k$.call(this, value, unit);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.value_1);
    result = imul(result, 31) + hashCode(this.unit_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.unit_1, tmp0_other_with_cast.unit_1))
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
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
  }
  protoOf(RGB).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ')';
  };
  function RGBA(r, g, b, a) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.a_1 = a;
  }
  protoOf(RGBA).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ', ' + toString(this.a_1) + ')';
  };
  function StylePropertyValue(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StylePropertyValue_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StyleScope() {
  }
  function get_$stableprop_56() {
    return 0;
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.properties_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.variables_1 = ArrayList_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(StyleScopeBuilder).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(StyleScopeBuilder).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(StyleScopeBuilder).property_lwhspk_k$ = function (propertyName, value) {
    this.get_properties_zhllqc_k$().add_1j60pz_k$(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).variable_3743rz_k$ = function (variableName, value) {
    this.get_variables_75f0zy_k$().add_1j60pz_k$(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.get_properties_zhllqc_k$(), other.get_properties_zhllqc_k$()) ? nativeEquals(this.get_variables_75f0zy_k$(), other.get_variables_75f0zy_k$()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StyleScopeBuilder).copyFrom_j2fwtz_k$ = function (sb) {
    this.get_properties_zhllqc_k$().addAll_oxxjjk_k$(sb.get_properties_zhllqc_k$());
    this.get_variables_75f0zy_k$().addAll_oxxjjk_k$(sb.get_variables_75f0zy_k$());
  };
  function get_$stableprop_57() {
    return 0;
  }
  function CSSStyleVariable(name) {
    this.name_1 = name;
    this.$stable_1 = 0;
  }
  protoOf(CSSStyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function StylePropertyDeclaration_init_$Init$_0(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$_0(name, value) {
    return StylePropertyDeclaration_init_$Init$_0(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function get_$stableprop_58() {
    return 8;
  }
  function StylePropertyDeclaration(name, value) {
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  protoOf(StylePropertyDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).copy_5fgnvr_k$ = function (name, value) {
    return new StylePropertyDeclaration(name, value);
  };
  protoOf(StylePropertyDeclaration).copy$default_pli7jr_k$ = function (name, value, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_5fgnvr_k$(name, value) : $super.copy_5fgnvr_k$.call(this, name, value);
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.name_1 + ', value=' + this.value_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.get_size_woubt6_k$() === properties.get_size_woubt6_k$()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.get_fkrdnv_k$(tmp0);
        if (!(element.name_1 === otherProp.name_1 ? toString(element.value_1) === toString(otherProp.value_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function CSSVariable() {
  }
  function CSSVariableValue(value) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function CSSVariableValue_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function _set_counter__gelo1j($this, _set____db54di) {
    $this.counter_1 = _set____db54di;
  }
  function _get_counter__t0a3kl($this) {
    return $this.counter_1;
  }
  function _get_usePrefix__hbj4vs($this) {
    return $this.usePrefix_1;
  }
  function _get_cssBuilder__bqqveb($this) {
    return $this.cssBuilder_1;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).getValue_4lco8v_k$ = function (thisRef, property) {
    return this.function_1(thisRef, property);
  };
  function StyleSheet$CSSHolder$provideDelegate$selector$1($className) {
    this.$className_1 = $className;
    CSSSelector.call(this);
  }
  protoOf(StyleSheet$CSSHolder$provideDelegate$selector$1).asString_l3f38d_k$ = function () {
    return '.' + this.$className_1;
  };
  function StyleSheet$CSSHolder$provideDelegate$lambda($className) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $className;
    };
  }
  function _get_usePrefix__hbj4vs_0($this) {
    return $this.usePrefix_1;
  }
  function _get_keyframesBuilder__6j3x4l($this) {
    return $this.keyframesBuilder_1;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0_0).getValue_4lco8v_k$ = function (thisRef, property) {
    return this.function_1(thisRef, property);
  };
  function StyleSheet$CSSKeyframesHolder$provideDelegate$lambda($rule) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $rule;
    };
  }
  function _get_rulesHolder__jsmg7m($this) {
    return $this.rulesHolder_1;
  }
  function _get_boundClasses__m0yanx($this) {
    return $this.boundClasses_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.counter_1 = 0;
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function CSSSelfSelector(selector) {
    selector = selector === VOID ? null : selector;
    CSSSelector.call(this);
    this.selector_1 = selector;
  }
  protoOf(CSSSelfSelector).set_selector_c2p9ik_k$ = function (_set____db54di) {
    this.selector_1 = _set____db54di;
  };
  protoOf(CSSSelfSelector).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSSelfSelector).toString = function () {
    throw IllegalStateException_init_$Create$("You can't concatenate `String + CSSSelector` which contains `self` or `root`. Use `selector(<your string>)` to convert `String` to `CSSSelector` for proper work. https://github.com/JetBrains/compose-jb/issues/1440");
  };
  protoOf(CSSSelfSelector).asString_l3f38d_k$ = function () {
    var tmp0_safe_receiver = this.selector_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.asString_l3f38d_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't instantiate self");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CSSSelfSelector).equals = function (other) {
    return other instanceof CSSSelfSelector;
  };
  function CSSHolder(usePrefix, cssBuilder) {
    this.usePrefix_1 = usePrefix;
    this.cssBuilder_1 = cssBuilder;
  }
  protoOf(CSSHolder).provideDelegate_wvyklj_k$ = function (sheet, property) {
    var sheetName = this.usePrefix_1 ? '' + getKClassFromExpression(sheet).get_simpleName_r6f8py_k$() + '-' : '';
    var className = sheetName + property.callableName;
    var selector = new StyleSheet$CSSHolder$provideDelegate$selector$1(className);
    var tmp0_container = buildCSS(selector, selector, this.cssBuilder_1);
    var properties = tmp0_container.component1_7eebsc_k$();
    var rules = tmp0_container.component2_7eebsb_k$();
    sheet.add_6geiun_k$(selector, properties);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = rules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.css.CSSHolder.provideDelegate.<anonymous>' call
      sheet.add_nvgmad_k$(element);
    }
    var tmp = StyleSheet$CSSHolder$provideDelegate$lambda(className);
    return new sam$kotlin_properties_ReadOnlyProperty$0(tmp);
  };
  function CSSKeyframesHolder(usePrefix, keyframesBuilder) {
    this.usePrefix_1 = usePrefix;
    this.keyframesBuilder_1 = keyframesBuilder;
  }
  protoOf(CSSKeyframesHolder).provideDelegate_wvyklj_k$ = function (sheet, property) {
    var sheetName = this.usePrefix_1 ? '' + getKClassFromExpression(sheet).get_simpleName_r6f8py_k$() + '-' : '';
    var keyframesName = sheetName + property.callableName;
    var rule = buildKeyframes(keyframesName, this.keyframesBuilder_1);
    sheet.add_nvgmad_k$(rule);
    var tmp = StyleSheet$CSSKeyframesHolder$provideDelegate$lambda(rule);
    return new sam$kotlin_properties_ReadOnlyProperty$0_0(tmp);
  };
  function get_$stableprop_59() {
    return 0;
  }
  function StyleSheet(rulesHolder, usePrefix) {
    Companion_getInstance_14();
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    this.rulesHolder_1 = rulesHolder;
    this.usePrefix_1 = usePrefix;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.boundClasses_1 = LinkedHashMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(StyleSheet).get_usePrefix_1oon1s_k$ = function () {
    return this.usePrefix_1;
  };
  protoOf(StyleSheet).get_cssRules_jdoznh_k$ = function () {
    return this.rulesHolder_1.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheet).add_nvgmad_k$ = function (cssRule) {
    this.rulesHolder_1.add_nvgmad_k$(cssRule);
  };
  protoOf(StyleSheet).add_6geiun_k$ = function (selector, style) {
    this.rulesHolder_1.add_6geiun_k$(selector, style);
  };
  protoOf(StyleSheet).style_c5xakc_k$ = function (cssRule) {
    return new CSSHolder(this.usePrefix_1, cssRule);
  };
  protoOf(StyleSheet).keyframes_h396bd_k$ = function (cssKeyframes) {
    return new CSSKeyframesHolder(this.usePrefix_1, cssKeyframes);
  };
  protoOf(StyleSheet).buildRules_j2cri8_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StyleSheet();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    return tmp0_apply.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheet).buildRules_6uc0gb_k$ = function (rulesBuild) {
    return this.buildRules_j2cri8_k$(rulesBuild);
  };
  protoOf(StyleSheet).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  };
  function get_$stableprop_60() {
    return 0;
  }
  function CSSRulesHolderState() {
    this.cssRules_1 = mutableStateListOf();
    this.$stable_1 = 0;
  }
  protoOf(CSSRulesHolderState).get_cssRules_jdoznh_k$ = function () {
    return this.cssRules_1;
  };
  protoOf(CSSRulesHolderState).add_nvgmad_k$ = function (cssRule) {
    this.cssRules_1.add_1j60qe_k$(cssRule);
  };
  function buildCSS(thisClass, thisContext, cssRule) {
    var styleSheet = new StyleSheetBuilderImpl();
    var tmp0_elvis_lhs = thisClass instanceof CSSSelfSelector ? thisClass : null;
    var root = tmp0_elvis_lhs == null ? new CSSSelfSelector(thisClass) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = thisContext instanceof CSSSelfSelector ? thisContext : null;
    var self_0 = tmp1_elvis_lhs == null ? new CSSSelfSelector(thisContext) : tmp1_elvis_lhs;
    var builder = new CSSBuilderImpl(root, self_0, styleSheet);
    cssRule(builder);
    return to(builder, styleSheet.get_cssRules_jdoznh_k$());
  }
  function Style$composable(styleSheet, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-168645675);
    sourceInformation($composer_0, 'CC(Style$composable)');
    Style$composable_0(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_0, 0, 1);
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.selector_1 = selector;
  }
  protoOf(RawSelector).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).toString = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).copy_3t26ic_k$ = function (selector) {
    return new RawSelector(selector);
  };
  protoOf(RawSelector).copy$default_gjju7o_k$ = function (selector, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    return $super === VOID ? this.copy_3t26ic_k$(selector) : $super.copy_3t26ic_k$.call(this, selector);
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.selector_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.selector_1 === tmp0_other_with_cast.selector_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function Combine$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Combine_1(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Combine_1).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_1).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, this.selectors_1);
  };
  protoOf(Combine_1).toString = function () {
    return joinToString(this.selectors_1, '');
  };
  protoOf(Combine_1).asString_l3f38d_k$ = function () {
    return joinToString(this.selectors_1, '', VOID, VOID, VOID, VOID, Combine$asString$lambda);
  };
  protoOf(Combine_1).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_1).copy_efkur1_k$ = function (selectors) {
    return new Combine_1(selectors);
  };
  protoOf(Combine_1).copy$default_7svzxp_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_efkur1_k$(selectors) : $super.copy_efkur1_k$.call(this, selectors);
  };
  protoOf(Combine_1).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Combine_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine_1))
      return false;
    var tmp0_other_with_cast = other instanceof Combine_1 ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Attribute(name, value, operator, caseSensitive) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    CSSSelector.call(this);
    this.name_1 = name;
    this.value_1 = value;
    this.operator_1 = operator;
    this.caseSensitive_1 = caseSensitive;
  }
  protoOf(Attribute).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).get_caseSensitive_1sy9cz_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).toString = function () {
    var tmp;
    if (this.value_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.Attribute.toString.<anonymous>' call
      tmp = this.operator_1.get_value_j01efc_k$() + this.value_1 + (!this.caseSensitive_1 ? ' i' : '');
    }
    var tmp1_elvis_lhs = tmp;
    var valueStr = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return '[' + this.name_1 + valueStr + ']';
  };
  protoOf(Attribute).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).component3_7eebsa_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).component4_7eebs9_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).copy_5jpg4a_k$ = function (name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  };
  protoOf(Attribute).copy$default_767nec_k$ = function (name, value, operator, caseSensitive, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    operator = operator === VOID ? this.operator_1 : operator;
    caseSensitive = caseSensitive === VOID ? this.caseSensitive_1 : caseSensitive;
    return $super === VOID ? this.copy_5jpg4a_k$(name, value, operator, caseSensitive) : $super.copy_5jpg4a_k$.call(this, name, value, operator, caseSensitive);
  };
  protoOf(Attribute).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : getStringHashCode(this.value_1)) | 0;
    result = imul(result, 31) + this.operator_1.hashCode() | 0;
    result = imul(result, 31) + (this.caseSensitive_1 | 0) | 0;
    return result;
  };
  protoOf(Attribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribute))
      return false;
    var tmp0_other_with_cast = other instanceof Attribute ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.value_1 == tmp0_other_with_cast.value_1))
      return false;
    if (!this.operator_1.equals(tmp0_other_with_cast.operator_1))
      return false;
    if (!(this.caseSensitive_1 === tmp0_other_with_cast.caseSensitive_1))
      return false;
    return true;
  };
  function Group$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Group(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Group).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, this.selectors_1);
  };
  protoOf(Group).toString = function () {
    return joinToString(this.selectors_1, ', ');
  };
  protoOf(Group).asString_l3f38d_k$ = function () {
    return joinToString(this.selectors_1, ', ', VOID, VOID, VOID, VOID, Group$asString$lambda);
  };
  protoOf(Group).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).copy_gwpngl_k$ = function (selectors) {
    return new Group(selectors);
  };
  protoOf(Group).copy$default_l884nz_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_gwpngl_k$(selectors) : $super.copy_gwpngl_k$.call(this, selectors);
  };
  protoOf(Group).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Group).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group))
      return false;
    var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Descendant(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Descendant).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Descendant).toString = function () {
    return '' + this.parent_1 + ' ' + this.selected_1;
  };
  protoOf(Descendant).asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Descendant).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).copy_vrrz27_k$ = function (parent, selected) {
    return new Descendant(parent, selected);
  };
  protoOf(Descendant).copy$default_tgzsqa_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_vrrz27_k$(parent, selected) : $super.copy_vrrz27_k$.call(this, parent, selected);
  };
  protoOf(Descendant).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Descendant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descendant))
      return false;
    var tmp0_other_with_cast = other instanceof Descendant ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Child(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Child).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Child).toString = function () {
    return '' + this.parent_1 + ' > ' + this.selected_1;
  };
  protoOf(Child).asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' > ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Child).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).copy_vrrz27_k$ = function (parent, selected) {
    return new Child(parent, selected);
  };
  protoOf(Child).copy$default_wo45zn_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_vrrz27_k$(parent, selected) : $super.copy_vrrz27_k$.call(this, parent, selected);
  };
  protoOf(Child).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Child).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Sibling(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Sibling).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Sibling).toString = function () {
    return '' + this.prev_1 + ' ~ ' + this.selected_1;
  };
  protoOf(Sibling).asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' ~ ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Sibling).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).copy_vrrz27_k$ = function (prev, selected) {
    return new Sibling(prev, selected);
  };
  protoOf(Sibling).copy$default_ol5ztf_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_vrrz27_k$(prev, selected) : $super.copy_vrrz27_k$.call(this, prev, selected);
  };
  protoOf(Sibling).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Sibling).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sibling))
      return false;
    var tmp0_other_with_cast = other instanceof Sibling ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Adjacent(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Adjacent).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Adjacent).toString = function () {
    return '' + this.prev_1 + ' + ' + this.selected_1;
  };
  protoOf(Adjacent).asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' + ' + this.selected_1.asString_l3f38d_k$();
  };
  protoOf(Adjacent).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).copy_vrrz27_k$ = function (prev, selected) {
    return new Adjacent(prev, selected);
  };
  protoOf(Adjacent).copy$default_ryehzh_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_vrrz27_k$(prev, selected) : $super.copy_vrrz27_k$.call(this, prev, selected);
  };
  protoOf(Adjacent).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Adjacent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Adjacent))
      return false;
    var tmp0_other_with_cast = other instanceof Adjacent ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function get_$stableprop_61() {
    return 0;
  }
  function get_$stableprop_62() {
    return 8;
  }
  function get_$stableprop_63() {
    return 8;
  }
  function get_$stableprop_64() {
    return 8;
  }
  function get_$stableprop_65() {
    return 8;
  }
  function get_$stableprop_66() {
    return 0;
  }
  function get_$stableprop_67() {
    return 0;
  }
  function Lang(langCode) {
    PseudoClassInternal.call(this, 'lang');
    this.langCode_1 = langCode;
    this.$stable_2 = 0;
  }
  protoOf(Lang).get_langCode_ciluis_k$ = function () {
    return this.langCode_1;
  };
  protoOf(Lang).argsStr_cb0nvw_k$ = function () {
    return this.langCode_1;
  };
  function NthChild(nth) {
    PseudoClassInternal.call(this, 'nth-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthChild).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastChild(nth) {
    PseudoClassInternal.call(this, 'nth-last-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastChild).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthOfType(nth) {
    PseudoClassInternal.call(this, 'nth-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthOfType).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastOfType(nth) {
    PseudoClassInternal.call(this, 'nth-last-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastOfType).argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function Host(selector) {
    PseudoClassInternal.call(this, 'host');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Host).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Host).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Host).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function Not_0(selector) {
    PseudoClassInternal.call(this, 'not');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Not_0).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Not_0).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Not_0).argsStr_cb0nvw_k$ = function () {
    return '' + this.selector_1;
  };
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoClassInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
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
    return ':' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function get_$stableprop_68() {
    return 0;
  }
  function Slotted(selector) {
    PseudoElementInternal.call(this, 'slotted');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Slotted).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Slotted).contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Slotted).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function PseudoElementInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoElementInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoElementInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoElementInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoElementInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoElementInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoElementInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '::' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  function get_$stableprop_69() {
    return 8;
  }
  function StyleSheetBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cssRules_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(StyleSheetBuilderImpl).get_cssRules_jdoznh_k$ = function () {
    return this.cssRules_1;
  };
  protoOf(StyleSheetBuilderImpl).add_nvgmad_k$ = function (cssRule) {
    this.get_cssRules_jdoznh_k$().add_1j60pz_k$(cssRule);
  };
  protoOf(StyleSheetBuilderImpl).buildRules_j2cri8_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StyleSheetBuilderImpl();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    return tmp0_apply.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheetBuilderImpl).buildRules_6uc0gb_k$ = function (rulesBuild) {
    return this.buildRules_j2cri8_k$(rulesBuild);
  };
  protoOf(StyleSheetBuilderImpl).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('background-color', value);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.property_lwhspk_k$('border-width', width);
  }
  function borderWidth_0(_this__u8e3s4, vertical, horizontal) {
    _this__u8e3s4.property_ze5ozi_k$('border-width', '' + vertical + ' ' + horizontal);
  }
  function borderWidth_1(_this__u8e3s4, top, horizontal, bottom) {
    _this__u8e3s4.property_ze5ozi_k$('border-width', '' + top + ' ' + horizontal + ' ' + bottom);
  }
  function borderWidth_2(_this__u8e3s4, top, right, bottom, left) {
    _this__u8e3s4.property_ze5ozi_k$('border-width', '' + top + ' ' + right + ' ' + bottom + ' ' + left);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.property_lwhspk_k$('border-radius', r);
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
    _this__u8e3s4.property_lwhspk_k$('border', tmp0_apply);
  }
  function get_$stableprop_70() {
    return 8;
  }
  function CSSBorder() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSBorder).set_width_x5aep2_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSBorder).set_style_eysa9r_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSBorder).set_color_ynz953_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.width_1, this.style_1, this.color_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.width_1 = size;
  }
  function style_3(_this__u8e3s4, style) {
    _this__u8e3s4.style_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.color_1 = color;
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
        style_3($this$border, tmp1_safe_receiver);
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
    _this__u8e3s4.property_lwhspk_k$('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('max-width', value);
  }
  function maxHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('max-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.property_nit37e_k$('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.property_ze5ozi_k$('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_ze5ozi_k$('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.property_nit37e_k$('opacity', value);
  }
  function opacity_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_nit37e_k$('opacity', value.value / 100);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function get_selectorScope() {
    _init_properties_CSSSelectors_kt__t1yksx();
    return selectorScope;
  }
  var selectorScope;
  var Operator_Equals_instance;
  var Operator_ListContains_instance;
  var Operator_Hyphened_instance;
  var Operator_Prefixed_instance;
  var Operator_Suffixed_instance;
  var Operator_Contains_instance;
  function values_2() {
    return [Operator_Equals_getInstance(), Operator_ListContains_getInstance(), Operator_Hyphened_getInstance(), Operator_Prefixed_getInstance(), Operator_Suffixed_getInstance(), Operator_Contains_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Equals':
        return Operator_Equals_getInstance();
      case 'ListContains':
        return Operator_ListContains_getInstance();
      case 'Hyphened':
        return Operator_Hyphened_getInstance();
      case 'Prefixed':
        return Operator_Prefixed_getInstance();
      case 'Suffixed':
        return Operator_Suffixed_getInstance();
      case 'Contains':
        return Operator_Contains_getInstance();
      default:
        Operator_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Operator_entriesInitialized;
  function Operator_initEntries() {
    if (Operator_entriesInitialized)
      return Unit_getInstance();
    Operator_entriesInitialized = true;
    Operator_Equals_instance = new Operator('Equals', 0, '=');
    Operator_ListContains_instance = new Operator('ListContains', 1, '~=');
    Operator_Hyphened_instance = new Operator('Hyphened', 2, '|=');
    Operator_Prefixed_instance = new Operator('Prefixed', 3, '^=');
    Operator_Suffixed_instance = new Operator('Suffixed', 4, '$=');
    Operator_Contains_instance = new Operator('Contains', 5, '*=');
  }
  function Operator(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Operator).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_71() {
    return 0;
  }
  function Operator_Equals_getInstance() {
    Operator_initEntries();
    return Operator_Equals_instance;
  }
  function Operator_ListContains_getInstance() {
    Operator_initEntries();
    return Operator_ListContains_instance;
  }
  function Operator_Hyphened_getInstance() {
    Operator_initEntries();
    return Operator_Hyphened_instance;
  }
  function Operator_Prefixed_getInstance() {
    Operator_initEntries();
    return Operator_Prefixed_instance;
  }
  function Operator_Suffixed_getInstance() {
    Operator_initEntries();
    return Operator_Suffixed_instance;
  }
  function Operator_Contains_getInstance() {
    Operator_initEntries();
    return Operator_Contains_instance;
  }
  function get_$stableprop_72() {
    return 0;
  }
  function get_$stableprop_73() {
    return 0;
  }
  function Attribute_0() {
    Attribute_instance = this;
    this.$stable_1 = 0;
  }
  var Attribute_instance;
  function Attribute_getInstance() {
    if (Attribute_instance == null)
      new Attribute_0();
    return Attribute_instance;
  }
  function PseudoClass() {
    PseudoClass_instance = this;
    this.anyLink_1 = get_selectorScope().get_anyLink_cofd2b_k$();
    this.link_1 = get_selectorScope().get_link_wopumb_k$();
    this.visited_1 = get_selectorScope().get_visited_8zg8qp_k$();
    this.localLink_1 = get_selectorScope().get_localLink_bf63s4_k$();
    this.target_1 = get_selectorScope().get_target_juba8q_k$();
    this.targetWithin_1 = get_selectorScope().get_targetWithin_2o3zvf_k$();
    this.scope_1 = get_selectorScope().get_scope_iyfcq3_k$();
    this.hover_1 = get_selectorScope().get_hover_islez7_k$();
    this.active_1 = get_selectorScope().get_active_avldsf_k$();
    this.focus_1 = get_selectorScope().get_focus_irhg33_k$();
    this.focusVisible_1 = get_selectorScope().get_focusVisible_5vnmwz_k$();
    this.playing_1 = get_selectorScope().get_playing_6wau9n_k$();
    this.paused_1 = get_selectorScope().get_paused_hy6yif_k$();
    this.autofill_1 = get_selectorScope().get_autofill_801dad_k$();
    this.enabled_1 = get_selectorScope().get_enabled_pcr8o8_k$();
    this.disabled_1 = get_selectorScope().get_disabled_rbmjej_k$();
    this.readOnly_1 = get_selectorScope().get_readOnly_ovku97_k$();
    this.readWrite_1 = get_selectorScope().get_readWrite_a0tpds_k$();
    this.placeholderShown_1 = get_selectorScope().get_placeholderShown_1kc3x5_k$();
    this.default_1 = get_selectorScope().get_default_qtagd4_k$();
    this.checked_1 = get_selectorScope().get_checked_djib3y_k$();
    this.indeterminate_1 = get_selectorScope().get_indeterminate_997h5e_k$();
    this.blank_1 = get_selectorScope().get_blank_ip8b3f_k$();
    this.valid_1 = get_selectorScope().get_valid_j01e4z_k$();
    this.invalid_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.inRange_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.outOfRange_1 = get_selectorScope().get_outOfRange_z0zuv5_k$();
    this.required_1 = get_selectorScope().get_required_wq3z3c_k$();
    this.optional_1 = get_selectorScope().get_optional_x3zcnr_k$();
    this.userInvalid_1 = get_selectorScope().get_userInvalid_tptv3x_k$();
    this.root_1 = get_selectorScope().get_root_wott0r_k$();
    this.empty_1 = get_selectorScope().get_empty_iqwn50_k$();
    this.first_1 = get_selectorScope().get_first_irdx8n_k$();
    this.firstChild_1 = get_selectorScope().get_firstChild_n9lgdn_k$();
    this.lastChild_1 = get_selectorScope().get_lastChild_tniydf_k$();
    this.onlyChild_1 = get_selectorScope().get_onlyChild_cxh5if_k$();
    this.firstOfType_1 = get_selectorScope().get_firstOfType_5b9t60_k$();
    this.lastOfType_1 = get_selectorScope().get_lastOfType_9s7uy8_k$();
    this.onlyOfType_1 = get_selectorScope().get_onlyOfType_jptu62_k$();
    this.host_1 = get_selectorScope().get_host_wonf8x_k$();
    this.defined_1 = get_selectorScope().get_defined_qtfew0_k$();
    this.left_1 = get_selectorScope().get_left_woprgw_k$();
    this.right_1 = get_selectorScope().get_right_ixz7xv_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoClass).get_anyLink_cofd2b_k$ = function () {
    return this.anyLink_1;
  };
  protoOf(PseudoClass).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(PseudoClass).get_visited_8zg8qp_k$ = function () {
    return this.visited_1;
  };
  protoOf(PseudoClass).get_localLink_bf63s4_k$ = function () {
    return this.localLink_1;
  };
  protoOf(PseudoClass).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PseudoClass).get_targetWithin_2o3zvf_k$ = function () {
    return this.targetWithin_1;
  };
  protoOf(PseudoClass).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(PseudoClass).get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  protoOf(PseudoClass).get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  protoOf(PseudoClass).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  protoOf(PseudoClass).get_focusVisible_5vnmwz_k$ = function () {
    return this.focusVisible_1;
  };
  protoOf(PseudoClass).get_playing_6wau9n_k$ = function () {
    return this.playing_1;
  };
  protoOf(PseudoClass).get_paused_hy6yif_k$ = function () {
    return this.paused_1;
  };
  protoOf(PseudoClass).get_autofill_801dad_k$ = function () {
    return this.autofill_1;
  };
  protoOf(PseudoClass).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(PseudoClass).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(PseudoClass).get_readOnly_ovku97_k$ = function () {
    return this.readOnly_1;
  };
  protoOf(PseudoClass).get_readWrite_a0tpds_k$ = function () {
    return this.readWrite_1;
  };
  protoOf(PseudoClass).get_placeholderShown_1kc3x5_k$ = function () {
    return this.placeholderShown_1;
  };
  protoOf(PseudoClass).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(PseudoClass).get_checked_djib3y_k$ = function () {
    return this.checked_1;
  };
  protoOf(PseudoClass).get_indeterminate_997h5e_k$ = function () {
    return this.indeterminate_1;
  };
  protoOf(PseudoClass).get_blank_ip8b3f_k$ = function () {
    return this.blank_1;
  };
  protoOf(PseudoClass).get_valid_j01e4z_k$ = function () {
    return this.valid_1;
  };
  protoOf(PseudoClass).get_invalid_xocxse_k$ = function () {
    return this.invalid_1;
  };
  protoOf(PseudoClass).get_inRange_x4kdv3_k$ = function () {
    return this.inRange_1;
  };
  protoOf(PseudoClass).get_outOfRange_z0zuv5_k$ = function () {
    return this.outOfRange_1;
  };
  protoOf(PseudoClass).get_required_wq3z3c_k$ = function () {
    return this.required_1;
  };
  protoOf(PseudoClass).get_optional_x3zcnr_k$ = function () {
    return this.optional_1;
  };
  protoOf(PseudoClass).get_userInvalid_tptv3x_k$ = function () {
    return this.userInvalid_1;
  };
  protoOf(PseudoClass).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(PseudoClass).get_empty_iqwn50_k$ = function () {
    return this.empty_1;
  };
  protoOf(PseudoClass).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(PseudoClass).get_firstChild_n9lgdn_k$ = function () {
    return this.firstChild_1;
  };
  protoOf(PseudoClass).get_lastChild_tniydf_k$ = function () {
    return this.lastChild_1;
  };
  protoOf(PseudoClass).get_onlyChild_cxh5if_k$ = function () {
    return this.onlyChild_1;
  };
  protoOf(PseudoClass).get_firstOfType_5b9t60_k$ = function () {
    return this.firstOfType_1;
  };
  protoOf(PseudoClass).get_lastOfType_9s7uy8_k$ = function () {
    return this.lastOfType_1;
  };
  protoOf(PseudoClass).get_onlyOfType_jptu62_k$ = function () {
    return this.onlyOfType_1;
  };
  protoOf(PseudoClass).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(PseudoClass).get_defined_qtfew0_k$ = function () {
    return this.defined_1;
  };
  protoOf(PseudoClass).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(PseudoClass).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  var PseudoClass_instance;
  function PseudoClass_getInstance() {
    if (PseudoClass_instance == null)
      new PseudoClass();
    return PseudoClass_instance;
  }
  function PseudoElement() {
    PseudoElement_instance = this;
    this.after_1 = get_selectorScope().get_after_iol2gj_k$();
    this.before_1 = get_selectorScope().get_before_bdhrwo_k$();
    this.cue_1 = get_selectorScope().get_cue_18j7sm_k$();
    this.cueRegion_1 = get_selectorScope().get_cueRegion_qinivy_k$();
    this.firstLetter_1 = get_selectorScope().get_firstLetter_6qe5bn_k$();
    this.firstLine_1 = get_selectorScope().get_firstLine_apktuj_k$();
    this.fileSelectorButton_1 = get_selectorScope().get_fileSelectorButton_ul3x92_k$();
    this.selection_1 = get_selectorScope().get_selection_jv4aal_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoElement).get_after_iol2gj_k$ = function () {
    return this.after_1;
  };
  protoOf(PseudoElement).get_before_bdhrwo_k$ = function () {
    return this.before_1;
  };
  protoOf(PseudoElement).get_cue_18j7sm_k$ = function () {
    return this.cue_1;
  };
  protoOf(PseudoElement).get_cueRegion_qinivy_k$ = function () {
    return this.cueRegion_1;
  };
  protoOf(PseudoElement).get_firstLetter_6qe5bn_k$ = function () {
    return this.firstLetter_1;
  };
  protoOf(PseudoElement).get_firstLine_apktuj_k$ = function () {
    return this.firstLine_1;
  };
  protoOf(PseudoElement).get_fileSelectorButton_ul3x92_k$ = function () {
    return this.fileSelectorButton_1;
  };
  protoOf(PseudoElement).get_selection_jv4aal_k$ = function () {
    return this.selection_1;
  };
  var PseudoElement_instance;
  function PseudoElement_getInstance() {
    if (PseudoElement_instance == null)
      new PseudoElement();
    return PseudoElement_instance;
  }
  function get_$stableprop_74() {
    return 0;
  }
  function CSSSelector() {
    this.$stable_1 = 0;
  }
  protoOf(CSSSelector).contains_2pzjqz_k$ = function (other) {
    return this === other;
  };
  protoOf(CSSSelector).contains_qmwvuj_k$ = function (that, other, children) {
    var tmp;
    if (that === other) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(children, Collection)) {
          tmp_0 = children.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = children.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.css.selectors.CSSSelector.contains.<anonymous>' call
          if (element.contains_2pzjqz_k$(other)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(CSSSelector).asString_l3f38d_k$ = function () {
    return toString(this);
  };
  function FunctionalImpl(a, b) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    this.a_1 = a;
    this.b_1 = b;
  }
  protoOf(FunctionalImpl).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).toString = function () {
    return (!(this.a_1 == null) ? !(this.b_1 == null) : false) ? '' + this.a_1 + 'n+' + this.b_1 : !(this.a_1 == null) ? '' + this.a_1 + 'n' : !(this.b_1 == null) ? '' + this.b_1 : '';
  };
  protoOf(FunctionalImpl).component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).copy_l9lgz5_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(FunctionalImpl).copy$default_4uevn6_k$ = function (a, b, $super) {
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_l9lgz5_k$(a, b) : $super.copy_l9lgz5_k$.call(this, a, b);
  };
  protoOf(FunctionalImpl).hashCode = function () {
    var result = this.a_1 == null ? 0 : this.a_1;
    result = imul(result, 31) + (this.b_1 == null ? 0 : this.b_1) | 0;
    return result;
  };
  protoOf(FunctionalImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionalImpl))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionalImpl ? other : THROW_CCE();
    if (!(this.a_1 == tmp0_other_with_cast.a_1))
      return false;
    if (!(this.b_1 == tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function OddImpl() {
    OddImpl_instance = this;
  }
  protoOf(OddImpl).toString = function () {
    return 'odd';
  };
  var OddImpl_instance;
  function OddImpl_getInstance() {
    if (OddImpl_instance == null)
      new OddImpl();
    return OddImpl_instance;
  }
  function EvenImpl() {
    EvenImpl_instance = this;
  }
  protoOf(EvenImpl).toString = function () {
    return 'even';
  };
  var EvenImpl_instance;
  function EvenImpl_getInstance() {
    if (EvenImpl_instance == null)
      new EvenImpl();
    return EvenImpl_instance;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Odd_1 = OddImpl_getInstance();
    this.Even_1 = EvenImpl_getInstance();
  }
  protoOf(Companion_14).get_Odd_18jn16_k$ = function () {
    return this.Odd_1;
  };
  protoOf(Companion_14).get_Even_wo17k3_k$ = function () {
    return this.Even_1;
  };
  protoOf(Companion_14).Functional_qn1hcx_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(Companion_14).Functional$default_klhsfj_k$ = function (a, b, $super) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    return $super === VOID ? this.Functional_qn1hcx_k$(a, b) : $super.Functional_qn1hcx_k$.call(this, a, b);
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Nth() {
  }
  function selectorScope$1() {
  }
  var properties_initialized_CSSSelectors_kt_ttgqoj;
  function _init_properties_CSSSelectors_kt__t1yksx() {
    if (!properties_initialized_CSSSelectors_kt_ttgqoj) {
      properties_initialized_CSSSelectors_kt_ttgqoj = true;
      selectorScope = new selectorScope$1();
    }
  }
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
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
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startNode_htbzn7_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_1 = $composer_2;
        tmp_1.createNode_p4ouwd_k$(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.useNode_inlzo8_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp2_anonymous = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.get_refEffect_m4bgrp_k$();
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous).startReplaceableGroup_rp6air_k$(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var tmp0_anonymous = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous));
      var tmp_2 = attrsScope.get_classes_fds01p_k$();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_2, DomElementWrapper$updateClasses$ref());
      var tmp_3 = attrsScope.get_styleScope_i1qedw_k$();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_3, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_4 = attrsScope.collect_fp9wdm_k$();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_4, DomElementWrapper$updateAttrs$ref());
      var tmp_5 = attrsScope.get_eventsListenerScopeBuilder_j7bhoj_k$().collectListeners_sutf4b_k$();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_5, DomElementWrapper$updateEventListeners$ref());
      var tmp_6 = attrsScope.get_propertyUpdates_qy3v4c_k$();
      Updater__set_impl_v7kwss(tmp0_anonymous, tmp_6, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp2_anonymous).endReplaceableGroup_er37p7_k$();
      $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $composer_4 = $composer_2;
      $composer_4.startReplaceableGroup_rp6air_k$(-1128047990);
      content == null || content(scope, $composer_4, 14 & 8 | 112 & $dirty >> 3);
      $composer_4.endReplaceableGroup_er37p7_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_2.endNode_3mkr10_k$();
      var tmp0_safe_receiver = refEffect;
      var tmp_7;
      if (tmp0_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_7 = Unit_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function ComposeDomNode$composable(factory, elementScope, attrsSkippableUpdate, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startNode_htbzn7_k$();
    if ($composer_0.get_inserting_25mlsw_k$()) {
      var tmp = $composer_0;
      tmp.createNode_p4ouwd_k$(ComposeDomNode$composable$lambda(factory));
    } else {
      $composer_0.useNode_inlzo8_k$();
    }
    attrsSkippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_0)), $composer_0, 112 & $changed >> 3);
    $composer_0.startReplaceableGroup_rp6air_k$(2058660585);
    content(elementScope, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed >> 6);
    $composer_0.endReplaceableGroup_er37p7_k$();
    $composer_0.endNode_3mkr10_k$();
  }
  function _set_currentListeners__i9i2pb($this, _set____db54di) {
    $this.currentListeners_1 = _set____db54di;
  }
  function _get_currentListeners__atm6dh($this) {
    return $this.currentListeners_1;
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.node_2 = node;
    this.currentListeners_1 = emptyList();
  }
  protoOf(DomElementWrapper).get_node_wor8sr_k$ = function () {
    return this.node_2;
  };
  protoOf(DomElementWrapper).updateEventListeners_fe4hpu_k$ = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.currentListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.removeEventListener(element.get_name_woqyms_k$(), element);
    }
    this.currentListeners_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.currentListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.addEventListener(element_0.get_name_woqyms_k$(), element_0);
    }
  };
  protoOf(DomElementWrapper).updateProperties_dmlod0_k$ = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.component1_7eebsc_k$();
      var item = element.component2_7eebsb_k$();
      applicator(this.node_2, item);
    }
  };
  protoOf(DomElementWrapper).updateStyleDeclarations_v4fs0b_k$ = function (styleApplier) {
    var tmp0_subject = this.node_2;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.node_2.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.node_2.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).updateAttrs_5dmv5p_k$ = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.node_2.getAttributeNames();
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
          this.node_2.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.node_2.setAttribute(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
    }
  };
  protoOf(DomElementWrapper).updateClasses_1n4c6v_k$ = function (classes) {
    this.node_2.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.isEmpty_y1axqb_k$()) {
      var tmp = this.node_2.classList;
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
      var node = $elementBuilder.create_md4cuc_k$();
      $scope.set_element_65f0vd_k$(node);
      tmp$ret$0 = new DomElementWrapper(node);
      return tmp$ret$0;
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.updateClasses_1n4c6v_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.updateStyleDeclarations_v4fs0b_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.updateAttrs_5dmv5p_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.updateEventListeners_fe4hpu_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.updateProperties_dmlod0_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($tmp0_safe_receiver, $scope) {
    return function ($this$DisposableEffect) {
      return $tmp0_safe_receiver($this$DisposableEffect, $scope.get_element_q8gf71_k$());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposeDomNode$composable$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function ElementScope() {
  }
  function DomEffectScope() {
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).set_element_65f0vd_k$ = function (_set____db54di) {
    this.element_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).get_element_q8gf71_k$ = function () {
    var tmp = this.element_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).get_scopeElement_mn83kc_k$ = function (_this__u8e3s4) {
    return this.get_element_q8gf71_k$();
  };
  function _set_nextDisposableDomEffectKey__ral2d4($this, _set____db54di) {
    $this.nextDisposableDomEffectKey_1 = _set____db54di;
  }
  function _get_nextDisposableDomEffectKey__spesrw($this) {
    return $this.nextDisposableDomEffectKey_1;
  }
  function get_$stableprop_75() {
    return 8;
  }
  function ElementScopeBase$DisposableRefEffect$composable$lambda($effect, this$0) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, this$0.get_element_q8gf71_k$());
    };
  }
  function ElementScopeBase$DomSideEffect$composable$lambda($changed, $effect, $effectHolder, this$0) {
    return function () {
      if ($changed)
        $effect($effectHolder, this$0.get_element_q8gf71_k$());
      return Unit_getInstance();
    };
  }
  function ElementScopeBase() {
    this.nextDisposableDomEffectKey_1 = 0;
    this.$stable_1 = 8;
  }
  protoOf(ElementScopeBase).DisposableRefEffect_pfoiu9_k$ = function (key, effect) {
    illegalDecoyCallException('DisposableRefEffect');
  };
  protoOf(ElementScopeBase).DomSideEffect_e28ho4_k$ = function (key, effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  protoOf(ElementScopeBase).DomSideEffect_gxh983_k$ = function (effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  protoOf(ElementScopeBase).DisposableRefEffect$composable_921rlw_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(342057060);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(342057060, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DisposableRefEffect$composable (ElementScope.kt:91)');
    }
    DisposableEffect$composable(key, ElementScopeBase$DisposableRefEffect$composable$lambda(effect, this), $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect$composable_hsfl2t_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(354425546);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(354425546, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:100)');
    }
    var changed = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable.<anonymous>' call
      var value = new DomDisposableEffectHolder(this);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var effectHolder = tmp0;
    SideEffect$composable(ElementScopeBase$DomSideEffect$composable$lambda(changed, effect, effectHolder, this), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect$composable_f7i4ay_k$ = function (effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(672260654);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(672260654, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:115)');
    }
    var tmp1 = this.nextDisposableDomEffectKey_1;
    this.nextDisposableDomEffectKey_1 = tmp1 + 1 | 0;
    this.DomSideEffect$composable_hsfl2t_k$(tmp1, effect, $composer_0, 512 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  function DomDisposableEffectHolder(elementScope) {
    this.elementScope_1 = elementScope;
    this.onDispose_1 = null;
  }
  protoOf(DomDisposableEffectHolder).get_elementScope_54l9tr_k$ = function () {
    return this.elementScope_1;
  };
  protoOf(DomDisposableEffectHolder).set_onDispose_1nq98y_k$ = function (_set____db54di) {
    this.onDispose_1 = _set____db54di;
  };
  protoOf(DomDisposableEffectHolder).get_onDispose_crocx5_k$ = function () {
    return this.onDispose_1;
  };
  protoOf(DomDisposableEffectHolder).onRemembered_6899sq_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onForgotten_pcab12_k$ = function () {
    var tmp0_safe_receiver = this.onDispose_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.elementScope_1.get_element_q8gf71_k$());
  };
  protoOf(DomDisposableEffectHolder).onAbandoned_1hgzvg_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onDispose_1nwuli_k$ = function (disposeEffect) {
    this.onDispose_1 = disposeEffect;
  };
  function get_Address() {
    _init_properties_Elements_kt__eyv5nt();
    return Address;
  }
  var Address;
  function get_Article() {
    _init_properties_Elements_kt__eyv5nt();
    return Article;
  }
  var Article;
  function get_Aside() {
    _init_properties_Elements_kt__eyv5nt();
    return Aside;
  }
  var Aside;
  function get_Header() {
    _init_properties_Elements_kt__eyv5nt();
    return Header;
  }
  var Header;
  function get_Area() {
    _init_properties_Elements_kt__eyv5nt();
    return Area;
  }
  var Area;
  function get_Audio() {
    _init_properties_Elements_kt__eyv5nt();
    return Audio;
  }
  var Audio;
  function get_Map() {
    _init_properties_Elements_kt__eyv5nt();
    return Map;
  }
  var Map;
  function get_Track() {
    _init_properties_Elements_kt__eyv5nt();
    return Track;
  }
  var Track;
  function get_Video() {
    _init_properties_Elements_kt__eyv5nt();
    return Video;
  }
  var Video;
  function get_Datalist() {
    _init_properties_Elements_kt__eyv5nt();
    return Datalist;
  }
  var Datalist;
  function get_Fieldset() {
    _init_properties_Elements_kt__eyv5nt();
    return Fieldset;
  }
  var Fieldset;
  function get_Legend() {
    _init_properties_Elements_kt__eyv5nt();
    return Legend;
  }
  var Legend;
  function get_Meter() {
    _init_properties_Elements_kt__eyv5nt();
    return Meter;
  }
  var Meter;
  function get_Output() {
    _init_properties_Elements_kt__eyv5nt();
    return Output;
  }
  var Output;
  function get_Progress() {
    _init_properties_Elements_kt__eyv5nt();
    return Progress;
  }
  var Progress;
  function get_Embed() {
    _init_properties_Elements_kt__eyv5nt();
    return Embed;
  }
  var Embed;
  function get_Iframe() {
    _init_properties_Elements_kt__eyv5nt();
    return Iframe;
  }
  var Iframe;
  function get_Object() {
    _init_properties_Elements_kt__eyv5nt();
    return Object_0;
  }
  var Object_0;
  function get_Param() {
    _init_properties_Elements_kt__eyv5nt();
    return Param;
  }
  var Param;
  function get_Picture() {
    _init_properties_Elements_kt__eyv5nt();
    return Picture;
  }
  var Picture;
  function get_Source() {
    _init_properties_Elements_kt__eyv5nt();
    return Source;
  }
  var Source;
  function get_Canvas() {
    _init_properties_Elements_kt__eyv5nt();
    return Canvas;
  }
  var Canvas;
  function get_DList() {
    _init_properties_Elements_kt__eyv5nt();
    return DList;
  }
  var DList;
  function get_DTerm() {
    _init_properties_Elements_kt__eyv5nt();
    return DTerm;
  }
  var DTerm;
  function get_DDescription() {
    _init_properties_Elements_kt__eyv5nt();
    return DDescription;
  }
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
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  function get_H5() {
    _init_properties_Elements_kt__eyv5nt();
    return H5;
  }
  var H5;
  function get_H6() {
    _init_properties_Elements_kt__eyv5nt();
    return H6;
  }
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  function get_I() {
    _init_properties_Elements_kt__eyv5nt();
    return I;
  }
  var I;
  function get_B() {
    _init_properties_Elements_kt__eyv5nt();
    return B;
  }
  var B;
  function get_Small() {
    _init_properties_Elements_kt__eyv5nt();
    return Small;
  }
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  function get_Br() {
    _init_properties_Elements_kt__eyv5nt();
    return Br;
  }
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  function get_Ol() {
    _init_properties_Elements_kt__eyv5nt();
    return Ol;
  }
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
  function get_Form() {
    _init_properties_Elements_kt__eyv5nt();
    return Form;
  }
  var Form;
  function get_Select() {
    _init_properties_Elements_kt__eyv5nt();
    return Select;
  }
  var Select;
  function get_Option() {
    _init_properties_Elements_kt__eyv5nt();
    return Option;
  }
  var Option;
  function get_OptGroup() {
    _init_properties_Elements_kt__eyv5nt();
    return OptGroup;
  }
  var OptGroup;
  function get_Section() {
    _init_properties_Elements_kt__eyv5nt();
    return Section;
  }
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  function get_Nav() {
    _init_properties_Elements_kt__eyv5nt();
    return Nav;
  }
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  function get_Main() {
    _init_properties_Elements_kt__eyv5nt();
    return Main;
  }
  var Main;
  function get_Footer() {
    _init_properties_Elements_kt__eyv5nt();
    return Footer;
  }
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  function get_Table() {
    _init_properties_Elements_kt__eyv5nt();
    return Table;
  }
  var Table;
  function get_Caption() {
    _init_properties_Elements_kt__eyv5nt();
    return Caption;
  }
  var Caption;
  function get_Col() {
    _init_properties_Elements_kt__eyv5nt();
    return Col;
  }
  var Col;
  function get_Colgroup() {
    _init_properties_Elements_kt__eyv5nt();
    return Colgroup;
  }
  var Colgroup;
  function get_Tr() {
    _init_properties_Elements_kt__eyv5nt();
    return Tr;
  }
  var Tr;
  function get_Thead() {
    _init_properties_Elements_kt__eyv5nt();
    return Thead;
  }
  var Thead;
  function get_Th() {
    _init_properties_Elements_kt__eyv5nt();
    return Th;
  }
  var Th;
  function get_Td() {
    _init_properties_Elements_kt__eyv5nt();
    return Td;
  }
  var Td;
  function get_Tbody() {
    _init_properties_Elements_kt__eyv5nt();
    return Tbody;
  }
  var Tbody;
  function get_Tfoot() {
    _init_properties_Elements_kt__eyv5nt();
    return Tfoot;
  }
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.buildersCache_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_15).get_buildersCache_c71wch_k$ = function () {
    return this.buildersCache_1;
  };
  protoOf(Companion_15).createBuilder_tabh5b_k$ = function (tagName) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tagLowercase = tagName.toLowerCase();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.buildersCache_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(tagLowercase);
    var tmp;
    if (value == null) {
      // Inline function 'org.jetbrains.compose.web.dom.Companion.createBuilder.<anonymous>' call
      var answer = new ElementBuilderImplementation(tagLowercase);
      tmp0_getOrPut.put_3mhbri_k$(tagLowercase, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function ElementBuilder() {
  }
  function _get_tagName__m9buy4($this) {
    return $this.tagName_1;
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    el$factory();
    return $this.el$delegate_1.get_value_j01efc_k$();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.tagName_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.tagName_1 = tagName;
    var tmp = this;
    tmp.el$delegate_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
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
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        var value_0 = Text$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value_0);
        tmp = value_0;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.get_applier_bupu8u_k$();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.startNode_htbzn7_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_2 = $composer_2;
        tmp_2.createNode_p4ouwd_k$(Text$composable$lambda_0(tmp0));
      } else {
        $composer_2.useNode_inlzo8_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var tmp3_anonymous = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp3_anonymous, value, Text$composable$lambda_1);
      $composer_2.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Text$composable$lambda_2(value, $changed));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input$composable(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1013116589);
    sourceInformation($composer_0, 'C(Input$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013116589, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable (Elements.kt:1054)');
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
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-1058148781);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_2.changed_ga7h3f_k$(type) | $composer_2.changed_ga7h3f_k$(keyForRestoringControlledState)) | $composer_2.changed_ga7h3f_k$(attrs));
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
        var value_0 = Input$composable$lambda(type, attrs, keyForRestoringControlledState);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 558133459, true, Input$composable$lambda_0(type, keyForRestoringControlledState));
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
      var tmp_6;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp_1, tmp_4, tmp0_1, $composer_0, 384);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Input$composable$lambda_1(type, attrs, $changed));
    }
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Ul$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-114341698);
    sourceInformation($composer_0, 'C(Ul$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Ul$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-456299496);
    sourceInformation($composer_0, 'C(Li$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Li$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(tmp0_remember$composable) | $composer_1.changed_ga7h3f_k$(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        var value = A$composable$lambda(href_0, attrs_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp, tmp0, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function TextArea$composable(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-577256683);
    sourceInformation($composer_0, 'C(TextArea$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.updateRememberedValue_l1colo_k$(value_1);
        tmp = value_1;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var firstProvidedValueWasNotNull = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.updateRememberedValue_l1colo_k$(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = [keyForRestoringControlledState, attrs_0._v, firstProvidedValueWasNotNull, value_0._v];
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = tmp2_remember$composable.length;
      while (inductionVariable < last) {
        var key = tmp2_remember$composable[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_3.changed_ga7h3f_k$(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
        var value_3 = TextArea$composable$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        $composer_3.updateRememberedValue_l1colo_k$(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var tmp_6 = tmp0_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 614898220, true, TextArea$composable$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_4.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_4.updateRememberedValue_l1colo_k$(value_4);
        tmp_8 = value_4;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_2 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp_3, tmp_6, tmp0_2, $composer_0, 384);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(TextArea$composable$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Label$composable(forId, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var forId_0 = {_v: forId};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-493483649);
    sourceInformation($composer_0, 'C(Label$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(forId_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(tmp0_remember$composable) | $composer_1.changed_ga7h3f_k$(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Label$composable.<anonymous>' call
        var value = Label$composable$lambda(forId_0, attrs_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp, tmp0, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Label$composable$lambda_0(forId_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Img$composable(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-878444342);
    sourceInformation($composer_0, 'C(Img$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_1.changed_ga7h3f_k$(src) | $composer_1.changed_ga7h3f_k$(tmp0_remember$composable)) | $composer_1.changed_ga7h3f_k$(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Img$composable.<anonymous>' call
        var value = Img$composable$lambda(src, alt_0, attrs_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp, tmp0, null, $composer_0, 384);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Img$composable$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Style$composable_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(tmp0_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        var value = Style$composable$lambda(applyAttrs_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_2 = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      TagElement$composable(tmp, tmp_2, tmp0_0, $composer_0, 384);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
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
    var tmp = $this$set.get_node_wor8sr_k$();
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
      $keyForRestoringControlledState.set_value_rnwamw_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function Input$composable$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type_0(inputAttrsBuilder, $type);
      inputAttrsBuilder.onInput_9lpwcz_k$(Input$composable$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3n44we_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.get_scopeElement_mn83kc_k$($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input$composable.<anonymous> (Elements.kt:1073)');
        }
        $composer_0.startReplaceableGroup_rp6air_k$(-1270925487);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect$composable($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.endReplaceableGroup_er37p7_k$();
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect$composable(tmp_1, Input$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
  function Input$composable$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input$composable($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
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
  function TextArea$composable$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.set_value_rnwamw_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function TextArea$composable$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.onInput_3q4ryq_k$(TextArea$composable$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.value_h8ym4w_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3n44we_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$composable$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.get_scopeElement_mn83kc_k$($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $changed, -1, 'org.jetbrains.compose.web.dom.TextArea$composable.<anonymous> (Elements.kt:754)');
        }
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect$composable(tmp_1, TextArea$composable$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
    this.$cssStylesheet_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3n44we_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$cssStylesheet_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.get_scopeElement_mn83kc_k$($this$DisposableEffect).sheet;
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.get_size_woubt6_k$();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
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
  function CheckboxInput$composable(checked, attrs, $composer, $changed, $default) {
    var checked_0 = {_v: checked};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-535733644);
    sourceInformation($composer_0, 'C(CheckboxInput$composable)P(1)');
    if (!(($default & 1) === 0)) {
      checked_0._v = false;
    }
    if (!(($default & 2) === 0)) {
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
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.CheckboxInput$composable.<anonymous>' call
        var value = CheckboxInput$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      attrs_0._v = tmp0;
    }
    if (isTraceInProgress()) {
      traceEventStart(-535733644, $changed, -1, 'org.jetbrains.compose.web.dom.CheckboxInput$composable (InputElements.kt:24)');
    }
    var tmp_1 = Checkbox_getInstance();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = checked_0._v;
    var tmp2_remember$composable = attrs_0._v;
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_2.changed_ga7h3f_k$(tmp1_remember$composable) | $composer_2.changed_ga7h3f_k$(tmp2_remember$composable));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_2;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.web.dom.CheckboxInput$composable.<anonymous>' call
      var value_0 = CheckboxInput$composable$lambda_0(checked_0, attrs_0);
      $composer_2.updateRememberedValue_l1colo_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = tmp0_let_0;
    }
    var tmp_3 = tmp_2;
    var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    $composer_2.endReplaceableGroup_er37p7_k$();
    Input$composable(tmp_1, tmp0_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function CheckboxInput$composable$lambda($this$null) {
    return Unit_getInstance();
  }
  function CheckboxInput$composable$lambda_0($checked, $attrs) {
    return function ($this$Input) {
      $this$Input.checked_sfde8d_k$($checked._v);
      $attrs._v($this$Input);
      return Unit_getInstance();
    };
  }
  function get_radioGroupScopeImpl() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupScopeImpl;
  }
  var radioGroupScopeImpl;
  function set_generatedRadioGroupNamesCounter(_set____db54di) {
    _init_properties_RadioGroup_kt__a2rbj8();
    generatedRadioGroupNamesCounter = _set____db54di;
  }
  function get_generatedRadioGroupNamesCounter() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return generatedRadioGroupNamesCounter;
  }
  var generatedRadioGroupNamesCounter;
  function get_radioGroupCompositionLocalValue() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalValue;
  }
  var radioGroupCompositionLocalValue;
  function get_radioGroupCompositionLocalName() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalName;
  }
  var radioGroupCompositionLocalName;
  function get_$stableprop_76() {
    return 0;
  }
  function RadioGroupScope() {
    this.$stable_1 = 0;
  }
  function radioGroupCompositionLocalValue$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    throw IllegalStateException_init_$Create$('No radio group checked value provided');
  }
  function radioGroupCompositionLocalName$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    throw IllegalStateException_init_$Create$('No radio group name provided');
  }
  var properties_initialized_RadioGroup_kt_um4oue;
  function _init_properties_RadioGroup_kt__a2rbj8() {
    if (!properties_initialized_RadioGroup_kt_um4oue) {
      properties_initialized_RadioGroup_kt_um4oue = true;
      radioGroupScopeImpl = new RadioGroupScope();
      generatedRadioGroupNamesCounter = 0;
      radioGroupCompositionLocalValue = compositionLocalOf(VOID, radioGroupCompositionLocalValue$lambda);
      radioGroupCompositionLocalName = compositionLocalOf(VOID, radioGroupCompositionLocalName$lambda);
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
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
      var tmp0_iterator = cssRuleDeclaration.get_style_iyqetk_k$().get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.get_style_iyqetk_k$().get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.get_rules_iy6zf2_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.get_keys_wop4xp_k$().iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
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
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
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
  function get_$stableprop_77() {
    return 0;
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.animationName_1 = animationEventDetails.animationName;
    this.elapsedTime_1 = animationEventDetails.elapsedTime;
    this.pseudoElement_1 = animationEventDetails.pseudoElement;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticAnimationEvent).get_animationName_wdgkxy_k$ = function () {
    return this.animationName_1;
  };
  protoOf(SyntheticAnimationEvent).get_elapsedTime_5vfaps_k$ = function () {
    return this.elapsedTime_1;
  };
  protoOf(SyntheticAnimationEvent).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  function get_$stableprop_78() {
    return 0;
  }
  function SyntheticChangeEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticChangeEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_79() {
    return 0;
  }
  function SyntheticClipboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.clipboardData_1 = nativeEvent.clipboardData;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticClipboardEvent).get_clipboardData_2lw3zr_k$ = function () {
    return this.clipboardData_1;
  };
  protoOf(SyntheticClipboardEvent).getData_te36zl_k$ = function (format) {
    var tmp0_safe_receiver = this.clipboardData_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getData(format);
  };
  protoOf(SyntheticClipboardEvent).setData_yk746f_k$ = function (format, data) {
    var tmp0_safe_receiver = this.clipboardData_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setData(format, data);
    }
  };
  function get_$stableprop_80() {
    return 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.nativeEvent_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.target_1 = this.nativeEvent_1.target;
    this.bubbles_1 = this.nativeEvent_1.bubbles;
    this.cancelable_1 = this.nativeEvent_1.cancelable;
    this.composed_1 = this.nativeEvent_1.composed;
    this.currentTarget_1 = this.nativeEvent_1.currentTarget;
    this.eventPhase_1 = this.nativeEvent_1.eventPhase;
    this.defaultPrevented_1 = this.nativeEvent_1.defaultPrevented;
    this.timestamp_1 = this.nativeEvent_1.timeStamp;
    this.type_1 = this.nativeEvent_1.type;
    this.isTrusted_1 = this.nativeEvent_1.isTrusted;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEvent).get_nativeEvent_skldba_k$ = function () {
    return this.nativeEvent_1;
  };
  protoOf(SyntheticEvent).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(SyntheticEvent).get_bubbles_4z13zy_k$ = function () {
    return this.bubbles_1;
  };
  protoOf(SyntheticEvent).get_cancelable_b2ewrh_k$ = function () {
    return this.cancelable_1;
  };
  protoOf(SyntheticEvent).get_composed_tbcbff_k$ = function () {
    return this.composed_1;
  };
  protoOf(SyntheticEvent).get_currentTarget_yyne0v_k$ = function () {
    return this.currentTarget_1;
  };
  protoOf(SyntheticEvent).get_eventPhase_44nj3q_k$ = function () {
    return this.eventPhase_1;
  };
  protoOf(SyntheticEvent).get_defaultPrevented_umrpc1_k$ = function () {
    return this.defaultPrevented_1;
  };
  protoOf(SyntheticEvent).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(SyntheticEvent).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(SyntheticEvent).get_isTrusted_ievk1o_k$ = function () {
    return this.isTrusted_1;
  };
  protoOf(SyntheticEvent).preventDefault_xrmx2w_k$ = function () {
    return this.nativeEvent_1.preventDefault();
  };
  protoOf(SyntheticEvent).stopPropagation_5pvg9l_k$ = function () {
    return this.nativeEvent_1.stopPropagation();
  };
  protoOf(SyntheticEvent).stopImmediatePropagation_zaplik_k$ = function () {
    return this.nativeEvent_1.stopImmediatePropagation();
  };
  protoOf(SyntheticEvent).composedPath_62fnop_k$ = function () {
    return this.nativeEvent_1.composedPath();
  };
  function get_$stableprop_81() {
    return 0;
  }
  function SyntheticFocusEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticFocusEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  function get_$stableprop_82() {
    return 0;
  }
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
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
    tmp.data_1 = tmp_0;
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
    tmp_1.dataTransfer_1 = tmp_2;
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
    tmp_3.inputType_1 = tmp_4;
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
    tmp_5.isComposing_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticInputEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SyntheticInputEvent).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(SyntheticInputEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  protoOf(SyntheticInputEvent).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(SyntheticInputEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  function get_normalizedKeys() {
    _init_properties_SyntheticKeyboardEvent_kt__tcvd9u();
    return normalizedKeys;
  }
  var normalizedKeys;
  function _get_keyboardEvent__g732rm($this) {
    return $this.keyboardEvent_1;
  }
  function get_$stableprop_83() {
    return 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.keyboardEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.code_1 = nativeEvent.code;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.isComposing_1 = nativeEvent.isComposing;
    this.key_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.locale_1 = toString(nativeEvent.locale);
    this.location_1 = nativeEvent.location;
    this.metaKey_1 = nativeEvent.metaKey;
    this.repeat_1 = nativeEvent.repeat;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticKeyboardEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(SyntheticKeyboardEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  protoOf(SyntheticKeyboardEvent).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SyntheticKeyboardEvent).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(SyntheticKeyboardEvent).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  protoOf(SyntheticKeyboardEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  protoOf(SyntheticKeyboardEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticKeyboardEvent).getModifierState_x471tv_k$ = function (keyArg) {
    return this.keyboardEvent_1.getModifierState(keyArg);
  };
  protoOf(SyntheticKeyboardEvent).getNormalizedKey_tfr8s2_k$ = function () {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.key_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.compose.web.events.SyntheticKeyboardEvent.getNormalizedKey.<anonymous>' call
    var tmp0_elvis_lhs = get_normalizedKeys().get_1mhr4y_k$(tmp0_let);
    return tmp0_elvis_lhs == null ? tmp0_let : tmp0_elvis_lhs;
  };
  var properties_initialized_SyntheticKeyboardEvent_kt_z9adjk;
  function _init_properties_SyntheticKeyboardEvent_kt__tcvd9u() {
    if (!properties_initialized_SyntheticKeyboardEvent_kt_z9adjk) {
      properties_initialized_SyntheticKeyboardEvent_kt_z9adjk = true;
      normalizedKeys = mapOf([to('Esc', 'Escape'), to('Spacebar', ' '), to('Left', 'ArrowLeft'), to('Up', 'ArrowUp'), to('Right', 'ArrowRight'), to('Down', 'ArrowDown'), to('Del', 'Delete'), to('Apps', 'ContextMenu'), to('Menu', 'ContextMenu'), to('Scroll', 'ScrollLock'), to('MozPrintableKey', 'Unidentified')]);
    }
  }
  function _get_mouseEvent__o09ya2($this) {
    return $this.mouseEvent_1;
  }
  function get_$stableprop_84() {
    return 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.mouseEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.button_1 = nativeEvent.button;
    this.buttons_1 = nativeEvent.buttons;
    this.clientX_1 = nativeEvent.clientX;
    this.clientY_1 = nativeEvent.clientY;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.movementX_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.movementY_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.offsetX_1 = nativeEvent.offsetX;
    this.offsetY_1 = nativeEvent.offsetY;
    this.pageX_1 = nativeEvent.pageX;
    this.pageY_1 = nativeEvent.pageY;
    this.region_1 = nativeEvent.region;
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.screenX_1 = nativeEvent.screenX;
    this.screenY_1 = nativeEvent.screenY;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.x_1 = nativeEvent.x;
    this.y_1 = nativeEvent.y;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticMouseEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticMouseEvent).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(SyntheticMouseEvent).get_buttons_598yvs_k$ = function () {
    return this.buttons_1;
  };
  protoOf(SyntheticMouseEvent).get_clientX_fhxblw_k$ = function () {
    return this.clientX_1;
  };
  protoOf(SyntheticMouseEvent).get_clientY_fhxblx_k$ = function () {
    return this.clientY_1;
  };
  protoOf(SyntheticMouseEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticMouseEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticMouseEvent).get_movementX_qe3gf4_k$ = function () {
    return this.movementX_1;
  };
  protoOf(SyntheticMouseEvent).get_movementY_qe3gf5_k$ = function () {
    return this.movementY_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(SyntheticMouseEvent).get_pageX_iwqirk_k$ = function () {
    return this.pageX_1;
  };
  protoOf(SyntheticMouseEvent).get_pageY_iwqirl_k$ = function () {
    return this.pageY_1;
  };
  protoOf(SyntheticMouseEvent).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(SyntheticMouseEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  protoOf(SyntheticMouseEvent).get_screenX_x4h283_k$ = function () {
    return this.screenX_1;
  };
  protoOf(SyntheticMouseEvent).get_screenY_x4h284_k$ = function () {
    return this.screenY_1;
  };
  protoOf(SyntheticMouseEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticMouseEvent).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(SyntheticMouseEvent).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(SyntheticMouseEvent).getModifierState_x471tv_k$ = function (keyArg) {
    return this.mouseEvent_1.getModifierState(keyArg);
  };
  function get_$stableprop_85() {
    return 0;
  }
  function SyntheticDragEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.dataTransfer_1 = nativeEvent.dataTransfer;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticDragEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  function get_$stableprop_86() {
    return 0;
  }
  function SyntheticWheelEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.deltaX_1 = nativeEvent.deltaX;
    this.deltaY_1 = nativeEvent.deltaY;
    this.deltaZ_1 = nativeEvent.deltaZ;
    this.deltaMode_1 = nativeEvent.deltaMode;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticWheelEvent).get_deltaX_cboxwp_k$ = function () {
    return this.deltaX_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaY_cboxwq_k$ = function () {
    return this.deltaY_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaZ_cboxwr_k$ = function () {
    return this.deltaZ_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaMode_9dro42_k$ = function () {
    return this.deltaMode_1;
  };
  function get_$stableprop_87() {
    return 0;
  }
  function SyntheticSelectEvent(nativeEvent, selectionInfoDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.selectionStart_1 = selectionInfoDetails.selectionStart;
    this.selectionEnd_1 = selectionInfoDetails.selectionEnd;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticSelectEvent).get_selectionStart_1zskht_k$ = function () {
    return this.selectionStart_1;
  };
  protoOf(SyntheticSelectEvent).get_selectionEnd_mebxu0_k$ = function () {
    return this.selectionEnd_1;
  };
  protoOf(SyntheticSelectEvent).selection_sdn3hw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = this.get_nativeEvent_skldba_k$().target.value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = this.selectionStart_1;
      var tmp3_substring = this.selectionEnd_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver.substring(tmp2_substring, tmp3_substring);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  };
  function get_$stableprop_88() {
    return 0;
  }
  function SyntheticTouchEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.altKey_1 = nativeEvent.altKey;
    this.changedTouches_1 = nativeEvent.changedTouches;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.touches_1 = nativeEvent.touches;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticTouchEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticTouchEvent).get_changedTouches_6cqbxe_k$ = function () {
    return this.changedTouches_1;
  };
  protoOf(SyntheticTouchEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticTouchEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticTouchEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticTouchEvent).get_touches_hi32yk_k$ = function () {
    return this.touches_1;
  };
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).id_xxyy5i_k$ = id;
  protoOf(AttrsScopeBuilder).hidden_k4uzbq_k$ = hidden;
  protoOf(AttrsScopeBuilder).title_898wkp_k$ = title;
  protoOf(AttrsScopeBuilder).dir_9tgcjq_k$ = dir;
  protoOf(AttrsScopeBuilder).draggable_ghcstc_k$ = draggable;
  protoOf(AttrsScopeBuilder).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(AttrsScopeBuilder).lang_xkki7h_k$ = lang;
  protoOf(AttrsScopeBuilder).tabIndex_coguxw_k$ = tabIndex;
  protoOf(AttrsScopeBuilder).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(AttrsScopeBuilder).inputMode_q3xdho_k$ = inputMode;
  protoOf(AttrsScopeBuilder).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(EventsListenerScopeBuilder).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(EventsListenerScopeBuilder).onClick_3adsri_k$ = onClick;
  protoOf(EventsListenerScopeBuilder).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(EventsListenerScopeBuilder).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(EventsListenerScopeBuilder).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(EventsListenerScopeBuilder).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(EventsListenerScopeBuilder).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(EventsListenerScopeBuilder).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(EventsListenerScopeBuilder).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(EventsListenerScopeBuilder).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(EventsListenerScopeBuilder).onWheel_cg2j2t_k$ = onWheel;
  protoOf(EventsListenerScopeBuilder).onDrag_vg0lyh_k$ = onDrag;
  protoOf(EventsListenerScopeBuilder).onDrop_3mkg4y_k$ = onDrop;
  protoOf(EventsListenerScopeBuilder).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(EventsListenerScopeBuilder).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(EventsListenerScopeBuilder).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(EventsListenerScopeBuilder).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(EventsListenerScopeBuilder).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(EventsListenerScopeBuilder).onCopy_takkx5_k$ = onCopy;
  protoOf(EventsListenerScopeBuilder).onCut_ol4js_k$ = onCut;
  protoOf(EventsListenerScopeBuilder).onPaste_rubsh5_k$ = onPaste;
  protoOf(EventsListenerScopeBuilder).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(EventsListenerScopeBuilder).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(EventsListenerScopeBuilder).onFocus_f0s6pg_k$ = onFocus;
  protoOf(EventsListenerScopeBuilder).onBlur_jks72x_k$ = onBlur;
  protoOf(EventsListenerScopeBuilder).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(EventsListenerScopeBuilder).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(EventsListenerScopeBuilder).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(EventsListenerScopeBuilder).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(EventsListenerScopeBuilder).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(EventsListenerScopeBuilder).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(EventsListenerScopeBuilder).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(EventsListenerScopeBuilder).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(EventsListenerScopeBuilder).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(EventsListenerScopeBuilder).onScroll_3uphub_k$ = onScroll;
  protoOf(EventsListenerScopeBuilder).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(EventsListenerScopeBuilder).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(StyleScopeBuilder).property_ze5ozi_k$ = property;
  protoOf(StyleScopeBuilder).property_nit37e_k$ = property_0;
  protoOf(StyleScopeBuilder).variable_d7dn6f_k$ = variable;
  protoOf(StyleScopeBuilder).variable_pbiwyn_k$ = variable_0;
  protoOf(StyleScopeBuilder).invoke_ie9e5n_k$ = invoke;
  protoOf(StyleScopeBuilder).invoke_49si7m_k$ = invoke_0;
  protoOf(StyleScopeBuilder).invoke_tbupf6_k$ = invoke_1;
  protoOf(CSSRuleBuilderImpl).property_ze5ozi_k$ = property;
  protoOf(CSSRuleBuilderImpl).property_nit37e_k$ = property_0;
  protoOf(CSSRuleBuilderImpl).variable_d7dn6f_k$ = variable;
  protoOf(CSSRuleBuilderImpl).variable_pbiwyn_k$ = variable_0;
  protoOf(CSSRuleBuilderImpl).invoke_ie9e5n_k$ = invoke;
  protoOf(CSSRuleBuilderImpl).invoke_49si7m_k$ = invoke_0;
  protoOf(CSSRuleBuilderImpl).invoke_tbupf6_k$ = invoke_1;
  protoOf(CSSBuilderImpl).property_ze5ozi_k$ = property;
  protoOf(CSSBuilderImpl).property_nit37e_k$ = property_0;
  protoOf(CSSBuilderImpl).variable_d7dn6f_k$ = variable;
  protoOf(CSSBuilderImpl).variable_pbiwyn_k$ = variable_0;
  protoOf(CSSBuilderImpl).invoke_ie9e5n_k$ = invoke;
  protoOf(CSSBuilderImpl).invoke_49si7m_k$ = invoke_0;
  protoOf(CSSBuilderImpl).invoke_tbupf6_k$ = invoke_1;
  protoOf(CSSBuilderImpl).invoke_qvgdhg_k$ = invoke_2;
  protoOf(CSSBuilderImpl).invoke_wa7zhx_k$ = invoke_3;
  protoOf(CSSBuilderImpl).style_5otx79_k$ = style;
  protoOf(CSSBuilderImpl).style_68ppe6_k$ = style_0;
  protoOf(CSSBuilderImpl).selector_vsua3m_k$ = selector;
  protoOf(CSSBuilderImpl).combine_75bnet_k$ = combine;
  protoOf(CSSBuilderImpl).plus_nlz2mk_k$ = plus;
  protoOf(CSSBuilderImpl).plus_85zybx_k$ = plus_0;
  protoOf(CSSBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(CSSBuilderImpl).get_universal_1qp21u_k$ = get_universal;
  protoOf(CSSBuilderImpl).type_gwc96h_k$ = type;
  protoOf(CSSBuilderImpl).className_ykinvi_k$ = className;
  protoOf(CSSBuilderImpl).id_xxyy5i_k$ = id_0;
  protoOf(CSSBuilderImpl).attr_8c4xcm_k$ = attr;
  protoOf(CSSBuilderImpl).attr$default_c3gqj1_k$ = attr$default;
  protoOf(CSSBuilderImpl).attrEquals_ekinah_k$ = attrEquals;
  protoOf(CSSBuilderImpl).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(CSSBuilderImpl).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(CSSBuilderImpl).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(CSSBuilderImpl).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(CSSBuilderImpl).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(CSSBuilderImpl).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(CSSBuilderImpl).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(CSSBuilderImpl).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(CSSBuilderImpl).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(CSSBuilderImpl).attrContains_2muovr_k$ = attrContains;
  protoOf(CSSBuilderImpl).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(CSSBuilderImpl).group_po2tbv_k$ = group;
  protoOf(CSSBuilderImpl).descendant_x63x3d_k$ = descendant;
  protoOf(CSSBuilderImpl).desc_ej3sir_k$ = desc;
  protoOf(CSSBuilderImpl).desc_8daddi_k$ = desc_0;
  protoOf(CSSBuilderImpl).desc_npizau_k$ = desc_1;
  protoOf(CSSBuilderImpl).desc_w7b77z_k$ = desc_2;
  protoOf(CSSBuilderImpl).child_4w4v4o_k$ = child;
  protoOf(CSSBuilderImpl).sibling_tzh2by_k$ = sibling;
  protoOf(CSSBuilderImpl).adjacent_gxbr7y_k$ = adjacent;
  protoOf(CSSBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(CSSBuilderImpl).hover_gby0bi_k$ = hover;
  protoOf(CSSBuilderImpl).get_hover_islez7_k$ = get_hover;
  protoOf(CSSBuilderImpl).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(CSSBuilderImpl).get_link_wopumb_k$ = get_link;
  protoOf(CSSBuilderImpl).get_visited_8zg8qp_k$ = get_visited;
  protoOf(CSSBuilderImpl).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(CSSBuilderImpl).get_target_juba8q_k$ = get_target;
  protoOf(CSSBuilderImpl).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(CSSBuilderImpl).get_scope_iyfcq3_k$ = get_scope;
  protoOf(CSSBuilderImpl).get_active_avldsf_k$ = get_active;
  protoOf(CSSBuilderImpl).get_focus_irhg33_k$ = get_focus;
  protoOf(CSSBuilderImpl).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(CSSBuilderImpl).get_playing_6wau9n_k$ = get_playing;
  protoOf(CSSBuilderImpl).get_paused_hy6yif_k$ = get_paused;
  protoOf(CSSBuilderImpl).get_autofill_801dad_k$ = get_autofill;
  protoOf(CSSBuilderImpl).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(CSSBuilderImpl).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(CSSBuilderImpl).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(CSSBuilderImpl).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(CSSBuilderImpl).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(CSSBuilderImpl).get_default_qtagd4_k$ = get_default;
  protoOf(CSSBuilderImpl).get_checked_djib3y_k$ = get_checked;
  protoOf(CSSBuilderImpl).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(CSSBuilderImpl).get_blank_ip8b3f_k$ = get_blank;
  protoOf(CSSBuilderImpl).get_valid_j01e4z_k$ = get_valid;
  protoOf(CSSBuilderImpl).get_invalid_xocxse_k$ = get_invalid;
  protoOf(CSSBuilderImpl).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(CSSBuilderImpl).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(CSSBuilderImpl).get_required_wq3z3c_k$ = get_required;
  protoOf(CSSBuilderImpl).get_optional_x3zcnr_k$ = get_optional;
  protoOf(CSSBuilderImpl).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(CSSBuilderImpl).get_root_wott0r_k$ = get_root;
  protoOf(CSSBuilderImpl).get_empty_iqwn50_k$ = get_empty;
  protoOf(CSSBuilderImpl).get_first_irdx8n_k$ = get_first;
  protoOf(CSSBuilderImpl).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(CSSBuilderImpl).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(CSSBuilderImpl).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(CSSBuilderImpl).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(CSSBuilderImpl).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(CSSBuilderImpl).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(CSSBuilderImpl).get_host_wonf8x_k$ = get_host;
  protoOf(CSSBuilderImpl).host_93x8z6_k$ = host;
  protoOf(CSSBuilderImpl).get_defined_qtfew0_k$ = get_defined;
  protoOf(CSSBuilderImpl).get_left_woprgw_k$ = get_left;
  protoOf(CSSBuilderImpl).get_right_ixz7xv_k$ = get_right;
  protoOf(CSSBuilderImpl).lang_xkki7h_k$ = lang_0;
  protoOf(CSSBuilderImpl).nthChild_tigwrk_k$ = nthChild;
  protoOf(CSSBuilderImpl).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(CSSBuilderImpl).nthOfType_n46p53_k$ = nthOfType;
  protoOf(CSSBuilderImpl).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(CSSBuilderImpl).not_di0wzr_k$ = not;
  protoOf(CSSBuilderImpl).get_after_iol2gj_k$ = get_after;
  protoOf(CSSBuilderImpl).get_before_bdhrwo_k$ = get_before;
  protoOf(CSSBuilderImpl).get_cue_18j7sm_k$ = get_cue;
  protoOf(CSSBuilderImpl).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(CSSBuilderImpl).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(CSSBuilderImpl).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(CSSBuilderImpl).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(CSSBuilderImpl).get_selection_jv4aal_k$ = get_selection;
  protoOf(CSSBuilderImpl).slotted_iujblx_k$ = slotted;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.get_value_j01efc_k$();
  }, VOID);
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.get_unit_wovp3h_k$();
  }, VOID);
  protoOf(StyleSheet).style_4edtvi_k$ = style_1;
  protoOf(StyleSheet).style_5otx79_k$ = style;
  protoOf(StyleSheet).style_68ppe6_k$ = style_0;
  protoOf(StyleSheet).invoke_qvgdhg_k$ = invoke_2;
  protoOf(StyleSheet).invoke_wa7zhx_k$ = invoke_3;
  protoOf(StyleSheet).selector_vsua3m_k$ = selector;
  protoOf(StyleSheet).combine_75bnet_k$ = combine;
  protoOf(StyleSheet).plus_nlz2mk_k$ = plus;
  protoOf(StyleSheet).plus_85zybx_k$ = plus_0;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(StyleSheet).type_gwc96h_k$ = type;
  protoOf(StyleSheet).className_ykinvi_k$ = className;
  protoOf(StyleSheet).id_xxyy5i_k$ = id_0;
  protoOf(StyleSheet).attr_8c4xcm_k$ = attr;
  protoOf(StyleSheet).attr$default_c3gqj1_k$ = attr$default;
  protoOf(StyleSheet).attrEquals_ekinah_k$ = attrEquals;
  protoOf(StyleSheet).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(StyleSheet).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(StyleSheet).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(StyleSheet).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(StyleSheet).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(StyleSheet).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(StyleSheet).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(StyleSheet).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(StyleSheet).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(StyleSheet).attrContains_2muovr_k$ = attrContains;
  protoOf(StyleSheet).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(StyleSheet).group_po2tbv_k$ = group;
  protoOf(StyleSheet).descendant_x63x3d_k$ = descendant;
  protoOf(StyleSheet).desc_ej3sir_k$ = desc;
  protoOf(StyleSheet).desc_8daddi_k$ = desc_0;
  protoOf(StyleSheet).desc_npizau_k$ = desc_1;
  protoOf(StyleSheet).desc_w7b77z_k$ = desc_2;
  protoOf(StyleSheet).child_4w4v4o_k$ = child;
  protoOf(StyleSheet).sibling_tzh2by_k$ = sibling;
  protoOf(StyleSheet).adjacent_gxbr7y_k$ = adjacent;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).hover_gby0bi_k$ = hover;
  protoOf(StyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(StyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(StyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(StyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(StyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(StyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(StyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(StyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(StyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(StyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(StyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(StyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(StyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(StyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(StyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(StyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(StyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(StyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(StyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(StyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(StyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(StyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(StyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(StyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(StyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(StyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(StyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(StyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(StyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(StyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(StyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(StyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(StyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(StyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(StyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(StyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(StyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(StyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(StyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(StyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(StyleSheet).host_93x8z6_k$ = host;
  protoOf(StyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(StyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(StyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(StyleSheet).lang_xkki7h_k$ = lang_0;
  protoOf(StyleSheet).nthChild_tigwrk_k$ = nthChild;
  protoOf(StyleSheet).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(StyleSheet).nthOfType_n46p53_k$ = nthOfType;
  protoOf(StyleSheet).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(StyleSheet).not_di0wzr_k$ = not;
  protoOf(StyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(StyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(StyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(StyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(StyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(StyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(StyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(StyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(StyleSheet).slotted_iujblx_k$ = slotted;
  protoOf(CSSRulesHolderState).add_6geiun_k$ = add;
  protoOf(StyleSheetBuilderImpl).style_4edtvi_k$ = style_1;
  protoOf(StyleSheetBuilderImpl).style_5otx79_k$ = style;
  protoOf(StyleSheetBuilderImpl).style_68ppe6_k$ = style_0;
  protoOf(StyleSheetBuilderImpl).add_6geiun_k$ = add;
  protoOf(StyleSheetBuilderImpl).invoke_qvgdhg_k$ = invoke_2;
  protoOf(StyleSheetBuilderImpl).invoke_wa7zhx_k$ = invoke_3;
  protoOf(StyleSheetBuilderImpl).selector_vsua3m_k$ = selector;
  protoOf(StyleSheetBuilderImpl).combine_75bnet_k$ = combine;
  protoOf(StyleSheetBuilderImpl).plus_nlz2mk_k$ = plus;
  protoOf(StyleSheetBuilderImpl).plus_85zybx_k$ = plus_0;
  protoOf(StyleSheetBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheetBuilderImpl).get_universal_1qp21u_k$ = get_universal;
  protoOf(StyleSheetBuilderImpl).type_gwc96h_k$ = type;
  protoOf(StyleSheetBuilderImpl).className_ykinvi_k$ = className;
  protoOf(StyleSheetBuilderImpl).id_xxyy5i_k$ = id_0;
  protoOf(StyleSheetBuilderImpl).attr_8c4xcm_k$ = attr;
  protoOf(StyleSheetBuilderImpl).attr$default_c3gqj1_k$ = attr$default;
  protoOf(StyleSheetBuilderImpl).attrEquals_ekinah_k$ = attrEquals;
  protoOf(StyleSheetBuilderImpl).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(StyleSheetBuilderImpl).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(StyleSheetBuilderImpl).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(StyleSheetBuilderImpl).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(StyleSheetBuilderImpl).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(StyleSheetBuilderImpl).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(StyleSheetBuilderImpl).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(StyleSheetBuilderImpl).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(StyleSheetBuilderImpl).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(StyleSheetBuilderImpl).attrContains_2muovr_k$ = attrContains;
  protoOf(StyleSheetBuilderImpl).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(StyleSheetBuilderImpl).group_po2tbv_k$ = group;
  protoOf(StyleSheetBuilderImpl).descendant_x63x3d_k$ = descendant;
  protoOf(StyleSheetBuilderImpl).desc_ej3sir_k$ = desc;
  protoOf(StyleSheetBuilderImpl).desc_8daddi_k$ = desc_0;
  protoOf(StyleSheetBuilderImpl).desc_npizau_k$ = desc_1;
  protoOf(StyleSheetBuilderImpl).desc_w7b77z_k$ = desc_2;
  protoOf(StyleSheetBuilderImpl).child_4w4v4o_k$ = child;
  protoOf(StyleSheetBuilderImpl).sibling_tzh2by_k$ = sibling;
  protoOf(StyleSheetBuilderImpl).adjacent_gxbr7y_k$ = adjacent;
  protoOf(StyleSheetBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheetBuilderImpl).hover_gby0bi_k$ = hover;
  protoOf(StyleSheetBuilderImpl).get_hover_islez7_k$ = get_hover;
  protoOf(StyleSheetBuilderImpl).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(StyleSheetBuilderImpl).get_link_wopumb_k$ = get_link;
  protoOf(StyleSheetBuilderImpl).get_visited_8zg8qp_k$ = get_visited;
  protoOf(StyleSheetBuilderImpl).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(StyleSheetBuilderImpl).get_target_juba8q_k$ = get_target;
  protoOf(StyleSheetBuilderImpl).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(StyleSheetBuilderImpl).get_scope_iyfcq3_k$ = get_scope;
  protoOf(StyleSheetBuilderImpl).get_active_avldsf_k$ = get_active;
  protoOf(StyleSheetBuilderImpl).get_focus_irhg33_k$ = get_focus;
  protoOf(StyleSheetBuilderImpl).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(StyleSheetBuilderImpl).get_playing_6wau9n_k$ = get_playing;
  protoOf(StyleSheetBuilderImpl).get_paused_hy6yif_k$ = get_paused;
  protoOf(StyleSheetBuilderImpl).get_autofill_801dad_k$ = get_autofill;
  protoOf(StyleSheetBuilderImpl).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(StyleSheetBuilderImpl).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(StyleSheetBuilderImpl).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(StyleSheetBuilderImpl).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(StyleSheetBuilderImpl).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(StyleSheetBuilderImpl).get_default_qtagd4_k$ = get_default;
  protoOf(StyleSheetBuilderImpl).get_checked_djib3y_k$ = get_checked;
  protoOf(StyleSheetBuilderImpl).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(StyleSheetBuilderImpl).get_blank_ip8b3f_k$ = get_blank;
  protoOf(StyleSheetBuilderImpl).get_valid_j01e4z_k$ = get_valid;
  protoOf(StyleSheetBuilderImpl).get_invalid_xocxse_k$ = get_invalid;
  protoOf(StyleSheetBuilderImpl).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(StyleSheetBuilderImpl).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(StyleSheetBuilderImpl).get_required_wq3z3c_k$ = get_required;
  protoOf(StyleSheetBuilderImpl).get_optional_x3zcnr_k$ = get_optional;
  protoOf(StyleSheetBuilderImpl).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(StyleSheetBuilderImpl).get_root_wott0r_k$ = get_root;
  protoOf(StyleSheetBuilderImpl).get_empty_iqwn50_k$ = get_empty;
  protoOf(StyleSheetBuilderImpl).get_first_irdx8n_k$ = get_first;
  protoOf(StyleSheetBuilderImpl).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(StyleSheetBuilderImpl).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(StyleSheetBuilderImpl).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(StyleSheetBuilderImpl).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(StyleSheetBuilderImpl).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(StyleSheetBuilderImpl).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(StyleSheetBuilderImpl).get_host_wonf8x_k$ = get_host;
  protoOf(StyleSheetBuilderImpl).host_93x8z6_k$ = host;
  protoOf(StyleSheetBuilderImpl).get_defined_qtfew0_k$ = get_defined;
  protoOf(StyleSheetBuilderImpl).get_left_woprgw_k$ = get_left;
  protoOf(StyleSheetBuilderImpl).get_right_ixz7xv_k$ = get_right;
  protoOf(StyleSheetBuilderImpl).lang_xkki7h_k$ = lang_0;
  protoOf(StyleSheetBuilderImpl).nthChild_tigwrk_k$ = nthChild;
  protoOf(StyleSheetBuilderImpl).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(StyleSheetBuilderImpl).nthOfType_n46p53_k$ = nthOfType;
  protoOf(StyleSheetBuilderImpl).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(StyleSheetBuilderImpl).not_di0wzr_k$ = not;
  protoOf(StyleSheetBuilderImpl).get_after_iol2gj_k$ = get_after;
  protoOf(StyleSheetBuilderImpl).get_before_bdhrwo_k$ = get_before;
  protoOf(StyleSheetBuilderImpl).get_cue_18j7sm_k$ = get_cue;
  protoOf(StyleSheetBuilderImpl).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(StyleSheetBuilderImpl).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(StyleSheetBuilderImpl).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(StyleSheetBuilderImpl).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(StyleSheetBuilderImpl).get_selection_jv4aal_k$ = get_selection;
  protoOf(StyleSheetBuilderImpl).slotted_iujblx_k$ = slotted;
  protoOf(selectorScope$1).selector_vsua3m_k$ = selector;
  protoOf(selectorScope$1).combine_75bnet_k$ = combine;
  protoOf(selectorScope$1).plus_nlz2mk_k$ = plus;
  protoOf(selectorScope$1).plus_85zybx_k$ = plus_0;
  protoOf(selectorScope$1).returnUniversalSelector = returnUniversalSelector;
  protoOf(selectorScope$1).get_universal_1qp21u_k$ = get_universal;
  protoOf(selectorScope$1).type_gwc96h_k$ = type;
  protoOf(selectorScope$1).className_ykinvi_k$ = className;
  protoOf(selectorScope$1).id_xxyy5i_k$ = id_0;
  protoOf(selectorScope$1).attr_8c4xcm_k$ = attr;
  protoOf(selectorScope$1).attr$default_c3gqj1_k$ = attr$default;
  protoOf(selectorScope$1).attrEquals_ekinah_k$ = attrEquals;
  protoOf(selectorScope$1).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(selectorScope$1).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(selectorScope$1).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(selectorScope$1).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(selectorScope$1).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(selectorScope$1).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(selectorScope$1).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(selectorScope$1).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(selectorScope$1).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(selectorScope$1).attrContains_2muovr_k$ = attrContains;
  protoOf(selectorScope$1).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(selectorScope$1).group_po2tbv_k$ = group;
  protoOf(selectorScope$1).descendant_x63x3d_k$ = descendant;
  protoOf(selectorScope$1).desc_ej3sir_k$ = desc;
  protoOf(selectorScope$1).desc_8daddi_k$ = desc_0;
  protoOf(selectorScope$1).desc_npizau_k$ = desc_1;
  protoOf(selectorScope$1).desc_w7b77z_k$ = desc_2;
  protoOf(selectorScope$1).child_4w4v4o_k$ = child;
  protoOf(selectorScope$1).sibling_tzh2by_k$ = sibling;
  protoOf(selectorScope$1).adjacent_gxbr7y_k$ = adjacent;
  protoOf(selectorScope$1).returnHoverSelector = returnHoverSelector;
  protoOf(selectorScope$1).hover_gby0bi_k$ = hover;
  protoOf(selectorScope$1).get_hover_islez7_k$ = get_hover;
  protoOf(selectorScope$1).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(selectorScope$1).get_link_wopumb_k$ = get_link;
  protoOf(selectorScope$1).get_visited_8zg8qp_k$ = get_visited;
  protoOf(selectorScope$1).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(selectorScope$1).get_target_juba8q_k$ = get_target;
  protoOf(selectorScope$1).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(selectorScope$1).get_scope_iyfcq3_k$ = get_scope;
  protoOf(selectorScope$1).get_active_avldsf_k$ = get_active;
  protoOf(selectorScope$1).get_focus_irhg33_k$ = get_focus;
  protoOf(selectorScope$1).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(selectorScope$1).get_playing_6wau9n_k$ = get_playing;
  protoOf(selectorScope$1).get_paused_hy6yif_k$ = get_paused;
  protoOf(selectorScope$1).get_autofill_801dad_k$ = get_autofill;
  protoOf(selectorScope$1).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(selectorScope$1).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(selectorScope$1).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(selectorScope$1).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(selectorScope$1).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(selectorScope$1).get_default_qtagd4_k$ = get_default;
  protoOf(selectorScope$1).get_checked_djib3y_k$ = get_checked;
  protoOf(selectorScope$1).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(selectorScope$1).get_blank_ip8b3f_k$ = get_blank;
  protoOf(selectorScope$1).get_valid_j01e4z_k$ = get_valid;
  protoOf(selectorScope$1).get_invalid_xocxse_k$ = get_invalid;
  protoOf(selectorScope$1).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(selectorScope$1).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(selectorScope$1).get_required_wq3z3c_k$ = get_required;
  protoOf(selectorScope$1).get_optional_x3zcnr_k$ = get_optional;
  protoOf(selectorScope$1).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(selectorScope$1).get_root_wott0r_k$ = get_root;
  protoOf(selectorScope$1).get_empty_iqwn50_k$ = get_empty;
  protoOf(selectorScope$1).get_first_irdx8n_k$ = get_first;
  protoOf(selectorScope$1).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(selectorScope$1).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(selectorScope$1).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(selectorScope$1).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(selectorScope$1).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(selectorScope$1).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(selectorScope$1).get_host_wonf8x_k$ = get_host;
  protoOf(selectorScope$1).host_93x8z6_k$ = host;
  protoOf(selectorScope$1).get_defined_qtfew0_k$ = get_defined;
  protoOf(selectorScope$1).get_left_woprgw_k$ = get_left;
  protoOf(selectorScope$1).get_right_ixz7xv_k$ = get_right;
  protoOf(selectorScope$1).lang_xkki7h_k$ = lang_0;
  protoOf(selectorScope$1).nthChild_tigwrk_k$ = nthChild;
  protoOf(selectorScope$1).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(selectorScope$1).nthOfType_n46p53_k$ = nthOfType;
  protoOf(selectorScope$1).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(selectorScope$1).not_di0wzr_k$ = not;
  protoOf(selectorScope$1).get_after_iol2gj_k$ = get_after;
  protoOf(selectorScope$1).get_before_bdhrwo_k$ = get_before;
  protoOf(selectorScope$1).get_cue_18j7sm_k$ = get_cue;
  protoOf(selectorScope$1).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(selectorScope$1).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(selectorScope$1).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(selectorScope$1).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(selectorScope$1).get_selection_jv4aal_k$ = get_selection;
  protoOf(selectorScope$1).slotted_iujblx_k$ = slotted;
  protoOf(ElementScopeBase).DisposableRefEffect_s9xzts_k$ = DisposableRefEffect;
  protoOf(ElementScopeBase).DisposableRefEffect$composable_ofuxkt_k$ = DisposableRefEffect$composable;
  protoOf(ElementScopeImpl).DisposableRefEffect_s9xzts_k$ = DisposableRefEffect;
  protoOf(ElementScopeImpl).DisposableRefEffect$composable_ofuxkt_k$ = DisposableRefEffect$composable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = attrContains$default;
  _.$_$.b = attrEquals$default;
  _.$_$.c = attrHyphened$default;
  _.$_$.d = attrListContains$default;
  _.$_$.e = attrPrefixed$default;
  _.$_$.f = attrSuffixed$default;
  _.$_$.g = attr$default;
  _.$_$.h = Checkbox_getInstance;
  _.$_$.i = Password_getInstance;
  _.$_$.j = Text_getInstance;
  _.$_$.k = Companion_getInstance_9;
  _.$_$.l = Companion_getInstance_10;
  _.$_$.m = From_getInstance;
  _.$_$.n = To_getInstance;
  _.$_$.o = Companion_getInstance_4;
  _.$_$.p = Companion_getInstance_11;
  _.$_$.q = Companion_getInstance_12;
  _.$_$.r = Companion_getInstance_5;
  _.$_$.s = Companion_getInstance_6;
  _.$_$.t = classes;
  _.$_$.u = contentEditable;
  _.$_$.v = dir;
  _.$_$.w = draggable;
  _.$_$.x = hidden;
  _.$_$.y = id;
  _.$_$.z = inputMode_0;
  _.$_$.a1 = inputMode;
  _.$_$.b1 = lang;
  _.$_$.c1 = spellCheck;
  _.$_$.d1 = tabIndex;
  _.$_$.e1 = title;
  _.$_$.f1 = AttrsScope;
  _.$_$.g1 = addEventListener_0;
  _.$_$.h1 = addEventListener;
  _.$_$.i1 = onAnimationEnd;
  _.$_$.j1 = onAnimationIteration;
  _.$_$.k1 = onAnimationStart;
  _.$_$.l1 = onBlur;
  _.$_$.m1 = onClick;
  _.$_$.n1 = onContextMenu;
  _.$_$.o1 = onCopy;
  _.$_$.p1 = onCut;
  _.$_$.q1 = onDoubleClick;
  _.$_$.r1 = onDragEnd;
  _.$_$.s1 = onDragEnter;
  _.$_$.t1 = onDragLeave;
  _.$_$.u1 = onDragOver;
  _.$_$.v1 = onDragStart;
  _.$_$.w1 = onDrag;
  _.$_$.x1 = onDrop;
  _.$_$.y1 = onFocusIn;
  _.$_$.z1 = onFocusOut;
  _.$_$.a2 = onFocus;
  _.$_$.b2 = onKeyDown;
  _.$_$.c2 = onKeyUp;
  _.$_$.d2 = onMouseDown;
  _.$_$.e2 = onMouseEnter;
  _.$_$.f2 = onMouseLeave;
  _.$_$.g2 = onMouseMove;
  _.$_$.h2 = onMouseOut;
  _.$_$.i2 = onMouseOver;
  _.$_$.j2 = onMouseUp;
  _.$_$.k2 = onPaste;
  _.$_$.l2 = onScroll;
  _.$_$.m2 = onTouchCancel;
  _.$_$.n2 = onTouchEnd;
  _.$_$.o2 = onTouchMove;
  _.$_$.p2 = onTouchStart;
  _.$_$.q2 = onWheel;
  _.$_$.r2 = autoComplete;
  _.$_$.s2 = placeholder;
  _.$_$.t2 = readOnly;
  _.$_$.u2 = required;
  _.$_$.v2 = CSSBorder;
  _.$_$.w2 = Combine;
  _.$_$.x2 = Percentage;
  _.$_$.y2 = CSSKeyframeRuleDeclaration;
  _.$_$.z2 = CSSKeyframesRuleDeclaration;
  _.$_$.a3 = MediaFeature;
  _.$_$.b3 = Raw;
  _.$_$.c3 = CSSVariable;
  _.$_$.d3 = invoke_3;
  _.$_$.e3 = invoke_2;
  _.$_$.f3 = style;
  _.$_$.g3 = style_0;
  _.$_$.h3 = get_active;
  _.$_$.i3 = adjacent;
  _.$_$.j3 = get_after;
  _.$_$.k3 = get_anyLink;
  _.$_$.l3 = attrContains;
  _.$_$.m3 = attrEquals;
  _.$_$.n3 = attrHyphened;
  _.$_$.o3 = attrListContains;
  _.$_$.p3 = attrPrefixed;
  _.$_$.q3 = attrSuffixed;
  _.$_$.r3 = attr;
  _.$_$.s3 = get_autofill;
  _.$_$.t3 = get_before;
  _.$_$.u3 = get_blank;
  _.$_$.v3 = get_checked;
  _.$_$.w3 = child;
  _.$_$.x3 = className;
  _.$_$.y3 = combine;
  _.$_$.z3 = get_cue;
  _.$_$.a4 = get_cueRegion;
  _.$_$.b4 = get_default;
  _.$_$.c4 = get_defined;
  _.$_$.d4 = descendant;
  _.$_$.e4 = desc_1;
  _.$_$.f4 = desc_2;
  _.$_$.g4 = desc;
  _.$_$.h4 = desc_0;
  _.$_$.i4 = get_disabled;
  _.$_$.j4 = get_empty;
  _.$_$.k4 = get_enabled;
  _.$_$.l4 = get_fileSelectorButton;
  _.$_$.m4 = get_first;
  _.$_$.n4 = get_firstChild;
  _.$_$.o4 = get_firstLetter;
  _.$_$.p4 = get_firstLine;
  _.$_$.q4 = get_firstOfType;
  _.$_$.r4 = get_focus;
  _.$_$.s4 = get_focusVisible;
  _.$_$.t4 = group;
  _.$_$.u4 = get_host;
  _.$_$.v4 = host;
  _.$_$.w4 = get_hover;
  _.$_$.x4 = hover;
  _.$_$.y4 = returnHoverSelector;
  _.$_$.z4 = id_0;
  _.$_$.a5 = get_inRange;
  _.$_$.b5 = get_indeterminate;
  _.$_$.c5 = get_invalid;
  _.$_$.d5 = lang_0;
  _.$_$.e5 = get_lastChild;
  _.$_$.f5 = get_lastOfType;
  _.$_$.g5 = get_left;
  _.$_$.h5 = get_link;
  _.$_$.i5 = get_localLink;
  _.$_$.j5 = not;
  _.$_$.k5 = nthChild;
  _.$_$.l5 = nthLastChild;
  _.$_$.m5 = nthLastOfType;
  _.$_$.n5 = nthOfType;
  _.$_$.o5 = get_onlyChild;
  _.$_$.p5 = get_onlyOfType;
  _.$_$.q5 = get_optional;
  _.$_$.r5 = get_outOfRange;
  _.$_$.s5 = get_paused;
  _.$_$.t5 = get_placeholderShown;
  _.$_$.u5 = get_playing;
  _.$_$.v5 = plus;
  _.$_$.w5 = plus_0;
  _.$_$.x5 = get_readOnly;
  _.$_$.y5 = get_readWrite;
  _.$_$.z5 = get_required;
  _.$_$.a6 = get_right;
  _.$_$.b6 = get_root;
  _.$_$.c6 = get_scope;
  _.$_$.d6 = get_selection;
  _.$_$.e6 = selector;
  _.$_$.f6 = sibling;
  _.$_$.g6 = slotted;
  _.$_$.h6 = get_target;
  _.$_$.i6 = get_targetWithin;
  _.$_$.j6 = type;
  _.$_$.k6 = get_universal;
  _.$_$.l6 = returnUniversalSelector;
  _.$_$.m6 = get_userInvalid;
  _.$_$.n6 = get_valid;
  _.$_$.o6 = get_visited;
  _.$_$.p6 = invoke_1;
  _.$_$.q6 = invoke_0;
  _.$_$.r6 = invoke;
  _.$_$.s6 = property;
  _.$_$.t6 = property_0;
  _.$_$.u6 = variable_0;
  _.$_$.v6 = variable;
  _.$_$.w6 = StyleScopeBuilder;
  _.$_$.x6 = StyleScope;
  _.$_$.y6 = style_1;
  _.$_$.z6 = StyleSheet;
  _.$_$.a7 = alignItems;
  _.$_$.b7 = alignSelf;
  _.$_$.c7 = backgroundColor;
  _.$_$.d7 = borderRadius;
  _.$_$.e7 = borderWidth_2;
  _.$_$.f7 = borderWidth_0;
  _.$_$.g7 = borderWidth_1;
  _.$_$.h7 = borderWidth;
  _.$_$.i7 = border;
  _.$_$.j7 = bottom;
  _.$_$.k7 = boxSizing;
  _.$_$.l7 = color;
  _.$_$.m7 = color_0;
  _.$_$.n7 = get_cssRem;
  _.$_$.o7 = display;
  _.$_$.p7 = flexDirection;
  _.$_$.q7 = flexGrow;
  _.$_$.r7 = fontFamily;
  _.$_$.s7 = fontSize;
  _.$_$.t7 = get_fr;
  _.$_$.u7 = gap;
  _.$_$.v7 = gridArea;
  _.$_$.w7 = gridAutoColumns;
  _.$_$.x7 = gridAutoRows;
  _.$_$.y7 = gridTemplateColumns;
  _.$_$.z7 = gridTemplateRows;
  _.$_$.a8 = height;
  _.$_$.b8 = justifyContent;
  _.$_$.c8 = left;
  _.$_$.d8 = lineHeight;
  _.$_$.e8 = margin;
  _.$_$.f8 = maxHeight;
  _.$_$.g8 = maxWidth;
  _.$_$.h8 = media;
  _.$_$.i8 = minHeight;
  _.$_$.j8 = minWidth;
  _.$_$.k8 = minus;
  _.$_$.l8 = get_ms;
  _.$_$.m8 = opacity;
  _.$_$.n8 = opacity_0;
  _.$_$.o8 = padding;
  _.$_$.p8 = get_percent;
  _.$_$.q8 = position;
  _.$_$.r8 = get_px;
  _.$_$.s8 = rgba;
  _.$_$.t8 = rgb;
  _.$_$.u8 = right;
  _.$_$.v8 = style_3;
  _.$_$.w8 = top;
  _.$_$.x8 = unaryMinus;
  _.$_$.y8 = get_vh;
  _.$_$.z8 = width_0;
  _.$_$.a9 = width;
  _.$_$.b9 = A$composable;
  _.$_$.c9 = Button$composable;
  _.$_$.d9 = CheckboxInput$composable;
  _.$_$.e9 = Div$composable;
  _.$_$.f9 = ElementBuilder;
  _.$_$.g9 = Img$composable;
  _.$_$.h9 = Input$composable;
  _.$_$.i9 = Label$composable;
  _.$_$.j9 = Li$composable;
  _.$_$.k9 = Span$composable;
  _.$_$.l9 = Style$composable_0;
  _.$_$.m9 = TagElement$composable;
  _.$_$.n9 = Text$composable;
  _.$_$.o9 = TextArea$composable;
  _.$_$.p9 = Ul$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
