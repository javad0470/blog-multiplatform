(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-foundation.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    root['kobweb-frontend-kobweb-silk'] = factory(typeof this['kobweb-frontend-kobweb-silk'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-silk'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_foundation) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var isObject = kotlin_kotlin.$_$.t9;
  var KobwebApp$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var setSilkWidgetVariables$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var prepareSilkFoundation$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  //endregion
  //region block: pre-declaration
  //endregion
  function SilkApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(766681329);
    sourceInformation($composer_0, 'C(SilkApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(766681329, $dirty, -1, 'com.varabyte.kobweb.silk.SilkApp$composable (SilkApp.kt:8)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1100068428, true, SilkApp$composable$lambda(content, $dirty));
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
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      KobwebApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(SilkApp$composable$lambda_0(content, $changed));
    }
  }
  function SilkApp$composable$lambda$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(456211017, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous> (SilkApp.kt:11)');
        }
        setSilkWidgetVariables$composable(document, $composer_0, 0);
        $content($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function SilkApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1100068428, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous> (SilkApp.kt:10)');
        }
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 456211017, true, SilkApp$composable$lambda$lambda($content, $$dirty));
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
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        prepareSilkFoundation$composable(null, tmp$ret$6, $composer_0, 48, 1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function SilkApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      SilkApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SilkApp$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-silk.js.map
