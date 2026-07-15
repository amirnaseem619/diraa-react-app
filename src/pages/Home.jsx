import { useModal } from "../context/ModalContext.jsx";
import Reveal from "../components/Reveal.jsx";

const cardData = [
  {
    icon: "/images/images/ai.svg",
    title: "AI Power deduction",
    subTitle:
      "AI models trained on millions of attack patterns identify sophisticated threats that signature-based systems miss. Continuous learning adapts to evolving attack techniques without manual rule updates.",
  },
  {
    icon: "/images/images/high.svg",
    title: "High Performance",
    subTitle:
      "Process 10+ Gbps of network traffic per instance with sub-millisecond latency. Distributed architecture scales horizontally to support enterprise-wide deployments without bottlenecks.",
  },
  {
    icon: "/images/images/accuracy.svg",
    title: "Precision Accuracy",
    subTitle:
      "Behavioral context engine reduces false positives by 87% compared to traditional IDS. Smart correlation eliminates alert fatigue while ensuring zero tolerance for genuine threats.",
  },
  {
    icon: "/images/images/real.svg",
    title: "Real time processing",
    subTitle:
      "Inline deployment blocks threats before they reach critical systems. Stream processing architecture analyzes traffic in real-time without packet loss or degradation.",
  },
  {
    icon: "/images/images/multi.svg",
    title: "Multi layer protection",
    subTitle:
      "Combines signature matching, behavioral analysis, protocol validation, and ML-based anomaly detection. Defense-in-depth architecture ensures threats don`t slip through single-layer gaps.",
  },
  {
    icon: "/images/images/advance.svg",
    title: "Advance layer protection",
    subTitle:
      "Interactive dashboards surface actionable insights from terabytes of security data. Automated threat hunting identifies attack campaigns across your entire infrastructure.",
  },
];

const archData = [
  { titleValue: "5+", subValue: "Gbps Throughput" },
  { titleValue: "0%", subValue: "Packet Drop" },
  { titleValue: "<1ms", subValue: "Latency" },
  { titleValue: "AI", subValue: "Powered" },
];

const tableRows = [
  {
    name: "Threat Detection Breadth",
    desc: "Multi-layered detection using AI, behavioral analysis, and signature matching vs basic signature-only detection",
    diraa: 4,
    typical: 2,
  },
  {
    name: "Network Throughput & Scalability",
    desc: "5+ Gbps per instance with horizontal scaling vs limited throughput requiring hardware upgrades",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Zero-day Threat Protection",
    desc: "Generative AI network-based anomaly detection identifies unknown threats vs reliance on signature updates",
    diraa: 4,
    typical: 2,
  },
  {
    name: "False Positive/Negative Reduction",
    desc: "Behavioral context and ML reduce false alarms by 87% vs high false positive rates requiring manual tuning",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Threat Intelligence Integration",
    desc: "Real-time feed correlation with 50+ threat intel sources vs limited or manual threat feed integration",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Reporting & Dashboards",
    desc: "Interactive dashboards with customizable views and automated compliance reporting vs basic logging",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Custom Rule Creation (GUI)",
    desc: "Intuitive graphical interface for creating custom detection rules vs command-line configuration",
    diraa: 5,
    typical: 2,
  },
  {
    name: "Cloud & Hybrid Deployments",
    desc: "Native cloud support with flexible deployment across on-premises, cloud, and hybrid environments vs limited cloud compatibility",
    diraa: 5,
    typical: 2,
  },
  {
    name: "IP-to-Geolocation Mapping",
    desc: "Built-in geolocation intelligence for threat source identification vs manual lookup or third-party integration",
    diraa: 5,
    typical: 1,
  },
];

const specificationsData = [
  { specTitle: "THROUGHUT", specHead: "10+ Gbps", specSmall: "Per instance" },
  { specTitle: "LATENCY", specHead: "< 1ms", specSmall: "Inline mode" },
  {
    specTitle: "FALSE POSITIVE RATE",
    specHead: "< 0.1%",
    specSmall: "87% reduction",
  },
  {
    specTitle: "PROTOCOLS SUPPORTED",
    specHead: "100+",
    specSmall: "Including custom",
  },
  {
    specTitle: "CONCURRENT SESSIONS",
    specHead: "10M+",
    specSmall: "Per instance",
  },
  {
    specTitle: "DETECTION METHODS",
    specHead: "4-Layer",
    specSmall: "Signature, ML, Behavioral, Protocol",
  },
  {
    specTitle: "DEVELOPMENT MODES",
    specHead: "Inline/TAP",
    specSmall: "Active & passive",
  },
  {
    specTitle: "THREAT INTEL FEEDS",
    specHead: "50+",
    specSmall: "Real-time integration",
  },
  {
    specTitle: "HIGH AVAILABILITY",
    specHead: "99.99%",
    specSmall: "Active-active clustering",
  },
];

