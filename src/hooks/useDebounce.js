function UseDebounce(Callback, delay = 1500) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      Callback(...args);
    }, delay);
  };
}

export default UseDebounce;
