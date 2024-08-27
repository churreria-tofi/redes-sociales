function adjustFooterPosition() {
  var footer = document.getElementById("footer");
  console.log('footer', footer);
  if (window.innerHeight > 780) {
    footer.style.position = "absolute";
  }
}

window.onResize = adjustFooterPosition();

function toogleCollapsible(id) {  
  var collapsible = document.getElementById(id);
  var content = document.getElementById(id + "_content");
  var arrow = document.getElementById(id + "_arrow");
  var footer = document.getElementById("footer");

  arrow.classList.toggle('expanded');
  collapsible.classList.toggle('expanded');

  if (content.style?.display === "flex" || content.style?.display === undefined) {
    content.style.display = "none";
    collapsible.style.borderRadius = "10px 10px 10px 10px"
    footer.style.position = "absolute";
  } else {
    content.style.display = "flex";
    if (window.innerHeight < 800) {
      footer.style.position = "relative";
    }
  }
}