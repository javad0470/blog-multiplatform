(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.da;
  var THROW_CCE = kotlin_kotlin.$_$.bd;
  var isObject = kotlin_kotlin.$_$.t9;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var plus = kotlin_kotlin.$_$.i8;
  var get = kotlin_kotlin.$_$.f8;
  var fold = kotlin_kotlin.$_$.e8;
  var minusKey = kotlin_kotlin.$_$.g8;
  var Continuation = kotlin_kotlin.$_$.d8;
  var classMeta = kotlin_kotlin.$_$.w8;
  var VOID = kotlin_kotlin.$_$.je;
  var setMetadataFor = kotlin_kotlin.$_$.ea;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s3;
  var Key_getInstance = kotlin_kotlin.$_$.r3;
  var equals = kotlin_kotlin.$_$.z8;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.w7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.x7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var isInterface = kotlin_kotlin.$_$.q9;
  var toString = kotlin_kotlin.$_$.he;
  var toString_0 = kotlin_kotlin.$_$.ia;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.ca;
  var hashCode = kotlin_kotlin.$_$.f9;
  var CoroutineImpl = kotlin_kotlin.$_$.j8;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.e2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var Companion_getInstance = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.sd;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.z7;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.y7;
  var get_0 = kotlin_kotlin.$_$.a8;
  var minusKey_0 = kotlin_kotlin.$_$.b8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.c8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Enum = kotlin_kotlin.$_$.sc;
  var startCoroutine = kotlin_kotlin.$_$.k8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.zd;
  var Long = kotlin_kotlin.$_$.xc;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var RuntimeException = kotlin_kotlin.$_$.ad;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.q8;
  var Error_0 = kotlin_kotlin.$_$.tc;
  var Error_init_$Init$ = kotlin_kotlin.$_$.g1;
  var Element = kotlin_kotlin.$_$.h8;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ge;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var CancellationException = kotlin_kotlin.$_$.u7;
  var ArrayList = kotlin_kotlin.$_$.r4;
  var SequenceScope = kotlin_kotlin.$_$.va;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var sequence = kotlin_kotlin.$_$.wa;
  var anyToString = kotlin_kotlin.$_$.n8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.nd;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var arrayIterator = kotlin_kotlin.$_$.o8;
  var fillArrayVal = kotlin_kotlin.$_$.a9;
  var arrayCopy = kotlin_kotlin.$_$.h5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var ensureNotNull = kotlin_kotlin.$_$.td;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var coerceIn = kotlin_kotlin.$_$.ma;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.ck(onCancelling, invokeImmediately, handler) : $super.ck.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.kl(cause) : $super.kl.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.wi(parentContext.n4(Key_getInstance_2()));
    }
    this.zi_1 = parentContext.u4(this);
  }
  protoOf(AbstractCoroutine).v3 = function () {
    return this.zi_1;
  };
  protoOf(AbstractCoroutine).aj = function () {
    return this.zi_1;
  };
  protoOf(AbstractCoroutine).bj = function () {
    return protoOf(JobSupport).bj.call(this);
  };
  protoOf(AbstractCoroutine).cj = function (value) {
  };
  protoOf(AbstractCoroutine).dj = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).ej = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).fj = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.dj(state.gj_1, state.ij());
    } else {
      this.cj((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).t3 = function (result) {
    var state = this.jj(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.kj(state);
  };
  protoOf(AbstractCoroutine).kj = function (state) {
    return this.lj(state);
  };
  protoOf(AbstractCoroutine).mj = function (exception) {
    handleCoroutineException(this.zi_1, exception);
  };
  protoOf(AbstractCoroutine).nj = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.zi_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nj.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nj.call(this);
  };
  protoOf(AbstractCoroutine).oj = function (start, receiver, block) {
    start.rj(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.sk() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.oj(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.v3();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.n4(Key_getInstance()), oldContext.n4(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.yk();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).qk = function (exception) {
    handleCoroutineException(this.zi_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.fl_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).xj = function () {
    startCoroutineCancellable_0(this.fl_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.xk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.xk_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.xk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.xk_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.xk_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).lj = function (state) {
    this.kj(state);
  };
  protoOf(DispatchedCoroutine).kj = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.jl_1), recoverResult(state, this.jl_1));
  };
  protoOf(DispatchedCoroutine).yk = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.uj());
    if (state instanceof CompletedExceptionally)
      throw state.gj_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.ml(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.ol_1 = handle;
  }
  protoOf(DisposeOnCancel).pl = function (cause) {
    return this.ol_1.ql();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.pl(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.ol_1 + ']';
  };
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.uj();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.em_1)) {
      var tmp_0 = $this.sl_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).dm();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.sl_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.fm(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.v3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ul_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ul_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ul_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ul_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.v3().n4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.dk(true, VOID, tmp$ret$1);
    $this.wl_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.sl_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gm($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.hm();
    $this.kl(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.vl_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp1_anonymous instanceof CancelledContinuation) {
            if (tmp1_anonymous.mm()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.im(onCancellation, tmp1_anonymous.gj_1);
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.hm();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.sl_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.tl_1 = this.sl_1.v3();
    this.ul_1 = atomic$int$1(0);
    this.vl_1 = atomic$ref$1(Active_getInstance());
    this.wl_1 = null;
  }
  protoOf(CancellableContinuationImpl).nm = function () {
    return this.sl_1;
  };
  protoOf(CancellableContinuationImpl).v3 = function () {
    return this.tl_1;
  };
  protoOf(CancellableContinuationImpl).uj = function () {
    return this.vl_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).vj = function () {
    var tmp = this.uj();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).om = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.vj()) {
      handle.ql();
      this.wl_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).pm = function () {
    return this.uj();
  };
  protoOf(CancellableContinuationImpl).qm = function (takenState, cause) {
    var tmp0_loop = this.vl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp1_anonymous instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!tmp1_anonymous.wm()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1_anonymous.xm(VOID, VOID, VOID, VOID, cause);
            if (this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
              tmp1_anonymous.ym(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, new CompletedContinuation(tmp1_anonymous, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).kl = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.vl_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1_anonymous instanceof CancelHandler);
        if (!this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1_anonymous instanceof CancelHandler ? tmp1_anonymous : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.zm(tmp0_safe_receiver, cause);
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.em_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).an = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.kl(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).zm = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.v3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).im = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.v3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).bn = function (parent) {
    return parent.yj();
  };
  protoOf(CancellableContinuationImpl).yk = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.wl_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.uj();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.gj_1, this);
    if (get_isCancellableMode(this.em_1)) {
      var job = this.v3().n4(Key_getInstance_2());
      if (!(job == null) ? !job.bj() : false) {
        var cause = job.yj();
        this.qm(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.cn(state);
  };
  protoOf(CancellableContinuationImpl).t3 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.em_1);
  };
  protoOf(CancellableContinuationImpl).ml = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.vl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous instanceof Active) {
        if (this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp1_anonymous instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1_anonymous);
        } else {
          if (tmp1_anonymous instanceof CompletedExceptionally) {
            if (!tmp1_anonymous.dn()) {
              multipleHandlersError(this, handler, tmp1_anonymous);
            }
            if (tmp1_anonymous instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1_anonymous instanceof CompletedExceptionally ? tmp1_anonymous : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gj_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp1_anonymous instanceof CompletedContinuation) {
              if (!(tmp1_anonymous.sm_1 == null)) {
                multipleHandlersError(this, handler, tmp1_anonymous);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1_anonymous.wm()) {
                callCancelHandler(this, handler, tmp1_anonymous.vm_1);
                return Unit_getInstance();
              }
              var update = tmp1_anonymous.xm(VOID, cancelHandler);
              if (this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1_anonymous, cancelHandler);
              if (this.vl_1.atomicfu$compareAndSet(tmp1_anonymous, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).hm = function () {
    var tmp0_elvis_lhs = this.wl_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.ql();
    this.wl_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).nl = function (_this__u8e3s4, value) {
    var tmp = this.sl_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.yl_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.em_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).cn = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.rm_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).en = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).en.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.sl_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nj() + '(' + toDebugString(this.sl_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nj = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.rm_1 = result;
    this.sm_1 = cancelHandler;
    this.tm_1 = onCancellation;
    this.um_1 = idempotentResume;
    this.vm_1 = cancelCause;
  }
  protoOf(CompletedContinuation).wm = function () {
    return !(this.vm_1 == null);
  };
  protoOf(CompletedContinuation).ym = function (cont, cause) {
    var tmp0_safe_receiver = this.sm_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.zm(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.tm_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.im(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).hn = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).xm = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.rm_1 : result;
    cancelHandler = cancelHandler === VOID ? this.sm_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.tm_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.um_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.vm_1 : cancelCause;
    return $super === VOID ? this.hn(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.hn.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.rm_1) + ', cancelHandler=' + this.sm_1 + ', onCancellation=' + this.tm_1 + ', idempotentResume=' + toString(this.um_1) + ', cancelCause=' + this.vm_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.rm_1 == null ? 0 : hashCode(this.rm_1);
    result = imul(result, 31) + (this.sm_1 == null ? 0 : hashCode(this.sm_1)) | 0;
    result = imul(result, 31) + (this.tm_1 == null ? 0 : hashCode(this.tm_1)) | 0;
    result = imul(result, 31) + (this.um_1 == null ? 0 : hashCode(this.um_1)) | 0;
    result = imul(result, 31) + (this.vm_1 == null ? 0 : hashCode(this.vm_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.rm_1, tmp0_other_with_cast.rm_1))
      return false;
    if (!equals(this.sm_1, tmp0_other_with_cast.sm_1))
      return false;
    if (!equals(this.tm_1, tmp0_other_with_cast.tm_1))
      return false;
    if (!equals(this.um_1, tmp0_other_with_cast.um_1))
      return false;
    if (!equals(this.vm_1, tmp0_other_with_cast.vm_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.in_1 = handler;
  }
  protoOf(InvokeOnCancel).pl = function (cause) {
    this.in_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.pl(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.in_1) + '@' + get_hexAddress(this) + ']';
  };
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rn_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$0).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = this.rn_1.sn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.wi(parent);
  }
  protoOf(CompletableDeferredImpl).fk = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).vn = function ($completion) {
    var tmp = new $awaitCOROUTINE$0(this, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(CompletableDeferredImpl).wn = function (value) {
    return this.xn(value);
  };
  protoOf(CompletableDeferredImpl).yn = function (exception) {
    return this.xn(new CompletedExceptionally(exception));
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.gj_1 = cause;
    this.hj_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).ij = function () {
    return this.hj_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).dn = function () {
    return this.hj_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.gj_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.lm_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).mm = function () {
    return this.lm_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0_anonymous, onCancellation) : tmp0_anonymous;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.zn_1 = result;
    this.ao_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.zn_1) + ', onCancellation=' + this.ao_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.zn_1 == null ? 0 : hashCode(this.zn_1);
    result = imul(result, 31) + hashCode(this.ao_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.zn_1, tmp0_other_with_cast.zn_1))
      return false;
    if (!equals(this.ao_1, tmp0_other_with_cast.ao_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.gj_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(tmp3_success);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).co = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).l4 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).m4 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.eo();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.n4(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.fo(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.n4(Key_getInstance_2()) == null) ? context : context.u4(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.v3(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.aj().n4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.gk(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).rj = function (block, receiver, completion) {
    var tmp;
    switch (this.a5_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).sk = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.s(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.om();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.s(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.v3()).go(timeMillis, cancellable);
    }
    return cancellable.yk();
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.n4(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.io_1 = new Long(0, 0);
    this.jo_1 = false;
    this.ko_1 = null;
  }
  protoOf(EventLoop).lo = function () {
    var tmp0_elvis_lhs = this.ko_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.po();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.fn();
    return true;
  };
  protoOf(EventLoop).qo = function (task) {
    var tmp0_elvis_lhs = this.ko_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.ko_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ro(task);
  };
  protoOf(EventLoop).so = function () {
    return this.io_1.s(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).to = function () {
    var tmp0_safe_receiver = this.ko_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uo();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).vo = function (unconfined) {
    this.io_1 = this.io_1.s5(delta(this, unconfined));
    if (!unconfined)
      this.jo_1 = true;
  };
  protoOf(EventLoop).wo = function (unconfined) {
    this.io_1 = this.io_1.t5(delta(this, unconfined));
    if (this.io_1.s(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.jo_1) {
      this.xo();
    }
  };
  protoOf(EventLoop).xo = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.yo_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).zo = function () {
    var tmp0_elvis_lhs = this.yo_1.bp();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().yo_1.cp(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).ql = function () {
  };
  protoOf(NonDisposableHandle).jk = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.n4(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.bj())
      throw _this__u8e3s4.yj();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.n4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.gk(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.dp_1 = isActive;
  }
  protoOf(Empty).bj = function () {
    return this.dp_1;
  };
  protoOf(Empty).ep = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.dp_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).bj = function () {
    return true;
  };
  protoOf(NodeList).ep = function () {
    return this;
  };
  protoOf(NodeList).ip = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.p6('List{');
    tmp0_apply.p6(state);
    tmp0_apply.p6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.jp_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0_anonymous = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.p6(', ');
        }
        tmp0_apply.o6(tmp0_anonymous);
      }
      cur = cur.jp_1;
    }
    tmp0_apply.p6(']');
    return tmp0_apply.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.ip('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).sp = function () {
    var tmp = this.rp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).bj = function () {
    return true;
  };
  protoOf(JobNode).ep = function () {
    return null;
  };
  protoOf(JobNode).ql = function () {
    return this.sp().ek(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.sp()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.yp_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.yp_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj_1;
    var wasCancelling = false;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.zp();
    var exceptions = state.aq(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.qk(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).dn();
      }
    }
    if (!wasCancelling) {
      $this.nk(finalException);
    }
    $this.fj(finalState);
    var casSuccess = $this.ui_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.k()) {
      if (state.zp()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.ej() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.l(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.ui_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.nk(null);
    $this.fj(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.tj();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.ql();
      $this.sj(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gj_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.mj(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.ep();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.nk(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.jp_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.jp_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.mj(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.ok())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.tj();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.jk(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.jp_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.jp_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.mj(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.dp_1)
        return 0;
      if (!$this.ui_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.xj();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.ui_1.atomicfu$compareAndSet(state, state.bq_1))
          return -1;
        $this.xj();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.rp_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.uj() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.mp(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.dp_1 ? list : new InactiveNodeList(list);
    $this.ui_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.up(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.jp_1;
    $this.ui_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0_anonymous = $this.uj();
      var tmp;
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0_anonymous instanceof Finishing) {
          tmp_0 = tmp0_anonymous.cq();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0_anonymous, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.ej() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).lk();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0_anonymous = $this.uj();
        if (tmp0_anonymous instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0_anonymous.dq())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0_anonymous.zp();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp = tmp0_also;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0_anonymous.eq(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0_anonymous.fq();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0_anonymous.vp_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp_1 = tmp0_also_0;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0_anonymous.bj()) {
              if (tryMakeCancelling($this, tmp0_anonymous, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0_anonymous, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0_anonymous);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.ep();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.ui_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.cq())
      return get_COMPLETING_ALREADY();
    finishing.gq(true);
    if (!(finishing === state)) {
      if (!$this.ui_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.zp();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.eq(tmp0_safe_receiver.gj_1);
    }
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.fq();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.ep();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.lq_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.dk(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.lj(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.lp_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.kp_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.jp_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.lp_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.zp() ? 'Cancelling' : state.cq() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.bj() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.vp_1 = list;
    this.wp_1 = atomic$boolean$1(isCompleting);
    this.xp_1 = atomic$ref$1(rootCause);
    this.yp_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).ep = function () {
    return this.vp_1;
  };
  protoOf(Finishing).gq = function (value) {
    this.wp_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).cq = function () {
    return this.wp_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).mq = function (value) {
    this.xp_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).fq = function () {
    return this.xp_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).dq = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).zp = function () {
    return !(this.fq() == null);
  };
  protoOf(Finishing).bj = function () {
    return this.fq() == null;
  };
  protoOf(Finishing).aq = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp = tmp0_also;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.fq();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.la(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).eq = function (exception) {
    var rootCause = this.fq();
    if (rootCause == null) {
      this.mq(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        _set_exceptionsHolder__tqm22h(this, tmp0_apply);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.zp() + ', completing=' + this.cq() + ', rootCause=' + this.fq() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.vp_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.rq_1 = parent;
    this.sq_1 = state;
    this.tq_1 = child;
    this.uq_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).pl = function (cause) {
    continueCompleting(this.rq_1, this.sq_1, this.tq_1, this.uq_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.pl(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.br_1 = job;
  }
  protoOf(AwaitContinuation).bn = function (parent) {
    var state = this.br_1.uj();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.fq();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.gj_1;
    return parent.yj();
  };
  protoOf(AwaitContinuation).nj = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.om();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.bk(tmp$ret$1));
    return cont.yk();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.kr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).rr = function ($this$sequence, $completion) {
    var tmp = this.sr($this$sequence, $completion);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.bi();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ni = function (p1, $completion) {
    return this.rr(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).bi = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 8;
            this.mr_1 = this.kr_1.uj();
            var tmp_0 = this.mr_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.sh_1 = 6;
              suspendResult = this.lr_1.o3(this.mr_1.lq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.mr_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.nr_1 = this.mr_1.ep();
                if (this.nr_1 == null) {
                  this.or_1 = null;
                  this.sh_1 = 5;
                  continue $sm;
                } else {
                  this.pr_1 = this.nr_1.jp_1;
                  this.sh_1 = 1;
                  continue $sm;
                }
              } else {
                this.sh_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.pr_1, this.nr_1)) {
              this.sh_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.pr_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.qr_1 = this.pr_1;
              this.sh_1 = 2;
              suspendResult = this.lr_1.o3(this.qr_1.lq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sh_1 = 3;
              continue $sm;
            }

          case 2:
            this.sh_1 = 3;
            continue $sm;
          case 3:
            this.pr_1 = this.pr_1.jp_1;
            this.sh_1 = 1;
            continue $sm;
          case 4:
            this.or_1 = Unit_getInstance();
            this.sh_1 = 5;
            continue $sm;
          case 5:
            this.sh_1 = 7;
            continue $sm;
          case 6:
            this.sh_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.vh_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.th_1 === 8) {
          throw e;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).sr = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.kr_1, completion);
    i.lr_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.rr($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.ui_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.vi_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).t1 = function () {
    return Key_getInstance_2();
  };
  protoOf(JobSupport).sj = function (value) {
    this.vi_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).tj = function () {
    return this.vi_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).wi = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.sj(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.wj();
    var handle = parent.mk(this);
    this.sj(handle);
    if (this.vj()) {
      handle.ql();
      this.sj(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).uj = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ui_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous instanceof OpDescriptor))
        return tmp1_anonymous;
      tmp1_anonymous.tr(this);
    }
  };
  protoOf(JobSupport).bj = function () {
    var state = this.uj();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.bj();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).vj = function () {
    var tmp = this.uj();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).wj = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0_anonymous = this.uj();
      var tmp0_subject = startInternal(this, tmp0_anonymous);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).xj = function () {
  };
  protoOf(JobSupport).yj = function () {
    var state = this.uj();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.fq();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.zj(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ak(state.gj_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).zj = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.ej() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).ak = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.zj(_this__u8e3s4, message) : $super.zj.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).bk = function (handler) {
    return this.ck(false, true, handler);
  };
  protoOf(JobSupport).ck = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0_anonymous = this.uj();
        if (tmp0_anonymous instanceof Empty) {
          if (tmp0_anonymous.dp_1) {
            if (this.ui_1.atomicfu$compareAndSet(tmp0_anonymous, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0_anonymous);
          }
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var list = tmp0_anonymous.ep();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0_anonymous instanceof JobNode ? tmp0_anonymous : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0_anonymous instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0_anonymous.fq();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0_anonymous.cq();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0_anonymous, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0_anonymous, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0_anonymous instanceof CompletedExceptionally ? tmp0_anonymous : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gj_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).ek = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0_anonymous = this.uj();
      if (tmp0_anonymous instanceof JobNode) {
        if (!(tmp0_anonymous === node))
          return Unit_getInstance();
        if (this.ui_1.atomicfu$compareAndSet(tmp0_anonymous, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
          if (!(tmp0_anonymous.ep() == null)) {
            node.tp();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).fk = function () {
    return false;
  };
  protoOf(JobSupport).gk = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.ej() : null, null, this);
    } else {
      tmp = cause;
    }
    this.hk(tmp);
  };
  protoOf(JobSupport).ej = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).hk = function (cause) {
    this.kk(cause);
  };
  protoOf(JobSupport).ik = function (parentJob) {
    this.kk(parentJob);
  };
  protoOf(JobSupport).jk = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.kk(cause) ? this.pk() : false;
  };
  protoOf(JobSupport).kk = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.fk()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.lj(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).lk = function () {
    var state = this.uj();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.fq();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.gj_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).xn = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0_anonymous = this.uj();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.lj(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).jj = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0_anonymous = this.uj();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).ur = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).mk = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.dk(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).mj = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).nk = function (cause) {
  };
  protoOf(JobSupport).ok = function () {
    return false;
  };
  protoOf(JobSupport).pk = function () {
    return true;
  };
  protoOf(JobSupport).qk = function (exception) {
    return false;
  };
  protoOf(JobSupport).fj = function (state) {
  };
  protoOf(JobSupport).lj = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.rk() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).rk = function () {
    return this.nj() + '{' + stateString(this, this.uj()) + '}';
  };
  protoOf(JobSupport).nj = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).sn = function ($completion) {
    $l$loop: while (true) {
      var state = this.uj();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.gj_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.bq_1 = list;
  }
  protoOf(InactiveNodeList).ep = function () {
    return this.bq_1;
  };
  protoOf(InactiveNodeList).bj = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.bq_1.ip('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.lq_1 = childJob;
  }
  protoOf(ChildHandleNode).pl = function (cause) {
    return this.lq_1.ik(this.sp());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.pl(cause);
  };
  protoOf(ChildHandleNode).jk = function (cause) {
    return this.sp().jk(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.zr_1 = handler;
    this.as_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).pl = function (cause) {
    if (this.as_1.atomicfu$compareAndSet(0, 1))
      this.zr_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.pl(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.fs_1 = handler;
  }
  protoOf(InvokeOnCompletion).pl = function (cause) {
    return this.fs_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.pl(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gs_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.ls_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).pl = function (cause) {
    var state = this.sp().uj();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.ls_1;
      var tmp1_resumeWithException = state.gj_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.t3(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.ls_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.t3(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.pl(cause);
  };
  function IncompleteStateBox(state) {
    this.gs_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.qs_1 = child;
  }
  protoOf(ChildContinuation).pl = function (cause) {
    this.qs_1.an(this.qs_1.bn(this.sp()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.pl(cause);
  };
  function handlesException($this) {
    var tmp = $this.tj();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sp();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.pk())
        return true;
      var tmp_1 = parentJob.tj();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.sp();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.wi(parent);
    this.ts_1 = handlesException(this);
  }
  protoOf(JobImpl).fk = function () {
    return true;
  };
  protoOf(JobImpl).pk = function () {
    return this.ts_1;
  };
  protoOf(JobImpl).yn = function (exception) {
    return this.xn(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.ws();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).ws = function () {
    var main = Dispatchers_getInstance().bt();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.vs();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).jk = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).co = function (context) {
    return false;
  };
  protoOf(Unconfined).do = function (context, block) {
    var yieldContext = context.n4(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.ht_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.it_1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.qt_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.qt_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.rt_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.rt_1 = curSequence;
    } else {
      $this.rt_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.it_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.tt();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.rt_1 === curSequence) {
        $this.rt_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.rt_1;
      curSlots = $this.it_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.qt_1 = atomic$ref$1(initialState);
    this.rt_1 = 0;
  }
  protoOf(StateFlowImpl).ut = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).w1 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.qt_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).vt = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    this.it_1 = null;
    this.jt_1 = 0;
    this.kt_1 = 0;
    this.lt_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function ensureCapacity($this) {
    var currentSize = $this.mo_1.length;
    var newCapacity = currentSize << 1;
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.mo_1;
    var tmp1_copyInto = $this.no_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.mo_1;
    var tmp4_copyInto = $this.mo_1.length - $this.no_1 | 0;
    var tmp5_copyInto = $this.no_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    $this.mo_1 = newElements;
    $this.no_1 = 0;
    $this.oo_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.mo_1 = fillArrayVal(Array(16), null);
    this.no_1 = 0;
    this.oo_1 = 0;
  }
  protoOf(ArrayQueue).uo = function () {
    return this.no_1 === this.oo_1;
  };
  protoOf(ArrayQueue).ro = function (element) {
    this.mo_1[this.oo_1] = element;
    this.oo_1 = (this.oo_1 + 1 | 0) & (this.mo_1.length - 1 | 0);
    if (this.oo_1 === this.no_1) {
      ensureCapacity(this);
    }
  };
  protoOf(ArrayQueue).po = function () {
    if (this.no_1 === this.oo_1)
      return null;
    var element = this.mo_1[this.no_1];
    this.mo_1[this.no_1] = null;
    this.no_1 = (this.no_1 + 1 | 0) & (this.mo_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.yl_1.co(_this__u8e3s4.v3())) {
        _this__u8e3s4.am_1 = state;
        _this__u8e3s4.em_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.yl_1.do(_this__u8e3s4.v3(), _this__u8e3s4);
        tmp_0 = Unit_getInstance();
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().zo();
          if (false ? eventLoop.to() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.so()) {
            _this__u8e3s4.am_1 = state;
            _this__u8e3s4.em_1 = tmp0_executeUnconfined;
            eventLoop.qo(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.vo(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.v3().n4(Key_getInstance_2());
                if (!(job == null) ? !job.bj() : false) {
                  var cause = job.yj();
                  _this__u8e3s4.qm(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.t3(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.zl_1;
                _this__u8e3s4.bm_1;
                _this__u8e3s4.zl_1.t3(result);
              }
              $l$loop: while (eventLoop.lo()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.gn(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.wo(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.t3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.cm_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.yl_1 = dispatcher;
    this.zl_1 = continuation;
    this.am_1 = get_UNDEFINED();
    this.bm_1 = threadContextElements(this.v3());
    this.cm_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).v3 = function () {
    return this.zl_1.v3();
  };
  protoOf(DispatchedContinuation).dm = function () {
    return !(this.cm_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).wt = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(tmp0_loop.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).eo = function () {
    this.wt();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hm();
    }
  };
  protoOf(DispatchedContinuation).gm = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous === get_REUSABLE_CLAIMED()) {
        if (this.cm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1_anonymous instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.cm_1.atomicfu$compareAndSet(tmp1_anonymous, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1_anonymous;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1_anonymous);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fm = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (equals(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
        if (this.cm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp1_anonymous instanceof Error)
          return true;
        else {
          if (this.cm_1.atomicfu$compareAndSet(tmp1_anonymous, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).pm = function () {
    var state = this.am_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.am_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).nm = function () {
    return this;
  };
  protoOf(DispatchedContinuation).t3 = function (result) {
    var context = this.zl_1.v3();
    var state = toState_0(result);
    if (this.yl_1.co(context)) {
      this.am_1 = state;
      this.em_1 = get_MODE_ATOMIC();
      this.yl_1.do(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().zo();
        if (false ? eventLoop.to() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.so()) {
          this.am_1 = state;
          this.em_1 = tmp0_executeUnconfined;
          eventLoop.qo(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.vo(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.v3();
            this.bm_1;
            this.zl_1.t3(result);
            $l$loop: while (eventLoop.lo()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.gn(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.wo(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).qm = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.ao_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.yl_1 + ', ' + toDebugString(this.zl_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.em_1 = resumeMode;
  }
  protoOf(DispatchedTask).qm = function (takenState, cause) {
  };
  protoOf(DispatchedTask).cn = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).en = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj_1;
  };
  protoOf(DispatchedTask).fn = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.nm();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.zl_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.bm_1;
      var context = continuation.v3();
      var state = this.pm();
      var exception = this.en(state);
      var job = (exception == null ? get_isCancellableMode(this.em_1) : false) ? context.n4(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.bj() : false) {
        var cause = job.yj();
        this.qm(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.t3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.t3(tmp$ret$1);
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = this.cn(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
          continuation.t3(tmp$ret$3);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp_2 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.gn(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).gn = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.nm().v3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.nm();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.em_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.yl_1;
      var context = delegate.v3();
      if (dispatcher.co(context)) {
        dispatcher.do(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().zo();
    if (eventLoop.so()) {
      eventLoop.qo(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.vo(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.nm(), true);
        $l$loop: while (eventLoop.lo()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.gn(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.wo(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.pm();
    var exception = _this__u8e3s4.en(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp2_success = _this__u8e3s4.cn(state);
      tmp = _Result___init__impl__xyqfz8(tmp2_success);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      tmp3_resumeUndispatchedWith.zl_1;
      tmp3_resumeUndispatchedWith.bm_1;
      tmp3_resumeUndispatchedWith.zl_1.t3(result);
    } else {
      delegate.t3(result);
    }
  }
  function ContextScope(context) {
    this.xt_1 = context;
  }
  protoOf(ContextScope).aj = function () {
    return this.xt_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.xt_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.jl_1 = uCont;
  }
  protoOf(ScopeCoroutine).ok = function () {
    return true;
  };
  protoOf(ScopeCoroutine).lj = function (state) {
    resumeCancellableWith(intercepted(this.jl_1), recoverResult(state, this.jl_1));
  };
  protoOf(ScopeCoroutine).kj = function (state) {
    this.jl_1.t3(recoverResult(state, this.jl_1));
  };
  function Symbol(symbol) {
    this.yt_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.yt_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.t3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.ni(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.jj(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.gj_1;
        if (true) {
          throw recoverStackTrace(state.gj_1, _this__u8e3s4.jl_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.gj_1, _this__u8e3s4.jl_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.v3();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.ni(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.t3(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.t3(tmp$ret$9);
      }
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().xs_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.aj().u4(context);
    return (!(combined === Dispatchers_getInstance().xs_1) ? combined.n4(Key_getInstance()) == null : false) ? combined.u4(Dispatchers_getInstance().xs_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.u4(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).kj = function (state) {
    return this.jl_1.t3(recoverResult(state, this.jl_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).qd();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.xs_1 = createDefaultDispatcher();
    this.ys_1 = Unconfined_getInstance();
    this.zs_1 = new JsMainDispatcher(this.xs_1, false);
    this.at_1 = null;
  }
  protoOf(Dispatchers).bt = function () {
    var tmp0_elvis_lhs = this.at_1;
    return tmp0_elvis_lhs == null ? this.zs_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.eu_1 = delegate;
    this.fu_1 = invokeImmediately;
    this.gu_1 = this.fu_1 ? this : new JsMainDispatcher(this.eu_1, true);
  }
  protoOf(JsMainDispatcher).vs = function () {
    return this.gu_1;
  };
  protoOf(JsMainDispatcher).co = function (context) {
    return !this.fu_1;
  };
  protoOf(JsMainDispatcher).do = function (context, block) {
    return this.eu_1.do(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.ws();
    return tmp0_elvis_lhs == null ? this.eu_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).do = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.lu_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.lu_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.lu_1, this.lu_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.lu_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).ou = function () {
    process.nextTick(this.xu_1.uu_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).ou = function () {
    setTimeout(this.xu_1.uu_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.fv();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.vu_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.uu_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).gv = function () {
    this.vu_1.ou();
  };
  protoOf(ScheduledMessageQueue).hv = function () {
    setTimeout(this.uu_1, 0);
  };
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.nl(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.xu_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).do = function (context, block) {
    this.xu_1.iv(block);
  };
  protoOf(SetTimeoutBasedDispatcher).go = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ClearTimeout(handle);
    continuation.ml(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.dv_1 = 16;
    this.ev_1 = false;
  }
  protoOf(MessageQueue).iv = function (element) {
    this.ro(element);
    if (!this.ev_1) {
      this.ev_1 = true;
      this.gv();
    }
  };
  protoOf(MessageQueue).fv = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.dv_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.po();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.fn();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.uo()) {
        this.ev_1 = false;
      } else {
        this.hv();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).g6();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.jv_1 = handle;
  }
  protoOf(ClearTimeout).ql = function () {
    clearTimeout(this.jv_1);
  };
  protoOf(ClearTimeout).pl = function (cause) {
    this.ql();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.pl(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.jv_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.nl(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.lv_1 = window_0;
    this.mv_1 = new WindowMessageQueue(this.lv_1);
  }
  protoOf(WindowDispatcher).do = function (context, block) {
    return this.mv_1.iv(block);
  };
  protoOf(WindowDispatcher).go = function (timeMillis, continuation) {
    this.lv_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.sv_1 ? event.data == this$0.tv_1 : false) {
        event.stopPropagation();
        this$0.fv();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.fv();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.sv_1 = window_0;
    this.tv_1 = 'dispatchCoroutine';
    this.sv_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).gv = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).hv = function () {
    this.sv_1.postMessage(this.tv_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  function LinkedListNode() {
    this.jp_1 = this;
    this.kp_1 = this;
    this.lp_1 = false;
  }
  protoOf(LinkedListNode).mp = function (node) {
    var prev = this.kp_1;
    node.jp_1 = this;
    node.kp_1 = prev;
    prev.jp_1 = node;
    this.kp_1 = node;
  };
  protoOf(LinkedListNode).tp = function () {
    return this.np();
  };
  protoOf(LinkedListNode).np = function () {
    if (this.lp_1)
      return false;
    var prev = this.kp_1;
    var next = this.jp_1;
    prev.jp_1 = next;
    next.kp_1 = prev;
    this.lp_1 = true;
    return true;
  };
  protoOf(LinkedListNode).up = function (node) {
    if (!(this.jp_1 === this))
      return false;
    this.mp(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.ap_1 = null;
  }
  protoOf(CommonThreadLocal).bp = function () {
    var tmp = this.ap_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).cp = function (value) {
    this.ap_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).dk = invokeOnCompletion$default;
  protoOf(JobSupport).u4 = plus;
  protoOf(JobSupport).n4 = get;
  protoOf(JobSupport).t4 = fold;
  protoOf(JobSupport).s4 = minusKey;
  protoOf(AbstractCoroutine).dk = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).u4 = plus;
  protoOf(AbstractCoroutine).n4 = get;
  protoOf(AbstractCoroutine).t4 = fold;
  protoOf(AbstractCoroutine).s4 = minusKey;
  protoOf(StandaloneCoroutine).dk = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).u4 = plus;
  protoOf(StandaloneCoroutine).n4 = get;
  protoOf(StandaloneCoroutine).t4 = fold;
  protoOf(StandaloneCoroutine).s4 = minusKey;
  protoOf(LazyStandaloneCoroutine).dk = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).u4 = plus;
  protoOf(LazyStandaloneCoroutine).n4 = get;
  protoOf(LazyStandaloneCoroutine).t4 = fold;
  protoOf(LazyStandaloneCoroutine).s4 = minusKey;
  protoOf(ScopeCoroutine).dk = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).u4 = plus;
  protoOf(ScopeCoroutine).n4 = get;
  protoOf(ScopeCoroutine).t4 = fold;
  protoOf(ScopeCoroutine).s4 = minusKey;
  protoOf(DispatchedCoroutine).dk = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).u4 = plus;
  protoOf(DispatchedCoroutine).n4 = get;
  protoOf(DispatchedCoroutine).t4 = fold;
  protoOf(DispatchedCoroutine).s4 = minusKey;
  protoOf(CancellableContinuationImpl).ll = cancel$default;
  protoOf(CompletableDeferredImpl).dk = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).u4 = plus;
  protoOf(CompletableDeferredImpl).n4 = get;
  protoOf(CompletableDeferredImpl).t4 = fold;
  protoOf(CompletableDeferredImpl).s4 = minusKey;
  protoOf(CoroutineDispatcher).n4 = get_0;
  protoOf(CoroutineDispatcher).t4 = fold;
  protoOf(CoroutineDispatcher).s4 = minusKey_0;
  protoOf(CoroutineDispatcher).u4 = plus;
  protoOf(EventLoop).u4 = plus;
  protoOf(EventLoop).n4 = get_0;
  protoOf(EventLoop).t4 = fold;
  protoOf(EventLoop).s4 = minusKey_0;
  protoOf(AwaitContinuation).ll = cancel$default;
  protoOf(JobImpl).dk = invokeOnCompletion$default;
  protoOf(JobImpl).u4 = plus;
  protoOf(JobImpl).n4 = get;
  protoOf(JobImpl).t4 = fold;
  protoOf(JobImpl).s4 = minusKey;
  protoOf(MainCoroutineDispatcher).u4 = plus;
  protoOf(MainCoroutineDispatcher).n4 = get_0;
  protoOf(MainCoroutineDispatcher).t4 = fold;
  protoOf(MainCoroutineDispatcher).s4 = minusKey_0;
  protoOf(SupervisorJobImpl).dk = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).u4 = plus;
  protoOf(SupervisorJobImpl).n4 = get;
  protoOf(SupervisorJobImpl).t4 = fold;
  protoOf(SupervisorJobImpl).s4 = minusKey;
  protoOf(Unconfined).u4 = plus;
  protoOf(Unconfined).n4 = get_0;
  protoOf(Unconfined).t4 = fold;
  protoOf(Unconfined).s4 = minusKey_0;
  protoOf(UndispatchedCoroutine).dk = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).u4 = plus;
  protoOf(UndispatchedCoroutine).n4 = get;
  protoOf(UndispatchedCoroutine).t4 = fold;
  protoOf(UndispatchedCoroutine).s4 = minusKey;
  protoOf(JsMainDispatcher).u4 = plus;
  protoOf(JsMainDispatcher).n4 = get_0;
  protoOf(JsMainDispatcher).t4 = fold;
  protoOf(JsMainDispatcher).s4 = minusKey_0;
  protoOf(UnconfinedEventLoop).u4 = plus;
  protoOf(UnconfinedEventLoop).n4 = get_0;
  protoOf(UnconfinedEventLoop).t4 = fold;
  protoOf(UnconfinedEventLoop).s4 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).u4 = plus;
  protoOf(SetTimeoutBasedDispatcher).n4 = get_0;
  protoOf(SetTimeoutBasedDispatcher).t4 = fold;
  protoOf(SetTimeoutBasedDispatcher).s4 = minusKey_0;
  protoOf(NodeDispatcher).u4 = plus;
  protoOf(NodeDispatcher).n4 = get_0;
  protoOf(NodeDispatcher).t4 = fold;
  protoOf(NodeDispatcher).s4 = minusKey_0;
  protoOf(SetTimeoutDispatcher).u4 = plus;
  protoOf(SetTimeoutDispatcher).n4 = get_0;
  protoOf(SetTimeoutDispatcher).t4 = fold;
  protoOf(SetTimeoutDispatcher).s4 = minusKey_0;
  protoOf(WindowDispatcher).u4 = plus;
  protoOf(WindowDispatcher).n4 = get_0;
  protoOf(WindowDispatcher).t4 = fold;
  protoOf(WindowDispatcher).s4 = minusKey_0;
  //endregion
  //region block: init
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = delay;
  _.$_$.d = withContext;
  _.$_$.e = Key_getInstance_2;
  _.$_$.f = MutableStateFlow;
  _.$_$.g = CancellableContinuationImpl;
  _.$_$.h = CompletableDeferred;
  _.$_$.i = CoroutineDispatcher;
  _.$_$.j = CoroutineScope_0;
  _.$_$.k = CoroutineScope;
  _.$_$.l = Job_0;
  _.$_$.m = get_MODE_CANCELLABLE;
  _.$_$.n = SupervisorJob;
  _.$_$.o = asCoroutineDispatcher;
  _.$_$.p = cancel;
  _.$_$.q = cancel_0;
  _.$_$.r = get_job;
  _.$_$.s = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
