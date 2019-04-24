// 10) Write a polyfill .bind()

Function.prototype.myBind = function() {
    if (!arguments.length) 
    return "Usage fun.myBind(context[,arg1[,arg2[,…]]])";
    var context = arguments[0],
        self = this,
        boundArgs = [].slice.call(arguments, 1);
    return function() {
      var args = boundArgs.concat([].slice.call(arguments));
      return self.apply(context, args);
    };
  }