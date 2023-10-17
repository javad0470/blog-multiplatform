(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ca;
  var interfaceMeta = kotlin_kotlin.$_$.g9;
  var VOID = kotlin_kotlin.$_$.he;
  var setMetadataFor = kotlin_kotlin.$_$.da;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.y3;
  var Unit_getInstance = kotlin_kotlin.$_$.i4;
  var emptyList = kotlin_kotlin.$_$.x5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.wd;
  var classMeta = kotlin_kotlin.$_$.v8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.sa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var objectCreate = kotlin_kotlin.$_$.aa;
  var captureStack = kotlin_kotlin.$_$.p8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException = kotlin_kotlin.$_$.uc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var KClass = kotlin_kotlin.$_$.oa;
  var isInterface = kotlin_kotlin.$_$.p9;
  var Triple = kotlin_kotlin.$_$.cd;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.xc;
  var Entry = kotlin_kotlin.$_$.x4;
  var LinkedHashMap = kotlin_kotlin.$_$.u4;
  var MutableMap = kotlin_kotlin.$_$.b5;
  var Map = kotlin_kotlin.$_$.y4;
  var HashMap = kotlin_kotlin.$_$.s4;
  var LinkedHashSet = kotlin_kotlin.$_$.v4;
  var MutableSet = kotlin_kotlin.$_$.c5;
  var Set = kotlin_kotlin.$_$.d5;
  var HashSet = kotlin_kotlin.$_$.t4;
  var ArrayList = kotlin_kotlin.$_$.q4;
  var MutableList = kotlin_kotlin.$_$.z4;
  var List = kotlin_kotlin.$_$.w4;
  var Collection = kotlin_kotlin.$_$.r4;
  var copyToArray = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.d2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f2;
  var isObject = kotlin_kotlin.$_$.s9;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.e2;
  var Result = kotlin_kotlin.$_$.yc;
  var ensureNotNull = kotlin_kotlin.$_$.sd;
  var equals = kotlin_kotlin.$_$.y8;
  var getStringHashCode = kotlin_kotlin.$_$.d9;
  var isBlank = kotlin_kotlin.$_$.gb;
  var toList = kotlin_kotlin.$_$.m7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.j7;
  var toBooleanArray = kotlin_kotlin.$_$.i7;
  var withIndex = kotlin_kotlin.$_$.r7;
  var to = kotlin_kotlin.$_$.ge;
  var toMap = kotlin_kotlin.$_$.n7;
  var lazy_0 = kotlin_kotlin.$_$.xd;
  var contentEquals = kotlin_kotlin.$_$.k5;
  var until = kotlin_kotlin.$_$.na;
  var joinToString = kotlin_kotlin.$_$.k6;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var Long = kotlin_kotlin.$_$.wc;
  var Char = kotlin_kotlin.$_$.oc;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.x1;
  var Duration = kotlin_kotlin.$_$.mc;
  var Companion_getInstance = kotlin_kotlin.$_$.a4;
  var toIntOrNull = kotlin_kotlin.$_$.ac;
  var hashCode = kotlin_kotlin.$_$.e9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.h9;
  var arrayIterator = kotlin_kotlin.$_$.n8;
  var asList = kotlin_kotlin.$_$.h5;
  var step = kotlin_kotlin.$_$.ma;
  var getValue = kotlin_kotlin.$_$.g6;
  var longArray = kotlin_kotlin.$_$.w9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.c4;
  var get_lastIndex = kotlin_kotlin.$_$.n6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.qd;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var KTypeParameter = kotlin_kotlin.$_$.ta;
  var fillArrayVal = kotlin_kotlin.$_$.z8;
  var booleanArray = kotlin_kotlin.$_$.o8;
  var emptyMap = kotlin_kotlin.$_$.y5;
  var contentHashCode = kotlin_kotlin.$_$.l5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.b4;
  var isCharArray = kotlin_kotlin.$_$.k9;
  var charArray = kotlin_kotlin.$_$.r8;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.u3;
  var isDoubleArray = kotlin_kotlin.$_$.m9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var isFloatArray = kotlin_kotlin.$_$.n9;
  var isLongArray = kotlin_kotlin.$_$.q9;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.f3;
  var ULongArray = kotlin_kotlin.$_$.hd;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.b3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.d3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w3;
  var isIntArray = kotlin_kotlin.$_$.o9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.f4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.w2;
  var UIntArray = kotlin_kotlin.$_$.fd;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.s2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.u2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.x3;
  var isShortArray = kotlin_kotlin.$_$.t9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.h4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.o3;
  var UShortArray = kotlin_kotlin.$_$.jd;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.k3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.m3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.t3;
  var isByteArray = kotlin_kotlin.$_$.j9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.e4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.n2;
  var UByteArray = kotlin_kotlin.$_$.dd;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.k2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.l2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h2;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var isBooleanArray = kotlin_kotlin.$_$.i9;
  var coerceAtLeast = kotlin_kotlin.$_$.ia;
  var copyOf = kotlin_kotlin.$_$.p5;
  var copyOf_0 = kotlin_kotlin.$_$.r5;
  var copyOf_1 = kotlin_kotlin.$_$.s5;
  var copyOf_2 = kotlin_kotlin.$_$.n5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.g3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.c3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.e3;
  var copyOf_3 = kotlin_kotlin.$_$.u5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.x2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.t2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.v2;
  var copyOf_4 = kotlin_kotlin.$_$.m5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.p3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.l3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.n3;
  var copyOf_5 = kotlin_kotlin.$_$.q5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.o2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.j2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.m2;
  var copyOf_6 = kotlin_kotlin.$_$.o5;
  var Unit = kotlin_kotlin.$_$.ld;
  var trimIndent = kotlin_kotlin.$_$.jc;
  var equals_0 = kotlin_kotlin.$_$.db;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var titlecase = kotlin_kotlin.$_$.wb;
  var isLowerCase = kotlin_kotlin.$_$.hb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.z3;
  var ULong = kotlin_kotlin.$_$.id;
  var UInt = kotlin_kotlin.$_$.gd;
  var UShort = kotlin_kotlin.$_$.kd;
  var UByte = kotlin_kotlin.$_$.ed;
  var mapOf = kotlin_kotlin.$_$.x6;
  var lastOrNull = kotlin_kotlin.$_$.q6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.o6;
  var get_js = kotlin_kotlin.$_$.u9;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.j6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var get_indices_0 = kotlin_kotlin.$_$.i6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.d4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.rd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.z2k(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.f2o(descriptor, index, deserializer, previousValue) : $super.f2o.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.t2n(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.y2k(this, value);
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i2l('type', serializer_0(StringCompanionObject_getInstance()).x2k());
      $this$buildSerialDescriptor.i2l('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.j2l_1.qd() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.c2l_1 = this$0.k2l_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.j2l_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.j2l_1 = baseClass;
    this.k2l_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.l2l_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).m2l = function () {
    return this.j2l_1;
  };
  protoOf(PolymorphicSerializer).x2k = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return this.l2l_1.u1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.j2l_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.o2l(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.m2l());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.n2l(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.m2l());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.x2k();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.f() === 1 ? "Field '" + missingFields.l(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
    this.p2l_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp = tmp0_mapTo;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.c();
      while (tmp0_iterator_0.d()) {
        var item_0 = tmp0_iterator_0.e();
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$3 = tmp_0;
        tmp0_mapTo_0.a(tmp$ret$3);
      }
      tmp = tmp0_mapTo_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, types, serializers) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, types, serializers);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, typeArguments, serializers) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.l(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.l(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.l(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.l(0), serializers.l(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.l(0), serializers.l(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.l(0), serializers.l(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.l(0), serializers.l(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.l(0), serializers.l(1), serializers.l(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = typeArguments.l(0).ce();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.l(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.ee();
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.de();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.r2l_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    var typeArguments = tmp0_mapTo;
    var tmp;
    if (typeArguments.k()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      var cachedResult = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (failOnMissingTypeArgSerializer) {
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_1;
        if (_Result___get_isFailure__impl__jpiriv(cachedResult)) {
          tmp_1 = null;
        } else {
          var tmp_2 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        }
        tmp_0 = tmp_1;
      } else {
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(cachedResult);
        var tmp_3;
        if (exception == null) {
          var tmp_4 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        } else {
          return null;
        }
        tmp_0 = tmp_3;
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_5;
    if (typeArguments.k()) {
      tmp_5 = _this__u8e3s4.t2l(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp1_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, typeArguments, serializers);
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.s2l(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_5;
    var tmp_7;
    if (contextualSerializer == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_7 = (!(contextualSerializer == null) ? isInterface(contextualSerializer, KSerializer) : false) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_7;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().u2l(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().u2l(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().v2l(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().v2l(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, types, serializers);
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, types, serializers);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.x2k().w2l()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.x2l_1 = original;
    this.y2l_1 = kClass;
    this.z2l_1 = this.x2l_1.a2m() + '<' + this.y2l_1.qd() + '>';
  }
  protoOf(ContextDescriptor).b2m = function () {
    return this.x2l_1.b2m();
  };
  protoOf(ContextDescriptor).c2m = function () {
    return this.x2l_1.c2m();
  };
  protoOf(ContextDescriptor).d2m = function () {
    return this.x2l_1.d2m();
  };
  protoOf(ContextDescriptor).w2l = function () {
    return this.x2l_1.w2l();
  };
  protoOf(ContextDescriptor).e2m = function () {
    return this.x2l_1.e2m();
  };
  protoOf(ContextDescriptor).f2m = function (index) {
    return this.x2l_1.f2m(index);
  };
  protoOf(ContextDescriptor).g2m = function (index) {
    return this.x2l_1.g2m(index);
  };
  protoOf(ContextDescriptor).h2m = function (name) {
    return this.x2l_1.h2m(name);
  };
  protoOf(ContextDescriptor).i2m = function (index) {
    return this.x2l_1.i2m(index);
  };
  protoOf(ContextDescriptor).j2m = function (index) {
    return this.x2l_1.j2m(index);
  };
  protoOf(ContextDescriptor).a2m = function () {
    return this.z2l_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.x2l_1, another.x2l_1) ? another.y2l_1.equals(this.y2l_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.y2l_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.z2l_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.y2l_1 + ', original: ' + this.x2l_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.t2l(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x2k();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.y2l_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.k2m_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.o2m_1 = $this_elementDescriptors;
    this.n2m_1 = $this_elementDescriptors.c2m();
  }
  protoOf(elementDescriptors$1$1).d = function () {
    return this.n2m_1 > 0;
  };
  protoOf(elementDescriptors$1$1).e = function () {
    var tmp = this.o2m_1.c2m();
    var tmp1 = this.n2m_1;
    this.n2m_1 = tmp1 - 1 | 0;
    return this.o2m_1.g2m(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.p2m_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).c = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.p2m_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.d2l_1.f(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.a2l_1 = serialName;
    this.b2l_1 = false;
    this.c2l_1 = emptyList();
    this.d2l_1 = ArrayList_init_$Create$_0();
    this.e2l_1 = HashSet_init_$Create$();
    this.f2l_1 = ArrayList_init_$Create$_0();
    this.g2l_1 = ArrayList_init_$Create$_0();
    this.h2l_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).q2m = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.e2l_1.a(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.d2l_1.a(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.f2l_1.a(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.g2l_1.a(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.h2l_1.a(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).i2l = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.q2m(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.q2m.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.d2l_1.f(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return $this.c2n_1.u1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.b2n_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.i2m(it) + ': ' + this$0.g2m(it).a2m();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.r2m_1 = serialName;
    this.s2m_1 = kind;
    this.t2m_1 = elementsCount;
    this.u2m_1 = builder.c2l_1;
    this.v2m_1 = toHashSet(builder.d2l_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.d2l_1;
    tmp.w2m_1 = copyToArray(tmp0_toTypedArray);
    this.x2m_1 = compactArray(builder.f2l_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.g2l_1;
    tmp_0.y2m_1 = copyToArray(tmp0_toTypedArray_0);
    this.z2m_1 = toBooleanArray(builder.h2l_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.w2m_1);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.s2_1, item.r2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp_1.a2n_1 = toMap(tmp0_mapTo);
    this.b2n_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.c2n_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).a2m = function () {
    return this.r2m_1;
  };
  protoOf(SerialDescriptorImpl).e2m = function () {
    return this.s2m_1;
  };
  protoOf(SerialDescriptorImpl).c2m = function () {
    return this.t2m_1;
  };
  protoOf(SerialDescriptorImpl).b2m = function () {
    return this.u2m_1;
  };
  protoOf(SerialDescriptorImpl).d2n = function () {
    return this.v2m_1;
  };
  protoOf(SerialDescriptorImpl).i2m = function (index) {
    return getChecked(this.w2m_1, index);
  };
  protoOf(SerialDescriptorImpl).h2m = function (name) {
    var tmp0_elvis_lhs = this.a2n_1.f2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).f2m = function (index) {
    return getChecked(this.y2m_1, index);
  };
  protoOf(SerialDescriptorImpl).g2m = function (index) {
    return getChecked(this.x2m_1, index);
  };
  protoOf(SerialDescriptorImpl).j2m = function (index) {
    return getChecked_0(this.z2m_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.a2m() === other.a2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.b2n_1, other.b2n_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.c2m() === other.c2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.c2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.g2m(index).a2m() === other.g2m(index).a2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.g2m(index).e2m(), other.g2m(index).e2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.t2m_1);
    var tmp_0 = this.r2m_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).qd());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).e2n = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).f2n = function () {
    return true;
  };
  protoOf(AbstractDecoder).g2n = function () {
    return null;
  };
  protoOf(AbstractDecoder).h2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).i2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).j2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).k2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).l2n = function () {
    var tmp = this.e2n();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).m2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).n2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).o2n = function () {
    var tmp = this.e2n();
    return tmp instanceof Char ? tmp.l5_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).p2n = function () {
    var tmp = this.e2n();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).q2n = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).r2n = function (deserializer, previousValue) {
    return this.s2n(deserializer);
  };
  protoOf(AbstractDecoder).t2n = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).u2n = function (descriptor) {
  };
  protoOf(AbstractDecoder).v2n = function (descriptor, index) {
    return this.h2n();
  };
  protoOf(AbstractDecoder).w2n = function (descriptor, index) {
    return this.i2n();
  };
  protoOf(AbstractDecoder).x2n = function (descriptor, index) {
    return this.j2n();
  };
  protoOf(AbstractDecoder).y2n = function (descriptor, index) {
    return this.k2n();
  };
  protoOf(AbstractDecoder).z2n = function (descriptor, index) {
    return this.l2n();
  };
  protoOf(AbstractDecoder).a2o = function (descriptor, index) {
    return this.m2n();
  };
  protoOf(AbstractDecoder).b2o = function (descriptor, index) {
    return this.n2n();
  };
  protoOf(AbstractDecoder).c2o = function (descriptor, index) {
    return this.o2n();
  };
  protoOf(AbstractDecoder).d2o = function (descriptor, index) {
    return this.p2n();
  };
  protoOf(AbstractDecoder).e2o = function (descriptor, index) {
    return this.q2n(descriptor.g2m(index));
  };
  protoOf(AbstractDecoder).f2o = function (descriptor, index, deserializer, previousValue) {
    return this.r2n(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).t2n = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).u2n = function (descriptor) {
  };
  protoOf(AbstractEncoder).l2o = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).m2o = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).n2o = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).o2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).p2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).q2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).r2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).s2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).t2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).u2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).v2o = function (value) {
    return this.m2o(new Char(value));
  };
  protoOf(AbstractEncoder).w2o = function (value) {
    return this.m2o(value);
  };
  protoOf(AbstractEncoder).x2o = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).y2o = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.o2o(value);
    }
  };
  protoOf(AbstractEncoder).z2o = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.p2o(value);
    }
  };
  protoOf(AbstractEncoder).a2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.q2o(value);
    }
  };
  protoOf(AbstractEncoder).b2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.r2o(value);
    }
  };
  protoOf(AbstractEncoder).c2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.s2o(value);
    }
  };
  protoOf(AbstractEncoder).d2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.t2o(value);
    }
  };
  protoOf(AbstractEncoder).e2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.u2o(value);
    }
  };
  protoOf(AbstractEncoder).f2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.v2o(value);
    }
  };
  protoOf(AbstractEncoder).g2p = function (descriptor, index, value) {
    if (this.l2o(descriptor, index)) {
      this.w2o(value);
    }
  };
  protoOf(AbstractEncoder).h2p = function (descriptor, index) {
    return this.l2o(descriptor, index) ? this.x2o(descriptor.g2m(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).i2p = function (descriptor, index, serializer, value) {
    if (this.l2o(descriptor, index)) {
      this.j2p(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.n2p_1 = -1;
    this.o2p_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.d2o($this.x2k(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.g2o($this.x2k(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).y2k = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.x2k();
    var composite = encoder.t2n(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.g2p(this.x2k(), 0, actualSerializer.x2k().a2m());
    var tmp = this.x2k();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.i2p(tmp, 1, tmp$ret$0, value);
    composite.u2n(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).z2k = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.x2k();
    var composite = decoder.t2n(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.i2o()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.j2o(this.x2k());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.d2o(this.x2k(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.g2o(this.x2k(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = isObject(tmp) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.u2n(tmp0_decodeStructure);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).n2l = function (decoder, klassName) {
    return decoder.h2o().p2p(this.m2l(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).o2l = function (encoder, value) {
    return encoder.h2o().q2p(this.m2l(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.qd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.qd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.r2p_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).x2k = function () {
    return this.r2p_1;
  };
  protoOf(DurationSerializer).s2p = function (encoder, value) {
    encoder.w2o(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).y2k = function (encoder, value) {
    return this.s2p(encoder, value instanceof Duration ? value.k6_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).t2p = function (decoder) {
    return Companion_getInstance().i6(decoder.p2n());
  };
  protoOf(DurationSerializer).z2k = function (decoder) {
    return new Duration(this.t2p(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).a2m = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).a2m = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).a2m = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).a2m = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.w2p_1 = elementDescriptor;
    this.x2p_1 = 1;
  }
  protoOf(ListLikeDescriptor).e2m = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).c2m = function () {
    return this.x2p_1;
  };
  protoOf(ListLikeDescriptor).i2m = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).h2m = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).j2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).f2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).g2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.w2p_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.w2p_1, other.w2p_1) ? this.a2m() === other.a2m() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.w2p_1), 31) + getStringHashCode(this.a2m()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.a2m() + '(' + this.w2p_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.c2q_1 = serialName;
    this.d2q_1 = keyDescriptor;
    this.e2q_1 = valueDescriptor;
    this.f2q_1 = 2;
  }
  protoOf(MapLikeDescriptor).a2m = function () {
    return this.c2q_1;
  };
  protoOf(MapLikeDescriptor).e2m = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).c2m = function () {
    return this.f2q_1;
  };
  protoOf(MapLikeDescriptor).i2m = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).h2m = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).j2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).f2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).g2m = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.a2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.d2q_1;
        break;
      case 1:
        tmp = this.e2q_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.a2m() === other.a2m()))
      return false;
    if (!equals(this.d2q_1, other.d2q_1))
      return false;
    if (!equals(this.e2q_1, other.e2q_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.a2m());
    result = imul(31, result) + hashCode(this.d2q_1) | 0;
    result = imul(31, result) + hashCode(this.e2q_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.a2m() + '(' + this.d2q_1 + ', ' + this.e2q_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.k2q_1 = primitive.a2m() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).a2m = function () {
    return this.k2q_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.m2q_1 = new ArrayListClassDesc(element.x2k());
  }
  protoOf(ArrayListSerializer).x2k = function () {
    return this.m2q_1;
  };
  protoOf(ArrayListSerializer).v13 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).n2q = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(ArrayListSerializer).o2q = function (_this__u8e3s4) {
    return this.n2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).p2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).q2q = function (_this__u8e3s4) {
    return this.p2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).r2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).s2q = function (_this__u8e3s4) {
    return this.r2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).t2q = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(ArrayListSerializer).u2q = function (_this__u8e3s4, size) {
    return this.t2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).v2q = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.la(index, element);
  };
  protoOf(ArrayListSerializer).w2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.v2q(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.h2r_1 = new HashSetClassDesc(eSerializer.x2k());
  }
  protoOf(HashSetSerializer).x2k = function () {
    return this.h2r_1;
  };
  protoOf(HashSetSerializer).v13 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).i2r = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(HashSetSerializer).o2q = function (_this__u8e3s4) {
    return this.i2r(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).j2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).q2q = function (_this__u8e3s4) {
    return this.j2r(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).k2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).s2q = function (_this__u8e3s4) {
    return this.k2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).l2r = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).u2q = function (_this__u8e3s4, size) {
    return this.l2r(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).m2r = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(HashSetSerializer).w2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.m2r(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.o2r_1 = new LinkedHashSetClassDesc(eSerializer.x2k());
  }
  protoOf(LinkedHashSetSerializer).x2k = function () {
    return this.o2r_1;
  };
  protoOf(LinkedHashSetSerializer).v13 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).p2r = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(LinkedHashSetSerializer).o2q = function (_this__u8e3s4) {
    return this.p2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).q2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).q2q = function (_this__u8e3s4) {
    return this.q2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).k2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).s2q = function (_this__u8e3s4) {
    return this.k2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).r2r = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).u2q = function (_this__u8e3s4, size) {
    return this.r2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).s2r = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(LinkedHashSetSerializer).w2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.s2r(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.v2r_1 = new HashMapClassDesc(kSerializer.x2k(), vSerializer.x2k());
  }
  protoOf(HashMapSerializer).x2k = function () {
    return this.v2r_1;
  };
  protoOf(HashMapSerializer).w2r = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(HashMapSerializer).x2r = function (_this__u8e3s4) {
    return this.w2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).y2r = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.s1().c();
  };
  protoOf(HashMapSerializer).z2r = function (_this__u8e3s4) {
    return this.y2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).v13 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).a2s = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  protoOf(HashMapSerializer).o2q = function (_this__u8e3s4) {
    return this.a2s(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).b2s = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).q2q = function (_this__u8e3s4) {
    return this.b2s(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).c2s = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).s2q = function (_this__u8e3s4) {
    return this.c2s((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d2s = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).u2q = function (_this__u8e3s4, size) {
    return this.d2s(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.i2s_1 = new LinkedHashMapClassDesc(kSerializer.x2k(), vSerializer.x2k());
  }
  protoOf(LinkedHashMapSerializer).x2k = function () {
    return this.i2s_1;
  };
  protoOf(LinkedHashMapSerializer).w2r = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(LinkedHashMapSerializer).x2r = function (_this__u8e3s4) {
    return this.w2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).y2r = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.s1().c();
  };
  protoOf(LinkedHashMapSerializer).z2r = function (_this__u8e3s4) {
    return this.y2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).v13 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).j2s = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  protoOf(LinkedHashMapSerializer).o2q = function (_this__u8e3s4) {
    return this.j2s(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).k2s = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).q2q = function (_this__u8e3s4) {
    return this.k2s(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).c2s = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).s2q = function (_this__u8e3s4) {
    return this.c2s((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).l2s = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).u2q = function (_this__u8e3s4, size) {
    return this.l2s(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.n2s_1 = kClass;
    this.o2s_1 = new ArrayClassDesc(eSerializer.x2k());
  }
  protoOf(ReferenceArraySerializer).x2k = function () {
    return this.o2s_1;
  };
  protoOf(ReferenceArraySerializer).p2s = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).x2r = function (_this__u8e3s4) {
    return this.p2s((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).q2s = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).z2r = function (_this__u8e3s4) {
    return this.q2s((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).v13 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).r2s = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(ReferenceArraySerializer).o2q = function (_this__u8e3s4) {
    return this.r2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).s2s = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.n2s_1);
  };
  protoOf(ReferenceArraySerializer).q2q = function (_this__u8e3s4) {
    return this.s2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).t2s = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).s2q = function (_this__u8e3s4) {
    return this.t2s((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).u2s = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(ReferenceArraySerializer).u2q = function (_this__u8e3s4, size) {
    return this.u2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).v2s = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.la(index, element);
  };
  protoOf(ReferenceArraySerializer).w2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.v2s(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).y2q = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(CollectionSerializer).x2r = function (_this__u8e3s4) {
    return this.y2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).z2q = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  protoOf(CollectionSerializer).z2r = function (_this__u8e3s4) {
    return this.z2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.e2s_1 = keySerializer;
    this.f2s_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).c2r = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.d2r(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).d2r = function (decoder, index, builder, checkIndex) {
    var key = decoder.g2o(this.x2k(), index, this.e2s_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.j2o(this.x2k());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp0_also === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = tmp0_also;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.b2(key)) {
      var tmp_2 = this.f2s_1.x2k().e2m();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.f2o(this.x2k(), vIndex, this.f2s_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.g2o(this.x2k(), vIndex, this.f2s_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.j3(key, value);
  };
  protoOf(MapLikeSerializer).b2r = function (encoder, value) {
    var size = this.x2r(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.x2k();
    var composite = encoder.l2p(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.z2r(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.r1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.u1();
      var tmp = this.x2k();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.i2p(tmp, tmp0, this.e2s_1, k);
      var tmp_0 = this.x2k();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.i2p(tmp_0, tmp1, this.f2s_1, v);
    }
    composite.u2n(tmp0_encodeCollection);
  };
  protoOf(MapLikeSerializer).y2k = function (encoder, value) {
    return this.b2r(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.a2r_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).b2r = function (encoder, value) {
    var size = this.x2r(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.x2k();
    var composite = encoder.l2p(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.z2r(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.i2p(this.x2k(), index, this.a2r_1, iterator.e());
      }
       while (inductionVariable < size);
    composite.u2n(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).y2k = function (encoder, value) {
    return this.b2r(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).c2r = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.d2r(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).d2r = function (decoder, index, builder, checkIndex) {
    this.w2q(builder, index, decoder.g2o(this.x2k(), index, this.a2r_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.k2o($this.x2k());
    $this.u2q(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).f2r = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.s2q(previous);
    var builder = tmp1_elvis_lhs == null ? this.v13() : tmp1_elvis_lhs;
    var startIndex = this.o2q(builder);
    var compositeDecoder = decoder.t2n(this.x2k());
    if (compositeDecoder.i2o()) {
      this.c2r(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.j2o(this.x2k());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        this.e2r(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.u2n(this.x2k());
    return this.q2q(builder);
  };
  protoOf(AbstractCollectionSerializer).z2k = function (decoder) {
    return this.f2r(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).e2r = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.d2r(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.d2r.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.x2s_1 = new PrimitiveArrayDescriptor(primitiveSerializer.x2k());
  }
  protoOf(PrimitiveArraySerializer).x2k = function () {
    return this.x2s_1;
  };
  protoOf(PrimitiveArraySerializer).o2q = function (_this__u8e3s4) {
    return _this__u8e3s4.y2s();
  };
  protoOf(PrimitiveArraySerializer).q2q = function (_this__u8e3s4) {
    return _this__u8e3s4.db();
  };
  protoOf(PrimitiveArraySerializer).u2q = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(PrimitiveArraySerializer).z2s = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).z2r = function (_this__u8e3s4) {
    return this.z2s((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w2q = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  protoOf(PrimitiveArraySerializer).v13 = function () {
    return this.s2q(this.a2t());
  };
  protoOf(PrimitiveArraySerializer).c2t = function (encoder, value) {
    var size = this.x2r(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.x2s_1;
    var composite = encoder.l2p(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.b2t(composite, value, size);
    composite.u2n(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).y2k = function (encoder, value) {
    return this.c2t(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).b2r = function (encoder, value) {
    return this.c2t(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z2k = function (decoder) {
    return this.f2r(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).d2t = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.y2s() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.eb(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.eb.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.e2t_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).s6(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.i2t_1[slot] = $this.i2t_1[slot].ih((new Long(1, 0)).s6(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.i2t_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.i2t_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.hh());
          slotMarks = slotMarks.ih((new Long(1, 0)).s6(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.g2t_1($this.f2t_1, index)) {
            $this.i2t_1[slot] = slotMarks;
            return index;
          }
        }
        $this.i2t_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.f2t_1 = descriptor;
    this.g2t_1 = readIfAbsent;
    var elementsCount = this.f2t_1.c2m();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).s6(elementsCount);
      }
      tmp.h2t_1 = tmp_0;
      this.i2t_1 = Companion_getInstance_8().e2t_1;
    } else {
      this.h2t_1 = new Long(0, 0);
      this.i2t_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).j2t = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.h2t_1 = this.h2t_1.ih((new Long(1, 0)).s6(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).k2t = function () {
    var elementsCount = this.f2t_1.c2m();
    while (!this.h2t_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.h2t_1.hh());
      this.h2t_1 = this.h2t_1.ih((new Long(1, 0)).s6(index));
      if (this.g2t_1(this.f2t_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_7();
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.x2t_1 = true;
  }
  protoOf(InlineClassDescriptor).d2m = function () {
    return this.x2t_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.a2m() === other.a2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.x2t_1 ? contentEquals(this.k2u(), other.k2u()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.c2m() === other.c2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.c2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.g2m(index).a2m() === other.g2m(index).a2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.g2m(index).e2m(), other.g2m(index).e2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.m2u_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).n2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.m2u_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).x2k = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).y2k = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).z2k = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.p2u_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).h2o = function () {
    return this.p2u_1;
  };
  protoOf(NoOpEncoder).m2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).n2o = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).o2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).p2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).q2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).r2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).s2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).t2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).u2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).v2o = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).w2o = function (value) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function NullableSerializer(serializer) {
    this.q2u_1 = serializer;
    this.r2u_1 = new SerialDescriptorForNullable(this.q2u_1.x2k());
  }
  protoOf(NullableSerializer).x2k = function () {
    return this.r2u_1;
  };
  protoOf(NullableSerializer).s2u = function (encoder, value) {
    if (!(value == null)) {
      encoder.k2p();
      encoder.j2p(this.q2u_1, value);
    } else {
      encoder.n2o();
    }
  };
  protoOf(NullableSerializer).y2k = function (encoder, value) {
    return this.s2u(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).z2k = function (decoder) {
    return decoder.f2n() ? decoder.s2n(this.q2u_1) : decoder.g2n();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q2u_1, other.q2u_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q2u_1);
  };
  function SerialDescriptorForNullable(original) {
    this.k2m_1 = original;
    this.l2m_1 = this.k2m_1.a2m() + '?';
    this.m2m_1 = cachedSerialNames(this.k2m_1);
  }
  protoOf(SerialDescriptorForNullable).b2m = function () {
    return this.k2m_1.b2m();
  };
  protoOf(SerialDescriptorForNullable).c2m = function () {
    return this.k2m_1.c2m();
  };
  protoOf(SerialDescriptorForNullable).d2m = function () {
    return this.k2m_1.d2m();
  };
  protoOf(SerialDescriptorForNullable).e2m = function () {
    return this.k2m_1.e2m();
  };
  protoOf(SerialDescriptorForNullable).f2m = function (index) {
    return this.k2m_1.f2m(index);
  };
  protoOf(SerialDescriptorForNullable).g2m = function (index) {
    return this.k2m_1.g2m(index);
  };
  protoOf(SerialDescriptorForNullable).h2m = function (name) {
    return this.k2m_1.h2m(name);
  };
  protoOf(SerialDescriptorForNullable).i2m = function (index) {
    return this.k2m_1.i2m(index);
  };
  protoOf(SerialDescriptorForNullable).j2m = function (index) {
    return this.k2m_1.j2m(index);
  };
  protoOf(SerialDescriptorForNullable).a2m = function () {
    return this.l2m_1;
  };
  protoOf(SerialDescriptorForNullable).d2n = function () {
    return this.m2m_1;
  };
  protoOf(SerialDescriptorForNullable).w2l = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.k2m_1, other.k2m_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.k2m_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.k2m_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c2l_1 = this$0.u2u_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.t2u_1 = objectInstance;
    this.u2u_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2u_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).x2k = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return this.v2u_1.u1();
  };
  protoOf(ObjectSerializer).y2k = function (encoder, value) {
    encoder.t2n(this.x2k()).u2n(this.x2k());
  };
  protoOf(ObjectSerializer).z2k = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.x2k();
    var composite = decoder.t2n(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.j2o(this.x2k());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.u2n(tmp0_decodeStructure);
    return this.t2u_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.x2k();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.d2n();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.c2m());
    var inductionVariable = 0;
    var last = _this__u8e3s4.c2m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.i2m(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ce();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.k())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.i2m(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.a2m());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return $this.h2u_1.u1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return $this.j2u_1.u1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.c2u_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.c2u_1[i];
        indices.j3(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.z2t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2u();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.z2t_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2u();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.d()) {
          var item = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.x2k();
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.k2u());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.i2m(i) + ': ' + this$0.g2m(i).a2m();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.y2t_1 = serialName;
    this.z2t_1 = generatedSerializer;
    this.a2u_1 = elementsCount;
    this.b2u_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.a2u_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.c2u_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.a2u_1;
    tmp_3.d2u_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.e2u_1 = null;
    this.f2u_1 = booleanArray(this.a2u_1);
    this.g2u_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.h2u_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.i2u_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.j2u_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).a2m = function () {
    return this.y2t_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).c2m = function () {
    return this.a2u_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).e2m = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).b2m = function () {
    var tmp0_elvis_lhs = this.e2u_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).d2n = function () {
    return this.g2u_1.g2();
  };
  protoOf(PluginGeneratedSerialDescriptor).k2u = function () {
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return this.i2u_1.u1();
  };
  protoOf(PluginGeneratedSerialDescriptor).l2u = function (name, isOptional) {
    this.b2u_1 = this.b2u_1 + 1 | 0;
    this.c2u_1[this.b2u_1] = name;
    this.f2u_1[this.b2u_1] = isOptional;
    this.d2u_1[this.b2u_1] = null;
    if (this.b2u_1 === (this.a2u_1 - 1 | 0)) {
      this.g2u_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).g2m = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).x2k();
  };
  protoOf(PluginGeneratedSerialDescriptor).j2m = function (index) {
    return getChecked_0(this.f2u_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).f2m = function (index) {
    var tmp0_elvis_lhs = getChecked(this.d2u_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).i2m = function (index) {
    return getChecked(this.c2u_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).h2m = function (name) {
    var tmp0_elvis_lhs = this.g2u_1.f2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.a2m() === other.a2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.k2u(), other.k2u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.c2m() === other.c2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.c2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.g2m(index).a2m() === other.g2m(index).a2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.g2m(index).e2m(), other.g2m(index).e2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.a2u_1);
    var tmp_0 = this.a2m() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.a2m());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous = accumulator;
      var tmp = imul(31, tmp0_anonymous);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.a2m();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0_anonymous_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.e2m();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.k2u();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).z2u = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.z2u((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a2v = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.a2v((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a2t = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).b2v = function (decoder, index, builder, checkIndex) {
    builder.e2v(decoder.c2o(this.x2s_1, index));
  };
  protoOf(CharArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.b2v(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).f2v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.f2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).b2t = function (encoder, content, size) {
    return this.f2v(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  protoOf(DoubleArraySerializer_0).i2v = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.i2v((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j2v = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.j2v((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).a2t = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).k2v = function (decoder, index, builder, checkIndex) {
    builder.n2v(decoder.b2o(this.x2s_1, index));
  };
  protoOf(DoubleArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.k2v(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o2v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.e2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).b2t = function (encoder, content, size) {
    return this.o2v(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  protoOf(FloatArraySerializer_0).r2v = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.r2v((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).s2v = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.s2v((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).a2t = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).t2v = function (decoder, index, builder, checkIndex) {
    builder.w2v(decoder.a2o(this.x2s_1, index));
  };
  protoOf(FloatArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.t2v(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).x2v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.d2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).b2t = function (encoder, content, size) {
    return this.x2v(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).a2w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.a2w((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).b2w = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.b2w((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).a2t = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).c2w = function (decoder, index, builder, checkIndex) {
    builder.f2w(decoder.z2n(this.x2s_1, index));
  };
  protoOf(LongArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.c2w(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.c2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).b2t = function (encoder, content, size) {
    return this.g2w(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).j2w = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.j2w(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.u8_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k2w = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.k2w(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.u8_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l2w = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).a2t = function () {
    return new ULongArray(this.l2w());
  };
  protoOf(ULongArraySerializer_0).m2w = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.e2o(this.x2s_1, index).l2n();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.p2w(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.m2w(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.h2p(this.x2s_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.s2o(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).b2t = function (encoder, content, size) {
    return this.q2w(encoder, content instanceof ULongArray ? content.u8_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  protoOf(IntArraySerializer_0).t2w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.t2w((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).u2w = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.u2w((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).a2t = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).v2w = function (decoder, index, builder, checkIndex) {
    builder.y2w(decoder.y2n(this.x2s_1, index));
  };
  protoOf(IntArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.v2w(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.b2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).b2t = function (encoder, content, size) {
    return this.z2w(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).c2x = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.c2x(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d2x = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.d2x(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e2x = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).a2t = function () {
    return new UIntArray(this.e2x());
  };
  protoOf(UIntArraySerializer_0).f2x = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.e2o(this.x2s_1, index).k2n();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.i2x(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.f2x(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).j2x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.h2p(this.x2s_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.r2o(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).b2t = function (encoder, content, size) {
    return this.j2x(encoder, content instanceof UIntArray ? content.i8_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_getInstance()));
  }
  protoOf(ShortArraySerializer_0).m2x = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.m2x((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n2x = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.n2x((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).a2t = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).o2x = function (decoder, index, builder, checkIndex) {
    builder.r2x(decoder.x2n(this.x2s_1, index));
  };
  protoOf(ShortArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.o2x(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).s2x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.a2p(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).b2t = function (encoder, content, size) {
    return this.s2x(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).v2x = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.v2x(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.g9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w2x = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.w2x(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.g9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x2x = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).a2t = function () {
    return new UShortArray(this.x2x());
  };
  protoOf(UShortArraySerializer_0).y2x = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.e2o(this.x2s_1, index).j2n();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.b2y(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.y2x(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).c2y = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.h2p(this.x2s_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.q2o(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).b2t = function (encoder, content, size) {
    return this.c2y(encoder, content instanceof UShortArray ? content.g9_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_getInstance()));
  }
  protoOf(ByteArraySerializer_0).f2y = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.f2y((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).g2y = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.g2y((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).a2t = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h2y = function (decoder, index, builder, checkIndex) {
    builder.k2y(decoder.w2n(this.x2s_1, index));
  };
  protoOf(ByteArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.h2y(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).l2y = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.z2o(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).b2t = function (encoder, content, size) {
    return this.l2y(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).o2y = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.o2y(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.v7_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p2y = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.p2y(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.v7_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q2y = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).a2t = function () {
    return new UByteArray(this.q2y());
  };
  protoOf(UByteArraySerializer_0).r2y = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.e2o(this.x2s_1, index).i2n();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.u2y(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.r2y(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).v2y = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.h2p(this.x2s_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.p2o(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).b2t = function (encoder, content, size) {
    return this.v2y(encoder, content instanceof UByteArray ? content.v7_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_getInstance()));
  }
  protoOf(BooleanArraySerializer_0).y2y = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).x2r = function (_this__u8e3s4) {
    return this.y2y((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z2y = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).s2q = function (_this__u8e3s4) {
    return this.z2y((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).a2t = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).a2z = function (decoder, index, builder, checkIndex) {
    builder.d2z(decoder.v2n(this.x2s_1, index));
  };
  protoOf(BooleanArraySerializer_0).d2r = function (decoder, index, builder, checkIndex) {
    return this.a2z(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e2z = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.y2o(this.x2s_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).b2t = function (encoder, content, size) {
    return this.e2z(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2v_1 = bufferWithData;
    this.d2v_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(CharArrayBuilder).y2s = function () {
    return this.d2v_1;
  };
  protoOf(CharArrayBuilder).eb = function (requiredCapacity) {
    if (this.c2v_1.length < requiredCapacity)
      this.c2v_1 = copyOf(this.c2v_1, coerceAtLeast(requiredCapacity, imul(this.c2v_1.length, 2)));
  };
  protoOf(CharArrayBuilder).e2v = function (c) {
    this.d2t();
    var tmp = this.c2v_1;
    var tmp1 = this.d2v_1;
    this.d2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).db = function () {
    return copyOf(this.c2v_1, this.d2v_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l2v_1 = bufferWithData;
    this.m2v_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(DoubleArrayBuilder).y2s = function () {
    return this.m2v_1;
  };
  protoOf(DoubleArrayBuilder).eb = function (requiredCapacity) {
    if (this.l2v_1.length < requiredCapacity)
      this.l2v_1 = copyOf_0(this.l2v_1, coerceAtLeast(requiredCapacity, imul(this.l2v_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).n2v = function (c) {
    this.d2t();
    var tmp = this.l2v_1;
    var tmp1 = this.m2v_1;
    this.m2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).db = function () {
    return copyOf_0(this.l2v_1, this.m2v_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u2v_1 = bufferWithData;
    this.v2v_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(FloatArrayBuilder).y2s = function () {
    return this.v2v_1;
  };
  protoOf(FloatArrayBuilder).eb = function (requiredCapacity) {
    if (this.u2v_1.length < requiredCapacity)
      this.u2v_1 = copyOf_1(this.u2v_1, coerceAtLeast(requiredCapacity, imul(this.u2v_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).w2v = function (c) {
    this.d2t();
    var tmp = this.u2v_1;
    var tmp1 = this.v2v_1;
    this.v2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).db = function () {
    return copyOf_1(this.u2v_1, this.v2v_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2w_1 = bufferWithData;
    this.e2w_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(LongArrayBuilder).y2s = function () {
    return this.e2w_1;
  };
  protoOf(LongArrayBuilder).eb = function (requiredCapacity) {
    if (this.d2w_1.length < requiredCapacity)
      this.d2w_1 = copyOf_2(this.d2w_1, coerceAtLeast(requiredCapacity, imul(this.d2w_1.length, 2)));
  };
  protoOf(LongArrayBuilder).f2w = function (c) {
    this.d2t();
    var tmp = this.d2w_1;
    var tmp1 = this.e2w_1;
    this.e2w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).db = function () {
    return copyOf_2(this.d2w_1, this.e2w_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n2w_1 = bufferWithData;
    this.o2w_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.eb(10);
  }
  protoOf(ULongArrayBuilder).y2s = function () {
    return this.o2w_1;
  };
  protoOf(ULongArrayBuilder).eb = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.n2w_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.n2w_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.n2w_1), 2));
      tmp.n2w_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(ULongArrayBuilder).p2w = function (c) {
    this.d2t();
    var tmp = this.n2w_1;
    var tmp1 = this.o2w_1;
    this.o2w_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).f2z = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.n2w_1;
    var tmp1_copyOf = this.o2w_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(ULongArrayBuilder).db = function () {
    return new ULongArray(this.f2z());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2w_1 = bufferWithData;
    this.x2w_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(IntArrayBuilder).y2s = function () {
    return this.x2w_1;
  };
  protoOf(IntArrayBuilder).eb = function (requiredCapacity) {
    if (this.w2w_1.length < requiredCapacity)
      this.w2w_1 = copyOf_3(this.w2w_1, coerceAtLeast(requiredCapacity, imul(this.w2w_1.length, 2)));
  };
  protoOf(IntArrayBuilder).y2w = function (c) {
    this.d2t();
    var tmp = this.w2w_1;
    var tmp1 = this.x2w_1;
    this.x2w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).db = function () {
    return copyOf_3(this.w2w_1, this.x2w_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g2x_1 = bufferWithData;
    this.h2x_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.eb(10);
  }
  protoOf(UIntArrayBuilder).y2s = function () {
    return this.h2x_1;
  };
  protoOf(UIntArrayBuilder).eb = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.g2x_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.g2x_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.g2x_1), 2));
      tmp.g2x_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UIntArrayBuilder).i2x = function (c) {
    this.d2t();
    var tmp = this.g2x_1;
    var tmp1 = this.h2x_1;
    this.h2x_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).g2z = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.g2x_1;
    var tmp1_copyOf = this.h2x_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UIntArrayBuilder).db = function () {
    return new UIntArray(this.g2z());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2x_1 = bufferWithData;
    this.q2x_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(ShortArrayBuilder).y2s = function () {
    return this.q2x_1;
  };
  protoOf(ShortArrayBuilder).eb = function (requiredCapacity) {
    if (this.p2x_1.length < requiredCapacity)
      this.p2x_1 = copyOf_4(this.p2x_1, coerceAtLeast(requiredCapacity, imul(this.p2x_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).r2x = function (c) {
    this.d2t();
    var tmp = this.p2x_1;
    var tmp1 = this.q2x_1;
    this.q2x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).db = function () {
    return copyOf_4(this.p2x_1, this.q2x_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2x_1 = bufferWithData;
    this.a2y_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.eb(10);
  }
  protoOf(UShortArrayBuilder).y2s = function () {
    return this.a2y_1;
  };
  protoOf(UShortArrayBuilder).eb = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.z2x_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.z2x_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.z2x_1), 2));
      tmp.z2x_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UShortArrayBuilder).b2y = function (c) {
    this.d2t();
    var tmp = this.z2x_1;
    var tmp1 = this.a2y_1;
    this.a2y_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).h2z = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.z2x_1;
    var tmp1_copyOf = this.a2y_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UShortArrayBuilder).db = function () {
    return new UShortArray(this.h2z());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i2y_1 = bufferWithData;
    this.j2y_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(ByteArrayBuilder).y2s = function () {
    return this.j2y_1;
  };
  protoOf(ByteArrayBuilder).eb = function (requiredCapacity) {
    if (this.i2y_1.length < requiredCapacity)
      this.i2y_1 = copyOf_5(this.i2y_1, coerceAtLeast(requiredCapacity, imul(this.i2y_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k2y = function (c) {
    this.d2t();
    var tmp = this.i2y_1;
    var tmp1 = this.j2y_1;
    this.j2y_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).db = function () {
    return copyOf_5(this.i2y_1, this.j2y_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2y_1 = bufferWithData;
    this.t2y_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.eb(10);
  }
  protoOf(UByteArrayBuilder).y2s = function () {
    return this.t2y_1;
  };
  protoOf(UByteArrayBuilder).eb = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.s2y_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.s2y_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.s2y_1), 2));
      tmp.s2y_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UByteArrayBuilder).u2y = function (c) {
    this.d2t();
    var tmp = this.s2y_1;
    var tmp1 = this.t2y_1;
    this.t2y_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).i2z = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.s2y_1;
    var tmp1_copyOf = this.t2y_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UByteArrayBuilder).db = function () {
    return new UByteArray(this.i2z());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b2z_1 = bufferWithData;
    this.c2z_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(BooleanArrayBuilder).y2s = function () {
    return this.c2z_1;
  };
  protoOf(BooleanArrayBuilder).eb = function (requiredCapacity) {
    if (this.b2z_1.length < requiredCapacity)
      this.b2z_1 = copyOf_6(this.b2z_1, coerceAtLeast(requiredCapacity, imul(this.b2z_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).d2z = function (c) {
    this.d2t();
    var tmp = this.b2z_1;
    var tmp1 = this.c2z_1;
    this.c2z_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).db = function () {
    return copyOf_6(this.b2z_1, this.c2z_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().f2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.j2z_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).x2k = function () {
    return this.j2z_1;
  };
  protoOf(StringSerializer).k2z = function (encoder, value) {
    return encoder.w2o(value);
  };
  protoOf(StringSerializer).y2k = function (encoder, value) {
    return this.k2z(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).z2k = function (decoder) {
    return decoder.p2n();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.l2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).x2k = function () {
    return this.l2z_1;
  };
  protoOf(CharSerializer).m2z = function (encoder, value) {
    return encoder.v2o(value);
  };
  protoOf(CharSerializer).y2k = function (encoder, value) {
    return this.m2z(encoder, value instanceof Char ? value.l5_1 : THROW_CCE());
  };
  protoOf(CharSerializer).n2z = function (decoder) {
    return decoder.o2n();
  };
  protoOf(CharSerializer).z2k = function (decoder) {
    return new Char(this.n2z(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).x2k = function () {
    return this.o2z_1;
  };
  protoOf(DoubleSerializer).p2z = function (encoder, value) {
    return encoder.u2o(value);
  };
  protoOf(DoubleSerializer).y2k = function (encoder, value) {
    return this.p2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).z2k = function (decoder) {
    return decoder.n2n();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.q2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).x2k = function () {
    return this.q2z_1;
  };
  protoOf(FloatSerializer).r2z = function (encoder, value) {
    return encoder.t2o(value);
  };
  protoOf(FloatSerializer).y2k = function (encoder, value) {
    return this.r2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).z2k = function (decoder) {
    return decoder.m2n();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).x2k = function () {
    return this.s2z_1;
  };
  protoOf(LongSerializer).t2z = function (encoder, value) {
    return encoder.s2o(value);
  };
  protoOf(LongSerializer).y2k = function (encoder, value) {
    return this.t2z(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).z2k = function (decoder) {
    return decoder.l2n();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.u2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).x2k = function () {
    return this.u2z_1;
  };
  protoOf(IntSerializer).v2z = function (encoder, value) {
    return encoder.r2o(value);
  };
  protoOf(IntSerializer).y2k = function (encoder, value) {
    return this.v2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).z2k = function (decoder) {
    return decoder.k2n();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).x2k = function () {
    return this.w2z_1;
  };
  protoOf(ShortSerializer).x2z = function (encoder, value) {
    return encoder.q2o(value);
  };
  protoOf(ShortSerializer).y2k = function (encoder, value) {
    return this.x2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).z2k = function (decoder) {
    return decoder.j2n();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).x2k = function () {
    return this.y2z_1;
  };
  protoOf(ByteSerializer).z2z = function (encoder, value) {
    return encoder.p2o(value);
  };
  protoOf(ByteSerializer).y2k = function (encoder, value) {
    return this.z2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).z2k = function (decoder) {
    return decoder.i2n();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a30_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).x2k = function () {
    return this.a30_1;
  };
  protoOf(BooleanSerializer).b30 = function (encoder, value) {
    return encoder.o2o(value);
  };
  protoOf(BooleanSerializer).y2k = function (encoder, value) {
    return this.b30(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).z2k = function (decoder) {
    return decoder.h2n();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.c30_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).x2k = function () {
    return this.c30_1.x2k();
  };
  protoOf(UnitSerializer).d30 = function (decoder) {
    this.c30_1.z2k(decoder);
  };
  protoOf(UnitSerializer).z2k = function (decoder) {
    this.d30(decoder);
    return Unit_getInstance();
  };
  protoOf(UnitSerializer).e30 = function (encoder, value) {
    this.c30_1.y2k(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).y2k = function (encoder, value) {
    return this.e30(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.f30_1 = serialName;
    this.g30_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).a2m = function () {
    return this.f30_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).e2m = function () {
    return this.g30_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).c2m = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).i2m = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).h2m = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).j2m = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).g2m = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).f2m = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.f30_1 + ')';
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().g2();
    var tmp0_iterator = keys.c();
    while (tmp0_iterator.d()) {
      var primitive = tmp0_iterator.e();
      var simpleName = capitalize(ensureNotNull(primitive.qd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0_anonymous = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0_anonymous) ? titlecase(tmp0_anonymous) : toString_0(tmp0_anonymous);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().pe(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().se(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ne(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ye(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().me(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().xe(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().we(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().le(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ve(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ke(), serializer_8(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ue(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().je(), serializer_10(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().te(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ie(), serializer_12(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().re(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_getInstance())), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).j30 = function (_this__u8e3s4, index) {
    return this.l30(this.k30(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).l30 = function (nestedName) {
    var tmp0_elvis_lhs = this.o30();
    return this.p30(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).k30 = function (desc, index) {
    return desc.i2m(index);
  };
  protoOf(NamedValueDecoder).p30 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.c31(tag);
    var r = block();
    if (!$this.n30_1) {
      $this.d31();
    }
    $this.n30_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.r2n($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.m30_1 = ArrayList_init_$Create$_0();
    this.n30_1 = false;
  }
  protoOf(TaggedDecoder).h2o = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q30 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r30 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w30 = function (tag) {
    var tmp = this.q30(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y30 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z30 = function (tag) {
    var tmp = this.q30(tag);
    return tmp instanceof Char ? tmp.l5_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a31 = function (tag) {
    var tmp = this.q30(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b31 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.c31(tag);
    return this;
  };
  protoOf(TaggedDecoder).r2n = function (deserializer, previousValue) {
    return this.s2n(deserializer);
  };
  protoOf(TaggedDecoder).q2n = function (descriptor) {
    return this.b31(this.d31(), descriptor);
  };
  protoOf(TaggedDecoder).f2n = function () {
    var tmp0_elvis_lhs = this.o30();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r30(currentTag);
  };
  protoOf(TaggedDecoder).g2n = function () {
    return null;
  };
  protoOf(TaggedDecoder).h2n = function () {
    return this.s30(this.d31());
  };
  protoOf(TaggedDecoder).i2n = function () {
    return this.t30(this.d31());
  };
  protoOf(TaggedDecoder).j2n = function () {
    return this.u30(this.d31());
  };
  protoOf(TaggedDecoder).k2n = function () {
    return this.v30(this.d31());
  };
  protoOf(TaggedDecoder).l2n = function () {
    return this.w30(this.d31());
  };
  protoOf(TaggedDecoder).m2n = function () {
    return this.x30(this.d31());
  };
  protoOf(TaggedDecoder).n2n = function () {
    return this.y30(this.d31());
  };
  protoOf(TaggedDecoder).o2n = function () {
    return this.z30(this.d31());
  };
  protoOf(TaggedDecoder).p2n = function () {
    return this.a31(this.d31());
  };
  protoOf(TaggedDecoder).t2n = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).u2n = function (descriptor) {
  };
  protoOf(TaggedDecoder).v2n = function (descriptor, index) {
    return this.s30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).w2n = function (descriptor, index) {
    return this.t30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).x2n = function (descriptor, index) {
    return this.u30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).y2n = function (descriptor, index) {
    return this.v30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).z2n = function (descriptor, index) {
    return this.w30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).a2o = function (descriptor, index) {
    return this.x30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).b2o = function (descriptor, index) {
    return this.y30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).c2o = function (descriptor, index) {
    return this.z30(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).d2o = function (descriptor, index) {
    return this.a31(this.j30(descriptor, index));
  };
  protoOf(TaggedDecoder).e2o = function (descriptor, index) {
    return this.b31(this.j30(descriptor, index), descriptor.g2m(index));
  };
  protoOf(TaggedDecoder).f2o = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j30(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).o30 = function () {
    return lastOrNull(this.m30_1);
  };
  protoOf(TaggedDecoder).c31 = function (name) {
    this.m30_1.a(name);
  };
  protoOf(TaggedDecoder).d31 = function () {
    var r = this.m30_1.k3(get_lastIndex_0(this.m30_1));
    this.n30_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.e31_1 = key;
    this.f31_1 = value;
  }
  protoOf(MapEntry).r1 = function () {
    return this.e31_1;
  };
  protoOf(MapEntry).u1 = function () {
    return this.f31_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.e31_1 + ', value=' + this.f31_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.e31_1 == null ? 0 : hashCode(this.e31_1);
    result = imul(result, 31) + (this.f31_1 == null ? 0 : hashCode(this.f31_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.e31_1, tmp0_other_with_cast.e31_1))
      return false;
    if (!equals(this.f31_1, tmp0_other_with_cast.f31_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i2l('key', $keySerializer.x2k());
      $this$buildSerialDescriptor.i2l('value', $valueSerializer.x2k());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.i31_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).x2k = function () {
    return this.i31_1;
  };
  protoOf(MapEntrySerializer_0).j31 = function (_this__u8e3s4) {
    return _this__u8e3s4.r1();
  };
  protoOf(MapEntrySerializer_0).k31 = function (_this__u8e3s4) {
    return this.j31((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).l31 = function (_this__u8e3s4) {
    return _this__u8e3s4.u1();
  };
  protoOf(MapEntrySerializer_0).m31 = function (_this__u8e3s4) {
    return this.l31((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).n31 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.i2l('first', $keySerializer.x2k());
      $this$buildClassSerialDescriptor.i2l('second', $valueSerializer.x2k());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.t31_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).x2k = function () {
    return this.t31_1;
  };
  protoOf(PairSerializer_0).u31 = function (_this__u8e3s4) {
    return _this__u8e3s4.f3_1;
  };
  protoOf(PairSerializer_0).k31 = function (_this__u8e3s4) {
    return this.u31(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).v31 = function (_this__u8e3s4) {
    return _this__u8e3s4.g3_1;
  };
  protoOf(PairSerializer_0).m31 = function (_this__u8e3s4) {
    return this.v31(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).n31 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.g2o($this.z31_1, 0, $this.w31_1);
    var b = composite.g2o($this.z31_1, 1, $this.x31_1);
    var c = composite.g2o($this.z31_1, 2, $this.y31_1);
    composite.u2n($this.z31_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.j2o($this.z31_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.g2o($this.z31_1, 0, $this.w31_1);
        } else {
          if (index === 1) {
            b = composite.g2o($this.z31_1, 1, $this.x31_1);
          } else {
            if (index === 2) {
              c = composite.g2o($this.z31_1, 2, $this.y31_1);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.u2n($this.z31_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.i2l('first', this$0.w31_1.x2k());
      $this$buildClassSerialDescriptor.i2l('second', this$0.x31_1.x2k());
      $this$buildClassSerialDescriptor.i2l('third', this$0.y31_1.x2k());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.w31_1 = aSerializer;
    this.x31_1 = bSerializer;
    this.y31_1 = cSerializer;
    var tmp = this;
    tmp.z31_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).x2k = function () {
    return this.z31_1;
  };
  protoOf(TripleSerializer_0).a32 = function (encoder, value) {
    var structuredEncoder = encoder.t2n(this.z31_1);
    structuredEncoder.i2p(this.z31_1, 0, this.w31_1, value.j7_1);
    structuredEncoder.i2p(this.z31_1, 1, this.x31_1, value.k7_1);
    structuredEncoder.i2p(this.z31_1, 2, this.y31_1, value.l7_1);
    structuredEncoder.u2n(this.z31_1);
  };
  protoOf(TripleSerializer_0).y2k = function (encoder, value) {
    return this.a32(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).z2k = function (decoder) {
    var composite = decoder.t2n(this.z31_1);
    if (composite.i2o()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.o31_1 = keySerializer;
    this.p31_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).q31 = function (encoder, value) {
    var structuredEncoder = encoder.t2n(this.x2k());
    structuredEncoder.i2p(this.x2k(), 0, this.o31_1, this.k31(value));
    structuredEncoder.i2p(this.x2k(), 1, this.p31_1, this.m31(value));
    structuredEncoder.u2n(this.x2k());
  };
  protoOf(KeyValueSerializer).y2k = function (encoder, value) {
    return this.q31(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).z2k = function (decoder) {
    var composite = decoder.t2n(this.x2k());
    if (composite.i2o()) {
      var key = composite.g2o(this.x2k(), 0, this.o31_1);
      var value = composite.g2o(this.x2k(), 1, this.p31_1);
      return this.n31(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.j2o(this.x2k());
      Companion_getInstance_7();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          key_0 = composite.g2o(this.x2k(), 0, this.o31_1);
        } else {
          if (idx === 1) {
            value_0 = composite.g2o(this.x2k(), 1, this.p31_1);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.u2n(this.x2k());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.n31(tmp, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.b32_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).x2k = function () {
    return this.b32_1;
  };
  protoOf(ULongSerializer).c32 = function (encoder, value) {
    var tmp = encoder.x2o(this.b32_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.s2o(tmp$ret$0);
  };
  protoOf(ULongSerializer).y2k = function (encoder, value) {
    return this.c32(encoder, value instanceof ULong ? value.p8_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).d32 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.q2n(this.b32_1).l2n();
    return _ULong___init__impl__c78o9k(tmp0_toULong);
  };
  protoOf(ULongSerializer).z2k = function (decoder) {
    return new ULong(this.d32(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.e32_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).x2k = function () {
    return this.e32_1;
  };
  protoOf(UIntSerializer).f32 = function (encoder, value) {
    var tmp = encoder.x2o(this.e32_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.r2o(tmp$ret$0);
  };
  protoOf(UIntSerializer).y2k = function (encoder, value) {
    return this.f32(encoder, value instanceof UInt ? value.c8_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).g32 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.q2n(this.e32_1).k2n();
    return _UInt___init__impl__l7qpdl(tmp0_toUInt);
  };
  protoOf(UIntSerializer).z2k = function (decoder) {
    return new UInt(this.g32(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.h32_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).x2k = function () {
    return this.h32_1;
  };
  protoOf(UShortSerializer).i32 = function (encoder, value) {
    var tmp = encoder.x2o(this.h32_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.q2o(tmp$ret$0);
  };
  protoOf(UShortSerializer).y2k = function (encoder, value) {
    return this.i32(encoder, value instanceof UShort ? value.b9_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).j32 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.q2n(this.h32_1).j2n();
    return _UShort___init__impl__jigrne(tmp0_toUShort);
  };
  protoOf(UShortSerializer).z2k = function (decoder) {
    return new UShort(this.j32(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.k32_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).x2k = function () {
    return this.k32_1;
  };
  protoOf(UByteSerializer).l32 = function (encoder, value) {
    var tmp = encoder.x2o(this.k32_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.p2o(tmp$ret$0);
  };
  protoOf(UByteSerializer).y2k = function (encoder, value) {
    return this.l32(encoder, value instanceof UByte ? value.q7_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).m32 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.q2n(this.k32_1).i2n();
    return _UByte___init__impl__g9hnc4(tmp0_toUByte);
  };
  protoOf(UByteSerializer).z2k = function (decoder) {
    return new UByte(this.m32(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).t2l = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.s2l(kClass, typeArgumentsSerializers) : $super.s2l.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.n32_1 = class2ContextualFactory;
    this.o32_1 = polyBase2Serializers;
    this.p32_1 = polyBase2DefaultSerializerProvider;
    this.q32_1 = polyBase2NamedSerializers;
    this.r32_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).q2p = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.o32_1.f2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.p32_1.f2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).p2p = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.q32_1.f2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).f2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.r32_1.f2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).s2l = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.n32_1.f2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s32(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.t32_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.t32_1.equals(tmp0_other_with_cast.t32_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.t32_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.t32_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.rd(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.qd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().oe());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.w2u(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.u32_1 = $factory;
  }
  protoOf(createCache$1).u2l = function (key) {
    return this.u32_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.v32_1 = $factory;
  }
  protoOf(createParametrizedCache$1).v2l = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_6();
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var tmp1_success = this.v32_1(key, types);
      tmp = _Result___init__impl__xyqfz8(tmp1_success);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_6();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).w2l = get_isNullable;
  protoOf(SerialDescriptorImpl).d2m = get_isInline;
  protoOf(AbstractDecoder).g2o = decodeSerializableElement$default;
  protoOf(AbstractDecoder).s2n = decodeSerializableValue;
  protoOf(AbstractDecoder).i2o = decodeSequentially;
  protoOf(AbstractDecoder).k2o = decodeCollectionSize;
  protoOf(AbstractEncoder).k2p = encodeNotNullMark;
  protoOf(AbstractEncoder).l2p = beginCollection;
  protoOf(AbstractEncoder).j2p = encodeSerializableValue;
  protoOf(AbstractEncoder).m2p = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).w2l = get_isNullable;
  protoOf(ListLikeDescriptor).d2m = get_isInline;
  protoOf(ListLikeDescriptor).b2m = get_annotations;
  protoOf(ArrayListClassDesc).w2l = get_isNullable;
  protoOf(ArrayListClassDesc).d2m = get_isInline;
  protoOf(ArrayListClassDesc).b2m = get_annotations;
  protoOf(HashSetClassDesc).w2l = get_isNullable;
  protoOf(HashSetClassDesc).d2m = get_isInline;
  protoOf(HashSetClassDesc).b2m = get_annotations;
  protoOf(LinkedHashSetClassDesc).w2l = get_isNullable;
  protoOf(LinkedHashSetClassDesc).d2m = get_isInline;
  protoOf(LinkedHashSetClassDesc).b2m = get_annotations;
  protoOf(MapLikeDescriptor).w2l = get_isNullable;
  protoOf(MapLikeDescriptor).d2m = get_isInline;
  protoOf(MapLikeDescriptor).b2m = get_annotations;
  protoOf(HashMapClassDesc).w2l = get_isNullable;
  protoOf(HashMapClassDesc).d2m = get_isInline;
  protoOf(HashMapClassDesc).b2m = get_annotations;
  protoOf(LinkedHashMapClassDesc).w2l = get_isNullable;
  protoOf(LinkedHashMapClassDesc).d2m = get_isInline;
  protoOf(LinkedHashMapClassDesc).b2m = get_annotations;
  protoOf(ArrayClassDesc).w2l = get_isNullable;
  protoOf(ArrayClassDesc).d2m = get_isInline;
  protoOf(ArrayClassDesc).b2m = get_annotations;
  protoOf(PrimitiveArrayDescriptor).w2l = get_isNullable;
  protoOf(PrimitiveArrayDescriptor).d2m = get_isInline;
  protoOf(PrimitiveArrayDescriptor).b2m = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).w2l = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).d2m = get_isInline;
  protoOf(InlineClassDescriptor).w2l = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).o2u = typeParametersSerializers;
  protoOf(NoOpEncoder).k2p = encodeNotNullMark;
  protoOf(NoOpEncoder).l2p = beginCollection;
  protoOf(NoOpEncoder).j2p = encodeSerializableValue;
  protoOf(NoOpEncoder).m2p = shouldEncodeElementDefault;
  protoOf(PrimitiveSerialDescriptor_0).w2l = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).d2m = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).b2m = get_annotations;
  protoOf(TaggedDecoder).g2o = decodeSerializableElement$default;
  protoOf(TaggedDecoder).s2n = decodeSerializableValue;
  protoOf(TaggedDecoder).i2o = decodeSequentially;
  protoOf(TaggedDecoder).k2o = decodeCollectionSize;
  protoOf(NamedValueDecoder).s2n = decodeSerializableValue;
  protoOf(NamedValueDecoder).g2o = decodeSerializableElement$default;
  protoOf(NamedValueDecoder).i2o = decodeSequentially;
  protoOf(NamedValueDecoder).k2o = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeSerializableElement$default;
  _.$_$.b = SerializationException_init_$Init$;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = LIST_getInstance;
  _.$_$.i = MAP_getInstance;
  _.$_$.j = Companion_getInstance_7;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = ListSerializer;
  _.$_$.m = MapSerializer;
  _.$_$.n = serializer_0;
  _.$_$.o = serializer_9;
  _.$_$.p = serializer_7;
  _.$_$.q = serializer_11;
  _.$_$.r = serializer_5;
  _.$_$.s = PolymorphicKind;
  _.$_$.t = PrimitiveKind;
  _.$_$.u = PrimitiveSerialDescriptor;
  _.$_$.v = get_annotations;
  _.$_$.w = get_isInline;
  _.$_$.x = get_isNullable;
  _.$_$.y = SerialDescriptor;
  _.$_$.z = ENUM;
  _.$_$.a1 = buildSerialDescriptor;
  _.$_$.b1 = getContextualDescriptor;
  _.$_$.c1 = AbstractDecoder;
  _.$_$.d1 = AbstractEncoder;
  _.$_$.e1 = decodeCollectionSize;
  _.$_$.f1 = decodeSequentially;
  _.$_$.g1 = CompositeDecoder;
  _.$_$.h1 = CompositeEncoder;
  _.$_$.i1 = decodeSerializableValue;
  _.$_$.j1 = Decoder;
  _.$_$.k1 = beginCollection;
  _.$_$.l1 = encodeNotNullMark;
  _.$_$.m1 = Encoder;
  _.$_$.n1 = AbstractPolymorphicSerializer;
  _.$_$.o1 = ElementMarker;
  _.$_$.p1 = typeParametersSerializers;
  _.$_$.q1 = GeneratedSerializer;
  _.$_$.r1 = NamedValueDecoder;
  _.$_$.s1 = PluginGeneratedSerialDescriptor;
  _.$_$.t1 = SerializerFactory;
  _.$_$.u1 = jsonCachedSerialNames;
  _.$_$.v1 = throwMissingFieldException;
  _.$_$.w1 = EmptySerializersModule_0;
  _.$_$.x1 = DeserializationStrategy;
  _.$_$.y1 = KSerializer;
  _.$_$.z1 = MissingFieldException;
  _.$_$.a2 = SealedClassSerializer;
  _.$_$.b2 = SerializationException;
  _.$_$.c2 = findPolymorphicSerializer;
  _.$_$.d2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
