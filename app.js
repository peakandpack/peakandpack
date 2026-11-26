/* Peak and Pack: builds the pages from content.js. You do not need to edit this file. */
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  var VIEWS = ["courses", "schedule", "book", "photos", "journal"];
  var filterCourse = "", pendingSlot = "";

  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    for (var k in (attrs || {})) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function nok(n) { return new Intl.NumberFormat("nb-NO").format(Number(n) || 0); }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function course(id) { return (S.courses || []).filter(function (c) { return c.id === id; })[0]; }
  function famIdx(f) { var i = (S.familyOrder || []).indexOf(f); return i < 0 ? 99 : i; }
  function slotId(d) { return d.course + "|" + d.start; }
  function upcoming() {
    var t = today();
    return (S.dates || []).filter(function (d) { return d.end >= t && course(d.course); })
      .sort(function (a, b) { return a.start.localeCompare(b.start); });
  }
  function slotName(d) { return course(d.course).name + " · " + d.label; }

  /* ---------- routing ---------- */
  function route() {
    var v = (location.hash || "").slice(1);
    if (VIEWS.indexOf(v) < 0) v = "courses";
    VIEWS.forEach(function (n) { $("v-" + n).hidden = n !== v; });
    document.querySelectorAll("#nav a").forEach(function (a) {
      if (a.dataset.v === v) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (v === "book" && pendingSlot) { $("bSlot").value = pendingSlot; pendingSlot = ""; }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ---------- courses ---------- */
  function renderCourses() {
    var l = $("cList"); clear(l);
    var cs = (S.courses || []).slice().sort(function (a, b) { return famIdx(a.family) - famIdx(b.family); });
    var fam = null;
    cs.forEach(function (c) {
      if (c.family !== fam) { fam = c.family; l.appendChild(h("h2", { text: fam })); }
      var meta = [c.duration, c.max ? "max " + c.max : "", c.season].filter(Boolean).join(" · ");
      var go = h("a", { class: "cta", href: "#schedule", text: "Dates & booking" });
      go.onclick = function () { filterCourse = c.id; renderSchedule(); };
      var left = h("div", { style: "min-width:0" }, [
        h("div", { class: "meta", text: meta }),
        h("h3", { text: c.name }),
        h("p", { text: c.desc }),
        h("div", { class: "actions" }, [go])
      ]);
      var price = h("div", { class: "price" }, [h("b", { text: nok(c.price) }), h("span", { text: "NOK per person" })]);
      l.appendChild(h("div", { class: "row" }, [left, price]));
    });
  }

  /* ---------- schedule + booking select ---------- */
  function renderSchedule() {
    var up = upcoming();
    var f = $("sFilter"); clear(f);
    var withDates = (S.courses || []).filter(function (c) { return up.some(function (d) { return d.course === c.id; }); })
      .sort(function (a, b) { return famIdx(a.family) - famIdx(b.family); });
    if (filterCourse && !withDates.some(function (c) { return c.id === filterCourse; })) filterCourse = "";
    if (withDates.length > 1) {
      [{ id: "", name: "All courses" }].concat(withDates).forEach(function (c) {
        var b = h("button", { type: "button", class: c.id === filterCourse ? "on" : "", text: c.name });
        b.onclick = function () { filterCourse = c.id; renderSchedule(); };
        f.appendChild(b);
      });
    }
    var list = $("sList"); clear(list);
    var shown = up.filter(function (d) { return !filterCourse || d.course === filterCourse; });
    if (!shown.length) list.appendChild(h("div", { class: "empty", text: "No upcoming dates right now. Email us and we will open the next one." }));
    shown.forEach(function (d) {
      var c = course(d.course);
      var what = h("div", { class: "what" }, [document.createTextNode(c.name + " · " + c.duration + " · max " + c.max)]);
      if (d.full) what.appendChild(h("span", { class: "pill bad", text: "Full · waiting list" }));
      var b = h("a", { class: "cta", href: "#book", text: d.full ? "Join waiting list" : "Book" });
      b.onclick = function () { pendingSlot = slotId(d); };
      list.appendChild(h("div", { class: "date" }, [h("div", {}, [h("div", { class: "when", text: d.label }), what]), b]));
    });

    var sel = $("bSlot"), keep = sel.value; clear(sel);
    if (!up.length) sel.appendChild(h("option", { value: "", text: "No dates available" }));
    up.forEach(function (d) { sel.appendChild(h("option", { value: slotId(d), text: slotName(d) + (d.full ? " (full: waiting list)" : "") })); });
    if (keep) sel.value = keep;

    var bu = $("bUpcoming"); clear(bu);
    up.slice(0, 6).forEach(function (d) {
      bu.appendChild(h("div", { class: "date", style: "grid-template-columns:minmax(0,1fr)" },
        [h("div", {}, [h("div", { class: "when", text: d.label }), h("div", { class: "what", text: course(d.course).name })])]));
    });
  }

  /* ---------- photos + journal ---------- */
  function renderPhotos() {
    var l = $("phList"); clear(l);
    var ps = S.photos || [];
    if (!ps.length) { l.style.columns = "auto"; l.appendChild(h("div", { class: "empty", text: "Photos are on their way." })); return; }
    ps.forEach(function (p) {
      l.appendChild(h("figure", {}, [
        h("img", { src: "photos/" + encodeURIComponent(p.file), alt: p.caption || "Peak and Pack photo", loading: "lazy" }),
        p.caption ? h("figcaption", { text: p.caption }) : null
      ]));
    });
  }
  function fmtDate(d) {
    try { return new Date(d + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return d; }
  }
  function renderArticles() {
    var l = $("aList"); clear(l);
    var as = (S.articles || []).slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    if (!as.length) { l.appendChild(h("div", { class: "empty", text: "Articles are on their way." })); return; }
    as.forEach(function (a, i) {
      var d = h("details", { class: "post" });
      if (i === 0) d.setAttribute("open", "");
      d.appendChild(h("summary", {}, [h("h3", { text: a.title }), h("div", { class: "meta", text: (a.author ? a.author + " · " : "") + (a.date ? fmtDate(a.date) : "") })]));
      d.appendChild(h("div", { class: "txt", text: a.body }));
      l.appendChild(d);
    });
  }

  /* ---------- booking form ---------- */
  function setMsg(t, cls) { var m = $("bMsg"); m.textContent = t; m.className = "msg " + (cls || ""); }
  $("bForm").onsubmit = function (e) {
    e.preventDefault();
    var d = upcoming().filter(function (x) { return slotId(x) === $("bSlot").value; })[0];
    if (!d) { setMsg("Choose a date first.", "err"); return; }
    var data = {
      course_and_date: slotName(d) + (d.full ? " (waiting list)" : ""),
      name: $("bName").value.trim(),
      contact: $("bContact").value.trim(),
      people: $("bGuests").value,
      notes: $("bNote").value.trim()
    };
    if (S.formEndpoint) {
      $("bSubmit").disabled = true; setMsg("Sending…");
      fetch(S.formEndpoint, { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) {
          if (!r.ok) throw new Error("bad status");
          $("bForm").reset(); $("bGuests").value = 1;
          setMsg("Thank you. Your request for " + data.course_and_date + " has been sent. We will reply by email.", "ok");
        })
        .catch(function () { setMsg("The request could not be sent. Please email " + S.email + " instead.", "err"); })
        .then(function () { $("bSubmit").disabled = false; });
    } else {
      var body = "Course and date: " + data.course_and_date + "\nName: " + data.name + "\nEmail or phone: " + data.contact + "\nPeople: " + data.people + "\nNotes: " + data.notes;
      window.location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("Booking request: " + data.course_and_date) + "&body=" + encodeURIComponent(body);
      setMsg("Your email app should open with the request filled in. Press send to finish. If nothing opens, write to " + S.email + ".", "ok");
    }
  };

  /* ---------- boot ---------- */
  ["mailLink", "footMail"].forEach(function (id) { var a = $(id); a.textContent = S.email; a.href = "mailto:" + S.email; });
  renderCourses(); renderSchedule(); renderPhotos(); renderArticles(); route();
})();
