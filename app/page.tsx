import type { Metadata } from "next";
import PhotoCarousel from "./PhotoCarousel";

export const metadata: Metadata = {
  title: "Ayan Mitra | Pipeline Scientist, LSST DESC",
  description:
    "Pipeline Scientist for LSST DESC working across cosmology, scientific machine learning, open research software, and reproducible computing.",
};

const researchAreas = [
  {
    number: "01",
    venue: "The Astrophysical Journal · 2026",
    title:
      "A Fully Photometric Approach to Type Ia Supernova Cosmology in the LSST Era",
    text: "A complete cosmology analysis using photometrically classified Type Ia supernovae, host galaxy photometric redshifts, realistic contamination, and bias corrections.",
    href: "https://doi.org/10.3847/1538-4357/ae7a41",
  },
  {
    number: "02",
    venue: "The Astrophysical Journal · 2026",
    title:
      "Probing Physics beyond the Standard Model through Combined Analyses of Next Generation Type Ia Supernova, Cosmic Microwave Background, and Baryon Acoustic Oscillation Surveys",
    text: "Work led by Srinivasan Raghunathan combining Type Ia supernova, cosmic microwave background, and baryon acoustic oscillation measurements.",
    href: "https://ui.adsabs.harvard.edu/abs/2026ApJ..1003..246R/abstract",
  },
  {
    number: "03",
    venue: "Monthly Notices of the Royal Astronomical Society · 2026",
    title:
      "FlowSN: Neural Simulation Based Inference under Realistic Selection Effects Applied to Supernova Cosmology",
    text: "A neural simulation based inference framework for supernova cosmology that models realistic survey selection effects.",
    href: "https://ui.adsabs.harvard.edu/abs/2026MNRAS.550g1046B/abstract",
  },
];

const flagshipProjects = [
  {
    title: "SNANA Pipeline Assistant",
    category: "Agentic AI",
    highlight: "Source grounded diagnostics",
    text: "An operations assistant for scientific pipelines that diagnoses configuration, memory, stale lock, and scheduler problems while tracing answers to curated sources.",
    href: "https://github.com/am610/SNANA_PIPELINE_ASSISTANT",
  },
  {
    title: "Firecrown Wrapper",
    category: "Cosmology inference",
    highlight: "Tested workflow",
    text: "A Python workflow connecting Firecrown and CosmoSIS from Hubble diagram inputs through parameter estimation, post processing, and structured summaries.",
    href: "https://github.com/am610/Firecrown_wrapper_TD",
  },
  {
    title: "Supernova Gravitational Wave Classifier",
    category: "Scientific machine learning",
    highlight: "86.5 percent held out accuracy",
    text: "A runnable convolutional neural network and interactive demonstration for classifying nuclear equation of state from simulated gravitational wave signals.",
    href: "https://github.com/am610/GWCCSN_EOS_Ye",
  },
  {
    title: "SCONE Tools",
    category: "Research software",
    highlight: "Million event scale",
    text: "Extraction, indexed lookup, and visualization utilities for neural supernova classifier heatmaps and data products across large simulated samples.",
    href: "https://github.com/am610/scone_tools",
  },
  {
    title: "AMF Document Structure Extraction",
    category: "Document AI",
    highlight: "Grouped validation",
    text: "A document hierarchy pipeline for detecting table of contents sections in financial PDFs using layout features, LightGBM, and document aware validation.",
    href: "https://github.com/am610/AMF_table_of_contents_extraction",
  },
  {
    title: "Valeo Industrial Computer Vision",
    category: "Computer vision",
    highlight: "High resolution imaging",
    text: "Industrial defect classification using ResNet, ConvNeXt, focal loss, fold based evaluation, and test time augmentation for noisy camera data.",
    href: "https://github.com/am610/Valeo_industrial_computer_vision",
  },
  {
    title: "HrFlow Job Recommendation",
    category: "Recommender systems",
    highlight: "21,917 candidate jobs",
    text: "A sequential recommendation and natural language pipeline for candidate navigation, job retrieval, reranking, and apply versus view prediction.",
    href: "https://github.com/am610/HrFlow_job_recommendation",
  },
  {
    title: "SNCF Waiting Time Forecasting",
    category: "Time series forecasting",
    highlight: "Chronological evaluation",
    text: "Rail platform waiting time forecasting with temporal feature engineering, gradient boosted ensembles, and out of time validation.",
    href: "https://github.com/am610/SNCF_project",
  },
];

