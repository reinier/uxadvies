function showImage(e) {
  e.preventDefault();
  coverimage.setAttribute("src", this.getAttribute("href"));
  coverimage.setAttribute("alt", this.querySelector("img").getAttribute("alt"));
  cover.showModal();
}

var imglinks = document.getElementById("js-examplecards").getElementsByTagName('a');
var cover = document.getElementById("js-cover");
var coverimage = cover.getElementsByTagName("img")[0];

/* Only use dialog for lightbox when dialog is supported */
var testdialog = document.createElement("dialog");
testdialog.setAttribute("open", "");

if (testdialog.open) {

  for (var i=0; i<imglinks.length; i++) {
    imglinks[i].onclick = showImage;
  }

  document.getElementById("js-closecover").onclick = function() {
    coverimage.setAttribute("src", "");
    cover.close();
  }

}
