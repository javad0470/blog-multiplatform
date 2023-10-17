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
  var protoOf = kotlin_kotlin.$_$.lb;
  var THROW_CCE = kotlin_kotlin.$_$.te;
  var Annotation = kotlin_kotlin.$_$.de;
  var classMeta = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.cg;
  var setMetadataFor = kotlin_kotlin.$_$.mb;
  var getKClass = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.ka;
  var interfaceMeta = kotlin_kotlin.$_$.na;
  var asList = kotlin_kotlin.$_$.x5;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f4;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var emptyList = kotlin_kotlin.$_$.r6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.qf;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.ec;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ja;
  var distinct = kotlin_kotlin.$_$.p6;
  var Entry = kotlin_kotlin.$_$.j5;
  var isInterface = kotlin_kotlin.$_$.wa;
  var Grouping = kotlin_kotlin.$_$.a5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var zip = kotlin_kotlin.$_$.t8;
  var toMap = kotlin_kotlin.$_$.n8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var toString = kotlin_kotlin.$_$.qb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var mapCapacity = kotlin_kotlin.$_$.q7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Map = kotlin_kotlin.$_$.k5;
  var captureStack = kotlin_kotlin.$_$.w9;
  var listOf = kotlin_kotlin.$_$.o7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.o1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException = kotlin_kotlin.$_$.le;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var KClass = kotlin_kotlin.$_$.ac;
  var Triple = kotlin_kotlin.$_$.ve;
  var Pair = kotlin_kotlin.$_$.qe;
  var LinkedHashMap = kotlin_kotlin.$_$.f5;
  var MutableMap = kotlin_kotlin.$_$.q5;
  var HashMap = kotlin_kotlin.$_$.b5;
  var LinkedHashSet = kotlin_kotlin.$_$.g5;
  var MutableSet = kotlin_kotlin.$_$.r5;
  var Set = kotlin_kotlin.$_$.t5;
  var HashSet = kotlin_kotlin.$_$.c5;
  var ArrayList = kotlin_kotlin.$_$.y4;
  var MutableList = kotlin_kotlin.$_$.o5;
  var List = kotlin_kotlin.$_$.i5;
  var Collection = kotlin_kotlin.$_$.z4;
  var copyToArray = kotlin_kotlin.$_$.o6;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.k2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m2;
  var isObject = kotlin_kotlin.$_$.za;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.l2;
  var Result = kotlin_kotlin.$_$.re;
  var ensureNotNull = kotlin_kotlin.$_$.mf;
  var equals = kotlin_kotlin.$_$.fa;
  var Iterator = kotlin_kotlin.$_$.e5;
  var Iterable = kotlin_kotlin.$_$.d5;
  var isBlank = kotlin_kotlin.$_$.sc;
  var toList = kotlin_kotlin.$_$.m8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.j8;
  var toBooleanArray = kotlin_kotlin.$_$.i8;
  var withIndex = kotlin_kotlin.$_$.s8;
  var to = kotlin_kotlin.$_$.bg;
  var lazy_0 = kotlin_kotlin.$_$.rf;
  var contentEquals = kotlin_kotlin.$_$.c6;
  var until = kotlin_kotlin.$_$.zb;
  var joinToString = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.kb;
  var Long = kotlin_kotlin.$_$.ne;
  var Char = kotlin_kotlin.$_$.ee;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d2;
  var Duration = kotlin_kotlin.$_$.be;
  var Companion_getInstance = kotlin_kotlin.$_$.h4;
  var toIntOrNull = kotlin_kotlin.$_$.od;
  var hashCode = kotlin_kotlin.$_$.la;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.oa;
  var arrayIterator = kotlin_kotlin.$_$.u9;
  var step = kotlin_kotlin.$_$.yb;
  var getValue = kotlin_kotlin.$_$.b7;
  var longArray = kotlin_kotlin.$_$.eb;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j4;
  var get_lastIndex = kotlin_kotlin.$_$.i7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.kf;
  var fillArrayVal = kotlin_kotlin.$_$.ga;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var KTypeParameter = kotlin_kotlin.$_$.fc;
  var booleanArray = kotlin_kotlin.$_$.v9;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var contentHashCode = kotlin_kotlin.$_$.d6;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.i4;
  var isCharArray = kotlin_kotlin.$_$.ra;
  var charArray = kotlin_kotlin.$_$.y9;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.b4;
  var isDoubleArray = kotlin_kotlin.$_$.ta;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c4;
  var isFloatArray = kotlin_kotlin.$_$.ua;
  var isLongArray = kotlin_kotlin.$_$.xa;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.m3;
  var ULongArray = kotlin_kotlin.$_$.af;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.i3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.f3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.k3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.g3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d4;
  var isIntArray = kotlin_kotlin.$_$.va;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.m4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.d3;
  var UIntArray = kotlin_kotlin.$_$.ye;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.z2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.b3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.x2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.e4;
  var isShortArray = kotlin_kotlin.$_$.ab;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.o4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.v3;
  var UShortArray = kotlin_kotlin.$_$.cf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.r3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.t3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.a4;
  var isByteArray = kotlin_kotlin.$_$.qa;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.l4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.u2;
  var UByteArray = kotlin_kotlin.$_$.we;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.r2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.s2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o2;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.z3;
  var isBooleanArray = kotlin_kotlin.$_$.pa;
  var coerceAtLeast = kotlin_kotlin.$_$.ub;
  var copyOf = kotlin_kotlin.$_$.i6;
  var copyOf_0 = kotlin_kotlin.$_$.k6;
  var copyOf_1 = kotlin_kotlin.$_$.l6;
  var copyOf_2 = kotlin_kotlin.$_$.g6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.n3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.j3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.l3;
  var copyOf_3 = kotlin_kotlin.$_$.n6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.e3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.a3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.c3;
  var copyOf_4 = kotlin_kotlin.$_$.f6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.w3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.s3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.u3;
  var copyOf_5 = kotlin_kotlin.$_$.j6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.v2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.q2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.t2;
  var copyOf_6 = kotlin_kotlin.$_$.h6;
  var Unit = kotlin_kotlin.$_$.ef;
  var trimIndent = kotlin_kotlin.$_$.yd;
  var equals_0 = kotlin_kotlin.$_$.pc;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var charSequenceGet = kotlin_kotlin.$_$.z9;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var titlecase = kotlin_kotlin.$_$.kd;
  var isLowerCase = kotlin_kotlin.$_$.tc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g4;
  var ULong = kotlin_kotlin.$_$.bf;
  var UInt = kotlin_kotlin.$_$.ze;
  var UShort = kotlin_kotlin.$_$.df;
  var UByte = kotlin_kotlin.$_$.xe;
  var mapOf = kotlin_kotlin.$_$.s7;
  var last = kotlin_kotlin.$_$.m7;
  var lastOrNull = kotlin_kotlin.$_$.l7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.j7;
  var get_js = kotlin_kotlin.$_$.cb;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.e7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_indices_0 = kotlin_kotlin.$_$.d7;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.k4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var createFailure = kotlin_kotlin.$_$.lf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Transient, 'Transient', classMeta, VOID, [Annotation]);
  setMetadataFor(Serializable, 'Serializable', classMeta, VOID, [Annotation]);
  setMetadataFor(SerialInfo, 'SerialInfo', classMeta, VOID, [Annotation]);
  setMetadataFor(SerialName, 'SerialName', classMeta, VOID, [Annotation]);
  setMetadataFor(InheritableSerialInfo, 'InheritableSerialInfo', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalSerializationApi, 'ExperimentalSerializationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(InternalSerializationApi, 'InternalSerializationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Serializer, 'Serializer', classMeta, VOID, [Annotation]);
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Grouping]);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerialFormat, 'SerialFormat', interfaceMeta);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta, VOID, [SerialFormat]);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
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
  setMetadataFor(elementNames$1$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Iterable]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Iterable]);
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
    return deserializer.deserialize_2t41fm_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_6v83lo_k$(deserializer) : this.decodeNull_jzrmuj_k$();
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
    return $super === VOID ? this.decodeSerializableElement_nrfur_k$(descriptor, index, deserializer, previousValue) : $super.decodeSerializableElement_nrfur_k$.call(this, descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.decodeNullableSerializableElement_1n5pmg_k$(descriptor, index, deserializer, previousValue) : $super.decodeNullableSerializableElement_1n5pmg_k$.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_dv3yt3_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_g55msp_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ek2hec_k$();
    } else {
      this.encodeNotNullMark_40lhgg_k$();
      this.encodeSerializableValue_g55msp_k$(serializer, value);
    }
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
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
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
  setMetadataFor(SerializerCache, 'SerializerCache', interfaceMeta);
  function get$default(key, types, $super) {
    types = types === VOID ? emptyList() : types;
    return $super === VOID ? this.get_2v46ri_k$(key, types) : $super.get_2v46ri_k$.call(this, key, types).value_1;
  }
  setMetadataFor(ParametrizedSerializerCache, 'ParametrizedSerializerCache', interfaceMeta);
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
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializationConstructorMarker, 'SerializationConstructorMarker', classMeta);
  setMetadataFor(TaggedEncoder, 'TaggedEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(NamedValueEncoder, 'NamedValueEncoder', classMeta, TaggedEncoder);
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
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.contextual_oi2m58_k$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  function polymorphicDefault(baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_rsx40t_k$(baseClass, defaultDeserializerProvider);
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, [Annotation], 0);
  setMetadataFor(createCache$1, VOID, classMeta, VOID, [SerializerCache]);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta, VOID, [ParametrizedSerializerCache]);
  //endregion
  function Transient() {
  }
  protoOf(Transient).equals = function (other) {
    if (!(other instanceof Transient))
      return false;
    other instanceof Transient || THROW_CCE();
    return true;
  };
  protoOf(Transient).hashCode = function () {
    return 0;
  };
  protoOf(Transient).toString = function () {
    return '@kotlinx.serialization.Transient()';
  };
  function Serializable(with_0) {
    with_0 = with_0 === VOID ? getKClass(KSerializer) : with_0;
    this.with_1 = with_0;
  }
  protoOf(Serializable).get_with_wowvm7_k$ = function () {
    return this.with_1;
  };
  protoOf(Serializable).equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  protoOf(Serializable).hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  protoOf(Serializable).toString = function () {
    return '@kotlinx.serialization.Serializable(with=' + this.with_1 + ')';
  };
  function SerialInfo() {
  }
  protoOf(SerialInfo).equals = function (other) {
    if (!(other instanceof SerialInfo))
      return false;
    other instanceof SerialInfo || THROW_CCE();
    return true;
  };
  protoOf(SerialInfo).hashCode = function () {
    return 0;
  };
  protoOf(SerialInfo).toString = function () {
    return '@kotlinx.serialization.SerialInfo()';
  };
  function SerialName(value) {
    this.value_1 = value;
  }
  protoOf(SerialName).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SerialName).equals = function (other) {
    if (!(other instanceof SerialName))
      return false;
    var tmp0_other_with_cast = other instanceof SerialName ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  protoOf(SerialName).hashCode = function () {
    return imul(getStringHashCode('value'), 127) ^ getStringHashCode(this.value_1);
  };
  protoOf(SerialName).toString = function () {
    return '@kotlinx.serialization.SerialName(value=' + this.value_1 + ')';
  };
  function InheritableSerialInfo() {
  }
  protoOf(InheritableSerialInfo).equals = function (other) {
    if (!(other instanceof InheritableSerialInfo))
      return false;
    other instanceof InheritableSerialInfo || THROW_CCE();
    return true;
  };
  protoOf(InheritableSerialInfo).hashCode = function () {
    return 0;
  };
  protoOf(InheritableSerialInfo).toString = function () {
    return '@kotlinx.serialization.InheritableSerialInfo()';
  };
  function ExperimentalSerializationApi() {
  }
  protoOf(ExperimentalSerializationApi).equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    other instanceof ExperimentalSerializationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalSerializationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalSerializationApi).toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi()';
  };
  function InternalSerializationApi() {
  }
  protoOf(InternalSerializationApi).equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    other instanceof InternalSerializationApi || THROW_CCE();
    return true;
  };
  protoOf(InternalSerializationApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalSerializationApi).toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi()';
  };
  function Serializer(forClass) {
    this.forClass_1 = forClass;
  }
  protoOf(Serializer).get_forClass_olla14_k$ = function () {
    return this.forClass_1;
  };
  protoOf(Serializer).equals = function (other) {
    if (!(other instanceof Serializer))
      return false;
    var tmp0_other_with_cast = other instanceof Serializer ? other : THROW_CCE();
    if (!this.forClass_1.equals(tmp0_other_with_cast.forClass_1))
      return false;
    return true;
  };
  protoOf(Serializer).hashCode = function () {
    return imul(getStringHashCode('forClass'), 127) ^ this.forClass_1.hashCode();
  };
  protoOf(Serializer).toString = function () {
    return '@kotlinx.serialization.Serializer(forClass=' + this.forClass_1 + ')';
  };
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function _set__annotations__kk13ma($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq($this) {
    return $this._annotations_1;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('type', serializer_0(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$());
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.baseClass_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  protoOf(PolymorphicSerializer).get_descriptor_wjt6a0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return this.descriptor$delegate_1.get_value_j01efc_k$();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.baseClass_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function _set__annotations__kk13ma_0($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_0($this) {
    return $this._annotations_1;
  }
  function _get_class2Serializer__mdbm1r($this) {
    return $this.class2Serializer_1;
  }
  function _get_serialName2Serializer__sjlyic($this) {
    return $this.serialName2Serializer_1;
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = distinct($subclassSerializers);
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var d = element.get_descriptor_wjt6a0_k$();
        $this$buildSerialDescriptor.element$default_r6n2dg_k$(d.get_serialName_u2rqhk_k$(), d);
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('type', serializer_0(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers));
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('value', elementDescriptor);
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0, $subclassSerializers) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers));
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.$tmp0_groupingBy_1 = $tmp0_groupingBy;
  }
  protoOf(_no_name_provided__qut3iv).sourceIterator_2zqxcn_k$ = function () {
    return this.$tmp0_groupingBy_1.iterator_jk1svi_k$();
  };
  protoOf(_no_name_provided__qut3iv).keyOf_p5nlxy_k$ = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.get_value_j01efc_k$().get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
  };
  protoOf(_no_name_provided__qut3iv).keyOf_dhlc0l_k$ = function (element) {
    return this.keyOf_p5nlxy_k$((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this, subclassSerializers));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.baseClass_1.get_simpleName_r6f8py_k$() + ' should be marked @Serializable');
    }
    this.class2Serializer_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.groupingBy' call
    var tmp0_groupingBy = this.class2Serializer_1.get_entries_p20ztl_k$();
    var tmp1_aggregate = new _no_name_provided__qut3iv(tmp0_groupingBy);
    // Inline function 'kotlin.collections.aggregateTo' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp0_aggregateTo = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tmp1_aggregate.sourceIterator_2zqxcn_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator.next_20eer_k$();
      var key = tmp1_aggregate.keyOf_dhlc0l_k$(e);
      var accumulator = tmp0_aggregateTo.get_1mhr4y_k$(key);
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !tmp0_aggregateTo.containsKey_wgk31w_k$(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var tmp0_error = "Multiple sealed subclasses of '" + this.baseClass_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.get_key_18j28a_k$() + "', '" + e.get_key_18j28a_k$() + "'");
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      tmp0_aggregateTo.put_3mhbri_k$(key, e);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp0_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_aggregateTo.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = tmp0_aggregateTo.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.get_key_18j28a_k$();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      tmp$ret$7 = element.get_value_j01efc_k$().get_value_j01efc_k$();
      tmp0_mapValuesTo.put_3mhbri_k$(tmp_2, tmp$ret$7);
    }
    tmp_1.serialName2Serializer_1 = tmp0_mapValuesTo;
  }
  protoOf(SealedClassSerializer).get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  protoOf(SealedClassSerializer).get_descriptor_wjt6a0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return this.descriptor$delegate_1.get_value_j01efc_k$();
  };
  protoOf(SealedClassSerializer).findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.serialName2Serializer_1;
    var tmp0_elvis_lhs = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_e7t5h9_k$.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    var tmp0_elvis_lhs = this.class2Serializer_1.get_1mhr4y_k$(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_mimmn_k$.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function StringFormat() {
  }
  function SerialFormat() {
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.get_size_woubt6_k$() === 1 ? "Field '" + missingFields.get_fkrdnv_k$(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException_init_$Init$_0(missingField, serialName, $this) {
    MissingFieldException.call($this, listOf(missingField), "Field '" + missingField + "' is required for type with serial name '" + serialName + "', but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_0(missingField, serialName) {
    var tmp = MissingFieldException_init_$Init$_0(missingField, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$_0);
    return tmp;
  }
  function MissingFieldException_init_$Init$_1(missingField, $this) {
    MissingFieldException.call($this, listOf(missingField), "Field '" + missingField + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_1(missingField) {
    var tmp = MissingFieldException_init_$Init$_1(missingField, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$_1);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.missingFields_1 = missingFields;
  }
  protoOf(MissingFieldException).get_missingFields_wryzxm_k$ = function () {
    return this.missingFields_1;
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
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
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
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
      var tmp0_iterator = typeArguments.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp = tmp0_mapTo;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
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
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
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
      tmp = new ArrayListSerializer(serializers.get_fkrdnv_k$(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1), serializers.get_fkrdnv_k$(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = typeArguments.get_fkrdnv_k$(0).get_classifier_ottyl2_k$();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.get_fkrdnv_k$(0));
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
    var isNullable = type.get_isMarkedNullable_4el8ow_k$();
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.get_arguments_p5ddub_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.get_type_wovaf7_k$();
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
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
    }
    var typeArguments = tmp0_mapTo;
    var tmp;
    if (typeArguments.isEmpty_y1axqb_k$()) {
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
    if (typeArguments.isEmpty_y1axqb_k$()) {
      tmp_5 = _this__u8e3s4.getContextual$default_9ols70_k$(rootClass);
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
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.getContextual_r3x7wt_k$(rootClass, serializers) : tmp2_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().get_otygyj_k$(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().get_otygyj_k$(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().get_2v46ri_k$(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().get_2v46ri_k$(clazz, types);
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
    if (_this__u8e3s4.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
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
  function _get_original__l7ku1m($this) {
    return $this.original_1;
  }
  function ContextDescriptor(original, kClass) {
    this.original_1 = original;
    this.kClass_1 = kClass;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '<' + this.kClass_1.get_simpleName_r6f8py_k$() + '>';
  }
  protoOf(ContextDescriptor).get_kClass_f4awuu_k$ = function () {
    return this.kClass_1;
  };
  protoOf(ContextDescriptor).get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  protoOf(ContextDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  protoOf(ContextDescriptor).get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  protoOf(ContextDescriptor).get_isNullable_67sy7o_k$ = function () {
    return this.original_1.get_isNullable_67sy7o_k$();
  };
  protoOf(ContextDescriptor).get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  protoOf(ContextDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  protoOf(ContextDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  protoOf(ContextDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  protoOf(ContextDescriptor).getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  protoOf(ContextDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  protoOf(ContextDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
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
    return equals(this.original_1, another.original_1) ? another.kClass_1.equals(this.kClass_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.kClass_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.serialName_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.kClass_1 + ', original: ' + this.original_1 + ')';
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.getContextual$default_9ols70_k$(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_descriptor_wjt6a0_k$();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.kClass_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.get_original_8zw1nq_k$());
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4);
  }
  function _set_elementsLeft__kqd1tz($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v($this) {
    return $this.elementsLeft_1;
  }
  function elementNames$1$1($this_elementNames) {
    this.$this_elementNames_1 = $this_elementNames;
    this.elementsLeft_1 = $this_elementNames.get_elementsCount_288r0x_k$();
  }
  protoOf(elementNames$1$1).hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  protoOf(elementNames$1$1).next_20eer_k$ = function () {
    var tmp = this.$this_elementNames_1.get_elementsCount_288r0x_k$();
    var tmp1 = this.elementsLeft_1;
    this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementNames_1.getElementName_ykpypc_k$(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.$this_elementNames_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).iterator_jk1svi_k$ = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.$this_elementNames_1);
  };
  function _set_elementsLeft__kqd1tz_0($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v_0($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors.get_elementsCount_288r0x_k$();
  }
  protoOf(elementDescriptors$1$1).hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  protoOf(elementDescriptors$1$1).next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1.get_elementsCount_288r0x_k$();
    var tmp1 = this.elementsLeft_1;
    this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_sqz94k_k$(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_1).iterator_jk1svi_k$ = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.$this_elementDescriptors_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function _get_uniqueNames__t2j14q($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$_0();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$_0();
    this.elementAnnotations_1 = ArrayList_init_$Create$_0();
    this.elementOptionality_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(ClassSerialDescriptorBuilder).set_isNullable_o72f9b_k$ = function (_set____db54di) {
    this.isNullable_1 = _set____db54di;
  };
  protoOf(ClassSerialDescriptorBuilder).get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  protoOf(ClassSerialDescriptorBuilder).set_annotations_vlf62n_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  protoOf(ClassSerialDescriptorBuilder).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementNames_57dki3_k$ = function () {
    return this.elementNames_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementDescriptors_jxewnl_k$ = function () {
    return this.elementDescriptors_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementAnnotations_wjl0r5_k$ = function () {
    return this.elementAnnotations_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementOptionality_sheked_k$ = function () {
    return this.elementOptionality_1;
  };
  protoOf(ClassSerialDescriptorBuilder).element_t1rubu_k$ = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.uniqueNames_1.add_1j60pz_k$(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementNames_1.add_1j60pz_k$(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementDescriptors_1.add_1j60pz_k$(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementAnnotations_1.add_1j60pz_k$(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementOptionality_1.add_1j60pz_k$(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).element$default_r6n2dg_k$ = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.element_t1rubu_k$(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.element_t1rubu_k$.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function _get_elementNames__mdlk9t($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__y23q9p($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__1vliwz($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__ruzsih($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__3zzra8($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__7g731r($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return $this._hashCode$delegate_1.get_value_j01efc_k$();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.typeParametersDescriptors_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_ykpypc_k$(it) + ': ' + this$0.getElementDescriptor_sqz94k_k$(it).get_serialName_u2rqhk_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    this.serialNames_1 = toHashSet(builder.elementNames_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.elementNames_1;
    tmp.elementNames_1 = copyToArray(tmp0_toTypedArray);
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.elementAnnotations_1;
    tmp_0.elementAnnotations_1 = copyToArray(tmp0_toTypedArray_0);
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.elementNames_1);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.get_value_j01efc_k$(), item.get_index_it478p_k$());
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
    }
    tmp_1.name2Index_1 = toMap(tmp0_mapTo);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(SerialDescriptorImpl).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(SerialDescriptorImpl).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(SerialDescriptorImpl).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(SerialDescriptorImpl).get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  protoOf(SerialDescriptorImpl).getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  protoOf(SerialDescriptorImpl).getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_7().get_UNKNOWN_NAME_lj8hxl_k$() : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).getElementAnnotations_a57oar_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  protoOf(SerialDescriptorImpl).getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  protoOf(SerialDescriptorImpl).isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
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
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.typeParametersDescriptors_1, other.typeParametersDescriptors_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
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
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
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
    return ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
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
  protoOf(AbstractDecoder).decodeValue_jl9esj_k$ = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    return true;
  };
  protoOf(AbstractDecoder).decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  protoOf(AbstractDecoder).decodeBoolean_m0aca_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeByte_jzz7je_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeShort_jjqk32_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeInt_8iq8f5_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeLong_jzt186_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeFloat_jcnrwu_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeDouble_ur8l0f_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeChar_dc2jtx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeString_x3hxsx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeInline_k1q7ba_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).decodeSerializableValue_gjomdq_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_6v83lo_k$(deserializer);
  };
  protoOf(AbstractDecoder).decodeSerializableValue$default_pot8j2_k$ = function (deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.decodeSerializableValue_gjomdq_k$(deserializer, previousValue) : $super.decodeSerializableValue_gjomdq_k$.call(this, deserializer, previousValue);
  };
  protoOf(AbstractDecoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).endStructure_e64gd4_k$ = function (descriptor) {
  };
  protoOf(AbstractDecoder).decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeBoolean_m0aca_k$();
  };
  protoOf(AbstractDecoder).decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeByte_jzz7je_k$();
  };
  protoOf(AbstractDecoder).decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeShort_jjqk32_k$();
  };
  protoOf(AbstractDecoder).decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeInt_8iq8f5_k$();
  };
  protoOf(AbstractDecoder).decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeLong_jzt186_k$();
  };
  protoOf(AbstractDecoder).decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeFloat_jcnrwu_k$();
  };
  protoOf(AbstractDecoder).decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeDouble_ur8l0f_k$();
  };
  protoOf(AbstractDecoder).decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeChar_dc2jtx_k$();
  };
  protoOf(AbstractDecoder).decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeString_x3hxsx_k$();
  };
  protoOf(AbstractDecoder).decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return this.decodeInline_k1q7ba_k$(descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  protoOf(AbstractDecoder).decodeSerializableElement_nrfur_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_gjomdq_k$(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).decodeNullableSerializableElement_1n5pmg_k$ = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_gjomdq_k$(deserializer, previousValue) : this.decodeNull_jzrmuj_k$();
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).endStructure_e64gd4_k$ = function (descriptor) {
  };
  protoOf(AbstractEncoder).encodeElement_gaiom2_k$ = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).encodeValue_g5opg2_k$ = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).encodeNull_ek2hec_k$ = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeByte_gpyndp_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeInt_5vxmon_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeChar_kkx54x_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(new Char(value));
  };
  protoOf(AbstractEncoder).encodeString_90sumj_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  protoOf(AbstractEncoder).encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeValue_g5opg2_k$(index);
  };
  protoOf(AbstractEncoder).encodeInline_8gn4q6_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeBoolean_6cztl5_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeByte_gpyndp_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeShort_rh3vxz_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeInt_5vxmon_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeLong_rk3ab9_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeFloat_f5fde1_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeDouble_79ztsb_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeChar_kkx54x_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeString_90sumj_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return this.encodeElement_gaiom2_k$(descriptor, index) ? this.encodeInline_8gn4q6_k$(descriptor.getElementDescriptor_sqz94k_k$(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).encodeSerializableElement_cw68jm_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeSerializableValue_g55msp_k$(serializer, value);
    }
  };
  protoOf(AbstractEncoder).encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeNullableSerializableValue_4n8qik_k$(serializer, value);
    }
  };
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  protoOf(Companion).get_DECODE_DONE_1b8fna_k$ = function () {
    return this.DECODE_DONE_1;
  };
  protoOf(Companion).get_UNKNOWN_NAME_lj8hxl_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    var result = block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
    return result;
  }
  function Decoder() {
  }
  function CompositeEncoder() {
  }
  function Encoder() {
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
  }
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.beginCollection_dgpn47_k$(descriptor, collectionSize);
    block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_4is7ib_k$($this.get_descriptor_wjt6a0_k$(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.decodeSerializableElement$default_qqku8y_k$($this.get_descriptor_wjt6a0_k$(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).serialize_32qylj_k$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.encodeStringElement_pgmbgj_k$(this.get_descriptor_wjt6a0_k$(), 0, actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    var tmp = this.get_descriptor_wjt6a0_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.encodeSerializableElement_cw68jm_k$(tmp, 1, tmp$ret$0, value);
    composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).deserialize_2t41fm_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.decodeSequentially_xlblqy_k$()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        if (index === Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$()) {
          break mainLoop;
        } else if (index === 0) {
          klassName = composite.decodeStringElement_4is7ib_k$(this.get_descriptor_wjt6a0_k$(), index);
        } else if (index === 1) {
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
          value = composite.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), index, serializer);
        } else {
          var tmp0_elvis_lhs = klassName;
          throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
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
    composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return decoder.get_serializersModule_piitvg_k$().getPolymorphic_39bkdo_k$(this.get_baseClass_lygw3m_k$(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return encoder.get_serializersModule_piitvg_k$().getPolymorphic_38ak3b_k$(this.get_baseClass_lygw3m_k$(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.get_simpleName_r6f8py_k$();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.get_simpleName_r6f8py_k$() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DurationSerializer).serialize_hadush_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_hadush_k$(encoder, value instanceof Duration ? value.rawValue_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).deserialize_f9rdv8_k$ = function (decoder) {
    return Companion_getInstance().parseIsoString_k4vyyg_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(DurationSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new Duration(this.deserialize_f9rdv8_k$(decoder));
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
  protoOf(ArrayListClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).get_serialName_u2rqhk_k$ = function () {
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
  protoOf(ArrayClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  protoOf(ListLikeDescriptor).get_elementDescriptor_pui6ea_k$ = function () {
    return this.elementDescriptor_1;
  };
  protoOf(ListLikeDescriptor).get_kind_wop7ml_k$ = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(ListLikeDescriptor).getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.elementDescriptor_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) ? this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this.get_serialName_u2rqhk_k$()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.elementDescriptor_1 + ')';
  };
  function get_ARRAY_LIST_NAME() {
    return ARRAY_LIST_NAME;
  }
  var ARRAY_LIST_NAME;
  function get_HASH_SET_NAME() {
    return HASH_SET_NAME;
  }
  var HASH_SET_NAME;
  function get_LINKED_HASH_SET_NAME() {
    return LINKED_HASH_SET_NAME;
  }
  var LINKED_HASH_SET_NAME;
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  protoOf(MapLikeDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(MapLikeDescriptor).get_keyDescriptor_qkqayt_k$ = function () {
    return this.keyDescriptor_1;
  };
  protoOf(MapLikeDescriptor).get_valueDescriptor_j2bi95_k$ = function () {
    return this.valueDescriptor_1;
  };
  protoOf(MapLikeDescriptor).get_kind_wop7ml_k$ = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(MapLikeDescriptor).getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
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
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.keyDescriptor_1 + ', ' + this.valueDescriptor_1 + ')';
  };
  function get_HASH_MAP_NAME() {
    return HASH_MAP_NAME;
  }
  var HASH_MAP_NAME;
  function get_LINKED_HASH_MAP_NAME() {
    return LINKED_HASH_MAP_NAME;
  }
  var LINKED_HASH_MAP_NAME;
  function get_ARRAY_NAME() {
    return ARRAY_NAME;
  }
  var ARRAY_NAME;
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive.get_serialName_u2rqhk_k$() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element.get_descriptor_wjt6a0_k$());
  }
  protoOf(ArrayListSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ArrayListSerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).builderSize_pted1r_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(ArrayListSerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_pted1r_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).toResult_t33s23_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_t33s23_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).toBuilder_9sdg76_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_9sdg76_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).checkCapacity_ao7vf_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  protoOf(ArrayListSerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_ao7vf_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).insert_fxdj4m_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  protoOf(ArrayListSerializer).insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_fxdj4m_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new HashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(HashSetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(HashSetSerializer).builder_3thy1n_k$ = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).builderSize_9hxhhu_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(HashSetSerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_9hxhhu_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).toResult_bsa6lu_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_bsa6lu_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).toBuilder_lmw6bc_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_lmw6bc_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).checkCapacity_bde2fc_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_bde2fc_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).insert_66pcc9_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_1j60pz_k$(element);
  };
  protoOf(HashSetSerializer).insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_66pcc9_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new LinkedHashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(LinkedHashSetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LinkedHashSetSerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).builderSize_c7xn2j_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(LinkedHashSetSerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_c7xn2j_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).toResult_rgrz5l_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_rgrz5l_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).toBuilder_lmw6bc_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_lmw6bc_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).checkCapacity_qs5vdt_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_qs5vdt_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).insert_3b5fv6_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_1j60pz_k$(element);
  };
  protoOf(LinkedHashSetSerializer).insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_3b5fv6_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new HashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(HashMapSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(HashMapSerializer).collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(HashMapSerializer).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
  };
  protoOf(HashMapSerializer).collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).builder_3thy1n_k$ = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).builderSize_f8e7zc_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  protoOf(HashMapSerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_f8e7zc_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).toResult_ii3mzo_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_ii3mzo_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).checkCapacity_bomj8i_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_bomj8i_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashMapSerializer).insertKeyValuePair_ogcj1a_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  protoOf(HashMapSerializer).insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_ogcj1a_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(LinkedHashMapSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LinkedHashMapSerializer).collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(LinkedHashMapSerializer).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
  };
  protoOf(LinkedHashMapSerializer).collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).builderSize_39d0bl_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  protoOf(LinkedHashMapSerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_39d0bl_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).toResult_8706jh_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_8706jh_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).checkCapacity_n86247_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_n86247_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashMapSerializer).insertKeyValuePair_o57l8p_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  protoOf(LinkedHashMapSerializer).insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_o57l8p_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(ReferenceArraySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ReferenceArraySerializer).collectionSize_sgvbkw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_sgvbkw_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).collectionIterator_hdgi7n_k$ = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_hdgi7n_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).builderSize_q7iht4_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(ReferenceArraySerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_q7iht4_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).toResult_l9vbl8_k$ = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kClass_1);
  };
  protoOf(ReferenceArraySerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_l9vbl8_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).toBuilder_qnyl35_k$ = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qnyl35_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).checkCapacity_3yirqq_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  protoOf(ReferenceArraySerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_3yirqq_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).insert_5tew8_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  protoOf(ReferenceArraySerializer).insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_5tew8_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).collectionSize_diz0mn_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(CollectionSerializer).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_diz0mn_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).collectionIterator_pvbym6_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.iterator_jk1svi_k$();
  };
  protoOf(CollectionSerializer).collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_pvbym6_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  protoOf(MapLikeSerializer).get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  protoOf(MapLikeSerializer).readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var key = decoder.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), index, this.keySerializer_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
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
    if (builder.containsKey_wgk31w_k$(key)) {
      var tmp_2 = this.valueSerializer_1.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.decodeSerializableElement_nrfur_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.put_3mhbri_k$(key, value);
  };
  protoOf(MapLikeSerializer).serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      var tmp = this.get_descriptor_wjt6a0_k$();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.encodeSerializableElement_cw68jm_k$(tmp, tmp0, this.keySerializer_1, k);
      var tmp_0 = this.get_descriptor_wjt6a0_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.encodeSerializableElement_cw68jm_k$(tmp_0, tmp1, this.valueSerializer_1, v);
    }
    composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
  };
  protoOf(MapLikeSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function _get_elementSerializer__tegbkt($this) {
    return $this.elementSerializer_1;
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
      }
       while (inductionVariable < size);
    composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
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
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    this.insert_64qdau_k$(builder, index, decoder.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_cd6i6s_k$($this.get_descriptor_wjt6a0_k$());
    $this.checkCapacity_ge5iis_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).merge_6fpf53_k$ = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.toBuilder_9n7g5t_k$(previous);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_mmbugq_k$(builder);
    var compositeDecoder = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_s7t1kq_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        if (index === Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$())
          break $l$loop;
        this.readElement$default_bjqiix_k$(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    return this.toResult_nzwaf2_k$(builder);
  };
  protoOf(AbstractCollectionSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).readElement$default_bjqiix_k$ = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.readElement_yuufx2_k$(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.readElement_yuufx2_k$.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(PrimitiveArraySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(PrimitiveArraySerializer).builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_position_jfponi_k$();
  };
  protoOf(PrimitiveArraySerializer).toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.build_1k0s4u_k$();
  };
  protoOf(PrimitiveArraySerializer).checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  protoOf(PrimitiveArraySerializer).collectionIterator_apv53g_k$ = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_apv53g_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  protoOf(PrimitiveArraySerializer).builder_3thy1n_k$ = function () {
    return this.toBuilder_9n7g5t_k$(this.empty_1lj7f1_k$());
  };
  protoOf(PrimitiveArraySerializer).serialize_q3dfzy_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.descriptor_1;
    var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.writeContent_jq3j40_k$(composite, value, size);
    composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).serialize_wciw4p_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ensureCapacity$default_ciqbzq_k$ = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.get_position_jfponi_k$() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ensureCapacity_ignus8_k$(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ensureCapacity_ignus8_k$.call(this, requiredCapacity);
    }
    return tmp;
  };
  function _get_EMPTY_HIGH_MARKS__mj061c($this) {
    return $this.EMPTY_HIGH_MARKS_1;
  }
  function _get_descriptor__bbb664($this) {
    return $this.descriptor_1;
  }
  function _get_readIfAbsent__dod95t($this) {
    return $this.readIfAbsent_1;
  }
  function _set_lowerMarks__z5lqxa($this, _set____db54di) {
    $this.lowerMarks_1 = _set____db54di;
  }
  function _get_lowerMarks__kt9pwm($this) {
    return $this.lowerMarks_1;
  }
  function _get_highMarksArray__2omaie($this) {
    return $this.highMarksArray_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EMPTY_HIGH_MARKS_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & (Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$() - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).shl_po5ip6_k$(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & (Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$() - 1 | 0);
    $this.highMarksArray_1[slot] = $this.highMarksArray_1[slot].or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.highMarksArray_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$());
        var slotMarks = $this.highMarksArray_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.inv_28kx_k$());
          slotMarks = slotMarks.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.readIfAbsent_1($this.descriptor_1, index)) {
            $this.highMarksArray_1[slot] = slotMarks;
            return index;
          }
        }
        $this.highMarksArray_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$();
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.descriptor_1 = descriptor;
    this.readIfAbsent_1 = readIfAbsent;
    var elementsCount = this.descriptor_1.get_elementsCount_288r0x_k$();
    if (elementsCount <= Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$()) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$()) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).shl_po5ip6_k$(elementsCount);
      }
      tmp.lowerMarks_1 = tmp_0;
      this.highMarksArray_1 = Companion_getInstance_8().EMPTY_HIGH_MARKS_1;
    } else {
      this.lowerMarks_1 = new Long(0, 0);
      this.highMarksArray_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).mark_xwbrr1_k$ = function (index) {
    if (index < Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$()) {
      this.lowerMarks_1 = this.lowerMarks_1.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).nextUnmarkedIndex_u6mxd2_k$ = function () {
    var elementsCount = this.descriptor_1.get_elementsCount_288r0x_k$();
    while (!this.lowerMarks_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.lowerMarks_1.inv_28kx_k$());
      this.lowerMarks_1 = this.lowerMarks_1.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(index));
      if (this.readIfAbsent_1(this.descriptor_1, index)) {
        return index;
      }
    }
    if (elementsCount > Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$()) {
      return nextUnmarkedHighIndex(this);
    }
    return Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$();
  };
  function _get_elementDescriptors__y23q9p_0($this) {
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return $this.elementDescriptors$delegate_1.get_value_j01efc_k$();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        tmp$ret$1 = buildSerialDescriptor($name + '.' + this$0.getElementName_ykpypc_k$(tmp_2), OBJECT_getInstance(), []);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.kind_1 = ENUM_getInstance();
    var tmp = this;
    tmp.elementDescriptors$delegate_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(EnumDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p_0(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.get_kind_wop7ml_k$() === ENUM_getInstance()))
      return false;
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.get_serialName_u2rqhk_k$() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous = accumulator;
      var tmp = imul(31, tmp0_anonymous);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p_0(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.isInline_1 = true;
  }
  protoOf(InlineClassDescriptor).get_isInline_usk17w_k$ = function () {
    return this.isInline_1;
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
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.isInline_1 ? contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), other.get_typeParameterDescriptors_hcpg9q_k$()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
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
    this.$primitiveSerializer_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.$primitiveSerializer_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).get_descriptor_wjt6a0_k$ = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).serialize_32qylj_k$ = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).deserialize_2t41fm_k$ = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.serializersModule_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(NoOpEncoder).encodeValue_g5opg2_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeNull_ek2hec_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeBoolean_6cztl5_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeByte_gpyndp_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeShort_rh3vxz_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeInt_5vxmon_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeLong_rk3ab9_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeFloat_f5fde1_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeDouble_79ztsb_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeChar_kkx54x_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeString_90sumj_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function NullableSerializer(serializer) {
    this.serializer_1 = serializer;
    this.descriptor_1 = new SerialDescriptorForNullable(this.serializer_1.get_descriptor_wjt6a0_k$());
  }
  protoOf(NullableSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(NullableSerializer).serialize_l9nmnw_k$ = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_40lhgg_k$();
      encoder.encodeSerializableValue_g55msp_k$(this.serializer_1, value);
    } else {
      encoder.encodeNull_ek2hec_k$();
    }
  };
  protoOf(NullableSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_l9nmnw_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeNotNullMark_us4ba1_k$() ? decoder.decodeSerializableValue_6v83lo_k$(this.serializer_1) : decoder.decodeNull_jzrmuj_k$();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.serializer_1, other.serializer_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function SerialDescriptorForNullable(original) {
    this.original_1 = original;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '?';
    this.serialNames_1 = cachedSerialNames(this.original_1);
  }
  protoOf(SerialDescriptorForNullable).get_original_8zw1nq_k$ = function () {
    return this.original_1;
  };
  protoOf(SerialDescriptorForNullable).get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  protoOf(SerialDescriptorForNullable).get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  protoOf(SerialDescriptorForNullable).get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  protoOf(SerialDescriptorForNullable).get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  protoOf(SerialDescriptorForNullable).getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  protoOf(SerialDescriptorForNullable).getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  protoOf(SerialDescriptorForNullable).getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  protoOf(SerialDescriptorForNullable).getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  protoOf(SerialDescriptorForNullable).isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  protoOf(SerialDescriptorForNullable).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(SerialDescriptorForNullable).get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  protoOf(SerialDescriptorForNullable).get_isNullable_67sy7o_k$ = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_1, other.original_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.original_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.original_1), 31);
  };
  function _get_objectInstance__h8002x($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function _set__annotations__kk13ma_1($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_1($this) {
    return $this._annotations_1;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(this$0._annotations_1);
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
    this.objectInstance_1 = objectInstance;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).get_descriptor_wjt6a0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return this.descriptor$delegate_1.get_value_j01efc_k$();
  };
  protoOf(ObjectSerializer).serialize_32qylj_k$ = function (encoder, value) {
    encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$()).endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  protoOf(ObjectSerializer).deserialize_2t41fm_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
      if (index === Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
    return this.objectInstance_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function SerializerCache() {
  }
  function cast(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function ParametrizedSerializerCache() {
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.get_serialNames_8zf3cl_k$();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.get_elementsCount_288r0x_k$());
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.getElementName_ykpypc_k$(i);
        result.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.get_classifier_ottyl2_k$();
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
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.isEmpty_y1axqb_k$())) {
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
  function cast_0(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous = accumulator;
      var tmp = imul(31, tmp0_anonymous);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = selector(element);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return accumulator;
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
          var tmp0_plusAssign = descriptor.getElementName_ykpypc_k$(i);
          missingFields.add_1j60pz_k$(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.get_serialName_u2rqhk_k$());
  }
  function _get_generatedSerializer__wsoshc($this) {
    return $this.generatedSerializer_1;
  }
  function _set_added__c0kt39($this, _set____db54di) {
    $this.added_1 = _set____db54di;
  }
  function _get_added__k0jne7($this) {
    return $this.added_1;
  }
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function _get_propertiesAnnotations__ni45q8($this) {
    return $this.propertiesAnnotations_1;
  }
  function _set_classAnnotations__ucvd1n($this, _set____db54di) {
    $this.classAnnotations_1 = _set____db54di;
  }
  function _get_classAnnotations__bl4fup($this) {
    return $this.classAnnotations_1;
  }
  function _get_elementsOptionality__u17gre($this) {
    return $this.elementsOptionality_1;
  }
  function _set_indices__8cam9u($this, _set____db54di) {
    $this.indices_1 = _set____db54di;
  }
  function _get_indices__xyiwmu($this) {
    return $this.indices_1;
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return $this.childSerializers$delegate_1.get_value_j01efc_k$();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return $this._hashCode$delegate_1.get_value_j01efc_k$();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.names_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.names_1[i];
        indices.put_3mhbri_k$(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_5ghqw5_k$();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_fr94fx_k$();
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
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.get_descriptor_wjt6a0_k$();
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
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
      return hashCodeImpl(this$0, this$0.get_typeParameterDescriptors_hcpg9q_k$());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.getElementName_ykpypc_k$(i) + ': ' + this$0.getElementDescriptor_sqz94k_k$(i).get_serialName_u2rqhk_k$();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.serialName_1 = serialName;
    this.generatedSerializer_1 = generatedSerializer;
    this.elementsCount_1 = elementsCount;
    this.added_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.elementsCount_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.names_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.elementsCount_1;
    tmp_3.propertiesAnnotations_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.classAnnotations_1 = null;
    this.elementsOptionality_1 = booleanArray(this.elementsCount_1);
    this.indices_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.childSerializers$delegate_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.typeParameterDescriptors$delegate_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8._hashCode$delegate_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_kind_wop7ml_k$ = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).get_annotations_20dirp_k$ = function () {
    var tmp0_elvis_lhs = this.classAnnotations_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_serialNames_8zf3cl_k$ = function () {
    return this.indices_1.get_keys_wop4xp_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).get_typeParameterDescriptors_hcpg9q_k$ = function () {
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return this.typeParameterDescriptors$delegate_1.get_value_j01efc_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).addElement_ifop3j_k$ = function (name, isOptional) {
    this.added_1 = this.added_1 + 1 | 0;
    this.names_1[this.added_1] = name;
    this.elementsOptionality_1[this.added_1] = isOptional;
    this.propertiesAnnotations_1[this.added_1] = null;
    if (this.added_1 === (this.elementsCount_1 - 1 | 0)) {
      this.indices_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).addElement$default_fcc4uw_k$ = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.addElement_ifop3j_k$(name, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addElement_ifop3j_k$.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).pushAnnotation_kbn3rf_k$ = function (annotation) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.propertiesAnnotations_1[this.added_1];
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.pushAnnotation.<anonymous>' call
    var tmp;
    if (tmp0_let == null) {
      var result = ArrayList_init_$Create$(1);
      this.propertiesAnnotations_1[this.added_1] = result;
      tmp = result;
    } else {
      tmp = tmp0_let;
    }
    var list = tmp;
    list.add_1j60pz_k$(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).pushClassAnnotation_tfb9g9_k$ = function (a) {
    if (this.classAnnotations_1 == null) {
      this.classAnnotations_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.classAnnotations_1).add_1j60pz_k$(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).get_descriptor_wjt6a0_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementsOptionality_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    var tmp0_elvis_lhs = getChecked(this.propertiesAnnotations_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.names_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.indices_1.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_7().get_UNKNOWN_NAME_lj8hxl_k$() : tmp0_elvis_lhs;
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
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), other.get_typeParameterDescriptors_hcpg9q_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
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
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.get_serialName_u2rqhk_k$() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.get_serialName_u2rqhk_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous = accumulator;
      var tmp = imul(31, tmp0_anonymous);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.get_serialName_u2rqhk_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0_anonymous_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.get_kind_wop7ml_k$();
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
      return receiver.get_typeParameterDescriptors_hcpg9q_k$();
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
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
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
  protoOf(CharArraySerializer_0).collectionSize_ws33uw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ws33uw_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).toBuilder_waug93_k$ = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_waug93_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).readElement_le7skj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_y20c3x_k$(decoder.decodeCharElement_pg5vs7_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(CharArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_le7skj_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).writeContent_wscki9_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_4fawdf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_wscki9_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).collectionSize_pzip3n_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_pzip3n_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).toBuilder_b07jn0_k$ = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_b07jn0_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).readElement_g1li9q_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_g44bp4_k$(decoder.decodeDoubleElement_42w6gz_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(DoubleArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g1li9q_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).writeContent_xk6378_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_m8xcw3_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_xk6378_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).collectionSize_173jc8_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_173jc8_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).toBuilder_g1jv47_k$ = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_g1jv47_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).readElement_x45ji7_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_urs3el_k$(decoder.decodeFloatElement_nl5jiq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(FloatArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_x45ji7_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).writeContent_z7nd2p_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_o97mfb_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_z7nd2p_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).collectionSize_91vysi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_91vysi_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).toBuilder_8knb6p_k$ = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_8knb6p_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).readElement_qrifnb_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_gvce4t_k$(decoder.decodeLongElement_kyznym_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(LongArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_qrifnb_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).writeContent_42fxmf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_xtv8il_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_42fxmf_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).collectionSize_psdg77_k$ = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_psdg77_k$(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).toBuilder_axx4f8_k$ = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_axx4f8_k$(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).empty_i4h58g_k$ = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new ULongArray(this.empty_i4h58g_k$());
  };
  protoOf(ULongArraySerializer_0).readElement_8mrwru_k$ = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.decodeInlineElement_ddno8l_k$(this.get_descriptor_wjt6a0_k$(), index).decodeLong_jzt186_k$();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.append_gtflrs_k$(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_8mrwru_k$(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).writeContent_bgq3zw_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_9d3ws3_k$(this.get_descriptor_wjt6a0_k$(), i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.encodeLong_rk3ab9_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_bgq3zw_k$(encoder, content instanceof ULongArray ? content.storage_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).collectionSize_p5ta3p_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_p5ta3p_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).toBuilder_murpja_k$ = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_murpja_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).readElement_q2v34c_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_da0tyi_k$(decoder.decodeIntElement_cmpvet_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(IntArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_q2v34c_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).writeContent_h3vxwe_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_utywpf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_h3vxwe_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).collectionSize_hvw10_k$ = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_hvw10_k$(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).toBuilder_n8f7_k$ = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_n8f7_k$(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).empty_wbt70n_k$ = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UIntArray(this.empty_wbt70n_k$());
  };
  protoOf(UIntArraySerializer_0).readElement_8vi6kn_k$ = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.decodeInlineElement_ddno8l_k$(this.get_descriptor_wjt6a0_k$(), index).decodeInt_8iq8f5_k$();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.append_xmuk35_k$(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_8vi6kn_k$(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).writeContent_j1vi5x_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_9d3ws3_k$(this.get_descriptor_wjt6a0_k$(), i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.encodeInt_5vxmon_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j1vi5x_k$(encoder, content instanceof UIntArray ? content.storage_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).collectionSize_tiggjs_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tiggjs_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).toBuilder_qo79nd_k$ = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qo79nd_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).readElement_btg9b5_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_piqb6l_k$(decoder.decodeShortElement_zjkfm_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(ShortArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_btg9b5_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).writeContent_i3wixd_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_2nnlvd_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_i3wixd_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).collectionSize_7x6uq1_k$ = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_7x6uq1_k$(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).toBuilder_t2je0m_k$ = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_t2je0m_k$(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).empty_weo4py_k$ = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UShortArray(this.empty_weo4py_k$());
  };
  protoOf(UShortArraySerializer_0).readElement_5ne2lw_k$ = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.decodeInlineElement_ddno8l_k$(this.get_descriptor_wjt6a0_k$(), index).decodeShort_jjqk32_k$();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.append_odsu7y_k$(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_5ne2lw_k$(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).writeContent_2ebjb2_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_9d3ws3_k$(this.get_descriptor_wjt6a0_k$(), i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.encodeShort_rh3vxz_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_2ebjb2_k$(encoder, content instanceof UShortArray ? content.storage_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).collectionSize_qzl5wq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_qzl5wq_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).toBuilder_rgttij_k$ = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_rgttij_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).readElement_9ieobv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_jiz7k1_k$(decoder.decodeByteElement_76b0gq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(ByteArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_9ieobv_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).writeContent_16s3nh_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_r2fm3n_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_16s3nh_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).collectionSize_a93oi1_k$ = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_a93oi1_k$(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).toBuilder_p3k0a0_k$ = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_p3k0a0_k$(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).empty_hwzzgs_k$ = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UByteArray(this.empty_hwzzgs_k$());
  };
  protoOf(UByteArraySerializer_0).readElement_8mbujm_k$ = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.decodeInlineElement_ddno8l_k$(this.get_descriptor_wjt6a0_k$(), index).decodeByte_jzz7je_k$();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.append_e5ssck_k$(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_8mbujm_k$(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).writeContent_gpy59s_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_9d3ws3_k$(this.get_descriptor_wjt6a0_k$(), i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.encodeByte_gpyndp_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_gpy59s_k$(encoder, content instanceof UByteArray ? content.storage_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).collectionSize_keckzw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_keckzw_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).toBuilder_uo58bx_k$ = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_uo58bx_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).readElement_kzf5fx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_l5nnnz_k$(decoder.decodeBooleanElement_3vswy_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(BooleanArraySerializer_0).readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_kzf5fx_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).writeContent_j8grad_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_2l5aov_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j8grad_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(CharArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(CharArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(CharArrayBuilder).append_y20c3x_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(DoubleArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(DoubleArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).append_g44bp4_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_1($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_1($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_1($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(FloatArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(FloatArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).append_urs3el_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_2($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_2($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_2($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(LongArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(LongArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(LongArrayBuilder).append_gvce4t_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_3($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_3($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_3($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(ULongArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ULongArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.buffer_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.buffer_1), 2));
      tmp.buffer_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(ULongArrayBuilder).append_gtflrs_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).build_4n2335_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.buffer_1;
    var tmp1_copyOf = this.position_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(ULongArrayBuilder).build_1k0s4u_k$ = function () {
    return new ULongArray(this.build_4n2335_k$());
  };
  function _set_buffer__uxh4x5_4($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_4($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_4($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(IntArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(IntArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(IntArrayBuilder).append_da0tyi_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_5($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_5($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(UIntArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(UIntArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.buffer_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.buffer_1), 2));
      tmp.buffer_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UIntArrayBuilder).append_xmuk35_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).build_mq7a6e_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.buffer_1;
    var tmp1_copyOf = this.position_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UIntArrayBuilder).build_1k0s4u_k$ = function () {
    return new UIntArray(this.build_mq7a6e_k$());
  };
  function _set_buffer__uxh4x5_6($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_6($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_6($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(ShortArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ShortArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).append_piqb6l_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_7($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_7($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_7($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(UShortArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(UShortArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.buffer_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.buffer_1), 2));
      tmp.buffer_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UShortArrayBuilder).append_odsu7y_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).build_o7ynfr_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.buffer_1;
    var tmp1_copyOf = this.position_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UShortArrayBuilder).build_1k0s4u_k$ = function () {
    return new UShortArray(this.build_o7ynfr_k$());
  };
  function _set_buffer__uxh4x5_8($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_8($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_8($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(ByteArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ByteArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).append_jiz7k1_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_9($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_9($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_9($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(UByteArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(UByteArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.buffer_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.buffer_1), 2));
      tmp.buffer_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UByteArrayBuilder).append_e5ssck_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).build_vef1m3_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.buffer_1;
    var tmp1_copyOf = this.position_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UByteArrayBuilder).build_1k0s4u_k$ = function () {
    return new UByteArray(this.build_vef1m3_k$());
  };
  function _set_buffer__uxh4x5_10($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_10($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_10($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  protoOf(BooleanArrayBuilder).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(BooleanArrayBuilder).ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).append_l5nnnz_k$ = function (c) {
    this.ensureCapacity$default_ciqbzq_k$();
    var tmp = this.buffer_1;
    var tmp1 = this.position_1;
    this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).build_1k0s4u_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  function get_INITIAL_SIZE() {
    return INITIAL_SIZE;
  }
  var INITIAL_SIZE;
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DoubleSerializer).serialize_jhnp8j_k$ = function (encoder, value) {
    return encoder.encodeDouble_79ztsb_k$(value);
  };
  protoOf(DoubleSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jhnp8j_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ShortSerializer).serialize_tz9ag_k$ = function (encoder, value) {
    return encoder.encodeShort_rh3vxz_k$(value);
  };
  protoOf(ShortSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tz9ag_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(CharSerializer).serialize_t91c8o_k$ = function (encoder, value) {
    return encoder.encodeChar_kkx54x_k$(value);
  };
  protoOf(CharSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_t91c8o_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  protoOf(CharSerializer).deserialize_a5cptt_k$ = function (decoder) {
    return decoder.decodeChar_dc2jtx_k$();
  };
  protoOf(CharSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new Char(this.deserialize_a5cptt_k$(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LongSerializer).serialize_95a0ia_k$ = function (encoder, value) {
    return encoder.encodeLong_rk3ab9_k$(value);
  };
  protoOf(LongSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_95a0ia_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ByteSerializer).serialize_bswtxi_k$ = function (encoder, value) {
    return encoder.encodeByte_gpyndp_k$(value);
  };
  protoOf(ByteSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bswtxi_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  protoOf(UnitSerializer).deserialize_a513f7_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  protoOf(UnitSerializer).deserialize_2t41fm_k$ = function (decoder) {
    this.deserialize_a513f7_k$(decoder);
    return Unit_getInstance();
  };
  protoOf(UnitSerializer).serialize_x908om_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x908om_k$(encoder, value instanceof Unit ? value : THROW_CCE());
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
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementName_ykpypc_k$ = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementIndex_2hwbkl_k$ = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).isElementOptional_c3hgb3_k$ = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementDescriptor_sqz94k_k$ = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementAnnotations_a57oar_k$ = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(StringSerializer).serialize_xxlebn_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value);
  };
  protoOf(StringSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xxlebn_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().get_1mhr4y_k$(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(BooleanSerializer).serialize_bl0ez0_k$ = function (encoder, value) {
    return encoder.encodeBoolean_6cztl5_k$(value);
  };
  protoOf(BooleanSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bl0ez0_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(IntSerializer).serialize_ui7jaz_k$ = function (encoder, value) {
    return encoder.encodeInt_5vxmon_k$(value);
  };
  protoOf(IntSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ui7jaz_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FloatSerializer).serialize_4f2ixk_k$ = function (encoder, value) {
    return encoder.encodeFloat_f5fde1_k$(value);
  };
  protoOf(FloatSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4f2ixk_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().get_keys_wop4xp_k$();
    var tmp0_iterator = keys.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var primitive = tmp0_iterator.next_20eer_k$();
      var simpleName = capitalize(ensureNotNull(primitive.get_simpleName_r6f8py_k$()));
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
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$(), serializer_8(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$(), serializer_10(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), serializer_12(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_getInstance())), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function SerializationConstructorMarker() {
  }
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).getTag_8zycz2_k$ = function (_this__u8e3s4, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).elementName_9sehmv_k$ = function (descriptor, index) {
    return descriptor.getElementName_ykpypc_k$(index);
  };
  protoOf(NamedValueEncoder).composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).getTag_8zycz2_k$ = function (_this__u8e3s4, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).elementName_9sehmv_k$ = function (desc, index) {
    return desc.getElementName_ykpypc_k$(index);
  };
  protoOf(NamedValueDecoder).composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.getTag_8zycz2_k$(desc, index);
    $this.pushTag_2jen4a_k$(tag);
    return true;
  }
  function _get_tagStack__hmgdc3($this) {
    return $this.tagStack_1;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.tagStack_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).get_serializersModule_piitvg_k$ = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(TaggedEncoder).encodeTaggedNonNullMark_sr1znb_k$ = function (tag) {
  };
  protoOf(TaggedEncoder).encodeTaggedNull_qi5bv1_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, new Char(value));
  };
  protoOf(TaggedEncoder).encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  protoOf(TaggedEncoder).encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedValue_rik3ib_k$(tag, ordinal);
  };
  protoOf(TaggedEncoder).encodeTaggedInline_nljf4l_k$ = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedEncoder.encodeTaggedInline.<anonymous>' call
    this.pushTag_2jen4a_k$(tag);
    return this;
  };
  protoOf(TaggedEncoder).encodeInline_8gn4q6_k$ = function (descriptor) {
    return this.encodeTaggedInline_nljf4l_k$(this.popTag_g8zwqf_k$(), descriptor);
  };
  protoOf(TaggedEncoder).encodeNotNullMark_40lhgg_k$ = function () {
    return this.encodeTaggedNonNullMark_sr1znb_k$(this.get_currentTag_wui9re_k$());
  };
  protoOf(TaggedEncoder).encodeNull_ek2hec_k$ = function () {
    return this.encodeTaggedNull_qi5bv1_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedEncoder).encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeByte_gpyndp_k$ = function (value) {
    return this.encodeTaggedByte_e5naty_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeInt_5vxmon_k$ = function (value) {
    return this.encodeTaggedInt_ndzaig_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeTaggedLong_68sg4u_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeChar_kkx54x_k$ = function (value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeString_90sumj_k$ = function (value) {
    return this.encodeTaggedString_ault6k_k$(this.popTag_g8zwqf_k$(), value);
  };
  protoOf(TaggedEncoder).encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeTaggedEnum_j126tp_k$(this.popTag_g8zwqf_k$(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).endStructure_e64gd4_k$ = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.tagStack_1.isEmpty_y1axqb_k$()) {
      this.popTag_g8zwqf_k$();
    }
    this.endEncode_2disap_k$(descriptor);
  };
  protoOf(TaggedEncoder).endEncode_2disap_k$ = function (descriptor) {
  };
  protoOf(TaggedEncoder).encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    return this.encodeTaggedByte_e5naty_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedInt_ndzaig_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    return this.encodeTaggedLong_68sg4u_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    return this.encodeTaggedString_ault6k_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  protoOf(TaggedEncoder).encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return this.encodeTaggedInline_nljf4l_k$(this.getTag_8zycz2_k$(descriptor, index), descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  protoOf(TaggedEncoder).encodeSerializableElement_cw68jm_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.encodeSerializableValue_g55msp_k$(serializer, value);
    }
  };
  protoOf(TaggedEncoder).encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.encodeNullableSerializableValue_4n8qik_k$(serializer, value);
    }
  };
  protoOf(TaggedEncoder).get_currentTag_wui9re_k$ = function () {
    return last(this.tagStack_1);
  };
  protoOf(TaggedEncoder).get_currentTagOrNull_yhyzw_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  protoOf(TaggedEncoder).pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
  };
  protoOf(TaggedEncoder).popTag_g8zwqf_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.tagStack_1.isEmpty_y1axqb_k$()) {
      tmp = this.tagStack_1.removeAt_qvpkxi_k$(get_lastIndex_0(this.tagStack_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.pushTag_2jen4a_k$(tag);
    var r = block();
    if (!$this.flag_1) {
      $this.popTag_g8zwqf_k$();
    }
    $this.flag_1 = false;
    return r;
  }
  function _get_tagStack__hmgdc3_0($this) {
    return $this.tagStack_1;
  }
  function _set_flag__9mskff($this, _set____db54di) {
    $this.flag_1 = _set____db54di;
  }
  function _get_flag__d6kk0v($this) {
    return $this.flag_1;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeSerializableValue_gjomdq_k$($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeNotNullMark_us4ba1_k$() ? this$0.decodeSerializableValue_gjomdq_k$($deserializer, $previousValue) : this$0.decodeNull_jzrmuj_k$();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.tagStack_1 = ArrayList_init_$Create$_0();
    this.flag_1 = false;
  }
  protoOf(TaggedDecoder).get_serializersModule_piitvg_k$ = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).decodeTaggedValue_b9nx02_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return null;
  };
  protoOf(TaggedDecoder).decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedByte_weg8ir_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedShort_9lw2oz_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedInt_rqx040_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedLong_z7jgpd_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedFloat_azhupv_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedDouble_qq3qze_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedChar_xsxsj0_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedString_5es7hi_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).decodeTaggedInline_lzvm4z_k$ = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.pushTag_2jen4a_k$(tag);
    return this;
  };
  protoOf(TaggedDecoder).decodeSerializableValue_gjomdq_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_6v83lo_k$(deserializer);
  };
  protoOf(TaggedDecoder).decodeInline_k1q7ba_k$ = function (descriptor) {
    return this.decodeTaggedInline_lzvm4z_k$(this.popTag_g8zwqf_k$(), descriptor);
  };
  protoOf(TaggedDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.decodeTaggedNotNullMark_lc2tyw_k$(currentTag);
  };
  protoOf(TaggedDecoder).decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  protoOf(TaggedDecoder).decodeBoolean_m0aca_k$ = function () {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeByte_jzz7je_k$ = function () {
    return this.decodeTaggedByte_weg8ir_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeShort_jjqk32_k$ = function () {
    return this.decodeTaggedShort_9lw2oz_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeInt_8iq8f5_k$ = function () {
    return this.decodeTaggedInt_rqx040_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeLong_jzt186_k$ = function () {
    return this.decodeTaggedLong_z7jgpd_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeFloat_jcnrwu_k$ = function () {
    return this.decodeTaggedFloat_azhupv_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeDouble_ur8l0f_k$ = function () {
    return this.decodeTaggedDouble_qq3qze_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeChar_dc2jtx_k$ = function () {
    return this.decodeTaggedChar_xsxsj0_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeString_x3hxsx_k$ = function () {
    return this.decodeTaggedString_5es7hi_k$(this.popTag_g8zwqf_k$());
  };
  protoOf(TaggedDecoder).decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return this.decodeTaggedEnum_jxsvth_k$(this.popTag_g8zwqf_k$(), enumDescriptor);
  };
  protoOf(TaggedDecoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).endStructure_e64gd4_k$ = function (descriptor) {
  };
  protoOf(TaggedDecoder).decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeTaggedByte_weg8ir_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeTaggedShort_9lw2oz_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeTaggedInt_rqx040_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeTaggedLong_z7jgpd_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeTaggedFloat_azhupv_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeTaggedDouble_qq3qze_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeTaggedChar_xsxsj0_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeTaggedString_5es7hi_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  protoOf(TaggedDecoder).decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return this.decodeTaggedInline_lzvm4z_k$(this.getTag_8zycz2_k$(descriptor, index), descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  protoOf(TaggedDecoder).decodeSerializableElement_nrfur_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).decodeNullableSerializableElement_1n5pmg_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).get_currentTag_wui9re_k$ = function () {
    return last(this.tagStack_1);
  };
  protoOf(TaggedDecoder).get_currentTagOrNull_yhyzw_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  protoOf(TaggedDecoder).pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
  };
  protoOf(TaggedDecoder).copyTagsTo_jzbkv7_k$ = function (other) {
    other.tagStack_1.addAll_oxxjjk_k$(this.tagStack_1);
  };
  protoOf(TaggedDecoder).popTag_g8zwqf_k$ = function () {
    var r = this.tagStack_1.removeAt_qvpkxi_k$(get_lastIndex_0(this.tagStack_1));
    this.flag_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  protoOf(MapEntry).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(MapEntry).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(MapEntry).component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  protoOf(MapEntry).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(MapEntry).copy_8d20yw_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  protoOf(MapEntry).copy$default_ogtmn4_k$ = function (key, value, $super) {
    key = key === VOID ? this.key_1 : key;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_8d20yw_k$(key, value) : $super.copy_8d20yw_k$.call(this, key, value);
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.key_1 + ', value=' + this.value_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.key_1 == null ? 0 : hashCode(this.key_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.key_1, tmp0_other_with_cast.key_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('key', $keySerializer.get_descriptor_wjt6a0_k$());
      $this$buildSerialDescriptor.element$default_r6n2dg_k$('value', $valueSerializer.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(MapEntrySerializer_0).get_key_xwaw0y_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_key_18j28a_k$();
  };
  protoOf(MapEntrySerializer_0).get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_xwaw0y_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).get_value_ajqqfk_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_value_j01efc_k$();
  };
  protoOf(MapEntrySerializer_0).get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_ajqqfk_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).toResult_qr0m57_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.element$default_r6n2dg_k$('first', $keySerializer.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_r6n2dg_k$('second', $valueSerializer.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(PairSerializer_0).get_key_70crl3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_first_irdx8n_k$();
  };
  protoOf(PairSerializer_0).get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_70crl3_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).get_value_bt5arr_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_second_jf7fjx_k$();
  };
  protoOf(PairSerializer_0).get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_bt5arr_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).toResult_qr0m57_k$ = function (key, value) {
    return to(key, value);
  };
  function _get_aSerializer__qgvori($this) {
    return $this.aSerializer_1;
  }
  function _get_bSerializer__slqdml($this) {
    return $this.bSerializer_1;
  }
  function _get_cSerializer__uql2ho($this) {
    return $this.cSerializer_1;
  }
  function decodeSequentially_1($this, composite) {
    var a = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 0, $this.aSerializer_1);
    var b = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 1, $this.bSerializer_1);
    var c = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 2, $this.cSerializer_1);
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_nk5a2l_k$($this.descriptor_1);
      if (index === Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$()) {
        break mainLoop;
      } else if (index === 0) {
        a = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 0, $this.aSerializer_1);
      } else if (index === 1) {
        b = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 1, $this.bSerializer_1);
      } else if (index === 2) {
        c = composite.decodeSerializableElement$default_qqku8y_k$($this.descriptor_1, 2, $this.cSerializer_1);
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.element$default_r6n2dg_k$('first', this$0.aSerializer_1.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_r6n2dg_k$('second', this$0.bSerializer_1.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_r6n2dg_k$('third', this$0.cSerializer_1.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_1 = aSerializer;
    this.bSerializer_1 = bSerializer;
    this.cSerializer_1 = cSerializer;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TripleSerializer_0).serialize_dxgg6y_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 0, this.aSerializer_1, value.get_first_irdx8n_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 1, this.bSerializer_1, value.get_second_jf7fjx_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 2, this.cSerializer_1, value.get_third_iz27um_k$());
    structuredEncoder.endStructure_e64gd4_k$(this.descriptor_1);
  };
  protoOf(TripleSerializer_0).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_dxgg6y_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    if (composite.decodeSequentially_xlblqy_k$()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  protoOf(KeyValueSerializer).get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  protoOf(KeyValueSerializer).serialize_n6wuhj_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1, this.get_key_c7qyp5_k$(value));
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1, this.get_value_455tcn_k$(value));
    structuredEncoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  protoOf(KeyValueSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_n6wuhj_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (composite.decodeSequentially_xlblqy_k$()) {
      var key = composite.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1);
      var value = composite.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1);
      return this.toResult_qr0m57_k$(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
      if (idx === Companion_getInstance_7().get_DECODE_DONE_1b8fna_k$()) {
        break mainLoop;
      } else if (idx === 0) {
        key_0 = composite.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1);
      } else if (idx === 1) {
        value_0 = composite.decodeSerializableElement$default_qqku8y_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1);
      } else
        throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
    }
    composite.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'value' is missing");
    var tmp = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.toResult_qr0m57_k$(tmp, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
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
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ULongSerializer).serialize_ruyvqb_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.encodeLong_rk3ab9_k$(tmp$ret$0);
  };
  protoOf(ULongSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ruyvqb_k$(encoder, value instanceof ULong ? value.data_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).deserialize_u83bco_k$ = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeLong_jzt186_k$();
    return _ULong___init__impl__c78o9k(tmp0_toULong);
  };
  protoOf(ULongSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new ULong(this.deserialize_u83bco_k$(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UIntSerializer).serialize_to749g_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.encodeInt_5vxmon_k$(tmp$ret$0);
  };
  protoOf(UIntSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_to749g_k$(encoder, value instanceof UInt ? value.data_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).deserialize_a51uql_k$ = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeInt_8iq8f5_k$();
    return _UInt___init__impl__l7qpdl(tmp0_toUInt);
  };
  protoOf(UIntSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new UInt(this.deserialize_a51uql_k$(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UShortSerializer).serialize_b1j6tj_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.encodeShort_rh3vxz_k$(tmp$ret$0);
  };
  protoOf(UShortSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_b1j6tj_k$(encoder, value instanceof UShort ? value.data_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).deserialize_dgnxw0_k$ = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeShort_jjqk32_k$();
    return _UShort___init__impl__jigrne(tmp0_toUShort);
  };
  protoOf(UShortSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new UShort(this.deserialize_dgnxw0_k$(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UByteSerializer).serialize_uilp5j_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.encodeByte_gpyndp_k$(tmp$ret$0);
  };
  protoOf(UByteSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_uilp5j_k$(encoder, value instanceof UByte ? value.data_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).deserialize_u89hnw_k$ = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeByte_jzz7je_k$();
    return _UByte___init__impl__g9hnc4(tmp0_toUByte);
  };
  protoOf(UByteSerializer).deserialize_2t41fm_k$ = function (decoder) {
    return new UByte(this.deserialize_u89hnw_k$(decoder));
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
  protoOf(SerializersModule).getContextual_fgazl8_k$ = function (kclass) {
    return this.getContextual_r3x7wt_k$(kclass, emptyList());
  };
  protoOf(SerializersModule).getContextual$default_9ols70_k$ = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.getContextual_r3x7wt_k$(kClass, typeArgumentsSerializers) : $super.getContextual_r3x7wt_k$.call(this, kClass, typeArgumentsSerializers);
  };
  function _get_class2ContextualFactory__qh9mum($this) {
    return $this.class2ContextualFactory_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.class2ContextualFactory_1 = class2ContextualFactory;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_1 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).get_polyBase2Serializers_eilxqt_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  protoOf(SerialModuleImpl).getPolymorphic_38ak3b_k$ = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.polyBase2DefaultSerializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).getPolymorphic_39bkdo_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_1mhr4y_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).get_1mhr4y_k$(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).getContextual_r3x7wt_k$ = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.class2ContextualFactory_1.get_1mhr4y_k$(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_wrqehj_k$(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).dumpTo_q6va1n_k$ = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.class2ContextualFactory_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.get_value_j01efc_k$();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.serializer_1;
        collector.contextual_ki5uma_k$(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.contextual_oi2m58_k$(kclass, serial.provider_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.polyBase2Serializers_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.get_value_j01efc_k$();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.polymorphic_sbh4xj_k$(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.polyBase2DefaultSerializerProvider_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.get_value_j01efc_k$();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.polymorphicDefaultSerializer_g5ty2r_k$(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.polyBase2DefaultDeserializerProvider_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_3 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.get_value_j01efc_k$();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.polymorphicDefaultDeserializer_rsx40t_k$(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer_1 = serializer;
  }
  protoOf(Argless).get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  protoOf(Argless).invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.serializer_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.serializer_1, this.serializer_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider_1 = provider;
  }
  protoOf(WithTypeArguments).get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  protoOf(WithTypeArguments).invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.provider_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
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
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.serializer_1 = serializer;
  }
  protoOf(SerializableWith).get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.serializer_1.equals(tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.serializer_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.serializer_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.isInstance_6tn68w_k$(_this__u8e3s4);
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
    throw SerializationException_init_$Create$_0("Serializer for class '" + _this__u8e3s4.get_simpleName_r6f8py_k$() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$());
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
          var tmp_1 = assocObject.serializer_5xgt5t_k$(args.slice());
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
    this.$factory_1 = $factory;
  }
  protoOf(createCache$1).get_otygyj_k$ = function (key) {
    return this.$factory_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.$factory_1 = $factory;
  }
  protoOf(createParametrizedCache$1).get_2v46ri_k$ = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_6();
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var tmp1_success = this.$factory_1(key, types);
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
  protoOf(SerialDescriptorImpl).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(SerialDescriptorImpl).get_isInline_usk17w_k$ = get_isInline;
  protoOf(AbstractDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(AbstractDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(AbstractDecoder).decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  protoOf(AbstractDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(AbstractDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(AbstractDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(AbstractEncoder).encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  protoOf(AbstractEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(AbstractEncoder).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(AbstractEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(ListLikeDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(ListLikeDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(ArrayListClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(ArrayListClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(ArrayListClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(HashSetClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(HashSetClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(HashSetClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(LinkedHashSetClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(LinkedHashSetClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(LinkedHashSetClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(MapLikeDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(MapLikeDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(MapLikeDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(HashMapClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(HashMapClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(HashMapClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(LinkedHashMapClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(LinkedHashMapClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(LinkedHashMapClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(ArrayClassDesc).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(ArrayClassDesc).get_isInline_usk17w_k$ = get_isInline;
  protoOf(ArrayClassDesc).get_annotations_20dirp_k$ = get_annotations;
  protoOf(PrimitiveArrayDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(PrimitiveArrayDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(PrimitiveArrayDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(EnumDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(EnumDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(InlineClassDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf(NoOpEncoder).encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  protoOf(NoOpEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(NoOpEncoder).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(NoOpEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(NoOpEncoder).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(PrimitiveSerialDescriptor_0).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).get_isInline_usk17w_k$ = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).get_annotations_20dirp_k$ = get_annotations;
  protoOf(TaggedEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(TaggedEncoder).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(TaggedEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(NamedValueEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(NamedValueEncoder).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(NamedValueEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(NamedValueEncoder).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(TaggedDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(TaggedDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(TaggedDecoder).decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  protoOf(TaggedDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(TaggedDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(TaggedDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(NamedValueDecoder).decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  protoOf(NamedValueDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(NamedValueDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(NamedValueDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(NamedValueDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(NamedValueDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(createParametrizedCache$1).get$default_kpkkj8_k$ = get$default;
  //endregion
  //region block: init
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  ARRAY_NAME = 'kotlin.Array';
  INITIAL_SIZE = 10;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeNullableSerializableElement$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$_0;
  _.$_$.d = SerializationException_init_$Create$_0;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_getInstance_7;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = serializer_0;
  _.$_$.r = serializer_9;
  _.$_$.s = serializer_7;
  _.$_$.t = serializer_11;
  _.$_$.u = serializer_5;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = ENUM;
  _.$_$.d1 = buildSerialDescriptor;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = decodeCollectionSize;
  _.$_$.i1 = decodeSequentially;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = shouldEncodeElementDefault;
  _.$_$.l1 = CompositeEncoder;
  _.$_$.m1 = decodeNullableSerializableValue;
  _.$_$.n1 = decodeSerializableValue;
  _.$_$.o1 = Decoder;
  _.$_$.p1 = beginCollection;
  _.$_$.q1 = encodeNotNullMark;
  _.$_$.r1 = encodeNullableSerializableValue;
  _.$_$.s1 = encodeSerializableValue;
  _.$_$.t1 = Encoder;
  _.$_$.u1 = AbstractPolymorphicSerializer;
  _.$_$.v1 = ElementMarker;
  _.$_$.w1 = EnumDescriptor;
  _.$_$.x1 = typeParametersSerializers;
  _.$_$.y1 = GeneratedSerializer;
  _.$_$.z1 = NamedValueDecoder;
  _.$_$.a2 = NamedValueEncoder;
  _.$_$.b2 = PluginGeneratedSerialDescriptor;
  _.$_$.c2 = SerializerFactory;
  _.$_$.d2 = jsonCachedSerialNames;
  _.$_$.e2 = throwMissingFieldException;
  _.$_$.f2 = EmptySerializersModule_0;
  _.$_$.g2 = DeserializationStrategy;
  _.$_$.h2 = KSerializer;
  _.$_$.i2 = MissingFieldException;
  _.$_$.j2 = SealedClassSerializer;
  _.$_$.k2 = SerializationException;
  _.$_$.l2 = StringFormat;
  _.$_$.m2 = findPolymorphicSerializer;
  _.$_$.n2 = serializer;
  //endregion
  return _;
}));
