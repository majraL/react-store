import h2c from "html2canvas";

h2c(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});