const additionalProjects = [
  {
    title: "Deepfake Video Detection",
    category: "Computer vision",
    text: "Face extraction and Inception ResNet V2 classification with a documented frame split leakage limitation.",
    href: "https://github.com/am610/DeepFake",
  },
  {
    title: "Gravitational Wave Machine Learning",
    category: "Time series ML",
    text: "Convolutional and classical models for simulated gravitational wave signal properties.",
    href: "https://github.com/am610/GW_ML",
  },
  {
    title: "GW Isidro",
    category: "Signal analysis",
    text: "Time series analysis of simulated core collapse supernova gravitational wave signals.",
    href: "https://github.com/am610/GW_ISIDRO",
  },
  {
    title: "LSST SRD Supernova Analysis",
    category: "Cosmology",
    text: "Dark energy analysis notebooks using Rubin Observatory survey requirement samples.",
    href: "https://github.com/am610/LSST_SRD_SN_Analysis",
  },
  {
    title: "Supernova Fisher Matrix",
    category: "Statistical inference",
    text: "Fisher matrix and bias calculations for redshift driven supernova magnitude systematics.",
    href: "https://github.com/am610/Fisher-Matrix",
  },
  {
    title: "Regime Aware Statistical Arbitrage",
    category: "Quantitative research",
    text: "Chronological pair selection, costs, false discovery control, regime filters, and bootstrap uncertainty.",
    href: "https://github.com/am610/regime-aware-statistical-arbitrage",
  },
  {
    title: "Bayesian Uncertainty Trading",
    category: "Probabilistic modeling",
    text: "Bayesian return forecasting with MCMC diagnostics, calibrated intervals, costs, and selective abstention.",
    href: "https://github.com/am610/bayesian-uncertainty-trading",
  },
  {
    title: "Safe Reinforcement Learning for Crypto Pairs",
    category: "Reinforcement learning",
    text: "Risk constrained execution with deterministic shields and transparent reporting of negative and mixed results.",
    href: "https://github.com/am610/safe-rl-crypto-pair-trading",
  },
  {
    title: "Cosmology Notebook for arXiv 2209.14542",
    category: "Research reproduction",
    text: "Analysis notebooks supporting a published cosmology study.",
    href: "https://github.com/am610/arXiv_2209.14542",
  },
  {
    title: "Firecrown Wrapper Development",
    category: "Research infrastructure",
    text: "Earlier development work toward the Rubin time domain Firecrown analysis workflow.",
    href: "https://github.com/am610/Firecrown_Wrapper",
  },
  {
    title: "Neural Network Regression",
    category: "Machine learning",
    text: "A compact neural regression study for housing price prediction.",
    href: "https://github.com/am610/Neural_Network_For_Regression",
  },
];

