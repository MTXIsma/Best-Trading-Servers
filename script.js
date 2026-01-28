let lang = localStorage.getItem("lang") || "en";
let favs = JSON.parse(localStorage.getItem("favs") || "[]");

const servers = [
{
  id:"sabfr",
  verified:true,
  score:4.9,
  link:"https://discord.gg/axqvXThhwY",
  en:{
    name:"SAB France",
    desc:"French Steal a Brainrot server with active community, certified middlemen, giveaways, and secure trades.",
    features:["Active community","Certified middlemen","No scams","Giveaways"]
  },
  fr:{
    name:"SAB France",
    desc:"Serveur français SAB avec communauté active, middlemen certifiés, giveaways et échanges sécurisés.",
    features:["Communauté active","Middlemen certifiés","Pas d’arnaque","Giveaways"]
  }
},
{
  id:"guigui",
  verified:true,
  score:4.7,
  link:"https://discord.gg/gykguigui",
  en:{
    name:"Guigui",
    desc:"Active Steal a Brainrot server with friendly traders, secure middlemen, and regular events.",
    features:["Friendly traders","Certified middlemen","Safe trades","Community events"]
  },
  fr:{
    name:"Guigui",
    desc:"Serveur Steal a Brainrot actif avec traders sympas, middlemen certifiés et événements réguliers.",
    features:["Traders sympas","Middlemen certifiés","Échanges sécurisés","Événements communautaires"]
  }
},
{
  id:"azurix",
  verified:true,
  score:4.5,
  link:"https://discord.gg/tRNuK4xyRx",
  en:{
    name:"Azurix",
    desc:"Bilingual Steal a Brainrot server hosted by Azurix & IçZ, with active trading, giveaways, and certified middlemen.",
    features:["Bilingual community","Trading","Giveaways","Certified middlemen"]
  },
  fr:{
    name:"Azurix",
    desc:"Serveur bilingue Steal a Brainrot animé par Azurix & IçZ, avec trading actif, giveaways et middlemen certifiés.",
    features:["Communauté bilingue","Trading","Giveaways","Middlemen certifiés"]
  }
},
{
  id:"azen",
  verified:true,
  score:4.4,
  link:"https://discord.gg/azen",
  en:{
    name:"Azen",
    desc:"Steal a Brainrot server focused on secure trades, active community, and friendly support staff.",
    features:["Safe trades","Active community","Friendly staff","Giveaways"]
  },
  fr:{
    name:"Azen",
    desc:"Serveur Steal a Brainrot axé sur échanges sécurisés, communauté active et staff sympathique.",
    features:["Échanges sécurisés","Communauté active","Staff sympathique","Giveaways"]
  }
},
{
  id:"nova",
  verified:true,
  score:4.3,
  link:"https://discord.gg/xcSSAkuh",
  en:{
    name:"NOVA Anti-Scam",
    desc:"NOVA Anti-Scam server ensures secure Brainrot trades, with verified middlemen and active moderators.",
    features:["Anti-scam system","Verified middlemen","Secure trades","Active moderation"]
  },
  fr:{
    name:"NOVA Anti-Scam",
    desc:"Serveur NOVA Anti-Scam avec échanges sécurisés, middlemen vérifiés et modération active.",
    features:["Système anti-scam","Middlemen vérifiés","Échanges sécurisés","Modération active"]
  }
}
];

// INDEX PAGE
const container = document.getElementById("servers");
if(container){
  servers.forEach(s=>{
    const fav = favs.includes(s.id) ? "⭐" : "☆";
    container.innerHTML += `
    <div class="card">
      <h2>${s[lang].name}</h2>
      ${s.verified ? '<span class="verified">✔ VERIFIED</span>' : ''}
      <p>Trust score: ⭐ ${s.score}</p>
      <span class="favorite" onclick="toggleFav('${s.id}')">${fav}</span>
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

  const ul = document.getElementById("features");
  s[lang].features.forEach(f=>{
    ul.innerHTML += `<li>${f}</li>`;
  });

  if(!s.verified) document.getElementById("verified").style.display="none";
}

// FUNCTIONS
function openServer(id){
  localStorage.setItem("server",id);
  location.href="server.html";
}

function toggleFav(id){
  favs.includes(id) ? favs=favs.filter(f=>f!==id) : favs.push(id);
  localStorage.setItem("favs",JSON.stringify(favs));
  location.reload();
}

function toggleLang(){
  lang = lang==="en"?"fr":"en";
  localStorage.setItem("lang",lang);
  location.reload();
}

function back(){location.href="index.html";}
