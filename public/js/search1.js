$(document).ready(function () {
  if (!inCodePenEditor()) {
    $("#search-input").focus();
  }

  // mode of form elements changes on input
  $("#search-input").on("input", function () {
    if (isEmpty($("#search-input").val())) {
      inputInactive();
    } else {
      inputActive();
    }
  });

  // update button tooltip on hover
  $("#search-btn").hover(function () {
    if (isEmpty($("#search-input").val())) {
      $(this).attr("title", "Open a random Wikipedia article.");
    } else {
      $(this).attr(
        "title",
        "Search Wikipedia for '" + $("#search-input").val() + "'."
      );
    }
  });

  // main search functionality
  $("#search-btn").on("click", function (e) {
    e.preventDefault();
    clearCurrentCards();
    searchWikipedia($("#search-input").val());
    $("#search-clear").focus();
  });

  // bind input cancel functionality to click
  $("#search-clear").on("click", function () {
    cancelInput();
  });

  // bind input cancel functionality to escape key press
  $("#search-form").keyup(function (e) {
    if (e.keyCode == 27) {
      cancelInput();
    }
  });

  // bind window resize to manually adjust card image height, in order to maintain required aspect ratio of card images
  $(window).resize(function () {
    setCardImgHeight();
  });
});

function inCodePenEditor() {
  return !/full|debug/.test(window.location.pathname);
}

// initialise site view
function cancelInput() {
  clearInputField();
  showViewInitial();
  inputInactive();
  $("#search-input").focus();
}

function isEmpty(value) {
  return 0 === value.length;
}

function inputInactive() {
  $("#search-form").removeClass("hasInput");
}

function inputActive() {
  $("#search-form").addClass("hasInput");
}

function clearCurrentCards() {
  $("#cards").empty();
}

function clearInputField() {
  $("#search-input").val("");
}

function showViewInitial() {
  $("#container").removeClass("view-results");
  $("#container").addClass("view-initial");
}

function showViewResults() {
  $("#container").removeClass("view-initial");
  $("#container").addClass("view-results");
}

function searchWikipedia(searchTerm) {
  if (isEmpty(searchTerm)) {
    openRandomArticle();
  } else {
    getSearchResults(searchTerm);
    showViewResults();
  }
}

function openRandomArticle() {
  var win = window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    "_blank"
  );
  if (win) {
    win.focus(); // Browser has allowed link to be opened
  } else {
    alert("Please allow popups for this website"); // Browser has blocked link from opening
  }
}

// Query Wikipedia api for search term
function getSearchResults(searchTerm) {
  var endPoint = "https://en.wikipedia.org/w/api.php";
  // get url encoded query parameter string
  var params =
    "?" +
    $.param({
      action: "query",
      generator: "search",
      gsrsearch: searchTerm,
      gsrnamespace: 0,
      gsrlimit: 12, // search limit
      prop: "pageimages|extracts|info",
      pithumbsize: 200, // size of pageimages
      pilimit: "max", // should be 'max' to get all the available relevant page images
      exsentences: 1, // number of sentences to retrieve
      exintro: 1, // retrieve only introductory content
      explaintext: 1, // retrieve content in plain text
      exlimit: "max", // should be 'max' to get all the available page extracts
      inprop: "url",
      format: "json",
      formatversion: 2, // retrieves properly formatted json array
    });

  $.getJSON(endPoint + params + "&callback=?", function (data) {
    if ("undefined" !== typeof data.query) {
      $("#cards").append(resultCardHtml(data.query.pages));
      // manually set height of card images, since the width is already known
      setCardImgHeight();
    } else {
      $("#cards").append(encapsulate("No results found", "p", ""));
    }
  }).fail(function (jqXHR, status, error) {
    console.log(jqXHR.responseText);
  });
}

// Build cards elements from 'pages' array
function resultCardHtml(pages) {
  var html = "";
  pages.forEach(function (page) {
    var imgSrc =
      "undefined" !== typeof page.thumbnail
        ? page.thumbnail.source
        : "https://placehold.it/200x150/e6e6e6?text=Image+unavailable";
    // build elements to be appended to #cards
    var image = encapsulate(
      false,
      "img",
      "src='" + imgSrc + "' alt='Main Wikipedia image for " + page.title + "'"
    );
    var imageDiv = encapsulate(image, "div", "class='card-image'");
    var title = encapsulate(page.title, "h2", "");
    var titleDiv = encapsulate(title, "div", "class='card-title'");
    var text = encapsulate(page.extract, "p", "");
    var textDiv = encapsulate(text, "div", "class='card-text'");
    var action = encapsulate(
      "READ MORE",
      "a",
      "href='" + page.canonicalurl + "' target='_blank'"
    );
    var actionDiv = encapsulate(action, "div", "class='card-actions'");
    html =
      html +
      encapsulate(
        imageDiv + titleDiv + textDiv + actionDiv,
        "div",
        "class='card'"
      );
  });

  return html;
}

// wrap content in given html tags, with given attributes
function encapsulate(content, tag, attr) {
  if (false === content) {
    return "<" + tag + " " + attr + " />";
  } else {
    return "<" + tag + " " + attr + ">" + content + "</" + tag + ">";
  }
}

// Manually set height of card image element
function setCardImgHeight() {
  $(".card-image img", "#cards").css("height", function () {
    return Math.round($(this).width() * 0.75);
  });
}
