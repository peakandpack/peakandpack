/*
  PEAK AND PACK: EDIT YOUR WEBSITE'S CONTENT HERE
  ------------------------------------------------
  This is the only file you normally need to change.
  - Keep the quote marks "like this" and the commas at the end of lines.
  - Dates use the format YYYY-MM-DD (year-month-day), for example 2027-01-22.
  - Dates that have passed disappear from the Schedule by themselves.
  - To mark a date as full, change  full:false  to  full:true  on that line.
*/
window.SITE = {

  // Where booking requests are sent.
  email: "peakandpack@gmail.com",

  // Optional: paste your Formspree address here (see SETUP-GUIDE.txt, step 8).
  // Leave it as "" and the booking form will open the visitor's email app instead.
  formEndpoint: "",

  // The order the course groups appear in.
  familyOrder: ["Avalanche education", "Skills courses", "Technical clinics", "Expeditions"],

  courses: [
    { id: "companion-rescue-evening", family: "Avalanche education", name: "Companion Rescue Evening", price: 950, max: 10, duration: "1 evening", season: "Nov – Apr", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Three hours, indoors and out, on the one skill that has to be automatic. Beacon, probe, shovel, and a timed search you will actually pass." },
    { id: "intro-ski-touring", family: "Avalanche education", name: "Intro to Ski Touring", price: 3400, max: 6, duration: "2 days", season: "Jan – Apr", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Skins, transitions, kick turns and how a touring day actually runs. For strong resort skiers who have never left the lift." },
    { id: "avalanche-fundamentals", family: "Avalanche education", name: "Avalanche Fundamentals", price: 4400, max: 6, duration: "3 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "NF Grunnkurs Skred. One evening of theory, two long days out. You leave able to plan a day, read the terrain, and run a companion rescue in under eight minutes." },
    { id: "avalanche-advanced", family: "Avalanche education", name: "Avalanche Advanced", price: 5400, max: 6, duration: "3.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "NF Videregående Skredkurs. Snowpack testing, independent hazard assessment, group management and complex rescue. For people who already avoid terrain and now want to choose it." },
    { id: "snowpack-season-lab", family: "Avalanche education", name: "Snowpack Season Lab", price: 13900, max: 6, duration: "6 days across one winter", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One winter, six field days, the same six people and the same snowpack from first snow to spring melt-out. The layer you dig through in February, you watched form in November." },
    { id: "ski-mo-rope-skills", family: "Skills courses", name: "Ski-Mo Rope Skills", price: 5900, max: 5, duration: "2 days", season: "Jan – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Six rope systems that actually occur on a ski descent, drilled until they are fast in mittens. Nothing decorative, no climbing curriculum." },
    { id: "glacier-crevasse-rescue", family: "Skills courses", name: "Glacier & Crevasse Rescue", price: 6400, max: 5, duration: "2 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Roped travel, holding a fall, load transfer, haul systems and getting yourself out. Run in November when the crevasses are open and visible, and again in spring." },
    { id: "steep-skiing-clinic", family: "Technical clinics", name: "Steep Skiing Clinic", price: 11500, max: 4, duration: "3 days", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Lyngen couloirs with an IFMGA guide at one to four. A jump turn that holds on 45° firm, sluff management, line selection, and a limit you arrived at deliberately." },
    { id: "big-mountain-clinic", family: "Technical clinics", name: "Big Mountain Clinic", price: 12900, max: 5, duration: "3 days · one boat day", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Summit to sea on faces with no road to them. Reading a big face from the water, breaking it into decisions, and executing them in order." },
    { id: "ski-mountaineering-lab", family: "Technical clinics", name: "Ski Mountaineering Lab", price: 16500, max: 4, duration: "4 days · one hut night", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Crampons, axe, anchors, short-roping and ridge travel — for the Lyngen peaks that stop being a ski tour in the last two hundred metres." },
    { id: "ski-expedition-lab", family: "Expeditions", name: "Ski Expedition Lab", price: 29500, max: 4, duration: "5 days self-supported", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "A self-supported traverse of the Lyngen Alps, sleeping out, summits along the way. The qualifying trip for Svalbard, Greenland and the Alps." }
  ],

  // One line per date. "course" must match an "id" above.
  dates: [
    { course: "companion-rescue-evening", label: "Thu 3 Dec 2026", start: "2026-12-03", end: "2026-12-03", full: false },
    { course: "companion-rescue-evening", label: "Thu 14 Jan 2027", start: "2027-01-14", end: "2027-01-14", full: false },
    { course: "companion-rescue-evening", label: "Thu 11 Feb 2027", start: "2027-02-11", end: "2027-02-11", full: false },
    { course: "companion-rescue-evening", label: "Thu 11 Mar 2027", start: "2027-03-11", end: "2027-03-11", full: false },
    { course: "companion-rescue-evening", label: "Thu 15 Apr 2027", start: "2027-04-15", end: "2027-04-15", full: false },
    { course: "intro-ski-touring", label: "Sat 16 – Sun 17 Jan 2027", start: "2027-01-16", end: "2027-01-17", full: false },
    { course: "intro-ski-touring", label: "Sat 20 – Sun 21 Feb 2027", start: "2027-02-20", end: "2027-02-21", full: false },
    { course: "intro-ski-touring", label: "Sat 20 – Sun 21 Mar 2027", start: "2027-03-20", end: "2027-03-21", full: false },
    { course: "avalanche-fundamentals", label: "Fri 11 – Sun 13 Dec 2026", start: "2026-12-11", end: "2026-12-13", full: false },
    { course: "avalanche-fundamentals", label: "Fri 22 – Sun 24 Jan 2027", start: "2027-01-22", end: "2027-01-24", full: false },
    { course: "avalanche-fundamentals", label: "Fri 19 – Sun 21 Feb 2027", start: "2027-02-19", end: "2027-02-21", full: false },
    { course: "avalanche-fundamentals", label: "Fri 19 – Sun 21 Mar 2027", start: "2027-03-19", end: "2027-03-21", full: false },
    { course: "avalanche-advanced", label: "Thu 28 – Sun 31 Jan 2027", start: "2027-01-28", end: "2027-01-31", full: false },
    { course: "avalanche-advanced", label: "Thu 4 – Sun 7 Mar 2027", start: "2027-03-04", end: "2027-03-07", full: false },
    { course: "snowpack-season-lab", label: "Cohort 2026/27 · six sessions, Nov to May", start: "2026-11-07", end: "2027-05-31", full: false },
    { course: "ski-mo-rope-skills", label: "Sat 6 – Sun 7 Feb 2027", start: "2027-02-06", end: "2027-02-07", full: false },
    { course: "ski-mo-rope-skills", label: "Sat 13 – Sun 14 Mar 2027", start: "2027-03-13", end: "2027-03-14", full: false },
    { course: "glacier-crevasse-rescue", label: "Sat 10 – Sun 11 Apr 2027", start: "2027-04-10", end: "2027-04-11", full: false },
    { course: "glacier-crevasse-rescue", label: "Sat 8 – Sun 9 May 2027", start: "2027-05-08", end: "2027-05-09", full: false },
    { course: "steep-skiing-clinic", label: "Fri 26 – Sun 28 Mar 2027", start: "2027-03-26", end: "2027-03-28", full: false },
    { course: "steep-skiing-clinic", label: "Fri 23 – Sun 25 Apr 2027", start: "2027-04-23", end: "2027-04-25", full: false },
    { course: "big-mountain-clinic", label: "Fri 12 – Sun 14 Mar 2027", start: "2027-03-12", end: "2027-03-14", full: false },
    { course: "big-mountain-clinic", label: "Fri 16 – Sun 18 Apr 2027", start: "2027-04-16", end: "2027-04-18", full: false },
    { course: "ski-mountaineering-lab", label: "Thu 8 – Sun 11 Apr 2027", start: "2027-04-08", end: "2027-04-11", full: false },
    { course: "ski-expedition-lab", label: "Wed 28 Apr – Sun 2 May 2027", start: "2027-04-28", end: "2027-05-02", full: false }
  ],

  // Journal posts. Newest first. Use \n\n between paragraphs.
  articles: [
    { title: "Group size is the product", author: "Peak & Pack", date: "2026-11-26",
      body: "Avalanche courses run to a maximum of six per instructor and technical clinics to four or five per guide. We do not raise that for anyone.\n\nIf a date shows as full, email us and we will open the next one rather than squeeze you into this one." }
  ],

  // Photos: put the file in the "photos" folder, then add a line here.
  // Example:  { file: "lyngen-sunrise.jpg", caption: "Sunrise above Lyngenfjord" },
  photos: [
  ]
};
