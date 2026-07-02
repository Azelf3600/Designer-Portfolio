/* ==========================================================================
   THE GRIMOIRE — main.js
   Edit the DATA objects below to add your real projects, skills, timeline,
   services, and contact channels. The render functions at the bottom turn
   that data into the page markup automatically — you shouldn't need to
   touch index.html for routine updates.
   ========================================================================== */

/* ---------------------------------------------------------------------
   1. ARTWORKS — shown in "The Codex" gallery.
   Files should live in the /asset folder next to index.html. Add or
   remove entries here to change what shows in the gallery — order in
   this array is the order they appear on the page.

   NOTE: two filenames were truncated in the file list you shared —
   double-check these two against your actual files in /asset:
     - "Dragonic Mountain Range....png"
     - "MageAgainstTheFrostDem....png"
   --------------------------------------------------------------------- */
const artworks = [
  { file: "AaronShu.png", title: "Aaron Shu" },
  { file: "AzureAssassin.png", title: "Azure Assassin" },
  { file: "BountyHunters.png", title: "Bounty Hunters" },
  { file: "ChristmasSpecial.png", title: "Christmas Special" },
  { file: "ClownAndTheJester.png", title: "Clown and the Jester" },
  { file: "CosmicKnight.png", title: "Cosmic Knight" },
  { file: "DamonCheon.png", title: "Damon Cheon" },
  { file: "DinosHeadshot.png", title: "Dinos Headshot" },
  { file: "Dragonic Mountain Range....png", title: "Dragonic Mountain Range" },
  { file: "Dryad.png", title: "Dryad" },
  { file: "EthanLi.png", title: "Ethan Li" },
  { file: "FairyFusions.png", title: "Fairy Fusions" },
  { file: "FistAndSwords.png", title: "Fist and Swords" },
  { file: "KahinjaLogo.png", title: "Kahinja Logo" },
  { file: "LastStand.png", title: "Last Stand" },
  { file: "LichRedesign.png", title: "Lich Redesign" },
  { file: "LichVsWitch.png", title: "Lich vs Witch" },
  { file: "LightsUndertheSky.png", title: "Lights Under the Sky" },
  { file: "LucasTang.png", title: "Lucas Tang" },
  { file: "MageAgainstTheFrostDem....png", title: "Mage Against the Frost Demon" },
  { file: "MonicaHeadshot.png", title: "Monica Headshot" },
  { file: "OracleDesign.png", title: "Oracle Design" },
  { file: "RedSuit.png", title: "Red Suit" },
  { file: "ScentroLogo.png", title: "Scentro Logo" },
  { file: "SecretiveMage.png", title: "Secretive Mage" },
  { file: "ShadowCat.png", title: "Shadow Cat" },
  { file: "SilverKnight.png", title: "Silver Knight" },
  { file: "SMPLogo.png", title: "SMP Logo" },
  { file: "SpaceAgent.png", title: "Space Agent" },
  { file: "SummertimeSpecial.png", title: "Summertime Special" },
  { file: "SwampKnight.png", title: "Swamp Knight" },
  { file: "TCKClanLogo.png", title: "TCK Clan Logo" },
  { file: "VampireDesign.png", title: "Vampire Design" },
  { file: "Victoria.png", title: "Victoria" },
  { file: "WinterSpecials.png", title: "Winter Specials" },
  { file: "WorldReboot.png", title: "World Reboot" }
];

const ASSET_PATH = "asset/";

/* ---------------------------------------------------------------------
   1b. FIGMA PROJECTS — shown in "The Codex" alongside the artwork tiles.
   These link straight out to Figma in a new tab rather than opening in
   the lightbox, since they're full design files, not single images.
   Add more by copying an object below.
   --------------------------------------------------------------------- */
const figmaProjects = [
  {
    title: "EvoHand",
    subtitle: "Figma Design File",
    url: "https://www.figma.com/design/Szv1C2d4SmC76DQMRdGKRZ/EvoHand?node-id=0-1&p=f&t=9ORNwbWVToREs4zn-0"
  },
  {
    title: "World Reboot",
    subtitle: "Figma Design File",
    url: "https://www.figma.com/design/WbfArUEPykBJR5q0HxbTjo/World-Reboot2?node-id=0-1&p=f&t=MAUEMPxCC3N1W7Bl-0"
  }
];

/* ---------------------------------------------------------------------
   2. SKILLS — shown as pills under "Tools of the Trade"
   --------------------------------------------------------------------- */
const skills = [
  "Photoshop", "Figma", "Krita", "Canva",
  "Clip Studio Paint", "Ibis Paint", "CapCut"
];

/* ---------------------------------------------------------------------
   3. SERVICES — shown in "Arcane Arts Offered"
   --------------------------------------------------------------------- */
const services = [
  { glyph: "✦", title: "Brand Identity", description: "Logos, color systems, and visual language for a project or business." },
  { glyph: "❖", title: "Illustration", description: "Custom character, environment, or editorial illustration." },
  { glyph: "✶", title: "UI / UX Design", description: "Interfaces and digital product design work." }
];

