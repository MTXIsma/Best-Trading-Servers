let lang = localStorage.getItem("lang") || "en";
let favs = JSON.parse(localStorage.getItem("favs") || "[]");

const servers = [
{
  id:"sabfr",
  top:true,
  verified:true,
  score:4.9,
  link:"https://discord.gg/axqvXThhwY",
  en:{
    name:"SAB France",
    desc:"French Steal a Brainrot server with certified middlemen, active community and scam-free trading.",
    features:["Certified middlemen","No scams","Active community","Giveaways"]
  },
  fr:{
    name:"SAB France",
    desc:"Serveur français Steal a Brainrot avec middlemen certifiés, communauté active et échanges sans arnaque.",
    features:["Middlemen certifiés","Pas d’arnaque","Communauté active","Giveaways"]
  }
},
{
  id:"guigui",
  verified:true,
  score:4.7,
  link:"https://discord.gg/gykguigui",
  en:{
    name:"Guigui",
    desc:"Safe Steal a Brainrot trading server with trusted middlemen and regular events.",
    features:["Safe trading","Trusted middlemen","Events","Active chat"]
  },
  fr:{
    name:"Guigui",
    desc:"Serveur Steal a Brainrot sûr avec middlemen de confiance et événements réguliers.",
    features:["Échanges sûrs","Middlemen fiables","Événements","Chat actif"]
  }
},
{
  id:"azurix",
  verified:true,
  score:4.5,
  link:"https://discord.gg/tRNuK4xyRx",
  en:{
    name:"Azurix",
    desc:"Bilingual Steal a Brainrot server by Azurix & IçZ with trading and giveaways.",
    features:["FR / EN","Trading","Giveaways","Community"]
  },
  fr:{
    name:"Azurix",
    desc:"Serveur bilingue Steal a Brainrot par Azurix & IçZ avec trading et giveaways.",
    features:["FR / EN","Trading","Giveaways","Communauté"]
  }
},
{
  id:"azen",
  verified:true,
  score:4.4,
  link:"https://discord.gg/azen",
  en:{
    name:"Azen",
    desc:"Community-focused Steal a Brainrot server with safe trades and friendly staff.",
    features:["Safe trades","Friendly staff","Active members"]
  },
  fr:{
    name:"Azen",
    desc:"Serveur Steal a Brainrot axé communauté avec échanges sécurisés et staff sympa.",
    features:["Échanges sécurisés","Staff sympa","Membres actifs"]
  }
}
];

// INDEX
const container = document.getElementById("servers");
if(container){
  servers.forEach(s=>{
    const fav = favs.includes(s.id) ? "⭐" : "☆";
    container.innerHTML += `
    <div class="card">
      <h2>
        ${s.top ? '<span class="top">🏆 Top #1</span>' : ''}
        ${s[lang].name}
      </h2>
      ${s.verified ? '<span class="verified">🔐 Verified</span>' : ''}
      <p>Trust score: ⭐ ${s.score}</p>
      <span class="favorite" onclick="toggleFav('${s.id}')">${fav}</span>
      <br><br>
      <button onclick="openServer('${s.id}')">View</button>
    </div>`;
  });
}

// SERVER PAGE
const id = localStorage.getItem("server");
if(id){
  const s = servers.find(x=>x.id===id);
  document.getElementById("name").innerText = s[lang].name;
  document.getElementById("desc").innerText = s[lang].desc;
  document.getElementById("score").innerText = "⭐ ".repeat(Math.round(s.score));
  document.getElementById("link").href = s.link;

  if(!s.top) document.getElementById("topBadge").style.display="none";
  if(!s.verified) document.getElementById("verified").style.display="none";

  const ul = document.getElementById("features");
  s[lang].features.forEach(f=> ul.innerHTML += `<li>${f}</li>`);

  let reports = JSON.parse(localStorage.getItem("reports") || "{}");
  if(reports[s.id]){
    document.getElementById("reportMsg").innerText =
      "⚠️ Reports: " + reports[s.id];
  }
}

// FUNCTIONS
function openServer(id){
  localStorage.setItem("server", id);
  location.href = "server.html";
}

function toggleFav(id){
  favs.includes(id) ? favs = favs.filter(f=>f!==id) : favs.push(id);
  localStorage.setItem("favs", JSON.stringify(favs));
  location.reload();
}

function toggleLang(){
  lang = lang === "en" ? "fr" : "en";
  localStorage.setItem("lang", lang);
  location.reload();
}

function reportServer(){
  let reports = JSON.parse(localStorage.getItem("reports") || "{}");
  const id = localStorage.getItem("server");
  reports[id] = (reports[id] || 0) + 1;
  localStorage.setItem("reports", JSON.stringify(reports));
  document.getElementById("reportMsg").innerText =
    "Report sent ✔ (" + reports[id] + ")";
}

function back(){
  location.href = "index.html";
}
