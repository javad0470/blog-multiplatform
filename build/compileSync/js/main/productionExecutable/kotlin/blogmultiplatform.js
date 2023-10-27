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
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var removePrefix = kotlin_kotlin.$_$.pb;
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
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var isObject = kotlin_kotlin.$_$.t9;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var objectMeta = kotlin_kotlin.$_$.da;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.le;
  var toInt = kotlin_kotlin.$_$.gc;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var toBoolean = kotlin_kotlin.$_$.cc;
  var isBlank = kotlin_kotlin.$_$.jb;
  var removeSuffix = kotlin_kotlin.$_$.qb;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.me;
  var mapOf = kotlin_kotlin.$_$.x6;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.sa;
  var THROW_ISE = kotlin_kotlin.$_$.gd;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b9;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var textOverflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var SimpleGrid$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var IconSize_SM_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var FaMagnifyingGlass$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var onFocusIn = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var onFocusOut = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var onKeyDown = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var rememberBreakpoint$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var Path$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var FaBars$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s3;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var protoOf = kotlin_kotlin.$_$.ea;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Long = kotlin_kotlin.$_$.bd;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var classMeta = kotlin_kotlin.$_$.w8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaXmark$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var objectCreate = kotlin_kotlin.$_$.ca;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.be;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var hashCode = kotlin_kotlin.$_$.f9;
  var equals = kotlin_kotlin.$_$.z8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var getKClass = kotlin_kotlin.$_$.d;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var Map = kotlin_kotlin.$_$.z4;
  var EnumDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var enumEntries = kotlin_kotlin.$_$.l8;
  var Enum = kotlin_kotlin.$_$.wc;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var toString_0 = kotlin_kotlin.$_$.ja;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var println = kotlin_kotlin.$_$.m8;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var LG_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var Switch$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var MD_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var numberToLong = kotlin_kotlin.$_$.ba;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var Li$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Ul$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var loadDataUrlFromDisk = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var disabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Unit = kotlin_kotlin.$_$.qd;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var resize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var TextArea$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var FaPlus$composable = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var split = kotlin_kotlin.$_$.vb;
  var dropLast = kotlin_kotlin.$_$.cb;
  var last = kotlin_kotlin.$_$.s6;
  var contains = kotlin_kotlin.$_$.za;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var arrayOf = kotlin_kotlin.$_$.td;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var encodeToByteArray = kotlin_kotlin.$_$.eb;
  var decodeToString = kotlin_kotlin.$_$.bb;
  var Exception = kotlin_kotlin.$_$.yc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a4;
  var get_http = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var toDouble = kotlin_kotlin.$_$.ec;
  var IntRange = kotlin_kotlin.$_$.ka;
  var substring = kotlin_kotlin.$_$.ac;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var replaceRange = kotlin_kotlin.$_$.sb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$LoadingIndicatorKt, 'ComposableSingletons$LoadingIndicatorKt', objectMeta);
  setMetadataFor(ComposableSingletons$PopupKt, 'ComposableSingletons$PopupKt', objectMeta);
  setMetadataFor(ComposableSingletons$SidePanelKt, 'ComposableSingletons$SidePanelKt', objectMeta);
  setMetadataFor(OverflowSidePanel$composable$slambda$slambda, 'OverflowSidePanel$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$slambda, 'OverflowSidePanel$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda, 'OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ApiListResponse, 'ApiListResponse', classMeta, VOID, VOID, VOID, {0: ApiListResponseSerializer_getInstance});
  setMetadataFor(Idle, 'Idle', objectMeta, ApiListResponse, [ApiListResponse, SerializerFactory], VOID, {0: Idle_getInstance});
  setMetadataFor(Success, 'Success', classMeta, ApiListResponse, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Error_0, 'Error', classMeta, ApiListResponse, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ApiListResponseSerializer, 'ApiListResponseSerializer', objectMeta, JsonContentPolymorphicSerializer);
  setMetadataFor(Companion_2, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Category, 'Category', classMeta, Enum, VOID, VOID, {0: Companion_getInstance_17});
  setMetadataFor(ControlStyle, 'ControlStyle', classMeta);
  setMetadataFor(Bold, 'Bold', classMeta, ControlStyle);
  setMetadataFor(Italic, 'Italic', classMeta, ControlStyle);
  setMetadataFor(Link, 'Link', classMeta, ControlStyle);
  setMetadataFor(Title, 'Title', classMeta, ControlStyle);
  setMetadataFor(SubTitle, 'SubTitle', classMeta, ControlStyle);
  setMetadataFor(Quote, 'Quote', classMeta, ControlStyle);
  setMetadataFor(Code, 'Code', classMeta, ControlStyle);
  setMetadataFor(Image, 'Image', classMeta, ControlStyle);
  setMetadataFor(Break, 'Break', classMeta, ControlStyle);
  setMetadataFor(EditorControl, 'EditorControl', classMeta, Enum);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Post, 'Post', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PostWithoutDetails, 'PostWithoutDetails', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RandomJoke, 'RandomJoke', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(User, 'User', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(UserWithoutPassword, 'UserWithoutPassword', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Screen, 'Screen', classMeta);
  setMetadataFor(AdminHome, 'AdminHome', objectMeta, Screen);
  setMetadataFor(AdminLogin, 'AdminLogin', objectMeta, Screen);
  setMetadataFor(AdminCreate, 'AdminCreate', objectMeta, Screen);
  setMetadataFor(AdminMyPosts, 'AdminMyPosts', objectMeta, Screen);
  setMetadataFor(AdminSuccess, 'AdminSuccess', objectMeta, Screen);
  setMetadataFor(CreatePageUiState, 'CreatePageUiState', classMeta);
  setMetadataFor(ComposableSingletons$CreateKt, 'ComposableSingletons$CreateKt', objectMeta);
  setMetadataFor(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda, 'CreateScreen$composable$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1, 'CreateScreen$composable$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(HomeScreen$composable$slambda, 'HomeScreen$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt', objectMeta);
  setMetadataFor(LoginScreen$composable$lambda$lambda$lambda$slambda, 'LoginScreen$composable$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$MyPostsKt, 'ComposableSingletons$MyPostsKt', objectMeta);
  setMetadataFor(MyPostsScreen$composable$slambda, 'MyPostsScreen$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$SuccessKt, 'ComposableSingletons$SuccessKt', objectMeta);
  setMetadataFor(SuccessPage$composable$slambda, 'SuccessPage$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($checkUserExistenceCOROUTINE$0, '$checkUserExistenceCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($checkUserIdCOROUTINE$1, '$checkUserIdCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fetchRandomJokeCOROUTINE$2, '$fetchRandomJokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($addPostCOROUTINE$3, '$addPostCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($fetchMyPostCOROUTINE$4, '$fetchMyPostCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Image_0, 'Image', objectMeta);
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
    get_api(window).r3h(true);
    Companion_getInstance().m3j('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.i3l(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.l3l(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_7(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
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
      MyPostsPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(384429700, $changed, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous> (main.kt:95)');
      }
      SuccessPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-7.<anonymous> (main.kt:124)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_7$lambda$lambda_q2kg1o(it, $dirty));
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
        // Inline function 'ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
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
  function ComposableSingletons$MainKt$lambda_7$lambda$lambda_q2kg1o($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous> (main.kt:124)');
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.n4j_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.o4j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.p4j_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.q4j_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1691572098, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.r4j_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1109482749, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.s4j_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(384429700, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.t4j_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
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
    ctx.a3j_1.o3l('/', VOID, ComposableSingletons$MainKt_getInstance().n4j_1);
    ctx.a3j_1.o3l('/admin/', VOID, ComposableSingletons$MainKt_getInstance().o4j_1);
    ctx.a3j_1.o3l('/admin/create', VOID, ComposableSingletons$MainKt_getInstance().p4j_1);
    ctx.a3j_1.o3l('/admin/login', VOID, ComposableSingletons$MainKt_getInstance().q4j_1);
    ctx.a3j_1.o3l('/admin/my_posts', VOID, ComposableSingletons$MainKt_getInstance().r4j_1);
    ctx.a3j_1.o3l('/admin/success', VOID, ComposableSingletons$MainKt_getInstance().s4j_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.p3l(removeSuffix(removeSuffix($this$addRouteInterceptor.c3l_1, '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.r3v_1.b3w(get_EditorKeyStyle());
    ctx.r3v_1.b3w(get_LoginInputStyle());
    ctx.r3v_1.b3w(get_NavigationItemStyle());
    initSilk(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
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
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:124)');
        }
        $router.h3l(ComposableSingletons$MainKt_getInstance().t4j_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
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
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:123)');
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
          tmp$ret$0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_9($boundThis) {
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
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:122)');
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
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_10($boundThis) {
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
          tmp$ret$0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_11($boundThis) {
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
        var value_0 = ComposableLambda$invoke$ref_13(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_12($boundThis) {
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
          tmp$ret$0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_13($boundThis) {
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
  function ComposableLambda$invoke$ref_14($boundThis) {
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
  function ComposableLambda$invoke$ref_15($boundThis) {
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
      Span$composable(toAttrs(classNames(Companion_getInstance_1(), ['visually-hidden'])), ComposableSingletons$LoadingIndicatorKt_getInstance().u4j_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
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
      Div$composable(toAttrs(classNames(Companion_getInstance_1(), ['spinner-border', 'text-primary'])), ComposableSingletons$LoadingIndicatorKt_getInstance().v4j_1, $composer_0, 48, 0);
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
    tmp.u4j_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(799387059, false, ComposableSingletons$LoadingIndicatorKt$lambda_1$lambda_atn3pj));
    var tmp_0 = this;
    tmp_0.v4j_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1820086993, false, ComposableSingletons$LoadingIndicatorKt$lambda_2$lambda_vduh7e));
    var tmp_1 = this;
    tmp_1.w4j_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(1224469040, false, ComposableSingletons$LoadingIndicatorKt$lambda_3$lambda_2k8057));
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
      Box$composable(tmp, tmp_0, null, ComposableSingletons$LoadingIndicatorKt_getInstance().w4j_1, $composer_0, 3120, 4);
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
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$PopupKt$lambda_1$lambda_js4y9u($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1601026556, $changed, -1, 'com.example.blogmultiplatform.components.ComposableSingletons$PopupKt.lambda-1.<anonymous> (Popup.kt:140)');
      }
      SpanText$composable('Add', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PopupKt() {
    ComposableSingletons$PopupKt_instance = this;
    var tmp = this;
    tmp.x4j_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1601026556, false, ComposableSingletons$PopupKt$lambda_1$lambda_js4y9u));
  }
  var ComposableSingletons$PopupKt_instance;
  function ComposableSingletons$PopupKt_getInstance() {
    if (ComposableSingletons$PopupKt_instance == null)
      new ComposableSingletons$PopupKt();
    return ComposableSingletons$PopupKt_instance;
  }
  function MessagePopup$composable(message, onDialogDismissed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1820431783);
    sourceInformation($composer_0, 'C(MessagePopup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(message) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(onDialogDismissed) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1820431783, $dirty, -1, 'com.example.blogmultiplatform.components.MessagePopup$composable (Popup.kt:29)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = zIndex(position(tmp, 'fixed'), 19);
      var tmp_1 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1138266797, true, MessagePopup$composable$lambda($dirty, onDialogDismissed, message));
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
        // Inline function 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.fz(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_1.oy();
      Box$composable(tmp_0, tmp_1, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(MessagePopup$composable$lambda_0(message, onDialogDismissed, $changed));
    }
  }
  function LinkPopup$composable(editorControl, onDialogDismissed, onAddClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1887187303);
    sourceInformation($composer_0, 'C(LinkPopup$composable)P(!1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(editorControl) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(onDialogDismissed) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onAddClick) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1887187303, $dirty, -1, 'com.example.blogmultiplatform.components.LinkPopup$composable (Popup.kt:65)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = zIndex(position(tmp, 'fixed'), 19);
      var tmp_1 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -2135565241, true, LinkPopup$composable$lambda($dirty, onDialogDismissed, editorControl, onAddClick));
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
        // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.fz(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_1.oy();
      Box$composable(tmp_0, tmp_1, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.r1d(LinkPopup$composable$lambda_0(editorControl, onDialogDismissed, onAddClick, $changed));
    }
  }
  function MessagePopup$composable$lambda$lambda($onDialogDismissed) {
    return function (it) {
      $onDialogDismissed();
      return Unit_getInstance();
    };
  }
  function MessagePopup$composable$lambda$lambda_0($message, $$dirty) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(10789328, $changed, -1, 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>.<anonymous> (Popup.kt:49)');
        }
        var tmp_0 = textAlign(fillMaxWidth(Companion_getInstance_1()), Companion_getInstance_3().q2f());
        Constant_getInstance();
        var tmp0_modifier = fontSize(fontFamily(tmp_0, ['Roboto']), get_px(16));
        SpanText$composable($message, tmp0_modifier, null, null, $composer_0, 14 & $$dirty, 12);
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
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MessagePopup$composable$lambda($$dirty, $onDialogDismissed, $message) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1138266797, $changed, -1, 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous> (Popup.kt:37)');
        }
        var tmp_0 = backgroundColor(fillMaxSize(Companion_getInstance_1()), Theme_HalfBlack_getInstance().b4k_1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($onDialogDismissed);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = MessagePopup$composable$lambda$lambda($onDialogDismissed);
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
        Box$composable(tmp_3, null, null, null, $composer_0, 0, 14);
        var tmp_4 = borderRadius(backgroundColor(padding_0(Companion_getInstance_1(), get_px(24)), Colors_getInstance().t3o()), get_px(4));
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 10789328, true, MessagePopup$composable$lambda$lambda_0($message, $$dirty));
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
          // Inline function 'com.example.blogmultiplatform.components.MessagePopup$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_18(dispatchReceiver);
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
        Box$composable(tmp_4, null, null, tmp$ret$11, $composer_0, 3072, 6);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MessagePopup$composable$lambda_0($message, $onDialogDismissed, $$changed) {
    return function ($composer, $force) {
      MessagePopup$composable($message, $onDialogDismissed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LinkPopup$composable$lambda$lambda($onDialogDismissed) {
    return function (it) {
      $onDialogDismissed();
      return Unit_getInstance();
    };
  }
  function LinkPopup$composable$lambda$lambda$lambda($editorControl) {
    return function ($this$toAttrs) {
      $this$toAttrs.h1z('placeholder', $editorControl.equals(EditorControl_Link_getInstance()) ? 'Href' : 'Image URL');
      return Unit_getInstance();
    };
  }
  function LinkPopup$composable$lambda$lambda$lambda_0($editorControl) {
    return function ($this$toAttrs) {
      $this$toAttrs.h1z('placeholder', $editorControl.equals(EditorControl_Link_getInstance()) ? 'Title' : 'Description');
      return Unit_getInstance();
    };
  }
  function LinkPopup$composable$lambda$lambda$lambda_1($onAddClick, $onDialogDismissed) {
    return function (it) {
      var tmp = document;
      ID_getInstance();
      var tmp_0 = tmp.getElementById('linHrefInput');
      var href = (tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE()).value;
      var tmp_1 = document;
      ID_getInstance();
      var tmp_2 = tmp_1.getElementById('linTitleInput');
      var title = (tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE()).value;
      $onAddClick(href, title);
      $onDialogDismissed();
      return Unit_getInstance();
    };
  }
  function LinkPopup$composable$lambda$lambda_0($$dirty, $editorControl, $onAddClick, $onDialogDismissed) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(366700926, $changed, -1, 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous> (Popup.kt:86)');
        }
        var tmp_0 = Text_getInstance();
        var tmp_1 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_2 = margin(padding(height(fillMaxWidth(id(tmp_1, 'linHrefInput')), get_px(54)), VOID, get_px(20)), VOID, VOID, get_px(12));
        Constant_getInstance();
        var tmp_3 = backgroundColor(borderRadius(noBorder(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(14))), get_px(4)), Theme_LightGray_getInstance().b4k_1);
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
        var tmp1_cache = $composer_1.gz($editorControl);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = LinkPopup$composable$lambda$lambda$lambda($editorControl);
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
        Input$composable(tmp_0, toAttrs(tmp_3, tmp$ret$4), $composer_0, 6);
        var tmp_6 = Text_getInstance();
        var tmp_7 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_8 = margin(padding(height(fillMaxWidth(id(tmp_7, 'linTitleInput')), get_px(54)), VOID, get_px(20)), VOID, VOID, get_px(20));
        Constant_getInstance();
        var tmp_9 = backgroundColor(borderRadius(noBorder(fontSize(fontFamily(tmp_8, ['Roboto']), get_px(14))), get_px(4)), Theme_LightGray_getInstance().b4k_1);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var tmp3_remember$composable = 14 & $$dirty;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz($editorControl);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = LinkPopup$composable$lambda$lambda$lambda_0($editorControl);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_10 = value_0;
        } else {
          tmp_10 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_10;
        tmp$ret$7 = tmp$ret$6;
        var tmp_11 = tmp$ret$7;
        tmp$ret$8 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        Input$composable(tmp_6, toAttrs(tmp_9, tmp$ret$9), $composer_0, 6);
        var tmp_12 = Companion_getInstance_1();
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var tmp5_remember$composable = 14 & $$dirty >> 6 | 112 & $$dirty;
        var $composer_3 = tmp4_remember$composable;
        $composer_3.ny(-1124426577);
        sourceInformation($composer_3, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = !!($composer_3.gz($onAddClick) | $composer_3.gz($onDialogDismissed));
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
          var tmp$ret$10;
          // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = LinkPopup$composable$lambda$lambda$lambda_1($onAddClick, $onDialogDismissed);
          var value_1 = tmp$ret$10;
          tmp0_cache_1.fz(value_1);
          tmp_13 = value_1;
        } else {
          tmp_13 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_13;
        tmp$ret$12 = tmp$ret$11;
        var tmp_14 = tmp$ret$12;
        tmp$ret$13 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.oy();
        tmp$ret$14 = tmp0_1;
        var tmp_15 = noBorder(color(backgroundColor(borderRadius(height(fillMaxWidth(onClick(tmp_12, tmp$ret$14)), get_px(54)), get_px(4)), Theme_Primary_getInstance().b4k_1), Colors_getInstance().t3o()));
        Constant_getInstance();
        Button$composable(toAttrs(fontSize(fontFamily(tmp_15, ['Roboto']), get_px(14))), ComposableSingletons$PopupKt_getInstance().x4j_1, $composer_0, 48, 0);
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp = tmp_16;
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
  function LinkPopup$composable$lambda($$dirty, $onDialogDismissed, $editorControl, $onAddClick) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-2135565241, $changed, -1, 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous> (Popup.kt:73)');
        }
        var tmp_0 = backgroundColor(fillMaxSize(Companion_getInstance_1()), Theme_HalfBlack_getInstance().b4k_1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 3;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($onDialogDismissed);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = LinkPopup$composable$lambda$lambda($onDialogDismissed);
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
        Box$composable(tmp_3, null, null, null, $composer_0, 0, 14);
        var tmp_4 = borderRadius(backgroundColor(padding_0(width(Companion_getInstance_1(), get_px(500)), get_px(24)), Colors_getInstance().t3o()), get_px(4));
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 366700926, true, LinkPopup$composable$lambda$lambda_0($$dirty, $editorControl, $onAddClick, $onDialogDismissed));
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
          // Inline function 'com.example.blogmultiplatform.components.LinkPopup$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_20(dispatchReceiver);
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
        Column$composable(tmp_4, null, null, null, tmp$ret$11, $composer_0, 24576, 14);
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
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function LinkPopup$composable$lambda_0($editorControl, $onDialogDismissed, $onAddClick, $$changed) {
    return function ($composer, $force) {
      LinkPopup$composable($editorControl, $onDialogDismissed, $onAddClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PostPreview$composable(post, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(562125517);
    sourceInformation($composer_0, 'C(PostPreview$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(post) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(562125517, $dirty, -1, 'com.example.blogmultiplatform.components.PostPreview$composable (PostPreview.kt:34)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1(), get_percent(95));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.PostPreview$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 733989616, true, PostPreview$composable$lambda(post));
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
        // Inline function 'com.example.blogmultiplatform.components.PostPreview$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.fz(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.oy();
      Column$composable(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.r1d(PostPreview$composable$lambda_0(post, $changed));
    }
  }
  function Posts$composable(posts, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1867276767);
    sourceInformation($composer_0, 'C(Posts$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(posts) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1867276767, $dirty, -1, 'com.example.blogmultiplatform.components.Posts$composable (PostPreview.kt:97)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1(), get_percent(90));
      var tmp_0 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1141910711, true, Posts$composable$lambda(posts));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.fz(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.oy();
      Column$composable(tmp, tmp_0, null, null, tmp0, $composer_0, 24624, 12);
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
      tmp0_safe_receiver.r1d(Posts$composable$lambda_0(posts, $changed));
    }
  }
  function PostPreview$composable$lambda$lambda($this$styleModifier) {
    $this$styleModifier.s28('display', '-webkit-box');
    $this$styleModifier.s28('-webkit-line-clamp', '2');
    $this$styleModifier.s28('line-clamp', '2');
    $this$styleModifier.s28('-webkit-box-orient', 'vertical');
    return Unit_getInstance();
  }
  function PostPreview$composable$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.s28('display', '-webkit-box');
    $this$styleModifier.s28('-webkit-line-clamp', '2');
    $this$styleModifier.s28('line-clamp', '2');
    $this$styleModifier.s28('-webkit-box-orient', 'vertical');
    return Unit_getInstance();
  }
  function PostPreview$composable$lambda($post) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(733989616, $changed, -1, 'com.example.blogmultiplatform.components.PostPreview$composable.<anonymous> (PostPreview.kt:38)');
        }
        var tmp0_modifier = objectFit(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(16))), Companion_getInstance_4().k2j());
        var tmp1_src = $post.h4k_1;
        Image$composable(tmp1_src, 'Post Thumbnail Image', tmp0_modifier, false, null, $composer_0, 48, 24);
        var tmp_0 = Companion_getInstance_1();
        Constant_getInstance();
        var tmp2_modifier = color(fontSize(fontFamily(tmp_0, ['Roboto']), get_px(12)), Theme_HalfBlack_getInstance().b4k_1);
        var tmp3_text = parseDateString($post.e4k_1);
        SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        var tmp_1 = margin(Companion_getInstance_1(), VOID, VOID, get_px(12));
        Constant_getInstance();
        var tmp_2 = overflow(textOverflow(color(fontWeight(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(20)), Companion_getInstance_5().o2g()), Colors_getInstance().h3o()), Companion_getInstance_6().g2l()), Companion_getInstance_7().s2j());
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
          // Inline function 'com.example.blogmultiplatform.components.PostPreview$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PostPreview$composable$lambda$lambda;
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
        var tmp4_modifier = styleModifier(tmp_2, tmp$ret$4);
        var tmp5_text = $post.f4k_1;
        SpanText$composable(tmp5_text, tmp4_modifier, null, null, $composer_0, 0, 12);
        var tmp_5 = margin(Companion_getInstance_1(), VOID, VOID, get_px(8));
        Constant_getInstance();
        var tmp_6 = overflow(textOverflow(color(fontSize(fontFamily(tmp_5, ['Roboto']), get_px(16)), Colors_getInstance().h3o()), Companion_getInstance_6().g2l()), Companion_getInstance_7().s2j());
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
        var tmp_7;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.components.PostPreview$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = PostPreview$composable$lambda$lambda_0;
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_7;
        tmp$ret$7 = tmp$ret$6;
        var tmp_8 = tmp$ret$7;
        tmp$ret$8 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        var tmp6_modifier = styleModifier(tmp_6, tmp$ret$9);
        var tmp7_text = $post.g4k_1;
        SpanText$composable(tmp7_text, tmp6_modifier, null, null, $composer_0, 0, 12);
        var tmp_9 = Companion_getInstance_1();
        Constant_getInstance();
        var tmp8_modifier = color(fontSize(fontFamily(tmp_9, ['Roboto']), get_px(12)), Theme_HalfBlack_getInstance().b4k_1);
        var tmp9_text = $post.i4k_1.z4_1;
        SpanText$composable(tmp9_text, tmp8_modifier, null, null, $composer_0, 0, 12);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
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
  function PostPreview$composable$lambda_0($post, $$changed) {
    return function ($composer, $force) {
      PostPreview$composable($post, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Posts$composable$lambda$lambda($posts) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-340063040, $changed, -1, 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>.<anonymous> (PostPreview.kt:106)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $posts.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          PostPreview$composable(element, $composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function Posts$composable$lambda($posts) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1141910711, $changed, -1, 'com.example.blogmultiplatform.components.Posts$composable.<anonymous> (PostPreview.kt:102)');
        }
        var tmp0_modifier = fillMaxWidth(Companion_getInstance_1());
        var tmp1_numColumns = numColumns(1, 2, 3, 4);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -340063040, true, Posts$composable$lambda$lambda($posts));
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
          // Inline function 'com.example.blogmultiplatform.components.Posts$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function Posts$composable$lambda_0($posts, $$changed) {
    return function ($composer, $force) {
      Posts$composable($posts, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SearchBar$composable(onEnterClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(262319247);
    sourceInformation($composer_0, 'C(SearchBar$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.jz(onEnterClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(262319247, $dirty, -1, 'com.example.blogmultiplatform.components.SearchBar$composable (SearchBar.kt:23)');
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
        // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var focused$delegate = tmp0;
      var tmp_1 = borderRadius(backgroundColor(height(padding_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, VOID, get_px(20)), get_px(54)), Theme_LightGray_getInstance().b4k_1), get_px(100));
      var tmp_2 = get_px(2);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_8();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = transition(border(tmp_1, tmp_2, 'solid', SearchBar$composable$lambda(focused$delegate) ? Theme_Primary_getInstance().b4k_1 : Theme_LightGray_getInstance().b4k_1), [new CSSTransition(Companion_getInstance_9().r2l(), get_ms(200))]);
      var tmp_4 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -1264033908, true, SearchBar$composable$lambda_1(focused$delegate, $dirty, onEnterClick));
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
      var tmp_6;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_2.fz(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = tmp0_let_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_2.oy();
      Row$composable(tmp_3, null, tmp_4, null, tmp0_0, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.r1d(SearchBar$composable$lambda_2(onEnterClick, $changed));
    }
  }
  function SearchBar$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $focused$delegate.w1();
  }
  function SearchBar$composable$lambda_0($focused$delegate, value) {
    getLocalDelegateReference('focused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $focused$delegate.ut(value);
  }
  function SearchBar$composable$lambda$lambda($focused$delegate) {
    return function (it) {
      SearchBar$composable$lambda_0($focused$delegate, true);
      return Unit_getInstance();
    };
  }
  function SearchBar$composable$lambda$lambda_0($focused$delegate) {
    return function (it) {
      SearchBar$composable$lambda_0($focused$delegate, false);
      return Unit_getInstance();
    };
  }
  function SearchBar$composable$lambda$lambda_1($onEnterClick) {
    return function (it) {
      var tmp;
      if (it.s2d_1 === 'Enter') {
        tmp = $onEnterClick();
      }
      return Unit_getInstance();
    };
  }
  function SearchBar$composable$lambda$lambda_2($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Search...');
    return Unit_getInstance();
  }
  function SearchBar$composable$lambda_1($focused$delegate, $$dirty, $onEnterClick) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1264033908, $changed, -1, 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous> (SearchBar.kt:41)');
        }
        FaMagnifyingGlass$composable(margin_0(color(Companion_getInstance_1(), SearchBar$composable$lambda($focused$delegate) ? Theme_Primary_getInstance().b4k_1 : Theme_DarkGray_getInstance().b4k_1), VOID, get_px(14)), IconSize_SM_getInstance(), $composer_0, 48, 0);
        var tmp_0 = Text_getInstance();
        var tmp_1 = noBorder(backgroundColor(color(fillMaxWidth(Companion_getInstance_1()), Colors_getInstance().h3o()), Colors_getInstance().g3o()));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($focused$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = SearchBar$composable$lambda$lambda($focused$delegate);
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
        var tmp_4 = onFocusIn(tmp_1, tmp$ret$4);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.ny(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.gz($focused$delegate);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = SearchBar$composable$lambda$lambda_0($focused$delegate);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_6 = tmp$ret$7;
        tmp$ret$8 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        var tmp_7 = onFocusOut(tmp_4, tmp$ret$9);
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var tmp3_remember$composable = 14 & $$dirty;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.ny(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = $composer_3.gz($onEnterClick);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
          var tmp$ret$10;
          // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = SearchBar$composable$lambda$lambda_1($onEnterClick);
          var value_1 = tmp$ret$10;
          tmp0_cache_1.fz(value_1);
          tmp_8 = value_1;
        } else {
          tmp_8 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_8;
        tmp$ret$12 = tmp$ret$11;
        var tmp_9 = tmp$ret$12;
        tmp$ret$13 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.oy();
        tmp$ret$14 = tmp0_1;
        var tmp_10 = onKeyDown(tmp_7, tmp$ret$14);
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_4 = tmp4_remember$composable;
        $composer_4.ny(547886695);
        sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (false ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
          var tmp$ret$15;
          // Inline function 'com.example.blogmultiplatform.components.SearchBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$15 = SearchBar$composable$lambda$lambda_2;
          var value_2 = tmp$ret$15;
          tmp0_cache_2.fz(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = tmp0_let_2;
        }
        tmp$ret$16 = tmp_11;
        tmp$ret$17 = tmp$ret$16;
        var tmp_12 = tmp$ret$17;
        tmp$ret$18 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_2 = tmp$ret$18;
        $composer_4.oy();
        tmp$ret$19 = tmp0_2;
        Input$composable(tmp_0, toAttrs(tmp_10, tmp$ret$19), $composer_0, 6);
        var tmp_13;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_13 = Unit_getInstance();
        }
        tmp = tmp_13;
      } else {
        $composer_0.yy();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function SearchBar$composable$lambda_2($onEnterClick, $$changed) {
    return function ($composer, $force) {
      SearchBar$composable($onEnterClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
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
    tmp.k4k_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-484341009, false, ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5));
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
      var tmp_1 = backgroundColor(zIndex(position(tmp_0, 'fixed'), 9), Theme_Secondary_getInstance().b4k_1);
      Column$composable(tmp_1, null, null, null, ComposableSingletons$SidePanelKt_getInstance().k4k_1, $composer_0, 24576, 14);
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
      var tmp0_modifier = color(fontSize(fontFamily(tmp, ['Roboto']), get_px(16)), Theme_HalfWhite_getInstance().b4k_1);
      SpanText$composable('Dashboard', tmp0_modifier, null, null, $composer_0, 6, 12);
      var tmp_0 = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp_1 = context.y3i().f3i_1 === AdminHome_getInstance().l4k_1;
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
      var tmp_5 = context.y3i().f3i_1 === AdminCreate_getInstance().l4k_1;
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
      var tmp_9 = context.y3i().f3i_1 === AdminMyPosts_getInstance().l4k_1;
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
      var tmp = cursor(toModifier$composable(get_NavigationItemStyle(), [], $composer_0, 64).e3n(modifier_0._v), Companion_getInstance_10().h2g());
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
        var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
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
        var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
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
      var tmp_0 = backgroundColor(padding(height(tmp, get_px(100)), VOID, get_px(24)), Theme_Secondary_getInstance().b4k_1);
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
        var value = ComposableLambda$invoke$ref_29(dispatchReceiver);
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
      var tmp_6 = backgroundColor(transition(opacity(zIndex(position(tmp_5, 'fixed'), 9), OverflowSidePanel$composable$lambda_1(opacity$delegate)), [CSSTransition_init_$Create$('opacity', get_ms(300))]), Theme_HalfBlack_getInstance().b4k_1);
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
        var value_2 = ComposableLambda$invoke$ref_32(dispatchReceiver);
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
      $context.u3i_1.l3l(AdminHome_getInstance().l4k_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_0($context) {
    return function () {
      $context.u3i_1.l3l(AdminCreate_getInstance().l4k_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_1($context) {
    return function () {
      $context.u3i_1.l3l(AdminMyPosts_getInstance().l4k_1);
      return Unit_getInstance();
    };
  }
  function NavigationItems$composable$lambda_2($context) {
    return function () {
      logout();
      $context.u3i_1.l3l(AdminLogin_getInstance().l4k_1);
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
        var tmp1_modifier = thenIf(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(16)), $selected._v, color(Companion_getInstance_1(), Theme_Primary_getInstance().b4k_1));
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
  function ComposableLambda$invoke$ref_27($boundThis) {
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
      $this$Path.a2n('d', $pathData);
      var tmp;
      if ($selected) {
        $this$Path.a2n('stroke', Theme_Primary_getInstance().a4k_1);
        tmp = Unit_getInstance();
      }
      $this$Path.a2n('stroke-width', '2');
      $this$Path.a2n('stroke-linecap', 'round');
      $this$Path.a2n('stroke-linejoin', 'round');
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
  function ComposableLambda$invoke$ref_28($boundThis) {
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
        var tmp_0 = cursor(color(margin_0(Companion_getInstance_1(), VOID, get_px(24)), Theme_White_getInstance().b4k_1), Companion_getInstance_10().h2g());
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
  function ComposableLambda$invoke$ref_29($boundThis) {
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
    this.v4k_1 = $onMenuClosed;
    this.w4k_1 = $translateX$delegate;
    this.x4k_1 = $opacity$delegate;
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
            OverflowSidePanel$composable$lambda_0(this.w4k_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.x4k_1, get_percent(0));
            this.sh_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v4k_1();
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
    var i = new OverflowSidePanel$composable$slambda$slambda(this.v4k_1, this.w4k_1, this.x4k_1, completion);
    i.y4k_1 = $this$launch;
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
    this.h4l_1 = $breakpoint;
    this.i4l_1 = $scope;
    this.j4l_1 = $translateX$delegate;
    this.k4l_1 = $opacity$delegate;
    this.l4l_1 = $onMenuClosed;
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
          OverflowSidePanel$composable$lambda_0(this.j4l_1, get_percent(0));
          OverflowSidePanel$composable$lambda_2(this.k4l_1, get_percent(100));
          if (this.h4l_1.b5(Breakpoint_MD_getInstance()) > 0) {
            launch(this.i4l_1, VOID, VOID, OverflowSidePanel$composable$slambda$slambda_0(this.l4l_1, this.j4l_1, this.k4l_1, null));
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
    var i = new OverflowSidePanel$composable$slambda(this.h4l_1, this.i4l_1, this.j4l_1, this.k4l_1, this.l4l_1, completion);
    i.m4l_1 = $this$LaunchedEffect;
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
    this.v4l_1 = $onMenuClosed;
    this.w4l_1 = $translateX$delegate;
    this.x4l_1 = $opacity$delegate;
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
            OverflowSidePanel$composable$lambda_0(this.w4l_1, get_percent(-100));
            OverflowSidePanel$composable$lambda_2(this.x4l_1, get_percent(0));
            this.sh_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v4l_1();
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
    var i = new OverflowSidePanel$composable$lambda$lambda$lambda$lambda$slambda(this.v4l_1, this.w4l_1, this.x4l_1, completion);
    i.y4l_1 = $this$launch;
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
        var tmp_0 = color(margin_0(Companion_getInstance_1(), VOID, get_px(20)), Theme_White_getInstance().b4k_1);
        FaXmark$composable(cursor(onClick(tmp_0, OverflowSidePanel$composable$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate)), Companion_getInstance_10().h2g()), IconSize_LG_getInstance(), $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_30($boundThis) {
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
          tmp$ret$0 = ComposableLambda$invoke$ref_30(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_31($boundThis) {
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
        var tmp_0 = backgroundColor(scrollBehavior(overflow(transition(translateX(width(fillMaxHeight(padding_0(Companion_getInstance_1(), get_px(24))), $breakpoint.b5(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), OverflowSidePanel$composable$lambda($translateX$delegate)), [CSSTransition_init_$Create$('translate', get_ms(300))]), Companion_getInstance_7().t2j()), Companion_getInstance_11().w2j()), Theme_Secondary_getInstance().b4k_1);
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
          tmp$ret$0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_32($boundThis) {
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
    return $this.b4m_1.w1();
  }
  function ApiListResponse$Idle$_anonymous__yiluc8() {
    var tmp = Idle_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('idle', tmp, tmp$ret$2);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c4m_1 = [new ArrayListSerializer($serializer_getInstance_3())];
  }
  protoOf(Companion).s39 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.e4m_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('success', this, 1);
    tmp0_serialDesc.y2y('data', false);
    this.d4m_1 = tmp0_serialDesc;
  }
  protoOf($serializer).e2p = function () {
    return this.d4m_1;
  };
  protoOf($serializer).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_14().c4m_1[0]];
  };
  protoOf($serializer).g2p = function (decoder) {
    var tmp0_desc = this.d4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.e2s(tmp0_desc);
    var tmp7_cached = Companion_getInstance_14().c4m_1;
    if (tmp6_input.t2s()) {
      tmp4_local0 = tmp6_input.q2s(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.q2s(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.f2s(tmp0_desc);
    return Success_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).f4m = function (encoder, value) {
    var tmp0_desc = this.d4m_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().c4m_1;
    tmp1_output.u2t(tmp0_desc, 0, tmp2_cached[0], value.h4m_1);
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer).f2p = function (encoder, value) {
    return this.f4m(encoder, value instanceof Success ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Success_init_$Init$(seen1, data, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().d4m_1);
    }
    ApiListResponse.call($this);
    $this.h4m_1 = data;
    $this.i4m_1 = 8;
    return $this;
  }
  function Success_init_$Create$(seen1, data, serializationConstructorMarker) {
    return Success_init_$Init$(seen1, data, serializationConstructorMarker, objectCreate(protoOf(Success)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).s39 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.k4m_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('error', this, 1);
    tmp0_serialDesc.y2y('message', false);
    this.j4m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).e2p = function () {
    return this.j4m_1;
  };
  protoOf($serializer_0).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_0).g2p = function (decoder) {
    var tmp0_desc = this.j4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.e2s(tmp0_desc);
    if (tmp6_input.t2s()) {
      tmp4_local0 = tmp6_input.o2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.f2s(tmp0_desc);
    return Error_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).l4m = function (encoder, value) {
    var tmp0_desc = this.j4m_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    tmp1_output.s2t(tmp0_desc, 0, value.n4m_1);
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_0).f2p = function (encoder, value) {
    return this.l4m(encoder, value instanceof Error_0 ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Error_init_$Init$(seen1, message, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().j4m_1);
    }
    ApiListResponse.call($this);
    $this.n4m_1 = message;
    $this.o4m_1 = 0;
    return $this;
  }
  function Error_init_$Create$(seen1, message, serializationConstructorMarker) {
    return Error_init_$Init$(seen1, message, serializationConstructorMarker, objectCreate(protoOf(Error_0)));
  }
  function Idle() {
    Idle_instance = this;
    ApiListResponse.call(this);
    this.a4m_1 = 0;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b4m_1 = lazy(tmp_0, ApiListResponse$Idle$_anonymous__yiluc8);
  }
  protoOf(Idle).s39 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Idle).w2z = function (typeParamsSerializers) {
    return this.s39();
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function Success() {
  }
  protoOf(Success).toString = function () {
    return 'Success(data=' + this.h4m_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    return hashCode(this.h4m_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.h4m_1, tmp0_other_with_cast.h4m_1))
      return false;
    return true;
  };
  function Error_0() {
  }
  protoOf(Error_0).toString = function () {
    return 'Error(message=' + this.n4m_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return getStringHashCode(this.n4m_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!(this.n4m_1 === tmp0_other_with_cast.n4m_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ApiListResponse() {
    Companion_getInstance_16();
    this.p4m_1 = 0;
  }
  function ApiListResponseSerializer() {
    ApiListResponseSerializer_instance = this;
    JsonContentPolymorphicSerializer.call(this, getKClass(ApiListResponse));
    this.s4m_1 = 0;
  }
  protoOf(ApiListResponseSerializer).g39 = function (element) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = get_jsonObject(element);
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).d2('data')) {
      tmp = Companion_getInstance_14().s39();
    } else {
      // Inline function 'kotlin.collections.contains' call
      var tmp1_contains = get_jsonObject(element);
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(tmp1_contains, Map) ? tmp1_contains : THROW_CCE()).d2('message')) {
        tmp = Companion_getInstance_15().s39();
      } else {
        tmp = Idle_getInstance().s39();
      }
    }
    return tmp;
  };
  var ApiListResponseSerializer_instance;
  function ApiListResponseSerializer_getInstance() {
    if (ApiListResponseSerializer_instance == null)
      new ApiListResponseSerializer();
    return ApiListResponseSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.t4m_1.w1();
  }
  function Category$Companion$_anonymous__i5239t() {
    return $serializer_getInstance_1();
  }
  var Category_Technology_instance;
  var Category_Programming_instance;
  var Category_Design_instance;
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t4m_1 = lazy(tmp_0, Category$Companion$_anonymous__i5239t);
  }
  protoOf(Companion_2).s39 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_2).w2z = function (typeParamsSerializers) {
    return this.s39();
  };
  var Companion_instance_2;
  function Companion_getInstance_17() {
    Category_initEntries();
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    this.v4m_1 = 0;
    var tmp0_serialDesc = new EnumDescriptor('com.example.blogmultiplatform.models.Category', 3);
    tmp0_serialDesc.y2y('Technology', false);
    tmp0_serialDesc.y2y('Programming', false);
    tmp0_serialDesc.y2y('Design', false);
    this.u4m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).e2p = function () {
    return this.u4m_1;
  };
  protoOf($serializer_1).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_1).g2p = function (decoder) {
    return values()[decoder.a2s(this.u4m_1)];
  };
  protoOf($serializer_1).w4m = function (encoder, value) {
    encoder.i2t(this.u4m_1, value.a5_1);
  };
  protoOf($serializer_1).f2p = function (encoder, value) {
    return this.w4m(encoder, value instanceof Category ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    Category_initEntries();
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function values() {
    return [Category_Technology_getInstance(), Category_Programming_getInstance(), Category_Design_getInstance()];
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
    Category_Technology_instance = new Category('Technology', 0, Theme_Green_getInstance().a4k_1);
    Category_Programming_instance = new Category('Programming', 1, Theme_Yellow_getInstance().a4k_1);
    Category_Design_instance = new Category('Design', 2, Theme_Purple_getInstance().a4k_1);
    Companion_getInstance_17();
  }
  var $ENTRIES;
  function Category(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.z4m_1 = color;
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
  function Bold(selectedText) {
    ControlStyle.call(this, '<strong>' + selectedText + '<\/strong>');
    this.c4n_1 = selectedText;
    this.d4n_1 = 0;
  }
  protoOf(Bold).toString = function () {
    return 'Bold(selectedText=' + this.c4n_1 + ')';
  };
  protoOf(Bold).hashCode = function () {
    return this.c4n_1 == null ? 0 : getStringHashCode(this.c4n_1);
  };
  protoOf(Bold).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bold))
      return false;
    var tmp0_other_with_cast = other instanceof Bold ? other : THROW_CCE();
    if (!(this.c4n_1 == tmp0_other_with_cast.c4n_1))
      return false;
    return true;
  };
  function Italic(selectedText) {
    ControlStyle.call(this, '<em>' + selectedText + '<\/em>');
    this.g4n_1 = selectedText;
    this.h4n_1 = 0;
  }
  protoOf(Italic).toString = function () {
    return 'Italic(selectedText=' + this.g4n_1 + ')';
  };
  protoOf(Italic).hashCode = function () {
    return this.g4n_1 == null ? 0 : getStringHashCode(this.g4n_1);
  };
  protoOf(Italic).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Italic))
      return false;
    var tmp0_other_with_cast = other instanceof Italic ? other : THROW_CCE();
    if (!(this.g4n_1 == tmp0_other_with_cast.g4n_1))
      return false;
    return true;
  };
  function Link(selectedText, href, title) {
    ControlStyle.call(this, '<a href="' + href + '" title="' + title + '">' + selectedText + '<\/a>');
    this.k4n_1 = selectedText;
    this.l4n_1 = href;
    this.m4n_1 = title;
    this.n4n_1 = 0;
  }
  protoOf(Link).toString = function () {
    return 'Link(selectedText=' + this.k4n_1 + ', href=' + this.l4n_1 + ', title=' + this.m4n_1 + ')';
  };
  protoOf(Link).hashCode = function () {
    var result = this.k4n_1 == null ? 0 : getStringHashCode(this.k4n_1);
    result = imul(result, 31) + getStringHashCode(this.l4n_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m4n_1) | 0;
    return result;
  };
  protoOf(Link).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Link))
      return false;
    var tmp0_other_with_cast = other instanceof Link ? other : THROW_CCE();
    if (!(this.k4n_1 == tmp0_other_with_cast.k4n_1))
      return false;
    if (!(this.l4n_1 === tmp0_other_with_cast.l4n_1))
      return false;
    if (!(this.m4n_1 === tmp0_other_with_cast.m4n_1))
      return false;
    return true;
  };
  function Title(selectedText) {
    ControlStyle.call(this, '<h1><strong>' + selectedText + '<\/strong><\/h1>');
    this.q4n_1 = selectedText;
    this.r4n_1 = 0;
  }
  protoOf(Title).toString = function () {
    return 'Title(selectedText=' + this.q4n_1 + ')';
  };
  protoOf(Title).hashCode = function () {
    return this.q4n_1 == null ? 0 : getStringHashCode(this.q4n_1);
  };
  protoOf(Title).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Title))
      return false;
    var tmp0_other_with_cast = other instanceof Title ? other : THROW_CCE();
    if (!(this.q4n_1 == tmp0_other_with_cast.q4n_1))
      return false;
    return true;
  };
  function SubTitle(selectedText) {
    ControlStyle.call(this, '<h3>' + selectedText + '<\/h3>');
    this.u4n_1 = selectedText;
    this.v4n_1 = 0;
  }
  protoOf(SubTitle).toString = function () {
    return 'SubTitle(selectedText=' + this.u4n_1 + ')';
  };
  protoOf(SubTitle).hashCode = function () {
    return this.u4n_1 == null ? 0 : getStringHashCode(this.u4n_1);
  };
  protoOf(SubTitle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SubTitle))
      return false;
    var tmp0_other_with_cast = other instanceof SubTitle ? other : THROW_CCE();
    if (!(this.u4n_1 == tmp0_other_with_cast.u4n_1))
      return false;
    return true;
  };
  function Quote(selectedText) {
    ControlStyle.call(this, '<div style="background-color:#FAFAFA;padding:12px;border-radius:6px;"><em>\u275E ' + selectedText + '<\/em><\/div>');
    this.y4n_1 = selectedText;
    this.z4n_1 = 0;
  }
  protoOf(Quote).toString = function () {
    return 'Quote(selectedText=' + this.y4n_1 + ')';
  };
  protoOf(Quote).hashCode = function () {
    return this.y4n_1 == null ? 0 : getStringHashCode(this.y4n_1);
  };
  protoOf(Quote).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Quote))
      return false;
    var tmp0_other_with_cast = other instanceof Quote ? other : THROW_CCE();
    if (!(this.y4n_1 == tmp0_other_with_cast.y4n_1))
      return false;
    return true;
  };
  function Code(selectedText) {
    ControlStyle.call(this, '<div style="background-color:#0d1117;padding:12px;border-radius:6px;"><pre><code class="language-kotlin"> ' + selectedText + ' <\/code><\/pre><\/div>');
    this.c4o_1 = selectedText;
    this.d4o_1 = 0;
  }
  protoOf(Code).toString = function () {
    return 'Code(selectedText=' + this.c4o_1 + ')';
  };
  protoOf(Code).hashCode = function () {
    return this.c4o_1 == null ? 0 : getStringHashCode(this.c4o_1);
  };
  protoOf(Code).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Code))
      return false;
    var tmp0_other_with_cast = other instanceof Code ? other : THROW_CCE();
    if (!(this.c4o_1 == tmp0_other_with_cast.c4o_1))
      return false;
    return true;
  };
  function Image(selectedText, imageUrl, desc) {
    ControlStyle.call(this, '<img src="' + imageUrl + '" alt="' + desc + '" style="max-width: 100%">' + selectedText + '<\/img>');
    this.g4o_1 = selectedText;
    this.h4o_1 = imageUrl;
    this.i4o_1 = desc;
    this.j4o_1 = 0;
  }
  protoOf(Image).toString = function () {
    return 'Image(selectedText=' + this.g4o_1 + ', imageUrl=' + this.h4o_1 + ', desc=' + this.i4o_1 + ')';
  };
  protoOf(Image).hashCode = function () {
    var result = this.g4o_1 == null ? 0 : getStringHashCode(this.g4o_1);
    result = imul(result, 31) + getStringHashCode(this.h4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i4o_1) | 0;
    return result;
  };
  protoOf(Image).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Image))
      return false;
    var tmp0_other_with_cast = other instanceof Image ? other : THROW_CCE();
    if (!(this.g4o_1 == tmp0_other_with_cast.g4o_1))
      return false;
    if (!(this.h4o_1 === tmp0_other_with_cast.h4o_1))
      return false;
    if (!(this.i4o_1 === tmp0_other_with_cast.i4o_1))
      return false;
    return true;
  };
  function Break(selectedText) {
    ControlStyle.call(this, '' + selectedText + '<br>');
    this.m4o_1 = selectedText;
    this.n4o_1 = 0;
  }
  protoOf(Break).toString = function () {
    return 'Break(selectedText=' + this.m4o_1 + ')';
  };
  protoOf(Break).hashCode = function () {
    return this.m4o_1 == null ? 0 : getStringHashCode(this.m4o_1);
  };
  protoOf(Break).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Break))
      return false;
    var tmp0_other_with_cast = other instanceof Break ? other : THROW_CCE();
    if (!(this.m4o_1 == tmp0_other_with_cast.m4o_1))
      return false;
    return true;
  };
  function ControlStyle(style) {
    this.o4o_1 = style;
    this.p4o_1 = 0;
  }
  var EditorControl_Bold_instance;
  var EditorControl_Italic_instance;
  var EditorControl_Link_instance;
  var EditorControl_Title_instance;
  var EditorControl_SubTitle_instance;
  var EditorControl_Quote_instance;
  var EditorControl_Code_instance;
  var EditorControl_Image_instance;
  function values_0() {
    return [EditorControl_Bold_getInstance(), EditorControl_Italic_getInstance(), EditorControl_Link_getInstance(), EditorControl_Title_getInstance(), EditorControl_SubTitle_getInstance(), EditorControl_Quote_getInstance(), EditorControl_Code_getInstance(), EditorControl_Image_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var EditorControl_entriesInitialized;
  function EditorControl_initEntries() {
    if (EditorControl_entriesInitialized)
      return Unit_getInstance();
    EditorControl_entriesInitialized = true;
    Icon_getInstance();
    EditorControl_Bold_instance = new EditorControl('Bold', 0, '/bold.svg');
    Icon_getInstance();
    EditorControl_Italic_instance = new EditorControl('Italic', 1, '/italic.svg');
    Icon_getInstance();
    EditorControl_Link_instance = new EditorControl('Link', 2, '/link.svg');
    Icon_getInstance();
    EditorControl_Title_instance = new EditorControl('Title', 3, '/title.svg');
    Icon_getInstance();
    EditorControl_SubTitle_instance = new EditorControl('SubTitle', 4, '/subtitle.svg');
    Icon_getInstance();
    EditorControl_Quote_instance = new EditorControl('Quote', 5, '/quote.svg');
    Icon_getInstance();
    EditorControl_Code_instance = new EditorControl('Code', 6, '/code.svg');
    Icon_getInstance();
    EditorControl_Image_instance = new EditorControl('Image', 7, '/image.svg');
  }
  var $ENTRIES_0;
  function EditorControl(name, ordinal, icon) {
    Enum.call(this, name, ordinal);
    this.s4o_1 = icon;
  }
  function EditorControl_Bold_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Bold_instance;
  }
  function EditorControl_Italic_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Italic_instance;
  }
  function EditorControl_Link_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Link_instance;
  }
  function EditorControl_Title_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Title_instance;
  }
  function EditorControl_SubTitle_getInstance() {
    EditorControl_initEntries();
    return EditorControl_SubTitle_instance;
  }
  function EditorControl_Quote_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Quote_instance;
  }
  function EditorControl_Code_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Code_instance;
  }
  function EditorControl_Image_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Image_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_18() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    this.u4o_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.Post', this, 11);
    tmp0_serialDesc.y2y('_id', true);
    tmp0_serialDesc.y2y('author', false);
    tmp0_serialDesc.y2y('date', false);
    tmp0_serialDesc.y2y('title', false);
    tmp0_serialDesc.y2y('subTitle', false);
    tmp0_serialDesc.y2y('thumbnail', false);
    tmp0_serialDesc.y2y('content', false);
    tmp0_serialDesc.y2y('category', false);
    tmp0_serialDesc.y2y('popular', false);
    tmp0_serialDesc.y2y('main', false);
    tmp0_serialDesc.y2y('sponsored', false);
    this.t4o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).e2p = function () {
    return this.t4o_1;
  };
  protoOf($serializer_2).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_1(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_2).g2p = function (decoder) {
    var tmp0_desc = this.t4o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = false;
    var tmp13_local9 = false;
    var tmp14_local10 = false;
    var tmp16_input = decoder.e2s(tmp0_desc);
    if (tmp16_input.t2s()) {
      tmp4_local0 = tmp16_input.o2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.o2s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.k2s(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.o2s(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.o2s(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.o2s(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.o2s(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.q2s(tmp0_desc, 7, $serializer_getInstance_1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.g2s(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.g2s(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.g2s(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.o2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.o2s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.k2s(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.o2s(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.o2s(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.o2s(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.o2s(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.q2s(tmp0_desc, 7, $serializer_getInstance_1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.g2s(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.g2s(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.g2s(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp16_input.f2s(tmp0_desc);
    return Post_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_2).v4o = function (encoder, value) {
    var tmp0_desc = this.t4o_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    if (tmp1_output.y2t(tmp0_desc, 0) ? true : !(value.w4o_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 0, value.w4o_1);
    }
    tmp1_output.s2t(tmp0_desc, 1, value.x4o_1);
    tmp1_output.o2t(tmp0_desc, 2, value.y4o_1);
    tmp1_output.s2t(tmp0_desc, 3, value.z4o_1);
    tmp1_output.s2t(tmp0_desc, 4, value.a4p_1);
    tmp1_output.s2t(tmp0_desc, 5, value.b4p_1);
    tmp1_output.s2t(tmp0_desc, 6, value.c4p_1);
    tmp1_output.u2t(tmp0_desc, 7, $serializer_getInstance_1(), value.d4p_1);
    tmp1_output.k2t(tmp0_desc, 8, value.e4p_1);
    tmp1_output.k2t(tmp0_desc, 9, value.f4p_1);
    tmp1_output.k2t(tmp0_desc, 10, value.g4p_1);
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_2).f2p = function (encoder, value) {
    return this.v4o(encoder, value instanceof Post ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function Post_init_$Init$(seen1, id, author, date, title, subTitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker, $this) {
    if (!(2046 === (2046 & seen1))) {
      throwMissingFieldException(seen1, 2046, $serializer_getInstance_2().t4o_1);
    }
    if (0 === (seen1 & 1))
      $this.w4o_1 = '';
    else
      $this.w4o_1 = id;
    $this.x4o_1 = author;
    $this.y4o_1 = date;
    $this.z4o_1 = title;
    $this.a4p_1 = subTitle;
    $this.b4p_1 = thumbnail;
    $this.c4p_1 = content;
    $this.d4p_1 = category;
    $this.e4p_1 = popular;
    $this.f4p_1 = main;
    $this.g4p_1 = sponsored;
    $this.h4p_1 = 0;
    return $this;
  }
  function Post_init_$Create$(seen1, id, author, date, title, subTitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker) {
    return Post_init_$Init$(seen1, id, author, date, title, subTitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker, objectCreate(protoOf(Post)));
  }
  function Post(id, author, date, title, subTitle, thumbnail, content, category, popular, main, sponsored) {
    Companion_getInstance_18();
    id = id === VOID ? '' : id;
    this.w4o_1 = id;
    this.x4o_1 = author;
    this.y4o_1 = date;
    this.z4o_1 = title;
    this.a4p_1 = subTitle;
    this.b4p_1 = thumbnail;
    this.c4p_1 = content;
    this.d4p_1 = category;
    this.e4p_1 = popular;
    this.f4p_1 = main;
    this.g4p_1 = sponsored;
    this.h4p_1 = 0;
  }
  protoOf(Post).toString = function () {
    return 'Post(id=' + this.w4o_1 + ', author=' + this.x4o_1 + ', date=' + toString_0(this.y4o_1) + ', title=' + this.z4o_1 + ', subTitle=' + this.a4p_1 + ', thumbnail=' + this.b4p_1 + ', content=' + this.c4p_1 + ', category=' + this.d4p_1 + ', popular=' + this.e4p_1 + ', main=' + this.f4p_1 + ', sponsored=' + this.g4p_1 + ')';
  };
  protoOf(Post).hashCode = function () {
    var result = getStringHashCode(this.w4o_1);
    result = imul(result, 31) + getStringHashCode(this.x4o_1) | 0;
    result = imul(result, 31) + this.y4o_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.z4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a4p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b4p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c4p_1) | 0;
    result = imul(result, 31) + this.d4p_1.hashCode() | 0;
    result = imul(result, 31) + (this.e4p_1 | 0) | 0;
    result = imul(result, 31) + (this.f4p_1 | 0) | 0;
    result = imul(result, 31) + (this.g4p_1 | 0) | 0;
    return result;
  };
  protoOf(Post).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Post))
      return false;
    var tmp0_other_with_cast = other instanceof Post ? other : THROW_CCE();
    if (!(this.w4o_1 === tmp0_other_with_cast.w4o_1))
      return false;
    if (!(this.x4o_1 === tmp0_other_with_cast.x4o_1))
      return false;
    if (!this.y4o_1.equals(tmp0_other_with_cast.y4o_1))
      return false;
    if (!(this.z4o_1 === tmp0_other_with_cast.z4o_1))
      return false;
    if (!(this.a4p_1 === tmp0_other_with_cast.a4p_1))
      return false;
    if (!(this.b4p_1 === tmp0_other_with_cast.b4p_1))
      return false;
    if (!(this.c4p_1 === tmp0_other_with_cast.c4p_1))
      return false;
    if (!this.d4p_1.equals(tmp0_other_with_cast.d4p_1))
      return false;
    if (!(this.e4p_1 === tmp0_other_with_cast.e4p_1))
      return false;
    if (!(this.f4p_1 === tmp0_other_with_cast.f4p_1))
      return false;
    if (!(this.g4p_1 === tmp0_other_with_cast.g4p_1))
      return false;
    return true;
  };
  function $serializer_3() {
    $serializer_instance_3 = this;
    this.j4p_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.PostWithoutDetails', this, 7);
    tmp0_serialDesc.y2y('_id', true);
    tmp0_serialDesc.y2y('author', false);
    tmp0_serialDesc.y2y('date', false);
    tmp0_serialDesc.y2y('title', false);
    tmp0_serialDesc.y2y('subTitle', false);
    tmp0_serialDesc.y2y('thumbnail', false);
    tmp0_serialDesc.y2y('category', false);
    this.i4p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).e2p = function () {
    return this.i4p_1;
  };
  protoOf($serializer_3).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_1()];
  };
  protoOf($serializer_3).g2p = function (decoder) {
    var tmp0_desc = this.i4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp12_input = decoder.e2s(tmp0_desc);
    if (tmp12_input.t2s()) {
      tmp4_local0 = tmp12_input.o2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.o2s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.k2s(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.o2s(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.o2s(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.o2s(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.q2s(tmp0_desc, 6, $serializer_getInstance_1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.o2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.o2s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.k2s(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.o2s(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.o2s(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.o2s(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.q2s(tmp0_desc, 6, $serializer_getInstance_1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.f2s(tmp0_desc);
    return PostWithoutDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).k4p = function (encoder, value) {
    var tmp0_desc = this.i4p_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    if (tmp1_output.y2t(tmp0_desc, 0) ? true : !(value.c4k_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 0, value.c4k_1);
    }
    tmp1_output.s2t(tmp0_desc, 1, value.d4k_1);
    tmp1_output.o2t(tmp0_desc, 2, value.e4k_1);
    tmp1_output.s2t(tmp0_desc, 3, value.f4k_1);
    tmp1_output.s2t(tmp0_desc, 4, value.g4k_1);
    tmp1_output.s2t(tmp0_desc, 5, value.h4k_1);
    tmp1_output.u2t(tmp0_desc, 6, $serializer_getInstance_1(), value.i4k_1);
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_3).f2p = function (encoder, value) {
    return this.k4p(encoder, value instanceof PostWithoutDetails ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PostWithoutDetails_init_$Init$(seen1, id, author, date, title, subTitle, thumbnail, category, serializationConstructorMarker, $this) {
    if (!(126 === (126 & seen1))) {
      throwMissingFieldException(seen1, 126, $serializer_getInstance_3().i4p_1);
    }
    if (0 === (seen1 & 1))
      $this.c4k_1 = '';
    else
      $this.c4k_1 = id;
    $this.d4k_1 = author;
    $this.e4k_1 = date;
    $this.f4k_1 = title;
    $this.g4k_1 = subTitle;
    $this.h4k_1 = thumbnail;
    $this.i4k_1 = category;
    $this.j4k_1 = 0;
    return $this;
  }
  function PostWithoutDetails_init_$Create$(seen1, id, author, date, title, subTitle, thumbnail, category, serializationConstructorMarker) {
    return PostWithoutDetails_init_$Init$(seen1, id, author, date, title, subTitle, thumbnail, category, serializationConstructorMarker, objectCreate(protoOf(PostWithoutDetails)));
  }
  function PostWithoutDetails() {
  }
  protoOf(PostWithoutDetails).toString = function () {
    return 'PostWithoutDetails(id=' + this.c4k_1 + ', author=' + this.d4k_1 + ', date=' + toString_0(this.e4k_1) + ', title=' + this.f4k_1 + ', subTitle=' + this.g4k_1 + ', thumbnail=' + this.h4k_1 + ', category=' + this.i4k_1 + ')';
  };
  protoOf(PostWithoutDetails).hashCode = function () {
    var result = getStringHashCode(this.c4k_1);
    result = imul(result, 31) + getStringHashCode(this.d4k_1) | 0;
    result = imul(result, 31) + this.e4k_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.f4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h4k_1) | 0;
    result = imul(result, 31) + this.i4k_1.hashCode() | 0;
    return result;
  };
  protoOf(PostWithoutDetails).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PostWithoutDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PostWithoutDetails ? other : THROW_CCE();
    if (!(this.c4k_1 === tmp0_other_with_cast.c4k_1))
      return false;
    if (!(this.d4k_1 === tmp0_other_with_cast.d4k_1))
      return false;
    if (!this.e4k_1.equals(tmp0_other_with_cast.e4k_1))
      return false;
    if (!(this.f4k_1 === tmp0_other_with_cast.f4k_1))
      return false;
    if (!(this.g4k_1 === tmp0_other_with_cast.g4k_1))
      return false;
    if (!(this.h4k_1 === tmp0_other_with_cast.h4k_1))
      return false;
    if (!this.i4k_1.equals(tmp0_other_with_cast.i4k_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    this.m4p_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.RandomJoke', this, 2);
    tmp0_serialDesc.y2y('id', false);
    tmp0_serialDesc.y2y('joke', false);
    this.l4p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).e2p = function () {
    return this.l4p_1;
  };
  protoOf($serializer_4).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_4).g2p = function (decoder) {
    var tmp0_desc = this.l4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp7_input = decoder.e2s(tmp0_desc);
    if (tmp7_input.t2s()) {
      tmp4_local0 = tmp7_input.j2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o2s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o2s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.f2s(tmp0_desc);
    return RandomJoke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).n4p = function (encoder, value) {
    var tmp0_desc = this.l4p_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    tmp1_output.n2t(tmp0_desc, 0, value.o4p_1);
    tmp1_output.s2t(tmp0_desc, 1, value.p4p_1);
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_4).f2p = function (encoder, value) {
    return this.n4p(encoder, value instanceof RandomJoke ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_4().l4p_1);
    }
    $this.o4p_1 = id;
    $this.p4p_1 = joke;
    $this.q4p_1 = 0;
    return $this;
  }
  function RandomJoke_init_$Create$(seen1, id, joke, serializationConstructorMarker) {
    return RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, objectCreate(protoOf(RandomJoke)));
  }
  function RandomJoke(id, joke) {
    Companion_getInstance_19();
    this.o4p_1 = id;
    this.p4p_1 = joke;
    this.q4p_1 = 0;
  }
  protoOf(RandomJoke).toString = function () {
    return 'RandomJoke(id=' + this.o4p_1 + ', joke=' + this.p4p_1 + ')';
  };
  protoOf(RandomJoke).hashCode = function () {
    var result = this.o4p_1;
    result = imul(result, 31) + getStringHashCode(this.p4p_1) | 0;
    return result;
  };
  protoOf(RandomJoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RandomJoke))
      return false;
    var tmp0_other_with_cast = other instanceof RandomJoke ? other : THROW_CCE();
    if (!(this.o4p_1 === tmp0_other_with_cast.o4p_1))
      return false;
    if (!(this.p4p_1 === tmp0_other_with_cast.p4p_1))
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
    this.a4k_1 = hex;
    this.b4k_1 = rgb;
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
  function Theme_Red_getInstance() {
    Theme_initEntries();
    return Theme_Red_instance;
  }
  function Theme_Purple_getInstance() {
    Theme_initEntries();
    return Theme_Purple_instance;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_20() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    this.s4p_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.User', this, 3);
    tmp0_serialDesc.y2y('_id', true);
    tmp0_serialDesc.y2y('username', true);
    tmp0_serialDesc.y2y('password', true);
    this.r4p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).e2p = function () {
    return this.r4p_1;
  };
  protoOf($serializer_5).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_5).g2p = function (decoder) {
    var tmp0_desc = this.r4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.e2s(tmp0_desc);
    if (tmp8_input.t2s()) {
      tmp4_local0 = tmp8_input.o2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.o2s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.o2s(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.o2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.o2s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.o2s(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.f2s(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).t4p = function (encoder, value) {
    var tmp0_desc = this.r4p_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    if (tmp1_output.y2t(tmp0_desc, 0) ? true : !(value.u4p_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 0, value.u4p_1);
    }
    if (tmp1_output.y2t(tmp0_desc, 1) ? true : !(value.v4p_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 1, value.v4p_1);
    }
    if (tmp1_output.y2t(tmp0_desc, 2) ? true : !(value.w4p_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 2, value.w4p_1);
    }
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_5).f2p = function (encoder, value) {
    return this.t4p(encoder, value instanceof User ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_5().r4p_1);
    }
    if (0 === (seen1 & 1))
      $this.u4p_1 = '';
    else
      $this.u4p_1 = id;
    if (0 === (seen1 & 2))
      $this.v4p_1 = '';
    else
      $this.v4p_1 = username;
    if (0 === (seen1 & 4))
      $this.w4p_1 = '';
    else
      $this.w4p_1 = password;
    $this.x4p_1 = 0;
    return $this;
  }
  function User_init_$Create$(seen1, id, username, password, serializationConstructorMarker) {
    return User_init_$Init$(seen1, id, username, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(id, username, password) {
    Companion_getInstance_20();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this.u4p_1 = id;
    this.v4p_1 = username;
    this.w4p_1 = password;
    this.x4p_1 = 0;
  }
  protoOf(User).toString = function () {
    return 'User(id=' + this.u4p_1 + ', username=' + this.v4p_1 + ', password=' + this.w4p_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.u4p_1);
    result = imul(result, 31) + getStringHashCode(this.v4p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w4p_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.u4p_1 === tmp0_other_with_cast.u4p_1))
      return false;
    if (!(this.v4p_1 === tmp0_other_with_cast.v4p_1))
      return false;
    if (!(this.w4p_1 === tmp0_other_with_cast.w4p_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_21() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    this.z4p_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.y2y('_id', true);
    tmp0_serialDesc.y2y('username', true);
    this.y4p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).e2p = function () {
    return this.y4p_1;
  };
  protoOf($serializer_6).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_6).g2p = function (decoder) {
    var tmp0_desc = this.y4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.e2s(tmp0_desc);
    if (tmp7_input.t2s()) {
      tmp4_local0 = tmp7_input.o2s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o2s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.u2s(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o2s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o2s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.f2s(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).a4q = function (encoder, value) {
    var tmp0_desc = this.y4p_1;
    var tmp1_output = encoder.e2s(tmp0_desc);
    if (tmp1_output.y2t(tmp0_desc, 0) ? true : !(value.b4q_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 0, value.b4q_1);
    }
    if (tmp1_output.y2t(tmp0_desc, 1) ? true : !(value.c4q_1 === '')) {
      tmp1_output.s2t(tmp0_desc, 1, value.c4q_1);
    }
    tmp1_output.f2s(tmp0_desc);
  };
  protoOf($serializer_6).f2p = function (encoder, value) {
    return this.a4q(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_6().y4p_1);
    }
    if (0 === (seen1 & 1))
      $this.b4q_1 = '';
    else
      $this.b4q_1 = id;
    if (0 === (seen1 & 2))
      $this.c4q_1 = '';
    else
      $this.c4q_1 = username;
    $this.d4q_1 = 0;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen1, id, username, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen1, id, username, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function UserWithoutPassword(id, username) {
    Companion_getInstance_21();
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    this.b4q_1 = id;
    this.c4q_1 = username;
    this.d4q_1 = 0;
  }
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.b4q_1 + ', username=' + this.c4q_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.b4q_1);
    result = imul(result, 31) + getStringHashCode(this.c4q_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.b4q_1 === tmp0_other_with_cast.b4q_1))
      return false;
    if (!(this.c4q_1 === tmp0_other_with_cast.c4q_1))
      return false;
    return true;
  };
  function AdminHome() {
    AdminHome_instance = this;
    Screen.call(this, '/admin/');
    this.g4q_1 = 0;
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
    this.j4q_1 = 0;
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
    this.m4q_1 = 0;
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
    this.p4q_1 = 0;
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
  function AdminSuccess() {
    AdminSuccess_instance = this;
    Screen.call(this, '/admin/success');
    this.s4q_1 = 0;
  }
  protoOf(AdminSuccess).toString = function () {
    return 'AdminSuccess';
  };
  protoOf(AdminSuccess).hashCode = function () {
    return -729530607;
  };
  protoOf(AdminSuccess).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminSuccess))
      return false;
    other instanceof AdminSuccess || THROW_CCE();
    return true;
  };
  var AdminSuccess_instance;
  function AdminSuccess_getInstance() {
    if (AdminSuccess_instance == null)
      new AdminSuccess();
    return AdminSuccess_instance;
  }
  function Screen(route) {
    this.l4k_1 = route;
    this.m4k_1 = 0;
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
  function CreatePageUiState(id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup) {
    id = id === VOID ? '' : id;
    title = title === VOID ? '' : title;
    subTitle = subTitle === VOID ? '' : subTitle;
    thumbnail = thumbnail === VOID ? '' : thumbnail;
    content = content === VOID ? '' : content;
    thumbnailInputDisabled = thumbnailInputDisabled === VOID ? true : thumbnailInputDisabled;
    category = category === VOID ? Category_Programming_getInstance() : category;
    popular = popular === VOID ? false : popular;
    main = main === VOID ? false : main;
    sponsored = sponsored === VOID ? false : sponsored;
    editorVisibility = editorVisibility === VOID ? true : editorVisibility;
    messagePopup = messagePopup === VOID ? false : messagePopup;
    linkPopup = linkPopup === VOID ? false : linkPopup;
    imagePopup = imagePopup === VOID ? false : imagePopup;
    this.t4q_1 = id;
    this.u4q_1 = title;
    this.v4q_1 = subTitle;
    this.w4q_1 = thumbnail;
    this.x4q_1 = content;
    this.y4q_1 = thumbnailInputDisabled;
    this.z4q_1 = category;
    this.a4r_1 = popular;
    this.b4r_1 = main;
    this.c4r_1 = sponsored;
    this.d4r_1 = editorVisibility;
    this.e4r_1 = messagePopup;
    this.f4r_1 = linkPopup;
    this.g4r_1 = imagePopup;
    this.h4r_1 = 8;
  }
  protoOf(CreatePageUiState).i4r = function (id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup) {
    return new CreatePageUiState(id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup);
  };
  protoOf(CreatePageUiState).j4r = function (id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup, $super) {
    id = id === VOID ? this.t4q_1 : id;
    title = title === VOID ? this.u4q_1 : title;
    subTitle = subTitle === VOID ? this.v4q_1 : subTitle;
    thumbnail = thumbnail === VOID ? this.w4q_1 : thumbnail;
    content = content === VOID ? this.x4q_1 : content;
    thumbnailInputDisabled = thumbnailInputDisabled === VOID ? this.y4q_1 : thumbnailInputDisabled;
    category = category === VOID ? this.z4q_1 : category;
    popular = popular === VOID ? this.a4r_1 : popular;
    main = main === VOID ? this.b4r_1 : main;
    sponsored = sponsored === VOID ? this.c4r_1 : sponsored;
    editorVisibility = editorVisibility === VOID ? this.d4r_1 : editorVisibility;
    messagePopup = messagePopup === VOID ? this.e4r_1 : messagePopup;
    linkPopup = linkPopup === VOID ? this.f4r_1 : linkPopup;
    imagePopup = imagePopup === VOID ? this.g4r_1 : imagePopup;
    return $super === VOID ? this.i4r(id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup) : $super.i4r.call(this, id, title, subTitle, thumbnail, content, thumbnailInputDisabled, category, popular, main, sponsored, editorVisibility, messagePopup, linkPopup, imagePopup);
  };
  protoOf(CreatePageUiState).toString = function () {
    return 'CreatePageUiState(id=' + this.t4q_1 + ', title=' + this.u4q_1 + ', subTitle=' + this.v4q_1 + ', thumbnail=' + this.w4q_1 + ', content=' + this.x4q_1 + ', thumbnailInputDisabled=' + this.y4q_1 + ', category=' + this.z4q_1 + ', popular=' + this.a4r_1 + ', main=' + this.b4r_1 + ', sponsored=' + this.c4r_1 + ', editorVisibility=' + this.d4r_1 + ', messagePopup=' + this.e4r_1 + ', linkPopup=' + this.f4r_1 + ', imagePopup=' + this.g4r_1 + ')';
  };
  protoOf(CreatePageUiState).hashCode = function () {
    var result = getStringHashCode(this.t4q_1);
    result = imul(result, 31) + getStringHashCode(this.u4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x4q_1) | 0;
    result = imul(result, 31) + (this.y4q_1 | 0) | 0;
    result = imul(result, 31) + this.z4q_1.hashCode() | 0;
    result = imul(result, 31) + (this.a4r_1 | 0) | 0;
    result = imul(result, 31) + (this.b4r_1 | 0) | 0;
    result = imul(result, 31) + (this.c4r_1 | 0) | 0;
    result = imul(result, 31) + (this.d4r_1 | 0) | 0;
    result = imul(result, 31) + (this.e4r_1 | 0) | 0;
    result = imul(result, 31) + (this.f4r_1 | 0) | 0;
    result = imul(result, 31) + (this.g4r_1 | 0) | 0;
    return result;
  };
  protoOf(CreatePageUiState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreatePageUiState))
      return false;
    var tmp0_other_with_cast = other instanceof CreatePageUiState ? other : THROW_CCE();
    if (!(this.t4q_1 === tmp0_other_with_cast.t4q_1))
      return false;
    if (!(this.u4q_1 === tmp0_other_with_cast.u4q_1))
      return false;
    if (!(this.v4q_1 === tmp0_other_with_cast.v4q_1))
      return false;
    if (!(this.w4q_1 === tmp0_other_with_cast.w4q_1))
      return false;
    if (!(this.x4q_1 === tmp0_other_with_cast.x4q_1))
      return false;
    if (!(this.y4q_1 === tmp0_other_with_cast.y4q_1))
      return false;
    if (!this.z4q_1.equals(tmp0_other_with_cast.z4q_1))
      return false;
    if (!(this.a4r_1 === tmp0_other_with_cast.a4r_1))
      return false;
    if (!(this.b4r_1 === tmp0_other_with_cast.b4r_1))
      return false;
    if (!(this.c4r_1 === tmp0_other_with_cast.c4r_1))
      return false;
    if (!(this.d4r_1 === tmp0_other_with_cast.d4r_1))
      return false;
    if (!(this.e4r_1 === tmp0_other_with_cast.e4r_1))
      return false;
    if (!(this.f4r_1 === tmp0_other_with_cast.f4r_1))
      return false;
    if (!(this.g4r_1 === tmp0_other_with_cast.g4r_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1358622140, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-1.<anonymous> (Create.kt:81)');
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
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1486966214, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-2.<anonymous> (Create.kt:486)');
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
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1628187215, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-3.<anonymous> (Create.kt:552)');
      }
      var tmp = Companion_getInstance_1();
      Constant_getInstance();
      var tmp0_modifier = fontWeight(fontSize(fontFamily(tmp, ['Roboto']), get_px(14)), Companion_getInstance_5().l2g());
      SpanText$composable('Preview', tmp0_modifier, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-2081218814, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-4.<anonymous> (Create.kt:642)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(2044258482, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$CreateKt.lambda-5.<anonymous> (Create.kt:664)');
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
    tmp.k4r_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1358622140, false, ComposableSingletons$CreateKt$lambda_1$lambda_kihwkw));
    var tmp_0 = this;
    tmp_0.l4r_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-1486966214, false, ComposableSingletons$CreateKt$lambda_2$lambda_8b4khb));
    var tmp_1 = this;
    tmp_1.m4r_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1628187215, false, ComposableSingletons$CreateKt$lambda_3$lambda_xwd0fm));
    var tmp_2 = this;
    tmp_2.n4r_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-2081218814, false, ComposableSingletons$CreateKt$lambda_4$lambda_52qjdf));
    var tmp_3 = this;
    tmp_3.o4r_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(2044258482, false, ComposableSingletons$CreateKt$lambda_5$lambda_nqvxos));
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
        traceEventStart(805766537, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreatePage$composable (Create.kt:79)');
      }
      isUserLoggedIn$composable(ComposableSingletons$CreateKt_getInstance().k4r_1, $composer_0, 6);
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
        traceEventStart(1173689254, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable (Create.kt:86)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp1_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_1 = tmp1_rememberCoroutineScope$composable;
      $composer_1.ny(102870005);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = CreateScreen$composable$lambda_1;
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
        var value_0 = mutableStateOf(new CreatePageUiState());
        $composer_3.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_3.oy();
      var uiState$delegate = tmp0_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1070748091, true, CreateScreen$composable$lambda_2(breakpoint, uiState$delegate, scope, context));
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
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_45(dispatchReceiver);
        $composer_4.fz(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_2 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_4.oy();
      AdminPageLayout$composable(tmp0_2, $composer_0, 6);
      $composer_0.ny(-1442162742);
      if (CreateScreen$composable$lambda(uiState$delegate).e4r_1) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.ny(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_5.gz(uiState$delegate);
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = $composer_5.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
          var value_2 = CreateScreen$composable$lambda_3(uiState$delegate);
          $composer_5.fz(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = tmp0_let_2;
        }
        var tmp_7 = tmp_6;
        var tmp0_3 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        $composer_5.oy();
        MessagePopup$composable('Please fill out all fields', tmp0_3, $composer_0, 6);
      }
      $composer_0.oy();
      $composer_0.ny(-1442162510);
      if (CreateScreen$composable$lambda(uiState$delegate).f4r_1) {
        var tmp_8 = EditorControl_Link_getInstance();
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_0;
        $composer_6.ny(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_6.gz(uiState$delegate);
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = $composer_6.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().hy_1) {
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
          var value_3 = CreateScreen$composable$lambda_4(uiState$delegate);
          $composer_6.fz(value_3);
          tmp_9 = value_3;
        } else {
          tmp_9 = tmp0_let_3;
        }
        var tmp_10 = tmp_9;
        var tmp0_4 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        $composer_6.oy();
        var tmp_11 = tmp0_4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_7 = $composer_0;
        $composer_7.ny(547886695);
        sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = $composer_7.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (false ? true : tmp0_let_4 === Companion_getInstance_0().hy_1) {
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
          var value_4 = CreateScreen$composable$lambda_5;
          $composer_7.fz(value_4);
          tmp_12 = value_4;
        } else {
          tmp_12 = tmp0_let_4;
        }
        var tmp_13 = tmp_12;
        var tmp0_5 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        $composer_7.oy();
        LinkPopup$composable(tmp_8, tmp_11, tmp0_5, $composer_0, 6);
      }
      $composer_0.oy();
      if (CreateScreen$composable$lambda(uiState$delegate).g4r_1) {
        var tmp_14 = EditorControl_Image_getInstance();
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_8 = $composer_0;
        $composer_8.ny(-838505973);
        sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_8.gz(uiState$delegate);
        // Inline function 'kotlin.let' call
        var tmp0_let_5 = $composer_8.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_15;
        if (tmp1_cache_2 ? true : tmp0_let_5 === Companion_getInstance_0().hy_1) {
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
          var value_5 = CreateScreen$composable$lambda_6(uiState$delegate);
          $composer_8.fz(value_5);
          tmp_15 = value_5;
        } else {
          tmp_15 = tmp0_let_5;
        }
        var tmp_16 = tmp_15;
        var tmp0_6 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
        $composer_8.oy();
        var tmp_17 = tmp0_6;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_9 = $composer_0;
        $composer_9.ny(547886695);
        sourceInformation($composer_9, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var tmp0_let_6 = $composer_9.ez();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_18;
        if (false ? true : tmp0_let_6 === Companion_getInstance_0().hy_1) {
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>' call
          var value_6 = CreateScreen$composable$lambda_7;
          $composer_9.fz(value_6);
          tmp_18 = value_6;
        } else {
          tmp_18 = tmp0_let_6;
        }
        var tmp_19 = tmp_18;
        var tmp0_7 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
        $composer_9.oy();
        LinkPopup$composable(tmp_14, tmp_17, tmp0_7, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(CreateScreen$composable$lambda_8($changed));
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
        traceEventStart(84150311, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable (Create.kt:369)');
      }
      var tmp = cursor(backgroundColor(fillMaxWidth(height(classNames(margin_1(Companion_getInstance_1(), get_px(12)), ['dropdown']), get_px(54))), Theme_LightGray_getInstance().b4k_1), Companion_getInstance_10().h2g());
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
        var value_0 = ComposableLambda$invoke$ref_50(dispatchReceiver);
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
        traceEventStart(-1033023733, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable (Create.kt:433)');
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
        var value = ComposableLambda$invoke$ref_51(dispatchReceiver);
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
  function EditorControls$composable(breakpoint, editorVisibility, onEditorVisibilityChanged, onLinkClick, onImageClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1026801439);
    sourceInformation($composer_0, 'C(EditorControls$composable)P(!3,4)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.hz(editorVisibility) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.jz(onEditorVisibilityChanged) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.jz(onLinkClick) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.jz(onImageClick) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1026801439, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable (Create.kt:501)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 486631450, true, EditorControls$composable$lambda($dirty, onLinkClick, onImageClick, breakpoint, editorVisibility, onEditorVisibilityChanged));
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
        var value = ComposableLambda$invoke$ref_55(dispatchReceiver);
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
      tmp0_safe_receiver.r1d(EditorControls$composable$lambda_0(breakpoint, editorVisibility, onEditorVisibilityChanged, onLinkClick, onImageClick, $changed));
    }
  }
  function EditorControlView$composable(control, onClick_0, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1958569962);
    sourceInformation($composer_0, 'C(EditorControlView$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.gz(control) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.jz(onClick_0) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1958569962, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.EditorControlView$composable (Create.kt:569)');
      }
      var tmp = cursor(borderRadius(padding(fillMaxHeight(toModifier$composable(get_EditorKeyStyle(), [], $composer_0, 64)), VOID, get_px(12)), get_px(4)), Companion_getInstance_10().h2g());
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControlView$composable.<anonymous>' call
        var value = EditorControlView$composable$lambda(onClick_0);
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
      // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControlView$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1864426029, true, EditorControlView$composable$lambda_0(control));
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControlView$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_56(dispatchReceiver);
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
      tmp0_safe_receiver.r1d(EditorControlView$composable$lambda_1(control, onClick_0, $changed));
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
        traceEventStart(-1599106079, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable (Create.kt:587)');
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
        var value = ComposableLambda$invoke$ref_57(dispatchReceiver);
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
        traceEventStart(152710867, $dirty, -1, 'com.example.blogmultiplatform.pages.admin.CreateButton$composable (Create.kt:647)');
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
      var tmp_2 = noBorder(color(backgroundColor(margin(height(fillMaxWidth(onClick(tmp, tmp0)), get_px(54)), get_px(24)), Theme_Primary_getInstance().b4k_1), Colors_getInstance().t3o()));
      Constant_getInstance();
      Button$composable(toAttrs(borderRadius(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(16)), get_px(4))), ComposableSingletons$CreateKt_getInstance().o4r_1, $composer_0, 48, 0);
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
  function CreateScreen$composable$lambda($uiState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $uiState$delegate.w1();
  }
  function CreateScreen$composable$lambda_0($uiState$delegate, value) {
    getLocalDelegateReference('uiState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $uiState$delegate.ut(value);
  }
  function CreatePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      CreatePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($uiState$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($uiState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-569429006, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:118)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiState$delegate).a4r_1;
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
        var tmp1_cache = $composer_1.gz($uiState$delegate);
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
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda($uiState$delegate);
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
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().b4k_1);
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
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($uiState$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($uiState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-146937893, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:143)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiState$delegate).b4r_1;
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
        var tmp1_cache = $composer_1.gz($uiState$delegate);
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
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_0($uiState$delegate);
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
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().b4k_1);
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
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($uiState$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($uiState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1054203450, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:163)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = CreateScreen$composable$lambda($uiState$delegate).c4r_1;
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
        var tmp1_cache = $composer_1.gz($uiState$delegate);
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
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda$lambda_1($uiState$delegate);
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
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().b4k_1);
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
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $uiState$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(833826645, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:110)');
        }
        var tmp_0 = margin_0(Companion_getInstance_1(), VOID, $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(0) : get_px(24), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0));
        var tmp_1 = CenterVertically_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -569429006, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda($uiState$delegate));
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
          tmp$ret$0 = ComposableLambda$invoke$ref_38(dispatchReceiver);
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
        var dispatchReceiver_0 = composableLambda(tmp_7, -146937893, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_0($uiState$delegate));
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
          tmp$ret$7 = ComposableLambda$invoke$ref_39(dispatchReceiver_0);
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
        var dispatchReceiver_1 = composableLambda(tmp_11, 1054203450, true, CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_1($uiState$delegate));
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
          tmp$ret$14 = ComposableLambda$invoke$ref_40(dispatchReceiver_1);
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
  function ComposableLambda$invoke$ref_41($boundThis) {
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
  function CreateScreen$composable$lambda$lambda$lambda$lambda_2($uiState$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($uiState$delegate) {
    return function (it) {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, !it));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_3($uiState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520315333, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:231)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_checked = !CreateScreen$composable$lambda($uiState$delegate).y4q_1;
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
        var tmp1_cache = $composer_1.gz($uiState$delegate);
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
          tmp$ret$0 = CreateScreen$composable$lambda$lambda$lambda$lambda$lambda_2($uiState$delegate);
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
        var tmp3_modifier = color(fontFamily(tmp_3, ['Roboto']), Theme_HalfBlack_getInstance().b4k_1);
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
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_4($uiState$delegate) {
    return function (filename, file) {
      var tmp = document;
      ID_getInstance();
      var tmp_0 = tmp.getElementById('thumbnailInput');
      (tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE()).value = filename;
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, file));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_5($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, !CreateScreen$composable$lambda($uiState$delegate).d4r_1));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_6($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_7($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$slambda($context, $uiState$delegate, resultContinuation) {
    this.x4r_1 = $context;
    this.y4r_1 = $uiState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            var tmp0_get = localStorage;
            var tmp0_author = toString(tmp0_get['username']);
            var tmp1_title = CreateScreen$composable$lambda(this.y4r_1).u4q_1;
            var tmp2_subTitle = CreateScreen$composable$lambda(this.y4r_1).v4q_1;
            var tmp3_date = numberToLong(Date.now());
            var tmp4_thumbnail = CreateScreen$composable$lambda(this.y4r_1).w4q_1;
            var tmp5_content = CreateScreen$composable$lambda(this.y4r_1).x4q_1;
            var tmp6_category = CreateScreen$composable$lambda(this.y4r_1).z4q_1;
            var tmp7_popular = CreateScreen$composable$lambda(this.y4r_1).a4r_1;
            var tmp8_sponsored = CreateScreen$composable$lambda(this.y4r_1).c4r_1;
            var tmp9_main = CreateScreen$composable$lambda(this.y4r_1).b4r_1;
            suspendResult = addPost(new Post(VOID, tmp0_author, tmp3_date, tmp1_title, tmp2_subTitle, tmp4_thumbnail, tmp5_content, tmp6_category, tmp7_popular, tmp9_main, tmp8_sponsored), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (result) {
              this.x4r_1.u3i_1.l3l(AdminSuccess_getInstance().l4k_1);
            }

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
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda).l1f = function ($this$launch, completion) {
    var i = new CreateScreen$composable$lambda$lambda$lambda$lambda$slambda(this.x4r_1, this.y4r_1, completion);
    i.z4r_1 = $this$launch;
    return i;
  };
  function CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_0($context, $uiState$delegate, resultContinuation) {
    var i = new CreateScreen$composable$lambda$lambda$lambda$lambda$slambda($context, $uiState$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1($uiState$delegate, resultContinuation) {
    this.i4s_1 = $uiState$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1).k1f = function ($this$launch, $completion) {
    var tmp = this.l1f($this$launch, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            CreateScreen$composable$lambda_0(this.i4s_1, CreateScreen$composable$lambda(this.i4s_1).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true));
            this.sh_1 = 1;
            suspendResult = delay(new Long(3000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            CreateScreen$composable$lambda_0(this.i4s_1, CreateScreen$composable$lambda(this.i4s_1).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false));
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
  protoOf(CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1).l1f = function ($this$launch, completion) {
    var i = new CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1(this.i4s_1, completion);
    i.j4s_1 = $this$launch;
    return i;
  };
  function CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_2($uiState$delegate, resultContinuation) {
    var i = new CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_1($uiState$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1f($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CreateScreen$composable$lambda$lambda$lambda$lambda_8($scope, $uiState$delegate, $context) {
    return function () {
      var tmp = CreateScreen$composable$lambda($uiState$delegate);
      var tmp_0 = document;
      ID_getInstance();
      var tmp_1 = tmp_0.getElementById('titleInput');
      CreateScreen$composable$lambda_0($uiState$delegate, tmp.j4r(VOID, (tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE()).value));
      var tmp_2 = CreateScreen$composable$lambda($uiState$delegate);
      var tmp_3 = document;
      ID_getInstance();
      var tmp_4 = tmp_3.getElementById('subTitleInput');
      CreateScreen$composable$lambda_0($uiState$delegate, tmp_2.j4r(VOID, VOID, (tmp_4 instanceof HTMLInputElement ? tmp_4 : THROW_CCE()).value));
      var tmp_5 = CreateScreen$composable$lambda($uiState$delegate);
      var tmp_6 = document;
      ID_getInstance();
      var tmp_7 = tmp_6.getElementById('editor');
      CreateScreen$composable$lambda_0($uiState$delegate, tmp_5.j4r(VOID, VOID, VOID, VOID, (tmp_7 instanceof HTMLTextAreaElement ? tmp_7 : THROW_CCE()).value));
      var tmp_8;
      if (!CreateScreen$composable$lambda($uiState$delegate).y4q_1) {
        var tmp_9 = CreateScreen$composable$lambda($uiState$delegate);
        var tmp_10 = document;
        ID_getInstance();
        var tmp_11 = tmp_10.getElementById('thumbnailInput');
        CreateScreen$composable$lambda_0($uiState$delegate, tmp_9.j4r(VOID, VOID, VOID, (tmp_11 instanceof HTMLInputElement ? tmp_11 : THROW_CCE()).value));
        tmp_8 = Unit_getInstance();
      }
      var tmp_12;
      var tmp_13;
      var tmp_14;
      var tmp_15;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = CreateScreen$composable$lambda($uiState$delegate).u4q_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      if (tmp$ret$0) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp1_isNotEmpty = CreateScreen$composable$lambda($uiState$delegate).v4q_1;
        tmp$ret$1 = charSequenceLength(tmp1_isNotEmpty) > 0;
        tmp_15 = tmp$ret$1;
      } else {
        tmp_15 = false;
      }
      if (tmp_15) {
        var tmp$ret$2;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp2_isNotEmpty = CreateScreen$composable$lambda($uiState$delegate).w4q_1;
        tmp$ret$2 = charSequenceLength(tmp2_isNotEmpty) > 0;
        tmp_14 = tmp$ret$2;
      } else {
        tmp_14 = false;
      }
      if (tmp_14) {
        var tmp$ret$3;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp3_isNotEmpty = CreateScreen$composable$lambda($uiState$delegate).x4q_1;
        tmp$ret$3 = charSequenceLength(tmp3_isNotEmpty) > 0;
        tmp_13 = tmp$ret$3;
      } else {
        tmp_13 = false;
      }
      if (tmp_13) {
        launch($scope, VOID, VOID, CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_0($context, $uiState$delegate, null));
        tmp_12 = Unit_getInstance();
      } else {
        launch($scope, VOID, VOID, CreateScreen$composable$lambda$lambda$lambda$lambda$slambda_2($uiState$delegate, null));
        tmp_12 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda$lambda$lambda($uiState$delegate, $breakpoint, $scope, $context) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-231614434, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:107)');
        }
        var tmp_0 = numColumns(1, 3);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 833826645, true, CreateScreen$composable$lambda$lambda$lambda$lambda($breakpoint, $uiState$delegate));
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
          tmp$ret$0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
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
        var tmp_5 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_6 = noBorder(borderRadius(backgroundColor(padding(margin_1(height(fillMaxWidth(id(tmp_5, 'titleInput')), get_px(54)), get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().b4k_1), get_px(4)));
        Constant_getInstance();
        var tmp_7 = fontSize(fontFamily(tmp_6, ['Roboto']), get_px(16));
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
        var tmp_8;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = CreateScreen$composable$lambda$lambda$lambda$lambda_0;
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
        Input$composable(tmp_4, toAttrs(tmp_7, tmp$ret$11), $composer_0, 6);
        var tmp_10 = Text_getInstance();
        var tmp_11 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_12 = noBorder(borderRadius(backgroundColor(padding(margin(height(fillMaxWidth(id(tmp_11, 'subTitleInput')), get_px(54)), VOID, VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().b4k_1), get_px(4)));
        Constant_getInstance();
        var tmp_13 = fontSize(fontFamily(tmp_12, ['Roboto']), get_px(16));
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
        var tmp_14;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().hy_1) {
          var tmp$ret$12;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = CreateScreen$composable$lambda$lambda$lambda$lambda_1;
          var value_1 = tmp$ret$12;
          tmp0_cache_1.fz(value_1);
          tmp_14 = value_1;
        } else {
          tmp_14 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_14;
        tmp$ret$14 = tmp$ret$13;
        var tmp_15 = tmp$ret$14;
        tmp$ret$15 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.oy();
        tmp$ret$16 = tmp0_1;
        Input$composable(tmp_10, toAttrs(tmp_13, tmp$ret$16), $composer_0, 6);
        var tmp_16 = CreateScreen$composable$lambda($uiState$delegate).z4q_1;
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_4 = tmp2_remember$composable;
        $composer_4.ny(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_0 = $composer_4.gz($uiState$delegate);
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_17;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
          var tmp$ret$17;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = CreateScreen$composable$lambda$lambda$lambda$lambda_2($uiState$delegate);
          var value_2 = tmp$ret$17;
          tmp0_cache_2.fz(value_2);
          tmp_17 = value_2;
        } else {
          tmp_17 = tmp0_let_2;
        }
        tmp$ret$18 = tmp_17;
        tmp$ret$19 = tmp$ret$18;
        var tmp_18 = tmp$ret$19;
        tmp$ret$20 = (tmp_18 == null ? true : isObject(tmp_18)) ? tmp_18 : THROW_CCE();
        var tmp0_2 = tmp$ret$20;
        $composer_4.oy();
        tmp$ret$21 = tmp0_2;
        CategoryDropDown$composable(tmp_16, tmp$ret$21, $composer_0, 0);
        var tmp0_modifier = margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(12));
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Start_getInstance();
        var tmp$ret$28;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_19 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_19, -1520315333, true, CreateScreen$composable$lambda$lambda$lambda$lambda_3($uiState$delegate));
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
        var tmp_20;
        if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().hy_1) {
          var tmp$ret$22;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = ComposableLambda$invoke$ref_42(dispatchReceiver_0);
          var value_3 = tmp$ret$22;
          tmp0_cache_3.fz(value_3);
          tmp_20 = value_3;
        } else {
          tmp_20 = tmp0_let_3;
        }
        tmp$ret$23 = tmp_20;
        tmp$ret$24 = tmp$ret$23;
        var tmp_21 = tmp$ret$24;
        tmp$ret$25 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
        var tmp0_3 = tmp$ret$25;
        $composer_5.oy();
        tmp$ret$26 = tmp0_3;
        tmp$ret$27 = tmp$ret$26;
        tmp$ret$28 = tmp$ret$27;
        Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp$ret$28, $composer_0, 25008, 8);
        var tmp_22 = CreateScreen$composable$lambda($uiState$delegate).w4q_1;
        var tmp_23 = CreateScreen$composable$lambda($uiState$delegate).y4q_1;
        var tmp$ret$33;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_6 = tmp3_remember$composable;
        $composer_6.ny(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$32;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_4 = $composer_6;
        var tmp1_cache_2 = $composer_6.gz($uiState$delegate);
        var tmp$ret$31;
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = tmp0_cache_4.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$30;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_24;
        if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_0().hy_1) {
          var tmp$ret$29;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$29 = CreateScreen$composable$lambda$lambda$lambda$lambda_4($uiState$delegate);
          var value_4 = tmp$ret$29;
          tmp0_cache_4.fz(value_4);
          tmp_24 = value_4;
        } else {
          tmp_24 = tmp0_let_4;
        }
        tmp$ret$30 = tmp_24;
        tmp$ret$31 = tmp$ret$30;
        var tmp_25 = tmp$ret$31;
        tmp$ret$32 = (tmp_25 == null ? true : isObject(tmp_25)) ? tmp_25 : THROW_CCE();
        var tmp0_4 = tmp$ret$32;
        $composer_6.oy();
        tmp$ret$33 = tmp0_4;
        ThumbnailUploader$composable(tmp_22, tmp_23, tmp$ret$33, $composer_0, 0);
        var tmp_26 = CreateScreen$composable$lambda($uiState$delegate).d4r_1;
        var tmp$ret$38;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_7 = tmp4_remember$composable;
        $composer_7.ny(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$37;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_5 = $composer_7;
        var tmp1_cache_3 = $composer_7.gz($uiState$delegate);
        var tmp$ret$36;
        // Inline function 'kotlin.let' call
        var tmp0_let_5 = tmp0_cache_5.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$35;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_27;
        if (tmp1_cache_3 ? true : tmp0_let_5 === Companion_getInstance_0().hy_1) {
          var tmp$ret$34;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$34 = CreateScreen$composable$lambda$lambda$lambda$lambda_5($uiState$delegate);
          var value_5 = tmp$ret$34;
          tmp0_cache_5.fz(value_5);
          tmp_27 = value_5;
        } else {
          tmp_27 = tmp0_let_5;
        }
        tmp$ret$35 = tmp_27;
        tmp$ret$36 = tmp$ret$35;
        var tmp_28 = tmp$ret$36;
        tmp$ret$37 = (tmp_28 == null ? true : isObject(tmp_28)) ? tmp_28 : THROW_CCE();
        var tmp0_5 = tmp$ret$37;
        $composer_7.oy();
        tmp$ret$38 = tmp0_5;
        var tmp_29 = tmp$ret$38;
        var tmp$ret$43;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_8 = tmp5_remember$composable;
        $composer_8.ny(-838505973);
        sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$42;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_6 = $composer_8;
        var tmp1_cache_4 = $composer_8.gz($uiState$delegate);
        var tmp$ret$41;
        // Inline function 'kotlin.let' call
        var tmp0_let_6 = tmp0_cache_6.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$40;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_30;
        if (tmp1_cache_4 ? true : tmp0_let_6 === Companion_getInstance_0().hy_1) {
          var tmp$ret$39;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$39 = CreateScreen$composable$lambda$lambda$lambda$lambda_6($uiState$delegate);
          var value_6 = tmp$ret$39;
          tmp0_cache_6.fz(value_6);
          tmp_30 = value_6;
        } else {
          tmp_30 = tmp0_let_6;
        }
        tmp$ret$40 = tmp_30;
        tmp$ret$41 = tmp$ret$40;
        var tmp_31 = tmp$ret$41;
        tmp$ret$42 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
        var tmp0_6 = tmp$ret$42;
        $composer_8.oy();
        tmp$ret$43 = tmp0_6;
        var tmp_32 = tmp$ret$43;
        var tmp$ret$48;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_9 = tmp6_remember$composable;
        $composer_9.ny(-838505973);
        sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$47;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_7 = $composer_9;
        var tmp1_cache_5 = $composer_9.gz($uiState$delegate);
        var tmp$ret$46;
        // Inline function 'kotlin.let' call
        var tmp0_let_7 = tmp0_cache_7.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$45;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_33;
        if (tmp1_cache_5 ? true : tmp0_let_7 === Companion_getInstance_0().hy_1) {
          var tmp$ret$44;
          // Inline function 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$44 = CreateScreen$composable$lambda$lambda$lambda$lambda_7($uiState$delegate);
          var value_7 = tmp$ret$44;
          tmp0_cache_7.fz(value_7);
          tmp_33 = value_7;
        } else {
          tmp_33 = tmp0_let_7;
        }
        tmp$ret$45 = tmp_33;
        tmp$ret$46 = tmp$ret$45;
        var tmp_34 = tmp$ret$46;
        tmp$ret$47 = (tmp_34 == null ? true : isObject(tmp_34)) ? tmp_34 : THROW_CCE();
        var tmp0_7 = tmp$ret$47;
        $composer_9.oy();
        tmp$ret$48 = tmp0_7;
        EditorControls$composable($breakpoint, tmp_26, tmp_29, tmp_32, tmp$ret$48, $composer_0, 0);
        Editor$composable(CreateScreen$composable$lambda($uiState$delegate).d4r_1, $composer_0, 0);
        CreateButton$composable(CreateScreen$composable$lambda$lambda$lambda$lambda_8($scope, $uiState$delegate, $context), $composer_0, 0);
        var tmp_35;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_35 = Unit_getInstance();
        }
        tmp = tmp_35;
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
  function CreateScreen$composable$lambda$lambda($uiState$delegate, $breakpoint, $scope, $context) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-541971211, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous>.<anonymous> (Create.kt:100)');
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
        var dispatchReceiver = composableLambda(tmp_3, -231614434, true, CreateScreen$composable$lambda$lambda$lambda($uiState$delegate, $breakpoint, $scope, $context));
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
          tmp$ret$0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function CreateScreen$composable$lambda_2($breakpoint, $uiState$delegate, $scope, $context) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1070748091, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CreateScreen$composable.<anonymous> (Create.kt:93)');
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
        var dispatchReceiver = composableLambda(tmp_4, -541971211, true, CreateScreen$composable$lambda$lambda($uiState$delegate, $breakpoint, $scope, $context));
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
          tmp$ret$0 = ComposableLambda$invoke$ref_44(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function CreateScreen$composable$lambda_3($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda_4($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda_5(href, title) {
    applyStyle(new Link(getSelectedText(), href, title));
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda_6($uiState$delegate) {
    return function () {
      CreateScreen$composable$lambda_0($uiState$delegate, CreateScreen$composable$lambda($uiState$delegate).j4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false));
      return Unit_getInstance();
    };
  }
  function CreateScreen$composable$lambda_7(imageUrl, description) {
    applyStyle(new Image(getSelectedText(), imageUrl, description));
    return Unit_getInstance();
  }
  function CreateScreen$composable$lambda_8($$changed) {
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
          traceEventStart(-1842094037, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:389)');
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
  function ComposableLambda$invoke$ref_46($boundThis) {
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
          traceEventStart(433817369, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:419)');
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
  function ComposableLambda$invoke$ref_47($boundThis) {
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
          traceEventStart(684747847, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Create.kt:410)');
        }
        var tmp_0 = color(classNames(Companion_getInstance_1(), ['dropdown-item']), Colors_getInstance().h3o());
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
          tmp$ret$5 = ComposableLambda$invoke$ref_47(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_48($boundThis) {
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
          traceEventStart(12635283, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous>.<anonymous> (Create.kt:408)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = get_entries();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
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
            tmp$ret$0 = ComposableLambda$invoke$ref_48(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_49($boundThis) {
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
          traceEventStart(589912744, $changed, -1, 'com.example.blogmultiplatform.pages.admin.CategoryDropDown$composable.<anonymous> (Create.kt:382)');
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
          tmp$ret$0 = ComposableLambda$invoke$ref_46(dispatchReceiver);
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
          tmp$ret$7 = ComposableLambda$invoke$ref_49(dispatchReceiver_0);
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
  function ComposableLambda$invoke$ref_50($boundThis) {
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
      $onThumbnailSelect($this$loadDataUrlFromDisk.e2n_1, it);
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
          traceEventStart(1039250688, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous> (Create.kt:440)');
        }
        var tmp_0 = Text_getInstance();
        var tmp_1 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_2 = noBorder(borderRadius(backgroundColor(padding(margin_0(fillMaxSize(id(tmp_1, 'thumbnailInput')), VOID, get_px(12)), VOID, get_px(20)), Theme_LightGray_getInstance().b4k_1), get_px(4)));
        Constant_getInstance();
        var tmp_3 = thenIf(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(16)), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()));
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
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ThumbnailUploader$composable$lambda$lambda($thumbnail);
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
        Input$composable(tmp_0, toAttrs(tmp_3, tmp$ret$4), $composer_0, 6);
        var tmp_6 = Companion_getInstance_1();
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
        var tmp_7;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.ThumbnailUploader$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ThumbnailUploader$composable$lambda$lambda_0($onThumbnailSelect);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.fz(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_7;
        tmp$ret$7 = tmp$ret$6;
        var tmp_8 = tmp$ret$7;
        tmp$ret$8 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.oy();
        tmp$ret$9 = tmp0_0;
        var tmp_9 = noBorder(borderRadius(color(backgroundColor(padding(fillMaxHeight(onClick(tmp_6, tmp$ret$9)), VOID, get_px(24)), !$thumbnailInputDisabled ? Theme_Gray_getInstance().b4k_1 : Theme_Primary_getInstance().b4k_1), !$thumbnailInputDisabled ? Theme_DarkGray_getInstance().b4k_1 : Colors_getInstance().t3o()), get_px(4)));
        Constant_getInstance();
        Button$composable(toAttrs(thenIf(fontWeight(fontSize(fontFamily(tmp_9, ['Roboto']), get_px(14)), Companion_getInstance_5().l2g()), !$thumbnailInputDisabled, disabled(Companion_getInstance_1()))), ComposableSingletons$CreateKt_getInstance().l4r_1, $composer_0, 48, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
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
  function ThumbnailUploader$composable$lambda_0($thumbnail, $thumbnailInputDisabled, $onThumbnailSelect, $$changed) {
    return function ($composer, $force) {
      ThumbnailUploader$composable($thumbnail, $thumbnailInputDisabled, $onThumbnailSelect, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EditorControls$composable$lambda$lambda$lambda$lambda($element, $onLinkClick, $onImageClick) {
    return function () {
      applyControlStyle($element, $onLinkClick, $onImageClick);
      return Unit_getInstance();
    };
  }
  function EditorControls$composable$lambda$lambda$lambda($$dirty, $onLinkClick, $onImageClick) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-623491898, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:515)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = get_entries_0();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var tmp1_remember$composable = 112 & $$dirty >> 6 | 896 & $$dirty >> 6;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.ny(-1058148781);
          sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = !!(!!($composer_1.gz(element) | $composer_1.gz($onLinkClick)) | $composer_1.gz($onImageClick));
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.ez();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_0;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
            var tmp$ret$0;
            // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = EditorControls$composable$lambda$lambda$lambda$lambda(element, $onLinkClick, $onImageClick);
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
          EditorControlView$composable(element, tmp$ret$4, $composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda$lambda$lambda$lambda_0($onEditorVisibilityChanged) {
    return function (it) {
      $onEditorVisibilityChanged();
      var tmp = document;
      ID_getInstance();
      var tmp0_safe_receiver = tmp.getElementById('editorPreview');
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_getInstance();
      } else {
        tmp0_safe_receiver.innerHTML = getEditor().value;
        tmp_0 = Unit_getInstance();
      }
      var tmp_1 = hljs.highlightAll();
      if (tmp_1 instanceof Unit)
        tmp_1;
      else
        THROW_CCE();
      return Unit_getInstance();
    };
  }
  function EditorControls$composable$lambda$lambda$lambda_0($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(198527689, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous> (Create.kt:531)');
        }
        var tmp_0 = noBorder(color(backgroundColor(borderRadius(padding(margin_1(thenIf(height(Companion_getInstance_1(), get_px(54)), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0, fillMaxWidth(Companion_getInstance_1())), $breakpoint.b5(Breakpoint_SM_getInstance()) < 0 ? get_px(12) : get_px(0)), VOID, get_px(24)), get_px(4)), $editorVisibility ? Theme_LightGray_getInstance().b4k_1 : Theme_Primary_getInstance().b4k_1), $editorVisibility ? Theme_DarkGray_getInstance().b4k_1 : Colors_getInstance().t3o()));
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
          tmp$ret$0 = EditorControls$composable$lambda$lambda$lambda$lambda_0($onEditorVisibilityChanged);
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
        Button$composable(toAttrs(onClick(tmp_0, tmp$ret$4)), ComposableSingletons$CreateKt_getInstance().m4r_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda$lambda($$dirty, $onLinkClick, $onImageClick, $breakpoint, $editorVisibility, $onEditorVisibilityChanged) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1538361923, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous> (Create.kt:509)');
        }
        var tmp_0 = height(borderRadius(backgroundColor(Companion_getInstance_1(), Theme_LightGray_getInstance().b4k_1), get_px(4)), get_px(54));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -623491898, true, EditorControls$composable$lambda$lambda$lambda($$dirty, $onLinkClick, $onImageClick));
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
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_52(dispatchReceiver);
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
        Row$composable(tmp_0, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
        var tmp_4 = CenterEnd_getInstance();
        var tmp$ret$13;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$12;
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 198527689, true, EditorControls$composable$lambda$lambda$lambda_0($breakpoint, $editorVisibility, $$dirty, $onEditorVisibilityChanged));
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
        var tmp_6;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = ComposableLambda$invoke$ref_53(dispatchReceiver_0);
          var value_0 = tmp$ret$7;
          tmp0_cache_0.fz(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_6;
        tmp$ret$9 = tmp$ret$8;
        var tmp_7 = tmp$ret$9;
        tmp$ret$10 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.oy();
        tmp$ret$11 = tmp0_0;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        Box$composable(null, tmp_4, null, tmp$ret$13, $composer_0, 3120, 5);
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
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function EditorControls$composable$lambda($$dirty, $onLinkClick, $onImageClick, $breakpoint, $editorVisibility, $onEditorVisibilityChanged) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(486631450, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous> (Create.kt:505)');
        }
        var tmp0_modifier = fillMaxWidth(Companion_getInstance_1());
        var tmp1_numColumns = numColumns(1, 2);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.EditorControls$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1538361923, true, EditorControls$composable$lambda$lambda($$dirty, $onLinkClick, $onImageClick, $breakpoint, $editorVisibility, $onEditorVisibilityChanged));
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
          tmp$ret$0 = ComposableLambda$invoke$ref_54(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControls$composable$lambda_0($breakpoint, $editorVisibility, $onEditorVisibilityChanged, $onLinkClick, $onImageClick, $$changed) {
    return function ($composer, $force) {
      EditorControls$composable($breakpoint, $editorVisibility, $onEditorVisibilityChanged, $onLinkClick, $onImageClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EditorControlView$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function EditorControlView$composable$lambda_0($control) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1864426029, $changed, -1, 'com.example.blogmultiplatform.pages.admin.EditorControlView$composable.<anonymous> (Create.kt:579)');
        }
        var tmp_0 = $control.z4_1 + ' icon';
        Image$composable($control.s4o_1, tmp_0, null, false, null, $composer_0, 0, 28);
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
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function EditorControlView$composable$lambda_1($control, $onClick, $$changed) {
    return function ($composer, $force) {
      EditorControlView$composable($control, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Editor$composable$lambda$lambda(it) {
    if (it.p2d_1 === 'Enter' ? it.x2d_1 : false) {
      applyStyle(new Break(getSelectedText()));
    }
    return Unit_getInstance();
  }
  function Editor$composable$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.h1z('placeholder', 'Type here ...');
    return Unit_getInstance();
  }
  function Editor$composable$lambda($editorVisibility) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-194323487, $changed, -1, 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous> (Create.kt:591)');
        }
        var tmp_0 = Companion_getInstance_1();
        ID_getInstance();
        var tmp_1 = borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(tmp_0, 'editor')), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().b4k_1), get_px(4));
        Constant_getInstance();
        var tmp_2 = visibility(resize(noBorder(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(16))), Companion_getInstance_12().f2j()), $editorVisibility ? Companion_getInstance_13().u2l() : Companion_getInstance_13().s2j());
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
        var tmp_5 = onKeyDown(tmp_2, tmp$ret$4);
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
        var tmp_6;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$5;
          // Inline function 'com.example.blogmultiplatform.pages.admin.Editor$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = Editor$composable$lambda$lambda_0;
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
        TextArea$composable(null, toAttrs(tmp_5, tmp$ret$9), $composer_0, 0, 1);
        var tmp_8 = Companion_getInstance_1();
        ID_getInstance();
        Div$composable(toAttrs(noBorder(borderRadius(backgroundColor(scrollBehavior(overflow(visibility(borderRadius(backgroundColor(padding_0(margin(maxHeight(height(fillMaxWidth(id(tmp_8, 'editorPreview')), get_px(400)), get_px(400)), get_px(8)), get_px(20)), Theme_LightGray_getInstance().b4k_1), get_px(4)), $editorVisibility ? Companion_getInstance_13().s2j() : Companion_getInstance_13().u2l()), Companion_getInstance_7().t2j()), Companion_getInstance_11().w2j()), Theme_LightGray_getInstance().b4k_1), get_px(4)))), ComposableSingletons$CreateKt_getInstance().n4r_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_57($boundThis) {
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
  function ComposableLambda$invoke$ref_58($boundThis) {
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
  function ComposableLambda$invoke$ref_59($boundThis) {
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
      FaPlus$composable(color(Companion_getInstance_1(), Theme_White_getInstance().b4k_1), IconSize_LG_getInstance(), $composer_0, 48, 0);
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
    tmp.k4s_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(1423056671, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.l4s_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(1350731261, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
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
      isUserLoggedIn$composable(ComposableSingletons$IndexKt_getInstance().k4s_1, $composer_0, 6);
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
        var value_1 = ComposableLambda$invoke$ref_60(dispatchReceiver);
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
        var value = ComposableLambda$invoke$ref_62(dispatchReceiver);
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
        var value_0 = ComposableLambda$invoke$ref_63(dispatchReceiver);
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
    this.u4s_1 = $randomJoke$delegate;
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
            suspendResult = fetchRandomJoke(HomeScreen$composable$slambda$lambda(this.u4s_1), this);
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
    var i = new HomeScreen$composable$slambda(this.u4s_1, completion);
    i.v4s_1 = $this$LaunchedEffect;
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
  function ComposableLambda$invoke$ref_60($boundThis) {
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
        if (!($randomJoke.o4p_1 === -1)) {
          var tmp0_modifier = margin(size(Companion_getInstance_1(), get_px(150)), VOID, VOID, get_px(50));
          Image_getInstance();
          var tmp1_src = '/laugh.png';
          Image$composable(tmp1_src, 'laugh image', tmp0_modifier, false, null, $composer_0, 54, 24);
        }
        $composer_0.oy();
        if (contains($randomJoke.p4p_1, 'Q:')) {
          $composer_0.ny(457716506);
          var tmp_0 = color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_3().q2f()), Theme_Secondary_getInstance().b4k_1);
          Constant_getInstance();
          var tmp2_modifier = fontWeight(fontSize(fontFamily(tmp_0, ['Roboto']), get_px(28)), Companion_getInstance_5().o2g());
          var tmp3_text = dropLast(split($randomJoke.p4p_1, [':']).l(1), 1);
          SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
          var tmp_1 = color(textAlign(fillMaxWidth(Companion_getInstance_1(), get_percent(40)), Companion_getInstance_3().q2f()), Theme_HalfBlack_getInstance().b4k_1);
          Constant_getInstance();
          var tmp4_modifier = fontWeight(fontSize(fontFamily(tmp_1, ['Roboto']), get_px(20)), Companion_getInstance_5().n2g());
          var tmp5_text = last(split($randomJoke.p4p_1, [':']));
          SpanText$composable(tmp5_text, tmp4_modifier, null, null, $composer_0, 0, 12);
          $composer_0.oy();
        } else {
          $composer_0.ny(457717561);
          var tmp_2 = color(textAlign(fillMaxWidth(margin(Companion_getInstance_1(), VOID, VOID, get_px(14)), get_percent(40)), Companion_getInstance_3().q2f()), Theme_Secondary_getInstance().b4k_1);
          Constant_getInstance();
          var tmp6_modifier = fontWeight(fontSize(fontFamily(tmp_2, ['Roboto']), get_px(28)), Companion_getInstance_5().o2g());
          var tmp7_text = $randomJoke.p4p_1;
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
  function ComposableLambda$invoke$ref_61($boundThis) {
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
            tmp$ret$0 = ComposableLambda$invoke$ref_61(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_62($boundThis) {
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
    $this$styleModifier.s28('pointer-events', 'none');
    return Unit_getInstance();
  }
  function AddButton$composable$lambda$lambda($context) {
    return function (it) {
      $context.u3i_1.l3l(AdminCreate_getInstance().l4k_1);
      return Unit_getInstance();
    };
  }
  function AddButton$composable$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.s28('pointer-events', 'auto');
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
        var tmp_0 = cursor(borderRadius(size(backgroundColor(margin_0(Companion_getInstance_1(), VOID, $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20), $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20)), Theme_Primary_getInstance().b4k_1), $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_px(80) : get_px(50)), get_px(14)), Companion_getInstance_10().h2g());
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
        Box$composable(tmp_6, tmp_7, null, ComposableSingletons$IndexKt_getInstance().l4s_1, $composer_0, 3120, 4);
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
  function ComposableLambda$invoke$ref_63($boundThis) {
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
      localStorage['userId'] = user.b4q_1;
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['username'] = user.c4q_1;
    }
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
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
    tmp.w4s_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(-1841479681, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
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
        var value_1 = ComposableLambda$invoke$ref_66(dispatchReceiver);
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
    this.f4t_1 = $context;
    this.g4t_1 = $errorText$delegate;
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
            tmp_0.i4t_1 = (tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE()).value;
            var tmp_3 = this;
            var tmp_4 = document;
            ID_getInstance();
            var tmp_5 = tmp_4.getElementById('password_input');
            tmp_3.j4t_1 = (tmp_5 instanceof HTMLInputElement ? tmp_5 : THROW_CCE()).value;
            var tmp_6;
            if (charSequenceLength(this.i4t_1) > 0) {
              tmp_6 = charSequenceLength(this.j4t_1) > 0;
            } else {
              tmp_6 = false;
            }

            if (tmp_6) {
              this.sh_1 = 2;
              suspendResult = checkUserExistence(new User(VOID, this.i4t_1, this.j4t_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.g4t_1, 'Please fill all inputs');
              this.sh_1 = 1;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$composable$lambda_0(this.g4t_1, ' ');
            this.sh_1 = 5;
            continue $sm;
          case 2:
            this.k4t_1 = suspendResult;
            if (!(this.k4t_1 == null)) {
              rememberLoggedIn(true, this.k4t_1);
              this.f4t_1.u3i_1.l3l(AdminHome_getInstance().l4k_1);
              this.sh_1 = 4;
              continue $sm;
            } else {
              LoginScreen$composable$lambda_0(this.g4t_1, "the user doesn't exist");
              this.sh_1 = 3;
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            LoginScreen$composable$lambda_0(this.g4t_1, ' ');
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
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda(this.f4t_1, this.g4t_1, completion);
    i.h4t_1 = $this$launch;
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
        var tmp_2 = backgroundColor(padding(height(width(margin(id(tmp_1, 'username_input'), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().t3o());
        Constant_getInstance();
        var tmp_3 = fontSize(fontFamily(tmp_2, ['Roboto']), get_px(14));
        var tmp_4 = get_px(0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp0_get_None_gl10cr = Companion_getInstance_8();
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
        var tmp_5 = outline(tmp_3, tmp_4, tmp$ret$3, Colors_getInstance().g3o());
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
        var tmp_10 = backgroundColor(padding(height(width(margin(id(tmp_9, 'password_input'), VOID, VOID, get_px(20)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().t3o());
        Constant_getInstance();
        var tmp_11 = fontSize(fontFamily(tmp_10, ['Roboto']), get_px(14));
        var tmp_12 = get_px(0);
        var tmp$ret$12;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        var tmp2_get_None_n30xxp = Companion_getInstance_8();
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
        var tmp_13 = outline(tmp_11, tmp_12, tmp$ret$12, Colors_getInstance().g3o());
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
        var tmp_16 = fontWeight(borderRadius(color(backgroundColor(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(24)), get_px(350)), get_px(54)), Theme_Primary_getInstance().b4k_1), Colors_getInstance().t3o()), get_px(4)), Companion_getInstance_5().l2g());
        Constant_getInstance();
        var tmp_17 = cursor(noBorder(fontSize(fontFamily(tmp_16, ['Roboto']), get_px(16))), Companion_getInstance_10().h2g());
        Button$composable(toAttrs(onClick(tmp_17, LoginScreen$composable$lambda$lambda$lambda_1($scope, $context, $errorText$delegate))), ComposableSingletons$LoginKt_getInstance().w4s_1, $composer_0, 48, 0);
        var tmp_18 = color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().r3o());
        Constant_getInstance();
        var tmp2_modifier = textAlign(fontFamily(tmp_18, ['Roboto']), Companion_getInstance_3().q2f());
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
  function ComposableLambda$invoke$ref_65($boundThis) {
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
        var tmp_0 = backgroundColor(padding_2(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().b4k_1);
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
          tmp$ret$0 = ComposableLambda$invoke$ref_65(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_66($boundThis) {
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
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MyPostsKt$lambda_1$lambda_kts8d9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-2078036856, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostsKt.lambda-1.<anonymous> (MyPosts.kt:44)');
      }
      MyPostsScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$MyPostsKt$lambda_2$lambda_ldpcjo($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1923393788, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostsKt.lambda-2.<anonymous> (MyPosts.kt:84)');
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostsKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MyPostsKt$lambda_2$lambda$lambda_c2ub4h;
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      SearchBar$composable(tmp0, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MyPostsKt$lambda_2$lambda$lambda_c2ub4h() {
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$MyPostsKt$lambda_3$lambda_7fx4ij($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(259480985, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$MyPostsKt.lambda-3.<anonymous> (MyPosts.kt:126)');
      }
      SpanText$composable('Delete', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MyPostsKt() {
    ComposableSingletons$MyPostsKt_instance = this;
    var tmp = this;
    tmp.l4t_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(-2078036856, false, ComposableSingletons$MyPostsKt$lambda_1$lambda_kts8d9));
    var tmp_0 = this;
    tmp_0.m4t_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(1923393788, false, ComposableSingletons$MyPostsKt$lambda_2$lambda_ldpcjo));
    var tmp_1 = this;
    tmp_1.n4t_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(259480985, false, ComposableSingletons$MyPostsKt$lambda_3$lambda_7fx4ij));
  }
  var ComposableSingletons$MyPostsKt_instance;
  function ComposableSingletons$MyPostsKt_getInstance() {
    if (ComposableSingletons$MyPostsKt_instance == null)
      new ComposableSingletons$MyPostsKt();
    return ComposableSingletons$MyPostsKt_instance;
  }
  function MyPostsPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-2039746920);
    sourceInformation($composer_0, 'C(MyPostsPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-2039746920, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsPage$composable (MyPosts.kt:42)');
      }
      isUserLoggedIn$composable(ComposableSingletons$MyPostsKt_getInstance().l4t_1, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(MyPostsPage$composable$lambda($changed));
    }
  }
  function MyPostsScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-1765542667);
    sourceInformation($composer_0, 'C(MyPostsScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1765542667, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable (MyPosts.kt:49)');
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      var selectable$delegate = tmp0;
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>' call
        var value_0 = mutableStateOf('Select');
        $composer_2.fz(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.oy();
      var text$delegate = tmp0_0;
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
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>' call
        var value_1 = mutableStateListOf();
        $composer_3.fz(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.oy();
      var myPost = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.ny(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.gz(myPost);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>' call
        var value_2 = MyPostsScreen$composable$slambda_0(myPost, null);
        $composer_4.fz(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.oy();
      LaunchedEffect$composable(Unit_getInstance(), tmp0_2, $composer_0, 6);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 1204189337, true, MyPostsScreen$composable$lambda_2(breakpoint, myPost, selectable$delegate, text$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.ny(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_5.gz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_5.ez();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_5.fz(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      var tmp_9 = tmp_8;
      var tmp0_3 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_5.oy();
      AdminPageLayout$composable(tmp0_3, $composer_0, 6);
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
      tmp0_safe_receiver.r1d(MyPostsScreen$composable$lambda_3($changed));
    }
  }
  function MyPostsScreen$composable$lambda($selectable$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectable', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectable$delegate.w1();
  }
  function MyPostsScreen$composable$lambda_0($selectable$delegate, value) {
    getLocalDelegateReference('selectable', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectable$delegate.ut(value);
  }
  function MyPostsScreen$composable$lambda_1($text$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('text', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $text$delegate.w1();
  }
  function MyPostsPage$composable$lambda($$changed) {
    return function ($composer, $force) {
      MyPostsPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MyPostsScreen$composable$slambda$lambda($myPost) {
    return function (it) {
      var tmp;
      if (it instanceof Success) {
        $myPost.z1w(it.h4m_1);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function MyPostsScreen$composable$slambda$lambda_0(it) {
    println(it);
    return Unit_getInstance();
  }
  function MyPostsScreen$composable$slambda($myPost, resultContinuation) {
    this.w4t_1 = $myPost;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MyPostsScreen$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(MyPostsScreen$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MyPostsScreen$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            var tmp_0 = MyPostsScreen$composable$slambda$lambda(this.w4t_1);
            suspendResult = fetchMyPost(0, tmp_0, MyPostsScreen$composable$slambda$lambda_0, this);
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
  protoOf(MyPostsScreen$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new MyPostsScreen$composable$slambda(this.w4t_1, completion);
    i.x4t_1 = $this$LaunchedEffect;
    return i;
  };
  function MyPostsScreen$composable$slambda_0($myPost, resultContinuation) {
    var i = new MyPostsScreen$composable$slambda($myPost, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MyPostsScreen$composable$lambda$lambda$lambda$lambda$lambda($selectable$delegate) {
    return function (it) {
      MyPostsScreen$composable$lambda_0($selectable$delegate, it);
      return Unit_getInstance();
    };
  }
  function MyPostsScreen$composable$lambda$lambda$lambda$lambda($selectable$delegate, $text$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(-1367975492, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MyPosts.kt:97)');
        }
        var tmp0_modifier = margin_0(Companion_getInstance_1(), VOID, get_px(8));
        var tmp1_size = LG_getInstance();
        var tmp2_checked = MyPostsScreen$composable$lambda($selectable$delegate);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.ny(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.gz($selectable$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.ez();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = MyPostsScreen$composable$lambda$lambda$lambda$lambda$lambda($selectable$delegate);
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
        Switch$composable(tmp2_checked, tmp_2, tmp0_modifier, null, false, tmp1_size, null, null, null, null, null, $composer_0, 196608, 0, 2008);
        var tmp3_modifier = color(Companion_getInstance_1(), MyPostsScreen$composable$lambda($selectable$delegate) ? Colors_getInstance().h3o() : Theme_HalfBlack_getInstance().b4k_1);
        var tmp4_text = MyPostsScreen$composable$lambda_1($text$delegate);
        SpanText$composable(tmp4_text, tmp3_modifier, null, null, $composer_0, 0, 12);
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
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MyPostsScreen$composable$lambda$lambda$lambda$lambda_0(it) {
    return Unit_getInstance();
  }
  function MyPostsScreen$composable$lambda$lambda$lambda($selectable$delegate, $text$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(123007199, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous> (MyPosts.kt:96)');
        }
        var tmp_0 = CenterVertically_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1367975492, true, MyPostsScreen$composable$lambda$lambda$lambda$lambda($selectable$delegate, $text$delegate));
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
          // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_70(dispatchReceiver);
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
        Row$composable(null, null, tmp_0, null, tmp$ret$6, $composer_0, 24960, 11);
        var tmp_4 = noBorder(borderRadius(color(backgroundColor(padding(height(Companion_getInstance_1(), get_px(54)), VOID, get_px(24)), Theme_Red_getInstance().b4k_1), Colors_getInstance().t3o()), get_px(4)));
        Constant_getInstance();
        var tmp_5 = fontWeight(fontSize(fontFamily(tmp_4, ['Roboto']), get_px(14)), Companion_getInstance_5().l2g());
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
        var tmp_6;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().hy_1) {
          var tmp$ret$7;
          // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = MyPostsScreen$composable$lambda$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$7;
          tmp0_cache_0.fz(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_6;
        tmp$ret$9 = tmp$ret$8;
        var tmp_7 = tmp$ret$9;
        tmp$ret$10 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.oy();
        tmp$ret$11 = tmp0_0;
        Button$composable(toAttrs(onClick(tmp_5, tmp$ret$11)), ComposableSingletons$MyPostsKt_getInstance().n4t_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MyPostsScreen$composable$lambda$lambda($breakpoint, $myPost, $selectable$delegate, $text$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1308343618, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous> (MyPosts.kt:78)');
        }
        var tmp_0 = margin(fillMaxWidth(Companion_getInstance_1(), $breakpoint.b5(Breakpoint_MD_getInstance()) > 0 ? get_percent(25) : get_percent(50)), VOID, VOID, get_px(24));
        var tmp_1 = Center_getInstance();
        Box$composable(tmp_0, tmp_1, null, ComposableSingletons$MyPostsKt_getInstance().m4t_1, $composer_0, 3120, 4);
        var tmp0_modifier = margin(fillMaxWidth(Companion_getInstance_1(), get_percent(90)), VOID, VOID, get_px(24));
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = SpaceBetween_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 123007199, true, MyPostsScreen$composable$lambda$lambda$lambda($selectable$delegate, $text$delegate));
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
          // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_71(dispatchReceiver);
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
        Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp$ret$6, $composer_0, 25008, 8);
        Posts$composable($myPost, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function MyPostsScreen$composable$lambda_2($breakpoint, $myPost, $selectable$delegate, $text$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(1204189337, $changed, -1, 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous> (MyPosts.kt:70)');
        }
        var tmp_0 = fillMaxSize(margin_1(Companion_getInstance_1(), get_px(50)));
        var tmp_1;
        if ($breakpoint.b5(Breakpoint_MD_getInstance()) > 0) {
          Constant_getInstance();
          tmp_1 = get_px(250);
        } else {
          tmp_1 = get_px(0);
        }
        var tmp_2 = padding_1(tmp_0, VOID, VOID, VOID, tmp_1);
        var tmp_3 = Top_getInstance();
        var tmp_4 = CenterHorizontally_getInstance();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 1308343618, true, MyPostsScreen$composable$lambda$lambda($breakpoint, $myPost, $selectable$delegate, $text$delegate));
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
        var tmp_6;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
          var tmp$ret$0;
          // Inline function 'com.example.blogmultiplatform.pages.admin.MyPostsScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_72(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.fz(value);
          tmp_6 = value;
        } else {
          tmp_6 = tmp0_let;
        }
        tmp$ret$1 = tmp_6;
        tmp$ret$2 = tmp$ret$1;
        var tmp_7 = tmp$ret$2;
        tmp$ret$3 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.oy();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Column$composable(tmp_2, tmp_3, tmp_4, null, tmp$ret$6, $composer_0, 25008, 8);
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
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function MyPostsScreen$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      MyPostsScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1x(p0, p1, p2);
    };
  }
  function ComposableSingletons$SuccessKt$lambda_1$lambda_4boq8p($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(-1153229930, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$SuccessKt.lambda-1.<anonymous> (Success.kt:35)');
      }
      var tmp0_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(20));
      Icon_getInstance();
      var tmp1_src = '/checkmark.svg';
      Image$composable(tmp1_src, 'checkmark icon', tmp0_modifier, false, null, $composer_0, 54, 24);
      var tmp = Companion_getInstance_1();
      Constant_getInstance();
      var tmp2_modifier = fontSize(fontFamily(tmp, ['Roboto']), get_px(24));
      SpanText$composable('Post Successfully Created!', tmp2_modifier, null, null, $composer_0, 6, 12);
      var tmp_0 = color(Companion_getInstance_1(), Theme_HalfBlack_getInstance().b4k_1);
      Constant_getInstance();
      var tmp3_modifier = fontSize(fontFamily(tmp_0, ['Roboto']), get_px(18));
      SpanText$composable('redirecting you back...', tmp3_modifier, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SuccessKt() {
    ComposableSingletons$SuccessKt_instance = this;
    var tmp = this;
    tmp.y4t_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-1153229930, false, ComposableSingletons$SuccessKt$lambda_1$lambda_4boq8p));
  }
  var ComposableSingletons$SuccessKt_instance;
  function ComposableSingletons$SuccessKt_getInstance() {
    if (ComposableSingletons$SuccessKt_instance == null)
      new ComposableSingletons$SuccessKt();
    return ComposableSingletons$SuccessKt_instance;
  }
  function SuccessPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(1613811732);
    sourceInformation($composer_0, 'C(SuccessPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1613811732, $changed, -1, 'com.example.blogmultiplatform.pages.admin.SuccessPage$composable (Success.kt:22)');
      }
      var context = rememberPageContext$composable($composer_0, 0);
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
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().hy_1) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.SuccessPage$composable.<anonymous>' call
        var value = SuccessPage$composable$slambda_0(context, null);
        $composer_1.fz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.oy();
      LaunchedEffect$composable(Unit_getInstance(), tmp0, $composer_0, 6);
      var tmp_1 = fillMaxSize(Companion_getInstance_1());
      var tmp_2 = Center_getInstance_0();
      var tmp_3 = CenterHorizontally_getInstance();
      Column$composable(tmp_1, tmp_2, tmp_3, null, ComposableSingletons$SuccessKt_getInstance().y4t_1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.r1d(SuccessPage$composable$lambda($changed));
    }
  }
  function SuccessPage$composable$slambda($context, resultContinuation) {
    this.h4u_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SuccessPage$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(SuccessPage$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SuccessPage$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = delay(new Long(5000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h4u_1.u3i_1.l3l(AdminCreate_getInstance().l4k_1);
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
  protoOf(SuccessPage$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new SuccessPage$composable$slambda(this.h4u_1, completion);
    i.i4u_1 = $this$LaunchedEffect;
    return i;
  };
  function SuccessPage$composable$slambda_0($context, resultContinuation) {
    var i = new SuccessPage$composable$slambda($context, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SuccessPage$composable$lambda($$changed) {
    return function ($composer, $force) {
      SuccessPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_EditorKeyStyle() {
    _init_properties_CreateStyle_kt__hcl52b();
    return EditorKeyStyle$delegate.r2k(null, EditorKeyStyle$factory());
  }
  var EditorKeyStyle$delegate;
  function EditorKeyStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_CreateStyle_kt__hcl52b();
    $this$ComponentStyle.w3r(EditorKeyStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.v3t(EditorKeyStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function EditorKeyStyle$delegate$lambda$lambda() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Colors_getInstance().g3o()), [CSSTransition_init_$Create$('background', get_ms(300))]);
  }
  function EditorKeyStyle$delegate$lambda$lambda_0() {
    _init_properties_CreateStyle_kt__hcl52b();
    return transition(backgroundColor(Companion_getInstance_1(), Theme_Primary_getInstance().b4k_1), [CSSTransition_init_$Create$('background', get_ms(300))]);
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
    return LoginInputStyle$delegate.r2k(null, LoginInputStyle$factory());
  }
  var LoginInputStyle$delegate;
  function LoginInputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_LoginStyle_kt__eon42g();
    $this$ComponentStyle.w3r(LoginInputStyle$delegate$lambda$lambda);
    var tmp = get_focus($this$ComponentStyle);
    tmp.v3t(LoginInputStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LoginInputStyle$delegate$lambda$lambda() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_8();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Colors_getInstance().g3o()), [CSSTransition_init_$Create$('border', get_ms(300))]);
  }
  function LoginInputStyle$delegate$lambda$lambda_0() {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_8();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().b4k_1);
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
    return NavigationItemStyle$delegate.r2k(null, NavigationItemStyle$factory());
  }
  var NavigationItemStyle$delegate;
  function NavigationItemStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SidePanelStyle_kt__9501cs();
    ID_getInstance();
    var tmp = ' > #' + 'svgParent';
    $this$ComponentStyle.y3r(tmp, NavigationItemStyle$delegate$lambda$lambda);
    ID_getInstance();
    var tmp_0 = ':hover > #' + 'svgParent';
    $this$ComponentStyle.y3r(tmp_0, NavigationItemStyle$delegate$lambda$lambda_0);
    ID_getInstance();
    var tmp_1 = ' > #' + 'navigationText';
    $this$ComponentStyle.y3r(tmp_1, NavigationItemStyle$delegate$lambda$lambda_1);
    ID_getInstance();
    var tmp_2 = ':hover > #' + 'navigationText';
    $this$ComponentStyle.y3r(tmp_2, NavigationItemStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_9().r2l(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.s28('stroke', Theme_White_getInstance().a4k_1);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_0() {
    _init_properties_SidePanelStyle_kt__9501cs();
    var tmp = transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_9().r2l(), get_ms(300))]);
    return styleModifier(tmp, NavigationItemStyle$delegate$lambda$lambda$lambda_0);
  }
  function NavigationItemStyle$delegate$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_SidePanelStyle_kt__9501cs();
    $this$styleModifier.s28('stroke', Theme_Primary_getInstance().a4k_1);
    return Unit_getInstance();
  }
  function NavigationItemStyle$delegate$lambda$lambda_1() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(transition(Companion_getInstance_1(), [new CSSTransition(Companion_getInstance_9().r2l(), get_ms(300))]), Theme_White_getInstance().b4k_1);
  }
  function NavigationItemStyle$delegate$lambda$lambda_2() {
    _init_properties_SidePanelStyle_kt__9501cs();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().b4k_1);
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
  function addPost(post, $completion) {
    var tmp = new $addPostCOROUTINE$3(post, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function fetchMyPost(skip, onSuccess, onError, $completion) {
    var tmp = new $fetchMyPostCOROUTINE$4(skip, onSuccess, onError, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4u_1 = user;
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
            var tmp0_serializer = tmp0_encodeToString.s2s();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.w3h('user_check', VOID, encodeToByteArray(tmp0_encodeToString.a38(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.r4u_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.s2s();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(UserWithoutPassword), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.b38(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            tmp_1.s4u_1 = tmp_2;
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
              tmp_4.s4u_1 = null;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.s4u_1;
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
    this.b4v_1 = id;
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
            var tmp0_serializer = tmp0_encodeToString.s2s();
            var tmp0_cast = serializer(tmp0_serializer, createKType(PrimitiveClasses_getInstance().pe(), arrayOf([]), false));
            suspendResult = tmp_0.w3h('check_user_id', VOID, encodeToByteArray(tmp0_encodeToString.a38(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.b4v_1)), VOID, VOID, this);
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
              var tmp0_serializer_0 = tmp0_decodeFromString.s2s();
              var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([]), false));
              tmp_2 = tmp0_decodeFromString.b38(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_2;
            tmp_1.c4v_1 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
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
              tmp_4.c4v_1 = false;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.c4v_1;
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
    this.l4v_1 = onComplete;
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
            tmp_0.m4v_1 = localStorage['date'];
            if (!(this.m4v_1 == null)) {
              this.n4v_1 = Date.now() - toDouble(this.m4v_1);
              this.o4v_1 = this.n4v_1 >= 8.64E7;
              if (this.o4v_1) {
                this.th_1 = 5;
                this.sh_1 = 4;
                var tmp_1 = get_http(window);
                Constant_getInstance();
                suspendResult = tmp_1.b2p('https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180', VOID, VOID, this);
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
                    var tmp0_serializer = tmp0_decodeFromString.s2s();
                    var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(RandomJoke), arrayOf([]), false));
                    tmp_2 = tmp0_decodeFromString.b38(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), tmp0_safe_receiver);
                  }
                  var tmp1_safe_receiver = tmp_2;
                  if (tmp1_safe_receiver == null)
                    null;
                  else {
                    this.l4v_1(tmp1_safe_receiver);
                  }
                } catch ($p) {
                  if ($p instanceof Exception) {
                    var e = $p;
                    this.l4v_1(new RandomJoke(-1, toString(e.message)));
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
              suspendResult = tmp_3.b2p('https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180', VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            var result = decodeToString(ARGUMENT);
            var tmp6_decodeFromString = Default_getInstance();
            var tmp0_serializer_0 = tmp6_decodeFromString.s2s();
            var tmp0_cast_0 = serializer(tmp0_serializer_0, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.l4v_1(tmp6_decodeFromString.b38(isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE(), result));
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
              this.l4v_1(new RandomJoke(-1, toString(e_0.message)));
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
            var tmp0_serializer_1 = tmp1_decodeFromString.s2s();
            var tmp0_cast_1 = serializer(tmp0_serializer_1, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.l4v_1(tmp1_decodeFromString.b38(isInterface(tmp0_cast_1, KSerializer) ? tmp0_cast_1 : THROW_CCE(), result_0));
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
              this.l4v_1(new RandomJoke(-1, toString(e_1.message)));
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
  function $addPostCOROUTINE$3(post, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4v_1 = post;
  }
  protoOf($addPostCOROUTINE$3).bi = function () {
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
            var tmp0_serializer = tmp0_encodeToString.s2s();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(Post), arrayOf([]), false));
            suspendResult = tmp_0.w3h('add_post', VOID, encodeToByteArray(tmp0_encodeToString.a38(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), this.x4v_1)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var ARGUMENT = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            this.y4v_1 = toBoolean(ARGUMENT);
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_1 = this.vh_1;
            if (tmp_1 instanceof Exception) {
              var e = this.vh_1;
              var tmp_2 = this;
              println(toString(e.message));
              tmp_2.y4v_1 = false;
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return this.y4v_1;
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
  function $fetchMyPostCOROUTINE$4(skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h4w_1 = skip;
    this.i4w_1 = onSuccess;
    this.j4w_1 = onError;
  }
  protoOf($fetchMyPostCOROUTINE$4).bi = function () {
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
            var tmp0_get = localStorage;
            suspendResult = tmp_0.u3h('read_my_post?skip=' + this.h4w_1 + '&author=' + tmp0_get['username'], VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var tmp1_decodeFromString = Default_getInstance();
            var tmp2_decodeFromString = toString(result);
            var tmp0_serializer = tmp1_decodeFromString.s2s();
            var tmp0_cast = serializer(tmp0_serializer, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.i4w_1(tmp1_decodeFromString.b38(isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE(), tmp2_decodeFromString));
            this.th_1 = 3;
            this.sh_1 = 4;
            continue $sm;
          case 2:
            this.th_1 = 3;
            var tmp_1 = this.vh_1;
            if (tmp_1 instanceof Exception) {
              var e = this.vh_1;
              this.j4w_1(e);
              this.sh_1 = 4;
              continue $sm;
            } else {
              throw this.vh_1;
            }

          case 3:
            throw this.vh_1;
          case 4:
            this.th_1 = 3;
            return Unit_getInstance();
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
    this.k4w_1 = 'Roboto';
    this.l4w_1 = 250;
    this.m4w_1 = 1920;
    this.n4w_1 = 100;
    this.o4w_1 = 'https://api.humorapi.com/jokes/random?api-key=c7a8af37711c486998963280498efadd&max-lenght=180';
    this.p4w_1 = 0;
  }
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
  }
  function Image_0() {
    Image_instance = this;
    this.q4w_1 = '/logo.svg';
    this.r4w_1 = '/laugh.png';
    this.s4w_1 = 0;
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function Icon() {
    Icon_instance = this;
    this.t4w_1 = '/bold.svg';
    this.u4w_1 = '/italic.svg';
    this.v4w_1 = '/link.svg';
    this.w4w_1 = '/title.svg';
    this.x4w_1 = '/subtitle.svg';
    this.y4w_1 = '/quote.svg';
    this.z4w_1 = '/code.svg';
    this.a4x_1 = '/image.svg';
    this.b4x_1 = '/checkmark.svg';
    this.c4x_1 = 0;
  }
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.d4x_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.e4x_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.f4x_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.g4x_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
    this.h4x_1 = 0;
  }
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function ID() {
    ID_instance = this;
    this.i4x_1 = 'username_input';
    this.j4x_1 = 'password_input';
    this.k4x_1 = 'svgParent';
    this.l4x_1 = 'navigationText';
    this.m4x_1 = 'editor';
    this.n4x_1 = 'editorPreview';
    this.o4x_1 = 'titleInput';
    this.p4x_1 = 'subTitleInput';
    this.q4x_1 = 'thumbnailInput';
    this.r4x_1 = 'linHrefInput';
    this.s4x_1 = 'linTitleInput';
    this.t4x_1 = 0;
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
    Companion_getInstance_8();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = border(_this__u8e3s4, tmp, 'none', Colors_getInstance().g3o());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_8();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return outline(tmp_0, tmp_1, 'none', Colors_getInstance().g3o());
  }
  function getEditor() {
    var tmp = document;
    ID_getInstance();
    var tmp_0 = tmp.getElementById('editor');
    return tmp_0 instanceof HTMLTextAreaElement ? tmp_0 : THROW_CCE();
  }
  function getSelectedIntRange() {
    var editor = getEditor();
    var start = editor.selectionStart;
    var end = editor.selectionEnd;
    var tmp;
    if (!(start == null) ? !(end == null) : false) {
      tmp = new IntRange(start, end - 1 | 0);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getSelectedText() {
    var range = getSelectedIntRange();
    var tmp;
    if (!(range == null)) {
      tmp = substring(getEditor().value, range);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function applyStyle(controlStyle) {
    var selectedText = getSelectedText();
    var selectedIntRange = getSelectedIntRange();
    if (!(selectedIntRange == null) ? !(selectedText == null) : false) {
      var tmp = getEditor();
      // Inline function 'kotlin.text.replaceRange' call
      var tmp0_replaceRange = getEditor().value;
      var tmp1_replaceRange = controlStyle.o4o_1;
      tmp.value = toString_0(replaceRange(isCharSequence(tmp0_replaceRange) ? tmp0_replaceRange : THROW_CCE(), selectedIntRange, tmp1_replaceRange));
      var tmp_0 = document;
      ID_getInstance();
      var tmp0_safe_receiver = tmp_0.getElementById('editorPreview');
      if (tmp0_safe_receiver != null) {
        tmp0_safe_receiver.innerHTML = getEditor().value;
      }
    }
  }
  function applyControlStyle(editorControl, onLinkClick, onImageClick) {
    switch (editorControl.a5_1) {
      case 0:
        applyStyle(new Bold(getSelectedText()));
        break;
      case 1:
        applyStyle(new Italic(getSelectedText()));
        break;
      case 2:
        onLinkClick();
        break;
      case 3:
        applyStyle(new Title(getSelectedText()));
        break;
      case 4:
        applyStyle(new SubTitle(getSelectedText()));
        break;
      case 5:
        applyStyle(new Quote(getSelectedText()));
        break;
      case 6:
        applyStyle(new Code(getSelectedText()));
        break;
      case 7:
        onImageClick();
        break;
    }
  }
  function parseDateString(_this__u8e3s4) {
    return (new Date(_this__u8e3s4)).toLocaleDateString();
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
        traceEventStart(-1950558440, $dirty, -1, 'com.example.blogmultiplatform.util.isUserLoggedIn$composable (Functions.kt:27)');
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
    this.c4y_1 = $userId;
    this.d4y_1 = $remembered;
    this.e4y_1 = $context;
    this.f4y_1 = $userIdExists$delegate;
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
            if (!(this.c4y_1 == null ? true : charSequenceLength(this.c4y_1) === 0)) {
              this.sh_1 = 1;
              suspendResult = checkUserId(this.c4y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h4y_1 = false;
              this.sh_1 = 2;
              continue $sm;
            }

          case 1:
            this.h4y_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            var ARGUMENT = this.h4y_1;
            isUserLoggedIn$composable$lambda_0(this.f4y_1, ARGUMENT);
            if (!this.d4y_1 ? true : !isUserLoggedIn$composable$lambda(this.f4y_1)) {
              this.e4y_1.u3i_1.l3l(AdminLogin_getInstance().l4k_1);
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
    var i = new isUserLoggedIn$composable$slambda(this.c4y_1, this.d4y_1, this.e4y_1, this.f4y_1, completion);
    i.g4y_1 = $this$LaunchedEffect;
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
  protoOf($serializer).o2z = typeParametersSerializers;
  protoOf($serializer_0).o2z = typeParametersSerializers;
  protoOf($serializer_1).o2z = typeParametersSerializers;
  protoOf($serializer_2).o2z = typeParametersSerializers;
  protoOf($serializer_3).o2z = typeParametersSerializers;
  protoOf($serializer_4).o2z = typeParametersSerializers;
  protoOf($serializer_5).o2z = typeParametersSerializers;
  protoOf($serializer_6).o2z = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map
