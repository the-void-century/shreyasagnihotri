function reveal() {
  var reveals = document.querySelectorAll(".shreyas");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function reveal2() {
  var reveals = document.querySelectorAll(".smallo");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
reveal();
reveal2();


const colors = [`url(./images/boat.jpg)`, `url(./images/flag.jpg)`, `url(./images/roman.jpg)`, `url(./images/soldiers.jpg)`, `url(./images/greenery.jpg)`];
const delay = 4000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
    setIndex((prevIndex) =>
    prevIndex === colors.length - 1 ? 0 : prevIndex + 1),

    delay);


    return () => {
      resetTimeout();
    };
  }, [index]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "slideshow" }, /*#__PURE__*/
    React.createElement("h1", null, "The  Commoners"), /*#__PURE__*/

    React.createElement("div", {
      className: "slideshowSlider",
      style: { transform: `translate3d(${-index * 100}%, 0, 0)` } },

    colors.map((backgroundImage, index) => /*#__PURE__*/
    React.createElement("div", { className: "slide",
      key: index,
      style: { backgroundImage } }))), /*#__PURE__*/



    React.createElement("div", { className: "slideshowDots" },
    colors.map((_, idx) => /*#__PURE__*/
    React.createElement("div", {
      key: idx,
      className: `slideshowDot${index === idx ? " active" : ""}`,
      onClick: () => {
        setIndex(idx);
      } })))));






}

ReactDOM.render( /*#__PURE__*/React.createElement(Slideshow, null), document.getElementById("App"));
function delayed1() {
  ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "The Commoners"));
}
intervalID = 0;
intervalID = setInterval(delayed1, 2000);
clearInterval(intervalID);