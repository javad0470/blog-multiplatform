(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-compose-html-ext.js', './compose-multiplatform-core-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-compose-html-ext'], this['compose-multiplatform-core-runtime'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var charArrayOf = kotlin_kotlin.$_$.r8;
  var trimStart = kotlin_kotlin.$_$.pc;
  var get_http = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var protoOf = kotlin_kotlin.$_$.ea;
  var VOID = kotlin_kotlin.$_$.ne;
  var classMeta = kotlin_kotlin.$_$.w8;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var KProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var KMutableProperty0 = kotlin_kotlin.$_$.sa;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var KMutableProperty1 = kotlin_kotlin.$_$.ta;
  var lazy = kotlin_kotlin.$_$.ce;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.da;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var emptyMap = kotlin_kotlin.$_$.z5;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var substringAfterLast = kotlin_kotlin.$_$.yb;
  var plus = kotlin_kotlin.$_$.a7;
  var equals = kotlin_kotlin.$_$.z8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var hashCode = kotlin_kotlin.$_$.f9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ke;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Enum = kotlin_kotlin.$_$.wc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var joinToString = kotlin_kotlin.$_$.l6;
  var objectCreate = kotlin_kotlin.$_$.ca;
  var removePrefix = kotlin_kotlin.$_$.pb;
  var startsWith = kotlin_kotlin.$_$.wb;
  var drop = kotlin_kotlin.$_$.db;
  var first = kotlin_kotlin.$_$.hb;
  var toString = kotlin_kotlin.$_$.ja;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var split = kotlin_kotlin.$_$.ub;
  var getOrNull = kotlin_kotlin.$_$.g6;
  var Exception = kotlin_kotlin.$_$.yc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var isBlank = kotlin_kotlin.$_$.jb;
  var startsWith_0 = kotlin_kotlin.$_$.xb;
  var endsWith = kotlin_kotlin.$_$.fb;
  var dropLast = kotlin_kotlin.$_$.cb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var lastOrNull = kotlin_kotlin.$_$.r6;
  var last = kotlin_kotlin.$_$.s6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.p6;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var isObject = kotlin_kotlin.$_$.t9;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var removeSuffix = kotlin_kotlin.$_$.qb;
  var substringAfter = kotlin_kotlin.$_$.zb;
  var contains = kotlin_kotlin.$_$.ab;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toMutableMap = kotlin_kotlin.$_$.q7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApiFetcher, 'ApiFetcher', classMeta, VOID, VOID, VOID, VOID, [4, 5]);
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, Node);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, Node);
  setMetadataFor(ResolvedEntry, 'ResolvedEntry', classMeta);
  setMetadataFor(RouteTree, 'RouteTree', classMeta);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(Router, 'Router', classMeta);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    // Inline function 'kotlin.getValue' call
    api$factory();
    return api$delegate.w1();
  }
  var api$delegate;
  function toResource($this, apiPath, autoPrefix) {
    return prependIf(Companion_getInstance_2(), autoPrefix, '/api/' + trimStart(apiPath, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function ApiFetcher(window_0) {
    this.o3h_1 = window_0;
    this.p3h_1 = logOnError$factory(get_http(this.o3h_1));
    this.q3h_1 = 8;
  }
  protoOf(ApiFetcher).r3h = function (_set____db54di) {
    logOnError$factory_0();
    return this.p3h_1.set(_set____db54di);
  };
  protoOf(ApiFetcher).s3h = function () {
    // Inline function 'kotlin.getValue' call
    logOnError$factory_1();
    return this.p3h_1.get();
  };
  protoOf(ApiFetcher).t3h = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.o3h_1).c2p(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).u3h = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.t3h(apiPath, headers, abortController, autoPrefix, $completion) : $super.t3h.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).v3h = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.o3h_1).d2p(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).w3h = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.v3h(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.v3h.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function api$factory() {
    return getPropertyCallableRef('api', 1, KProperty1, function (receiver) {
      return get_api(receiver);
    }, null);
  }
  function logOnError$factory($b0) {
    return getPropertyCallableRef('logOnError', 0, KMutableProperty0, function () {
      return $b0.y2o_1;
    }, function (value) {
      $b0.y2o_1 = value;
      return Unit_getInstance();
    });
  }
  function logOnError$factory_0() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.s3h();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function logOnError$factory_1() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.s3h();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
    }
  }
  function KobwebApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1244630298);
    sourceInformation($composer_0, 'C(KobwebApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1244630298, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp$composable (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp0_Style$composable = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.ny(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, tmp0_Style$composable.v29(), $composer_1, 0, 1);
      $composer_1.oy();
      content($composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.r1d(KobwebApp$composable$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_getInstance();
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet.call(this);
    this.a2a('html, body', DefaultStyleSheet$lambda);
    this.a2a('*', DefaultStyleSheet$lambda_0);
    this.b3i_1 = 0;
  }
  protoOf(DefaultStyleSheet).z29 = function (selector, cssRule) {
    return this.y29(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$composable$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_AppGlobalsLocal() {
    _init_properties_AppGlobals_kt__v0sn2p();
    return AppGlobalsLocal;
  }
  var AppGlobalsLocal;
  function AppGlobalsLocal$lambda() {
    _init_properties_AppGlobals_kt__v0sn2p();
    // Inline function 'kotlin.collections.mapOf' call
    return emptyMap();
  }
  var properties_initialized_AppGlobals_kt_dlyhbl;
  function _init_properties_AppGlobals_kt__v0sn2p() {
    if (!properties_initialized_AppGlobals_kt_dlyhbl) {
      properties_initialized_AppGlobals_kt_dlyhbl = true;
      AppGlobalsLocal = compositionLocalOf(VOID, AppGlobalsLocal$lambda);
    }
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function RouteInfo(route, dynamicParams) {
    this.c3i_1 = route;
    this.d3i_1 = dynamicParams;
    this.e3i_1 = substringAfterLast(this.c3i_1.l3i_1, _Char___init__impl__6a9atx(47));
    this.f3i_1 = this.c3i_1.l3i_1;
    this.g3i_1 = plus(this.c3i_1.m3i_1, this.d3i_1);
    this.h3i_1 = this.c3i_1.m3i_1;
    this.i3i_1 = this.c3i_1.n3i_1;
    this.j3i_1 = 0;
  }
  protoOf(RouteInfo).toString = function () {
    return this.c3i_1.toString();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.f3i_1 === this.f3i_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.g3i_1, this.g3i_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.i3i_1 == this.i3i_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.f3i_1);
    result = imul(31, result) + hashCode(this.g3i_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i3i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).p3i = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).q3i = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.c3i_1.l3i_1 : path;
    queryParams = queryParams === VOID ? this.c3i_1.m3i_1 : queryParams;
    fragment = fragment === VOID ? this.c3i_1.n3i_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.d3i_1 : dynamicParams;
    return $super === VOID ? this.p3i(path, queryParams, fragment, dynamicParams) : $super.p3i.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).s3i = function () {
    var tmp = this.r3i_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).t3i = function (router) {
    this.r3i_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PageContext(router) {
    Companion_getInstance_0();
    this.u3i_1 = router;
    this.v3i_1 = mutableStateOf(null);
    this.w3i_1 = 8;
  }
  protoOf(PageContext).x3i = function (value) {
    this.v3i_1.ut(value);
  };
  protoOf(PageContext).y3i = function () {
    var tmp0_elvis_lhs = this.v3i_1.w1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('PageContext route info is only valid within a @Page composable');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function rememberPageContext$composable($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.ny(1885592798);
    sourceInformation($composer_0, 'C(rememberPageContext$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1885592798, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext$composable (PageContext.kt:163)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.lz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      throw IllegalStateException_init_$Create$('PageContext is only valid within a @Page composable');
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.z3i_1 = config;
    this.a3j_1 = router;
    this.b3j_1 = 8;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  var MutableKobwebConfigInstance;
  function MutableKobwebConfig() {
    this.c3j_1 = new MutableOpenLinkStrategies();
    this.d3j_1 = 8;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.e3j_1 = internal;
    this.f3j_1 = external;
    this.g3j_1 = 8;
  }
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_getInstance();
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.a5_1;
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    var tmp$ret$11;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    tmp0_apply.q6(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.k()) {
      tmp0_apply.o5(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(queryParams.f());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.u1().c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$7;
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.t1();
        // Inline function 'kotlin.collections.component2' call
        var value = item.w1();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var tmp0_apply_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply_0.q6(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          tmp0_apply_0.o5(_Char___init__impl__6a9atx(61));
          tmp0_apply_0.q6(value);
        }
        tmp$ret$7 = tmp0_apply_0.toString();
        tmp0_mapTo.a(tmp$ret$7);
      }
      tmp0_apply.q6(joinToString(tmp0_mapTo, '&'));
    }
    if (!(fragment == null)) {
      tmp0_apply.o5(_Char___init__impl__6a9atx(35));
      tmp0_apply.q6(fragment);
    }
    tmp$ret$11 = tmp0_apply.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).h3j = function (path) {
    return !(this.i3j(path) == null);
  };
  protoOf(Companion_0).i3j = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_0).j3j = function (url) {
    var tmp0_elvis_lhs = this.i3j(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_1();
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.k3i_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.k3i_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var tmp0_also = drop(this.k3i_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.k3i_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = tmp0_also;
    }
    tmp_1.l3i_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp1_apply = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this.k3i_1.search;
      if (charSequenceLength(tmp0_isEmpty) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.k3i_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.l(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var tmp0_set = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        tmp1_apply.l3(key, tmp0_set);
      }
    }
    tmp_3.m3i_1 = tmp1_apply;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var tmp2_takeIf = this.k3i_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(tmp2_takeIf, '#')) {
      tmp_5 = tmp2_takeIf;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.n3i_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
    this.o3i_1 = 8;
  }
  protoOf(Route).toString = function () {
    return this.l3i_1 + this.k3i_1.search + this.k3i_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
    this.k3j_1 = 0;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_getInstance_2().l3j(path) : path;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).m3j = function (value) {
    Companion_getInstance_3().o3j(new RoutePrefixImpl(value));
  };
  protoOf(Companion_1).w1 = function () {
    return Companion_getInstance_3().s3i().p3j_1;
  };
  protoOf(Companion_1).l3j = function (path) {
    return Companion_getInstance_3().s3i().l3j(path);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.n3j_1 = null;
  }
  protoOf(Companion_2).o3j = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n3j_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.n3j_1 = value;
  };
  protoOf(Companion_2).q3j = function () {
    if (this.n3j_1 == null) {
      this.n3j_1 = new RoutePrefixImpl('');
    }
    return this.n3j_1;
  };
  protoOf(Companion_2).s3i = function () {
    return ensureNotNull(this.q3j());
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoutePrefixImpl(value) {
    Companion_getInstance_3();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : '' + tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.p3j_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).l3j = function (path) {
    if (isBlank(this.p3j_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.p3j_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.p3j_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.w1();
    if (charSequenceLength(tmp0_isNotEmpty) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.w1(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  protoOf(Node).v3j = function (name) {
    return this.r3j_1 === name;
  };
  protoOf(Node).w3j = function (routePart) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.t3j_1.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.v3j(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function Node(name, method) {
    this.r3j_1 = name;
    this.s3j_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t3j_1 = ArrayList_init_$Create$_0();
    this.u3j_1 = 8;
  }
  protoOf(Node).x3j = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = routePart.substring(1, tmp0_substring);
      tmp = new DynamicNode(tmp$ret$1, method);
    } else {
      tmp = new StaticNode(routePart, method);
    }
    var node = tmp;
    this.t3j_1.a(node);
    return node;
  };
  function RootNode() {
    Node.call(this, '', null);
    this.c3k_1 = 0;
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    this.h3k_1 = 0;
  }
  protoOf(DynamicNode).v3j = function (name) {
    return true;
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    this.m3k_1 = 0;
  }
  function ResolvedEntry(node, routePart) {
    this.n3k_1 = node;
    this.o3k_1 = routePart;
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.p3k_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.l(0) === $this.p3k_1.r3j_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.l(i);
        var tmp1_elvis_lhs = currNode.w3j(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.a(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:136)');
        }
        this$0.q3k_1(404, $composer_0, 6);
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
  function RouteTree() {
    this.p3k_1 = new RootNode();
    this.q3k_1 = ComposableSingletons$RouteTreeKt_getInstance().r3k_1;
  }
  protoOf(RouteTree).s3k = function (route) {
    var tmp0_safe_receiver = resolve(this, route);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n3k_1;
    return !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s3j_1) == null);
  };
  protoOf(RouteTree).t3k = function (route) {
    var resolvedEntries = resolve(this, route.l3i_1);
    var tmp1_safe_receiver = resolvedEntries == null ? null : last(resolvedEntries);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n3k_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s3j_1;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      tmp = ComposableLambda$invoke$ref(composableLambdaInstance(-729357476, true, RouteTree$createPageData$lambda(this)));
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var pageMethod = tmp;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    if (resolvedEntries == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = resolvedEntries.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.n3k_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = element.n3k_1.r3j_1;
          var tmp1_set = element.o3k_1;
          dynamicParams.l3(tmp0_set, tmp1_set);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  protoOf(RouteTree).u3k = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.p3k_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.l(0) === this.p3k_1.r3j_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.l(i);
        var tmp1_elvis_lhs = currNode.w3j(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          var tmp_0 = currNode;
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register$composable.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = method;
          } else {
            tmp_1 = null;
          }
          tmp$ret$2 = tmp_1;
          tmp = tmp_0.x3j(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function PageData(pageMethod, routeInfo) {
    this.v3k_1 = pageMethod;
    this.w3k_1 = routeInfo;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:87)');
      }
      ErrorPage$composable(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.r3k_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage$composable(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(24844165);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(24844165, $dirty, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable (RouteTree.kt:21)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$composable$lambda(errorCode));
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
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      Div$composable(null, tmp0, $composer_0, 48, 1);
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
      tmp0_safe_receiver.r1d(ErrorPage$composable$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$composable$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous> (RouteTree.kt:23)');
        }
        Text$composable('Error code: ' + $errorCode, $composer_0, 0);
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
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ErrorPage$composable$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage$composable($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    illegalDecoyCallException('<set-activePageMethod>');
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    activePageMethod$factory();
    return $this.x3k_1.w1();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.v3i_1.w1();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.v3i_1.ut(tmp0_safe_receiver.q3i(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_getInstance_1().i3j(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.y3k_1.t3k(route);
      $set_activePageMethod$$composable_u4dzqq($this, data.v3k_1);
      _this__u8e3s4.x3i(data.w3k_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_1().h3j(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_getInstance_1().j3j(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var tmp1_takeIf = remove(Companion_getInstance_2(), hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp1_takeIf) > 0) {
      tmp = tmp1_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_getInstance_2();
    var tmp$ret$5;
    // Inline function 'kotlin.collections.fold' call
    var tmp2_fold = $this.z3k_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = tmp2_fold.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var tmp4_anonymous = accumulator;
      var interceptor = new RouteInterceptorScope(tmp4_anonymous);
      element(interceptor);
      accumulator = interceptor.g3l();
    }
    tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function $set_activePageMethod$$composable_u4dzqq($this, set__$_ezb9bk) {
    activePageMethod$factory_0();
    return $this.x3k_1.ut(set__$_ezb9bk);
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_getInstance_0().s3i();
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = ensureNotNull(document.location);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      tmp$ret$0 = removePrefix(tmp0_let.href, tmp0_let.origin);
      tmp$ret$1 = tmp$ret$0;
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$composable$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous> (Router.kt:137)');
        }
        $pageMethod($composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda($pageWrapper, $$dirty, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous> (Router.kt:136)');
        }
        var tmp_0 = $pageWrapper._v;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$composable$lambda$lambda($pageMethod));
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
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp_0(tmp$ret$6, $composer_0, 6 | 112 & $$dirty << 3);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.h3l($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Router() {
    this.x3k_1 = mutableStateOf(null);
    this.y3k_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z3k_1 = ArrayList_init_$Create$_0();
    Companion_getInstance_0().t3i(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.a3l_1 = 8;
  }
  protoOf(Router).i3l = function (interceptor) {
    this.z3k_1.a(interceptor);
  };
  protoOf(Router).j3l = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_getInstance_1().h3j(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) ? !(element === _Char___init__impl__6a9atx(63)) : false)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        var route = pathQueryAndFragment_0;
        if (!this.y3k_1.s3k(route)) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.y3k_1.s3k(withoutSlash))
              pathQueryAndFragment_0 = withoutSlash;
          } else {
            var withSlash = route + '/';
            if (this.y3k_1.s3k(withSlash))
              pathQueryAndFragment_0 = withSlash;
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(Companion_getInstance_0().s3i(), this, pathQueryAndFragment_0)) {
      // Inline function 'kotlin.let' call
      var tmp1_let = window.location.origin + pathQueryAndFragment_0;
      // Inline function 'kotlin.contracts.contract' call
      if (!(window.location.href === tmp1_let)) {
        var newPathname = !(window.location.pathname === Companion_getInstance_1().j3j(new URL(tmp1_let)).l3i_1);
        var tmp0 = updateHistoryMode.a5_1;
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', tmp1_let);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', tmp1_let);
        }
        if (newPathname) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver != null) {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      var tmp_0;
      if (contains(tmp1_let, _Char___init__impl__6a9atx(35))) {
        var tmp2_safe_receiver = document.getElementById(substringAfter(tmp1_let, _Char___init__impl__6a9atx(35)));
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.scrollIntoView({behavior: 'smooth'});
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).k3l = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.j3l(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).l3l = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.k3l(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.k3l.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  protoOf(Router).h3l = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1838195952);
    sourceInformation($composer_0, 'C(renderActivePage$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().m3l_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(1838195952, $dirty, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable (Router.kt:129)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Call 'navigateTo' at least once before calling 'renderActivePage'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = [get_PageContextLocal().n1d(Companion_getInstance_0().s3i())];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$composable$lambda(pageWrapper_0, $dirty, pageMethod));
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
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_1.fz(value);
      tmp_2 = value;
    } else {
      tmp_2 = tmp0_let;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    $composer_1.oy();
    CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.uy();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.r1d(Router$renderActivePage$composable$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).n3l = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_getInstance_1().h3j(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.y3k_1.u3k(prependIf(Companion_getInstance_2(), autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).o3l = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.n3l(route, autoPrefix, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.n3l.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.b3l_1 = new Route(pathQueryAndFragment);
    this.c3l_1 = this.b3l_1.l3i_1;
    this.d3l_1 = toMutableMap(this.b3l_1.m3i_1);
    this.e3l_1 = this.b3l_1.n3i_1;
    this.f3l_1 = 8;
  }
  protoOf(RouteInterceptorScope).p3l = function (value) {
    this.c3l_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).g3l = function () {
    return Route_init_$Create$(this.c3l_1, this.d3l_1, this.e3l_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_getInstance();
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:129)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.m3l_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: post-declaration
  protoOf(DefaultStyleSheet).y29 = style;
  protoOf(DefaultStyleSheet).a2a = style_0;
  protoOf(DefaultStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(DefaultStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(DefaultStyleSheet).b2a = get_hover;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_api;
  _.$_$.b = initKobweb;
  _.$_$.c = get_AppGlobalsLocal;
  _.$_$.d = KobwebApp$composable;
  _.$_$.e = rememberPageContext$composable;
  _.$_$.f = Router;
  _.$_$.g = prependIf;
  _.$_$.h = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.i = Companion_getInstance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
