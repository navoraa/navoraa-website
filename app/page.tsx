const services = [
  { number:"01", tag:"Advise", title:"Cloud & AI Strategy and Architecture", summary:"Turn cloud and AI ambition into an investable, governed transformation roadmap.", body:"We work on your side to assess readiness, prioritise use cases, define the target architecture and operating model, and independently assure major technology decisions before they become expensive constraints.", outcomes:["Cloud and AI readiness assessments","Strategy, business case and adoption roadmap","Target architecture and operating model","Independent architecture and design assurance"] },
  { number:"02", tag:"Assess", title:"Microsoft Cloud Assessment — CAF & WAF", summary:"Establish where your cloud environment stands and what to improve next.", body:"We assess cloud adoption maturity using the Microsoft Cloud Adoption Framework and evaluate workload architecture against the Azure Well-Architected Framework. The result connects strategy, governance and platform capability with evidence-based technical findings and a prioritised improvement roadmap.", outcomes:["CAF strategy, plan, ready, adopt, govern and manage assessment","WAF review across reliability, security, cost, operations and performance","Cloud maturity, risk and capability baseline","Prioritised remediation roadmap and executive findings"] },
  { number:"03", tag:"Foundation", title:"Secure Azure Cloud Foundations", summary:"Build a governed Azure platform that is ready for enterprise workloads.", body:"We architect, deploy and remediate standard or regulated Azure landing zones across identity, network, security, governance and operations—delivered through reusable infrastructure as code.", outcomes:["Enterprise and regulated landing zones","Entra, connectivity and security controls","Azure Policy and compliance automation","IaC pipelines and workload onboarding patterns"] },
  { number:"04", tag:"AI Platform", title:"Enterprise AI Platform Foundations", summary:"Move AI safely from experimentation into repeatable production delivery.", body:"We establish secure non-production and production foundations for Microsoft Foundry, Azure OpenAI, models and agents, with private connectivity, data guardrails and lifecycle controls designed in from day one.", outcomes:["AI platform and landing zone architecture","Non-production and production deployment","AI security and responsible AI controls","GenAIOps, evaluation and monitoring foundations"] },
  { number:"05", tag:"M365", title:"Microsoft 365 Platform Assessment & Copilot Adoption", summary:"Measure technical health and organisational maturity before scaling Microsoft 365 and Copilot.", body:"We assess how Microsoft 365 is implemented across identity, security, compliance, collaboration, information governance and operations—alongside your organisation's ownership, skills, adoption practices and governance maturity. The result is a practical improvement roadmap and a safer path to Copilot value.", outcomes:["Technical architecture and configuration assessment","Security, Purview, permissions and compliance review","Organisational maturity and operating model assessment","Prioritised M365 and Copilot adoption roadmap"] },
  { number:"06", tag:"Engineer", title:"Platform Engineering & Cloud Operations", summary:"Create the engineering and operating capability behind dependable cloud platforms.", body:"We connect DevSecOps, infrastructure as code, observability and operational ownership so platform teams can release safely, onboard workloads faster and continuously improve service quality.", outcomes:["DevSecOps and IaC enablement","Platform patterns and developer experience","Observability, SRE and operational readiness","Cloud operating model and managed governance"] },
  { number:"07", tag:"Optimise", title:"FinOps, Resilience & Cloud Optimisation", summary:"Improve cloud value, security and resilience across the technology estate.", body:"We identify avoidable cost and operational risk, then create an actionable improvement plan spanning FinOps, security posture, backup, disaster recovery, architecture health and service resilience.", outcomes:["FinOps and licensing optimisation","Security posture and governance uplift","Backup, DR and cyber resilience review","Prioritised remediation and improvement roadmap"] },
];
const stages = [
  ["01","Discover","Clarify outcomes, constraints and the decisions that matter."],
  ["02","Design","Create the target architecture, controls and delivery roadmap."],
  ["03","Deliver","Build repeatable platforms through IaC and engineering discipline."],
  ["04","Govern","Embed ownership, assurance, observability and continuous improvement."],
];

