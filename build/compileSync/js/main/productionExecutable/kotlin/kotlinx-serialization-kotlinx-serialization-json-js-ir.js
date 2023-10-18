(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.da;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.je;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var classMeta = kotlin_kotlin.$_$.w8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var joinToString = kotlin_kotlin.$_$.l6;
  var Map = kotlin_kotlin.$_$.z4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.xd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var toString = kotlin_kotlin.$_$.ia;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var List = kotlin_kotlin.$_$.x4;
  var toInt = kotlin_kotlin.$_$.cc;
  var toLong = kotlin_kotlin.$_$.ec;
  var toDouble = kotlin_kotlin.$_$.ac;
  var toLongOrNull = kotlin_kotlin.$_$.dc;
  var toDoubleOrNull = kotlin_kotlin.$_$.zb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.z3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var toULongOrNull = kotlin_kotlin.$_$.hc;
  var Companion_getInstance = kotlin_kotlin.$_$.h4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.a3;
  var ULong = kotlin_kotlin.$_$.jd;
  var isInterface = kotlin_kotlin.$_$.q9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var lazy_0 = kotlin_kotlin.$_$.yd;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toLong_0 = kotlin_kotlin.$_$.ga;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.q2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.s2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.z2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.b3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.h2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.j2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.k3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.v8;
  var coerceAtLeast = kotlin_kotlin.$_$.ja;
  var coerceAtMost = kotlin_kotlin.$_$.ka;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var arrayIterator = kotlin_kotlin.$_$.o8;
  var ensureNotNull = kotlin_kotlin.$_$.td;
  var emptyMap = kotlin_kotlin.$_$.z5;
  var getValue = kotlin_kotlin.$_$.h6;
  var copyOf = kotlin_kotlin.$_$.u5;
  var copyOf_0 = kotlin_kotlin.$_$.v5;
  var fillArrayVal = kotlin_kotlin.$_$.a9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.qc;
  var invoke = kotlin_kotlin.$_$.ud;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.rc;
  var Unit = kotlin_kotlin.$_$.md;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.t9;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var plus = kotlin_kotlin.$_$.ae;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.vc;
  var isFinite = kotlin_kotlin.$_$.wd;
  var isFinite_0 = kotlin_kotlin.$_$.vd;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toUInt = kotlin_kotlin.$_$.gc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.r2;
  var toULong = kotlin_kotlin.$_$.ic;
  var toUByte = kotlin_kotlin.$_$.fc;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var toUShort = kotlin_kotlin.$_$.jc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var objectCreate = kotlin_kotlin.$_$.ba;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var toString_0 = kotlin_kotlin.$_$.c2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.i4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var setOf = kotlin_kotlin.$_$.g7;
  var numberToChar = kotlin_kotlin.$_$.y9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.b2;
  var equals_0 = kotlin_kotlin.$_$.eb;
  var Char = kotlin_kotlin.$_$.pc;
  var toByte = kotlin_kotlin.$_$.fa;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.u3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.y3;
  var toShort = kotlin_kotlin.$_$.ha;
  var single = kotlin_kotlin.$_$.qb;
  var emptySet = kotlin_kotlin.$_$.a6;
  var plus_0 = kotlin_kotlin.$_$.b7;
  var toList = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.sc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var last = kotlin_kotlin.$_$.s6;
  var removeLast = kotlin_kotlin.$_$.f7;
  var lastIndexOf = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.xc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.d4;
  var charArray = kotlin_kotlin.$_$.s8;
  var indexOf = kotlin_kotlin.$_$.gb;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, {0: JsonNullSerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.x36_1 = configuration;
    this.y36_1 = serializersModule;
    this.z36_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).s2r = function () {
    return this.y36_1;
  };
  protoOf(Json).a37 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.eo();
    }
  };
  protoOf(Json).b37 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.e2o(), null);
    var result = input.d2r(deserializer);
    lexer.p37();
    return result;
  };
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    this.q37_1 = encodeDefaults;
    this.r37_1 = ignoreUnknownKeys;
    this.s37_1 = isLenient;
    this.t37_1 = allowStructuredMapKeys;
    this.u37_1 = prettyPrint;
    this.v37_1 = explicitNulls;
    this.w37_1 = prettyPrintIndent;
    this.x37_1 = coerceInputValues;
    this.y37_1 = useArrayPolymorphism;
    this.z37_1 = classDiscriminator;
    this.a38_1 = allowSpecialFloatingPointValues;
    this.b38_1 = useAlternativeNames;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.q37_1 + ', ignoreUnknownKeys=' + this.r37_1 + ', isLenient=' + this.s37_1 + ', ' + ('allowStructuredMapKeys=' + this.t37_1 + ', prettyPrint=' + this.u37_1 + ', explicitNulls=' + this.v37_1 + ', ') + ("prettyPrintIndent='" + this.w37_1 + "', coerceInputValues=" + this.x37_1 + ', useArrayPolymorphism=' + this.y37_1 + ', ') + ("classDiscriminator='" + this.z37_1 + "', allowSpecialFloatingPointValues=" + this.a38_1 + ')');
  };
  function JsonDecoder() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.t1();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.w1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.o5(_Char___init__impl__6a9atx(58));
    tmp0_apply.o6(v);
    return tmp0_apply.toString();
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.e38_1 = content;
  }
  protoOf(JsonObject).u1 = function () {
    return this.e38_1.u1();
  };
  protoOf(JsonObject).i2 = function () {
    return this.e38_1.i2();
  };
  protoOf(JsonObject).f = function () {
    return this.e38_1.f();
  };
  protoOf(JsonObject).f38 = function (key) {
    return this.e38_1.d2(key);
  };
  protoOf(JsonObject).d2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.f38((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).g38 = function (key) {
    return this.e38_1.h2(key);
  };
  protoOf(JsonObject).h2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g38((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.e38_1.k();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.e38_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.e38_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.e38_1.u1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.h38_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.i38_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  protoOf(JsonNull).j38 = function () {
    return this.h38_1;
  };
  protoOf(JsonNull).k38 = function () {
    return this.i38_1.w1();
  };
  protoOf(JsonNull).w2y = function (typeParamsSerializers) {
    return this.k38();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    Companion_getInstance_7();
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.j38();
  };
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.l38_1 = isString;
    this.m38_1 = toString(body);
  }
  protoOf(JsonLiteral).j38 = function () {
    return this.m38_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.l38_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.m38_1);
      tmp = tmp0_apply.toString();
    } else {
      tmp = this.m38_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.l38_1 === other.l38_1))
      return false;
    if (!(this.m38_1 === other.m38_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.l38_1 | 0;
    result = imul(31, result) + getStringHashCode(this.m38_1) | 0;
    return result;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.n38_1 = content;
  }
  protoOf(JsonArray).f = function () {
    return this.n38_1.f();
  };
  protoOf(JsonArray).o38 = function (element) {
    return this.n38_1.m(element);
  };
  protoOf(JsonArray).m = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.o38(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).p38 = function (elements) {
    return this.n38_1.b1(elements);
  };
  protoOf(JsonArray).b1 = function (elements) {
    return this.p38(elements);
  };
  protoOf(JsonArray).l = function (index) {
    return this.n38_1.l(index);
  };
  protoOf(JsonArray).q38 = function (element) {
    return this.n38_1.n(element);
  };
  protoOf(JsonArray).n = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.q38(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).k = function () {
    return this.n38_1.k();
  };
  protoOf(JsonArray).c = function () {
    return this.n38_1.c();
  };
  protoOf(JsonArray).r1 = function (index) {
    return this.n38_1.r1(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.n38_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.n38_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.n38_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.j38());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.j38());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.j38());
  }
  function get_float(_this__u8e3s4) {
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.j38();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.j38());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.j38();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.j38());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.j38());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.p2o('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.p2o('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.p2o('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.p2o('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.p2o('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().r38_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().s38_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().t38_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().u38_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().v38_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.w38_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).e2o = function () {
    return this.w38_1;
  };
  protoOf(JsonElementSerializer).x38 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.v2s(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.v2s(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.v2s(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).f2o = function (encoder, value) {
    return this.x38(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).g2o = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.d38();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y38_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).e2o();
    this.z38_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).i2p = function () {
    return this.y38_1.i2p();
  };
  protoOf(JsonObjectDescriptor).j2p = function () {
    return this.y38_1.j2p();
  };
  protoOf(JsonObjectDescriptor).k2p = function () {
    return this.y38_1.k2p();
  };
  protoOf(JsonObjectDescriptor).d2p = function () {
    return this.y38_1.d2p();
  };
  protoOf(JsonObjectDescriptor).l2p = function () {
    return this.y38_1.l2p();
  };
  protoOf(JsonObjectDescriptor).m2p = function (index) {
    return this.y38_1.m2p(index);
  };
  protoOf(JsonObjectDescriptor).n2p = function (index) {
    return this.y38_1.n2p(index);
  };
  protoOf(JsonObjectDescriptor).o2p = function (name) {
    return this.y38_1.o2p(name);
  };
  protoOf(JsonObjectDescriptor).p2p = function (index) {
    return this.y38_1.p2p(index);
  };
  protoOf(JsonObjectDescriptor).q2p = function (index) {
    return this.y38_1.q2p(index);
  };
  protoOf(JsonObjectDescriptor).h2p = function () {
    return this.z38_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.u38_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).e2o = function () {
    return this.u38_1;
  };
  protoOf(JsonObjectSerializer).a39 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).f2o(encoder, value);
  };
  protoOf(JsonObjectSerializer).f2o = function (encoder, value) {
    return this.a39(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).g2o = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).g2o(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.b39_1 = ListSerializer(JsonElementSerializer_getInstance()).e2o();
    this.c39_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).i2p = function () {
    return this.b39_1.i2p();
  };
  protoOf(JsonArrayDescriptor).j2p = function () {
    return this.b39_1.j2p();
  };
  protoOf(JsonArrayDescriptor).k2p = function () {
    return this.b39_1.k2p();
  };
  protoOf(JsonArrayDescriptor).d2p = function () {
    return this.b39_1.d2p();
  };
  protoOf(JsonArrayDescriptor).l2p = function () {
    return this.b39_1.l2p();
  };
  protoOf(JsonArrayDescriptor).m2p = function (index) {
    return this.b39_1.m2p(index);
  };
  protoOf(JsonArrayDescriptor).n2p = function (index) {
    return this.b39_1.n2p(index);
  };
  protoOf(JsonArrayDescriptor).o2p = function (name) {
    return this.b39_1.o2p(name);
  };
  protoOf(JsonArrayDescriptor).p2p = function (index) {
    return this.b39_1.p2p(index);
  };
  protoOf(JsonArrayDescriptor).q2p = function (index) {
    return this.b39_1.q2p(index);
  };
  protoOf(JsonArrayDescriptor).h2p = function () {
    return this.c39_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.v38_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).e2o = function () {
    return this.v38_1;
  };
  protoOf(JsonArraySerializer).d39 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).f2o(encoder, value);
  };
  protoOf(JsonArraySerializer).f2o = function (encoder, value) {
    return this.d39(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).g2o = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).g2o(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.r38_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).e2o = function () {
    return this.r38_1;
  };
  protoOf(JsonPrimitiveSerializer).e39 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.v2s(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.v2s(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).f2o = function (encoder, value) {
    return this.e39(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).g2o = function (decoder) {
    var result = asJsonDecoder(decoder).d38();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.s38_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).e2o = function () {
    return this.s38_1;
  };
  protoOf(JsonNullSerializer).f39 = function (encoder, value) {
    verify(encoder);
    encoder.y2r();
  };
  protoOf(JsonNullSerializer).f2o = function (encoder, value) {
    return this.f39(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).g2o = function (decoder) {
    verify_0(decoder);
    if (decoder.p2q()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.q2q();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.t38_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).e2o = function () {
    return this.t38_1;
  };
  protoOf(JsonLiteralSerializer).g39 = function (encoder, value) {
    verify(encoder);
    if (value.l38_1) {
      return encoder.h2s(value.m38_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d2s(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.m38_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.j2s(serializer_0(Companion_getInstance()).e2o());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.d2s(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.f2s(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.z2r(tmp3_safe_receiver);
    }
    encoder.h2s(value.m38_1);
  };
  protoOf(JsonLiteralSerializer).f2o = function (encoder, value) {
    return this.g39(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).g2o = function (decoder) {
    var result = asJsonDecoder(decoder).d38();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    original$factory();
    return $this.h39_1.w1();
  }
  function defer$1($deferred) {
    this.h39_1 = lazy_0($deferred);
  }
  protoOf(defer$1).h2p = function () {
    return _get_original__l7ku1m(this).h2p();
  };
  protoOf(defer$1).l2p = function () {
    return _get_original__l7ku1m(this).l2p();
  };
  protoOf(defer$1).j2p = function () {
    return _get_original__l7ku1m(this).j2p();
  };
  protoOf(defer$1).p2p = function (index) {
    return _get_original__l7ku1m(this).p2p(index);
  };
  protoOf(defer$1).o2p = function (name) {
    return _get_original__l7ku1m(this).o2p(name);
  };
  protoOf(defer$1).m2p = function (index) {
    return _get_original__l7ku1m(this).m2p(index);
  };
  protoOf(defer$1).n2p = function (index) {
    return _get_original__l7ku1m(this).n2p(index);
  };
  protoOf(defer$1).q2p = function (index) {
    return _get_original__l7ku1m(this).q2p(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.i39_1 = writer;
    this.j39_1 = true;
  }
  protoOf(Composer).k39 = function () {
    this.j39_1 = true;
  };
  protoOf(Composer).l39 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).m39 = function () {
    this.j39_1 = false;
  };
  protoOf(Composer).n39 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).o39 = function (v) {
    return this.i39_1.p39(v);
  };
  protoOf(Composer).q39 = function (v) {
    return this.i39_1.r39(v);
  };
  protoOf(Composer).s39 = function (v) {
    return this.i39_1.r39(v.toString());
  };
  protoOf(Composer).t39 = function (v) {
    return this.i39_1.r39(v.toString());
  };
  protoOf(Composer).u39 = function (v) {
    return this.i39_1.v39(toLong_0(v));
  };
  protoOf(Composer).w39 = function (v) {
    return this.i39_1.v39(toLong_0(v));
  };
  protoOf(Composer).x39 = function (v) {
    return this.i39_1.v39(toLong_0(v));
  };
  protoOf(Composer).y39 = function (v) {
    return this.i39_1.v39(v);
  };
  protoOf(Composer).z39 = function (v) {
    return this.i39_1.r39(v.toString());
  };
  protoOf(Composer).a3a = function (value) {
    return this.i39_1.b3a(value);
  };
  function Composer_0(sb, json) {
    return json.x36_1.u37_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.e3a_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).x39 = function (v) {
    if (this.e3a_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.a3a(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.q39(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).y39 = function (v) {
    if (this.e3a_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.a3a(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.q39(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).u39 = function (v) {
    if (this.e3a_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.a3a(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.q39(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).w39 = function (v) {
    if (this.e3a_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.a3a(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.q39(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.h3a_1 = json;
    this.i3a_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).k39 = function () {
    this.j39_1 = true;
    this.i3a_1 = this.i3a_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l39 = function () {
    this.i3a_1 = this.i3a_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).m39 = function () {
    this.j39_1 = false;
    this.q39('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.i3a_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.q39(this.h3a_1.x36_1.w37_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).n39 = function () {
    this.o39(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.k3a_1 = !descriptor.q2p(index) ? descriptor.n2p(index).d2p() : false;
    return $this.k3a_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.j3a_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.k3a_1 = false;
  }
  protoOf(JsonElementMarker).v2w = function (index) {
    this.j3a_1.v2w(index);
  };
  protoOf(JsonElementMarker).w2w = function () {
    return this.j3a_1.w2w();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.l3a('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.h2p() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l2p() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring)) + suffix;
  }
  function get_JsonAlternativeNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = _this__u8e3s4.o2p(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.x36_1.b38_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.n3a(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.h2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    Companion_getInstance_0();
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.h2p() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j2p();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.m2p(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(tmp0_filterIsInstanceTo);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o3a_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.d()) {
            var element_0 = tmp0_iterator_0.e();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.j2p());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).d2(name)) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.p2p(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.p2p(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.l3(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.r3a_1, 2);
    $this.p3a_1 = copyOf($this.p3a_1, newSize);
    $this.q3a_1 = copyOf_0($this.q3a_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p3a_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.q3a_1 = tmp_2;
    this.r3a_1 = -1;
  }
  protoOf(JsonPath).s3a = function (sd) {
    this.r3a_1 = this.r3a_1 + 1 | 0;
    var depth = this.r3a_1;
    if (depth === this.p3a_1.length) {
      resize(this);
    }
    this.p3a_1[depth] = sd;
  };
  protoOf(JsonPath).t3a = function (index) {
    this.q3a_1[this.r3a_1] = index;
  };
  protoOf(JsonPath).u3a = function (key) {
    var tmp;
    if (!(this.q3a_1[this.r3a_1] === -2)) {
      this.r3a_1 = this.r3a_1 + 1 | 0;
      tmp = this.r3a_1 === this.p3a_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.p3a_1[this.r3a_1] = key;
    this.q3a_1[this.r3a_1] = -2;
  };
  protoOf(JsonPath).v3a = function () {
    if (this.q3a_1[this.r3a_1] === -2) {
      this.p3a_1[this.r3a_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).w3a = function () {
    var depth = this.r3a_1;
    if (this.q3a_1[depth] === -2) {
      this.q3a_1[depth] = -1;
      this.r3a_1 = this.r3a_1 - 1 | 0;
    }
    if (!(this.r3a_1 === -1)) {
      this.r3a_1 = this.r3a_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).x3a = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.p6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.r3a_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.p3a_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l2p(), LIST_getInstance())) {
            if (!(this.q3a_1[index] === -1)) {
              tmp0_apply.p6('[');
              tmp0_apply.o6(this.q3a_1[index]);
              tmp0_apply.p6(']');
            }
          } else {
            var idx = this.q3a_1[index];
            if (idx >= 0) {
              tmp0_apply.p6('.');
              tmp0_apply.p6(element.p2p(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.p6('[');
            tmp0_apply.p6("'");
            tmp0_apply.o6(element);
            tmp0_apply.p6("'");
            tmp0_apply.p6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    return tmp0_apply.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.x3a();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.v2s(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.g3b_1.j3b(get_TC_BEGIN_OBJ());
    if ($this.g3b_1.k3b() === get_TC_COMMA()) {
      $this.g3b_1.l3a('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.g3b_1.l3b()) {
      var key = $this.h3b_1 ? $this.g3b_1.n3b() : $this.g3b_1.m3b();
      $this.g3b_1.j3b(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.o3b();
      // Inline function 'kotlin.collections.set' call
      result.l3(key, element);
      lastToken = $this.g3b_1.p3b();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.g3b_1.l3a('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.g3b_1.j3b(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.g3b_1.l3a('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function readArray($this) {
    var lastToken = $this.g3b_1.p3b();
    if ($this.g3b_1.k3b() === get_TC_COMMA()) {
      $this.g3b_1.l3a('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.g3b_1.l3b()) {
      var element = $this.o3b();
      result.a(element);
      lastToken = $this.g3b_1.p3b();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.g3b_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.l37_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.l3a(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.g3b_1.j3b(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.g3b_1.l3a('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.h3b_1 ? true : !isString) {
      tmp = $this.g3b_1.n3b();
    } else {
      tmp = $this.g3b_1.m3b();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.l3c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q3c = function ($this$$receiver, it, $completion) {
    var tmp = this.r3c($this$$receiver, it, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).d7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.q3c(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.o3c_1 = this.l3c_1.g3b_1.k3b();
            if (this.o3c_1 === get_TC_STRING()) {
              this.p3c_1 = readValue(this.l3c_1, true);
              this.sh_1 = 2;
              continue $sm;
            } else {
              if (this.o3c_1 === get_TC_OTHER()) {
                this.p3c_1 = readValue(this.l3c_1, false);
                this.sh_1 = 2;
                continue $sm;
              } else {
                if (this.o3c_1 === get_TC_BEGIN_OBJ()) {
                  this.sh_1 = 1;
                  suspendResult = readObject_0(this.m3c_1, this.l3c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.o3c_1 === get_TC_BEGIN_LIST()) {
                    this.p3c_1 = readArray(this.l3c_1);
                    this.sh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.l3c_1.g3b_1.l3a("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.p3c_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            return this.p3c_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).r3c = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.l3c_1, completion);
    i.m3c_1 = $this$$receiver;
    i.n3c_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.q3c($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3b_1 = _this__u8e3s4;
    this.z3b_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.a3c_1 = this.y3b_1.g3b_1.j3b(get_TC_BEGIN_OBJ());
            if (this.y3b_1.g3b_1.k3b() === get_TC_COMMA()) {
              this.y3b_1.g3b_1.l3a('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.b3c_1 = LinkedHashMap_init_$Create$();
            this.sh_1 = 1;
            continue $sm;
          case 1:
            if (!this.y3b_1.g3b_1.l3b()) {
              this.sh_1 = 4;
              continue $sm;
            }

            this.c3c_1 = this.y3b_1.h3b_1 ? this.y3b_1.g3b_1.n3b() : this.y3b_1.g3b_1.m3b();
            this.y3b_1.g3b_1.j3b(get_TC_COLON());
            this.sh_1 = 2;
            suspendResult = this.z3b_1.v6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.b3c_1.l3(this.c3c_1, element);
            this.a3c_1 = this.y3b_1.g3b_1.p3b();
            var tmp0_subject = this.a3c_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.sh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.sh_1 = 4;
                continue $sm;
              } else {
                this.y3b_1.g3b_1.l3a('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.sh_1 = 1;
            continue $sm;
          case 4:
            if (this.a3c_1 === get_TC_BEGIN_OBJ()) {
              this.y3b_1.g3b_1.j3b(get_TC_END_OBJ());
            } else if (this.a3c_1 === get_TC_COMMA()) {
              this.y3b_1.g3b_1.l3a('Unexpected trailing comma');
            }

            return new JsonObject(this.b3c_1);
          case 5:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 5) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.g3b_1 = lexer;
    this.h3b_1 = configuration.s37_1;
    this.i3b_1 = 0;
  }
  protoOf(JsonTreeReader).o3b = function () {
    var token = this.g3b_1.k3b();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.i3b_1 = this.i3b_1 + 1 | 0;
      if (this.i3b_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.i3b_1 = this.i3b_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.g3b_1.l3a('Cannot begin reading element, unexpected token: ' + token);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.i2p().c();
    while (tmp0_iterator.d()) {
      var annotation = tmp0_iterator.e();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.s3c_1;
    }
    return json.x36_1.z37_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.c38().x36_1.y37_1;
    }
    if (tmp) {
      return deserializer.g2o(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.e2o(), _this__u8e3s4.c38());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.d38();
    var tmp1_cast = deserializer.e2o();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.h2p() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    var jsonTree = tmp0_cast;
    var tmp0_safe_receiver = jsonTree.g38(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j38();
    var tmp2_elvis_lhs = deserializer.u2o(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.c38();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.e2o()).m(classDiscriminator)) {
      var baseName = serializer.e2o().h2p();
      var actualName = actualSerializer.e2o().h2p();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.m3a_1 = createMapForCache(1);
  }
  protoOf(DescriptorSchemaCache).t3c = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.m3a_1;
    var value_0 = tmp0_getOrPut.h2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(1);
      tmp0_getOrPut.l3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp1_set = tmp;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.l3(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).n3a = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.u3c(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.t3c(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).u3c = function (descriptor, key) {
    var tmp0_safe_receiver = this.m3a_1.h2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.h2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.v3c_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.v3c_1 === unknownKey) {
      _this__u8e3s4.v3c_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.u2r(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.f37_1.k3b() === get_TC_COMMA()) {
      $this.f37_1.l3a('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.h37_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.h37_1 === -1)) {
        hasComma = $this.f37_1.x3c();
      }
    } else {
      $this.f37_1.w3c(get_COLON());
    }
    var tmp;
    if ($this.f37_1.l3b()) {
      if (decodingKey) {
        if ($this.h37_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.f37_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.l37_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.l3a(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.f37_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.l37_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.l3a(tmp$ret$1, tmp5_require);
          }
        }
      }
      $this.h37_1 = $this.h37_1 + 1 | 0;
      tmp = $this.h37_1;
    } else {
      if (hasComma) {
        $this.f37_1.l3a("Expected '}', but had ',' instead");
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.d37_1;
      var tmp1_tryCoerceValue = descriptor.n2p(index);
      var tmp;
      if (!tmp1_tryCoerceValue.d2p()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = !$this.f37_1.y3c();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.l2p(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.f37_1.z3c($this.j37_1.s37_1);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.f37_1.m3b();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.f37_1.x3c();
    while ($this.f37_1.l3b()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.f37_1.w3c(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.d37_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.j37_1.x37_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.f37_1.x3c();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.k37_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.v2w(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.f37_1.l3a('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.k37_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w2w();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.j37_1.r37_1 ? true : trySkip($this.i37_1, $this, key)) {
      $this.f37_1.b3d($this.j37_1.s37_1);
    } else {
      $this.f37_1.a3d(key);
    }
    return $this.f37_1.x3c();
  }
  function decodeListIndex($this) {
    var hasComma = $this.f37_1.x3c();
    var tmp;
    if ($this.f37_1.l3b()) {
      if (!($this.h37_1 === -1) ? !hasComma : false) {
        $this.f37_1.l3a('Expected end of the array or comma');
      }
      $this.h37_1 = $this.h37_1 + 1 | 0;
      tmp = $this.h37_1;
    } else {
      if (hasComma) {
        $this.f37_1.l3a('Unexpected trailing comma');
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.j37_1.s37_1) {
      tmp = $this.f37_1.d3d();
    } else {
      tmp = $this.f37_1.c3d();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.d37_1 = json;
    this.e37_1 = mode;
    this.f37_1 = lexer;
    this.g37_1 = this.d37_1.s2r();
    this.h37_1 = -1;
    this.i37_1 = discriminatorHolder;
    this.j37_1 = this.d37_1.x36_1;
    this.k37_1 = this.j37_1.v37_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).c38 = function () {
    return this.d37_1;
  };
  protoOf(StreamingJsonDecoder).s2r = function () {
    return this.g37_1;
  };
  protoOf(StreamingJsonDecoder).d38 = function () {
    return (new JsonTreeReader(this.d37_1.x36_1, this.f37_1)).o3b();
  };
  protoOf(StreamingJsonDecoder).d2r = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.d37_1.x36_1.y37_1;
      }
      if (tmp) {
        return deserializer.g2o(this);
      }
      var discriminator = classDiscriminator(deserializer.e2o(), this.d37_1);
      var type = this.f37_1.e3d(discriminator, this.j37_1.s37_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.u2o(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.i37_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.g2o(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        throw new MissingFieldException(e.w2o_1, plus(e.message, ' at path: ') + this.f37_1.m37_1.x3a(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).e2r = function (descriptor) {
    var newMode = switchMode(this.d37_1, descriptor);
    this.f37_1.m37_1.s3a(descriptor);
    this.f37_1.w3c(newMode.h3d_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a5_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.d37_1, newMode, this.f37_1, descriptor, this.i37_1);
        break;
      default:
        var tmp_0;
        if (this.e37_1.equals(newMode) ? this.d37_1.x36_1.v37_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.d37_1, newMode, this.f37_1, descriptor, this.i37_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).f2r = function (descriptor) {
    if (this.d37_1.x36_1.r37_1 ? descriptor.j2p() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.f37_1.w3c(this.e37_1.i3d_1);
    this.f37_1.m37_1.w3a();
  };
  protoOf(StreamingJsonDecoder).p2q = function () {
    var tmp;
    var tmp0_safe_receiver = this.k37_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3a_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.f37_1.y3c();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q2q = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).q2r = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.e37_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.f37_1.m37_1.v3a();
    }
    var value = protoOf(AbstractDecoder).q2r.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.f37_1.m37_1.u3a(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).u2r = function (descriptor) {
    var index;
    switch (this.e37_1.a5_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.e37_1.equals(WriteMode_MAP_getInstance())) {
      this.f37_1.m37_1.t3a(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).r2q = function () {
    var tmp;
    if (this.j37_1.s37_1) {
      tmp = this.f37_1.k3d();
    } else {
      tmp = this.f37_1.j3d();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s2q = function () {
    var value = this.f37_1.l3d();
    if (!value.equals(toLong_0(value.jh()))) {
      this.f37_1.l3a("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.jh();
  };
  protoOf(StreamingJsonDecoder).t2q = function () {
    var value = this.f37_1.l3d();
    if (!value.equals(toLong_0(value.kh()))) {
      this.f37_1.l3a("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.kh();
  };
  protoOf(StreamingJsonDecoder).u2q = function () {
    var value = this.f37_1.l3d();
    if (!value.equals(toLong_0(value.g6()))) {
      this.f37_1.l3a("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.g6();
  };
  protoOf(StreamingJsonDecoder).v2q = function () {
    return this.f37_1.l3d();
  };
  protoOf(StreamingJsonDecoder).w2q = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.f37_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.d37_1.x36_1.a38_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f37_1, result);
  };
  protoOf(StreamingJsonDecoder).x2q = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.f37_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.d37_1.x36_1.a38_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f37_1, result);
  };
  protoOf(StreamingJsonDecoder).y2q = function () {
    var string = this.f37_1.n3b();
    if (!(string.length === 1)) {
      this.f37_1.l3a("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).z2q = function () {
    var tmp;
    if (this.j37_1.s37_1) {
      tmp = this.f37_1.d3d();
    } else {
      tmp = this.f37_1.m3b();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).b2r = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.f37_1, this.d37_1) : protoOf(AbstractDecoder).b2r.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).a2r = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.d37_1, this.z2q(), ' at path ' + this.f37_1.m37_1.x3a());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.m3d_1 = lexer;
    this.n3d_1 = json.s2r();
  }
  protoOf(JsonDecoderForUnsignedTypes).s2r = function () {
    return this.n3d_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).u2r = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).u2q = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.m3d_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2q = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.m3d_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).s2q = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.m3d_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).t2q = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.m3d_1;
      var input = tmp0_parseString.n3b();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(tmp0_toShort);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.l3a("Failed to parse type 'UShort' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.y3a_1.m39();
    $this.h2s(ensureNotNull($this.f3b_1));
    $this.y3a_1.o39(get_COLON());
    $this.y3a_1.n39();
    $this.h2s(descriptor.h2p());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.y3a_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.y3a_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.y3a_1.i39_1, $this.e3b_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.y3a_1 = composer;
    this.z3a_1 = json;
    this.a3b_1 = mode;
    this.b3b_1 = modeReuseCache;
    this.c3b_1 = this.z3a_1.s2r();
    this.d3b_1 = this.z3a_1.x36_1;
    this.e3b_1 = false;
    this.f3b_1 = null;
    var i = this.a3b_1.a5_1;
    if (!(this.b3b_1 == null)) {
      if (!(this.b3b_1[i] === null) ? true : !(this.b3b_1[i] === this)) {
        this.b3b_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).c38 = function () {
    return this.z3a_1;
  };
  protoOf(StreamingJsonEncoder).s2r = function () {
    return this.c3b_1;
  };
  protoOf(StreamingJsonEncoder).y2s = function (descriptor, index) {
    return this.d3b_1.q37_1;
  };
  protoOf(StreamingJsonEncoder).v2s = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c38().x36_1.y37_1;
      }
      if (tmp) {
        serializer.f2o(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.e2o(), this.c38());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.e2o().l2p());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.f3b_1 = baseClassDiscriminator;
      actualSerializer.f2o(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).e2r = function (descriptor) {
    var newMode = switchMode(this.z3a_1, descriptor);
    if (!(newMode.h3d_1 === get_INVALID())) {
      this.y3a_1.o39(newMode.h3d_1);
      this.y3a_1.k39();
    }
    if (!(this.f3b_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.f3b_1 = null;
    }
    if (this.a3b_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.b3b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.a5_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.y3a_1, this.z3a_1, newMode, this.b3b_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).f2r = function (descriptor) {
    if (!(this.a3b_1.i3d_1 === get_INVALID())) {
      this.y3a_1.l39();
      this.y3a_1.m39();
      this.y3a_1.o39(this.a3b_1.i3d_1);
    }
  };
  protoOf(StreamingJsonEncoder).w2r = function (descriptor, index) {
    switch (this.a3b_1.a5_1) {
      case 1:
        if (!this.y3a_1.j39_1) {
          this.y3a_1.o39(get_COMMA());
        }

        this.y3a_1.m39();
        break;
      case 2:
        if (!this.y3a_1.j39_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.y3a_1.o39(get_COMMA());
            this.y3a_1.m39();
            tmp_0 = true;
          } else {
            this.y3a_1.o39(get_COLON());
            this.y3a_1.n39();
            tmp_0 = false;
          }
          tmp.e3b_1 = tmp_0;
        } else {
          this.e3b_1 = true;
          this.y3a_1.m39();
        }

        break;
      case 3:
        if (index === 0)
          this.e3b_1 = true;
        if (index === 1) {
          this.y3a_1.o39(get_COMMA());
          this.y3a_1.n39();
          this.e3b_1 = false;
        }

        break;
      default:
        if (!this.y3a_1.j39_1) {
          this.y3a_1.o39(get_COMMA());
        }

        this.y3a_1.m39();
        this.h2s(descriptor.p2p(index));
        this.y3a_1.o39(get_COLON());
        this.y3a_1.n39();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).j2s = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.z3a_1, this.a3b_1, null) : protoOf(AbstractEncoder).j2s.call(this, descriptor);
  };
  protoOf(StreamingJsonEncoder).y2r = function () {
    this.y3a_1.q39(get_NULL());
  };
  protoOf(StreamingJsonEncoder).z2r = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.z39(value);
    }
  };
  protoOf(StreamingJsonEncoder).a2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.u39(value);
    }
  };
  protoOf(StreamingJsonEncoder).b2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.w39(value);
    }
  };
  protoOf(StreamingJsonEncoder).c2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.x39(value);
    }
  };
  protoOf(StreamingJsonEncoder).d2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.y39(value);
    }
  };
  protoOf(StreamingJsonEncoder).e2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.s39(value);
    }
    if (!this.d3b_1.a38_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.y3a_1.i39_1));
    }
  };
  protoOf(StreamingJsonEncoder).f2s = function (value) {
    if (this.e3b_1) {
      this.h2s(value.toString());
    } else {
      this.y3a_1.t39(value);
    }
    if (!this.d3b_1.a38_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.y3a_1.i39_1));
    }
  };
  protoOf(StreamingJsonEncoder).g2s = function (value) {
    this.h2s(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).h2s = function (value) {
    return this.y3a_1.a3a(value);
  };
  protoOf(StreamingJsonEncoder).i2s = function (enumDescriptor, index) {
    this.h2s(enumDescriptor.p2p(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.k2p() ? get_unsignedNumberDescriptors().m(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).e2o(), serializer_0(Companion_getInstance()).e2o(), serializer_2(Companion_getInstance_2()).e2o(), serializer_3(Companion_getInstance_3()).e2o()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      tmp = numberToChar(d + 48 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      tmp = numberToChar(tmp_0 + 97 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.o5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var tmp0_get_code_gknlva = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.ze(value, lastPos, i);
          _this__u8e3s4.p6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.ze(value, lastPos, value.length);
    } else {
      _this__u8e3s4.p6(value);
    }
    _this__u8e3s4.o5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_apply = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      tmp0_apply[34] = '\\"';
      // Inline function 'kotlin.code' call
      tmp0_apply[92] = '\\\\';
      // Inline function 'kotlin.code' call
      tmp0_apply[9] = '\\t';
      // Inline function 'kotlin.code' call
      tmp0_apply[8] = '\\b';
      // Inline function 'kotlin.code' call
      tmp0_apply[10] = '\\n';
      // Inline function 'kotlin.code' call
      tmp0_apply[13] = '\\r';
      tmp0_apply[12] = '\\f';
      ESCAPE_STRINGS = tmp0_apply;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var tmp = 34;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp] = toByte(34);
      // Inline function 'kotlin.code' call
      var tmp_0 = 92;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_0] = toByte(92);
      // Inline function 'kotlin.code' call
      var tmp_1 = 9;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_1] = toByte(116);
      // Inline function 'kotlin.code' call
      var tmp_2 = 8;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_2] = toByte(98);
      // Inline function 'kotlin.code' call
      var tmp_3 = 10;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_3] = toByte(110);
      // Inline function 'kotlin.code' call
      var tmp_4 = 13;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_4] = toByte(114);
      // Inline function 'kotlin.code' call
      tmp0_apply_0[12] = toByte(102);
      ESCAPE_MARKERS = tmp0_apply_0;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.o34();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = $this.t3d(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.w1() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.q3d_1 = json;
    this.r3d_1 = value;
    this.s3d_1 = this.c38().x36_1;
  }
  protoOf(AbstractJsonTreeDecoder).c38 = function () {
    return this.q3d_1;
  };
  protoOf(AbstractJsonTreeDecoder).w1 = function () {
    return this.r3d_1;
  };
  protoOf(AbstractJsonTreeDecoder).s2r = function () {
    return this.c38().s2r();
  };
  protoOf(AbstractJsonTreeDecoder).d38 = function () {
    return currentObject(this);
  };
  protoOf(AbstractJsonTreeDecoder).d2r = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).p34 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).e2r = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.l2p();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.c38();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.h2p() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject_0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.c38();
        var keyDescriptor = carrierDescriptor(descriptor.n2p(0), tmp0_selectMapMode.s2r());
        var keyKind = keyDescriptor.l2p();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.c38();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.h2p() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject_0);
        } else {
          if (tmp0_selectMapMode.x36_1.t37_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.c38();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.h2p() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject_0);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.c38();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.h2p() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject_0);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).f2r = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).p2q = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).u3d = function (tag) {
    var currentElement = this.t3d(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).v3d = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.c38(), this.u3d(tag).j38());
  };
  protoOf(AbstractJsonTreeDecoder).b35 = function (tag, enumDescriptor) {
    return this.v3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).w3d = function (tag) {
    return !(this.t3d(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r34 = function (tag) {
    return this.w3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x3d = function (tag) {
    var value = this.u3d(tag);
    if (!this.c38().x36_1.s37_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.l38_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).s34 = function (tag) {
    return this.x3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).t34 = function (tag) {
    return this.y3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).u34 = function (tag) {
    return this.z3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a3e = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).v34 = function (tag) {
    return this.a3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b3e = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).w34 = function (tag) {
    return this.b3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c3e = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.c38().x36_1.a38_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).x34 = function (tag) {
    return this.c3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3e = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.c38().x36_1.a38_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).y34 = function (tag) {
    return this.d3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e3e = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.u3d(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(tmp0_primitive.j38());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).z34 = function (tag) {
    return this.e3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f3e = function (tag) {
    var value = this.u3d(tag);
    if (!this.c38().x36_1.s37_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.l38_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.j38();
  };
  protoOf(AbstractJsonTreeDecoder).a35 = function (tag) {
    return this.f3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g3e = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.u3d(tag).j38()), this.c38()) : protoOf(NamedValueDecoder).c35.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).c35 = function (tag, inlineDescriptor) {
    return this.g3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.c38();
      var tmp1_tryCoerceValue = descriptor.n2p(index);
      var tmp;
      if (!tmp1_tryCoerceValue.d2p()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.t3d(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.l2p(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.t3d(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.q3e_1 = (!$this.c38().x36_1.v37_1 ? !descriptor.q2p(index) : false) ? descriptor.n2p(index).d2p() : false;
    return $this.q3e_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.m3e_1 = value;
    this.n3e_1 = polyDiscriminator;
    this.o3e_1 = polyDescriptor;
    this.p3e_1 = 0;
    this.q3e_1 = false;
  }
  protoOf(JsonTreeDecoder).w1 = function () {
    return this.m3e_1;
  };
  protoOf(JsonTreeDecoder).u2r = function (descriptor) {
    while (this.p3e_1 < descriptor.j2p()) {
      var tmp1 = this.p3e_1;
      this.p3e_1 = tmp1 + 1 | 0;
      var name = this.j34(descriptor, tmp1);
      var index = this.p3e_1 - 1 | 0;
      this.q3e_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.w1();
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).d2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.s3d_1.x37_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeDecoder).p2q = function () {
    return !this.q3e_1 ? protoOf(AbstractJsonTreeDecoder).p2q.call(this) : false;
  };
  protoOf(JsonTreeDecoder).k34 = function (desc, index) {
    var mainName = desc.p2p(index);
    if (!this.s3d_1.b38_1)
      return mainName;
    if (this.w1().i2().m(mainName))
      return mainName;
    var tmp = get_schemaCache(this.c38());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.n3a(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.w1().i2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (alternativeNamesMap.h2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var nameInObject = tmp$ret$1;
    return nameInObject == null ? mainName : nameInObject;
  };
  protoOf(JsonTreeDecoder).t3d = function (tag) {
    return getValue(this.w1(), tag);
  };
  protoOf(JsonTreeDecoder).e2r = function (descriptor) {
    if (descriptor === this.o3e_1)
      return this;
    return protoOf(AbstractJsonTreeDecoder).e2r.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).f2r = function (descriptor) {
    var tmp;
    if (this.s3d_1.r37_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l2p();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.s3d_1.b38_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.c38()).u3c(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2();
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.w1().i2().c();
    while (tmp1_iterator.d()) {
      var key = tmp1_iterator.e();
      if (!names.m(key) ? !(key === this.n3e_1) : false) {
        throw UnknownKeyException(key, this.w1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w3e_1 = value;
    this.x3e_1 = this.w3e_1.f();
    this.y3e_1 = -1;
  }
  protoOf(JsonTreeListDecoder).w1 = function () {
    return this.w3e_1;
  };
  protoOf(JsonTreeListDecoder).k34 = function (desc, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).t3d = function (tag) {
    return this.w3e_1.l(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).u2r = function (descriptor) {
    while (this.y3e_1 < (this.x3e_1 - 1 | 0)) {
      this.y3e_1 = this.y3e_1 + 1 | 0;
      return this.y3e_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.j3f_1 = value;
    this.k3f_1 = toList(this.j3f_1.i2());
    this.l3f_1 = imul(this.k3f_1.f(), 2);
    this.m3f_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).w1 = function () {
    return this.j3f_1;
  };
  protoOf(JsonTreeMapDecoder).k34 = function (desc, index) {
    var i = index / 2 | 0;
    return this.k3f_1.l(i);
  };
  protoOf(JsonTreeMapDecoder).u2r = function (descriptor) {
    while (this.m3f_1 < (this.l3f_1 - 1 | 0)) {
      this.m3f_1 = this.m3f_1 + 1 | 0;
      return this.m3f_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeMapDecoder).t3d = function (tag) {
    return (this.m3f_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.j3f_1, tag);
  };
  protoOf(JsonTreeMapDecoder).f2r = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.e2o())).d2r(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.h3d_1 = begin;
    this.i3d_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l2p();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.n2p(0), _this__u8e3s4.s2r());
          var keyKind = keyDescriptor.l2p();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.x36_1.t37_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.l2p(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.k2p()) {
      tmp = carrierDescriptor(_this__u8e3s4.n2p(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.n3f(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.n3f(lastPosition, currentPosition);
    var result = $this.o37_1.toString();
    $this.o37_1.af(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.n37_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.n37_1 = null;
    return tmp0_also;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.o3f(), $this.l37_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.p3f(currentPosition);
    if (currentPosition === -1) {
      $this.l3a('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.o3f();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.o3f(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.l3a("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.o37_1.o5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.l37_1 = startPos;
      $this.q3f();
      if (($this.l37_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.l3a('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.l37_1);
    }
    $this.o37_1.o5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = tmp_0 - 48 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = (tmp_1 - 97 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = (tmp_2 - 65 | 0) + 10 | 0;
    } else {
      $this.l3a("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.p3f(start);
    if (current >= charSequenceLength($this.o3f()) ? true : current === -1) {
      $this.l3a('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.o3f();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0_get_code_gknlva = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(tmp0_get_code_gknlva) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    if (tmp1_subject === 116) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      if (tmp1_subject === 102) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.l3a("Expected valid boolean literal prefix, but had '" + $this.n3b() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.o3f()) - current | 0) < literalSuffix.length) {
      $this.l3a('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.o3f(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.l3a("Expected valid boolean literal prefix, but had '" + $this.n3b() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.l37_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.l37_1 = 0;
    this.m37_1 = new JsonPath();
    this.n37_1 = null;
    this.o37_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).q3f = function () {
  };
  protoOf(AbstractJsonLexer).r3f = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).p37 = function () {
    var nextToken = this.p3b();
    if (!(nextToken === 10)) {
      this.l3a('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.o3f(), this.l37_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).j3b = function (expected) {
    var token = this.p3b();
    if (!(token === expected)) {
      this.s3f(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).w3c = function (expected) {
    this.q3f();
    var source = this.o3f();
    var cpos = this.l37_1;
    $l$loop_0: while (true) {
      cpos = this.p3f(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.l37_1 = cpos;
      if (c === expected)
        return Unit_getInstance();
      this.t3f(expected);
    }
    this.l37_1 = cpos;
    this.t3f(expected);
  };
  protoOf(AbstractJsonLexer).t3f = function (expected) {
    this.l37_1 = this.l37_1 - 1 | 0;
    if ((this.l37_1 >= 0 ? expected === _Char___init__impl__6a9atx(34) : false) ? this.n3b() === 'null' : false) {
      this.u3f("Expected string literal but 'null' literal was found", this.l37_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.s3f(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).s3f = function (expectedToken) {
    var expected = expectedToken === 1 ? "quotation mark '\"'" : expectedToken === 4 ? "comma ','" : expectedToken === 5 ? "colon ':'" : expectedToken === 6 ? "start of the object '{'" : expectedToken === 7 ? "end of the object '}'" : expectedToken === 8 ? "start of the array '['" : expectedToken === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.l37_1 === charSequenceLength(this.o3f()) ? true : this.l37_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.o3f(), this.l37_1 - 1 | 0));
    this.l3a('Expected ' + expected + ", but had '" + s + "' instead", this.l37_1 - 1 | 0);
  };
  protoOf(AbstractJsonLexer).k3b = function () {
    var source = this.o3f();
    var cpos = this.l37_1;
    $l$loop_0: while (true) {
      cpos = this.p3f(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l37_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l37_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).y3c = function () {
    var current = this.v3f();
    current = this.p3f(current);
    var len = charSequenceLength(this.o3f()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.o3f(), current + i | 0)))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.o3f(), current + 4 | 0)) === 0 : false)
      return true;
    this.l37_1 = current + 4 | 0;
    return false;
  };
  protoOf(AbstractJsonLexer).v3f = function () {
    var current = this.l37_1;
    $l$loop_0: while (true) {
      current = this.p3f(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.o3f(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.l37_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).z3c = function (isLenient) {
    var token = this.k3b();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.n3b();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.m3b();
    }
    var string = tmp;
    this.n37_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).w3f = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.o3f();
    return toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).m3b = function () {
    if (!(this.n37_1 == null)) {
      return takePeeked(this);
    }
    return this.c3d();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.p3f(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.l3a('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.n3f(lastPosition, currentPosition);
          currentPosition = this.p3f(currentPosition);
          if (currentPosition === -1) {
            this.l3a('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w3f(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l37_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).d3d = function () {
    var result = this.n3b();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.l3a("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).n3b = function () {
    if (!(this.n37_1 == null)) {
      return takePeeked(this);
    }
    var current = this.v3f();
    if (current >= charSequenceLength(this.o3f()) ? true : current === -1) {
      this.l3a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.o3f(), current));
    if (token === 1) {
      return this.m3b();
    }
    if (!(token === 0)) {
      this.l3a('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.o3f(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.o3f(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.o3f())) {
        usedAppend = true;
        this.n3f(this.l37_1, current);
        var eof = this.p3f(current);
        if (eof === -1) {
          this.l37_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w3f(this.l37_1, current);
    } else {
      tmp = decodedString(this, this.l37_1, current);
    }
    var result = tmp;
    this.l37_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).n3f = function (fromIndex, toIndex) {
    this.o37_1.ze(this.o3f(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).b3d = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.k3b();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.n3b();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.k3b();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.n3b();
        } else {
          this.c3d();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.l37_1, 'found ] instead of } at path: ' + this.m37_1, this.o3f());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.l37_1, 'found } instead of ] at path: ' + this.m37_1, this.o3f());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.l3a('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.p3b();
      if (tokenStack.f() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.o3f() + "', currentPosition=" + this.l37_1 + ')';
  };
  protoOf(AbstractJsonLexer).a3d = function (key) {
    var processed = this.w3f(0, this.l37_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.u3f("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).u3f = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.m37_1.x3a() + hintMessage, this.o3f());
  };
  protoOf(AbstractJsonLexer).l3a = function (message, position, hint, $super) {
    position = position === VOID ? this.l37_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.u3f(message, position, hint) : $super.u3f.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).l3d = function () {
    var current = this.v3f();
    current = this.p3f(current);
    if (current >= charSequenceLength(this.o3f()) ? true : current === -1) {
      this.l3a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.o3f(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.o3f())) {
        this.l3a('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.o3f(), current);
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.l3a("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.o3f()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.l3a("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.r5(new Long(10, 0)).t5(toLong_0(digit));
      if (accumulator.s(new Long(0, 0)) > 0) {
        this.l3a('Numeric value overflow');
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.l3a('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.l3a('EOF');
      }
      if (!(charSequenceGet(this.o3f(), current) === _Char___init__impl__6a9atx(34))) {
        this.l3a('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.l37_1 = current;
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else {
      var tmp_1 = accumulator;
      Companion_getInstance_4();
      if (!tmp_1.equals(new Long(0, -2147483648))) {
        tmp_0 = accumulator.p5();
      } else {
        this.l3a('Numeric value overflow');
      }
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).j3d = function () {
    return consumeBoolean(this, this.v3f());
  };
  protoOf(AbstractJsonLexer).k3d = function () {
    var current = this.v3f();
    if (current === charSequenceLength(this.o3f())) {
      this.l3a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.o3f(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.l37_1 === charSequenceLength(this.o3f())) {
        this.l3a('EOF');
      }
      if (!(charSequenceGet(this.o3f(), this.l37_1) === _Char___init__impl__6a9atx(34))) {
        this.l3a('Expected closing quotation mark');
      }
      this.l37_1 = this.l37_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().y3f_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().x3f_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.x3f_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.y3f_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.x3f_1 = charArray(117);
    this.y3f_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.d3g_1 = source;
  }
  protoOf(StringJsonLexer).o3f = function () {
    return this.d3g_1;
  };
  protoOf(StringJsonLexer).p3f = function (position) {
    return position < this.d3g_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).p3b = function () {
    var source = this.d3g_1;
    $l$loop: while (!(this.l37_1 === -1) ? this.l37_1 < source.length : false) {
      var tmp1 = this.l37_1;
      this.l37_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).x3c = function () {
    var current = this.v3f();
    if (current === this.d3g_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.d3g_1, current) === _Char___init__impl__6a9atx(44)) {
      this.l37_1 = this.l37_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).l3b = function () {
    var current = this.l37_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.d3g_1.length) {
      var c = charSequenceGet(this.d3g_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l37_1 = current;
      return this.r3f(c);
    }
    this.l37_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).v3f = function () {
    var current = this.l37_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.d3g_1.length) {
      var c = charSequenceGet(this.d3g_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l37_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).w3c = function (expected) {
    if (this.l37_1 === -1) {
      this.t3f(expected);
    }
    var source = this.d3g_1;
    $l$loop: while (this.l37_1 < source.length) {
      var tmp1 = this.l37_1;
      this.l37_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_getInstance();
      this.t3f(expected);
    }
    this.t3f(expected);
  };
  protoOf(StringJsonLexer).c3d = function () {
    this.w3c(get_STRING());
    var current = this.l37_1;
    var closingQuote = indexOf(this.d3g_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.s3f(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.d3g_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.d3g_1, this.l37_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l37_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.d3g_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).e3d = function (keyToMatch, isLenient) {
    var positionSnapshot = this.l37_1;
    try {
      if (!(this.p3b() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.c3d() : this.d3d();
      if (firstKey === keyToMatch) {
        if (!(this.p3b() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.m3b() : this.d3d();
        return result;
      }
      return null;
    }finally {
      this.l37_1 = positionSnapshot;
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.z36_1;
  }
  function JsonToStringWriter() {
    this.c37_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).v39 = function (value) {
    this.c37_1.o6(value);
  };
  protoOf(JsonToStringWriter).p39 = function (char) {
    this.c37_1.o5(char);
  };
  protoOf(JsonToStringWriter).r39 = function (text) {
    this.c37_1.p6(text);
  };
  protoOf(JsonToStringWriter).b3a = function (text) {
    printQuoted(this.c37_1, text);
  };
  protoOf(JsonToStringWriter).eo = function () {
    this.c37_1.bf();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.c37_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).d2p = get_isNullable;
  protoOf(defer$1).k2p = get_isInline;
  protoOf(defer$1).i2p = get_annotations;
  protoOf(StreamingJsonDecoder).r2r = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).t2r = decodeSequentially;
  protoOf(StreamingJsonDecoder).v2r = decodeCollectionSize;
  protoOf(JsonDecoderForUnsignedTypes).d2r = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).r2r = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).t2r = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).v2r = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).w2s = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).x2s = beginCollection;
  protoOf(AbstractJsonTreeDecoder).r2r = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).t2r = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).v2r = decodeCollectionSize;
  protoOf(JsonTreeDecoder).r2r = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).t2r = decodeSequentially;
  protoOf(JsonTreeDecoder).v2r = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).r2r = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).t2r = decodeSequentially;
  protoOf(JsonTreeListDecoder).v2r = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).r2r = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).t2r = decodeSequentially;
  protoOf(JsonTreeMapDecoder).v2r = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
