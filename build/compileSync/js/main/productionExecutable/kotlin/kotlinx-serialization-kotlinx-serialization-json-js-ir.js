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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.ea;
  var objectMeta = kotlin_kotlin.$_$.da;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var classMeta = kotlin_kotlin.$_$.w8;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z1;
  var equals = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var joinToString = kotlin_kotlin.$_$.l6;
  var Map = kotlin_kotlin.$_$.z4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var List = kotlin_kotlin.$_$.x4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.be;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var toString = kotlin_kotlin.$_$.ja;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var toLongOrNull = kotlin_kotlin.$_$.hc;
  var toDoubleOrNull = kotlin_kotlin.$_$.dc;
  var toInt = kotlin_kotlin.$_$.gc;
  var toLong = kotlin_kotlin.$_$.ic;
  var toDouble = kotlin_kotlin.$_$.ec;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.z3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var toULongOrNull = kotlin_kotlin.$_$.lc;
  var Companion_getInstance = kotlin_kotlin.$_$.h4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.a3;
  var ULong = kotlin_kotlin.$_$.nd;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var lazy_0 = kotlin_kotlin.$_$.ce;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var KProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var toLong_0 = kotlin_kotlin.$_$.ha;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.q2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.s2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.z2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.b3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.h2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.j2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.k3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.v8;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var coerceAtMost = kotlin_kotlin.$_$.ma;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var arrayIterator = kotlin_kotlin.$_$.o8;
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var emptyMap = kotlin_kotlin.$_$.z5;
  var getValue = kotlin_kotlin.$_$.h6;
  var copyOf = kotlin_kotlin.$_$.u5;
  var copyOf_0 = kotlin_kotlin.$_$.v5;
  var fillArrayVal = kotlin_kotlin.$_$.a9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.uc;
  var invoke = kotlin_kotlin.$_$.yd;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.vc;
  var Unit = kotlin_kotlin.$_$.qd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var isObject = kotlin_kotlin.$_$.t9;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var plus = kotlin_kotlin.$_$.ee;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.zc;
  var isFinite = kotlin_kotlin.$_$.ae;
  var isFinite_0 = kotlin_kotlin.$_$.zd;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toUInt = kotlin_kotlin.$_$.kc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.r2;
  var toULong = kotlin_kotlin.$_$.mc;
  var toUByte = kotlin_kotlin.$_$.jc;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var toUShort = kotlin_kotlin.$_$.nc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.ca;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var toString_0 = kotlin_kotlin.$_$.c2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.i4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var setOf = kotlin_kotlin.$_$.g7;
  var numberToChar = kotlin_kotlin.$_$.y9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.b2;
  var equals_0 = kotlin_kotlin.$_$.gb;
  var Char = kotlin_kotlin.$_$.tc;
  var toByte = kotlin_kotlin.$_$.ga;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.de;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.u3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.y3;
  var toShort = kotlin_kotlin.$_$.ia;
  var single = kotlin_kotlin.$_$.tb;
  var emptySet = kotlin_kotlin.$_$.a6;
  var plus_0 = kotlin_kotlin.$_$.b7;
  var toList = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.wc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var last = kotlin_kotlin.$_$.s6;
  var removeLast = kotlin_kotlin.$_$.f7;
  var lastIndexOf = kotlin_kotlin.$_$.ob;
  var Long = kotlin_kotlin.$_$.bd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.d4;
  var charArray = kotlin_kotlin.$_$.s8;
  var indexOf = kotlin_kotlin.$_$.ib;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, {0: JsonNullSerializer_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
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
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
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
    this.x37_1 = configuration;
    this.y37_1 = serializersModule;
    this.z37_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).s2s = function () {
    return this.y37_1;
  };
  protoOf(Json).a38 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.eo();
    }
  };
  protoOf(Json).b38 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.e2p(), null);
    var result = input.d2s(deserializer);
    lexer.q38();
    return result;
  };
  protoOf(Json).c38 = function (deserializer, element) {
    return readJson(this, element, deserializer);
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
    this.r38_1 = encodeDefaults;
    this.s38_1 = ignoreUnknownKeys;
    this.t38_1 = isLenient;
    this.u38_1 = allowStructuredMapKeys;
    this.v38_1 = prettyPrint;
    this.w38_1 = explicitNulls;
    this.x38_1 = prettyPrintIndent;
    this.y38_1 = coerceInputValues;
    this.z38_1 = useArrayPolymorphism;
    this.a39_1 = classDiscriminator;
    this.b39_1 = allowSpecialFloatingPointValues;
    this.c39_1 = useAlternativeNames;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.r38_1 + ', ignoreUnknownKeys=' + this.s38_1 + ', isLenient=' + this.t38_1 + ', ' + ('allowStructuredMapKeys=' + this.u38_1 + ', prettyPrint=' + this.v38_1 + ', explicitNulls=' + this.w38_1 + ', ') + ("prettyPrintIndent='" + this.x38_1 + "', coerceInputValues=" + this.y38_1 + ', useArrayPolymorphism=' + this.z38_1 + ', ') + ("classDiscriminator='" + this.a39_1 + "', allowSpecialFloatingPointValues=" + this.b39_1 + ')');
  };
  function throwSubtypeNotRegistered($this, subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.qd();
    var subClassName = tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.qd() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.d39_1 = baseClass;
    this.e39_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.d39_1.qd() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).e2p = function () {
    return this.e39_1;
  };
  protoOf(JsonContentPolymorphicSerializer).f2p = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.s2s().c2u(this.d39_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.d39_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).f2p(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).g2p = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.f39();
    var tmp = this.g39(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.h39().c38(actualSerializer, tree);
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
    tmp0_apply.p6(v);
    return tmp0_apply.toString();
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.i39_1 = content;
  }
  protoOf(JsonObject).u1 = function () {
    return this.i39_1.u1();
  };
  protoOf(JsonObject).i2 = function () {
    return this.i39_1.i2();
  };
  protoOf(JsonObject).f = function () {
    return this.i39_1.f();
  };
  protoOf(JsonObject).j39 = function (key) {
    return this.i39_1.d2(key);
  };
  protoOf(JsonObject).d2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.j39((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k39 = function (key) {
    return this.i39_1.h2(key);
  };
  protoOf(JsonObject).h2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k39((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.i39_1.k();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.i39_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.i39_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.i39_1.u1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function get_jsonObject(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
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
    return this.l39();
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
    this.m39_1 = content;
  }
  protoOf(JsonArray).f = function () {
    return this.m39_1.f();
  };
  protoOf(JsonArray).n39 = function (element) {
    return this.m39_1.m(element);
  };
  protoOf(JsonArray).m = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.n39(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o39 = function (elements) {
    return this.m39_1.b1(elements);
  };
  protoOf(JsonArray).b1 = function (elements) {
    return this.o39(elements);
  };
  protoOf(JsonArray).l = function (index) {
    return this.m39_1.l(index);
  };
  protoOf(JsonArray).p39 = function (element) {
    return this.m39_1.n(element);
  };
  protoOf(JsonArray).n = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.p39(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).k = function () {
    return this.m39_1.k();
  };
  protoOf(JsonArray).c = function () {
    return this.m39_1.c();
  };
  protoOf(JsonArray).r1 = function (index) {
    return this.m39_1.r1(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.m39_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.m39_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.m39_1, ',', '[', ']');
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.q39_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r39_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  protoOf(JsonNull).l39 = function () {
    return this.q39_1;
  };
  protoOf(JsonNull).s39 = function () {
    return this.r39_1.w1();
  };
  protoOf(JsonNull).w2z = function (typeParamsSerializers) {
    return this.s39();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.t39_1 = isString;
    this.u39_1 = toString(body);
  }
  protoOf(JsonLiteral).l39 = function () {
    return this.u39_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.t39_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.u39_1);
      tmp = tmp0_apply.toString();
    } else {
      tmp = this.u39_1;
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
    if (!(this.t39_1 === other.t39_1))
      return false;
    if (!(this.u39_1 === other.u39_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.t39_1 | 0;
    result = imul(31, result) + getStringHashCode(this.u39_1) | 0;
    return result;
  };
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.l39());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.l39());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.l39());
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.l39());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.l39());
  }
  function get_float(_this__u8e3s4) {
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.l39();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.l39());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.l39();
    }
    return tmp;
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
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.p2p('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.p2p('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.p2p('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.p2p('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.p2p('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().v39_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().w39_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().x39_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().y39_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().z39_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.a3a_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).e2p = function () {
    return this.a3a_1;
  };
  protoOf(JsonElementSerializer).b3a = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.v2t(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.v2t(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.v2t(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).f2p = function (encoder, value) {
    return this.b3a(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).g2p = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.f39();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.c3a_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).e2p();
    this.d3a_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).i2q = function () {
    return this.c3a_1.i2q();
  };
  protoOf(JsonObjectDescriptor).j2q = function () {
    return this.c3a_1.j2q();
  };
  protoOf(JsonObjectDescriptor).k2q = function () {
    return this.c3a_1.k2q();
  };
  protoOf(JsonObjectDescriptor).d2q = function () {
    return this.c3a_1.d2q();
  };
  protoOf(JsonObjectDescriptor).l2q = function () {
    return this.c3a_1.l2q();
  };
  protoOf(JsonObjectDescriptor).m2q = function (index) {
    return this.c3a_1.m2q(index);
  };
  protoOf(JsonObjectDescriptor).n2q = function (index) {
    return this.c3a_1.n2q(index);
  };
  protoOf(JsonObjectDescriptor).o2q = function (name) {
    return this.c3a_1.o2q(name);
  };
  protoOf(JsonObjectDescriptor).p2q = function (index) {
    return this.c3a_1.p2q(index);
  };
  protoOf(JsonObjectDescriptor).q2q = function (index) {
    return this.c3a_1.q2q(index);
  };
  protoOf(JsonObjectDescriptor).h2q = function () {
    return this.d3a_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.y39_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).e2p = function () {
    return this.y39_1;
  };
  protoOf(JsonObjectSerializer).e3a = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).f2p(encoder, value);
  };
  protoOf(JsonObjectSerializer).f2p = function (encoder, value) {
    return this.e3a(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).g2p = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).g2p(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.v39_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).e2p = function () {
    return this.v39_1;
  };
  protoOf(JsonPrimitiveSerializer).f3a = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.v2t(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.v2t(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).f2p = function (encoder, value) {
    return this.f3a(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).g2p = function (decoder) {
    var result = asJsonDecoder(decoder).f39();
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
    this.w39_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).e2p = function () {
    return this.w39_1;
  };
  protoOf(JsonNullSerializer).g3a = function (encoder, value) {
    verify(encoder);
    encoder.y2s();
  };
  protoOf(JsonNullSerializer).f2p = function (encoder, value) {
    return this.g3a(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).g2p = function (decoder) {
    verify_0(decoder);
    if (decoder.p2r()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.q2r();
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
    this.x39_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).e2p = function () {
    return this.x39_1;
  };
  protoOf(JsonLiteralSerializer).h3a = function (encoder, value) {
    verify(encoder);
    if (value.t39_1) {
      return encoder.h2t(value.u39_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d2t(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.u39_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.j2t(serializer_0(Companion_getInstance()).e2p());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.d2t(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.f2t(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.z2s(tmp3_safe_receiver);
    }
    encoder.h2t(value.u39_1);
  };
  protoOf(JsonLiteralSerializer).f2p = function (encoder, value) {
    return this.h3a(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).g2p = function (decoder) {
    var result = asJsonDecoder(decoder).f39();
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
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.i3a_1 = ListSerializer(JsonElementSerializer_getInstance()).e2p();
    this.j3a_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).i2q = function () {
    return this.i3a_1.i2q();
  };
  protoOf(JsonArrayDescriptor).j2q = function () {
    return this.i3a_1.j2q();
  };
  protoOf(JsonArrayDescriptor).k2q = function () {
    return this.i3a_1.k2q();
  };
  protoOf(JsonArrayDescriptor).d2q = function () {
    return this.i3a_1.d2q();
  };
  protoOf(JsonArrayDescriptor).l2q = function () {
    return this.i3a_1.l2q();
  };
  protoOf(JsonArrayDescriptor).m2q = function (index) {
    return this.i3a_1.m2q(index);
  };
  protoOf(JsonArrayDescriptor).n2q = function (index) {
    return this.i3a_1.n2q(index);
  };
  protoOf(JsonArrayDescriptor).o2q = function (name) {
    return this.i3a_1.o2q(name);
  };
  protoOf(JsonArrayDescriptor).p2q = function (index) {
    return this.i3a_1.p2q(index);
  };
  protoOf(JsonArrayDescriptor).q2q = function (index) {
    return this.i3a_1.q2q(index);
  };
  protoOf(JsonArrayDescriptor).h2q = function () {
    return this.j3a_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.z39_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).e2p = function () {
    return this.z39_1;
  };
  protoOf(JsonArraySerializer).k3a = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).f2p(encoder, value);
  };
  protoOf(JsonArraySerializer).f2p = function (encoder, value) {
    return this.k3a(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).g2p = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).g2p(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
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
    return $this.l3a_1.w1();
  }
  function defer$1($deferred) {
    this.l3a_1 = lazy_0($deferred);
  }
  protoOf(defer$1).h2q = function () {
    return _get_original__l7ku1m(this).h2q();
  };
  protoOf(defer$1).l2q = function () {
    return _get_original__l7ku1m(this).l2q();
  };
  protoOf(defer$1).j2q = function () {
    return _get_original__l7ku1m(this).j2q();
  };
  protoOf(defer$1).p2q = function (index) {
    return _get_original__l7ku1m(this).p2q(index);
  };
  protoOf(defer$1).o2q = function (name) {
    return _get_original__l7ku1m(this).o2q(name);
  };
  protoOf(defer$1).m2q = function (index) {
    return _get_original__l7ku1m(this).m2q(index);
  };
  protoOf(defer$1).n2q = function (index) {
    return _get_original__l7ku1m(this).n2q(index);
  };
  protoOf(defer$1).q2q = function (index) {
    return _get_original__l7ku1m(this).q2q(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.m3a_1 = writer;
    this.n3a_1 = true;
  }
  protoOf(Composer).o3a = function () {
    this.n3a_1 = true;
  };
  protoOf(Composer).p3a = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).q3a = function () {
    this.n3a_1 = false;
  };
  protoOf(Composer).r3a = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).s3a = function (v) {
    return this.m3a_1.t3a(v);
  };
  protoOf(Composer).u3a = function (v) {
    return this.m3a_1.v3a(v);
  };
  protoOf(Composer).w3a = function (v) {
    return this.m3a_1.v3a(v.toString());
  };
  protoOf(Composer).x3a = function (v) {
    return this.m3a_1.v3a(v.toString());
  };
  protoOf(Composer).y3a = function (v) {
    return this.m3a_1.z3a(toLong_0(v));
  };
  protoOf(Composer).a3b = function (v) {
    return this.m3a_1.z3a(toLong_0(v));
  };
  protoOf(Composer).b3b = function (v) {
    return this.m3a_1.z3a(toLong_0(v));
  };
  protoOf(Composer).c3b = function (v) {
    return this.m3a_1.z3a(v);
  };
  protoOf(Composer).d3b = function (v) {
    return this.m3a_1.v3a(v.toString());
  };
  protoOf(Composer).e3b = function (value) {
    return this.m3a_1.f3b(value);
  };
  function Composer_0(sb, json) {
    return json.x37_1.v38_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.i3b_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).b3b = function (v) {
    if (this.i3b_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.e3b(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.u3a(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).c3b = function (v) {
    if (this.i3b_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.e3b(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.u3a(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).y3a = function (v) {
    if (this.i3b_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.e3b(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.u3a(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).a3b = function (v) {
    if (this.i3b_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.e3b(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.u3a(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.l3b_1 = json;
    this.m3b_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).o3a = function () {
    this.n3a_1 = true;
    this.m3b_1 = this.m3b_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).p3a = function () {
    this.m3b_1 = this.m3b_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).q3a = function () {
    this.n3a_1 = false;
    this.u3a('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.m3b_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.u3a(this.l3b_1.x37_1.x38_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).r3a = function () {
    this.s3a(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.o3b_1 = !descriptor.q2q(index) ? descriptor.n2q(index).d2q() : false;
    return $this.o3b_1;
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
    tmp.n3b_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.o3b_1 = false;
  }
  protoOf(JsonElementMarker).v2x = function (index) {
    this.n3b_1.v2x(index);
  };
  protoOf(JsonElementMarker).w2x = function () {
    return this.n3b_1.w2x();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.p3b('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.h2q() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l2q() + "'.\n") + get_allowStructuredMapKeysHint());
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
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
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
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function get_JsonAlternativeNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = _this__u8e3s4.o2q(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.x37_1.c39_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.r3b(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
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
      throw SerializationException_init_$Create$(_this__u8e3s4.h2q() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j2q();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.m2q(i);
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
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s3b_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.d()) {
            var element_0 = tmp0_iterator_0.e();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.j2q());
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
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.p2q(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.p2q(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
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
    var newSize = imul($this.v3b_1, 2);
    $this.t3b_1 = copyOf($this.t3b_1, newSize);
    $this.u3b_1 = copyOf_0($this.u3b_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t3b_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.u3b_1 = tmp_2;
    this.v3b_1 = -1;
  }
  protoOf(JsonPath).w3b = function (sd) {
    this.v3b_1 = this.v3b_1 + 1 | 0;
    var depth = this.v3b_1;
    if (depth === this.t3b_1.length) {
      resize(this);
    }
    this.t3b_1[depth] = sd;
  };
  protoOf(JsonPath).x3b = function (index) {
    this.u3b_1[this.v3b_1] = index;
  };
  protoOf(JsonPath).y3b = function (key) {
    var tmp;
    if (!(this.u3b_1[this.v3b_1] === -2)) {
      this.v3b_1 = this.v3b_1 + 1 | 0;
      tmp = this.v3b_1 === this.t3b_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.t3b_1[this.v3b_1] = key;
    this.u3b_1[this.v3b_1] = -2;
  };
  protoOf(JsonPath).z3b = function () {
    if (this.u3b_1[this.v3b_1] === -2) {
      this.t3b_1[this.v3b_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).a3c = function () {
    var depth = this.v3b_1;
    if (this.u3b_1[depth] === -2) {
      this.u3b_1[depth] = -1;
      this.v3b_1 = this.v3b_1 - 1 | 0;
    }
    if (!(this.v3b_1 === -1)) {
      this.v3b_1 = this.v3b_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).b3c = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.q6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.v3b_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.t3b_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l2q(), LIST_getInstance())) {
            if (!(this.u3b_1[index] === -1)) {
              tmp0_apply.q6('[');
              tmp0_apply.p6(this.u3b_1[index]);
              tmp0_apply.q6(']');
            }
          } else {
            var idx = this.u3b_1[index];
            if (idx >= 0) {
              tmp0_apply.q6('.');
              tmp0_apply.q6(element.p2q(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.q6('[');
            tmp0_apply.q6("'");
            tmp0_apply.p6(element);
            tmp0_apply.q6("'");
            tmp0_apply.q6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    return tmp0_apply.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.b3c();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.v2t(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.k3c_1.n3c(get_TC_BEGIN_OBJ());
    if ($this.k3c_1.o3c() === get_TC_COMMA()) {
      $this.k3c_1.p3b('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.k3c_1.p3c()) {
      var key = $this.l3c_1 ? $this.k3c_1.r3c() : $this.k3c_1.q3c();
      $this.k3c_1.n3c(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.s3c();
      // Inline function 'kotlin.collections.set' call
      result.l3(key, element);
      lastToken = $this.k3c_1.t3c();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.k3c_1.p3b('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.k3c_1.n3c(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.k3c_1.p3b('Unexpected trailing comma');
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
    var lastToken = $this.k3c_1.t3c();
    if ($this.k3c_1.o3c() === get_TC_COMMA()) {
      $this.k3c_1.p3b('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.k3c_1.p3c()) {
      var element = $this.s3c();
      result.a(element);
      lastToken = $this.k3c_1.t3c();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.k3c_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.m38_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.p3b(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.k3c_1.n3c(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.k3c_1.p3b('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.l3c_1 ? true : !isString) {
      tmp = $this.k3c_1.r3c();
    } else {
      tmp = $this.k3c_1.q3c();
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
    this.p3d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).u3d = function ($this$$receiver, it, $completion) {
    var tmp = this.v3d($this$$receiver, it, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).d7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.u3d(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.s3d_1 = this.p3d_1.k3c_1.o3c();
            if (this.s3d_1 === get_TC_STRING()) {
              this.t3d_1 = readValue(this.p3d_1, true);
              this.sh_1 = 2;
              continue $sm;
            } else {
              if (this.s3d_1 === get_TC_OTHER()) {
                this.t3d_1 = readValue(this.p3d_1, false);
                this.sh_1 = 2;
                continue $sm;
              } else {
                if (this.s3d_1 === get_TC_BEGIN_OBJ()) {
                  this.sh_1 = 1;
                  suspendResult = readObject_0(this.q3d_1, this.p3d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.s3d_1 === get_TC_BEGIN_LIST()) {
                    this.t3d_1 = readArray(this.p3d_1);
                    this.sh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.p3d_1.k3c_1.p3b("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.t3d_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            return this.t3d_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v3d = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.p3d_1, completion);
    i.q3d_1 = $this$$receiver;
    i.r3d_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.u3d($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3d_1 = _this__u8e3s4;
    this.d3d_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.e3d_1 = this.c3d_1.k3c_1.n3c(get_TC_BEGIN_OBJ());
            if (this.c3d_1.k3c_1.o3c() === get_TC_COMMA()) {
              this.c3d_1.k3c_1.p3b('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.f3d_1 = LinkedHashMap_init_$Create$();
            this.sh_1 = 1;
            continue $sm;
          case 1:
            if (!this.c3d_1.k3c_1.p3c()) {
              this.sh_1 = 4;
              continue $sm;
            }

            this.g3d_1 = this.c3d_1.l3c_1 ? this.c3d_1.k3c_1.r3c() : this.c3d_1.k3c_1.q3c();
            this.c3d_1.k3c_1.n3c(get_TC_COLON());
            this.sh_1 = 2;
            suspendResult = this.d3d_1.v6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.f3d_1.l3(this.g3d_1, element);
            this.e3d_1 = this.c3d_1.k3c_1.t3c();
            var tmp0_subject = this.e3d_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.sh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.sh_1 = 4;
                continue $sm;
              } else {
                this.c3d_1.k3c_1.p3b('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.sh_1 = 1;
            continue $sm;
          case 4:
            if (this.e3d_1 === get_TC_BEGIN_OBJ()) {
              this.c3d_1.k3c_1.n3c(get_TC_END_OBJ());
            } else if (this.e3d_1 === get_TC_COMMA()) {
              this.c3d_1.k3c_1.p3b('Unexpected trailing comma');
            }

            return new JsonObject(this.f3d_1);
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
    this.k3c_1 = lexer;
    this.l3c_1 = configuration.t38_1;
    this.m3c_1 = 0;
  }
  protoOf(JsonTreeReader).s3c = function () {
    var token = this.k3c_1.o3c();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.m3c_1 = this.m3c_1 + 1 | 0;
      if (this.m3c_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.m3c_1 = this.m3c_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.k3c_1.p3b('Cannot begin reading element, unexpected token: ' + token);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.i2q().c();
    while (tmp0_iterator.d()) {
      var annotation = tmp0_iterator.e();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.w3d_1;
    }
    return json.x37_1.a39_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.h39().x37_1.z38_1;
    }
    if (tmp) {
      return deserializer.g2p(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.e2p(), _this__u8e3s4.h39());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.f39();
    var tmp1_cast = deserializer.e2p();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.h2q() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    var jsonTree = tmp0_cast;
    var tmp0_safe_receiver = jsonTree.k39(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l39();
    var tmp2_elvis_lhs = deserializer.u2p(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.h39();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.e2p()).m(classDiscriminator)) {
      var baseName = serializer.e2p().h2q();
      var actualName = actualSerializer.e2p().h2q();
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
    this.q3b_1 = createMapForCache(1);
  }
  protoOf(DescriptorSchemaCache).x3d = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.q3b_1;
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
  protoOf(DescriptorSchemaCache).r3b = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.y3d(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.x3d(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).y3d = function (descriptor, key) {
    var tmp0_safe_receiver = this.q3b_1.h2(descriptor);
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
    this.z3d_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.z3d_1 === unknownKey) {
      _this__u8e3s4.z3d_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.u2s(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.g38_1.o3c() === get_TC_COMMA()) {
      $this.g38_1.p3b('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i38_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i38_1 === -1)) {
        hasComma = $this.g38_1.b3e();
      }
    } else {
      $this.g38_1.a3e(get_COLON());
    }
    var tmp;
    if ($this.g38_1.p3c()) {
      if (decodingKey) {
        if ($this.i38_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.g38_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.m38_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.p3b(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.g38_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.m38_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.p3b(tmp$ret$1, tmp5_require);
          }
        }
      }
      $this.i38_1 = $this.i38_1 + 1 | 0;
      tmp = $this.i38_1;
    } else {
      if (hasComma) {
        $this.g38_1.p3b("Expected '}', but had ',' instead");
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
      var tmp0_tryCoerceValue = $this.e38_1;
      var tmp1_tryCoerceValue = descriptor.n2q(index);
      var tmp;
      if (!tmp1_tryCoerceValue.d2q()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = !$this.g38_1.c3e();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.l2q(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.g38_1.d3e($this.k38_1.t38_1);
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
          $this.g38_1.q3c();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g38_1.b3e();
    while ($this.g38_1.p3c()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g38_1.a3e(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.e38_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k38_1.y38_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.g38_1.b3e();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l38_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.v2x(index);
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
      $this.g38_1.p3b('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.l38_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w2x();
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
    if ($this.k38_1.s38_1 ? true : trySkip($this.j38_1, $this, key)) {
      $this.g38_1.f3e($this.k38_1.t38_1);
    } else {
      $this.g38_1.e3e(key);
    }
    return $this.g38_1.b3e();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g38_1.b3e();
    var tmp;
    if ($this.g38_1.p3c()) {
      if (!($this.i38_1 === -1) ? !hasComma : false) {
        $this.g38_1.p3b('Expected end of the array or comma');
      }
      $this.i38_1 = $this.i38_1 + 1 | 0;
      tmp = $this.i38_1;
    } else {
      if (hasComma) {
        $this.g38_1.p3b('Unexpected trailing comma');
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k38_1.t38_1) {
      tmp = $this.g38_1.h3e();
    } else {
      tmp = $this.g38_1.g3e();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.e38_1 = json;
    this.f38_1 = mode;
    this.g38_1 = lexer;
    this.h38_1 = this.e38_1.s2s();
    this.i38_1 = -1;
    this.j38_1 = discriminatorHolder;
    this.k38_1 = this.e38_1.x37_1;
    this.l38_1 = this.k38_1.w38_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).h39 = function () {
    return this.e38_1;
  };
  protoOf(StreamingJsonDecoder).s2s = function () {
    return this.h38_1;
  };
  protoOf(StreamingJsonDecoder).f39 = function () {
    return (new JsonTreeReader(this.e38_1.x37_1, this.g38_1)).s3c();
  };
  protoOf(StreamingJsonDecoder).d2s = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e38_1.x37_1.z38_1;
      }
      if (tmp) {
        return deserializer.g2p(this);
      }
      var discriminator = classDiscriminator(deserializer.e2p(), this.e38_1);
      var type = this.g38_1.i3e(discriminator, this.k38_1.t38_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.u2p(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.j38_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.g2p(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        throw new MissingFieldException(e.w2p_1, plus(e.message, ' at path: ') + this.g38_1.n38_1.b3c(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).e2s = function (descriptor) {
    var newMode = switchMode(this.e38_1, descriptor);
    this.g38_1.n38_1.w3b(descriptor);
    this.g38_1.a3e(newMode.l3e_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a5_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e38_1, newMode, this.g38_1, descriptor, this.j38_1);
        break;
      default:
        var tmp_0;
        if (this.f38_1.equals(newMode) ? this.e38_1.x37_1.w38_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e38_1, newMode, this.g38_1, descriptor, this.j38_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).f2s = function (descriptor) {
    if (this.e38_1.x37_1.s38_1 ? descriptor.j2q() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.g38_1.a3e(this.f38_1.m3e_1);
    this.g38_1.n38_1.a3c();
  };
  protoOf(StreamingJsonDecoder).p2r = function () {
    var tmp;
    var tmp0_safe_receiver = this.l38_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o3b_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.g38_1.c3e();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q2r = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).q2s = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.f38_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.g38_1.n38_1.z3b();
    }
    var value = protoOf(AbstractDecoder).q2s.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.g38_1.n38_1.y3b(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).u2s = function (descriptor) {
    var index;
    switch (this.f38_1.a5_1) {
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
    if (!this.f38_1.equals(WriteMode_MAP_getInstance())) {
      this.g38_1.n38_1.x3b(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).r2r = function () {
    var tmp;
    if (this.k38_1.t38_1) {
      tmp = this.g38_1.o3e();
    } else {
      tmp = this.g38_1.n3e();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s2r = function () {
    var value = this.g38_1.p3e();
    if (!value.equals(toLong_0(value.jh()))) {
      this.g38_1.p3b("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.jh();
  };
  protoOf(StreamingJsonDecoder).t2r = function () {
    var value = this.g38_1.p3e();
    if (!value.equals(toLong_0(value.kh()))) {
      this.g38_1.p3b("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.kh();
  };
  protoOf(StreamingJsonDecoder).u2r = function () {
    var value = this.g38_1.p3e();
    if (!value.equals(toLong_0(value.h6()))) {
      this.g38_1.p3b("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.h6();
  };
  protoOf(StreamingJsonDecoder).v2r = function () {
    return this.g38_1.p3e();
  };
  protoOf(StreamingJsonDecoder).w2r = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.g38_1;
      var input = tmp0_parseString.r3c();
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
          tmp0_parseString.p3b("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e38_1.x37_1.b39_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g38_1, result);
  };
  protoOf(StreamingJsonDecoder).x2r = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.g38_1;
      var input = tmp0_parseString.r3c();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.p3b("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.e38_1.x37_1.b39_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g38_1, result);
  };
  protoOf(StreamingJsonDecoder).y2r = function () {
    var string = this.g38_1.r3c();
    if (!(string.length === 1)) {
      this.g38_1.p3b("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).z2r = function () {
    var tmp;
    if (this.k38_1.t38_1) {
      tmp = this.g38_1.h3e();
    } else {
      tmp = this.g38_1.q3c();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).b2s = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.g38_1, this.e38_1) : protoOf(AbstractDecoder).b2s.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).a2s = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.e38_1, this.z2r(), ' at path ' + this.g38_1.n38_1.b3c());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.q3e_1 = lexer;
    this.r3e_1 = json.s2s();
  }
  protoOf(JsonDecoderForUnsignedTypes).s2s = function () {
    return this.r3e_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).u2s = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).u2r = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.q3e_1;
      var input = tmp0_parseString.r3c();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.p3b("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2r = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.q3e_1;
      var input = tmp0_parseString.r3c();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.p3b("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).s2r = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.q3e_1;
      var input = tmp0_parseString.r3c();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.p3b("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).t2r = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.q3e_1;
      var input = tmp0_parseString.r3c();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(tmp0_toShort);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.p3b("Failed to parse type 'UShort' for input '" + input + "'");
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
    $this.c3c_1.q3a();
    $this.h2t(ensureNotNull($this.j3c_1));
    $this.c3c_1.s3a(get_COLON());
    $this.c3c_1.r3a();
    $this.h2t(descriptor.h2q());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.c3c_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.c3c_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.c3c_1.m3a_1, $this.i3c_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.c3c_1 = composer;
    this.d3c_1 = json;
    this.e3c_1 = mode;
    this.f3c_1 = modeReuseCache;
    this.g3c_1 = this.d3c_1.s2s();
    this.h3c_1 = this.d3c_1.x37_1;
    this.i3c_1 = false;
    this.j3c_1 = null;
    var i = this.e3c_1.a5_1;
    if (!(this.f3c_1 == null)) {
      if (!(this.f3c_1[i] === null) ? true : !(this.f3c_1[i] === this)) {
        this.f3c_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).h39 = function () {
    return this.d3c_1;
  };
  protoOf(StreamingJsonEncoder).s2s = function () {
    return this.g3c_1;
  };
  protoOf(StreamingJsonEncoder).y2t = function (descriptor, index) {
    return this.h3c_1.r38_1;
  };
  protoOf(StreamingJsonEncoder).v2t = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.h39().x37_1.z38_1;
      }
      if (tmp) {
        serializer.f2p(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.e2p(), this.h39());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.e2p().l2q());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.j3c_1 = baseClassDiscriminator;
      actualSerializer.f2p(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).e2s = function (descriptor) {
    var newMode = switchMode(this.d3c_1, descriptor);
    if (!(newMode.l3e_1 === get_INVALID())) {
      this.c3c_1.s3a(newMode.l3e_1);
      this.c3c_1.o3a();
    }
    if (!(this.j3c_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.j3c_1 = null;
    }
    if (this.e3c_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.f3c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.a5_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.c3c_1, this.d3c_1, newMode, this.f3c_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).f2s = function (descriptor) {
    if (!(this.e3c_1.m3e_1 === get_INVALID())) {
      this.c3c_1.p3a();
      this.c3c_1.q3a();
      this.c3c_1.s3a(this.e3c_1.m3e_1);
    }
  };
  protoOf(StreamingJsonEncoder).w2s = function (descriptor, index) {
    switch (this.e3c_1.a5_1) {
      case 1:
        if (!this.c3c_1.n3a_1) {
          this.c3c_1.s3a(get_COMMA());
        }

        this.c3c_1.q3a();
        break;
      case 2:
        if (!this.c3c_1.n3a_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.c3c_1.s3a(get_COMMA());
            this.c3c_1.q3a();
            tmp_0 = true;
          } else {
            this.c3c_1.s3a(get_COLON());
            this.c3c_1.r3a();
            tmp_0 = false;
          }
          tmp.i3c_1 = tmp_0;
        } else {
          this.i3c_1 = true;
          this.c3c_1.q3a();
        }

        break;
      case 3:
        if (index === 0)
          this.i3c_1 = true;
        if (index === 1) {
          this.c3c_1.s3a(get_COMMA());
          this.c3c_1.r3a();
          this.i3c_1 = false;
        }

        break;
      default:
        if (!this.c3c_1.n3a_1) {
          this.c3c_1.s3a(get_COMMA());
        }

        this.c3c_1.q3a();
        this.h2t(descriptor.p2q(index));
        this.c3c_1.s3a(get_COLON());
        this.c3c_1.r3a();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).j2t = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.d3c_1, this.e3c_1, null) : protoOf(AbstractEncoder).j2t.call(this, descriptor);
  };
  protoOf(StreamingJsonEncoder).y2s = function () {
    this.c3c_1.u3a(get_NULL());
  };
  protoOf(StreamingJsonEncoder).z2s = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.d3b(value);
    }
  };
  protoOf(StreamingJsonEncoder).a2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.y3a(value);
    }
  };
  protoOf(StreamingJsonEncoder).b2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.a3b(value);
    }
  };
  protoOf(StreamingJsonEncoder).c2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.b3b(value);
    }
  };
  protoOf(StreamingJsonEncoder).d2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.c3b(value);
    }
  };
  protoOf(StreamingJsonEncoder).e2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.w3a(value);
    }
    if (!this.h3c_1.b39_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.c3c_1.m3a_1));
    }
  };
  protoOf(StreamingJsonEncoder).f2t = function (value) {
    if (this.i3c_1) {
      this.h2t(value.toString());
    } else {
      this.c3c_1.x3a(value);
    }
    if (!this.h3c_1.b39_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.c3c_1.m3a_1));
    }
  };
  protoOf(StreamingJsonEncoder).g2t = function (value) {
    this.h2t(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).h2t = function (value) {
    return this.c3c_1.e3b(value);
  };
  protoOf(StreamingJsonEncoder).i2t = function (enumDescriptor, index) {
    this.h2t(enumDescriptor.p2q(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.k2q() ? get_unsignedNumberDescriptors().m(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).e2p(), serializer_0(Companion_getInstance()).e2p(), serializer_2(Companion_getInstance_2()).e2p(), serializer_3(Companion_getInstance_3()).e2p()]);
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
          _this__u8e3s4.q6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.ze(value, lastPos, value.length);
    } else {
      _this__u8e3s4.q6(value);
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
  function readJson(_this__u8e3s4, element, deserializer) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(_this__u8e3s4, element);
    } else {
      if (element instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(_this__u8e3s4, element);
      } else {
        var tmp_0;
        if (element instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(element, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(_this__u8e3s4, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.d2s(deserializer);
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.o35();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = $this.x3e(tmp0_safe_receiver);
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
    this.u3e_1 = json;
    this.v3e_1 = value;
    this.w3e_1 = this.h39().x37_1;
  }
  protoOf(AbstractJsonTreeDecoder).h39 = function () {
    return this.u3e_1;
  };
  protoOf(AbstractJsonTreeDecoder).w1 = function () {
    return this.v3e_1;
  };
  protoOf(AbstractJsonTreeDecoder).s2s = function () {
    return this.h39().s2s();
  };
  protoOf(AbstractJsonTreeDecoder).f39 = function () {
    return currentObject(this);
  };
  protoOf(AbstractJsonTreeDecoder).d2s = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).p35 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).e2s = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.l2q();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.h39();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.h2q() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject_0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.h39();
        var keyDescriptor = carrierDescriptor(descriptor.n2q(0), tmp0_selectMapMode.s2s());
        var keyKind = keyDescriptor.l2q();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.h39();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.h2q() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject_0);
        } else {
          if (tmp0_selectMapMode.x37_1.u38_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.h39();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.h2q() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject_0);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.h39();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.h2q() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject_0);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).f2s = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).p2r = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).y3e = function (tag) {
    var currentElement = this.x3e(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).z3e = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.h39(), this.y3e(tag).l39());
  };
  protoOf(AbstractJsonTreeDecoder).b36 = function (tag, enumDescriptor) {
    return this.z3e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a3f = function (tag) {
    return !(this.x3e(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r35 = function (tag) {
    return this.a3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b3f = function (tag) {
    var value = this.y3e(tag);
    if (!this.h39().x37_1.t38_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.t39_1)
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
  protoOf(AbstractJsonTreeDecoder).s35 = function (tag) {
    return this.b3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
  protoOf(AbstractJsonTreeDecoder).t35 = function (tag) {
    return this.c3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
  protoOf(AbstractJsonTreeDecoder).u35 = function (tag) {
    return this.d3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
  protoOf(AbstractJsonTreeDecoder).v35 = function (tag) {
    return this.e3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
  protoOf(AbstractJsonTreeDecoder).w35 = function (tag) {
    return this.f3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
    var specialFp = this.h39().x37_1.b39_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).x35 = function (tag) {
    return this.g3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
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
    var specialFp = this.h39().x37_1.b39_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).y35 = function (tag) {
    return this.h3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i3f = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.y3e(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(tmp0_primitive.l39());
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
  protoOf(AbstractJsonTreeDecoder).z35 = function (tag) {
    return this.i3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j3f = function (tag) {
    var value = this.y3e(tag);
    if (!this.h39().x37_1.t38_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.t39_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.l39();
  };
  protoOf(AbstractJsonTreeDecoder).a36 = function (tag) {
    return this.j3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k3f = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.y3e(tag).l39()), this.h39()) : protoOf(NamedValueDecoder).c36.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).c36 = function (tag, inlineDescriptor) {
    return this.k3f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.h39();
      var tmp1_tryCoerceValue = descriptor.n2q(index);
      var tmp;
      if (!tmp1_tryCoerceValue.d2q()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.x3e(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.l2q(), ENUM_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.x3e(tag);
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
    $this.u3f_1 = (!$this.h39().x37_1.w38_1 ? !descriptor.q2q(index) : false) ? descriptor.n2q(index).d2q() : false;
    return $this.u3f_1;
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
    this.q3f_1 = value;
    this.r3f_1 = polyDiscriminator;
    this.s3f_1 = polyDescriptor;
    this.t3f_1 = 0;
    this.u3f_1 = false;
  }
  protoOf(JsonTreeDecoder).w1 = function () {
    return this.q3f_1;
  };
  protoOf(JsonTreeDecoder).u2s = function (descriptor) {
    while (this.t3f_1 < descriptor.j2q()) {
      var tmp1 = this.t3f_1;
      this.t3f_1 = tmp1 + 1 | 0;
      var name = this.j35(descriptor, tmp1);
      var index = this.t3f_1 - 1 | 0;
      this.u3f_1 = false;
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
        tmp = !this.w3e_1.y38_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
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
  protoOf(JsonTreeDecoder).p2r = function () {
    return !this.u3f_1 ? protoOf(AbstractJsonTreeDecoder).p2r.call(this) : false;
  };
  protoOf(JsonTreeDecoder).k35 = function (desc, index) {
    var mainName = desc.p2q(index);
    if (!this.w3e_1.c39_1)
      return mainName;
    if (this.w1().i2().m(mainName))
      return mainName;
    var tmp = get_schemaCache(this.h39());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.r3b(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
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
  protoOf(JsonTreeDecoder).x3e = function (tag) {
    return getValue(this.w1(), tag);
  };
  protoOf(JsonTreeDecoder).e2s = function (descriptor) {
    if (descriptor === this.s3f_1)
      return this;
    return protoOf(AbstractJsonTreeDecoder).e2s.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).f2s = function (descriptor) {
    var tmp;
    if (this.w3e_1.s38_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l2q();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.w3e_1.c39_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.h39()).y3d(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2();
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.w1().i2().c();
    while (tmp1_iterator.d()) {
      var key = tmp1_iterator.e();
      if (!names.m(key) ? !(key === this.r3f_1) : false) {
        throw UnknownKeyException(key, this.w1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.a3g_1 = value;
    this.b3g_1 = this.a3g_1.f();
    this.c3g_1 = -1;
  }
  protoOf(JsonTreeListDecoder).w1 = function () {
    return this.a3g_1;
  };
  protoOf(JsonTreeListDecoder).k35 = function (desc, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).x3e = function (tag) {
    return this.a3g_1.l(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).u2s = function (descriptor) {
    while (this.c3g_1 < (this.b3g_1 - 1 | 0)) {
      this.c3g_1 = this.c3g_1 + 1 | 0;
      return this.c3g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.i3g_1 = value;
    this.d36(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).w1 = function () {
    return this.i3g_1;
  };
  protoOf(JsonPrimitiveDecoder).u2s = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).x3e = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.i3g_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.t3g_1 = value;
    this.u3g_1 = toList(this.t3g_1.i2());
    this.v3g_1 = imul(this.u3g_1.f(), 2);
    this.w3g_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).w1 = function () {
    return this.t3g_1;
  };
  protoOf(JsonTreeMapDecoder).k35 = function (desc, index) {
    var i = index / 2 | 0;
    return this.u3g_1.l(i);
  };
  protoOf(JsonTreeMapDecoder).u2s = function (descriptor) {
    while (this.w3g_1 < (this.v3g_1 - 1 | 0)) {
      this.w3g_1 = this.w3g_1 + 1 | 0;
      return this.w3g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeMapDecoder).x3e = function (tag) {
    return (this.w3g_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.t3g_1, tag);
  };
  protoOf(JsonTreeMapDecoder).f2s = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.e2p())).d2s(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
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
    this.l3e_1 = begin;
    this.m3e_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l2q();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.n2q(0), _this__u8e3s4.s2s());
          var keyKind = keyDescriptor.l2q();
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
            if (_this__u8e3s4.x37_1.u38_1) {
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
    if (equals(_this__u8e3s4.l2q(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.k2q()) {
      tmp = carrierDescriptor(_this__u8e3s4.n2q(0), module_0);
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
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function appendEscape($this, lastPosition, current) {
    $this.x3g(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.x3g(lastPosition, currentPosition);
    var result = $this.p38_1.toString();
    $this.p38_1.af(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.o38_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.o38_1 = null;
    return tmp0_also;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.y3g(), $this.m38_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.z3g(currentPosition);
    if (currentPosition === -1) {
      $this.p3b('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.y3g();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.y3g(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.p3b("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.p38_1.o5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.m38_1 = startPos;
      $this.a3h();
      if (($this.m38_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.p3b('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.m38_1);
    }
    $this.p38_1.o5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.p3b("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.z3g(start);
    if (current >= charSequenceLength($this.y3g()) ? true : current === -1) {
      $this.p3b('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.y3g();
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
        $this.p3b("Expected valid boolean literal prefix, but had '" + $this.r3c() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.y3g()) - current | 0) < literalSuffix.length) {
      $this.p3b('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.y3g(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.p3b("Expected valid boolean literal prefix, but had '" + $this.r3c() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.m38_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.m38_1 = 0;
    this.n38_1 = new JsonPath();
    this.o38_1 = null;
    this.p38_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).a3h = function () {
  };
  protoOf(AbstractJsonLexer).b3h = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).q38 = function () {
    var nextToken = this.t3c();
    if (!(nextToken === 10)) {
      this.p3b('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.y3g(), this.m38_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).n3c = function (expected) {
    var token = this.t3c();
    if (!(token === expected)) {
      this.c3h(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).a3e = function (expected) {
    this.a3h();
    var source = this.y3g();
    var cpos = this.m38_1;
    $l$loop_0: while (true) {
      cpos = this.z3g(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.m38_1 = cpos;
      if (c === expected)
        return Unit_getInstance();
      this.d3h(expected);
    }
    this.m38_1 = cpos;
    this.d3h(expected);
  };
  protoOf(AbstractJsonLexer).d3h = function (expected) {
    this.m38_1 = this.m38_1 - 1 | 0;
    if ((this.m38_1 >= 0 ? expected === _Char___init__impl__6a9atx(34) : false) ? this.r3c() === 'null' : false) {
      this.e3h("Expected string literal but 'null' literal was found", this.m38_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.c3h(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).c3h = function (expectedToken) {
    var expected = expectedToken === 1 ? "quotation mark '\"'" : expectedToken === 4 ? "comma ','" : expectedToken === 5 ? "colon ':'" : expectedToken === 6 ? "start of the object '{'" : expectedToken === 7 ? "end of the object '}'" : expectedToken === 8 ? "start of the array '['" : expectedToken === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.m38_1 === charSequenceLength(this.y3g()) ? true : this.m38_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.y3g(), this.m38_1 - 1 | 0));
    this.p3b('Expected ' + expected + ", but had '" + s + "' instead", this.m38_1 - 1 | 0);
  };
  protoOf(AbstractJsonLexer).o3c = function () {
    var source = this.y3g();
    var cpos = this.m38_1;
    $l$loop_0: while (true) {
      cpos = this.z3g(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.m38_1 = cpos;
      return charToTokenClass(ch);
    }
    this.m38_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).c3e = function () {
    var current = this.f3h();
    current = this.z3g(current);
    var len = charSequenceLength(this.y3g()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.y3g(), current + i | 0)))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.y3g(), current + 4 | 0)) === 0 : false)
      return true;
    this.m38_1 = current + 4 | 0;
    return false;
  };
  protoOf(AbstractJsonLexer).f3h = function () {
    var current = this.m38_1;
    $l$loop_0: while (true) {
      current = this.z3g(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.y3g(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.m38_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).d3e = function (isLenient) {
    var token = this.o3c();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.r3c();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.q3c();
    }
    var string = tmp;
    this.o38_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).g3h = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.y3g();
    return toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).q3c = function () {
    if (!(this.o38_1 == null)) {
      return takePeeked(this);
    }
    return this.g3e();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.z3g(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.p3b('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.x3g(lastPosition, currentPosition);
          currentPosition = this.z3g(currentPosition);
          if (currentPosition === -1) {
            this.p3b('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g3h(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.m38_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).h3e = function () {
    var result = this.r3c();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.p3b("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).r3c = function () {
    if (!(this.o38_1 == null)) {
      return takePeeked(this);
    }
    var current = this.f3h();
    if (current >= charSequenceLength(this.y3g()) ? true : current === -1) {
      this.p3b('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.y3g(), current));
    if (token === 1) {
      return this.q3c();
    }
    if (!(token === 0)) {
      this.p3b('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.y3g(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.y3g(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.y3g())) {
        usedAppend = true;
        this.x3g(this.m38_1, current);
        var eof = this.z3g(current);
        if (eof === -1) {
          this.m38_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g3h(this.m38_1, current);
    } else {
      tmp = decodedString(this, this.m38_1, current);
    }
    var result = tmp;
    this.m38_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).x3g = function (fromIndex, toIndex) {
    this.p38_1.ze(this.y3g(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).f3e = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.o3c();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.r3c();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.o3c();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.r3c();
        } else {
          this.g3e();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.m38_1, 'found ] instead of } at path: ' + this.n38_1, this.y3g());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.m38_1, 'found } instead of ] at path: ' + this.n38_1, this.y3g());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.p3b('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.t3c();
      if (tokenStack.f() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.y3g() + "', currentPosition=" + this.m38_1 + ')';
  };
  protoOf(AbstractJsonLexer).e3e = function (key) {
    var processed = this.g3h(0, this.m38_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.e3h("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).e3h = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.n38_1.b3c() + hintMessage, this.y3g());
  };
  protoOf(AbstractJsonLexer).p3b = function (message, position, hint, $super) {
    position = position === VOID ? this.m38_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.e3h(message, position, hint) : $super.e3h.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).p3e = function () {
    var current = this.f3h();
    current = this.z3g(current);
    if (current >= charSequenceLength(this.y3g()) ? true : current === -1) {
      this.p3b('EOF');
    }
    var tmp;
    if (charSequenceGet(this.y3g(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.y3g())) {
        this.p3b('EOF');
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
      var ch = charSequenceGet(this.y3g(), current);
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.p3b("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.y3g()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.p3b("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.r5(new Long(10, 0)).t5(toLong_0(digit));
      if (accumulator.s(new Long(0, 0)) > 0) {
        this.p3b('Numeric value overflow');
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.p3b('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.p3b('EOF');
      }
      if (!(charSequenceGet(this.y3g(), current) === _Char___init__impl__6a9atx(34))) {
        this.p3b('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.m38_1 = current;
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else {
      var tmp_1 = accumulator;
      Companion_getInstance_4();
      if (!tmp_1.equals(new Long(0, -2147483648))) {
        tmp_0 = accumulator.p5();
      } else {
        this.p3b('Numeric value overflow');
      }
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).n3e = function () {
    return consumeBoolean(this, this.f3h());
  };
  protoOf(AbstractJsonLexer).o3e = function () {
    var current = this.f3h();
    if (current === charSequenceLength(this.y3g())) {
      this.p3b('EOF');
    }
    var tmp;
    if (charSequenceGet(this.y3g(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.m38_1 === charSequenceLength(this.y3g())) {
        this.p3b('EOF');
      }
      if (!(charSequenceGet(this.y3g(), this.m38_1) === _Char___init__impl__6a9atx(34))) {
        this.p3b('Expected closing quotation mark');
      }
      this.m38_1 = this.m38_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().i3h_1;
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
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
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
    return c < 117 ? CharMappings_getInstance().h3h_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
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
      $this.h3h_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.i3h_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.h3h_1 = charArray(117);
    this.i3h_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.n3h_1 = source;
  }
  protoOf(StringJsonLexer).y3g = function () {
    return this.n3h_1;
  };
  protoOf(StringJsonLexer).z3g = function (position) {
    return position < this.n3h_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).t3c = function () {
    var source = this.n3h_1;
    $l$loop: while (!(this.m38_1 === -1) ? this.m38_1 < source.length : false) {
      var tmp1 = this.m38_1;
      this.m38_1 = tmp1 + 1 | 0;
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
  protoOf(StringJsonLexer).b3e = function () {
    var current = this.f3h();
    if (current === this.n3h_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.n3h_1, current) === _Char___init__impl__6a9atx(44)) {
      this.m38_1 = this.m38_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).p3c = function () {
    var current = this.m38_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.n3h_1.length) {
      var c = charSequenceGet(this.n3h_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.m38_1 = current;
      return this.b3h(c);
    }
    this.m38_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).f3h = function () {
    var current = this.m38_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.n3h_1.length) {
      var c = charSequenceGet(this.n3h_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.m38_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).a3e = function (expected) {
    if (this.m38_1 === -1) {
      this.d3h(expected);
    }
    var source = this.n3h_1;
    $l$loop: while (this.m38_1 < source.length) {
      var tmp1 = this.m38_1;
      this.m38_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_getInstance();
      this.d3h(expected);
    }
    this.d3h(expected);
  };
  protoOf(StringJsonLexer).g3e = function () {
    this.a3e(get_STRING());
    var current = this.m38_1;
    var closingQuote = indexOf(this.n3h_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.c3h(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.n3h_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.n3h_1, this.m38_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.m38_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.n3h_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).i3e = function (keyToMatch, isLenient) {
    var positionSnapshot = this.m38_1;
    try {
      if (!(this.t3c() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.g3e() : this.h3e();
      if (firstKey === keyToMatch) {
        if (!(this.t3c() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.q3c() : this.h3e();
        return result;
      }
      return null;
    }finally {
      this.m38_1 = positionSnapshot;
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.z37_1;
  }
  function JsonToStringWriter() {
    this.d38_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).z3a = function (value) {
    this.d38_1.p6(value);
  };
  protoOf(JsonToStringWriter).t3a = function (char) {
    this.d38_1.o5(char);
  };
  protoOf(JsonToStringWriter).v3a = function (text) {
    this.d38_1.q6(text);
  };
  protoOf(JsonToStringWriter).f3b = function (text) {
    printQuoted(this.d38_1, text);
  };
  protoOf(JsonToStringWriter).eo = function () {
    this.d38_1.bf();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.d38_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).d2q = get_isNullable;
  protoOf(defer$1).k2q = get_isInline;
  protoOf(defer$1).i2q = get_annotations;
  protoOf(StreamingJsonDecoder).r2s = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).t2s = decodeSequentially;
  protoOf(StreamingJsonDecoder).v2s = decodeCollectionSize;
  protoOf(JsonDecoderForUnsignedTypes).d2s = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).r2s = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).t2s = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).v2s = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).w2t = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).x2t = beginCollection;
  protoOf(AbstractJsonTreeDecoder).r2s = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).t2s = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).v2s = decodeCollectionSize;
  protoOf(JsonTreeDecoder).r2s = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).t2s = decodeSequentially;
  protoOf(JsonTreeDecoder).v2s = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).r2s = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).t2s = decodeSequentially;
  protoOf(JsonTreeListDecoder).v2s = decodeCollectionSize;
  protoOf(JsonPrimitiveDecoder).r2s = decodeSerializableElement$default;
  protoOf(JsonPrimitiveDecoder).t2s = decodeSequentially;
  protoOf(JsonPrimitiveDecoder).v2s = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).r2s = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).t2s = decodeSequentially;
  protoOf(JsonTreeMapDecoder).v2s = decodeCollectionSize;
  //endregion
  //region block: init
  PRIMITIVE_TAG = 'primitive';
  STRING = _Char___init__impl__6a9atx(34);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
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
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = JsonContentPolymorphicSerializer;
  _.$_$.c = get_jsonObject;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
