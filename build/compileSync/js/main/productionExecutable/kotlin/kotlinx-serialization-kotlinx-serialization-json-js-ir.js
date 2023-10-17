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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.ca;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var VOID = kotlin_kotlin.$_$.he;
  var setMetadataFor = kotlin_kotlin.$_$.da;
  var classMeta = kotlin_kotlin.$_$.v8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.g9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var equals = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.e9;
  var joinToString = kotlin_kotlin.$_$.k6;
  var Map = kotlin_kotlin.$_$.y4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.wd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var toString = kotlin_kotlin.$_$.ha;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.d9;
  var List = kotlin_kotlin.$_$.w4;
  var toInt = kotlin_kotlin.$_$.bc;
  var toLong = kotlin_kotlin.$_$.dc;
  var toDouble = kotlin_kotlin.$_$.zb;
  var toLongOrNull = kotlin_kotlin.$_$.cc;
  var toDoubleOrNull = kotlin_kotlin.$_$.yb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Unit_getInstance = kotlin_kotlin.$_$.i4;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.y3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var toULongOrNull = kotlin_kotlin.$_$.gc;
  var Companion_getInstance = kotlin_kotlin.$_$.g4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z2;
  var ULong = kotlin_kotlin.$_$.id;
  var isInterface = kotlin_kotlin.$_$.p9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var lazy_0 = kotlin_kotlin.$_$.xd;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var KProperty1 = kotlin_kotlin.$_$.sa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toLong_0 = kotlin_kotlin.$_$.fa;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.r2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.a3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.i2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.j3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.u8;
  var coerceAtLeast = kotlin_kotlin.$_$.ia;
  var coerceAtMost = kotlin_kotlin.$_$.ja;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.g7;
  var arrayIterator = kotlin_kotlin.$_$.n8;
  var ensureNotNull = kotlin_kotlin.$_$.sd;
  var emptyMap = kotlin_kotlin.$_$.y5;
  var getValue = kotlin_kotlin.$_$.g6;
  var copyOf = kotlin_kotlin.$_$.t5;
  var copyOf_0 = kotlin_kotlin.$_$.u5;
  var fillArrayVal = kotlin_kotlin.$_$.z8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.pc;
  var invoke = kotlin_kotlin.$_$.td;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.qc;
  var Unit = kotlin_kotlin.$_$.ld;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var isObject = kotlin_kotlin.$_$.s9;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var plus = kotlin_kotlin.$_$.zd;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.uc;
  var isFinite = kotlin_kotlin.$_$.vd;
  var isFinite_0 = kotlin_kotlin.$_$.ud;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toUInt = kotlin_kotlin.$_$.fc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var toULong = kotlin_kotlin.$_$.hc;
  var toUByte = kotlin_kotlin.$_$.ec;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h2;
  var toUShort = kotlin_kotlin.$_$.ic;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var objectCreate = kotlin_kotlin.$_$.aa;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.f4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.e4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.h4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var setOf = kotlin_kotlin.$_$.f7;
  var numberToChar = kotlin_kotlin.$_$.x9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a2;
  var equals_0 = kotlin_kotlin.$_$.db;
  var Char = kotlin_kotlin.$_$.oc;
  var toByte = kotlin_kotlin.$_$.ea;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.t3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.x3;
  var toShort = kotlin_kotlin.$_$.ga;
  var single = kotlin_kotlin.$_$.pb;
  var emptySet = kotlin_kotlin.$_$.z5;
  var plus_0 = kotlin_kotlin.$_$.a7;
  var toList = kotlin_kotlin.$_$.l7;
  var Enum = kotlin_kotlin.$_$.rc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var last = kotlin_kotlin.$_$.r6;
  var removeLast = kotlin_kotlin.$_$.e7;
  var lastIndexOf = kotlin_kotlin.$_$.lb;
  var Long = kotlin_kotlin.$_$.wc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.c4;
  var charArray = kotlin_kotlin.$_$.r8;
  var indexOf = kotlin_kotlin.$_$.fb;
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
    this.w32_1 = configuration;
    this.x32_1 = serializersModule;
    this.y32_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).h2o = function () {
    return this.x32_1;
  };
  protoOf(Json).z32 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.co();
    }
  };
  protoOf(Json).a33 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.x2k(), null);
    var result = input.s2n(deserializer);
    lexer.o33();
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
    this.p33_1 = encodeDefaults;
    this.q33_1 = ignoreUnknownKeys;
    this.r33_1 = isLenient;
    this.s33_1 = allowStructuredMapKeys;
    this.t33_1 = prettyPrint;
    this.u33_1 = explicitNulls;
    this.v33_1 = prettyPrintIndent;
    this.w33_1 = coerceInputValues;
    this.x33_1 = useArrayPolymorphism;
    this.y33_1 = classDiscriminator;
    this.z33_1 = allowSpecialFloatingPointValues;
    this.a34_1 = useAlternativeNames;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.p33_1 + ', ignoreUnknownKeys=' + this.q33_1 + ', isLenient=' + this.r33_1 + ', ' + ('allowStructuredMapKeys=' + this.s33_1 + ', prettyPrint=' + this.t33_1 + ', explicitNulls=' + this.u33_1 + ', ') + ("prettyPrintIndent='" + this.v33_1 + "', coerceInputValues=" + this.w33_1 + ', useArrayPolymorphism=' + this.x33_1 + ', ') + ("classDiscriminator='" + this.y33_1 + "', allowSpecialFloatingPointValues=" + this.z33_1 + ')');
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
    var k = _name_for_destructuring_parameter_0__wldtmu.r1();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.u1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.m5(_Char___init__impl__6a9atx(58));
    tmp0_apply.m6(v);
    return tmp0_apply.toString();
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.d34_1 = content;
  }
  protoOf(JsonObject).s1 = function () {
    return this.d34_1.s1();
  };
  protoOf(JsonObject).g2 = function () {
    return this.d34_1.g2();
  };
  protoOf(JsonObject).f = function () {
    return this.d34_1.f();
  };
  protoOf(JsonObject).e34 = function (key) {
    return this.d34_1.b2(key);
  };
  protoOf(JsonObject).b2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.e34((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).f34 = function (key) {
    return this.d34_1.f2(key);
  };
  protoOf(JsonObject).f2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.f34((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.d34_1.k();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.d34_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.d34_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.d34_1.s1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.g34_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.h34_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  protoOf(JsonNull).i34 = function () {
    return this.g34_1;
  };
  protoOf(JsonNull).j34 = function () {
    return this.h34_1.u1();
  };
  protoOf(JsonNull).w2u = function (typeParamsSerializers) {
    return this.j34();
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
    return this.i34();
  };
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.k34_1 = isString;
    this.l34_1 = toString(body);
  }
  protoOf(JsonLiteral).i34 = function () {
    return this.l34_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.k34_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.l34_1);
      tmp = tmp0_apply.toString();
    } else {
      tmp = this.l34_1;
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
    if (!(this.k34_1 === other.k34_1))
      return false;
    if (!(this.l34_1 === other.l34_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.k34_1 | 0;
    result = imul(31, result) + getStringHashCode(this.l34_1) | 0;
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
    this.m34_1 = content;
  }
  protoOf(JsonArray).f = function () {
    return this.m34_1.f();
  };
  protoOf(JsonArray).n34 = function (element) {
    return this.m34_1.m(element);
  };
  protoOf(JsonArray).m = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.n34(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o34 = function (elements) {
    return this.m34_1.z(elements);
  };
  protoOf(JsonArray).z = function (elements) {
    return this.o34(elements);
  };
  protoOf(JsonArray).l = function (index) {
    return this.m34_1.l(index);
  };
  protoOf(JsonArray).p34 = function (element) {
    return this.m34_1.n(element);
  };
  protoOf(JsonArray).n = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.p34(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).k = function () {
    return this.m34_1.k();
  };
  protoOf(JsonArray).c = function () {
    return this.m34_1.c();
  };
  protoOf(JsonArray).p1 = function (index) {
    return this.m34_1.p1(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.m34_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.m34_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.m34_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.i34());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.i34());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.i34());
  }
  function get_float(_this__u8e3s4) {
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.i34();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.i34());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.i34();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.i34());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.i34());
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
    $this$buildSerialDescriptor.i2l('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.i2l('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.i2l('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.i2l('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.i2l('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().q34_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().r34_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().s34_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().t34_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().u34_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.v34_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).x2k = function () {
    return this.v34_1;
  };
  protoOf(JsonElementSerializer).w34 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.j2p(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.j2p(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.j2p(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).y2k = function (encoder, value) {
    return this.w34(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).z2k = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.c34();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.x34_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).x2k();
    this.y34_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).b2m = function () {
    return this.x34_1.b2m();
  };
  protoOf(JsonObjectDescriptor).c2m = function () {
    return this.x34_1.c2m();
  };
  protoOf(JsonObjectDescriptor).d2m = function () {
    return this.x34_1.d2m();
  };
  protoOf(JsonObjectDescriptor).w2l = function () {
    return this.x34_1.w2l();
  };
  protoOf(JsonObjectDescriptor).e2m = function () {
    return this.x34_1.e2m();
  };
  protoOf(JsonObjectDescriptor).f2m = function (index) {
    return this.x34_1.f2m(index);
  };
  protoOf(JsonObjectDescriptor).g2m = function (index) {
    return this.x34_1.g2m(index);
  };
  protoOf(JsonObjectDescriptor).h2m = function (name) {
    return this.x34_1.h2m(name);
  };
  protoOf(JsonObjectDescriptor).i2m = function (index) {
    return this.x34_1.i2m(index);
  };
  protoOf(JsonObjectDescriptor).j2m = function (index) {
    return this.x34_1.j2m(index);
  };
  protoOf(JsonObjectDescriptor).a2m = function () {
    return this.y34_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.t34_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).x2k = function () {
    return this.t34_1;
  };
  protoOf(JsonObjectSerializer).z34 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).y2k(encoder, value);
  };
  protoOf(JsonObjectSerializer).y2k = function (encoder, value) {
    return this.z34(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).z2k = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).z2k(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.a35_1 = ListSerializer(JsonElementSerializer_getInstance()).x2k();
    this.b35_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).b2m = function () {
    return this.a35_1.b2m();
  };
  protoOf(JsonArrayDescriptor).c2m = function () {
    return this.a35_1.c2m();
  };
  protoOf(JsonArrayDescriptor).d2m = function () {
    return this.a35_1.d2m();
  };
  protoOf(JsonArrayDescriptor).w2l = function () {
    return this.a35_1.w2l();
  };
  protoOf(JsonArrayDescriptor).e2m = function () {
    return this.a35_1.e2m();
  };
  protoOf(JsonArrayDescriptor).f2m = function (index) {
    return this.a35_1.f2m(index);
  };
  protoOf(JsonArrayDescriptor).g2m = function (index) {
    return this.a35_1.g2m(index);
  };
  protoOf(JsonArrayDescriptor).h2m = function (name) {
    return this.a35_1.h2m(name);
  };
  protoOf(JsonArrayDescriptor).i2m = function (index) {
    return this.a35_1.i2m(index);
  };
  protoOf(JsonArrayDescriptor).j2m = function (index) {
    return this.a35_1.j2m(index);
  };
  protoOf(JsonArrayDescriptor).a2m = function () {
    return this.b35_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.u34_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).x2k = function () {
    return this.u34_1;
  };
  protoOf(JsonArraySerializer).c35 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).y2k(encoder, value);
  };
  protoOf(JsonArraySerializer).y2k = function (encoder, value) {
    return this.c35(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).z2k = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).z2k(decoder));
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
    this.q34_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).x2k = function () {
    return this.q34_1;
  };
  protoOf(JsonPrimitiveSerializer).d35 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.j2p(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.j2p(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).y2k = function (encoder, value) {
    return this.d35(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).z2k = function (decoder) {
    var result = asJsonDecoder(decoder).c34();
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
    this.r34_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).x2k = function () {
    return this.r34_1;
  };
  protoOf(JsonNullSerializer).e35 = function (encoder, value) {
    verify(encoder);
    encoder.n2o();
  };
  protoOf(JsonNullSerializer).y2k = function (encoder, value) {
    return this.e35(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).z2k = function (decoder) {
    verify_0(decoder);
    if (decoder.f2n()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.g2n();
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
    this.s34_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).x2k = function () {
    return this.s34_1;
  };
  protoOf(JsonLiteralSerializer).f35 = function (encoder, value) {
    verify(encoder);
    if (value.k34_1) {
      return encoder.w2o(value.l34_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.s2o(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.l34_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.x2o(serializer_0(Companion_getInstance()).x2k());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.s2o(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.u2o(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.o2o(tmp3_safe_receiver);
    }
    encoder.w2o(value.l34_1);
  };
  protoOf(JsonLiteralSerializer).y2k = function (encoder, value) {
    return this.f35(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).z2k = function (decoder) {
    var result = asJsonDecoder(decoder).c34();
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
    return $this.g35_1.u1();
  }
  function defer$1($deferred) {
    this.g35_1 = lazy_0($deferred);
  }
  protoOf(defer$1).a2m = function () {
    return _get_original__l7ku1m(this).a2m();
  };
  protoOf(defer$1).e2m = function () {
    return _get_original__l7ku1m(this).e2m();
  };
  protoOf(defer$1).c2m = function () {
    return _get_original__l7ku1m(this).c2m();
  };
  protoOf(defer$1).i2m = function (index) {
    return _get_original__l7ku1m(this).i2m(index);
  };
  protoOf(defer$1).h2m = function (name) {
    return _get_original__l7ku1m(this).h2m(name);
  };
  protoOf(defer$1).f2m = function (index) {
    return _get_original__l7ku1m(this).f2m(index);
  };
  protoOf(defer$1).g2m = function (index) {
    return _get_original__l7ku1m(this).g2m(index);
  };
  protoOf(defer$1).j2m = function (index) {
    return _get_original__l7ku1m(this).j2m(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.h35_1 = writer;
    this.i35_1 = true;
  }
  protoOf(Composer).j35 = function () {
    this.i35_1 = true;
  };
  protoOf(Composer).k35 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).l35 = function () {
    this.i35_1 = false;
  };
  protoOf(Composer).m35 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).n35 = function (v) {
    return this.h35_1.o35(v);
  };
  protoOf(Composer).p35 = function (v) {
    return this.h35_1.q35(v);
  };
  protoOf(Composer).r35 = function (v) {
    return this.h35_1.q35(v.toString());
  };
  protoOf(Composer).s35 = function (v) {
    return this.h35_1.q35(v.toString());
  };
  protoOf(Composer).t35 = function (v) {
    return this.h35_1.u35(toLong_0(v));
  };
  protoOf(Composer).v35 = function (v) {
    return this.h35_1.u35(toLong_0(v));
  };
  protoOf(Composer).w35 = function (v) {
    return this.h35_1.u35(toLong_0(v));
  };
  protoOf(Composer).x35 = function (v) {
    return this.h35_1.u35(v);
  };
  protoOf(Composer).y35 = function (v) {
    return this.h35_1.q35(v.toString());
  };
  protoOf(Composer).z35 = function (value) {
    return this.h35_1.a36(value);
  };
  function Composer_0(sb, json) {
    return json.w32_1.t33_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.d36_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).w35 = function (v) {
    if (this.d36_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.z35(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.p35(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).x35 = function (v) {
    if (this.d36_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.z35(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.p35(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).t35 = function (v) {
    if (this.d36_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.z35(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.p35(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).v35 = function (v) {
    if (this.d36_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.z35(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.p35(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.g36_1 = json;
    this.h36_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).j35 = function () {
    this.i35_1 = true;
    this.h36_1 = this.h36_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).k35 = function () {
    this.h36_1 = this.h36_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l35 = function () {
    this.i35_1 = false;
    this.p35('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.h36_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.p35(this.g36_1.w32_1.v33_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).m35 = function () {
    this.n35(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.j36_1 = !descriptor.j2m(index) ? descriptor.g2m(index).w2l() : false;
    return $this.j36_1;
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
    tmp.i36_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.j36_1 = false;
  }
  protoOf(JsonElementMarker).j2t = function (index) {
    this.i36_1.j2t(index);
  };
  protoOf(JsonElementMarker).k2t = function () {
    return this.i36_1.k2t();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.k36('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.a2m() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.e2m() + "'.\n") + get_allowStructuredMapKeysHint());
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
    var index = _this__u8e3s4.h2m(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.w32_1.a34_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.m36(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.f2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.c2m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.f2m(i);
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
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n36_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.d()) {
            var element_0 = tmp0_iterator_0.e();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.c2m());
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
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).b2(name)) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.i2m(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.i2m(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.j3(name, index);
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
    var newSize = imul($this.q36_1, 2);
    $this.o36_1 = copyOf($this.o36_1, newSize);
    $this.p36_1 = copyOf_0($this.p36_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o36_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.p36_1 = tmp_2;
    this.q36_1 = -1;
  }
  protoOf(JsonPath).r36 = function (sd) {
    this.q36_1 = this.q36_1 + 1 | 0;
    var depth = this.q36_1;
    if (depth === this.o36_1.length) {
      resize(this);
    }
    this.o36_1[depth] = sd;
  };
  protoOf(JsonPath).s36 = function (index) {
    this.p36_1[this.q36_1] = index;
  };
  protoOf(JsonPath).t36 = function (key) {
    var tmp;
    if (!(this.p36_1[this.q36_1] === -2)) {
      this.q36_1 = this.q36_1 + 1 | 0;
      tmp = this.q36_1 === this.o36_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.o36_1[this.q36_1] = key;
    this.p36_1[this.q36_1] = -2;
  };
  protoOf(JsonPath).u36 = function () {
    if (this.p36_1[this.q36_1] === -2) {
      this.o36_1[this.q36_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).v36 = function () {
    var depth = this.q36_1;
    if (this.p36_1[depth] === -2) {
      this.p36_1[depth] = -1;
      this.q36_1 = this.q36_1 - 1 | 0;
    }
    if (!(this.q36_1 === -1)) {
      this.q36_1 = this.q36_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).w36 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.n6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.q36_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.o36_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.e2m(), LIST_getInstance())) {
            if (!(this.p36_1[index] === -1)) {
              tmp0_apply.n6('[');
              tmp0_apply.m6(this.p36_1[index]);
              tmp0_apply.n6(']');
            }
          } else {
            var idx = this.p36_1[index];
            if (idx >= 0) {
              tmp0_apply.n6('.');
              tmp0_apply.n6(element.i2m(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.n6('[');
            tmp0_apply.n6("'");
            tmp0_apply.m6(element);
            tmp0_apply.n6("'");
            tmp0_apply.n6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    return tmp0_apply.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.w36();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.j2p(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.f37_1.i37(get_TC_BEGIN_OBJ());
    if ($this.f37_1.j37() === get_TC_COMMA()) {
      $this.f37_1.k36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.f37_1.k37()) {
      var key = $this.g37_1 ? $this.f37_1.m37() : $this.f37_1.l37();
      $this.f37_1.i37(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.n37();
      // Inline function 'kotlin.collections.set' call
      result.j3(key, element);
      lastToken = $this.f37_1.o37();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.f37_1.k36('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.f37_1.i37(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.f37_1.k36('Unexpected trailing comma');
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
    var lastToken = $this.f37_1.o37();
    if ($this.f37_1.j37() === get_TC_COMMA()) {
      $this.f37_1.k36('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.f37_1.k37()) {
      var element = $this.n37();
      result.a(element);
      lastToken = $this.f37_1.o37();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.f37_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.k33_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.k36(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.f37_1.i37(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.f37_1.k36('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.g37_1 ? true : !isString) {
      tmp = $this.f37_1.m37();
    } else {
      tmp = $this.f37_1.l37();
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
    this.k38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).p38 = function ($this$$receiver, it, $completion) {
    var tmp = this.q38($this$$receiver, it, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).b7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.p38(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.n38_1 = this.k38_1.f37_1.j37();
            if (this.n38_1 === get_TC_STRING()) {
              this.o38_1 = readValue(this.k38_1, true);
              this.sh_1 = 2;
              continue $sm;
            } else {
              if (this.n38_1 === get_TC_OTHER()) {
                this.o38_1 = readValue(this.k38_1, false);
                this.sh_1 = 2;
                continue $sm;
              } else {
                if (this.n38_1 === get_TC_BEGIN_OBJ()) {
                  this.sh_1 = 1;
                  suspendResult = readObject_0(this.l38_1, this.k38_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.n38_1 === get_TC_BEGIN_LIST()) {
                    this.o38_1 = readArray(this.k38_1);
                    this.sh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.k38_1.f37_1.k36("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.o38_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            return this.o38_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q38 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.k38_1, completion);
    i.l38_1 = $this$$receiver;
    i.m38_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.p38($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x37_1 = _this__u8e3s4;
    this.y37_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.z37_1 = this.x37_1.f37_1.i37(get_TC_BEGIN_OBJ());
            if (this.x37_1.f37_1.j37() === get_TC_COMMA()) {
              this.x37_1.f37_1.k36('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.a38_1 = LinkedHashMap_init_$Create$();
            this.sh_1 = 1;
            continue $sm;
          case 1:
            if (!this.x37_1.f37_1.k37()) {
              this.sh_1 = 4;
              continue $sm;
            }

            this.b38_1 = this.x37_1.g37_1 ? this.x37_1.f37_1.m37() : this.x37_1.f37_1.l37();
            this.x37_1.f37_1.i37(get_TC_COLON());
            this.sh_1 = 2;
            suspendResult = this.y37_1.t6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.a38_1.j3(this.b38_1, element);
            this.z37_1 = this.x37_1.f37_1.o37();
            var tmp0_subject = this.z37_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.sh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.sh_1 = 4;
                continue $sm;
              } else {
                this.x37_1.f37_1.k36('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.sh_1 = 1;
            continue $sm;
          case 4:
            if (this.z37_1 === get_TC_BEGIN_OBJ()) {
              this.x37_1.f37_1.i37(get_TC_END_OBJ());
            } else if (this.z37_1 === get_TC_COMMA()) {
              this.x37_1.f37_1.k36('Unexpected trailing comma');
            }

            return new JsonObject(this.a38_1);
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
    this.f37_1 = lexer;
    this.g37_1 = configuration.r33_1;
    this.h37_1 = 0;
  }
  protoOf(JsonTreeReader).n37 = function () {
    var token = this.f37_1.j37();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.h37_1 = this.h37_1 + 1 | 0;
      if (this.h37_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.h37_1 = this.h37_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.f37_1.k36('Cannot begin reading element, unexpected token: ' + token);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.b2m().c();
    while (tmp0_iterator.d()) {
      var annotation = tmp0_iterator.e();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.r38_1;
    }
    return json.w32_1.y33_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.b34().w32_1.x33_1;
    }
    if (tmp) {
      return deserializer.z2k(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.x2k(), _this__u8e3s4.b34());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.c34();
    var tmp1_cast = deserializer.x2k();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.a2m() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    var jsonTree = tmp0_cast;
    var tmp0_safe_receiver = jsonTree.f34(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i34();
    var tmp2_elvis_lhs = deserializer.n2l(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.b34();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.x2k()).m(classDiscriminator)) {
      var baseName = serializer.x2k().a2m();
      var actualName = actualSerializer.x2k().a2m();
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
    this.l36_1 = createMapForCache(1);
  }
  protoOf(DescriptorSchemaCache).s38 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.l36_1;
    var value_0 = tmp0_getOrPut.f2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(1);
      tmp0_getOrPut.j3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp1_set = tmp;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.j3(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).m36 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.t38(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.s38(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).t38 = function (descriptor, key) {
    var tmp0_safe_receiver = this.l36_1.f2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.f2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.u38_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.u38_1 === unknownKey) {
      _this__u8e3s4.u38_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.j2o(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.e33_1.j37() === get_TC_COMMA()) {
      $this.e33_1.k36('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.g33_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.g33_1 === -1)) {
        hasComma = $this.e33_1.w38();
      }
    } else {
      $this.e33_1.v38(get_COLON());
    }
    var tmp;
    if ($this.e33_1.k37()) {
      if (decodingKey) {
        if ($this.g33_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.e33_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.k33_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.k36(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.e33_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.k33_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.k36(tmp$ret$1, tmp5_require);
          }
        }
      }
      $this.g33_1 = $this.g33_1 + 1 | 0;
      tmp = $this.g33_1;
    } else {
      if (hasComma) {
        $this.e33_1.k36("Expected '}', but had ',' instead");
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
      var tmp0_tryCoerceValue = $this.c33_1;
      var tmp1_tryCoerceValue = descriptor.g2m(index);
      var tmp;
      if (!tmp1_tryCoerceValue.w2l()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = !$this.e33_1.x38();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.e2m(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.e33_1.y38($this.i33_1.r33_1);
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
          $this.e33_1.l37();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.e33_1.w38();
    while ($this.e33_1.k37()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.e33_1.v38(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.c33_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.i33_1.w33_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.e33_1.w38();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.j33_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.j2t(index);
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
      $this.e33_1.k36('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.j33_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k2t();
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
    if ($this.i33_1.q33_1 ? true : trySkip($this.h33_1, $this, key)) {
      $this.e33_1.a39($this.i33_1.r33_1);
    } else {
      $this.e33_1.z38(key);
    }
    return $this.e33_1.w38();
  }
  function decodeListIndex($this) {
    var hasComma = $this.e33_1.w38();
    var tmp;
    if ($this.e33_1.k37()) {
      if (!($this.g33_1 === -1) ? !hasComma : false) {
        $this.e33_1.k36('Expected end of the array or comma');
      }
      $this.g33_1 = $this.g33_1 + 1 | 0;
      tmp = $this.g33_1;
    } else {
      if (hasComma) {
        $this.e33_1.k36('Unexpected trailing comma');
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.i33_1.r33_1) {
      tmp = $this.e33_1.c39();
    } else {
      tmp = $this.e33_1.b39();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.c33_1 = json;
    this.d33_1 = mode;
    this.e33_1 = lexer;
    this.f33_1 = this.c33_1.h2o();
    this.g33_1 = -1;
    this.h33_1 = discriminatorHolder;
    this.i33_1 = this.c33_1.w32_1;
    this.j33_1 = this.i33_1.u33_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).b34 = function () {
    return this.c33_1;
  };
  protoOf(StreamingJsonDecoder).h2o = function () {
    return this.f33_1;
  };
  protoOf(StreamingJsonDecoder).c34 = function () {
    return (new JsonTreeReader(this.c33_1.w32_1, this.e33_1)).n37();
  };
  protoOf(StreamingJsonDecoder).s2n = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c33_1.w32_1.x33_1;
      }
      if (tmp) {
        return deserializer.z2k(this);
      }
      var discriminator = classDiscriminator(deserializer.x2k(), this.c33_1);
      var type = this.e33_1.d39(discriminator, this.i33_1.r33_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.n2l(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.h33_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.z2k(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        throw new MissingFieldException(e.p2l_1, plus(e.message, ' at path: ') + this.e33_1.l33_1.w36(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).t2n = function (descriptor) {
    var newMode = switchMode(this.c33_1, descriptor);
    this.e33_1.l33_1.r36(descriptor);
    this.e33_1.v38(newMode.g39_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.y4_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.c33_1, newMode, this.e33_1, descriptor, this.h33_1);
        break;
      default:
        var tmp_0;
        if (this.d33_1.equals(newMode) ? this.c33_1.w32_1.u33_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.c33_1, newMode, this.e33_1, descriptor, this.h33_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).u2n = function (descriptor) {
    if (this.c33_1.w32_1.q33_1 ? descriptor.c2m() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.e33_1.v38(this.d33_1.h39_1);
    this.e33_1.l33_1.v36();
  };
  protoOf(StreamingJsonDecoder).f2n = function () {
    var tmp;
    var tmp0_safe_receiver = this.j33_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j36_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.e33_1.x38();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).g2n = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).f2o = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.d33_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.e33_1.l33_1.u36();
    }
    var value = protoOf(AbstractDecoder).f2o.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.e33_1.l33_1.t36(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).j2o = function (descriptor) {
    var index;
    switch (this.d33_1.y4_1) {
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
    if (!this.d33_1.equals(WriteMode_MAP_getInstance())) {
      this.e33_1.l33_1.s36(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).h2n = function () {
    var tmp;
    if (this.i33_1.r33_1) {
      tmp = this.e33_1.j39();
    } else {
      tmp = this.e33_1.i39();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).i2n = function () {
    var value = this.e33_1.k39();
    if (!value.equals(toLong_0(value.jh()))) {
      this.e33_1.k36("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.jh();
  };
  protoOf(StreamingJsonDecoder).j2n = function () {
    var value = this.e33_1.k39();
    if (!value.equals(toLong_0(value.kh()))) {
      this.e33_1.k36("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.kh();
  };
  protoOf(StreamingJsonDecoder).k2n = function () {
    var value = this.e33_1.k39();
    if (!value.equals(toLong_0(value.e6()))) {
      this.e33_1.k36("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.e6();
  };
  protoOf(StreamingJsonDecoder).l2n = function () {
    return this.e33_1.k39();
  };
  protoOf(StreamingJsonDecoder).m2n = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.e33_1;
      var input = tmp0_parseString.m37();
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
          tmp0_parseString.k36("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.c33_1.w32_1.z33_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e33_1, result);
  };
  protoOf(StreamingJsonDecoder).n2n = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.e33_1;
      var input = tmp0_parseString.m37();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.k36("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.c33_1.w32_1.z33_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e33_1, result);
  };
  protoOf(StreamingJsonDecoder).o2n = function () {
    var string = this.e33_1.m37();
    if (!(string.length === 1)) {
      this.e33_1.k36("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).p2n = function () {
    var tmp;
    if (this.i33_1.r33_1) {
      tmp = this.e33_1.c39();
    } else {
      tmp = this.e33_1.l37();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q2n = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.e33_1, this.c33_1) : protoOf(AbstractDecoder).q2n.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.l39_1 = lexer;
    this.m39_1 = json.h2o();
  }
  protoOf(JsonDecoderForUnsignedTypes).h2o = function () {
    return this.m39_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).j2o = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).k2n = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.l39_1;
      var input = tmp0_parseString.m37();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.k36("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).l2n = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.l39_1;
      var input = tmp0_parseString.m37();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.k36("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).i2n = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.l39_1;
      var input = tmp0_parseString.m37();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.k36("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).j2n = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.l39_1;
      var input = tmp0_parseString.m37();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(tmp0_toShort);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.k36("Failed to parse type 'UShort' for input '" + input + "'");
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
    $this.x36_1.l35();
    $this.w2o(ensureNotNull($this.e37_1));
    $this.x36_1.n35(get_COLON());
    $this.x36_1.m35();
    $this.w2o(descriptor.a2m());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.x36_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.x36_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.x36_1.h35_1, $this.d37_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.x36_1 = composer;
    this.y36_1 = json;
    this.z36_1 = mode;
    this.a37_1 = modeReuseCache;
    this.b37_1 = this.y36_1.h2o();
    this.c37_1 = this.y36_1.w32_1;
    this.d37_1 = false;
    this.e37_1 = null;
    var i = this.z36_1.y4_1;
    if (!(this.a37_1 == null)) {
      if (!(this.a37_1[i] === null) ? true : !(this.a37_1[i] === this)) {
        this.a37_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).b34 = function () {
    return this.y36_1;
  };
  protoOf(StreamingJsonEncoder).h2o = function () {
    return this.b37_1;
  };
  protoOf(StreamingJsonEncoder).m2p = function (descriptor, index) {
    return this.c37_1.p33_1;
  };
  protoOf(StreamingJsonEncoder).j2p = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.b34().w32_1.x33_1;
      }
      if (tmp) {
        serializer.y2k(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.x2k(), this.b34());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.x2k().e2m());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.e37_1 = baseClassDiscriminator;
      actualSerializer.y2k(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).t2n = function (descriptor) {
    var newMode = switchMode(this.y36_1, descriptor);
    if (!(newMode.g39_1 === get_INVALID())) {
      this.x36_1.n35(newMode.g39_1);
      this.x36_1.j35();
    }
    if (!(this.e37_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.e37_1 = null;
    }
    if (this.z36_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.a37_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.y4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.x36_1, this.y36_1, newMode, this.a37_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).u2n = function (descriptor) {
    if (!(this.z36_1.h39_1 === get_INVALID())) {
      this.x36_1.k35();
      this.x36_1.l35();
      this.x36_1.n35(this.z36_1.h39_1);
    }
  };
  protoOf(StreamingJsonEncoder).l2o = function (descriptor, index) {
    switch (this.z36_1.y4_1) {
      case 1:
        if (!this.x36_1.i35_1) {
          this.x36_1.n35(get_COMMA());
        }

        this.x36_1.l35();
        break;
      case 2:
        if (!this.x36_1.i35_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.x36_1.n35(get_COMMA());
            this.x36_1.l35();
            tmp_0 = true;
          } else {
            this.x36_1.n35(get_COLON());
            this.x36_1.m35();
            tmp_0 = false;
          }
          tmp.d37_1 = tmp_0;
        } else {
          this.d37_1 = true;
          this.x36_1.l35();
        }

        break;
      case 3:
        if (index === 0)
          this.d37_1 = true;
        if (index === 1) {
          this.x36_1.n35(get_COMMA());
          this.x36_1.m35();
          this.d37_1 = false;
        }

        break;
      default:
        if (!this.x36_1.i35_1) {
          this.x36_1.n35(get_COMMA());
        }

        this.x36_1.l35();
        this.w2o(descriptor.i2m(index));
        this.x36_1.n35(get_COLON());
        this.x36_1.m35();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).x2o = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.y36_1, this.z36_1, null) : protoOf(AbstractEncoder).x2o.call(this, descriptor);
  };
  protoOf(StreamingJsonEncoder).n2o = function () {
    this.x36_1.p35(get_NULL());
  };
  protoOf(StreamingJsonEncoder).o2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.y35(value);
    }
  };
  protoOf(StreamingJsonEncoder).p2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.t35(value);
    }
  };
  protoOf(StreamingJsonEncoder).q2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.v35(value);
    }
  };
  protoOf(StreamingJsonEncoder).r2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.w35(value);
    }
  };
  protoOf(StreamingJsonEncoder).s2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.x35(value);
    }
  };
  protoOf(StreamingJsonEncoder).t2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.r35(value);
    }
    if (!this.c37_1.z33_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.x36_1.h35_1));
    }
  };
  protoOf(StreamingJsonEncoder).u2o = function (value) {
    if (this.d37_1) {
      this.w2o(value.toString());
    } else {
      this.x36_1.s35(value);
    }
    if (!this.c37_1.z33_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.x36_1.h35_1));
    }
  };
  protoOf(StreamingJsonEncoder).v2o = function (value) {
    this.w2o(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).w2o = function (value) {
    return this.x36_1.z35(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.d2m() ? get_unsignedNumberDescriptors().m(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).x2k(), serializer_0(Companion_getInstance()).x2k(), serializer_2(Companion_getInstance_2()).x2k(), serializer_3(Companion_getInstance_3()).x2k()]);
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
    _this__u8e3s4.m5(get_STRING());
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
          _this__u8e3s4.n6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.ze(value, lastPos, value.length);
    } else {
      _this__u8e3s4.n6(value);
    }
    _this__u8e3s4.m5(get_STRING());
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
    var tmp0_safe_receiver = $this.o30();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = $this.s39(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.u1() : tmp1_elvis_lhs;
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
    this.p39_1 = json;
    this.q39_1 = value;
    this.r39_1 = this.b34().w32_1;
  }
  protoOf(AbstractJsonTreeDecoder).b34 = function () {
    return this.p39_1;
  };
  protoOf(AbstractJsonTreeDecoder).u1 = function () {
    return this.q39_1;
  };
  protoOf(AbstractJsonTreeDecoder).h2o = function () {
    return this.b34().h2o();
  };
  protoOf(AbstractJsonTreeDecoder).c34 = function () {
    return currentObject(this);
  };
  protoOf(AbstractJsonTreeDecoder).s2n = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).p30 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).t2n = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.e2m();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.b34();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.a2m() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject_0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.b34();
        var keyDescriptor = carrierDescriptor(descriptor.g2m(0), tmp0_selectMapMode.h2o());
        var keyKind = keyDescriptor.e2m();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.b34();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.a2m() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject_0);
        } else {
          if (tmp0_selectMapMode.w32_1.s33_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.b34();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.a2m() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject_0);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.b34();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.a2m() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject_0);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).u2n = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).f2n = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).t39 = function (tag) {
    var currentElement = this.s39(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).u39 = function (tag) {
    return !(this.s39(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r30 = function (tag) {
    return this.u39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v39 = function (tag) {
    var value = this.t39(tag);
    if (!this.b34().w32_1.r33_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.k34_1)
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
  protoOf(AbstractJsonTreeDecoder).s30 = function (tag) {
    return this.v39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w39 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
  protoOf(AbstractJsonTreeDecoder).t30 = function (tag) {
    return this.w39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x39 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
  protoOf(AbstractJsonTreeDecoder).u30 = function (tag) {
    return this.x39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y39 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
  protoOf(AbstractJsonTreeDecoder).v30 = function (tag) {
    return this.y39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z39 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
  protoOf(AbstractJsonTreeDecoder).w30 = function (tag) {
    return this.z39((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a3a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
    var specialFp = this.b34().w32_1.z33_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).x30 = function (tag) {
    return this.a3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b3a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
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
    var specialFp = this.b34().w32_1.z33_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).y30 = function (tag) {
    return this.b3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c3a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.t39(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(tmp0_primitive.i34());
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
  protoOf(AbstractJsonTreeDecoder).z30 = function (tag) {
    return this.c3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3a = function (tag) {
    var value = this.t39(tag);
    if (!this.b34().w32_1.r33_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.k34_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.i34();
  };
  protoOf(AbstractJsonTreeDecoder).a31 = function (tag) {
    return this.d3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e3a = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.t39(tag).i34()), this.b34()) : protoOf(NamedValueDecoder).b31.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).b31 = function (tag, inlineDescriptor) {
    return this.e3a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.b34();
      var tmp1_tryCoerceValue = descriptor.g2m(index);
      var tmp;
      if (!tmp1_tryCoerceValue.w2l()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.s39(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.e2m(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.s39(tag);
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
    $this.o3a_1 = (!$this.b34().w32_1.u33_1 ? !descriptor.j2m(index) : false) ? descriptor.g2m(index).w2l() : false;
    return $this.o3a_1;
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
    this.k3a_1 = value;
    this.l3a_1 = polyDiscriminator;
    this.m3a_1 = polyDescriptor;
    this.n3a_1 = 0;
    this.o3a_1 = false;
  }
  protoOf(JsonTreeDecoder).u1 = function () {
    return this.k3a_1;
  };
  protoOf(JsonTreeDecoder).j2o = function (descriptor) {
    while (this.n3a_1 < descriptor.c2m()) {
      var tmp1 = this.n3a_1;
      this.n3a_1 = tmp1 + 1 | 0;
      var name = this.j30(descriptor, tmp1);
      var index = this.n3a_1 - 1 | 0;
      this.o3a_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.u1();
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).b2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.r39_1.w33_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
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
  protoOf(JsonTreeDecoder).f2n = function () {
    return !this.o3a_1 ? protoOf(AbstractJsonTreeDecoder).f2n.call(this) : false;
  };
  protoOf(JsonTreeDecoder).k30 = function (desc, index) {
    var mainName = desc.i2m(index);
    if (!this.r39_1.a34_1)
      return mainName;
    if (this.u1().g2().m(mainName))
      return mainName;
    var tmp = get_schemaCache(this.b34());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.m36(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.u1().g2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (alternativeNamesMap.f2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var nameInObject = tmp$ret$1;
    return nameInObject == null ? mainName : nameInObject;
  };
  protoOf(JsonTreeDecoder).s39 = function (tag) {
    return getValue(this.u1(), tag);
  };
  protoOf(JsonTreeDecoder).t2n = function (descriptor) {
    if (descriptor === this.m3a_1)
      return this;
    return protoOf(AbstractJsonTreeDecoder).t2n.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).u2n = function (descriptor) {
    var tmp;
    if (this.r39_1.q33_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.e2m();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.r39_1.a34_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.b34()).t38(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2();
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.u1().g2().c();
    while (tmp1_iterator.d()) {
      var key = tmp1_iterator.e();
      if (!names.m(key) ? !(key === this.l3a_1) : false) {
        throw UnknownKeyException(key, this.u1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.u3a_1 = value;
    this.v3a_1 = this.u3a_1.f();
    this.w3a_1 = -1;
  }
  protoOf(JsonTreeListDecoder).u1 = function () {
    return this.u3a_1;
  };
  protoOf(JsonTreeListDecoder).k30 = function (desc, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).s39 = function (tag) {
    return this.u3a_1.l(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).j2o = function (descriptor) {
    while (this.w3a_1 < (this.v3a_1 - 1 | 0)) {
      this.w3a_1 = this.w3a_1 + 1 | 0;
      return this.w3a_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.h3b_1 = value;
    this.i3b_1 = toList(this.h3b_1.g2());
    this.j3b_1 = imul(this.i3b_1.f(), 2);
    this.k3b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).u1 = function () {
    return this.h3b_1;
  };
  protoOf(JsonTreeMapDecoder).k30 = function (desc, index) {
    var i = index / 2 | 0;
    return this.i3b_1.l(i);
  };
  protoOf(JsonTreeMapDecoder).j2o = function (descriptor) {
    while (this.k3b_1 < (this.j3b_1 - 1 | 0)) {
      this.k3b_1 = this.k3b_1 + 1 | 0;
      return this.k3b_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeMapDecoder).s39 = function (tag) {
    return (this.k3b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h3b_1, tag);
  };
  protoOf(JsonTreeMapDecoder).u2n = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.x2k())).s2n(deserializer);
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
    this.g39_1 = begin;
    this.h39_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.e2m();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.g2m(0), _this__u8e3s4.h2o());
          var keyKind = keyDescriptor.e2m();
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
            if (_this__u8e3s4.w32_1.s33_1) {
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
    if (equals(_this__u8e3s4.e2m(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.d2m()) {
      tmp = carrierDescriptor(_this__u8e3s4.g2m(0), module_0);
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
    $this.l3b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.l3b(lastPosition, currentPosition);
    var result = $this.n33_1.toString();
    $this.n33_1.af(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.m33_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.m33_1 = null;
    return tmp0_also;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.m3b(), $this.k33_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n3b(currentPosition);
    if (currentPosition === -1) {
      $this.k36('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.m3b();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.m3b(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.k36("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.n33_1.m5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.k33_1 = startPos;
      $this.o3b();
      if (($this.k33_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.k36('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.k33_1);
    }
    $this.n33_1.m5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.k36("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.n3b(start);
    if (current >= charSequenceLength($this.m3b()) ? true : current === -1) {
      $this.k36('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.m3b();
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
        $this.k36("Expected valid boolean literal prefix, but had '" + $this.m37() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.m3b()) - current | 0) < literalSuffix.length) {
      $this.k36('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.m3b(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.k36("Expected valid boolean literal prefix, but had '" + $this.m37() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.k33_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.k33_1 = 0;
    this.l33_1 = new JsonPath();
    this.m33_1 = null;
    this.n33_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o3b = function () {
  };
  protoOf(AbstractJsonLexer).p3b = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).o33 = function () {
    var nextToken = this.o37();
    if (!(nextToken === 10)) {
      this.k36('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.m3b(), this.k33_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).i37 = function (expected) {
    var token = this.o37();
    if (!(token === expected)) {
      this.q3b(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).v38 = function (expected) {
    this.o3b();
    var source = this.m3b();
    var cpos = this.k33_1;
    $l$loop_0: while (true) {
      cpos = this.n3b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.k33_1 = cpos;
      if (c === expected)
        return Unit_getInstance();
      this.r3b(expected);
    }
    this.k33_1 = cpos;
    this.r3b(expected);
  };
  protoOf(AbstractJsonLexer).r3b = function (expected) {
    this.k33_1 = this.k33_1 - 1 | 0;
    if ((this.k33_1 >= 0 ? expected === _Char___init__impl__6a9atx(34) : false) ? this.m37() === 'null' : false) {
      this.s3b("Expected string literal but 'null' literal was found", this.k33_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.q3b(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).q3b = function (expectedToken) {
    var expected = expectedToken === 1 ? "quotation mark '\"'" : expectedToken === 4 ? "comma ','" : expectedToken === 5 ? "colon ':'" : expectedToken === 6 ? "start of the object '{'" : expectedToken === 7 ? "end of the object '}'" : expectedToken === 8 ? "start of the array '['" : expectedToken === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.k33_1 === charSequenceLength(this.m3b()) ? true : this.k33_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.m3b(), this.k33_1 - 1 | 0));
    this.k36('Expected ' + expected + ", but had '" + s + "' instead", this.k33_1 - 1 | 0);
  };
  protoOf(AbstractJsonLexer).j37 = function () {
    var source = this.m3b();
    var cpos = this.k33_1;
    $l$loop_0: while (true) {
      cpos = this.n3b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.k33_1 = cpos;
      return charToTokenClass(ch);
    }
    this.k33_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).x38 = function () {
    var current = this.t3b();
    current = this.n3b(current);
    var len = charSequenceLength(this.m3b()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.m3b(), current + i | 0)))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.m3b(), current + 4 | 0)) === 0 : false)
      return true;
    this.k33_1 = current + 4 | 0;
    return false;
  };
  protoOf(AbstractJsonLexer).t3b = function () {
    var current = this.k33_1;
    $l$loop_0: while (true) {
      current = this.n3b(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.m3b(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.k33_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).y38 = function (isLenient) {
    var token = this.j37();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.m37();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.l37();
    }
    var string = tmp;
    this.m33_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).u3b = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.m3b();
    return toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).l37 = function () {
    if (!(this.m33_1 == null)) {
      return takePeeked(this);
    }
    return this.b39();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n3b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.k36('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.l3b(lastPosition, currentPosition);
          currentPosition = this.n3b(currentPosition);
          if (currentPosition === -1) {
            this.k36('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.u3b(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.k33_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).c39 = function () {
    var result = this.m37();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.k36("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).m37 = function () {
    if (!(this.m33_1 == null)) {
      return takePeeked(this);
    }
    var current = this.t3b();
    if (current >= charSequenceLength(this.m3b()) ? true : current === -1) {
      this.k36('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.m3b(), current));
    if (token === 1) {
      return this.l37();
    }
    if (!(token === 0)) {
      this.k36('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.m3b(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.m3b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.m3b())) {
        usedAppend = true;
        this.l3b(this.k33_1, current);
        var eof = this.n3b(current);
        if (eof === -1) {
          this.k33_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.u3b(this.k33_1, current);
    } else {
      tmp = decodedString(this, this.k33_1, current);
    }
    var result = tmp;
    this.k33_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).l3b = function (fromIndex, toIndex) {
    this.n33_1.ze(this.m3b(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).a39 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.j37();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.m37();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.j37();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.m37();
        } else {
          this.b39();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.k33_1, 'found ] instead of } at path: ' + this.l33_1, this.m3b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.k33_1, 'found } instead of ] at path: ' + this.l33_1, this.m3b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.k36('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.o37();
      if (tokenStack.f() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.m3b() + "', currentPosition=" + this.k33_1 + ')';
  };
  protoOf(AbstractJsonLexer).z38 = function (key) {
    var processed = this.u3b(0, this.k33_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.s3b("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).s3b = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.l33_1.w36() + hintMessage, this.m3b());
  };
  protoOf(AbstractJsonLexer).k36 = function (message, position, hint, $super) {
    position = position === VOID ? this.k33_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.s3b(message, position, hint) : $super.s3b.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).k39 = function () {
    var current = this.t3b();
    current = this.n3b(current);
    if (current >= charSequenceLength(this.m3b()) ? true : current === -1) {
      this.k36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m3b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.m3b())) {
        this.k36('EOF');
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
      var ch = charSequenceGet(this.m3b(), current);
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.k36("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.m3b()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.k36("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.p5(new Long(10, 0)).r5(toLong_0(digit));
      if (accumulator.s(new Long(0, 0)) > 0) {
        this.k36('Numeric value overflow');
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.k36('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.k36('EOF');
      }
      if (!(charSequenceGet(this.m3b(), current) === _Char___init__impl__6a9atx(34))) {
        this.k36('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.k33_1 = current;
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else {
      var tmp_1 = accumulator;
      Companion_getInstance_4();
      if (!tmp_1.equals(new Long(0, -2147483648))) {
        tmp_0 = accumulator.n5();
      } else {
        this.k36('Numeric value overflow');
      }
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).i39 = function () {
    return consumeBoolean(this, this.t3b());
  };
  protoOf(AbstractJsonLexer).j39 = function () {
    var current = this.t3b();
    if (current === charSequenceLength(this.m3b())) {
      this.k36('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m3b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.k33_1 === charSequenceLength(this.m3b())) {
        this.k36('EOF');
      }
      if (!(charSequenceGet(this.m3b(), this.k33_1) === _Char___init__impl__6a9atx(34))) {
        this.k36('Expected closing quotation mark');
      }
      this.k33_1 = this.k33_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().w3b_1;
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
    return c < 117 ? CharMappings_getInstance().v3b_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.v3b_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.w3b_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.v3b_1 = charArray(117);
    this.w3b_1 = new Int8Array(126);
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
    this.b3c_1 = source;
  }
  protoOf(StringJsonLexer).m3b = function () {
    return this.b3c_1;
  };
  protoOf(StringJsonLexer).n3b = function (position) {
    return position < this.b3c_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).o37 = function () {
    var source = this.b3c_1;
    $l$loop: while (!(this.k33_1 === -1) ? this.k33_1 < source.length : false) {
      var tmp1 = this.k33_1;
      this.k33_1 = tmp1 + 1 | 0;
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
  protoOf(StringJsonLexer).w38 = function () {
    var current = this.t3b();
    if (current === this.b3c_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.b3c_1, current) === _Char___init__impl__6a9atx(44)) {
      this.k33_1 = this.k33_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).k37 = function () {
    var current = this.k33_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.b3c_1.length) {
      var c = charSequenceGet(this.b3c_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.k33_1 = current;
      return this.p3b(c);
    }
    this.k33_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).t3b = function () {
    var current = this.k33_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.b3c_1.length) {
      var c = charSequenceGet(this.b3c_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.k33_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).v38 = function (expected) {
    if (this.k33_1 === -1) {
      this.r3b(expected);
    }
    var source = this.b3c_1;
    $l$loop: while (this.k33_1 < source.length) {
      var tmp1 = this.k33_1;
      this.k33_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_getInstance();
      this.r3b(expected);
    }
    this.r3b(expected);
  };
  protoOf(StringJsonLexer).b39 = function () {
    this.v38(get_STRING());
    var current = this.k33_1;
    var closingQuote = indexOf(this.b3c_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.q3b(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.b3c_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.b3c_1, this.k33_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.k33_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.b3c_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).d39 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.k33_1;
    try {
      if (!(this.o37() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.b39() : this.c39();
      if (firstKey === keyToMatch) {
        if (!(this.o37() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.l37() : this.c39();
        return result;
      }
      return null;
    }finally {
      this.k33_1 = positionSnapshot;
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.y32_1;
  }
  function JsonToStringWriter() {
    this.b33_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).u35 = function (value) {
    this.b33_1.m6(value);
  };
  protoOf(JsonToStringWriter).o35 = function (char) {
    this.b33_1.m5(char);
  };
  protoOf(JsonToStringWriter).q35 = function (text) {
    this.b33_1.n6(text);
  };
  protoOf(JsonToStringWriter).a36 = function (text) {
    printQuoted(this.b33_1, text);
  };
  protoOf(JsonToStringWriter).co = function () {
    this.b33_1.bf();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.b33_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).w2l = get_isNullable;
  protoOf(defer$1).d2m = get_isInline;
  protoOf(defer$1).b2m = get_annotations;
  protoOf(StreamingJsonDecoder).g2o = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).i2o = decodeSequentially;
  protoOf(StreamingJsonDecoder).k2o = decodeCollectionSize;
  protoOf(JsonDecoderForUnsignedTypes).s2n = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).g2o = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).i2o = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).k2o = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).k2p = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).l2p = beginCollection;
  protoOf(AbstractJsonTreeDecoder).g2o = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).i2o = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).k2o = decodeCollectionSize;
  protoOf(JsonTreeDecoder).g2o = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).i2o = decodeSequentially;
  protoOf(JsonTreeDecoder).k2o = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).g2o = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).i2o = decodeSequentially;
  protoOf(JsonTreeListDecoder).k2o = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).g2o = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).i2o = decodeSequentially;
  protoOf(JsonTreeMapDecoder).k2o = decodeCollectionSize;
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
