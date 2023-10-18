(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
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
    if (typeof this['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'blogmultiplatform'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'blogmultiplatform'.");
    }
    root.blogmultiplatform = factory(typeof blogmultiplatform === 'undefined' ? {} : blogmultiplatform, this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-silk-icons-fa'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.td;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var removePrefix = kotlin_kotlin.$_$.nb;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var isObject = kotlin_kotlin.$_$.t9;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.je;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.he;
  var toInt = kotlin_kotlin.$_$.cc;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var toBoolean = kotlin_kotlin.$_$.yb;
  var isBlank = kotlin_kotlin.$_$.hb;
  var removeSuffix = kotlin_kotlin.$_$.ob;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.ie;
  var mapOf = kotlin_kotlin.$_$.x6;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.qa;
  var THROW_ISE = kotlin_kotlin.$_$.cd;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b9;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var rememberBreakpoint$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Path$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaBars$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s3;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var protoOf = kotlin_kotlin.$_$.da;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Long = kotlin_kotlin.$_$.xc;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var classMeta = kotlin_kotlin.$_$.w8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var FaXmark$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.xd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var EnumDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Enum = kotlin_kotlin.$_$.sc;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.ba;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var println = kotlin_kotlin.$_$.m8;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var LG_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var Switch$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var MD_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var SimpleGrid$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var Li$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var Ul$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var loadDataUrlFromDisk = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var disabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var resize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var TextArea$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var FaPlus$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var split = kotlin_kotlin.$_$.sb;
  var dropLast = kotlin_kotlin.$_$.ab;
  var last = kotlin_kotlin.$_$.s6;
  var contains = kotlin_kotlin.$_$.xa;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.pd;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var encodeToByteArray = kotlin_kotlin.$_$.cb;
  var decodeToString = kotlin_kotlin.$_$.za;
  var Exception = kotlin_kotlin.$_$.uc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a4;
  var get_http = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var toDouble = kotlin_kotlin.$_$.ac;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$LoadingIndicatorKt, 'ComposableSingletons$LoadingIndicatorKt', objectMeta);
  setMetadataFor(ComposableSingletons$SidePanelKt, 'ComposableSingletons$SidePanelKt', objectMeta);
  setMetadataFor(OverflowSidePanel$composable$slambda$slambda, 'OverflowSidePanel$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$slambda, 'OverflowSidePanel$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda, 'OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Category, 'Category', classMeta, Enum, VOID, VOID, {0: Companion_getInstance_12});
  setMetadataFor(EditorKey, 'EditorKey', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RandomJoke, 'RandomJoke', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(User, 'User', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(UserWithoutPassword, 'UserWithoutPassword', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Screen, 'Screen', classMeta);
  setMetadataFor(AdminHome, 'AdminHome', objectMeta, Screen);
  setMetadataFor(AdminLogin, 'AdminLogin', objectMeta, Screen);
  setMetadataFor(AdminCreate, 'AdminCreate', objectMeta, Screen);
  setMetadataFor(AdminMyPosts, 'AdminMyPosts', objectMeta, Screen);
  setMetadataFor(CreatePageUiEvent, 'CreatePageUiEvent', classMeta);
  setMetadataFor(ComposableSingletons$CreateKt, 'ComposableSingletons$CreateKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(HomeScreen$composable$slambda, 'HomeScreen$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt', objectMeta);
  setMetadataFor(LoginScreen$composable$lambda$lambda$lambda$slambda, 'LoginScreen$composable$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$MyPostKt, 'ComposableSingletons$MyPostKt', objectMeta);
  setMetadataFor($checkUserExistenceCOROUTINE$0, '$checkUserExistenceCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($checkUserIdCOROUTINE$1, '$checkUserIdCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fetchRandomJokeCOROUTINE$2, '$fetchRandomJokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Image, 'Image', objectMeta);
  setMetadataFor(Icon, 'Icon', objectMeta);
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
    get_api(window).h3g(true);
    Companion_getInstance().a3i('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.w3j(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.z3j(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_6(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      HomePage$composable_0($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(197659649, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:89)');
      }
      CreatePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1691572098, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (main.kt:91)');
      }
      LoginScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1109482749, $changed, -1, 'ComposableSingletons$MainKt.lambda-5.<anonymous> (main.kt:93)');
      }
      MyPostPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous> (main.kt:122)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib(it, $dirty));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous> (main.kt:122)');
        }
        $it($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.b4i_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.c4i_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.d4i_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.e4i_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1691572098, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.f4i_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1109482749, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.g4i_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
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
    ctx.o3h_1.c3k('/', VOID, ComposableSingletons$MainKt_getInstance().b4i_1);
    ctx.o3h_1.c3k('/admin/', VOID, ComposableSingletons$MainKt_getInstance().c4i_1);
    ctx.o3h_1.c3k('/admin/create', VOID, ComposableSingletons$MainKt_getInstance().d4i_1);
    ctx.o3h_1.c3k('/admin/login', VOID, ComposableSingletons$MainKt_getInstance().e4i_1);
    ctx.o3h_1.c3k('/admin/my_posts', VOID, ComposableSingletons$MainKt_getInstance().f4i_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.d3k(removeSuffix(removeSuffix($this$addRouteInterceptor.q3j_1, '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.f3u_1.p3u(get_EditorKeyStyle());
    ctx.f3u_1.p3u(get_LoginInputStyle());
    ctx.f3u_1.p3u(get_NavigationItemStyle());
    initSilk(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:122)');
        }
        $router.v3j(ComposableSingletons$MainKt_getInstance().g4i_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:121)');
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
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
        MyApp$composable(tmp$ret$6, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:120)');
        }
        var tmp_0 = [get_AppGlobalsLocal().n1d(mapOf(to('title', 'BlogMultiplatform')))];
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
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
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
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
  function initSilk(ctx) {
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(14680293);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
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
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      SilkApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
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
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
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
        Surface$composable(tmp_0, null, null, null, null, tmp$ret$6, $composer_0, 196608, 30);
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
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AdminPageLayout$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(2110758218);
    sourceInformation($composer_0, 'C(AdminPageLayout$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2110758218, $dirty, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable (AdminPageLayout.kt:18)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var overFlowMenuOpened$delegate = tmp0;
      var tmp_1 = fillMaxSize(Companion_getInstance_1());
      var tmp_2 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 976916783, true, AdminPageLayout$composable$lambda_1(overFlowMenuOpened$delegate, content, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.oy();
      Box$composable(tmp_1, tmp_2, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(AdminPageLayout$composable$lambda_2(content, $changed));
    }
  }
  function AdminPageLayout$composable$lambda($overFlowMenuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('overFlowMenuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $overFlowMenuOpened$delegate.w1();
  }
  function AdminPageLayout$composable$lambda_0($overFlowMenuOpened$delegate, value) {
    getLocalDelegateReference('overFlowMenuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $overFlowMenuOpened$delegate.ut(value);
  }
  function AdminPageLayout$composable$lambda$lambda$lambda($overFlowMenuOpened$delegate) {
    return function () {
      AdminPageLayout$composable$lambda_0($overFlowMenuOpened$delegate, true);
      return Unit_getInstance();
    };
  }
  function AdminPageLayout$composable$lambda$lambda$lambda_0($overFlowMenuOpened$delegate) {
    return function () {
      AdminPageLayout$composable$lambda_0($overFlowMenuOpened$delegate, false);
      return Unit_getInstance();
    };
  }
  function AdminPageLayout$composable$lambda$lambda($overFlowMenuOpened$delegate, $content, $$dirty) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(195052902, $changed, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous> (AdminPageLayout.kt:30)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($overFlowMenuOpened$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = AdminPageLayout$composable$lambda$lambda$lambda($overFlowMenuOpened$delegate);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        SidePanel$composable(tmp$ret$4, $composer_0, 0);
        $composer_0.ny(1286481596);
        if (AdminPageLayout$composable$lambda($overFlowMenuOpened$delegate)) {
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp1_remember$composable = $composer_0;
          var $composer_2 = tmp1_remember$composable;
          $composer_2.ny(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_2;
          var tmp1_cache_0 = $composer_2.gz($overFlowMenuOpened$delegate);
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.ez();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_2;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
            var tmp$ret$5;
            // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$5 = AdminPageLayout$composable$lambda$lambda$lambda_0($overFlowMenuOpened$delegate);
            var value_0 = tmp$ret$5;
            tmp0_cache_0.fz(value_0);
            tmp_2 = value_0;
          } else {
            tmp_2 = tmp0_let_0;
          }
          tmp$ret$6 = tmp_2;
          tmp$ret$7 = tmp$ret$6;
          var tmp_3 = tmp$ret$7;
          tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
          var tmp0_0 = tmp$ret$8;
          $composer_2.oy();
          tmp$ret$9 = tmp0_0;
          OverflowSidePanel$composable(tmp$ret$9, $composer_0, 0);
        }
        $composer_0.oy();
        $content($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function AdminPageLayout$composable$lambda_1($overFlowMenuOpened$delegate, $content, $$dirty) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(976916783, $changed, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous> (AdminPageLayout.kt:25)');
        }
        var tmp_0 = fillMaxSize(Companion_getInstance_1());
        Constant_getInstance();
        var tmp_1 = maxWidth(tmp_0, get_px(1920));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 195052902, true, AdminPageLayout$composable$lambda$lambda($overFlowMenuOpened$delegate, $content, $$dirty));
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
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Column$composable(tmp_1, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function AdminPageLayout$composable$lambda_2($content, $$changed) {
    return function ($composer, $force) {
      AdminPageLayout$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_1$lambda_atn3pj($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(799387059, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-1.<anonymous> (LoadingIndicator.kt:36)');
      }
      Text$composable('Loading', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_2$lambda_vduh7e($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1820086993, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-2.<anonymous> (LoadingIndicator.kt:31)');
      }
      Span$composable(toAttrs(classNames(Companion_getInstance_1(), ['visually-hidden'])), ComposableSingletons$LoadingIndicatorKt_getInstance().h4i_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_3$lambda_2k8057($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1224469040, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-3.<anonymous> (LoadingIndicator.kt:26)');
      }
      Div$composable(toAttrs(classNames(Companion_getInstance_1(), ['spinner-border', 'text-primary'])), ComposableSingletons$LoadingIndicatorKt_getInstance().i4i_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoadingIndicatorKt() {
    ComposableSingletons$LoadingIndicatorKt_instance = this;
    var tmp = this;
    tmp.h4i_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(799387059, false, ComposableSingletons$LoadingIndicatorKt$lambda_1$lambda_atn3pj));
    var tmp_0 = this;
    tmp_0.i4i_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1820086993, false, ComposableSingletons$LoadingIndicatorKt$lambda_2$lambda_vduh7e));
    var tmp_1 = this;
    tmp_1.j4i_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1224469040, false, ComposableSingletons$LoadingIndicatorKt$lambda_3$lambda_2k8057));
  }
  var ComposableSingletons$LoadingIndicatorKt_instance;
  function ComposableSingletons$LoadingIndicatorKt_getInstance() {
    if (ComposableSingletons$LoadingIndicatorKt_instance == null)
      new ComposableSingletons$LoadingIndicatorKt();
    return ComposableSingletons$LoadingIndicatorKt_instance;
  }
  function LoadingIndicator$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-208701957);
    sourceInformation($composer_0, 'C(LoadingIndicator$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-208701957, $dirty, -1, 'com.example.blogmultiplatform.components.LoadingIndicator$composable (LoadingIndicator.kt:18)');
      }
      var tmp = padding(height(fillMaxSize(modifier_0._v), get_vh(100)), get_px(50));
      var tmp_0 = Center_getInstance();
      Box$composable(tmp, tmp_0, null, ComposableSingletons$LoadingIndicatorKt_getInstance().j4i_1, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(LoadingIndicator$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function LoadingIndicator$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LoadingIndicator$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-484341009, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous> (SidePanel.kt:95)');
      }
      var tmp0_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(60));
      Image_getInstance();
      var tmp1_src = '/logo.svg';
      Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
      NavigationItems$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt() {
    ComposableSingletons$SidePanelKt_instance = this;
    var tmp = this;
    tmp.k4i_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-484341009, false, ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5));
  }
  var ComposableSingletons$SidePanelKt_instance;
  function ComposableSingletons$SidePanelKt_getInstance() {
    if (ComposableSingletons$SidePanelKt_instance == null)
      new ComposableSingletons$SidePanelKt();
    return ComposableSingletons$SidePanelKt_instance;
  }
  function SidePanel$composable(onMenuClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1613190577);
    sourceInformation($composer_0, 'C(SidePanel$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(onMenuClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1613190577, $dirty, -1, 'com.example.blogmultiplatform.components.SidePanel$composable (SidePanel.kt:70)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      if (breakpoint.b5(Breakpoint_MD_getInstance()) > 0) {
        $composer_0.ny(520205167);
        SidePanelInternal$composable($composer_0, 0);
        $composer_0.oy();
      } else {
        $composer_0.ny(520205208);
        CollapsedSidePanel$composable(onMenuClick, $composer_0, 14 & $dirty);
        $composer_0.oy();
      }
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
      tmp0_safe_receiver.r1d(SidePanel$composable$lambda(onMenuClick, $changed));
    }
  }
  function SidePanelInternal$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(593505127);
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(593505127, $changed, -1, 'com.example.blogmultiplatform.components.SidePanelInternal$composable (SidePanel.kt:82)');
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
      var tmp_1 = backgroundColor(zIndex(position(tmp_0, 'fixed'), 9), Theme_Secondary_getInstance().o4i_1);
      Column$composable(tmp_1, null, null, null, ComposableSingletons$SidePanelKt_getInstance().k4i_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.r1d(SidePanelInternal$composable$lambda($changed));
    }
  }
  function NavigationItems$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1588454249);
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1588454249, $changed, -1, 'com.example.blogmultiplatform.components.NavigationItems$composable (SidePanel.kt:106)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
      var tmp = margin(Companion_getInstance_1(), VOID, VOID, get_px(30));
      Constant_getInstance();
      var tmp0_modifier = color(fontSize(fontFamily(tmp, ['Roboto']), get_px(16)), Theme_HalfWhite_getInstance().o4i_1);
      SpanText$composable('Dashboard', tmp0_modifier, null, null, $composer_0, 6, 12);
      var tmp_0 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_1 = context.m3h().t3g_1 === AdminHome_getInstance().p4i_1;
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(context);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value = NavigationItems$composable$lambda(context);
        $composer_1.fz(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.oy();
      NavigationItem$composable(tmp_0, tmp_1, 'Home', 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15', tmp0, $composer_0, 3456, 0);
      var tmp_4 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_5 = context.m3h().t3g_1 === AdminCreate_getInstance().p4i_1;
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.gz(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_0 = NavigationItems$composable$lambda_0(context);
        $composer_2.fz(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = tmp0_let_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_2.oy();
      NavigationItem$composable(tmp_4, tmp_5, 'Create Post', 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z', tmp0_0, $composer_0, 3456, 0);
      var tmp_8 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_9 = context.m3h().t3g_1 === AdminMyPosts_getInstance().p4i_1;
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ny(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3.gz(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_10;
      if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_1 = NavigationItems$composable$lambda_1(context);
        $composer_3.fz(value_1);
        tmp_10 = value_1;
      } else {
        tmp_10 = tmp0_let_1;
      }
      var tmp_11 = tmp_10;
      var tmp0_1 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      $composer_3.oy();
      NavigationItem$composable(tmp_8, tmp_9, 'My Posts', 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01', tmp0_1, $composer_0, 3456, 0);
      var tmp_12 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      PathIcon_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ny(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4.gz(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_2 = NavigationItems$composable$lambda_2(context);
        $composer_4.fz(value_2);
        tmp_13 = value_2;
      } else {
        tmp_13 = tmp0_let_2;
      }
      var tmp_14 = tmp_13;
      var tmp0_2 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      $composer_4.oy();
      NavigationItem$composable(tmp_12, false, 'Logout', 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148', tmp0_2, $composer_0, 3504, 0);
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
      tmp0_safe_receiver.r1d(NavigationItems$composable$lambda_3($changed));
    }
  }
  function NavigationItem$composable(modifier, selected, title, icon, onClick_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var selected_0 = {_v: selected};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1534724944);
    sourceInformation($composer_0, 'C(NavigationItem$composable)P(1,3,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(selected_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.gz(icon) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.jz(onClick_0) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 2) === 0)) {
        selected_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1534724944, $dirty, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable (SidePanel.kt:164)');
      }
      var tmp = cursor(toModifier$composable(get_NavigationItemStyle(), [], $composer_0, 64).s3l(modifier_0._v), Companion_getInstance_3().m2f());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(onClick_0);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
        var value = NavigationItem$composable$lambda(onClick_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var tmp_2 = onClick(tmp, tmp0);
      var tmp_3 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1278882319, true, NavigationItem$composable$lambda_0(selected_0, icon, $dirty, title));
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
      var tmp_5;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.oy();
      Row$composable(tmp_2, null, tmp_3, null, tmp0_0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.r1d(NavigationItem$composable$lambda_1(modifier_0, selected_0, title, icon, onClick_0, $changed, $default));
    }
  }
  function VectorIcon$composable(modifier, selected, pathData, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1277977388);
    sourceInformation($composer_0, 'C(VectorIcon$composable)P(!1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(selected) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.gz(pathData) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(1277977388, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable (SidePanel.kt:199)');
      }
      var tmp = modifier_0._v;
      ID_getInstance();
      var tmp_0 = height(width(id(tmp, 'svgParent'), get_px(24)), get_px(24));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
        var value = VectorIcon$composable$lambda;
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      var tmp_3 = toAttrs(tmp_0, tmp0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1431358604, true, VectorIcon$composable$lambda_0($dirty, pathData, selected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.oy();
      Svg$composable(tmp_3, tmp0_0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.r1d(VectorIcon$composable$lambda_1(modifier_0, selected, pathData, $changed, $default));
    }
  }
  function CollapsedSidePanel$composable(onMenuClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-35672704);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(onMenuClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-35672704, $dirty, -1, 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable (SidePanel.kt:221)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      Constant_getInstance();
      var tmp_0 = backgroundColor(padding(height(tmp, get_px(100)), VOID, get_px(24)), Theme_Secondary_getInstance().o4i_1);
      var tmp_1 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1184612587, true, CollapsedSidePanel$composable$lambda($dirty, onMenuClick));
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
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.fz(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_1.oy();
      Row$composable(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.r1d(CollapsedSidePanel$composable$lambda_0(onMenuClick, $changed));
    }
  }
  function OverflowSidePanel$composable(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(75619151);
    sourceInformation($composer_0, 'C(OverflowSidePanel$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(75619151, $dirty, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable (SidePanel.kt:248)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp1_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_1 = tmp1_rememberCoroutineScope$composable;
      $composer_1.ny(102870005);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = OverflowSidePanel$composable$lambda_3;
      }
      var composer = $composer_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_1;
      $composer_2.ny(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_2.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_2.oy();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.c1e_1;
      $composer_1.oy();
      var scope = tmp0_0;
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ny(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        $composer_3.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.oy();
      var translateX$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ny(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        $composer_4.fz(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_2 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_4.oy();
      var opacity$delegate = tmp0_2;
      LaunchedEffect$composable(breakpoint, OverflowSidePanel$composable$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null), $composer_0, 0);
      var tmp_5 = height(fillMaxWidth(Companion_getInstance_1()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = backgroundColor(transition(opacity(zIndex(position(tmp_5, 'fixed'), 9), OverflowSidePanel$composable$lambda_1(opacity$delegate)), [CSSTransition_init_$Create$('opacity', get_ms(300))]), Theme_HalfBlack_getInstance().o4i_1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -1839842835, true, OverflowSidePanel$composable$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.ny(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_5.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_5.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_5.fz(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_3 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_5.oy();
      Box$composable(tmp_6, null, null, tmp0_3, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.r1d(OverflowSidePanel$composable$lambda_5(onMenuClosed, $changed));
    }
  }
  function OverflowSidePanel$composable$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.w1();
  }
  function OverflowSidePanel$composable$lambda_0($translateX$delegate, value) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.ut(value);
  }
  function OverflowSidePanel$composable$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.w1();
  }
  function OverflowSidePanel$composable$lambda_2($opacity$delegate, value) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.ut(value);
  }
  function SidePanel$composable$lambda($onMenuClick, $$changed) {
    return function ($composer, $force) {
      SidePanel$composable($onMenuClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SidePanelInternal$composable$lambda($$changed) {
    return function ($composer, $force) {
      SidePanelInternal$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda($context) {
    return function () {
      $context.i3h_1.z3j(AdminHome_getInstance().p4i_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_0($context) {
    return function () {
      $context.i3h_1.z3j(AdminCreate_getInstance().p4i_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_1($context) {
    return function () {
      $context.i3h_1.z3j(AdminMyPosts_getInstance().p4i_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_2($context) {
    return function () {
      logout();
      $context.i3h_1.z3j(AdminLogin_getInstance().p4i_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      NavigationItems$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItem$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function NavigationItem$composable$lambda_0($selected, $icon, $$dirty, $title) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1278882319, $changed, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous> (SidePanel.kt:172)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(10));
        VectorIcon$composable(tmp0_modifier, $selected._v, $icon, $composer_0, 112 & $$dirty | 896 & $$dirty >> 3, 0);
        var tmp_0 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_1 = id(tmp_0, 'navigationText');
        Constant_getInstance();
        var tmp1_modifier = thenIf(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(16)), $selected._v, color(Companion_getInstance_1(), Theme_Primary_getInstance().o4i_1));
        SpanText$composable($title, tmp1_modifier, null, null, $composer_0, 14 & $$dirty >> 6, 12);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function NavigationItem$composable$lambda_1($modifier, $selected, $title, $icon, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItem$composable($modifier._v, $selected._v, $title, $icon, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda($this$toAttrs) {
    $this$toAttrs.h1z('viewBox', '0 0 24 24');
    $this$toAttrs.h1z('fill', 'none');
    return Unit_getInstance();
  }
  function VectorIcon$composable$lambda$lambda($pathData, $selected) {
    return function ($this$Path) {
      $this$Path.b2m('d', $pathData);
      var tmp;
      if ($selected) {
        $this$Path.b2m('stroke', Theme_Primary_getInstance().n4i_1);
        tmp = Unit_getInstance();
      }
      $this$Path.b2m('stroke-width', '2');
      $this$Path.b2m('stroke-linecap', 'round');
      $this$Path.b2m('stroke-linejoin', 'round');
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda_0($$dirty, $pathData, $selected) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.gz($this$Svg) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1431358604, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous> (SidePanel.kt:210)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 6 | 112 & $$dirty;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.gz($pathData) | $composer_1.gz($selected));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = VectorIcon$composable$lambda$lambda($pathData, $selected);
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
        Path$composable($this$Svg, tmp$ret$4, $composer_0, 14 & $dirty);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.yy();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function VectorIcon$composable$lambda_1($modifier, $selected, $pathData, $$changed, $$default) {
    return function ($composer, $force) {
      VectorIcon$composable($modifier._v, $selected, $pathData, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CollapsedSidePanel$composable$lambda$lambda($onMenuClick) {
    return function (it) {
      $onMenuClick();
      return Unit_getInstance();
    };
  }
  function CollapsedSidePanel$composable$lambda($$dirty, $onMenuClick) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1184612587, $changed, -1, 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous> (SidePanel.kt:230)');
        }
        var tmp_0 = cursor(color(margin_0(Companion_getInstance_1(), VOID, get_px(24)), Theme_White_getInstance().o4i_1), Companion_getInstance_3().m2f());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($onMenuClick);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CollapsedSidePanel$composable$lambda$lambda($onMenuClick);
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
        FaBars$composable(onClick(tmp_0, tmp$ret$4), IconSize_XL_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = width(Companion_getInstance_1(), get_px(80));
        Image_getInstance();
        var tmp1_src = '/logo.svg';
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CollapsedSidePanel$composable$lambda_0($onMenuClick, $$changed) {
    return function ($composer, $force) {
      CollapsedSidePanel$composable($onMenuClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OverflowSidePanel$composable$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function OverflowSidePanel$composable$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.z4i_1 = $onMenuClosed;
    this.a4j_1 = $translateX$delegate;
    this.b4j_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$slambda$slambda).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            OverflowSidePanel$composable$lambda_0(this.a4j_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.b4j_1, get_percent(0));
            this.sh_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z4i_1();
            return Unit_getInstance();
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
  protoOf(OverflowSidePanel$composable$slambda$slambda).l1f = function ($this$launch, completion) {
    var i = new OverflowSidePanel$composable$slambda$slambda(this.z4i_1, this.a4j_1, this.b4j_1, completion);
    i.c4j_1 = $this$launch;
    return i;
  };
  function OverflowSidePanel$composable$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowSidePanel$composable$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowSidePanel$composable$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.l4j_1 = $breakpoint;
    this.m4j_1 = $scope;
    this.n4j_1 = $translateX$delegate;
    this.o4j_1 = $opacity$delegate;
    this.p4j_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(OverflowSidePanel$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        if (tmp === 0) {
          this.th_1 = 1;
          OverflowSidePanel$composable$lambda_0(this.n4j_1, get_percent(0));
          OverflowSidePanel$composable$lambda_2(this.o4j_1, get_percent(100));
          if (this.l4j_1.b5(Breakpoint_MD_getInstance()) > 0) {
            launch(this.m4j_1, VOID, VOID, OverflowSidePanel$composable$slambda$slambda_0(this.p4j_1, this.n4j_1, this.o4j_1, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OverflowSidePanel$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new OverflowSidePanel$composable$slambda(this.l4j_1, this.m4j_1, this.n4j_1, this.o4j_1, this.p4j_1, completion);
    i.q4j_1 = $this$LaunchedEffect;
    return i;
  };
  function OverflowSidePanel$composable$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new OverflowSidePanel$composable$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.z4j_1 = $onMenuClosed;
    this.a4k_1 = $translateX$delegate;
    this.b4k_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            OverflowSidePanel$composable$lambda_0(this.a4k_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.b4k_1, get_percent(0));
            this.sh_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z4j_1();
            return Unit_getInstance();
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
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).l1f = function ($this$launch, completion) {
    var i = new OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda(this.z4j_1, this.a4k_1, this.b4k_1, completion);
    i.c4k_1 = $this$launch;
    return i;
  };
  function OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowSidePanel$composable$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function OverflowSidePanel$composable$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1910507033, $changed, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous> (SidePanel.kt:293)');
        }
        var tmp_0 = color(margin_0(Companion_getInstance_1(), VOID, get_px(20)), Theme_White_getInstance().o4i_1);
        FaXmark$composable(cursor(onClick(tmp_0, OverflowSidePanel$composable$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate)), Companion_getInstance_3().m2f()), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = width(Companion_getInstance_1(), get_px(80));
        Image_getInstance();
        var tmp1_src = '/logo.svg';
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1295294884, $changed, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous> (SidePanel.kt:289)');
        }
        var tmp0_$receiver = Companion_getInstance_1();
        var tmp1_bottom = get_px(60);
        var tmp2_top = get_px(24);
        var tmp_0 = margin(tmp0_$receiver, tmp2_top, VOID, tmp1_bottom);
        var tmp_1 = CenterVertically_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1910507033, true, OverflowSidePanel$composable$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
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
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_20(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Row$composable(tmp_0, null, tmp_1, null, tmp$ret$6, $composer_0, 24960, 10);
        NavigationItems$composable($composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1839842835, $changed, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous> (SidePanel.kt:278)');
        }
        var tmp_0 = backgroundColor(scrollBehavior(overflow(transition(translateX(width(fillMaxHeight(padding_0(Companion_getInstance_1(), get_px(24))), $breakpoint.b5(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), OverflowSidePanel$composable$lambda($translateX$delegate)), [CSSTransition_init_$Create$('translate', get_ms(300))]), Companion_getInstance_4().x2i()), Companion_getInstance_5().a2j()), Theme_Secondary_getInstance().o4i_1);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1295294884, true, OverflowSidePanel$composable$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_21(dispatchReceiver);
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
        Column$composable(tmp_0, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
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
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      OverflowSidePanel$composable($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.d4k_1.w1();
  }
  function Category$Companion$_anonymous__i5239t() {
    return $serializer_getInstance();
  }
  var Category_Technology_instance;
  var Category_Programming_instance;
  var Category_Design_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d4k_1 = lazy(tmp_0, Category$Companion$_anonymous__i5239t);
  }
  protoOf(Companion).k38 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).w2y = function (typeParamsSerializers) {
    return this.k38();
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    Category_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.f4k_1 = 0;
    var tmp0_serialDesc = new EnumDescriptor('com.example.blogmultiplatform.models.Category', 3);
    tmp0_serialDesc.y2x('Technology', false);
    tmp0_serialDesc.y2x('Programming', false);
    tmp0_serialDesc.y2x('Design', false);
    this.e4k_1 = tmp0_serialDesc;
  }
  protoOf($serializer).e2o = function () {
    return this.e4k_1;
  };
  protoOf($serializer).n2y = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer).g2o = function (decoder) {
    return values()[decoder.a2r(this.e4k_1)];
  };
  protoOf($serializer).g4k = function (encoder, value) {
    encoder.i2s(this.e4k_1, value.a5_1);
  };
  protoOf($serializer).f2o = function (encoder, value) {
    return this.g4k(encoder, value instanceof Category ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    Category_initEntries();
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function values() {
    return [Category_Technology_getInstance(), Category_Programming_getInstance(), Category_Design_getInstance()];
  }
  var Category_entriesInitialized;
  function Category_initEntries() {
    if (Category_entriesInitialized)
      return Unit_getInstance();
    Category_entriesInitialized = true;
    Category_Technology_instance = new Category('Technology', 0, Theme_Green_getInstance().n4i_1);
    Category_Programming_instance = new Category('Programming', 1, Theme_Yellow_getInstance().n4i_1);
    Category_Design_instance = new Category('Design', 2, Theme_Purple_getInstance().n4i_1);
    Companion_getInstance_12();
  }
  function Category(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.j4k_1 = color;
  }
  function Category_Technology_getInstance() {
    Category_initEntries();
    return Category_Technology_instance;
  }
  function Category_Programming_getInstance() {
    Category_initEntries();
    return Category_Programming_instance;
  }
  function Category_Design_getInstance() {
    Category_initEntries();
    return Category_Design_instance;
  }
  var EditorKey_Bold_instance;
  var EditorKey_Italic_instance;
  var EditorKey_Link_instance;
  var EditorKey_Title_instance;
  var EditorKey_SubTitle_instance;
  var EditorKey_Quote_instance;
  var EditorKey_Code_instance;
  var EditorKey_Image_instance;
  function values_0() {
    return [EditorKey_Bold_getInstance(), EditorKey_Italic_getInstance(), EditorKey_Link_getInstance(), EditorKey_Title_getInstance(), EditorKey_SubTitle_getInstance(), EditorKey_Quote_getInstance(), EditorKey_Code_getInstance(), EditorKey_Image_getInstance()];
  }
  var EditorKey_entriesInitialized;
  function EditorKey_initEntries() {
    if (EditorKey_entriesInitialized)
      return Unit_getInstance();
    EditorKey_entriesInitialized = true;
    Icon_getInstance();
    EditorKey_Bold_instance = new EditorKey('Bold', 0, '/bold.svg');
    Icon_getInstance();
    EditorKey_Italic_instance = new EditorKey('Italic', 1, '/italic.svg');
    Icon_getInstance();
    EditorKey_Link_instance = new EditorKey('Link', 2, '/link.svg');
    Icon_getInstance();
    EditorKey_Title_instance = new EditorKey('Title', 3, '/title.svg');
    Icon_getInstance();
    EditorKey_SubTitle_instance = new EditorKey('SubTitle', 4, '/subtitle.svg');
    Icon_getInstance();
    EditorKey_Quote_instance = new EditorKey('Quote', 5, '/quote.svg');
    Icon_getInstance();
    EditorKey_Code_instance = new EditorKey('Code', 6, '/code.svg');
    Icon_getInstance();
    EditorKey_Image_instance = new EditorKey('Image', 7, '/image.svg');
  }
  function EditorKey(name, ordinal, icon) {
    Enum.call(this, name, ordinal);
    this.m4k_1 = icon;
  }
  function EditorKey_Bold_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Bold_instance;
  }
  function EditorKey_Italic_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Italic_instance;
  }
  function EditorKey_Link_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Link_instance;
  }
  function EditorKey_Title_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Title_instance;
  }
  function EditorKey_SubTitle_getInstance() {
    EditorKey_initEntries();
    return EditorKey_SubTitle_instance;
  }
  function EditorKey_Quote_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Quote_instance;
  }
  function EditorKey_Code_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Code_instance;
  }
  function EditorKey_Image_getInstance() {
    EditorKey_initEntries();
    return EditorKey_Image_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.o4k_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.RandomJoke', this, 2);
    tmp0_serialDesc.y2x('id', false);
    tmp0_serialDesc.y2x('joke', false);
    this.n4k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).e2o = function () {
    return this.n4k_1;
  };
  protoOf($serializer_0).n2y = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).g2o = function (decoder) {
    var tmp0_desc = this.n4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp7_input = decoder.e2r(tmp0_desc);
    if (tmp7_input.t2r()) {
      tmp4_local0 = tmp7_input.j2r(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o2r(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.u2r(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j2r(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o2r(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.f2r(tmp0_desc);
    return RandomJoke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).p4k = function (encoder, value) {
    var tmp0_desc = this.n4k_1;
    var tmp1_output = encoder.e2r(tmp0_desc);
    tmp1_output.n2s(tmp0_desc, 0, value.q4k_1);
    tmp1_output.s2s(tmp0_desc, 1, value.r4k_1);
    tmp1_output.f2r(tmp0_desc);
  };
  protoOf($serializer_0).f2o = function (encoder, value) {
    return this.p4k(encoder, value instanceof RandomJoke ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_0().n4k_1);
    }
    $this.q4k_1 = id;
    $this.r4k_1 = joke;
    $this.s4k_1 = 0;
    return $this;
  }
  function RandomJoke_init_$Create$(seen1, id, joke, serializationConstructorMarker) {
    return RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, objectCreate(protoOf(RandomJoke)));
  }
  function RandomJoke(id, joke) {
    Companion_getInstance_13();
    this.q4k_1 = id;
    this.r4k_1 = joke;
    this.s4k_1 = 0;
  }
  protoOf(RandomJoke).toString = function () {
    return 'RandomJoke(id=' + this.q4k_1 + ', joke=' + this.r4k_1 + ')';
  };
  protoOf(RandomJoke).hashCode = function () {
    var result = this.q4k_1;
    result = imul(result, 31) + getStringHashCode(this.r4k_1) | 0;
    return result;
  };
  protoOf(RandomJoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RandomJoke))
      return false;
    var tmp0_other_with_cast = other instanceof RandomJoke ? other : THROW_CCE();
    if (!(this.q4k_1 === tmp0_other_with_cast.q4k_1))
      return false;
    if (!(this.r4k_1 === tmp0_other_with_cast.r4k_1))
      return false;
    return true;
  };
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_LightGray_instance;
  var Theme_Gray_instance;
  var Theme_DarkGray_instance;
  var Theme_HalfWhite_instance;
  var Theme_White_instance;
  var Theme_HalfBlack_instance;
  var Theme_Green_instance;
  var Theme_Yellow_instance;
  var Theme_Red_instance;
  var Theme_Purple_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A2FF', rgb(0, 162, 255));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#001019', rgb(0, 16, 25));
    Theme_LightGray_instance = new Theme('LightGray', 2, '#FAFAFA', rgb(250, 250, 250));
    Theme_Gray_instance = new Theme('Gray', 3, '#E9E9E9', rgb(233, 233, 233));
    Theme_DarkGray_instance = new Theme('DarkGray', 4, '#646464', rgb(100, 100, 100));
    Theme_HalfWhite_instance = new Theme('HalfWhite', 5, '#FFFFFF', rgba(255, 255, 255, 0.5));
    Theme_White_instance = new Theme('White', 6, '#FFFFFF', rgb(255, 255, 255));
    Theme_HalfBlack_instance = new Theme('HalfBlack', 7, '#000000', rgba(0, 0, 0, 0.5));
    Theme_Green_instance = new Theme('Green', 8, '#00FF94', rgb(0, 255, 148));
    Theme_Yellow_instance = new Theme('Yellow', 9, '#FFEC45', rgb(255, 236, 69));
    Theme_Red_instance = new Theme('Red', 10, '#FF6359', rgb(255, 99, 89));
    Theme_Purple_instance = new Theme('Purple', 11, '#8B6DFF', rgb(139, 109, 255));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.n4i_1 = hex;
    this.o4i_1 = rgb;
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
  function Theme_Gray_getInstance() {
    Theme_initEntries();
    return Theme_Gray_instance;
  }
  function Theme_DarkGray_getInstance() {
    Theme_initEntries();
    return Theme_DarkGray_instance;
  }
  function Theme_HalfWhite_getInstance() {
    Theme_initEntries();
    return Theme_HalfWhite_instance;
  }
  function Theme_White_getInstance() {
    Theme_initEntries();
    return Theme_White_instance;
  }
  function Theme_HalfBlack_getInstance() {
    Theme_initEntries();
    return Theme_HalfBlack_instance;
  }
  function Theme_Green_getInstance() {
    Theme_initEntries();
    return Theme_Green_instance;
  }
  function Theme_Yellow_getInstance() {
    Theme_initEntries();
    return Theme_Yellow_instance;
  }
  function Theme_Purple_getInstance() {
    Theme_initEntries();
    return Theme_Purple_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    this.u4k_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.User', this, 3);
    tmp0_serialDesc.y2x('_id', true);
    tmp0_serialDesc.y2x('username', true);
    tmp0_serialDesc.y2x('password', true);
    this.t4k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).e2o = function () {
    return this.t4k_1;
  };
  protoOf($serializer_1).n2y = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_1).g2o = function (decoder) {
    var tmp0_desc = this.t4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.e2r(tmp0_desc);
    if (tmp8_input.t2r()) {
      tmp4_local0 = tmp8_input.o2r(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.o2r(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.o2r(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.u2r(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.o2r(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.o2r(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.o2r(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.f2r(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).v4k = function (encoder, value) {
    var tmp0_desc = this.t4k_1;
    var tmp1_output = encoder.e2r(tmp0_desc);
    if (tmp1_output.y2s(tmp0_desc, 0) ? true : !(value.w4k_1 === '')) {
      tmp1_output.s2s(tmp0_desc, 0, value.w4k_1);
    }
    if (tmp1_output.y2s(tmp0_desc, 1) ? true : !(value.x4k_1 === '')) {
      tmp1_output.s2s(tmp0_desc, 1, value.x4k_1);
    }
    if (tmp1_output.y2s(tmp0_desc, 2) ? true : !(value.y4k_1 === '')) {
      tmp1_output.s2s(tmp0_desc, 2, value.y4k_1);
    }
    tmp1_output.f2r(tmp0_desc);
  };
  protoOf($serializer_1).f2o = function (encoder, value) {
    return this.v4k(encoder, value instanceof User ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_1().t4k_1);
    }
    if (0 === (seen1 & 1))
      $this.w4k_1 = '';
    else
      $this.w4k_1 = id;
    if (0 === (seen1 & 2))
      $this.x4k_1 = '';
    else
      $this.x4k_1 = username;
    if (0 === (seen1 & 4))
      $this.y4k_1 = '';
    else
      $this.y4k_1 = password;
    $this.z4k_1 = 0;
    return $this;
  }
  function User_init_$Create$(seen1, id, username, password, serializationConstructorMarker) {
    return User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(id, username, password) {
    Companion_getInstance_14();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this.w4k_1 = id;
    this.x4k_1 = username;
    this.y4k_1 = password;
    this.z4k_1 = 0;
  }
  protoOf(User).toString = function () {
    return 'User(id=' + this.w4k_1 + ', username=' + this.x4k_1 + ', password=' + this.y4k_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.w4k_1);
    result = imul(result, 31) + getStringHashCode(this.x4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y4k_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.w4k_1 === tmp0_other_with_cast.w4k_1))
      return false;
    if (!(this.x4k_1 === tmp0_other_with_cast.x4k_1))
      return false;
    if (!(this.y4k_1 === tmp0_other_with_cast.y4k_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    this.b4l_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.y2x('_id', true);
    tmp0_serialDesc.y2x('username', true);
    this.a4l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).e2o = function () {
    return this.a4l_1;
  };
  protoOf($serializer_2).n2y = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_2).g2o = function (decoder) {
    var tmp0_desc = this.a4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.e2r(tmp0_desc);
    if (tmp7_input.t2r()) {
      tmp4_local0 = tmp7_input.o2r(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o2r(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.u2r(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o2r(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o2r(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.f2r(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).c4l = function (encoder, value) {
    var tmp0_desc = this.a4l_1;
    var tmp1_output = encoder.e2r(tmp0_desc);
    if (tmp1_output.y2s(tmp0_desc, 0) ? true : !(value.d4l_1 === '')) {
      tmp1_output.s2s(tmp0_desc, 0, value.d4l_1);
    }
    if (tmp1_output.y2s(tmp0_desc, 1) ? true : !(value.e4l_1 === '')) {
      tmp1_output.s2s(tmp0_desc, 1, value.e4l_1);
    }
    tmp1_output.f2r(tmp0_desc);
  };
  protoOf($serializer_2).f2o = function (encoder, value) {
    return this.c4l(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_2().a4l_1);
    }
    if (0 === (seen1 & 1))
      $this.d4l_1 = '';
    else
      $this.d4l_1 = id;
    if (0 === (seen1 & 2))
      $this.e4l_1 = '';
    else
      $this.e4l_1 = username;
    $this.f4l_1 = 0;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen1, id, username, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function UserWithoutPassword(id, username) {
    Companion_getInstance_15();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    this.d4l_1 = id;
    this.e4l_1 = username;
    this.f4l_1 = 0;
  }
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.d4l_1 + ', username=' + this.e4l_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.d4l_1);
    result = imul(result, 31) + getStringHashCode(this.e4l_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.d4l_1 === tmp0_other_with_cast.d4l_1))
      return false;
    if (!(this.e4l_1 === tmp0_other_with_cast.e4l_1))
      return false;
    return true;
  };
  function AdminHome() {
    AdminHome_instance = this;
    Screen.call(this, '/admin/');
    this.i4l_1 = 0;
  }
  protoOf(AdminHome).toString = function () {
    return 'AdminHome';
  };
  protoOf(AdminHome).hashCode = function () {
    return -2106392431;
  };
  protoOf(AdminHome).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminHome))
      return false;
    other instanceof AdminHome || THROW_CCE();
    return true;
  };
  var AdminHome_instance;
  function AdminHome_getInstance() {
    if (AdminHome_instance == null)
      new AdminHome();
    return AdminHome_instance;
  }
  function AdminLogin() {
    AdminLogin_instance = this;
    Screen.call(this, '/admin/login');
    this.l4l_1 = 0;
  }
  protoOf(AdminLogin).toString = function () {
    return 'AdminLogin';
  };
  protoOf(AdminLogin).hashCode = function () {
    return -869967369;
  };
  protoOf(AdminLogin).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminLogin))
      return false;
    other instanceof AdminLogin || THROW_CCE();
    return true;
  };
  var AdminLogin_instance;
  function AdminLogin_getInstance() {
    if (AdminLogin_instance == null)
      new AdminLogin();
    return AdminLogin_instance;
  }
  function AdminCreate() {
    AdminCreate_instance = this;
    Screen.call(this, '/admin/create');
    this.o4l_1 = 0;
  }
  protoOf(AdminCreate).toString = function () {
    return 'AdminCreate';
  };
  protoOf(AdminCreate).hashCode = function () {
    return -1454143442;
  };
  protoOf(AdminCreate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminCreate))
      return false;
    other instanceof AdminCreate || THROW_CCE();
    return true;
  };
  var AdminCreate_instance;
  function AdminCreate_getInstance() {
    if (AdminCreate_instance == null)
      new AdminCreate();
    return AdminCreate_instance;
  }
  function AdminMyPosts() {
    AdminMyPosts_instance = this;
    Screen.call(this, '/admin/my_posts');
    this.r4l_1 = 0;
  }
  protoOf(AdminMyPosts).toString = function () {
    return 'AdminMyPosts';
  };
  protoOf(AdminMyPosts).hashCode = function () {
    return -1662244715;
  };
  protoOf(AdminMyPosts).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminMyPosts))
      return false;
    other instanceof AdminMyPosts || THROW_CCE();
    return true;
  };
  var AdminMyPosts_instance;
  function AdminMyPosts_getInstance() {
    if (AdminMyPosts_instance == null)
      new AdminMyPosts();
    return AdminMyPosts_instance;
  }
  function Screen(route) {
    this.p4i_1 = route;
    this.q4i_1 = 0;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(524001773);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(524001773, $changed, -1, 'com.example.blogmultiplatform.pages.HomePage$composable (Index.kt:7)');
      }
      println('Hello World!');
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
      tmp0_safe_receiver.r1d(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreatePageUiEvent(id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility) {
    id = id === VOID ? '' : id;
    title = title === VOID ? '' : title;
    subTitle = subTitle === VOID ? '' : subTitle;
    thumbnail = thumbnail === VOID ? '' : thumbnail;
    thumbnailInputDisabled = thumbnailInputDisabled === VOID ? true : thumbnailInputDisabled;
    category = category === VOID ? Category_Programming_getInstance() : category;
    popular = popular === VOID ? false : popular;
    main = main === VOID ? false : main;
    sponsored = sponsored === VOID ? false : sponsored;
    editorVisibility = editorVisibility === VOID ? true : editorVisibility;
    this.s4l_1 = id;
    this.t4l_1 = title;
    this.u4l_1 = subTitle;
    this.v4l_1 = thumbnail;
    this.w4l_1 = thumbnailInputDisabled;
    this.x4l_1 = category;
    this.y4l_1 = popular;
    this.z4l_1 = main;
    this.a4m_1 = sponsored;
    this.b4m_1 = editorVisibility;
    this.c4m_1 = 8;
  }
  protoOf(CreatePageUiEvent).d4m = function (id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility) {
    return new CreatePageUiEvent(id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility);
  };
  protoOf(CreatePageUiEvent).e4m = function (id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, $super) {
    id = id === VOID ? this.s4l_1 : id;
    title = title === VOID ? this.t4l_1 : title;
    subTitle = subTitle === VOID ? this.u4l_1 : subTitle;
    thumbnail = thumbnail === VOID ? this.v4l_1 : thumbnail;
    thumbnailInputDisabled = thumbnailInputDisabled === VOID ? this.w4l_1 : thumbnailInputDisabled;
    category = category === VOID ? this.x4l_1 : category;
    popular = popular === VOID ? this.y4l_1 : popular;
    main = main === VOID ? this.z4l_1 : main;
    sponsored = sponsored === VOID ? this.a4m_1 : sponsored;
    editorVisibility = editorVisibility === VOID ? this.b4m_1 : editorVisibility;
    return $super === VOID ? this.d4m(id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility) : $super.d4m.call(this, id, title, subTitle, thumbnail, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility);
  };
  protoOf(CreatePageUiEvent).toString = function () {
    return 'CreatePageUiEvent(id=' + this.s4l_1 + ', title=' + this.t4l_1 + ', subTitle=' + this.u4l_1 + ', thumbnail=' + this.v4l_1 + ', thumbnailInputDisabled=' + this.w4l_1 + ', category=' + this.x4l_1 + ', popular=' + this.y4l_1 + ', main=' + this.z4l_1 + ', sponsored=' + this.a4m_1 + ', editorVisibility=' + this.b4m_1 + ')';
  };
  protoOf(CreatePageUiEvent).hashCode = function () {
    var result = getStringHashCode(this.s4l_1);
    result = imul(result, 31) + getStringHashCode(this.t4l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u4l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v4l_1) | 0;
    result = imul(result, 31) + (this.w4l_1 | 0) | 0;
    result = imul(result, 31) + this.x4l_1.hashCode() | 0;
    result = imul(result, 31) + (this.y4l_1 | 0) | 0;
    result = imul(result, 31) + (this.z4l_1 | 0) | 0;
    result = imul(result, 31) + (this.a4m_1 | 0) | 0;
    result = imul(result, 31) + (this.b4m_1 | 0) | 0;
    return result;
  };
  protoOf(CreatePageUiEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreatePageUiEvent))
      return false;
    var tmp0_other_with_cast = other instanceof CreatePageUiEvent ? other : THROW_CCE();
    if (!(this.s4l_1 === tmp0_other_with_cast.s4l_1))
      return false;
    if (!(this.t4l_1 === tmp0_other_with_cast.t4l_1))
      return false;
    if (!(this.u4l_1 === tmp0_other_with_cast.u4l_1))
      return false;
    if (!(this.v4l_1 === tmp0_other_with_cast.v4l_1))
      return false;
    if (!(this.w4l_1 === tmp0_other_with_cast.w4l_1))
      return false;
    if (!this.x4l_1.equals(tmp0_other_with_cast.x4l_1))
      return false;
    if (!(this.y4l_1 === tmp0_other_with_cast.y4l_1))
      return false;
    if (!(this.z4l_1 === tmp0_other_with_cast.z4l_1))
      return false;
    if (!(this.a4m_1 === tmp0_other_with_cast.a4m_1))
      return false;
    if (!(this.b4m_1 === tmp0_other_with_cast.b4m_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1358622140, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-1.<anonymous> (Create.kt:96)');
      }
      CreateScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1486966214, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-2.<anonymous> (Create.kt:404)');
      }
      var tmp0_modifier = Companion_getInstance_1();
      SpanText$composable('Upload', tmp0_modifier, null, null, $composer_0, 54, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-907956818, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-3.<anonymous> (Create.kt:431)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject = values_0();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-3.<anonymous>.<anonymous>' call
        EditorKeyView$composable(element, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(50393527, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-4.<anonymous> (Create.kt:455)');
      }
      var tmp = Companion_getInstance_1();
      Constant_getInstance();
      var tmp0_modifier = fontWeight(fontSize(fontFamily(tmp, ['Roboto']), get_px(14)), Companion_getInstance_6().q2f());
      SpanText$composable('Preview', tmp0_modifier, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-2081218814, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-5.<anonymous> (Create.kt:535)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_6$lambda_igln85($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2044258482, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-6.<anonymous> (Create.kt:557)');
      }
      SpanText$composable('Create', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CreateKt() {
    ComposableSingletons$CreateKt_instance = this;
    var tmp = this;
    tmp.f4m_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1358622140, false, ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw));
    var tmp_0 = this;
    tmp_0.g4m_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1486966214, false, ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb));
    var tmp_1 = this;
    tmp_1.h4m_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-907956818, false, ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm));
    var tmp_2 = this;
    tmp_2.i4m_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(50393527, false, ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf));
    var tmp_3 = this;
    tmp_3.j4m_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-2081218814, false, ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos));
    var tmp_4 = this;
    tmp_4.k4m_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(2044258482, false, ComposableSingletons$CreateKt$lambda_6$lambda_igln85));
  }
  var ComposableSingletons$CreateKt_instance;
  function ComposableSingletons$CreateKt_getInstance() {
    if (ComposableSingletons$CreateKt_instance == null)
      new ComposableSingletons$CreateKt();
    return ComposableSingletons$CreateKt_instance;
  }
  function CreatePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(805766537);
    sourceInformation($composer_0, 'C(CreatePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(805766537, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreatePage$composable (Create.kt:94)');
      }
      isUserLoggedIn$composable(ComposableSingletons$CreateKt_getInstance().f4m_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(CreatePage$composable$lambda($changed));
    }
  }
  function CreateScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1173689254);
    sourceInformation($composer_0, 'C(CreateScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1173689254, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable (Create.kt:101)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value = mutableStateOf(new CreatePageUiEvent());
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var uiEvent$delegate = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1070748091, true, CreateScreen$composable$lambda_1(breakpoint, uiEvent$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_2.oy();
      AdminPageLayout$composable(tmp0_0, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(CreateScreen$composable$lambda_2($changed));
    }
  }
  function CategoryDropDown$composable(selectedCategory, onCategorySelected, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(84150311);
    sourceInformation($composer_0, 'C(CategoryDropDown$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(selectedCategory) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(onCategorySelected) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(84150311, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable (Create.kt:288)');
      }
      var tmp = cursor(backgroundColor(fillMaxWidth(height(classNames(margin_1(Companion_getInstance_1(), get_px(12)), ['dropdown']), get_px(54))), Theme_LightGray_getInstance().o4i_1), Companion_getInstance_3().m2f());
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>' call
        var value = CategoryDropDown$composable$lambda;
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var tmp_2 = attrsModifier(tmp, tmp0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 589912744, true, CategoryDropDown$composable$lambda_0(selectedCategory, $dirty, onCategorySelected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.oy();
      Box$composable(tmp_2, null, null, tmp0_0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.r1d(CategoryDropDown$composable$lambda_1(selectedCategory, onCategorySelected, $changed));
    }
  }
  function ThumbnailUploader$composable(thumbnail, thumbnailInputDisabled, onThumbnailSelect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1033023733);
    sourceInformation($composer_0, 'C(ThumbnailUploader$composable)P(1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(thumbnail) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(thumbnailInputDisabled) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onThumbnailSelect) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1033023733, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable (Create.kt:352)');
      }
      var tmp = height(margin(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(20)), get_px(54));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1039250688, true, ThumbnailUploader$composable$lambda(thumbnailInputDisabled, $dirty, thumbnail, onThumbnailSelect));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Row$composable(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.r1d(ThumbnailUploader$composable$lambda_0(thumbnail, thumbnailInputDisabled, onThumbnailSelect, $changed));
    }
  }
  function EditorControls$composable(breakpoint, editorVisibility, onEditorVisibilityChanged, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1573916397);
    sourceInformation($composer_0, 'C(EditorControls$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(editorVisibility) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onEditorVisibilityChanged) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1573916397, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable (Create.kt:417)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1865990914, true, EditorControls$composable$lambda(breakpoint, editorVisibility, $dirty, onEditorVisibilityChanged));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Box$composable(tmp, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.r1d(EditorControls$composable$lambda_0(breakpoint, editorVisibility, onEditorVisibilityChanged, $changed));
    }
  }
  function EditorKeyView$composable(key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(2048189123);
    sourceInformation($composer_0, 'C(EditorKeyView$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(key) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2048189123, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable (Create.kt:469)');
      }
      var tmp = cursor(borderRadius(padding(fillMaxHeight(toModifier$composable(get_EditorKeyStyle(), [], $composer_0, 64)), VOID, get_px(12)), get_px(4)), Companion_getInstance_3().m2f());
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>' call
        var value = EditorKeyView$composable$lambda;
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var tmp_2 = onClick(tmp, tmp0);
      var tmp_3 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -483804699, true, EditorKeyView$composable$lambda_0(key));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.oy();
      Box$composable(tmp_2, tmp_3, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(EditorKeyView$composable$lambda_1(key, $changed));
    }
  }
  function Editor$composable(editorVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1599106079);
    sourceInformation($composer_0, 'C(Editor$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hz(editorVisibility) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1599106079, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable (Create.kt:489)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -194323487, true, Editor$composable$lambda(editorVisibility));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_47(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Box$composable(tmp, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.r1d(Editor$composable$lambda_0(editorVisibility, $changed));
    }
  }
  function CreateButton$composable(onClick_0, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(152710867);
    sourceInformation($composer_0, 'C(CreateButton$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(onClick_0) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(152710867, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.CreateButton$composable (Create.kt:540)');
      }
      var tmp = Companion_getInstance_1();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.gz(onClick_0);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateButton$composable.<anonymous>' call
        var value = CreateButton$composable$lambda(onClick_0);
        $composer_1.fz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.oy();
      var tmp_2 = noBorder(color(backgroundColor(margin(height(fillMaxWidth(onClick(tmp, tmp0)), get_px(54)), get_px(24)), Theme_Primary_getInstance().o4i_1), Colors_getInstance().h3n()));
      Constant_getInstance();
      Button$composable(toAttrs(borderRadius(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(16)), get_px(4))), ComposableSingletons$CreateKt_getInstance().k4m_1, $composer_0, 48, 0);
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
      tmp0_safe_receiver.r1d(CreateButton$composable$lambda_0(onClick_0, $changed));
    }
  }
  function CreateScreen$composable$lambda($uiEvent$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiEvent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $uiEvent$delegate.w1();
  }
  function CreateScreen$composable$lambda_0($uiEvent$delegate, value) {
    getLocalDelegateReference('uiEvent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $uiEvent$delegate.ut(value);
  }
  function CreatePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      CreatePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($uiEvent$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($uiEvent$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-569429006, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:131)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiEvent$delegate).y4l_1;
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($uiEvent$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($uiEvent$delegate);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp_3 = fontSize(Companion_getInstance_1(), get_px(14));
        Constant_getInstance();
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().o4i_1);
        SpanText$composable('Popular', tmp3_modifier, null, null, $composer_0, 6, 12);
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
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($uiEvent$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($uiEvent$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-146937893, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:156)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiEvent$delegate).z4l_1;
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($uiEvent$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($uiEvent$delegate);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp_3 = fontSize(Companion_getInstance_1(), get_px(14));
        Constant_getInstance();
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().o4i_1);
        SpanText$composable('Main', tmp3_modifier, null, null, $composer_0, 6, 12);
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
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($uiEvent$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($uiEvent$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1054203450, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:176)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiEvent$delegate).a4m_1;
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($uiEvent$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($uiEvent$delegate);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp_3 = fontSize(Companion_getInstance_1(), get_px(14));
        Constant_getInstance();
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().o4i_1);
        SpanText$composable('sponsored', tmp3_modifier, null, null, $composer_0, 6, 12);
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
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $uiEvent$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(833826645, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:123)');
        }
        var tmp_0 = margin_0(Companion_getInstance_1(), VOID, $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(0) : get_px(24), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0));
        var tmp_1 = CenterVertically_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -569429006, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($uiEvent$delegate));
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
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Row$composable(tmp_0, null, tmp_1, null, tmp$ret$6, $composer_0, 24960, 10);
        var tmp_5 = margin_0(Companion_getInstance_1(), VOID, $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(0) : get_px(24), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0));
        var tmp_6 = CenterVertically_getInstance();
        var tmp$ret$13;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$12;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -146937893, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($uiEvent$delegate));
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz(dispatchReceiver_0);
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = ComposableLambda$invoke$ref_30(dispatchReceiver_0);
          var value_0 = tmp$ret$7;
          tmp0_cache_0.fz(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_8;
        tmp$ret$9 = tmp$ret$8;
        var tmp_9 = tmp$ret$9;
        tmp$ret$10 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.oy();
        tmp$ret$11 = tmp0_0;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        Row$composable(tmp_5, null, tmp_6, null, tmp$ret$13, $composer_0, 24960, 10);
        var tmp_10 = CenterVertically_getInstance();
        var tmp$ret$20;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$19;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_11, 1054203450, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($uiEvent$delegate));
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $composer_0;
        var $composer_3 = tmp0_remember$composable_1;
        $composer_3.ny(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = $composer_3.gz(dispatchReceiver_1);
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
          var tmp$ret$14;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$14 = ComposableLambda$invoke$ref_31(dispatchReceiver_1);
          var value_1 = tmp$ret$14;
          tmp0_cache_1.fz(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = tmp0_let_1;
        }
        tmp$ret$15 = tmp_12;
        tmp$ret$16 = tmp$ret$15;
        var tmp_13 = tmp$ret$16;
        tmp$ret$17 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_3.oy();
        tmp$ret$18 = tmp0_1;
        tmp$ret$19 = tmp$ret$18;
        tmp$ret$20 = tmp$ret$19;
        Row$composable(null, null, tmp_10, null, tmp$ret$20, $composer_0, 24960, 11);
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_getInstance();
        }
        tmp = tmp_14;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Title');
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_1($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'SubTitle');
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_2($uiEvent$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($uiEvent$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, !it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_3($uiEvent$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520315333, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:242)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = !CreateScreen$composable$lambda($uiEvent$delegate).w4l_1;
        var tmp2_size = MD_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($uiEvent$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($uiEvent$delegate);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp_3 = fontSize(Companion_getInstance_1(), get_px(14));
        Constant_getInstance();
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().o4i_1);
        SpanText$composable('Paste an Image URL instead', tmp3_modifier, null, null, $composer_0, 6, 12);
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
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_4($uiEvent$delegate) {
    return function (filename, file) {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, filename));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_5($uiEvent$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiEvent$delegate, CreateScreen$composable$lambda($uiEvent$delegate).e4m(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, !CreateScreen$composable$lambda($uiEvent$delegate).b4m_1));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_6() {
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda($uiEvent$delegate, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-231614434, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:120)');
        }
        var tmp_0 = numColumns(1, 3);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 833826645, true, CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $uiEvent$delegate));
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_32(dispatchReceiver);
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
        SimpleGrid$composable(tmp_0, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
        var tmp_4 = Text_getInstance();
        var tmp_5 = noBorder(borderRadius(backgroundColor(padding(margin_1(height(fillMaxWidth(Companion_getInstance_1()), get_px(54)), get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().o4i_1), get_px(4)));
        Constant_getInstance();
        var tmp_6 = fontSize(fontFamily(tmp_5, ['Roboto']), get_px(16));
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.ny(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = CreateScreen$composable$lambda$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$7;
          tmp0_cache_0.fz(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_7;
        tmp$ret$9 = tmp$ret$8;
        var tmp_8 = tmp$ret$9;
        tmp$ret$10 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.oy();
        tmp$ret$11 = tmp0_0;
        Input$composable(tmp_4, toAttrs(tmp_6, tmp$ret$11), $composer_0, 6);
        var tmp_9 = Text_getInstance();
        var tmp_10 = noBorder(borderRadius(backgroundColor(padding(margin(height(fillMaxWidth(Companion_getInstance_1()), get_px(54)), VOID, VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().o4i_1), get_px(4)));
        Constant_getInstance();
        var tmp_11 = fontSize(fontFamily(tmp_10, ['Roboto']), get_px(16));
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_3 = tmp1_remember$composable;
        $composer_3.ny(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
          var tmp$ret$12;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = CreateScreen$composable$lambda$lambda$lambda$lambda_1;
          var value_1 = tmp$ret$12;
          tmp0_cache_1.fz(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_12;
        tmp$ret$14 = tmp$ret$13;
        var tmp_13 = tmp$ret$14;
        tmp$ret$15 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.oy();
        tmp$ret$16 = tmp0_1;
        Input$composable(tmp_9, toAttrs(tmp_11, tmp$ret$16), $composer_0, 6);
        var tmp_14 = CreateScreen$composable$lambda($uiEvent$delegate).x4l_1;
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_4 = tmp2_remember$composable;
        $composer_4.ny(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_0 = $composer_4.gz($uiEvent$delegate);
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_15;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
          var tmp$ret$17;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = CreateScreen$composable$lambda$lambda$lambda$lambda_2($uiEvent$delegate);
          var value_2 = tmp$ret$17;
          tmp0_cache_2.fz(value_2);
          tmp_15 = value_2;
        } else {
          tmp_15 = tmp0_let_2;
        }
        tmp$ret$18 = tmp_15;
        tmp$ret$19 = tmp$ret$18;
        var tmp_16 = tmp$ret$19;
        tmp$ret$20 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
        var tmp0_2 = tmp$ret$20;
        $composer_4.oy();
        tmp$ret$21 = tmp0_2;
        CategoryDropDown$composable(tmp_14, tmp$ret$21, $composer_0, 0);
        var tmp0_modifier = margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(12));
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Start_getInstance();
        var tmp$ret$28;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_17 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_17, -1520315333, true, CreateScreen$composable$lambda$lambda$lambda$lambda_3($uiEvent$delegate));
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $composer_0;
        var $composer_5 = tmp0_remember$composable_1;
        $composer_5.ny(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$25;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_3 = $composer_5;
        var tmp1_cache_1 = $composer_5.gz(dispatchReceiver_0);
        var tmp$ret$24;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp0_cache_3.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_18;
        if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().hy_1) {
          var tmp$ret$22;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = ComposableLambda$invoke$ref_33(dispatchReceiver_0);
          var value_3 = tmp$ret$22;
          tmp0_cache_3.fz(value_3);
          tmp_18 = value_3;
        } else {
          tmp_18 = tmp0_let_3;
        }
        tmp$ret$23 = tmp_18;
        tmp$ret$24 = tmp$ret$23;
        var tmp_19 = tmp$ret$24;
        tmp$ret$25 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
        var tmp0_3 = tmp$ret$25;
        $composer_5.oy();
        tmp$ret$26 = tmp0_3;
        tmp$ret$27 = tmp$ret$26;
        tmp$ret$28 = tmp$ret$27;
        Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp$ret$28, $composer_0, 25008, 8);
        var tmp_20 = CreateScreen$composable$lambda($uiEvent$delegate).v4l_1;
        var tmp_21 = CreateScreen$composable$lambda($uiEvent$delegate).w4l_1;
        var tmp$ret$33;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_6 = tmp3_remember$composable;
        $composer_6.ny(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$32;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_4 = $composer_6;
        var tmp1_cache_2 = $composer_6.gz($uiEvent$delegate);
        var tmp$ret$31;
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = tmp0_cache_4.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$30;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_22;
        if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_0().hy_1) {
          var tmp$ret$29;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$29 = CreateScreen$composable$lambda$lambda$lambda$lambda_4($uiEvent$delegate);
          var value_4 = tmp$ret$29;
          tmp0_cache_4.fz(value_4);
          tmp_22 = value_4;
        } else {
          tmp_22 = tmp0_let_4;
        }
        tmp$ret$30 = tmp_22;
        tmp$ret$31 = tmp$ret$30;
        var tmp_23 = tmp$ret$31;
        tmp$ret$32 = (tmp_23 == null ? true : isObject(tmp_23)) ? tmp_23 : THROW_CCE();
        var tmp0_4 = tmp$ret$32;
        $composer_6.oy();
        tmp$ret$33 = tmp0_4;
        ThumbnailUploader$composable(tmp_20, tmp_21, tmp$ret$33, $composer_0, 0);
        var tmp_24 = CreateScreen$composable$lambda($uiEvent$delegate).b4m_1;
        var tmp$ret$38;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_7 = tmp4_remember$composable;
        $composer_7.ny(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$37;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_5 = $composer_7;
        var tmp1_cache_3 = $composer_7.gz($uiEvent$delegate);
        var tmp$ret$36;
        // Inline function 'kotlin.let' call
        var tmp0_let_5 = tmp0_cache_5.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$35;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_25;
        if (tmp1_cache_3 ? true : tmp0_let_5 === Companion_getInstance_0().hy_1) {
          var tmp$ret$34;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$34 = CreateScreen$composable$lambda$lambda$lambda$lambda_5($uiEvent$delegate);
          var value_5 = tmp$ret$34;
          tmp0_cache_5.fz(value_5);
          tmp_25 = value_5;
        } else {
          tmp_25 = tmp0_let_5;
        }
        tmp$ret$35 = tmp_25;
        tmp$ret$36 = tmp$ret$35;
        var tmp_26 = tmp$ret$36;
        tmp$ret$37 = (tmp_26 == null ? true : isObject(tmp_26)) ? tmp_26 : THROW_CCE();
        var tmp0_5 = tmp$ret$37;
        $composer_7.oy();
        tmp$ret$38 = tmp0_5;
        EditorControls$composable($breakpoint, tmp_24, tmp$ret$38, $composer_0, 0);
        Editor$composable(CreateScreen$composable$lambda($uiEvent$delegate).b4m_1, $composer_0, 0);
        var tmp$ret$43;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_8 = tmp5_remember$composable;
        $composer_8.ny(547886695);
        sourceInformation($composer_8, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$42;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_6 = $composer_8;
        var tmp$ret$41;
        // Inline function 'kotlin.let' call
        var tmp0_let_6 = tmp0_cache_6.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$40;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_27;
        if (false ? true : tmp0_let_6 === Companion_getInstance_0().hy_1) {
          var tmp$ret$39;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$39 = CreateScreen$composable$lambda$lambda$lambda$lambda_6;
          var value_6 = tmp$ret$39;
          tmp0_cache_6.fz(value_6);
          tmp_27 = value_6;
        } else {
          tmp_27 = tmp0_let_6;
        }
        tmp$ret$40 = tmp_27;
        tmp$ret$41 = tmp$ret$40;
        var tmp_28 = tmp$ret$41;
        tmp$ret$42 = (tmp_28 == null ? true : isObject(tmp_28)) ? tmp_28 : THROW_CCE();
        var tmp0_6 = tmp$ret$42;
        $composer_8.oy();
        tmp$ret$43 = tmp0_6;
        CreateButton$composable(tmp$ret$43, $composer_0, 0);
        var tmp_29;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_29 = Unit_getInstance();
        }
        tmp = tmp_29;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda($uiEvent$delegate, $breakpoint) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-541971211, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous> (Create.kt:113)');
        }
        var tmp_0 = maxWidth(fillMaxSize(Companion_getInstance_1()), get_px(700));
        var tmp_1 = Top_getInstance();
        var tmp_2 = CenterHorizontally_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -231614434, true, CreateScreen$composable$lambda$lambda$lambda($uiEvent$delegate, $breakpoint));
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
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
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
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda_1($breakpoint, $uiEvent$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1070748091, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous> (Create.kt:106)');
        }
        var tmp_0 = margin_1(fillMaxSize(Companion_getInstance_1()), get_px(50));
        var tmp_1;
        if ($breakpoint.b5(Breakpoint_MD_getInstance()) > 0) {
          Constant_getInstance();
          tmp_1 = get_px(250);
        } else {
          tmp_1 = get_px(0);
        }
        var tmp_2 = padding_1(tmp_0, VOID, VOID, VOID, tmp_1);
        var tmp_3 = TopCenter_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -541971211, true, CreateScreen$composable$lambda$lambda($uiEvent$delegate, $breakpoint));
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
        var tmp_5;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$1 = tmp_5;
        tmp$ret$2 = tmp$ret$1;
        var tmp_6 = tmp$ret$2;
        tmp$ret$3 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Box$composable(tmp_2, tmp_3, null, tmp$ret$6, $composer_0, 3120, 4);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function CreateScreen$composable$lambda_2($$changed) {
    return function ($composer, $force) {
      CreateScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CategoryDropDown$composable$lambda($this$attrsModifier) {
    $this$attrsModifier.h1z('data-bs-toggle', 'dropdown');
    return Unit_getInstance();
  }
  function CategoryDropDown$composable$lambda$lambda($selectedCategory) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1842094037, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:308)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance_1());
        Constant_getInstance();
        var tmp0_modifier = fontSize(fontFamily(tmp_0, ['Roboto']), get_px(16));
        var tmp1_text = $selectedCategory.z4_1;
        SpanText$composable(tmp1_text, tmp0_modifier, null, null, $composer_0, 0, 12);
        var tmp_1 = classNames(Companion_getInstance_1(), ['dropdown-toggle']);
        Box$composable(tmp_1, null, null, null, $composer_0, 0, 14);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda$lambda$lambda$lambda($onCategorySelected, $element) {
    return function (it) {
      $onCategorySelected($element);
      return Unit_getInstance();
    };
  }
  function CategoryDropDown$composable$lambda$lambda$lambda$lambda_0($element) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(433817369, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:338)');
        }
        Text$composable($element.z4_1, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda$lambda$lambda($$dirty, $onCategorySelected, $element) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(684747847, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:329)');
        }
        var tmp_0 = color(classNames(Companion_getInstance_1(), ['dropdown-item']), Colors_getInstance().v3m());
        Constant_getInstance();
        var tmp_1 = fontSize(fontFamily(tmp_0, ['Roboto']), get_px(16));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.gz($onCategorySelected) | $composer_1.gz($element));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CategoryDropDown$composable$lambda$lambda$lambda$lambda($onCategorySelected, $element);
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
        var tmp_4 = toAttrs(onClick(tmp_1, tmp$ret$4));
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 433817369, true, CategoryDropDown$composable$lambda$lambda$lambda$lambda_0($element));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_38(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_6;
        tmp$ret$7 = tmp$ret$6;
        var tmp_7 = tmp$ret$7;
        tmp$ret$8 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        A$composable(null, tmp_4, tmp$ret$11, $composer_0, 384, 1);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda$lambda_0($$dirty, $onCategorySelected) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(12635283, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:327)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = values();
        var indexedObject = tmp0_forEach;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$6;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_0, 684747847, true, CategoryDropDown$composable$lambda$lambda$lambda($$dirty, $onCategorySelected, element));
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
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
            var tmp$ret$0;
            // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = ComposableLambda$invoke$ref_39(dispatchReceiver);
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
          Li$composable(null, tmp$ret$6, $composer_0, 48, 1);
        }
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
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda_0($selectedCategory, $$dirty, $onCategorySelected) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(589912744, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous> (Create.kt:301)');
        }
        var tmp0_modifier = padding(fillMaxSize(Companion_getInstance_1()), VOID, get_px(20));
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = SpaceBetween_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1842094037, true, CategoryDropDown$composable$lambda$lambda($selectedCategory));
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_37(dispatchReceiver);
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
        Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp$ret$6, $composer_0, 25008, 8);
        var tmp_3 = toAttrs(fillMaxWidth(classNames(Companion_getInstance_1(), ['dropdown-menu'])));
        var tmp$ret$13;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$12;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_4, 12635283, true, CategoryDropDown$composable$lambda$lambda_0($$dirty, $onCategorySelected));
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz(dispatchReceiver_0);
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = ComposableLambda$invoke$ref_40(dispatchReceiver_0);
          var value_0 = tmp$ret$7;
          tmp0_cache_0.fz(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_5;
        tmp$ret$9 = tmp$ret$8;
        var tmp_6 = tmp$ret$9;
        tmp$ret$10 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.oy();
        tmp$ret$11 = tmp0_0;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        Ul$composable(tmp_3, tmp$ret$13, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda_1($selectedCategory, $onCategorySelected, $$changed) {
    return function ($composer, $force) {
      CategoryDropDown$composable($selectedCategory, $onCategorySelected, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ThumbnailUploader$composable$lambda$lambda($thumbnail) {
    return function ($this$toAttrs) {
      $this$toAttrs.h1z('placeholder', 'Thumbnail');
      $this$toAttrs.h1z('value', $thumbnail);
      return Unit_getInstance();
    };
  }
  function ThumbnailUploader$composable$lambda$lambda$lambda($onThumbnailSelect) {
    return function ($this$loadDataUrlFromDisk, it) {
      $onThumbnailSelect($this$loadDataUrlFromDisk.f2m_1, it);
      return Unit_getInstance();
    };
  }
  function ThumbnailUploader$composable$lambda$lambda_0($onThumbnailSelect) {
    return function (it) {
      var tmp = document;
      loadDataUrlFromDisk(tmp, 'image/png, image/jpeg', ThumbnailUploader$composable$lambda$lambda$lambda($onThumbnailSelect));
      return Unit_getInstance();
    };
  }
  function ThumbnailUploader$composable$lambda($thumbnailInputDisabled, $$dirty, $thumbnail, $onThumbnailSelect) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1039250688, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous> (Create.kt:359)');
        }
        var tmp_0 = Text_getInstance();
        var tmp_1 = noBorder(borderRadius(backgroundColor(padding(margin_0(fillMaxSize(Companion_getInstance_1()), VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().o4i_1), get_px(4)));
        Constant_getInstance();
        var tmp_2 = thenIf(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(16)), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($thumbnail);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ThumbnailUploader$composable$lambda$lambda($thumbnail);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        Input$composable(tmp_0, toAttrs(tmp_2, tmp$ret$4), $composer_0, 6);
        var tmp_5 = Companion_getInstance_1();
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var tmp3_remember$composable = 14 & $$dirty >> 6;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz($onThumbnailSelect);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ThumbnailUploader$composable$lambda$lambda_0($onThumbnailSelect);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_6;
        tmp$ret$7 = tmp$ret$6;
        var tmp_7 = tmp$ret$7;
        tmp$ret$8 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        var tmp_8 = noBorder(borderRadius(color(backgroundColor(padding(fillMaxHeight(onClick(tmp_5, tmp$ret$9)), VOID, get_px(24)), !$thumbnailInputDisabled ? Theme_Gray_getInstance().o4i_1 : Theme_Primary_getInstance().o4i_1), !$thumbnailInputDisabled ? Theme_DarkGray_getInstance().o4i_1 : Colors_getInstance().h3n()), get_px(4)));
        Constant_getInstance();
        Button$composable(toAttrs(thenIf(fontWeight(fontSize(fontFamily(tmp_8, ['Roboto']), get_px(14)), Companion_getInstance_6().q2f()), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()))), ComposableSingletons$CreateKt_getInstance().g4m_1, $composer_0, 48, 0);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ThumbnailUploader$composable$lambda_0($thumbnail, $thumbnailInputDisabled, $onThumbnailSelect, $$changed) {
    return function ($composer, $force) {
      ThumbnailUploader$composable($thumbnail, $thumbnailInputDisabled, $onThumbnailSelect, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EditorControls$composable$lambda$lambda$lambda$lambda($onEditorVisibilityChanged) {
    return function (it) {
      $onEditorVisibilityChanged();
      return Unit_getInstance();
    };
  }
  function EditorControls$composable$lambda$lambda$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1518365903, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:438)');
        }
        var tmp_0 = noBorder(color(backgroundColor(borderRadius(padding(margin_1(thenIf(height(Companion_getInstance_1(), get_px(54)), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0, fillMaxWidth(Companion_getInstance_1())), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0)), VOID, get_px(24)), get_px(4)), $editorVisibility ? Theme_LightGray_getInstance().o4i_1 : Theme_Primary_getInstance().o4i_1), $editorVisibility ? Theme_DarkGray_getInstance().o4i_1 : Colors_getInstance().h3n()));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 6;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($onEditorVisibilityChanged);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = EditorControls$composable$lambda$lambda$lambda$lambda($onEditorVisibilityChanged);
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
        Button$composable(toAttrs(onClick(tmp_0, tmp$ret$4)), ComposableSingletons$CreateKt_getInstance().i4m_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(680973227, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous> (Create.kt:425)');
        }
        var tmp_0 = height(borderRadius(backgroundColor(Companion_getInstance_1(), Theme_LightGray_getInstance().o4i_1), get_px(4)), get_px(54));
        Row$composable(tmp_0, null, null, null, ComposableSingletons$CreateKt_getInstance().h4m_1, $composer_0, 24576, 14);
        var tmp_1 = CenterEnd_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1518365903, true, EditorControls$composable$lambda$lambda$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged));
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
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Box$composable(null, tmp_1, null, tmp$ret$6, $composer_0, 3120, 5);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function EditorControls$composable$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1865990914, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous> (Create.kt:421)');
        }
        var tmp0_modifier = fillMaxWidth(Companion_getInstance_1());
        var tmp1_numColumns = numColumns(1, 2);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 680973227, true, EditorControls$composable$lambda$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged));
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
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_44(dispatchReceiver);
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
        SimpleGrid$composable(tmp1_numColumns, tmp0_modifier, null, null, tmp$ret$6, $composer_0, 24576, 12);
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
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda_0($breakpoint, $editorVisibility, $onEditorVisibilityChanged, $$changed) {
    return function ($composer, $force) {
      EditorControls$composable($breakpoint, $editorVisibility, $onEditorVisibilityChanged, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EditorKeyView$composable$lambda(it) {
    return Unit_getInstance();
  }
  function EditorKeyView$composable$lambda_0($key) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-483804699, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous> (Create.kt:481)');
        }
        var tmp_0 = $key.z4_1 + ' icon';
        Image$composable($key.m4k_1, tmp_0, null, false, null, $composer_0, 0, 28);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorKeyView$composable$lambda_1($key, $$changed) {
    return function ($composer, $force) {
      EditorKeyView$composable($key, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Editor$composable$lambda$lambda($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Type here ...');
    return Unit_getInstance();
  }
  function Editor$composable$lambda($editorVisibility) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-194323487, $changed, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous> (Create.kt:493)');
        }
        var tmp_0 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_1 = borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(tmp_0, 'editor')), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().o4i_1), get_px(4));
        Constant_getInstance();
        var tmp_2 = visibility(resize(noBorder(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(16))), Companion_getInstance_7().k2i()), $editorVisibility ? Companion_getInstance_8().v2k() : Companion_getInstance_8().w2i());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Editor$composable$lambda$lambda;
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        TextArea$composable(null, toAttrs(tmp_2, tmp$ret$4), $composer_0, 0, 1);
        var tmp_5 = Companion_getInstance_1();
        ID_getInstance();
        Div$composable(toAttrs(noBorder(borderRadius(backgroundColor(scrollBehavior(overflow(visibility(borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(tmp_5, 'editorPreview')), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().o4i_1), get_px(4)), $editorVisibility ? Companion_getInstance_8().w2i() : Companion_getInstance_8().v2k()), Companion_getInstance_4().x2i()), Companion_getInstance_5().a2j()), Theme_LightGray_getInstance().o4i_1), get_px(4)))), ComposableSingletons$CreateKt_getInstance().j4m_1, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function Editor$composable$lambda_0($editorVisibility, $$changed) {
    return function ($composer, $force) {
      Editor$composable($editorVisibility, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreateButton$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function CreateButton$composable$lambda_0($onClick, $$changed) {
    return function ($composer, $force) {
      CreateButton$composable($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1423056671, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:74)');
      }
      HomeScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1350731261, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:196)');
      }
      FaPlus$composable(color(Companion_getInstance_1(), Theme_White_getInstance().o4i_1), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.l4m_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(1423056671, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.m4m_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(1350731261, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1728137044);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1728137044, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomePage$composable (Index.kt:72)');
      }
      isUserLoggedIn$composable(ComposableSingletons$IndexKt_getInstance().l4m_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(HomePage$composable$lambda_0($changed));
    }
  }
  function HomeScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1338804745);
    sourceInformation($composer_0, 'C(HomeScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1338804745, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable (Index.kt:79)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var randomJoke$delegate = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(randomJoke$delegate);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
        var value_0 = HomeScreen$composable$slambda_0(randomJoke$delegate, null);
        $composer_2.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.oy();
      LaunchedEffect$composable(Unit_getInstance(), tmp0_0, $composer_0, 6);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 601869064, true, HomeScreen$composable$lambda_1(randomJoke$delegate));
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
      var tmp_4;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_3.fz(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_3.oy();
      AdminPageLayout$composable(tmp0_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(HomeScreen$composable$lambda_2($changed));
    }
  }
  function HomeContent$composable(randomJoke, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-2142882194);
    sourceInformation($composer_0, 'C(HomeContent$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(randomJoke) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-2142882194, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable (Index.kt:95)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0;
      if (breakpoint.b5(Breakpoint_MD_getInstance()) > 0) {
        Constant_getInstance();
        tmp_0 = get_px(250);
      } else {
        tmp_0 = get_px(0);
      }
      var tmp_1 = padding_1(tmp, VOID, VOID, VOID, tmp_0);
      var tmp_2 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1663990148, true, HomeContent$composable$lambda(randomJoke));
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
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_52(dispatchReceiver);
        $composer_1.fz(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_1.oy();
      Box$composable(tmp_1, tmp_2, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(HomeContent$composable$lambda_0(randomJoke, $changed));
    }
  }
  function AddButton$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-808466347);
    sourceInformation($composer_0, 'C(AddButton$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-808466347, $changed, -1, 'com.example.blogmultiplatform.pages.admin.AddButton$composable (Index.kt:163)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var context = rememberPageContext$composable($composer_0, 0);
      var tmp = fillMaxWidth(height(Companion_getInstance_1(), get_vh(100)));
      Constant_getInstance();
      var tmp_0 = maxWidth(tmp, get_px(1920));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = position(tmp_0, 'fixed');
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.ny(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>' call
        var value = AddButton$composable$lambda;
        $composer_1.fz(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.oy();
      var tmp_4 = styleModifier(tmp_1, tmp0);
      var tmp_5 = BottomEnd_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1827640311, true, AddButton$composable$lambda_0(breakpoint, context));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.ny(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_53(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = tmp0_let_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_2.oy();
      Box$composable(tmp_4, tmp_5, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(AddButton$composable$lambda_1($changed));
    }
  }
  function HomeScreen$composable$lambda($randomJoke$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $randomJoke$delegate.w1();
  }
  function HomeScreen$composable$lambda_0($randomJoke$delegate, value) {
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $randomJoke$delegate.ut(value);
  }
  function HomePage$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      HomePage$composable_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeScreen$composable$slambda$lambda($randomJoke$delegate) {
    return function (it) {
      HomeScreen$composable$lambda_0($randomJoke$delegate, it);
      return Unit_getInstance();
    };
  }
  function HomeScreen$composable$slambda($randomJoke$delegate, resultContinuation) {
    this.v4m_1 = $randomJoke$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomeScreen$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(HomeScreen$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomeScreen$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = fetchRandomJoke(HomeScreen$composable$slambda$lambda(this.v4m_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  protoOf(HomeScreen$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new HomeScreen$composable$slambda(this.v4m_1, completion);
    i.w4m_1 = $this$LaunchedEffect;
    return i;
  };
  function HomeScreen$composable$slambda_0($randomJoke$delegate, resultContinuation) {
    var i = new HomeScreen$composable$slambda($randomJoke$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomeScreen$composable$lambda_1($randomJoke$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(601869064, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous> (Index.kt:89)');
        }
        HomeContent$composable(HomeScreen$composable$lambda($randomJoke$delegate), $composer_0, 0);
        AddButton$composable($composer_0, 0);
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
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function HomeScreen$composable$lambda_2($$changed) {
    return function ($composer, $force) {
      HomeScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeContent$composable$lambda$lambda($randomJoke) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1921040718, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous> (Index.kt:111)');
        }
        $composer_0.ny(457716129);
        if (!($randomJoke.q4k_1 === -1)) {
          var tmp0_modifier = margin(size(Companion_getInstance_1(), get_px(150)), VOID, VOID, get_px(50));
          Image_getInstance();
          var tmp1_src = '/laugh.png';
          Image$composable(tmp1_src, 'laugh image', tmp0_modifier, false, null, $composer_0, 54, 24);
        }
        $composer_0.oy();
        if (contains($randomJoke.r4k_1, 'Q:')) {
          $composer_0.ny(457716506);
          var tmp_0 = color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_9().v2e()), Theme_Secondary_getInstance().o4i_1);
          Constant_getInstance();
          var tmp2_modifier = fontWeight(fontSize(fontFamily(tmp_0, ['Roboto']), get_px(28)), Companion_getInstance_6().t2f());
          var tmp3_text = dropLast(split($randomJoke.r4k_1, [':']).l(1), 1);
          SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
          var tmp_1 = color(textAlign(fillMaxWidth(Companion_getInstance_1(), get_percent(40)), Companion_getInstance_9().v2e()), Theme_HalfBlack_getInstance().o4i_1);
          Constant_getInstance();
          var tmp4_modifier = fontWeight(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(20)), Companion_getInstance_6().s2f());
          var tmp5_text = last(split($randomJoke.r4k_1, [':']));
          SpanText$composable(tmp5_text, tmp4_modifier, null, null, $composer_0, 0, 12);
          $composer_0.oy();
        } else {
          $composer_0.ny(457717561);
          var tmp_2 = color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_9().v2e()), Theme_Secondary_getInstance().o4i_1);
          Constant_getInstance();
          var tmp6_modifier = fontWeight(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(28)), Companion_getInstance_6().t2f());
          var tmp7_text = $randomJoke.r4k_1;
          SpanText$composable(tmp7_text, tmp6_modifier, null, null, $composer_0, 0, 12);
          $composer_0.oy();
        }
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
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function HomeContent$composable$lambda($randomJoke) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1663990148, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous> (Index.kt:104)');
        }
        if (!($randomJoke == null)) {
          $composer_0.ny(872263786);
          var tmp_0 = padding(fillMaxSize(Companion_getInstance_1()), get_px(50));
          var tmp_1 = Center_getInstance_0();
          var tmp_2 = CenterHorizontally_getInstance();
          var tmp$ret$6;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_3, 1921040718, true, HomeContent$composable$lambda$lambda($randomJoke));
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
          var tmp_4;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
            var tmp$ret$0;
            // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = ComposableLambda$invoke$ref_51(dispatchReceiver);
            var value = tmp$ret$0;
            tmp0_cache.fz(value);
            tmp_4 = value;
          } else {
            tmp_4 = tmp0_let;
          }
          tmp$ret$1 = tmp_4;
          tmp$ret$2 = tmp$ret$1;
          var tmp_5 = tmp$ret$2;
          tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.oy();
          tmp$ret$4 = tmp0;
          tmp$ret$5 = tmp$ret$4;
          tmp$ret$6 = tmp$ret$5;
          Column$composable(tmp_0, tmp_1, tmp_2, null, tmp$ret$6, $composer_0, 25008, 8);
          $composer_0.oy();
        } else {
          $composer_0.ny(872266063);
          LoadingIndicator$composable(null, $composer_0, 0, 1);
          $composer_0.oy();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function HomeContent$composable$lambda_0($randomJoke, $$changed) {
    return function ($composer, $force) {
      HomeContent$composable($randomJoke, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AddButton$composable$lambda($this$styleModifier) {
    $this$styleModifier.l28('pointer-events', 'none');
    return Unit_getInstance();
  }
  function AddButton$composable$lambda$lambda($context) {
    return function (it) {
      $context.i3h_1.z3j(AdminCreate_getInstance().p4i_1);
      return Unit_getInstance();
    };
  }
  function AddButton$composable$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.l28('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function AddButton$composable$lambda_0($breakpoint, $context) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1827640311, $changed, -1, 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous> (Index.kt:178)');
        }
        var tmp_0 = cursor(borderRadius(size(backgroundColor(margin_0(Companion_getInstance_1(), VOID, $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20), $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20)), Theme_Primary_getInstance().o4i_1), $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(80) : get_px(50)), get_px(14)), Companion_getInstance_3().m2f());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($context);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = AddButton$composable$lambda$lambda($context);
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
        var tmp_3 = onClick(tmp_0, tmp$ret$4);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.ny(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = AddButton$composable$lambda$lambda_0;
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        var tmp_6 = styleModifier(tmp_3, tmp$ret$9);
        var tmp_7 = Center_getInstance();
        Box$composable(tmp_6, tmp_7, null, ComposableSingletons$IndexKt_getInstance().m4m_1, $composer_0, 3120, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function AddButton$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      AddButton$composable($composer, updateChangedFlags($$changed | 1));
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
      localStorage['userId'] = user.d4l_1;
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['username'] = user.e4l_1;
    }
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1841479681, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$LoginKt.lambda-1.<anonymous> (Login.kt:176)');
      }
      SpanText$composable('Sign in', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginKt() {
    ComposableSingletons$LoginKt_instance = this;
    var tmp = this;
    tmp.x4m_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1841479681, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
  }
  var ComposableSingletons$LoginKt_instance;
  function ComposableSingletons$LoginKt_getInstance() {
    if (ComposableSingletons$LoginKt_instance == null)
      new ComposableSingletons$LoginKt();
    return ComposableSingletons$LoginKt_instance;
  }
  function LoginScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-97421993);
    sourceInformation($composer_0, 'C(LoginScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-97421993, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable (Login.kt:64)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>' call
        var value = mutableStateOf(' ');
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var errorText$delegate = tmp0;
      var context = rememberPageContext$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp2_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = tmp2_rememberCoroutineScope$composable;
      $composer_2.ny(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = LoginScreen$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.ny(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value_0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.oy();
      var wrapper = tmp0_0;
      var tmp0_1 = wrapper.c1e_1;
      $composer_2.oy();
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
      $composer_4.ny(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_4.fz(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_2 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_4.oy();
      Box$composable(tmp_3, tmp_4, null, tmp0_2, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(LoginScreen$composable$lambda_3($changed));
    }
  }
  function LoginScreen$composable$lambda($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.w1();
  }
  function LoginScreen$composable$lambda_0($errorText$delegate, value) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.ut(value);
  }
  function LoginScreen$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Username');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Password');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation) {
    this.g4n_1 = $context;
    this.h4n_1 = $errorText$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            tmp_0.j4n_1 = (tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE()).value;
            var tmp_3 = this;
            var tmp_4 = document;
            ID_getInstance();
            var tmp_5 = tmp_4.getElementById('password_input');
            tmp_3.k4n_1 = (tmp_5 instanceof HTMLInputElement ? tmp_5 : THROW_CCE()).value;
            var tmp_6;
            if (charSequenceLength(this.j4n_1) > 0) {
              tmp_6 = charSequenceLength(this.k4n_1) > 0;
            } else {
              tmp_6 = false;
            }

            if (tmp_6) {
              this.sh_1 = 2;
              suspendResult = checkUserExistence(new User(VOID, this.j4n_1, this.k4n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.h4n_1, 'Please fill all inputs');
              this.sh_1 = 1;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$composable$lambda_0(this.h4n_1, ' ');
            this.sh_1 = 5;
            continue $sm;
          case 2:
            this.l4n_1 = suspendResult;
            if (!(this.l4n_1 == null)) {
              rememberLoggedIn(true, this.l4n_1);
              this.g4n_1.i3h_1.z3j(AdminHome_getInstance().p4i_1);
              this.sh_1 = 4;
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.h4n_1, "the user doesn't exist");
              this.sh_1 = 3;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            LoginScreen$composable$lambda_0(this.h4n_1, ' ');
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
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).l1f = function ($this$launch, completion) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda(this.g4n_1, this.h4n_1, completion);
    i.i4n_1 = $this$launch;
    return i;
  };
  function LoginScreen$composable$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, resultContinuation) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-59910919, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous> (Login.kt:81)');
        }
        var tmp0_modifier = width(margin(Companion_getInstance_1(), VOID, VOID, get_px(50)), get_px(100));
        Image_getInstance();
        var tmp1_src = '/logo.svg';
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_0 = Text_getInstance();
        var tmp_1 = toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64);
        ID_getInstance();
        var tmp_2 = backgroundColor(padding(height(width(margin(id(tmp_1, 'username_input'), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().h3n());
        Constant_getInstance();
        var tmp_3 = fontSize(fontFamily(tmp_2, ['Roboto']), get_px(14));
        var tmp_4 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_10();
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
        var tmp_5 = outline(tmp_3, tmp_4, tmp$ret$3, Colors_getInstance().u3m());
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_1 = tmp1_remember$composable;
        $composer_1.ny(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$4;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$4 = LoginScreen$composable$lambda$lambda$lambda;
          var value = tmp$ret$4;
          tmp0_cache.fz(value);
          tmp_6 = value;
        } else {
          tmp_6 = tmp0_let;
        }
        tmp$ret$5 = tmp_6;
        tmp$ret$6 = tmp$ret$5;
        var tmp_7 = tmp$ret$6;
        tmp$ret$7 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0 = tmp$ret$7;
        $composer_1.oy();
        tmp$ret$8 = tmp0;
        Input$composable(tmp_0, toAttrs(tmp_5, tmp$ret$8), $composer_0, 6);
        var tmp_8 = Password_getInstance();
        var tmp_9 = toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64);
        ID_getInstance();
        var tmp_10 = backgroundColor(padding(height(width(margin(id(tmp_9, 'password_input'), VOID, VOID, get_px(20)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().h3n());
        Constant_getInstance();
        var tmp_11 = fontSize(fontFamily(tmp_10, ['Roboto']), get_px(14));
        var tmp_12 = get_px(0);
        var tmp$ret$12;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp2_get_None_n30xxp = Companion_getInstance_10();
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
        var tmp_13 = outline(tmp_11, tmp_12, tmp$ret$12, Colors_getInstance().u3m());
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_2 = tmp3_remember$composable;
        $composer_2.ny(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$13;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$13 = LoginScreen$composable$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$13;
          tmp0_cache_0.fz(value_0);
          tmp_14 = value_0;
        } else {
          tmp_14 = tmp0_let_0;
        }
        tmp$ret$14 = tmp_14;
        tmp$ret$15 = tmp$ret$14;
        var tmp_15 = tmp$ret$15;
        tmp$ret$16 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_0 = tmp$ret$16;
        $composer_2.oy();
        tmp$ret$17 = tmp0_0;
        Input$composable(tmp_8, toAttrs(tmp_13, tmp$ret$17), $composer_0, 6);
        var tmp_16 = fontWeight(borderRadius(color(backgroundColor(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(24)), get_px(350)), get_px(54)), Theme_Primary_getInstance().o4i_1), Colors_getInstance().h3n()), get_px(4)), Companion_getInstance_6().q2f());
        Constant_getInstance();
        var tmp_17 = cursor(noBorder(fontSize(fontFamily(tmp_16, ['Roboto']), get_px(16))), Companion_getInstance_3().m2f());
        Button$composable(toAttrs(onClick(tmp_17, LoginScreen$composable$lambda$lambda$lambda_1($scope, $context, $errorText$delegate))), ComposableSingletons$LoginKt_getInstance().x4m_1, $composer_0, 48, 0);
        var tmp_18 = color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().f3n());
        Constant_getInstance();
        var tmp2_modifier = textAlign(fontFamily(tmp_18, ['Roboto']), Companion_getInstance_9().v2e());
        var tmp3_text = LoginScreen$composable$lambda($errorText$delegate);
        SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_getInstance();
        }
        tmp = tmp_19;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_2($scope, $context, $errorText$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(690167170, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous> (Login.kt:74)');
        }
        var tmp0_$receiver = Companion_getInstance_1();
        var tmp1_leftRight = get_px(50);
        var tmp2_top = get_px(80);
        var tmp3_bottom = get_px(24);
        var tmp_0 = backgroundColor(padding_2(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().o4i_1);
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
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_55(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
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
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      LoginScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MyPostKt$lambda_1$lambda_r96xxc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-121677980, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostKt.lambda-1.<anonymous> (MyPost.kt:20)');
      }
      MyPostScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MyPostKt$lambda_2$lambda_eyamzl($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2122789595, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostKt.lambda-2.<anonymous> (MyPost.kt:28)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MyPostKt() {
    ComposableSingletons$MyPostKt_instance = this;
    var tmp = this;
    tmp.m4n_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-121677980, false, ComposableSingletons$MyPostKt$lambda_1$lambda_r96xxc));
    var tmp_0 = this;
    tmp_0.n4n_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(2122789595, false, ComposableSingletons$MyPostKt$lambda_2$lambda_eyamzl));
  }
  var ComposableSingletons$MyPostKt_instance;
  function ComposableSingletons$MyPostKt_getInstance() {
    if (ComposableSingletons$MyPostKt_instance == null)
      new ComposableSingletons$MyPostKt();
    return ComposableSingletons$MyPostKt_instance;
  }
  function MyPostPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-897198855);
    sourceInformation($composer_0, 'C(MyPostPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-897198855, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostPage$composable (MyPost.kt:18)');
      }
      isUserLoggedIn$composable(ComposableSingletons$MyPostKt_getInstance().m4n_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(MyPostPage$composable$lambda($changed));
    }
  }
  function MyPostScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1006487318);
    sourceInformation($composer_0, 'C(MyPostScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1006487318, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostScreen$composable (MyPost.kt:25)');
      }
      AdminPageLayout$composable(ComposableSingletons$MyPostKt_getInstance().n4n_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(MyPostScreen$composable$lambda($changed));
    }
  }
  function MyPostPage$composable$lambda($$changed) {
    return function ($composer, $force) {
      MyPostPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MyPostScreen$composable$lambda($$changed) {
    return function ($composer, $force) {
      MyPostScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_EditorKeyStyle() {
    _init_properties_CreateStyle_kt__hcl52b();
    return EditorKeyStyle$delegate.v2j(null, EditorKeyStyle$factory());
  }
  var EditorKeyStyle$delegate;
  function EditorKeyStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_CreateStyle_kt__hcl52b();
    $this$ComponentStyle.k3q(EditorKeyStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.j3s(EditorKeyStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function EditorKeyStyle$delegate$lambda$lambda() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Colors_getInstance().u3m()), [CSSTransition_init_$Create$('background', get_ms(300))]);
  }
  function EditorKeyStyle$delegate$lambda$lambda_0() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Theme_Primary_getInstance().o4i_1), [CSSTransition_init_$Create$('background', get_ms(300))]);
  }
  function EditorKeyStyle$factory() {
    return getPropertyCallableRef('EditorKeyStyle', 0, KProperty0, function () {
      return get_EditorKeyStyle();
    }, null);
  }
  var properties_initialized_CreateStyle_kt_hj0zbv;
  function _init_properties_CreateStyle_kt__hcl52b() {
    if (!properties_initialized_CreateStyle_kt_hj0zbv) {
      properties_initialized_CreateStyle_kt_hj0zbv = true;
      EditorKeyStyle$delegate = ComponentStyle(VOID, VOID, EditorKeyStyle$delegate$lambda);
    }
  }
  function get_LoginInputStyle() {
    _init_properties_LoginStyle_kt__eon42g();
    return LoginInputStyle$delegate.v2j(null, LoginInputStyle$factory());
  }
  var LoginInputStyle$delegate;
  function LoginInputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_LoginStyle_kt__eon42g();
    $this$ComponentStyle.k3q(LoginInputStyle$delegate$lambda$lambda);
    var tmp = get_focus($this$ComponentStyle);
    tmp.j3s(LoginInputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LoginInputStyle$delegate$lambda$lambda() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Colors_getInstance().u3m()), [CSSTransition_init_$Create$('border', get_ms(300))]);
  }
  function LoginInputStyle$delegate$lambda$lambda_0() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().o4i_1);
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
  function get_NavigationItemStyle() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return NavigationItemStyle$delegate.v2j(null, NavigationItemStyle$factory());
  }
  var NavigationItemStyle$delegate;
  function NavigationItemStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SidePanelStyle_kt__9501cs();
    ID_getInstance();
    var tmp = ' > #' + 'svgParent';
    $this$ComponentStyle.m3q(tmp, NavigationItemStyle$delegate$lambda$lambda);
    ID_getInstance();
    var tmp_0 = ':hover > #' + 'svgParent';
    $this$ComponentStyle.m3q(tmp_0, NavigationItemStyle$delegate$lambda$lambda_0);
    ID_getInstance();
    var tmp_1 = ' > #' + 'navigationText';
    $this$ComponentStyle.m3q(tmp_1, NavigationItemStyle$delegate$lambda$lambda_1);
    ID_getInstance();
    var tmp_2 = ':hover > #' + 'navigationText';
    $this$ComponentStyle.m3q(tmp_2, NavigationItemStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().s2k(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.l28('stroke', Theme_White_getInstance().n4i_1);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_0() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().s2k(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda_0);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.l28('stroke', Theme_Primary_getInstance().n4i_1);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_1() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().s2k(), get_ms(300))]), Theme_White_getInstance().o4i_1);
  }
  function NavigationItemStyle$delegate$lambda$lambda_2() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().o4i_1);
  }
  function NavigationItemStyle$factory() {
    return getPropertyCallableRef('NavigationItemStyle', 0, KProperty0, function () {
      return get_NavigationItemStyle();
    }, null);
  }
  var properties_initialized_SidePanelStyle_kt_ulauva;
  function _init_properties_SidePanelStyle_kt__9501cs() {
    if (!properties_initialized_SidePanelStyle_kt_ulauva) {
      properties_initialized_SidePanelStyle_kt_ulauva = true;
      NavigationItemStyle$delegate = ComponentStyle(VOID, VOID, NavigationItemStyle$delegate$lambda);
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
  function fetchRandomJoke(onComplete, $completion) {
    var tmp = new $fetchRandomJokeCOROUTINE$2(onComplete, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w4n_1 = user;
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
            var tmp0_serializer = tmp0_encodeToString.s2r();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.k3g('user_check', VOID, encodeToByteArray(tmp0_encodeToString.a37(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.w4n_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.s2r();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(UserWithoutPassword), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.b37(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            tmp_1.x4n_1 = tmp_2;
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
              tmp_4.x4n_1 = null;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.x4n_1;
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
    this.g4o_1 = id;
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
            var tmp0_serializer = tmp0_encodeToString.s2r();
            var tmp0_cast = serializer(tmp0_serializer, createKType(PrimitiveClasses_getInstance().pe(), arrayOf([]), false));
            suspendResult = tmp_0.k3g('check_user_id', VOID, encodeToByteArray(tmp0_encodeToString.a37(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.g4o_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.s2r();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.b37(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_2;
            tmp_1.h4o_1 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
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
              tmp_4.h4o_1 = false;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.h4o_1;
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
  function $fetchRandomJokeCOROUTINE$2(onComplete, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4o_1 = onComplete;
  }
  protoOf($fetchRandomJokeCOROUTINE$2).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 9;
            var tmp_0 = this;
            tmp_0.r4o_1 = localStorage['date'];
            if (!(this.r4o_1 == null)) {
              this.s4o_1 = Date.now() - toDouble(this.r4o_1);
              this.t4o_1 = this.s4o_1 >= 8.64E7;
              if (this.t4o_1) {
                this.th_1 = 5;
                this.sh_1 = 4;
                var tmp_1 = get_http(window);
                Constant_getInstance();
                suspendResult = tmp_1.c2o('https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180', VOID, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                try {
                  var tmp0_safe_receiver = localStorage['joke'];
                  var tmp_2;
                  if (tmp0_safe_receiver == null) {
                    tmp_2 = null;
                  } else {
                    var tmp0_decodeFromString = Default_getInstance();
                    var tmp0_serializer = tmp0_decodeFromString.s2r();
                    var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(RandomJoke), arrayOf([]), false));
                    tmp_2 = tmp0_decodeFromString.b37(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), tmp0_safe_receiver);
                  }
                  var tmp1_safe_receiver = tmp_2;
                  if (tmp1_safe_receiver == null)
                    null;
                  else {
                    this.q4o_1(tmp1_safe_receiver);
                  }
                } catch ($p) {
                  if ($p instanceof Exception) {
                    var e = $p;
                    this.q4o_1(new RandomJoke(-1, toString(e.message)));
                    println(e.message);
                  } else {
                    throw $p;
                  }
                }
                this.sh_1 = 7;
                continue $sm;
              }
            } else {
              this.th_1 = 2;
              this.sh_1 = 1;
              var tmp_3 = get_http(window);
              Constant_getInstance();
              suspendResult = tmp_3.c2o('https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180', VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            var result = decodeToString(ARGUMENT);
            var tmp6_decodeFromString = Default_getInstance();
            var tmp0_serializer_0 = tmp6_decodeFromString.s2r();
            var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.q4o_1(tmp6_decodeFromString.b37(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), result));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result;
            this.th_1 = 9;
            this.sh_1 = 3;
            continue $sm;
          case 2:
            this.th_1 = 9;
            var tmp_4 = this.vh_1;
            if (tmp_4 instanceof Exception) {
              var e_0 = this.vh_1;
              this.q4o_1(new RandomJoke(-1, toString(e_0.message)));
              println(e_0.message);
              this.sh_1 = 3;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            this.th_1 = 9;
            this.sh_1 = 8;
            continue $sm;
          case 4:
            var ARGUMENT_0 = suspendResult;
            var result_0 = decodeToString(ARGUMENT_0);
            var tmp1_decodeFromString = Default_getInstance();
            var tmp0_serializer_1 = tmp1_decodeFromString.s2r();
            var tmp0_cast_1 = serializer(tmp0_serializer_1, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.q4o_1(tmp1_decodeFromString.b37(isInterface(tmp0_cast_1, KSerializer) ? tmp0_cast_1 : THROW_CCE(), result_0));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result_0;
            this.th_1 = 9;
            this.sh_1 = 6;
            continue $sm;
          case 5:
            this.th_1 = 9;
            var tmp_5 = this.vh_1;
            if (tmp_5 instanceof Exception) {
              var e_1 = this.vh_1;
              this.q4o_1(new RandomJoke(-1, toString(e_1.message)));
              println(e_1.message);
              this.sh_1 = 6;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 6:
            this.th_1 = 9;
            this.sh_1 = 7;
            continue $sm;
          case 7:
            this.sh_1 = 8;
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.vh_1;
        }
      } catch ($p) {
        var e_2 = $p;
        if (this.th_1 === 9) {
          throw e_2;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e_2;
        }
      }
     while (true);
  };
  function Constant() {
    Constant_instance = this;
    this.u4o_1 = 'Roboto';
    this.v4o_1 = 250;
    this.w4o_1 = 1920;
    this.x4o_1 = 100;
    this.y4o_1 = 'https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180';
    this.z4o_1 = 0;
  }
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
  }
  function Image() {
    Image_instance = this;
    this.a4p_1 = '/logo.svg';
    this.b4p_1 = '/laugh.png';
    this.c4p_1 = 0;
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function Icon() {
    Icon_instance = this;
    this.d4p_1 = '/bold.svg';
    this.e4p_1 = '/italic.svg';
    this.f4p_1 = '/link.svg';
    this.g4p_1 = '/title.svg';
    this.h4p_1 = '/subtitle.svg';
    this.i4p_1 = '/quote.svg';
    this.j4p_1 = '/code.svg';
    this.k4p_1 = '/image.svg';
    this.l4p_1 = 0;
  }
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.m4p_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.n4p_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.o4p_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.p4p_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
    this.q4p_1 = 0;
  }
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function ID() {
    ID_instance = this;
    this.r4p_1 = 'username_input';
    this.s4p_1 = 'password_input';
    this.t4p_1 = 'svgParent';
    this.u4p_1 = 'navigationText';
    this.v4p_1 = 'editor';
    this.w4p_1 = 'editorPreview';
    this.x4p_1 = 0;
  }
  var ID_instance;
  function ID_getInstance() {
    if (ID_instance == null)
      new ID();
    return ID_instance;
  }
  function logout() {
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = 'false';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['userId'] = '';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['username'] = '';
  }
  function noBorder(_this__u8e3s4) {
    var tmp = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = border(_this__u8e3s4, tmp, 'none', Colors_getInstance().u3m());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_10();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return outline(tmp_0, tmp_1, 'none', Colors_getInstance().u3m());
  }
  function isUserLoggedIn$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1950558440);
    sourceInformation($composer_0, 'C(isUserLoggedIn$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1950558440, $dirty, -1, 'com.example.blogmultiplatform.util.isUserLoggedIn$composable (Functions.kt:22)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = localStorage['remember'];
        var value = toBoolean(tmp$ret$1);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var remembered = tmp0;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var value_0 = localStorage['userId'];
        $composer_2.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.oy();
      var userId = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.ny(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_1 = mutableStateOf(false);
        $composer_3.fz(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.oy();
      var userIdExists$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ny(-1603429786);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [userIdExists$delegate, userId, remembered, context];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_4.gz(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_2 = isUserLoggedIn$composable$slambda_0(userId, remembered, context, userIdExists$delegate, null);
        $composer_4.fz(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.oy();
      LaunchedEffect$composable(Unit_getInstance(), tmp0_2, $composer_0, 6);
      if (remembered ? isUserLoggedIn$composable$lambda(userIdExists$delegate) : false) {
        content($composer_0, 14 & $dirty);
      } else {
        println('Loading...');
      }
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
      tmp0_safe_receiver.r1d(isUserLoggedIn$composable$lambda_1(content, $changed));
    }
  }
  function isUserLoggedIn$composable$lambda($userIdExists$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.w1();
  }
  function isUserLoggedIn$composable$lambda_0($userIdExists$delegate, value) {
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.ut(value);
  }
  function isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    this.g4q_1 = $userId;
    this.h4q_1 = $remembered;
    this.i4q_1 = $context;
    this.j4q_1 = $userIdExists$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(isUserLoggedIn$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(isUserLoggedIn$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(isUserLoggedIn$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            if (!(this.g4q_1 == null ? true : charSequenceLength(this.g4q_1) === 0)) {
              this.sh_1 = 1;
              suspendResult = checkUserId(this.g4q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l4q_1 = false;
              this.sh_1 = 2;
              continue $sm;
            }

          case 1:
            this.l4q_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            var ARGUMENT = this.l4q_1;
            isUserLoggedIn$composable$lambda_0(this.j4q_1, ARGUMENT);
            if (!this.h4q_1 ? true : !isUserLoggedIn$composable$lambda(this.j4q_1)) {
              this.i4q_1.i3h_1.z3j(AdminLogin_getInstance().p4i_1);
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
  protoOf(isUserLoggedIn$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new isUserLoggedIn$composable$slambda(this.g4q_1, this.h4q_1, this.i4q_1, this.j4q_1, completion);
    i.k4q_1 = $this$LaunchedEffect;
    return i;
  };
  function isUserLoggedIn$composable$slambda_0($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    var i = new isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
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
  protoOf($serializer).o2y = typeParametersSerializers;
  protoOf($serializer_0).o2y = typeParametersSerializers;
  protoOf($serializer_1).o2y = typeParametersSerializers;
  protoOf($serializer_2).o2y = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map
