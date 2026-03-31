import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PlusSquare, 
  History, 
  LayoutTemplate, 
  Settings, 
  Search, 
  Bell, 
  HelpCircle, 
  Share2, 
  Rocket, 
  FileText, 
  Network, 
  Maximize2, 
  RefreshCw, 
  Zap 
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeConcept, setActiveConcept] = useState('Concept A');

  return (
    <div className="flex min-h-screen bg-background text-on-surface font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-outline/20 bg-surface p-4">
        <div className="mb-8 px-2">
          <h2 className="font-headline text-xl font-bold tracking-tighter text-primary">codel</h2>
          <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">AI Engine Active</p>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem icon={<PlusSquare size={18} />} label="New Prompt" active />
          <NavItem icon={<History size={18} />} label="Recent Projects" />
          <NavItem icon={<LayoutTemplate size={18} />} label="Templates" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        <div className="mt-auto space-y-4">
          <div className="rounded-xl border border-outline/10 bg-surface-hover/30 p-4">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary">Quick Prompt</p>
            <textarea 
              className="h-20 w-full resize-none rounded-lg border-none bg-background/50 p-2 text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary/40"
              placeholder="Describe your vision..."
            />
          </div>
          
          <button className="w-full rounded-md bg-gradient-to-r from-primary-container to-blue-700 py-3 text-xs font-bold text-white shadow-lg shadow-primary-container/20 transition-all active:scale-95">
            Upgrade to Pro
          </button>

          <div className="flex items-center gap-3 border-t border-outline/10 px-2 pt-4">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary/20">
              <img 
                src="https://picsum.photos/seed/architect/100/100" 
                alt="User Profile" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">Alex Chen</p>
              <p className="text-[10px] text-on-surface-variant">Lead Architect</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline/20 bg-background/80 px-8 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <span className="hidden font-headline text-lg font-black tracking-tighter text-white md:block">codel</span>
            <nav className="flex gap-6">
              {['Concept A', 'Concept B', 'Concept C'].map((concept) => (
                <button
                  key={concept}
                  onClick={() => setActiveConcept(concept)}
                  className={cn(
                    "cursor-pointer text-xs font-bold uppercase tracking-widest transition-all active:opacity-80",
                    activeConcept === concept 
                      ? "border-b-2 border-primary-container pb-1 text-primary-container" 
                      : "text-on-surface-variant hover:text-white"
                  )}
                >
                  {concept}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="group relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
              <input 
                className="w-48 rounded-full border-none bg-surface-hover px-9 py-1.5 text-xs transition-all focus:w-64 focus:ring-1 focus:ring-primary/30" 
                placeholder="Global Search..." 
                type="text"
              />
            </div>
            <div className="flex gap-2">
              <button className="rounded-md p-2 text-on-surface-variant transition-all hover:bg-surface-hover active:opacity-80">
                <Bell size={18} />
              </button>
              <button className="rounded-md p-2 text-on-surface-variant transition-all hover:bg-surface-hover active:opacity-80">
                <HelpCircle size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          <section className="mb-10">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter text-primary">
                    {activeConcept}
                  </span>
                  <span className="text-xs text-on-surface-variant">v.1.0.4-beta</span>
                </div>
                <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Minimaliste Framework</h1>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-outline/10 bg-surface-hover px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover/80">
                  <Share2 size={16} />
                  Share
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary-container/20">
                  <Rocket size={16} />
                  Deploy
                </button>
              </div>
            </div>

            <div className="flex gap-8 border-b border-outline/20">
              {['Stratégie', 'Sitemap', 'Flux', 'Prototype Live'].map((tab, i) => (
                <button 
                  key={tab}
                  className={cn(
                    "pb-3 text-sm transition-all",
                    i === 0 ? "border-b-2 border-primary font-bold text-primary" : "font-medium text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-12 space-y-8 lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-outline/5 bg-surface/50 p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-500">
                    <FileText size={20} />
                  </div>
                  <h2 className="font-headline text-xl font-bold">Product Requirements Document</h2>
                </div>
                <div className="max-w-none space-y-4 text-sm leading-relaxed text-on-surface-variant/90">
                  <p className="font-bold text-on-surface">Vision & Objectif</p>
                  <p>Le Concept Minimaliste vise à réduire la charge cognitive en éliminant les éléments UI superflus. L'interface doit privilégier les espaces blancs (ou sombres) et la typographie comme principal vecteur d'information.</p>
                  <div className="my-6 h-px bg-outline/10" />
                  <p className="font-bold text-on-surface">Indicateurs de Performance (KPIs)</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Vitesse de chargement &lt; 400ms</li>
                    <li>Taux de complétion des tâches +15%</li>
                    <li>Réduction du nombre de clics par session</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-outline/5 bg-surface/50 p-8"
              >
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">User Stories</h3>
                <div className="space-y-3">
                  <UserStory 
                    id="US-01" 
                    text="En tant qu'utilisateur, je veux un accès immédiat au terminal." 
                    tags={[{ label: 'Priority: High', color: 'primary' }, { label: 'Tech: Core', color: 'secondary' }]}
                  />
                  <UserStory 
                    id="US-02" 
                    text="Je souhaite masquer les panneaux latéraux pour un focus total." 
                    tags={[{ label: 'Priority: Med', color: 'tertiary' }]}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 space-y-8 lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-outline/5 bg-surface/50 p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface">Structure Nodes</h3>
                  <Network size={16} className="text-on-surface-variant" />
                </div>
                <div className="relative space-y-6 py-4">
                  <div className="flex justify-center">
                    <div className="rounded border border-primary/20 bg-primary-container px-4 py-2 text-xs font-bold text-white shadow-lg">Root Index</div>
                  </div>
                  <div className="flex h-4 justify-center">
                    <div className="relative w-px bg-outline/40">
                      <div className="absolute top-full left-1/2 h-px w-48 -translate-x-1/2 bg-outline/40" />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <NodeBranch label="Auth Flow" />
                    <NodeBranch label="Workspace" active />
                    <NodeBranch label="Analytics" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative aspect-video overflow-hidden rounded-xl border border-primary/10 bg-background"
              >
                <img 
                  src="https://picsum.photos/seed/kinetic/800/450?grayscale&blur=2" 
                  alt="Live Preview" 
                  className="h-full w-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-2 flex items-center gap-2">
                    <motion.span 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Live Rendering</span>
                  </div>
                  <p className="text-xs font-medium text-on-surface-variant/60">{activeConcept} Engine initializing...</p>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="glass-panel flex h-8 w-8 items-center justify-center rounded-full border border-outline/20 transition-all hover:bg-primary/20">
                    <Maximize2 size={14} />
                  </button>
                  <button className="glass-panel flex h-8 w-8 items-center justify-center rounded-full border border-outline/20 transition-all hover:bg-primary/20">
                    <RefreshCw size={14} />
                  </button>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Tokens used" value="4.2k" />
                <StatCard label="Complexity" value="Low" accent="text-orange-400" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-white shadow-2xl shadow-primary-container/40 transition-transform hover:scale-110 active:scale-95">
        <Zap fill="currentColor" size={24} />
      </button>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all active:scale-95",
      active 
        ? "bg-surface-hover/50 text-primary border-r-2 border-primary-container" 
        : "text-on-surface-variant/70 hover:bg-surface-hover hover:text-on-surface"
    )}>
      {icon}
      {label}
    </button>
  );
}

function UserStory({ id, text, tags }: { id: string, text: string, tags: { label: string, color: string }[] }) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-surface p-4 border-l-4 border-primary/40">
      <span className="mt-1 font-mono text-xs text-on-surface-variant">{id}</span>
      <div>
        <p className="text-sm font-medium text-on-surface">{text}</p>
        <div className="mt-2 flex gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.label}
              className={cn(
                "rounded px-2 py-0.5 text-[9px] font-bold uppercase",
                tag.color === 'primary' ? "bg-primary/10 text-primary" : 
                tag.color === 'secondary' ? "bg-surface-hover text-on-surface-variant" : 
                "bg-orange-500/10 text-orange-400"
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NodeBranch({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-4 w-px bg-outline/40" />
      <div className={cn(
        "rounded border px-3 py-1.5 text-[10px] transition-all",
        active 
          ? "border-primary/20 bg-surface-hover font-bold text-primary" 
          : "border-outline/20 bg-surface-hover text-on-surface"
      )}>
        {label}
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string, value: string, accent?: string }) {
  return (
    <div className="rounded-xl border border-outline/5 bg-surface p-4">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">{label}</p>
      <p className={cn("font-headline text-xl font-bold text-on-surface", accent)}>{value}</p>
    </div>
  );
}
