import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal, Server, Cloud, GitBranch, Cpu, Box } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
            <Terminal className="w-4 h-4" />
            <span>Hello, World!</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-100">Prathamesh</span>
            <br />
            Cloud & DevOps Engineer
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            Architecting resilient cloud infrastructures and accelerating delivery through intelligent CI/CD pipelines. I transform complex operational challenges into scalable, automated, and secure systems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/25"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/icons/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-text font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              My Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-surface to-background border border-white/10 p-8 shadow-2xl relative overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative w-full h-full">
              {/* Connecting Lines & Pulses */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                <line x1="25" y1="25" x2="50" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="75" y1="25" x2="50" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="25" y1="75" x2="50" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="75" y1="75" x2="50" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
                
                {/* Animated pulses */}
                <motion.circle r="1.5" fill="#3b82f6" animate={{ cx: [25, 50], cy: [25, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.circle r="1.5" fill="#a855f7" animate={{ cx: [75, 50], cy: [25, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                <motion.circle r="1.5" fill="#22c55e" animate={{ cx: [25, 50], cy: [75, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} />
                <motion.circle r="1.5" fill="#f97316" animate={{ cx: [75, 50], cy: [75, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }} />
              </svg>

              {/* Central Node - Kubernetes/EKS */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-surface/80 border border-primary/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-20 backdrop-blur-md cursor-pointer hover:scale-110 transition-transform"
              >
                <div className="text-center">
                  <Server className="w-10 h-10 text-primary mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-primary font-bold">EKS Cluster</span>
                </div>
              </motion.div>

              {/* Node 1 - GitHub/Code */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-10 backdrop-blur-sm hover:border-white/30 transition-colors cursor-pointer"
              >
                <GitBranch className="w-8 h-8 text-text-muted" />
              </motion.div>

              {/* Node 2 - Jenkins/CI */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-10 backdrop-blur-sm hover:border-yellow-400/30 transition-colors cursor-pointer"
              >
                <Cpu className="w-8 h-8 text-yellow-400" />
              </motion.div>

              {/* Node 3 - Docker */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-surface/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-10 backdrop-blur-sm hover:border-blue-400/30 transition-colors cursor-pointer"
              >
                <Box className="w-8 h-8 text-blue-400" />
              </motion.div>

              {/* Node 4 - AWS */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-16 h-16 bg-surface/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-10 backdrop-blur-sm hover:border-orange-400/30 transition-colors cursor-pointer"
              >
                <Cloud className="w-8 h-8 text-orange-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
