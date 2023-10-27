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
  var protoOf = kotlin_kotlin.$_$.ea;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.fa;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.z3;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var emptyList = kotlin_kotlin.$_$.y5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.be;
  var classMeta = kotlin_kotlin.$_$.w8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var objectCreate = kotlin_kotlin.$_$.ca;
  var captureStack = kotlin_kotlin.$_$.q8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException = kotlin_kotlin.$_$.zc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.fd;
  var KClass = kotlin_kotlin.$_$.ra;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Triple = kotlin_kotlin.$_$.hd;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.cd;
  var Entry = kotlin_kotlin.$_$.y4;
  var LinkedHashMap = kotlin_kotlin.$_$.v4;
  var MutableMap = kotlin_kotlin.$_$.c5;
  var Map = kotlin_kotlin.$_$.z4;
  var HashMap = kotlin_kotlin.$_$.t4;
  var LinkedHashSet = kotlin_kotlin.$_$.w4;
  var MutableSet = kotlin_kotlin.$_$.d5;
  var Set = kotlin_kotlin.$_$.e5;
  var HashSet = kotlin_kotlin.$_$.u4;
  var ArrayList = kotlin_kotlin.$_$.r4;
  var MutableList = kotlin_kotlin.$_$.a5;
  var List = kotlin_kotlin.$_$.x4;
  var Collection = kotlin_kotlin.$_$.s4;
  var copyToArray = kotlin_kotlin.$_$.w5;
  var toString = kotlin_kotlin.$_$.ja;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.e2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var isObject = kotlin_kotlin.$_$.t9;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.f2;
  var Result = kotlin_kotlin.$_$.dd;
  var ensureNotNull = kotlin_kotlin.$_$.xd;
  var equals = kotlin_kotlin.$_$.z8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var isBlank = kotlin_kotlin.$_$.jb;
  var toList = kotlin_kotlin.$_$.n7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.k7;
  var toBooleanArray = kotlin_kotlin.$_$.j7;
  var withIndex = kotlin_kotlin.$_$.s7;
  var to = kotlin_kotlin.$_$.me;
  var toMap = kotlin_kotlin.$_$.o7;
  var lazy_0 = kotlin_kotlin.$_$.ce;
  var contentEquals = kotlin_kotlin.$_$.l5;
  var until = kotlin_kotlin.$_$.qa;
  var joinToString = kotlin_kotlin.$_$.l6;
  var objectMeta = kotlin_kotlin.$_$.da;
  var Long = kotlin_kotlin.$_$.bd;
  var Char = kotlin_kotlin.$_$.tc;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.y1;
  var Duration = kotlin_kotlin.$_$.rc;
  var Companion_getInstance = kotlin_kotlin.$_$.b4;
  var toIntOrNull = kotlin_kotlin.$_$.fc;
  var hashCode = kotlin_kotlin.$_$.f9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.i9;
  var arrayIterator = kotlin_kotlin.$_$.o8;
  var asList = kotlin_kotlin.$_$.i5;
  var step = kotlin_kotlin.$_$.pa;
  var getValue = kotlin_kotlin.$_$.h6;
  var longArray = kotlin_kotlin.$_$.x9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var get_lastIndex = kotlin_kotlin.$_$.o6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.vd;
  var fillArrayVal = kotlin_kotlin.$_$.a9;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var KTypeParameter = kotlin_kotlin.$_$.wa;
  var booleanArray = kotlin_kotlin.$_$.p8;
  var emptyMap = kotlin_kotlin.$_$.z5;
  var contentHashCode = kotlin_kotlin.$_$.m5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.c4;
  var isCharArray = kotlin_kotlin.$_$.l9;
  var charArray = kotlin_kotlin.$_$.s8;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var isDoubleArray = kotlin_kotlin.$_$.n9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w3;
  var isFloatArray = kotlin_kotlin.$_$.o9;
  var isLongArray = kotlin_kotlin.$_$.r9;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.h4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.g3;
  var ULongArray = kotlin_kotlin.$_$.md;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.c3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.z2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.e3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.a3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x3;
  var isIntArray = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.g4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.x2;
  var UIntArray = kotlin_kotlin.$_$.kd;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.t2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.q2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.v2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.r2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.y3;
  var isShortArray = kotlin_kotlin.$_$.u9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.i4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.p3;
  var UShortArray = kotlin_kotlin.$_$.od;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.l3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.n3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.u3;
  var isByteArray = kotlin_kotlin.$_$.k9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.f4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.o2;
  var UByteArray = kotlin_kotlin.$_$.id;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.l2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.h2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.m2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.t3;
  var isBooleanArray = kotlin_kotlin.$_$.j9;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var copyOf = kotlin_kotlin.$_$.q5;
  var copyOf_0 = kotlin_kotlin.$_$.s5;
  var copyOf_1 = kotlin_kotlin.$_$.t5;
  var copyOf_2 = kotlin_kotlin.$_$.o5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.h3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.d3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.f3;
  var copyOf_3 = kotlin_kotlin.$_$.v5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.y2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.u2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.w2;
  var copyOf_4 = kotlin_kotlin.$_$.n5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.q3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.m3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.o3;
  var copyOf_5 = kotlin_kotlin.$_$.r5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.p2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.k2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.n2;
  var copyOf_6 = kotlin_kotlin.$_$.p5;
  var Unit = kotlin_kotlin.$_$.qd;
  var trimIndent = kotlin_kotlin.$_$.oc;
  var equals_0 = kotlin_kotlin.$_$.gb;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var toString_0 = kotlin_kotlin.$_$.c2;
  var titlecase = kotlin_kotlin.$_$.bc;
  var isLowerCase = kotlin_kotlin.$_$.kb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a4;
  var ULong = kotlin_kotlin.$_$.nd;
  var UInt = kotlin_kotlin.$_$.ld;
  var UShort = kotlin_kotlin.$_$.pd;
  var UByte = kotlin_kotlin.$_$.jd;
  var mapOf = kotlin_kotlin.$_$.y6;
  var lastOrNull = kotlin_kotlin.$_$.r6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.p6;
  var get_js = kotlin_kotlin.$_$.v9;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.k6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var get_indices_0 = kotlin_kotlin.$_$.j6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.wd;
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
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
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
    return deserializer.g2p(this);
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
    return $super === VOID ? this.q2s(descriptor, index, deserializer, previousValue) : $super.q2s.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.e2s(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.f2p(this, value);
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
      $this$buildSerialDescriptor.p2p('type', serializer_0(StringCompanionObject_getInstance()).e2p());
      $this$buildSerialDescriptor.p2p('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.q2p_1.qd() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.j2p_1 = this$0.r2p_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.q2p_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.q2p_1 = baseClass;
    this.r2p_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.s2p_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).t2p = function () {
    return this.q2p_1;
  };
  protoOf(PolymorphicSerializer).e2p = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return this.s2p_1.w1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.q2p_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.v2p(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.t2p());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.u2p(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.t2p());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.e2p();
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
    this.w2p_1 = missingFields;
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
        var tmp0_requireNotNull = item.y2p_1;
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
      tmp_5 = _this__u8e3s4.a2q(rootClass);
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
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.z2p(rootClass, serializers) : tmp2_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().b2q(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().b2q(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().c2q(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().c2q(clazz, types);
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
    if (_this__u8e3s4.e2p().d2q()) {
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
    this.e2q_1 = original;
    this.f2q_1 = kClass;
    this.g2q_1 = this.e2q_1.h2q() + '<' + this.f2q_1.qd() + '>';
  }
  protoOf(ContextDescriptor).i2q = function () {
    return this.e2q_1.i2q();
  };
  protoOf(ContextDescriptor).j2q = function () {
    return this.e2q_1.j2q();
  };
  protoOf(ContextDescriptor).k2q = function () {
    return this.e2q_1.k2q();
  };
  protoOf(ContextDescriptor).d2q = function () {
    return this.e2q_1.d2q();
  };
  protoOf(ContextDescriptor).l2q = function () {
    return this.e2q_1.l2q();
  };
  protoOf(ContextDescriptor).m2q = function (index) {
    return this.e2q_1.m2q(index);
  };
  protoOf(ContextDescriptor).n2q = function (index) {
    return this.e2q_1.n2q(index);
  };
  protoOf(ContextDescriptor).o2q = function (name) {
    return this.e2q_1.o2q(name);
  };
  protoOf(ContextDescriptor).p2q = function (index) {
    return this.e2q_1.p2q(index);
  };
  protoOf(ContextDescriptor).q2q = function (index) {
    return this.e2q_1.q2q(index);
  };
  protoOf(ContextDescriptor).h2q = function () {
    return this.g2q_1;
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
    return equals(this.e2q_1, another.e2q_1) ? another.f2q_1.equals(this.f2q_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.f2q_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.g2q_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.f2q_1 + ', original: ' + this.e2q_1 + ')';
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.a2q(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.e2p();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.f2q_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.r2q_1);
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
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.v2q_1 = $this_elementDescriptors;
    this.u2q_1 = $this_elementDescriptors.j2q();
  }
  protoOf(elementDescriptors$1$1).d = function () {
    return this.u2q_1 > 0;
  };
  protoOf(elementDescriptors$1$1).e = function () {
    var tmp = this.v2q_1.j2q();
    var tmp1 = this.u2q_1;
    this.u2q_1 = tmp1 - 1 | 0;
    return this.v2q_1.n2q(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.w2q_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).c = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.w2q_1);
  };
  function elementNames$1$1($this_elementNames) {
    this.y2q_1 = $this_elementNames;
    this.x2q_1 = $this_elementNames.j2q();
  }
  protoOf(elementNames$1$1).d = function () {
    return this.x2q_1 > 0;
  };
  protoOf(elementNames$1$1).e = function () {
    var tmp = this.y2q_1.j2q();
    var tmp1 = this.x2q_1;
    this.x2q_1 = tmp1 - 1 | 0;
    return this.y2q_1.p2q(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.z2q_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).c = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.z2q_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.k2p_1.f(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.h2p_1 = serialName;
    this.i2p_1 = false;
    this.j2p_1 = emptyList();
    this.k2p_1 = ArrayList_init_$Create$_0();
    this.l2p_1 = HashSet_init_$Create$();
    this.m2p_1 = ArrayList_init_$Create$_0();
    this.n2p_1 = ArrayList_init_$Create$_0();
    this.o2p_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).a2r = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.l2p_1.a(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.k2p_1.a(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.m2p_1.a(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.n2p_1.a(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.o2p_1.a(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).p2p = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.a2r(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a2r.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.k2p_1.f(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return $this.m2r_1.w1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.l2r_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.p2q(it) + ': ' + this$0.n2q(it).h2q();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.b2r_1 = serialName;
    this.c2r_1 = kind;
    this.d2r_1 = elementsCount;
    this.e2r_1 = builder.j2p_1;
    this.f2r_1 = toHashSet(builder.k2p_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.k2p_1;
    tmp.g2r_1 = copyToArray(tmp0_toTypedArray);
    this.h2r_1 = compactArray(builder.m2p_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.n2p_1;
    tmp_0.i2r_1 = copyToArray(tmp0_toTypedArray_0);
    this.j2r_1 = toBooleanArray(builder.o2p_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.g2r_1);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.u2_1, item.t2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp_1.k2r_1 = toMap(tmp0_mapTo);
    this.l2r_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.m2r_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).h2q = function () {
    return this.b2r_1;
  };
  protoOf(SerialDescriptorImpl).l2q = function () {
    return this.c2r_1;
  };
  protoOf(SerialDescriptorImpl).j2q = function () {
    return this.d2r_1;
  };
  protoOf(SerialDescriptorImpl).i2q = function () {
    return this.e2r_1;
  };
  protoOf(SerialDescriptorImpl).n2r = function () {
    return this.f2r_1;
  };
  protoOf(SerialDescriptorImpl).p2q = function (index) {
    return getChecked(this.g2r_1, index);
  };
  protoOf(SerialDescriptorImpl).o2q = function (name) {
    var tmp0_elvis_lhs = this.k2r_1.h2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).m2q = function (index) {
    return getChecked(this.i2r_1, index);
  };
  protoOf(SerialDescriptorImpl).n2q = function (index) {
    return getChecked(this.h2r_1, index);
  };
  protoOf(SerialDescriptorImpl).q2q = function (index) {
    return getChecked_0(this.j2r_1, index);
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
      if (!(this.h2q() === other.h2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.l2r_1, other.l2r_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2q() === other.j2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2q();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2q(index).h2q() === other.n2q(index).h2q())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2q(index).l2q(), other.n2q(index).l2q())) {
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
    var tmp = until(0, this.d2r_1);
    var tmp_0 = this.b2r_1 + '(';
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
  protoOf(AbstractDecoder).o2r = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).p2r = function () {
    return true;
  };
  protoOf(AbstractDecoder).q2r = function () {
    return null;
  };
  protoOf(AbstractDecoder).r2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).s2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).t2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v2r = function () {
    var tmp = this.o2r();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y2r = function () {
    var tmp = this.o2r();
    return tmp instanceof Char ? tmp.n5_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).z2r = function () {
    var tmp = this.o2r();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a2s = function (enumDescriptor) {
    var tmp = this.o2r();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).b2s = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).c2s = function (deserializer, previousValue) {
    return this.d2s(deserializer);
  };
  protoOf(AbstractDecoder).e2s = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).f2s = function (descriptor) {
  };
  protoOf(AbstractDecoder).g2s = function (descriptor, index) {
    return this.r2r();
  };
  protoOf(AbstractDecoder).h2s = function (descriptor, index) {
    return this.s2r();
  };
  protoOf(AbstractDecoder).i2s = function (descriptor, index) {
    return this.t2r();
  };
  protoOf(AbstractDecoder).j2s = function (descriptor, index) {
    return this.u2r();
  };
  protoOf(AbstractDecoder).k2s = function (descriptor, index) {
    return this.v2r();
  };
  protoOf(AbstractDecoder).l2s = function (descriptor, index) {
    return this.w2r();
  };
  protoOf(AbstractDecoder).m2s = function (descriptor, index) {
    return this.x2r();
  };
  protoOf(AbstractDecoder).n2s = function (descriptor, index) {
    return this.y2r();
  };
  protoOf(AbstractDecoder).o2s = function (descriptor, index) {
    return this.z2r();
  };
  protoOf(AbstractDecoder).p2s = function (descriptor, index) {
    return this.b2s(descriptor.n2q(index));
  };
  protoOf(AbstractDecoder).q2s = function (descriptor, index, deserializer, previousValue) {
    return this.c2s(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).e2s = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).f2s = function (descriptor) {
  };
  protoOf(AbstractEncoder).w2s = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).x2s = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).y2s = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).z2s = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).a2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).b2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).c2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).d2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).e2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).f2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).g2t = function (value) {
    return this.x2s(new Char(value));
  };
  protoOf(AbstractEncoder).h2t = function (value) {
    return this.x2s(value);
  };
  protoOf(AbstractEncoder).i2t = function (enumDescriptor, index) {
    return this.x2s(index);
  };
  protoOf(AbstractEncoder).j2t = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).k2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.z2s(value);
    }
  };
  protoOf(AbstractEncoder).l2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.a2t(value);
    }
  };
  protoOf(AbstractEncoder).m2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.b2t(value);
    }
  };
  protoOf(AbstractEncoder).n2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.c2t(value);
    }
  };
  protoOf(AbstractEncoder).o2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.d2t(value);
    }
  };
  protoOf(AbstractEncoder).p2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.e2t(value);
    }
  };
  protoOf(AbstractEncoder).q2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.f2t(value);
    }
  };
  protoOf(AbstractEncoder).r2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.g2t(value);
    }
  };
  protoOf(AbstractEncoder).s2t = function (descriptor, index, value) {
    if (this.w2s(descriptor, index)) {
      this.h2t(value);
    }
  };
  protoOf(AbstractEncoder).t2t = function (descriptor, index) {
    return this.w2s(descriptor, index) ? this.j2t(descriptor.n2q(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).u2t = function (descriptor, index, serializer, value) {
    if (this.w2s(descriptor, index)) {
      this.v2t(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.z2t_1 = -1;
    this.a2u_1 = -3;
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
    var klassName = compositeDecoder.o2s($this.e2p(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.r2s($this.e2p(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).f2p = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.e2p();
    var composite = encoder.e2s(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.s2t(this.e2p(), 0, actualSerializer.e2p().h2q());
    var tmp = this.e2p();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.u2t(tmp, 1, tmp$ret$0, value);
    composite.f2s(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).g2p = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.e2p();
    var composite = decoder.e2s(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.t2s()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.u2s(this.e2p());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.o2s(this.e2p(), index);
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
              value = composite.r2s(this.e2p(), index, serializer);
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
    composite.f2s(tmp0_decodeStructure);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).u2p = function (decoder, klassName) {
    return decoder.s2s().b2u(this.t2p(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).v2p = function (encoder, value) {
    return encoder.s2s().c2u(this.t2p(), value);
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
    this.d2u_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).e2p = function () {
    return this.d2u_1;
  };
  protoOf(DurationSerializer).e2u = function (encoder, value) {
    encoder.h2t(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).f2p = function (encoder, value) {
    return this.e2u(encoder, value instanceof Duration ? value.n6_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).f2u = function (decoder) {
    return Companion_getInstance().l6(decoder.z2r());
  };
  protoOf(DurationSerializer).g2p = function (decoder) {
    return new Duration(this.f2u(decoder));
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
  protoOf(ArrayListClassDesc).h2q = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).h2q = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).h2q = function () {
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
  protoOf(ArrayClassDesc).h2q = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.i2u_1 = elementDescriptor;
    this.j2u_1 = 1;
  }
  protoOf(ListLikeDescriptor).l2q = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).j2q = function () {
    return this.j2u_1;
  };
  protoOf(ListLikeDescriptor).p2q = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).o2q = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).q2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).m2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).n2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.i2u_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.i2u_1, other.i2u_1) ? this.h2q() === other.h2q() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.i2u_1), 31) + getStringHashCode(this.h2q()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.h2q() + '(' + this.i2u_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.o2u_1 = serialName;
    this.p2u_1 = keyDescriptor;
    this.q2u_1 = valueDescriptor;
    this.r2u_1 = 2;
  }
  protoOf(MapLikeDescriptor).h2q = function () {
    return this.o2u_1;
  };
  protoOf(MapLikeDescriptor).l2q = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).j2q = function () {
    return this.r2u_1;
  };
  protoOf(MapLikeDescriptor).p2q = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).o2q = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).q2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).m2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).n2q = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.h2q() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.p2u_1;
        break;
      case 1:
        tmp = this.q2u_1;
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
    if (!(this.h2q() === other.h2q()))
      return false;
    if (!equals(this.p2u_1, other.p2u_1))
      return false;
    if (!equals(this.q2u_1, other.q2u_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.h2q());
    result = imul(31, result) + hashCode(this.p2u_1) | 0;
    result = imul(31, result) + hashCode(this.q2u_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.h2q() + '(' + this.p2u_1 + ', ' + this.q2u_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.w2u_1 = primitive.h2q() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).h2q = function () {
    return this.w2u_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.y2u_1 = new ArrayListClassDesc(element.e2p());
  }
  protoOf(ArrayListSerializer).e2p = function () {
    return this.y2u_1;
  };
  protoOf(ArrayListSerializer).x13 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).z2u = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(ArrayListSerializer).a2v = function (_this__u8e3s4) {
    return this.z2u(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).b2v = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).c2v = function (_this__u8e3s4) {
    return this.b2v(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).d2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).e2v = function (_this__u8e3s4) {
    return this.d2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).f2v = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(ArrayListSerializer).g2v = function (_this__u8e3s4, size) {
    return this.f2v(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).h2v = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.la(index, element);
  };
  protoOf(ArrayListSerializer).i2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.h2v(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.t2v_1 = new HashSetClassDesc(eSerializer.e2p());
  }
  protoOf(HashSetSerializer).e2p = function () {
    return this.t2v_1;
  };
  protoOf(HashSetSerializer).x13 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).u2v = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(HashSetSerializer).a2v = function (_this__u8e3s4) {
    return this.u2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).v2v = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).c2v = function (_this__u8e3s4) {
    return this.v2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).w2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).e2v = function (_this__u8e3s4) {
    return this.w2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).x2v = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).g2v = function (_this__u8e3s4, size) {
    return this.x2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).y2v = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(HashSetSerializer).i2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.y2v(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.a2w_1 = new LinkedHashSetClassDesc(eSerializer.e2p());
  }
  protoOf(LinkedHashSetSerializer).e2p = function () {
    return this.a2w_1;
  };
  protoOf(LinkedHashSetSerializer).x13 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).b2w = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(LinkedHashSetSerializer).a2v = function (_this__u8e3s4) {
    return this.b2w(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).c2w = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).c2v = function (_this__u8e3s4) {
    return this.c2w(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).w2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).e2v = function (_this__u8e3s4) {
    return this.w2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).d2w = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).g2v = function (_this__u8e3s4, size) {
    return this.d2w(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).e2w = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(LinkedHashSetSerializer).i2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.e2w(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.h2w_1 = new HashMapClassDesc(kSerializer.e2p(), vSerializer.e2p());
  }
  protoOf(HashMapSerializer).e2p = function () {
    return this.h2w_1;
  };
  protoOf(HashMapSerializer).i2w = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(HashMapSerializer).j2w = function (_this__u8e3s4) {
    return this.i2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).k2w = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u1().c();
  };
  protoOf(HashMapSerializer).l2w = function (_this__u8e3s4) {
    return this.k2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).x13 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).m2w = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  protoOf(HashMapSerializer).a2v = function (_this__u8e3s4) {
    return this.m2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).n2w = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).c2v = function (_this__u8e3s4) {
    return this.n2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).o2w = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).e2v = function (_this__u8e3s4) {
    return this.o2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).p2w = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).g2v = function (_this__u8e3s4, size) {
    return this.p2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.u2w_1 = new LinkedHashMapClassDesc(kSerializer.e2p(), vSerializer.e2p());
  }
  protoOf(LinkedHashMapSerializer).e2p = function () {
    return this.u2w_1;
  };
  protoOf(LinkedHashMapSerializer).i2w = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(LinkedHashMapSerializer).j2w = function (_this__u8e3s4) {
    return this.i2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).k2w = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u1().c();
  };
  protoOf(LinkedHashMapSerializer).l2w = function (_this__u8e3s4) {
    return this.k2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).x13 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).v2w = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.f(), 2);
  };
  protoOf(LinkedHashMapSerializer).a2v = function (_this__u8e3s4) {
    return this.v2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).w2w = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).c2v = function (_this__u8e3s4) {
    return this.w2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).o2w = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).e2v = function (_this__u8e3s4) {
    return this.o2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).x2w = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).g2v = function (_this__u8e3s4, size) {
    return this.x2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.z2w_1 = kClass;
    this.a2x_1 = new ArrayClassDesc(eSerializer.e2p());
  }
  protoOf(ReferenceArraySerializer).e2p = function () {
    return this.a2x_1;
  };
  protoOf(ReferenceArraySerializer).b2x = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).j2w = function (_this__u8e3s4) {
    return this.b2x((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).c2x = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).l2w = function (_this__u8e3s4) {
    return this.c2x((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).x13 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).d2x = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(ReferenceArraySerializer).a2v = function (_this__u8e3s4) {
    return this.d2x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).e2x = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.z2w_1);
  };
  protoOf(ReferenceArraySerializer).c2v = function (_this__u8e3s4) {
    return this.e2x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).f2x = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).e2v = function (_this__u8e3s4) {
    return this.f2x((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).g2x = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(ReferenceArraySerializer).g2v = function (_this__u8e3s4, size) {
    return this.g2x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).h2x = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.la(index, element);
  };
  protoOf(ReferenceArraySerializer).i2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.h2x(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).k2v = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(CollectionSerializer).j2w = function (_this__u8e3s4) {
    return this.k2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).l2v = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  protoOf(CollectionSerializer).l2w = function (_this__u8e3s4) {
    return this.l2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.q2w_1 = keySerializer;
    this.r2w_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).o2v = function (decoder, builder, startIndex, size) {
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
        this.p2v(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).p2v = function (decoder, index, builder, checkIndex) {
    var key = decoder.r2s(this.e2p(), index, this.q2w_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.u2s(this.e2p());
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
    if (builder.d2(key)) {
      var tmp_2 = this.r2w_1.e2p().l2q();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.q2s(this.e2p(), vIndex, this.r2w_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.r2s(this.e2p(), vIndex, this.r2w_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.l3(key, value);
  };
  protoOf(MapLikeSerializer).n2v = function (encoder, value) {
    var size = this.j2w(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.e2p();
    var composite = encoder.x2t(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.l2w(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.t1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w1();
      var tmp = this.e2p();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.u2t(tmp, tmp0, this.q2w_1, k);
      var tmp_0 = this.e2p();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.u2t(tmp_0, tmp1, this.r2w_1, v);
    }
    composite.f2s(tmp0_encodeCollection);
  };
  protoOf(MapLikeSerializer).f2p = function (encoder, value) {
    return this.n2v(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.m2v_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).n2v = function (encoder, value) {
    var size = this.j2w(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.e2p();
    var composite = encoder.x2t(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.l2w(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.u2t(this.e2p(), index, this.m2v_1, iterator.e());
      }
       while (inductionVariable < size);
    composite.f2s(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).f2p = function (encoder, value) {
    return this.n2v(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).o2v = function (decoder, builder, startIndex, size) {
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
        this.p2v(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).p2v = function (decoder, index, builder, checkIndex) {
    this.i2v(builder, index, decoder.r2s(this.e2p(), index, this.m2v_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.v2s($this.e2p());
    $this.g2v(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).r2v = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.e2v(previous);
    var builder = tmp1_elvis_lhs == null ? this.x13() : tmp1_elvis_lhs;
    var startIndex = this.a2v(builder);
    var compositeDecoder = decoder.e2s(this.e2p());
    if (compositeDecoder.t2s()) {
      this.o2v(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.u2s(this.e2p());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        this.q2v(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.f2s(this.e2p());
    return this.c2v(builder);
  };
  protoOf(AbstractCollectionSerializer).g2p = function (decoder) {
    return this.r2v(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).q2v = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.p2v(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.p2v.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.j2x_1 = new PrimitiveArrayDescriptor(primitiveSerializer.e2p());
  }
  protoOf(PrimitiveArraySerializer).e2p = function () {
    return this.j2x_1;
  };
  protoOf(PrimitiveArraySerializer).a2v = function (_this__u8e3s4) {
    return _this__u8e3s4.k2x();
  };
  protoOf(PrimitiveArraySerializer).c2v = function (_this__u8e3s4) {
    return _this__u8e3s4.db();
  };
  protoOf(PrimitiveArraySerializer).g2v = function (_this__u8e3s4, size) {
    return _this__u8e3s4.eb(size);
  };
  protoOf(PrimitiveArraySerializer).l2x = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).l2w = function (_this__u8e3s4) {
    return this.l2x((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i2v = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  protoOf(PrimitiveArraySerializer).x13 = function () {
    return this.e2v(this.m2x());
  };
  protoOf(PrimitiveArraySerializer).o2x = function (encoder, value) {
    var size = this.j2w(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.j2x_1;
    var composite = encoder.x2t(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.n2x(composite, value, size);
    composite.f2s(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).f2p = function (encoder, value) {
    return this.o2x(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).n2v = function (encoder, value) {
    return this.o2x(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).g2p = function (decoder) {
    return this.r2v(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).p2x = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.k2x() + 1 | 0 : requiredCapacity;
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
    this.q2x_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).u6(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.u2x_1[slot] = $this.u2x_1[slot].ih((new Long(1, 0)).u6(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.u2x_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.u2x_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.hh());
          slotMarks = slotMarks.ih((new Long(1, 0)).u6(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.s2x_1($this.r2x_1, index)) {
            $this.u2x_1[slot] = slotMarks;
            return index;
          }
        }
        $this.u2x_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.r2x_1 = descriptor;
    this.s2x_1 = readIfAbsent;
    var elementsCount = this.r2x_1.j2q();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).u6(elementsCount);
      }
      tmp.t2x_1 = tmp_0;
      this.u2x_1 = Companion_getInstance_8().q2x_1;
    } else {
      this.t2x_1 = new Long(0, 0);
      this.u2x_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).v2x = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.t2x_1 = this.t2x_1.ih((new Long(1, 0)).u6(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).w2x = function () {
    var elementsCount = this.r2x_1.j2q();
    while (!this.t2x_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.t2x_1.hh());
      this.t2x_1 = this.t2x_1.ih((new Long(1, 0)).u6(index));
      if (this.s2x_1(this.r2x_1, index)) {
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
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return $this.k2y_1.w1();
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
        tmp$ret$1 = buildSerialDescriptor($name + '.' + this$0.p2q(tmp_2), OBJECT_getInstance(), []);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.j2y_1 = ENUM_getInstance();
    var tmp = this;
    tmp.k2y_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).l2q = function () {
    return this.j2y_1;
  };
  protoOf(EnumDescriptor).n2q = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.l2q() === ENUM_getInstance()))
      return false;
    if (!(this.h2q() === other.h2q()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.h2q() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.h2q());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
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
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.l2z_1 = true;
  }
  protoOf(InlineClassDescriptor).k2q = function () {
    return this.l2z_1;
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
      if (!(this.h2q() === other.h2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.l2z_1 ? contentEquals(this.x2y(), other.x2y()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2q() === other.j2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2q();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2q(index).h2q() === other.n2q(index).h2q())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2q(index).l2q(), other.n2q(index).l2q())) {
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
    this.m2z_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).n2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.m2z_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).e2p = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).f2p = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).g2p = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.p2z_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).s2s = function () {
    return this.p2z_1;
  };
  protoOf(NoOpEncoder).x2s = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).y2s = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).z2s = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).a2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).b2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).c2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).d2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).e2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).f2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).g2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).h2t = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).i2t = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function NullableSerializer(serializer) {
    this.q2z_1 = serializer;
    this.r2z_1 = new SerialDescriptorForNullable(this.q2z_1.e2p());
  }
  protoOf(NullableSerializer).e2p = function () {
    return this.r2z_1;
  };
  protoOf(NullableSerializer).s2z = function (encoder, value) {
    if (!(value == null)) {
      encoder.w2t();
      encoder.v2t(this.q2z_1, value);
    } else {
      encoder.y2s();
    }
  };
  protoOf(NullableSerializer).f2p = function (encoder, value) {
    return this.s2z(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).g2p = function (decoder) {
    return decoder.p2r() ? decoder.d2s(this.q2z_1) : decoder.q2r();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q2z_1, other.q2z_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q2z_1);
  };
  function SerialDescriptorForNullable(original) {
    this.r2q_1 = original;
    this.s2q_1 = this.r2q_1.h2q() + '?';
    this.t2q_1 = cachedSerialNames(this.r2q_1);
  }
  protoOf(SerialDescriptorForNullable).i2q = function () {
    return this.r2q_1.i2q();
  };
  protoOf(SerialDescriptorForNullable).j2q = function () {
    return this.r2q_1.j2q();
  };
  protoOf(SerialDescriptorForNullable).k2q = function () {
    return this.r2q_1.k2q();
  };
  protoOf(SerialDescriptorForNullable).l2q = function () {
    return this.r2q_1.l2q();
  };
  protoOf(SerialDescriptorForNullable).m2q = function (index) {
    return this.r2q_1.m2q(index);
  };
  protoOf(SerialDescriptorForNullable).n2q = function (index) {
    return this.r2q_1.n2q(index);
  };
  protoOf(SerialDescriptorForNullable).o2q = function (name) {
    return this.r2q_1.o2q(name);
  };
  protoOf(SerialDescriptorForNullable).p2q = function (index) {
    return this.r2q_1.p2q(index);
  };
  protoOf(SerialDescriptorForNullable).q2q = function (index) {
    return this.r2q_1.q2q(index);
  };
  protoOf(SerialDescriptorForNullable).h2q = function () {
    return this.s2q_1;
  };
  protoOf(SerialDescriptorForNullable).n2r = function () {
    return this.t2q_1;
  };
  protoOf(SerialDescriptorForNullable).d2q = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.r2q_1, other.r2q_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.r2q_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.r2q_1), 31);
  };
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.u2z_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.j2p_1 = this$0.u2z_1;
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
    this.t2z_1 = objectInstance;
    this.u2z_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2z_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).e2p = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return this.v2z_1.w1();
  };
  protoOf(ObjectSerializer).f2p = function (encoder, value) {
    encoder.e2s(this.e2p()).f2s(this.e2p());
  };
  protoOf(ObjectSerializer).g2p = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.e2p();
    var composite = decoder.e2s(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.u2s(this.e2p());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.f2s(tmp0_decodeStructure);
    return this.t2z_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.e2p();
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
      return _this__u8e3s4.n2r();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.j2q());
    var inductionVariable = 0;
    var last = _this__u8e3s4.j2q();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.p2q(i);
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
          var tmp0_plusAssign = descriptor.p2q(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.h2q());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return $this.u2y_1.w1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return $this.w2y_1.w1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.p2y_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.p2y_1[i];
        indices.l3(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.m2y_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2z();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.m2y_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2z();
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
          tmp$ret$0 = item.e2p();
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
      return hashCodeImpl(this$0, this$0.x2y());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.p2q(i) + ': ' + this$0.n2q(i).h2q();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.l2y_1 = serialName;
    this.m2y_1 = generatedSerializer;
    this.n2y_1 = elementsCount;
    this.o2y_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.n2y_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.p2y_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.n2y_1;
    tmp_3.q2y_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.r2y_1 = null;
    this.s2y_1 = booleanArray(this.n2y_1);
    this.t2y_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.u2y_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.v2y_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.w2y_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).h2q = function () {
    return this.l2y_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).j2q = function () {
    return this.n2y_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l2q = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).i2q = function () {
    var tmp0_elvis_lhs = this.r2y_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).n2r = function () {
    return this.t2y_1.i2();
  };
  protoOf(PluginGeneratedSerialDescriptor).x2y = function () {
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return this.v2y_1.w1();
  };
  protoOf(PluginGeneratedSerialDescriptor).y2y = function (name, isOptional) {
    this.o2y_1 = this.o2y_1 + 1 | 0;
    this.p2y_1[this.o2y_1] = name;
    this.s2y_1[this.o2y_1] = isOptional;
    this.q2y_1[this.o2y_1] = null;
    if (this.o2y_1 === (this.n2y_1 - 1 | 0)) {
      this.t2y_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).n2q = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).e2p();
  };
  protoOf(PluginGeneratedSerialDescriptor).q2q = function (index) {
    return getChecked_0(this.s2y_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).m2q = function (index) {
    var tmp0_elvis_lhs = getChecked(this.q2y_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p2q = function (index) {
    return getChecked(this.p2y_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).o2q = function (name) {
    var tmp0_elvis_lhs = this.t2y_1.h2(name);
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
      if (!(this.h2q() === other.h2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.x2y(), other.x2y())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2q() === other.j2q())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2q();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2q(index).h2q() === other.n2q(index).h2q())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2q(index).l2q(), other.n2q(index).l2q())) {
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
    var tmp = until(0, this.n2y_1);
    var tmp_0 = this.h2q() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.h2q());
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
      var tmp0_safe_receiver = element.h2q();
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
      var tmp0_safe_receiver_0 = element_0.l2q();
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
      return receiver.x2y();
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
  protoOf(CharArraySerializer_0).z2z = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.z2z((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a30 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.a30((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).m2x = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).b30 = function (decoder, index, builder, checkIndex) {
    builder.e30(decoder.n2s(this.j2x_1, index));
  };
  protoOf(CharArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.b30(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).f30 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).n2x = function (encoder, content, size) {
    return this.f30(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).i30 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.i30((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j30 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.j30((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).m2x = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).k30 = function (decoder, index, builder, checkIndex) {
    builder.n30(decoder.m2s(this.j2x_1, index));
  };
  protoOf(DoubleArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.k30(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o30 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).n2x = function (encoder, content, size) {
    return this.o30(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).r30 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.r30((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).s30 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.s30((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).m2x = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).t30 = function (decoder, index, builder, checkIndex) {
    builder.w30(decoder.l2s(this.j2x_1, index));
  };
  protoOf(FloatArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.t30(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).x30 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).n2x = function (encoder, content, size) {
    return this.x30(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).a31 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.a31((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).b31 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.b31((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).m2x = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).c31 = function (decoder, index, builder, checkIndex) {
    builder.f31(decoder.k2s(this.j2x_1, index));
  };
  protoOf(LongArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.c31(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g31 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).n2x = function (encoder, content, size) {
    return this.g31(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).j31 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.j31(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.u8_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k31 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.k31(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.u8_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l31 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).m2x = function () {
    return new ULongArray(this.l31());
  };
  protoOf(ULongArraySerializer_0).m31 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.p2s(this.j2x_1, index).v2r();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.p31(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.m31(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q31 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2t(this.j2x_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.d2t(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).n2x = function (encoder, content, size) {
    return this.q31(encoder, content instanceof ULongArray ? content.u8_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).t31 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.t31((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).u31 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.u31((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).m2x = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).v31 = function (decoder, index, builder, checkIndex) {
    builder.y31(decoder.j2s(this.j2x_1, index));
  };
  protoOf(IntArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.v31(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z31 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).n2x = function (encoder, content, size) {
    return this.z31(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).c32 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.c32(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d32 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.d32(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.i8_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e32 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).m2x = function () {
    return new UIntArray(this.e32());
  };
  protoOf(UIntArraySerializer_0).f32 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.p2s(this.j2x_1, index).u2r();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.i32(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.f32(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).j32 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2t(this.j2x_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.c2t(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).n2x = function (encoder, content, size) {
    return this.j32(encoder, content instanceof UIntArray ? content.i8_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).m32 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.m32((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n32 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.n32((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).m2x = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).o32 = function (decoder, index, builder, checkIndex) {
    builder.r32(decoder.i2s(this.j2x_1, index));
  };
  protoOf(ShortArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.o32(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).s32 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.m2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).n2x = function (encoder, content, size) {
    return this.s32(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).v32 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.v32(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.g9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w32 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.w32(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.g9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x32 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).m2x = function () {
    return new UShortArray(this.x32());
  };
  protoOf(UShortArraySerializer_0).y32 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.p2s(this.j2x_1, index).t2r();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.b33(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.y32(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).c33 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2t(this.j2x_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.b2t(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).n2x = function (encoder, content, size) {
    return this.c33(encoder, content instanceof UShortArray ? content.g9_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).f33 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.f33((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).g33 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.g33((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).m2x = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h33 = function (decoder, index, builder, checkIndex) {
    builder.k33(decoder.h2s(this.j2x_1, index));
  };
  protoOf(ByteArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.h33(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).l33 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.l2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).n2x = function (encoder, content, size) {
    return this.l33(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).o33 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.o33(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.v7_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p33 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.p33(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.v7_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q33 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).m2x = function () {
    return new UByteArray(this.q33());
  };
  protoOf(UByteArraySerializer_0).r33 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.p2s(this.j2x_1, index).s2r();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.u33(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.r33(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).v33 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2t(this.j2x_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.a2t(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).n2x = function (encoder, content, size) {
    return this.v33(encoder, content instanceof UByteArray ? content.v7_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).y33 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).j2w = function (_this__u8e3s4) {
    return this.y33((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z33 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).e2v = function (_this__u8e3s4) {
    return this.z33((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).m2x = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).a34 = function (decoder, index, builder, checkIndex) {
    builder.d34(decoder.g2s(this.j2x_1, index));
  };
  protoOf(BooleanArraySerializer_0).p2v = function (decoder, index, builder, checkIndex) {
    return this.a34(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e34 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.k2t(this.j2x_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).n2x = function (encoder, content, size) {
    return this.e34(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c30_1 = bufferWithData;
    this.d30_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(CharArrayBuilder).k2x = function () {
    return this.d30_1;
  };
  protoOf(CharArrayBuilder).eb = function (requiredCapacity) {
    if (this.c30_1.length < requiredCapacity)
      this.c30_1 = copyOf(this.c30_1, coerceAtLeast(requiredCapacity, imul(this.c30_1.length, 2)));
  };
  protoOf(CharArrayBuilder).e30 = function (c) {
    this.p2x();
    var tmp = this.c30_1;
    var tmp1 = this.d30_1;
    this.d30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).db = function () {
    return copyOf(this.c30_1, this.d30_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l30_1 = bufferWithData;
    this.m30_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(DoubleArrayBuilder).k2x = function () {
    return this.m30_1;
  };
  protoOf(DoubleArrayBuilder).eb = function (requiredCapacity) {
    if (this.l30_1.length < requiredCapacity)
      this.l30_1 = copyOf_0(this.l30_1, coerceAtLeast(requiredCapacity, imul(this.l30_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).n30 = function (c) {
    this.p2x();
    var tmp = this.l30_1;
    var tmp1 = this.m30_1;
    this.m30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).db = function () {
    return copyOf_0(this.l30_1, this.m30_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u30_1 = bufferWithData;
    this.v30_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(FloatArrayBuilder).k2x = function () {
    return this.v30_1;
  };
  protoOf(FloatArrayBuilder).eb = function (requiredCapacity) {
    if (this.u30_1.length < requiredCapacity)
      this.u30_1 = copyOf_1(this.u30_1, coerceAtLeast(requiredCapacity, imul(this.u30_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).w30 = function (c) {
    this.p2x();
    var tmp = this.u30_1;
    var tmp1 = this.v30_1;
    this.v30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).db = function () {
    return copyOf_1(this.u30_1, this.v30_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d31_1 = bufferWithData;
    this.e31_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(LongArrayBuilder).k2x = function () {
    return this.e31_1;
  };
  protoOf(LongArrayBuilder).eb = function (requiredCapacity) {
    if (this.d31_1.length < requiredCapacity)
      this.d31_1 = copyOf_2(this.d31_1, coerceAtLeast(requiredCapacity, imul(this.d31_1.length, 2)));
  };
  protoOf(LongArrayBuilder).f31 = function (c) {
    this.p2x();
    var tmp = this.d31_1;
    var tmp1 = this.e31_1;
    this.e31_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).db = function () {
    return copyOf_2(this.d31_1, this.e31_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n31_1 = bufferWithData;
    this.o31_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.eb(10);
  }
  protoOf(ULongArrayBuilder).k2x = function () {
    return this.o31_1;
  };
  protoOf(ULongArrayBuilder).eb = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.n31_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.n31_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.n31_1), 2));
      tmp.n31_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(ULongArrayBuilder).p31 = function (c) {
    this.p2x();
    var tmp = this.n31_1;
    var tmp1 = this.o31_1;
    this.o31_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).f34 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.n31_1;
    var tmp1_copyOf = this.o31_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(ULongArrayBuilder).db = function () {
    return new ULongArray(this.f34());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w31_1 = bufferWithData;
    this.x31_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(IntArrayBuilder).k2x = function () {
    return this.x31_1;
  };
  protoOf(IntArrayBuilder).eb = function (requiredCapacity) {
    if (this.w31_1.length < requiredCapacity)
      this.w31_1 = copyOf_3(this.w31_1, coerceAtLeast(requiredCapacity, imul(this.w31_1.length, 2)));
  };
  protoOf(IntArrayBuilder).y31 = function (c) {
    this.p2x();
    var tmp = this.w31_1;
    var tmp1 = this.x31_1;
    this.x31_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).db = function () {
    return copyOf_3(this.w31_1, this.x31_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g32_1 = bufferWithData;
    this.h32_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.eb(10);
  }
  protoOf(UIntArrayBuilder).k2x = function () {
    return this.h32_1;
  };
  protoOf(UIntArrayBuilder).eb = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.g32_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.g32_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.g32_1), 2));
      tmp.g32_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UIntArrayBuilder).i32 = function (c) {
    this.p2x();
    var tmp = this.g32_1;
    var tmp1 = this.h32_1;
    this.h32_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).g34 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.g32_1;
    var tmp1_copyOf = this.h32_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UIntArrayBuilder).db = function () {
    return new UIntArray(this.g34());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p32_1 = bufferWithData;
    this.q32_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(ShortArrayBuilder).k2x = function () {
    return this.q32_1;
  };
  protoOf(ShortArrayBuilder).eb = function (requiredCapacity) {
    if (this.p32_1.length < requiredCapacity)
      this.p32_1 = copyOf_4(this.p32_1, coerceAtLeast(requiredCapacity, imul(this.p32_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).r32 = function (c) {
    this.p2x();
    var tmp = this.p32_1;
    var tmp1 = this.q32_1;
    this.q32_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).db = function () {
    return copyOf_4(this.p32_1, this.q32_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z32_1 = bufferWithData;
    this.a33_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.eb(10);
  }
  protoOf(UShortArrayBuilder).k2x = function () {
    return this.a33_1;
  };
  protoOf(UShortArrayBuilder).eb = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.z32_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.z32_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.z32_1), 2));
      tmp.z32_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UShortArrayBuilder).b33 = function (c) {
    this.p2x();
    var tmp = this.z32_1;
    var tmp1 = this.a33_1;
    this.a33_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).h34 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.z32_1;
    var tmp1_copyOf = this.a33_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UShortArrayBuilder).db = function () {
    return new UShortArray(this.h34());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i33_1 = bufferWithData;
    this.j33_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(ByteArrayBuilder).k2x = function () {
    return this.j33_1;
  };
  protoOf(ByteArrayBuilder).eb = function (requiredCapacity) {
    if (this.i33_1.length < requiredCapacity)
      this.i33_1 = copyOf_5(this.i33_1, coerceAtLeast(requiredCapacity, imul(this.i33_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k33 = function (c) {
    this.p2x();
    var tmp = this.i33_1;
    var tmp1 = this.j33_1;
    this.j33_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).db = function () {
    return copyOf_5(this.i33_1, this.j33_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s33_1 = bufferWithData;
    this.t33_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.eb(10);
  }
  protoOf(UByteArrayBuilder).k2x = function () {
    return this.t33_1;
  };
  protoOf(UByteArrayBuilder).eb = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.s33_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.s33_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.s33_1), 2));
      tmp.s33_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UByteArrayBuilder).u33 = function (c) {
    this.p2x();
    var tmp = this.s33_1;
    var tmp1 = this.t33_1;
    this.t33_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).i34 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.s33_1;
    var tmp1_copyOf = this.t33_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UByteArrayBuilder).db = function () {
    return new UByteArray(this.i34());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b34_1 = bufferWithData;
    this.c34_1 = bufferWithData.length;
    this.eb(10);
  }
  protoOf(BooleanArrayBuilder).k2x = function () {
    return this.c34_1;
  };
  protoOf(BooleanArrayBuilder).eb = function (requiredCapacity) {
    if (this.b34_1.length < requiredCapacity)
      this.b34_1 = copyOf_6(this.b34_1, coerceAtLeast(requiredCapacity, imul(this.b34_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).d34 = function (c) {
    this.p2x();
    var tmp = this.b34_1;
    var tmp1 = this.c34_1;
    this.c34_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).db = function () {
    return copyOf_6(this.b34_1, this.c34_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().h2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.j34_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).e2p = function () {
    return this.j34_1;
  };
  protoOf(StringSerializer).k34 = function (encoder, value) {
    return encoder.h2t(value);
  };
  protoOf(StringSerializer).f2p = function (encoder, value) {
    return this.k34(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).g2p = function (decoder) {
    return decoder.z2r();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.l34_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).e2p = function () {
    return this.l34_1;
  };
  protoOf(CharSerializer).m34 = function (encoder, value) {
    return encoder.g2t(value);
  };
  protoOf(CharSerializer).f2p = function (encoder, value) {
    return this.m34(encoder, value instanceof Char ? value.n5_1 : THROW_CCE());
  };
  protoOf(CharSerializer).n34 = function (decoder) {
    return decoder.y2r();
  };
  protoOf(CharSerializer).g2p = function (decoder) {
    return new Char(this.n34(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o34_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).e2p = function () {
    return this.o34_1;
  };
  protoOf(DoubleSerializer).p34 = function (encoder, value) {
    return encoder.f2t(value);
  };
  protoOf(DoubleSerializer).f2p = function (encoder, value) {
    return this.p34(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).g2p = function (decoder) {
    return decoder.x2r();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.q34_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).e2p = function () {
    return this.q34_1;
  };
  protoOf(FloatSerializer).r34 = function (encoder, value) {
    return encoder.e2t(value);
  };
  protoOf(FloatSerializer).f2p = function (encoder, value) {
    return this.r34(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).g2p = function (decoder) {
    return decoder.w2r();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s34_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).e2p = function () {
    return this.s34_1;
  };
  protoOf(LongSerializer).t34 = function (encoder, value) {
    return encoder.d2t(value);
  };
  protoOf(LongSerializer).f2p = function (encoder, value) {
    return this.t34(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).g2p = function (decoder) {
    return decoder.v2r();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.u34_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).e2p = function () {
    return this.u34_1;
  };
  protoOf(IntSerializer).v34 = function (encoder, value) {
    return encoder.c2t(value);
  };
  protoOf(IntSerializer).f2p = function (encoder, value) {
    return this.v34(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).g2p = function (decoder) {
    return decoder.u2r();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w34_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).e2p = function () {
    return this.w34_1;
  };
  protoOf(ShortSerializer).x34 = function (encoder, value) {
    return encoder.b2t(value);
  };
  protoOf(ShortSerializer).f2p = function (encoder, value) {
    return this.x34(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).g2p = function (decoder) {
    return decoder.t2r();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y34_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).e2p = function () {
    return this.y34_1;
  };
  protoOf(ByteSerializer).z34 = function (encoder, value) {
    return encoder.a2t(value);
  };
  protoOf(ByteSerializer).f2p = function (encoder, value) {
    return this.z34(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).g2p = function (decoder) {
    return decoder.s2r();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a35_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).e2p = function () {
    return this.a35_1;
  };
  protoOf(BooleanSerializer).b35 = function (encoder, value) {
    return encoder.z2s(value);
  };
  protoOf(BooleanSerializer).f2p = function (encoder, value) {
    return this.b35(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).g2p = function (decoder) {
    return decoder.r2r();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.c35_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).e2p = function () {
    return this.c35_1.e2p();
  };
  protoOf(UnitSerializer).d35 = function (decoder) {
    this.c35_1.g2p(decoder);
  };
  protoOf(UnitSerializer).g2p = function (decoder) {
    this.d35(decoder);
    return Unit_getInstance();
  };
  protoOf(UnitSerializer).e35 = function (encoder, value) {
    this.c35_1.f2p(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).f2p = function (encoder, value) {
    return this.e35(encoder, value instanceof Unit ? value : THROW_CCE());
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
    this.f35_1 = serialName;
    this.g35_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).h2q = function () {
    return this.f35_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l2q = function () {
    return this.g35_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).j2q = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).p2q = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).o2q = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q2q = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).n2q = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).m2q = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.f35_1 + ')';
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().i2();
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
  protoOf(NamedValueDecoder).j35 = function (_this__u8e3s4, index) {
    return this.l35(this.k35(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).l35 = function (nestedName) {
    var tmp0_elvis_lhs = this.o35();
    return this.p35(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).k35 = function (desc, index) {
    return desc.p2q(index);
  };
  protoOf(NamedValueDecoder).p35 = function (parentName, childName) {
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
    $this.d36(tag);
    var r = block();
    if (!$this.n35_1) {
      $this.e36();
    }
    $this.n35_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.c2s($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.m35_1 = ArrayList_init_$Create$_0();
    this.n35_1 = false;
  }
  protoOf(TaggedDecoder).s2s = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q35 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r35 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w35 = function (tag) {
    var tmp = this.q35(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y35 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z35 = function (tag) {
    var tmp = this.q35(tag);
    return tmp instanceof Char ? tmp.n5_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a36 = function (tag) {
    var tmp = this.q35(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b36 = function (tag, enumDescriptor) {
    var tmp = this.q35(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c36 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.d36(tag);
    return this;
  };
  protoOf(TaggedDecoder).c2s = function (deserializer, previousValue) {
    return this.d2s(deserializer);
  };
  protoOf(TaggedDecoder).b2s = function (descriptor) {
    return this.c36(this.e36(), descriptor);
  };
  protoOf(TaggedDecoder).p2r = function () {
    var tmp0_elvis_lhs = this.o35();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r35(currentTag);
  };
  protoOf(TaggedDecoder).q2r = function () {
    return null;
  };
  protoOf(TaggedDecoder).r2r = function () {
    return this.s35(this.e36());
  };
  protoOf(TaggedDecoder).s2r = function () {
    return this.t35(this.e36());
  };
  protoOf(TaggedDecoder).t2r = function () {
    return this.u35(this.e36());
  };
  protoOf(TaggedDecoder).u2r = function () {
    return this.v35(this.e36());
  };
  protoOf(TaggedDecoder).v2r = function () {
    return this.w35(this.e36());
  };
  protoOf(TaggedDecoder).w2r = function () {
    return this.x35(this.e36());
  };
  protoOf(TaggedDecoder).x2r = function () {
    return this.y35(this.e36());
  };
  protoOf(TaggedDecoder).y2r = function () {
    return this.z35(this.e36());
  };
  protoOf(TaggedDecoder).z2r = function () {
    return this.a36(this.e36());
  };
  protoOf(TaggedDecoder).a2s = function (enumDescriptor) {
    return this.b36(this.e36(), enumDescriptor);
  };
  protoOf(TaggedDecoder).e2s = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).f2s = function (descriptor) {
  };
  protoOf(TaggedDecoder).g2s = function (descriptor, index) {
    return this.s35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).h2s = function (descriptor, index) {
    return this.t35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).i2s = function (descriptor, index) {
    return this.u35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).j2s = function (descriptor, index) {
    return this.v35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).k2s = function (descriptor, index) {
    return this.w35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).l2s = function (descriptor, index) {
    return this.x35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).m2s = function (descriptor, index) {
    return this.y35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).n2s = function (descriptor, index) {
    return this.z35(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).o2s = function (descriptor, index) {
    return this.a36(this.j35(descriptor, index));
  };
  protoOf(TaggedDecoder).p2s = function (descriptor, index) {
    return this.c36(this.j35(descriptor, index), descriptor.n2q(index));
  };
  protoOf(TaggedDecoder).q2s = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j35(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).o35 = function () {
    return lastOrNull(this.m35_1);
  };
  protoOf(TaggedDecoder).d36 = function (name) {
    this.m35_1.a(name);
  };
  protoOf(TaggedDecoder).e36 = function () {
    var r = this.m35_1.m3(get_lastIndex_0(this.m35_1));
    this.n35_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.f36_1 = key;
    this.g36_1 = value;
  }
  protoOf(MapEntry).t1 = function () {
    return this.f36_1;
  };
  protoOf(MapEntry).w1 = function () {
    return this.g36_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.f36_1 + ', value=' + this.g36_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.f36_1 == null ? 0 : hashCode(this.f36_1);
    result = imul(result, 31) + (this.g36_1 == null ? 0 : hashCode(this.g36_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.f36_1, tmp0_other_with_cast.f36_1))
      return false;
    if (!equals(this.g36_1, tmp0_other_with_cast.g36_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.p2p('key', $keySerializer.e2p());
      $this$buildSerialDescriptor.p2p('value', $valueSerializer.e2p());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.j36_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).e2p = function () {
    return this.j36_1;
  };
  protoOf(MapEntrySerializer_0).k36 = function (_this__u8e3s4) {
    return _this__u8e3s4.t1();
  };
  protoOf(MapEntrySerializer_0).l36 = function (_this__u8e3s4) {
    return this.k36((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).m36 = function (_this__u8e3s4) {
    return _this__u8e3s4.w1();
  };
  protoOf(MapEntrySerializer_0).n36 = function (_this__u8e3s4) {
    return this.m36((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).o36 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.p2p('first', $keySerializer.e2p());
      $this$buildClassSerialDescriptor.p2p('second', $valueSerializer.e2p());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.u36_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).e2p = function () {
    return this.u36_1;
  };
  protoOf(PairSerializer_0).v36 = function (_this__u8e3s4) {
    return _this__u8e3s4.h3_1;
  };
  protoOf(PairSerializer_0).l36 = function (_this__u8e3s4) {
    return this.v36(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).w36 = function (_this__u8e3s4) {
    return _this__u8e3s4.i3_1;
  };
  protoOf(PairSerializer_0).n36 = function (_this__u8e3s4) {
    return this.w36(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).o36 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.r2s($this.a37_1, 0, $this.x36_1);
    var b = composite.r2s($this.a37_1, 1, $this.y36_1);
    var c = composite.r2s($this.a37_1, 2, $this.z36_1);
    composite.f2s($this.a37_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.u2s($this.a37_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.r2s($this.a37_1, 0, $this.x36_1);
        } else {
          if (index === 1) {
            b = composite.r2s($this.a37_1, 1, $this.y36_1);
          } else {
            if (index === 2) {
              c = composite.r2s($this.a37_1, 2, $this.z36_1);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.f2s($this.a37_1);
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
      $this$buildClassSerialDescriptor.p2p('first', this$0.x36_1.e2p());
      $this$buildClassSerialDescriptor.p2p('second', this$0.y36_1.e2p());
      $this$buildClassSerialDescriptor.p2p('third', this$0.z36_1.e2p());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.x36_1 = aSerializer;
    this.y36_1 = bSerializer;
    this.z36_1 = cSerializer;
    var tmp = this;
    tmp.a37_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).e2p = function () {
    return this.a37_1;
  };
  protoOf(TripleSerializer_0).b37 = function (encoder, value) {
    var structuredEncoder = encoder.e2s(this.a37_1);
    structuredEncoder.u2t(this.a37_1, 0, this.x36_1, value.j7_1);
    structuredEncoder.u2t(this.a37_1, 1, this.y36_1, value.k7_1);
    structuredEncoder.u2t(this.a37_1, 2, this.z36_1, value.l7_1);
    structuredEncoder.f2s(this.a37_1);
  };
  protoOf(TripleSerializer_0).f2p = function (encoder, value) {
    return this.b37(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).g2p = function (decoder) {
    var composite = decoder.e2s(this.a37_1);
    if (composite.t2s()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.p36_1 = keySerializer;
    this.q36_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).r36 = function (encoder, value) {
    var structuredEncoder = encoder.e2s(this.e2p());
    structuredEncoder.u2t(this.e2p(), 0, this.p36_1, this.l36(value));
    structuredEncoder.u2t(this.e2p(), 1, this.q36_1, this.n36(value));
    structuredEncoder.f2s(this.e2p());
  };
  protoOf(KeyValueSerializer).f2p = function (encoder, value) {
    return this.r36(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).g2p = function (decoder) {
    var composite = decoder.e2s(this.e2p());
    if (composite.t2s()) {
      var key = composite.r2s(this.e2p(), 0, this.p36_1);
      var value = composite.r2s(this.e2p(), 1, this.q36_1);
      return this.o36(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.u2s(this.e2p());
      Companion_getInstance_7();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          key_0 = composite.r2s(this.e2p(), 0, this.p36_1);
        } else {
          if (idx === 1) {
            value_0 = composite.r2s(this.e2p(), 1, this.q36_1);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.f2s(this.e2p());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.o36(tmp, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
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
    this.c37_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).e2p = function () {
    return this.c37_1;
  };
  protoOf(ULongSerializer).d37 = function (encoder, value) {
    var tmp = encoder.j2t(this.c37_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.d2t(tmp$ret$0);
  };
  protoOf(ULongSerializer).f2p = function (encoder, value) {
    return this.d37(encoder, value instanceof ULong ? value.p8_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).e37 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.b2s(this.c37_1).v2r();
    return _ULong___init__impl__c78o9k(tmp0_toULong);
  };
  protoOf(ULongSerializer).g2p = function (decoder) {
    return new ULong(this.e37(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.f37_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).e2p = function () {
    return this.f37_1;
  };
  protoOf(UIntSerializer).g37 = function (encoder, value) {
    var tmp = encoder.j2t(this.f37_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.c2t(tmp$ret$0);
  };
  protoOf(UIntSerializer).f2p = function (encoder, value) {
    return this.g37(encoder, value instanceof UInt ? value.c8_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).h37 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.b2s(this.f37_1).u2r();
    return _UInt___init__impl__l7qpdl(tmp0_toUInt);
  };
  protoOf(UIntSerializer).g2p = function (decoder) {
    return new UInt(this.h37(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.i37_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).e2p = function () {
    return this.i37_1;
  };
  protoOf(UShortSerializer).j37 = function (encoder, value) {
    var tmp = encoder.j2t(this.i37_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.b2t(tmp$ret$0);
  };
  protoOf(UShortSerializer).f2p = function (encoder, value) {
    return this.j37(encoder, value instanceof UShort ? value.b9_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).k37 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.b2s(this.i37_1).t2r();
    return _UShort___init__impl__jigrne(tmp0_toUShort);
  };
  protoOf(UShortSerializer).g2p = function (decoder) {
    return new UShort(this.k37(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.l37_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).e2p = function () {
    return this.l37_1;
  };
  protoOf(UByteSerializer).m37 = function (encoder, value) {
    var tmp = encoder.j2t(this.l37_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.a2t(tmp$ret$0);
  };
  protoOf(UByteSerializer).f2p = function (encoder, value) {
    return this.m37(encoder, value instanceof UByte ? value.q7_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).n37 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.b2s(this.l37_1).s2r();
    return _UByte___init__impl__g9hnc4(tmp0_toUByte);
  };
  protoOf(UByteSerializer).g2p = function (decoder) {
    return new UByte(this.n37(decoder));
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
  protoOf(SerializersModule).a2q = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.z2p(kClass, typeArgumentsSerializers) : $super.z2p.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.o37_1 = class2ContextualFactory;
    this.p37_1 = polyBase2Serializers;
    this.q37_1 = polyBase2DefaultSerializerProvider;
    this.r37_1 = polyBase2NamedSerializers;
    this.s37_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).c2u = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.p37_1.h2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.q37_1.h2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).b2u = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.r37_1.h2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).h2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.s37_1.h2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).z2p = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.o37_1.h2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t37(typeArgumentsSerializers);
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
    this.u37_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.u37_1.equals(tmp0_other_with_cast.u37_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.u37_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.u37_1 + ')';
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
          var tmp_1 = assocObject.w2z(args.slice());
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
    this.v37_1 = $factory;
  }
  protoOf(createCache$1).b2q = function (key) {
    return this.v37_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.w37_1 = $factory;
  }
  protoOf(createParametrizedCache$1).c2q = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_6();
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var tmp1_success = this.w37_1(key, types);
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
  protoOf(SerialDescriptorImpl).d2q = get_isNullable;
  protoOf(SerialDescriptorImpl).k2q = get_isInline;
  protoOf(AbstractDecoder).r2s = decodeSerializableElement$default;
  protoOf(AbstractDecoder).d2s = decodeSerializableValue;
  protoOf(AbstractDecoder).t2s = decodeSequentially;
  protoOf(AbstractDecoder).v2s = decodeCollectionSize;
  protoOf(AbstractEncoder).w2t = encodeNotNullMark;
  protoOf(AbstractEncoder).x2t = beginCollection;
  protoOf(AbstractEncoder).v2t = encodeSerializableValue;
  protoOf(AbstractEncoder).y2t = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).d2q = get_isNullable;
  protoOf(ListLikeDescriptor).k2q = get_isInline;
  protoOf(ListLikeDescriptor).i2q = get_annotations;
  protoOf(ArrayListClassDesc).d2q = get_isNullable;
  protoOf(ArrayListClassDesc).k2q = get_isInline;
  protoOf(ArrayListClassDesc).i2q = get_annotations;
  protoOf(HashSetClassDesc).d2q = get_isNullable;
  protoOf(HashSetClassDesc).k2q = get_isInline;
  protoOf(HashSetClassDesc).i2q = get_annotations;
  protoOf(LinkedHashSetClassDesc).d2q = get_isNullable;
  protoOf(LinkedHashSetClassDesc).k2q = get_isInline;
  protoOf(LinkedHashSetClassDesc).i2q = get_annotations;
  protoOf(MapLikeDescriptor).d2q = get_isNullable;
  protoOf(MapLikeDescriptor).k2q = get_isInline;
  protoOf(MapLikeDescriptor).i2q = get_annotations;
  protoOf(HashMapClassDesc).d2q = get_isNullable;
  protoOf(HashMapClassDesc).k2q = get_isInline;
  protoOf(HashMapClassDesc).i2q = get_annotations;
  protoOf(LinkedHashMapClassDesc).d2q = get_isNullable;
  protoOf(LinkedHashMapClassDesc).k2q = get_isInline;
  protoOf(LinkedHashMapClassDesc).i2q = get_annotations;
  protoOf(ArrayClassDesc).d2q = get_isNullable;
  protoOf(ArrayClassDesc).k2q = get_isInline;
  protoOf(ArrayClassDesc).i2q = get_annotations;
  protoOf(PrimitiveArrayDescriptor).d2q = get_isNullable;
  protoOf(PrimitiveArrayDescriptor).k2q = get_isInline;
  protoOf(PrimitiveArrayDescriptor).i2q = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).d2q = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).k2q = get_isInline;
  protoOf(EnumDescriptor).d2q = get_isNullable;
  protoOf(EnumDescriptor).k2q = get_isInline;
  protoOf(InlineClassDescriptor).d2q = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).o2z = typeParametersSerializers;
  protoOf(NoOpEncoder).w2t = encodeNotNullMark;
  protoOf(NoOpEncoder).x2t = beginCollection;
  protoOf(NoOpEncoder).v2t = encodeSerializableValue;
  protoOf(NoOpEncoder).y2t = shouldEncodeElementDefault;
  protoOf(PrimitiveSerialDescriptor_0).d2q = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).k2q = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).i2q = get_annotations;
  protoOf(TaggedDecoder).r2s = decodeSerializableElement$default;
  protoOf(TaggedDecoder).d2s = decodeSerializableValue;
  protoOf(TaggedDecoder).t2s = decodeSequentially;
  protoOf(TaggedDecoder).v2s = decodeCollectionSize;
  protoOf(NamedValueDecoder).d2s = decodeSerializableValue;
  protoOf(NamedValueDecoder).r2s = decodeSerializableElement$default;
  protoOf(NamedValueDecoder).t2s = decodeSequentially;
  protoOf(NamedValueDecoder).v2s = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeSerializableElement$default;
  _.$_$.b = ObjectSerializer_init_$Create$;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = SerializationException_init_$Create$;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_getInstance_7;
  _.$_$.m = BooleanSerializer_getInstance;
  _.$_$.n = IntSerializer_getInstance;
  _.$_$.o = LongSerializer_getInstance;
  _.$_$.p = StringSerializer_getInstance;
  _.$_$.q = ListSerializer;
  _.$_$.r = MapSerializer;
  _.$_$.s = serializer_0;
  _.$_$.t = serializer_9;
  _.$_$.u = serializer_7;
  _.$_$.v = serializer_11;
  _.$_$.w = serializer_5;
  _.$_$.x = PolymorphicKind;
  _.$_$.y = PrimitiveKind;
  _.$_$.z = PrimitiveSerialDescriptor;
  _.$_$.a1 = get_annotations;
  _.$_$.b1 = get_isInline;
  _.$_$.c1 = get_isNullable;
  _.$_$.d1 = SerialDescriptor;
  _.$_$.e1 = ENUM;
  _.$_$.f1 = buildSerialDescriptor;
  _.$_$.g1 = getContextualDescriptor;
  _.$_$.h1 = AbstractDecoder;
  _.$_$.i1 = AbstractEncoder;
  _.$_$.j1 = decodeCollectionSize;
  _.$_$.k1 = decodeSequentially;
  _.$_$.l1 = CompositeDecoder;
  _.$_$.m1 = CompositeEncoder;
  _.$_$.n1 = decodeSerializableValue;
  _.$_$.o1 = Decoder;
  _.$_$.p1 = beginCollection;
  _.$_$.q1 = encodeNotNullMark;
  _.$_$.r1 = Encoder;
  _.$_$.s1 = AbstractPolymorphicSerializer;
  _.$_$.t1 = ArrayListSerializer;
  _.$_$.u1 = ElementMarker;
  _.$_$.v1 = EnumDescriptor;
  _.$_$.w1 = typeParametersSerializers;
  _.$_$.x1 = GeneratedSerializer;
  _.$_$.y1 = NamedValueDecoder;
  _.$_$.z1 = PluginGeneratedSerialDescriptor;
  _.$_$.a2 = SerializerFactory;
  _.$_$.b2 = jsonCachedSerialNames;
  _.$_$.c2 = throwMissingFieldException;
  _.$_$.d2 = EmptySerializersModule_0;
  _.$_$.e2 = DeserializationStrategy;
  _.$_$.f2 = KSerializer;
  _.$_$.g2 = MissingFieldException;
  _.$_$.h2 = SealedClassSerializer;
  _.$_$.i2 = SerializationException;
  _.$_$.j2 = findPolymorphicSerializer;
  _.$_$.k2 = serializerOrNull;
  _.$_$.l2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
