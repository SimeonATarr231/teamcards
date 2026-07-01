// DATA LAYER
const clubs = [
  {
    id:         "ie",
    name:       "Invincible Eleven",
    fullName:   "Union of Invincible Eleven & Majestic Sports Association Inc.",
    nickname:   "IE Majestics",
    founded:    1943,
    decade:     "1940s",
    stadium:    "Antoinette Tubman Stadium",
    capacity:   15000,
    titles:     13,
    peakEra:    "1963–1987",
    titleYears: "1963, 1964, 1965, 1966, 1980, 1981, 1983, 1984, 1985, 1987, 1996, 1997, 1998",
    color:      "#1A6B3C",
    badge:      "🟢",
    saved:      false,
    history:    "Liberia's oldest football club, founded in May 1943 by students from the College of West Africa, St. Patrick's High School, and Liberia College. The club traces its origins from two youth sides — Iron United and Bombers — whose players formed IE at a single founding meeting. Joseph G. Richards was elected the first captain. They are one of the two most decorated clubs in Liberian football history.",
    notable:    "George Weah, the only African Ballon d'Or winner and former President of Liberia, scored 24 goals in 23 games for IE during the 1986–87 season — one of the most prolific individual seasons in Liberian football history. The club was briefly renamed 'Pepperbird' by a sponsor in the early 1950s before reverting to Invincible Eleven upon Richards' return from abroad.",
  },
  {
    id:         "barrolle",
    name:       "Mighty Barrolle",
    fullName:   "Mighty Barrolle Sports Association",
    nickname:   "The Rollers",
    founded:    1956,
    decade:     "1950s",
    stadium:    "Doris Williams Stadium",
    capacity:   3000,
    titles:     13,
    peakEra:    "1967–2009",
    titleYears: "1967, 1972, 1973, 1974, 1986, 1988, 1989, 1993, 1995, 2000–01, 2004, 2006, 2009",
    color:      "#B8001F",
    badge:      "🔴",
    saved:      false,
    history:    "Co-record holders for the most LFA First Division titles alongside rivals Invincible Eleven. Founded in 1956 and known as 'The Rollers', Barrolle dominated Liberian football across multiple decades, with particular strength in the 1970s and late 1980s. The club also holds 8 Liberian FA Cup titles. They were relegated to the Second Division but returned to the First Division in 2016.",
    notable:    "George Weah began his professional career at Mighty Barrolle, scoring 7 goals in 10 games in the 1985–86 season before moving to Invincible Eleven and then to Europe with AS Monaco. The club has appeared in the CAF Champions League, representing Liberia on the continental stage.",
  },
  {
    id:         "lprc",
    name:       "LPRC Oilers",
    fullName:   "Liberia Petroleum Refining Company Oilers FC",
    nickname:   "The Oilers",
    founded:    1975,
    decade:     "1970s",
    stadium:    "LPRC Stadium",
    capacity:   5000,
    titles:     7,
    peakEra:    "1991–2008",
    titleYears: "1991, 1992, 1996, 1997, 1999, 2002–03, 2008",
    color:      "#E87C00",
    badge:      "🟠",
    saved:      false,
    history:    "Founded in 1975 and backed by the Liberia Petroleum Refining Company, LPRC Oilers emerged as one of the dominant forces in Liberian football from the early 1990s onward. Their corporate sponsorship provided financial stability that allowed them to attract and retain top talent throughout the country's most turbulent political periods.",
    notable:    "LPRC Oilers won back-to-back titles in 1991 and 1992 during a period when Liberia was enduring civil war — a remarkable achievement given the extraordinary logistical challenges of maintaining a football league during the conflict. They are the third most successful club in Liberian football history.",
  },
  {
    id:         "byc",
    name:       "Barrack Young Controllers",
    fullName:   "Barrack Young Controllers Football Club",
    nickname:   "BYC",
    founded:    1991,
    decade:     "1990s+",
    stadium:    "SKD Stadium",
    capacity:   10000,
    titles:     4,
    peakEra:    "2010–2016",
    titleYears: "2010, 2012, 2014, 2016",
    color:      "#1A3A6B",
    badge:      "🔵",
    saved:      false,
    history:    "A club with military origins, Barrack Young Controllers rose to prominence in the 2010s, winning four league titles in seven years. BYC represent the new wave of Liberian football clubs that emerged in the post-civil war era, competing at the SKD Stadium — one of Liberia's premier football venues.",
    notable:    "BYC won the 2010, 2012, 2014, and 2016 LFA First Division titles — all in even-numbered years — making them the dominant club of that specific era. Their rise coincided with a broader stabilization of Liberian football following the civil war period.",
  },
  {
    id:         "liscr",
    name:       "LISCR FC",
    fullName:   "Liberia International Shipping & Corporate Registry FC",
    nickname:   "The Shipping Boys",
    founded:    1995,
    decade:     "1990s+",
    stadium:    "SKD Stadium",
    capacity:   10000,
    titles:     4,
    peakEra:    "2017–2022",
    titleYears: "2017, 2018, 2019, 2022",
    color:      "#4A1A8C",
    badge:      "🟣",
    saved:      false,
    history:    "Founded on 24 August 1995 as Barcelona FC, the club was renamed LISCR FC in 2001 after being taken over by the Liberia International Shipping & Corporate Registry. The corporate backing transformed them into one of the most competitive clubs in modern Liberian football, winning consecutive titles in 2017, 2018, and 2019.",
    notable:    "LISCR FC's three consecutive titles from 2017 to 2019 represent the longest winning streak in modern LFA First Division history. The club participates in CAF inter-club competitions, giving Liberian football continental representation in recent seasons.",
  },
  {
    id:         "stjoseph",
    name:       "St. Joseph Warriors",
    fullName:   "Saint Joseph Warriors Football Club",
    nickname:   "The Warriors",
    founded:    1966,
    decade:     "1960s",
    stadium:    "New Kru Town Field",
    capacity:   3000,
    titles:     3,
    peakEra:    "1976–1979",
    titleYears: "1976, 1978, 1979",
    color:      "#8C3A00",
    badge:      "🟤",
    saved:      false,
    history:    "Based in the New Kru Town community of Monrovia, St. Joseph Warriors were the dominant force of the mid-to-late 1970s, winning three league titles in four years between 1976 and 1979. The club represents one of Monrovia's most historic football communities and remains an active participant in the LFA First Division.",
    notable:    "St. Joseph Warriors won the 1976 title during a period when the LFA First Division was resuming after years of suspension. Their titles in 1978 and 1979 came in consecutive seasons, making them the first club outside of IE and Barrolle to win back-to-back championships.",
  },
  {
    id:         "watanga",
    name:       "Watanga FC",
    fullName:   "Watanga Football Club",
    nickname:   "—",
    founded:    1997,
    decade:     "1990s+",
    stadium:    "Watanga Stadium",
    capacity:   2000,
    titles:     3,
    peakEra:    "2005–2011",
    titleYears: "2005, 2007, 2011",
    color:      "#007A6B",
    badge:      "🟩",
    saved:      false,
    history:    "Founded on 24 December 1997, Watanga FC are one of the younger clubs to achieve championship success in Liberian football. Despite being established later than most of their rivals, Watanga won three LFA First Division titles between 2005 and 2011, firmly establishing themselves among the country's most successful clubs.",
    notable:    "Watanga's three titles were spread across six years — 2005, 2007, and 2011 — demonstrating consistent competitiveness across a sustained period rather than a single era of dominance. Their 2011 title was particularly significant as it came between BYC's four-title run.",
  },
  {
    id:         "npa",
    name:       "NPA Anchors",
    fullName:   "National Port Authority Anchors FC",
    nickname:   "The Anchors",
    founded:    1972,
    decade:     "1970s",
    stadium:    "NPA Stadium",
    capacity:   3000,
    titles:     1,
    peakEra:    "1994",
    titleYears: "1994",
    color:      "#2A5C8C",
    badge:      "⚓",
    saved:      false,
    history:    "Backed by the National Port Authority of Liberia, NPA Anchors are a community institution in Monrovia's port district. The club won their sole LFA First Division title in 1994 — during one of the most difficult periods in Liberian history — a testament to football's power to provide continuity and identity even in times of conflict.",
    notable:    "NPA Anchors' 1994 championship came during the First Liberian Civil War, when large parts of the country were experiencing active conflict. That the LFA First Division continued to operate at all in 1994, and that a title was contested and awarded, speaks to the extraordinary resilience of Liberian football.",
  },
  {
    id:         "fassell",
    name:       "FC Fassell",
    fullName:   "FC Fassell Junior Professional",
    nickname:   "Junior Professional",
    founded:    2008,
    decade:     "1990s+",
    stadium:    "SKD Stadium",
    capacity:   10000,
    titles:     1,
    peakEra:    "2020",
    titleYears: "2020",
    color:      "#8C7A00",
    badge:      "🟡",
    saved:      false,
    history:    "One of the newest clubs in Liberian football, FC Fassell was founded in 2008 and quickly rose through the divisions with strong corporate backing. They won their first and only LFA First Division title in 2020, becoming one of the most recent champions in the league's history.",
    notable:    "FC Fassell's 2020 title made them the newest club to win the LFA First Division at the time of their championship. Their rapid rise from founding in 2008 to league champions in 2020 is one of the fastest ascents in Liberian football history.",
  },
  {
    id:         "nimba",
    name:       "Nimba United",
    fullName:   "Nimba United Football Club",
    nickname:   "—",
    founded:    2010,
    decade:     "1990s+",
    stadium:    "Taway Stadium, Ganta",
    capacity:   5000,
    titles:     1,
    peakEra:    "2013",
    titleYears: "2013",
    color:      "#5C1A5C",
    badge:      "🟪",
    saved:      false,
    history:    "Based in Ganta, Nimba County — approximately 250 kilometres from the capital Monrovia — Nimba United hold a unique distinction in Liberian football history. Founded in 2010 as the successor to Adorence FC, they won the 2013 LFA First Division title, breaking a streak that had seen every single league championship won by a Monrovia-based club since the league's founding in 1956.",
    notable:    "Nimba United are the only non-Monrovia club to ever win the LFA First Division in over 60 years of competition. Their 2013 title is widely considered one of the greatest upsets in Liberian football history and a landmark moment for football outside the capital.",
  },
];


