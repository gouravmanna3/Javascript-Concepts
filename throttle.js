const getOtp = () => {
  console.log('Otp sent')
}

const throttle = (fn, timer) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timer);
    }
  }
}

const throttleV2 = (fn, timer) => {
  let timeOut;
  return function(){
    let context = this;
    let args = arguments;
    if(!timeOut) {
      fn.apply(context, args);
      timeOut = setTimeout(() => {
        timeOut = undefined;
      }, timer);
    }
  }
}

const throttleButton = throttle(getOtp, 5000);