const publications = [
  {
    year: "2026",
    title:
      "The Generalization Gap in Machine Learning EoS Inference from Core Collapse Supernova Gravitational Waves",
    venue: "arXiv, July 2026",
    bibcode: "2026arXiv260706736M",
    featured: true,
  },
  {
    year: "2026",
    title:
      "Catching the Cosmic Sign Flip: Background and Growth Tests of Smooth Sign Switching Lambda s CDM",
    venue: "arXiv, July 2026",
    bibcode: "2026arXiv260706735M",
    featured: true,
  },
  {
    year: "2026",
    title: "Machine Learning Closure Audits for LSST Photometric Supernova Cosmology",
    venue: "arXiv, July 2026",
    bibcode: "2026arXiv260706734M",
    featured: true,
  },
  {
    year: "2026",
    title:
      "FlowSN: Neural Simulation Based Inference under Realistic Selection Effects Applied to Supernova Cosmology",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2026MNRAS.550g1046B",
    featured: true,
  },
  {
    year: "2026",
    title:
      "Probing Physics beyond the Standard Model through Combined Analyses of Next Generation Type Ia Supernova, Cosmic Microwave Background, and Baryon Acoustic Oscillation Surveys",
    venue: "The Astrophysical Journal",
    bibcode: "2026ApJ..1003..246R",
    featured: true,
  },
  {
    year: "2025",
    title:
      "Litmus Tests of the Flat Lambda CDM Model and Model Independent Measurement of H0 rd with LSST and DESI",
    venue: "Journal of Cosmology and Astroparticle Physics",
    bibcode: "2025JCAP...05..030L",
    featured: true,
  },
  {
    year: "2025",
    title:
      "Exploring Alternative Cosmologies with the LSST: Simulated Forecasts and Current Observational Constraints",
    venue: "Physical Review D",
    bibcode: "2025PhRvD.111d3503K",
    featured: false,
  },
  {
    year: "2024",
    title:
      "Dark Energy Reconstruction Analysis with Artificial Neural Networks: Application on Simulated Supernova Ia Data from Rubin Observatory",
    venue: "Physics of the Dark Universe",
    bibcode: "2024PDU....4601706M",
    featured: false,
  },
  {
    year: "2024",
    title:
      "Evaluating Machine Learning Models for Supernova Gravitational Wave Signal Classification",
    venue: "Machine Learning: Science and Technology",
    bibcode: "2024MLS&T...5d5077A",
    featured: false,
  },
  {
    year: "2024",
    title: "Forecasting Cosmology Constraints with Photometric SNIa Samples in the LSST Era",
    venue: "European Astronomical Society Meeting",
    bibcode: "2024eas..conf.2346M",
    featured: false,
  },
  {
    year: "2024",
    title: "Role of Future SNIa Data from Rubin LSST in Reinvestigating Cosmological Models",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2024MNRAS.530.2627S",
    featured: false,
  },
  {
    year: "2024",
    title: "Probing Nuclear Physics with Supernova Gravitational Waves and Machine Learning",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2024MNRAS.529.3582M",
    featured: false,
  },
  {
    year: "2023",
    title: "Exploring Supernova Gravitational Waves with Machine Learning",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2023MNRAS.520.2473M",
    featured: false,
  },
  {
    year: "2023",
    title:
      "Using Host Galaxy Photometric Redshifts to Improve Cosmological Constraints with Type Ia Supernovae in the LSST Era",
    venue: "The Astrophysical Journal",
    bibcode: "2023ApJ...944..212M",
    featured: false,
  },
  {
    year: "2022",
    title: "Swiss Cheese Cosmologies with Variable G and Lambda from the Renormalization Group",
    venue: "Physical Review D",
    bibcode: "2022PhRvD.105h3532A",
    featured: false,
  },
  {
    year: "2021",
    title: "SN 2018agk: A Prototypical Type Ia Supernova with a Smooth Power Law Rise in Kepler K2",
    venue: "The Astrophysical Journal",
    bibcode: "2021ApJ...923..167W",
    featured: false,
  },
  {
    year: "2021",
    title: "Constraining HeII Reionization Detection Uncertainties via Fast Radio Bursts",
    venue: "New Astronomy",
    bibcode: "2021NewA...8901627L",
    featured: false,
  },
  {
    year: "2021",
    title: "Dual Temperature Acceleration Radiation",
    venue: "Astronomy Reports",
    bibcode: "2021ARep...65..942G",
    featured: false,
  },
  {
    year: "2021",
    title: "Constraining the Swiss Cheese IR Fixed Point Cosmology with Cosmic Expansion",
    venue: "Universe",
    bibcode: "2021Univ....7..263M",
    featured: false,
  },
  {
    year: "2021",
    title: "Cosmology with the Einstein Telescope: No Slip Gravity Model and Redshift Specifications",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2021MNRAS.502.5563M",
    featured: false,
  },
  {
    year: "2021",
    title: "Bound on Efficiency of Heat Engine from Uncertainty Relation Viewpoint",
    venue: "Entropy",
    bibcode: "2021Entrp..23..439C",
    featured: false,
  },
  {
    year: "2021",
    title:
      "Cosmology Requirements on Supernova Photometric Redshift Systematics for the Rubin LSST and Roman Space Telescope",
    venue: "Physical Review D",
    bibcode: "2021PhRvD.103b3524M",
    featured: false,
  },
  {
    year: "2020",
    title: "Binary Black Hole Information Loss Paradox and Future Prospects",
    venue: "Entropy",
    bibcode: "2020Entrp..22.1387M",
    featured: false,
  },
  {
    year: "2019",
    title: "Photometric Supernovae Redshift Systematics Requirements",
    venue: "Physical Review D",
    bibcode: "2019PhRvD.100d3542L",
    featured: false,
  },
  {
    year: "2019",
    title: "Probing Uncertainty Relations in Noncommutative Space",
    venue: "International Journal of Theoretical Physics",
    bibcode: "2019IJTP...58.2619C",
    featured: false,
  },
  {
    year: "2018",
    title: "Dependence of Type Ia Supernova Luminosities on Their Local Environment",
    venue: "Astronomy and Astrophysics",
    bibcode: "2018A&A...615A..68R",
    featured: false,
  },
  {
    year: "2018",
    title: "The ESO VLT Type Ia Supernova Spectral Set of the Final Two Years of SNLS",
    venue: "Astronomy and Astrophysics",
    bibcode: "2018A&A...614A.134B",
    featured: false,
  },
  {
    year: "2017",
    title: "LSQ14efd: Observations of the Cooling of a Shock Breakout Event in a Type Ic Supernova",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2017MNRAS.471.2463B",
    featured: false,
  },
  {
    year: "2016",
    title:
      "Pan STARRS and PESSTO Search for an Optical Counterpart to the LIGO Gravitational Wave Source GW150914",
    venue: "Monthly Notices of the Royal Astronomical Society",
    bibcode: "2016MNRAS.462.4094S",
    featured: false,
  },
  {
    year: "2016",
    title: "Supplement: Localization and Broadband Follow Up of the Gravitational Wave Transient GW150914",
    venue: "The Astrophysical Journal Supplement Series",
    bibcode: "2016ApJS..225....8A",
    featured: false,
  },
  {
    year: "2016",
    title: "Localization and Broadband Follow Up of the Gravitational Wave Transient GW150914",
    venue: "The Astrophysical Journal Letters",
    bibcode: "2016ApJ...826L..13A",
    featured: false,
  },
  {
    year: "2016",
    title: "SN 2015BN: A Detailed Multiwavelength View of a Nearby Superluminous Supernova",
    venue: "The Astrophysical Journal",
    bibcode: "2016ApJ...826...39N",
    featured: false,
  },
  {
    year: "2005",
    title: "Coordinate Measurement in Two and Three Dimensional Geometries Using Frequency Scanning Interferometry",
    venue: "Optics Letters",
    bibcode: "2005OptLE..43..815G",
    featured: false,
  },
];

