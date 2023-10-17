(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    root.blogmultiplatform = factory(typeof blogmultiplatform === 'undefined' ? {} : blogmultiplatform, this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.sd;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var removePrefix = kotlin_kotlin.$_$.mb;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Unit_getInstance = kotlin_kotlin.$_$.i4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var isObject = kotlin_kotlin.$_$.s9;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var VOID = kotlin_kotlin.$_$.he;
  var setMetadataFor = kotlin_kotlin.$_$.da;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.fe;
  var toInt = kotlin_kotlin.$_$.bc;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var toBoolean = kotlin_kotlin.$_$.xb;
  var isBlank = kotlin_kotlin.$_$.gb;
  var removeSuffix = kotlin_kotlin.$_$.nb;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.ge;
  var mapOf = kotlin_kotlin.$_$.w6;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Path$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Enum = kotlin_kotlin.$_$.rc;
  var protoOf = kotlin_kotlin.$_$.ca;
  var classMeta = kotlin_kotlin.$_$.v8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.aa;
  var getStringHashCode = kotlin_kotlin.$_$.d9;
  var println = kotlin_kotlin.$_$.l8;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KMutableProperty0 = kotlin_kotlin.$_$.pa;
  var THROW_ISE = kotlin_kotlin.$_$.bd;
  var getLocalDelegateReference = kotlin_kotlin.$_$.a9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r3;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.p9;
  var Long = kotlin_kotlin.$_$.wc;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var KProperty0 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c9;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.od;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var encodeToByteArray = kotlin_kotlin.$_$.bb;
  var decodeToString = kotlin_kotlin.$_$.ya;
  var Exception = kotlin_kotlin.$_$.tc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.z3;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$SidePanelKt, 'ComposableSingletons$SidePanelKt', objectMeta);
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(User, 'User', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(UserWithoutPassword, 'UserWithoutPassword', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt', objectMeta);
  setMetadataFor(LoginScreen$composable$lambda$lambda$lambda$slambda, 'LoginScreen$composable$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($checkUserExistenceCOROUTINE$0, '$checkUserExistenceCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($checkUserIdCOROUTINE$1, '$checkUserIdCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Image, 'Image', objectMeta);
  setMetadataFor(PathIcon, 'PathIcon', objectMeta);
  setMetadataFor(ID, 'ID', objectMeta);
  setMetadataFor(isUserLoggedIn$composable$slambda, 'isUserLoggedIn$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    var tmp$ret$1;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    var tmp$ret$3;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    var tmp$ret$5;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).f3c(true);
    Companion_getInstance().x3d('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.t3f(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.w3f(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_4(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      HomeScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(197659649, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:89)');
      }
      LoginScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (main.kt:116)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz(it, $dirty));
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
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.dz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.my();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous> (main.kt:116)');
        }
        $it($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.m4b_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.n4b_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.o4b_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.p4b_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp0_isNotEmpty = $status.className;
        tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
        if (tmp$ret$0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$0 = !isBlank(text);
      if (tmp$ret$0) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.l3d_1.z3f('/', VOID, ComposableSingletons$MainKt_getInstance().m4b_1);
    ctx.l3d_1.z3f('/admin/', VOID, ComposableSingletons$MainKt_getInstance().n4b_1);
    ctx.l3d_1.z3f('/admin/login', VOID, ComposableSingletons$MainKt_getInstance().o4b_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.a3g(removeSuffix(removeSuffix($this$addRouteInterceptor.n3f_1, '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.v3p_1.f3q(get_LoginInputStyle());
    initSilk(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:116)');
        }
        $router.s3f(ComposableSingletons$MainKt_getInstance().p4b_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:115)');
        }
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1432601359, true, main$lambda$lambda$lambda($router));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ly(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.ez(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.dz(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.my();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        MyApp$composable(tmp$ret$6, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:114)');
        }
        var tmp_0 = [get_AppGlobalsLocal().l1d(mapOf(to('title', 'BlogMultiplatform')))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1953125703, true, main$lambda$lambda($router));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ly(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.ez(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.dz(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.my();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function initSilk(ctx) {
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(14680293);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(14680293, $dirty, -1, 'com.example.blogmultiplatform.MyApp$composable (MyApp.kt:22)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1877377314, true, MyApp$composable$lambda(content, $dirty));
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
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_1.dz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.my();
      SilkApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.p1d(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(-1464217272, $changed, -1, 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous> (MyApp.kt:25)');
        }
        $content($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(1877377314, $changed, -1, 'com.example.blogmultiplatform.MyApp$composable.<anonymous> (MyApp.kt:24)');
        }
        var tmp_0 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1464217272, true, MyApp$composable$lambda$lambda($content, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ly(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.ez(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.dz(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.my();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Surface$composable(tmp_0, null, null, null, null, tmp$ret$6, $composer_0, 196608, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1641531988, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous> (SidePanel.kt:51)');
      }
      var tmp0_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(60));
      Image_getInstance();
      var tmp1_src = '/logo.svg';
      Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
      var tmp = margin(Companion_getInstance_1(), VOID, VOID, get_px(30));
      Constant_getInstance();
      var tmp2_modifier = color(fontSize(fontFamily(tmp, ['Roboto']), get_px(16)), Theme_HalfWhite_getInstance().t4b_1);
      SpanText$composable('Dashboard', tmp2_modifier, null, null, $composer_0, 6, 12);
      var tmp_0 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw;
        $composer_1.dz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.my();
      NavigationItem$composable(tmp_0, false, 'Home', 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15', tmp0, $composer_0, 3504, 0);
      var tmp_3 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ly(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_0;
        $composer_2.dz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.my();
      NavigationItem$composable(tmp_3, false, 'Create Post', 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z', tmp0_0, $composer_0, 3504, 0);
      var tmp_6 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ly(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_1;
        $composer_3.dz(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = tmp0_let_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_3.my();
      NavigationItem$composable(tmp_6, false, 'My Posts', 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01', tmp0_1, $composer_0, 3504, 0);
      var tmp_9 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ly(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_10;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_2;
        $composer_4.dz(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = tmp0_let_2;
      }
      var tmp_11 = tmp_10;
      var tmp0_2 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      $composer_4.my();
      NavigationItem$composable(tmp_9, false, 'Logout', 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148', tmp0_2, $composer_0, 3504, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw() {
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_0() {
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_1() {
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw_2() {
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt() {
    ComposableSingletons$SidePanelKt_instance = this;
    var tmp = this;
    tmp.u4b_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1641531988, false, ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5));
  }
  var ComposableSingletons$SidePanelKt_instance;
  function ComposableSingletons$SidePanelKt_getInstance() {
    if (ComposableSingletons$SidePanelKt_instance == null)
      new ComposableSingletons$SidePanelKt();
    return ComposableSingletons$SidePanelKt_instance;
  }
  function SidePanel$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(206904266);
    sourceInformation($composer_0, 'C(SidePanel$composable)');
    if (!($changed === 0) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(206904266, $changed, -1, 'com.example.blogmultiplatform.components.SidePanel$composable (SidePanel.kt:39)');
      }
      var tmp0_$receiver = Companion_getInstance_1();
      var tmp1_leftRight = get_px(50);
      var tmp2_topBottom = get_px(50);
      var tmp = padding(tmp0_$receiver, tmp2_topBottom, tmp1_leftRight);
      Constant_getInstance();
      var tmp_0 = height(width(tmp, get_px(250)), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = backgroundColor(zIndex(position(tmp_0, 'fixed'), 9), Theme_Secondary_getInstance().t4b_1);
      Column$composable(tmp_1, null, null, null, ComposableSingletons$SidePanelKt_getInstance().u4b_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.p1d(SidePanel$composable$lambda($changed));
    }
  }
  function NavigationItem$composable(modifier, selected, title, icon, onClick_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var selected_0 = {_v: selected};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(1534724944);
    sourceInformation($composer_0, 'C(NavigationItem$composable)P(1,3,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fz(selected_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.ez(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.ez(icon) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.hz(onClick_0) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.iy()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 2) === 0)) {
        selected_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1534724944, $dirty, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable (SidePanel.kt:106)');
      }
      var tmp = cursor(modifier_0._v, Companion_getInstance_3().v2c());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.ez(onClick_0);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
        var value = NavigationItem$composable$lambda(onClick_0);
        $composer_1.dz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.my();
      var tmp_2 = onClick(tmp, tmp0);
      var tmp_3 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1278882319, true, NavigationItem$composable$lambda_0(icon, selected_0, $dirty, title));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ly(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_2.dz(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.my();
      Row$composable(tmp_2, null, tmp_3, null, tmp0_0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.p1d(NavigationItem$composable$lambda_1(modifier_0, selected_0, title, icon, onClick_0, $changed, $default));
    }
  }
  function VectorIcon$composable(modifier, pathData, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(981520848);
    sourceInformation($composer_0, 'C(VectorIcon$composable)P(1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.ez(pathData) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.ez(color) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.iy()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(981520848, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable (SidePanel.kt:134)');
      }
      var tmp = height(width(modifier_0._v, get_px(24)), get_px(24));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ly(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
        var value = VectorIcon$composable$lambda;
        $composer_1.dz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.my();
      var tmp_2 = toAttrs(tmp, tmp0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1156203071, true, VectorIcon$composable$lambda_0($dirty, pathData, color));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ly(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_2.dz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.my();
      Svg$composable(tmp_2, tmp0_0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.p1d(VectorIcon$composable$lambda_1(modifier_0, pathData, color, $changed, $default));
    }
  }
  function SidePanel$composable$lambda($$changed) {
    return function ($composer, $force) {
      SidePanel$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItem$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function NavigationItem$composable$lambda_0($icon, $selected, $$dirty, $title) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(1278882319, $changed, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous> (SidePanel.kt:113)');
        }
        VectorIcon$composable(margin_0(Companion_getInstance_1(), VOID, get_px(10)), $icon, $selected._v ? Theme_Primary_getInstance().s4b_1 : Theme_White_getInstance().s4b_1, $composer_0, 112 & $$dirty >> 6, 0);
        var tmp_0 = Companion_getInstance_1();
        Constant_getInstance();
        var tmp0_modifier = color(fontSize(fontFamily(tmp_0, ['Roboto']), get_px(16)), $selected._v ? Theme_Primary_getInstance().t4b_1 : Theme_White_getInstance().t4b_1);
        SpanText$composable($title, tmp0_modifier, null, null, $composer_0, 14 & $$dirty >> 6, 12);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function NavigationItem$composable$lambda_1($modifier, $selected, $title, $icon, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItem$composable($modifier._v, $selected._v, $title, $icon, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda($this$toAttrs) {
    $this$toAttrs.g1y('viewBox', '0 0 24 24');
    $this$toAttrs.g1y('fill', 'none');
    return Unit_getInstance();
  }
  function VectorIcon$composable$lambda$lambda($pathData, $color) {
    return function ($this$Path) {
      $this$Path.z2i('d', $pathData);
      $this$Path.z2i('stroke', $color);
      $this$Path.z2i('stroke-width', '2');
      $this$Path.z2i('stroke-linecap', 'round');
      $this$Path.z2i('stroke-linejoin', 'round');
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda_0($$dirty, $pathData, $color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.ez($this$Svg) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(-1156203071, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous> (SidePanel.kt:144)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3 | 112 & $$dirty >> 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ly(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.ez($pathData) | $composer_1.ez($color));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = VectorIcon$composable$lambda$lambda($pathData, $color);
          var value = tmp$ret$0;
          tmp0_cache.dz(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.my();
        tmp$ret$4 = tmp0;
        Path$composable($this$Svg, tmp$ret$4, $composer_0, 14 & $dirty);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.wy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function VectorIcon$composable$lambda_1($modifier, $pathData, $color, $$changed, $$default) {
    return function ($composer, $force) {
      VectorIcon$composable($modifier._v, $pathData, $color, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_LightGray_instance;
  var Theme_HalfWhite_instance;
  var Theme_White_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A2FF', rgb(0, 162, 255));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#001019', rgb(0, 16, 25));
    Theme_LightGray_instance = new Theme('LightGray', 2, '#FAFAFA', rgb(250, 250, 250));
    Theme_HalfWhite_instance = new Theme('HalfWhite', 3, '#FFFFFF', rgba(255, 255, 255, 0.5));
    Theme_White_instance = new Theme('White', 4, '#FFFFFF', rgb(255, 255, 255));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.s4b_1 = hex;
    this.t4b_1 = rgb;
  }
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_HalfWhite_getInstance() {
    Theme_initEntries();
    return Theme_HalfWhite_instance;
  }
  function Theme_White_getInstance() {
    Theme_initEntries();
    return Theme_White_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.w4b_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.User', this, 3);
    tmp0_serialDesc.l2u('_id', true);
    tmp0_serialDesc.l2u('username', true);
    tmp0_serialDesc.l2u('password', true);
    this.v4b_1 = tmp0_serialDesc;
  }
  protoOf($serializer).x2k = function () {
    return this.v4b_1;
  };
  protoOf($serializer).n2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer).z2k = function (decoder) {
    var tmp0_desc = this.v4b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.t2n(tmp0_desc);
    if (tmp8_input.i2o()) {
      tmp4_local0 = tmp8_input.d2o(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d2o(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d2o(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.j2o(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d2o(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d2o(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d2o(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u2n(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).x4b = function (encoder, value) {
    var tmp0_desc = this.v4b_1;
    var tmp1_output = encoder.t2n(tmp0_desc);
    if (tmp1_output.m2p(tmp0_desc, 0) ? true : !(value.y4b_1 === '')) {
      tmp1_output.g2p(tmp0_desc, 0, value.y4b_1);
    }
    if (tmp1_output.m2p(tmp0_desc, 1) ? true : !(value.z4b_1 === '')) {
      tmp1_output.g2p(tmp0_desc, 1, value.z4b_1);
    }
    if (tmp1_output.m2p(tmp0_desc, 2) ? true : !(value.a4c_1 === '')) {
      tmp1_output.g2p(tmp0_desc, 2, value.a4c_1);
    }
    tmp1_output.u2n(tmp0_desc);
  };
  protoOf($serializer).y2k = function (encoder, value) {
    return this.x4b(encoder, value instanceof User ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance().v4b_1);
    }
    if (0 === (seen1 & 1))
      $this.y4b_1 = '';
    else
      $this.y4b_1 = id;
    if (0 === (seen1 & 2))
      $this.z4b_1 = '';
    else
      $this.z4b_1 = username;
    if (0 === (seen1 & 4))
      $this.a4c_1 = '';
    else
      $this.a4c_1 = password;
    $this.b4c_1 = 0;
    return $this;
  }
  function User_init_$Create$(seen1, id, username, password, serializationConstructorMarker) {
    return User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(id, username, password) {
    Companion_getInstance_7();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this.y4b_1 = id;
    this.z4b_1 = username;
    this.a4c_1 = password;
    this.b4c_1 = 0;
  }
  protoOf(User).toString = function () {
    return 'User(id=' + this.y4b_1 + ', username=' + this.z4b_1 + ', password=' + this.a4c_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.y4b_1);
    result = imul(result, 31) + getStringHashCode(this.z4b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a4c_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.y4b_1 === tmp0_other_with_cast.y4b_1))
      return false;
    if (!(this.z4b_1 === tmp0_other_with_cast.z4b_1))
      return false;
    if (!(this.a4c_1 === tmp0_other_with_cast.a4c_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.d4c_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.l2u('_id', true);
    tmp0_serialDesc.l2u('username', true);
    this.c4c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).x2k = function () {
    return this.c4c_1;
  };
  protoOf($serializer_0).n2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).z2k = function (decoder) {
    var tmp0_desc = this.c4c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.t2n(tmp0_desc);
    if (tmp7_input.i2o()) {
      tmp4_local0 = tmp7_input.d2o(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.d2o(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.j2o(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d2o(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.d2o(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u2n(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).e4c = function (encoder, value) {
    var tmp0_desc = this.c4c_1;
    var tmp1_output = encoder.t2n(tmp0_desc);
    if (tmp1_output.m2p(tmp0_desc, 0) ? true : !(value.f4c_1 === '')) {
      tmp1_output.g2p(tmp0_desc, 0, value.f4c_1);
    }
    if (tmp1_output.m2p(tmp0_desc, 1) ? true : !(value.g4c_1 === '')) {
      tmp1_output.g2p(tmp0_desc, 1, value.g4c_1);
    }
    tmp1_output.u2n(tmp0_desc);
  };
  protoOf($serializer_0).y2k = function (encoder, value) {
    return this.e4c(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_0().c4c_1);
    }
    if (0 === (seen1 & 1))
      $this.f4c_1 = '';
    else
      $this.f4c_1 = id;
    if (0 === (seen1 & 2))
      $this.g4c_1 = '';
    else
      $this.g4c_1 = username;
    $this.h4c_1 = 0;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen1, id, username, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function UserWithoutPassword(id, username) {
    Companion_getInstance_8();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    this.f4c_1 = id;
    this.g4c_1 = username;
    this.h4c_1 = 0;
  }
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.f4c_1 + ', username=' + this.g4c_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.f4c_1);
    result = imul(result, 31) + getStringHashCode(this.g4c_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.f4c_1 === tmp0_other_with_cast.f4c_1))
      return false;
    if (!(this.g4c_1 === tmp0_other_with_cast.g4c_1))
      return false;
    return true;
  };
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(524001773);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(524001773, $changed, -1, 'com.example.blogmultiplatform.pages.HomePage$composable (Index.kt:7)');
      }
      println('Hello World!');
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
      tmp0_safe_receiver.p1d(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.q18(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1853314884, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:19)');
      }
      HomePage$composable_0($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1750696757, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:34)');
      }
      SidePanel$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1022613278, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-3.<anonymous> (Index.kt:29)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      Constant_getInstance();
      var tmp_0 = maxWidth(tmp, get_px(1920));
      Column$composable(tmp_0, null, null, null, ComposableSingletons$IndexKt_getInstance().j4c_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.i4c_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1853314884, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.j4c_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1750696757, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.k4c_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1022613278, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomeScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(1338804745);
    sourceInformation($composer_0, 'C(HomeScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(1338804745, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable (Index.kt:17)');
      }
      isUserLoggedIn$composable(ComposableSingletons$IndexKt_getInstance().i4c_1, $composer_0, 6);
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
      tmp0_safe_receiver.p1d(HomeScreen$composable$lambda($changed));
    }
  }
  function HomePage$composable_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(-1728137044);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1728137044, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomePage$composable (Index.kt:24)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0 = Center_getInstance();
      Box$composable(tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().k4c_1, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.p1d(HomePage$composable$lambda_0($changed));
    }
  }
  function HomeScreen$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomeScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      HomePage$composable_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function rememberLoggedIn(remember, user) {
    user = user === VOID ? null : user;
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = remember.toString();
    if (!(user == null)) {
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['userId'] = user.f4c_1;
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['username'] = user.g4c_1;
    }
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1841479681, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$LoginKt.lambda-1.<anonymous> (Login.kt:183)');
      }
      SpanText$composable('Sign in', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.wy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginKt() {
    ComposableSingletons$LoginKt_instance = this;
    var tmp = this;
    tmp.l4c_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1841479681, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
  }
  var ComposableSingletons$LoginKt_instance;
  function ComposableSingletons$LoginKt_getInstance() {
    if (ComposableSingletons$LoginKt_instance == null)
      new ComposableSingletons$LoginKt();
    return ComposableSingletons$LoginKt_instance;
  }
  function LoginScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(-97421993);
    sourceInformation($composer_0, 'C(LoginScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-97421993, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable (Login.kt:62)');
      }
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
      if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>' call
        var value = mutableStateOf(' ');
        $composer_1.dz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.my();
      var errorText$delegate = tmp0;
      var context = rememberPageContext$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp2_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = tmp2_rememberCoroutineScope$composable;
      $composer_2.ly(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = LoginScreen$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.ly(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value_0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.dz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.my();
      var wrapper = tmp0_0;
      var tmp0_1 = wrapper.a1e_1;
      $composer_2.my();
      var scope = tmp0_1;
      var tmp_3 = fillMaxSize(Companion_getInstance_1());
      var tmp_4 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 690167170, true, LoginScreen$composable$lambda_2(scope, context, errorText$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ly(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_4.dz(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_2 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_4.my();
      Box$composable(tmp_3, tmp_4, null, tmp0_2, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.p1d(LoginScreen$composable$lambda_3($changed));
    }
  }
  function LoginScreen$composable$lambda($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.u1();
  }
  function LoginScreen$composable$lambda_0($errorText$delegate, value) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.st(value);
  }
  function LoginScreen$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda($this$toAttrs) {
    $this$toAttrs.g1y('placeholder', 'Username');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.g1y('placeholder', 'Password');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation) {
    this.u4c_1 = $context;
    this.v4c_1 = $errorText$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).i1g = function ($this$launch, $completion) {
    var tmp = this.j1g($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).ni = function (p1, $completion) {
    return this.i1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 6;
            var tmp_0 = this;
            var tmp_1 = document;
            ID_getInstance();
            var tmp_2 = tmp_1.getElementById('username_input');
            tmp_0.x4c_1 = (tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE()).value;
            var tmp_3 = this;
            var tmp_4 = document;
            ID_getInstance();
            var tmp_5 = tmp_4.getElementById('password_input');
            tmp_3.y4c_1 = (tmp_5 instanceof HTMLInputElement ? tmp_5 : THROW_CCE()).value;
            var tmp_6;
            if (charSequenceLength(this.x4c_1) > 0) {
              tmp_6 = charSequenceLength(this.y4c_1) > 0;
            } else {
              tmp_6 = false;
            }

            if (tmp_6) {
              this.sh_1 = 2;
              suspendResult = checkUserExistence(new User(VOID, this.x4c_1, this.y4c_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.v4c_1, 'Please fill all inputs');
              this.sh_1 = 1;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$composable$lambda_0(this.v4c_1, ' ');
            this.sh_1 = 5;
            continue $sm;
          case 2:
            this.z4c_1 = suspendResult;
            if (!(this.z4c_1 == null)) {
              rememberLoggedIn(true, this.z4c_1);
              this.u4c_1.g3d_1.w3f('/admin');
              this.sh_1 = 4;
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.v4c_1, "the user doesn't exist");
              this.sh_1 = 3;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            LoginScreen$composable$lambda_0(this.v4c_1, ' ');
            this.sh_1 = 4;
            continue $sm;
          case 4:
            this.sh_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 6) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).j1g = function ($this$launch, completion) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda(this.u4c_1, this.v4c_1, completion);
    i.w4c_1 = $this$launch;
    return i;
  };
  function LoginScreen$composable$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, resultContinuation) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.i1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginScreen$composable$lambda$lambda$lambda_1($scope, $context, $errorText$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, LoginScreen$composable$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, null));
      return Unit_getInstance();
    };
  }
  function LoginScreen$composable$lambda$lambda($scope, $context, $errorText$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(-59910919, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous> (Login.kt:79)');
        }
        var tmp0_modifier = width(margin(Companion_getInstance_1(), VOID, VOID, get_px(50)), get_px(100));
        Image_getInstance();
        var tmp1_src = '/logo.svg';
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_0 = Text_getInstance();
        var tmp_1 = toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64);
        ID_getInstance();
        var tmp_2 = backgroundColor(padding(height(width(margin(id(tmp_1, 'username_input'), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().e3j());
        Constant_getInstance();
        var tmp_3 = fontSize(fontFamily(tmp_2, ['Roboto']), get_px(14));
        var tmp_4 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_4();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'none';
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var tmp_5 = outline(tmp_3, tmp_4, tmp$ret$3, Colors_getInstance().r3i());
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_1 = tmp1_remember$composable;
        $composer_1.ly(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$4;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$4 = LoginScreen$composable$lambda$lambda$lambda;
          var value = tmp$ret$4;
          tmp0_cache.dz(value);
          tmp_6 = value;
        } else {
          tmp_6 = tmp0_let;
        }
        tmp$ret$5 = tmp_6;
        tmp$ret$6 = tmp$ret$5;
        var tmp_7 = tmp$ret$6;
        tmp$ret$7 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0 = tmp$ret$7;
        $composer_1.my();
        tmp$ret$8 = tmp0;
        Input$composable(tmp_0, toAttrs(tmp_5, tmp$ret$8), $composer_0, 6);
        var tmp_8 = Password_getInstance();
        var tmp_9 = toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64);
        ID_getInstance();
        var tmp_10 = backgroundColor(padding(height(width(margin(id(tmp_9, 'password_input'), VOID, VOID, get_px(20)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().e3j());
        Constant_getInstance();
        var tmp_11 = fontSize(fontFamily(tmp_10, ['Roboto']), get_px(14));
        var tmp_12 = get_px(0);
        var tmp$ret$12;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp2_get_None_n30xxp = Companion_getInstance_4();
        var tmp$ret$11;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$10;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$9 = 'none';
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        var tmp_13 = outline(tmp_11, tmp_12, tmp$ret$12, Colors_getInstance().r3i());
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_2 = tmp3_remember$composable;
        $composer_2.ly(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
          var tmp$ret$13;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$13 = LoginScreen$composable$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$13;
          tmp0_cache_0.dz(value_0);
          tmp_14 = value_0;
        } else {
          tmp_14 = tmp0_let_0;
        }
        tmp$ret$14 = tmp_14;
        tmp$ret$15 = tmp$ret$14;
        var tmp_15 = tmp$ret$15;
        tmp$ret$16 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_0 = tmp$ret$16;
        $composer_2.my();
        tmp$ret$17 = tmp0_0;
        Input$composable(tmp_8, toAttrs(tmp_13, tmp$ret$17), $composer_0, 6);
        var tmp_16 = fontWeight(borderRadius(color(backgroundColor(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(24)), get_px(350)), get_px(54)), Theme_Primary_getInstance().t4b_1), Colors_getInstance().e3j()), get_px(4)), Companion_getInstance_5().z2c());
        Constant_getInstance();
        var tmp_17 = fontSize(fontFamily(tmp_16, ['Roboto']), get_px(16));
        var tmp_18 = get_px(0);
        var tmp$ret$21;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp4_get_None_tl0vin = Companion_getInstance_4();
        var tmp$ret$20;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$19;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$18;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$18 = 'none';
        tmp$ret$19 = tmp$ret$18;
        tmp$ret$20 = tmp$ret$19;
        tmp$ret$21 = tmp$ret$20;
        var tmp_19 = border(tmp_17, tmp_18, tmp$ret$21, Colors_getInstance().r3i());
        var tmp_20 = get_px(0);
        var tmp$ret$25;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp5_get_None_wu0ub4 = Companion_getInstance_4();
        var tmp$ret$24;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$23;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$22;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$22 = 'none';
        tmp$ret$23 = tmp$ret$22;
        tmp$ret$24 = tmp$ret$23;
        tmp$ret$25 = tmp$ret$24;
        var tmp_21 = cursor(outline(tmp_19, tmp_20, tmp$ret$25, Colors_getInstance().r3i()), Companion_getInstance_3().v2c());
        Button$composable(toAttrs(onClick(tmp_21, LoginScreen$composable$lambda$lambda$lambda_1($scope, $context, $errorText$delegate))), ComposableSingletons$LoginKt_getInstance().l4c_1, $composer_0, 48, 0);
        var tmp_22 = color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().c3j());
        Constant_getInstance();
        var tmp2_modifier = textAlign(fontFamily(tmp_22, ['Roboto']), Companion_getInstance_6().e2c());
        var tmp3_text = LoginScreen$composable$lambda($errorText$delegate);
        SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        var tmp_23;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_23 = Unit_getInstance();
        }
        tmp = tmp_23;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_2($scope, $context, $errorText$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.iy()) {
        if (isTraceInProgress()) {
          traceEventStart(690167170, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous> (Login.kt:72)');
        }
        var tmp0_$receiver = Companion_getInstance_1();
        var tmp1_leftRight = get_px(50);
        var tmp2_top = get_px(80);
        var tmp3_bottom = get_px(24);
        var tmp_0 = backgroundColor(padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().t4b_1);
        var tmp_1 = Center_getInstance_0();
        var tmp_2 = CenterHorizontally_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -59910919, true, LoginScreen$composable$lambda$lambda($scope, $context, $errorText$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ly(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.ez(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.cz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().fy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_16(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.dz(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.my();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Column$composable(tmp_0, tmp_1, tmp_2, null, tmp$ret$6, $composer_0, 25008, 8);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.wy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n1w(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      LoginScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_LoginInputStyle() {
    _init_properties_LoginStyle_kt__eon42g();
    return LoginInputStyle$delegate.x2g(null, LoginInputStyle$factory());
  }
  var LoginInputStyle$delegate;
  function LoginInputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_LoginStyle_kt__eon42g();
    $this$ComponentStyle.h3m(LoginInputStyle$delegate$lambda$lambda);
    var tmp = get_focus($this$ComponentStyle);
    tmp.g3o(LoginInputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LoginInputStyle$delegate$lambda$lambda() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Colors_getInstance().r3i()), [CSSTransition_init_$Create$('border', get_ms(300))]);
  }
  function LoginInputStyle$delegate$lambda$lambda_0() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().t4b_1);
  }
  function LoginInputStyle$factory() {
    return getPropertyCallableRef('LoginInputStyle', 0, KProperty0, function () {
      return get_LoginInputStyle();
    }, null);
  }
  var properties_initialized_LoginStyle_kt_67itai;
  function _init_properties_LoginStyle_kt__eon42g() {
    if (!properties_initialized_LoginStyle_kt_67itai) {
      properties_initialized_LoginStyle_kt_67itai = true;
      LoginInputStyle$delegate = ComponentStyle(VOID, VOID, LoginInputStyle$delegate$lambda);
    }
  }
  function checkUserExistence(user, $completion) {
    var tmp = new $checkUserExistenceCOROUTINE$0(user, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function checkUserId(id, $completion) {
    var tmp = new $checkUserIdCOROUTINE$1(id, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4d_1 = user;
  }
  protoOf($checkUserExistenceCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.th_1 = 2;
            this.sh_1 = 1;
            var tmp_0 = get_api(window);
            var tmp0_encodeToString = Default_getInstance();
            var tmp0_serializer = tmp0_encodeToString.h2o();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.i3c('user_check', VOID, encodeToByteArray(tmp0_encodeToString.z32(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.i4d_1)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1 = this;
            var tmp1_safe_receiver = result == null ? null : decodeToString(result);
            var tmp_2;
            if (tmp1_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp0_decodeFromString = Default_getInstance();
              var tmp0_serializer_0 = tmp0_decodeFromString.h2o();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(UserWithoutPassword), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.a33(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            tmp_1.j4d_1 = tmp_2;
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_3 = this.vh_1;
            if (tmp_3 instanceof Exception) {
              var e = this.vh_1;
              var tmp_4 = this;
              println(e.message);
              tmp_4.j4d_1 = null;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.j4d_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.th_1 === 3) {
          throw e_0;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e_0;
        }
      }
     while (true);
  };
  function $checkUserIdCOROUTINE$1(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4d_1 = id;
  }
  protoOf($checkUserIdCOROUTINE$1).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.th_1 = 2;
            this.sh_1 = 1;
            var tmp_0 = get_api(window);
            var tmp0_encodeToString = Default_getInstance();
            var tmp0_serializer = tmp0_encodeToString.h2o();
            var tmp0_cast = serializer(tmp0_serializer, createKType(PrimitiveClasses_getInstance().pe(), arrayOf([]), false));
            suspendResult = tmp_0.i3c('check_user_id', VOID, encodeToByteArray(tmp0_encodeToString.z32(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.s4d_1)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1 = this;
            var tmp1_safe_receiver = result == null ? null : decodeToString(result);
            var tmp_2;
            if (tmp1_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp0_decodeFromString = Default_getInstance();
              var tmp0_serializer_0 = tmp0_decodeFromString.h2o();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.a33(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_2;
            tmp_1.t4d_1 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_3 = this.vh_1;
            if (tmp_3 instanceof Exception) {
              var e = this.vh_1;
              var tmp_4 = this;
              println(e.message);
              tmp_4.t4d_1 = false;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.t4d_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.th_1 === 3) {
          throw e_0;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e_0;
        }
      }
     while (true);
  };
  function Constant() {
    Constant_instance = this;
    this.u4d_1 = 'Roboto';
    this.v4d_1 = 250;
    this.w4d_1 = 1920;
    this.x4d_1 = 0;
  }
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
  }
  function Image() {
    Image_instance = this;
    this.y4d_1 = '/logo.svg';
    this.z4d_1 = 0;
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.a4e_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.b4e_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.c4e_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.d4e_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
    this.e4e_1 = 0;
  }
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function ID() {
    ID_instance = this;
    this.f4e_1 = 'username_input';
    this.g4e_1 = 'password_input';
    this.h4e_1 = 0;
  }
  var ID_instance;
  function ID_getInstance() {
    if (ID_instance == null)
      new ID();
    return ID_instance;
  }
  function isUserLoggedIn$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ry(-1950558440);
    sourceInformation($composer_0, 'C(isUserLoggedIn$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.iy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1950558440, $dirty, -1, 'com.example.blogmultiplatform.util.isUserLoggedIn$composable (Functions.kt:14)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = localStorage['remember'];
        var value = toBoolean(tmp$ret$1);
        $composer_1.dz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.my();
      var remembered = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ly(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var value_0 = localStorage['userId'];
        $composer_2.dz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.my();
      var userId = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ly(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_1 = mutableStateOf(false);
        $composer_3.dz(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.my();
      var userIdExists$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ly(-1603429786);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [userIdExists$delegate, userId, remembered, context];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_4.ez(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.cz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().fy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_2 = isUserLoggedIn$composable$slambda_0(userId, remembered, context, userIdExists$delegate, null);
        $composer_4.dz(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.my();
      LaunchedEffect$composable(Unit_getInstance(), tmp0_2, $composer_0, 6);
      if (!(remembered ? isUserLoggedIn$composable$lambda(userIdExists$delegate) : false)) {
        println('Loading ...');
      }
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
      tmp0_safe_receiver.p1d(isUserLoggedIn$composable$lambda_1(content, $changed));
    }
  }
  function isUserLoggedIn$composable$lambda($userIdExists$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.u1();
  }
  function isUserLoggedIn$composable$lambda_0($userIdExists$delegate, value) {
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.st(value);
  }
  function isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    this.q4e_1 = $userId;
    this.r4e_1 = $remembered;
    this.s4e_1 = $context;
    this.t4e_1 = $userIdExists$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(isUserLoggedIn$composable$slambda).i1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.j1g($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(isUserLoggedIn$composable$slambda).ni = function (p1, $completion) {
    return this.i1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(isUserLoggedIn$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            if (!(this.q4e_1 == null ? true : charSequenceLength(this.q4e_1) === 0)) {
              this.sh_1 = 1;
              suspendResult = checkUserId(this.q4e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v4e_1 = false;
              this.sh_1 = 2;
              continue $sm;
            }

          case 1:
            this.v4e_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            var ARGUMENT = this.v4e_1;
            isUserLoggedIn$composable$lambda_0(this.t4e_1, ARGUMENT);
            if (!this.r4e_1 ? true : isUserLoggedIn$composable$lambda(this.t4e_1)) {
              this.s4e_1.g3d_1.w3f('/admin/login');
            }

            return Unit_getInstance();
          case 3:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 3) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  protoOf(isUserLoggedIn$composable$slambda).j1g = function ($this$LaunchedEffect, completion) {
    var i = new isUserLoggedIn$composable$slambda(this.q4e_1, this.r4e_1, this.s4e_1, this.t4e_1, completion);
    i.u4e_1 = $this$LaunchedEffect;
    return i;
  };
  function isUserLoggedIn$composable$slambda_0($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    var i = new isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.i1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function isUserLoggedIn$composable$lambda_1($content, $$changed) {
    return function ($composer, $force) {
      isUserLoggedIn$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).o2u = typeParametersSerializers;
  protoOf($serializer_0).o2u = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map
