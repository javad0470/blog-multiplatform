(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var isObject = kotlin_kotlin.$_$.t9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var protoOf = kotlin_kotlin.$_$.ea;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.da;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var to = kotlin_kotlin.$_$.me;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var equals = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.w8;
  var mapCapacity = kotlin_kotlin.$_$.w6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var listOf = kotlin_kotlin.$_$.v6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j5;
  var distinct = kotlin_kotlin.$_$.x5;
  var lazy = kotlin_kotlin.$_$.ce;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var KProperty0 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var charArrayOf = kotlin_kotlin.$_$.r8;
  var split = kotlin_kotlin.$_$.ub;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var first = kotlin_kotlin.$_$.e6;
  var Modifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var isInterface = kotlin_kotlin.$_$.q9;
  var toString = kotlin_kotlin.$_$.ja;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var plus = kotlin_kotlin.$_$.b7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var removeSuffix = kotlin_kotlin.$_$.qb;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var StyleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var copyToArray = kotlin_kotlin.$_$.w5;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var getValue = kotlin_kotlin.$_$.h6;
  var toList = kotlin_kotlin.$_$.n7;
  var removePrefix = kotlin_kotlin.$_$.pb;
  var joinToString = kotlin_kotlin.$_$.l6;
  var listOf_0 = kotlin_kotlin.$_$.u6;
  var emptyList = kotlin_kotlin.$_$.y5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var enumEntries = kotlin_kotlin.$_$.l8;
  var Enum = kotlin_kotlin.$_$.wc;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var numberToDouble = kotlin_kotlin.$_$.z9;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var toIntOrNull = kotlin_kotlin.$_$.fc;
  var endsWith = kotlin_kotlin.$_$.fb;
  var startsWith = kotlin_kotlin.$_$.xb;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Map = kotlin_kotlin.$_$.z4;
  var trimIndent = kotlin_kotlin.$_$.oc;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.de;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var produceState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.je;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var objectCreate = kotlin_kotlin.$_$.ca;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta, ComponentVariant);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(ResponsiveValues, 'ResponsiveValues', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta);
  setMetadataFor(rememberBreakpoint$composable$slambda, 'rememberBreakpoint$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(ColorSchemes$Red$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Pink$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Purple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepPurple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Indigo$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Blue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightBlue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Cyan$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Teal$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Green$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightGreen$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Lime$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Yellow$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Amber$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Orange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepOrange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Brown$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Gray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$BlueGray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes, 'ColorSchemes', objectMeta);
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(LegacyMutableSilkPalettes, 'LegacyMutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(PaletteEntry, 'PaletteEntry', classMeta);
  setMetadataFor(Button, 'Button', classMeta);
  setMetadataFor(Checkbox, 'Checkbox', classMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(Link, 'Link', classMeta);
  setMetadataFor(Switch, 'Switch', classMeta);
  setMetadataFor(Tab, 'Tab', classMeta);
  setMetadataFor(Tooltip, 'Tooltip', classMeta);
  setMetadataFor(LegacyMutableSilkPalette, 'LegacyMutableSilkPalette', classMeta);
  function get(colorMode) {
    var tmp0_subject = colorMode;
    var tmp0 = tmp0_subject.a5_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = this.j47();
        break;
      case 1:
        tmp = this.k47();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.k39(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette]);
  setMetadataFor(RectF, 'RectF', classMeta);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation$composable(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1934335721);
    sourceInformation($composer_0, 'C(prepareSilkFoundation$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.jz(initSilk_1._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      $composer_0.ry();
      if (($changed & 1) === 0 ? true : $composer_0.ly()) {
        if (!(($default & 1) === 0)) {
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
            // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
            var value = prepareSilkFoundation$composable$lambda;
            $composer_1.fz(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.oy();
          initSilk_1._v = tmp0;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.yy();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.sy();
      if (isTraceInProgress()) {
        traceEventStart(1934335721, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.py(-1594222658, Unit_getInstance());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = initSilk_1._v;
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(tmp1_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
        var value_0 = prepareSilkFoundation$composable$lambda_0(initSilk_1);
        $composer_2.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.oy();
      initSilk(tmp0_0);
      $composer_0.qy();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp4_Style$composable = KobwebComposeStyleSheet_getInstance();
      var $composer_3 = $composer_0;
      $composer_3.ny(-168645675);
      sourceInformation($composer_3, 'CC(Style$composable)');
      Style$composable(null, tmp4_Style$composable.v29(), $composer_3, 0, 1);
      $composer_3.oy();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp6_Style$composable = SilkStyleSheet_getInstance();
      var $composer_4 = $composer_0;
      $composer_4.ny(-168645675);
      sourceInformation($composer_4, 'CC(Style$composable)');
      Style$composable(null, tmp6_Style$composable.v29(), $composer_4, 0, 1);
      $composer_4.oy();
      content($composer_0, 14 & $dirty >> 3);
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
      tmp0_safe_receiver.r1d(prepareSilkFoundation$composable$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$composable$lambda(it) {
    return Unit_getInstance();
  }
  function prepareSilkFoundation$composable$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_getInstance();
    };
  }
  function prepareSilkFoundation$composable$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation$composable($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet.call(this);
    this.i3p_1 = 0;
  }
  protoOf(SilkStyleSheet).z29 = function (selector, cssRule) {
    return this.y29(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function KeyframesBuilder(colorMode) {
    this.j3p_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k3p_1 = LinkedHashMap_init_$Create$();
    this.l3p_1 = 8;
  }
  protoOf(KeyframesBuilder).m3p = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.k3p_1;
    var tmp1_plusAssign = to(From_getInstance(), createStyle);
    tmp0_plusAssign.l3(tmp1_plusAssign.h3_1, tmp1_plusAssign.i3_1);
  };
  protoOf(KeyframesBuilder).n3p = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.k3p_1;
    var tmp1_plusAssign = to(To_getInstance(), createStyle);
    tmp0_plusAssign.l3(tmp1_plusAssign.h3_1, tmp1_plusAssign.i3_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(get_comparableKeyframeStyles(this), get_comparableKeyframeStyles(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(get_comparableKeyframeStyles(this));
  };
  protoOf(KeyframesBuilder).o3p = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.k3p_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.f());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tmp0_map.u1().c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.t1();
      // Inline function 'kotlin.collections.component2' call
      var create = item.w1();
      var styles = toStyles(create());
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      tmp0_mapTo.a(tmp$ret$3);
    }
    var keyframeRules = tmp0_mapTo;
    stylesheet.a28(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function get_comparableKeyframeStyles(_this__u8e3s4) {
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = _this__u8e3s4.k3p_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp0_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_mapValues.f()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = tmp0_mapValues.u1().c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.t1();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var create = element.w1();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(create())(tmp0_apply);
      tmp0_mapValuesTo.l3(tmp, tmp0_apply);
    }
    return tmp0_mapValuesTo;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).p3p = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(tmp0_apply);
      tmp0_mapTo.a(tmp0_apply);
    }
    return distinct(tmp0_mapTo).f() === 1;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_getInstance_4().p3p(this$0.q3p_1);
    };
  }
  function Keyframes(name, prefix, init) {
    Companion_getInstance_4();
    prefix = prefix === VOID ? null : prefix;
    this.q3p_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = '' + prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.r3p_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.s3p_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
    this.t3p_1 = 8;
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.w3p_1 = prefix;
    this.x3p_1 = init;
    this.y3p_1 = 0;
  }
  protoOf(KeyframesProvider).l2m = function (propertyName) {
    var name = titleCamelCaseToKebabCase(propertyName);
    return new Keyframes(name, this.w3p_1, this.x3p_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.b3q(keyframes.r3p_1, keyframes.q3p_1);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.r2k(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.r2k(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.r2k(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.r2k(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.r2k(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.r2k(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.r2k(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.r2k(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.r2k(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.r2k(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.f3q(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.f3q(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.f3q(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.f3q(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.f3q(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.g3q(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.g3q(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.g3q(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.g3q(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.g3q(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function notifySelectorName($this, selectorName) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = split(selectorName, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        tmp0_filterTo.a(element);
      }
    }
    var tmp0_iterator_0 = tmp0_filterTo.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      Companion_getInstance_5().h3q_1.a(element_0);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.h3q_1 = LinkedHashSet_init_$Create$();
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.a2a(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.p3q_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.n3q_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.l3q_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.i3q_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.j3q_1);
          }
        }
      }
    }
  }
  function addStylesInto$mergeCssModifiers(_this__u8e3s4, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    var tmp0_groupBy = _this__u8e3s4.d3q_1;
    // Inline function 'kotlin.collections.groupByTo' call
    var tmp0_groupByTo = LinkedHashMap_init_$Create$();
    var tmp0_iterator = tmp0_groupBy.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
      var key = element.t1();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = tmp0_groupByTo.h2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        tmp0_groupByTo.l3(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.a(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp0_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_groupByTo.f()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = tmp0_groupByTo.u1().c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.t1();
      var tmp$ret$8;
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var group = element_0.w1();
        var first_0 = first(group);
        if (group.f() === 1) {
          tmp$ret$8 = first_0;
          break $l$block;
        }
        var tmp_1 = Companion_getInstance_0();
        var mergedModifier = isInterface(tmp_1, Modifier) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = group.c();
        while (tmp0_iterator_1.d()) {
          var element_1 = tmp0_iterator_1.e();
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(equals(element_1.s3q_1, first_0.s3q_1) ? element_1.t3q_1 == first_0.t3q_1 : false)) {
            // Inline function 'kotlin.check.<anonymous>' call
            var message = 'Check failed.';
            throw IllegalStateException_init_$Create$(toString(message));
          }
          mergedModifier = mergedModifier.e3n(element_1.r3q_1);
        }
        tmp$ret$8 = new CssModifier(mergedModifier, first_0.s3q_1, first_0.t3q_1);
      }
      tmp0_mapValuesTo.l3(tmp_0, tmp$ret$8);
    }
    return tmp0_mapValuesTo;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      var tmp0_forEach = $styles.e2g_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.u1().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.s28(element.t1(), element.w1());
      }
      var tmp1_forEach = $styles.f2g_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = tmp1_forEach.u1().c();
      var tmp0_iterator_0 = tmp$ret$1;
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.y28(element_0.t1(), element_0.w1());
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda(this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_5(), name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_5(), name);
        var tmp$ret$0;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_orEmpty = $cssRuleKey.v3q_1;
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var cssRule = name + tmp$ret$0;
        var tmp_0;
        if (!($cssRuleKey.u3q_1 == null)) {
          var tmp$ret$1;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>.<anonymous>' call
          media($styleSheet, $cssRuleKey.u3q_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp$ret$1 = $styleSheet;
          tmp_0 = Unit_getInstance();
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  protoOf(ComponentStyle).e3r = function (styleSheet, selectorName) {
    notifySelectorName(Companion_getInstance_5(), selectorName);
    var lightModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this.z3q_1);
    var darkModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this.z3q_1);
    var tmp = Companion_getInstance_6();
    var tmp0_safe_receiver = lightModifiers.h2(Companion_getInstance_7().f3r_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r3q_1;
    var tmp1_safe_receiver = darkModifiers.h2(Companion_getInstance_7().f3r_1);
    var tmp2_safe_receiver = tmp.g3r(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r3q_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = plus(lightModifiers.i2(), darkModifiers.i2());
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_7().f3r_1)) {
        tmp0_filterTo.a(element);
      }
    }
    var allCssRuleKeys = tmp0_filterTo;
    var tmp3_iterator = allCssRuleKeys.c();
    while (tmp3_iterator.d()) {
      var cssRuleKey = tmp3_iterator.e();
      var tmp_1 = Companion_getInstance_6();
      var tmp4_safe_receiver = lightModifiers.h2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.r3q_1;
      var tmp5_safe_receiver = darkModifiers.h2(cssRuleKey);
      var tmp6_safe_receiver = tmp_1.g3r(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.r3q_1);
      if (tmp6_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        withFinalSelectorName(this, selectorName, tmp6_safe_receiver, ComponentStyle$addStylesInto$lambda_0(cssRuleKey, styleSheet, this));
      }
    }
  };
  protoOf(ComponentStyle).h3r = function (styleSheet) {
    this.e3r(styleSheet, '.' + this.b3r_1);
  };
  protoOf(ComponentStyle).i3r = function () {
    return new ImmutableComponentStyle(this.b3r_1, this.x3q_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_5();
    prefix = prefix === VOID ? null : prefix;
    this.x3q_1 = extraModifiers;
    this.y3q_1 = prefix;
    this.z3q_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a3r_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.y3q_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = '' + tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.b3r_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.c3r_1 = ArrayList_init_$Create$_0();
    this.d3r_1 = 8;
  }
  protoOf(ComponentStyle).j3r = function (name, extraModifiers, init) {
    // Inline function 'kotlin.also' call
    var tmp0_also = new SimpleComponentVariant(new ComponentStyle(this.b3r_1 + '-' + name, extraModifiers, null, init), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant$composable.<anonymous>' call
    this.c3r_1.a(tmp0_also);
    return tmp0_also;
  };
  protoOf(ComponentStyleProvider).l2m = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.m3r_1, this.n3r_1, this.o3r_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.m3r_1 = extraModifiers;
    this.n3r_1 = prefix;
    this.o3r_1 = init;
    this.p3r_1 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.t3r_1 = colorMode;
    this.u3r_1 = 0;
  }
  protoOf(ComponentModifiers).v3r = function () {
    return this.t3r_1;
  };
  function Empty() {
    Empty_instance = this;
    ComponentVariant.call(this);
    this.a3s_1 = 0;
  }
  protoOf(Empty).b3s = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(1324185618);
    if (isTraceInProgress()) {
      traceEventStart(1324185618, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentVariant.Empty.toModifier$composable (ComponentStyle.kt:610)');
    }
    var tmp0 = Companion_getInstance_0();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function ComponentVariant() {
    this.c3s_1 = 0;
  }
  protoOf(ComponentVariant).d3s = function (next) {
    return next === Empty_getInstance() ? this : this === Empty_getInstance() ? next : new CompositeComponentVariant(this, next);
  };
  function Light(styles) {
    this.p3q_1 = styles;
    this.q3q_1 = 0;
  }
  function Dark(styles) {
    this.n3q_1 = styles;
    this.o3q_1 = 0;
  }
  function ColorAgnostic(styles) {
    this.l3q_1 = styles;
    this.m3q_1 = 0;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.i3q_1 = lightStyles;
    this.j3q_1 = darkStyles;
    this.k3q_1 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).g3r = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(tmp0_apply);
      tmp = tmp0_apply;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(tmp0_apply_0);
      tmp_0 = tmp0_apply_0;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.f3r_1 = new Key(null, null);
  }
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Key(mediaQuery, suffix) {
    this.u3q_1 = mediaQuery;
    this.v3q_1 = suffix;
    this.w3q_1 = 0;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.u3q_1 + ', suffix=' + this.v3q_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.u3q_1 == null ? 0 : getStringHashCode(this.u3q_1);
    result = imul(result, 31) + (this.v3q_1 == null ? 0 : getStringHashCode(this.v3q_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.u3q_1 == tmp0_other_with_cast.u3q_1))
      return false;
    if (!(this.v3q_1 == tmp0_other_with_cast.v3q_1))
      return false;
    return true;
  };
  function CssModifier$lambda(_anonymous_parameter_0__qggqh8, currModifier) {
    if (!(currModifier instanceof StyleModifier)) {
      throw IllegalArgumentException_init_$Create$('You are attempting to construct a ComponentStyle or ComponentVariant with a non-style Modifier\n(e.g. `id`, `tabIndex`, etc.). Due to technical limitations in html / css, only `StyleModifier`s\nare allowed in this context.\n\nUnfortunately, at the point this exception is getting thrown, information about the offending\nattribute is not known. Please audit your project\'s ComponentStyle and ComponentVariant\nModifiers, perhaps commenting out recently added ones, until this exception goes away.\n\nOnce the offending modifier is identified, to fix this, you can either call attribute modifiers\ndirectly on the Modifier you pass into some widget, or you can extend this Style or Variant with\nextra modifiers by passing them in the `extraModifier` parameter:\n\n```\n// Approach #1: Call Attribute Modifiers later\n\nval ExampleStyle = ComponentStyle("ex") {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier().tabIndex(0))\n\n// Approach #2: Use `extraModifiers`:\n\nval ExampleStyle = ComponentStyle("ex", extraModifiers = Modifier.tabIndex(0)) {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier())\n```');
    }
    return Unit_getInstance();
  }
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_7();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.r3q_1 = modifier;
    this.s3q_1 = mediaQuery;
    this.t3q_1 = suffix;
    this.r3q_1.d3n(Unit_getInstance(), CssModifier$lambda);
  }
  protoOf(CssModifier).t1 = function () {
    var tmp0_safe_receiver = this.s3q_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.t3q_1);
  };
  function ImmutableComponentStyle(name, extraModifiers) {
    this.e3s_1 = name;
    this.f3s_1 = extraModifiers;
    this.g3s_1 = 0;
  }
  protoOf(ImmutableComponentStyle).b3s = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(512683125);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:201)');
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = listOf([this.e3s_1, suffixedWith(this.e3s_1, Companion_getInstance_10().h3s($composer_0, 6))]);
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      if (Companion_getInstance_5().h3q_1.m(element)) {
        tmp0_filterTo.a(element);
      }
    }
    var classNames_0 = tmp0_filterTo;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classNames_0.k()) {
      var tmp_0 = Companion_getInstance_0();
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$4 = copyToArray(classNames_0);
      tmp = classNames(tmp_0, tmp$ret$4.slice());
    } else {
      tmp = Companion_getInstance_0();
    }
    var tmp0 = tmp.e3n(this.f3s_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.j3s_1 = style;
    this.k3s_1 = baseStyle;
    this.l3s_1 = 0;
  }
  protoOf(SimpleComponentVariant).h3r = function (styleSheet) {
    this.j3s_1.e3r(styleSheet, '.' + this.k3s_1.b3r_1 + '.' + this.j3s_1.b3r_1);
  };
  protoOf(SimpleComponentVariant).i3r = function () {
    return this.j3s_1.i3r();
  };
  protoOf(SimpleComponentVariant).b3s = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentStyle.kt:666)');
    }
    var tmp0 = toModifier$composable(this.j3s_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c3q_1 = ArrayList_init_$Create$_0();
    this.d3q_1 = this.c3q_1;
    this.e3q_1 = 0;
  }
  protoOf(StyleModifiers).w3r = function (createModifier) {
    this.c3q_1.a(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).x3r = function (mediaQuery, suffix, createModifier) {
    this.c3q_1.a(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).y3r = function (suffix, createModifier) {
    this.c3q_1.a(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).f3q = function (mediaQuery, createModifier) {
    this.c3q_1.a(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).g3q = function (_this__u8e3s4, createModifier) {
    this.f3q(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.n3s_1 = head;
    this.o3s_1 = tail;
  }
  protoOf(CompositeComponentVariant).b3s = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentStyle.kt:678)');
    }
    var tmp0 = this.n3s_1.b3s($composer_0, 0).e3n(this.o3s_1.b3s($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(-1254167608);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:690)');
    }
    var tmp0 = getValue(get_SilkTheme().u3s_1, _this__u8e3s4.b3r_1).b3s($composer_0, 0).e3n(combine$composable(toList(variants), $composer_0, 0).b3s($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  }
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(1446826835);
    sourceInformation($composer_0, 'C(combine$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentStyle.kt:735)');
    }
    var finalVariant = Empty_getInstance();
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.d()) {
      var variant = tmp0_iterator.e();
      var tmp = finalVariant;
      finalVariant = tmp.d3s(variant == null ? Empty_getInstance() : variant);
    }
    var tmp0 = finalVariant;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.w3s_1 = colorMode;
    this.x3s_1 = 0;
  }
  protoOf(ComponentBaseModifier).v3r = function () {
    return this.w3s_1;
  };
  protoOf(ComponentVariantProvider).l2m = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = removeSuffix(removePrefix(withoutSuffix, this.a3t_1.a3r_1 + '-'), '-' + this.a3t_1.a3r_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_takeIf) > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.a3t_1.j3r(name, this.b3t_1, this.c3t_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.a3t_1 = style;
    this.b3t_1 = extraModifiers;
    this.c3t_1 = init;
    this.d3t_1 = 8;
  }
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return addVariantBase$composable(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return addVariant$composable(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return base$composable_0(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function base$composable(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$composable$lambda(init));
  }
  function addVariantBase$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$composable$lambda(init));
  }
  function addVariant$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function base$composable_0(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$composable$lambda_0(init));
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:525)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:537)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-310854580);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-310854580, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentStyle.kt:580)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-1248093650);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1248093650, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentStyle.kt:574)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:239)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.t3r_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.w3r(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function addVariantBase$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.t3r_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function addVariantBase$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.w3r(addVariantBase$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.t3r_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.w3r(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).e3t = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.i3t();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.a(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(tmp0_mapNotNullTo) + ')');
  };
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
    this.m3t_1 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.s3t_1 = attributeSelector;
    this.t3t_1 = 0;
  }
  protoOf(OfAttributeSelector).i3t = function () {
    return this.u3t(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.a3u_1 = pseudoClass;
    this.b3u_1 = 0;
  }
  protoOf(OfPseudoClass).i3t = function () {
    return this.u3t(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).c3u = function (other) {
    return new CompositeOpen(this.f3t_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.h3u_1 = pseudoElement;
    this.i3u_1 = 0;
  }
  protoOf(OfPseudoElement).i3t = function () {
    return this.u3t(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.n3u_1 = mediaQuery;
    this.o3u_1 = attributeSelectors;
    this.p3u_1 = pseudoClasses;
    this.q3u_1 = 0;
  }
  protoOf(CompositeOpen).n3t = function () {
    return this.n3u_1;
  };
  protoOf(CompositeOpen).i3t = function () {
    return this.u3t(this.o3u_1, this.p3u_1, null);
  };
  function CssRule(target) {
    Companion_getInstance_8();
    this.f3t_1 = target;
    this.g3t_1 = null;
    this.h3t_1 = 0;
  }
  protoOf(CssRule).v3t = function (createModifier) {
    this.f3t_1.x3r(this.n3t(), this.i3t(), createModifier);
  };
  protoOf(CssRule).n3t = function () {
    return this.g3t_1;
  };
  protoOf(CssRule).i3t = function () {
    return null;
  };
  protoOf(CssRule).u3t = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.q6('[' + element.s3t_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.q6(':' + element_0.a3u_1);
    }
    if (!(pseudoElement == null)) {
      tmp0_apply.q6('::' + pseudoElement.h3u_1);
    }
    var tmp0_takeIf = tmp0_apply.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_takeIf) > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_getInstance_8().e3t(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_focus(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus');
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_getInstance();
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.r3u_1 = sm;
    this.s3u_1 = md;
    this.t3u_1 = lg;
    this.u3u_1 = xl;
    this.v3u_1 = 0;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.r3u_1 + ', md=' + this.s3u_1 + ', lg=' + this.t3u_1 + ', xl=' + this.u3u_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.r3u_1);
    result = imul(result, 31) + hashCode(this.s3u_1) | 0;
    result = imul(result, 31) + hashCode(this.t3u_1) | 0;
    result = imul(result, 31) + hashCode(this.u3u_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.r3u_1, tmp0_other_with_cast.r3u_1))
      return false;
    if (!equals(this.s3u_1, tmp0_other_with_cast.s3u_1))
      return false;
    if (!equals(this.t3u_1, tmp0_other_with_cast.t3u_1))
      return false;
    if (!equals(this.u3u_1, tmp0_other_with_cast.u3u_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    sm = sm === VOID ? get_cssRem(0) : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
    this.y3u_1 = 0;
  }
  protoOf(Rem).z3u = function () {
    return get_px(this.a3v_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.a3v_1 = width;
    this.b3v_1 = 0;
  }
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  function ResponsiveValues(base, sm, md, lg, xl) {
    this.c3v_1 = base;
    this.d3v_1 = sm;
    this.e3v_1 = md;
    this.f3v_1 = lg;
    this.g3v_1 = xl;
    this.h3v_1 = 0;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.r2k(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  var TextStyle;
  function SpanText$composable(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1205558567);
    sourceInformation($composer_0, 'C(SpanText$composable)P(2!1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(text) ? 4 : 2);
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
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.ky()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1205558567, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable (SpanText.kt:49)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp0_thenIf = toModifier$composable(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).e3n(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
        tmp = whiteSpace(Companion_getInstance_0(), Companion_getInstance_2().y2k());
      } else {
        tmp = Companion_getInstance_0();
      }
      var finalModifier = tmp0_thenIf.e3n(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$composable$lambda(ref_0, $dirty, text));
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
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.fz(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.oy();
      Span$composable(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.r1d(SpanText$composable$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_getInstance();
  }
  function SpanText$composable$lambda($ref, $$dirty, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Span) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-539273278, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous> (SpanText.kt:58)');
        }
        registerRefScope$composable($this$Span, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        Text$composable($text, $composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function SpanText$composable$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText$composable($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
      TextStyle = get_SpanTextStyle();
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z3p_1 = LinkedHashMap_init_$Create$();
    this.a3q_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).r2k = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.z3p_1;
    var value = tmp0_getOrPut.h2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.l2m(name);
      tmp0_getOrPut.l3(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$composable$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.l3v($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.i3v_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j3v_1 = ArrayList_init_$Create$_0();
    this.k3v_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).l3v = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(2016651302);
    sourceInformation($composer_0, 'C(forEach$composable)');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.k3v_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.uy();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.r1d(DeferredComposablesState$forEach$composable$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(2081108668);
    sourceInformation($composer_0, 'C(renderWithDeferred$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().n1d(state)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, $dirty, state));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
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
      tmp0_safe_receiver.r1d(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.m3v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred$composable(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.o3v_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    throw IllegalStateException_init_$Create$('Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.');
  }
  function renderWithDeferred$composable$lambda($content, $$dirty, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 14 & $$dirty);
        $state.l3v(ComposableSingletons$DeferredKt_getInstance().o3v_1, $composer_0, 70);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function renderWithDeferred$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.p3v_1 = config;
    this.q3v_1 = stylesheet;
    this.r3v_1 = theme;
    this.s3v_1 = 8;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.b3w(get_DisplayIfAtLeastZeroStyle());
    mutableTheme.b3w(get_DisplayIfAtLeastSmStyle());
    mutableTheme.b3w(get_DisplayIfAtLeastMdStyle());
    mutableTheme.b3w(get_DisplayIfAtLeastLgStyle());
    mutableTheme.b3w(get_DisplayIfAtLeastXlStyle());
    mutableTheme.b3w(get_DisplayUntilZeroStyle());
    mutableTheme.b3w(get_DisplayUntilSmStyle());
    mutableTheme.b3w(get_DisplayUntilMdStyle());
    mutableTheme.b3w(get_DisplayUntilLgStyle());
    mutableTheme.b3w(get_DisplayUntilXlStyle());
    mutableTheme.b3w(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().e3w(SilkStyleSheet_getInstance());
    get_SilkTheme().f3w(SilkStyleSheet_getInstance());
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.g3w_1 = ColorMode_LIGHT_getInstance();
    this.h3w_1 = 8;
  }
  protoOf(MutableSilkConfig).i3w = function () {
    return this.g3w_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).j3w = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c3w_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.d3w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SilkStylesheetInstance).b3q = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.d3w_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).d2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.d3w_1.l3(name, build);
  };
  protoOf(SilkStylesheetInstance).e3w = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.c3w_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.e3r(siteStyleSheet, element.b3r_1);
    }
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.d3w_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.f());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = tmp1_map.u1().c();
    while (tmp0_iterator_0.d()) {
      var item = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.t1();
      // Inline function 'kotlin.collections.component2' call
      var build = item.w1();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp0_apply);
      var lightBuilder = tmp0_apply;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp1_apply);
      var darkBuilder = tmp1_apply;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.o3p(siteStyleSheet, name);
      } else {
        lightBuilder.o3p(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.o3p(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      tmp0_mapTo.a(Unit_getInstance());
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.p3s_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.p3s_1.y3v_1;
    tmp.q3s_1 = isInterface(tmp_0, SilkPalettes) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this.p3s_1.x3v_1;
    tmp_1.r3s_1 = isInterface(tmp_2, Palettes) ? tmp_2 : THROW_CCE();
    this.s3s_1 = this.p3s_1.z3v_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.t3s_1 = LinkedHashMap_init_$Create$();
    this.u3s_1 = this.t3s_1;
    this.v3s_1 = 8;
  }
  protoOf(ImmutableSilkTheme).f3w = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.p3s_1.t3v_1.bb().c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element.h3r(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.t3s_1;
      var tmp1_set = element.b3r_1;
      var tmp2_set = element.i3r();
      tmp0_set.l3(tmp1_set, tmp2_set);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp2_filterIsInstance = this.p3s_1.v3v_1.bb();
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp2_filterIsInstance.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      if (element_0 instanceof SimpleComponentVariant) {
        tmp0_filterIsInstanceTo.a(element_0);
      }
    }
    var tmp0_iterator_1 = tmp0_filterIsInstanceTo.c();
    while (tmp0_iterator_1.d()) {
      var element_1 = tmp0_iterator_1.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element_1.h3r(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set_0 = this.t3s_1;
      var tmp1_set_0 = element_1.j3s_1.b3r_1;
      var tmp2_set_0 = element_1.i3r();
      tmp0_set_0.l3(tmp1_set_0, tmp2_set_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't access SilkTheme before first calling SilkApp");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.t3v_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.u3v_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.v3v_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.w3v_1 = LinkedHashSet_init_$Create$();
    this.x3v_1 = new MutablePalettes();
    this.y3v_1 = new LegacyMutableSilkPalettes(this.x3v_1);
    this.z3v_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.a3w_1 = 8;
  }
  protoOf(MutableSilkTheme).b3w = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    var tmp0_let = this.t3v_1.h2(style.b3r_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_let == null ? true : tmp0_let === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.b3r_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.t3v_1;
    var tmp3_set = style.b3r_1;
    tmp2_set.l3(tmp3_set, style);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = style.c3r_1;
    tmp$ret$3 = copyToArray(tmp4_toTypedArray);
    this.k3w(tmp$ret$3.slice());
  };
  protoOf(MutableSilkTheme).k3w = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        tmp0_filterIsInstanceTo.a(element);
      }
    }
    var tmp0_iterator = tmp0_filterIsInstanceTo.c();
    while (tmp0_iterator.d()) {
      var element_0 = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      var tmp0_let = this.v3v_1.h2(element_0.j3s_1.b3r_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp0_let == null ? true : tmp0_let === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.j3s_1.b3r_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var tmp2_set = this.v3v_1;
      var tmp3_set = element_0.j3s_1.b3r_1;
      tmp2_set.l3(tmp3_set, element_0);
    }
  };
  protoOf(MutableSilkTheme).l3w = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.t3v_1;
    var tmp1_contains = style.b3r_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).d2(tmp1_contains)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.b3r_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.u3v_1.a(style.b3r_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.b3r_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp4_set = this.t3v_1;
    var tmp5_set = style.b3r_1;
    var tmp6_set = new ComponentStyle(style.a3r_1, extraModifiers, style.y3q_1, init);
    tmp4_set.l3(tmp5_set, tmp6_set);
  };
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    modifyComponentStyleBase$composable(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase$composable(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$composable$lambda(init));
  }
  function modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = _this__u8e3s4.t3v_1;
    var tmp1_contains = style.b3r_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).d2(tmp1_contains)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.b3r_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.x3q_1;
    var existingInit = style.z3q_1;
    var tmp = modifyComponentStyle$composable$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.l3w(style, tmp, modifyComponentStyle$composable$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:264)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$composable$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_modifyComponentStyle.t3r_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function modifyComponentStyleBase$composable$lambda($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.w3r(modifyComponentStyleBase$composable$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_getInstance();
    };
  }
  function modifyComponentStyle$composable$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous> (SilkTheme.kt:252)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).e3n($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function modifyComponentStyle$composable$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_getInstance();
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3v_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.a5_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().s3s_1.r3u_1;
        break;
      case 2:
        tmp = get_SilkTheme().s3s_1.s3u_1;
        break;
      case 3:
        tmp = get_SilkTheme().s3s_1.t3u_1;
        break;
      case 4:
        tmp = get_SilkTheme().s3s_1.u3u_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_breakpointFloor(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var tmp0_last = get_entries();
      var iterator = tmp0_last.r1(tmp0_last.f());
      while (iterator.i1()) {
        var element = iterator.k1();
        // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.<get-breakpointFloor>.<anonymous>' call
        if (toPx(element).value <= _this__u8e3s4.innerWidth) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    return tmp$ret$1;
  }
  function toPx(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3u();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function rememberBreakpoint$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(420068367);
    sourceInformation($composer_0, 'C(rememberBreakpoint$composable)');
    if (isTraceInProgress()) {
      traceEventStart(420068367, $changed, -1, 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint$composable (BreakpointUtils.kt:38)');
    }
    var tmp = get_breakpointFloor(window);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ny(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance().hy_1) {
      // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint$composable.<anonymous>' call
      var value = rememberBreakpoint$composable$slambda_0(null);
      $composer_1.fz(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_1.oy();
    var tmp0_0 = produceState$composable(tmp, tmp0, $composer_0, 0).w1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0_0;
  }
  function rememberBreakpoint$composable$slambda$lambda($this_produceState) {
    return function (it) {
      $this_produceState.ut(get_breakpointFloor(window));
      return Unit_getInstance();
    };
  }
  function rememberBreakpoint$composable$slambda$lambda_0($resizeListener) {
    return function () {
      window.removeEventListener('resize', $resizeListener);
      return Unit_getInstance();
    };
  }
  function rememberBreakpoint$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberBreakpoint$composable$slambda).w3w = function ($this$produceState, $completion) {
    var tmp = this.x3w($this$produceState, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(rememberBreakpoint$composable$slambda).ni = function (p1, $completion) {
    return this.w3w((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberBreakpoint$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            var tmp_0 = this;
            tmp_0.v3w_1 = EventListener(rememberBreakpoint$composable$slambda$lambda(this.u3w_1));
            window.addEventListener('resize', this.v3w_1);
            this.sh_1 = 1;
            suspendResult = this.u3w_1.l1e(rememberBreakpoint$composable$slambda$lambda_0(this.v3w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(rememberBreakpoint$composable$slambda).x3w = function ($this$produceState, completion) {
    var i = new rememberBreakpoint$composable$slambda(completion);
    i.u3w_1 = $this$produceState;
    return i;
  };
  function rememberBreakpoint$composable$slambda_0(resultContinuation) {
    var i = new rememberBreakpoint$composable$slambda(resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.w3w($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    rootColorModeState$factory();
    return rootColorModeState$delegate.w1();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.z4_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).h3s = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1058079129, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.$get-current$$composable (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.lz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.w1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_5;
  function Companion_getInstance_10() {
    ColorMode_initEntries();
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_getInstance();
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
    Companion_getInstance_10();
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).a3x = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).b3x = function () {
    var tmp;
    switch (this.a5_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).isLight_Deprecated = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).isDark_Deprecated = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).opposite_Deprecated = function () {
    var tmp;
    switch (this.a5_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).c3x = function () {
    return get_LocalColorMode().n1d(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_9().j3w().i3w());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function ColorSchemes$Red$1() {
    this.d3x_1 = Companion_getInstance_3().d3o(16772078);
    this.e3x_1 = Companion_getInstance_3().d3o(16764370);
    this.f3x_1 = Companion_getInstance_3().d3o(15702682);
    this.g3x_1 = Companion_getInstance_3().d3o(15037299);
    this.h3x_1 = Companion_getInstance_3().d3o(15684432);
    this.i3x_1 = Companion_getInstance_3().d3o(16007990);
    this.j3x_1 = Companion_getInstance_3().d3o(15022389);
    this.k3x_1 = Companion_getInstance_3().d3o(13840175);
    this.l3x_1 = Companion_getInstance_3().d3o(12986408);
    this.m3x_1 = Companion_getInstance_3().d3o(12000284);
  }
  protoOf(ColorSchemes$Red$1).n3x = function () {
    return this.f3x_1;
  };
  protoOf(ColorSchemes$Red$1).o3x = function () {
    return this.g3x_1;
  };
  protoOf(ColorSchemes$Red$1).p3x = function () {
    return this.i3x_1;
  };
  protoOf(ColorSchemes$Red$1).q3x = function () {
    return this.j3x_1;
  };
  protoOf(ColorSchemes$Red$1).r3x = function () {
    return this.k3x_1;
  };
  protoOf(ColorSchemes$Red$1).s3x = function () {
    return this.m3x_1;
  };
  function ColorSchemes$Pink$1() {
    this.t3x_1 = Companion_getInstance_3().d3o(16573676);
    this.u3x_1 = Companion_getInstance_3().d3o(16301008);
    this.v3x_1 = Companion_getInstance_3().d3o(16027569);
    this.w3x_1 = Companion_getInstance_3().d3o(15753874);
    this.x3x_1 = Companion_getInstance_3().d3o(15483002);
    this.y3x_1 = Companion_getInstance_3().d3o(15277667);
    this.z3x_1 = Companion_getInstance_3().d3o(14162784);
    this.a3y_1 = Companion_getInstance_3().d3o(12720219);
    this.b3y_1 = Companion_getInstance_3().d3o(11342935);
    this.c3y_1 = Companion_getInstance_3().d3o(8916559);
  }
  protoOf(ColorSchemes$Pink$1).n3x = function () {
    return this.v3x_1;
  };
  protoOf(ColorSchemes$Pink$1).o3x = function () {
    return this.w3x_1;
  };
  protoOf(ColorSchemes$Pink$1).p3x = function () {
    return this.y3x_1;
  };
  protoOf(ColorSchemes$Pink$1).q3x = function () {
    return this.z3x_1;
  };
  protoOf(ColorSchemes$Pink$1).r3x = function () {
    return this.a3y_1;
  };
  protoOf(ColorSchemes$Pink$1).s3x = function () {
    return this.c3y_1;
  };
  function ColorSchemes$Purple$1() {
    this.d3y_1 = Companion_getInstance_3().d3o(15984117);
    this.e3y_1 = Companion_getInstance_3().d3o(14794471);
    this.f3y_1 = Companion_getInstance_3().d3o(13538264);
    this.g3y_1 = Companion_getInstance_3().d3o(12216520);
    this.h3y_1 = Companion_getInstance_3().d3o(11225020);
    this.i3y_1 = Companion_getInstance_3().d3o(10233776);
    this.j3y_1 = Companion_getInstance_3().d3o(9315498);
    this.k3y_1 = Companion_getInstance_3().d3o(8069026);
    this.l3y_1 = Companion_getInstance_3().d3o(6953882);
    this.m3y_1 = Companion_getInstance_3().d3o(4854924);
  }
  protoOf(ColorSchemes$Purple$1).n3x = function () {
    return this.f3y_1;
  };
  protoOf(ColorSchemes$Purple$1).o3x = function () {
    return this.g3y_1;
  };
  protoOf(ColorSchemes$Purple$1).p3x = function () {
    return this.i3y_1;
  };
  protoOf(ColorSchemes$Purple$1).q3x = function () {
    return this.j3y_1;
  };
  protoOf(ColorSchemes$Purple$1).r3x = function () {
    return this.k3y_1;
  };
  protoOf(ColorSchemes$Purple$1).s3x = function () {
    return this.m3y_1;
  };
  function ColorSchemes$DeepPurple$1() {
    this.n3y_1 = Companion_getInstance_3().d3o(15591414);
    this.o3y_1 = Companion_getInstance_3().d3o(13747433);
    this.p3y_1 = Companion_getInstance_3().d3o(11771355);
    this.q3y_1 = Companion_getInstance_3().d3o(9795021);
    this.r3y_1 = Companion_getInstance_3().d3o(8280002);
    this.s3y_1 = Companion_getInstance_3().d3o(6765239);
    this.t3y_1 = Companion_getInstance_3().d3o(6174129);
    this.u3y_1 = Companion_getInstance_3().d3o(5320104);
    this.v3y_1 = Companion_getInstance_3().d3o(4532128);
    this.w3y_1 = Companion_getInstance_3().d3o(3218322);
  }
  protoOf(ColorSchemes$DeepPurple$1).n3x = function () {
    return this.p3y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).o3x = function () {
    return this.q3y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).p3x = function () {
    return this.s3y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).q3x = function () {
    return this.t3y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).r3x = function () {
    return this.u3y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).s3x = function () {
    return this.w3y_1;
  };
  function ColorSchemes$Indigo$1() {
    this.x3y_1 = Companion_getInstance_3().d3o(15264502);
    this.y3y_1 = Companion_getInstance_3().d3o(12962537);
    this.z3y_1 = Companion_getInstance_3().d3o(10463450);
    this.a3z_1 = Companion_getInstance_3().d3o(7964363);
    this.b3z_1 = Companion_getInstance_3().d3o(6056896);
    this.c3z_1 = Companion_getInstance_3().d3o(4149685);
    this.d3z_1 = Companion_getInstance_3().d3o(3754411);
    this.e3z_1 = Companion_getInstance_3().d3o(3162015);
    this.f3z_1 = Companion_getInstance_3().d3o(2635155);
    this.g3z_1 = Companion_getInstance_3().d3o(1713022);
  }
  protoOf(ColorSchemes$Indigo$1).n3x = function () {
    return this.z3y_1;
  };
  protoOf(ColorSchemes$Indigo$1).o3x = function () {
    return this.a3z_1;
  };
  protoOf(ColorSchemes$Indigo$1).p3x = function () {
    return this.c3z_1;
  };
  protoOf(ColorSchemes$Indigo$1).q3x = function () {
    return this.d3z_1;
  };
  protoOf(ColorSchemes$Indigo$1).r3x = function () {
    return this.e3z_1;
  };
  protoOf(ColorSchemes$Indigo$1).s3x = function () {
    return this.g3z_1;
  };
  function ColorSchemes$Blue$1() {
    this.h3z_1 = Companion_getInstance_3().d3o(14938877);
    this.i3z_1 = Companion_getInstance_3().d3o(12312315);
    this.j3z_1 = Companion_getInstance_3().d3o(9489145);
    this.k3z_1 = Companion_getInstance_3().d3o(6600182);
    this.l3z_1 = Companion_getInstance_3().d3o(4367861);
    this.m3z_1 = Companion_getInstance_3().d3o(2201331);
    this.n3z_1 = Companion_getInstance_3().d3o(2001125);
    this.o3z_1 = Companion_getInstance_3().d3o(1668818);
    this.p3z_1 = Companion_getInstance_3().d3o(1402304);
    this.q3z_1 = Companion_getInstance_3().d3o(870305);
  }
  protoOf(ColorSchemes$Blue$1).n3x = function () {
    return this.j3z_1;
  };
  protoOf(ColorSchemes$Blue$1).o3x = function () {
    return this.k3z_1;
  };
  protoOf(ColorSchemes$Blue$1).p3x = function () {
    return this.m3z_1;
  };
  protoOf(ColorSchemes$Blue$1).q3x = function () {
    return this.n3z_1;
  };
  protoOf(ColorSchemes$Blue$1).r3x = function () {
    return this.o3z_1;
  };
  protoOf(ColorSchemes$Blue$1).s3x = function () {
    return this.q3z_1;
  };
  function ColorSchemes$LightBlue$1() {
    this.r3z_1 = Companion_getInstance_3().d3o(14808574);
    this.s3z_1 = Companion_getInstance_3().d3o(11789820);
    this.t3z_1 = Companion_getInstance_3().d3o(8508666);
    this.u3z_1 = Companion_getInstance_3().d3o(5227511);
    this.v3z_1 = Companion_getInstance_3().d3o(2733814);
    this.w3z_1 = Companion_getInstance_3().d3o(240116);
    this.x3z_1 = Companion_getInstance_3().d3o(236517);
    this.y3z_1 = Companion_getInstance_3().d3o(166097);
    this.z3z_1 = Companion_getInstance_3().d3o(161725);
    this.a40_1 = Companion_getInstance_3().d3o(87963);
  }
  protoOf(ColorSchemes$LightBlue$1).n3x = function () {
    return this.t3z_1;
  };
  protoOf(ColorSchemes$LightBlue$1).o3x = function () {
    return this.u3z_1;
  };
  protoOf(ColorSchemes$LightBlue$1).p3x = function () {
    return this.w3z_1;
  };
  protoOf(ColorSchemes$LightBlue$1).q3x = function () {
    return this.x3z_1;
  };
  protoOf(ColorSchemes$LightBlue$1).r3x = function () {
    return this.y3z_1;
  };
  protoOf(ColorSchemes$LightBlue$1).s3x = function () {
    return this.a40_1;
  };
  function ColorSchemes$Cyan$1() {
    this.b40_1 = Companion_getInstance_3().d3o(14743546);
    this.c40_1 = Companion_getInstance_3().d3o(11725810);
    this.d40_1 = Companion_getInstance_3().d3o(8445674);
    this.e40_1 = Companion_getInstance_3().d3o(5099745);
    this.f40_1 = Companion_getInstance_3().d3o(2541274);
    this.g40_1 = Companion_getInstance_3().d3o(48340);
    this.h40_1 = Companion_getInstance_3().d3o(44225);
    this.i40_1 = Companion_getInstance_3().d3o(38823);
    this.j40_1 = Companion_getInstance_3().d3o(33679);
    this.k40_1 = Companion_getInstance_3().d3o(24676);
  }
  protoOf(ColorSchemes$Cyan$1).n3x = function () {
    return this.d40_1;
  };
  protoOf(ColorSchemes$Cyan$1).o3x = function () {
    return this.e40_1;
  };
  protoOf(ColorSchemes$Cyan$1).p3x = function () {
    return this.g40_1;
  };
  protoOf(ColorSchemes$Cyan$1).q3x = function () {
    return this.h40_1;
  };
  protoOf(ColorSchemes$Cyan$1).r3x = function () {
    return this.i40_1;
  };
  protoOf(ColorSchemes$Cyan$1).s3x = function () {
    return this.k40_1;
  };
  function ColorSchemes$Teal$1() {
    this.l40_1 = Companion_getInstance_3().d3o(14742257);
    this.m40_1 = Companion_getInstance_3().d3o(11722715);
    this.n40_1 = Companion_getInstance_3().d3o(8440772);
    this.o40_1 = Companion_getInstance_3().d3o(5093036);
    this.p40_1 = Companion_getInstance_3().d3o(2533018);
    this.q40_1 = Companion_getInstance_3().d3o(38536);
    this.r40_1 = Companion_getInstance_3().d3o(35195);
    this.s40_1 = Companion_getInstance_3().d3o(31083);
    this.t40_1 = Companion_getInstance_3().d3o(26972);
    this.u40_1 = Companion_getInstance_3().d3o(19776);
  }
  protoOf(ColorSchemes$Teal$1).n3x = function () {
    return this.n40_1;
  };
  protoOf(ColorSchemes$Teal$1).o3x = function () {
    return this.o40_1;
  };
  protoOf(ColorSchemes$Teal$1).p3x = function () {
    return this.q40_1;
  };
  protoOf(ColorSchemes$Teal$1).q3x = function () {
    return this.r40_1;
  };
  protoOf(ColorSchemes$Teal$1).r3x = function () {
    return this.s40_1;
  };
  protoOf(ColorSchemes$Teal$1).s3x = function () {
    return this.u40_1;
  };
  function ColorSchemes$Green$1() {
    this.v40_1 = Companion_getInstance_3().d3o(15267305);
    this.w40_1 = Companion_getInstance_3().d3o(13166281);
    this.x40_1 = Companion_getInstance_3().d3o(10868391);
    this.y40_1 = Companion_getInstance_3().d3o(8505220);
    this.z40_1 = Companion_getInstance_3().d3o(6732650);
    this.a41_1 = Companion_getInstance_3().d3o(5025616);
    this.b41_1 = Companion_getInstance_3().d3o(4431943);
    this.c41_1 = Companion_getInstance_3().d3o(3706428);
    this.d41_1 = Companion_getInstance_3().d3o(3046706);
    this.e41_1 = Companion_getInstance_3().d3o(1793568);
  }
  protoOf(ColorSchemes$Green$1).n3x = function () {
    return this.x40_1;
  };
  protoOf(ColorSchemes$Green$1).o3x = function () {
    return this.y40_1;
  };
  protoOf(ColorSchemes$Green$1).p3x = function () {
    return this.a41_1;
  };
  protoOf(ColorSchemes$Green$1).q3x = function () {
    return this.b41_1;
  };
  protoOf(ColorSchemes$Green$1).r3x = function () {
    return this.c41_1;
  };
  protoOf(ColorSchemes$Green$1).s3x = function () {
    return this.e41_1;
  };
  function ColorSchemes$LightGreen$1() {
    this.f41_1 = Companion_getInstance_3().d3o(15857897);
    this.g41_1 = Companion_getInstance_3().d3o(14478792);
    this.h41_1 = Companion_getInstance_3().d3o(12968357);
    this.i41_1 = Companion_getInstance_3().d3o(11457921);
    this.j41_1 = Companion_getInstance_3().d3o(10275941);
    this.k41_1 = Companion_getInstance_3().d3o(9159498);
    this.l41_1 = Companion_getInstance_3().d3o(8172354);
    this.m41_1 = Companion_getInstance_3().d3o(6856504);
    this.n41_1 = Companion_getInstance_3().d3o(5606191);
    this.o41_1 = Companion_getInstance_3().d3o(3369246);
  }
  protoOf(ColorSchemes$LightGreen$1).n3x = function () {
    return this.h41_1;
  };
  protoOf(ColorSchemes$LightGreen$1).o3x = function () {
    return this.i41_1;
  };
  protoOf(ColorSchemes$LightGreen$1).p3x = function () {
    return this.k41_1;
  };
  protoOf(ColorSchemes$LightGreen$1).q3x = function () {
    return this.l41_1;
  };
  protoOf(ColorSchemes$LightGreen$1).r3x = function () {
    return this.m41_1;
  };
  protoOf(ColorSchemes$LightGreen$1).s3x = function () {
    return this.o41_1;
  };
  function ColorSchemes$Lime$1() {
    this.p41_1 = Companion_getInstance_3().d3o(16382951);
    this.q41_1 = Companion_getInstance_3().d3o(15791299);
    this.r41_1 = Companion_getInstance_3().d3o(15134364);
    this.s41_1 = Companion_getInstance_3().d3o(14477173);
    this.t41_1 = Companion_getInstance_3().d3o(13951319);
    this.u41_1 = Companion_getInstance_3().d3o(13491257);
    this.v41_1 = Companion_getInstance_3().d3o(12634675);
    this.w41_1 = Companion_getInstance_3().d3o(11514923);
    this.x41_1 = Companion_getInstance_3().d3o(10394916);
    this.y41_1 = Companion_getInstance_3().d3o(8550167);
  }
  protoOf(ColorSchemes$Lime$1).n3x = function () {
    return this.r41_1;
  };
  protoOf(ColorSchemes$Lime$1).o3x = function () {
    return this.s41_1;
  };
  protoOf(ColorSchemes$Lime$1).p3x = function () {
    return this.u41_1;
  };
  protoOf(ColorSchemes$Lime$1).q3x = function () {
    return this.v41_1;
  };
  protoOf(ColorSchemes$Lime$1).r3x = function () {
    return this.w41_1;
  };
  protoOf(ColorSchemes$Lime$1).s3x = function () {
    return this.y41_1;
  };
  function ColorSchemes$Yellow$1() {
    this.z41_1 = Companion_getInstance_3().d3o(16776679);
    this.a42_1 = Companion_getInstance_3().d3o(16775620);
    this.b42_1 = Companion_getInstance_3().d3o(16774557);
    this.c42_1 = Companion_getInstance_3().d3o(16773494);
    this.d42_1 = Companion_getInstance_3().d3o(16772696);
    this.e42_1 = Companion_getInstance_3().d3o(16771899);
    this.f42_1 = Companion_getInstance_3().d3o(16635957);
    this.g42_1 = Companion_getInstance_3().d3o(16498733);
    this.h42_1 = Companion_getInstance_3().d3o(16361509);
    this.i42_1 = Companion_getInstance_3().d3o(16088855);
  }
  protoOf(ColorSchemes$Yellow$1).n3x = function () {
    return this.b42_1;
  };
  protoOf(ColorSchemes$Yellow$1).o3x = function () {
    return this.c42_1;
  };
  protoOf(ColorSchemes$Yellow$1).p3x = function () {
    return this.e42_1;
  };
  protoOf(ColorSchemes$Yellow$1).q3x = function () {
    return this.f42_1;
  };
  protoOf(ColorSchemes$Yellow$1).r3x = function () {
    return this.g42_1;
  };
  protoOf(ColorSchemes$Yellow$1).s3x = function () {
    return this.i42_1;
  };
  function ColorSchemes$Amber$1() {
    this.j42_1 = Companion_getInstance_3().d3o(16775393);
    this.k42_1 = Companion_getInstance_3().d3o(16772275);
    this.l42_1 = Companion_getInstance_3().d3o(16769154);
    this.m42_1 = Companion_getInstance_3().d3o(16766287);
    this.n42_1 = Companion_getInstance_3().d3o(16763432);
    this.o42_1 = Companion_getInstance_3().d3o(16761095);
    this.p42_1 = Companion_getInstance_3().d3o(16757504);
    this.q42_1 = Companion_getInstance_3().d3o(16752640);
    this.r42_1 = Companion_getInstance_3().d3o(16748288);
    this.s42_1 = Companion_getInstance_3().d3o(16740096);
  }
  protoOf(ColorSchemes$Amber$1).n3x = function () {
    return this.l42_1;
  };
  protoOf(ColorSchemes$Amber$1).o3x = function () {
    return this.m42_1;
  };
  protoOf(ColorSchemes$Amber$1).p3x = function () {
    return this.o42_1;
  };
  protoOf(ColorSchemes$Amber$1).q3x = function () {
    return this.p42_1;
  };
  protoOf(ColorSchemes$Amber$1).r3x = function () {
    return this.q42_1;
  };
  protoOf(ColorSchemes$Amber$1).s3x = function () {
    return this.s42_1;
  };
  function ColorSchemes$Orange$1() {
    this.t42_1 = Companion_getInstance_3().d3o(16774112);
    this.u42_1 = Companion_getInstance_3().d3o(16769202);
    this.v42_1 = Companion_getInstance_3().d3o(16764032);
    this.w42_1 = Companion_getInstance_3().d3o(16758605);
    this.x42_1 = Companion_getInstance_3().d3o(16754470);
    this.y42_1 = Companion_getInstance_3().d3o(16750592);
    this.z42_1 = Companion_getInstance_3().d3o(16485376);
    this.a43_1 = Companion_getInstance_3().d3o(16088064);
    this.b43_1 = Companion_getInstance_3().d3o(15690752);
    this.c43_1 = Companion_getInstance_3().d3o(15094016);
  }
  protoOf(ColorSchemes$Orange$1).n3x = function () {
    return this.v42_1;
  };
  protoOf(ColorSchemes$Orange$1).o3x = function () {
    return this.w42_1;
  };
  protoOf(ColorSchemes$Orange$1).p3x = function () {
    return this.y42_1;
  };
  protoOf(ColorSchemes$Orange$1).q3x = function () {
    return this.z42_1;
  };
  protoOf(ColorSchemes$Orange$1).r3x = function () {
    return this.a43_1;
  };
  protoOf(ColorSchemes$Orange$1).s3x = function () {
    return this.c43_1;
  };
  function ColorSchemes$DeepOrange$1() {
    this.d43_1 = Companion_getInstance_3().d3o(16509415);
    this.e43_1 = Companion_getInstance_3().d3o(16764092);
    this.f43_1 = Companion_getInstance_3().d3o(16755601);
    this.g43_1 = Companion_getInstance_3().d3o(16747109);
    this.h43_1 = Companion_getInstance_3().d3o(16740419);
    this.i43_1 = Companion_getInstance_3().d3o(16733986);
    this.j43_1 = Companion_getInstance_3().d3o(16011550);
    this.k43_1 = Companion_getInstance_3().d3o(15092249);
    this.l43_1 = Companion_getInstance_3().d3o(14172949);
    this.m43_1 = Companion_getInstance_3().d3o(12531212);
  }
  protoOf(ColorSchemes$DeepOrange$1).n3x = function () {
    return this.f43_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).o3x = function () {
    return this.g43_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).p3x = function () {
    return this.i43_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).q3x = function () {
    return this.j43_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).r3x = function () {
    return this.k43_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).s3x = function () {
    return this.m43_1;
  };
  function ColorSchemes$Brown$1() {
    this.n43_1 = Companion_getInstance_3().d3o(15723497);
    this.o43_1 = Companion_getInstance_3().d3o(14142664);
    this.p43_1 = Companion_getInstance_3().d3o(12364452);
    this.q43_1 = Companion_getInstance_3().d3o(10586239);
    this.r43_1 = Companion_getInstance_3().d3o(9268835);
    this.s43_1 = Companion_getInstance_3().d3o(7951688);
    this.t43_1 = Companion_getInstance_3().d3o(7162945);
    this.u43_1 = Companion_getInstance_3().d3o(6111287);
    this.v43_1 = Companion_getInstance_3().d3o(5125166);
    this.w43_1 = Companion_getInstance_3().d3o(4073251);
  }
  protoOf(ColorSchemes$Brown$1).n3x = function () {
    return this.p43_1;
  };
  protoOf(ColorSchemes$Brown$1).o3x = function () {
    return this.q43_1;
  };
  protoOf(ColorSchemes$Brown$1).p3x = function () {
    return this.s43_1;
  };
  protoOf(ColorSchemes$Brown$1).q3x = function () {
    return this.t43_1;
  };
  protoOf(ColorSchemes$Brown$1).r3x = function () {
    return this.u43_1;
  };
  protoOf(ColorSchemes$Brown$1).s3x = function () {
    return this.w43_1;
  };
  function ColorSchemes$Gray$1() {
    this.x43_1 = Companion_getInstance_3().d3o(16448250);
    this.y43_1 = Companion_getInstance_3().d3o(16119285);
    this.z43_1 = Companion_getInstance_3().d3o(15658734);
    this.a44_1 = Companion_getInstance_3().d3o(14737632);
    this.b44_1 = Companion_getInstance_3().d3o(12434877);
    this.c44_1 = Companion_getInstance_3().d3o(10395294);
    this.d44_1 = Companion_getInstance_3().d3o(7697781);
    this.e44_1 = Companion_getInstance_3().d3o(6381921);
    this.f44_1 = Companion_getInstance_3().d3o(4342338);
    this.g44_1 = Companion_getInstance_3().d3o(2171169);
  }
  protoOf(ColorSchemes$Gray$1).n3x = function () {
    return this.z43_1;
  };
  protoOf(ColorSchemes$Gray$1).o3x = function () {
    return this.a44_1;
  };
  protoOf(ColorSchemes$Gray$1).p3x = function () {
    return this.c44_1;
  };
  protoOf(ColorSchemes$Gray$1).q3x = function () {
    return this.d44_1;
  };
  protoOf(ColorSchemes$Gray$1).r3x = function () {
    return this.e44_1;
  };
  protoOf(ColorSchemes$Gray$1).s3x = function () {
    return this.g44_1;
  };
  function ColorSchemes$BlueGray$1() {
    this.h44_1 = Companion_getInstance_3().d3o(15527921);
    this.i44_1 = Companion_getInstance_3().d3o(13621468);
    this.j44_1 = Companion_getInstance_3().d3o(11583173);
    this.k44_1 = Companion_getInstance_3().d3o(9479342);
    this.l44_1 = Companion_getInstance_3().d3o(7901340);
    this.m44_1 = Companion_getInstance_3().d3o(6323595);
    this.n44_1 = Companion_getInstance_3().d3o(5533306);
    this.o44_1 = Companion_getInstance_3().d3o(4545124);
    this.p44_1 = Companion_getInstance_3().d3o(3622735);
    this.q44_1 = Companion_getInstance_3().d3o(2503224);
  }
  protoOf(ColorSchemes$BlueGray$1).n3x = function () {
    return this.j44_1;
  };
  protoOf(ColorSchemes$BlueGray$1).o3x = function () {
    return this.k44_1;
  };
  protoOf(ColorSchemes$BlueGray$1).p3x = function () {
    return this.m44_1;
  };
  protoOf(ColorSchemes$BlueGray$1).q3x = function () {
    return this.n44_1;
  };
  protoOf(ColorSchemes$BlueGray$1).r3x = function () {
    return this.o44_1;
  };
  protoOf(ColorSchemes$BlueGray$1).s3x = function () {
    return this.q44_1;
  };
  function ColorSchemes() {
    ColorSchemes_instance = this;
    var tmp = this;
    tmp.r44_1 = new ColorSchemes$Red$1();
    var tmp_0 = this;
    tmp_0.s44_1 = new ColorSchemes$Pink$1();
    var tmp_1 = this;
    tmp_1.t44_1 = new ColorSchemes$Purple$1();
    var tmp_2 = this;
    tmp_2.u44_1 = new ColorSchemes$DeepPurple$1();
    var tmp_3 = this;
    tmp_3.v44_1 = new ColorSchemes$Indigo$1();
    var tmp_4 = this;
    tmp_4.w44_1 = new ColorSchemes$Blue$1();
    var tmp_5 = this;
    tmp_5.x44_1 = new ColorSchemes$LightBlue$1();
    var tmp_6 = this;
    tmp_6.y44_1 = new ColorSchemes$Cyan$1();
    var tmp_7 = this;
    tmp_7.z44_1 = new ColorSchemes$Teal$1();
    var tmp_8 = this;
    tmp_8.a45_1 = new ColorSchemes$Green$1();
    var tmp_9 = this;
    tmp_9.b45_1 = new ColorSchemes$LightGreen$1();
    var tmp_10 = this;
    tmp_10.c45_1 = new ColorSchemes$Lime$1();
    var tmp_11 = this;
    tmp_11.d45_1 = new ColorSchemes$Yellow$1();
    var tmp_12 = this;
    tmp_12.e45_1 = new ColorSchemes$Amber$1();
    var tmp_13 = this;
    tmp_13.f45_1 = new ColorSchemes$Orange$1();
    var tmp_14 = this;
    tmp_14.g45_1 = new ColorSchemes$DeepOrange$1();
    var tmp_15 = this;
    tmp_15.h45_1 = new ColorSchemes$Brown$1();
    var tmp_16 = this;
    tmp_16.i45_1 = new ColorSchemes$Gray$1();
    var tmp_17 = this;
    tmp_17.j45_1 = new ColorSchemes$BlueGray$1();
    this.k45_1 = 0;
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  function SilkPalettes() {
  }
  function LegacyMutableSilkPalettes(palettes, light, dark) {
    light = light === VOID ? new LegacyMutableSilkPalette(palettes.l45_1) : light;
    dark = dark === VOID ? new LegacyMutableSilkPalette(palettes.m45_1) : dark;
    this.o45_1 = light;
    this.p45_1 = dark;
    this.q45_1 = 0;
  }
  function PaletteEntry($outer) {
    this.r45_1 = $outer;
  }
  function Button($outer) {
    this.w45_1 = $outer;
    this.s45_1 = new PaletteEntry(this.w45_1);
    this.t45_1 = new PaletteEntry(this.w45_1);
    this.u45_1 = new PaletteEntry(this.w45_1);
    this.v45_1 = new PaletteEntry(this.w45_1);
  }
  function Checkbox($outer) {
    this.a46_1 = $outer;
    this.x45_1 = new PaletteEntry(this.a46_1);
    this.y45_1 = new PaletteEntry(this.a46_1);
    this.z45_1 = new PaletteEntry(this.a46_1);
  }
  function Input($outer) {
    this.g46_1 = $outer;
    this.b46_1 = new PaletteEntry(this.g46_1);
    this.c46_1 = new PaletteEntry(this.g46_1);
    this.d46_1 = new PaletteEntry(this.g46_1);
    this.e46_1 = new PaletteEntry(this.g46_1);
    this.f46_1 = new PaletteEntry(this.g46_1);
  }
  function Link($outer) {
    this.j46_1 = $outer;
    this.h46_1 = new PaletteEntry(this.j46_1);
    this.i46_1 = new PaletteEntry(this.j46_1);
  }
  function Switch($outer) {
    this.n46_1 = $outer;
    this.k46_1 = new PaletteEntry(this.n46_1);
    this.l46_1 = new PaletteEntry(this.n46_1);
    this.m46_1 = new PaletteEntry(this.n46_1);
  }
  function Tab($outer) {
    this.w46_1 = $outer;
    this.o46_1 = new PaletteEntry(this.w46_1);
    this.p46_1 = new PaletteEntry(this.w46_1);
    this.q46_1 = new PaletteEntry(this.w46_1);
    this.r46_1 = new PaletteEntry(this.w46_1);
    this.s46_1 = new PaletteEntry(this.w46_1);
    this.t46_1 = new PaletteEntry(this.w46_1);
    this.u46_1 = new PaletteEntry(this.w46_1);
    this.v46_1 = new PaletteEntry(this.w46_1);
  }
  function Tooltip($outer) {
    this.z46_1 = $outer;
    this.x46_1 = new PaletteEntry(this.z46_1);
    this.y46_1 = new PaletteEntry(this.z46_1);
  }
  function LegacyMutableSilkPalette(delegatePalette) {
    this.a47_1 = delegatePalette;
    this.b47_1 = new Button(this);
    this.c47_1 = new Checkbox(this);
    this.d47_1 = new Input(this);
    this.e47_1 = new Link(this);
    this.f47_1 = new Switch(this);
    this.g47_1 = new Tab(this);
    this.h47_1 = new Tooltip(this);
    this.i47_1 = 8;
  }
  function Palettes() {
  }
  function MutablePalettes() {
    this.l45_1 = new MutablePalette();
    this.m45_1 = new MutablePalette();
    this.n45_1 = 0;
  }
  protoOf(MutablePalettes).j47 = function () {
    return this.l45_1;
  };
  protoOf(MutablePalettes).k47 = function () {
    return this.m45_1;
  };
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.n47_1 = palette;
    this.o47_1 = prefix;
    this.p47_1 = 8;
  }
  protoOf(EntryDelegate).r2k = function (thisRef, property) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.o47_1;
    tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.n47_1.q47_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).s47 = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.n47_1.q47_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.o47_1;
    var tmp2_set = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    tmp1_set.l3(tmp2_set, value);
  };
  function ColorGroup(palette, groupName) {
    this.t47_1 = palette;
    this.u47_1 = groupName;
    this.v47_1 = 8;
  }
  protoOf(ColorGroup).w47 = function () {
    return new EntryDelegate(this.t47_1, this.u47_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q47_1 = LinkedHashMap_init_$Create$();
    this.r47_1 = 8;
  }
  protoOf(MutablePalette).k39 = function (key) {
    return this.q47_1.h2(key);
  };
  protoOf(MutablePalette).x47 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.q47_1.l3(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().r3s_1.l47(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.y47();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$(side, cornerRadius) {
    return RectF_init_$Init$(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.z47_1 = topLeft;
    this.a48_1 = botRight;
    this.b48_1 = cornerRadius;
    this.c48_1 = 0;
  }
  protoOf(RectF).y47 = function () {
    var tmp;
    if ((((!(this.z47_1.h3_1 === 0.0) ? true : !(this.z47_1.i3_1 === 0.0)) ? true : !(this.a48_1.h3_1 === 100.0)) ? true : !(this.a48_1.i3_1 === 100.0)) ? true : !equals(this.b48_1, get_px(0))) {
      tmp = new InsetPath(this.z47_1, this.a48_1, this.b48_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
    this.d48_1 = 0;
  }
  protoOf(Path).f48 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).g48 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.h3_1) + '% ' + toString(_this__u8e3s4.i3_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.h3_1, 100.0 - _this__u8e3s4.i3_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.i48_1 = topLeft;
    this.j48_1 = roundness;
    this.k48_1 = from100(botRight);
    this.l48_1 = 0;
  }
  protoOf(InsetPath).e48 = function () {
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = this.j48_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(tmp0_takeIf, get_px(0))) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.i48_1.h3_1;
    var top = this.i48_1.i3_1;
    var right = this.k48_1.h3_1;
    var bottom = this.k48_1.i3_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.f48(left) : (left === right ? top === bottom : false) ? this.g48(to(top, left)) : this.f48(top) + ' ' + this.f48(right) + ' ' + this.f48(bottom) + ' ' + this.f48(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($tmp0_safe_receiver) {
    return function ($this$styleModifier) {
      $this$styleModifier.s28('clip-path', $tmp0_safe_receiver.e48());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(SilkStyleSheet).y29 = style;
  protoOf(SilkStyleSheet).a2a = style_0;
  protoOf(SilkStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(SilkStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(SilkStyleSheet).b2a = get_hover;
  protoOf(MutablePalettes).l47 = get;
  protoOf(MutablePalette).m47 = getValue_0;
  //endregion
  //region block: init
  _SilkTheme = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = get_entries;
  _.$_$.d = ResponsiveValues;
  _.$_$.e = ComponentStyle$composable;
  _.$_$.f = ComponentStyle_0;
  _.$_$.g = get_active;
  _.$_$.h = addVariantBase;
  _.$_$.i = addVariant;
  _.$_$.j = get_ariaDisabled;
  _.$_$.k = get_ariaInvalid;
  _.$_$.l = base$composable;
  _.$_$.m = base;
  _.$_$.n = base_0;
  _.$_$.o = get_disabled;
  _.$_$.p = get_focus;
  _.$_$.q = get_focusVisible;
  _.$_$.r = get_hover_0;
  _.$_$.s = get_link;
  _.$_$.t = not;
  _.$_$.u = get_placeholder;
  _.$_$.v = toModifier$composable;
  _.$_$.w = get_visited;
  _.$_$.x = SpanText$composable;
  _.$_$.y = renderWithDeferred$composable;
  _.$_$.z = set_additionalSilkInitialization;
  _.$_$.a1 = rememberBreakpoint$composable;
  _.$_$.b1 = ColorGroup;
  _.$_$.c1 = MutablePalette;
  _.$_$.d1 = toPalette;
  _.$_$.e1 = suffixedWith;
  _.$_$.f1 = clip;
  _.$_$.g1 = modifyComponentStyleBase;
  _.$_$.h1 = prepareSilkFoundation$composable;
  _.$_$.i1 = Breakpoint_LG_getInstance;
  _.$_$.j1 = Breakpoint_MD_getInstance;
  _.$_$.k1 = Breakpoint_SM_getInstance;
  _.$_$.l1 = Breakpoint_XL_getInstance;
  _.$_$.m1 = Breakpoint_ZERO_getInstance;
  _.$_$.n1 = RectF_init_$Create$;
  _.$_$.o1 = Companion_getInstance_5;
  _.$_$.p1 = Companion_getInstance_10;
  _.$_$.q1 = ColorSchemes_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
