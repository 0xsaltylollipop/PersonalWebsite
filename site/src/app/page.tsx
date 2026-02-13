import { CopyEmail } from "./copy-email";

type CardProps = {
  year: string;
  title: React.ReactNode;
  org: React.ReactNode;
  description: string;
  tag?: string;
  hashtags?: string;
  achievement?: string;
};

/* ─── Terminal-style item: ● prefix + left border ─── */
function Card({ year, title, org, description, tag, hashtags, achievement }: CardProps) {
  return (
    <div className="group flex gap-3 border-l-2 border-divider py-3 pl-5 transition-colors duration-200 hover:border-accent/50">
      <span className="mt-[3px] shrink-0 text-[0.8em] text-accent">●</span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-[0.9em] font-medium text-text/70">&middot; {org}</span>
          {tag && (
            <span className="rounded border border-border px-2 py-0.5 text-[0.72em] tracking-wide text-text-muted">
              {tag}
            </span>
          )}
        </div>
        {achievement && (
          <p className="mt-1 text-[0.82em] font-semibold text-accent">{achievement}</p>
        )}
        {year && (
          <p className="mt-0.5 text-[0.82em] text-text-muted">{year}</p>
        )}
        <p className="mt-1.5 max-w-[640px] leading-[1.65] opacity-85">
          {description}
        </p>
        {hashtags && (
          <p className="mt-2 text-[0.82em] tracking-wide text-accent/70">
            {hashtags}
          </p>

        )}
      </div>
    </div>
  );
}

type PaperProps = {
  title: string;
  venue: string;
  href: string;
  showBorder?: boolean;
};

function PaperRow({ title, venue, href, showBorder }: PaperProps) {
  return (
    <div
      className={`flex gap-3 py-3 ${showBorder ? "border-b border-divider" : ""}`}
    >
      <span className="mt-[3px] shrink-0 text-[0.8em] text-accent">●</span>
      <div className="flex min-w-0 flex-1 items-start justify-between">
        <div className="min-w-0">
          <p className="font-semibold">{title}</p>
          <p className="mt-0.5 text-[0.82em] text-text-muted">{venue}</p>
        </div>
        <a
          href={href}
          className="ml-4 shrink-0 cursor-pointer text-[0.82em] font-medium text-accent opacity-80 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
          aria-label={`Download PDF of ${title}`}
        >
          {"PDF →"}
        </a>
      </div>
    </div>
  );
}

/* ─── Spinner-symbol divider (Claude Code loading chars) ─── */
function SpinnerDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 py-6 text-[1em] text-accent/40 select-none"
      aria-hidden="true"
    >
      <span className="spinner-symbol">✢</span>
      <span className="spinner-symbol">✳</span>
      <span className="spinner-symbol">∗</span>
      <span className="spinner-symbol">✻</span>
      <span className="spinner-symbol">✽</span>
    </div>
  );
}

/* ─── > Title ─────── (like Claude Code input prompt) ─── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-[1.15em] font-bold text-accent">{">"}</span>
      <h2 className="shrink-0 text-[1.25em] font-bold tracking-tight">
        {children}
      </h2>
      <div className="h-px flex-1 bg-divider" />
    </div>
  );
}

/* ─── ASCII Naruto Avatar (wider hair, two-tone face) ─── */
function NarutoAscii() {
  const h = "text-[#d08030]"; // vibrant orange — hair
  const b = "text-[#5577aa]"; // steel blue — headband
  const fo = "text-[#a89580]"; // light warm brown — face outline
  const fi = "text-[#6b5a48]"; // dark warm brown — face features

  return (
    <pre
      className="hidden shrink-0 select-none text-[12px] leading-[1.4] sm:block"
      role="img"
      aria-label="ASCII art avatar of Naruto Uzumaki"
    >
      <span className={h}>{"   ▄ █▄ █▄ █▄ █▄ █▄"}{"\n"}</span>
      <span className={h}>{"   ████████████████"}{"\n"}</span>
      <span className={b}>{"    ┃━━━━━━━━━━━━┃"}{"\n"}</span>
      <span className={fo}>{"    ┃"}</span><span className={fi}>{"  ^      ^  "}</span><span className={fo}>{"┃"}{"\n"}</span>
      <span className={fo}>{"    ┃"}</span><span className={fi}>{" ===  · === "}</span><span className={fo}>{"┃"}{"\n"}</span>
      <span className={fo}>{"    ┃"}</span><span className={fi}>{"   \\____/   "}</span><span className={fo}>{"┃"}{"\n"}</span>
      <span className={fo}>{"     ╲__________╱"}</span>
    </pre>
  );
}

