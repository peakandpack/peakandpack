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

    It must NOT have "type=module" and it must be loaded before the main
    script that reads window.SITE.
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
      desc: "One evening of theory, two long days out. You leave able to plan a day, read some terrain, read and understand the terms in the forecast and run a companion rescue with good technique." },
    { id: "avalanche-advanced", family: "Avalanche education", name: "Avalanche Advanced", price: 4700, max: 6, duration: "3.5 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Snowpack testing, independent hazard assessment, group management and complex rescue. For people who already avoid terrain and now want to choose it." },
    { id: "snowpack-season-lab", family: "Avalanche education", name: "Snowpack Season Lab", price: 20000, max: 6, duration: "6 days across one winter", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "One winter, six field days, the same six people and the same snowpack from first snow to spring melt-out. The layer you dig through in February, you watched form in November." },
    { id: "ski-mo-rope-skills", family: "Skills courses", name: "Ski-Mo Rope Skills", price: 4000, max: 5, duration: "2 days", season: "Jan – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Rope systems that matter on a ski descent, drilled until you don't have to think. Nothing decorative, no climbing curriculum." },
    { id: "glacier-crevasse-rescue", family: "Skills courses", name: "Glacier & Crevasse Rescue", price: 3500, max: 5, duration: "2 days", season: "Nov – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Roped travel, holding a fall, load transfer, haul systems and getting yourself out, reading glacier features in Lyngen and beyond." },
    { id: "steep-skiing-clinic", family: "Technical clinics", name: "Steep Skiing Clinic", price: 12700, max: 4, duration: "3 days", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Lyngen couloirs with a certified guide at one to four. A jump turn that holds on 45° firm, sluff management, line selection, and a limit you arrived at deliberately." },
    { id: "big-mountain-clinic", family: "Technical clinics", name: "Big Mountain Clinic", price: 14500, max: 5, duration: "3 days · one boat day", season: "Feb – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Sea to summit on faces with no road to them. Reading a big face from the water, breaking it into decisions, and executing them in order." },
    { id: "ski-mountaineering-lab", family: "Technical clinics", name: "Ski Mountaineering Lab", price: 18000, max: 4, duration: "4 days · one hut night", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "Crampons, axe, anchors, short-roping and ridge travel, for the Lyngen peaks that stop being a ski tour in the last two hundred metres." },
    { id: "ski-expedition-lab", family: "Expeditions", name: "Ski Expedition Lab", price: 35000, max: 4, duration: "5 days self-supported", season: "Mar – May", meeting: "Tromsø, confirmed by email one week ahead",
      desc: "A self-supported traverse of the Lyngen Alps, sleeping out, summits along the way. The qualifying trip for Svalbard, Greenland and the Alps." }
  ],

  // One line per date. "course" must match an "id" above.
  dates: [
    { course: "companion-rescue-evening", label: "Tue 8 Dec 2026",            start: "2026-12-08", end: "2026-12-08", full: false },
    { course: "companion-rescue-evening", label: "Tue 15 Mar 2027",           start: "2027-03-15", end: "2027-03-15", full: false },
    { course: "companion-rescue-evening", label: "Mon 5 Apr 2027",            start: "2027-04-05", end: "2027-04-05", full: false },
    { course: "avalanche-fundamentals",   label: "Mon 1 – Wed 3 Feb 2027",    start: "2027-02-01", end: "2027-02-03", full: false },
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
  photos: [
  ]
};
