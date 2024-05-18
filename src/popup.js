

function hasAnchor(anchor) {
  return window.location.hash.replace('#', '') === anchor;
}

let topArticle = document.getElementsByTagName("article")[0];
let postTags = document.getElementsByClassName("post-tags")[0]

let a = document.createElement('a');
a.href = "#last-update";
a.textContent = "Senaste uppdatering";
a.style.marginRight = "3em"
a.addEventListener('click', function(e) {
  e.preventDefault();
  postTags.scrollIntoView({
    block: 'end'
  })
})

let b = document.createElement('a');
b.href = "#last-comment";
b.textContent = "Senaste kommentar";
b.addEventListener('click', function(e) {
  e.preventDefault();

  document.getElementById("respond").scrollIntoView({
    block: 'end'
  })
})

let b2 = document.createElement('a');
b2.href = "#last-comment";
b2.textContent = "Senaste kommentar";
b2.addEventListener('click', function(e) {
  e.preventDefault();

  document.getElementById("respond").scrollIntoView({
    block: 'end'
  })
})

topArticle.insertBefore(b, topArticle.firstChild);
topArticle.insertBefore(a, topArticle.firstChild);

postTags.parentElement.insertBefore(b2, postTags)

var mydiv = document.getElementsByClassName("post-tags")[0]
mydiv.id = "last-update"

var aTag = document.createElement('a');
aTag.setAttribute('href',"#last-update")
aTag.innerText = "link text";
mydiv.appendChild(aTag);

setTimeout(function() {
  if (!hasAnchor("last-update")) {
    return;
  }

 // window.scrollTo(0, 10000);
  document.getElementsByClassName("post-tags")[0].scrollIntoView({
    block: 'end'
  })
  },100)


setTimeout(function() {
  if (!hasAnchor("last-comment")) {
    return;
  }

  // window.scrollTo(0, 10000);
  document.getElementById("respond").scrollIntoView({
    block: 'end'
  })
},100)