// STATE
let activeFilter  = "all";
let activeClubId  = null;
let searchQuery   = "";


// DOM REFERENCES
const clubGrid       = document.getElementById("clubGrid");
const emptyState     = document.getElementById("emptyState");
const searchInput    = document.getElementById("searchInput");
const filterStrip    = document.getElementById("filterStrip");
const resultCount    = document.getElementById("resultCount");
const favoritesCount = document.getElementById("favoritesCount");

const detailPanel    = document.getElementById("detailPanel");
const panelOverlay   = document.getElementById("panelOverlay");
const panelClose     = document.getElementById("panelClose");
const panelBadge     = document.getElementById("panelBadge");
const panelClubName  = document.getElementById("panelClubName");
const panelNickname  = document.getElementById("panelNickname");
const panelTitles    = document.getElementById("panelTitles");
const panelFounded   = document.getElementById("panelFounded");
const panelEra       = document.getElementById("panelEra");
const panelStadium   = document.getElementById("panelStadium");
const panelFullName  = document.getElementById("panelFullName");
const panelTitleYears = document.getElementById("panelTitleYears");
const panelNote      = document.getElementById("panelNote");
const panelNotable   = document.getElementById("panelNotable");

const themeToggle    = document.getElementById("themeToggle");


// FILTER ENGINE
function getFilteredClubs() {
  return clubs.filter((club) => {
    const matchesSearch =
      searchQuery === "" ||
      club.name.toLowerCase().includes(searchQuery) ||
      club.nickname.toLowerCase().includes(searchQuery) ||
      club.stadium.toLowerCase().includes(searchQuery) ||
      String(club.founded).includes(searchQuery);

    const matchesFilter =
      activeFilter === "all" || club.decade === activeFilter;

    return matchesSearch && matchesFilter;
  });
}


