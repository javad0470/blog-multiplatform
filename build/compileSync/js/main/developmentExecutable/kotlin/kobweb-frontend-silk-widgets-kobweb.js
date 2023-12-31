(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-core']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var VOID = kotlin_kotlin.$_$.ig;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.n7;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r8;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.la;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Img$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.g9;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.q4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var interfaceMeta = kotlin_kotlin.$_$.pa;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var classMeta = kotlin_kotlin.$_$.ea;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var KMutableProperty1 = kotlin_kotlin.$_$.gc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(Link, 'Link', interfaceMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup, [ColorGroup, Link]);
  setMetadataFor(SilkWidgetKobwebColorGroups, 'SilkWidgetKobwebColorGroups', objectMeta);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.getValue_1h979_k$(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.getValue_1h979_k$(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function get_$stableprop() {
    return 0;
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_x2j5m8_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(TocVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_1h979_k$(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_0().get_None_wo6tgh_k$()), Companion_getInstance_1().get_Start_ih4i6x_k$()), get_cssRem(0));
  }
  function TocBorderedVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_getInstance(), get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().get_BorderColor_hljtgy_k$().value$default_x2j5m8_k$()), get_cssRem(1));
  }
  function TocStyle$factory() {
    return getPropertyCallableRef('TocStyle', 0, KProperty0, function () {
      return get_TocStyle();
    }, null);
  }
  function TocBorderedVariant$factory() {
    return getPropertyCallableRef('TocBorderedVariant', 0, KProperty0, function () {
      return get_TocBorderedVariant();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_getInstance_3();
      TocStyle$delegate = base(tmp, VOID, 'silk', TocStyle$delegate$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant$delegate = addVariantBase(tmp_0, VOID, TocBorderedVariant$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.getValue_1h979_k$(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.getValue_1h979_k$(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function Image$composable(src, desc, modifier, autoPrefix, variant, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var desc_0 = {_v: desc};
    var modifier_0 = {_v: modifier};
    var autoPrefix_0 = {_v: autoPrefix};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(34210657);
    sourceInformation($composer_0, 'C(Image$composable)P(3,1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(desc_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(autoPrefix_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        desc_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 8) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(34210657, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image$composable (Image.kt:41)');
      }
      Img$composable(prependIf(Companion_getInstance_4(), autoPrefix_0._v, src), desc_0._v, toAttrs(toModifier$composable(get_ImageStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(modifier_0._v)), $composer_0, 112 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Image$composable$lambda(src, desc_0, modifier_0, autoPrefix_0, variant_0, $changed, $default));
    }
  }
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_5().get_ScaleDown_ala7ur_k$());
  }
  function Image$composable$lambda($src, $desc, $modifier, $autoPrefix, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      Image$composable($src, $desc._v, $modifier._v, $autoPrefix._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  function FitWidthImageVariant$factory() {
    return getPropertyCallableRef('FitWidthImageVariant', 0, KProperty0, function () {
      return get_FitWidthImageVariant();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle(VOID, 'silk', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant$delegate = addVariantBase(tmp, VOID, FitWidthImageVariant$delegate$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.getValue_1h979_k$(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.getValue_1h979_k$(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.getValue_1h979_k$(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function get_$stableprop_0() {
    return 0;
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.DefaultColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.VisitedColor$delegate_1 = StyleVariable(VOID, 'silk');
    this.$stable_1 = 0;
  }
  protoOf(LinkVars).get_DefaultColor_3x88vp_k$ = function () {
    return this.DefaultColor$delegate_1.getValue_1h979_k$(this, DefaultColor$factory());
  };
  protoOf(LinkVars).get_VisitedColor_7oj77i_k$ = function () {
    return this.VisitedColor$delegate_1.getValue_1h979_k$(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.base_li7hyk_k$(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover($this$ComponentStyle);
    tmp_1.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().get_None_wo6tgh_k$());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$().value$default_x2j5m8_k$());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_VisitedColor_7oj77i_k$().value$default_x2j5m8_k$());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().get_Underline_oo7egz_k$());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.invoke_ifmuo5_k$(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().get_None_wo6tgh_k$());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_getInstance(), get_ColorVar().value$default_x2j5m8_k$());
    var tmp = get_link($this$addVariant);
    tmp.invoke_ifmuo5_k$(UncoloredLinkVariant$delegate$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.invoke_ifmuo5_k$(UncoloredLinkVariant$delegate$lambda$lambda_0(colorModifier));
    return Unit_getInstance();
  }
  function UncoloredLinkVariant$delegate$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$delegate$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  function UndecoratedLinkVariant$factory() {
    return getPropertyCallableRef('UndecoratedLinkVariant', 0, KProperty0, function () {
      return get_UndecoratedLinkVariant();
    }, null);
  }
  function UncoloredLinkVariant$factory() {
    return getPropertyCallableRef('UncoloredLinkVariant', 0, KProperty0, function () {
      return get_UncoloredLinkVariant();
    }, null);
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_DefaultColor_3x88vp_k$();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.get_VisitedColor_7oj77i_k$();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle$delegate = ComponentStyle(VOID, 'silk', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant$delegate = addVariant(tmp, VOID, UndecoratedLinkVariant$delegate$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant$delegate = addVariant(tmp_0, VOID, UncoloredLinkVariant$delegate$lambda);
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(tmp0_apply.get_light_iuogdp_k$())).set_60o1sz_k$(Colors_getInstance().get_Blue_wnz3k3_k$(), Colors_getInstance().get_Purple_33oyqt_k$());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(tmp0_apply.get_dark_wokkvz_k$())).set_60o1sz_k$(Colors_getInstance().get_Cyan_wnzzpo_k$(), Colors_getInstance().get_Violet_5rb5wo_k$());
    var tmp = get_SilkColorsStyle();
    modifyComponentStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.registerComponentStyle_35os1s_k$(get_ImageStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_FitWidthImageVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_LinkStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_TocStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_TocBorderedVariant()]);
  }
  function initSilkWidgetsKobweb$lambda($this$modifyComponentStyleBase) {
    var palette = toPalette($this$modifyComponentStyleBase.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$(), get_link_0(palette).get_default_qtagd4_k$()), LinkVars_getInstance().get_VisitedColor_7oj77i_k$(), get_link_0(palette).get_visited_8zg8qp_k$());
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Link() {
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.visited$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.$stable_2 = 0;
  }
  protoOf(MutableLink).set_default_uv4i87_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_ovgpf8_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_1h979_k$(this, default$factory_0());
  };
  protoOf(MutableLink).set_visited_xm6sbm_k$ = function (_set____db54di) {
    return this.visited$delegate_1.setValue_ovgpf8_k$(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_visited_8zg8qp_k$ = function () {
    return this.visited$delegate_1.getValue_1h979_k$(this, visited$factory_0());
  };
  protoOf(MutableLink).set_60o1sz_k$ = function (default_0, visited) {
    this.set_default_uv4i87_k$(default_0);
    this.set_visited_xm6sbm_k$(visited);
  };
  function get_$stableprop_2() {
    return 0;
  }
  function SilkWidgetKobwebColorGroups() {
    SilkWidgetKobwebColorGroups_instance = this;
    this.$stable_1 = 0;
  }
  var SilkWidgetKobwebColorGroups_instance;
  function SilkWidgetKobwebColorGroups_getInstance() {
    if (SilkWidgetKobwebColorGroups_instance == null)
      new SilkWidgetKobwebColorGroups();
    return SilkWidgetKobwebColorGroups_instance;
  }
  function get_link_0(_this__u8e3s4) {
    return get_link_1(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_link_1(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
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
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_xm6sbm_k$(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_xm6sbm_k$(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image$composable;
  _.$_$.b = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
