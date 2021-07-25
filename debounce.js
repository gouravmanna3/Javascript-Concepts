const getData = () => {
  console.log('Fetching Data from API....');
}

const debounce = (fn, timer) => {
  let timeInterval;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeInterval);
    timeInterval = setTimeout(() => {
      fn.apply(context, args);
    }, timer)
  }
}

const fetchData = debounce(getData, 1000);