(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.da;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.je;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var toString = kotlin_kotlin.$_$.ia;
  var classMeta = kotlin_kotlin.$_$.w8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var isObject = kotlin_kotlin.$_$.t9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_getInstance = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.sd;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ge;
  var intercepted = kotlin_kotlin.$_$.x7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get = kotlin_kotlin.$_$.f8;
  var fold = kotlin_kotlin.$_$.e8;
  var minusKey = kotlin_kotlin.$_$.g8;
  var plus = kotlin_kotlin.$_$.i8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var Enum = kotlin_kotlin.$_$.sc;
  var IllegalStateException = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var defineProp = kotlin_kotlin.$_$.y8;
  var equals = kotlin_kotlin.$_$.z8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var fill = kotlin_kotlin.$_$.b6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var rotateLeft = kotlin_kotlin.$_$.ce;
  var hashCode = kotlin_kotlin.$_$.f9;
  var emptyList = kotlin_kotlin.$_$.y5;
  var toMutableList = kotlin_kotlin.$_$.p7;
  var rotateRight = kotlin_kotlin.$_$.de;
  var sortWith = kotlin_kotlin.$_$.i7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.ie;
  var plus_0 = kotlin_kotlin.$_$.d7;
  var compareValues = kotlin_kotlin.$_$.t7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var lazy = kotlin_kotlin.$_$.yd;
  var firstOrNull = kotlin_kotlin.$_$.d6;
  var compareTo = kotlin_kotlin.$_$.x8;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var isArray = kotlin_kotlin.$_$.i9;
  var Set = kotlin_kotlin.$_$.e5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var ensureNotNull = kotlin_kotlin.$_$.td;
  var plus_1 = kotlin_kotlin.$_$.z6;
  var Exception = kotlin_kotlin.$_$.uc;
  var Map = kotlin_kotlin.$_$.z4;
  var fillArrayVal = kotlin_kotlin.$_$.a9;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var toString_0 = kotlin_kotlin.$_$.he;
  var Element = kotlin_kotlin.$_$.h8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.fe;
  var Collection = kotlin_kotlin.$_$.s4;
  var addAll = kotlin_kotlin.$_$.g5;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var toList = kotlin_kotlin.$_$.m7;
  var flatten = kotlin_kotlin.$_$.f6;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var CancellationException = kotlin_kotlin.$_$.u7;
  var addSuppressed = kotlin_kotlin.$_$.od;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Long = kotlin_kotlin.$_$.xc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var removeFirst = kotlin_kotlin.$_$.e7;
  var arrayCopy = kotlin_kotlin.$_$.h5;
  var fill_0 = kotlin_kotlin.$_$.c6;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x3;
  var first = kotlin_kotlin.$_$.e6;
  var last = kotlin_kotlin.$_$.s6;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var copyOf = kotlin_kotlin.$_$.v5;
  var joinToString = kotlin_kotlin.$_$.l6;
  var copyOf_0 = kotlin_kotlin.$_$.u5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var AbstractList = kotlin_kotlin.$_$.k4;
  var List = kotlin_kotlin.$_$.x4;
  var coerceAtMost = kotlin_kotlin.$_$.ka;
  var arrayIterator = kotlin_kotlin.$_$.o8;
  var AbstractMutableList = kotlin_kotlin.$_$.n4;
  var MutableList = kotlin_kotlin.$_$.a5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var indexOf = kotlin_kotlin.$_$.i6;
  var lastIndexOf = kotlin_kotlin.$_$.q6;
  var AbstractMap = kotlin_kotlin.$_$.l4;
  var AbstractMutableMap = kotlin_kotlin.$_$.o4;
  var MutableMap = kotlin_kotlin.$_$.c5;
  var MutableEntry = kotlin_kotlin.$_$.b5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var AbstractMutableSet = kotlin_kotlin.$_$.p4;
  var MutableSet = kotlin_kotlin.$_$.d5;
  var AbstractMutableCollection = kotlin_kotlin.$_$.m4;
  var Entry = kotlin_kotlin.$_$.y4;
  var AbstractSet = kotlin_kotlin.$_$.q4;
  var objectCreate = kotlin_kotlin.$_$.ba;
  var until = kotlin_kotlin.$_$.oa;
  var step = kotlin_kotlin.$_$.na;
  var countOneBits = kotlin_kotlin.$_$.qd;
  var takeLowestOneBit = kotlin_kotlin.$_$.ee;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var longArray = kotlin_kotlin.$_$.x9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Char = kotlin_kotlin.$_$.pc;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var contains = kotlin_kotlin.$_$.k5;
  var plus_2 = kotlin_kotlin.$_$.c7;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var SequenceScope = kotlin_kotlin.$_$.va;
  var intArrayIterator = kotlin_kotlin.$_$.g9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var toIntArray = kotlin_kotlin.$_$.l7;
  var sequence = kotlin_kotlin.$_$.wa;
  var anyToString = kotlin_kotlin.$_$.n8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.oc;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.x1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  var println = kotlin_kotlin.$_$.m8;
  var printStackTrace = kotlin_kotlin.$_$.be;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.hz(value);
  }
  function changed_0(value) {
    return this.iz(value);
  }
  function changedInstance(value) {
    return this.gz(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [CoroutineScope_0], VOID, VOID, [1]);
  setMetadataFor($awaitDisposeCOROUTINE$0, '$awaitDisposeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope], VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta);
  setMetadataFor(IntStack, 'IntStack', classMeta);
  setMetadataFor(Stack, 'Stack', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set]);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, MutableList, Collection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableSet, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [Collection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [MutableList, StateObject]);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.dw_1 = applier;
    this.ew_1 = offset;
    this.fw_1 = 0;
  }
  protoOf(OffsetApplier).uv = function () {
    return this.dw_1.uv();
  };
  protoOf(OffsetApplier).xv = function (node) {
    this.fw_1 = this.fw_1 + 1 | 0;
    this.dw_1.xv(node);
  };
  protoOf(OffsetApplier).yv = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.fw_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.fw_1 = this.fw_1 - 1 | 0;
    this.dw_1.yv();
  };
  protoOf(OffsetApplier).zv = function (index, instance) {
    this.dw_1.zv(index + (this.fw_1 === 0 ? this.ew_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).aw = function (index, instance) {
    this.dw_1.aw(index + (this.fw_1 === 0 ? this.ew_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).bw = function (index, count) {
    this.dw_1.bw(index + (this.fw_1 === 0 ? this.ew_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).cw = function (from, to, count) {
    var effectiveOffset = this.fw_1 === 0 ? this.ew_1 : 0;
    this.dw_1.cw(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.gw_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.hw_1 = ArrayList_init_$Create$();
    this.iw_1 = this.gw_1;
    this.jw_1 = 8;
  }
  protoOf(AbstractApplier).kw = function (_set____db54di) {
    this.iw_1 = _set____db54di;
  };
  protoOf(AbstractApplier).uv = function () {
    return this.iw_1;
  };
  protoOf(AbstractApplier).lw = function (node) {
    this.hw_1.a(this.uv());
    this.kw(node);
  };
  protoOf(AbstractApplier).xv = function (node) {
    return this.lw((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).yv = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.hw_1.k()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.kw(this.hw_1.m3(this.hw_1.f() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.mw_1 = onFrame;
    this.nw_1 = continuation;
  }
  protoOf(FrameAwaiter).ow = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var tmp1_success = this.mw_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(tmp1_success);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.nw_1.t3(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.qw_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.rw_1 == null))
      return Unit_getInstance();
    $this.rw_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.sw_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = item.nw_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp0_resumeWithException.t3(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.sw_1.y9();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.qw_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.sw_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.v9(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.pw_1 = onNewAwaiters;
    this.qw_1 = createSynchronizedObject();
    this.rw_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.sw_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.tw_1 = ArrayList_init_$Create$();
    this.uw_1 = 8;
  }
  protoOf(BroadcastFrameClock).vw = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.qw_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.sw_1.k();
  };
  protoOf(BroadcastFrameClock).ww = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.qw_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.sw_1;
    this.sw_1 = this.tw_1;
    this.tw_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.l(i).ow(timeNanos);
      }
       while (inductionVariable < last);
    toResume.y9();
  };
  protoOf(BroadcastFrameClock).xw = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.om();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.qw_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.rw_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.t3(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.sw_1.k();
      var tmp = this.sw_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.ml(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.pw_1 == null) : false) {
        try {
          this.pw_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.yk();
  };
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.wx();
    while (tmp0_iterator.d()) {
      var slot = tmp0_iterator.e();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.xx(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.yx(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.eo();
      }
    }
    _this__u8e3s4.gy();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.hy_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.wy(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.xy();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.pz_1 = compositionLocal;
    this.qz_1 = value;
    this.rz_1 = canOverride;
    this.sz_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.vy(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    return !(tmp0_let == null) ? tmp0_let.tz() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.uz(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vz();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.wz_1 = content;
    this.xz_1 = parameter;
    this.yz_1 = composition;
    this.zz_1 = slotTable;
    this.a10_1 = anchor;
    this.b10_1 = invalidations;
    this.c10_1 = locals;
    this.d10_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.e10_1 = message;
  }
  protoOf(ComposeRuntimeError).z = function () {
    return this.e10_1;
  };
  function startRoot($this) {
    $this.m11_1 = $this.h10_1.p12();
    startGroup($this, 100);
    $this.g10_1.r12();
    $this.z10_1 = $this.g10_1.s12();
    $this.c11_1.v12(asInt($this.b11_1));
    $this.b11_1 = $this.gz($this.z10_1);
    $this.q11_1 = null;
    if (!$this.u10_1) {
      $this.u10_1 = $this.g10_1.w12();
    }
    var tmp0_safe_receiver = read($this.z10_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.h10_1);
      $this.g10_1.x12(tmp0_safe_receiver);
    }
    startGroup($this, $this.g10_1.y12());
  }
  function endRoot($this) {
    endGroup($this);
    $this.g10_1.z12();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.m11_1.m13();
    $this.v10_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.m10_1.y9();
    $this.p10_1.y9();
    $this.r10_1.y9();
    $this.y10_1.y9();
    $this.c11_1.y9();
    $this.a11_1.y9();
    if (!$this.m11_1.f13_1) {
      $this.m11_1.m13();
    }
    if (!$this.o11_1.ux_1) {
      $this.o11_1.m13();
    }
    $this.t11_1.y9();
    createFreshInsertTable($this);
    $this.v11_1 = 0;
    $this.f11_1 = 0;
    $this.w10_1 = false;
    $this.u11_1 = false;
    $this.d11_1 = false;
    $this.k11_1 = false;
    $this.v10_1 = false;
    $this.e11_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().p13_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().p13_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.q10_1 = $this.q10_1 + $this.m11_1.s13() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.q11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.m11_1.i13_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.u11_1 ? $this.p11_1 : false) {
      var current = $this.o11_1.tx_1;
      while (current > 0) {
        if ($this.o11_1.v13(current) === 202 ? equals($this.o11_1.u13(current), get_compositionLocalMap()) : false) {
          var tmp = $this.o11_1.t13(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.q11_1 = providers;
          return providers;
        }
        current = $this.o11_1.w13(current);
      }
    }
    if ($this.m11_1.f() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.m11_1.v13(current_0) === 202 ? equals($this.m11_1.u13(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.a11_1.l(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.m11_1.t13(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.q11_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.m11_1.w13(current_0);
      }
    }
    $this.q11_1 = $this.z10_1;
    return $this.z10_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.x13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.d3(currentProviders);
    var providerScope = tmp0_apply.db();
    startGroup_0($this, 204, get_providerMaps());
    $this.gz(providerScope);
    $this.gz(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.o11_1.ux_1) {
      $this.o11_1 = $this.n11_1.y13();
      $this.o11_1.yy();
      $this.p11_1 = false;
      $this.q11_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.o11_1.ux_1);
    $this.n11_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.n11_1.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.m13();
    tmp.o11_1 = tmp0_also;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.m11_1.zy();
    } else {
      if (!(data == null) ? !($this.m11_1.z13() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.m11_1.a14();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().p13_1));
    if ($this.u11_1) {
      $this.m11_1.b14();
      var startIndex = $this.o11_1.sx_1;
      if (isNode) {
        $this.o11_1.e14(key, Companion_getInstance_1().hy_1);
      } else if (!(data == null)) {
        var tmp = $this.o11_1;
        tmp.d14(key, objectKey == null ? Companion_getInstance_1().hy_1 : objectKey, data);
      } else {
        var tmp_0 = $this.o11_1;
        tmp_0.c14(key, objectKey == null ? Companion_getInstance_1().hy_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.n10_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.l14(insertKeyInfo, $this.o10_1 - tmp2_safe_receiver.g14_1 | 0);
        tmp2_safe_receiver.m14(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().q13_1))) {
      tmp_1 = $this.d11_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.n10_1 == null) {
      var slotKey = $this.m11_1.n14();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.m11_1.p14()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.n10_1 = new Pending($this.m11_1.o14(), $this.o10_1);
      }
    }
    var pending = $this.n10_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.q14(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.m14(keyInfo);
        var location = keyInfo.v14_1;
        $this.o10_1 = pending.y14(keyInfo) + pending.g14_1 | 0;
        var relativePosition = pending.z14(keyInfo);
        var currentRelativePosition = relativePosition - pending.h14_1 | 0;
        pending.a15(relativePosition, pending.h14_1);
        recordReaderMoving($this, location);
        $this.m11_1.b15(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.m11_1.b14();
        $this.u11_1 = true;
        $this.q11_1 = null;
        ensureWriter($this);
        $this.o11_1.r14();
        var startIndex_0 = $this.o11_1.sx_1;
        if (isNode) {
          $this.o11_1.e14(key, Companion_getInstance_1().hy_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.o11_1;
          tmp_2.d14(key, objectKey == null ? Companion_getInstance_1().hy_1 : objectKey, data);
        } else {
          var tmp_3 = $this.o11_1;
          tmp_3.c14(key, objectKey == null ? Companion_getInstance_1().hy_1 : objectKey);
        }
        $this.s11_1 = $this.o11_1.s14(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.l14(insertKeyInfo_0, $this.o10_1 - pending.g14_1 | 0);
        pending.m14(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.o10_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.m10_1.c15($this.n10_1);
    $this.n10_1 = newPending;
    $this.p10_1.v12($this.o10_1);
    if (isNode)
      $this.o10_1 = 0;
    $this.r10_1.v12($this.q10_1);
    $this.q10_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.m10_1.d15();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.h14_1 = previousPending.h14_1 + 1 | 0;
    }
    $this.n10_1 = previousPending;
    $this.o10_1 = $this.p10_1.d15() + expectedNodeCount | 0;
    $this.q10_1 = $this.r10_1.d15() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.u11_1) {
      var parent = $this.o11_1.tx_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.o11_1.v13(parent), $this.o11_1.u13(parent), $this.o11_1.t13(parent));
    } else {
      var parent_0 = $this.m11_1.i13_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.m11_1.v13(parent_0), $this.m11_1.u13(parent_0), $this.m11_1.t13(parent_0));
    }
    var expectedNodeCount = $this.q10_1;
    var pending = $this.n10_1;
    if (!(pending == null) ? pending.f14_1.f() > 0 : false) {
      var previous = pending.f14_1;
      var current = pending.e15();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.f();
      var previousIndex = 0;
      var previousEnd = previous.f();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.l(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.y14(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.g14_1 | 0, previousInfo.w14_1);
          pending.f15(previousInfo.v14_1, 0);
          recordReaderMoving($this, previousInfo.v14_1);
          $this.m11_1.b15(previousInfo.v14_1);
          recordDelete($this);
          $this.m11_1.s13();
          removeRange($this.x10_1, previousInfo.v14_1, previousInfo.v14_1 + $this.m11_1.g15(previousInfo.v14_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.l(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.y14(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.h15(currentInfo);
              recordMoveNode($this, nodePosition + pending.g14_1 | 0, nodeOffset + pending.g14_1 | 0, updatedCount);
              pending.i15(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.h15(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.m11_1.j15());
        $this.m11_1.yy();
      }
    }
    var removeIndex = $this.o10_1;
    while (!$this.m11_1.k15()) {
      var startSlot = $this.m11_1.g13_1;
      recordDelete($this);
      var nodesToRemove = $this.m11_1.s13();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.x10_1, startSlot, $this.m11_1.g13_1);
    }
    var inserting = $this.u11_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.m11_1.m15();
      var parentGroup = $this.o11_1.tx_1;
      $this.o11_1.n15();
      if (!$this.m11_1.p15()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.o11_1.o15();
        $this.o11_1.m13();
        recordInsert($this, $this.s11_1);
        $this.u11_1 = false;
        if (!$this.h10_1.uo()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.m11_1.i13_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.m11_1.l15();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.k11_1;
    $this.k11_1 = true;
    var recomposed = false;
    var parent = $this.m11_1.i13_1;
    var end = parent + $this.m11_1.g15(parent) | 0;
    var recomposeIndex = $this.o10_1;
    var recomposeCompoundKey = $this.v11_1;
    var oldGroupNodeCount = $this.q10_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.x10_1, $this.m11_1.g13_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.r15_1;
      removeLocation($this.x10_1, location);
      if (firstInRange_0.w15()) {
        recomposed = true;
        $this.m11_1.b15(location);
        var newGroup = $this.m11_1.g13_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.o10_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.v11_1 = compoundKeyOf($this, $this.m11_1.w13(newGroup), parent, recomposeCompoundKey);
        $this.q11_1 = null;
        firstInRange_0.q15_1.u15($this);
        $this.q11_1 = null;
        $this.m11_1.v15(parent);
      } else {
        $this.j11_1.c15(firstInRange_0.q15_1);
        firstInRange_0.q15_1.t15();
        $this.j11_1.d15();
      }
      firstInRange_0 = firstInRange($this.x10_1, $this.m11_1.g13_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.m11_1.yy();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.o10_1 = recomposeIndex + parentGroupNodes | 0;
      $this.q10_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.v11_1 = recomposeCompoundKey;
    $this.k11_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.m10_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.m10_1.x15(pendingIndex);
            if (!(pending == null) ? pending.f15(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.m11_1.i13_1;
        } else {
          if ($this.m11_1.y15(current))
            break $l$loop_0;
          current = $this.m11_1.w13(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.m11_1.w13(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.m11_1.y15(anchorGroup)) {
      anchorGroup = $this.m11_1.w13(anchorGroup);
    }
    var index = $this.m11_1.y15(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.m11_1.z15(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.m11_1.g15(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.t10_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.h2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.s10_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.m11_1.z15(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.t10_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.t10_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.l3(group, count);
      } else {
        var tmp1_elvis_lhs = $this.s10_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.m11_1.f());
          fill(newCounts_0, -1);
          $this.s10_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.s10_1 = null;
    $this.t10_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.m11_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.y15(current)) {
        recordUp($this);
      }
      current = reader.w13(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.m11_1.w13(group), nearestCommonRoot);
      if ($this.m11_1.y15(group)) {
        recordDown($this, nodeAt($this.m11_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.m11_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.m11_1.w13(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(tmp0_rol, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.a16(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.u13(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.a5_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.v13(group);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.t13(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().hy_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.q10_1 = $this.m11_1.b16();
    $this.m11_1.yy();
  }
  function addRecomposeScope($this) {
    if ($this.u11_1) {
      var tmp = $this.l10_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.j11_1.c15(scope);
      $this.c16(scope);
      scope.e16($this.g11_1);
    } else {
      var invalidation = removeLocation($this.x10_1, $this.m11_1.i13_1);
      var slot = $this.m11_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().hy_1)) {
        var tmp_1 = $this.l10_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.c16(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.d16(!(invalidation == null));
      $this.j11_1.c15(scope_0);
      scope_0.e16($this.g11_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.py(get_movableContentKey(), content);
    $this.gz(parameter);
    var savedCompoundKeyHash = $this.v11_1;
    try {
      $this.v11_1 = get_movableContentKey();
      if ($this.u11_1) {
        $this.o11_1.f16();
      }
      var providersChanged = $this.u11_1 ? false : !equals($this.m11_1.z13(), locals);
      if (providersChanged) {
        $this.a11_1.g16($this.m11_1.g13_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().p13_1, locals);
      if ($this.u11_1 ? !force : false) {
        $this.p11_1 = true;
        $this.q11_1 = null;
        var anchor = $this.o11_1.s14($this.o11_1.w13($this.o11_1.tx_1));
        var reference = new MovableContentStateReference(content, parameter, $this.l10_1, $this.n11_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.g10_1.h16(reference);
      } else {
        var savedProvidersInvalid = $this.b11_1;
        $this.b11_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.b11_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.v11_1 = savedCompoundKeyHash;
      $this.qy();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.k10_1;
      var savedChanges = $this.j10_1;
      try {
        $this.j10_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.l(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.j3();
            var from = item.k3();
            var anchor = to.a10_1;
            var location = to.zz_1.i16(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.zz_1;
              if (equals(toSlotTable, $this.n11_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let = to.zz_1.p12();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.b15(location);
                $this.y11_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.k()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.m13();
              }
            } else {
              var resolvedState = $this.g10_1.j16(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.k16_1;
              var fromTable = tmp1_elvis_lhs == null ? from.zz_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.k16_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s14(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.a10_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.k()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.zz_1, $this.h10_1)) {
                  var group = $this.h10_1.i16(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let_0 = fromTable.p12();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.m11_1;
                  var savedCountOverrides = $this.s10_1;
                  $this.s10_1 = null;
                  try {
                    $this.m11_1 = tmp0_let_0;
                    var newLocation = fromTable.i16(fromAnchor);
                    tmp0_let_0.b15(newLocation);
                    $this.y11_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.j10_1;
                      try {
                        $this.j10_1 = offsetChanges_0;
                        var tmp_2 = tmp0_let_0.g13_1;
                        var tmp_3 = from.b10_1;
                        recomposeMovableContent($this, from.yz_1, to.yz_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.j10_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.k()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.m11_1 = savedReader;
                    $this.s10_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp0_let_0.m13();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.y11_1 = 0;
        break $l$block_1;
      }finally {
        $this.j10_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.a12_1;
    var savedIsComposing = $this.k11_1;
    var savedNodeIndex = $this.o10_1;
    try {
      $this.a12_1 = false;
      $this.k11_1 = true;
      $this.o10_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.l(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.j3();
          var instances = item.k3();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.o16_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.n16_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
                $this.m16(scope, tmp0_anonymous);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.m16(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.p16(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.a12_1 = savedImplicitRootStart;
      $this.k11_1 = savedIsComposing;
      $this.o10_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.q16(_this__u8e3s4.i13_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.q16(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.w10_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.w10_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.w10_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.j10_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.w11_1;
    if (count > 0) {
      $this.w11_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.x11_1.r16()) {
      realizeDowns($this, $this.x11_1.gb());
      $this.x11_1.y9();
    }
  }
  function recordDown($this, node) {
    $this.x11_1.c15(node);
  }
  function recordUp($this) {
    if ($this.x11_1.r16()) {
      $this.x11_1.d15();
    } else {
      $this.w11_1 = $this.w11_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.m11_1.i13_1 : $this.m11_1.g13_1;
    var distance = location - $this.y11_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.y11_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.t11_1.k()) {
      var insertTable = $this.n11_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.t11_1);
      $this.t11_1.y9();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.n11_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.t11_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.c12_1.c15(change);
  }
  function registerInsertUpFixup($this) {
    $this.t11_1.a($this.c12_1.d15());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.m11_1.g13_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.y11_1 = $this.y11_1 + $this.m11_1.s16() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      tmp0_let.r14();
      tmp0_let.c14(get_movableContentKey(), reference.wz_1);
      tmp0_let.f16();
      tmp0_let.t16(reference.xz_1);
      var anchors = slots.u16(reference.a10_1, 1, tmp0_let);
      tmp0_let.s13();
      tmp0_let.n15();
      tmp0_let.o15();
      tmp = anchors;
    }finally {
      tmp0_let.m13();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_getInstance_3().w16(slotTable, anchors_0)) {
      var composition = $this.l10_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = slotTable.y13();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp_0;
      try {
        Companion_getInstance_3().v16(tmp0_let_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_getInstance();
      }finally {
        tmp0_let_0.m13();
      }
    }
    $this.g10_1.x16(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.h10_1.y16()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.r11_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $this.h10_1.p12();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.m11_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.j10_1;
          try {
            $this.j10_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.z11_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.j10_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.m13();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.m11_1.g13_1 - $this.y11_1 | 0;
    $this.y11_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.m11_1.f() > 0) {
      var reader = $this.m11_1;
      var location = reader.i13_1;
      if (!($this.b12_1.z16(-2) === location)) {
        if (!$this.z11_1 ? $this.a12_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.z11_1 = true;
        }
        if (location > 0) {
          var anchor = reader.s14(location);
          $this.b12_1.v12(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.m11_1.i13_1;
    var currentStartedGroup = $this.b12_1.z16(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.b12_1.z16(-1) === location) {
      $this.b12_1.d15();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.z11_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.z11_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.m10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.b12_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.n10_1 = null;
    $this.o10_1 = 0;
    $this.q10_1 = 0;
    $this.y11_1 = 0;
    $this.v11_1 = 0;
    $this.w10_1 = false;
    $this.z11_1 = false;
    $this.b12_1.y9();
    $this.j11_1.y9();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.d12_1 === nodeIndex) {
        $this.g12_1 = $this.g12_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.d12_1 = nodeIndex;
        $this.g12_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.g12_1 > 0 ? $this.e12_1 === (from - $this.g12_1 | 0) : false) ? $this.f12_1 === (to - $this.g12_1 | 0) : false) {
        $this.g12_1 = $this.g12_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.e12_1 = from;
        $this.f12_1 = to;
        $this.g12_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.g12_1;
    $this.g12_1 = 0;
    if (count > 0) {
      if ($this.d12_1 >= 0) {
        var removeIndex = $this.d12_1;
        $this.d12_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.e12_1;
        $this.e12_1 = -1;
        var to = $this.f12_1;
        $this.f12_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().hy_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.a5_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.v11_1;
    tmp.v11_1 = rotateLeft(tmp0_rol, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().hy_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.a5_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.v11_1 ^ groupKey;
    tmp.v11_1 = rotateRight(tmp0_ror, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.k11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().a17('Compose:recompose');
      try {
        $this.g11_1 = currentSnapshot().g17();
        $this.a11_1.y9();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.j17_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.h17_1[index];
            var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.i17_1[index];
            var tmp1_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0_anonymous.by_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k17_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.x10_1.a(new Invalidation(tmp0_anonymous, location, tmp1_anonymous));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.x10_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.o10_1 = 0;
        var complete = false;
        $this.k11_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.l17();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.c16((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var tmp3_observeDerivedStateRecalculations = $this.i11_1;
          var observers = derivedStateObservers_0();
          try {
            observers.q17(tmp3_observeDerivedStateRecalculations);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.v10_1 ? true : $this.b11_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_1().hy_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.r17();
            }
          }finally {
            var tmp$ret$2;
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            tmp$ret$2 = observers.o17_1 - 1 | 0;
            observers.m3(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.k11_1 = false;
          $this.x10_1.y9();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_getInstance().s17(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.t17_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).eg = function (a, b) {
    return this.t17_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.eg(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.u17(index)) {
      slots.yy();
      if (slots.y15(slots.tx_1)) {
        applier.yv();
      }
      slots.n15();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.sx_1;
    var current = slots.tx_1;
    while (current >= 0 ? !slots.y15(current) : false) {
      current = slots.w13(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.v17(original, current)) {
        if (slots.y15(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.y15(current) ? 1 : slots.z15(current)) | 0;
        current = current + slots.g15(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.i16(anchor);
    runtimeCheck(slots.sx_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.sx_1 < destination) {
      if (slots.x17(destination)) {
        if (slots.w17()) {
          applier.xv(slots.q16(slots.sx_1));
          nodeIndex = 0;
        }
        slots.a14();
      } else
        nodeIndex = nodeIndex + slots.s13() | 0;
    }
    runtimeCheck(slots.sx_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.m11_1.k18(group)) {
      var key = this$0.m11_1.v13(group);
      var objectKey = this$0.m11_1.u13(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.m11_1.z17(group, 0);
        var anchor = this$0.m11_1.s14(group);
        var end = group + this$0.m11_1.g15(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.x10_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.f());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var tmp0_plusAssign = to(item.q15_1, item.s15_1);
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.l10_1, this$0.h10_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.g10_1.j18(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.m11_1.y15(group) ? 1 : this$0.m11_1.z15(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.m11_1.z15(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.m11_1.z17(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.a18_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.f18_1.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
              this$0.g10_1.i18(element.l10_1);
            }
          }
          tmp_0 = this$0.m11_1.z15(group);
        } else {
          tmp_0 = this$0.m11_1.z15(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.m11_1.y17(group)) {
      var size = this$0.m11_1.g15(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.m11_1.y15(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.m11_1.q16(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.m11_1.g15(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.m11_1.z15(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.l18_1 = this$0;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.m18($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.zv($insertIndex, node);
      applier.xv(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.n18($groupAnchor);
      applier.yv();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.aw($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.uv();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).yw();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.uv();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.o18($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.o18($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.p18($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.yx(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.eo();
          tmp_0 = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.ny(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.oy();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.q18($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r18($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.l10_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.t18_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.j10_1;
        try {
          this$0.j10_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.m11_1;
            var savedCountOverrides = this$0.s10_1;
            this$0.s10_1 = null;
            try {
              this$0.m11_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.wz_1, $to.c10_1, $to.xz_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.m11_1 = savedReader;
              this$0.s10_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.j10_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.aw(base + index | 0, item);
          applier.zv(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.g10_1.j16($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.u18(1, state.k16_1, 2);
      var tmp_0 = Companion_getInstance_3();
      var tmp_1 = $to.yz_1;
      tmp_0.v16(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.wz_1, $to.c10_1, $to.xz_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.n15();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.yv();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.xv($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.v18($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r14();
      slots.x18($insertTable, $anchor.w18($insertTable), false);
      slots.o15();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.y13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.f() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.l(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.m13();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.r14();
      slots.x18($insertTable, $anchor.w18($insertTable), false);
      slots.o15();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.y18_1 = $composition;
    this.z18_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).a19 = function (scope, instance) {
    var tmp = this.y18_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a19(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.z18_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.b10_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        tmp0_also.q17(tmp0_also);
        tmp_2 = tmp0_also;
      }
      tmp_0.b10_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).b19 = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).c19 = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.d19($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.bw($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.cw($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.r15_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.r15_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.f10_1 = applier;
    this.g10_1 = parentContext;
    this.h10_1 = slotTable;
    this.i10_1 = abandonSet;
    this.j10_1 = changes;
    this.k10_1 = lateChanges;
    this.l10_1 = composition;
    this.m10_1 = new Stack();
    this.n10_1 = null;
    this.o10_1 = 0;
    this.p10_1 = new IntStack();
    this.q10_1 = 0;
    this.r10_1 = new IntStack();
    this.s10_1 = null;
    this.t10_1 = null;
    this.u10_1 = false;
    this.v10_1 = false;
    this.w10_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.x10_1 = ArrayList_init_$Create$();
    this.y10_1 = new IntStack();
    this.z10_1 = persistentCompositionLocalHashMapOf();
    this.a11_1 = new IntMap();
    this.b11_1 = false;
    this.c11_1 = new IntStack();
    this.d11_1 = false;
    this.e11_1 = -1;
    this.f11_1 = 0;
    this.g11_1 = 0;
    this.h11_1 = true;
    var tmp_0 = this;
    tmp_0.i11_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.j11_1 = new Stack();
    this.k11_1 = false;
    this.l11_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h10_1.p12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.m13();
    tmp_1.m11_1 = tmp0_also;
    this.n11_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.n11_1.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.m13();
    tmp_2.o11_1 = tmp0_also_0;
    this.p11_1 = false;
    this.q11_1 = null;
    this.r11_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = this.n11_1.p12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = tmp0_let.s14(0);
    }finally {
      tmp0_let.m13();
    }
    tmp_3.s11_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.t11_1 = ArrayList_init_$Create$();
    this.u11_1 = false;
    this.v11_1 = 0;
    this.w11_1 = 0;
    this.x11_1 = new Stack();
    this.y11_1 = 0;
    this.z11_1 = false;
    this.a12_1 = true;
    this.b12_1 = new IntStack();
    this.c12_1 = new Stack();
    this.d12_1 = -1;
    this.e12_1 = -1;
    this.f12_1 = -1;
    this.g12_1 = 0;
  }
  protoOf(ComposerImpl).iy = function () {
    return this.f10_1;
  };
  protoOf(ComposerImpl).e19 = function () {
    return this.f11_1 > 0;
  };
  protoOf(ComposerImpl).oz = function () {
    return this.g10_1.f19();
  };
  protoOf(ComposerImpl).ny = function (key) {
    return start(this, key, null, Companion_getInstance_2().p13_1, null);
  };
  protoOf(ComposerImpl).oy = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).ry = function () {
    return start(this, -127, null, Companion_getInstance_2().p13_1, null);
  };
  protoOf(ComposerImpl).sy = function () {
    endGroup(this);
    var scope = this.g19();
    if (!(scope == null) ? scope.e15() : false) {
      scope.h19(true);
    }
  };
  protoOf(ComposerImpl).ly = function () {
    var tmp;
    if (this.b11_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.g19();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ly()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).py = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().p13_1, null);
  };
  protoOf(ComposerImpl).qy = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).i19 = function () {
    createFreshInsertTable(this);
    this.a11_1.y9();
  };
  protoOf(ComposerImpl).jy = function () {
    return this.u11_1;
  };
  protoOf(ComposerImpl).ky = function () {
    var tmp;
    var tmp_0;
    if ((!this.u11_1 ? !this.d11_1 : false) ? !this.b11_1 : false) {
      var tmp0_safe_receiver = this.g19();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j19()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.v10_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).zy = function () {
    start(this, 125, null, Companion_getInstance_2().q13_1, null);
    this.w10_1 = true;
  };
  protoOf(ComposerImpl).az = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.u11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.p10_1.k19();
    var groupAnchor = this.o11_1.s14(this.o11_1.tx_1);
    this.q10_1 = this.q10_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).bz = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.u11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.m11_1, this);
    recordDown(this, node);
    var tmp;
    if (this.d11_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).cz = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).dz = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.u11_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).l17 = function () {
    var tmp;
    if (this.u11_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().hy_1;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.m11_1.e();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp = this.d11_1 ? Companion_getInstance_1().hy_1 : tmp0_let;
    }
    return tmp;
  };
  protoOf(ComposerImpl).gz = function (value) {
    var tmp;
    if (!equals(this.l17(), value)) {
      this.c16(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).jz = function (value) {
    var tmp;
    if (!(this.l17() === value)) {
      this.c16(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).hz = function (value) {
    var next = this.l17();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.c16(value);
    return true;
  };
  protoOf(ComposerImpl).iz = function (value) {
    var next = this.l17();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.c16(value);
    return true;
  };
  protoOf(ComposerImpl).c16 = function (value) {
    if (this.u11_1) {
      this.o11_1.t16(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.i10_1.a(value);
      }
    } else {
      var groupSlotIndex = this.m11_1.l19() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.i10_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).mz = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.u11_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.p11_1 = true;
    } else {
      var tmp = this.m11_1.m19(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.m11_1.m19(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.ky() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.u11_1 : false) {
      this.a11_1.g16(this.m11_1.g13_1, providers);
    }
    this.c11_1.v12(asInt(this.b11_1));
    this.b11_1 = invalid;
    this.q11_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().p13_1, providers);
  };
  protoOf(ComposerImpl).nz = function () {
    endGroup(this);
    endGroup(this);
    this.b11_1 = asBool(this.c11_1.d15());
    this.q11_1 = null;
  };
  protoOf(ComposerImpl).lz = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).g19 = function () {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.j11_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    return (this.f11_1 === 0 ? tmp0_let.r16() : false) ? tmp0_let.k19() : null;
  };
  protoOf(ComposerImpl).m16 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.by_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.m11_1.a13_1;
    var location = anchor.w18(slotTable);
    if (this.k11_1 ? location >= this.m11_1.g13_1 : false) {
      insertIfMissing(this.x10_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).r17 = function () {
    if (this.x10_1.k()) {
      skipGroup(this);
    } else {
      var reader = this.m11_1;
      var key = reader.n14();
      var dataKey = reader.p14();
      var aux = reader.z13();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.w17(), null);
      recomposeToGroupEnd(this);
      reader.l15();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).yy = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.q10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.g19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n19();
    }
    if (this.x10_1.k()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).ty = function (key) {
    start(this, key, null, Companion_getInstance_2().p13_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).uy = function () {
    var scope = this.j11_1.r16() ? this.j11_1.d15() : null;
    if (scope != null) {
      scope.d16(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.o19(this.g11_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.q19() : false) ? scope.e15() ? true : this.u10_1 : false) {
      if (scope.by_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.u11_1) {
          tmp_1 = this.o11_1.s14(this.o11_1.tx_1);
        } else {
          tmp_1 = this.m11_1.s14(this.m11_1.i13_1);
        }
        tmp_0.by_1 = tmp_1;
      }
      scope.p19(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).r19 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).vy = function (sourceInformation) {
    if (this.u11_1 ? this.h11_1 : false) {
      this.o11_1.s19(sourceInformation);
    }
  };
  protoOf(ComposerImpl).wy = function (key, sourceInformation) {
    if (this.h11_1) {
      start(this, key, null, Companion_getInstance_2().p13_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).xy = function () {
    if (this.h11_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).t19 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.k11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.k11_1 = true;
    try {
      block();
    }finally {
      this.k11_1 = false;
    }
  };
  protoOf(ComposerImpl).u19 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.j10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.r16()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.x10_1.k();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.v10_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.j10_1.k();
    }
    return false;
  };
  protoOf(ComposerImpl).my = function () {
    return this.g19();
  };
  protoOf(ComposerImpl).ez = function () {
    return this.l17();
  };
  protoOf(ComposerImpl).fz = function (value) {
    return this.c16(value);
  };
  protoOf(ComposerImpl).kz = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.v19(true);
    }
  };
  protoOf(ComposerImpl).w19 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.j10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.k16_1 = slotTable;
    this.l16_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.f14_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.f14_1.l(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.f14_1 = keyInfos;
    this.g14_1 = startIndex;
    this.h14_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g14_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i14_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.f14_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.f14_1.l(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.v14_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.w14_1);
        result.l3(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.w14_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.j14_1 = result;
    var tmp_1 = this;
    tmp_1.k14_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).x19 = function () {
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return this.k14_1.w1();
  };
  protoOf(Pending).q14 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.x19(), joinedKey);
  };
  protoOf(Pending).m14 = function (keyInfo) {
    return this.i14_1.a(keyInfo);
  };
  protoOf(Pending).e15 = function () {
    return this.i14_1;
  };
  protoOf(Pending).a15 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.j14_1.bb().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.y19_1;
        if (position === from)
          element.y19_1 = to;
        else if (to <= position ? position < from : false)
          element.y19_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.j14_1.bb().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.y19_1;
        if (position_0 === from)
          element_0.y19_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.y19_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).i15 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.j14_1.bb().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.z19_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.z19_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.z19_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.j14_1.bb().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.z19_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.z19_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.z19_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).l14 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.j14_1;
    var tmp1_set = keyInfo.v14_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.l3(tmp1_set, tmp2_set);
  };
  protoOf(Pending).f15 = function (group, newCount) {
    var groupInfo = this.j14_1.h2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.z19_1;
      var difference = newCount - groupInfo.a1a_1 | 0;
      groupInfo.a1a_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.j14_1.bb().c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.z19_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.z19_1 + difference | 0;
            if (newIndex >= 0)
              element.z19_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).z14 = function (keyInfo) {
    var tmp0_safe_receiver = this.j14_1.h2(keyInfo.v14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y19_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).y14 = function (keyInfo) {
    var tmp0_safe_receiver = this.j14_1.h2(keyInfo.v14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z19_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).h15 = function (keyInfo) {
    var tmp0_safe_receiver = this.j14_1.h2(keyInfo.v14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1a_1;
    return tmp1_elvis_lhs == null ? keyInfo.w14_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.q15_1 = scope;
    this.r15_1 = location;
    this.s15_1 = instances;
  }
  protoOf(Invalidation).w15 = function () {
    return this.q15_1.b1a(this.s15_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p13_1 = _GroupKind___init__impl__iwqg06(0);
    this.q13_1 = _GroupKind___init__impl__iwqg06(1);
    this.r13_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.l(index);
      if (validation.r15_1 < end) {
        _this__u8e3s4.m3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.l(index);
      if (firstInvalidation.r15_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.m3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.w13(a) === b)
      return b;
    if (_this__u8e3s4.w13(b) === a)
      return a;
    if (_this__u8e3s4.w13(a) === _this__u8e3s4.w13(b))
      return _this__u8e3s4.w13(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.w13(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.w13(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.w13(currentA);
      currentB = _this__u8e3s4.w13(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.q17(instance);
        tmp_0 = tmp0_also;
      }
      _this__u8e3s4.la(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.l(index).s15_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.l(index).s15_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.q17(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.p12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.i16(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.m13();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var invalidation = _this__u8e3s4.l(index);
      if (invalidation.r15_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.y19_1 = slotIndex;
    this.z19_1 = nodeIndex;
    this.a1a_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.h2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.l3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.u14_1 == null) ? new JoinedKey(_this__u8e3s4.t14_1, _this__u8e3s4.u14_1) : _this__u8e3s4.t14_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.h2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    return tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.l(mid);
      var cmp = compareTo(midVal.r15_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.w13(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.v9(value);
      var tmp_0;
      if (tmp0_safe_receiver.k()) {
        _this__u8e3s4.xa(key);
        tmp_0 = Unit_getInstance();
      }
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.jy() ? true : !equals(tmp0_with.ez(), value)) {
      tmp0_with.fz(value);
      _Updater___get_composer__impl__9ty7av($this).dz(value, block);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.y15(group)) {
      result.a($reader.q16(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.g15(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.g15(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.yy();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.n15();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.c1a(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.d1a();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.x19();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.u1a_1.e19();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.g1a_1.b1b(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.g1a_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.g1a_1.b1b(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.g1a_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.k1a_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.o16_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (!$this.p1a_1.i1b(value, tmp1_anonymous) ? !tmp1_anonymous.d1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp1_anonymous.c1b() ? !forgetConditionalScopes : false) {
              $this.l1a_1.a(tmp1_anonymous);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.a(tmp1_anonymous);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.o16_1;
      var inductionVariable = 0;
      var last = values.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp0_anonymous instanceof RecomposeScopeImpl) {
            tmp0_anonymous.d1b(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp0_anonymous, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var tmp0_forEachScopeOf = $this.m1a_1;
            var index = find_2(tmp0_forEachScopeOf, tmp0_anonymous);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = tmp0_fastForEach.o16_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp0_fastForEach.n16_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var tmp1_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.d1b(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var tmp0_forEachScopeOf_0 = $this.m1a_1;
          var index_0 = find_2(tmp0_forEachScopeOf_0, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_0 = scopeSetAt(tmp0_forEachScopeOf_0, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = tmp0_fastForEach_0.o16_1;
            var inductionVariable_1 = 0;
            var last_1 = tmp0_fastForEach_0.n16_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var tmp1_anonymous_0 = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.l1a_1.k();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp2_removeValueIf = $this.k1a_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var valueOrder = tmp2_removeValueIf.e1b_1;
      var scopeSets = tmp2_removeValueIf.g1b_1;
      var values_3 = tmp2_removeValueIf.f1b_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = tmp2_removeValueIf.h1b_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.o16_1;
          var size = set.n16_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.l1a_1.m(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.m(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.n16_1 = destinationIndex_0;
          if (set.n16_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = tmp2_removeValueIf.h1b_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      tmp2_removeValueIf.h1b_1 = destinationIndex;
      $this.l1a_1.y9();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.k1a_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var valueOrder_0 = tmp0_removeValueIf.e1b_1;
        var scopeSets_0 = tmp0_removeValueIf.g1b_1;
        var values_5 = tmp0_removeValueIf.f1b_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = tmp0_removeValueIf.h1b_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.o16_1;
            var size_0 = set_0.n16_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = isObject(tmp_6) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.m(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.n16_1 = destinationIndex_2;
            if (set_0.n16_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = tmp0_removeValueIf.h1b_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        tmp0_removeValueIf.h1b_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.m1a_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = tmp0_removeValueIf.e1b_1;
    var scopeSets = tmp0_removeValueIf.g1b_1;
    var values = tmp0_removeValueIf.f1b_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.h1b_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.o16_1;
        var size = set.n16_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.k1a_1.j1b(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.n16_1 = destinationIndex_0;
        if (set.n16_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = tmp0_removeValueIf.h1b_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    tmp0_removeValueIf.h1b_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.l1a_1.k()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.l1a_1.c();
      while (iter.d()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.e().c1b()) {
          iter.x9();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.k1a_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.o16_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp1_anonymous.d1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.p1a_1.k1b(value, tmp1_anonymous);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.i1a_1);
    try {
      if (changes.k())
        return Unit_getInstance();
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().a17('Compose:applyChanges');
        try {
          $this.f1a_1.vv();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $this.j1a_1.y13();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.f1a_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.l(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.y9();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.m13();
          }
          $this.f1a_1.wv();
          break $l$block;
        }finally {
          Trace_getInstance().s17(token);
        }
      }
      manager.r1b();
      manager.s1b();
      if ($this.r1a_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().a17('Compose:unobserve');
          try {
            $this.r1a_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.k1a_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var valueOrder = tmp0_removeValueIf.e1b_1;
            var scopeSets = tmp0_removeValueIf.g1b_1;
            var values = tmp0_removeValueIf.f1b_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.h1b_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.o16_1;
                var size = set.n16_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.t1b()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.n16_1 = destinationIndex_0;
                if (set.n16_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = tmp0_removeValueIf.h1b_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            tmp0_removeValueIf.h1b_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_getInstance().s17(token_0);
          }
        }
      }
    }finally {
      if ($this.o1a_1.k()) {
        manager.u1b();
      }
    }
  }
  function abandonChanges($this) {
    $this.g1a_1.v1b(null);
    $this.n1a_1.y9();
    $this.o1a_1.y9();
    $this.i1a_1.y9();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.w1b() ? $this.u1a_1.m16(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.s1a_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.j1a_1.x1b($this.t1a_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.q1a_1.y1b(scope, null);
      } else {
        addValue($this.q1a_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.e1a_1.z1b($this);
    return $this.w1b() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.q1a_1;
    $this.q1a_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.l1b_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n1b_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.o1b_1 = ArrayList_init_$Create$();
    this.p1b_1 = null;
    this.q1b_1 = null;
  }
  protoOf(RememberEventDispatcher).o18 = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.n1b_1.q1(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.n1b_1.m3(tmp0_let);
      tmp = this.l1b_1.v9(instance);
    } else {
      tmp = this.m1b_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).yx = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.m1b_1.q1(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.m1b_1.m3(tmp0_let);
      tmp = this.l1b_1.v9(instance);
    } else {
      tmp = this.n1b_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).xx = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.q1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var tmp0_also = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.q1b_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(instance);
  };
  protoOf(RememberEventDispatcher).r1b = function () {
    var deactivating = this.p1b_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.k())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().a17('Compose:deactivations');
        try {
          var inductionVariable = deactivating.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.l(i);
              instance.zw();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          break $l$block;
        }finally {
          Trace_getInstance().s17(token);
        }
      }
      deactivating.y9();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n1b_1.k()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().a17('Compose:onForgotten');
        try {
          var inductionVariable_0 = this.n1b_1.f() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.n1b_1.l(i_0);
              if (!this.l1b_1.m(instance_0)) {
                instance_0.a1c();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          break $l$block_0;
        }finally {
          Trace_getInstance().s17(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m1b_1.k()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_1 = Trace_getInstance().a17('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.m1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.l1b_1.v9(item);
              item.b1c();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_getInstance();
          }
          break $l$block_1;
        }finally {
          Trace_getInstance().s17(token_1);
        }
      }
    }
    var releasing = this.q1b_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.k())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_2 = Trace_getInstance().a17('Compose:releases');
        try {
          var inductionVariable_2 = releasing.f() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.l(i_1);
              instance_1.ax();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_getInstance();
          }
          break $l$block_2;
        }finally {
          Trace_getInstance().s17(token_2);
        }
      }
      releasing.y9();
    }
  };
  protoOf(RememberEventDispatcher).s1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1b_1.k()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().a17('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.o1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.o1b_1.y9();
          break $l$block;
        }finally {
          Trace_getInstance().s17(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).u1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l1b_1.k()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().a17('Compose:abandons');
        try {
          var iterator = this.l1b_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.x9();
            instance.c1c();
          }
          break $l$block;
        }finally {
          Trace_getInstance().s17(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.e1a_1 = parent;
    this.f1a_1 = applier;
    this.g1a_1 = new AtomicReference(null);
    this.h1a_1 = createSynchronizedObject();
    this.i1a_1 = HashSet_init_$Create$();
    this.j1a_1 = new SlotTable();
    this.k1a_1 = new IdentityScopeMap();
    this.l1a_1 = HashSet_init_$Create$();
    this.m1a_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n1a_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o1a_1 = ArrayList_init_$Create$();
    this.p1a_1 = new IdentityScopeMap();
    this.q1a_1 = new IdentityArrayMap();
    this.r1a_1 = false;
    this.s1a_1 = null;
    this.t1a_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.f1a_1, this.e1a_1, this.j1a_1, this.i1a_1, this.n1a_1, this.o1a_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.e1a_1.d1c(tmp0_also);
    tmp_1.u1a_1 = tmp0_also;
    this.v1a_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.e1a_1;
    tmp_2.w1a_1 = tmp_3 instanceof Recomposer;
    this.x1a_1 = false;
    this.y1a_1 = ComposableSingletons$CompositionKt_getInstance().e1c_1;
  }
  protoOf(CompositionImpl).w1b = function () {
    return this.u1a_1.k11_1;
  };
  protoOf(CompositionImpl).g1c = function () {
    return this.x1a_1;
  };
  protoOf(CompositionImpl).h1c = function (values) {
    $l$loop: while (true) {
      var old = this.g1a_1.bp();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.g1a_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.g1a_1.i1c(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.h1a_1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).j1c = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.k1a_1.j1b(value) ? true : this.m1a_1.j1b(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).t19 = function (block) {
    return this.u1a_1.t19(block);
  };
  protoOf(CompositionImpl).c19 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.u1a_1.g19();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.v19(true);
        var alreadyRead = tmp0_safe_receiver.k1c(value);
        var tmp;
        if (!alreadyRead) {
          this.k1a_1.k1b(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.m1a_1.l1c(value);
            var indexedObject = value.m1c().n1c();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.m1a_1.k1b(dependency, value);
            }
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).o1c = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp0_forEachScopeOf = this.m1a_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.o16_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.n16_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp1_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, tmp1_anonymous);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).p1c = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var tmp0_also = this.u1a_1.u19(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = tmp0_also;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.q1a_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.i1a_1.k();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).q1c = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.h3_1.yz_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.u1a_1.r19(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i1a_1.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r1c = function (state) {
    var manager = new RememberEventDispatcher(this.i1a_1);
    var slotTable = state.k16_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.m13();
    }
    manager.r1b();
  };
  protoOf(CompositionImpl).s1c = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.n1a_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.i1a_1.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).t1c = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.o1a_1.k()) {
          applyChangesInLocked(this, this.o1a_1);
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.i1a_1.k();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).i19 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.u1a_1.i19();
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.i1a_1.k()) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.i1a_1.k();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u1c = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.h1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var indexedObject = this.j1a_1.j12_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v1c();
      }
    }
  };
  protoOf(CompositionImpl).p16 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.s1a_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.t1a_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.s1a_1 = null;
        this.t1a_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).a19 = function (scope, instance) {
    if (scope.w1c()) {
      scope.p19(true);
    }
    var anchor = scope.by_1;
    if (anchor == null ? true : !anchor.t1b())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.j1a_1.x1c(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.h1a_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.s1a_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.y1c())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).b19 = function (scope) {
    this.r1a_1 = true;
  };
  protoOf(CompositionImpl).z1c = function (instance, scope) {
    this.k1a_1.i1b(instance, scope);
  };
  protoOf(CompositionImpl).a1d = function (state) {
    if (!this.k1a_1.j1b(state)) {
      this.m1a_1.l1c(state);
    }
  };
  protoOf(CompositionImpl).b1d = function (set__$_ezb9bk) {
    this.y1a_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).c1d = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.x1a_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.b1d(content);
    this.e1a_1.d1d(this, this.y1a_1);
  };
  protoOf(CompositionImpl).e1d = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.h1a_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.u1a_1.w19(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.q1a_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.i1a_1.k();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.i1a_1)).u1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
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
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.ky()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.yy();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.e1c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.f1c_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.g1d(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.f1d(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.q17(value);
    } else {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.q17(value);
      _this__u8e3s4.y1b(key, tmp0_also);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.q12_1 = 0;
  }
  protoOf(CompositionContext).x12 = function (table) {
  };
  protoOf(CompositionContext).d1c = function (composer) {
  };
  protoOf(CompositionContext).s12 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).r12 = function () {
  };
  protoOf(CompositionContext).z12 = function () {
  };
  protoOf(CompositionContext).j16 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.h1d_1 = new LazyValueHolder(defaultFactory);
    this.i1d_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.m1d_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).n1d = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).j1d = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.ty(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.mz(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.nz();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.uy();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.r1d(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.v1d_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).j1d = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.v1d_1);
      $composer_1.fz(value_0);
      tmp = value_0;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.oy();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.ut(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.h1d_1.w1();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.d2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.h2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.x13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.ny(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.rz_1 ? true : !contains_0(parentScope, provided.pz_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.pz_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.pz_1.j1d(provided.qz_1, $composer_0, 0);
        tmp0_apply.l3(tmp0_set, tmp1_set);
      }
      $composer_0.oy();
    }
    var tmp0 = tmp0_apply.db();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return tmp0;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().bp();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      var tmp0_also = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().a1e(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.b1e_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.ny(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.oz();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ny(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.gz(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.oy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.c1e_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).b1c = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).a1c = function () {
    cancel(this.c1e_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).c1c = function () {
    cancel(this.c1e_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.n4(Key_getInstance()) == null)) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      tmp0_apply.yn(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(tmp0_apply);
    } else {
      var applyContext = composer.oz();
      tmp = CoroutineScope(applyContext.u4(Job(applyContext.n4(Key_getInstance()))).u4(coroutineContext));
    }
    return tmp;
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.d1e_1 = task;
    this.e1e_1 = CoroutineScope(parentCoroutineContext);
    this.f1e_1 = null;
  }
  protoOf(LaunchedEffectImpl).b1c = function () {
    var tmp0_safe_receiver = this.f1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel_0(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.f1e_1 = launch(this.e1e_1, VOID, VOID, this.d1e_1);
  };
  protoOf(LaunchedEffectImpl).a1c = function () {
    var tmp0_safe_receiver = this.f1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gk(new LeftCompositionCancellationException());
    }
    this.f1e_1 = null;
  };
  protoOf(LaunchedEffectImpl).c1c = function () {
    var tmp0_safe_receiver = this.f1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gk(new LeftCompositionCancellationException());
    }
    this.f1e_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.ny(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ny(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.gz(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.oy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  function DisposableEffectImpl(effect) {
    this.g1e_1 = effect;
    this.h1e_1 = null;
  }
  protoOf(DisposableEffectImpl).b1c = function () {
    this.h1e_1 = this.g1e_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).a1c = function () {
    var tmp0_safe_receiver = this.h1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ql();
    }
    this.h1e_1 = null;
  };
  protoOf(DisposableEffectImpl).c1c = function () {
  };
  function DisposableEffect$composable_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.ny(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.ny(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = tmp0_remember$composable.length;
    while (inductionVariable < last) {
      var key = tmp0_remember$composable[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.gz(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = invalid;
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.oy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.ny(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.ny(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.gz(key1) | $composer_1.gz(key2));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.ez();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.oy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.a5_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.i1e_1 = left;
    this.j1e_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.i1e_1), 31) + hashCodeOf(this, this.j1e_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.i1e_1) + ', right=' + toString_0(this.j1e_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.i1e_1, tmp0_other_with_cast.i1e_1))
      return false;
    if (!equals(this.j1e_1, tmp0_other_with_cast.j1e_1))
      return false;
    return true;
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.n4(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.k1e_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.k1e_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.k1e_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.k1e_1 === tmp0_other_with_cast.k1e_1))
      return false;
    return true;
  };
  function produceState$composable(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.ny(1150638565);
    sourceInformation($composer_0, 'C(produceState$composable)80@2911L41,81@2957L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1150638565, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:76)');
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
    if (false ? true : tmp0_let === Companion_getInstance_1().hy_1) {
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_1.fz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.oy();
    var result = tmp0;
    LaunchedEffect$composable(Unit_getInstance(), produceState$composable$slambda_0(producer, result, null), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.oy();
    return result;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$0(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1e_1 = _this__u8e3s4;
    this.v1e_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.sh_1 = 1;
            continue $sm;
          case 1:
            this.th_1 = 4;
            this.sh_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
            cancellable.om();
            suspendResult = returnIfSuspended(cancellable.yk(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1e_1 = throwKotlinNothingValueException();
            this.th_1 = 5;
            this.sh_1 = 3;
            continue $sm;
          case 3:
            this.v1e_1();
            return Unit_getInstance();
          case 4:
            this.th_1 = 5;
            var t = this.vh_1;
            this.v1e_1();
            throw t;
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
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.x1e_1 = coroutineContext;
    this.y1e_1 = state;
  }
  protoOf(ProduceStateScopeImpl).aj = function () {
    return this.x1e_1;
  };
  protoOf(ProduceStateScopeImpl).ut = function (_set____db54di) {
    this.y1e_1.ut(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).w1 = function () {
    return this.y1e_1.w1();
  };
  protoOf(ProduceStateScopeImpl).l1e = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$0(this, onDispose, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  function produceState$composable$slambda($producer, $result, resultContinuation) {
    this.h1f_1 = $producer;
    this.i1f_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda).k1f = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1f($this$LaunchedEffect, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(produceState$composable$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = this.h1f_1(new ProduceStateScopeImpl(this.i1f_1, this.j1f_1.aj()), this);
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
  protoOf(produceState$composable$slambda).l1f = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda(this.h1f_1, this.i1f_1, completion);
    i.j1f_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1f($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.zx_1 = $this.zx_1 | 32;
    } else {
      $this.zx_1 = $this.zx_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.zx_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.zx_1 = $this.zx_1 | 16;
    } else {
      $this.zx_1 = $this.zx_1 & -17;
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).v16 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.k()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.l(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.m1f(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.n1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).w16 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.k()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.x1c(item)) {
              var tmp_1 = slots.o1f(slots.i16(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.dy_1 === $token ? equals($tmp0_safe_receiver, this$0.ey_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var keys = $tmp0_safe_receiver.q1f_1;
        var values = $tmp0_safe_receiver.r1f_1;
        var size = $tmp0_safe_receiver.p1f_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = values[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.z1c(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.a1d(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.fy_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.s1f(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.j17_1 === 0) {
                    this$0.fy_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        $tmp0_safe_receiver.p1f_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.p1f_1 === 0) {
          this$0.ey_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(owner) {
    Companion_getInstance_3();
    this.zx_1 = 0;
    this.ay_1 = owner;
    this.by_1 = null;
    this.cy_1 = null;
    this.dy_1 = 0;
    this.ey_1 = null;
    this.fy_1 = null;
  }
  protoOf(RecomposeScopeImpl).t1b = function () {
    var tmp;
    if (!(this.ay_1 == null)) {
      var tmp0_safe_receiver = this.by_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1b();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).y1c = function () {
    return !(this.cy_1 == null);
  };
  protoOf(RecomposeScopeImpl).v19 = function (value) {
    if (value) {
      this.zx_1 = this.zx_1 | 1;
    } else {
      this.zx_1 = this.zx_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).e15 = function () {
    return !((this.zx_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).h19 = function (value) {
    if (value) {
      this.zx_1 = this.zx_1 | 2;
    } else {
      this.zx_1 = this.zx_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).w1c = function () {
    return !((this.zx_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).p19 = function (value) {
    if (value) {
      this.zx_1 = this.zx_1 | 4;
    } else {
      this.zx_1 = this.zx_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).ly = function () {
    return !((this.zx_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).d16 = function (value) {
    if (value) {
      this.zx_1 = this.zx_1 | 8;
    } else {
      this.zx_1 = this.zx_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).j19 = function () {
    return !((this.zx_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).u15 = function (composer) {
    var tmp0_safe_receiver = this.cy_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    }
  };
  protoOf(RecomposeScopeImpl).d1b = function (value) {
    var tmp0_safe_receiver = this.ay_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a19(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).eo = function () {
    var tmp0_safe_receiver = this.ay_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b19(this);
    }
    this.ay_1 = null;
    this.ey_1 = null;
    this.fy_1 = null;
  };
  protoOf(RecomposeScopeImpl).n1f = function (owner) {
    this.ay_1 = owner;
  };
  protoOf(RecomposeScopeImpl).v1c = function () {
    var tmp0_safe_receiver = this.ay_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.a19(this, null);
  };
  protoOf(RecomposeScopeImpl).r1d = function (block) {
    this.cy_1 = block;
  };
  protoOf(RecomposeScopeImpl).q19 = function () {
    return !((this.zx_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).e16 = function (token) {
    this.dy_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).n19 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).k1c = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.ey_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.ey_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.t1f(instance, this.dy_1);
    if (token === this.dy_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.fy_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.fy_1 = tmp1_also;
        tmp_0 = tmp1_also;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.y1b(instance, instance.m1c().u1f());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).c1b = function () {
    return !(this.fy_1 == null);
  };
  protoOf(RecomposeScopeImpl).b1a = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.fy_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.r16()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.x1d();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.v1f(element.m1c().u1f(), trackedDependencies.f1d(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).t15 = function () {
    var tmp0_safe_receiver = this.ay_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.ey_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.q1f_1;
          var values = tmp0_safe_receiver_0.r1f_1;
          var size = tmp0_safe_receiver_0.p1f_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var tmp0_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.c19(tmp0_anonymous);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(RecomposeScopeImpl).o19 = function (token) {
    var tmp0_safe_receiver = this.ey_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.q19()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.q1f_1;
          var values = tmp0_safe_receiver.r1f_1;
          var size = tmp0_safe_receiver.p1f_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              isObject(tmp_2) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.w1f_1.w1();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.w1f_1.vt(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.w1f_1.w1();
      var new_0 = old.v9(info);
      if (old === new_0 ? true : $this.w1f_1.vt(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.y9();
    toInsert.y9();
    toApply.y9();
    toLateApply.y9();
    toComplete.y9();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.y9();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.i1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.i1g_1.y9();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().a17('Recomposer:animation');
          try {
            this$0.a1g_1.ww(frameTime);
            Companion_getInstance_11().x1g();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().s17(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().a17('Recomposer:recompose');
        try {
          recordComposerModifications(this$0);
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.b1g_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.g1g_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.g1g_1.y9();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.k();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.k();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.l(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.q17(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.y9();
            }
            if (modifiedValues.r16()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.b1g_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.e1g_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.f() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.l(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.r2(item_1) ? item_1.j1c(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.k()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.k();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.k();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.z1f_1;
            tmp0_this.z1f_1 = tmp1.gh();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.f() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.l(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.a(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = $toApply.f() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = $toApply.l(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.s1c();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.y9();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.k();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.c();
              while (tmp0_iterator.d()) {
                var element = tmp0_iterator.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.t1c();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.y9();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.k();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.c();
              while (tmp0_iterator_0.d()) {
                var element_0 = tmp0_iterator_0.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.i19();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.y9();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.b1g_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_11().y1g();
          this$0.m1g_1 = null;
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().s17(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.b1g_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.s1g_1.w1().b5(State_Idle_getInstance()) >= 0) {
        this$0.f1g_1.z1g(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.t3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.i1h_1 = $block;
    this.j1h_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).k1f = function ($this$coroutineScope, $completion) {
    var tmp = this.l1f($this$coroutineScope, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = this.i1h_1(this.k1h_1, this.j1h_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).l1f = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.i1h_1, this.j1h_1, completion);
    i.k1h_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.k1f($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.r1g_1 ? $this.a1g_1.vw() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.s1g_1.w1().b5(State_ShuttingDown_getInstance()) <= 0) {
      $this.e1g_1.y9();
      $this.f1g_1 = new IdentityArraySet();
      $this.g1g_1.y9();
      $this.h1g_1.y9();
      $this.i1g_1.y9();
      $this.l1g_1 = null;
      var tmp0_safe_receiver = $this.n1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.ll();
      $this.n1g_1 = null;
      $this.q1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.q1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.c1g_1 == null) {
        $this.f1g_1 = new IdentityArraySet();
        $this.g1g_1.y9();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.g1g_1.k()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.f1g_1.r16();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.h1g_1.k();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.i1g_1.k();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.o1g_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.s1g_1.ut(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var tmp3_also = $this.n1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.n1g_1 = null;
      tmp_5 = tmp3_also;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.p1g_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.t1g_1.ur().c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.bj()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.l1h_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.m1h_1 = recoverable;
    this.n1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.f1g_1.k())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.f1g_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.f1g_1 = new IdentityArraySet();
    var changes = tmp0_also;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.e1g_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.l(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.h1c(changes);
            if ($this.s1g_1.w1().b5(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.f1g_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.b1g_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.f1g_1.z1g(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.d1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.s1g_1.w1().b5(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.c1g_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.c1g_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_4().x1f_1.bp()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.b1g_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.h1g_1.y9();
      $this.g1g_1.y9();
      $this.f1g_1 = new IdentityArraySet();
      $this.i1g_1.y9();
      $this.j1g_1.y9();
      $this.k1g_1.y9();
      $this.q1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.l1g_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var tmp0_also = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.l1g_1 = tmp0_also;
          tmp_0 = tmp0_also;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.e1g_1.v9(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.f1g_1.r16()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.g1g_1.k();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.v3();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.a1g_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.i1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.yz_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.k()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.w1b() ? true : composition.g1c()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.m1g_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_11().x1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y1h();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.r16()) === true) {
              composition.t19(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.p1c();
            break $l$block;
          }finally {
            snapshot.z1h(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.l(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.yz_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.h2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.l3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.a(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.u1().c();
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.t1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.w1();
      runtimeCheck(!composition.w1b());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_11().x1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1h();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.b1g_1;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.f());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.l(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_plusAssign = to(item_0, removeLastMultiValue($this.j1g_1, item_0.wz_1));
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.q1c(pairs);
              break $l$block;
            }finally {
              snapshot.z1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.i2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.j1g_1.k()) {
      var references = flatten($this.j1g_1.bb());
      $this.j1g_1.y9();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.f());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var tmp0_plusAssign = to(item, $this.k1g_1.h2(item));
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.k1g_1.y9();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.l(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.j3();
        var state = item_0.k3();
        if (!(state == null)) {
          reference.yz_1.r1c(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.p1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.ql();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.g1g_1.k()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.w1f_1 = MutableStateFlow(persistentSetOf());
    this.x1f_1 = new AtomicReference(false);
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.y9();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.i1g_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.yz_1, $composition)) {
        toInsert.a(value);
        iterator.x9();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.b1g_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.s1g_1.w1().b5(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.d1g_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.t3(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.b1g_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.d1g_1 = tmp_0;
      this$0.s1g_1.ut(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.b1g_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.c1g_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.s1g_1.ut(State_ShuttingDown_getInstance());
        if (!this$0.p1g_1) {
          runnerJob.gk(cancellation);
        } else if (!(this$0.n1g_1 == null)) {
          continuationToResume = this$0.n1g_1;
        }
        this$0.n1g_1 = null;
        tmp = runnerJob.bk(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.d1g_1 = cancellation;
        this$0.s1g_1.ut(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.t3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.y1i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g1j = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.h1j($this$recompositionRunner, parentFrameClock, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).d7 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.g1j(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 6;
            var tmp_0 = this;
            tmp_0.b1j_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.c1j_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.d1j_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.e1j_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.f1j_1 = LinkedHashSet_init_$Create$();
            this.sh_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.y1i_1)) {
              this.sh_1 = 5;
              continue $sm;
            }

            this.sh_1 = 2;
            suspendResult = awaitWorkAvailable(this.y1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.y1i_1)) {
              this.sh_1 = 1;
              continue $sm;
            } else {
              this.sh_1 = 3;
              continue $sm;
            }

          case 3:
            this.sh_1 = 4;
            suspendResult = this.a1j_1.xw(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.y1i_1, this.b1j_1, this.c1j_1, this.d1j_1, this.e1j_1, this.f1j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.y1i_1);
            this.sh_1 = 1;
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
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h1j = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.y1i_1, completion);
    i.z1i_1 = $this$recompositionRunner;
    i.a1j_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.g1j($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.q1j_1 = this$0;
    this.r1j_1 = $block;
    this.s1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).k1f = function ($this$withContext, $completion) {
    var tmp = this.l1f($this$withContext, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(Recomposer$recompositionRunner$slambda).ni = function (p1, $completion) {
    return this.k1f((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.u1j_1 = get_job(this.t1j_1.aj());
            registerRunnerJob(this.q1j_1, this.u1j_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_11();
            tmp_0.v1j_1 = tmp_1.x1j(Recomposer$recompositionRunner$slambda$lambda(this.q1j_1));
            addRunning(Companion_getInstance_4(), this.q1j_1.v1g_1);
            this.sh_1 = 1;
            continue $sm;
          case 1:
            this.th_1 = 4;
            this.q1j_1.b1g_1;
            var tmp1_fastForEach = toMutableList(this.q1j_1.e1g_1);
            var inductionVariable = 0;
            var last = tmp1_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp1_fastForEach.l(index);
                item.u1c();
              }
               while (inductionVariable <= last);
            this.sh_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.r1j_1, this.s1j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1j_1 = suspendResult;
            this.th_1 = 5;
            this.sh_1 = 3;
            continue $sm;
          case 3:
            this.v1j_1.ql();
            this.q1j_1.b1g_1;
            if (this.q1j_1.c1g_1 === this.u1j_1) {
              this.q1j_1.c1g_1 = null;
            }

            deriveStateLocked(this.q1j_1);
            removeRunning(Companion_getInstance_4(), this.q1j_1.v1g_1);
            return Unit_getInstance();
          case 4:
            this.th_1 = 5;
            var t = this.vh_1;
            this.v1j_1.ql();
            this.q1j_1.b1g_1;
            if (this.q1j_1.c1g_1 === this.u1j_1) {
              this.q1j_1.c1g_1 = null;
            }

            deriveStateLocked(this.q1j_1);
            removeRunning(Companion_getInstance_4(), this.q1j_1.v1g_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).l1f = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.q1j_1, this.r1j_1, this.s1j_1, completion);
    i.t1j_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.k1f($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var values = $modifiedValues.o16_1;
      var inductionVariable = 0;
      var last = $modifiedValues.n16_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var tmp0_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
          $composition.o1c(tmp0_anonymous);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.c19(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.o1c(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.q17(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1h_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.w1h_1)) {
              this.sh_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.om();
              this.w1h_1.b1g_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.w1h_1)) {
                tmp_0 = cancellable;
              } else {
                this.w1h_1.n1g_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                Companion_getInstance();
                tmp0_safe_receiver.t3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              }
              suspendResult = returnIfSuspended(cancellable.yk(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sh_1 = 2;
              continue $sm;
            }

          case 1:
            this.sh_1 = 2;
            continue $sm;
          case 2:
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_4();
    CompositionContext.call(this);
    this.z1f_1 = new Long(0, 0);
    var tmp = this;
    tmp.a1g_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.b1g_1 = createSynchronizedObject();
    this.c1g_1 = null;
    this.d1g_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e1g_1 = ArrayList_init_$Create$();
    this.f1g_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.g1g_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.h1g_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.i1g_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.j1g_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.k1g_1 = LinkedHashMap_init_$Create$();
    this.l1g_1 = null;
    this.m1g_1 = null;
    this.n1g_1 = null;
    this.o1g_1 = 0;
    this.p1g_1 = false;
    this.q1g_1 = null;
    this.r1g_1 = false;
    this.s1g_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.n4(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.bk(Recomposer$effectJob$lambda(this));
    tmp_6.t1g_1 = tmp0_apply;
    this.u1g_1 = effectCoroutineContext.u4(this.a1g_1).u4(this.t1g_1);
    this.v1g_1 = new RecomposerInfoImpl(this);
    this.w1g_1 = 8;
  }
  protoOf(Recomposer).f19 = function () {
    return this.u1g_1;
  };
  protoOf(Recomposer).y1j = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).y12 = function () {
    return 1000;
  };
  protoOf(Recomposer).w12 = function () {
    return false;
  };
  protoOf(Recomposer).x12 = function (table) {
  };
  protoOf(Recomposer).z1b = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.g1g_1.m(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.g1g_1.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.t3(tmp$ret$3);
    }
  };
  protoOf(Recomposer).h16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.i1g_1.a(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.t3(tmp$ret$3);
    }
  };
  protoOf(Recomposer).j18 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.j1g_1, reference.wz_1, reference);
  };
  protoOf(Recomposer).x16 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1g_1.l3(reference, data);
  };
  protoOf(Recomposer).i18 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.m1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var tmp0_also = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.m1g_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.a(composition);
  };
  protoOf(Recomposer).j16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.k1g_1.xa(reference);
  };
  protoOf(Recomposer).d1d = function (composition, content) {
    var composerWasComposing = composition.w1b();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_11().x1h(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1h();
            try {
              composition.e1d(content);
              break $l$block;
            }finally {
              snapshot.z1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_11().y1g();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.s1g_1.w1().b5(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.e1g_1.m(composition)) {
        this.e1g_1.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.s1c();
      composition.t1c();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_11().y1g();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.k()) {
        _this__u8e3s4.xa(key);
      }
      tmp = tmp0_also;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.h2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.l3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.g15(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.sx_1);
    if (fromWriter.fx_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.kx_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.cx_1;
    var currentGroup = toWriter.sx_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.cx_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    var slots = toWriter.dx_1;
    var currentSlot = toWriter.ix_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.dx_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.tx_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.mx_1;
    var slotsGapLen = toWriter.lx_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.kx_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.mx_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.ex_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.ex_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.ex_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.l(anchorIndex);
          sourceAnchor.k17_1 = sourceAnchor.k17_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.ex_1, toWriter.sx_1, toWriter.f());
      toWriter.ex_1.fb(insertLocation, anchors);
      sourceAnchors.na(startAnchors, endAnchors).y9();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.w13(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.a14();
        fromWriter.v18(parentGroup - fromWriter.sx_1 | 0);
        fromWriter.a14();
      }
      fromWriter.v18(fromIndex - fromWriter.sx_1 | 0);
      var anchorsRemoved = fromWriter.gy();
      if (needsStartGroups) {
        fromWriter.yy();
        fromWriter.n15();
        fromWriter.yy();
        fromWriter.n15();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.ox_1 = toWriter.ox_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.sx_1 = currentGroup + groupsToMove | 0;
      toWriter.ix_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.nx_1 > 0;
    $this.rx_1.v12($this.ox_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.sx_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().hy_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().hy_1) : false;
      initGroup($this.cx_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.tx_1, $this.ix_1);
      $this.jx_1 = $this.ix_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.dx_1;
        var currentSlot = $this.ix_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.ix_1 = currentSlot;
      }
      $this.ox_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.tx_1 = current;
      $this.sx_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.tx_1;
      $this.px_1.v12(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.sx_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().hy_1)) {
        if (isNode) {
          $this.z1j(aux);
        } else {
          $this.q18(aux);
        }
      }
      $this.ix_1 = slotIndex($this.cx_1, $this, currentGroupAddress);
      $this.jx_1 = dataIndex_0($this.cx_1, $this, groupIndexToAddress($this, $this.sx_1 + 1 | 0));
      $this.ox_1 = nodeCount($this.cx_1, currentGroupAddress);
      $this.tx_1 = currentGroup;
      $this.sx_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.cx_1, currentGroupAddress) | 0;
    }
    tmp.hx_1 = tmp_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.cx_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.cx_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.vx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.r16()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.b1k(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.vx_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.vx_1 = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.c1k(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.cx_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.cx_1, groupAddress, containsAnyMarks);
      var parent = $this.w13(group);
      if (parent >= 0) {
        set.c1k(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.g15(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.cx_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.g15(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.qx_1.v12((_get_capacity__a9k9f3($this) - $this.gx_1 | 0) - $this.hx_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.gx_1 | 0) - $this.qx_1.d15() | 0;
    $this.hx_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.fx_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.cx_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.cx_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.gx_1;
    var gapStart = $this.fx_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.ex_1.k()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.cx_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.cx_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.cx_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.fx_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.lx_1;
    var gapStart = $this.kx_1;
    var slotsGapOwner = $this.mx_1;
    if (!(gapStart === index)) {
      var slots = $this.dx_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
      }
    }
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.f();
    var newSlotsGapOwner = Math.min(tmp3_min, tmp4_min);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.dx_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.fx_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.cx_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.cx_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.gx_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.cx_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.cx_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.fx_1)
            updateAddress_0 = updateAddress_0 + $this.gx_1 | 0;
        }
      }
      $this.mx_1 = newSlotsGapOwner;
    }
    $this.kx_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.kx_1;
    var slotsGapEnd = slotsGapStart + $this.lx_1 | 0;
    fill_0($this.dx_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.sx_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.fx_1;
      var gapLen = $this.gx_1;
      var oldCapacity = $this.cx_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.cx_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, tmp4_copyInto);
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        $this.cx_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.hx_1;
      if (currentEnd >= gapStart)
        $this.hx_1 = currentEnd + size | 0;
      $this.fx_1 = gapStart + size | 0;
      $this.gx_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.mx_1 < gapStart ? 0 : $this.kx_1, $this.lx_1, $this.dx_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.cx_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.mx_1;
      if (slotsGapOwner >= gapStart) {
        $this.mx_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.ix_1, group);
      var gapStart = $this.kx_1;
      var gapLen = $this.lx_1;
      if (gapLen < size) {
        var slots = $this.dx_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.dx_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.jx_1;
      if (currentDataEnd >= gapStart)
        $this.jx_1 = currentDataEnd + size | 0;
      $this.kx_1 = gapStart + size | 0;
      $this.lx_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.ex_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.k())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.fx_1 = start;
      var previousGapLen = $this.gx_1;
      var newGapLen = previousGapLen + len | 0;
      $this.gx_1 = newGapLen;
      var slotsGapOwner = $this.mx_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp_0.mx_1 = Math.max(start, tmp0_max);
      }
      if ($this.hx_1 >= $this.fx_1) {
        $this.hx_1 = $this.hx_1 - len | 0;
      }
      if (containsGroupMark($this, $this.tx_1)) {
        updateContainsMark($this, $this.tx_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.lx_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.kx_1 = start;
      $this.lx_1 = gapLen + len | 0;
      fill_0($this.dx_1, null, start, start + len | 0);
      var currentDataEnd = $this.jx_1;
      if (currentDataEnd >= start)
        $this.jx_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.cx_1.length ? isNode($this.cx_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.dx_1[dataIndexToDataAddress($this, nodeIndex($this.cx_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.gx_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.ex_1, previousGapStart, size);
      $l$loop_0: while (index < $this.ex_1.f()) {
        var anchor = $this.ex_1.l(index);
        var location = anchor.k17_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.k17_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.ex_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.ex_1.f()) {
        var anchor_0 = $this.ex_1.l(index_0);
        var location_0 = anchor_0.k17_1;
        if (location_0 >= 0) {
          anchor_0.k17_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.gx_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.ex_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var index = tmp0_let >= $this.ex_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.ex_1.l(index);
      var location = $this.i16(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.k17_1 = IntCompanionObject_getInstance().MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.ex_1.na(removeAnchorStart, removeAnchorEnd).y9();
    }
    return tmp1_also;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.ex_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.ex_1.f()) {
        var anchor = $this.ex_1.l(index);
        var location = $this.i16(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.ex_1.m3(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.l(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.i16(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.fx_1) {
          item.k17_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.k17_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.ex_1, newAnchorIndex, groupsSize);
        $this.ex_1.la(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.cx_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.fx_1 ? index : index + $this.gx_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.kx_1 ? dataIndex : dataIndex + $this.lx_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.cx_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.dx_1.length - $this.lx_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.lx_1, $this.dx_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.dx_1.length - $this.lx_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.lx_1, $this.dx_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.kx_1, $this.lx_1, $this.dx_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.f() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.f() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.e1k_1 = $end;
    this.f1k_1 = this$0;
    this.d1k_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d = function () {
    return this.d1k_1 < this.e1k_1;
  };
  protoOf(SlotWriter$groupSlots$1).e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.f1k_1.dx_1;
      var tmp1 = this.d1k_1;
      this.d1k_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.f1k_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_5();
    this.bx_1 = table;
    this.cx_1 = this.bx_1.h12_1;
    this.dx_1 = this.bx_1.j12_1;
    this.ex_1 = this.bx_1.o12_1;
    this.fx_1 = this.bx_1.i12_1;
    this.gx_1 = (this.cx_1.length / 5 | 0) - this.bx_1.i12_1 | 0;
    this.hx_1 = this.bx_1.i12_1;
    this.ix_1 = 0;
    this.jx_1 = 0;
    this.kx_1 = this.bx_1.k12_1;
    this.lx_1 = this.dx_1.length - this.bx_1.k12_1 | 0;
    this.mx_1 = this.bx_1.i12_1;
    this.nx_1 = 0;
    this.ox_1 = 0;
    this.px_1 = new IntStack();
    this.qx_1 = new IntStack();
    this.rx_1 = new IntStack();
    this.sx_1 = 0;
    this.tx_1 = -1;
    this.ux_1 = false;
    this.vx_1 = null;
  }
  protoOf(SlotWriter).w17 = function () {
    return this.sx_1 < this.hx_1 ? isNode(this.cx_1, groupIndexToAddress(this, this.sx_1)) : false;
  };
  protoOf(SlotWriter).y15 = function (index) {
    return isNode(this.cx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).z15 = function (index) {
    return nodeCount(this.cx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v13 = function (index) {
    return key(this.cx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).u13 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.cx_1, address) ? this.dx_1[objectKeyIndex(this.cx_1, address)] : null;
  };
  protoOf(SlotWriter).g15 = function (index) {
    return groupSize(this.cx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).t13 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.cx_1, address) ? this.dx_1[auxIndex(this.cx_1, this, address)] : Companion_getInstance_1().hy_1;
  };
  protoOf(SlotWriter).u17 = function (index) {
    return (index > this.tx_1 ? index < this.hx_1 : false) ? true : this.tx_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).x17 = function (index) {
    return this.v17(index, this.sx_1);
  };
  protoOf(SlotWriter).v17 = function (index, group) {
    var tmp;
    if (group === this.tx_1) {
      tmp = this.hx_1;
    } else if (group > this.px_1.z16(0)) {
      tmp = group + this.g15(group) | 0;
    } else {
      var openIndex = this.px_1.g1k(group);
      tmp = openIndex < 0 ? group + this.g15(group) | 0 : (_get_capacity__a9k9f3(this) - this.gx_1 | 0) - this.qx_1.x15(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).q16 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.cx_1, address) ? this.dx_1[dataIndexToDataAddress(this, nodeIndex(this.cx_1, this, address))] : null;
  };
  protoOf(SlotWriter).n18 = function (anchor) {
    return this.q16(anchor.h1k(this));
  };
  protoOf(SlotWriter).w13 = function (index) {
    return parent(this.cx_1, this, index);
  };
  protoOf(SlotWriter).m13 = function () {
    this.ux_1 = true;
    if (this.px_1.k()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.dx_1.length - this.lx_1 | 0, this.fx_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.bx_1.i1k(this, this.cx_1, this.fx_1, this.dx_1, this.kx_1, this.ex_1);
  };
  protoOf(SlotWriter).d1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.sx_1 = 0;
    this.hx_1 = _get_capacity__a9k9f3(this) - this.gx_1 | 0;
    this.ix_1 = 0;
    this.jx_1 = 0;
    this.ox_1 = 0;
  };
  protoOf(SlotWriter).t16 = function (value) {
    var result = this.j1k();
    this.k1k(value);
    return result;
  };
  protoOf(SlotWriter).q18 = function (value) {
    var address = groupIndexToAddress(this, this.sx_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.cx_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.dx_1[dataIndexToDataAddress(this, auxIndex(this.cx_1, this, address))] = value;
  };
  protoOf(SlotWriter).s19 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.tx_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.cx_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.cx_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.ix_1 > auxIndex_0) {
      var slotsToMove = this.ix_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.dx_1[auxAddress + 2 | 0] = this.dx_1[auxAddress + 1 | 0];
      }
      this.dx_1[auxAddress + 1 | 0] = this.dx_1[auxAddress];
    }
    addAux(this.cx_1, parentGroupAddress);
    this.dx_1[auxAddress] = value;
    this.ix_1 = this.ix_1 + 1 | 0;
  };
  protoOf(SlotWriter).z1j = function (value) {
    return updateNodeOfGroup(this, this.sx_1, value);
  };
  protoOf(SlotWriter).m18 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.h1k(this), value);
  };
  protoOf(SlotWriter).k1k = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ix_1 <= this.jx_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.dx_1[dataIndexToDataAddress(this, this.ix_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).p18 = function (index, value) {
    var address = groupIndexToAddress(this, this.sx_1);
    var slotsStart = slotIndex(this.cx_1, this, address);
    var slotsEnd = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, this.sx_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.sx_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.dx_1[slotAddress];
    this.dx_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).j1k = function () {
    if (this.nx_1 > 0) {
      insertSlots(this, 1, this.tx_1);
    }
    var tmp = this.dx_1;
    var tmp1 = this.ix_1;
    this.ix_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).m1f = function (anchor, index) {
    return this.o1f(this.i16(anchor), index);
  };
  protoOf(SlotWriter).o1f = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.cx_1, this, address);
    var slotsEnd = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().hy_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.dx_1[slotAddress];
  };
  protoOf(SlotWriter).v18 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.nx_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.sx_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.tx_1 ? index <= this.hx_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.tx_1 + '-' + this.hx_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.sx_1 = index;
    var newSlot = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, index));
    this.ix_1 = newSlot;
    this.jx_1 = newSlot;
  };
  protoOf(SlotWriter).yy = function () {
    var newGroup = this.hx_1;
    this.sx_1 = newGroup;
    this.ix_1 = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).r14 = function () {
    var tmp1 = this.nx_1;
    this.nx_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).o15 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.nx_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.nx_1 = this.nx_1 - 1 | 0;
    if (this.nx_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.rx_1.f() === this.px_1.f())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).a14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().hy_1, false, Companion_getInstance_1().hy_1);
  };
  protoOf(SlotWriter).c14 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().hy_1);
  };
  protoOf(SlotWriter).e14 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().hy_1);
  };
  protoOf(SlotWriter).d14 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).n15 = function () {
    var inserting = this.nx_1 > 0;
    var currentGroup = this.sx_1;
    var currentGroupEnd = this.hx_1;
    var groupIndex = this.tx_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.ox_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.cx_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.cx_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.cx_1, groupAddress, newNodes);
      this.ox_1 = this.rx_1.d15() + (isNode_0 ? 1 : newNodes) | 0;
      this.tx_1 = parent(this.cx_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.cx_1, groupAddress);
      var oldNodes = nodeCount(this.cx_1, groupAddress);
      updateGroupSize(this.cx_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.cx_1, groupAddress, newNodes);
      var newParent = this.px_1.d15();
      restoreCurrentGroupEnd(this);
      this.tx_1 = newParent;
      var groupParent = parent(this.cx_1, this, groupIndex);
      this.ox_1 = this.rx_1.d15();
      if (groupParent === newParent) {
        this.ox_1 = this.ox_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.cx_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.cx_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.cx_1, currentAddress, nodeCount(this.cx_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.cx_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.cx_1, this, current);
          }
        }
        this.ox_1 = this.ox_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).c1a = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.tx_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.hx_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.sx_1;
      var oldCurrentSlot = this.ix_1;
      var oldCurrentSlotEnd = this.jx_1;
      this.sx_1 = index;
      this.a14();
      this.sx_1 = oldCurrent;
      this.ix_1 = oldCurrentSlot;
      this.jx_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).d19 = function (anchor) {
    return this.c1a(anchor.h1k(this));
  };
  protoOf(SlotWriter).s13 = function () {
    var groupAddress = groupIndexToAddress(this, this.sx_1);
    var newGroup = this.sx_1 + groupSize(this.cx_1, groupAddress) | 0;
    this.sx_1 = newGroup;
    this.ix_1 = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.cx_1, groupAddress) ? 1 : nodeCount(this.cx_1, groupAddress);
  };
  protoOf(SlotWriter).gy = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.sx_1;
    var oldSlot = this.ix_1;
    var count = this.s13();
    var tmp0_safe_receiver = this.vx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.r16() ? tmp0_safe_receiver.k19() >= oldGroup : false) {
        tmp0_safe_receiver.b1k();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.sx_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.ix_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.sx_1 = oldGroup;
    this.ix_1 = oldSlot;
    this.ox_1 = this.ox_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).wx = function () {
    var start = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, this.sx_1));
    var end = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, this.sx_1 + this.g15(this.sx_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).r18 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.nx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.sx_1;
    var parent = this.tx_1;
    var parentEnd = this.hx_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.cx_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.cx_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.ix_1;
    var dataStart = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.cx_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.sx_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.cx_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    if (moveDataLen > 0) {
      var slots = this.dx_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.kx_1;
    var slotsGapLen = this.lx_1;
    var slotsCapacity = this.dx_1.length;
    var slotsGapOwner = this.mx_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.hx_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).u16 = function (anchor, offset, writer) {
    runtimeCheck(writer.nx_1 > 0);
    runtimeCheck(this.nx_1 === 0);
    runtimeCheck(anchor.t1b());
    var location = this.i16(anchor) + offset | 0;
    var currentGroup = this.sx_1;
    runtimeCheck(currentGroup <= location ? location < this.hx_1 : false);
    var parent = this.w13(location);
    var size = this.g15(location);
    var nodes = this.y15(location) ? 1 : this.z15(location);
    var result = moveGroup$default(Companion_getInstance_5(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.cx_1, currentAddress, groupSize(this.cx_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.cx_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.cx_1, currentAddress, nodeCount(this.cx_1, currentAddress) - nodes | 0);
        }
      }
      current = this.w13(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.ox_1 >= nodes);
      this.ox_1 = this.ox_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).x18 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.nx_1 > 0);
    if (((index === 0 ? this.sx_1 === 0 : false) ? this.bx_1.i12_1 === 0 : false) ? groupSize(table.h12_1, index) === table.i12_1 : false) {
      var myGroups = this.cx_1;
      var mySlots = this.dx_1;
      var myAnchors = this.ex_1;
      var groups = table.h12_1;
      var groupsSize = table.i12_1;
      var slots = table.j12_1;
      var slotsSize = table.k12_1;
      this.cx_1 = groups;
      this.dx_1 = slots;
      this.ex_1 = table.o12_1;
      this.fx_1 = groupsSize;
      this.gx_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.kx_1 = slotsSize;
      this.lx_1 = slots.length - slotsSize | 0;
      this.mx_1 = groupsSize;
      table.l1k(myGroups, 0, mySlots, 0, myAnchors);
      return this.ex_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_getInstance_5(), tmp0_let, index, this, true, true, removeSourceGroup);
    }finally {
      tmp0_let.m13();
    }
    return tmp;
  };
  protoOf(SlotWriter).u18 = function (offset, table, index) {
    runtimeCheck(this.nx_1 <= 0 ? this.g15(this.sx_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.sx_1;
    var previousCurrentSlot = this.ix_1;
    var previousCurrentSlotEnd = this.jx_1;
    this.v18(offset);
    this.a14();
    this.r14();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.y13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_getInstance_5(), tmp0_let, index, this, false, true);
    }finally {
      tmp0_let.m13();
    }
    var anchors = tmp;
    this.o15();
    this.n15();
    this.sx_1 = previousCurrentGroup;
    this.ix_1 = previousCurrentSlot;
    this.jx_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).s14 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.ex_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.fx_1 ? index : -(this.f() - index | 0) | 0);
      tmp0_getOrAdd.la(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.l(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).m1k = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.cx_1, groupAddress)) {
      updateMark(this.cx_1, groupAddress, true);
      if (!containsMark(this.cx_1, groupAddress)) {
        updateContainsMark(this, this.w13(group));
      }
    }
  };
  protoOf(SlotWriter).f16 = function (group, $super) {
    group = group === VOID ? this.tx_1 : group;
    var tmp;
    if ($super === VOID) {
      this.m1k(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.m1k.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).i16 = function (anchor) {
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.k17_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    return tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.sx_1 + ' end=' + this.hx_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.fx_1 + '-' + (this.fx_1 + this.gx_1 | 0) + ')');
  };
  protoOf(SlotWriter).f = function () {
    return _get_capacity__a9k9f3(this) - this.gx_1 | 0;
  };
  function Anchor(loc) {
    this.k17_1 = loc;
  }
  protoOf(Anchor).t1b = function () {
    return !(this.k17_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).w18 = function (slots) {
    return slots.i16(this);
  };
  protoOf(Anchor).h1k = function (writer) {
    return writer.i16(this);
  };
  function SlotTable() {
    this.h12_1 = new Int32Array(0);
    this.i12_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j12_1 = tmp_1;
    this.k12_1 = 0;
    this.l12_1 = 0;
    this.m12_1 = false;
    this.n12_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.o12_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).uo = function () {
    return this.i12_1 === 0;
  };
  protoOf(SlotTable).p12 = function () {
    if (this.m12_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    this.l12_1 = this.l12_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).y13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.m12_1 = true;
    this.n12_1 = this.n12_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).s14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.i12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.o12_1;
    var tmp3_getOrAdd = this.i12_1;
    var location = search$accessor$mbvawc(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp2_getOrAdd.la(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.l(location);
    }
    return tmp;
  };
  protoOf(SlotTable).i16 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.t1b()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.k17_1;
  };
  protoOf(SlotTable).x1c = function (anchor) {
    var tmp;
    if (anchor.t1b()) {
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$mbvawc(this.o12_1, anchor.k17_1, this.i12_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp = tmp0_let >= 0 ? equals(this.o12_1.l(tmp0_let), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).x1b = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.i12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.x1c(anchor)) {
      var containsUpper = groupIndex + groupSize(this.h12_1, groupIndex) | 0;
      var containsArg = anchor.k17_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).n1k = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.a13_1 === this ? this.l12_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.l12_1 = this.l12_1 - 1 | 0;
  };
  protoOf(SlotTable).i1k = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.bx_1 === this ? this.m12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m12_1 = false;
    this.l1k(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).l1k = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.h12_1 = groups;
    this.i12_1 = groupsSize;
    this.j12_1 = slots;
    this.k12_1 = slotsSize;
    this.o12_1 = anchors;
  };
  protoOf(SlotTable).y16 = function () {
    return this.i12_1 > 0 ? containsMark(this.h12_1, 0) : false;
  };
  protoOf(SlotTable).o1f = function (group, slotIndex) {
    var start = slotAnchor(this.h12_1, group);
    var end = (group + 1 | 0) < this.i12_1 ? dataAnchor(this.h12_1, group + 1 | 0) : this.j12_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.j12_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_1().hy_1;
    }
    return tmp;
  };
  protoOf(SlotTable).c = function () {
    return new GroupIterator(this, 0, this.i12_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.a1k_1 = list;
  }
  protoOf(PrioritySet).c1k = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a1k_1.k()) {
      tmp = this.a1k_1.l(0) === value ? true : this.a1k_1.l(this.a1k_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.a1k_1.f();
    this.a1k_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.a1k_1.l(parent);
      if (value > parentValue) {
        this.a1k_1.u9(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.a1k_1.u9(index, value);
  };
  protoOf(PrioritySet).r16 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.a1k_1.k();
  };
  protoOf(PrioritySet).k19 = function () {
    return first(this.a1k_1);
  };
  protoOf(PrioritySet).b1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a1k_1.f() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.a1k_1.l(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.a1k_1.k()) {
        tmp = this.a1k_1.l(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.a1k_1.u9(0, last(this.a1k_1));
      this.a1k_1.m3(this.a1k_1.f() - 1 | 0);
      var index = 0;
      var size = this.a1k_1.f();
      var max = this.a1k_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.a1k_1.l(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.a1k_1.l(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.a1k_1.l(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.a1k_1.u9(index, rightValue);
              this.a1k_1.u9(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.a1k_1.u9(index, leftValue);
          this.a1k_1.u9(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    return tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.d13_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().hy_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.d13_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().hy_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.d13_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.a13_1 = table;
    this.b13_1 = this.a13_1.h12_1;
    this.c13_1 = this.a13_1.i12_1;
    this.d13_1 = this.a13_1.j12_1;
    this.e13_1 = this.a13_1.k12_1;
    this.f13_1 = false;
    this.g13_1 = 0;
    this.h13_1 = this.c13_1;
    this.i13_1 = -1;
    this.j13_1 = 0;
    this.k13_1 = 0;
    this.l13_1 = 0;
  }
  protoOf(SlotReader).f = function () {
    return this.c13_1;
  };
  protoOf(SlotReader).w13 = function (index) {
    return parentAnchor(this.b13_1, index);
  };
  protoOf(SlotReader).w17 = function () {
    return isNode(this.b13_1, this.g13_1);
  };
  protoOf(SlotReader).y15 = function (index) {
    return isNode(this.b13_1, index);
  };
  protoOf(SlotReader).z15 = function (index) {
    return nodeCount(this.b13_1, index);
  };
  protoOf(SlotReader).q16 = function (index) {
    return isNode(this.b13_1, index) ? node(this.b13_1, this, index) : null;
  };
  protoOf(SlotReader).k15 = function () {
    return this.p15() ? true : this.g13_1 === this.h13_1;
  };
  protoOf(SlotReader).p15 = function () {
    return this.j13_1 > 0;
  };
  protoOf(SlotReader).s16 = function () {
    return groupSize(this.b13_1, this.g13_1);
  };
  protoOf(SlotReader).g15 = function (index) {
    return groupSize(this.b13_1, index);
  };
  protoOf(SlotReader).j15 = function () {
    return this.h13_1;
  };
  protoOf(SlotReader).n14 = function () {
    var tmp;
    if (this.g13_1 < this.h13_1) {
      tmp = key(this.b13_1, this.g13_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).v13 = function (index) {
    return key(this.b13_1, index);
  };
  protoOf(SlotReader).l19 = function () {
    return this.k13_1 - slotAnchor(this.b13_1, this.i13_1) | 0;
  };
  protoOf(SlotReader).a16 = function (index) {
    return hasObjectKey(this.b13_1, index);
  };
  protoOf(SlotReader).p14 = function () {
    return this.g13_1 < this.h13_1 ? objectKey(this.b13_1, this, this.g13_1) : null;
  };
  protoOf(SlotReader).u13 = function (index) {
    return objectKey(this.b13_1, this, index);
  };
  protoOf(SlotReader).z13 = function () {
    return this.g13_1 < this.h13_1 ? aux(this.b13_1, this, this.g13_1) : 0;
  };
  protoOf(SlotReader).t13 = function (index) {
    return aux(this.b13_1, this, index);
  };
  protoOf(SlotReader).k18 = function (index) {
    return hasMark(this.b13_1, index);
  };
  protoOf(SlotReader).y17 = function (index) {
    return containsMark(this.b13_1, index);
  };
  protoOf(SlotReader).b16 = function () {
    return this.i13_1 >= 0 ? nodeCount(this.b13_1, this.i13_1) : 0;
  };
  protoOf(SlotReader).m19 = function (index) {
    return this.z17(this.g13_1, index);
  };
  protoOf(SlotReader).z17 = function (group, index) {
    var start = slotAnchor(this.b13_1, group);
    var next = group + 1 | 0;
    var end = next < this.c13_1 ? dataAnchor(this.b13_1, next) : this.e13_1;
    var address = start + index | 0;
    return address < end ? this.d13_1[address] : Companion_getInstance_1().hy_1;
  };
  protoOf(SlotReader).e = function () {
    if (this.j13_1 > 0 ? true : this.k13_1 >= this.l13_1)
      return Companion_getInstance_1().hy_1;
    var tmp1 = this.k13_1;
    this.k13_1 = tmp1 + 1 | 0;
    return this.d13_1[tmp1];
  };
  protoOf(SlotReader).b14 = function () {
    this.j13_1 = this.j13_1 + 1 | 0;
  };
  protoOf(SlotReader).m15 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j13_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j13_1 = this.j13_1 - 1 | 0;
  };
  protoOf(SlotReader).m13 = function () {
    this.f13_1 = true;
    this.a13_1.n1k(this);
  };
  protoOf(SlotReader).a14 = function () {
    if (this.j13_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.b13_1, this.g13_1) === this.i13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.i13_1 = this.g13_1;
      this.h13_1 = this.g13_1 + groupSize(this.b13_1, this.g13_1) | 0;
      var tmp1 = this.g13_1;
      this.g13_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.k13_1 = slotAnchor(this.b13_1, current);
      this.l13_1 = current >= (this.c13_1 - 1 | 0) ? this.e13_1 : dataAnchor(this.b13_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).zy = function () {
    if (this.j13_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.b13_1, this.g13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.a14();
    }
  };
  protoOf(SlotReader).s13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.b13_1, this.g13_1) ? 1 : nodeCount(this.b13_1, this.g13_1);
    this.g13_1 = this.g13_1 + groupSize(this.b13_1, this.g13_1) | 0;
    return count;
  };
  protoOf(SlotReader).yy = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.g13_1 = this.h13_1;
  };
  protoOf(SlotReader).b15 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.g13_1 = index;
    var parent = index < this.c13_1 ? parentAnchor(this.b13_1, index) : -1;
    this.i13_1 = parent;
    if (parent < 0)
      this.h13_1 = this.c13_1;
    else
      this.h13_1 = parent + groupSize(this.b13_1, parent) | 0;
    this.k13_1 = 0;
    this.l13_1 = 0;
  };
  protoOf(SlotReader).v15 = function (index) {
    var newCurrentEnd = index + groupSize(this.b13_1, index) | 0;
    var current = this.g13_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.i13_1 = index;
    this.h13_1 = newCurrentEnd;
    this.k13_1 = 0;
    this.l13_1 = 0;
  };
  protoOf(SlotReader).l15 = function () {
    if (this.j13_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.g13_1 === this.h13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.b13_1, this.i13_1);
      this.i13_1 = parent;
      this.h13_1 = parent < 0 ? this.c13_1 : parent + groupSize(this.b13_1, parent) | 0;
    }
  };
  protoOf(SlotReader).o14 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.j13_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.g13_1;
    while (childIndex < this.h13_1) {
      var tmp = key(this.b13_1, childIndex);
      var tmp_0 = objectKey(this.b13_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.b13_1, childIndex) ? 1 : nodeCount(this.b13_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.b13_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.g13_1 + ', key=' + this.n14() + ', ' + ('parent=' + this.i13_1 + ', end=' + this.h13_1 + ')');
  };
  protoOf(SlotReader).s14 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.a13_1.o12_1;
    var tmp1_getOrAdd = this.c13_1;
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0_getOrAdd.la(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.l(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.l(mid).k17_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var midVal = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    return tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.o1k_1.n12_1 === $this.r1k_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.o1k_1 = table;
    this.p1k_1 = end;
    this.q1k_1 = start;
    this.r1k_1 = this.o1k_1.n12_1;
    if (this.o1k_1.m12_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d = function () {
    return this.q1k_1 < this.p1k_1;
  };
  protoOf(GroupIterator).e = function () {
    validateRead(this);
    var group = this.q1k_1;
    this.q1k_1 = this.q1k_1 + groupSize(this.o1k_1.h12_1, group) | 0;
    return new SlotTableGroup(this.o1k_1, group, this.r1k_1);
  };
  function validateRead_0($this) {
    if (!($this.s1k_1.n12_1 === $this.u1k_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.n12_1 : version;
    this.s1k_1 = table;
    this.t1k_1 = group;
    this.u1k_1 = version;
  }
  protoOf(SlotTableGroup).c = function () {
    validateRead_0(this);
    return new GroupIterator(this.s1k_1, this.t1k_1 + 1 | 0, this.t1k_1 + groupSize(this.s1k_1.h12_1, this.t1k_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.t14_1 = key;
    this.u14_1 = objectKey;
    this.v14_1 = location;
    this.w14_1 = nodes;
    this.x14_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  protoOf(StructuralEqualityPolicy).w1k = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).v1f = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.w1k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.a1l_1 = myValue;
  }
  protoOf(StateStateRecord).b1l = function (value) {
    var tmp = this;
    tmp.a1l_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).a1l_1;
  };
  protoOf(StateStateRecord).c1l = function () {
    return new StateStateRecord(this.a1l_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.d1l_1 = policy;
    this.e1l_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).x1d = function () {
    return this.d1l_1;
  };
  protoOf(SnapshotMutableStateImpl).ut = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.e1l_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!this.x1d().v1f(tmp1_anonymous.a1l_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.e1l_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).a1l_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).w1 = function () {
    return readable_0(this.e1l_1, this).a1l_1;
  };
  protoOf(SnapshotMutableStateImpl).f1l = function () {
    return this.e1l_1;
  };
  protoOf(SnapshotMutableStateImpl).g1l = function (value) {
    var tmp = this;
    tmp.e1l_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).h1l = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.x1d().v1f(currentRecord.a1l_1, appliedRecord.a1l_1)) {
      tmp = current;
    } else {
      var merged = this.x1d().v1k(previousRecord.a1l_1, currentRecord.a1l_1, appliedRecord.a1l_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.c1l();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).a1l_1 = merged;
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.e1l_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(tmp0_withCurrent).a1l_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.y1d_1 = new AtomicReference(get_emptyThreadMap());
    this.z1d_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).bp = function () {
    var tmp = this.y1d_1.bp().l1l(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).a1e = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.y1d_1.bp();
    if (current.m1l(key, value))
      return Unit_getInstance();
    this.y1d_1.v1b(current.n1l(key, value));
  };
  function IntStack() {
    this.t12_1 = new Int32Array(10);
    this.u12_1 = 0;
  }
  protoOf(IntStack).f = function () {
    return this.u12_1;
  };
  protoOf(IntStack).v12 = function (value) {
    if (this.u12_1 >= this.t12_1.length) {
      this.t12_1 = copyOf(this.t12_1, imul(this.t12_1.length, 2));
    }
    var tmp = this.t12_1;
    var tmp1 = this.u12_1;
    this.u12_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).d15 = function () {
    var tmp = this.t12_1;
    this.u12_1 = this.u12_1 - 1 | 0;
    return tmp[this.u12_1];
  };
  protoOf(IntStack).z16 = function (default_0) {
    return this.u12_1 > 0 ? this.k19() : default_0;
  };
  protoOf(IntStack).k19 = function () {
    return this.t12_1[this.u12_1 - 1 | 0];
  };
  protoOf(IntStack).x15 = function (index) {
    return this.t12_1[index];
  };
  protoOf(IntStack).k = function () {
    return this.u12_1 === 0;
  };
  protoOf(IntStack).y9 = function () {
    this.u12_1 = 0;
  };
  protoOf(IntStack).g1k = function (value) {
    var inductionVariable = 0;
    var last = this.u12_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.t12_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.n13_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).f = function () {
    return this.n13_1.f();
  };
  protoOf(Stack).c15 = function (value) {
    return this.n13_1.a(value);
  };
  protoOf(Stack).d15 = function () {
    return this.n13_1.m3(this.f() - 1 | 0);
  };
  protoOf(Stack).k19 = function () {
    return this.n13_1.l(this.f() - 1 | 0);
  };
  protoOf(Stack).x15 = function (index) {
    return this.n13_1.l(index);
  };
  protoOf(Stack).k = function () {
    return this.n13_1.k();
  };
  protoOf(Stack).r16 = function () {
    return !this.k();
  };
  protoOf(Stack).y9 = function () {
    return this.n13_1.y9();
  };
  protoOf(Stack).gb = function () {
    var tmp = 0;
    var tmp_0 = this.n13_1.f();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.n13_1.l(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    current$factory();
    return $this.w1d_1.w1();
  }
  function LazyValueHolder(valueProducer) {
    this.w1d_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).w1 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.o1l_1 = value;
  }
  protoOf(StaticValueHolder).w1 = function () {
    return this.o1l_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.o1l_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.o1l_1 == null ? 0 : hashCode(this.o1l_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.o1l_1, tmp0_other_with_cast.o1l_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.p1f_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.q1f_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.q1f_1;
    var size = $this.p1f_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.p1f_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.q1f_1 = fillArrayVal(Array(4), null);
    this.r1f_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).t1f = function (key, value) {
    var values = this.r1f_1;
    var index;
    if (this.p1f_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.q1f_1;
    var size = this.p1f_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, tmp2_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.q1f_1 = newKeys;
      this.r1f_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, keys, tmp3_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, tmp4_copyInto, insertIndex, size);
    }
    this.q1f_1[insertIndex] = key;
    this.r1f_1[insertIndex] = value;
    this.p1f_1 = this.p1f_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.j17_1 - 1 | 0;
    var keys = $this.h17_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.h17_1;
    var size = $this.j17_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.h17_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.i17_1 = fillArrayVal(Array(capacity), null);
    this.j17_1 = 0;
  }
  protoOf(IdentityArrayMap).r16 = function () {
    return this.j17_1 > 0;
  };
  protoOf(IdentityArrayMap).g1d = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).f1d = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.i17_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).y1b = function (key, value) {
    var keys = this.h17_1;
    var values = this.i17_1;
    var size = this.j17_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(size, 2);
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, tmp1_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.h17_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp2_arrayOfNulls = imul(size, 2);
        tmp_0 = fillArrayVal(Array(tmp2_arrayOfNulls), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, destValues, tmp3_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.i17_1 = destValues;
      this.j17_1 = this.j17_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).s1f = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.i17_1[index];
      var size = this.j17_1;
      var keys = this.h17_1;
      var values = this.i17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.j17_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.n16_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.o16_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.o16_1;
    var size = $this.n16_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.q1l_1 = this$0;
    this.p1l_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d = function () {
    return this.p1l_1 < this.q1l_1.n16_1;
  };
  protoOf(IdentityArraySet$iterator$1).e = function () {
    var tmp = this.q1l_1.o16_1;
    var tmp1 = this.p1l_1;
    this.p1l_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.n16_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o16_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).f = function () {
    return this.n16_1;
  };
  protoOf(IdentityArraySet).r2 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).m = function (element) {
    if (!isObject(element))
      return false;
    return this.r2(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).q17 = function (value) {
    var index;
    var size = this.n16_1;
    var values = this.o16_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.o16_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, values, tmp2_copyInto, insertIndex, size);
    }
    this.o16_1[insertIndex] = value;
    this.n16_1 = this.n16_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).z1g = function (collection) {
    if (collection.k())
      return Unit_getInstance();
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.c();
      while (tmp0_iterator.d()) {
        var value = tmp0_iterator.e();
        this.q17(value);
      }
    } else {
      var thisValues = this.o16_1;
      var otherValues = collection.o16_1;
      var thisSize = this.n16_1;
      var otherSize = collection.n16_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.o16_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.n16_1 = this.n16_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp0_arrayOfNulls = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, tmp1_copyInto, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.o16_1 = newArray;
        this.n16_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).k = function () {
    return this.n16_1 === 0;
  };
  protoOf(IdentityArraySet).r16 = function () {
    return this.n16_1 > 0;
  };
  protoOf(IdentityArraySet).r1l = function (value) {
    var index = find_1(this, value);
    var values = this.o16_1;
    var size = this.n16_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + 1 | 0;
        arrayCopy(values, values, index, tmp0_copyInto, size);
      }
      values[size - 1 | 0] = null;
      this.n16_1 = this.n16_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).s2 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.r2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).b1 = function (elements) {
    return this.s2(elements);
  };
  protoOf(IdentityArraySet).c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.g1b_1[$this.e1b_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.h1b_1;
    var valueOrder = $this.e1b_1;
    var values = $this.f1b_1;
    var scopeSets = $this.g1b_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, tmp1_copyInto, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.h1b_1 = $this.h1b_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, tmp2_copyInto, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.g1b_1 = newScopeSets;
    $this.f1b_1 = newValues;
    $this.e1b_1 = newKeyOrder;
    $this.h1b_1 = $this.h1b_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.h1b_1 - 1 | 0;
    var values = $this.f1b_1;
    var valueOrder = $this.e1b_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.f1b_1;
    var valueOrder = $this.e1b_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.h1b_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.h1b_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.e1b_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.f1b_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.g1b_1 = fillArrayVal(Array(50), null);
    this.h1b_1 = 0;
  }
  protoOf(IdentityScopeMap).k1b = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.q17(scope);
  };
  protoOf(IdentityScopeMap).j1b = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).i1b = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.e1b_1;
    var scopeSets = this.g1b_1;
    var values = this.f1b_1;
    var size = this.h1b_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.r1l(scope);
      if (set.n16_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.h1b_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).l1c = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.e1b_1;
    var scopeSets = this.g1b_1;
    var values = this.f1b_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.h1b_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.r1l(scope);
        if (set.n16_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.h1b_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.h1b_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.m17_1 = content;
    this.n17_1 = null;
    this.o17_1 = size;
    this.p17_1 = 8;
  }
  protoOf(MutableVector).q17 = function (element) {
    this.eb(this.o17_1 + 1 | 0);
    this.m17_1[this.o17_1] = element;
    this.o17_1 = this.o17_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).eb = function (capacity) {
    var oldContent = this.m17_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, tmp0_max);
      this.m17_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).m3 = function (index) {
    var content = this.m17_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.o17_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.o17_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
    }
    this.o17_1 = this.o17_1 - 1 | 0;
    content[this.o17_1] = null;
    return item;
  };
  function persistentSetOf() {
    return Companion_getInstance_9().t1l();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.u1l_1 = index;
    this.v1l_1 = size;
  }
  protoOf(AbstractListIterator).d = function () {
    return this.u1l_1 < this.v1l_1;
  };
  protoOf(AbstractListIterator).i1 = function () {
    return this.u1l_1 > 0;
  };
  protoOf(AbstractListIterator).j1 = function () {
    return this.u1l_1;
  };
  protoOf(AbstractListIterator).w1l = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).x1l = function () {
    if (!this.i1())
      throw NoSuchElementException_init_$Create$();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).j = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.x13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.j(elements);
    return tmp0_apply.db();
  };
  protoOf(AbstractPersistentList).v9 = function (element) {
    var index = this.n(element);
    if (!(index === -1)) {
      return this.m3(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).m = function (element) {
    return !(this.n(element) === -1);
  };
  protoOf(AbstractPersistentList).b1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.m(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).c = function () {
    return this.y1l();
  };
  protoOf(AbstractPersistentList).y1l = function () {
    return this.r1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.c1m_1 = buffer;
  }
  protoOf(BufferIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp1 = this.u1l_1;
    this.u1l_1 = tmp1 + 1 | 0;
    return this.c1m_1[tmp1];
  };
  protoOf(BufferIterator).k1 = function () {
    if (!this.i1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.u1l_1 = this.u1l_1 - 1 | 0;
    return this.c1m_1[this.u1l_1];
  };
  function rootSize($this) {
    return rootSize_1($this.f1m_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.f1m_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.g1m_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.g1m_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.f1m_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.g1m_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.f1m_1 + 1 | 0, $this.g1m_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.f1m_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.f1m_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.e1m_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.e1m_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.f1m_1 + 1 | 0, $this.g1m_1);
    }
    var lastElement = $this.e1m_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.e1m_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      elementCarry.h1m_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.h1m_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.f1m_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.e1m_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.e1m_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.h1m_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.h1m_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.h1m_1;
      tailCarry.h1m_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.e1m_1;
    }
    var buffer = $this.d1m_1;
    var shift = $this.g1m_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.d1m_1 = root;
    this.e1m_1 = tail;
    this.f1m_1 = size;
    this.g1m_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f1m_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.f1m_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.f1m_1 - rootSize_1(this.f1m_1) | 0) <= coerceAtMost(this.e1m_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).f = function () {
    return this.f1m_1;
  };
  protoOf(PersistentVector).a = function (element) {
    var tailSize = this.f1m_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.e1m_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.d1m_1, newTail, this.f1m_1 + 1 | 0, this.g1m_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.d1m_1, this.e1m_1, newTail_0);
  };
  protoOf(PersistentVector).z1l = function (index, element) {
    ListImplementation_getInstance().h1(index, this.f1m_1);
    if (index === this.f1m_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.d1m_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.d1m_1, this.g1m_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.h1m_1);
  };
  protoOf(PersistentVector).m3 = function (index) {
    ListImplementation_getInstance().l1(index, this.f1m_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.d1m_1, rootSize_0, this.g1m_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.d1m_1, this.g1m_1, index, new ObjectRef(this.e1m_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.g1m_1, 0);
  };
  protoOf(PersistentVector).x13 = function () {
    return new PersistentVectorBuilder(this, this.d1m_1, this.e1m_1, this.g1m_1);
  };
  protoOf(PersistentVector).r1 = function (index) {
    ListImplementation_getInstance().h1(index, this.f1m_1);
    var tmp = this.e1m_1;
    return new PersistentVectorIterator(this.d1m_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.f1m_1, (this.g1m_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).l = function (index) {
    ListImplementation_getInstance().l1(index, this.f1m_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).u9 = function (index, element) {
    ListImplementation_getInstance().l1(index, this.f1m_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.e1m_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.d1m_1, newTail, this.f1m_1, this.g1m_1);
    }
    var newRoot = setInRoot(this, this.d1m_1, this.g1m_1, index, element);
    return new PersistentVector(newRoot, this.e1m_1, this.f1m_1, this.g1m_1);
  };
  function rootSize_0($this) {
    if ($this.q1m_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.q1m_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.q1m_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.n1m_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    return tmp0_copyInto;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.n1m_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.n1m_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.q1m_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.m1m_1) {
      $this.o1m_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.m1m_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.p1m_1 = newTail;
      $this.m1m_1 = $this.m1m_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.q1m_1 = $this.q1m_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.o1m_1 = filledTail;
      $this.p1m_1 = newTail;
      $this.q1m_1 = $this.q1m_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.o1m_1 = pushTail_0($this, root, filledTail, $this.m1m_1);
      $this.p1m_1 = newTail;
      $this.q1m_1 = $this.q1m_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.q1m_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.d() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.e();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.m1m_1 ? pushBuffers($this, root, rootSize, $this.m1m_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.d()) {
      $this.m1m_1 = $this.m1m_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.m1m_1, $this.m1m_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.d()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.e();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.d();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.p1m_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.p1m_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      mutableTail[index] = element;
      $this.o1m_1 = root;
      $this.p1m_1 = mutableTail;
      $this.q1m_1 = $this.q1m_1 + 1 | 0;
    } else {
      var lastElement = $this.p1m_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.p1m_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.h1m_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      var mutableRoot = tmp0_copyInto;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.h1m_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.p1m_1;
    }
    var buffer = ensureNotNull($this.o1m_1);
    var shift = $this.m1m_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.q1m_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.p1m_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.p1m_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.p1m_1;
      var tmp1_copyInto = makeMutable($this, $this.p1m_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      var mutableTail = tmp1_copyInto;
      mutableTail[tailSize - 1 | 0] = null;
      $this.o1m_1 = root;
      $this.p1m_1 = mutableTail;
      $this.q1m_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.m1m_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      var mutableRoot = tmp0_copyInto;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.h1m_1;
      tailCarry.h1m_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.o1m_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.p1m_1 = tmp_0;
      $this.q1m_1 = rootSize;
      $this.m1m_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.h1m_1;
    tmp_1.p1m_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.q1m_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.o1m_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.m1m_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.o1m_1 = newRoot;
      $this.m1m_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.h1m_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.ca_1 = $this.ca_1 + 1 | 0;
      }
      oldElementCarry.h1m_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.j1m_1 = vector;
    this.k1m_1 = vectorRoot;
    this.l1m_1 = vectorTail;
    this.m1m_1 = rootShift;
    this.n1m_1 = new MutabilityOwnership();
    this.o1m_1 = this.k1m_1;
    this.p1m_1 = this.l1m_1;
    this.q1m_1 = this.j1m_1.f();
  }
  protoOf(PersistentVectorBuilder).f = function () {
    return this.q1m_1;
  };
  protoOf(PersistentVectorBuilder).r1m = function () {
    return this.ca_1;
  };
  protoOf(PersistentVectorBuilder).db = function () {
    var tmp = this;
    var tmp_0;
    if (this.o1m_1 === this.k1m_1 ? this.p1m_1 === this.l1m_1 : false) {
      tmp_0 = this.j1m_1;
    } else {
      this.n1m_1 = new MutabilityOwnership();
      this.k1m_1 = this.o1m_1;
      this.l1m_1 = this.p1m_1;
      var tmp_1;
      if (this.o1m_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.p1m_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.p1m_1, this.q1m_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.o1m_1), this.p1m_1, this.q1m_1, this.m1m_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.j1m_1 = tmp_0;
    return this.j1m_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    this.ca_1 = this.ca_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.p1m_1);
      mutableTail[tailSize] = element;
      this.p1m_1 = mutableTail;
      this.q1m_1 = this.q1m_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.o1m_1, this.p1m_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).j = function (elements) {
    if (elements.k()) {
      return false;
    }
    this.ca_1 = this.ca_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.c();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.f()) {
      this.p1m_1 = copyToBuffer(this, makeMutable(this, this.p1m_1), tailSize, elementsIterator);
      this.q1m_1 = this.q1m_1 + elements.f() | 0;
    } else {
      var buffersSize = ((elements.f() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.p1m_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.o1m_1;
      var tmp_1 = rootSize_0(this);
      tmp.o1m_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.p1m_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.q1m_1 = this.q1m_1 + elements.f() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).la = function (index, element) {
    ListImplementation_getInstance().h1(index, this.q1m_1);
    if (index === this.q1m_1) {
      this.a(element);
      return Unit_getInstance();
    }
    this.ca_1 = this.ca_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.o1m_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.o1m_1), this.m1m_1, index, element, elementCarry);
    var tmp = elementCarry.h1m_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).l = function (index) {
    ListImplementation_getInstance().l1(index, this.q1m_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).m3 = function (index) {
    ListImplementation_getInstance().l1(index, this.q1m_1);
    this.ca_1 = this.ca_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.o1m_1, rootSize, this.m1m_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.p1m_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.o1m_1), this.m1m_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.m1m_1, 0);
    var tmp_0 = elementCarry.h1m_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).u9 = function (index, element) {
    ListImplementation_getInstance().l1(index, this.q1m_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.p1m_1);
      if (!(mutableTail === this.p1m_1)) {
        this.ca_1 = this.ca_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.p1m_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.o1m_1 = setInRoot_0(this, ensureNotNull(this.o1m_1), this.m1m_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.h1m_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).c = function () {
    return this.y1l();
  };
  protoOf(PersistentVectorBuilder).y1l = function () {
    return this.r1(0);
  };
  protoOf(PersistentVectorBuilder).r1 = function (index) {
    ListImplementation_getInstance().h1(index, this.q1m_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.u1m_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.v1m_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).e = function () {
    this.w1l();
    if (this.v1m_1.d()) {
      this.u1l_1 = this.u1l_1 + 1 | 0;
      return this.v1m_1.e();
    }
    var tmp3 = this.u1l_1;
    this.u1l_1 = tmp3 + 1 | 0;
    return this.u1m_1[tmp3 - this.v1m_1.v1l_1 | 0];
  };
  protoOf(PersistentVectorIterator).k1 = function () {
    this.x1l();
    if (this.u1l_1 > this.v1m_1.v1l_1) {
      this.u1l_1 = this.u1l_1 - 1 | 0;
      return this.u1m_1[this.u1l_1 - this.v1m_1.v1l_1 | 0];
    }
    this.u1l_1 = this.u1l_1 - 1 | 0;
    return this.v1m_1.k1();
  };
  function reset($this) {
    $this.v1l_1 = $this.d1n_1.q1m_1;
    $this.e1n_1 = $this.d1n_1.r1m();
    $this.g1n_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.d1n_1.o1m_1;
    if (root == null) {
      $this.f1n_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.d1n_1.q1m_1);
    var trieIndex = coerceAtMost($this.u1l_1, trieSize);
    var trieHeight = ($this.d1n_1.m1m_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.f1n_1 == null) {
      $this.f1n_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.f1n_1).h1n(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.e1n_1 === $this.d1n_1.r1m()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.g1n_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.q1m_1);
    this.d1n_1 = builder;
    this.e1n_1 = this.d1n_1.r1m();
    this.f1n_1 = null;
    this.g1n_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).k1 = function () {
    checkForComodification(this);
    this.x1l();
    this.g1n_1 = this.u1l_1 - 1 | 0;
    var tmp1_elvis_lhs = this.f1n_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.d1n_1.p1m_1;
      this.u1l_1 = this.u1l_1 - 1 | 0;
      var tmp_1 = tmp_0[this.u1l_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.u1l_1 > trieIterator.v1l_1) {
      var tmp_2 = this.d1n_1.p1m_1;
      this.u1l_1 = this.u1l_1 - 1 | 0;
      var tmp_3 = tmp_2[this.u1l_1 - trieIterator.v1l_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    this.u1l_1 = this.u1l_1 - 1 | 0;
    return trieIterator.k1();
  };
  protoOf(PersistentVectorMutableIterator).e = function () {
    checkForComodification(this);
    this.w1l();
    this.g1n_1 = this.u1l_1;
    var tmp2_elvis_lhs = this.f1n_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.d1n_1.p1m_1;
      var tmp1 = this.u1l_1;
      this.u1l_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.d()) {
      this.u1l_1 = this.u1l_1 + 1 | 0;
      return trieIterator.e();
    }
    var tmp_2 = this.d1n_1.p1m_1;
    var tmp6 = this.u1l_1;
    this.u1l_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.v1l_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).x9 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.d1n_1.m3(this.g1n_1);
    if (this.g1n_1 < this.u1l_1)
      this.u1l_1 = this.g1n_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.i1n_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.j1n_1 = buffer;
    assert(this.j1n_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).f = function () {
    return this.j1n_1.length;
  };
  protoOf(SmallPersistentVector).a = function (element) {
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.j1n_1, this.f() + 1 | 0);
      newBuffer[this.f()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.j1n_1, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).j = function (elements) {
    if ((this.f() + elements.f() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.j1n_1, this.f() + elements.f() | 0);
      var index = this.f();
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.x13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.j(elements);
    return tmp0_apply.db();
  };
  protoOf(SmallPersistentVector).z1l = function (index, element) {
    ListImplementation_getInstance().h1(index, this.f());
    if (index === this.f()) {
      return this.a(element);
    }
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.f() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.j1n_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.j1n_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.f();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.j1n_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.j1n_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.f() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    root[index] = element;
    var tail = presizedBufferWith(this.j1n_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).m3 = function (index) {
    ListImplementation_getInstance().l1(index, this.f());
    if (this.f() === 1) {
      return Companion_getInstance_6().i1n_1;
    }
    var newBuffer = copyOf_0(this.j1n_1, this.f() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.j1n_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.f();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).x13 = function () {
    return new PersistentVectorBuilder(this, null, this.j1n_1, 0);
  };
  protoOf(SmallPersistentVector).n = function (element) {
    return indexOf(this.j1n_1, element);
  };
  protoOf(SmallPersistentVector).q1 = function (element) {
    return lastIndexOf(this.j1n_1, element);
  };
  protoOf(SmallPersistentVector).r1 = function (index) {
    ListImplementation_getInstance().h1(index, this.f());
    var tmp = this.j1n_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.f());
  };
  protoOf(SmallPersistentVector).l = function (index) {
    ListImplementation_getInstance().l1(index, this.f());
    var tmp = this.j1n_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).u9 = function (index, element) {
    ListImplementation_getInstance().l1(index, this.f());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.j1n_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.y1m_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.y1m_1) {
      var tmp = $this.z1m_1;
      var tmp_0 = i;
      var tmp_1 = $this.z1m_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.u1l_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.y1m_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.u1l_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.u1l_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.z1m_1[$this.y1m_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.y1m_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.y1m_1;
    tmp.z1m_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.a1n_1 = index === size;
    this.z1m_1[0] = root;
    fillPath(this, index - (this.a1n_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).h1n = function (root, index, size, height) {
    this.u1l_1 = index;
    this.v1l_1 = size;
    this.y1m_1 = height;
    if (this.z1m_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.z1m_1 = fillArrayVal(Array(height), null);
    }
    this.z1m_1[0] = root;
    this.a1n_1 = index === size;
    fillPath(this, index - (this.a1n_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    this.u1l_1 = this.u1l_1 + 1 | 0;
    if (this.u1l_1 === this.v1l_1) {
      this.a1n_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).k1 = function () {
    if (!this.i1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.u1l_1 = this.u1l_1 - 1 | 0;
    if (this.a1n_1) {
      this.a1n_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().i1n_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.h1m_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.k1n_1 = new PersistentHashMap(Companion_getInstance_8().l1n_1, 0);
  }
  protoOf(Companion_5).m1n = function () {
    var tmp = this.k1n_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.p1n_1 = node;
    this.q1n_1 = size;
  }
  protoOf(PersistentHashMap).f = function () {
    return this.q1n_1;
  };
  protoOf(PersistentHashMap).i2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).u1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).d2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.p1n_1.v1n(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.p1n_1.w1n(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l3 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.p1n_1.x1n(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.y1n_1, this.f() + newNodeResult.z1n_1 | 0);
  };
  protoOf(PersistentHashMap).xa = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.p1n_1.a1o(tmp$ret$0, key, 0);
    if (this.p1n_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().m1n();
    }
    return new PersistentHashMap(newNode, this.f() - 1 | 0);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.f1o_1 = map;
    this.g1o_1 = new MutabilityOwnership();
    this.h1o_1 = this.f1o_1.p1n_1;
    this.i1o_1 = null;
    this.j1o_1 = 0;
    this.k1o_1 = this.f1o_1.f();
  }
  protoOf(PersistentHashMapBuilder).l1o = function (value) {
    this.k1o_1 = value;
    this.j1o_1 = this.j1o_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).f = function () {
    return this.k1o_1;
  };
  protoOf(PersistentHashMapBuilder).db = function () {
    var tmp = this;
    var tmp_0;
    if (this.h1o_1 === this.f1o_1.p1n_1) {
      tmp_0 = this.f1o_1;
    } else {
      this.g1o_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.h1o_1, this.f());
    }
    tmp.f1o_1 = tmp_0;
    return this.f1o_1;
  };
  protoOf(PersistentHashMapBuilder).u1 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).i2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).bb = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).d2 = function (key) {
    var tmp = this.h1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.v1n(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).h2 = function (key) {
    var tmp = this.h1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.w1n(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).l3 = function (key, value) {
    this.i1o_1 = null;
    var tmp = this;
    var tmp_0 = this.h1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.h1o_1 = tmp_0.m1o(tmp$ret$0, key, value, 0, this);
    return this.i1o_1;
  };
  protoOf(PersistentHashMapBuilder).d3 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.db();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.f();
      var tmp_0 = this;
      var tmp_1 = this.h1o_1;
      var tmp_2 = map.p1n_1;
      tmp_0.h1o_1 = tmp_1.n1o(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.f() | 0) - intersectionCounter.o1o_1 | 0;
      if (!(oldSize === newSize)) {
        this.l1o(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).d3.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).xa = function (key) {
    this.i1o_1 = null;
    var tmp = this;
    var tmp_0 = this.h1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.p1o(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().l1n_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.h1o_1 = tmp_1;
    return this.i1o_1;
  };
  protoOf(PersistentHashMapBuilder).q1o = function (key, value) {
    var oldSize = this.f();
    var tmp = this;
    var tmp_0 = this.h1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.r1o(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().l1n_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.h1o_1 = tmp_1;
    return !(oldSize === this.f());
  };
  protoOf(PersistentHashMapBuilder).y9 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().l1n_1;
    tmp.h1o_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.l1o(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s1o_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d = function () {
    return this.s1o_1.d();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.s1o_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).x9 = function () {
    return this.s1o_1.x9();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).d1p = function (key, newValue) {
    return this.s1o_1.d1p(key, newValue);
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.t1o_1[pathIndex].i1p(node.u1n_1, node.u1n_1.length, 0);
      while (!equals($this.t1o_1[pathIndex].e1p(), key)) {
        $this.t1o_1[pathIndex].j1p();
      }
      $this.u1o_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.m1p(keyPositionMask)) {
      var keyIndex = node.k1p(keyPositionMask);
      $this.t1o_1[pathIndex].i1p(node.u1n_1, imul(get_ENTRY_SIZE(), node.l1p()), keyIndex);
      $this.u1o_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.n1p(keyPositionMask);
    var targetNode = node.o1p(nodeIndex);
    $this.t1o_1[pathIndex].i1p(node.u1n_1, imul(get_ENTRY_SIZE(), node.l1p()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.b1p_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.z1o_1.j1o_1 === $this.c1p_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.h1o_1, path);
    this.z1o_1 = builder;
    this.a1p_1 = null;
    this.b1p_1 = false;
    this.c1p_1 = this.z1o_1.j1o_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e = function () {
    checkForComodification_0(this);
    this.a1p_1 = this.e1p();
    this.b1p_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).x9 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.e1p();
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.z1o_1;
      var tmp1_remove = this.a1p_1;
      (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).xa(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.z1o_1.h1o_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.z1o_1;
      var tmp3_remove = this.a1p_1;
      (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).xa(tmp3_remove);
    }
    this.a1p_1 = null;
    this.b1p_1 = false;
    this.c1p_1 = this.z1o_1.j1o_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).d1p = function (key, newValue) {
    if (!this.z1o_1.d2(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.e1p();
      // Inline function 'kotlin.collections.set' call
      this.z1o_1.l3(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.z1o_1.h1o_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      this.z1o_1.l3(key, newValue);
    }
    this.c1p_1 = this.z1o_1.j1o_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.s1p_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e = function () {
    assert(this.t1p());
    this.h1p_1 = this.h1p_1 + 2 | 0;
    var tmp = this.f1p_1[this.h1p_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.f1p_1[this.h1p_1 - 1 | 0];
    return new MutableMapEntry(this.s1p_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.a1q_1 = parentIterator;
    this.b1q_1 = value;
  }
  protoOf(MutableMapEntry).w1 = function () {
    return this.b1q_1;
  };
  protoOf(MutableMapEntry).sa = function (newValue) {
    var result = this.b1q_1;
    this.b1q_1 = newValue;
    this.a1q_1.d1p(this.t1(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.e1q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).kb = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.kb((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).y9 = function () {
    this.e1q_1.y9();
  };
  protoOf(PersistentHashMapBuilderEntries).c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.e1q_1);
  };
  protoOf(PersistentHashMapBuilderEntries).ua = function (element) {
    return this.e1q_1.q1o(element.t1(), element.w1());
  };
  protoOf(PersistentHashMapBuilderEntries).f = function () {
    return this.e1q_1.f();
  };
  protoOf(PersistentHashMapBuilderEntries).ta = function (element) {
    var tmp0_safe_receiver = this.e1q_1.h2(element.t1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.w1());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.w1() == null ? this.e1q_1.d2(element.t1()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.f1q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).wa = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.wa((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).y9 = function () {
    this.f1q_1.y9();
  };
  protoOf(PersistentHashMapBuilderKeys).c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.f1q_1);
  };
  protoOf(PersistentHashMapBuilderKeys).xa = function (element) {
    if (this.f1q_1.d2(element)) {
      this.f1q_1.xa(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).v9 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.xa((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f = function () {
    return this.f1q_1.f();
  };
  protoOf(PersistentHashMapBuilderKeys).a2 = function (element) {
    return this.f1q_1.d2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.a2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.g1q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).f = function () {
    return this.g1q_1.f();
  };
  protoOf(PersistentHashMapBuilderValues).ab = function (element) {
    return this.g1q_1.f2(element);
  };
  protoOf(PersistentHashMapBuilderValues).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.ab((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).za = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a = function (element) {
    return this.za((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).c = function () {
    return new PersistentHashMapBuilderValuesIterator(this.g1q_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).m = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.ta(element);
  };
  protoOf(AbstractMapBuilderEntries).v9 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.ua(element);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.t1o_1[pathIndex].t1p()) {
      return pathIndex;
    }
    if ($this.t1o_1[pathIndex].v1p()) {
      var node = $this.t1o_1[pathIndex].w1p();
      if (pathIndex === 6) {
        $this.t1o_1[pathIndex + 1 | 0].u1p(node.u1n_1, node.u1n_1.length);
      } else {
        $this.t1o_1[pathIndex + 1 | 0].u1p(node.u1n_1, imul(get_ENTRY_SIZE(), node.l1p()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.t1o_1[$this.u1o_1].t1p()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.u1o_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.t1o_1[i].v1p() : false) {
          $this.t1o_1[i].x1p();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.u1o_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.t1o_1[i - 1 | 0].x1p();
        }
        $this.t1o_1[i].u1p(Companion_getInstance_8().l1n_1.u1n_1, 0);
      }
       while (0 <= inductionVariable);
    $this.v1o_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.t1o_1 = path;
    this.u1o_1 = 0;
    this.v1o_1 = true;
    this.t1o_1[0].u1p(node.u1n_1, imul(get_ENTRY_SIZE(), node.l1p()));
    this.u1o_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).e1p = function () {
    checkHasNext(this);
    return this.t1o_1[this.u1o_1].e1p();
  };
  protoOf(PersistentHashMapBaseIterator).d = function () {
    return this.v1o_1;
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    checkHasNext(this);
    var result = this.t1o_1[this.u1o_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.f1p_1 = Companion_getInstance_8().l1n_1.u1n_1;
    this.g1p_1 = 0;
    this.h1p_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).i1p = function (buffer, dataSize, index) {
    this.f1p_1 = buffer;
    this.g1p_1 = dataSize;
    this.h1p_1 = index;
  };
  protoOf(TrieNodeBaseIterator).u1p = function (buffer, dataSize) {
    this.i1p(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).t1p = function () {
    return this.h1p_1 < this.g1p_1;
  };
  protoOf(TrieNodeBaseIterator).e1p = function () {
    assert(this.t1p());
    var tmp = this.f1p_1[this.h1p_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).j1p = function () {
    assert(this.t1p());
    this.h1p_1 = this.h1p_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).v1p = function () {
    assert(this.h1p_1 >= this.g1p_1);
    return this.h1p_1 < this.f1p_1.length;
  };
  protoOf(TrieNodeBaseIterator).w1p = function () {
    assert(this.v1p());
    var tmp = this.f1p_1[this.h1p_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).x1p = function () {
    assert(this.v1p());
    this.h1p_1 = this.h1p_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d = function () {
    return this.t1p();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e = function () {
    assert(this.t1p());
    this.h1p_1 = this.h1p_1 + 2 | 0;
    var tmp = this.f1p_1[this.h1p_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e = function () {
    assert(this.t1p());
    this.h1p_1 = this.h1p_1 + 2 | 0;
    var tmp = this.f1p_1[this.h1p_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e = function () {
    assert(this.t1p());
    this.h1p_1 = this.h1p_1 + 2 | 0;
    var tmp = this.f1p_1[this.h1p_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.f1p_1[this.h1p_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.c1q_1 = key;
    this.d1q_1 = value;
  }
  protoOf(MapEntry).t1 = function () {
    return this.c1q_1;
  };
  protoOf(MapEntry).w1 = function () {
    return this.d1q_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.w1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.t1(), this.t1()) ? equals(tmp0_safe_receiver.w1(), this.w1()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.t1()) + '=' + toString_0(this.w1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.q1q_1 = map;
  }
  protoOf(PersistentHashMapKeys).f = function () {
    return this.q1q_1.f();
  };
  protoOf(PersistentHashMapKeys).a2 = function (element) {
    return this.q1q_1.d2(element);
  };
  protoOf(PersistentHashMapKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.a2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).c = function () {
    return new PersistentHashMapKeysIterator(this.q1q_1.p1n_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.r1q_1 = map;
  }
  protoOf(PersistentHashMapEntries).f = function () {
    return this.r1q_1.f();
  };
  protoOf(PersistentHashMapEntries).s1q = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.r1q_1.h2(element.t1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.w1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.w1() == null ? this.r1q_1.d2(element.t1()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.s1q((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).c = function () {
    return new PersistentHashMapEntriesIterator(this.r1q_1.p1n_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.y1n_1 = node;
    this.z1n_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.s1n_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.u1n_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.u1n_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.k1p(positionMask);
    var newBuffer = insertEntryAtIndex($this.u1n_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.r1n_1 | positionMask, $this.s1n_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.k1p(positionMask);
    if ($this.t1n_1 === owner) {
      $this.u1n_1 = insertEntryAtIndex($this.u1n_1, keyIndex, key, value);
      $this.r1n_1 = $this.r1n_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.u1n_1, keyIndex, key, value);
    return new TrieNode($this.r1n_1 | positionMask, $this.s1n_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.u1n_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.r1n_1, $this.s1n_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.t1n_1 === mutator.g1o_1) {
      $this.u1n_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.j1o_1 = mutator.j1o_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.u1n_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.r1n_1, $this.s1n_1, newBuffer, mutator.g1o_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.u1n_1;
    if (newNodeBuffer.length === 2 ? newNode.s1n_1 === 0 : false) {
      if ($this.u1n_1.length === 1) {
        newNode.r1n_1 = $this.s1n_1;
        return newNode;
      }
      var keyIndex = $this.k1p(positionMask);
      var newBuffer = replaceNodeWithEntry($this.u1n_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.r1n_1 ^ positionMask, $this.s1n_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.u1n_1, $this.u1n_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.r1n_1, $this.s1n_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.u1n_1.length === 1 ? newNode.u1n_1.length === 2 : false) ? newNode.s1n_1 === 0 : false) {
      newNode.r1n_1 = $this.s1n_1;
      return newNode;
    }
    if ($this.t1n_1 === owner) {
      $this.u1n_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.u1n_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.r1n_1, $this.s1n_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.u1n_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.u1n_1, nodeIndex);
    return TrieNode_init_$Create$($this.r1n_1, $this.s1n_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.u1n_1.length === 1)
      return null;
    if ($this.t1n_1 === owner) {
      $this.u1n_1 = removeNodeAtIndex_0($this.u1n_1, nodeIndex);
      $this.s1n_1 = $this.s1n_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.u1n_1, nodeIndex);
    return new TrieNode($this.r1n_1, $this.s1n_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.n1p(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.u1n_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.r1n_1 ^ positionMask, $this.s1n_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.t1n_1 === owner) {
      $this.u1n_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.r1n_1 = $this.r1n_1 ^ positionMask;
      $this.s1n_1 = $this.s1n_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.r1n_1 ^ positionMask, $this.s1n_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.u1n_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.u1n_1, keyIndex);
    return TrieNode_init_$Create$($this.r1n_1 ^ positionMask, $this.s1n_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.f();
    mutator.l1o(tmp1 - 1 | 0);
    mutator.i1o_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.u1n_1.length === 2)
      return null;
    if ($this.t1n_1 === mutator.g1o_1) {
      $this.u1n_1 = removeEntryAtIndex_0($this.u1n_1, keyIndex);
      $this.r1n_1 = $this.r1n_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.u1n_1, keyIndex);
    return new TrieNode($this.r1n_1 ^ positionMask, $this.s1n_1, newBuffer, mutator.g1o_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.u1n_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.u1n_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.f();
    mutator.l1o(tmp1 - 1 | 0);
    mutator.i1o_1 = valueAtKeyIndex($this, i);
    if ($this.u1n_1.length === 2)
      return null;
    if ($this.t1n_1 === mutator.g1o_1) {
      $this.u1n_1 = removeEntryAtIndex_0($this.u1n_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.u1n_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.g1o_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.u1n_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.u1n_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.u1n_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.i1o_1 = valueAtKeyIndex($this, i);
          if ($this.t1n_1 === mutator.g1o_1) {
            $this.u1n_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.j1o_1 = mutator.j1o_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.u1n_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.g1o_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.f();
    mutator.l1o(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.u1n_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.g1o_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.s1n_1 === 0);
    assert($this.r1n_1 === 0);
    assert(otherNode.s1n_1 === 0);
    assert(otherNode.r1n_1 === 0);
    var tempBuffer = copyOf_0($this.u1n_1, $this.u1n_1.length + otherNode.u1n_1.length | 0);
    var i = $this.u1n_1.length;
    var progression = step(until(0, otherNode.u1n_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.u1n_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.u1n_1[j];
          tempBuffer[i + 1 | 0] = otherNode.u1n_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.o1o_1 = intersectionCounter.o1o_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.u1n_1.length ? $this : newSize === otherNode.u1n_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.o1p($this.n1p(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.o1p(otherNode.n1p(positionMask));
        tmp_0 = targetNode.n1o(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.m1p(positionMask)) {
        var keyIndex = otherNode.k1p(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.f();
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.m1o(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.f() === oldSize) {
          intersectionCounter.o1o_1 = intersectionCounter.o1o_1 + 1 | 0;
        }
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.o1p(otherNode.n1p(positionMask));
      var tmp_1;
      if ($this.m1p(positionMask)) {
        var keyIndex_0 = $this.k1p(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.v1n(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.o1o_1 = intersectionCounter.o1o_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.m1o(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.k1p(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.k1p(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.g1o_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.s1n_1 === 0)
      return $this.u1n_1.length / 2 | 0;
    var numValues = countOneBits($this.r1n_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.u1n_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.o1p(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.s1n_1 === otherNode.s1n_1))
      return false;
    if (!($this.r1n_1 === otherNode.r1n_1))
      return false;
    var inductionVariable = 0;
    var last = $this.u1n_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.u1n_1[i] === otherNode.u1n_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.t1n_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.l1n_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.r1n_1 = dataMap;
    this.s1n_1 = nodeMap;
    this.t1n_1 = ownedBy;
    this.u1n_1 = buffer;
  }
  protoOf(TrieNode).l1p = function () {
    return countOneBits(this.r1n_1);
  };
  protoOf(TrieNode).m1p = function (positionMask) {
    return !((this.r1n_1 & positionMask) === 0);
  };
  protoOf(TrieNode).k1p = function (positionMask) {
    return imul(2, countOneBits(this.r1n_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).n1p = function (positionMask) {
    return (this.u1n_1.length - 1 | 0) - countOneBits(this.s1n_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).o1p = function (nodeIndex) {
    var tmp = this.u1n_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).v1n = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.k1p(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1p(this.n1p(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.v1n(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).w1n = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1p(this.n1p(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.w1n(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).n1o = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.t1q(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.g1o_1);
    }
    var newNodeMap = this.s1n_1 | otherNode.s1n_1;
    var newDataMap = (this.r1n_1 ^ otherNode.r1n_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.r1n_1 & otherNode.r1n_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.k1p(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.k1p(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.t1n_1, mutator.g1o_1) ? this.r1n_1 === newDataMap : false) ? this.s1n_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5_anonymous = index_0;
      var newNodeIndex = (mutableNode.u1n_1.length - 1 | 0) - tmp5_anonymous | 0;
      mutableNode.u1n_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7_anonymous = index_1;
      var newKeyIndex = imul(tmp7_anonymous, 2);
      if (!otherNode.m1p(bit_1)) {
        var oldKeyIndex = this.k1p(bit_1);
        mutableNode.u1n_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.u1n_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.k1p(bit_1);
        mutableNode.u1n_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.u1n_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.m1p(bit_1)) {
          intersectionCounter.o1o_1 = intersectionCounter.o1o_1 + 1 | 0;
        }
      }
      index_1 = index_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).x1n = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1p(keyPositionMask);
      var targetNode = this.o1p(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.x1n(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0_anonymous = putResult.y1n_1;
      tmp_2.y1n_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0_anonymous);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).m1o = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.i1o_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.f();
      mutator.l1o(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.g1o_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1p(keyPositionMask);
      var targetNode = this.o1p(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.m1o(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.g1o_1);
    }
    var tmp3 = mutator.f();
    mutator.l1o(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.g1o_1);
  };
  protoOf(TrieNode).a1o = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1p(keyPositionMask);
      var targetNode = this.o1p(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.a1o(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).p1o = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1p(keyPositionMask);
      var targetNode = this.o1p(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.p1o(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.g1o_1);
    }
    return this;
  };
  protoOf(TrieNode).r1o = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1p(keyPositionMask)) {
      var keyIndex = this.k1p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1p(keyPositionMask);
      var targetNode = this.o1p(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.r1o(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.g1o_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.s1l_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_7().m1n());
  }
  protoOf(Companion_7).t1l = function () {
    return this.s1l_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.u1q_1 = firstElement;
    this.v1q_1 = lastElement;
    this.w1q_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).f = function () {
    return this.w1q_1.f();
  };
  protoOf(PersistentOrderedSet).m = function (element) {
    return this.w1q_1.d2(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.w1q_1.d2(element)) {
      return this;
    }
    if (this.k()) {
      var newMap = this.w1q_1.l3(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.v1q_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.w1q_1.h2(lastElement));
    var newMap_0 = this.w1q_1.l3(lastElement, lastLinks.z1q(element)).l3(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.u1q_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v9 = function (element) {
    var tmp0_elvis_lhs = this.w1q_1.h2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.w1q_1.xa(element);
    if (links.a1r()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.x1q_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).h2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.x1q_1;
      newMap = tmp_0.l3((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.z1q(links.y1q_1));
    }
    if (links.c1r()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.y1q_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).h2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.y1q_1;
      newMap = tmp_2.l3((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.b1r(links.x1q_1));
    }
    var newFirstElement = !links.a1r() ? links.y1q_1 : this.u1q_1;
    var newLastElement = !links.c1r() ? links.x1q_1 : this.v1q_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).c = function () {
    return new PersistentOrderedSetIterator(this.u1q_1, this.w1q_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.x1q_1 = previous;
    this.y1q_1 = next;
  }
  protoOf(Links).z1q = function (newNext) {
    return new Links(this.x1q_1, newNext);
  };
  protoOf(Links).b1r = function (newPrevious) {
    return new Links(newPrevious, this.y1q_1);
  };
  protoOf(Links).c1r = function () {
    return !(this.y1q_1 === EndOfChain_getInstance());
  };
  protoOf(Links).a1r = function () {
    return !(this.x1q_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.d1r_1 = nextElement;
    this.e1r_1 = map;
    this.f1r_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d = function () {
    return this.f1r_1 < this.e1r_1.f();
  };
  protoOf(PersistentOrderedSetIterator).e = function () {
    checkHasNext_0(this);
    var tmp = this.d1r_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    this.f1r_1 = this.f1r_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.e1r_1.h2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.d1r_1 = tmp_1.y1q_1;
    return result;
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  protoOf(ListImplementation).l1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).h1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.o1o_1 = count;
  }
  protoOf(DeltaCounter).t1q = function (that) {
    this.o1o_1 = this.o1o_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.o1o_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.o1o_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.o1o_1 === tmp0_other_with_cast.o1o_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.l1r(block);
    return tmp0_apply;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.t1b() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.by_1, other.by_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.ny(key);
    var slot = composer.ez();
    var tmp;
    if (slot === Companion_getInstance_1().hy_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.fz(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.l1r(block);
    composer.oy();
    return result;
  }
  function illegalDecoyCallException(fName) {
    throw IllegalStateException_init_$Create$('Function ' + fName + ' should have been replaced by compiler.');
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.w1r_1 = map;
    this.x1r_1 = 8;
  }
  protoOf(Builder).db = function () {
    var tmp = this;
    var tmp_0;
    if (this.h1o_1 === this.w1r_1.p1n_1) {
      tmp_0 = this.w1r_1;
    } else {
      this.g1o_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.h1o_1, this.f());
    }
    tmp.w1r_1 = tmp_0;
    return this.w1r_1;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().l1n_1;
    tmp.y1r_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).u1 = function () {
    return protoOf(PersistentHashMap).u1.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).x13 = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().y1r_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.i1l_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.j1l_1[0].equals(key) ? 0 : $this.j1l_1[0].s(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.j1l_1[mid];
      var comparison = midVal.t5(key);
      if (comparison.s(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.s(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.i1l_1 = size;
    this.j1l_1 = keys;
    this.k1l_1 = values;
  }
  protoOf(ThreadMap).l1l = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.k1l_1[index] : null;
  };
  protoOf(ThreadMap).m1l = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.k1l_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).n1l = function (key, value) {
    var size = this.i1l_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.k1l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.j1l_1[source];
        var oldValue = this.k1l_1[source];
        if (oldKey.s(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.j1l_1[source];
          var oldValue_0 = this.k1l_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.l(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.o5(element.n5_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.l(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    return tmp0_also;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.d1s_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).ql = function () {
    return this.d1s_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.e1s_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).ql = function () {
    return this.e1s_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().v9($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().v9($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).uv = function () {
    return currentSnapshot();
  };
  protoOf(Companion_9).x1h = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1s(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_9).x1j = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().a(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_9).g1s = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().a(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_9).y1g = function () {
    return currentSnapshot().y1g();
  };
  protoOf(Companion_9).x1g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().bp().h1s();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r16()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_11();
    this.b17_1 = invalid;
    this.c17_1 = id;
    this.d17_1 = false;
    this.e17_1 = !(id === 0) ? trackPinning(id, this.i1s()) : -1;
    this.f17_1 = 8;
  }
  protoOf(Snapshot).j1s = function (_set____db54di) {
    this.b17_1 = _set____db54di;
  };
  protoOf(Snapshot).i1s = function () {
    return this.b17_1;
  };
  protoOf(Snapshot).k1s = function (_set____db54di) {
    this.c17_1 = _set____db54di;
  };
  protoOf(Snapshot).g17 = function () {
    return this.c17_1;
  };
  protoOf(Snapshot).l1s = function (value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Updating write count is not supported for this snapshot');
  };
  protoOf(Snapshot).m1s = function () {
    return 0;
  };
  protoOf(Snapshot).ql = function () {
    this.d17_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1s();
  };
  protoOf(Snapshot).y1h = function () {
    var previous = get_threadSnapshot().bp();
    get_threadSnapshot().a1e(this);
    return previous;
  };
  protoOf(Snapshot).z1h = function (snapshot) {
    get_threadSnapshot().a1e(snapshot);
  };
  protoOf(Snapshot).s1s = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1s();
    this.u1s();
  };
  protoOf(Snapshot).t1s = function () {
    set_openSnapshots(get_openSnapshots().z1s(this.g17()));
  };
  protoOf(Snapshot).u1s = function () {
    this.o1s();
  };
  protoOf(Snapshot).a1t = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.d17_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).o1s = function () {
    if (this.e17_1 >= 0) {
      releasePinningLocked(this.e17_1);
      this.e17_1 = -1;
    }
  };
  protoOf(Snapshot).b1t = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.e17_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.e17_1 = -1;
    return tmp0_also;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().k()) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).f1s = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).y1g = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).r1t = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).s1t = function (snapshot) {
    return this.r1t(snapshot);
  };
  protoOf(GlobalSnapshot).t1t = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).u1t = function (snapshot) {
    return this.t1t(snapshot);
  };
  protoOf(GlobalSnapshot).p1i = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).ql = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1s();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.c1u(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().i1u(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().j1u(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().bp();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().bp() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.n1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.n1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.e17_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.h1s();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.b1u(null);
      var id = $this.g17();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.o16_1;
      var inductionVariable = 0;
      var last = modified.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (isObject(tmp) ? tmp : THROW_CCE()).f1l();
          while (!(current == null)) {
            if (current.k1u_1 === id ? true : contains($this.k1i_1, current.k1u_1)) {
              current.k1u_1 = 0;
            }
            current = current.l1u_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.s1s();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.l1i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.l1i_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.n1u_1 = new Int32Array(0);
  }
  var Companion_instance_10;
  function Companion_getInstance_12() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.f1i_1 = readObserver;
    this.g1i_1 = writeObserver;
    this.h1i_1 = 0;
    this.i1i_1 = null;
    this.j1i_1 = null;
    this.k1i_1 = Companion_getInstance_13().o1u_1;
    this.l1i_1 = Companion_getInstance_12().n1u_1;
    this.m1i_1 = 1;
    this.n1i_1 = false;
    this.o1i_1 = 8;
  }
  protoOf(MutableSnapshot).p1s = function () {
    return this.f1i_1;
  };
  protoOf(MutableSnapshot).q1s = function () {
    return this.g1i_1;
  };
  protoOf(MutableSnapshot).f1s = function (readObserver, writeObserver) {
    this.a1t();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x1t(this.g17());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().p1u(newId));
    var currentInvalid = this.i1s();
    this.j1s(currentInvalid.p1u(newId));
    var tmp0_also = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.g17() + 1 | 0, newId), mergedReadObserver(readObserver, this.p1s()), mergedWriteObserver(writeObserver, this.q1s()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n1i_1 ? !this.d17_1 : false) {
      var previousId = this.g17();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.k1s(tmp0_0);
      set_openSnapshots(get_openSnapshots().p1u(this.g17()));
      this.j1s(addRange(this.i1s(), previousId + 1 | 0, this.g17()));
    }
    return tmp0_also;
  };
  protoOf(MutableSnapshot).p1i = function () {
    var modified = this.h1s();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().bp(), this, get_openSnapshots().z1s(get_currentGlobalSnapshot().bp().g17())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.n16_1 === 0) {
      this.t1s();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().bp();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.h1s();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.k())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().bp();
      var result = this.v1t(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().z1s(previousGlobalSnapshot_0.g17()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.t1s();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.h1s();
      this.b1u(null);
      previousGlobalSnapshot_0.b1u(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_getInstance();
    }
    this.n1i_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_isNullOrEmpty == null ? true : tmp0_isNullOrEmpty.k())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp1_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_fastForEach.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_fastForEach.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.k())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp2_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp2_fastForEach.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp2_fastForEach.l(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.u1s();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.o16_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.n16_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.o16_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.n16_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var tmp1_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(tmp1_anonymous);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.j1i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.f() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.l(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.j1i_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).n1s = function () {
    return false;
  };
  protoOf(MutableSnapshot).ql = function () {
    if (!this.d17_1) {
      protoOf(Snapshot).ql.call(this);
      this.s1t(this);
    }
  };
  protoOf(MutableSnapshot).u1t = function (snapshot) {
    this.m1i_1 = this.m1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).s1t = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m1i_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m1i_1 = this.m1i_1 - 1 | 0;
    if (this.m1i_1 === 0) {
      if (!this.n1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).y1g = function () {
    if (this.n1i_1 ? true : this.d17_1)
      return Unit_getInstance();
    this.w1t();
  };
  protoOf(MutableSnapshot).t1s = function () {
    set_openSnapshots(get_openSnapshots().z1s(this.g17()).q1u(this.k1i_1));
  };
  protoOf(MutableSnapshot).u1s = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).u1s.call(this);
  };
  protoOf(MutableSnapshot).v1t = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.i1s().p1u(this.g17()).r1u(this.k1i_1);
    var modified = ensureNotNull(this.h1s());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.o16_1;
    var inductionVariable = 0;
    var last = modified.n16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.f1l();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.g17(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.g17(), this.i1s());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.h2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = tmp0_anonymous.h1l(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp0_also;
                  tmp_4 = tmp0_also;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.a(to(tmp0_anonymous, current.c1l()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp1_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = tmp1_also;
                  tmp_5 = tmp1_also;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.a(tmp0_anonymous);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp2_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp2_also;
                  tmp_6 = tmp2_also;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.a(!equals(merged, previous) ? to(tmp0_anonymous, merged) : to(tmp0_anonymous, previous.c1l()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.w1t();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.f() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.j3();
          var stateRecord = item.k3();
          stateRecord.k1u_1 = this.g17();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.l1u_1 = state.f1l();
          state.g1l(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_getInstance();
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.l(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.r1l(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.j1i_1;
      this.j1i_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).w1t = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x1t(this.g17());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n1i_1 ? !this.d17_1 : false) {
      var previousId = this.g17();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.k1s(tmp0);
      set_openSnapshots(get_openSnapshots().p1u(this.g17()));
      this.j1s(addRange(this.i1s(), previousId + 1 | 0, this.g17()));
    }
    return Unit_getInstance();
  };
  protoOf(MutableSnapshot).x1t = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1i_1 = this.k1i_1.p1u(id);
  };
  protoOf(MutableSnapshot).y1t = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp0_plus = this.l1i_1;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.intArrayOf' call
      var tmp0_plus_0 = new Int32Array([id]);
      tmp.l1i_1 = primitiveArrayConcat([tmp0_plus, tmp0_plus_0]);
    }
  };
  protoOf(MutableSnapshot).z1t = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_getInstance();
    var pinned = this.l1i_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.l1i_1 = tmp_0;
  };
  protoOf(MutableSnapshot).a1u = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1i_1 = this.k1i_1.r1u(snapshots);
  };
  protoOf(MutableSnapshot).r1s = function (state) {
    var tmp0_elvis_lhs = this.h1s();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.b1u(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.q17(state);
  };
  protoOf(MutableSnapshot).l1s = function (_set____db54di) {
    this.h1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).m1s = function () {
    return this.h1i_1;
  };
  protoOf(MutableSnapshot).b1u = function (_set____db54di) {
    this.i1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).h1s = function () {
    return this.i1i_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.t1u_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.v1u_1 = snapshot;
    this.w1u_1 = 8;
  }
  function SnapshotApplyResult() {
    this.x1u_1 = 0;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().bp();
    modified = previousGlobalSnapshot.h1s();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().i1u(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.f() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().i1u(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.o16_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.n16_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var tmp0_anonymous = isObject(tmp_3) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_getInstance();
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.k1u_1 = currentSnapshot().g17();
    this.l1u_1 = null;
    this.m1u_1 = 8;
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.p1v_1) {
      $this.p1v_1 = true;
      $this.o1v_1.s1t($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.o1v_1 = parent;
    this.p1v_1 = false;
    this.o1v_1.u1t(this);
  }
  protoOf(NestedMutableSnapshot).ql = function () {
    if (!this.d17_1) {
      protoOf(MutableSnapshot).ql.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).p1i = function () {
    if (this.o1v_1.n1i_1 ? true : this.o1v_1.d17_1)
      return new Failure(this);
    var modified = this.h1s();
    var id = this.g17();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.o1v_1, this, this.o1v_1.i1s()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.n16_1 === 0) {
      this.s1s();
    } else {
      var result = this.v1t(this.o1v_1.g17(), optimisticMerges_0, this.o1v_1.i1s());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.o1v_1.h1s();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.z1g(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.o1v_1.b1u(modified);
        this.b1u(null);
      }
    }
    if (this.o1v_1.g17() < id) {
      this.o1v_1.w1t();
    }
    this.o1v_1.j1s(this.o1v_1.i1s().z1s(id).q1u(this.k1i_1));
    this.o1v_1.x1t(id);
    this.o1v_1.y1t(this.b1t());
    this.o1v_1.a1u(this.k1i_1);
    this.o1v_1.z1t(this.l1i_1);
    this.n1i_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.p1u(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.h1s();
    var id = currentSnapshot.g17();
    if (modified == null)
      return null;
    var start = applyingSnapshot.i1s().p1u(applyingSnapshot.g17()).r1u(applyingSnapshot.k1i_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.o16_1;
    var inductionVariable = 0;
    var last = modified.n16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.f1l();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.g17(), applyingSnapshot.i1s());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = tmp0_anonymous.h1l(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var tmp0_also = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = tmp0_also;
                tmp_3 = tmp0_also;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.l3(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().l(snapshot.g17())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().z1s(previousGlobalSnapshot.g17()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().z1s(previousGlobalSnapshot.g17()));
    get_currentGlobalSnapshot().v1b(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.ql();
    set_openSnapshots(get_openSnapshots().p1u(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var tmp0_removeIf = get_extraStateObjects();
    var size = tmp0_removeIf.q1v_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = tmp0_removeIf.s1v_1[i];
        var value = entry == null ? null : entry.bp();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            tmp0_removeIf.s1v_1[currentUsed] = entry;
            tmp0_removeIf.r1v_1[currentUsed] = tmp0_removeIf.r1v_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_removeIf.s1v_1[i_0] = null;
        tmp0_removeIf.r1v_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      tmp0_removeIf.q1v_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().q17(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.k1u_1 < current.k1u_1 ? current : candidate;
      }
      current = current.l1u_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.f1l();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().u1v(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.k1u_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.k1u_1 < validRecord.k1u_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var tmp0_findYoungestOr = state.f1l();
                var current_0 = tmp0_findYoungestOr;
                var youngest = tmp0_findYoungestOr;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.k1u_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.k1u_1 < current_0.k1u_1)
                    youngest = current_0;
                  current_0 = current_0.l1u_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.k1u_1 = 0;
            recordToOverwrite.b1l(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.l1u_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.k1u_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.l(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_11().uv();
    var tmp0_safe_receiver = snapshot.p1s();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.g17(), snapshot.i1s());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_11().uv();
      var tmp_0 = state.f1l();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.g17(), syncSnapshot.i1s());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_11().uv();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.g17(), tmp0_let.i1s());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_11().uv();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp = readable(r, tmp0_let_0.g17(), tmp0_let_0.i1s());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.l1s(snapshot.m1s() + 1 | 0);
    var tmp1_safe_receiver = snapshot.q1s();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.n1s()) {
      snapshot.r1s(state);
    }
    var id = snapshot.g17();
    if (candidate.k1u_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.k1u_1 = id;
    snapshot.r1s(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.k1u_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.c1l();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.k1u_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.l1u_1 = state.f1l();
      state.g1l(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      var tmp_2 = tmp0_apply;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.f1l();
    var validRecord = null;
    var reuseLimit = get_pinningTable().u1v(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().o1u_1;
    while (!(current == null)) {
      var currentId = current.k1u_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.k1u_1 < validRecord.k1u_1 ? current : validRecord;
        }
      }
      current = current.l1u_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.n1s()) {
      snapshot.r1s(state);
    }
    var id = snapshot.g17();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.i1s());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.k1u_1 === snapshot.g17())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.r1s(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.b1l(_this__u8e3s4);
    newData.k1u_1 = snapshot.g17();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().p1u(result.g17()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_13().o1u_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_13().o1u_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().p1u(tmp0_also.g17()));
      currentGlobalSnapshot = new AtomicReference(tmp0_also);
      snapshotInitializer = get_currentGlobalSnapshot().bp();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.e1u_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.e1u_1;
    var half = $this.d1u_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.d1u_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.e1u_1;
    var index = $this.f1u_1;
    var handles = $this.g1u_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.e1u_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.e1u_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, tmp1_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.f1u_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, tmp3_copyInto);
    $this.e1u_1 = newValues;
    $this.f1u_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.g1u_1.length;
    if ($this.h1u_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.g1u_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, tmp1_copyInto);
      $this.g1u_1 = newHandles;
    }
    var handle = $this.h1u_1;
    $this.h1u_1 = $this.g1u_1[$this.h1u_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.g1u_1[handle] = $this.h1u_1;
    $this.h1u_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.d1u_1 = 0;
    this.e1u_1 = new Int32Array(16);
    this.f1u_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g1u_1 = tmp_1;
    this.h1u_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).u1v = function (default_0) {
    return this.d1u_1 > 0 ? this.e1u_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).i1u = function (value) {
    ensure(this, this.d1u_1 + 1 | 0);
    var tmp1 = this.d1u_1;
    this.d1u_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.e1u_1[i] = value;
    this.f1u_1[i] = handle;
    this.g1u_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).j1u = function (handle) {
    var i = this.g1u_1[handle];
    swap(this, i, this.d1u_1 - 1 | 0);
    this.d1u_1 = this.d1u_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_11() {
    Companion_instance_11 = this;
    this.o1u_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.d1w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).m1w = function ($this$sequence, $completion) {
    var tmp = this.n1w($this$sequence, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(SnapshotIdSet$iterator$slambda).ni = function (p1, $completion) {
    return this.m1w(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 15;
            this.f1w_1 = this.d1w_1.y1s_1;
            if (!(this.f1w_1 == null)) {
              this.g1w_1 = intArrayIterator(this.f1w_1);
              this.sh_1 = 1;
              continue $sm;
            } else {
              this.sh_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.g1w_1.d()) {
              this.sh_1 = 3;
              continue $sm;
            }

            this.h1w_1 = this.g1w_1.e();
            this.sh_1 = 2;
            suspendResult = this.e1w_1.o3(this.h1w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sh_1 = 1;
            continue $sm;
          case 3:
            this.sh_1 = 4;
            continue $sm;
          case 4:
            if (!this.d1w_1.w1s_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.i1w_1 = until(0, 64).c();
              this.sh_1 = 5;
              continue $sm;
            } else {
              this.sh_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.i1w_1.d()) {
              this.sh_1 = 8;
              continue $sm;
            }

            this.j1w_1 = this.i1w_1.e();
            if (!this.d1w_1.w1s_1.d8((new Long(1, 0)).u6(this.j1w_1)).equals(new Long(0, 0))) {
              this.sh_1 = 6;
              suspendResult = this.e1w_1.o3(this.j1w_1 + this.d1w_1.x1s_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sh_1 = 7;
              continue $sm;
            }

          case 6:
            this.sh_1 = 7;
            continue $sm;
          case 7:
            this.sh_1 = 5;
            continue $sm;
          case 8:
            this.sh_1 = 9;
            continue $sm;
          case 9:
            if (!this.d1w_1.v1s_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.k1w_1 = until(0, 64).c();
              this.sh_1 = 10;
              continue $sm;
            } else {
              this.sh_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.k1w_1.d()) {
              this.sh_1 = 13;
              continue $sm;
            }

            this.l1w_1 = this.k1w_1.e();
            if (!this.d1w_1.v1s_1.d8((new Long(1, 0)).u6(this.l1w_1)).equals(new Long(0, 0))) {
              this.sh_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.e1w_1.o3((this.l1w_1 + 64 | 0) + this.d1w_1.x1s_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sh_1 = 12;
              continue $sm;
            }

          case 11:
            this.sh_1 = 12;
            continue $sm;
          case 12:
            this.sh_1 = 10;
            continue $sm;
          case 13:
            this.sh_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 15) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).n1w = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.d1w_1, completion);
    i.e1w_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.m1w($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.v1s_1 = upperSet;
    this.w1s_1 = lowerSet;
    this.x1s_1 = lowerBound;
    this.y1s_1 = belowBound;
  }
  protoOf(SnapshotIdSet).l = function (bit) {
    var offset = bit - this.x1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).u6(offset).d8(this.w1s_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.u6(offset - 64 | 0).d8(this.v1s_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.y1s_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).p1u = function (bit) {
    var offset = bit - this.x1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).u6(offset);
      if (this.w1s_1.d8(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.v1s_1, this.w1s_1.ih(mask), this.x1s_1, this.y1s_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.u6(offset - 64 | 0);
        if (this.v1s_1.d8(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.v1s_1.ih(mask_0), this.w1s_1, this.x1s_1, this.y1s_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.l(bit)) {
            var newUpperSet = this.v1s_1;
            var newLowerSet = this.w1s_1;
            var newLowerBound = this.x1s_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_apply = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.y1s_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                  }
                  newBelowBound = tmp0_apply;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.d8((new Long(1, 0)).u6(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.y1s_1 : tmp1_elvis_lhs)).p1u(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.y1s_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.v1s_1, this.w1s_1, this.x1s_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, tmp2_copyInto, insertLocation, tmp3_copyInto);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.v1s_1, this.w1s_1, this.x1s_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).z1s = function (bit) {
    var offset = bit - this.x1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).u6(offset);
      if (!this.w1s_1.d8(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.v1s_1, this.w1s_1.d8(mask.hh()), this.x1s_1, this.y1s_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.u6(offset - 64 | 0);
        if (!this.v1s_1.d8(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.v1s_1.d8(mask_0.hh()), this.w1s_1, this.x1s_1, this.y1s_1);
        }
      } else {
        if (offset < 0) {
          var array = this.y1s_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.v1s_1, this.w1s_1, this.x1s_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, tmp0_copyInto, tmp1_copyInto);
              }
              return new SnapshotIdSet(this.v1s_1, this.w1s_1, this.x1s_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).q1u = function (bits) {
    if (bits === Companion_getInstance_13().o1u_1)
      return this;
    if (this === Companion_getInstance_13().o1u_1)
      return Companion_getInstance_13().o1u_1;
    var tmp;
    if (bits.x1s_1 === this.x1s_1 ? bits.y1s_1 === this.y1s_1 : false) {
      tmp = new SnapshotIdSet(this.v1s_1.d8(bits.v1s_1.hh()), this.w1s_1.d8(bits.w1s_1.hh()), this.x1s_1, this.y1s_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.z1s(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).r1u = function (bits) {
    if (bits === Companion_getInstance_13().o1u_1)
      return this;
    if (this === Companion_getInstance_13().o1u_1)
      return bits;
    var tmp;
    if (bits.x1s_1 === this.x1s_1 ? bits.y1s_1 === this.y1s_1 : false) {
      tmp = new SnapshotIdSet(this.v1s_1.ih(bits.v1s_1), this.w1s_1.ih(bits.w1s_1), this.x1s_1, this.y1s_1);
    } else {
      var tmp_0;
      if (this.y1s_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.p1u(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.p1u(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).c = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).c();
  };
  protoOf(SnapshotIdSet).c1u = function (default_0) {
    var belowBound = this.y1s_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.w1s_1.equals(new Long(0, 0)))
      return this.x1s_1 + lowestBitOf(this.w1s_1) | 0;
    if (!this.v1s_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.x1s_1 + 64 | 0) + lowestBitOf(this.v1s_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(tmp0_mapTo) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.d8(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.f6(32);
    }
    if (b.d8(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.f6(16);
    }
    if (b.d8(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.f6(8);
    }
    if (b.d8(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.f6(4);
    }
    if (!b.d8(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.d8(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.d8(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.d8(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.r1w_1 = list;
    this.s1w_1 = 0;
  }
  protoOf(StateListStateRecord).b1l = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.r1w_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).r1w_1;
    this.s1w_1 = value.s1w_1;
  };
  protoOf(StateListStateRecord).c1l = function () {
    return new StateListStateRecord(this.r1w_1);
  };
  function SnapshotStateList() {
    this.t1w_1 = new StateListStateRecord(persistentListOf());
    this.u1w_1 = 0;
  }
  protoOf(SnapshotStateList).f1l = function () {
    return this.t1w_1;
  };
  protoOf(SnapshotStateList).g1l = function (value) {
    value.l1u_1 = this.t1w_1;
    var tmp = this;
    tmp.t1w_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).v1w = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.t1w_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    return current(tmp0_withCurrent).s1w_1;
  };
  protoOf(SnapshotStateList).w1w = function () {
    var tmp = this.t1w_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).f = function () {
    return this.w1w().r1w_1.f();
  };
  protoOf(SnapshotStateList).r2 = function (element) {
    return this.w1w().r1w_1.m(element);
  };
  protoOf(SnapshotStateList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.r2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).s2 = function (elements) {
    return this.w1w().r1w_1.b1(elements);
  };
  protoOf(SnapshotStateList).b1 = function (elements) {
    return this.s2(elements);
  };
  protoOf(SnapshotStateList).l = function (index) {
    return this.w1w().r1w_1.l(index);
  };
  protoOf(SnapshotStateList).d5 = function (element) {
    return this.w1w().r1w_1.n(element);
  };
  protoOf(SnapshotStateList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.d5((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k = function () {
    return this.w1w().r1w_1.k();
  };
  protoOf(SnapshotStateList).c = function () {
    return this.y1l();
  };
  protoOf(SnapshotStateList).x1w = function (element) {
    return this.w1w().r1w_1.q1(element);
  };
  protoOf(SnapshotStateList).q1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.x1w((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).y1l = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).r1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).q17 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).a(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).a = function (element) {
    return this.q17((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).y1w = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).z1l(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_getInstance();
  };
  protoOf(SnapshotStateList).la = function (index, element) {
    return this.y1w(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).z1w = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).j(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).j = function (elements) {
    return this.z1w(elements);
  };
  protoOf(SnapshotStateList).y9 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.t1w_1;
    var tmp0_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_11().uv();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp0_anonymous = writableRecord(tmp0_writable, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    tmp0_anonymous.r1w_1 = persistentListOf();
    tmp0_anonymous.s1w_1 = tmp0_anonymous.s1w_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).r1l = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v9(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v9 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.r1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).m3 = function (index) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.l(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).m3(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also_0 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also_0) {
        result = true;
        break $l$loop_0;
      }
    }
    return tmp0_also;
  };
  protoOf(SnapshotStateList).a1x = function (index, element) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.l(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.t1w_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.s1w_1;
      oldList = current_0.r1w_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).u9(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.t1w_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().uv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.s1w_1 === currentModification) {
        tmp1_anonymous.r1w_1 = newList;
        tmp1_anonymous.s1w_1 = tmp1_anonymous.s1w_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also_0 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also_0) {
        result = true;
        break $l$loop_0;
      }
    }
    return tmp0_also;
  };
  protoOf(SnapshotStateList).u9 = function (index, element) {
    return this.a1x(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.b1x_1.v1w() === $this.d1x_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.b1x_1 = list;
    this.c1x_1 = offset - 1 | 0;
    this.d1x_1 = this.b1x_1.v1w();
  }
  protoOf(StateListIterator).i1 = function () {
    return this.c1x_1 >= 0;
  };
  protoOf(StateListIterator).j1 = function () {
    return this.c1x_1 + 1 | 0;
  };
  protoOf(StateListIterator).k1 = function () {
    validateModification(this);
    validateRange(this.c1x_1, this.b1x_1.f());
    // Inline function 'kotlin.also' call
    var tmp0_also = this.b1x_1.l(this.c1x_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.c1x_1 = this.c1x_1 - 1 | 0;
    return tmp0_also;
  };
  protoOf(StateListIterator).d = function () {
    return this.c1x_1 < (this.b1x_1.f() - 1 | 0);
  };
  protoOf(StateListIterator).e = function () {
    validateModification(this);
    var newIndex = this.c1x_1 + 1 | 0;
    validateRange(newIndex, this.b1x_1.f());
    // Inline function 'kotlin.also' call
    var tmp0_also = this.b1x_1.l(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.c1x_1 = newIndex;
    return tmp0_also;
  };
  protoOf(StateListIterator).x9 = function () {
    validateModification(this);
    this.b1x_1.m3(this.c1x_1);
    this.c1x_1 = this.c1x_1 - 1 | 0;
    this.d1x_1 = this.b1x_1.v1w();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$mgqpbl_8m20to() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.q1v_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.r1v_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.s1v_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bp();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.r1v_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.s1v_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bp();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.q1v_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.r1v_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.s1v_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.bp();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.q1v_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.q1v_1 = 0;
    this.r1v_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.s1v_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).q17 = function (value) {
    var index;
    var size = this.q1v_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.s1v_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.s1v_1;
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newValues, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = this.s1v_1;
      arrayCopy(tmp2_copyInto, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = this.r1v_1;
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp3_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, tmp4_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.r1v_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.s1v_1 = newValues;
      this.r1v_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.s1v_1;
      var tmp7_copyInto = this.s1v_1;
      var tmp8_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp6_copyInto, tmp7_copyInto, tmp8_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.r1v_1;
      var tmp10_copyInto = this.r1v_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp9_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp10_copyInto, tmp11_copyInto, insertIndex, size);
    }
    this.s1v_1[insertIndex] = new WeakReference(value);
    this.r1v_1[insertIndex] = hash;
    this.q1v_1 = this.q1v_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.z1a_1 = value;
    this.a1b_1 = 8;
  }
  protoOf(AtomicReference).bp = function () {
    return this.z1a_1;
  };
  protoOf(AtomicReference).v1b = function (value) {
    this.z1a_1 = value;
  };
  protoOf(AtomicReference).b1b = function (value) {
    var oldValue = this.z1a_1;
    this.z1a_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).i1c = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.z1a_1)) {
      this.z1a_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.y1u_1 = value;
  }
  protoOf(AtomicInt).i1u = function (amount) {
    this.y1u_1 = this.y1u_1 + amount | 0;
    return this.y1u_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.t3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1x_1 = _this__u8e3s4;
    this.n1x_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.n1x_1, safe));
            suspendResult = returnIfSuspended(safe.md(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).xw = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  protoOf(Trace).a17 = function (name) {
    return null;
  };
  protoOf(Trace).s17 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.h1r_1) {
      var scope = $this.j1r_1;
      if (!(scope == null)) {
        scope.v1c();
        $this.j1r_1 = null;
      }
      var scopes = $this.k1r_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.l(index);
            item.v1c();
          }
           while (inductionVariable < last);
        scopes.y9();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.h1r_1) {
      var scope = composer.my();
      if (!(scope == null)) {
        composer.kz(scope);
        var lastScope = $this.j1r_1;
        if (replacableWith(lastScope, scope)) {
          $this.j1r_1 = scope;
        } else {
          var lastScopes = $this.k1r_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.k1r_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.f();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.l(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.u9(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.s18(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.o1x($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.g1r_1 = key;
    this.h1r_1 = tracked;
    this.i1r_1 = null;
    this.j1r_1 = null;
    this.k1r_1 = null;
  }
  protoOf(ComposableLambdaImpl).l1r = function (block) {
    if (!equals(this.i1r_1, block)) {
      var oldBlockNull = this.i1r_1 == null;
      this.i1r_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).s18 = function (c, changed) {
    var c_0 = c.ty(this.g1r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.gz(this) ? differentBits(0) : sameBits(0));
    var tmp = this.i1r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.uy();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1d(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).o1x = function (p1, c, changed) {
    var c_0 = c.ty(this.g1r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.gz(this) ? differentBits(1) : sameBits(1));
    var tmp = this.i1r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.uy();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1d(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o13_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).l = function (key) {
    return this.o13_1.h2(key);
  };
  protoOf(IntMap).g16 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.o13_1.l3(key, value);
  };
  protoOf(IntMap).y9 = function () {
    this.o13_1.y9();
  };
  function WeakReference(reference) {
    this.t1v_1 = reference;
  }
  protoOf(WeakReference).bp = function () {
    return this.t1v_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).vv = onBeginChanges;
  protoOf(OffsetApplier).wv = onEndChanges;
  protoOf(AbstractApplier).vv = onBeginChanges;
  protoOf(AbstractApplier).wv = onEndChanges;
  protoOf(BroadcastFrameClock).t1 = get_key;
  protoOf(BroadcastFrameClock).n4 = get;
  protoOf(BroadcastFrameClock).t4 = fold;
  protoOf(BroadcastFrameClock).s4 = minusKey;
  protoOf(BroadcastFrameClock).u4 = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.z();
  }, VOID);
  protoOf(StructuralEqualityPolicy).v1k = merge;
  protoOf(SnapshotStateList).h1l = mergeRecords;
  protoOf(MonotonicClockImpl).t1 = get_key;
  protoOf(MonotonicClockImpl).n4 = get;
  protoOf(MonotonicClockImpl).t4 = fold;
  protoOf(MonotonicClockImpl).s4 = minusKey;
  protoOf(MonotonicClockImpl).u4 = plus;
  //endregion
  //region block: init
  movableContentKey = 126665345;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = illegalDecoyCallException;
  _.$_$.d = AbstractApplier;
  _.$_$.e = onBeginChanges;
  _.$_$.f = onEndChanges;
  _.$_$.g = CompositionLocalProvider$composable;
  _.$_$.h = CompositionScopedCoroutineScopeCanceller;
  _.$_$.i = ControlledComposition;
  _.$_$.j = get_DefaultMonotonicFrameClock;
  _.$_$.k = DisposableEffect$composable_1;
  _.$_$.l = DisposableEffect$composable_0;
  _.$_$.m = DisposableEffect$composable;
  _.$_$.n = LaunchedEffect$composable;
  _.$_$.o = ProduceStateScope;
  _.$_$.p = Recomposer;
  _.$_$.q = compositionLocalOf;
  _.$_$.r = createCompositionCoroutineScope;
  _.$_$.s = invalidApplier;
  _.$_$.t = isTraceInProgress;
  _.$_$.u = mutableStateListOf;
  _.$_$.v = mutableStateOf;
  _.$_$.w = produceState$composable;
  _.$_$.x = sourceInformationMarkerEnd;
  _.$_$.y = sourceInformationMarkerStart;
  _.$_$.z = sourceInformation;
  _.$_$.a1 = staticCompositionLocalOf;
  _.$_$.b1 = traceEventEnd;
  _.$_$.c1 = traceEventStart;
  _.$_$.d1 = updateChangedFlags;
  _.$_$.e1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.f1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.g1 = _Updater___init__impl__rbfxm8;
  _.$_$.h1 = Updater__set_impl_v7kwss;
  _.$_$.i1 = Companion_getInstance_11;
  _.$_$.j1 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
