#include <nan.h>
#include "functions.h"

NAN_METHOD(nothing) {
  NanScope();
  NanReturnUndefined();
}

NAN_METHOD(aString) {
	NanScope();
	NanReturnValue(NanNew<v8::String>("This is a thing."));
}

NAN_METHOD(aBoolean) {
	NanScope();
	NanReturnValue(NanFalse());
}

NAN_METHOD(aNumber) {
	NanScope();
	NanReturnValue(NanNew<v8::Number>(1.75));
}