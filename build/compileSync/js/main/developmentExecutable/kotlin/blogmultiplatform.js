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
  var ensureNotNull = kotlin_kotlin.$_$.mf;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var removePrefix = kotlin_kotlin.$_$.zc;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.te;
  var isObject = kotlin_kotlin.$_$.za;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var protoOf = kotlin_kotlin.$_$.lb;
  var objectMeta = kotlin_kotlin.$_$.kb;
  var VOID = kotlin_kotlin.$_$.cg;
  var setMetadataFor = kotlin_kotlin.$_$.mb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.ag;
  var toInt = kotlin_kotlin.$_$.pd;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var toBoolean = kotlin_kotlin.$_$.ld;
  var isBlank = kotlin_kotlin.$_$.sc;
  var removeSuffix = kotlin_kotlin.$_$.ad;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.bg;
  var mapOf = kotlin_kotlin.$_$.r7;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.y8;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.bc;
  var THROW_ISE = kotlin_kotlin.$_$.ue;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ha;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r8;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.m9;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.j9;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.d9;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var rememberBreakpoint$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.l8;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Path$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaBars$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y3;
  var CoroutineImpl = kotlin_kotlin.$_$.m9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.wa;
  var Long = kotlin_kotlin.$_$.ne;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var classMeta = kotlin_kotlin.$_$.ca;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var FaXmark$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var SuspendFunction1 = kotlin_kotlin.$_$.n9;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.qf;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var EnumDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var enumEntries = kotlin_kotlin.$_$.r9;
  var Enum = kotlin_kotlin.$_$.ie;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var getStringHashCode = kotlin_kotlin.$_$.ka;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.t8;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.s8;
  var println = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var LG_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var Switch$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var MD_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var SimpleGrid$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.g9;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.c9;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.b9;
  var Li$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.i9;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var Ul$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o9;
  var loadDataUrlFromDisk = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var disabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var resize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var TextArea$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n9;
  var FaPlus$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var split = kotlin_kotlin.$_$.fd;
  var dropLast = kotlin_kotlin.$_$.lc;
  var last = kotlin_kotlin.$_$.m7;
  var contains = kotlin_kotlin.$_$.ic;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.dc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ja;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.hf;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var encodeToByteArray = kotlin_kotlin.$_$.nc;
  var decodeToString = kotlin_kotlin.$_$.kc;
  var Exception = kotlin_kotlin.$_$.ke;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g4;
  var get_http = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var toDouble = kotlin_kotlin.$_$.nd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$LoadingIndicatorKt, 'ComposableSingletons$LoadingIndicatorKt', objectMeta);
  setMetadataFor(ComposableSingletons$SidePanelKt, 'ComposableSingletons$SidePanelKt', objectMeta);
  setMetadataFor(OverflowSidePanel$composable$slambda$slambda, 'OverflowSidePanel$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$slambda, 'OverflowSidePanel$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda, 'OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
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
  setMetadataFor(ComposableSingletons$CreateKt, 'ComposableSingletons$CreateKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(HomeScreen$composable$slambda, 'HomeScreen$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt', objectMeta);
  setMetadataFor(LoginScreen$composable$lambda$lambda$lambda$slambda, 'LoginScreen$composable$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$MyPostKt, 'ComposableSingletons$MyPostKt', objectMeta);
  setMetadataFor($checkUserExistenceCOROUTINE$0, '$checkUserExistenceCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($checkUserIdCOROUTINE$1, '$checkUserIdCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fetchRandomJokeCOROUTINE$2, '$fetchRandomJokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Image, 'Image', objectMeta);
  setMetadataFor(Icon, 'Icon', objectMeta);
  setMetadataFor(PathIcon, 'PathIcon', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  setMetadataFor(ID, 'ID', objectMeta);
  setMetadataFor(isUserLoggedIn$composable$slambda, 'isUserLoggedIn$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
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
    get_api(window).set_logOnError_rg5mft_k$(true);
    Companion_getInstance().set_svddio_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_v74gir_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_mld8fs_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_6(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      HomePage$composable_0($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(197659649, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:89)');
      }
      CreatePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1691572098, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (main.kt:91)');
      }
      LoginScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1109482749, $changed, -1, 'ComposableSingletons$MainKt.lambda-5.<anonymous> (main.kt:93)');
      }
      MyPostPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1691572098, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1109482749, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
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
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/admin/', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/admin/create', VOID, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/admin/login', VOID, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1);
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/admin/my_posts', VOID, ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_e5hf00_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_EditorKeyStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_LoginInputStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_NavigationItemStyle());
    initSilk(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:122)');
        }
        $router.renderActivePage$composable_ebhbpl_k$(ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:120)');
        }
        var tmp_0 = [get_AppGlobalsLocal().provides_3e53yf_k$(mapOf(to('title', 'BlogMultiplatform')))];
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function initSilk(ctx) {
  }
  function MyApp(content) {
    illegalDecoyCallException('MyApp');
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(14680293);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      SilkApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AdminPageLayout(content) {
    illegalDecoyCallException('AdminPageLayout');
  }
  function AdminPageLayout$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2110758218);
    sourceInformation($composer_0, 'C(AdminPageLayout$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2110758218, $dirty, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable (AdminPageLayout.kt:18)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
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
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_1, tmp_2, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(AdminPageLayout$composable$lambda_2(content, $changed));
    }
  }
  function AdminPageLayout$composable$lambda($overFlowMenuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('overFlowMenuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $overFlowMenuOpened$delegate.get_value_j01efc_k$();
  }
  function AdminPageLayout$composable$lambda_0($overFlowMenuOpened$delegate, value) {
    getLocalDelegateReference('overFlowMenuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $overFlowMenuOpened$delegate.set_value_rnwamw_k$(value);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(195052902, $changed, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous> (AdminPageLayout.kt:30)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($overFlowMenuOpened$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = AdminPageLayout$composable$lambda$lambda$lambda($overFlowMenuOpened$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        SidePanel$composable(tmp$ret$4, $composer_0, 0);
        $composer_0.startReplaceableGroup_rp6air_k$(1286481596);
        if (AdminPageLayout$composable$lambda($overFlowMenuOpened$delegate)) {
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp1_remember$composable = $composer_0;
          var $composer_2 = tmp1_remember$composable;
          $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_2;
          var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$($overFlowMenuOpened$delegate);
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_2;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var tmp$ret$5;
            // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$5 = AdminPageLayout$composable$lambda$lambda$lambda_0($overFlowMenuOpened$delegate);
            var value_0 = tmp$ret$5;
            tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
            tmp_2 = value_0;
          } else {
            tmp_2 = tmp0_let_0;
          }
          tmp$ret$6 = tmp_2;
          tmp$ret$7 = tmp$ret$6;
          var tmp_3 = tmp$ret$7;
          tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
          var tmp0_0 = tmp$ret$8;
          $composer_2.endReplaceableGroup_er37p7_k$();
          tmp$ret$9 = tmp0_0;
          OverflowSidePanel$composable(tmp$ret$9, $composer_0, 0);
        }
        $composer_0.endReplaceableGroup_er37p7_k$();
        $content($composer_0, 14 & $$dirty);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AdminPageLayout$composable$lambda_1($overFlowMenuOpened$delegate, $content, $$dirty) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(976916783, $changed, -1, 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous> (AdminPageLayout.kt:25)');
        }
        var tmp_0 = maxWidth(fillMaxSize(Companion_getInstance_1()), get_px(Constant_getInstance().get_PAGE_WIDTH_u0d1fj_k$()));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 195052902, true, AdminPageLayout$composable$lambda$lambda($overFlowMenuOpened$delegate, $content, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.AdminPageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AdminPageLayout$composable$lambda_2($content, $$changed) {
    return function ($composer, $force) {
      AdminPageLayout$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoadingIndicator(modifier) {
    illegalDecoyCallException('LoadingIndicator');
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_1$lambda_atn3pj($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(799387059, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-1.<anonymous> (LoadingIndicator.kt:36)');
      }
      Text$composable('Loading', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_2$lambda_vduh7e($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1820086993, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-2.<anonymous> (LoadingIndicator.kt:31)');
      }
      Span$composable(toAttrs(classNames(Companion_getInstance_1(), ['visually-hidden'])), ComposableSingletons$LoadingIndicatorKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIndicatorKt$lambda_3$lambda_2k8057($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1224469040, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$LoadingIndicatorKt.lambda-3.<anonymous> (LoadingIndicator.kt:26)');
      }
      Div$composable(toAttrs(classNames(Companion_getInstance_1(), ['spinner-border', 'text-primary'])), ComposableSingletons$LoadingIndicatorKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoadingIndicatorKt() {
    ComposableSingletons$LoadingIndicatorKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(799387059, false, ComposableSingletons$LoadingIndicatorKt$lambda_1$lambda_atn3pj));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1820086993, false, ComposableSingletons$LoadingIndicatorKt$lambda_2$lambda_vduh7e));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1224469040, false, ComposableSingletons$LoadingIndicatorKt$lambda_3$lambda_2k8057));
  }
  protoOf(ComposableSingletons$LoadingIndicatorKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$LoadingIndicatorKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$LoadingIndicatorKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$LoadingIndicatorKt_instance;
  function ComposableSingletons$LoadingIndicatorKt_getInstance() {
    if (ComposableSingletons$LoadingIndicatorKt_instance == null)
      new ComposableSingletons$LoadingIndicatorKt();
    return ComposableSingletons$LoadingIndicatorKt_instance;
  }
  function LoadingIndicator$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-208701957);
    sourceInformation($composer_0, 'C(LoadingIndicator$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-208701957, $dirty, -1, 'com.example.blogmultiplatform.components.LoadingIndicator$composable (LoadingIndicator.kt:18)');
      }
      var tmp = padding(height(fillMaxSize(modifier_0._v), get_vh(100)), get_px(50));
      var tmp_0 = Center_getInstance();
      Box$composable(tmp, tmp_0, null, ComposableSingletons$LoadingIndicatorKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(LoadingIndicator$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function LoadingIndicator$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LoadingIndicator$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SidePanel(onMenuClick) {
    illegalDecoyCallException('SidePanel');
  }
  function SidePanelInternal() {
    illegalDecoyCallException('SidePanelInternal');
  }
  function NavigationItems() {
    illegalDecoyCallException('NavigationItems');
  }
  function NavigationItem(modifier, selected, title, icon, onClick) {
    illegalDecoyCallException('NavigationItem');
  }
  function VectorIcon(modifier, selected, pathData) {
    illegalDecoyCallException('VectorIcon');
  }
  function CollapsedSidePanel(onMenuClick) {
    illegalDecoyCallException('CollapsedSidePanel');
  }
  function OverflowSidePanel(onMenuClosed) {
    illegalDecoyCallException('OverflowSidePanel');
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-484341009, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous> (SidePanel.kt:95)');
      }
      var tmp0_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(60));
      var tmp1_src = Image_getInstance().get_logo_wopywk_k$();
      Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
      NavigationItems$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt() {
    ComposableSingletons$SidePanelKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-484341009, false, ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5));
  }
  protoOf(ComposableSingletons$SidePanelKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$SidePanelKt_instance;
  function ComposableSingletons$SidePanelKt_getInstance() {
    if (ComposableSingletons$SidePanelKt_instance == null)
      new ComposableSingletons$SidePanelKt();
    return ComposableSingletons$SidePanelKt_instance;
  }
  function SidePanel$composable(onMenuClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1613190577);
    sourceInformation($composer_0, 'C(SidePanel$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1613190577, $dirty, -1, 'com.example.blogmultiplatform.components.SidePanel$composable (SidePanel.kt:70)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      if (breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0) {
        $composer_0.startReplaceableGroup_rp6air_k$(520205167);
        SidePanelInternal$composable($composer_0, 0);
        $composer_0.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_0.startReplaceableGroup_rp6air_k$(520205208);
        CollapsedSidePanel$composable(onMenuClick, $composer_0, 14 & $dirty);
        $composer_0.endReplaceableGroup_er37p7_k$();
      }
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SidePanel$composable$lambda(onMenuClick, $changed));
    }
  }
  function SidePanelInternal$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(593505127);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(593505127, $changed, -1, 'com.example.blogmultiplatform.components.SidePanelInternal$composable (SidePanel.kt:82)');
      }
      var tmp0_$receiver = Companion_getInstance_1();
      var tmp1_leftRight = get_px(50);
      var tmp2_topBottom = get_px(50);
      var tmp = height(width(padding(tmp0_$receiver, tmp2_topBottom, tmp1_leftRight), get_px(Constant_getInstance().get_SIDE_PANEL_WIDTH_mwcp64_k$())), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(zIndex(position(tmp, 'fixed'), 9), Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
      Column$composable(tmp_0, null, null, null, ComposableSingletons$SidePanelKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SidePanelInternal$composable$lambda($changed));
    }
  }
  function NavigationItems$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1588454249);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1588454249, $changed, -1, 'com.example.blogmultiplatform.components.NavigationItems$composable (SidePanel.kt:106)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
      var tmp0_modifier = color(fontSize(fontFamily(margin(Companion_getInstance_1(), VOID, VOID, get_px(30)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16)), Theme_HalfWhite_getInstance().get_rgb_18ix0c_k$());
      SpanText$composable('Dashboard', tmp0_modifier, null, null, $composer_0, 6, 12);
      var tmp = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_0 = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === AdminHome_getInstance().get_route_iy3cio_k$();
      var tmp_1 = PathIcon_getInstance().get_home_wonf3c_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(context);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value = NavigationItems$composable$lambda(context);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      NavigationItem$composable(tmp, tmp_0, 'Home', tmp_1, tmp0, $composer_0, 3456, 0);
      var tmp_4 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_5 = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === AdminCreate_getInstance().get_route_iy3cio_k$();
      var tmp_6 = PathIcon_getInstance().get_create_c1nsp1_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_0 = NavigationItems$composable$lambda_0(context);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = tmp0_let_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      NavigationItem$composable(tmp_4, tmp_5, 'Create Post', tmp_6, tmp0_0, $composer_0, 3456, 0);
      var tmp_9 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_10 = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === AdminMyPosts_getInstance().get_route_iy3cio_k$();
      var tmp_11 = PathIcon_getInstance().get_posts_iwzpuy_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3.changed_ga7h3f_k$(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_1 = NavigationItems$composable$lambda_1(context);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_12 = value_1;
      } else {
        tmp_12 = tmp0_let_1;
      }
      var tmp_13 = tmp_12;
      var tmp0_1 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      NavigationItem$composable(tmp_9, tmp_10, 'My Posts', tmp_11, tmp0_1, $composer_0, 3456, 0);
      var tmp_14 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_15 = PathIcon_getInstance().get_logout_g9gkur_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4.changed_ga7h3f_k$(context);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_16;
      if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItems$composable.<anonymous>' call
        var value_2 = NavigationItems$composable$lambda_2(context);
        $composer_4.updateRememberedValue_l1colo_k$(value_2);
        tmp_16 = value_2;
      } else {
        tmp_16 = tmp0_let_2;
      }
      var tmp_17 = tmp_16;
      var tmp0_2 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      NavigationItem$composable(tmp_14, false, 'Logout', tmp_15, tmp0_2, $composer_0, 3504, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(NavigationItems$composable$lambda_3($changed));
    }
  }
  function NavigationItem$composable(modifier, selected, title, icon, onClick_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var selected_0 = {_v: selected};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1534724944);
    sourceInformation($composer_0, 'C(NavigationItem$composable)P(1,3,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(selected_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 2) === 0)) {
        selected_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1534724944, $dirty, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable (SidePanel.kt:164)');
      }
      var tmp = cursor(toModifier$composable(get_NavigationItemStyle(), [], $composer_0, 64).then_6jcr1i_k$(modifier_0._v), Companion_getInstance_3().get_Pointer_m64vg4_k$());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(onClick_0);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
        var value = NavigationItem$composable$lambda(onClick_0);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_2 = onClick(tmp, tmp0);
      var tmp_3 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1278882319, true, NavigationItem$composable$lambda_0(selected_0, icon, $dirty, title));
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
      var tmp_5;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Row$composable(tmp_2, null, tmp_3, null, tmp0_0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(NavigationItem$composable$lambda_1(modifier_0, selected_0, title, icon, onClick_0, $changed, $default));
    }
  }
  function VectorIcon$composable(modifier, selected, pathData, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1277977388);
    sourceInformation($composer_0, 'C(VectorIcon$composable)P(!1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(selected) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(pathData) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(1277977388, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable (SidePanel.kt:199)');
      }
      var tmp = height(width(id(modifier_0._v, ID_getInstance().get_svgParent_vlv2bp_k$()), get_px(24)), get_px(24));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
        var value = VectorIcon$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_2 = toAttrs(tmp, tmp0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1431358604, true, VectorIcon$composable$lambda_0($dirty, pathData, selected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Svg$composable(tmp_2, tmp0_0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(VectorIcon$composable$lambda_1(modifier_0, selected, pathData, $changed, $default));
    }
  }
  function CollapsedSidePanel$composable(onMenuClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-35672704);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-35672704, $dirty, -1, 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable (SidePanel.kt:221)');
      }
      var tmp = backgroundColor(padding(height(fillMaxWidth(Companion_getInstance_1()), get_px(Constant_getInstance().get_COLLAPSED_PANEL_HEIGHT_5tw4j7_k$())), VOID, get_px(24)), Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1184612587, true, CollapsedSidePanel$composable$lambda($dirty, onMenuClick));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Row$composable(tmp, null, tmp_0, null, tmp0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CollapsedSidePanel$composable$lambda_0(onMenuClick, $changed));
    }
  }
  function OverflowSidePanel$composable(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(75619151);
    sourceInformation($composer_0, 'C(OverflowSidePanel$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(75619151, $dirty, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable (SidePanel.kt:248)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp1_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_1 = tmp1_rememberCoroutineScope$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = OverflowSidePanel$composable$lambda_3;
      }
      var composer = $composer_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_2.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var scope = tmp0_0;
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        $composer_3.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var translateX$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        $composer_4.updateRememberedValue_l1colo_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_2 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      var opacity$delegate = tmp0_2;
      LaunchedEffect$composable(breakpoint, OverflowSidePanel$composable$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null), $composer_0, 0);
      var tmp_5 = height(fillMaxWidth(Companion_getInstance_1()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = backgroundColor(transition(opacity(zIndex(position(tmp_5, 'fixed'), 9), OverflowSidePanel$composable$lambda_1(opacity$delegate)), [CSSTransition_init_$Create$('opacity', get_ms(300))]), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -1839842835, true, OverflowSidePanel$composable$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_5.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_5.updateRememberedValue_l1colo_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_3 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_5.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_6, null, null, tmp0_3, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(OverflowSidePanel$composable$lambda_5(onMenuClosed, $changed));
    }
  }
  function OverflowSidePanel$composable$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.get_value_j01efc_k$();
  }
  function OverflowSidePanel$composable$lambda_0($translateX$delegate, value) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.set_value_rnwamw_k$(value);
  }
  function OverflowSidePanel$composable$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.get_value_j01efc_k$();
  }
  function OverflowSidePanel$composable$lambda_2($opacity$delegate, value) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.set_value_rnwamw_k$(value);
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
      $context.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminHome_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_0($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminCreate_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_1($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminMyPosts_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_2($context) {
    return function () {
      logout();
      $context.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminLogin_getInstance().get_route_iy3cio_k$());
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1278882319, $changed, -1, 'com.example.blogmultiplatform.components.NavigationItem$composable.<anonymous> (SidePanel.kt:172)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(10));
        VectorIcon$composable(tmp0_modifier, $selected._v, $icon, $composer_0, 112 & $$dirty | 896 & $$dirty >> 3, 0);
        var tmp1_modifier = thenIf(fontSize(fontFamily(id(Companion_getInstance_1(), ID_getInstance().get_navigationText_yua55i_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16)), $selected._v, color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        SpanText$composable($title, tmp1_modifier, null, null, $composer_0, 14 & $$dirty >> 6, 12);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function NavigationItem$composable$lambda_1($modifier, $selected, $title, $icon, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItem$composable($modifier._v, $selected._v, $title, $icon, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('viewBox', '0 0 24 24');
    $this$toAttrs.attr_z3nk29_k$('fill', 'none');
    return Unit_getInstance();
  }
  function VectorIcon$composable$lambda$lambda($pathData, $selected) {
    return function ($this$Path) {
      $this$Path.attr_uf64yq_k$('d', $pathData);
      var tmp;
      if ($selected) {
        $this$Path.attr_uf64yq_k$('stroke', Theme_Primary_getInstance().get_hex_18j4ge_k$());
        tmp = Unit_getInstance();
      }
      $this$Path.attr_uf64yq_k$('stroke-width', '2');
      $this$Path.attr_uf64yq_k$('stroke-linecap', 'round');
      $this$Path.attr_uf64yq_k$('stroke-linejoin', 'round');
      return Unit_getInstance();
    };
  }
  function VectorIcon$composable$lambda_0($$dirty, $pathData, $selected) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Svg) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1431358604, $dirty, -1, 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous> (SidePanel.kt:210)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 6 | 112 & $$dirty;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.changed_ga7h3f_k$($pathData) | $composer_1.changed_ga7h3f_k$($selected));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.VectorIcon$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = VectorIcon$composable$lambda$lambda($pathData, $selected);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        Path$composable($this$Svg, tmp$ret$4, $composer_0, 14 & $dirty);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1184612587, $changed, -1, 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous> (SidePanel.kt:230)');
        }
        var tmp_0 = cursor(color(margin_0(Companion_getInstance_1(), VOID, get_px(24)), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_3().get_Pointer_m64vg4_k$());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($onMenuClick);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.CollapsedSidePanel$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CollapsedSidePanel$composable$lambda$lambda($onMenuClick);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        FaBars$composable(onClick(tmp_0, tmp$ret$4), IconSize_XL_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = width(Companion_getInstance_1(), get_px(80));
        var tmp1_src = Image_getInstance().get_logo_wopywk_k$();
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            OverflowSidePanel$composable$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_a96kl8_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new OverflowSidePanel$composable$slambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverflowSidePanel$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowSidePanel$composable$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowSidePanel$composable$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowSidePanel$composable$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.$breakpoint_1 = $breakpoint;
    this.$scope_1 = $scope;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    this.$onMenuClosed_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowSidePanel$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          OverflowSidePanel$composable$lambda_0(this.$translateX$delegate_1, get_percent(0));
          OverflowSidePanel$composable$lambda_2(this.$opacity$delegate_1, get_percent(100));
          if (this.$breakpoint_1.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0) {
            launch(this.$scope_1, VOID, VOID, OverflowSidePanel$composable$slambda$slambda_0(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OverflowSidePanel$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new OverflowSidePanel$composable$slambda(this.$breakpoint_1, this.$scope_1, this.$translateX$delegate_1, this.$opacity$delegate_1, this.$onMenuClosed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(OverflowSidePanel$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowSidePanel$composable$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new OverflowSidePanel$composable$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            OverflowSidePanel$composable$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_a96kl8_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1910507033, $changed, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous> (SidePanel.kt:293)');
        }
        var tmp_0 = color(margin_0(Companion_getInstance_1(), VOID, get_px(20)), Theme_White_getInstance().get_rgb_18ix0c_k$());
        FaXmark$composable(cursor(onClick(tmp_0, OverflowSidePanel$composable$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate)), Companion_getInstance_3().get_Pointer_m64vg4_k$()), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = width(Companion_getInstance_1(), get_px(80));
        var tmp1_src = Image_getInstance().get_logo_wopywk_k$();
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_20(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1839842835, $changed, -1, 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous> (SidePanel.kt:278)');
        }
        var tmp_0 = backgroundColor(scrollBehavior(overflow(transition(translateX(width(fillMaxHeight(padding_0(Companion_getInstance_1(), get_px(24))), $breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), OverflowSidePanel$composable$lambda($translateX$delegate)), [CSSTransition_init_$Create$('translate', get_ms(300))]), Companion_getInstance_4().get_Auto_wnyn88_k$()), Companion_getInstance_5().get_Smooth_4edjo7_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.OverflowSidePanel$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_21(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function OverflowSidePanel$composable$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      OverflowSidePanel$composable($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  }
  function Category$Companion$_anonymous__i5239t() {
    return $serializer_getInstance();
  }
  function get_$stableprop() {
    return 0;
  }
  var Category_Technology_instance;
  var Category_Programming_instance;
  var Category_Design_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, Category$Companion$_anonymous__i5239t);
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
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
    this.$stable_1 = 0;
    var tmp0_serialDesc = new EnumDescriptor('com.example.blogmultiplatform.models.Category', 3);
    tmp0_serialDesc.addElement_ifop3j_k$('Technology', false);
    tmp0_serialDesc.addElement_ifop3j_k$('Programming', false);
    tmp0_serialDesc.addElement_ifop3j_k$('Design', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer).deserialize_2t41fm_k$ = function (decoder) {
    return values()[decoder.decodeEnum_w3hzf6_k$(this.descriptor_1)];
  };
  protoOf($serializer).serialize_5672um_k$ = function (encoder, value) {
    encoder.encodeEnum_dzauii_k$(this.descriptor_1, value.get_ordinal_ip24qg_k$());
  };
  protoOf($serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_5672um_k$(encoder, value instanceof Category ? value : THROW_CCE());
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
  function valueOf(value) {
    switch (value) {
      case 'Technology':
        return Category_Technology_getInstance();
      case 'Programming':
        return Category_Programming_getInstance();
      case 'Design':
        return Category_Design_getInstance();
      default:
        Category_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Category_entriesInitialized;
  function Category_initEntries() {
    if (Category_entriesInitialized)
      return Unit_getInstance();
    Category_entriesInitialized = true;
    Category_Technology_instance = new Category('Technology', 0, Theme_Green_getInstance().get_hex_18j4ge_k$());
    Category_Programming_instance = new Category('Programming', 1, Theme_Yellow_getInstance().get_hex_18j4ge_k$());
    Category_Design_instance = new Category('Design', 2, Theme_Purple_getInstance().get_hex_18j4ge_k$());
    Companion_getInstance_12();
  }
  var $ENTRIES;
  function Category(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.color_1 = color;
  }
  protoOf(Category).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
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
  function valueOf_0(value) {
    switch (value) {
      case 'Bold':
        return EditorKey_Bold_getInstance();
      case 'Italic':
        return EditorKey_Italic_getInstance();
      case 'Link':
        return EditorKey_Link_getInstance();
      case 'Title':
        return EditorKey_Title_getInstance();
      case 'SubTitle':
        return EditorKey_SubTitle_getInstance();
      case 'Quote':
        return EditorKey_Quote_getInstance();
      case 'Code':
        return EditorKey_Code_getInstance();
      case 'Image':
        return EditorKey_Image_getInstance();
      default:
        EditorKey_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var EditorKey_entriesInitialized;
  function EditorKey_initEntries() {
    if (EditorKey_entriesInitialized)
      return Unit_getInstance();
    EditorKey_entriesInitialized = true;
    EditorKey_Bold_instance = new EditorKey('Bold', 0, Icon_getInstance().get_bold_wojl5a_k$());
    EditorKey_Italic_instance = new EditorKey('Italic', 1, Icon_getInstance().get_italic_ewys6x_k$());
    EditorKey_Link_instance = new EditorKey('Link', 2, Icon_getInstance().get_link_wopumb_k$());
    EditorKey_Title_instance = new EditorKey('Title', 3, Icon_getInstance().get_title_iz32un_k$());
    EditorKey_SubTitle_instance = new EditorKey('SubTitle', 4, Icon_getInstance().get_subtitle_55eoyp_k$());
    EditorKey_Quote_instance = new EditorKey('Quote', 5, Icon_getInstance().get_quote_ixn9eb_k$());
    EditorKey_Code_instance = new EditorKey('Code', 6, Icon_getInstance().get_code_wok7xy_k$());
    EditorKey_Image_instance = new EditorKey('Image', 7, Icon_getInstance().get_image_it3i2a_k$());
  }
  var $ENTRIES_0;
  function EditorKey(name, ordinal, icon) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
  }
  protoOf(EditorKey).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
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
  function get_$stableprop_0() {
    return 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.RandomJoke', this, 2);
    tmp0_serialDesc.addElement_ifop3j_k$('id', false);
    tmp0_serialDesc.addElement_ifop3j_k$('joke', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_0).deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp7_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_e64gd4_k$(tmp0_desc);
    return RandomJoke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).serialize_329296_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeIntElement_utywpf_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 1, value.joke_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_329296_k$(encoder, value instanceof RandomJoke ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_0().descriptor_1);
    }
    $this.id_1 = id;
    $this.joke_1 = joke;
    $this.$stable_1 = 0;
    return $this;
  }
  function RandomJoke_init_$Create$(seen1, id, joke, serializationConstructorMarker) {
    return RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, objectCreate(protoOf(RandomJoke)));
  }
  function get_$stableprop_1() {
    return 0;
  }
  function RandomJoke(id, joke) {
    Companion_getInstance_13();
    this.id_1 = id;
    this.joke_1 = joke;
    this.$stable_1 = 0;
  }
  protoOf(RandomJoke).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).get_joke_woop0o_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).component2_7eebsb_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).copy_t8q04r_k$ = function (id, joke) {
    return new RandomJoke(id, joke);
  };
  protoOf(RandomJoke).copy$default_ck4cg3_k$ = function (id, joke, $super) {
    id = id === VOID ? this.id_1 : id;
    joke = joke === VOID ? this.joke_1 : joke;
    return $super === VOID ? this.copy_t8q04r_k$(id, joke) : $super.copy_t8q04r_k$.call(this, id, joke);
  };
  protoOf(RandomJoke).toString = function () {
    return 'RandomJoke(id=' + this.id_1 + ', joke=' + this.joke_1 + ')';
  };
  protoOf(RandomJoke).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.joke_1) | 0;
    return result;
  };
  protoOf(RandomJoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RandomJoke))
      return false;
    var tmp0_other_with_cast = other instanceof RandomJoke ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.joke_1 === tmp0_other_with_cast.joke_1))
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
  function values_1() {
    return [Theme_Primary_getInstance(), Theme_Secondary_getInstance(), Theme_LightGray_getInstance(), Theme_Gray_getInstance(), Theme_DarkGray_getInstance(), Theme_HalfWhite_getInstance(), Theme_White_getInstance(), Theme_HalfBlack_getInstance(), Theme_Green_getInstance(), Theme_Yellow_getInstance(), Theme_Red_getInstance(), Theme_Purple_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'Secondary':
        return Theme_Secondary_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      case 'Gray':
        return Theme_Gray_getInstance();
      case 'DarkGray':
        return Theme_DarkGray_getInstance();
      case 'HalfWhite':
        return Theme_HalfWhite_getInstance();
      case 'White':
        return Theme_White_getInstance();
      case 'HalfBlack':
        return Theme_HalfBlack_getInstance();
      case 'Green':
        return Theme_Green_getInstance();
      case 'Yellow':
        return Theme_Yellow_getInstance();
      case 'Red':
        return Theme_Red_getInstance();
      case 'Purple':
        return Theme_Purple_getInstance();
      default:
        Theme_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
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
  var $ENTRIES_1;
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
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
  function Theme_Red_getInstance() {
    Theme_initEntries();
    return Theme_Red_instance;
  }
  function Theme_Purple_getInstance() {
    Theme_initEntries();
    return Theme_Purple_instance;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.User', this, 3);
    tmp0_serialDesc.addElement_ifop3j_k$('_id', true);
    tmp0_serialDesc.addElement_ifop3j_k$('username', true);
    tmp0_serialDesc.addElement_ifop3j_k$('password', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_1).deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeStringElement_4is7ib_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_e64gd4_k$(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).serialize_gcgun3_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 1) ? true : !(value.username_1 === '')) {
      tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 1, value.username_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 2) ? true : !(value.password_1 === '')) {
      tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 2, value.password_1);
    }
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_gcgun3_k$(encoder, value instanceof User ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_1().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    if (0 === (seen1 & 2))
      $this.username_1 = '';
    else
      $this.username_1 = username;
    if (0 === (seen1 & 4))
      $this.password_1 = '';
    else
      $this.password_1 = password;
    $this.$stable_1 = 0;
    return $this;
  }
  function User_init_$Create$(seen1, id, username, password, serializationConstructorMarker) {
    return User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function get_$stableprop_3() {
    return 0;
  }
  function User(id, username, password) {
    Companion_getInstance_14();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this.id_1 = id;
    this.username_1 = username;
    this.password_1 = password;
    this.$stable_1 = 0;
  }
  protoOf(User).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(User).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(User).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(User).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(User).component3_7eebsa_k$ = function () {
    return this.password_1;
  };
  protoOf(User).copy_2aqvua_k$ = function (id, username, password) {
    return new User(id, username, password);
  };
  protoOf(User).copy$default_o9lv3q_k$ = function (id, username, password, $super) {
    id = id === VOID ? this.id_1 : id;
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_2aqvua_k$(id, username, password) : $super.copy_2aqvua_k$.call(this, id, username, password);
  };
  protoOf(User).toString = function () {
    return 'User(id=' + this.id_1 + ', username=' + this.username_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function get_$stableprop_4() {
    return 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.addElement_ifop3j_k$('_id', true);
    tmp0_serialDesc.addElement_ifop3j_k$('username', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_2).deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_e64gd4_k$(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).serialize_2m4syq_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 1) ? true : !(value.username_1 === '')) {
      tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 1, value.username_1);
    }
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_2m4syq_k$(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_2().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    if (0 === (seen1 & 2))
      $this.username_1 = '';
    else
      $this.username_1 = username;
    $this.$stable_1 = 0;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen1, id, username, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function get_$stableprop_5() {
    return 0;
  }
  function UserWithoutPassword(id, username) {
    Companion_getInstance_15();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    this.id_1 = id;
    this.username_1 = username;
    this.$stable_1 = 0;
  }
  protoOf(UserWithoutPassword).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).copy_jxa1ir_k$ = function (id, username) {
    return new UserWithoutPassword(id, username);
  };
  protoOf(UserWithoutPassword).copy$default_djhouv_k$ = function (id, username, $super) {
    id = id === VOID ? this.id_1 : id;
    username = username === VOID ? this.username_1 : username;
    return $super === VOID ? this.copy_jxa1ir_k$(id, username) : $super.copy_jxa1ir_k$.call(this, id, username);
  };
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.id_1 + ', username=' + this.username_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    return true;
  };
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
  function AdminHome() {
    AdminHome_instance = this;
    Screen.call(this, '/admin/');
    this.$stable_2 = 0;
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
    this.$stable_2 = 0;
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
    this.$stable_2 = 0;
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
    this.$stable_2 = 0;
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
  function get_$stableprop_10() {
    return 0;
  }
  function Screen(route) {
    this.route_1 = route;
    this.$stable_1 = 0;
  }
  protoOf(Screen).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(524001773);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(524001773, $changed, -1, 'com.example.blogmultiplatform.pages.HomePage$composable (Index.kt:7)');
      }
      println('Hello World!');
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreatePage() {
    illegalDecoyCallException('CreatePage');
  }
  function CreateScreen() {
    illegalDecoyCallException('CreateScreen');
  }
  function CategoryDropDown(selectedCategory, onCategorySelected) {
    illegalDecoyCallException('CategoryDropDown');
  }
  function ThumbnailUploader(thumbnail, thumbnailInputDisabled, onThumbnailSelect) {
    illegalDecoyCallException('ThumbnailUploader');
  }
  function EditorControls(breakpoint, editorVisibility, onEditorVisibilityChanged) {
    illegalDecoyCallException('EditorControls');
  }
  function EditorKeyView(key) {
    illegalDecoyCallException('EditorKeyView');
  }
  function Editor(editorVisibility) {
    illegalDecoyCallException('Editor');
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1358622140, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-1.<anonymous> (Create.kt:85)');
      }
      CreateScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1415828648, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-2.<anonymous> (Create.kt:310)');
      }
      SpanText$composable('Create', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1486966214, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-3.<anonymous> (Create.kt:457)');
      }
      var tmp0_modifier = Companion_getInstance_1();
      SpanText$composable('Upload', tmp0_modifier, null, null, $composer_0, 54, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-907956818, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-4.<anonymous> (Create.kt:484)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject = values_0();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-4.<anonymous>.<anonymous>' call
        EditorKeyView$composable(element, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(50393527, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-5.<anonymous> (Create.kt:517)');
      }
      var tmp0_modifier = fontWeight(fontSize(fontFamily(Companion_getInstance_1(), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(14)), Companion_getInstance_6().get_Medium_1fiba6_k$());
      SpanText$composable('Preview', tmp0_modifier, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_6$lambda_igln85($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2081218814, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-6.<anonymous> (Create.kt:615)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CreateKt() {
    ComposableSingletons$CreateKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1358622140, false, ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1415828648, false, ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-1486966214, false, ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-907956818, false, ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(50393527, false, ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-2081218814, false, ComposableSingletons$CreateKt$lambda_6$lambda_igln85));
  }
  protoOf(ComposableSingletons$CreateKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CreateKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$CreateKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$CreateKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$CreateKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$CreateKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$CreateKt_instance;
  function ComposableSingletons$CreateKt_getInstance() {
    if (ComposableSingletons$CreateKt_instance == null)
      new ComposableSingletons$CreateKt();
    return ComposableSingletons$CreateKt_instance;
  }
  function CreatePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(805766537);
    sourceInformation($composer_0, 'C(CreatePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(805766537, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreatePage$composable (Create.kt:83)');
      }
      isUserLoggedIn$composable(ComposableSingletons$CreateKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CreatePage$composable$lambda($changed));
    }
  }
  function CreateScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1173689254);
    sourceInformation($composer_0, 'C(CreateScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1173689254, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable (Create.kt:90)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var popularSwitch$delegate = tmp0;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_0 = mutableStateOf(false);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var mainSwitch$delegate = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_1 = mutableStateOf(false);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var sponsoredSwitch$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_2 = mutableStateOf(true);
        $composer_4.updateRememberedValue_l1colo_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      var thumbnailInputDisabled$delegate = tmp0_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_5.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_3 = mutableStateOf(true);
        $composer_5.updateRememberedValue_l1colo_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp0_let_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_3 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_5.endReplaceableGroup_er37p7_k$();
      var editorVisibility$delegate = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_0;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp0_let_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_4 = mutableStateOf(Category_Programming_getInstance());
        $composer_6.updateRememberedValue_l1colo_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = tmp0_let_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_4 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
      var selectedCategory$delegate = tmp0_4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_0;
      $composer_7.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = $composer_7.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (false ? true : tmp0_let_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_5 = mutableStateOf('');
        $composer_7.updateRememberedValue_l1colo_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = tmp0_let_5;
      }
      var tmp_12 = tmp_11;
      var tmp0_5 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      $composer_7.endReplaceableGroup_er37p7_k$();
      var fileName$delegate = tmp0_5;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
      var tmp_13 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_13, 1070748091, true, CreateScreen$composable$lambda_13(breakpoint, selectedCategory$delegate, fileName$delegate, editorVisibility$delegate, popularSwitch$delegate, mainSwitch$delegate, sponsoredSwitch$delegate, thumbnailInputDisabled$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_8.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_6 = $composer_8.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_14;
      if (tmp1_cache ? true : tmp0_let_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_8.updateRememberedValue_l1colo_k$(value_6);
        tmp_14 = value_6;
      } else {
        tmp_14 = tmp0_let_6;
      }
      var tmp_15 = tmp_14;
      var tmp0_6 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
      $composer_8.endReplaceableGroup_er37p7_k$();
      AdminPageLayout$composable(tmp0_6, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CreateScreen$composable$lambda_14($changed));
    }
  }
  function CategoryDropDown$composable(selectedCategory, onCategorySelected, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(84150311);
    sourceInformation($composer_0, 'C(CategoryDropDown$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(selectedCategory) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onCategorySelected) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(84150311, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable (Create.kt:323)');
      }
      var tmp = cursor(backgroundColor(fillMaxWidth(height(classNames(margin_1(Companion_getInstance_1(), get_px(12)), ['dropdown']), get_px(54))), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_3().get_Pointer_m64vg4_k$());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>' call
        var value = CategoryDropDown$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_2 = attrsModifier(tmp, tmp0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 589912744, true, CategoryDropDown$composable$lambda_0(selectedCategory, $dirty, onCategorySelected));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_2, null, null, tmp0_0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(CategoryDropDown$composable$lambda_1(selectedCategory, onCategorySelected, $changed));
    }
  }
  function ThumbnailUploader$composable(thumbnail, thumbnailInputDisabled, onThumbnailSelect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1033023733);
    sourceInformation($composer_0, 'C(ThumbnailUploader$composable)P(1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(thumbnail) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(thumbnailInputDisabled) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onThumbnailSelect) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1033023733, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable (Create.kt:387)');
      }
      var tmp = height(margin(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(20)), get_px(54));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1039250688, true, ThumbnailUploader$composable$lambda(thumbnailInputDisabled, $dirty, thumbnail, onThumbnailSelect));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Row$composable(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ThumbnailUploader$composable$lambda_0(thumbnail, thumbnailInputDisabled, onThumbnailSelect, $changed));
    }
  }
  function EditorControls$composable(breakpoint, editorVisibility, onEditorVisibilityChanged, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1573916397);
    sourceInformation($composer_0, 'C(EditorControls$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(editorVisibility) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onEditorVisibilityChanged) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1573916397, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable (Create.kt:470)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1865990914, true, EditorControls$composable$lambda(breakpoint, editorVisibility, $dirty, onEditorVisibilityChanged));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(EditorControls$composable$lambda_0(breakpoint, editorVisibility, onEditorVisibilityChanged, $changed));
    }
  }
  function EditorKeyView$composable(key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2048189123);
    sourceInformation($composer_0, 'C(EditorKeyView$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(key) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2048189123, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable (Create.kt:531)');
      }
      var tmp = cursor(borderRadius(padding(fillMaxHeight(toModifier$composable(get_EditorKeyStyle(), [], $composer_0, 64)), VOID, get_px(12)), get_px(4)), Companion_getInstance_3().get_Pointer_m64vg4_k$());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>' call
        var value = EditorKeyView$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_2 = onClick(tmp, tmp0);
      var tmp_3 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -483804699, true, EditorKeyView$composable$lambda_0(key));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_2, tmp_3, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(EditorKeyView$composable$lambda_1(key, $changed));
    }
  }
  function Editor$composable(editorVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1599106079);
    sourceInformation($composer_0, 'C(Editor$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(editorVisibility) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1599106079, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable (Create.kt:551)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -194323487, true, Editor$composable$lambda(editorVisibility));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_47(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Editor$composable$lambda_0(editorVisibility, $changed));
    }
  }
  function CreateScreen$composable$lambda($popularSwitch$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('popularSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $popularSwitch$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_0($popularSwitch$delegate, value) {
    getLocalDelegateReference('popularSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $popularSwitch$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_1($mainSwitch$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mainSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mainSwitch$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_2($mainSwitch$delegate, value) {
    getLocalDelegateReference('mainSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mainSwitch$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_3($sponsoredSwitch$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('sponsoredSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sponsoredSwitch$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_4($sponsoredSwitch$delegate, value) {
    getLocalDelegateReference('sponsoredSwitch', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sponsoredSwitch$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_5($thumbnailInputDisabled$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('thumbnailInputDisabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $thumbnailInputDisabled$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_6($thumbnailInputDisabled$delegate, value) {
    getLocalDelegateReference('thumbnailInputDisabled', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $thumbnailInputDisabled$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_7($editorVisibility$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('editorVisibility', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $editorVisibility$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_8($editorVisibility$delegate, value) {
    getLocalDelegateReference('editorVisibility', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $editorVisibility$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_9($selectedCategory$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedCategory', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedCategory$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_10($selectedCategory$delegate, value) {
    getLocalDelegateReference('selectedCategory', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedCategory$delegate.set_value_rnwamw_k$(value);
  }
  function CreateScreen$composable$lambda_11($fileName$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('fileName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $fileName$delegate.get_value_j01efc_k$();
  }
  function CreateScreen$composable$lambda_12($fileName$delegate, value) {
    getLocalDelegateReference('fileName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $fileName$delegate.set_value_rnwamw_k$(value);
  }
  function CreatePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      CreatePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($popularSwitch$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($popularSwitch$delegate, it);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($popularSwitch$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-569429006, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:126)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($popularSwitch$delegate);
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($popularSwitch$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($popularSwitch$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp3_modifier = color(fontFamily(fontSize(Companion_getInstance_1(), get_px(14)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
        SpanText$composable('Popular', tmp3_modifier, null, null, $composer_0, 6, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($mainSwitch$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_2($mainSwitch$delegate, it);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($mainSwitch$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-146937893, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:151)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda_1($mainSwitch$delegate);
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($mainSwitch$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($mainSwitch$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp3_modifier = color(fontFamily(fontSize(Companion_getInstance_1(), get_px(14)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
        SpanText$composable('Main', tmp3_modifier, null, null, $composer_0, 6, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($sponsoredSwitch$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_4($sponsoredSwitch$delegate, it);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($sponsoredSwitch$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1054203450, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:171)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda_3($sponsoredSwitch$delegate);
        var tmp2_size = LG_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($sponsoredSwitch$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($sponsoredSwitch$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp3_modifier = color(fontFamily(fontSize(Companion_getInstance_1(), get_px(14)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
        SpanText$composable('sponsored', tmp3_modifier, null, null, $composer_0, 6, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(833826645, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:118)');
        }
        var tmp_0 = margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(0) : get_px(24), $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0));
        var tmp_1 = CenterVertically_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -569429006, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($popularSwitch$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Row$composable(tmp_0, null, tmp_1, null, tmp$ret$6, $composer_0, 24960, 10);
        var tmp_5 = margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(0) : get_px(24), $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0));
        var tmp_6 = CenterVertically_getInstance();
        var tmp$ret$13;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$12;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -146937893, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($mainSwitch$delegate));
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = ComposableLambda$invoke$ref_30(dispatchReceiver_0);
          var value_0 = tmp$ret$7;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_8;
        tmp$ret$9 = tmp$ret$8;
        var tmp_9 = tmp$ret$9;
        tmp$ret$10 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.endReplaceableGroup_er37p7_k$();
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
        var dispatchReceiver_1 = composableLambda(tmp_11, 1054203450, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($sponsoredSwitch$delegate));
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $composer_0;
        var $composer_3 = tmp0_remember$composable_1;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$14;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$14 = ComposableLambda$invoke$ref_31(dispatchReceiver_1);
          var value_1 = tmp$ret$14;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = tmp0_let_1;
        }
        tmp$ret$15 = tmp_12;
        tmp$ret$16 = tmp$ret$15;
        var tmp_13 = tmp$ret$16;
        tmp$ret$17 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_3.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('placeholder', 'Title');
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_1($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('placeholder', 'SubTitle');
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_2($selectedCategory$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_10($selectedCategory$delegate, it);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($thumbnailInputDisabled$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_6($thumbnailInputDisabled$delegate, !it);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_3($thumbnailInputDisabled$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520315333, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:255)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = !CreateScreen$composable$lambda_5($thumbnailInputDisabled$delegate);
        var tmp2_size = MD_getInstance();
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($thumbnailInputDisabled$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($thumbnailInputDisabled$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        Switch$composable(tmp1_checked, tmp_2, tmp0_modifier, null, false, tmp2_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp3_modifier = color(fontFamily(fontSize(Companion_getInstance_1(), get_px(14)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
        SpanText$composable('Paste an Image URL instead', tmp3_modifier, null, null, $composer_0, 6, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_4($fileName$delegate) {
    return function (filename, file) {
      CreateScreen$composable$lambda_12($fileName$delegate, filename);
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_5($editorVisibility$delegate) {
    return function () {
      CreateScreen$composable$lambda_8($editorVisibility$delegate, !CreateScreen$composable$lambda_7($editorVisibility$delegate));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_6(it) {
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda($selectedCategory$delegate, $fileName$delegate, $breakpoint, $editorVisibility$delegate, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate, $thumbnailInputDisabled$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-231614434, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:115)');
        }
        var tmp_0 = numColumns(1, 3);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 833826645, true, CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_32(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        SimpleGrid$composable(tmp_0, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
        var tmp_4 = Text_getInstance();
        var tmp_5 = borderRadius(backgroundColor(padding(margin_1(height(fillMaxWidth(Companion_getInstance_1()), get_px(54)), get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4));
        var tmp_6 = get_px(0);
        var tmp$ret$10;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_7();
        var tmp$ret$9;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = 'none';
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp_7 = border(tmp_5, tmp_6, tmp$ret$10, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_8 = get_px(0);
        var tmp$ret$14;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp1_get_None_ju0z58 = Companion_getInstance_7();
        var tmp$ret$13;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = 'none';
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        var tmp_9 = fontSize(fontFamily(outline(tmp_7, tmp_8, tmp$ret$14, Colors_getInstance().get_Transparent_cxh4g9_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$15;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$15 = CreateScreen$composable$lambda$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$15;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_10 = value_0;
        } else {
          tmp_10 = tmp0_let_0;
        }
        tmp$ret$16 = tmp_10;
        tmp$ret$17 = tmp$ret$16;
        var tmp_11 = tmp$ret$17;
        tmp$ret$18 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_0 = tmp$ret$18;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$19 = tmp0_0;
        Input$composable(tmp_4, toAttrs(tmp_9, tmp$ret$19), $composer_0, 6);
        var tmp_12 = Text_getInstance();
        var tmp_13 = borderRadius(backgroundColor(padding(margin(height(fillMaxWidth(Companion_getInstance_1()), get_px(54)), VOID, VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4));
        var tmp_14 = get_px(0);
        var tmp$ret$23;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp3_get_None_qc0wq6 = Companion_getInstance_7();
        var tmp$ret$22;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$21;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$20;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$20 = 'none';
        tmp$ret$21 = tmp$ret$20;
        tmp$ret$22 = tmp$ret$21;
        tmp$ret$23 = tmp$ret$22;
        var tmp_15 = border(tmp_13, tmp_14, tmp$ret$23, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_16 = get_px(0);
        var tmp$ret$27;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp4_get_None_tl0vin = Companion_getInstance_7();
        var tmp$ret$26;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$25;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$24;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$24 = 'none';
        tmp$ret$25 = tmp$ret$24;
        tmp$ret$26 = tmp$ret$25;
        tmp$ret$27 = tmp$ret$26;
        var tmp_17 = fontSize(fontFamily(outline(tmp_15, tmp_16, tmp$ret$27, Colors_getInstance().get_Transparent_cxh4g9_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp$ret$32;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_3 = tmp5_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$30;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$29;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_18;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$28;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$28 = CreateScreen$composable$lambda$lambda$lambda$lambda_1;
          var value_1 = tmp$ret$28;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_18 = value_1;
        } else {
          tmp_18 = tmp0_let_1;
        }
        tmp$ret$29 = tmp_18;
        tmp$ret$30 = tmp$ret$29;
        var tmp_19 = tmp$ret$30;
        tmp$ret$31 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
        var tmp0_1 = tmp$ret$31;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$32 = tmp0_1;
        Input$composable(tmp_12, toAttrs(tmp_17, tmp$ret$32), $composer_0, 6);
        var tmp_20 = CreateScreen$composable$lambda_9($selectedCategory$delegate);
        var tmp$ret$37;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_4 = tmp6_remember$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$36;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_0 = $composer_4.changed_ga7h3f_k$($selectedCategory$delegate);
        var tmp$ret$35;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$34;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_21;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$33;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$33 = CreateScreen$composable$lambda$lambda$lambda$lambda_2($selectedCategory$delegate);
          var value_2 = tmp$ret$33;
          tmp0_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_21 = value_2;
        } else {
          tmp_21 = tmp0_let_2;
        }
        tmp$ret$34 = tmp_21;
        tmp$ret$35 = tmp$ret$34;
        var tmp_22 = tmp$ret$35;
        tmp$ret$36 = (tmp_22 == null ? true : isObject(tmp_22)) ? tmp_22 : THROW_CCE();
        var tmp0_2 = tmp$ret$36;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$37 = tmp0_2;
        CategoryDropDown$composable(tmp_20, tmp$ret$37, $composer_0, 0);
        var tmp0_modifier = margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(12));
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Start_getInstance();
        var tmp$ret$44;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$43;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_23 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_23, -1520315333, true, CreateScreen$composable$lambda$lambda$lambda$lambda_3($thumbnailInputDisabled$delegate));
        var tmp$ret$42;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_5 = tmp0_remember$composable_0;
        $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$41;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_3 = $composer_5;
        var tmp1_cache_1 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_0);
        var tmp$ret$40;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp0_cache_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$39;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_24;
        if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$38;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$38 = ComposableLambda$invoke$ref_33(dispatchReceiver_0);
          var value_3 = tmp$ret$38;
          tmp0_cache_3.updateRememberedValue_l1colo_k$(value_3);
          tmp_24 = value_3;
        } else {
          tmp_24 = tmp0_let_3;
        }
        tmp$ret$39 = tmp_24;
        tmp$ret$40 = tmp$ret$39;
        var tmp_25 = tmp$ret$40;
        tmp$ret$41 = (tmp_25 == null ? true : isObject(tmp_25)) ? tmp_25 : THROW_CCE();
        var tmp0_3 = tmp$ret$41;
        $composer_5.endReplaceableGroup_er37p7_k$();
        tmp$ret$42 = tmp0_3;
        tmp$ret$43 = tmp$ret$42;
        tmp$ret$44 = tmp$ret$43;
        Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp$ret$44, $composer_0, 25008, 8);
        var tmp_26 = CreateScreen$composable$lambda_11($fileName$delegate);
        var tmp_27 = CreateScreen$composable$lambda_5($thumbnailInputDisabled$delegate);
        var tmp$ret$49;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp7_remember$composable = $composer_0;
        var $composer_6 = tmp7_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$48;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_4 = $composer_6;
        var tmp1_cache_2 = $composer_6.changed_ga7h3f_k$($fileName$delegate);
        var tmp$ret$47;
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = tmp0_cache_4.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$46;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_28;
        if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$45;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$45 = CreateScreen$composable$lambda$lambda$lambda$lambda_4($fileName$delegate);
          var value_4 = tmp$ret$45;
          tmp0_cache_4.updateRememberedValue_l1colo_k$(value_4);
          tmp_28 = value_4;
        } else {
          tmp_28 = tmp0_let_4;
        }
        tmp$ret$46 = tmp_28;
        tmp$ret$47 = tmp$ret$46;
        var tmp_29 = tmp$ret$47;
        tmp$ret$48 = (tmp_29 == null ? true : isObject(tmp_29)) ? tmp_29 : THROW_CCE();
        var tmp0_4 = tmp$ret$48;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$49 = tmp0_4;
        ThumbnailUploader$composable(tmp_26, tmp_27, tmp$ret$49, $composer_0, 0);
        var tmp_30 = CreateScreen$composable$lambda_7($editorVisibility$delegate);
        var tmp$ret$54;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp8_remember$composable = $composer_0;
        var $composer_7 = tmp8_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$53;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_5 = $composer_7;
        var tmp1_cache_3 = $composer_7.changed_ga7h3f_k$($editorVisibility$delegate);
        var tmp$ret$52;
        // Inline function 'kotlin.let' call
        var tmp0_let_5 = tmp0_cache_5.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$51;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_31;
        if (tmp1_cache_3 ? true : tmp0_let_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$50;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$50 = CreateScreen$composable$lambda$lambda$lambda$lambda_5($editorVisibility$delegate);
          var value_5 = tmp$ret$50;
          tmp0_cache_5.updateRememberedValue_l1colo_k$(value_5);
          tmp_31 = value_5;
        } else {
          tmp_31 = tmp0_let_5;
        }
        tmp$ret$51 = tmp_31;
        tmp$ret$52 = tmp$ret$51;
        var tmp_32 = tmp$ret$52;
        tmp$ret$53 = (tmp_32 == null ? true : isObject(tmp_32)) ? tmp_32 : THROW_CCE();
        var tmp0_5 = tmp$ret$53;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$54 = tmp0_5;
        EditorControls$composable($breakpoint, tmp_30, tmp$ret$54, $composer_0, 0);
        Editor$composable(CreateScreen$composable$lambda_7($editorVisibility$delegate), $composer_0, 0);
        var tmp_33 = Companion_getInstance_1();
        var tmp$ret$59;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp9_remember$composable = $composer_0;
        var $composer_8 = tmp9_remember$composable;
        $composer_8.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_8, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$58;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_6 = $composer_8;
        var tmp$ret$57;
        // Inline function 'kotlin.let' call
        var tmp0_let_6 = tmp0_cache_6.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$56;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_34;
        if (false ? true : tmp0_let_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$55;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$55 = CreateScreen$composable$lambda$lambda$lambda$lambda_6;
          var value_6 = tmp$ret$55;
          tmp0_cache_6.updateRememberedValue_l1colo_k$(value_6);
          tmp_34 = value_6;
        } else {
          tmp_34 = tmp0_let_6;
        }
        tmp$ret$56 = tmp_34;
        tmp$ret$57 = tmp$ret$56;
        var tmp_35 = tmp$ret$57;
        tmp$ret$58 = (tmp_35 == null ? true : isObject(tmp_35)) ? tmp_35 : THROW_CCE();
        var tmp0_6 = tmp$ret$58;
        $composer_8.endReplaceableGroup_er37p7_k$();
        tmp$ret$59 = tmp0_6;
        var tmp_36 = color(backgroundColor(margin(height(fillMaxWidth(onClick(tmp_33, tmp$ret$59)), get_px(54)), get_px(24)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$());
        var tmp_37 = get_px(0);
        var tmp$ret$63;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp10_get_None_2rc7iw = Companion_getInstance_7();
        var tmp$ret$62;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$61;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$60;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$60 = 'none';
        tmp$ret$61 = tmp$ret$60;
        tmp$ret$62 = tmp$ret$61;
        tmp$ret$63 = tmp$ret$62;
        var tmp_38 = border(tmp_36, tmp_37, tmp$ret$63, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_39 = get_px(0);
        var tmp$ret$67;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp11_get_None_hnr9l = Companion_getInstance_7();
        var tmp$ret$66;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$65;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$64;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$64 = 'none';
        tmp$ret$65 = tmp$ret$64;
        tmp$ret$66 = tmp$ret$65;
        tmp$ret$67 = tmp$ret$66;
        Button$composable(toAttrs(borderRadius(fontSize(fontFamily(outline(tmp_38, tmp_39, tmp$ret$67, Colors_getInstance().get_Transparent_cxh4g9_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16)), get_px(4))), ComposableSingletons$CreateKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        var tmp_40;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_40 = Unit_getInstance();
        }
        tmp = tmp_40;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda($selectedCategory$delegate, $fileName$delegate, $breakpoint, $editorVisibility$delegate, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate, $thumbnailInputDisabled$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-541971211, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous> (Create.kt:108)');
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
        var dispatchReceiver = composableLambda(tmp_3, -231614434, true, CreateScreen$composable$lambda$lambda$lambda($selectedCategory$delegate, $fileName$delegate, $breakpoint, $editorVisibility$delegate, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate, $thumbnailInputDisabled$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda_13($breakpoint, $selectedCategory$delegate, $fileName$delegate, $editorVisibility$delegate, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate, $thumbnailInputDisabled$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1070748091, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous> (Create.kt:101)');
        }
        var tmp_0 = padding_1(margin_1(fillMaxSize(Companion_getInstance_1()), get_px(50)), VOID, VOID, VOID, $breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(Constant_getInstance().get_SIDE_PANEL_WIDTH_mwcp64_k$()) : get_px(0));
        var tmp_1 = TopCenter_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -541971211, true, CreateScreen$composable$lambda$lambda($selectedCategory$delegate, $fileName$delegate, $breakpoint, $editorVisibility$delegate, $popularSwitch$delegate, $mainSwitch$delegate, $sponsoredSwitch$delegate, $thumbnailInputDisabled$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Box$composable(tmp_0, tmp_1, null, tmp$ret$6, $composer_0, 3120, 4);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function CreateScreen$composable$lambda_14($$changed) {
    return function ($composer, $force) {
      CreateScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CategoryDropDown$composable$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_z3nk29_k$('data-bs-toggle', 'dropdown');
    return Unit_getInstance();
  }
  function CategoryDropDown$composable$lambda$lambda($selectedCategory) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1842094037, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:343)');
        }
        var tmp0_modifier = fontSize(fontFamily(fillMaxWidth(Companion_getInstance_1()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp1_text = $selectedCategory.get_name_woqyms_k$();
        SpanText$composable(tmp1_text, tmp0_modifier, null, null, $composer_0, 0, 12);
        var tmp_0 = classNames(Companion_getInstance_1(), ['dropdown-toggle']);
        Box$composable(tmp_0, null, null, null, $composer_0, 0, 14);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(433817369, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:373)');
        }
        Text$composable($element.get_name_woqyms_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda$lambda$lambda($$dirty, $onCategorySelected, $element) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(684747847, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:364)');
        }
        var tmp_0 = fontSize(fontFamily(color(classNames(Companion_getInstance_1(), ['dropdown-item']), Colors_getInstance().get_Black_i7mvue_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.changed_ga7h3f_k$($onCategorySelected) | $composer_1.changed_ga7h3f_k$($element));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = CategoryDropDown$composable$lambda$lambda$lambda$lambda($onCategorySelected, $element);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_3 = toAttrs(onClick(tmp_0, tmp$ret$4));
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, 433817369, true, CategoryDropDown$composable$lambda$lambda$lambda$lambda_0($element));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_38(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_6 = tmp$ret$7;
        tmp$ret$8 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        A$composable(null, tmp_3, tmp$ret$11, $composer_0, 384, 1);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda$lambda_0($$dirty, $onCategorySelected) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(12635283, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:362)');
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
          $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = ComposableLambda$invoke$ref_39(dispatchReceiver);
            var value = tmp$ret$0;
            tmp0_cache.updateRememberedValue_l1colo_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryDropDown$composable$lambda_0($selectedCategory, $$dirty, $onCategorySelected) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(589912744, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous> (Create.kt:336)');
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_37(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = ComposableLambda$invoke$ref_40(dispatchReceiver_0);
          var value_0 = tmp$ret$7;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_5;
        tmp$ret$9 = tmp$ret$8;
        var tmp_6 = tmp$ret$9;
        tmp$ret$10 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      $this$toAttrs.attr_z3nk29_k$('placeholder', 'Thumbnail');
      $this$toAttrs.attr_z3nk29_k$('value', $thumbnail);
      return Unit_getInstance();
    };
  }
  function ThumbnailUploader$composable$lambda$lambda$lambda($onThumbnailSelect) {
    return function ($this$loadDataUrlFromDisk, it) {
      $onThumbnailSelect($this$loadDataUrlFromDisk.get_filename_r2po7k_k$(), it);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1039250688, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous> (Create.kt:394)');
        }
        var tmp_0 = Text_getInstance();
        var tmp_1 = borderRadius(backgroundColor(padding(margin_0(fillMaxSize(Companion_getInstance_1()), VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4));
        var tmp_2 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_7();
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
        var tmp_3 = border(tmp_1, tmp_2, tmp$ret$3, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_4 = get_px(0);
        var tmp$ret$7;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp1_get_None_ju0z58 = Companion_getInstance_7();
        var tmp$ret$6;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = 'none';
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = thenIf(fontSize(fontFamily(outline(tmp_3, tmp_4, tmp$ret$7, Colors_getInstance().get_Transparent_cxh4g9_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16)), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()));
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var tmp3_remember$composable = 14 & $$dirty;
        var $composer_1 = tmp2_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($thumbnail);
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$8;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = ThumbnailUploader$composable$lambda$lambda($thumbnail);
          var value = tmp$ret$8;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = tmp0_let;
        }
        tmp$ret$9 = tmp_6;
        tmp$ret$10 = tmp$ret$9;
        var tmp_7 = tmp$ret$10;
        tmp$ret$11 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0 = tmp$ret$11;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$12 = tmp0;
        Input$composable(tmp_0, toAttrs(tmp_5, tmp$ret$12), $composer_0, 6);
        var tmp_8 = Companion_getInstance_1();
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var tmp5_remember$composable = 14 & $$dirty >> 6;
        var $composer_2 = tmp4_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$($onThumbnailSelect);
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$13;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$13 = ThumbnailUploader$composable$lambda$lambda_0($onThumbnailSelect);
          var value_0 = tmp$ret$13;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = tmp0_let_0;
        }
        tmp$ret$14 = tmp_9;
        tmp$ret$15 = tmp$ret$14;
        var tmp_10 = tmp$ret$15;
        tmp$ret$16 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_0 = tmp$ret$16;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$17 = tmp0_0;
        var tmp_11 = borderRadius(color(backgroundColor(padding(fillMaxHeight(onClick(tmp_8, tmp$ret$17)), VOID, get_px(24)), !$thumbnailInputDisabled ? Theme_Gray_getInstance().get_rgb_18ix0c_k$() : Theme_Primary_getInstance().get_rgb_18ix0c_k$()), !$thumbnailInputDisabled ? Theme_DarkGray_getInstance().get_rgb_18ix0c_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_px(4));
        var tmp_12 = get_px(0);
        var tmp$ret$21;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp6_get_None_yy38vj = Companion_getInstance_7();
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
        var tmp_13 = border(tmp_11, tmp_12, tmp$ret$21, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_14 = get_px(0);
        var tmp$ret$25;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp7_get_None_vp3a32 = Companion_getInstance_7();
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
        Button$composable(toAttrs(thenIf(fontWeight(fontSize(fontFamily(outline(tmp_13, tmp_14, tmp$ret$25, Colors_getInstance().get_Transparent_cxh4g9_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(14)), Companion_getInstance_6().get_Medium_1fiba6_k$()), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()))), ComposableSingletons$CreateKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1518365903, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:491)');
        }
        var tmp_0 = color(backgroundColor(borderRadius(padding(margin_1(thenIf(height(Companion_getInstance_1(), get_px(54)), $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0, fillMaxWidth(Companion_getInstance_1())), $breakpoint.compareTo_6thzay_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0)), VOID, get_px(24)), get_px(4)), $editorVisibility ? Theme_LightGray_getInstance().get_rgb_18ix0c_k$() : Theme_Primary_getInstance().get_rgb_18ix0c_k$()), $editorVisibility ? Theme_DarkGray_getInstance().get_rgb_18ix0c_k$() : Colors_getInstance().get_White_ij46ow_k$());
        var tmp_1 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_7();
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
        var tmp_2 = border(tmp_0, tmp_1, tmp$ret$3, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_3 = get_px(0);
        var tmp$ret$7;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp1_get_None_ju0z58 = Companion_getInstance_7();
        var tmp$ret$6;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = 'none';
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_4 = outline(tmp_2, tmp_3, tmp$ret$7, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var tmp3_remember$composable = 14 & $$dirty >> 6;
        var $composer_1 = tmp2_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($onEditorVisibilityChanged);
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$8;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = EditorControls$composable$lambda$lambda$lambda$lambda($onEditorVisibilityChanged);
          var value = tmp$ret$8;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$9 = tmp_5;
        tmp$ret$10 = tmp$ret$9;
        var tmp_6 = tmp$ret$10;
        tmp$ret$11 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0 = tmp$ret$11;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$12 = tmp0;
        Button$composable(toAttrs(onClick(tmp_4, tmp$ret$12)), ComposableSingletons$CreateKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(680973227, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous> (Create.kt:478)');
        }
        var tmp_0 = height(borderRadius(backgroundColor(Companion_getInstance_1(), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4)), get_px(54));
        Row$composable(tmp_0, null, null, null, ComposableSingletons$CreateKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 24576, 14);
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function EditorControls$composable$lambda($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1865990914, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous> (Create.kt:474)');
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_44(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-483804699, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorKeyView$composable.<anonymous> (Create.kt:543)');
        }
        var tmp_0 = $key.get_icon_wont8i_k$();
        var tmp_1 = $key.get_name_woqyms_k$() + ' icon';
        Image$composable(tmp_0, tmp_1, null, false, null, $composer_0, 0, 28);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function EditorKeyView$composable$lambda_1($key, $$changed) {
    return function ($composer, $force) {
      EditorKeyView$composable($key, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Editor$composable$lambda$lambda($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('placeholder', 'Type here ...');
    return Unit_getInstance();
  }
  function Editor$composable$lambda($editorVisibility) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-194323487, $changed, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous> (Create.kt:555)');
        }
        var tmp_0 = fontSize(fontFamily(borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(Companion_getInstance_1(), ID_getInstance().get_editor_cs4v3q_k$())), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4)), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp_1 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_7();
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
        var tmp_2 = border(tmp_0, tmp_1, tmp$ret$3, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_3 = get_px(0);
        var tmp$ret$7;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp1_get_None_ju0z58 = Companion_getInstance_7();
        var tmp$ret$6;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = 'none';
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_4 = visibility(resize(outline(tmp_2, tmp_3, tmp$ret$7, Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_8().get_None_wo6tgh_k$()), $editorVisibility ? Companion_getInstance_9().get_Visible_yikvpz_k$() : Companion_getInstance_9().get_Hidden_viqel_k$());
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_1 = tmp2_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$8;
          // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = Editor$composable$lambda$lambda;
          var value = tmp$ret$8;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$9 = tmp_5;
        tmp$ret$10 = tmp$ret$9;
        var tmp_6 = tmp$ret$10;
        tmp$ret$11 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0 = tmp$ret$11;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$12 = tmp0;
        TextArea$composable(null, toAttrs(tmp_4, tmp$ret$12), $composer_0, 0, 1);
        var tmp_7 = borderRadius(backgroundColor(scrollBehavior(overflow(visibility(borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(Companion_getInstance_1(), ID_getInstance().get_editorPreview_kj9y1a_k$())), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4)), $editorVisibility ? Companion_getInstance_9().get_Hidden_viqel_k$() : Companion_getInstance_9().get_Visible_yikvpz_k$()), Companion_getInstance_4().get_Auto_wnyn88_k$()), Companion_getInstance_5().get_Smooth_4edjo7_k$()), Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), get_px(4));
        var tmp_8 = get_px(0);
        var tmp$ret$16;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp3_get_None_qc0wq6 = Companion_getInstance_7();
        var tmp$ret$15;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = 'none';
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        var tmp_9 = border(tmp_7, tmp_8, tmp$ret$16, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_10 = get_px(0);
        var tmp$ret$20;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp4_get_None_tl0vin = Companion_getInstance_7();
        var tmp$ret$19;
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        var tmp$ret$18;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$17;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$17 = 'none';
        tmp$ret$18 = tmp$ret$17;
        tmp$ret$19 = tmp$ret$18;
        tmp$ret$20 = tmp$ret$19;
        Div$composable(toAttrs(outline(tmp_9, tmp_10, tmp$ret$20, Colors_getInstance().get_Transparent_cxh4g9_k$())), ComposableSingletons$CreateKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 0);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Editor$composable$lambda_0($editorVisibility, $$changed) {
    return function ($composer, $force) {
      Editor$composable($editorVisibility, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage_0() {
    illegalDecoyCallException('HomePage');
  }
  function HomeScreen() {
    illegalDecoyCallException('HomeScreen');
  }
  function HomeContent(randomJoke) {
    illegalDecoyCallException('HomeContent');
  }
  function AddButton() {
    illegalDecoyCallException('AddButton');
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1423056671, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:74)');
      }
      HomeScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1350731261, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:196)');
      }
      FaPlus$composable(color(Companion_getInstance_1(), Theme_White_getInstance().get_rgb_18ix0c_k$()), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(1423056671, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(1350731261, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1728137044);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1728137044, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomePage$composable (Index.kt:72)');
      }
      isUserLoggedIn$composable(ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomePage$composable$lambda_0($changed));
    }
  }
  function HomeScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1338804745);
    sourceInformation($composer_0, 'C(HomeScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1338804745, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable (Index.kt:79)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var randomJoke$delegate = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(randomJoke$delegate);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
        var value_0 = HomeScreen$composable$slambda_0(randomJoke$delegate, null);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      LaunchedEffect$composable(Unit_getInstance(), tmp0_0, $composer_0, 6);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 601869064, true, HomeScreen$composable$lambda_1(randomJoke$delegate));
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
      var tmp_4;
      if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      AdminPageLayout$composable(tmp0_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomeScreen$composable$lambda_2($changed));
    }
  }
  function HomeContent$composable(randomJoke, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2142882194);
    sourceInformation($composer_0, 'C(HomeContent$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(randomJoke) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2142882194, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable (Index.kt:95)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var tmp = padding_1(fillMaxSize(Companion_getInstance_1()), VOID, VOID, VOID, breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(Constant_getInstance().get_SIDE_PANEL_WIDTH_mwcp64_k$()) : get_px(0));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1663990148, true, HomeContent$composable$lambda(randomJoke));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_52(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp, tmp_0, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomeContent$composable$lambda_0(randomJoke, $changed));
    }
  }
  function AddButton$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-808466347);
    sourceInformation($composer_0, 'C(AddButton$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-808466347, $changed, -1, 'com.example.blogmultiplatform.pages.admin.AddButton$composable (Index.kt:163)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var context = rememberPageContext$composable($composer_0, 0);
      var tmp = maxWidth(fillMaxWidth(height(Companion_getInstance_1(), get_vh(100))), get_px(Constant_getInstance().get_PAGE_WIDTH_u0d1fj_k$()));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = position(tmp, 'fixed');
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>' call
        var value = AddButton$composable$lambda;
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_3 = styleModifier(tmp_0, tmp0);
      var tmp_4 = BottomEnd_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 1827640311, true, AddButton$composable$lambda_0(breakpoint, context));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_53(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = tmp0_let_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_3, tmp_4, null, tmp0_0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(AddButton$composable$lambda_1($changed));
    }
  }
  function HomeScreen$composable$lambda($randomJoke$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $randomJoke$delegate.get_value_j01efc_k$();
  }
  function HomeScreen$composable$lambda_0($randomJoke$delegate, value) {
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $randomJoke$delegate.set_value_rnwamw_k$(value);
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
    this.$randomJoke$delegate_1 = $randomJoke$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomeScreen$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomeScreen$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomeScreen$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = fetchRandomJoke(HomeScreen$composable$slambda$lambda(this.$randomJoke$delegate_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(HomeScreen$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomeScreen$composable$slambda(this.$randomJoke$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomeScreen$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomeScreen$composable$slambda_0($randomJoke$delegate, resultContinuation) {
    var i = new HomeScreen$composable$slambda($randomJoke$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomeScreen$composable$lambda_1($randomJoke$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1921040718, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous> (Index.kt:111)');
        }
        $composer_0.startReplaceableGroup_rp6air_k$(457716129);
        if (!($randomJoke.get_id_kntnx8_k$() === -1)) {
          var tmp0_modifier = margin(size(Companion_getInstance_1(), get_px(150)), VOID, VOID, get_px(50));
          var tmp1_src = Image_getInstance().get_laugh_iujmu0_k$();
          Image$composable(tmp1_src, 'laugh image', tmp0_modifier, false, null, $composer_0, 54, 24);
        }
        $composer_0.endReplaceableGroup_er37p7_k$();
        if (contains($randomJoke.get_joke_woop0o_k$(), 'Q:')) {
          $composer_0.startReplaceableGroup_rp6air_k$(457716506);
          var tmp2_modifier = fontWeight(fontSize(fontFamily(color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_10().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(28)), Companion_getInstance_6().get_Bold_wnz5ke_k$());
          var tmp3_text = dropLast(split($randomJoke.get_joke_woop0o_k$(), [':']).get_fkrdnv_k$(1), 1);
          SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
          var tmp4_modifier = fontWeight(fontSize(fontFamily(color(textAlign(fillMaxWidth(Companion_getInstance_1(), get_percent(40)), Companion_getInstance_10().get_Center_3arb0i_k$()), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(20)), Companion_getInstance_6().get_Normal_22avww_k$());
          var tmp5_text = last(split($randomJoke.get_joke_woop0o_k$(), [':']));
          SpanText$composable(tmp5_text, tmp4_modifier, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_0.startReplaceableGroup_rp6air_k$(457717561);
          var tmp6_modifier = fontWeight(fontSize(fontFamily(color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_10().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(28)), Companion_getInstance_6().get_Bold_wnz5ke_k$());
          var tmp7_text = $randomJoke.get_joke_woop0o_k$();
          SpanText$composable(tmp7_text, tmp6_modifier, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceableGroup_er37p7_k$();
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function HomeContent$composable$lambda($randomJoke) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1663990148, $changed, -1, 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous> (Index.kt:104)');
        }
        if (!($randomJoke == null)) {
          $composer_0.startReplaceableGroup_rp6air_k$(872263786);
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
          $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_4;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'com.example.blogmultiplatform.pages.admin.HomeContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = ComposableLambda$invoke$ref_51(dispatchReceiver);
            var value = tmp$ret$0;
            tmp0_cache.updateRememberedValue_l1colo_k$(value);
            tmp_4 = value;
          } else {
            tmp_4 = tmp0_let;
          }
          tmp$ret$1 = tmp_4;
          tmp$ret$2 = tmp$ret$1;
          var tmp_5 = tmp$ret$2;
          tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0;
          tmp$ret$5 = tmp$ret$4;
          tmp$ret$6 = tmp$ret$5;
          Column$composable(tmp_0, tmp_1, tmp_2, null, tmp$ret$6, $composer_0, 25008, 8);
          $composer_0.endReplaceableGroup_er37p7_k$();
        } else {
          $composer_0.startReplaceableGroup_rp6air_k$(872266063);
          LoadingIndicator$composable(null, $composer_0, 0, 1);
          $composer_0.endReplaceableGroup_er37p7_k$();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function HomeContent$composable$lambda_0($randomJoke, $$changed) {
    return function ($composer, $force) {
      HomeContent$composable($randomJoke, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AddButton$composable$lambda($this$styleModifier) {
    $this$styleModifier.property_ze5ozi_k$('pointer-events', 'none');
    return Unit_getInstance();
  }
  function AddButton$composable$lambda$lambda($context) {
    return function (it) {
      $context.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminCreate_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function AddButton$composable$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.property_ze5ozi_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function AddButton$composable$lambda_0($breakpoint, $context) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1827640311, $changed, -1, 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous> (Index.kt:178)');
        }
        var tmp_0 = cursor(borderRadius(size(backgroundColor(margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20), $breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), $breakpoint.compareTo_6thzay_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(80) : get_px(50)), get_px(14)), Companion_getInstance_3().get_Pointer_m64vg4_k$());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($context);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = AddButton$composable$lambda$lambda($context);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_3 = onClick(tmp_0, tmp$ret$4);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.AddButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = AddButton$composable$lambda$lambda_0;
          var value_0 = tmp$ret$5;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        var tmp_6 = styleModifier(tmp_3, tmp$ret$9);
        var tmp_7 = Center_getInstance();
        Box$composable(tmp_6, tmp_7, null, ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3120, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AddButton$composable$lambda_1($$changed) {
    return function ($composer, $force) {
      AddButton$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoginScreen() {
    illegalDecoyCallException('LoginScreen');
  }
  function rememberLoggedIn(remember, user) {
    user = user === VOID ? null : user;
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = remember.toString();
    if (!(user == null)) {
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['userId'] = user.get_id_kntnx8_k$();
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['username'] = user.get_username_ytz5i7_k$();
    }
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1841479681, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$LoginKt.lambda-1.<anonymous> (Login.kt:184)');
      }
      SpanText$composable('Sign in', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginKt() {
    ComposableSingletons$LoginKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1841479681, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
  }
  protoOf(ComposableSingletons$LoginKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LoginKt_instance;
  function ComposableSingletons$LoginKt_getInstance() {
    if (ComposableSingletons$LoginKt_instance == null)
      new ComposableSingletons$LoginKt();
    return ComposableSingletons$LoginKt_instance;
  }
  function LoginScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-97421993);
    sourceInformation($composer_0, 'C(LoginScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-97421993, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable (Login.kt:63)');
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
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>' call
        var value = mutableStateOf(' ');
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var errorText$delegate = tmp0;
      var context = rememberPageContext$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp2_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = tmp2_rememberCoroutineScope$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = LoginScreen$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value_0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var wrapper = tmp0_0;
      var tmp0_1 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
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
      $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_4.updateRememberedValue_l1colo_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_2 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      Box$composable(tmp_3, tmp_4, null, tmp0_2, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(LoginScreen$composable$lambda_3($changed));
    }
  }
  function LoginScreen$composable$lambda($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$composable$lambda_0($errorText$delegate, value) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.set_value_rnwamw_k$(value);
  }
  function LoginScreen$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('placeholder', 'Username');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.attr_z3nk29_k$('placeholder', 'Password');
    return Unit_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation) {
    this.$context_1 = $context;
    this.$errorText$delegate_1 = $errorText$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_0 = this;
            var tmp_1 = document.getElementById(ID_getInstance().get_usernameInputID_7z06va_k$());
            tmp_0.username0__1 = (tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE()).value;
            var tmp_2 = this;
            var tmp_3 = document.getElementById(ID_getInstance().get_passwordInputID_q0okv3_k$());
            tmp_2.password1__1 = (tmp_3 instanceof HTMLInputElement ? tmp_3 : THROW_CCE()).value;
            var tmp_4;
            if (charSequenceLength(this.username0__1) > 0) {
              tmp_4 = charSequenceLength(this.password1__1) > 0;
            } else {
              tmp_4 = false;
            }

            if (tmp_4) {
              this.set_state_a96kl8_k$(2);
              suspendResult = checkUserExistence(new User(VOID, this.username0__1, this.password1__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.$errorText$delegate_1, 'Please fill all inputs');
              this.set_state_a96kl8_k$(1);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$composable$lambda_0(this.$errorText$delegate_1, ' ');
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 2:
            this.user2__1 = suspendResult;
            if (!(this.user2__1 == null)) {
              rememberLoggedIn(true, this.user2__1);
              this.$context_1.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminHome_getInstance().get_route_iy3cio_k$());
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.$errorText$delegate_1, "the user doesn't exist");
              this.set_state_a96kl8_k$(3);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            LoginScreen$composable$lambda_0(this.$errorText$delegate_1, ' ');
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda(this.$context_1, this.$errorText$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LoginScreen$composable$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, resultContinuation) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
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
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-59910919, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous> (Login.kt:80)');
        }
        var tmp0_modifier = width(margin(Companion_getInstance_1(), VOID, VOID, get_px(50)), get_px(100));
        var tmp1_src = Image_getInstance().get_logo_wopywk_k$();
        Image$composable(tmp1_src, 'logo image', tmp0_modifier, false, null, $composer_0, 54, 24);
        var tmp_0 = Text_getInstance();
        var tmp_1 = fontSize(fontFamily(backgroundColor(padding(height(width(margin(id(toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64), ID_getInstance().get_usernameInputID_7z06va_k$()), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(14));
        var tmp_2 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_7();
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
        var tmp_3 = outline(tmp_1, tmp_2, tmp$ret$3, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_1 = tmp1_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$4;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$4 = LoginScreen$composable$lambda$lambda$lambda;
          var value = tmp$ret$4;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$5 = tmp_4;
        tmp$ret$6 = tmp$ret$5;
        var tmp_5 = tmp$ret$6;
        tmp$ret$7 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$7;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$8 = tmp0;
        Input$composable(tmp_0, toAttrs(tmp_3, tmp$ret$8), $composer_0, 6);
        var tmp_6 = Password_getInstance();
        var tmp_7 = fontSize(fontFamily(backgroundColor(padding(height(width(margin(id(toModifier$composable(get_LoginInputStyle(), [], $composer_0, 64), ID_getInstance().get_passwordInputID_q0okv3_k$()), VOID, VOID, get_px(20)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(14));
        var tmp_8 = get_px(0);
        var tmp$ret$12;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp2_get_None_n30xxp = Companion_getInstance_7();
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
        var tmp_9 = outline(tmp_7, tmp_8, tmp$ret$12, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_2 = tmp3_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$13;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$13 = LoginScreen$composable$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$13;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_10 = value_0;
        } else {
          tmp_10 = tmp0_let_0;
        }
        tmp$ret$14 = tmp_10;
        tmp$ret$15 = tmp$ret$14;
        var tmp_11 = tmp$ret$15;
        tmp$ret$16 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_0 = tmp$ret$16;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$17 = tmp0_0;
        Input$composable(tmp_6, toAttrs(tmp_9, tmp$ret$17), $composer_0, 6);
        var tmp_12 = fontSize(fontFamily(fontWeight(borderRadius(color(backgroundColor(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(24)), get_px(350)), get_px(54)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), get_px(4)), Companion_getInstance_6().get_Medium_1fiba6_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), get_px(16));
        var tmp_13 = get_px(0);
        var tmp$ret$21;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp4_get_None_tl0vin = Companion_getInstance_7();
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
        var tmp_14 = border(tmp_12, tmp_13, tmp$ret$21, Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_15 = get_px(0);
        var tmp$ret$25;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp5_get_None_wu0ub4 = Companion_getInstance_7();
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
        var tmp_16 = cursor(outline(tmp_14, tmp_15, tmp$ret$25, Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_3().get_Pointer_m64vg4_k$());
        Button$composable(toAttrs(onClick(tmp_16, LoginScreen$composable$lambda$lambda$lambda_1($scope, $context, $errorText$delegate))), ComposableSingletons$LoginKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp2_modifier = textAlign(fontFamily(color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().get_Red_18jks8_k$()), [Constant_getInstance().get_FONT_FAMILY_nousyd_k$()]), Companion_getInstance_10().get_Center_3arb0i_k$());
        var tmp3_text = LoginScreen$composable$lambda($errorText$delegate);
        SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        var tmp_17;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_17 = Unit_getInstance();
        }
        tmp = tmp_17;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_2($scope, $context, $errorText$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(690167170, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous> (Login.kt:73)');
        }
        var tmp0_$receiver = Companion_getInstance_1();
        var tmp1_leftRight = get_px(50);
        var tmp2_top = get_px(80);
        var tmp3_bottom = get_px(24);
        var tmp_0 = backgroundColor(padding_2(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().get_rgb_18ix0c_k$());
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_55(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      LoginScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MyPostPage() {
    illegalDecoyCallException('MyPostPage');
  }
  function MyPostScreen() {
    illegalDecoyCallException('MyPostScreen');
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MyPostKt$lambda_1$lambda_r96xxc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-121677980, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostKt.lambda-1.<anonymous> (MyPost.kt:20)');
      }
      MyPostScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MyPostKt$lambda_2$lambda_eyamzl($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2122789595, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostKt.lambda-2.<anonymous> (MyPost.kt:28)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MyPostKt() {
    ComposableSingletons$MyPostKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-121677980, false, ComposableSingletons$MyPostKt$lambda_1$lambda_r96xxc));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(2122789595, false, ComposableSingletons$MyPostKt$lambda_2$lambda_eyamzl));
  }
  protoOf(ComposableSingletons$MyPostKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MyPostKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MyPostKt_instance;
  function ComposableSingletons$MyPostKt_getInstance() {
    if (ComposableSingletons$MyPostKt_instance == null)
      new ComposableSingletons$MyPostKt();
    return ComposableSingletons$MyPostKt_instance;
  }
  function MyPostPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-897198855);
    sourceInformation($composer_0, 'C(MyPostPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-897198855, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostPage$composable (MyPost.kt:18)');
      }
      isUserLoggedIn$composable(ComposableSingletons$MyPostKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyPostPage$composable$lambda($changed));
    }
  }
  function MyPostScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1006487318);
    sourceInformation($composer_0, 'C(MyPostScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1006487318, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostScreen$composable (MyPost.kt:25)');
      }
      AdminPageLayout$composable(ComposableSingletons$MyPostKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyPostScreen$composable$lambda($changed));
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
    return EditorKeyStyle$delegate.getValue_1h979_k$(null, EditorKeyStyle$factory());
  }
  var EditorKeyStyle$delegate;
  function EditorKeyStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_CreateStyle_kt__hcl52b();
    $this$ComponentStyle.base_li7hyk_k$(EditorKeyStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(EditorKeyStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function EditorKeyStyle$delegate$lambda$lambda() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_Transparent_cxh4g9_k$()), [CSSTransition_init_$Create$('background', get_ms(300))]);
  }
  function EditorKeyStyle$delegate$lambda$lambda_0() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('background', get_ms(300))]);
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
    return LoginInputStyle$delegate.getValue_1h979_k$(null, LoginInputStyle$factory());
  }
  var LoginInputStyle$delegate;
  function LoginInputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_LoginStyle_kt__eon42g();
    $this$ComponentStyle.base_li7hyk_k$(LoginInputStyle$delegate$lambda$lambda);
    var tmp = get_focus($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(LoginInputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LoginInputStyle$delegate$lambda$lambda() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), [CSSTransition_init_$Create$('border', get_ms(300))]);
  }
  function LoginInputStyle$delegate$lambda$lambda_0() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
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
    return NavigationItemStyle$delegate.getValue_1h979_k$(null, NavigationItemStyle$factory());
  }
  var NavigationItemStyle$delegate;
  function NavigationItemStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = ' > #' + ID_getInstance().get_svgParent_vlv2bp_k$();
    $this$ComponentStyle.cssRule_ehgmzl_k$(tmp, NavigationItemStyle$delegate$lambda$lambda);
    var tmp_0 = ':hover > #' + ID_getInstance().get_svgParent_vlv2bp_k$();
    $this$ComponentStyle.cssRule_ehgmzl_k$(tmp_0, NavigationItemStyle$delegate$lambda$lambda_0);
    var tmp_1 = ' > #' + ID_getInstance().get_navigationText_yua55i_k$();
    $this$ComponentStyle.cssRule_ehgmzl_k$(tmp_1, NavigationItemStyle$delegate$lambda$lambda_1);
    var tmp_2 = ':hover > #' + ID_getInstance().get_navigationText_yua55i_k$();
    $this$ComponentStyle.cssRule_ehgmzl_k$(tmp_2, NavigationItemStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().get_All_18jx7s_k$(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.property_ze5ozi_k$('stroke', Theme_White_getInstance().get_hex_18j4ge_k$());
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_0() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().get_All_18jx7s_k$(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda_0);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.property_ze5ozi_k$('stroke', Theme_Primary_getInstance().get_hex_18j4ge_k$());
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_1() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_11().get_All_18jx7s_k$(), get_ms(300))]), Theme_White_getInstance().get_rgb_18ix0c_k$());
  }
  function NavigationItemStyle$delegate$lambda$lambda_2() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
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
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkUserId(id, $completion) {
    var tmp = new $checkUserIdCOROUTINE$1(id, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchRandomJoke(onComplete, $completion) {
    var tmp = new $fetchRandomJokeCOROUTINE$2(onComplete, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($checkUserExistenceCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = get_api(window);
            var tmp0_encodeToString = Default_getInstance();
            var tmp0_serializer = tmp0_encodeToString.get_serializersModule_piitvg_k$();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_li614s_k$('user_check', VOID, encodeToByteArray(tmp0_encodeToString.encodeToString_bhi5ce_k$(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.user_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.get_serializersModule_piitvg_k$();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(UserWithoutPassword), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.decodeFromString_d9fce8_k$(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            tmp_1.TRY_RESULT0__1 = tmp_2;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              println(e.message);
              tmp_4.TRY_RESULT0__1 = null;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function $checkUserIdCOROUTINE$1(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.id_1 = id;
  }
  protoOf($checkUserIdCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = get_api(window);
            var tmp0_encodeToString = Default_getInstance();
            var tmp0_serializer = tmp0_encodeToString.get_serializersModule_piitvg_k$();
            var tmp0_cast = serializer(tmp0_serializer, createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_li614s_k$('check_user_id', VOID, encodeToByteArray(tmp0_encodeToString.encodeToString_bhi5ce_k$(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.id_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.get_serializersModule_piitvg_k$();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.decodeFromString_d9fce8_k$(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_2;
            tmp_1.TRY_RESULT0__1 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              println(e.message);
              tmp_4.TRY_RESULT0__1 = false;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function $fetchRandomJokeCOROUTINE$2(onComplete, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onComplete_1 = onComplete;
  }
  protoOf($fetchRandomJokeCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this;
            tmp_0.date0__1 = localStorage['date'];
            if (!(this.date0__1 == null)) {
              this.difference1__1 = Date.now() - toDouble(this.date0__1);
              this.dayHasPassed2__1 = this.difference1__1 >= 8.64E7;
              if (this.dayHasPassed2__1) {
                this.set_exceptionState_s9sevl_k$(5);
                this.set_state_a96kl8_k$(4);
                suspendResult = get_http(window).get$default_jrzehs_k$(Constant_getInstance().get_HUMOR_API_URL_dfxjq3_k$(), VOID, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                try {
                  var tmp0_safe_receiver = localStorage['joke'];
                  var tmp_1;
                  if (tmp0_safe_receiver == null) {
                    tmp_1 = null;
                  } else {
                    var tmp0_decodeFromString = Default_getInstance();
                    var tmp0_serializer = tmp0_decodeFromString.get_serializersModule_piitvg_k$();
                    var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(RandomJoke), arrayOf([]), false));
                    tmp_1 = tmp0_decodeFromString.decodeFromString_d9fce8_k$(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), tmp0_safe_receiver);
                  }
                  var tmp1_safe_receiver = tmp_1;
                  if (tmp1_safe_receiver == null)
                    null;
                  else {
                    this.onComplete_1(tmp1_safe_receiver);
                  }
                } catch ($p) {
                  if ($p instanceof Exception) {
                    var e = $p;
                    this.onComplete_1(new RandomJoke(-1, toString(e.message)));
                    println(e.message);
                  } else {
                    throw $p;
                  }
                }
                this.set_state_a96kl8_k$(7);
                continue $sm;
              }
            } else {
              this.set_exceptionState_s9sevl_k$(2);
              this.set_state_a96kl8_k$(1);
              suspendResult = get_http(window).get$default_jrzehs_k$(Constant_getInstance().get_HUMOR_API_URL_dfxjq3_k$(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            var result = decodeToString(ARGUMENT);
            var tmp6_decodeFromString = Default_getInstance();
            var tmp0_serializer_0 = tmp6_decodeFromString.get_serializersModule_piitvg_k$();
            var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.onComplete_1(tmp6_decodeFromString.decodeFromString_d9fce8_k$(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), result));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result;
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e_0 = this.get_exception_x0n6w6_k$();
              this.onComplete_1(new RandomJoke(-1, toString(e_0.message)));
              println(e_0.message);
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 4:
            var ARGUMENT_0 = suspendResult;
            var result_0 = decodeToString(ARGUMENT_0);
            var tmp1_decodeFromString = Default_getInstance();
            var tmp0_serializer_1 = tmp1_decodeFromString.get_serializersModule_piitvg_k$();
            var tmp0_cast_1 = serializer(tmp0_serializer_1, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.onComplete_1(tmp1_decodeFromString.decodeFromString_d9fce8_k$(isInterface(tmp0_cast_1, KSerializer) ? tmp0_cast_1 : THROW_CCE(), result_0));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result_0;
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e_1 = this.get_exception_x0n6w6_k$();
              this.onComplete_1(new RandomJoke(-1, toString(e_1.message)));
              println(e_1.message);
              this.set_state_a96kl8_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_2 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_2;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_2);
        }
      }
     while (true);
  };
  function get_$stableprop_11() {
    return 0;
  }
  function Constant() {
    Constant_instance = this;
    this.FONT_FAMILY_1 = 'Roboto';
    this.SIDE_PANEL_WIDTH_1 = 250;
    this.PAGE_WIDTH_1 = 1920;
    this.COLLAPSED_PANEL_HEIGHT_1 = 100;
    this.HUMOR_API_URL_1 = 'https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180';
    this.$stable_1 = 0;
  }
  protoOf(Constant).get_FONT_FAMILY_nousyd_k$ = function () {
    return this.FONT_FAMILY_1;
  };
  protoOf(Constant).get_SIDE_PANEL_WIDTH_mwcp64_k$ = function () {
    return this.SIDE_PANEL_WIDTH_1;
  };
  protoOf(Constant).get_PAGE_WIDTH_u0d1fj_k$ = function () {
    return this.PAGE_WIDTH_1;
  };
  protoOf(Constant).get_COLLAPSED_PANEL_HEIGHT_5tw4j7_k$ = function () {
    return this.COLLAPSED_PANEL_HEIGHT_1;
  };
  protoOf(Constant).get_HUMOR_API_URL_dfxjq3_k$ = function () {
    return this.HUMOR_API_URL_1;
  };
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
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
  function Image() {
    Image_instance = this;
    this.logo_1 = '/logo.svg';
    this.laugh_1 = '/laugh.png';
    this.$stable_1 = 0;
  }
  protoOf(Image).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  protoOf(Image).get_laugh_iujmu0_k$ = function () {
    return this.laugh_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function Icon() {
    Icon_instance = this;
    this.bold_1 = '/bold.svg';
    this.italic_1 = '/italic.svg';
    this.link_1 = '/link.svg';
    this.title_1 = '/title.svg';
    this.subtitle_1 = '/subtitle.svg';
    this.quote_1 = '/quote.svg';
    this.code_1 = '/code.svg';
    this.image_1 = '/image.svg';
    this.$stable_1 = 0;
  }
  protoOf(Icon).get_bold_wojl5a_k$ = function () {
    return this.bold_1;
  };
  protoOf(Icon).get_italic_ewys6x_k$ = function () {
    return this.italic_1;
  };
  protoOf(Icon).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(Icon).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Icon).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Icon).get_quote_ixn9eb_k$ = function () {
    return this.quote_1;
  };
  protoOf(Icon).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(Icon).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.home_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.create_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.posts_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.logout_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
    this.$stable_1 = 0;
  }
  protoOf(PathIcon).get_home_wonf3c_k$ = function () {
    return this.home_1;
  };
  protoOf(PathIcon).get_create_c1nsp1_k$ = function () {
    return this.create_1;
  };
  protoOf(PathIcon).get_posts_iwzpuy_k$ = function () {
    return this.posts_1;
  };
  protoOf(PathIcon).get_logout_g9gkur_k$ = function () {
    return this.logout_1;
  };
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function Res() {
    Res_instance = this;
    this.$stable_1 = 0;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function ID() {
    ID_instance = this;
    this.usernameInputID_1 = 'username_input';
    this.passwordInputID_1 = 'password_input';
    this.svgParent_1 = 'svgParent';
    this.navigationText_1 = 'navigationText';
    this.editor_1 = 'editor';
    this.editorPreview_1 = 'editorPreview';
    this.$stable_1 = 0;
  }
  protoOf(ID).get_usernameInputID_7z06va_k$ = function () {
    return this.usernameInputID_1;
  };
  protoOf(ID).get_passwordInputID_q0okv3_k$ = function () {
    return this.passwordInputID_1;
  };
  protoOf(ID).get_svgParent_vlv2bp_k$ = function () {
    return this.svgParent_1;
  };
  protoOf(ID).get_navigationText_yua55i_k$ = function () {
    return this.navigationText_1;
  };
  protoOf(ID).get_editor_cs4v3q_k$ = function () {
    return this.editor_1;
  };
  protoOf(ID).get_editorPreview_kj9y1a_k$ = function () {
    return this.editorPreview_1;
  };
  var ID_instance;
  function ID_getInstance() {
    if (ID_instance == null)
      new ID();
    return ID_instance;
  }
  function isUserLoggedIn(content) {
    illegalDecoyCallException('isUserLoggedIn');
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
  function isUserLoggedIn$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1950558440);
    sourceInformation($composer_0, 'C(isUserLoggedIn$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1950558440, $dirty, -1, 'com.example.blogmultiplatform.util.isUserLoggedIn$composable (Functions.kt:16)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = localStorage['remember'];
        var value = toBoolean(tmp$ret$1);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var remembered = tmp0;
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
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var value_0 = localStorage['userId'];
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var userId = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_1 = mutableStateOf(false);
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var userIdExists$delegate = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [userIdExists$delegate, userId, remembered, context];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_4.changed_ga7h3f_k$(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.util.isUserLoggedIn$composable.<anonymous>' call
        var value_2 = isUserLoggedIn$composable$slambda_0(userId, remembered, context, userIdExists$delegate, null);
        $composer_4.updateRememberedValue_l1colo_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(isUserLoggedIn$composable$lambda_1(content, $changed));
    }
  }
  function isUserLoggedIn$composable$lambda($userIdExists$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.get_value_j01efc_k$();
  }
  function isUserLoggedIn$composable$lambda_0($userIdExists$delegate, value) {
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.set_value_rnwamw_k$(value);
  }
  function isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    this.$userId_1 = $userId;
    this.$remembered_1 = $remembered;
    this.$context_1 = $context;
    this.$userIdExists$delegate_1 = $userIdExists$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(isUserLoggedIn$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(isUserLoggedIn$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(isUserLoggedIn$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (!(this.$userId_1 == null ? true : charSequenceLength(this.$userId_1) === 0)) {
              this.set_state_a96kl8_k$(1);
              suspendResult = checkUserId(this.$userId_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            isUserLoggedIn$composable$lambda_0(this.$userIdExists$delegate_1, ARGUMENT);
            if (!this.$remembered_1 ? true : !isUserLoggedIn$composable$lambda(this.$userIdExists$delegate_1)) {
              this.$context_1.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$(AdminLogin_getInstance().get_route_iy3cio_k$());
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(isUserLoggedIn$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new isUserLoggedIn$composable$slambda(this.$userId_1, this.$remembered_1, this.$context_1, this.$userIdExists$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(isUserLoggedIn$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function isUserLoggedIn$composable$slambda_0($userId, $remembered, $context, $userIdExists$delegate, resultContinuation) {
    var i = new isUserLoggedIn$composable$slambda($userId, $remembered, $context, $userIdExists$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
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
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map