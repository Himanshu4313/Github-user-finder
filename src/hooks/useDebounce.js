function UseDebounce(Callback, delay = 2000) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      Callback(...args);
    }, delay);
  };
}

export default UseDebounce;
