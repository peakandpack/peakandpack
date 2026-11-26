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
    { id: "avalanche-fundamentals-level 1", family: "Avalanche education", name: "Avalanche Fundamentals", price: 3200, max: 6, duration: "2.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One evening of theory, two long days out. You leave able to plan a day, read some terrain, read and understad the terms in the forecast and run a companion rescue with good technique." },
    { id: "avalanche-advanced-level 2", family: "Avalanche education", name: "Avalanche Advanced", price: 4700, max: 6, duration: "3.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Snowpack testing, independent hazard assessment, group management and complex rescue. For people who already avoid terrain and now want to choose it." },
    { id: "snowpack-season-lab-level 4", family: "Avalanche education", name: "Snowpack Season Lab", price: 13900, max: 6, duration: "6 days across one winter", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One winter, six field days, the same six people and the same snowpack from first snow to spring melt-out. The layer you dig through in February, you watched form in November." },
    { id: "ski-mo-rope-skills", family: "Skills courses", name: "Ski-Mo Rope Skills", price: 5900, max: 5, duration: "2 days", season: "Jan – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Rope systems that matter on a ski descent, drilled until you don't have to think. Nothing decorative, no climbing curriculum." },
    { id: "glacier-crevasse-rescue", family: "Skills courses", name: "Glacier & Crevasse Rescue", price: 3500, max: 5, duration: "2 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
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
    { title: "Your mountain learning journey", author: "Peak & Pack", date: "2026-11-26",
      body: "Avalanche courses run to a maximum of six per instructor and technical clinics to four or five per guide. We do not raise that for anyone.\n\nIf a date shows as full, email us and we will open the next one rather than squeeze you into this one." }
  ,
 { title: "About us", author: "Peak & Pack", date: "2026-11-26",
      body: 
        "I was born in Lyon, France were I grew up and started spending time outside
It wasn’t until i moved to BC, Canada, that my love for the outdoors really expressed itself. After completing the TRU adventure guide studies, I went on to work ski guiding in the different ranges of BC during winter and expedition kayaking on the coast in the summer. 

Since 2019 I got the chance to start exploring, guiding and instructing in beautiful places around the globe with an emphasis on polar regions, including, Iceland, Greenland, Norway, Antarctica, Canada, spending time in raw and seldom visited places.

In 2026 I started Peak and Pack, from a desire to offer mountain education and share the skills and love for the mountains cultivated over the years.

When not in the field you can find me reading books, baking delicious good, or getting my hands dirty trying to farm or making DYI projects.

My piece of advice to anyone newer to the mountains is to “do your homework before going out, look up different forecasts read about the route, prepare your pack beforehand, read some blogs and most importantly go out with good friends.”

Clément speaks English, French, Spanish and his Norwegian is coming along.

PS: bring chocolate. } , 

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

And other peoples across whose land we are grateful to guide, teach and share our respect for wild places.,],
  { title: "resources / mountain library", author: "Peak & Pack", date: "2026-11-26",
      body: "We do not teach from a syllabus we invented. Every course, clinic and lab we run is built on published standards, and all of them are free to read. This page is the whole reading list — before your course, during your season, and afterwards.,
<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Resources — Peak &amp; Pack</title><style>@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
*{box-sizing:border-box}
.pp{--ink:#101418;--paper:#F7F8F6;--fjord:#14464F;--mute:#77858C;--rule:#D5DDDE;--warm:#B4552D;
 font-family:'IBM Plex Sans',system-ui,sans-serif;color:var(--ink);line-height:1.55;
 max-width:1000px;margin:0 auto;font-size:15px}
.pp *{margin:0}
.pp .kick{font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.16em;
 text-transform:uppercase;color:var(--fjord);margin-bottom:12px}
.pp h1{font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(30px,5vw,48px);
 line-height:.98;letter-spacing:-.02em;text-transform:uppercase}
.pp h1 span{color:var(--fjord)}
.pp .lede{font-size:17px;max-width:58ch;margin-top:16px;color:#3d474c}
.pp h2{font-family:Archivo,sans-serif;font-weight:900;font-size:13px;letter-spacing:.14em;
 text-transform:uppercase;color:var(--fjord);margin:44px 0 4px;padding-bottom:8px;
 border-bottom:1px solid var(--rule)}
.pp h3{font-family:Archivo,sans-serif;font-weight:700;font-size:18px;margin-bottom:3px}
.pp .row{display:grid;grid-template-columns:1fr auto;gap:12px 28px;align-items:start;
 padding:20px 0;border-bottom:1px solid var(--rule)}
.pp .meta{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;
 color:var(--mute);text-transform:uppercase;margin-bottom:6px}
.pp .row p{color:#3d474c;max-width:62ch;font-size:14.5px}
.pp .price{text-align:right;white-space:nowrap}
.pp .price b{font-family:Archivo,sans-serif;font-weight:900;font-size:24px;display:block}
.pp .price span{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--mute);
 letter-spacing:.08em;text-transform:uppercase}
.pp .cta{display:inline-block;margin-top:9px;background:var(--ink);color:var(--paper);
 text-decoration:none;padding:9px 18px;font-family:Archivo,sans-serif;font-weight:900;
 font-size:11px;letter-spacing:.1em;text-transform:uppercase}
.pp .cta:hover{background:var(--fjord)}
.pp .note{margin:24px 0;padding:16px 20px;background:#EAEFEF;border-left:3px solid var(--fjord);
 font-size:14px}
.pp .note b{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;
 text-transform:uppercase;color:var(--fjord);display:block;margin-bottom:5px}
.pp a{color:var(--fjord)}
.pp .res{padding:16px 0;border-bottom:1px solid var(--rule)}
.pp .res a{font-family:Archivo,sans-serif;font-weight:700;font-size:16px;text-decoration:none}
.pp .res a:hover{text-decoration:underline}
.pp .res .u{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--mute);
 display:block;margin:2px 0 5px;word-break:break-all}
.pp .res p{color:#3d474c;font-size:14px;max-width:70ch}
.pp .free{display:inline-block;font-family:'IBM Plex Mono',monospace;font-size:9.5px;
 letter-spacing:.1em;text-transform:uppercase;color:var(--warm);border:1px solid var(--warm);
 padding:1px 6px;margin-left:8px;vertical-align:2px}
@media(max-width:700px){.pp .row{grid-template-columns:1fr}.pp .price{text-align:left}}
</style></head><body style='margin:0;background:#F7F8F6;padding:28px 20px'>
<!-- ═══ PASTE EVERYTHING BELOW INTO A SQUARESPACE CODE BLOCK ═══ -->
<div class='pp'><div class='kick'>Resources</div><h1>Everything we<br><span>build from</span></h1><p class='lede'>We do not teach from a syllabus we invented. Every course, clinic and lab we run is built on published standards, and all of them are free to read. This page is the whole reading list — before your course, during your season, and afterwards.</p><h2>Before your course</h2><div class='res'><a href='https://avysavvy.avalanche.ca/en-ca/about-avy-savvy'>Avy Savvy — Avalanche Canada</a><span class='free'>Free</span><span class='u'>https://avysavvy.avalanche.ca/en-ca/about-avy-savvy</span><p>A free, genuinely well-built online tutorial covering avalanche formation, terrain, the forecast and companion rescue. Written as a precursor to a first avalanche course. If you do one thing before Avalanche Fundamentals, do this.</p></div><div class='res'><a href='https://www.varsom.no/en/avalanche-bulletins/'>Varsom — avalanche bulletins</a><span class='free'>Free</span><span class='u'>https://www.varsom.no/en/avalanche-bulletins/</span><p>The Norwegian forecast, published daily for 23 regions from 1 December to 31 May. Start reading it now, even for days you are not going out. Fluency comes from repetition.</p></div><div class='res'><a href='https://www.varsom.no/en/about/regobs/'>Varsom Regobs app</a><span class='free'>Free</span><span class='u'>https://www.varsom.no/en/about/regobs/</span><p>Forecasts, observations, offline maps and slope-angle shading for Norway and Svalbard, in your pocket. Install it before you arrive.</p></div><h2>The tools we teach with</h2><div class='res'><a href='https://www.regobs.no'>regObs</a><span class='free'>Free</span><span class='u'>https://www.regobs.no</span><p>Where observations are filed and read. We ask every participant to start contributing — the discipline of writing down what you saw is the skill, and the entry is a by-product.</p></div><div class='res'><a href='https://www.senorge.no'>seNorge</a><span class='free'>Free</span><span class='u'>https://www.senorge.no</span><p>Snow depth, temperature and wind history, plus slope-angle maps under “helning”. This is what we use to reconstruct the fortnight before your course.</p></div><div class='res'><a href='https://www.xgeo.no'>xgeo.no</a><span class='free'>Free</span><span class='u'>https://www.xgeo.no</span><p>NVE's modelled snow and weather layers. Heavier going than seNorge, and the tool the Season Lab uses to work out what happened between sessions.</p></div><h2>The standards behind the courses</h2><p class='lede' style='font-size:14.5px;margin:14px 0 4px'>Our avalanche teaching follows the Norsk Fjellsportforum national standard and the European Avalanche Warning Services definitions. Our mountain-skills teaching follows the ACMG and IFMGA technical framework. All of it is public, and worth reading if you want to know exactly what you are being taught and why.</p><div class='res'><a href='https://fjellsportforum.no/wp-content/uploads/2025/12/NF-Nasjonal-standard-2026.pdf'>Norsk Fjellsportforum — Nasjonal Standard</a><span class='free'>Free</span><span class='u'>https://fjellsportforum.no/wp-content/uploads/2025/12/NF-Nasjonal-standard-2026.pdf</span><p>The governing document for Norwegian mountain-sport instruction: learning goals, the instructor ladder and the approval requirements. Our Fundamentals and Advanced courses are built directly from the skred chapters.</p></div><div class='res'><a href='https://fjellsportforum.no/arrangor/kursmaler/'>NF course templates (kursmaler)</a><span class='free'>Free</span><span class='u'>https://fjellsportforum.no/arrangor/kursmaler/</span><p>The content templates for grunnkurs and videregående skred. This is the syllabus your course is measured against.</p></div><div class='res'><a href='https://www.brattkompetanse.no'>Brattkompetanse</a><span class='free'>Free</span><span class='u'>https://www.brattkompetanse.no</span><p>Where your completed course is registered, and where you apply if you later want to progress toward instructing.</p></div><div class='res'><a href='https://www.avalanches.org/standards/avalanche-danger-scale/'>EAWS — avalanche danger scale and problems</a><span class='free'>Free</span><span class='u'>https://www.avalanches.org/standards/avalanche-danger-scale/</span><p>The five-level scale and the avalanche problem definitions at source, agreed across Europe. Varsom follows these exactly, so this is the vocabulary the forecast is written in.</p></div><div class='res'><a href='https://avalanche.ca/training'>Avalanche Canada — training programme</a><span class='free'>Free</span><span class='u'>https://avalanche.ca/training</span><p>The AST 1 and AST 2 syllabus outlines. We teach to the Norwegian standard, but the Canadian curriculum is the clearest public statement of what a recreational avalanche course should cover, and we use its structure.</p></div><h2>Going further</h2><p class='lede' style='font-size:14.5px;margin:14px 0 4px'>Free, substantial, and written by the people who set the standards. None of this is introductory, and all of it rewards a winter of reading.</p><div class='res'><a href='https://ifmga.net/news/acmg-ski-guide-manual-is-now-available-to-the-public'>ACMG Ski Guide Manual</a><span class='free'>Free</span><span class='u'>https://ifmga.net/news/acmg-ski-guide-manual-is-now-available-to-the-public</span><p>Three hundred pages of ski-guiding technique from the Association of Canadian Mountain Guides, released publicly. The single best reference for everything in our clinics, labs and rope courses.</p></div><div class='res'><a href='https://acmg.ca/technical-manuals/'>ACMG technical manuals</a><span class='u'>https://acmg.ca/technical-manuals/</span><p>Discipline-specific manuals covering alpine, rock and ski guiding to a certification standard. Anchors, short-roping, glacier travel and crevasse rescue.</p></div><div class='res'><a href='https://www.avalancheassociation.ca/page/GuidelinesStandards'>CAA guidelines and standards</a><span class='free'>Free</span><span class='u'>https://www.avalancheassociation.ca/page/GuidelinesStandards</span><p>The Canadian Avalanche Association's observation and recording standards. OGRS 2024 is a free download and is the format our snow profiles use.</p></div><div class='res'><a href='https://static1.squarespace.com/static/59d2a0f0e9bfdf20d6d654b7/t/5a1af2a5652dea2e1a5ea055/1511715529879/AAA_SWAG_Web+2.pdf'>Snow, Weather and Avalanches (SWAG)</a><span class='free'>Free</span><span class='u'>https://static1.squarespace.com/static/59d2a0f0e9bfdf20d6d654b7/t/5a1af2a5652dea2e1a5ea055/1511715529879/AAA_SWAG_Web+2.pdf</span><p>The American observation guidelines, licensed from the CAA and free as a PDF. The most accessible complete observation standard if you want to build your own field templates.</p></div><div class='res'><a href='https://ifmga.net/professional-mountain-guide/training-and-assessment'>IFMGA — training and assessment</a><span class='u'>https://ifmga.net/professional-mountain-guide/training-and-assessment</span><p>The competency framework behind every national guides association, if you are curious what certification actually requires.</p></div><div class='res'><a href='https://www.nortind.no/en/'>NORTIND</a><span class='u'>https://www.nortind.no/en/</span><p>Norway's IFMGA member association. Worth knowing: Norway sets no legal qualification requirement for guiding, so certification is something you should ask any provider about — including us.</p></div><div class='note'><b>One thing worth knowing about November</b>The Norwegian avalanche bulletin only publishes from 1 December to 31 May. If you are on a November course there is no forecast to read, so we teach you to build the picture yourself from regObs, seNorge and what is in front of you. It is harder, and it is the more useful skill.</div></div>

  
  
  // Photos: put the file in the "photos" folder, then add a line here.
  // Example:  { file: "lyngen-sunrise.jpg", caption: "Sunrise above Lyngenfjord" },
  photos: [
  ]
};
