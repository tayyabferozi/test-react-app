const changeTitle = (title) => {
  document.getElementById("dynamic-title").innerText = title;
  document.title = title;
  window.scrollTo(0, 0);
};

export default changeTitle;
