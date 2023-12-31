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
  var protoOf = kotlin_kotlin.$_$.ea;
  var objectMeta = kotlin_kotlin.$_$.da;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var KProperty1 = kotlin_kotlin.$_$.va;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Img$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var classMeta = kotlin_kotlin.$_$.w8;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ta;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.r2k(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.r2k(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().j2k();
    tmp.s4i_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.t4i_1 = 0;
  }
  protoOf(TocVars).f49 = function () {
    return this.s4i_1.r2k(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_0().f2j()), Companion_getInstance_1().r2f()), get_cssRem(0));
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
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().f49().j2k()), get_cssRem(1));
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
      return receiver.f49();
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
    return ImageStyle$delegate.r2k(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.r2k(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function Image$composable(src, desc, modifier, autoPrefix, variant, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var desc_0 = {_v: desc};
    var modifier_0 = {_v: modifier};
    var autoPrefix_0 = {_v: autoPrefix};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(34210657);
    sourceInformation($composer_0, 'C(Image$composable)P(3,1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.gz(desc_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.hz(autoPrefix_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.gz(variant_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ky()) {
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
      Img$composable(prependIf(Companion_getInstance_4(), autoPrefix_0._v, src), desc_0._v, toAttrs(toModifier$composable(get_ImageStyle(), [variant_0._v], $composer_0, 0).e3n(modifier_0._v)), $composer_0, 112 & $dirty, 0);
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
      tmp0_safe_receiver.r1d(Image$composable$lambda(src, desc_0, modifier_0, autoPrefix_0, variant_0, $changed, $default));
    }
  }
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_5().l2j());
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
    return LinkStyle$delegate.r2k(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.r2k(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.r2k(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function LinkVars() {
    LinkVars_instance = this;
    this.u4i_1 = StyleVariable(VOID, 'silk');
    this.v4i_1 = StyleVariable(VOID, 'silk');
    this.w4i_1 = 0;
  }
  protoOf(LinkVars).x4i = function () {
    return this.u4i_1.r2k(this, DefaultColor$factory());
  };
  protoOf(LinkVars).y4i = function () {
    return this.v4i_1.r2k(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.w3r(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.v3t(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.v3t(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover($this$ComponentStyle);
    tmp_1.v3t(LinkStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().f2j());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().x4i().j2k());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().y4i().j2k());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().d2l());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.v3t(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().f2j());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_getInstance(), get_ColorVar().j2k());
    var tmp = get_link($this$addVariant);
    tmp.v3t(UncoloredLinkVariant$delegate$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.v3t(UncoloredLinkVariant$delegate$lambda$lambda_0(colorModifier));
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
      return receiver.x4i();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.y4i();
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
    var mutableTheme = ctx.r3v_1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ctx.r3v_1.x3v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(tmp0_apply.l45_1)).j4h(Colors_getInstance().i3o(), Colors_getInstance().q3o());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(tmp0_apply.m45_1)).j4h(Colors_getInstance().k3o(), Colors_getInstance().s3o());
    var tmp = get_SilkColorsStyle();
    modifyComponentStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.b3w(get_ImageStyle());
    mutableTheme.k3w([get_FitWidthImageVariant()]);
    mutableTheme.b3w(get_LinkStyle());
    mutableTheme.k3w([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant()]);
    mutableTheme.b3w(get_TocStyle());
    mutableTheme.k3w([get_TocBorderedVariant()]);
  }
  function initSilkWidgetsKobweb$lambda($this$modifyComponentStyleBase) {
    var palette = toPalette($this$modifyComponentStyleBase.v3r());
    return setVariable(setVariable(Companion_getInstance(), LinkVars_getInstance().x4i(), get_link_0(palette).k4h()), LinkVars_getInstance().y4i(), get_link_0(palette).f4j());
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.c4j_1 = this.w47();
    this.d4j_1 = this.w47();
    this.e4j_1 = 0;
  }
  protoOf(MutableLink).v4h = function (_set____db54di) {
    return this.c4j_1.s47(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).k4h = function () {
    return this.c4j_1.r2k(this, default$factory_0());
  };
  protoOf(MutableLink).g4j = function (_set____db54di) {
    return this.d4j_1.s47(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).f4j = function () {
    return this.d4j_1.r2k(this, visited$factory_0());
  };
  protoOf(MutableLink).j4h = function (default_0, visited) {
    this.v4h(default_0);
    this.g4j(visited);
  };
  function get_link_0(_this__u8e3s4) {
    return get_link_1(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_link_1(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.k4h();
    }, function (receiver, value) {
      return receiver.v4h(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.k4h();
    }, function (receiver, value) {
      return receiver.v4h(value);
    });
  }
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.f4j();
    }, function (receiver, value) {
      return receiver.g4j(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.f4j();
    }, function (receiver, value) {
      return receiver.g4j(value);
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
