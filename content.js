/*
    PEAK AND PACK: EDIT YOUR WEBSITE'S CONTENT HERE
    ------------------------------------------------
    This is the only file you normally need to change.
    - Keep the quote marks "like this" and the commas at the end of lines.
    - Dates use the format YYYY-MM-DD (year-month-day), for example 2027-01-22.
    - Dates that have passed disappear from the Schedule by themselves.
    - To mark a date as full, change  full:false  to  full:true  on that line.

    GitHub Pages note: this file must be plain, valid JavaScript and must load
    from your repo. Save it as  site-config.js  in the same folder as your
    HTML files, then reference it in every HTML page like this:

        <script src="site-config.js"></script>
        <script src="course-details.js" defer></script>

    It must NOT have "type=module" and it must be loaded before the main
    script that reads window.SITE.

    COURSE DETAILS (the drop-down descriptions)
    Each course has a short  desc  (used on cards) and an optional  details
    block (used in the drop-down and the Courses menu). Price, duration, group
    size, season and dates always come from the course line and the dates list
    below, so you only change them in one place. Inside details:
      kicker, tagline  - the small label and the one-line hook
      intro            - list of paragraphs
      levels           - avalanche danger levels the course prepares you for, e.g. [1,2,3]
      commitment       - 1 to 5
      after            - "What you can do afterwards"
      days             - "How the days run": ["when", "title", "text"]
      included / bring - the two "Included" columns
      who              - "Who this is for"
    Leave details out for a course and it simply shows its short desc.
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

    { id: "intro-ski-touring", family: "Avalanche education", name: "Intro to Ski Touring", price: 3200, max: 6, duration: "2 days", season: "Dec – Apr", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Skins, transitions, kick turns and how a touring day actually runs. For strong resort skiers who have never left the lift." },

    { id: "avalanche-fundamentals", family: "Avalanche education", name: "Avalanche Fundamentals", price: 3500, max: 6, duration: "2.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One evening of theory, two long days out. You leave able to plan a day, read some terrain, read and understand the terms in the forecast and run a companion rescue with good technique.",
      details: {
        kicker: "Avalanche education · NF Grunnkurs Skred",
        tagline: "Learn to turn around.",
        intro: [
          "Most avalanche accidents are not caused by snow nobody understood. They are caused by competent skiers who had already decided where they were going. This course gives you a method for reading the avalanche bulletin, the weather forecast, and the building blocks for decision making in the winter mountain environment.",
          "Two days, on the Tromsø mainland and Kvaløya, built to the Norsk Fjellsportforum national standard. One evening indoors, two long days out. You get to ski some lines. The focus is on reading the terrain and understanding how the bulletin applies to it while on the skin track, not on a whiteboard."
        ],
        levels: [1, 2],
        commitment: 2,
        after: [
          "Plan tomorrow's tour from the varsom.no bulletin and a slope-angle map, the night before.",
          "Recognise 30°+ terrain by eye and know which parts of it are connected to what is above you.",
          "Run a single-burial companion rescue: search, pinpoint, probe, strategic shovelling.",
          "Read a snow profile well enough to know when you are looking at a problem you cannot solve.",
          "Say 'not today' out loud, to your friends, without it being awkward."
        ],
        days: [
          ["Evening", "Theory, 3 hours", "Avalanche formation, the five danger levels, avalanche problems and their implications, the Norwegian bulletin, slope-angle mapping, and how to build a tour plan with a turnaround written into it."],
          ["Field day one", "Transceiver and terrain", "Transceiver work, route finding. Terrain recognition on the move. First profile. We ski what the bulletin allows and talk about why."],
          ["Field day two", "Your plan, our coaching", "You plan it, and you get coached through it. Full rescue scenario, debrief, and an honest look at what the group got wrong."]
        ],
        included: ["NF-standard course delivery and certificate", "Coaching and feedback", "Slope-angle maps and tour-planning templates", "Digital pre-course pack, sent a week ahead"],
        bring: ["Skis, skins, boots and personal clothing", "Beacon, probe and shovel (loan available)", "Transport to the meeting point", "Food and drink"],
        who: "You can ski a red run in variable snow and you have been on skins at least once. No avalanche background needed. November and December dates run in low light or polar night."
      } },

    { id: "avalanche-advanced", family: "Avalanche education", name: "Avalanche Advanced", price: 4700, max: 6, duration: "3.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Snowpack testing, independent hazard assessment, group management and complex rescue. For people who already avoid terrain and now want to choose it.",
      details: {
        kicker: "Avalanche education · NF Videregående Skredkurs",
        tagline: "Stop guessing. Observe. Start making informed decisions.",
        intro: [
          "Fundamentals teaches you which terrain to avoid. This course is about choosing terrain, which is a much harder problem, because you have to make decisions based on incomplete information.",
          "Three and a half days built around one question: what is actually going on in this snowpack, how are the layers changing, and how do I adjust my plan? You will do more digging, more testing, and considerably more arguing than on any course you have taken before."
        ],
        levels: [2, 3],
        commitment: 3,
        after: [
          "Build and defend your own hazard assessment, and find the missing clues in the regional bulletin.",
          "Run ECT, PST and hand-shear tests and, more importantly, know what each one cannot tell you.",
          "Track a persistent weak layer across aspects and elevations over a multi-day period.",
          "Manage a group through avalanche terrain: spacing, islands of safety, exposure timing, communication.",
          "Handle a multiple-burial scenario with a rescue leader and assigned roles."
        ],
        days: [
          ["Thu eve", "Theory", "Snow metamorphism, persistent problems, the anatomy of the bulletin, and where forecasters are least certain."],
          ["Fri", "Snowpack day", "Profiles across aspects. Test comparison. We build a picture and then go looking for what would break it."],
          ["Sat", "Decision day", "Lyngen. A real objective, planned by you, with instructor back-up if needed."],
          ["Sun", "Rescue & review", "Multiple burial scenarios, then a full debrief and a plan for what you practise next."]
        ],
        included: ["NF-standard course delivery and certificate", "Coaching and feedback by a professional instructor", "Full snow-study kit for the course", "Digital pre-course pack"],
        bring: ["Transportation to and from the course", "Personal ski and safety equipment", "Accommodation", "Food and drink"],
        who: "NF Grunnkurs Skred, AST 1, AIARE 1 or equivalent, plus at least one season of independent touring. Comfortable with most sorts of backcountry terrain and conditions."
      } },

    { id: "snowpack-season-lab", family: "Avalanche education", name: "Snowpack Season Lab", price: 20000, max: 6, duration: "6 days across one winter", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One winter, six field days, the same six people and the same snowpack from first snow to spring melt-out. The layer you dig through in February, you watched form in November.",
      details: {
        kicker: "Avalanche education · Season-long cohort",
        tagline: "One winter. Six days. The same snowpack, followed from November to May.",
        intro: [
          "Every avalanche course has the same flaw: you get three days of one snowpack, in one mood, and then you go home. The layer you dug through in February was born in November, and you never met it.",
          "This is the fix. Six field days spread across a single season with the same six people, tracking the same snowpack as it forms, weakens, heals and finally goes rotten in the spring. Between sessions you file observations. By April you are not guessing about the December crust, you were there when it formed."
        ],
        levels: [2, 3, 4],
        commitment: 4,
        after: [
          "Follow one snowpack from first accumulation to spring melt-freeze and understand how it got that way.",
          "Keep a season-long observation log good enough to be useful to somebody else.",
          "Recognise the recurring Troms snow-climate patterns: the wind-slab cycles, the buried surface hoar, the rain-on-snow events.",
          "Build the judgement to disagree with a bulletin for reasons you can write down.",
          "Enter next winter with a documented baseline instead of a blank page, and solid knowledge of snowpack mechanisms."
        ],
        days: [
          ["Session 1 · Nov", "Early season", "Ground layer, first crusts, and the observation protocol you will use all winter."],
          ["Session 2 · Dec", "Polar night", "Working with headlamps and thin cover. Persistent grain formation."],
          ["Session 3 · Jan", "Mid-winter", "Wind slab cycles on Kvaløya. Reactivity testing."],
          ["Session 4 · Feb", "Deep instability", "Full profiles. Tracking the layers you met in November."],
          ["Session 5 · Mar", "Peak season", "Lyngen. Big terrain, real decisions, your call."],
          ["Session 6 · May", "Spring", "Melt-freeze, wet-snow timing, and the season review."]
        ],
        included: ["Six full field days with the same instructor", "Season observation platform and log review", "Snow-study kit throughout", "Ferry and field transport", "Cohort group for the whole winter"],
        bring: ["Personal ski and safety equipment", "Food and accommodation"],
        who: "Passionate riders, lifers, locals and foreign locals alike, wanting to go in depth and with the intention to ski at least twenty days this winter."
      } },

    { id: "ski-mo-rope-skills", family: "Skills courses", name: "Ski-Mo Rope Skills", price: 4000, max: 5, duration: "2 days", season: "Jan – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Rope systems that matter on a ski descent, drilled until you don't have to think. Nothing decorative, no climbing curriculum.",
      details: {
        kicker: "Skills course · Ski-Mo rope work",
        tagline: "The rope is a tool for skiing. Let's get knotty.",
        intro: [
          "Climbers learn rope skills over years and use them constantly. Ski mountaineers use maybe six techniques, in gloves, on a wind-blasted col, with a partner who is getting cold.",
          "Two days on exactly the systems that come up in ski terrain, drilled until they feel natural. Learn the systems, how they fail, and what to do if they do. Skills now, ski later."
        ],
        levels: [1, 2],
        commitment: 3,
        after: [
          "Systems and knots, tied cold, in gloves, without thinking about it.",
          "Rappel in ski boots with skis on your pack, and set the anchor so you leave nothing behind you regret.",
          "Belay a partner over a step and lower them into a couloir entrance.",
          "Escape the system, ascend a rope, and improvise a haul with what is already in your pack.",
          "Decide when the rope is making you safer and when it is just making you slower."
        ],
        days: [
          ["Day 1", "Systems", "Knots, harness, anchors on snow and rock, rappelling, and rope management in deep snow."],
          ["Day 2", "Application", "Scenario day in ski terrain: lowering into an entrance, a rescue haul, and a full run-through under time pressure."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:5", "Rope, harness, helmet and hardware can be loaned"],
        bring: ["Skis, boots and avalanche equipment", "Field transport", "Food and accommodation"],
        who: "Ski touring experience. Rope background needed. This is the course that gets you further than the crevasse rescue."
      } },

    { id: "glacier-crevasse-rescue", family: "Skills courses", name: "Glacier & Crevasse Rescue", price: 3500, max: 5, duration: "2 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Roped travel, holding a fall, load transfer, haul systems and getting yourself out, reading glacier features in Lyngen and beyond.",
      details: {
        kicker: "Skills course · Brevandring og redning",
        tagline: "You get one attempt at a crevasse rescue, and you will be cold when you do it.",
        intro: [
          "Crevasse rescue is the most useful skill in the mountains. It is learned in a weekend, forgotten in a season, and needed once, without warning, usually while wearing a heavy pack and being the only person still on the surface.",
          "Two days on the Lyngen glaciers doing it properly: roped travel that actually holds a fall, a haul system you can build quickly, and enough repetition that the sequence survives the adrenaline. We run it from November, when thin cover leaves the crevasses visible and you can see exactly what you are being taught about, and again in spring when the light is long."
        ],
        levels: [1, 2],
        commitment: 3,
        after: [
          "Rope up a ski team correctly (spacing, knots, coils) for the conditions in front of you.",
          "Hold a fall, build an anchor, and transfer the load without letting go of anything.",
          "Build a 3:1 and a 6:1 from what is on your harness, and know which one you actually need.",
          "Understand how to ascend a rope out of a crevasse under your own power.",
          "Read a glacier surface for what the snow bridges are doing this week: bare and obvious in November, buried and lying to you in April."
        ],
        days: [
          ["Day 1", "Systems on solid ground", "Roped travel, arrest, anchors, load transfer, haul construction, prusiking. Drilled to last."],
          ["Day 2", "On the glacier", "Real terrain, real edges, scenarios with packs on. One full rescue each, minimum."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:5", "Rope, harness, helmet, crampons and rescue hardware"],
        bring: ["Skis, boots and avalanche equipment", "Field transport", "Food and accommodation"],
        who: "Ski touring experience and basic fitness. Rope skills helpful but not required. November dates run on short days and headlamps, so bring a good one."
      } },

    { id: "steep-skiing-clinic", family: "Technical clinics", name: "Steep Skiing Clinic", price: 12700, max: 4, duration: "3 days", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Lyngen couloirs with a certified guide at one to four. A jump turn that holds on 45° firm, sluff management, line selection, and a limit you arrived at deliberately.",
      details: {
        kicker: "Technical clinic · Bratt skikjøring",
        tagline: "Did somebody say Raide? Forty-five degrees is a technique problem long before it is a courage problem.",
        intro: [
          "Almost everyone who wants to ski steeper can already ski steeper than they do. What they are missing is a repeatable technique that holds up when the consequence of a fall changes, and a way of choosing lines that does not rely on hope.",
          "Three days in the Lyngen couloirs with a certified guide and three other skiers. Reading terrain, visualising, and getting coached. We start on angles you are comfortable on and build technique upward, until the movement is drilled into your muscle memory. Then we go and use it."
        ],
        levels: [1, 2],
        commitment: 4,
        after: [
          "A jump turn that works on 45° in firm snow, from a stable platform, both directions.",
          "Sluff management: where it goes, where you go, and in what order.",
          "Line selection: fall lines, exits, terrain traps, and where the snow will actually be good.",
          "Rope work for the entrance you cannot see: a short belay and a simple rappel into a line.",
          "A calibrated sense of your own limit, arrived at deliberately rather than by accident."
        ],
        days: [
          ["Day 1", "Technique", "Progressive angle on a safe slope. Video, feedback, repetition. Rope basics for steep entries."],
          ["Day 2", "Application", "A moderate couloir, chosen for conditions. Bootpacking technique, sluff management. Coached decision making."],
          ["Day 3", "The objective", "One line, picked from a shortlist on the morning of, planned by the group and led as far as the group can lead it."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:4", "Small group feedback and coaching to progress faster", "Rope, harness, and technical group kit", "Video review sessions"],
        bring: ["Skis, boots, poles, helmet and avalanche equipment", "Lyngen ferry and field transport", "Accommodation and food", "Travel to Tromsø"],
        who: "Confident off-piste on any in-bounds terrain, comfortable on 40° in variable snow, and a solid kick turn. Basic rope work understanding. Climbing background helpful but not necessary."
      } },

    { id: "big-mountain-clinic", family: "Technical clinics", name: "Big Mountain Clinic", price: 14500, max: 5, duration: "3 days · one boat day", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Sea to summit on faces with no road to them. Reading a big face from the water, breaking it into decisions, and executing them in order.",
      details: {
        kicker: "Technical clinic · Boat-access terrain",
        tagline: "Big lines are small decisions, made in the right order.",
        intro: [
          "The terrain around Tromsø runs from tidewater to 1 800 metres with no road in between, which means the best fall lines on this coast can be approached by boat and skied straight back down to salt water. Everything else on this course exists to make that day go well.",
          "Three days of large-format skiing: reading a face from below, breaking it into decisions, and executing them in sequence with a group that knows what everyone else is doing. One day is boat-access, on a face most people only see from the ferry."
        ],
        levels: [1, 2],
        commitment: 3,
        after: [
          "Read a big face from the fjord and break it into skiable segments with real decision points.",
          "Manage exposure in a group: who goes, where they stop, and who is watching.",
          "Ski powder, breakable crust and spring corn in the same descent without changing your mind halfway.",
          "Time an aspect for the snow you want rather than the summit you wanted.",
          "Plan a summit-to-sea descent, including the part where the boat has to be somewhere."
        ],
        days: [
          ["Day 1", "Fundamentals of scale", "A mainland face. Segmenting, spacing, regrouping points, and video on technique in bigger snow."],
          ["Day 2", "Big mountain day", "Summit to sea, tide permitting."],
          ["Day 3", "Group objective", "Chosen on the morning from what the week has given us, planned and led by the group."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:5", "RIB charter for the boat day", "Video review"],
        bring: ["Personal ski and avalanche equipment", "Ferry and field transport", "Accommodation and food", "Travel to Tromsø"],
        who: "Strong all-mountain skiing, strong fitness up and down, at least one season of ski touring, and an avalanche course. You should be able to do 1 200 m of ascent without it being the story of the day. You can already ski steeper terrain and are looking at getting into more complex line planning."
      } },

    { id: "ski-mountaineering-lab", family: "Technical clinics", name: "Ski Mountaineering Lab", price: 18000, max: 4, duration: "4 days · one hut night", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Crampons, axe, anchors, short-roping and ridge travel, for the Lyngen peaks that stop being a ski tour in the last two hundred metres.",
      details: {
        kicker: "Progression · Skifjellklatring",
        tagline: "The summit is a skiing problem with a climbing section in the middle.",
        intro: [
          "There is a category of Lyngen peak that is a straightforward ski tour until the last two hundred metres, at which point it becomes something else: a corniced ridge, a bootpack on 50°, a short pitch of ice. Most people turn around there. This course is about not having to.",
          "Four days covering the transition from ski touring to ski mountaineering: crampons and axe on skis, ridge movement, short-roping, anchors in snow, and the logistics of carrying it all uphill with finesse."
        ],
        levels: [1, 2],
        commitment: 4,
        after: [
          "Move confidently on crampons with skis on your pack, on firm snow and mixed ground.",
          "Self-arrest, properly, with the axe you actually own.",
          "Build a snow anchor you would hang on, and know which of the four you should use when.",
          "Travel roped on a ridge and short-rope a partner over a step.",
          "Pack, transition and time a mountaineering day so the descent still happens in good snow."
        ],
        days: [
          ["Day 1", "Ground school", "Crampon technique, axe use, self-arrest until it is reflex. Knots and harness work."],
          ["Day 2", "Anchors and systems", "Snow and rock anchors, short-roping, rappelling in ski boots, and moving together."],
          ["Day 3", "Applied ridge", "A real ridge with a real step. One night in a hut."],
          ["Day 4", "Objective", "A summit that requires the whole toolkit, then ski it."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:4", "Rope, harness, helmet, crampons and axe on loan (your own preferred)", "One night's hut accommodation"],
        bring: ["Ferry and field transport", "Skis, boots, poles and avalanche equipment", "Food", "Travel to Tromsø"],
        who: "Comfortable touring on 35–40° on variable surface conditions, previous avalanche training, and able to climb 1 200 m per day, four days in a row, without being wrecked so your brain can still learn along the way. At least one season of ski touring experience is recommended. No prior climbing experience required."
      } },

    { id: "ski-expedition-lab", family: "Expeditions", name: "Ski Expedition Lab", price: 35000, max: 4, duration: "5 days self-supported", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "A self-supported traverse of the Lyngen Alps, sleeping out, summits along the way. The qualifying trip for Svalbard, Greenland and the Alps.",
      details: {
        kicker: "Expedition · Selvforsynt fjellskiferd",
        tagline: "Everything you need on your back, from the fjord to the summit and back to the fjord.",
        intro: [
          "An expedition is not a long ski tour. It is a different discipline, in which skiing is maybe a third of the problem and the rest is weight, food, water, warmth, weather and the fact that you cannot go home at four o'clock.",
          "Five days crossing the Lyngen Alps self-supported, sleeping out, skiing summits along the way. This is a training expedition: you will be doing the planning, the cooking, the navigating and the calls, with a guide alongside who intervenes as little as possible. It is a building block for going out on your own ski expeditions."
        ],
        levels: [1, 2],
        commitment: 5,
        after: [
          "Plan a multi-day self-supported ski traverse: route, food weights, fuel, bail-outs and contingency days.",
          "Build a camp in wind, on snow, that you would be happy to wake up in.",
          "Ski a heavy pack well, because a fall on day four with 22 kilos is a different event.",
          "Navigate in flat light and whiteout with map, compass and GPS, and know when to stop.",
          "Judge weather windows, and accept the ones you get rather than the ones you wanted."
        ],
        days: [
          ["Day 0", "Preparation", "Look at conditions, decide on a destination, build a food plan, route plan, gear list and a plan B, go shopping and pack."],
          ["Day 1", "Load and launch", "Kit inspection, food distribution, route brief. Ski in from the fjord and build camp one."],
          ["Day 2", "Movement", "Traverse day with a summit if the weather allows. Camp craft, water, and system refinement."],
          ["Day 3", "Summit", "The big objective of the trip, from camp, light packs."],
          ["Day 4", "Navigation", "Movement in whatever the weather gives us. This is the day you learn the most."],
          ["Day 5", "Exit", "Descent to salt water, and a debrief that is honest about what would need to change for Svalbard."]
        ],
        included: ["IFMGA/ACMG/Nortind guide at 1:4", "All expedition food", "Rope and technical group equipment", "Transport to and from the trailheads"],
        bring: ["Group tents, stoves, fuel and repair kit", "Personal ski, camping and avalanche equipment (hire available)", "Accommodation in Tromsø either side", "Travel to Tromsø"],
        who: "Two years of independent ski touring experience, previous winter camping or a strong appetite for it, and the fitness to move 6–8 hours a day for five days with a loaded pack."
      } }
  ],

  // One line per date. "course" must match an "id" above.
  dates: [
    { course: "companion-rescue-evening", label: "Tue 8 Dec 2026",            start: "2026-12-08", end: "2026-12-08", full: false },
    { course: "companion-rescue-evening", label: "Tue 15 Mar 2027",           start: "2027-03-15", end: "2027-03-15", full: false },
    { course: "companion-rescue-evening", label: "Mon 5 Apr 2027",            start: "2027-04-05", end: "2027-04-05", full: false },
    { course: "avalanche-fundamentals",   label: "Mon 1 – Wed 3 Mar 2027",    start: "2027-03-01", end: "2027-03-03", full: false },
    { course: "avalanche-advanced",       label: "Thu 10 – Sun 13 Dec 2026",  start: "2026-12-10", end: "2026-12-13", full: false },
    { course: "avalanche-advanced",       label: "Thu 4 – Sun 7 Mar 2027",    start: "2027-03-04", end: "2027-03-07", full: false },
    { course: "snowpack-season-lab",      label: "Cohort 2027/28 · six sessions, Nov to May", start: "2027-11-07", end: "2028-05-31", full: false },
    { course: "steep-skiing-clinic",      label: "Fri 2 – Sun 4 Apr 2027",    start: "2027-04-02", end: "2027-04-04", full: false },
    { course: "big-mountain-clinic",      label: "Fri 16 – Sun 18 Apr 2027",  start: "2027-04-16", end: "2027-04-18", full: false },
    { course: "ski-mountaineering-lab",   label: "Thu 18 – Sun 21 Mar 2027",  start: "2027-03-18", end: "2027-03-21", full: false }
  ],

  // Journal posts. Newest first. Each body is ONE string; use \n\n between paragraphs.
  articles: [
    {
      title: "Frequently Asked Questions",
      author: "Peak & Pack",
      date: "2026-11-26",
      body:
        "Which course to start with, what to bring, what happens when the weather turns, and what any of it is actually based on. If your question is not here, ask us, we would rather answer it before you book than after.\n\n" +
        "CHOOSING A COURSE\n\n" +
        "I have never had skins on. Where do I start?\n" +
        "Intro to Ski Touring. One evening indoors and two days out, for strong resort skiers who have never left the piste. It is a movement-skills course, skins on and off, transitions, kick turns, pacing an ascent, not an avalanche course. If you have toured a handful of times and want the safety side, go straight to Avalanche Fundamentals instead. The two work well back to back in the same season.\n\n" +
        "What is the difference between Avalanche Fundamentals and Avalanche Advanced?\n" +
        "Fundamentals teaches you which terrain to avoid. Advanced is about choosing terrain, a much harder problem, because the answer changes daily and nobody hands it to you. Fundamentals gets you planning a day from the forecast, recognising 30\u00b0-plus terrain, and running a companion rescue inside eight minutes. Advanced adds snowpack testing, an independent hazard assessment you can defend against the bulletin, group management in consequential terrain, and multiple-burial rescue leadership. Do not skip Fundamentals to save a weekend. Advanced assumes it, and a season of independent touring on top.\n\n" +
        "Is the Season Lab instead of a normal avalanche course, or as well as?\n" +
        "As well as, and afterwards. Every three-day course has the same structural flaw: you meet one snowpack, in one mood, for three days, and then go home. The layer you dig through in February was born in November and you never met it. The Season Lab is six field days across one winter with the same six people, tracking the same snowpack from first snow to spring melt-out. It is the only product we run that fixes that. Bring an avalanche course and the intention to ski at least twenty days.\n\n" +
        "Steep Skiing Clinic or Big Mountain Clinic?\n" +
        "Steep is about technique on a narrow, consequential line. Big Mountain is about sequencing a large face with a group. Steep Skiing runs at one guide to four and builds a jump turn that holds on 45\u00b0 firm snow, plus sluff management and rope work for an entrance you cannot see into. Big Mountain runs one to five, includes a boat-access day, and is about reading a 1,200 m face from the water and breaking it into decisions the whole group understands. If your skiing is ahead of your line-reading, take Big Mountain. If it is the other way round, take Steep.\n\n" +
        "Do I need rope skills before the Ski Mountaineering Lab?\n" +
        "No. The Lab teaches crampons, axe, self-arrest, snow anchors and short-roping from scratch, and assumes no climbing background. Ski-Mo Rope Skills is the second-step course and can be seen as the prerequisite, but you can arrive with your own pre-existing skills. Take it if you want more repetition on the systems, or if you finished a clinic feeling the rope work was your weak link. Glacier & Crevasse Rescue is the one skill the Lab genuinely assumes but does not cover.\n\n" +
        "How do I know if I am ready for the Expedition Lab?\n" +
        "You need independent ski touring experience, previous winter camping or a real appetite for it, and the fitness to move six to eight hours a day for five days with a loaded pack. The honest test is the debrief on day five, which is where we give you a straight answer on expedition readiness. Most people book this course to find that out, and a vague answer would cheat them of the thing they paid for.\n\n" +
        "BOOKING, PAYMENT AND CANCELLATION\n\n" +
        "When do I pay?\n" +
        "In full, at least one month before your programme starts. Booking a date reserves your place; the balance is due by that deadline. Places are released first come, first served, and a date closes when it is full. If a date shows as sold out, email us, we would rather open the next date than squeeze an extra person into a group.\n\n" +
        "What if I need to cancel?\n" +
        "Our cancellation and refund terms are set out in full in the booking conditions you accept at checkout. Please read them before you book rather than after. The short version: the closer to the start date, the less recoverable the cost becomes, because by then the guide is committed, any boat charter is booked, and the place has been held off the market. Travel and cancellation insurance is strongly recommended and is not included in the price.\n\n" +
        "What if you cancel \u2014 bad weather, not enough people, or unsafe conditions?\n" +
        "We will not run a course into conditions that make it unsafe or pointless, and we would rather say so than deliver something hollow. If we cancel a date outright you are offered a transfer to another date or a refund, per the booking conditions. If conditions change the plan mid-course, a different objective, a different valley, a boat day moved, the course still runs. Adapting the objective is normal practice here and is not grounds for a refund.\n\n" +
        "Can you run a course privately for my group?\n" +
        "Yes. Private and custom courses are available for most of the catalogue, and the group-size limits still apply. We can raise the ratio for a private booking, and might have to adjust the instructor ratio to keep the quality of the learning for your benefit. Email us with the dates, the group, and roughly what you want to get out of it.\n\n" +
        "GROUP SIZE, GUIDES AND STANDARDS\n\n" +
        "How many people will be on my course?\n" +
        "Group size is part of the product, not a variable we flex when a date sells well. Avalanche courses: maximum six per instructor. Technical clinics and labs: four or five per guide. Steep Skiing, Ski Mountaineering Lab, Expedition Lab: four per guide. If a date is full, it is full.\n\n" +
        "What are your courses actually based on?\n" +
        "Avalanche teaching follows the Norsk Fjellsportforum national standard, the governing document for mountain-sport instruction in Norway. Our danger-scale and avalanche-problem vocabulary follows the European Avalanche Warning Services definitions, which is what the Norwegian forecast is written in. Mountain-skills teaching follows the ACMG and IFMGA technical framework. We also use Avalanche Canada's published curriculum as a teaching resource, because it is the clearest public statement of what a recreational avalanche course should cover. All of it is public, and the whole reading list is on our resources page.\n\n" +
        "Is guiding regulated in Norway?\n" +
        "No, and that is worth knowing. Norway sets no legal qualification requirement for selling mountain guiding or avalanche instruction. Anyone can put up a website. So ask any provider, including us, what their instructors are actually certified in and against which standard. Certification here is a market signal rather than a licence, which makes the question more important, not less. In that regard we make sure that all of our instructors and guides have solid knowledge and appropriate certification above the standard of what they will deliver, so that they can easily answer all your questions.\n\n" +
        "Will I get a certificate?\n" +
        "Courses run to the NF standard carry NF course completion, and your completed course is registered through Brattkompetanse. That registration matters if you later want to progress toward instructing; the NF ladder starts with Metodekurs Skred, for which our Advanced course is the prerequisite. Skills courses and clinics are not certifications. They are training. Nobody issues a certificate that says you can ski a couloir. But we will teach you hard skills and decision making so you can make the most of your ability.\n\n" +
        "SEASON, WEATHER AND DAYLIGHT\n\n" +
        "Why do you run avalanche courses in November?\n" +
        "Because the layers that matter in March are forming right now, and watching them form is a better education than being told about them later. There is a catch worth knowing: the Norwegian avalanche bulletin only publishes from 1 December to 31 May. On a November course there is no forecast to read. So we teach you to build the picture yourself from regObs, seNorge and what is in front of you, which is harder, and is a more transferable skill.\n\n" +
        "How much daylight will we actually have?\n" +
        "Mid-November gives roughly four and a half hours of usable light. Polar night runs from 27 November to 15 January, when the sun does not rise at all. By March you have a normal day, and by May it barely gets dark. We plan the short-season courses around this rather than pretending otherwise. Early starts, compressed field days, and head-torch work treated as a skill rather than an inconvenience. A good head torch with spare batteries is mandatory on every date, not just the dark ones, and keep the spares inside your jacket, because cold flattens lithium cells faster than you expect.\n\n" +
        "Why is Glacier & Crevasse Rescue offered in November as well as spring?\n" +
        "Thin early-season cover leaves crevasses open and visible. You can look at the thing you will later be guessing about. Spring students are learning to imagine what November students can simply see. Both work. November is the better classroom and spring gives you the long light.\n\n" +
        "What happens if the weather is bad?\n" +
        "We ski somewhere else, or we teach something else, or occasionally we do neither and say so. Tromsø weather makes plans provisional and a guide who ignores that is the problem, not the weather. On multi-day courses the objective is usually chosen on the morning of, from a shortlist. A clinic that downgrades its objective because the group or the conditions are not ready has taught the actual lesson.\n\n" +
        "EQUIPMENT\n\n" +
        "What do I need to bring?\n" +
        "Every course has a full gear list in its brochure, split into what you bring and what we provide. Across the board you will need: touring skis or splitboard, skins, boots and poles; layers for standing still in wind, not just moving in it, plus two pairs of gloves, one heavy; a 30\u201340 litre pack with a ski carry, goggles and sunglasses, and a head torch; more food and water than you think, and a notebook with a pencil, because pens freeze.\n\n" +
        "Do I need my own transceiver, probe and shovel?\n" +
        "Yes, ideally, because it is better to train with what you know and will use in the future, but we provide them for the duration of every course if needed. At a minimum you should have a 3-antenna transceiver that is less than 5 years old, with fresh batteries; it is a life-saving tool. Mammut Barryvox is industry standard, and Ortovox and BCA also offer strong alternatives, so you can take a first course without buying anything. By Avalanche Advanced you should own your own transceiver and know it properly. Learning the search on a borrowed unit and then buying a different one undoes some of what you paid for.\n\n" +
        "Can I hire touring skis and boots in Tromsø?\n" +
        "Yes, Tromsø Ski and Bike Rental and Tromsø Outdoor are great. Mention it when you book so there is time to sort it, because arriving on Friday evening to discover the shop has nothing in your size is a bad start to a weekend.\n\n" +
        "What technical kit do I need for the clinics and labs?\n" +
        "Harness, helmet, crampons and an axe, plus 3 locking carabiners and 3 non-locking carabiners. A triple-locking biner is a strong add-on for roping up, plus a 120 cm and 240 cm sling and 2 prusik cords. We loan ropes, screws and group hardware. One thing to check before you book a technical course: your boots must take an automatic or hybrid crampon. Check before coming; if you are unsure, send us the model.\n\n" +
        "PREPARING, AND WHAT COMES AFTER\n\n" +
        "What should I do before my course?\n" +
        "Read Avy Savvy, Avalanche Canada's free online tutorial. It is genuinely good, takes an evening, and every hour you spend on it is an hour we spend going further rather than covering the basics. Then start reading the daily forecast at varsom.no, including for days you are not going out. Fluency comes from repetition. Install the Varsom Regobs app before you arrive. Everything is linked on our resources page, and you will get a digital pre-course pack a week ahead.\n\n" +
        "How fit do I need to be?\n" +
        "For Intro to Ski Touring and the avalanche courses: enough to cover 600\u2013800 m of ascent without it being the story of the day. For Big Mountain, Steep Skiing and Ski Mountaineering, closer to 1,200 m. For the Expedition Lab, six to eight hours a day for five days with a loaded pack. Technique matters more than fitness on most of the catalogue, but being tired makes everyone a worse decision-maker, which is the part that actually matters.\n\n" +
        "What should I practise afterwards?\n" +
        "Companion rescue, every season without fail; it is the most perishable thing we teach. Crevasse rescue every three months, or it is gone by next winter and you will believe otherwise. File observations in regObs: the discipline of writing down what you saw is the skill; the entry is a by-product. Write your own assessment before you read the bulletin, every day you go out. Over a season it tells you whether you run optimistic or conservative.\n\n" +
        "Where does this lead if I want to teach?\n" +
        "The Norwegian ladder starts with NF Metodekurs Skred, for which our Advanced course is the prerequisite and the Season Lab is unusually good preparation. Registration runs through Brattkompetanse. For a professional operations track, look at the Canadian Avalanche Association's Industry Training Program. An alternative here in Scandinavia is the SVELAV curriculum at https://svelav.se/, which also follows the CAA standard. For guiding, NORTIND is Norway's IFMGA member association.\n\n" +
        "Two things we would rather say up front: group size limits are not negotiable, because they allow for quality learning. Contact us if you would like a special class run for you. And we will cancel a day rather than run it into conditions that make it unsafe or pointless. Both of those occasionally cost us money. They are the reason to book with us rather than a reason not to.\n\n" +
        "Still deciding? Email peakandpack@gmail.com."
    },
    {
      title: "About us",
      author: "Peak & Pack",
      date: "2026-11-26",
      body:
        "I was born in Lyon, France, where I grew up and started spending time outside. It wasn't until I moved to BC, Canada, that my love for the outdoors really expressed itself.\n\n" +
        "After completing the TRU adventure guide studies, I went on to work ski guiding in the different ranges of BC during winter and expedition kayaking on the coast in the summer.\n\n" +
        "Since 2019 I got the chance to start exploring, guiding and instructing in beautiful places around the globe with an emphasis on polar regions, including Iceland, Greenland, Norway, Antarctica, Canada, spending time in raw and seldom visited places.\n\n" +
        "In 2026 I started Peak and Pack, from a desire to offer mountain education and share the skills and love for the mountains cultivated over the years.\n\n" +
        "When not in the field you can find me reading books, baking delicious good, or getting my hands dirty trying to farm or making DIY projects.\n\n" +
        "My piece of advice to anyone newer to the mountains is to \u201cdo your homework before going out, look up different forecasts, read about the route, prepare your pack beforehand, read some blogs and most importantly go out with good friends.\u201d\n\n" +
        "Clément speaks English, French, Spanish and his Norwegian is coming along.\n\n" +
        "PS: bring chocolate."
    },
    {
      title: "Mission, Vision, Values",
      author: "Peak & Pack",
      date: "2026-11-26",
      body:
        "Peak and Pack endeavours to make the mountains a safer place to be, by delivering insightful hands-on mountain education.\n\n" +
        "Nature is our playground and we want to protect it. In doing so, trying to have the lowest impact possible in a carbon heavy ski travel industry, we travel slow and leave only skin tracks behind.\n\n" +
        "Come as you are. Everyone, no matter your country of origin, your beliefs or values. We don't discriminate, we just appreciate and educate.\n\n" +
        "Community and connection is at the core of what we do. Our goal is to offer the best mountain education possible, to make these beautiful wild places we cherish more accessible, and to create long lasting memories and spark new friendships.\n\n" +
        "We recognise that we are operating on the traditional land of\n\n" +
        "Ittunjárga / Rendalen\n" +
        "Ivguláhku / Lakselvdalen / Lyngsdalen\n" +
        "Stuoranjárga / Tromsdalen\n" +
        "Sállir / Kvaløya\n" +
        "Nuorta Sážža / Nord-Senja\n\n" +
        "and other peoples across whose land we are grateful to guide, teach and share our respect for wild places."
    }
  ],

  // Photos: put the file in the "photos" folder, then add a line here.
  // Example:  { file: "lyngen-sunrise.jpg", caption: "Sunrise above Lyngenfjord" },
  photos: [ file : "bootpackin' dahlbrebukta.JPG", Caption : "a stunning bootpack in the far reaches of the arctic"
  ]
};
/*
  PEAK AND PACK: COURSE DROP-DOWNS + "COURSES" MENU
  -------------------------------------------------
  Load AFTER site-config.js, on every page:

      <script src="site-config.js"></script>
      <script src="course-details.js" defer></script>

  What it does
  1. Adds a "Courses" drop-down to your menu bar (the first <nav> on the page),
     grouped by familyOrder. Each entry jumps to that course and opens it.
  2. Builds one expandable description per course. Prices, duration, group
     size, season and dates are read live from site-config.js.
  3. Opens the right course when the address ends in  #course-<id>.

  Where the drop-downs appear: put  <div id="course-details"></div>  in your
  page where you want them. If that div is missing, they are added at the end
  of <main> (or the page body).
*/
(function () {
  var S = window.SITE;
  if (!S || !S.courses) return;

  var LEVEL_COLOURS = ["#63b74a", "#f3e600", "#f08a1c", "#e0231c", "#101418"];

  function el(tag, attrs, kids) {
    var e = document.createElement(tag), k;
    if (attrs) for (k in attrs) {
      if (k === "text") e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function money(n) { return "NOK\u00a0" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0"); }
  function todayStr() {
    var d = new Date(), p = function (n) { return ("0" + n).slice(-2); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }
  function list(items, cls) {
    return el("ul", cls ? { "class": cls } : null, items.map(function (t) { return el("li", { text: t }); }));
  }
  function fact(label, valueNode) {
    return el("div", { "class": "pp-fact" }, [el("dt", { text: label }), el("dd", null, [valueNode])]);
  }
  function heading(t) { return el("h4", { "class": "pp-h", text: t }); }

  function bookHref(c) {
    if (document.getElementById("book")) return "#book";
    return "mailto:" + (S.email || "") + "?subject=" + encodeURIComponent("Booking request: " + c.name);
  }

  function buildCourse(c) {
    var d = c.details || {};
    var t = todayStr();
    var dates = (S.dates || []).filter(function (x) { return x.course === c.id && x.end >= t; });

    var det = el("details", { "class": "pp-course", id: "course-" + c.id });
    det.appendChild(el("summary", null, [
      el("span", { "class": "pp-name", text: c.name }),
      el("span", { "class": "pp-meta", text: c.duration + " \u00b7 " + money(c.price) })
    ]));

    var body = el("div", { "class": "pp-body" });
    if (d.kicker) body.appendChild(el("div", { "class": "pp-kick", text: d.kicker }));
    if (d.tagline) body.appendChild(el("p", { "class": "pp-tag", text: d.tagline }));
    (d.intro || [c.desc]).forEach(function (p) { body.appendChild(el("p", { text: p })); });

    // Facts (always from the course line)
    var facts = el("dl", { "class": "pp-facts" }, [
      fact("Duration", document.createTextNode(c.duration)),
      fact("Group", document.createTextNode("Max " + c.max)),
      fact("Season", document.createTextNode(c.season)),
      fact("Price", el("strong", { text: money(c.price) + " per person" }))
    ]);
    if (d.commitment) {
      var bars = el("span", { "class": "pp-bars", "aria-label": "Commitment " + d.commitment + " of 5" });
      for (var i = 1; i <= 5; i++) bars.appendChild(el("i", { "class": i <= d.commitment ? "on" : "" }));
      facts.appendChild(fact("Commitment", bars));
    }
    if (c.meeting) facts.appendChild(fact("Meeting point", document.createTextNode(c.meeting)));
    body.appendChild(facts);

    if (d.levels && d.levels.length) {
      var band = el("div", { "class": "pp-band", role: "img", "aria-label": "Avalanche danger levels this course prepares you for: " + d.levels.join(", ") });
      for (var n = 1; n <= 5; n++) {
        var on = d.levels.indexOf(n) > -1;
        var b = el("span", { text: String(n) });
        b.style.background = LEVEL_COLOURS[n - 1];
        b.style.opacity = on ? "1" : ".18";
        if (n === 5) b.style.color = on ? "#f7f8f6" : "#101418";
        band.appendChild(b);
      }
      body.appendChild(heading("Danger levels this course prepares you for"));
      body.appendChild(band);
    }
    if (d.after && d.after.length) { body.appendChild(heading("What you can do afterwards")); body.appendChild(list(d.after, "pp-list")); }
    if (d.days && d.days.length) {
      body.appendChild(heading("How the days run"));
      d.days.forEach(function (r) {
        body.appendChild(el("div", { "class": "pp-day" }, [
          el("b", { text: r[0] }),
          el("div", null, [el("h5", { text: r[1] }), el("p", { text: r[2] })])
        ]));
      });
    }
    if ((d.included && d.included.length) || (d.bring && d.bring.length)) {
      body.appendChild(heading("Included"));
      body.appendChild(el("div", { "class": "pp-cols" }, [
        el("div", null, [el("h6", { text: "In the price" }), list(d.included || [])]),
        el("div", { "class": "pp-no" }, [el("h6", { text: "Bring or arrange yourself" }), list(d.bring || [])])
      ]));
    }
    if (d.who) body.appendChild(el("div", { "class": "pp-note" }, [el("b", { text: "Who this is for" }), document.createTextNode(d.who)]));

    // Dates and booking (from the dates list, expired ones hidden)
    body.appendChild(heading("Dates and booking"));
    if (dates.length) {
      body.appendChild(el("ul", { "class": "pp-dates" }, dates.map(function (x) {
        return el("li", null, [
          el("span", { text: x.label }),
          x.full ? el("em", { text: "Full" }) : el("a", { href: bookHref(c), text: "Book" })
        ]);
      })));
    } else {
      body.appendChild(el("p", null, [
        document.createTextNode("No dates are scheduled right now. "),
        el("a", { href: "mailto:" + (S.email || "") + "?subject=" + encodeURIComponent("Dates for " + c.name), text: "Email us" }),
        document.createTextNode(" and we will tell you the next one, or arrange a private course.")
      ]));
    }
    det.appendChild(body);
    return det;
  }

  function openCourse(id, scroll) {
    var d = document.getElementById("course-" + id);
    if (!d) return;
    d.open = true;
    if (scroll !== false) d.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function openFromHash() {
    var m = /^#course-(.+)$/.exec(location.hash);
    if (m) openCourse(decodeURIComponent(m[1]));
  }

  function grouped() {
    var order = S.familyOrder || [], seen = {}, out = [];
    order.forEach(function (f) { seen[f] = 1; });
    Object.keys(S.courses.reduce(function (o, c) { o[c.family] = 1; return o; }, {})).forEach(function (f) {
      if (!seen[f]) order = order.concat(f);
    });
    order.forEach(function (f) {
      var cs = S.courses.filter(function (c) { return c.family === f; });
      if (cs.length) out.push({ family: f, courses: cs });
    });
    return out;
  }

  function buildSection() {
    var mount = document.getElementById("course-details");
    if (!mount) {
      mount = el("section", { id: "course-details" });
      (document.querySelector("main") || document.body).appendChild(mount);
    }
    mount.className = (mount.className + " pp-details").trim();
    mount.innerHTML = "";
    mount.appendChild(el("h2", { "class": "pp-title", text: "Courses" }));
    grouped().forEach(function (g) {
      mount.appendChild(el("h3", { "class": "pp-family", text: g.family }));
      g.courses.forEach(function (c) { mount.appendChild(buildCourse(c)); });
    });
  }

  function buildMenu() {
    var nav = document.querySelector("header nav") || document.querySelector("nav");
    var host;
    if (nav) {
      var ul = nav.querySelector("ul");
      host = el(ul ? "li" : "div", { "class": "pp-menu" });
      (ul || nav).appendChild(host);
    } else {
      var bar = el("div", { "class": "pp-bar" });
      host = el("div", { "class": "pp-menu" });
      bar.appendChild(host);
      document.body.insertBefore(bar, document.body.firstChild);
    }
    var btn = el("button", { type: "button", "class": "pp-menu-btn", "aria-expanded": "false", "aria-haspopup": "true", text: "Courses \u25be" });
    var panel = el("div", { "class": "pp-menu-panel", hidden: "" });
    grouped().forEach(function (g) {
      panel.appendChild(el("div", { "class": "pp-menu-fam", text: g.family }));
      g.courses.forEach(function (c) {
        var a = el("a", { href: "#course-" + c.id, text: c.name });
        a.addEventListener("click", function (e) {
          e.preventDefault();
          close();
          history.replaceState(null, "", "#course-" + c.id);
          openCourse(c.id);
        });
        panel.appendChild(a);
      });
    });
    function close() { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = panel.hidden;
      panel.hidden = !willOpen;
      btn.setAttribute("aria-expanded", String(willOpen));
    });
    document.addEventListener("click", function (e) { if (!host.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    host.appendChild(btn);
    host.appendChild(panel);
  }

  function injectCss() {
    var css = [
      ".pp-details{max-width:940px;margin:40px auto;padding:0 20px;font-family:'IBM Plex Sans',system-ui,sans-serif;color:#101418;line-height:1.55}",
      ".pp-title{font-family:Archivo,system-ui,sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 6px}",
      ".pp-family{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#14464F;margin:28px 0 10px;padding-bottom:7px;border-bottom:2px solid #101418}",
      ".pp-course{border-bottom:1px solid #D5DDDE;background:#F7F8F6}",
      ".pp-course>summary{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;cursor:pointer;padding:16px 4px;list-style:none}",
      ".pp-course>summary::-webkit-details-marker{display:none}",
      ".pp-course>summary:before{content:'+';font-family:'IBM Plex Mono',monospace;color:#14464F;margin-right:10px;font-weight:700}",
      ".pp-course[open]>summary:before{content:'\\2212'}",
      ".pp-course>summary:focus-visible{outline:3px solid #14464F;outline-offset:2px}",
      ".pp-name{font-family:Archivo,system-ui,sans-serif;font-weight:900;font-size:19px;text-transform:uppercase;flex:1 1 auto}",
      ".pp-meta{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;color:#77858C}",
      ".pp-body{padding:4px 4px 26px}",
      ".pp-body p{margin:0 0 13px}",
      ".pp-kick{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#14464F;margin-bottom:10px}",
      ".pp-tag{font-size:19px;font-weight:500;padding-left:15px;border-left:3px solid #14464F;max-width:40ch}",
      ".pp-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px 20px;margin:20px 0;padding:16px 0;border-top:2px solid #101418;border-bottom:1px solid #D5DDDE}",
      ".pp-fact dt{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#77858C;margin:0}",
      ".pp-fact dd{margin:2px 0 0;font-size:15px;font-weight:600}",
      ".pp-bars{display:flex;gap:4px;margin-top:8px}.pp-bars i{width:19px;height:5px;background:#D5DDDE;border-radius:1px}.pp-bars i.on{background:#14464F}",
      ".pp-h{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#14464F;margin:26px 0 12px;padding-bottom:7px;border-bottom:1px solid #D5DDDE}",
      ".pp-band{display:flex;gap:4px;max-width:420px}",
      ".pp-band span{flex:1;text-align:center;padding:6px 0;border-radius:2px;font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:500;color:#101418}",
      ".pp-body ul{list-style:none;margin:0;padding:0}",
      ".pp-body ul li{padding:9px 0 9px 26px;position:relative;border-bottom:1px solid #D5DDDE;font-size:15px}",
      ".pp-body ul li:before{content:'';position:absolute;left:0;top:16px;width:10px;height:10px;border:2px solid #14464F;border-radius:50%}",
      ".pp-no ul li:before{border-color:#77858C;border-radius:0}",
      ".pp-day{display:grid;grid-template-columns:130px 1fr;gap:16px;padding:13px 0;border-bottom:1px solid #D5DDDE}",
      ".pp-day b{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;color:#14464F;text-transform:uppercase}",
      ".pp-day h5{margin:0 0 3px;font-size:16px;font-weight:600}.pp-day p{margin:0;font-size:14.5px;color:#3d474c}",
      ".pp-cols{display:grid;grid-template-columns:1fr 1fr;gap:0 34px}",
      ".pp-cols h6{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#77858C;margin:0 0 8px}",
      ".pp-note{margin:24px 0 0;padding:16px 20px;background:#EAEFEF;border-left:3px solid #14464F;font-size:14.5px}",
      ".pp-note b{display:block;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#14464F;margin-bottom:5px}",
      ".pp-body ul.pp-dates li{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-left:0}",
      ".pp-dates li:before{display:none}",
      ".pp-dates a{background:#101418;color:#F7F8F6;text-decoration:none;padding:8px 18px;font-family:Archivo,sans-serif;font-weight:900;font-size:12px;letter-spacing:.1em;text-transform:uppercase}",
      ".pp-dates a:hover{background:#14464F}.pp-dates em{font-style:normal;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#77858C;text-transform:uppercase}",
      ".pp-menu{position:relative;display:inline-block;list-style:none}",
      ".pp-bar{position:sticky;top:0;z-index:50;background:#F7F8F6;border-bottom:2px solid #101418;padding:8px 20px}",
      ".pp-menu-btn{font:inherit;background:none;border:0;cursor:pointer;color:inherit;padding:6px 4px;letter-spacing:inherit;text-transform:inherit}",
      ".pp-menu-btn:focus-visible{outline:3px solid #14464F;outline-offset:2px}",
      ".pp-menu-panel{position:absolute;left:0;top:100%;z-index:100;min-width:260px;max-height:70vh;overflow:auto;background:#F7F8F6;color:#101418;border:1px solid #101418;box-shadow:0 8px 24px rgba(0,0,0,.18);padding:6px 0;text-align:left}",
      ".pp-menu-panel[hidden]{display:none}",
      ".pp-menu-fam{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#77858C;padding:10px 16px 4px}",
      ".pp-menu-panel a{display:block;padding:8px 16px;color:#101418;text-decoration:none;font-size:14.5px;text-transform:none;letter-spacing:0}",
      ".pp-menu-panel a:hover,.pp-menu-panel a:focus-visible{background:#14464F;color:#F7F8F6;outline:none}",
      "@media(max-width:720px){.pp-cols{grid-template-columns:1fr}.pp-day{grid-template-columns:1fr;gap:4px}.pp-menu-panel{position:fixed;left:12px;right:12px;top:60px}}"
    ].join("\n");
    document.head.appendChild(el("style", { text: css }));
  }

  function init() {
    injectCss();
    buildSection();
    buildMenu();
    window.addEventListener("hashchange", openFromHash);
    openFromHash();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