export default function Home(){
  const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
  const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://navoraa.searchamit-kumar.chatgpt.site";
  return <main>
  <header className="site-header">
    <a href="#top" className="brand" aria-label="Navoraa home"><img className="brand-logo" src={`${basePath}/brand/navoraa-logo.png`} alt="Navoraa" /></a>
    <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#partnerships">Partnerships</a><a href="#why">Why Navoraa</a></nav>
    <a className="nav-cta" href="#contact">Start a conversation <span>↗</span></a>
  </header>

  <section className="hero" id="top"><div className="hero-glow" />
    <div className="hero-copy"><p className="eyebrow"><span/> Enterprise cloud, AI & security</p><h1>Architecture that turns <em>ambition</em> into advantage.</h1><p className="hero-lead">Navoraa helps enterprise and government leaders make the right cloud and AI decisions—then builds the secure platforms, guardrails and operating models that make them real.</p><div className="hero-actions"><a className="button button-primary" href="#services">Explore our services <span>↘</span></a><a className="button button-ghost" href="#approach">How we work</a></div></div>
    <div className="signal-visual" aria-label="Animated Navoraa transformation model">
      <div className="signal-grid" />
      <div className="signal-ring ring-one" /><div className="signal-ring ring-two" /><div className="signal-ring ring-three" />
      <div className="signal-core"><span>NAVORAA</span><b>Fresh Thinking.<br/>Trusted Architecture.<br/>Real Outcomes.</b></div>
      <article className="signal-node signal-strategy"><small>01</small><b>Strategy</b><span>Purpose aligned</span></article>
      <article className="signal-node signal-cloud"><small>02</small><b>Secure cloud</b><span>Engineered to scale</span></article>
      <article className="signal-node signal-ai"><small>03</small><b>AI Enablement</b><span>Ready for value</span></article>
      <article className="signal-node signal-value"><small>04</small><b>Outcomes</b><span>Measured & owned</span></article>
      <i className="signal-pulse pulse-one"/><i className="signal-pulse pulse-two"/><i className="signal-pulse pulse-three"/>
      <div className="signal-caption"><span>Independent advice</span><i/><span>Purposeful architecture</span><i/><span>Accountable delivery</span></div>
    </div>
    <div className="hero-strip"><span>Cloud & AI Strategy</span><i/><span>Secure Azure Foundations</span><i/><span>Enterprise AI Platforms</span><i/><span>Copilot Adoption</span><i/><span>FinOps & Resilience</span></div>
  </section>

  <section className="positioning section-pad"><p className="section-kicker">Built for consequential decisions</p><div className="positioning-grid"><h2>Independent advice.<br/><span>Delivery credibility.</span></h2><div><p className="large-copy">Cloud and AI programs rarely fail because of a missing product. They fail when business intent, architecture, governance and execution drift apart.</p><p>Navoraa works alongside your leaders and teams to connect those layers. We validate decisions against your business—not a vendor quota—then help engineer and operationalise the outcome.</p></div></div></section>

  <section className="services section-pad" id="services"><div className="section-heading"><div><p className="section-kicker light">Priority service portfolio</p><h2>From strategic clarity<br/>to a platform that performs.</h2></div><p>Seven connected service pillars covering assessment, cloud, security, AI, Copilot, engineering and optimisation priorities shaping enterprise demand.</p></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.number}><div className="card-top"><span>{s.number}</span><b>{s.tag}</b></div><h3>{s.title}</h3><p className="service-summary">{s.summary}</p><p className="service-body">{s.body}</p><ul>{s.outcomes.map(x=><li key={x}>{x}</li>)}</ul><a href="#contact">Discuss this service <span>↗</span></a></article>)}</div></section>

  <section className="approach section-pad" id="approach"><div className="approach-intro"><p className="section-kicker">How we work</p><h2>One connected path from decision to dependable operation.</h2><p>We combine executive advisory, enterprise architecture and hands-on platform engineering. The result is faster progress without separating strategy from delivery reality.</p></div><div className="stage-list">{stages.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>

  <section className="partnerships section-pad" id="partnerships">
    <div className="partnership-intro"><p className="section-kicker light">Strategic partnerships</p><h2>Connected to the ecosystem.<br/><span>Focused on your outcome.</span></h2><p>Navoraa combines independent architecture leadership with deep Microsoft platform capability—helping clients turn technology investment into secure, governed and operational solutions.</p></div>
    <article className="partner-card">
      <div className="microsoft-partner" aria-label="Microsoft Partner"><span className="ms-mark" aria-hidden="true"><i/><i/><i/><i/></span><span className="ms-name">Microsoft<br/><b>Partner</b></span></div>
      <div className="partner-copy"><p className="partner-label">Microsoft ecosystem</p><h3>Cloud and AI capability built for enterprise adoption.</h3><p>Architecture and delivery expertise across Azure, Microsoft 365, Security, Data and AI—aligned to Microsoft best practices and shaped around each client’s business, risk and operating context.</p><ul><li>Azure cloud foundations</li><li>AI Enablement</li><li>Microsoft 365 & Copilot</li><li>Security & governance</li></ul></div>
    </article>
  </section>

  <section className="why section-pad" id="why"><div className="why-panel"><div><p className="section-kicker light">Why Navoraa</p><h2>Senior thinking.<br/>Practical execution.</h2></div><div className="why-points"><article><span>01</span><div><h3>Independent by design</h3><p>Recommendations shaped by client outcomes, risk and context—not vendor-led implementation pressure.</p></div></article><article><span>02</span><div><h3>Enterprise depth</h3><p>Architecture, cloud, infrastructure, security and AI treated as one connected operating system.</p></div></article><article><span>03</span><div><h3>Built to transfer</h3><p>Reusable patterns, clear decisions and capability uplift so your teams can operate with confidence.</p></div></article></div></div></section>

  <section className="contact section-pad" id="contact">
    <div className="contact-copy"><p className="section-kicker">Start a conversation</p><h2>Make the next cloud or AI decision with clarity.</h2><p>Tell us briefly what you are working through. We will review your enquiry and respond directly.</p><a href="mailto:lead@navoraa.com.au">lead@navoraa.com.au <span>↗</span></a></div>
    <form className="contact-form" action="https://formsubmit.co/lead@navoraa.com.au" method="POST">
      <input type="hidden" name="_subject" value="New Navoraa website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${siteUrl}/thank-you/`} />
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <div className="form-row"><label>Full name<input type="text" name="name" autoComplete="name" required /></label><label>Work email<input type="email" name="email" autoComplete="email" required /></label></div>
      <div className="form-row"><label>Organisation<input type="text" name="organisation" autoComplete="organization" /></label><label>Area of interest<select name="area" defaultValue="" required><option value="" disabled>Select a service</option><option>Cloud & AI Strategy</option><option>Microsoft Cloud Assessment — CAF & WAF</option><option>Secure Azure Cloud Foundations</option><option>Enterprise AI Platform Foundations</option><option>Microsoft 365 & Copilot</option><option>Platform Engineering & Cloud Operations</option><option>FinOps, Resilience & Cloud Optimisation</option><option>Other</option></select></label></div>
      <label>How can we help?<textarea name="message" rows={5} placeholder="A short summary of your priorities, challenge or planned initiative…" required /></label>
      <div className="form-submit"><p>By submitting, you agree that Navoraa may contact you about this enquiry.</p><button className="button button-primary" type="submit">Send enquiry <span>↗</span></button></div>
    </form>
  </section>

  <footer><a href="#top" className="brand" aria-label="Navoraa home"><img className="brand-logo footer-logo" src={`${basePath}/brand/navoraa-logo.png`} alt="Navoraa" /></a><p>Enterprise architecture for cloud, AI and secure platforms.</p><div><a href="#services">Services</a><a href="#approach">Approach</a><a href="#partnerships">Partnerships</a><a href="#why">Why Navoraa</a></div><small>© 2026 Navoraa. Perth, Western Australia.</small></footer>
</main>}