// RENDER ENGINE
function renderClubs() {
  const filtered = getFilteredClubs();
  clubGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;

    filtered.forEach((club) => {
      const card = document.createElement("div");
      card.className = `club-card${club.saved ? " is-saved" : ""}`;
      card.dataset.id = club.id;
      card.style.setProperty("--card-accent", club.color);

      card.innerHTML = `
        <div class="card-top">
          <div class="card-name-block">
            <span class="card-name">${club.name}</span>
            <span class="card-nickname">${club.nickname !== "—" ? club.nickname : club.fullName}</span>
          </div>
          <button
            class="save-btn ${club.saved ? "is-saved" : ""}"
            data-save="${club.id}"
            aria-label="${club.saved ? "Unsave" : "Save"} ${club.name}"
          >${club.saved ? "♥" : "♡"}</button>
        </div>

        <div class="card-meta">
          <div class="meta-item">
            <span class="meta-label">Titles</span>
            <span class="meta-value is-accent">${club.titles}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Founded</span>
            <span class="meta-value">${club.founded}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Peak Era</span>
            <span class="meta-value">${club.peakEra}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Decade</span>
            <span class="meta-value">${club.decade}</span>
          </div>
        </div>

        <div class="card-footer">
          <span class="card-stadium">${club.stadium}</span>
          <span class="card-detail-hint">VIEW →</span>
        </div>
      `;

      clubGrid.appendChild(card);
    });
  }

  updateCounters(filtered.length);
}