/* ─── Nav link helper ─── */
const navItems = [
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#projects", label: "projects" },
  { href: "#recommendation", label: "recommendation" },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen pb-14">
      {/* ─── Top Bar (terminal title bar + nav) ─── */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-divider bg-bg">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 text-[0.75em] tracking-wide sm:px-10">
          <span className="font-semibold opacity-90">
            jan.jc.chen@gmail.com{" "}
            <span className="opacity-70">v1.0</span>
          </span>
          <nav
            className="hidden items-center gap-5 sm:flex"
            aria-label="Section navigation"
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="cursor-pointer opacity-80 transition-all duration-200 hover:text-accent hover:opacity-100"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-6 pt-20 sm:px-10">
        {/* ─── Welcome Box (Claude Code startup banner) ─── */}
        <section aria-label="Introduction" className="mb-4">
          {/* Title breaking the top border */}
          <div className="relative">
            <span className="relative z-10 bg-bg pr-4 text-[0.82em] tracking-wide text-text-muted">
              welcome
            </span>
            <div className="absolute top-1/2 left-0 -z-0 h-px w-full bg-divider" />
          </div>

          {/* Box */}
          <div className="overflow-hidden rounded-b-[6px] rounded-tr-[6px] border border-t-0 border-border bg-card">
            {/* ── Main: ASCII art + all info beside it ── */}
            <div className="flex items-start gap-6 px-7 pt-6 pb-5 sm:gap-8">
              <NarutoAscii />
              <div className="min-w-0 flex-1 pt-0.5">
                <h1 className="text-[1.35em] font-bold tracking-tight">
                  Jan Sirui Chen
                </h1>
                <p className="mt-1 text-[0.85em] text-text-muted">
                  AI Engineer
                </p>
                <p className="mt-0.5 text-[0.82em] text-text-muted/80">
                  Munich, Germany
                </p>
                <p className="mt-4 max-w-[540px] text-[0.92em] leading-[1.7] opacity-80">
                  Building agentic systems at YC and venture-backed
                  startups. Orchestrating coding agents to ship full-stack
                  features. Youngest TA for LLM security at TUM.
                  Previously worked as a crypto analyst at an a16z-backed
                  startup and Baidu.
                </p>
              </div>
            </div>

            {/* ── Links footer (panel bottom) ── */}
            <nav
              className="flex flex-wrap items-center gap-x-6 gap-y-1.5 border-t border-border px-7 py-3 text-[0.82em]"
              aria-label="Quick links"
            >
              <a
                href="https://github.com/0xsaltylollipop"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/jan-chen-5692851b3/"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
              >
                linkedin
              </a>
              <CopyEmail email="jan.jc.chen@gmail.com" />
              <a
                href="/cv.pdf"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
              >
                cv.pdf
              </a>
              <a
                href="https://x.com/saltylollipop69"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
              >
                twitter
              </a>
            </nav>
          </div>
        </section>

        <SpinnerDivider />

        {/* ─── Experience ─── */}
        <section id="experience" aria-labelledby="experience-heading">
          <SectionTitle>
            <span id="experience-heading">Experience</span>
          </SectionTitle>
          <div className="flex flex-col gap-1">
            <Card
              year="Feb 2026 — Present"
              title="AI Engineering Intern"
              org={<a href="https://comena.ai/en/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Comena (YC S25)</a>}
              description="Building full-stack PDF source highlighting with Gemini AI vision for bounding box extraction. Integrated Gemini 3 Flash with coordinate conversion and React-based highlight overlay with scroll-to-view UX."
            />
            <Card
              year="Oct 2025 — Feb 2026"
              title="AI Engineering Intern"
              org={<a href="https://www.noaintelligence.de/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">NOA Intelligence</a>}
              description="Architected event-driven queue systems with PostgreSQL, built autonomous AI agents with LangGraph, and developed LLM evaluation frameworks. Reduced data pipeline complexity by 58% and API calls by 80%."
            />
            <Card
              year="Mar 2025 — Jul 2025"
              title="Teaching Assistant"
              org={<a href="https://www.cs.cit.tum.de/en/seai/homepage/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">TUM — Chair of Software Engineering &amp; AI</a>}
              description="Designed and taught a lecture on LLM Fundamentals for 40 students including Master candidates. Youngest TA (3rd semester BSc) in the chair's history, selected among PhD-level peers."
            />
            <Card
              year="Feb 2023 — Aug 2023"
              title="Product Intern & First Employee"
              org={<a href="https://www.linkedin.com/company/moonblock-io/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Moonblock</a>}
              description="Built and maintained the core database for a proprietary market intelligence tool tracking NFT projects for Fortune 500 clients. Deployed automated data pipelines with Python web scraping and pandas."
            />
            <Card
              year="Apr 2022 — Oct 2022"
              title="Founding Team & Head of Analysis"
              org={<a href="https://x.com/UnfilteredNFT" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Unfiltered</a>}
              description="Shaped the product for a B2B SaaS platform that grew to $240K MRR. Led the core analytical function for 300K+ members, evaluating financial and sentiment data."
            />
          </div>
        </section>

        <SpinnerDivider />

        {/* ─── Education ─── */}
        <section id="education" aria-labelledby="education-heading">
          <SectionTitle>
            <span id="education-heading">Education</span>
          </SectionTitle>
          <div className="flex flex-col gap-1">
            <Card
              year="Oct 2023 — Present"
              title="BSc Computer Science"
              org="Technical University of Munich"
              description="Currently on a gap semester to build AI agents full-time."
            />
            <Card
              year="Sep 2021 — Jun 2023"
              title="TUMKolleg Program"
              org={<a href="https://tumkolleg.de/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">TUM &amp; Werner-Heisenberg-Gymnasium</a>}
              description="Selective collaborative program between TUM and WHG Garching for exceptionally talented students in the final 2 years of Gymnasium."
            />
            <Card
              year="Early Studies"
              title="Early Enrollment Program"
              org={<a href="https://www.cit.tum.de/cit/studium/interessierte/schulprogramme/schuelerstudium-informatik/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Technical University of Munich</a>}
              description="TUM early enrollment program for excellent high school students in Computer Science. Handpicked students participate in university-level Computer Science courses alongside regular degree students."
            />
          </div>
        </section>

        <SpinnerDivider />

        {/* ─── Projects ─── */}
        <section id="projects" aria-labelledby="projects-heading">
          <SectionTitle>
            <span id="projects-heading">Projects</span>
          </SectionTitle>
          <div className="flex flex-col gap-1">
            <Card
              year=""
              title={<a href="https://github.com/adititakale01/Magus-AI" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent">magus-ai/</a>}
              org={<a href="https://www.linkedin.com/posts/evaspannagl_6-days-until-agent-olympics-in-munich-sign-activity-7416076004277964800-TxbL?utm_source=social_share_send&utm_medium=member_desktop_web" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Make x OpenAI Hackathon 2026</a>}
              tag="hackathon"
              achievement="Grand Prize Winner (1st Place overall) · Track Winner"
              description="Intelligent freight rate quotation agent. Processes unstructured email requests via GPT-4o-mini extraction, resolves port names through 4-tier fuzzy matching (exact/alias/difflib/LLM), normalizes messy Excel rate sheets (ditto marks, merged cells), and calculates volume-weighted pricing with customer-specific SOP rules. Includes HITL review queue, full audit tracing, and REST API."
              hashtags="#fastapi #streamlit #openai #postgresql #pandas #openpyxl"
            />
            <Card
              year=""
              title={<a href="https://github.com/sharckhai/neo-command" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent">neo-command/</a>}
              org={<a href="https://hack-nation.ai/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Hack Nation 2026 · Databricks Track</a>}
              tag="hackathon"
              achievement="3rd Place in Databricks Track · Hack-Nation by MIT Sloan · 3000+ participants"
              description="Healthcare intelligence platform for the Virtue Foundation. Multi-agent system (OpenAI Agents SDK, GPT-5.2) with debate-driven claim verification (Advocate/Skeptic/Judge), knowledge graph of 742 Ghanaian facilities, medical desert detection, and mission deployment scoring. Full-stack with Next.js frontend, D3 network viz, Mapbox maps, and real-time agent tracing via SSE."
              hashtags="#openai-agents-sdk #nextjs #d3 #networkx #fastapi #lancedB"
            />
            <Card
              year=""
              title={<a href="https://github.com/MohiCodeHub/airbio-track" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent">airbio-track/</a>}
              org={<a href="https://www.linkedin.com/posts/acavaeiro_is-it-far-fetched-to-build-an-ai-agent-that-ugcPost-7421881679385874432-ZrMg?utm_source=social_share_send&utm_medium=member_desktop_web" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-text-muted transition-colors duration-200 hover:text-accent">Tech Europe Hackathon 2025</a>}
              tag="hackathon"
              achievement="3rd Place overall · Track Winner · Tech Europe Hackathon"
              description="AI property management platform for short-term rentals. Vision AI extracts listing details from live camera walks (OpenCV + multi-provider LLMs via OpenRouter), detects maintenance issues from WhatsApp videos with frame-by-frame analysis, and auto-alerts property managers via Gmail. 5-service Docker Compose architecture with React, FastAPI, Flask, and MongoDB."
              hashtags="#react #fastapi #flask #opencv #openrouter #mongodb #docker"
            />
            <Card
              year=""
              title={<a href="https://github.com/0xsaltylollipop/bookmark-organizer" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent">bookmark-organizer/</a>}
              org="Personal"
              tag="project"
              description="Full-stack Twitter bookmark organizer. Generates semantic embeddings (OpenAI text-embedding-3-large, 1024D), clusters via UMAP dimensionality reduction + HDBSCAN, and auto-names topics with GPT-4o-mini. Interactive D3.js force-simulation bubble map for visual exploration. Built with Next.js, FastAPI, and PostgreSQL with pgvector."
              hashtags="#nextjs #fastapi #d3 #openai #hdbscan #umap #pgvector"
            />
            <Card
              year=""
              title={<a href="https://github.com/GunniBusch/FOPGame" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent">FOPGame/</a>}
              org="TUM · Fundamentals of Programming"
              tag="coursework"
              description="Quantum Maze Quest — a 2D maze game with A* enemy pathfinding, dynamic ray-traced lighting (Box2D Lights), timed power-ups, and an integrated level editor with reflection-based serialization. Built with LibGDX/Box2D physics, SpriteCache terrain batching, and a 5-level campaign with contextual audio."
              hashtags="#java #libgdx #box2d #a-star #gradle #github-actions"
            />
          </div>
        </section>

        <SpinnerDivider />

        {/* ─── Recommendation (terminal blockquote) ─── */}
        <section id="recommendation" aria-labelledby="rec-heading">
          <SectionTitle>
            <span id="rec-heading">Recommendation</span>
          </SectionTitle>
          <div className="border-l-2 border-accent/40 py-2 pl-5">
            <p className="max-w-[640px] text-[0.95em] italic leading-[1.8] opacity-85">
              &ldquo;Jan possesses a unique blend of deep intrinsic learning,
              the ability to communicate complex ideas with clarity, and a
              proactive drive that creates tangible results. He doesn&apos;t
              just complete tasks; he identifies opportunities for impact and
              builds solutions that elevate everyone around him.&rdquo;
            </p>
            <p className="mt-3 text-[0.85em] text-text-muted">
              &mdash; Dr. Mark Huasong Meng, Research Fellow, Chair for
              Software Engineering &amp; AI, TUM
            </p>
            <a
              href="/recommendation.pdf"
              className="mt-3 inline-block text-[0.82em] font-medium text-accent opacity-80 transition-opacity duration-200 hover:opacity-100" target="_blank" rel="noopener noreferrer"
            >
              {"PDF →"}
            </a>
          </div>
        </section>

        {/* ─── Terminal cursor (active session) ─── */}
        <div
          className="mt-10 flex items-center gap-2 opacity-30"
          aria-hidden="true"
        >
          <span className="font-bold text-accent">{">"}</span>
          <span className="inline-block h-[1.1em] w-[0.55em] animate-pulse bg-text/40" />
        </div>

        {/* ─── Copyright ─── */}
        <p className="mt-6 mb-16 text-[0.75em] text-text-muted/50">
          &copy; {new Date().getFullYear()} Jan Sirui Chen. All rights reserved.
        </p>
      </main>

      {/* ─── Status Bar (Claude Code style) ─── */}
      <footer className="fixed bottom-0 right-0 left-0 border-t border-divider bg-bg">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 text-[0.75em] tracking-wide opacity-75 sm:px-10">
          <span className="hidden sm:inline">
            <span className="font-bold text-accent">?</span> scroll to explore
          </span>
          <span className="sm:hidden">Jan Sirui Chen</span>
          <span className="hidden text-text-muted sm:inline">
            last updated Feb 2026
          </span>
          <span className="text-right">
            5 projects &middot;{" "}
            <span className="font-semibold text-accent">building</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
