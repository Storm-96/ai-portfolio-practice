/* --------- Reset + Variables --------- */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

:root{
  --bg: #0b0f19;
  --card: rgba(255,255,255,0.06);
  --text: #eaf0ff;
  --muted: rgba(234,240,255,0.70);
  --border: rgba(255,255,255,0.10);
  --shadow: 0 18px 50px rgba(0,0,0,0.35);

  --primary: #7c3aed;
  --primary2: #22d3ee;
  --radius: 18px;
}

body.light{
  --bg: #f7f8ff;
  --card: rgba(10,15,25,0.05);
  --text: #0b0f19;
  --muted: rgba(11,15,25,0.70);
  --border: rgba(11,15,25,0.12);
  --shadow: 0 14px 40px rgba(11,15,25,0.12);
}

body{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background: radial-gradient(1200px 700px at 20% 10%, rgba(124,58,237,0.22), transparent 55%),
              radial-gradient(900px 600px at 80% 20%, rgba(34,211,238,0.18), transparent 50%),
              var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* --------- Layout --------- */
.container{
  width: min(1100px, 92%);
  margin: 0 auto;
}

.section{ padding: 88px 0; }
.section-title{ font-size: 34px; letter-spacing: -0.5px; }
.muted{ color: var(--muted); margin-top: 10px; }

a{ color: inherit; text-decoration: none; }

/* --------- Navbar --------- */
.navbar{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(10,12,20,0.50);
  border-bottom: 1px solid var(--border);
}

body.light .navbar{ background: rgba(247,248,255,0.75); }

.nav-inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 16px;
}

.logo{
  font-weight: 800;
  letter-spacing: -0.6px;
  font-size: 18px;
}
.logo span{ color: var(--primary2); }

.nav{
  display: flex;
  gap: 22px;
}

.nav-link{
  font-size: 14px;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 12px;
  transition: 0.2s;
}
.nav-link:hover{ color: var(--text); background: var(--card); }

.nav-actions{
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-btn{
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 14px;
  padding: 10px 12px;
  cursor: pointer;
  transition: 0.2s;
}
.icon-btn:hover{ transform: translateY(-1px); }

.menu-btn{
  display: none;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 14px;
  padding: 10px 12px;
  cursor: pointer;
}

.mobile-menu{
  display: none;
  border-top: 1px solid var(--border);
  padding: 10px 0 16px;
}
.mobile-menu a{
  display: block;
  padding: 12px 0;
  color: var(--muted);
}
.mobile-menu a:hover{ color: var(--text); }

/* --------- Buttons --------- */
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--primary), var(--primary2));
  color: white;
  box-shadow: var(--shadow);
  transition: 0.2s;
}
.btn:hover{ transform: translateY(-2px); }

.btn-sm{ padding: 10px 14px; font-size: 14px; }

.btn-ghost{
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  box-shadow: none;
}
.btn-ghost:hover{ background: var(--card); }

/* --------- Hero --------- */
.hero{ padding: 92px 0 70px; }
.hero-inner{
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  align-items: center;
}

.pill{
  display: inline-flex;
  padding: 7px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--card);
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 14px;
}

.hero h1{
  font-size: 46px;
  line-height: 1.1;
  letter-spacing: -1px;
}
.grad{
  background: linear-gradient(135deg, var(--primary), var(--primary2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sub{ margin-top: 14px; color: var(--muted); max-width: 55ch; }

.hero-cta{
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stats{
  margin-top: 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.stat{
  flex: 1;
  min-width: 140px;
  padding: 14px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.stat b{ font-size: 20px; display: block; }
.stat span{ color: var(--muted); font-size: 13px; }

.avatar-card{
  position: relative;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
}
.avatar-card img{
  width: 100%;
  height: 520px;
  object-fit: cover;
  display: block;
}
.avatar-glow{
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(34,211,238,0.28), transparent 55%);
  pointer-events: none;
}

/* --------- About --------- */
.about{
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 34px;
  align-items: center;
}
.about-img img{
  width: 100%;
  border-radius: 26px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.skill-chips{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}
.chip{
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--card);
  font-size: 13px;
  color: var(--muted);
}

.about-cards{
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.mini-card{
  padding: 14px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border);
}
.mini-card h4{ font-size: 14px; margin-bottom: 6px; }
.mini-card p{ color: var(--muted); font-size: 13px; }

/* --------- Projects --------- */
.section-head{ margin-bottom: 22px; }

.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.card{
  padding: 18px;
  border-radius: 22px;
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: 0.2s;
}
.card:hover{ transform: translateY(-4px); }

.card-top{ display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
.tag{
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
}

.card h3{ font-size: 18px; margin-bottom: 8px; }
.card p{ color: var(--muted); font-size: 14px; }

.card-actions{
  margin-top: 14px;
  display: flex;
  gap: 14px;
}
.link{
  font-weight: 700;
  font-size: 13px;
  color: rgba(34,211,238,0.95);
}
body.light .link{ color: rgba(124,58,237,0.95); }

/* --------- Contact --------- */
.contact{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}

.contact-info{ margin-top: 16px; }
.info{
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
  display: flex;
  gap: 10px;
  align-items: center;
}

.contact-form{
  padding: 18px;
  border-radius: 22px;
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.contact-form input,
.contact-form textarea{
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  outline: none;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder{ color: rgba(200,210,255,0.55); }

body.light .contact-form input::placeholder,
body.light .contact-form textarea::placeholder{ color: rgba(11,15,25,0.45); }

/* --------- Footer --------- */
.footer{
  padding: 26px 0;
  border-top: 1px solid var(--border);
}
.footer-inner{
  display: flex;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  color: var(--muted);
}
.footer-links a{ margin-left: 12px; color: var(--muted); }
.footer-links a:hover{ color: var(--text); }

/* --------- WhatsApp --------- */
.whatsapp{
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  box-shadow: var(--shadow);
  font-size: 22px;
  transition: 0.2s;
}
.whatsapp:hover{ transform: translateY(-3px); }

/* --------- Responsive --------- */
@media (max-width: 900px){
  .hero-inner{ grid-template-columns: 1fr; }
  .avatar-card img{ height: 420px; }
  .about{ grid-template-columns: 1fr; }
  .grid{ grid-template-columns: 1fr; }
  .contact{ grid-template-columns: 1fr; }
  .about-cards{ grid-template-columns: 1fr; }
  .nav{ display: none; }
  .menu-btn{ display: inline-flex; }
}

