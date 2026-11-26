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
    { id: "companion-rescue-evening", family: "Avalanche education", name: "Companion Rescue Evening", price: 350, max: 10, duration: "1 evening", season: "Nov – Apr", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Three hours, indoors and out, the one skill that has to be automatic. Beacon, probe, shovel, and a timed search you will actually pass." },
    { id: "intro-ski-touring", family: "Avalanche education", name: "Intro to Ski Touring", price: 3200, max: 6, duration: "2 days", season: "Dec– Apr", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Skins, transitions, kick turns and how a touring day actually runs. For strong resort skiers who have never left the lift." },
    { id: "avalanche-fundamentals-level 1", family: "Avalanche education", name: "Avalanche Fundamentals", price: 3500, max: 6, duration: "2.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One evening of theory, two long days out. You leave able to plan a day, read some terrain, read and understad the terms in the forecast and run a companion rescue with good technique." },
    { id: "avalanche-advanced-level 2", family: "Avalanche education", name: "Avalanche Advanced", price: 4700, max: 6, duration: "3.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Snowpack testing, independent hazard assessment, group management and complex rescue. For people who already avoid terrain and now want to choose it." },
    { id: "snowpack-season-lab-level 4", family: "Avalanche education", name: "Snowpack Season Lab", price: 20 000, max: 6, duration: "6 days across one winter", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One winter, six field days, the same six people and the same snowpack from first snow to spring melt-out. The layer you dig through in February, you watched form in November." },
    { id: "ski-mo-rope-skills", family: "Skills courses", name: "Ski-Mo Rope Skills", price: 4000, max: 5, duration: "2 days", season: "Jan – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Rope systems that matter on a ski descent, drilled until you don't have to think. Nothing decorative, no climbing curriculum." },
    { id: "glacier-crevasse-rescue", family: "Skills courses", name: "Glacier & Crevasse Rescue", price: 4000, max: 5, duration: "2 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Roped travel, holding a fall, load transfer, haul systems and getting yourself out, reading glacier features in lyngen and beyond." },
    { id: "steep-skiing-clinic", family: "Technical clinics", name: "Steep Skiing Clinic", price: 12700, max: 4, duration: "3 days", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Lyngen couloirs with a certified guide at one to four. A jump turn that holds on 45° firm, sluff management, line selection, and a limit you arrived at deliberately." },
    { id: "big-mountain-clinic", family: "Technical clinics", name: "Big Mountain Clinic", price: 14500, max: 5, duration: "3 days · one boat day", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Sea to summit on faces with no road to them. Reading a big face from the water, breaking it into decisions, and executing them in order." },
    { id: "ski-mountaineering-lab", family: "Technical clinics", name: "Ski Mountaineering Lab", price: 18000, max: 4, duration: "4 days · one hut night", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Crampons, axe, anchors, short-roping and ridge travel — for the Lyngen peaks that stop being a ski tour in the last two hundred metres." },
    { id: "ski-expedition-lab", family: "Expeditions", name: "Ski Expedition Lab", price: 35000, max: 4, duration: "5 days self-supported", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "A self-supported traverse of the Lyngen Alps, sleeping out, summits along the way. The qualifying trip for Svalbard, Greenland and the Alps." }
  ],

  // One line per date. "course" must match an "id" above.
  dates: [
    { course: "companion-rescue-evening", label: "Tue 8 Dec 2026", start: "2026-12-08", end: "2026-12-08", full: false },
    { course: "companion-rescue-evening", label: "Tue 15 Mar 2027", start: "2027-03-15", end: "2027-03-15", full: false },
    { course: "companion-rescue-evening", label: "Tue 5 Apr 2027", start: "2027-04-06", end: "2027-04-06", full: false },
    { course: "avalanche-fundamentals", label: "Mon 1 –Wed 3 Feb 2027", start: "2027-03-01", end: "2027-03-03", full: false },
    { course: "avalanche-advanced", label: "Thu 10 – Sun 13 Dec 2026", start: "2026-12-10", end: "2026-12-13", full: false },
    { course: "avalanche-advanced", label: "Thu 4 – Sun 7 Mar 2027", start: "2027-03-04", end: "2027-03-07", full: false },
    { course: "snowpack-season-lab", label: "Cohort 2027/28 · six sessions, Nov to May", start: "2027-11-07", end: "2028-05-31", full: false },
    { course: "steep-skiing-clinic", label: "Fri 2 – Sun 4 apr 2027", start: "2027-04-02", end: "2027-04-04", full: false },
    { course: "big-mountain-clinic", label: "Fri 16 – Sun 18 Apr 2027", start: "2027-04-16", end: "2027-04-18", full: false },
    { course: "ski-mountaineering-lab", label: "Thu 18 – Sun 21 Mar 2027", start: "2027-03-18", end: "2027-03-21", full: false },

  ],

  // Journal posts. Newest first. Use \n\n between paragraphs.
  articles: [
 { title: "About us", author: "Peak & Pack", date: "2026-11-26",
      body: 
        "I was born in Lyon, France were I grew up and started spending time outside
It wasn’t until i moved to BC, Canada, that my love for the outdoors really expressed itself. 
        After completing the TRU adventure guide studies, I went on to work ski guiding in the different ranges of BC during winter and expedition kayaking on the coast in the summer. 

Since 2019 I got the chance to start exploring, guiding and instructing in beautiful places around the globe with an emphasis on polar regions, including, Iceland, Greenland, Norway, Antarctica, Canada, spending time in raw and seldom visited places.

In 2026 I started Peak and Pack, from a desire to offer mountain education and share the skills and love for the mountains cultivated over the years.

When not in the field you can find me reading books, baking delicious good, or getting my hands dirty trying to farm or making DYI projects.

My piece of advice to anyone newer to the mountains is to “do your homework before going out, look up different forecasts read about the route, prepare your pack beforehand, read some blogs and most importantly go out with good friends.”

Clément speaks English, French, Spanish and his Norwegian is coming along.

PS: bring chocolate. }, 

   { title: "Mission, Vision, Values", author: "Peak & Pack", date: "2026-11-26",
      body: "A],Peak and Pack endeavours to make the mountains a safer place to be, by delivering insightful hands-on mountain education.  
Nature is our playground and we want to protect it, in doing so trying to have the lowest impact possible in a carbon heavy ski travel industry, we travel slow and leave only skin tracks behind.
Come as you are, everyone no matter your country of origins, your beliefs or values. We don’t discriminate we just appreciate and educate.
Community and connection is at the core of what we do, our goal is to offer the best mountain education possible to make this beautiful wild places we cherish more accessible and to create long lasting memories and spark new friendships. 

We recognise that we are operating on the traditional land of 

Ittunjárga / Rendalen 

Ivguláhku / Lakselvdalen / Lyngsdalen

Stuoranjárga / Tromsdalen

Sállir / Kvaløya

Nuorta Sážža / Nord-Senja

And other peoples across whose land we are grateful to guide, teach and share our respect for wild places. }, 
  ],
  
  
  // Photos: put the file in the "photos" folder, then add a line here.
  // Example:  { file: "lyngen-sunrise.jpg", caption: "Sunrise above Lyngenfjord" },
  photos: [
  ]
}