const featuredPublications = publications.filter((publication) => publication.featured);

export default function Home() {
  return (
    <main>
      <nav className="siteNav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Ayan Mitra home">
          AM
        </a>
        <div className="navLinks">
          <a href="#research">Research</a>
          <a href="#updates">Updates</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#photos">Photos</a>
          <a href="/Ayan_Mitra_CV.pdf">CV</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">Pipeline Scientist · LSST DESC · Cosmology</p>
          <h1>Ayan Mitra</h1>
          <p className="heroLead">
            I build reliable computational systems that connect simulation,
            machine learning, uncertainty, and inference for data intensive
            science.
          </p>
          <p className="heroBody">
            I am a Pipeline Scientist for the Vera C. Rubin Observatory LSST Dark
            Energy Science Collaboration and a CAPS Fellow at NCSA, UIUC. My work
            focuses on supernova cosmology, reliable research pipelines, and
            scientific machine learning at scale.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              Explore highlighted work
            </a>
            <a className="textLink" href="mailto:ayan@illinois.edu">
              ayan@illinois.edu
            </a>
          </div>
          <a
            className="builderCallout"
            href="https://lsstdesc.org/pages/builders.html"
          >
            <span>Official recognition</span>
            <div>
              <strong>LSST DESC Builder</strong>
              <p>
                Listed by LSST DESC for significant contributions to the
                collaboration, its community, and its analysis infrastructure.
              </p>
            </div>
            <b>View official page ↗</b>
          </a>
          <div className="evidenceStrip" aria-label="Research and software record">
            <div>
              <strong>33</strong>
              <span>ADS records</span>
            </div>
            <div>
              <strong>79</strong>
              <span>Public repositories</span>
            </div>
            <div>
              <strong>74</strong>
              <span>Merged SNANA pull requests</span>
            </div>
          </div>
        </div>

        <aside className="profileCard" aria-label="Ayan Mitra profile">
          <img src="/ayan-mitra.jpg" alt="Ayan Mitra" />
          <div className="profileCardBody">
            <p className="profileRole">Pipeline Scientist · LSST DESC</p>
            <p>CAPS Fellow · NCSA · University of Illinois Urbana Champaign</p>
            <div className="profileLinks">
              <a href="https://github.com/am610/">GitHub</a>
              <a href="https://www.linkedin.com/in/ayan-mitra-supernova/">LinkedIn</a>
              <a href="https://orcid.org/0000-0002-9436-8871">ORCID</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="firstResearch" id="research">
        <div className="sectionIntro">
          <div>
            <p className="sectionKicker">Current research</p>
            <h2>Three papers defining my current LSST DESC research.</h2>
          </div>
          <p>
            Current work centers on fully photometric supernova cosmology,
            combined cosmological probes, and simulation based inference.
          </p>
        </div>
        <div className="researchGrid">
          {researchAreas.map((area) => (
            <a className="researchCard" href={area.href} key={area.number}>
              <span>{area.number}</span>
              <small className="researchVenue">{area.venue}</small>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <div className="researchLink">Read paper ↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="newsBand" id="updates" aria-labelledby="news-heading">
        <div className="sectionHeadingRow">
          <div>
            <p className="sectionKicker lightKicker">Updates</p>
            <h2 id="news-heading">Recent news and milestones.</h2>
          </div>
          <p className="newsIntro">
            New publications, collaboration recognition, and pipeline work from
            the latest stage of my LSST DESC activity.
          </p>
        </div>
        <div className="newsList">
          <article>
            <time>July 2026</time>
            <div>
              <h3>Three new manuscripts released</h3>
              <p>
                New work covers machine learning generalization in supernova
                gravitational waves, cosmic sign switching, and LSST closure audits.
              </p>
              <a href="https://ui.adsabs.harvard.edu/user/libraries/LiNzugQqT8O3JaIcS3XMeQ">
                View ADS library ↗
              </a>
            </div>
          </article>
          <article>
            <time>2026</time>
            <div>
              <h3>FlowSN published in MNRAS</h3>
              <p>
                Neural simulation based inference was applied to supernova
                cosmology under realistic survey selection effects.
              </p>
              <a href="https://ui.adsabs.harvard.edu/abs/2026MNRAS.550g1046B/abstract">
                Open publication ↗
              </a>
            </div>
          </article>
          <article>
            <time>2026</time>
            <div>
              <h3>Beyond the Standard Model study published in ApJ</h3>
              <p>
                A combined analysis connects next generation supernova, cosmic
                microwave background, and baryon acoustic oscillation surveys.
              </p>
              <a href="https://ui.adsabs.harvard.edu/abs/2026ApJ..1003..246R/abstract">
                Open publication ↗
              </a>
            </div>
          </article>
          <article>
            <time>Recognition</time>
            <div>
              <h3>Listed as an LSST DESC Builder</h3>
              <p>
                The official DESC Builder page recognizes significant work that
                builds the collaboration, its community, and its analysis systems.
              </p>
              <a href="https://lsstdesc.org/pages/builders.html">
                View official DESC Builder page ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="projectsSection" id="projects">
        <div className="sectionHeadingRow darkText">
          <div>
            <p className="sectionKicker">Flagship repositories</p>
            <h2>Research software and machine learning built around evidence.</h2>
          </div>
          <p>
            Eight highlighted projects span astronomy, agentic research tools,
            document understanding, computer vision, recommendation, and forecasting.
          </p>
        </div>
        <div className="projectsGrid">
          {flagshipProjects.map((project, index) => (
            <a className="projectCard" href={project.href} key={project.title}>
              <div className="projectTopline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="projectBottomline">
                <span>{project.highlight}</span>
                <span>View project ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="additionalProjectsHeader">
          <div>
            <p className="sectionKicker">More public work</p>
            <h3>Additional research and applied machine learning projects</h3>
          </div>
          <a href="https://github.com/am610?tab=repositories">Browse all 79 repositories ↗</a>
        </div>
        <div className="additionalProjectsGrid">
          {additionalProjects.map((project) => (
            <a href={project.href} className="compactProject" key={project.title}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="openSourceBand" id="opensource">
        <div className="openSourceInner">
          <div>
            <p className="sectionKicker lightKicker">Major open source contribution</p>
            <h2>SNANA</h2>
          </div>
          <div>
            <strong>74</strong>
            <span>Merged pull requests</span>
          </div>
          <p>
            Sustained contributions to the collaboration software used for
            supernova simulation, light curve fitting, and cosmology analysis,
            including host galaxy modeling, redshift uncertainty, and pipeline reliability.
          </p>
          <a href="https://github.com/RickKessler/SNANA/pulls?q=is%3Apr+author%3Aam610+is%3Amerged">
            View contribution history ↗
          </a>
        </div>
      </section>

      <section className="publicationsSection" id="publications">
        <div className="publicationHeader">
          <div>
            <p className="sectionKicker">Publication record</p>
            <h2>From supernova cosmology to gravitational waves and scientific AI.</h2>
          </div>
          <div className="publicationActions">
            <a
              className="outlineButton"
              href="https://ui.adsabs.harvard.edu/user/libraries/LiNzugQqT8O3JaIcS3XMeQ"
            >
              ADS library
            </a>
            <a className="outlineButton" href="/Ayan_Mitra_CV.pdf">
              Download CV
            </a>
          </div>
        </div>

        <div className="publicationStats">
          <article>
            <strong>33</strong>
            <span>Records in the supplied ADS library</span>
          </article>
          <article>
            <strong>2016 to 2026</strong>
            <span>Primary astronomy publication period</span>
          </article>
          <article>
            <strong>Cosmology + AI</strong>
            <span>Linked by uncertainty, simulation, and inference</span>
          </article>
        </div>

        <div className="featuredPublicationGrid">
          {featuredPublications.map((publication) => (
            <a
              href={`https://ui.adsabs.harvard.edu/abs/${publication.bibcode}/abstract`}
              className="featuredPublication"
              key={publication.bibcode}
            >
              <div>
                <time>{publication.year}</time>
                <span>Featured paper</span>
              </div>
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
              <span className="publicationLink">Open ADS record ↗</span>
            </a>
          ))}
        </div>

        <details className="allPublications">
          <summary>
            <span>Complete ADS library</span>
            <strong>View all 33 records</strong>
          </summary>
          <div className="publicationList">
            {publications.map((publication, index) => (
              <a
                href={`https://ui.adsabs.harvard.edu/abs/${publication.bibcode}/abstract`}
                className="publicationRow"
                key={publication.bibcode}
              >
                <span className="publicationNumber">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.venue}</p>
                </div>
                <time>{publication.year}</time>
              </a>
            ))}
          </div>
        </details>
      </section>

      <PhotoCarousel />

      <section className="experienceSection" id="experience">
        <div className="experienceIntro">
          <p className="sectionKicker">Experience</p>
          <h2>Research across institutions, collaborations, and disciplines.</h2>
        </div>
        <div className="timeline">
          <article>
            <time>2023 to present</time>
            <div>
              <h3>Pipeline Scientist and CAPS Fellow</h3>
              <p>NCSA, UIUC and LSST Dark Energy Science Collaboration</p>
            </div>
          </article>
          <article>
            <time>2021 to 2023</time>
            <div>
              <h3>Rubin Postdoctoral Fellow</h3>
              <p>Inter University Centre for Astronomy and Astrophysics, India</p>
            </div>
          </article>
          <article>
            <time>2019 to 2020</time>
            <div>
              <h3>Postdoctoral Fellow</h3>
              <p>Energy Cosmos Laboratory, Nazarbayev University</p>
            </div>
          </article>
        </div>
        <div className="credentialsGrid">
          <article>
            <p className="miniLabel">Education</p>
            <h3>PhD in Supernova Cosmology</h3>
            <p>Sorbonne Université, France</p>
          </article>
          <article>
            <p className="miniLabel">Community</p>
            <h3>
              <a href="https://lsstdesc.org/pages/builders.html">LSST DESC Builder ↗</a>
            </h3>
            <p>Official recognition for contributions to the collaboration and its infrastructure.</p>
          </article>
          <article>
            <p className="miniLabel">Recognition</p>
            <h3>CAPS and Rubin Fellowships</h3>
            <p>Research recognition spanning cosmology and computational science.</p>
          </article>
        </div>
      </section>

      <footer>
        <div className="footerLead">
          <p className="sectionKicker lightKicker">Contact</p>
          <h2>Let us talk about scientific AI, cosmology, or research systems.</h2>
          <a href="mailto:ayan@illinois.edu">ayan@illinois.edu</a>
        </div>
        <div className="footerBottom">
          <p>© 2026 Ayan Mitra</p>
          <div>
            <a href="https://github.com/am610/">GitHub</a>
            <a href="https://www.linkedin.com/in/ayan-mitra-supernova/">LinkedIn</a>
            <a href="https://orcid.org/0000-0002-9436-8871">ORCID</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
