(function () {
  "use strict";

  var MAX_RESULTS = 8;
  var index = null;
  var indexPromise = null;

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function loadIndex() {
    if (indexPromise) return indexPromise;
    var base = document.body.getAttribute("data-baseurl") || "";
    indexPromise = fetch(base + "/search-index.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        index = data;
        return data;
      });
    return indexPromise;
  }

  function search(query, items) {
    var q = query.toLowerCase();
    return items
      .filter(function (item) {
        return (
          (item.title && item.title.toLowerCase().indexOf(q) !== -1) ||
          (item.text && item.text.toLowerCase().indexOf(q) !== -1)
        );
      })
      .slice(0, MAX_RESULTS);
  }

  function renderResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<p class="site-search-empty">No results</p>';
      container.hidden = false;
      return;
    }
    var html = results
      .map(function (r) {
        return (
          '<a class="site-search-result" href="' +
          escapeHtml(r.url) +
          '"><span class="site-search-result-type">' +
          escapeHtml(r.type) +
          "</span>" +
          escapeHtml(r.title) +
          "</a>"
        );
      })
      .join("");
    container.innerHTML = html;
    container.hidden = false;
  }

  function init() {
    var input = document.getElementById("site-search-input");
    var results = document.getElementById("site-search-results");
    if (!input || !results) return;

    input.disabled = false;
    input.placeholder = "Search...";

    input.addEventListener("input", function () {
      var query = input.value.trim();
      if (!query) {
        results.hidden = true;
        results.innerHTML = "";
        return;
      }
      loadIndex().then(function (items) {
        renderResults(search(query, items), results);
      });
    });

    document.addEventListener("click", function (e) {
      if (!results.contains(e.target) && e.target !== input) {
        results.hidden = true;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
