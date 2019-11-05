setTimeout(function() {
  const memeGen = document.querySelector(".meme-generator");
  const memeScript = document.querySelector("[data-meme-upload]");
  if (!memeGen) {
    memeScript.parentNode.removeChild(memeScript);
  }
}, 100);