// COUNTERS
function updateCounters(filteredLength) {
  resultCount.textContent = `${filteredLength} ${filteredLength === 1 ? "club" : "clubs"}`;

  const savedCount = clubs.filter((c) => c.saved).length;
  favoritesCount.textContent = `♥ ${savedCount} saved`;
}


// DETAIL PANEL
function openPanel(clubId) {
  const club = clubs.find((c) => c.id === clubId);
  if (!club) return;

  activeClubId = clubId;

  panelBadge.textContent      = club.badge;
  panelClubName.textContent   = club.name;
  panelNickname.textContent   = club.nickname !== "—" ? `"${club.nickname}"` : club.fullName;
  panelTitles.textContent     = club.titles;
  panelFounded.textContent    = club.founded;
  panelEra.textContent        = club.peakEra;
  panelStadium.textContent    = `${club.stadium} (cap. ${club.capacity.toLocaleString()})`;
  panelFullName.textContent   = club.fullName;
  panelTitleYears.textContent = club.titleYears;
  panelNote.textContent       = club.history;
  panelNotable.textContent    = club.notable;

  detailPanel.hidden = false;
  panelOverlay.classList.add("is-active");

  requestAnimationFrame(() => {
    detailPanel.classList.add("is-open");
    panelOverlay.classList.add("is-visible");
  });

  document.body.style.overflow = "hidden";
}

function closePanel() {
  detailPanel.classList.remove("is-open");
  panelOverlay.classList.remove("is-visible");

  setTimeout(() => {
    detailPanel.hidden = true;
    panelOverlay.classList.remove("is-active");
    document.body.style.overflow = "";
    activeClubId = null;
  }, 250);
}


// SAVE TOGGLE
function handleSave(clubId) {
  const club = clubs.find((c) => c.id === clubId);
  if (!club) return;

  club.saved = !club.saved;
  renderClubs();
}


// EVENT DELEGATION — GRID CLICKS
function handleGridClick(event) {
  const saveBtn = event.target.closest(".save-btn");
  if (saveBtn) {
    event.stopPropagation();
    handleSave(saveBtn.dataset.save);
    return;
  }

  const card = event.target.closest(".club-card");
  if (card) {
    openPanel(card.dataset.id);
  }
}


// SEARCH
function handleSearch() {
  searchQuery = searchInput.value.trim().toLowerCase();
  renderClubs();
}


// FILTER BUTTONS
function handleFilter(event) {
  const btn = event.target.closest(".filter-btn");
  if (!btn) return;

  activeFilter = btn.dataset.filter;

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.filter === activeFilter);
  });

  renderClubs();
}


// KEYBOARD
function handleKeydown(event) {
  if (event.key === "Escape" && !detailPanel.hidden) {
    closePanel();
  }
}


// THEME TOGGLE
function handleThemeToggle() {
  const root    = document.documentElement;
  const current = root.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  themeToggle.textContent = next === "light" ? "☀" : "☾";
}


// EVENT LISTENERS
clubGrid.addEventListener("click", handleGridClick);
filterStrip.addEventListener("click", handleFilter);
searchInput.addEventListener("input", handleSearch);
panelClose.addEventListener("click", closePanel);
panelOverlay.addEventListener("click", closePanel);
document.addEventListener("keydown", handleKeydown);
themeToggle.addEventListener("click", handleThemeToggle);


// INITIALISE
renderClubs();