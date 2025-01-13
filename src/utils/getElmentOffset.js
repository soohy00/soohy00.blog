const offset = (element) => {
  if (element && element.getBoundingClientRect) {
    const rect = element.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  } else {
    console.warn('Offset function: Element is null or undefined. Returning default offset.');
    return { top: 0, left: 0 }; // 기본값을 반환하여 코드가 중단되지 않도록 처리
  }
};

export default offset;