function Stars({ count, type }) {
  return (
    <div className={`stars ${type}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`star ${i <= count ? "filled" : "empty"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const { openModal } = useModal();

  return (
    <>
      {/* ======= HERO ======= */}
      <header>
        <div className="header-content">
          <div className="hero-text-btn">
            <p id="one">Advanced Cyber Protection</p>
            <h1>
              Smarter Detection <br />
              Stronger Security
            </h1>
            <p id="two">
              Next generation intrusion detection and prevention powered by AI.
              <br />
              Detect advanced threats, eliminate false positives, and scale
              effortlessly <br />
              across your infrastructure.
            </p>
            <button id="heroBtn" onClick={openModal}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* KEY CAPABILITIES */}
        <div className="key-capabilities-container">
          <div className="key-title-subTitle">
            <h1>Key Capabilities</h1>
            <p>
              Enterprise-grade protection combining artificial intelligence with
              proven security <br />
              principles.
            </p>
          </div>

          <div className="key-cards">
            {cardData.map((card) => (
              <Reveal as="div" className="card" key={card.title}>
                <div className="icon-title">
                  <img src={card.icon} alt="" />
                  <h4>{card.title}</h4>
                </div>
                <p>{card.subTitle}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FLEXIBLE DEPLOYMENT OPTIONS */}
        <div className="flexible-options-container">
          <div className="flexible-contents">
            <Reveal as="div" className="options-title-subTitle">
              <h1>Flexible Deployment Options</h1>
              <p>
                Deploy Diraa in the configuration that best fits your
                infrastructure
              </p>
            </Reveal>

            <div className="flexible-cards">
              <Reveal as="div" className="dep-card">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "#2e8b57" }}
                >
                  <img src="/images/images/iso.svg" alt="" />
                </div>
                <h3>ISO Mounted</h3>
                <p className="sub">Standalone appliance deployment</p>
                <ul className="feature-list">
                  <li>
                    <i className="fa-solid fa-check"></i> 1U/2U rack form factor
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Hot-swappable
                    components
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Redundant power
                    supplies
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Built-in management
                    console
                  </li>
                </ul>
              </Reveal>

              <Reveal as="div" className="dep-card">
                <div className="ribbon">
                  <span>RECOMMENDED</span>
                </div>
                <div className="icon-box">
                  <img src="/images/images/rack.svg" alt="" />
                </div>
                <h3>Rack Mounted</h3>
                <p className="sub">Data center integration</p>
                <ul className="feature-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Standard 19&quot; rack
                    mount
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Cable management
                    included
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Remote management
                    (IPMI)
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Cluster-ready
                    architecture
                  </li>
                </ul>
              </Reveal>

              <Reveal as="div" className="dep-card">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "#2e8b57" }}
                >
                  <img src="/images/images/cloud.svg" alt="" />
                </div>
                <h3>Cloud Deployment</h3>
                <p className="sub">Virtual and cloud-native</p>
                <ul className="feature-list">
                  <li>
                    <i className="fa-solid fa-check"></i> AWS, Azure, GCP
                    support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Auto-scaling
                    capabilities
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Container
                    orchestration
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Hybrid cloud ready
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        {/* DEPLOYMENT ARCHITECTURE */}
        <div className="deployment-architecture">
          <div className="deployment-contents">
            <Reveal as="h1" id="mainTitle">
              Deployment Architecture
            </Reveal>

            <section className="architecture">
              <div className="arch">
                <Reveal as="div" className="traffic-box">
                  <p className="traffic-label">Network Traffic</p>
                  <p className="traffic-value">
                    5 upto 10
                    <br />
                    Gbps
                  </p>
                </Reveal>

                <span className="arrow">&#8594;</span>

                <Reveal as="div" className="center-card">
                  <div className="shield-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>Diraa IDPS</h3>
                  <ul className="features">
                    <li>AI Detection Engine</li>
                    <li>AutoSecRule Optimizer</li>
                    <li>Multi-Core Processing</li>
                  </ul>
                </Reveal>

                <span className="arrow">&#8594;</span>

                <div className="outputs">
                  <Reveal as="div" className="output-item output-clean">
                    <i className="fa-regular fa-circle-check"></i>
                    Clean Traffic
                  </Reveal>
                  <Reveal as="div" className="output-item output-blocked">
                    <i className="fa-solid fa-shield-slash"></i>
                    Blocked Threats
                  </Reveal>
                  <Reveal as="div" className="output-item output-alerts">
                    <i className="fa-regular fa-bell"></i>
                    Alerts &amp; Logs
                  </Reveal>
                </div>
              </div>
            </section>
          </div>

          <div className="arch-containers">
            {archData.map((item) => (
              <div className="compareContainer" key={item.subValue}>
                <h1>{item.titleValue}</h1>
                <p>{item.subValue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW WE COMPARE */}
        <div className="compare-container">
          <div className="compare-contents">
            <Reveal as="h1" className="compareTitle">
              How We Compare
            </Reveal>
            <Reveal as="p" className="compareSub">
              Diraa IDPS vs Typical IDS/IPS Solutions
            </Reveal>

            <section className="comparison-section">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="col-diraa">Diraa IDPS</th>
                    <th className="col-typical">Typical IDS/IPS</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {tableRows.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <div className="feature-name">{row.name}</div>
                        <div className="feature-desc">{row.desc}</div>
                      </td>
                      <td>
                        <Stars count={row.diraa} type="diraa" />
                      </td>
                      <td>
                        <Stars count={row.typical} type="typical" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>

        {/* DEPLOYMENT OPTIONS */}
        <div className="development-options">
          <div className="development-contents">
            <h1>Deployment Options</h1>
            <p>
              Choose the deployment model that fits your infrastructure needs
            </p>

            <div className="options-container">
              <div className="deploy-card">
                <div className="deploy-ribbon">
                  <span>RECOMMENDED</span>
                </div>
                <div className="deploy-icon">
                  <i className="fa-regular fa-cloud"></i>
                </div>
                <h2 className="deploy-title">Software Deployment</h2>
                <h1 className="gbps">5 Gbps</h1>
                <p className="deploy-sub">Traffic Processing Capacity</p>

                <div className="deploy-options">
                  <div className="option">
                    <h3>5x Faster</h3>
                    <p>Than competing software solutions</p>
                  </div>
                  <div className="option">
                    <h3>Multi-Core Optimized</h3>
                    <p>Efficient CPU utilization across cores</p>
                  </div>
                  <div className="option">
                    <h3>Zero Packet Drop</h3>
                    <p>Reliable processing without data loss</p>
                  </div>
                  <div className="option">
                    <h3>AutoSecRule Integrated</h3>
                    <p>AI-powered rule optimization included</p>
                  </div>
                  <div className="option">
                    <h3>Cloud-Native</h3>
                    <p>Deploy on AWS, Azure, GCP, or private cloud</p>
                  </div>
                </div>

                <div className="options-card">
                  <p>IDEAL FOR:</p>
                  <h4>
                    Cloud Environments, Virtual Infrastructure, Hybrid
                    Deployments
                  </h4>
                </div>
              </div>

              <div className="option-three-cards">
                <div className="optionCard">
                  <h1>5 upto 10</h1>
                  <p>Gbps Software</p>
                </div>
                <div className="optionCard">
                  <h1>0%</h1>
                  <p>Packet Drop Rate</p>
                </div>
                <div className="optionCard">
                  <h1>AI</h1>
                  <p>AutoSecRule Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL EXCELLENCE */}
        <div className="technical-excellence">
          <h1>Technical Excellence</h1>
          <div className="technical-two-cards">
            <div className="technical-card">
              <div className="spec-grid">
                <div className="spec-card">
                  <h3 className="spec-card-title">Advanced Detection</h3>
                  <ul className="spec-list">
                    <li>
                      <span className="spec-bar"></span> Machine learning-based
                      anomaly detection
                    </li>
                    <li>
                      <span className="spec-bar"></span> Behavioral analysis and
                      pattern recognition
                    </li>
                    <li>
                      <span className="spec-bar"></span> Signature-based and
                      heuristic detection
                    </li>
                    <li>
                      <span className="spec-bar"></span> Zero-day threat
                      identification
                    </li>
                    <li>
                      <span className="spec-bar"></span> Advanced persistent
                      threat (APT) detection
                    </li>
                  </ul>
                </div>

                <div className="spec-card">
                  <h3 className="spec-card-title">Performance &amp; Scale</h3>
                  <ul className="spec-list">
                    <li>
                      <span className="spec-bar"></span> Multi-gigabit
                      throughput capacity
                    </li>
                    <li>
                      <span className="spec-bar"></span> Horizontal and vertical
                      scaling
                    </li>
                    <li>
                      <span className="spec-bar"></span> Load balancing and high
                      availability
                    </li>
                    <li>
                      <span className="spec-bar"></span> Low latency processing
                      pipeline
                    </li>
                    <li>
                      <span className="spec-bar"></span> Distributed
                      architecture support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS */}
        <div className="technical-specifications">
          <h1>Technical Specifications</h1>
          <p>
            Enterprise-grade performance designed for modern infrastructures
          </p>

          <div className="specification-cards">
            {specificationsData.map((spec) => (
              <div className="specificationCard" key={spec.specTitle}>
                <p id="mainText">{spec.specTitle}</p>
                <h1>{spec.specHead}</h1>
                <p id="secText">{spec.specSmall}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DIRA EXPERIENCE */}
        <div className="dira-experience-section">
          <div className="dira-experience">
            <div className="specialities-row">
              <div className="specialities">
                <h1>5 upto 10 Gbps</h1>
                <p>THROUGHPUT</p>
              </div>
              <div className="specialities">
                <h1>&lt; 1ms</h1>
                <p>LATENCY</p>
              </div>
              <div className="specialities">
                <h1>99.99%</h1>
                <p>UPTIME</p>
              </div>
              <div className="specialities">
                <h1>0%</h1>
                <p>POCKET DROP</p>
              </div>
            </div>

            <div className="dira-title-btn">
              <h1 id="dira-title">Experience Diraa IDPS</h1>
              <p>
                See how Diraa detects threats that traditional systems miss.
                Schedule a <br />
                technical demonstration with our security team.
              </p>

              <div className="dira-btn">
                <button className="requestBtn" onClick={openModal}>
                  Request Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </button>

                <button className="solutionsBtn">
                  Explore Our Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
