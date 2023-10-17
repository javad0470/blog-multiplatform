(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    root['kobweb-frontend-silk-icons-fa'] = factory(typeof this['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : this['kobweb-frontend-silk-icons-fa'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var THROW_ISE = kotlin_kotlin.$_$.ue;
  var enumEntries = kotlin_kotlin.$_$.r9;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var Enum = kotlin_kotlin.$_$.ie;
  var protoOf = kotlin_kotlin.$_$.lb;
  var classMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.cg;
  var setMetadataFor = kotlin_kotlin.$_$.mb;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.te;
  var isObject = kotlin_kotlin.$_$.za;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.j9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(IconSize, 'IconSize', classMeta, Enum);
  setMetadataFor(IconCategory, 'IconCategory', classMeta, Enum);
  //endregion
  var IconSize_XXS_instance;
  var IconSize_XS_instance;
  var IconSize_SM_instance;
  var IconSize_LG_instance;
  var IconSize_XL_instance;
  var IconSize_XXL_instance;
  var IconSize_X1_instance;
  var IconSize_X2_instance;
  var IconSize_X3_instance;
  var IconSize_X4_instance;
  var IconSize_X5_instance;
  var IconSize_X6_instance;
  var IconSize_X7_instance;
  var IconSize_X8_instance;
  var IconSize_X9_instance;
  var IconSize_X10_instance;
  function values() {
    return [IconSize_XXS_getInstance(), IconSize_XS_getInstance(), IconSize_SM_getInstance(), IconSize_LG_getInstance(), IconSize_XL_getInstance(), IconSize_XXL_getInstance(), IconSize_X1_getInstance(), IconSize_X2_getInstance(), IconSize_X3_getInstance(), IconSize_X4_getInstance(), IconSize_X5_getInstance(), IconSize_X6_getInstance(), IconSize_X7_getInstance(), IconSize_X8_getInstance(), IconSize_X9_getInstance(), IconSize_X10_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'XXS':
        return IconSize_XXS_getInstance();
      case 'XS':
        return IconSize_XS_getInstance();
      case 'SM':
        return IconSize_SM_getInstance();
      case 'LG':
        return IconSize_LG_getInstance();
      case 'XL':
        return IconSize_XL_getInstance();
      case 'XXL':
        return IconSize_XXL_getInstance();
      case 'X1':
        return IconSize_X1_getInstance();
      case 'X2':
        return IconSize_X2_getInstance();
      case 'X3':
        return IconSize_X3_getInstance();
      case 'X4':
        return IconSize_X4_getInstance();
      case 'X5':
        return IconSize_X5_getInstance();
      case 'X6':
        return IconSize_X6_getInstance();
      case 'X7':
        return IconSize_X7_getInstance();
      case 'X8':
        return IconSize_X8_getInstance();
      case 'X9':
        return IconSize_X9_getInstance();
      case 'X10':
        return IconSize_X10_getInstance();
      default:
        IconSize_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var IconSize_entriesInitialized;
  function IconSize_initEntries() {
    if (IconSize_entriesInitialized)
      return Unit_getInstance();
    IconSize_entriesInitialized = true;
    IconSize_XXS_instance = new IconSize('XXS', 0, 'fa-2xs');
    IconSize_XS_instance = new IconSize('XS', 1, 'fa-xs');
    IconSize_SM_instance = new IconSize('SM', 2, 'fa-sm');
    IconSize_LG_instance = new IconSize('LG', 3, 'fa-lg');
    IconSize_XL_instance = new IconSize('XL', 4, 'fa-xl');
    IconSize_XXL_instance = new IconSize('XXL', 5, 'fa-2xl');
    IconSize_X1_instance = new IconSize('X1', 6, 'fa-1x');
    IconSize_X2_instance = new IconSize('X2', 7, 'fa-2x');
    IconSize_X3_instance = new IconSize('X3', 8, 'fa-3x');
    IconSize_X4_instance = new IconSize('X4', 9, 'fa-4x');
    IconSize_X5_instance = new IconSize('X5', 10, 'fa-5x');
    IconSize_X6_instance = new IconSize('X6', 11, 'fa-6x');
    IconSize_X7_instance = new IconSize('X7', 12, 'fa-7x');
    IconSize_X8_instance = new IconSize('X8', 13, 'fa-8x');
    IconSize_X9_instance = new IconSize('X9', 14, 'fa-9x');
    IconSize_X10_instance = new IconSize('X10', 15, 'fa-10x');
  }
  var $ENTRIES;
  function IconSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconSize).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function FaPlus$composable(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1339339628);
    sourceInformation($composer_0, 'C(FaPlus$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1339339628, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.fa.FaPlus$composable (FaIcons.kt:1049)');
      }
      FaIcon$composable('plus', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(FaPlus$composable$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaXmark$composable(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1105350811);
    sourceInformation($composer_0, 'C(FaXmark$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1105350811, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.fa.FaXmark$composable (FaIcons.kt:1450)');
      }
      FaIcon$composable('xmark', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(FaXmark$composable$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaBars$composable(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2140615546);
    sourceInformation($composer_0, 'C(FaBars$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2140615546, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.fa.FaBars$composable (FaIcons.kt:176)');
      }
      FaIcon$composable('bars', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(FaBars$composable$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaIcon$composable(name, modifier, style, size, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2118873971);
    sourceInformation($composer_0, 'C(FaIcon$composable)P(1!1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        style_0._v = IconCategory_REGULAR_getInstance();
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2118873971, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.fa.FaIcon$composable (FaIcons.kt:57)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = style_0._v;
      var tmp1_remember$composable = size_0._v;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_1.changed_ga7h3f_k$(tmp0_remember$composable) | $composer_1.changed_ga7h3f_k$(name)) | $composer_1.changed_ga7h3f_k$(tmp1_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.fa.FaIcon$composable.<anonymous>' call
        var value = FaIcon$composable$lambda(style_0, name, size_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_1 = toAttrs(modifier, tmp0);
      Span$composable(tmp_1, null, $composer_0, 0, 2);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(FaIcon$composable$lambda_0(name, modifier, style_0, size_0, $changed, $default));
    }
  }
  var IconCategory_REGULAR_instance;
  var IconCategory_SOLID_instance;
  var IconCategory_BRAND_instance;
  function values_0() {
    return [IconCategory_REGULAR_getInstance(), IconCategory_SOLID_getInstance(), IconCategory_BRAND_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'REGULAR':
        return IconCategory_REGULAR_getInstance();
      case 'SOLID':
        return IconCategory_SOLID_getInstance();
      case 'BRAND':
        return IconCategory_BRAND_getInstance();
      default:
        IconCategory_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var IconCategory_entriesInitialized;
  function IconCategory_initEntries() {
    if (IconCategory_entriesInitialized)
      return Unit_getInstance();
    IconCategory_entriesInitialized = true;
    IconCategory_REGULAR_instance = new IconCategory('REGULAR', 0, 'far');
    IconCategory_SOLID_instance = new IconCategory('SOLID', 1, 'fas');
    IconCategory_BRAND_instance = new IconCategory('BRAND', 2, 'fab');
  }
  var $ENTRIES_0;
  function IconCategory(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconCategory).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function FaPlus$composable$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaPlus$composable($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaXmark$composable$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaXmark$composable($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaBars$composable$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaBars$composable($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaIcon$composable$lambda($style, $name, $size) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_mog12g_k$([$style._v.className_1, 'fa-' + $name]);
      var tmp;
      if (!($size._v == null)) {
        $this$toAttrs.classes_mog12g_k$([$size._v.className_1]);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function FaIcon$composable$lambda_0($name, $modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaIcon$composable($name, $modifier, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function IconSize_XXS_getInstance() {
    IconSize_initEntries();
    return IconSize_XXS_instance;
  }
  function IconSize_XS_getInstance() {
    IconSize_initEntries();
    return IconSize_XS_instance;
  }
  function IconSize_SM_getInstance() {
    IconSize_initEntries();
    return IconSize_SM_instance;
  }
  function IconSize_LG_getInstance() {
    IconSize_initEntries();
    return IconSize_LG_instance;
  }
  function IconSize_XL_getInstance() {
    IconSize_initEntries();
    return IconSize_XL_instance;
  }
  function IconSize_XXL_getInstance() {
    IconSize_initEntries();
    return IconSize_XXL_instance;
  }
  function IconSize_X1_getInstance() {
    IconSize_initEntries();
    return IconSize_X1_instance;
  }
  function IconSize_X2_getInstance() {
    IconSize_initEntries();
    return IconSize_X2_instance;
  }
  function IconSize_X3_getInstance() {
    IconSize_initEntries();
    return IconSize_X3_instance;
  }
  function IconSize_X4_getInstance() {
    IconSize_initEntries();
    return IconSize_X4_instance;
  }
  function IconSize_X5_getInstance() {
    IconSize_initEntries();
    return IconSize_X5_instance;
  }
  function IconSize_X6_getInstance() {
    IconSize_initEntries();
    return IconSize_X6_instance;
  }
  function IconSize_X7_getInstance() {
    IconSize_initEntries();
    return IconSize_X7_instance;
  }
  function IconSize_X8_getInstance() {
    IconSize_initEntries();
    return IconSize_X8_instance;
  }
  function IconSize_X9_getInstance() {
    IconSize_initEntries();
    return IconSize_X9_instance;
  }
  function IconSize_X10_getInstance() {
    IconSize_initEntries();
    return IconSize_X10_instance;
  }
  function IconCategory_REGULAR_getInstance() {
    IconCategory_initEntries();
    return IconCategory_REGULAR_instance;
  }
  function IconCategory_SOLID_getInstance() {
    IconCategory_initEntries();
    return IconCategory_SOLID_instance;
  }
  function IconCategory_BRAND_getInstance() {
    IconCategory_initEntries();
    return IconCategory_BRAND_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FaBars$composable;
  _.$_$.b = FaPlus$composable;
  _.$_$.c = FaXmark$composable;
  _.$_$.d = IconSize_LG_getInstance;
  _.$_$.e = IconSize_XL_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-icons-fa.js.map
