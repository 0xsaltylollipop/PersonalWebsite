type CardProps = {
  year: string;
  title: string;
  org: string;
  description: string;
  tag?: string;
  hashtags?: string;
};

/* ─── Terminal-style item: ● prefix + left border ─── */
function Card({ year, title, org, description, tag, hashtags }: CardProps) {
  return (
    <div className="group flex gap-3 border-l-2 border-divider py-3 pl-5 transition-colors duration-200 hover:border-accent/50">
      <span className="mt-[3px] shrink-0 text-[0.8em] text-accent">●</span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-[0.85em] text-text-muted">&middot; {org}</span>
          {tag && (
            <span className="rounded border border-border px-2 py-0.5 text-[0.72em] tracking-wide text-text-muted">
              {tag}
            </span>
          )}
        </div>
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
          className="ml-4 shrink-0 cursor-pointer text-[0.82em] font-medium text-accent opacity-80 transition-opacity duration-200 hover:opacity-100"
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
      className="flex items-center justify-center gap-3 py-6 text-[0.8em] opacity-15 select-none"
      aria-hidden="true"
    >
      <span>·</span>
      <span>✢</span>
      <span>✳</span>
      <span>∗</span>
      <span>✻</span>
      <span>✽</span>
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
  { href: "#papers", label: "papers" },
  { href: "#recommendation", label: "recommendation" },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen pb-14">
      {/* ─── Top Bar (terminal title bar + nav) ─── */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-divider bg-bg">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 text-[0.75em] tracking-wide sm:px-10">
          <span className="font-semibold opacity-90">
            janjancen.com{" "}
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
                  Jan Jancen
                </h1>
                <p className="mt-1 text-[0.85em] text-text-muted">
                  AI Engineer &middot; Open to Work
                </p>
                <p className="mt-0.5 text-[0.82em] text-text-muted/80">
                  London, United Kingdom
                </p>
                <p className="mt-4 max-w-[540px] text-[0.92em] leading-[1.7] opacity-80">
                  Building novel solutions to existing and emerging problems.
                  Currently shipping production AI systems at the intersection
                  of large language models, agent architectures, and developer
                  tooling.
                </p>
              </div>
            </div>

            {/* ── Links footer (panel bottom) ── */}
            <nav
              className="flex flex-wrap items-center gap-x-6 gap-y-1.5 border-t border-border px-7 py-3 text-[0.82em]"
              aria-label="Quick links"
            >
              <a
                href="https://github.com/janjancen"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                github
              </a>
              <a
                href="https://linkedin.com/in/janjancen"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                linkedin
              </a>
              <a
                href="mailto:email@janjancen.com"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                email
              </a>
              <a
                href="/cv.pdf"
                className="cursor-pointer text-accent opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                cv.pdf
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
              year="2024 — Present"
              title="AI Engineer Intern"
              org="AI Startup"
              description="Shipping production TypeScript for AI agent systems. Building LLM-powered workflows, tool-use pipelines, and evaluation frameworks."
            />
            <Card
              year="2023 — 2024"
              title="Research Assistant"
              org="University Lab"
              description="Multi-agent coordination research. Designed and evaluated LLM-based architectures for web automation tasks."
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
              year="2022 — 2024"
              title="MSc Computer Science"
              org="University Name"
              description="Focus on AI/ML systems, multi-agent architectures, and distributed computing."
            />
            <Card
              year="2018 — 2022"
              title="BSc Computer Science"
              org="University Name"
              description="Foundations in algorithms, systems design, and software engineering."
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
              title="web-agent-research/"
              org="UCL Nexus Lab"
              tag="active-research"
              description="Building a frugal, generalized web agent framework that enables multi-step action output in the form of Python Playwright scripts."
              hashtags="#ai-agents #playwright #web-automation #deep-learning"
            />
            <Card
              year=""
              title="rag-pipeline/"
              org="Personal"
              tag="completed"
              description="Production retrieval-augmented generation with hybrid search, reranking, and evaluation harness."
              hashtags="#python #pinecone #langchain #retrieval"
            />
            <Card
              year=""
              title="eval-dashboard/"
              org="Startup"
              tag="in-progress"
              description="Real-time evaluation framework for tracking LLM output quality across prompt variants and model versions."
              hashtags="#nextjs #d3 #typescript #evals"
            />
          </div>
        </section>

        <SpinnerDivider />

        {/* ─── Papers ─── */}
        <section id="papers" aria-labelledby="papers-heading">
          <SectionTitle>
            <span id="papers-heading">Papers</span>
          </SectionTitle>
          <div className="border-l-2 border-divider pl-5">
            <PaperRow
              title="Efficient Multi-Agent Coordination in LLM Systems"
              venue="Conference on AI Systems · 2024"
              href="/papers/multi-agent.pdf"
              showBorder
            />
            <PaperRow
              title="Retrieval Strategies for Domain-Specific Knowledge Bases"
              venue="NeurIPS Workshop · 2023"
              href="/papers/retrieval.pdf"
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
              &ldquo;Jan demonstrated exceptional ability to bridge theoretical
              understanding with practical implementation. Their work on
              multi-agent systems showed both technical depth and creative
              problem-solving that I rarely see at this level.&rdquo;
            </p>
            <p className="mt-3 text-[0.85em] text-text-muted">
              &mdash; Prof. Name, University Department
            </p>
          </div>
        </section>

        {/* ─── Terminal cursor (active session) ─── */}
        <div
          className="mt-10 mb-16 flex items-center gap-2 opacity-30"
          aria-hidden="true"
        >
          <span className="font-bold text-accent">{">"}</span>
          <span className="inline-block h-[1.1em] w-[0.55em] animate-pulse bg-text/40" />
        </div>
      </main>

      {/* ─── Status Bar (Claude Code style) ─── */}
      <footer className="fixed bottom-0 right-0 left-0 border-t border-divider bg-bg">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 text-[0.75em] tracking-wide opacity-75 sm:px-10">
          <span className="hidden sm:inline">
            <span className="font-bold text-accent">?</span> scroll to explore
          </span>
          <span className="sm:hidden">Jan Jancen</span>
          <span className="hidden text-text-muted sm:inline">
            last updated Feb 2026
          </span>
          <span className="text-right">
            3 projects &middot; 2 papers &middot;{" "}
            <span className="font-semibold text-accent">open to work</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
