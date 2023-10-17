(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
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
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var isObject = kotlin_kotlin.$_$.s9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Unit_getInstance = kotlin_kotlin.$_$.i4;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.ca;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var VOID = kotlin_kotlin.$_$.he;
  var setMetadataFor = kotlin_kotlin.$_$.da;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var to = kotlin_kotlin.$_$.ge;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var equals = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.e9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var classMeta = kotlin_kotlin.$_$.v8;
  var mapCapacity = kotlin_kotlin.$_$.v6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var listOf = kotlin_kotlin.$_$.u6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i5;
  var distinct = kotlin_kotlin.$_$.w5;
  var lazy = kotlin_kotlin.$_$.xd;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var charArrayOf = kotlin_kotlin.$_$.q8;
  var split = kotlin_kotlin.$_$.qb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var first = kotlin_kotlin.$_$.d6;
  var Modifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.p9;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var plus = kotlin_kotlin.$_$.a7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var removeSuffix = kotlin_kotlin.$_$.nb;
  var getStringHashCode = kotlin_kotlin.$_$.d9;
  var StyleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var copyToArray = kotlin_kotlin.$_$.v5;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var getValue = kotlin_kotlin.$_$.g6;
  var toList = kotlin_kotlin.$_$.m7;
  var removePrefix = kotlin_kotlin.$_$.mb;
  var joinToString = kotlin_kotlin.$_$.k6;
  var listOf_0 = kotlin_kotlin.$_$.t6;
  var emptyList = kotlin_kotlin.$_$.x5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var enumEntries = kotlin_kotlin.$_$.k8;
  var Enum = kotlin_kotlin.$_$.rc;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var endsWith = kotlin_kotlin.$_$.cb;
  var startsWith = kotlin_kotlin.$_$.tb;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Map = kotlin_kotlin.$_$.y4;
  var trimIndent = kotlin_kotlin.$_$.jc;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yd;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var interfaceMeta = kotlin_kotlin.$_$.g9;
  var ensureNotNull = kotlin_kotlin.$_$.sd;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var objectCreate = kotlin_kotlin.$_$.aa;
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
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta);
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
    var tmp0 = tmp0_subject.y4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = this.z40();
        break;
      case 1:
        tmp = this.a41();
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
    return ensureNotNull(this.f34(key));
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
    $composer_0 = $composer_0.ry(1934335721);
    sourceInformation($composer_0, 'C(prepareSilkFoundation$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.hz(initSilk_1._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.iy()) {
      $composer_0.py();
      if (($changed & 1) === 0 ? true : $composer_0.jy()) {
        if (!(($default & 1) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance().fy_1) {
            // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
            var value = prepareSilkFoundation$composable$lambda;
            $composer_1.dz(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.my();
          initSilk_1._v = tmp0;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.wy();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.qy();
      if (isTraceInProgress()) {
        traceEventStart(1934335721, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.ny(-1594222658, Unit_getInstance());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = initSilk_1._v;
      var $composer_2 = $composer_0;
      $composer_2.ly(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.ez(tmp1_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().fy_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
        var value_0 = prepareSilkFoundation$composable$lambda_0(initSilk_1);
        $composer_2.dz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.my();
      initSilk(tmp0_0);
      $composer_0.oy();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp4_Style$composable = KobwebComposeStyleSheet_getInstance();
      var $composer_3 = $composer_0;
      $composer_3.ly(-168645675);
      sourceInformation($composer_3, 'CC(Style$composable)');
      Style$composable(null, tmp4_Style$composable.x27(), $composer_3, 0, 1);
      $composer_3.my();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp6_Style$composable = SilkStyleSheet_getInstance();
      var $composer_4 = $composer_0;
      $composer_4.ly(-168645675);
      sourceInformation($composer_4, 'CC(Style$composable)');
      Style$composable(null, tmp6_Style$composable.x27(), $composer_4, 0, 1);
      $composer_4.my();
      content($composer_0, 14 & $dirty >> 3);
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
      tmp0_safe_receiver.p1d(prepareSilkFoundation$composable$lambda_1(initSilk_1, content, $changed, $default));
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
    this.t3j_1 = 0;
  }
  protoOf(SilkStyleSheet).b28 = function (selector, cssRule) {
    return this.a28(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function KeyframesBuilder(colorMode) {
    this.u3j_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.v3j_1 = LinkedHashMap_init_$Create$();
    this.w3j_1 = 8;
  }
  protoOf(KeyframesBuilder).x3j = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.v3j_1;
    var tmp1_plusAssign = to(From_getInstance(), createStyle);
    tmp0_plusAssign.j3(tmp1_plusAssign.f3_1, tmp1_plusAssign.g3_1);
  };
  protoOf(KeyframesBuilder).y3j = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.v3j_1;
    var tmp1_plusAssign = to(To_getInstance(), createStyle);
    tmp0_plusAssign.j3(tmp1_plusAssign.f3_1, tmp1_plusAssign.g3_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(get_comparableKeyframeStyles(this), get_comparableKeyframeStyles(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(get_comparableKeyframeStyles(this));
  };
  protoOf(KeyframesBuilder).z3j = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.v3j_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.f());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tmp0_map.s1().c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.r1();
      // Inline function 'kotlin.collections.component2' call
      var create = item.u1();
      var styles = toStyles(create());
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      tmp0_mapTo.a(tmp$ret$3);
    }
    var keyframeRules = tmp0_mapTo;
    stylesheet.g26(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function get_comparableKeyframeStyles(_this__u8e3s4) {
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = _this__u8e3s4.v3j_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp0_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_mapValues.f()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = tmp0_mapValues.s1().c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.r1();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var create = element.u1();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(create())(tmp0_apply);
      tmp0_mapValuesTo.j3(tmp, tmp0_apply);
    }
    return tmp0_mapValuesTo;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).a3k = function (build) {
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
      return !Companion_getInstance_4().a3k(this$0.b3k_1);
    };
  }
  function Keyframes(name, prefix, init) {
    Companion_getInstance_4();
    prefix = prefix === VOID ? null : prefix;
    this.b3k_1 = init;
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
    tmp.c3k_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.d3k_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
    this.e3k_1 = 8;
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.h3k_1 = prefix;
    this.i3k_1 = init;
    this.j3k_1 = 0;
  }
  protoOf(KeyframesProvider).k2i = function (propertyName) {
    var name = titleCamelCaseToKebabCase(propertyName);
    return new Keyframes(name, this.h3k_1, this.i3k_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.m3k(keyframes.c3k_1, keyframes.b3k_1);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.x2g(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.x2g(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.x2g(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.x2g(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.x2g(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.x2g(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.x2g(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.x2g(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.x2g(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.x2g(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.q3k(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.q3k(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.q3k(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.q3k(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.q3k(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.r3k(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.r3k(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.r3k(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.r3k(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
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
    $this$ComponentStyle.r3k(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
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
      Companion_getInstance_5().s3k_1.a(element_0);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.s3k_1 = LinkedHashSet_init_$Create$();
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.c28(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.a3l_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.y3k_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.w3k_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.t3k_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.u3k_1);
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
    var tmp0_groupBy = _this__u8e3s4.o3k_1;
    // Inline function 'kotlin.collections.groupByTo' call
    var tmp0_groupByTo = LinkedHashMap_init_$Create$();
    var tmp0_iterator = tmp0_groupBy.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
      var key = element.r1();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = tmp0_groupByTo.f2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        tmp0_groupByTo.j3(key, answer);
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
    var tmp0_iterator_0 = tmp0_groupByTo.s1().c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.r1();
      var tmp$ret$8;
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var group = element_0.u1();
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
          if (!(equals(element_1.d3l_1, first_0.d3l_1) ? element_1.e3l_1 == first_0.e3l_1 : false)) {
            // Inline function 'kotlin.check.<anonymous>' call
            var message = 'Check failed.';
            throw IllegalStateException_init_$Create$(toString(message));
          }
          mergedModifier = mergedModifier.p3h(element_1.c3l_1);
        }
        tmp$ret$8 = new CssModifier(mergedModifier, first_0.d3l_1, first_0.e3l_1);
      }
      tmp0_mapValuesTo.j3(tmp_0, tmp$ret$8);
    }
    return tmp0_mapValuesTo;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      var tmp0_forEach = $styles.s2c_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.s1().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.u26(element.r1(), element.u1());
      }
      var tmp1_forEach = $styles.t2c_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = tmp1_forEach.s1().c();
      var tmp0_iterator_0 = tmp$ret$1;
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.a27(element_0.r1(), element_0.u1());
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
        var tmp0_orEmpty = $cssRuleKey.g3l_1;
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var cssRule = name + tmp$ret$0;
        var tmp_0;
        if (!($cssRuleKey.f3l_1 == null)) {
          var tmp$ret$1;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>.<anonymous>' call
          media($styleSheet, $cssRuleKey.f3l_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
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
  protoOf(ComponentStyle).p3l = function (styleSheet, selectorName) {
    notifySelectorName(Companion_getInstance_5(), selectorName);
    var lightModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this.k3l_1);
    var darkModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this.k3l_1);
    var tmp = Companion_getInstance_6();
    var tmp0_safe_receiver = lightModifiers.f2(Companion_getInstance_7().q3l_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c3l_1;
    var tmp1_safe_receiver = darkModifiers.f2(Companion_getInstance_7().q3l_1);
    var tmp2_safe_receiver = tmp.r3l(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c3l_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = plus(lightModifiers.g2(), darkModifiers.g2());
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_7().q3l_1)) {
        tmp0_filterTo.a(element);
      }
    }
    var allCssRuleKeys = tmp0_filterTo;
    var tmp3_iterator = allCssRuleKeys.c();
    while (tmp3_iterator.d()) {
      var cssRuleKey = tmp3_iterator.e();
      var tmp_1 = Companion_getInstance_6();
      var tmp4_safe_receiver = lightModifiers.f2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.c3l_1;
      var tmp5_safe_receiver = darkModifiers.f2(cssRuleKey);
      var tmp6_safe_receiver = tmp_1.r3l(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.c3l_1);
      if (tmp6_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        withFinalSelectorName(this, selectorName, tmp6_safe_receiver, ComponentStyle$addStylesInto$lambda_0(cssRuleKey, styleSheet, this));
      }
    }
  };
  protoOf(ComponentStyle).s3l = function (styleSheet) {
    this.p3l(styleSheet, '.' + this.m3l_1);
  };
  protoOf(ComponentStyle).t3l = function () {
    return new ImmutableComponentStyle(this.m3l_1, this.i3l_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_5();
    prefix = prefix === VOID ? null : prefix;
    this.i3l_1 = extraModifiers;
    this.j3l_1 = prefix;
    this.k3l_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l3l_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.j3l_1;
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
    tmp.m3l_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.n3l_1 = ArrayList_init_$Create$_0();
    this.o3l_1 = 8;
  }
  protoOf(ComponentStyle).u3l = function (name, extraModifiers, init) {
    // Inline function 'kotlin.also' call
    var tmp0_also = new SimpleComponentVariant(new ComponentStyle(this.m3l_1 + '-' + name, extraModifiers, null, init), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant$composable.<anonymous>' call
    this.n3l_1.a(tmp0_also);
    return tmp0_also;
  };
  protoOf(ComponentStyleProvider).k2i = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.x3l_1, this.y3l_1, this.z3l_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.x3l_1 = extraModifiers;
    this.y3l_1 = prefix;
    this.z3l_1 = init;
    this.a3m_1 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.e3m_1 = colorMode;
    this.f3m_1 = 0;
  }
  protoOf(ComponentModifiers).g3m = function () {
    return this.e3m_1;
  };
  function Empty() {
    Empty_instance = this;
    ComponentVariant.call(this);
    this.l3m_1 = 0;
  }
  protoOf(Empty).m3m = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(1324185618);
    if (isTraceInProgress()) {
      traceEventStart(1324185618, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentVariant.Empty.toModifier$composable (ComponentStyle.kt:610)');
    }
    var tmp0 = Companion_getInstance_0();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function ComponentVariant() {
    this.n3m_1 = 0;
  }
  protoOf(ComponentVariant).o3m = function (next) {
    return next === Empty_getInstance() ? this : this === Empty_getInstance() ? next : new CompositeComponentVariant(this, next);
  };
  function Light(styles) {
    this.a3l_1 = styles;
    this.b3l_1 = 0;
  }
  function Dark(styles) {
    this.y3k_1 = styles;
    this.z3k_1 = 0;
  }
  function ColorAgnostic(styles) {
    this.w3k_1 = styles;
    this.x3k_1 = 0;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.t3k_1 = lightStyles;
    this.u3k_1 = darkStyles;
    this.v3k_1 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).r3l = function (lightModifiers, darkModifiers) {
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
    this.q3l_1 = new Key(null, null);
  }
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Key(mediaQuery, suffix) {
    this.f3l_1 = mediaQuery;
    this.g3l_1 = suffix;
    this.h3l_1 = 0;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.f3l_1 + ', suffix=' + this.g3l_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.f3l_1 == null ? 0 : getStringHashCode(this.f3l_1);
    result = imul(result, 31) + (this.g3l_1 == null ? 0 : getStringHashCode(this.g3l_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.f3l_1 == tmp0_other_with_cast.f3l_1))
      return false;
    if (!(this.g3l_1 == tmp0_other_with_cast.g3l_1))
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
    this.c3l_1 = modifier;
    this.d3l_1 = mediaQuery;
    this.e3l_1 = suffix;
    this.c3l_1.o3h(Unit_getInstance(), CssModifier$lambda);
  }
  protoOf(CssModifier).r1 = function () {
    var tmp0_safe_receiver = this.d3l_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.e3l_1);
  };
  function ImmutableComponentStyle(name, extraModifiers) {
    this.p3m_1 = name;
    this.q3m_1 = extraModifiers;
    this.r3m_1 = 0;
  }
  protoOf(ImmutableComponentStyle).m3m = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(512683125);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:201)');
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = listOf([this.p3m_1, suffixedWith(this.p3m_1, Companion_getInstance_10().s3m($composer_0, 6))]);
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      if (Companion_getInstance_5().s3k_1.m(element)) {
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
    var tmp0 = tmp.p3h(this.q3m_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.u3m_1 = style;
    this.v3m_1 = baseStyle;
    this.w3m_1 = 0;
  }
  protoOf(SimpleComponentVariant).s3l = function (styleSheet) {
    this.u3m_1.p3l(styleSheet, '.' + this.v3m_1.m3l_1 + '.' + this.u3m_1.m3l_1);
  };
  protoOf(SimpleComponentVariant).t3l = function () {
    return this.u3m_1.t3l();
  };
  protoOf(SimpleComponentVariant).m3m = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentStyle.kt:666)');
    }
    var tmp0 = toModifier$composable(this.u3m_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n3k_1 = ArrayList_init_$Create$_0();
    this.o3k_1 = this.n3k_1;
    this.p3k_1 = 0;
  }
  protoOf(StyleModifiers).h3m = function (createModifier) {
    this.n3k_1.a(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).i3m = function (mediaQuery, suffix, createModifier) {
    this.n3k_1.a(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).j3m = function (suffix, createModifier) {
    this.n3k_1.a(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).q3k = function (mediaQuery, createModifier) {
    this.n3k_1.a(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).r3k = function (_this__u8e3s4, createModifier) {
    this.q3k(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.y3m_1 = head;
    this.z3m_1 = tail;
  }
  protoOf(CompositeComponentVariant).m3m = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentStyle.kt:678)');
    }
    var tmp0 = this.y3m_1.m3m($composer_0, 0).p3h(this.z3m_1.m3m($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  };
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(-1254167608);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:690)');
    }
    var tmp0 = getValue(get_SilkTheme().f3n_1, _this__u8e3s4.m3l_1).m3m($composer_0, 0).p3h(combine$composable(toList(variants), $composer_0, 0).m3m($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  }
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ly(1446826835);
    sourceInformation($composer_0, 'C(combine$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentStyle.kt:735)');
    }
    var finalVariant = Empty_getInstance();
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.d()) {
      var variant = tmp0_iterator.e();
      var tmp = finalVariant;
      finalVariant = tmp.o3m(variant == null ? Empty_getInstance() : variant);
    }
    var tmp0 = finalVariant;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.my();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.h3n_1 = colorMode;
    this.i3n_1 = 0;
  }
  protoOf(ComponentBaseModifier).g3m = function () {
    return this.h3n_1;
  };
  protoOf(ComponentVariantProvider).k2i = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = removeSuffix(removePrefix(withoutSuffix, this.l3n_1.l3l_1 + '-'), '-' + this.l3n_1.l3l_1);
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
    return this.l3n_1.u3l(name, this.m3n_1, this.n3n_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.l3n_1 = style;
    this.m3n_1 = extraModifiers;
    this.n3n_1 = init;
    this.o3n_1 = 8;
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
      $composer_0.ly(1744510051);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(-1565522235);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(-310854580);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(-1248093650);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(1154855457);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.e3m_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.h3m(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function addVariantBase$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.e3m_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function addVariantBase$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.h3m(addVariantBase$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.e3m_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.h3m(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).p3n = function (target, pseudoClass, params) {
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
      var tmp0_safe_receiver = element.t3n();
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
    this.x3n_1 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.d3o_1 = attributeSelector;
    this.e3o_1 = 0;
  }
  protoOf(OfAttributeSelector).t3n = function () {
    return this.f3o(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.l3o_1 = pseudoClass;
    this.m3o_1 = 0;
  }
  protoOf(OfPseudoClass).t3n = function () {
    return this.f3o(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).n3o = function (other) {
    return new CompositeOpen(this.q3n_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.s3o_1 = pseudoElement;
    this.t3o_1 = 0;
  }
  protoOf(OfPseudoElement).t3n = function () {
    return this.f3o(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.y3o_1 = mediaQuery;
    this.z3o_1 = attributeSelectors;
    this.a3p_1 = pseudoClasses;
    this.b3p_1 = 0;
  }
  protoOf(CompositeOpen).y3n = function () {
    return this.y3o_1;
  };
  protoOf(CompositeOpen).t3n = function () {
    return this.f3o(this.z3o_1, this.a3p_1, null);
  };
  function CssRule(target) {
    Companion_getInstance_8();
    this.q3n_1 = target;
    this.r3n_1 = null;
    this.s3n_1 = 0;
  }
  protoOf(CssRule).g3o = function (createModifier) {
    this.q3n_1.i3m(this.y3n(), this.t3n(), createModifier);
  };
  protoOf(CssRule).y3n = function () {
    return this.r3n_1;
  };
  protoOf(CssRule).t3n = function () {
    return null;
  };
  protoOf(CssRule).f3o = function (attributeSelectors, pseudoClasses, pseudoElement) {
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
      tmp0_apply.n6('[' + element.d3o_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.n6(':' + element_0.l3o_1);
    }
    if (!(pseudoElement == null)) {
      tmp0_apply.n6('::' + pseudoElement.s3o_1);
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
    return Companion_getInstance_8().p3n(_this__u8e3s4, 'not', params.slice());
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
    this.c3p_1 = sm;
    this.d3p_1 = md;
    this.e3p_1 = lg;
    this.f3p_1 = xl;
    this.g3p_1 = 0;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.c3p_1 + ', md=' + this.d3p_1 + ', lg=' + this.e3p_1 + ', xl=' + this.f3p_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.c3p_1);
    result = imul(result, 31) + hashCode(this.d3p_1) | 0;
    result = imul(result, 31) + hashCode(this.e3p_1) | 0;
    result = imul(result, 31) + hashCode(this.f3p_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.c3p_1, tmp0_other_with_cast.c3p_1))
      return false;
    if (!equals(this.d3p_1, tmp0_other_with_cast.d3p_1))
      return false;
    if (!equals(this.e3p_1, tmp0_other_with_cast.e3p_1))
      return false;
    if (!equals(this.f3p_1, tmp0_other_with_cast.f3p_1))
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
    this.j3p_1 = 0;
  }
  function BreakpointUnitValue(width) {
    this.k3p_1 = width;
    this.l3p_1 = 0;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.x2g(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  var TextStyle;
  function SpanText$composable(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(1205558567);
    sourceInformation($composer_0, 'C(SpanText$composable)P(2!1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.ez(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.ez(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.ez(ref_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.iy()) {
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
      var tmp0_thenIf = toModifier$composable(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).p3h(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
        tmp = whiteSpace(Companion_getInstance_0(), Companion_getInstance_2().e2h());
      } else {
        tmp = Companion_getInstance_0();
      }
      var finalModifier = tmp0_thenIf.p3h(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$composable$lambda(ref_0, $dirty, text));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().fy_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.dz(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.my();
      Span$composable(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.p1d(SpanText$composable$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
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
        $dirty = $dirty | ($composer_0.ez($this$Span) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.iy()) {
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
        $composer_0.wy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
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
    tmp.k3k_1 = LinkedHashMap_init_$Create$();
    this.l3k_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).x2g = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.k3k_1;
    var value = tmp0_getOrPut.f2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.k2i(name);
      tmp0_getOrPut.j3(name, answer);
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
      $tmp0_rcvr.p3p($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.m3p_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n3p_1 = ArrayList_init_$Create$_0();
    this.o3p_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).p3p = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(2016651302);
    sourceInformation($composer_0, 'C(forEach$composable)');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.o3p_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.sy();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.p1d(DeferredComposablesState$forEach$composable$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(2081108668);
    sourceInformation($composer_0, 'C(renderWithDeferred$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().l1d(state)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, $dirty, state));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().fy_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.dz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.my();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
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
      tmp0_safe_receiver.p1d(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.q3p_1;
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
    tmp.s3p_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 14 & $$dirty);
        $state.p3p(ComposableSingletons$DeferredKt_getInstance().s3p_1, $composer_0, 70);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
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
    this.t3p_1 = config;
    this.u3p_1 = stylesheet;
    this.v3p_1 = theme;
    this.w3p_1 = 8;
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
    mutableTheme.f3q(get_DisplayIfAtLeastZeroStyle());
    mutableTheme.f3q(get_DisplayIfAtLeastSmStyle());
    mutableTheme.f3q(get_DisplayIfAtLeastMdStyle());
    mutableTheme.f3q(get_DisplayIfAtLeastLgStyle());
    mutableTheme.f3q(get_DisplayIfAtLeastXlStyle());
    mutableTheme.f3q(get_DisplayUntilZeroStyle());
    mutableTheme.f3q(get_DisplayUntilSmStyle());
    mutableTheme.f3q(get_DisplayUntilMdStyle());
    mutableTheme.f3q(get_DisplayUntilLgStyle());
    mutableTheme.f3q(get_DisplayUntilXlStyle());
    mutableTheme.f3q(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().i3q(SilkStyleSheet_getInstance());
    get_SilkTheme().j3q(SilkStyleSheet_getInstance());
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
    this.k3q_1 = ColorMode_LIGHT_getInstance();
    this.l3q_1 = 8;
  }
  protoOf(MutableSilkConfig).m3q = function () {
    return this.k3q_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).n3q = function () {
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
    tmp.g3q_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.h3q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SilkStylesheetInstance).m3k = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.h3q_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).b2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.h3q_1.j3(name, build);
  };
  protoOf(SilkStylesheetInstance).i3q = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g3q_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.p3l(siteStyleSheet, element.m3l_1);
    }
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.h3q_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.f());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = tmp1_map.s1().c();
    while (tmp0_iterator_0.d()) {
      var item = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.r1();
      // Inline function 'kotlin.collections.component2' call
      var build = item.u1();
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
        lightBuilder.z3j(siteStyleSheet, name);
      } else {
        lightBuilder.z3j(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.z3j(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
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
    this.a3n_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.a3n_1.c3q_1;
    tmp.b3n_1 = isInterface(tmp_0, SilkPalettes) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this.a3n_1.b3q_1;
    tmp_1.c3n_1 = isInterface(tmp_2, Palettes) ? tmp_2 : THROW_CCE();
    this.d3n_1 = this.a3n_1.d3q_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.e3n_1 = LinkedHashMap_init_$Create$();
    this.f3n_1 = this.e3n_1;
    this.g3n_1 = 8;
  }
  protoOf(ImmutableSilkTheme).j3q = function (componentStyleSheet) {
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
    var tmp0_iterator = this.a3n_1.x3p_1.bb().c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element.s3l(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.e3n_1;
      var tmp1_set = element.m3l_1;
      var tmp2_set = element.t3l();
      tmp0_set.j3(tmp1_set, tmp2_set);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp2_filterIsInstance = this.a3n_1.z3p_1.bb();
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
      element_1.s3l(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set_0 = this.e3n_1;
      var tmp1_set_0 = element_1.u3m_1.m3l_1;
      var tmp2_set_0 = element_1.t3l();
      tmp0_set_0.j3(tmp1_set_0, tmp2_set_0);
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
    tmp.x3p_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.y3p_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.z3p_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.a3q_1 = LinkedHashSet_init_$Create$();
    this.b3q_1 = new MutablePalettes();
    this.c3q_1 = new LegacyMutableSilkPalettes(this.b3q_1);
    this.d3q_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.e3q_1 = 8;
  }
  protoOf(MutableSilkTheme).f3q = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    var tmp0_let = this.x3p_1.f2(style.m3l_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_let == null ? true : tmp0_let === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.m3l_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.x3p_1;
    var tmp3_set = style.m3l_1;
    tmp2_set.j3(tmp3_set, style);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = style.n3l_1;
    tmp$ret$3 = copyToArray(tmp4_toTypedArray);
    this.o3q(tmp$ret$3.slice());
  };
  protoOf(MutableSilkTheme).o3q = function (variants) {
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
      var tmp0_let = this.z3p_1.f2(element_0.u3m_1.m3l_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp0_let == null ? true : tmp0_let === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.u3m_1.m3l_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var tmp2_set = this.z3p_1;
      var tmp3_set = element_0.u3m_1.m3l_1;
      tmp2_set.j3(tmp3_set, element_0);
    }
  };
  protoOf(MutableSilkTheme).p3q = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.x3p_1;
    var tmp1_contains = style.m3l_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).b2(tmp1_contains)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.m3l_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.y3p_1.a(style.m3l_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.m3l_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp4_set = this.x3p_1;
    var tmp5_set = style.m3l_1;
    var tmp6_set = new ComponentStyle(style.l3l_1, extraModifiers, style.j3l_1, init);
    tmp4_set.j3(tmp5_set, tmp6_set);
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
    var tmp0_contains = _this__u8e3s4.x3p_1;
    var tmp1_contains = style.m3l_1;
    // Inline function 'kotlin.collections.containsKey' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).b2(tmp1_contains)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.m3l_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.i3l_1;
    var existingInit = style.k3l_1;
    var tmp = modifyComponentStyle$composable$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.p3q(style, tmp, modifyComponentStyle$composable$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(-1714796074);
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
      $composer_0.my();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$composable$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_modifyComponentStyle.e3m_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function modifyComponentStyleBase$composable$lambda($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.h3m(modifyComponentStyleBase$composable$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_getInstance();
    };
  }
  function modifyComponentStyle$composable$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ly(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous> (SilkTheme.kt:252)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).p3h($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.my();
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
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3p_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.y4_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().d3n_1.c3p_1;
        break;
      case 2:
        tmp = get_SilkTheme().d3n_1.d3p_1;
        break;
      case 3:
        tmp = get_SilkTheme().d3n_1.e3p_1;
        break;
      case 4:
        tmp = get_SilkTheme().d3n_1.f3p_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    rootColorModeState$factory();
    return rootColorModeState$delegate.u1();
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
    return _this__u8e3s4 + '_' + colorMode.x4_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).s3m = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1058079129, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.$get-current$$composable (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.jz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.u1();
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
  protoOf(ColorMode).s3q = function () {
    var tmp;
    switch (this.y4_1) {
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
    switch (this.y4_1) {
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
  protoOf(ColorMode).t3q = function () {
    return get_LocalColorMode().l1d(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_9().n3q().m3q());
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
    this.u3q_1 = Companion_getInstance_3().o3i(16772078);
    this.v3q_1 = Companion_getInstance_3().o3i(16764370);
    this.w3q_1 = Companion_getInstance_3().o3i(15702682);
    this.x3q_1 = Companion_getInstance_3().o3i(15037299);
    this.y3q_1 = Companion_getInstance_3().o3i(15684432);
    this.z3q_1 = Companion_getInstance_3().o3i(16007990);
    this.a3r_1 = Companion_getInstance_3().o3i(15022389);
    this.b3r_1 = Companion_getInstance_3().o3i(13840175);
    this.c3r_1 = Companion_getInstance_3().o3i(12986408);
    this.d3r_1 = Companion_getInstance_3().o3i(12000284);
  }
  protoOf(ColorSchemes$Red$1).e3r = function () {
    return this.w3q_1;
  };
  protoOf(ColorSchemes$Red$1).f3r = function () {
    return this.x3q_1;
  };
  protoOf(ColorSchemes$Red$1).g3r = function () {
    return this.z3q_1;
  };
  protoOf(ColorSchemes$Red$1).h3r = function () {
    return this.a3r_1;
  };
  protoOf(ColorSchemes$Red$1).i3r = function () {
    return this.d3r_1;
  };
  function ColorSchemes$Pink$1() {
    this.j3r_1 = Companion_getInstance_3().o3i(16573676);
    this.k3r_1 = Companion_getInstance_3().o3i(16301008);
    this.l3r_1 = Companion_getInstance_3().o3i(16027569);
    this.m3r_1 = Companion_getInstance_3().o3i(15753874);
    this.n3r_1 = Companion_getInstance_3().o3i(15483002);
    this.o3r_1 = Companion_getInstance_3().o3i(15277667);
    this.p3r_1 = Companion_getInstance_3().o3i(14162784);
    this.q3r_1 = Companion_getInstance_3().o3i(12720219);
    this.r3r_1 = Companion_getInstance_3().o3i(11342935);
    this.s3r_1 = Companion_getInstance_3().o3i(8916559);
  }
  protoOf(ColorSchemes$Pink$1).e3r = function () {
    return this.l3r_1;
  };
  protoOf(ColorSchemes$Pink$1).f3r = function () {
    return this.m3r_1;
  };
  protoOf(ColorSchemes$Pink$1).g3r = function () {
    return this.o3r_1;
  };
  protoOf(ColorSchemes$Pink$1).h3r = function () {
    return this.p3r_1;
  };
  protoOf(ColorSchemes$Pink$1).i3r = function () {
    return this.s3r_1;
  };
  function ColorSchemes$Purple$1() {
    this.t3r_1 = Companion_getInstance_3().o3i(15984117);
    this.u3r_1 = Companion_getInstance_3().o3i(14794471);
    this.v3r_1 = Companion_getInstance_3().o3i(13538264);
    this.w3r_1 = Companion_getInstance_3().o3i(12216520);
    this.x3r_1 = Companion_getInstance_3().o3i(11225020);
    this.y3r_1 = Companion_getInstance_3().o3i(10233776);
    this.z3r_1 = Companion_getInstance_3().o3i(9315498);
    this.a3s_1 = Companion_getInstance_3().o3i(8069026);
    this.b3s_1 = Companion_getInstance_3().o3i(6953882);
    this.c3s_1 = Companion_getInstance_3().o3i(4854924);
  }
  protoOf(ColorSchemes$Purple$1).e3r = function () {
    return this.v3r_1;
  };
  protoOf(ColorSchemes$Purple$1).f3r = function () {
    return this.w3r_1;
  };
  protoOf(ColorSchemes$Purple$1).g3r = function () {
    return this.y3r_1;
  };
  protoOf(ColorSchemes$Purple$1).h3r = function () {
    return this.z3r_1;
  };
  protoOf(ColorSchemes$Purple$1).i3r = function () {
    return this.c3s_1;
  };
  function ColorSchemes$DeepPurple$1() {
    this.d3s_1 = Companion_getInstance_3().o3i(15591414);
    this.e3s_1 = Companion_getInstance_3().o3i(13747433);
    this.f3s_1 = Companion_getInstance_3().o3i(11771355);
    this.g3s_1 = Companion_getInstance_3().o3i(9795021);
    this.h3s_1 = Companion_getInstance_3().o3i(8280002);
    this.i3s_1 = Companion_getInstance_3().o3i(6765239);
    this.j3s_1 = Companion_getInstance_3().o3i(6174129);
    this.k3s_1 = Companion_getInstance_3().o3i(5320104);
    this.l3s_1 = Companion_getInstance_3().o3i(4532128);
    this.m3s_1 = Companion_getInstance_3().o3i(3218322);
  }
  protoOf(ColorSchemes$DeepPurple$1).e3r = function () {
    return this.f3s_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).f3r = function () {
    return this.g3s_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).g3r = function () {
    return this.i3s_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).h3r = function () {
    return this.j3s_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).i3r = function () {
    return this.m3s_1;
  };
  function ColorSchemes$Indigo$1() {
    this.n3s_1 = Companion_getInstance_3().o3i(15264502);
    this.o3s_1 = Companion_getInstance_3().o3i(12962537);
    this.p3s_1 = Companion_getInstance_3().o3i(10463450);
    this.q3s_1 = Companion_getInstance_3().o3i(7964363);
    this.r3s_1 = Companion_getInstance_3().o3i(6056896);
    this.s3s_1 = Companion_getInstance_3().o3i(4149685);
    this.t3s_1 = Companion_getInstance_3().o3i(3754411);
    this.u3s_1 = Companion_getInstance_3().o3i(3162015);
    this.v3s_1 = Companion_getInstance_3().o3i(2635155);
    this.w3s_1 = Companion_getInstance_3().o3i(1713022);
  }
  protoOf(ColorSchemes$Indigo$1).e3r = function () {
    return this.p3s_1;
  };
  protoOf(ColorSchemes$Indigo$1).f3r = function () {
    return this.q3s_1;
  };
  protoOf(ColorSchemes$Indigo$1).g3r = function () {
    return this.s3s_1;
  };
  protoOf(ColorSchemes$Indigo$1).h3r = function () {
    return this.t3s_1;
  };
  protoOf(ColorSchemes$Indigo$1).i3r = function () {
    return this.w3s_1;
  };
  function ColorSchemes$Blue$1() {
    this.x3s_1 = Companion_getInstance_3().o3i(14938877);
    this.y3s_1 = Companion_getInstance_3().o3i(12312315);
    this.z3s_1 = Companion_getInstance_3().o3i(9489145);
    this.a3t_1 = Companion_getInstance_3().o3i(6600182);
    this.b3t_1 = Companion_getInstance_3().o3i(4367861);
    this.c3t_1 = Companion_getInstance_3().o3i(2201331);
    this.d3t_1 = Companion_getInstance_3().o3i(2001125);
    this.e3t_1 = Companion_getInstance_3().o3i(1668818);
    this.f3t_1 = Companion_getInstance_3().o3i(1402304);
    this.g3t_1 = Companion_getInstance_3().o3i(870305);
  }
  protoOf(ColorSchemes$Blue$1).e3r = function () {
    return this.z3s_1;
  };
  protoOf(ColorSchemes$Blue$1).f3r = function () {
    return this.a3t_1;
  };
  protoOf(ColorSchemes$Blue$1).g3r = function () {
    return this.c3t_1;
  };
  protoOf(ColorSchemes$Blue$1).h3r = function () {
    return this.d3t_1;
  };
  protoOf(ColorSchemes$Blue$1).i3r = function () {
    return this.g3t_1;
  };
  function ColorSchemes$LightBlue$1() {
    this.h3t_1 = Companion_getInstance_3().o3i(14808574);
    this.i3t_1 = Companion_getInstance_3().o3i(11789820);
    this.j3t_1 = Companion_getInstance_3().o3i(8508666);
    this.k3t_1 = Companion_getInstance_3().o3i(5227511);
    this.l3t_1 = Companion_getInstance_3().o3i(2733814);
    this.m3t_1 = Companion_getInstance_3().o3i(240116);
    this.n3t_1 = Companion_getInstance_3().o3i(236517);
    this.o3t_1 = Companion_getInstance_3().o3i(166097);
    this.p3t_1 = Companion_getInstance_3().o3i(161725);
    this.q3t_1 = Companion_getInstance_3().o3i(87963);
  }
  protoOf(ColorSchemes$LightBlue$1).e3r = function () {
    return this.j3t_1;
  };
  protoOf(ColorSchemes$LightBlue$1).f3r = function () {
    return this.k3t_1;
  };
  protoOf(ColorSchemes$LightBlue$1).g3r = function () {
    return this.m3t_1;
  };
  protoOf(ColorSchemes$LightBlue$1).h3r = function () {
    return this.n3t_1;
  };
  protoOf(ColorSchemes$LightBlue$1).i3r = function () {
    return this.q3t_1;
  };
  function ColorSchemes$Cyan$1() {
    this.r3t_1 = Companion_getInstance_3().o3i(14743546);
    this.s3t_1 = Companion_getInstance_3().o3i(11725810);
    this.t3t_1 = Companion_getInstance_3().o3i(8445674);
    this.u3t_1 = Companion_getInstance_3().o3i(5099745);
    this.v3t_1 = Companion_getInstance_3().o3i(2541274);
    this.w3t_1 = Companion_getInstance_3().o3i(48340);
    this.x3t_1 = Companion_getInstance_3().o3i(44225);
    this.y3t_1 = Companion_getInstance_3().o3i(38823);
    this.z3t_1 = Companion_getInstance_3().o3i(33679);
    this.a3u_1 = Companion_getInstance_3().o3i(24676);
  }
  protoOf(ColorSchemes$Cyan$1).e3r = function () {
    return this.t3t_1;
  };
  protoOf(ColorSchemes$Cyan$1).f3r = function () {
    return this.u3t_1;
  };
  protoOf(ColorSchemes$Cyan$1).g3r = function () {
    return this.w3t_1;
  };
  protoOf(ColorSchemes$Cyan$1).h3r = function () {
    return this.x3t_1;
  };
  protoOf(ColorSchemes$Cyan$1).i3r = function () {
    return this.a3u_1;
  };
  function ColorSchemes$Teal$1() {
    this.b3u_1 = Companion_getInstance_3().o3i(14742257);
    this.c3u_1 = Companion_getInstance_3().o3i(11722715);
    this.d3u_1 = Companion_getInstance_3().o3i(8440772);
    this.e3u_1 = Companion_getInstance_3().o3i(5093036);
    this.f3u_1 = Companion_getInstance_3().o3i(2533018);
    this.g3u_1 = Companion_getInstance_3().o3i(38536);
    this.h3u_1 = Companion_getInstance_3().o3i(35195);
    this.i3u_1 = Companion_getInstance_3().o3i(31083);
    this.j3u_1 = Companion_getInstance_3().o3i(26972);
    this.k3u_1 = Companion_getInstance_3().o3i(19776);
  }
  protoOf(ColorSchemes$Teal$1).e3r = function () {
    return this.d3u_1;
  };
  protoOf(ColorSchemes$Teal$1).f3r = function () {
    return this.e3u_1;
  };
  protoOf(ColorSchemes$Teal$1).g3r = function () {
    return this.g3u_1;
  };
  protoOf(ColorSchemes$Teal$1).h3r = function () {
    return this.h3u_1;
  };
  protoOf(ColorSchemes$Teal$1).i3r = function () {
    return this.k3u_1;
  };
  function ColorSchemes$Green$1() {
    this.l3u_1 = Companion_getInstance_3().o3i(15267305);
    this.m3u_1 = Companion_getInstance_3().o3i(13166281);
    this.n3u_1 = Companion_getInstance_3().o3i(10868391);
    this.o3u_1 = Companion_getInstance_3().o3i(8505220);
    this.p3u_1 = Companion_getInstance_3().o3i(6732650);
    this.q3u_1 = Companion_getInstance_3().o3i(5025616);
    this.r3u_1 = Companion_getInstance_3().o3i(4431943);
    this.s3u_1 = Companion_getInstance_3().o3i(3706428);
    this.t3u_1 = Companion_getInstance_3().o3i(3046706);
    this.u3u_1 = Companion_getInstance_3().o3i(1793568);
  }
  protoOf(ColorSchemes$Green$1).e3r = function () {
    return this.n3u_1;
  };
  protoOf(ColorSchemes$Green$1).f3r = function () {
    return this.o3u_1;
  };
  protoOf(ColorSchemes$Green$1).g3r = function () {
    return this.q3u_1;
  };
  protoOf(ColorSchemes$Green$1).h3r = function () {
    return this.r3u_1;
  };
  protoOf(ColorSchemes$Green$1).i3r = function () {
    return this.u3u_1;
  };
  function ColorSchemes$LightGreen$1() {
    this.v3u_1 = Companion_getInstance_3().o3i(15857897);
    this.w3u_1 = Companion_getInstance_3().o3i(14478792);
    this.x3u_1 = Companion_getInstance_3().o3i(12968357);
    this.y3u_1 = Companion_getInstance_3().o3i(11457921);
    this.z3u_1 = Companion_getInstance_3().o3i(10275941);
    this.a3v_1 = Companion_getInstance_3().o3i(9159498);
    this.b3v_1 = Companion_getInstance_3().o3i(8172354);
    this.c3v_1 = Companion_getInstance_3().o3i(6856504);
    this.d3v_1 = Companion_getInstance_3().o3i(5606191);
    this.e3v_1 = Companion_getInstance_3().o3i(3369246);
  }
  protoOf(ColorSchemes$LightGreen$1).e3r = function () {
    return this.x3u_1;
  };
  protoOf(ColorSchemes$LightGreen$1).f3r = function () {
    return this.y3u_1;
  };
  protoOf(ColorSchemes$LightGreen$1).g3r = function () {
    return this.a3v_1;
  };
  protoOf(ColorSchemes$LightGreen$1).h3r = function () {
    return this.b3v_1;
  };
  protoOf(ColorSchemes$LightGreen$1).i3r = function () {
    return this.e3v_1;
  };
  function ColorSchemes$Lime$1() {
    this.f3v_1 = Companion_getInstance_3().o3i(16382951);
    this.g3v_1 = Companion_getInstance_3().o3i(15791299);
    this.h3v_1 = Companion_getInstance_3().o3i(15134364);
    this.i3v_1 = Companion_getInstance_3().o3i(14477173);
    this.j3v_1 = Companion_getInstance_3().o3i(13951319);
    this.k3v_1 = Companion_getInstance_3().o3i(13491257);
    this.l3v_1 = Companion_getInstance_3().o3i(12634675);
    this.m3v_1 = Companion_getInstance_3().o3i(11514923);
    this.n3v_1 = Companion_getInstance_3().o3i(10394916);
    this.o3v_1 = Companion_getInstance_3().o3i(8550167);
  }
  protoOf(ColorSchemes$Lime$1).e3r = function () {
    return this.h3v_1;
  };
  protoOf(ColorSchemes$Lime$1).f3r = function () {
    return this.i3v_1;
  };
  protoOf(ColorSchemes$Lime$1).g3r = function () {
    return this.k3v_1;
  };
  protoOf(ColorSchemes$Lime$1).h3r = function () {
    return this.l3v_1;
  };
  protoOf(ColorSchemes$Lime$1).i3r = function () {
    return this.o3v_1;
  };
  function ColorSchemes$Yellow$1() {
    this.p3v_1 = Companion_getInstance_3().o3i(16776679);
    this.q3v_1 = Companion_getInstance_3().o3i(16775620);
    this.r3v_1 = Companion_getInstance_3().o3i(16774557);
    this.s3v_1 = Companion_getInstance_3().o3i(16773494);
    this.t3v_1 = Companion_getInstance_3().o3i(16772696);
    this.u3v_1 = Companion_getInstance_3().o3i(16771899);
    this.v3v_1 = Companion_getInstance_3().o3i(16635957);
    this.w3v_1 = Companion_getInstance_3().o3i(16498733);
    this.x3v_1 = Companion_getInstance_3().o3i(16361509);
    this.y3v_1 = Companion_getInstance_3().o3i(16088855);
  }
  protoOf(ColorSchemes$Yellow$1).e3r = function () {
    return this.r3v_1;
  };
  protoOf(ColorSchemes$Yellow$1).f3r = function () {
    return this.s3v_1;
  };
  protoOf(ColorSchemes$Yellow$1).g3r = function () {
    return this.u3v_1;
  };
  protoOf(ColorSchemes$Yellow$1).h3r = function () {
    return this.v3v_1;
  };
  protoOf(ColorSchemes$Yellow$1).i3r = function () {
    return this.y3v_1;
  };
  function ColorSchemes$Amber$1() {
    this.z3v_1 = Companion_getInstance_3().o3i(16775393);
    this.a3w_1 = Companion_getInstance_3().o3i(16772275);
    this.b3w_1 = Companion_getInstance_3().o3i(16769154);
    this.c3w_1 = Companion_getInstance_3().o3i(16766287);
    this.d3w_1 = Companion_getInstance_3().o3i(16763432);
    this.e3w_1 = Companion_getInstance_3().o3i(16761095);
    this.f3w_1 = Companion_getInstance_3().o3i(16757504);
    this.g3w_1 = Companion_getInstance_3().o3i(16752640);
    this.h3w_1 = Companion_getInstance_3().o3i(16748288);
    this.i3w_1 = Companion_getInstance_3().o3i(16740096);
  }
  protoOf(ColorSchemes$Amber$1).e3r = function () {
    return this.b3w_1;
  };
  protoOf(ColorSchemes$Amber$1).f3r = function () {
    return this.c3w_1;
  };
  protoOf(ColorSchemes$Amber$1).g3r = function () {
    return this.e3w_1;
  };
  protoOf(ColorSchemes$Amber$1).h3r = function () {
    return this.f3w_1;
  };
  protoOf(ColorSchemes$Amber$1).i3r = function () {
    return this.i3w_1;
  };
  function ColorSchemes$Orange$1() {
    this.j3w_1 = Companion_getInstance_3().o3i(16774112);
    this.k3w_1 = Companion_getInstance_3().o3i(16769202);
    this.l3w_1 = Companion_getInstance_3().o3i(16764032);
    this.m3w_1 = Companion_getInstance_3().o3i(16758605);
    this.n3w_1 = Companion_getInstance_3().o3i(16754470);
    this.o3w_1 = Companion_getInstance_3().o3i(16750592);
    this.p3w_1 = Companion_getInstance_3().o3i(16485376);
    this.q3w_1 = Companion_getInstance_3().o3i(16088064);
    this.r3w_1 = Companion_getInstance_3().o3i(15690752);
    this.s3w_1 = Companion_getInstance_3().o3i(15094016);
  }
  protoOf(ColorSchemes$Orange$1).e3r = function () {
    return this.l3w_1;
  };
  protoOf(ColorSchemes$Orange$1).f3r = function () {
    return this.m3w_1;
  };
  protoOf(ColorSchemes$Orange$1).g3r = function () {
    return this.o3w_1;
  };
  protoOf(ColorSchemes$Orange$1).h3r = function () {
    return this.p3w_1;
  };
  protoOf(ColorSchemes$Orange$1).i3r = function () {
    return this.s3w_1;
  };
  function ColorSchemes$DeepOrange$1() {
    this.t3w_1 = Companion_getInstance_3().o3i(16509415);
    this.u3w_1 = Companion_getInstance_3().o3i(16764092);
    this.v3w_1 = Companion_getInstance_3().o3i(16755601);
    this.w3w_1 = Companion_getInstance_3().o3i(16747109);
    this.x3w_1 = Companion_getInstance_3().o3i(16740419);
    this.y3w_1 = Companion_getInstance_3().o3i(16733986);
    this.z3w_1 = Companion_getInstance_3().o3i(16011550);
    this.a3x_1 = Companion_getInstance_3().o3i(15092249);
    this.b3x_1 = Companion_getInstance_3().o3i(14172949);
    this.c3x_1 = Companion_getInstance_3().o3i(12531212);
  }
  protoOf(ColorSchemes$DeepOrange$1).e3r = function () {
    return this.v3w_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).f3r = function () {
    return this.w3w_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).g3r = function () {
    return this.y3w_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).h3r = function () {
    return this.z3w_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).i3r = function () {
    return this.c3x_1;
  };
  function ColorSchemes$Brown$1() {
    this.d3x_1 = Companion_getInstance_3().o3i(15723497);
    this.e3x_1 = Companion_getInstance_3().o3i(14142664);
    this.f3x_1 = Companion_getInstance_3().o3i(12364452);
    this.g3x_1 = Companion_getInstance_3().o3i(10586239);
    this.h3x_1 = Companion_getInstance_3().o3i(9268835);
    this.i3x_1 = Companion_getInstance_3().o3i(7951688);
    this.j3x_1 = Companion_getInstance_3().o3i(7162945);
    this.k3x_1 = Companion_getInstance_3().o3i(6111287);
    this.l3x_1 = Companion_getInstance_3().o3i(5125166);
    this.m3x_1 = Companion_getInstance_3().o3i(4073251);
  }
  protoOf(ColorSchemes$Brown$1).e3r = function () {
    return this.f3x_1;
  };
  protoOf(ColorSchemes$Brown$1).f3r = function () {
    return this.g3x_1;
  };
  protoOf(ColorSchemes$Brown$1).g3r = function () {
    return this.i3x_1;
  };
  protoOf(ColorSchemes$Brown$1).h3r = function () {
    return this.j3x_1;
  };
  protoOf(ColorSchemes$Brown$1).i3r = function () {
    return this.m3x_1;
  };
  function ColorSchemes$Gray$1() {
    this.n3x_1 = Companion_getInstance_3().o3i(16448250);
    this.o3x_1 = Companion_getInstance_3().o3i(16119285);
    this.p3x_1 = Companion_getInstance_3().o3i(15658734);
    this.q3x_1 = Companion_getInstance_3().o3i(14737632);
    this.r3x_1 = Companion_getInstance_3().o3i(12434877);
    this.s3x_1 = Companion_getInstance_3().o3i(10395294);
    this.t3x_1 = Companion_getInstance_3().o3i(7697781);
    this.u3x_1 = Companion_getInstance_3().o3i(6381921);
    this.v3x_1 = Companion_getInstance_3().o3i(4342338);
    this.w3x_1 = Companion_getInstance_3().o3i(2171169);
  }
  protoOf(ColorSchemes$Gray$1).e3r = function () {
    return this.p3x_1;
  };
  protoOf(ColorSchemes$Gray$1).f3r = function () {
    return this.q3x_1;
  };
  protoOf(ColorSchemes$Gray$1).g3r = function () {
    return this.s3x_1;
  };
  protoOf(ColorSchemes$Gray$1).h3r = function () {
    return this.t3x_1;
  };
  protoOf(ColorSchemes$Gray$1).i3r = function () {
    return this.w3x_1;
  };
  function ColorSchemes$BlueGray$1() {
    this.x3x_1 = Companion_getInstance_3().o3i(15527921);
    this.y3x_1 = Companion_getInstance_3().o3i(13621468);
    this.z3x_1 = Companion_getInstance_3().o3i(11583173);
    this.a3y_1 = Companion_getInstance_3().o3i(9479342);
    this.b3y_1 = Companion_getInstance_3().o3i(7901340);
    this.c3y_1 = Companion_getInstance_3().o3i(6323595);
    this.d3y_1 = Companion_getInstance_3().o3i(5533306);
    this.e3y_1 = Companion_getInstance_3().o3i(4545124);
    this.f3y_1 = Companion_getInstance_3().o3i(3622735);
    this.g3y_1 = Companion_getInstance_3().o3i(2503224);
  }
  protoOf(ColorSchemes$BlueGray$1).e3r = function () {
    return this.z3x_1;
  };
  protoOf(ColorSchemes$BlueGray$1).f3r = function () {
    return this.a3y_1;
  };
  protoOf(ColorSchemes$BlueGray$1).g3r = function () {
    return this.c3y_1;
  };
  protoOf(ColorSchemes$BlueGray$1).h3r = function () {
    return this.d3y_1;
  };
  protoOf(ColorSchemes$BlueGray$1).i3r = function () {
    return this.g3y_1;
  };
  function ColorSchemes() {
    ColorSchemes_instance = this;
    var tmp = this;
    tmp.h3y_1 = new ColorSchemes$Red$1();
    var tmp_0 = this;
    tmp_0.i3y_1 = new ColorSchemes$Pink$1();
    var tmp_1 = this;
    tmp_1.j3y_1 = new ColorSchemes$Purple$1();
    var tmp_2 = this;
    tmp_2.k3y_1 = new ColorSchemes$DeepPurple$1();
    var tmp_3 = this;
    tmp_3.l3y_1 = new ColorSchemes$Indigo$1();
    var tmp_4 = this;
    tmp_4.m3y_1 = new ColorSchemes$Blue$1();
    var tmp_5 = this;
    tmp_5.n3y_1 = new ColorSchemes$LightBlue$1();
    var tmp_6 = this;
    tmp_6.o3y_1 = new ColorSchemes$Cyan$1();
    var tmp_7 = this;
    tmp_7.p3y_1 = new ColorSchemes$Teal$1();
    var tmp_8 = this;
    tmp_8.q3y_1 = new ColorSchemes$Green$1();
    var tmp_9 = this;
    tmp_9.r3y_1 = new ColorSchemes$LightGreen$1();
    var tmp_10 = this;
    tmp_10.s3y_1 = new ColorSchemes$Lime$1();
    var tmp_11 = this;
    tmp_11.t3y_1 = new ColorSchemes$Yellow$1();
    var tmp_12 = this;
    tmp_12.u3y_1 = new ColorSchemes$Amber$1();
    var tmp_13 = this;
    tmp_13.v3y_1 = new ColorSchemes$Orange$1();
    var tmp_14 = this;
    tmp_14.w3y_1 = new ColorSchemes$DeepOrange$1();
    var tmp_15 = this;
    tmp_15.x3y_1 = new ColorSchemes$Brown$1();
    var tmp_16 = this;
    tmp_16.y3y_1 = new ColorSchemes$Gray$1();
    var tmp_17 = this;
    tmp_17.z3y_1 = new ColorSchemes$BlueGray$1();
    this.a3z_1 = 0;
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
    light = light === VOID ? new LegacyMutableSilkPalette(palettes.b3z_1) : light;
    dark = dark === VOID ? new LegacyMutableSilkPalette(palettes.c3z_1) : dark;
    this.e3z_1 = light;
    this.f3z_1 = dark;
    this.g3z_1 = 0;
  }
  function PaletteEntry($outer) {
    this.h3z_1 = $outer;
  }
  function Button($outer) {
    this.m3z_1 = $outer;
    this.i3z_1 = new PaletteEntry(this.m3z_1);
    this.j3z_1 = new PaletteEntry(this.m3z_1);
    this.k3z_1 = new PaletteEntry(this.m3z_1);
    this.l3z_1 = new PaletteEntry(this.m3z_1);
  }
  function Checkbox($outer) {
    this.q3z_1 = $outer;
    this.n3z_1 = new PaletteEntry(this.q3z_1);
    this.o3z_1 = new PaletteEntry(this.q3z_1);
    this.p3z_1 = new PaletteEntry(this.q3z_1);
  }
  function Input($outer) {
    this.w3z_1 = $outer;
    this.r3z_1 = new PaletteEntry(this.w3z_1);
    this.s3z_1 = new PaletteEntry(this.w3z_1);
    this.t3z_1 = new PaletteEntry(this.w3z_1);
    this.u3z_1 = new PaletteEntry(this.w3z_1);
    this.v3z_1 = new PaletteEntry(this.w3z_1);
  }
  function Link($outer) {
    this.z3z_1 = $outer;
    this.x3z_1 = new PaletteEntry(this.z3z_1);
    this.y3z_1 = new PaletteEntry(this.z3z_1);
  }
  function Switch($outer) {
    this.d40_1 = $outer;
    this.a40_1 = new PaletteEntry(this.d40_1);
    this.b40_1 = new PaletteEntry(this.d40_1);
    this.c40_1 = new PaletteEntry(this.d40_1);
  }
  function Tab($outer) {
    this.m40_1 = $outer;
    this.e40_1 = new PaletteEntry(this.m40_1);
    this.f40_1 = new PaletteEntry(this.m40_1);
    this.g40_1 = new PaletteEntry(this.m40_1);
    this.h40_1 = new PaletteEntry(this.m40_1);
    this.i40_1 = new PaletteEntry(this.m40_1);
    this.j40_1 = new PaletteEntry(this.m40_1);
    this.k40_1 = new PaletteEntry(this.m40_1);
    this.l40_1 = new PaletteEntry(this.m40_1);
  }
  function Tooltip($outer) {
    this.p40_1 = $outer;
    this.n40_1 = new PaletteEntry(this.p40_1);
    this.o40_1 = new PaletteEntry(this.p40_1);
  }
  function LegacyMutableSilkPalette(delegatePalette) {
    this.q40_1 = delegatePalette;
    this.r40_1 = new Button(this);
    this.s40_1 = new Checkbox(this);
    this.t40_1 = new Input(this);
    this.u40_1 = new Link(this);
    this.v40_1 = new Switch(this);
    this.w40_1 = new Tab(this);
    this.x40_1 = new Tooltip(this);
    this.y40_1 = 8;
  }
  function Palettes() {
  }
  function MutablePalettes() {
    this.b3z_1 = new MutablePalette();
    this.c3z_1 = new MutablePalette();
    this.d3z_1 = 0;
  }
  protoOf(MutablePalettes).z40 = function () {
    return this.b3z_1;
  };
  protoOf(MutablePalettes).a41 = function () {
    return this.c3z_1;
  };
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.d41_1 = palette;
    this.e41_1 = prefix;
    this.f41_1 = 8;
  }
  protoOf(EntryDelegate).x2g = function (thisRef, property) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.e41_1;
    tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.d41_1.g41_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).i41 = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.d41_1.g41_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.e41_1;
    var tmp2_set = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    tmp1_set.j3(tmp2_set, value);
  };
  function ColorGroup(palette, groupName) {
    this.j41_1 = palette;
    this.k41_1 = groupName;
    this.l41_1 = 8;
  }
  protoOf(ColorGroup).m41 = function () {
    return new EntryDelegate(this.j41_1, this.k41_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g41_1 = LinkedHashMap_init_$Create$();
    this.h41_1 = 8;
  }
  protoOf(MutablePalette).f34 = function (key) {
    return this.g41_1.f2(key);
  };
  protoOf(MutablePalette).n41 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.g41_1.j3(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().c3n_1.b41(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.o41();
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
    this.p41_1 = topLeft;
    this.q41_1 = botRight;
    this.r41_1 = cornerRadius;
    this.s41_1 = 0;
  }
  protoOf(RectF).o41 = function () {
    var tmp;
    if ((((!(this.p41_1.f3_1 === 0.0) ? true : !(this.p41_1.g3_1 === 0.0)) ? true : !(this.q41_1.f3_1 === 100.0)) ? true : !(this.q41_1.g3_1 === 100.0)) ? true : !equals(this.r41_1, get_px(0))) {
      tmp = new InsetPath(this.p41_1, this.q41_1, this.r41_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
    this.t41_1 = 0;
  }
  protoOf(Path).v41 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).w41 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.f3_1) + '% ' + toString(_this__u8e3s4.g3_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.f3_1, 100.0 - _this__u8e3s4.g3_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.y41_1 = topLeft;
    this.z41_1 = roundness;
    this.a42_1 = from100(botRight);
    this.b42_1 = 0;
  }
  protoOf(InsetPath).u41 = function () {
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = this.z41_1;
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
    var left = this.y41_1.f3_1;
    var top = this.y41_1.g3_1;
    var right = this.a42_1.f3_1;
    var bottom = this.a42_1.g3_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.v41(left) : (left === right ? top === bottom : false) ? this.w41(to(top, left)) : this.v41(top) + ' ' + this.v41(right) + ' ' + this.v41(bottom) + ' ' + this.v41(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($tmp0_safe_receiver) {
    return function ($this$styleModifier) {
      $this$styleModifier.u26('clip-path', $tmp0_safe_receiver.u41());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(SilkStyleSheet).a28 = style;
  protoOf(SilkStyleSheet).c28 = style_0;
  protoOf(SilkStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(SilkStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(SilkStyleSheet).d28 = get_hover;
  protoOf(MutablePalettes).b41 = get;
  protoOf(MutablePalette).c41 = getValue_0;
  //endregion
  //region block: init
  _SilkTheme = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = get_entries;
  _.$_$.d = ComponentStyle$composable;
  _.$_$.e = ComponentStyle_0;
  _.$_$.f = get_active;
  _.$_$.g = addVariantBase;
  _.$_$.h = addVariant;
  _.$_$.i = get_ariaDisabled;
  _.$_$.j = get_ariaInvalid;
  _.$_$.k = base$composable;
  _.$_$.l = base;
  _.$_$.m = base_0;
  _.$_$.n = get_disabled;
  _.$_$.o = get_focus;
  _.$_$.p = get_focusVisible;
  _.$_$.q = get_hover_0;
  _.$_$.r = get_link;
  _.$_$.s = not;
  _.$_$.t = get_placeholder;
  _.$_$.u = toModifier$composable;
  _.$_$.v = get_visited;
  _.$_$.w = SpanText$composable;
  _.$_$.x = renderWithDeferred$composable;
  _.$_$.y = set_additionalSilkInitialization;
  _.$_$.z = ColorGroup;
  _.$_$.a1 = MutablePalette;
  _.$_$.b1 = toPalette;
  _.$_$.c1 = suffixedWith;
  _.$_$.d1 = clip;
  _.$_$.e1 = modifyComponentStyleBase;
  _.$_$.f1 = prepareSilkFoundation$composable;
  _.$_$.g1 = RectF_init_$Create$;
  _.$_$.h1 = Companion_getInstance_5;
  _.$_$.i1 = Companion_getInstance_10;
  _.$_$.j1 = ColorSchemes_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