/* ---------------------------------------------------------------------
   4. CONTACT CHANNELS — shown in "Send a Raven"
   Discord has no profile link, so it renders as a click-to-copy button
   instead of a normal link (set copy: true, value: the username).
   --------------------------------------------------------------------- */
const channels = [
  { label: "Instagram", href: "https://www.instagram.com/skietch93/" },
  { label: "Facebook", href: "https://www.facebook.com/bndctmlns" },
  { label: "Discord: skietch", copy: true, value: "skietch" }
];

/* ---------------------------------------------------------------------
   Render: Codex gallery (click a tile to open it in the lightbox)
   --------------------------------------------------------------------- */
function renderArtworks() {
  const grid = document.getElementById("codexGrid");
  if (!grid) return;

  const imageTiles = artworks.map((a, i) => `
    <button type="button" class="codex-plate" data-index="${i}" aria-label="View ${a.title} larger">
      <img src="${ASSET_PATH}${a.file}" alt="${a.title}" loading="lazy">
      <span class="plate-caption">${a.title}</span>
    </button>
  `).join("");

  const figmaTiles = figmaProjects.map(p => `
    <a class="codex-plate codex-plate--external" href="${p.url}" target="_blank" rel="noopener">
      <span class="external-glyph" aria-hidden="true">◆</span>
      <span class="external-title">${p.title}</span>
      <span class="external-subtitle">${p.subtitle} ↗</span>
    </a>
  `).join("");

  grid.innerHTML = imageTiles + figmaTiles;

  grid.querySelectorAll(".codex-plate[data-index]").forEach(tile => {
    tile.addEventListener("click", () => openLightbox(Number(tile.dataset.index)));
  });
}

/* ---------------------------------------------------------------------
   Lightbox — bigger view of a clicked artwork, with prev/next browsing
   --------------------------------------------------------------------- */
let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  updateLightboxImage();

  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("lightboxClose").focus();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const art = artworks[lightboxIndex];
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  img.src = ASSET_PATH + art.file;
  img.alt = art.title;
  caption.textContent = art.title;
}

function showNextArtwork() {
  lightboxIndex = (lightboxIndex + 1) % artworks.length;
  updateLightboxImage();
}

function showPrevArtwork() {
  lightboxIndex = (lightboxIndex - 1 + artworks.length) % artworks.length;
  updateLightboxImage();
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  if (!lightbox) return;

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNextArtwork);
  prevBtn.addEventListener("click", showPrevArtwork);

  // click on the dark backdrop (not the image itself) closes it
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextArtwork();
    if (e.key === "ArrowLeft") showPrevArtwork();
  });
}

/* ---------------------------------------------------------------------
   Render: Skills list
   --------------------------------------------------------------------- */
function renderSkills() {
  const list = document.getElementById("skillsList");
  if (!list) return;
  list.innerHTML = skills.map(s => `<li>${s}</li>`).join("");
}

/* ---------------------------------------------------------------------
   Render: Services / Arts
   --------------------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById("artsGrid");
  if (!grid) return;
  grid.innerHTML = services.map(s => `
    <div class="art-card">
      <span class="art-glyph" aria-hidden="true">${s.glyph}</span>
      <h3 class="art-title">${s.title}</h3>
      <p class="art-desc">${s.description}</p>
    </div>
  `).join("");
}

/* ---------------------------------------------------------------------
   Render: Contact channels — normal links, or a click-to-copy button
   for entries marked `copy: true` (used for Discord, which has no link).
   --------------------------------------------------------------------- */
function renderChannels() {
  const wrap = document.getElementById("channelsList");
  if (!wrap) return;

  wrap.innerHTML = channels.map((c, i) => {
    if (c.copy) {
      return `<button type="button" class="channel-pill" data-copy-index="${i}">${c.label}</button>`;
    }
    return `<a class="channel-pill" href="${c.href}" target="${c.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">${c.label}</a>`;
  }).join("");

  wrap.querySelectorAll("[data-copy-index]").forEach(btn => {
    const channel = channels[Number(btn.dataset.copyIndex)];
    const originalLabel = channel.label;

    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(channel.value);
        btn.textContent = "Copied!";
      } catch {
        btn.textContent = channel.value;
      }
      setTimeout(() => { btn.textContent = originalLabel; }, 1600);
    });
  });
}

/* ---------------------------------------------------------------------
   Mobile nav toggle
   --------------------------------------------------------------------- */
function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".ribbon-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------------------
   Dark mode toggle
   The theme itself is applied before first paint by the inline script
   in index.html (so there's no flash of the wrong mode) — this just
   wires up the button to flip it and remember the choice.
   --------------------------------------------------------------------- */
function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeToggleIcon");
  if (!toggle || !icon) return;

  const root = document.documentElement;

  const syncIcon = () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    icon.textContent = isDark ? "☀" : "☾";
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  };

  syncIcon();

  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("grimoire-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("grimoire-theme", "dark");
    }
    syncIcon();
  });
}

/* ---------------------------------------------------------------------
   Footer year + init
   --------------------------------------------------------------------- */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderArtworks();
  renderSkills();
  renderServices();
  renderChannels();
  setupNavToggle();
  setupLightbox();
  setupThemeToggle();
  setYear();
});