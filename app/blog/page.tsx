import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft, ArrowRight, Clock, Calendar, Download } from "lucide-react";

export const metadata = {
  title: "The Log | Dawit Tsegei",
  description:
    "Notes from production — web development, TypeScript, Next.js, and my journey as a developer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen relative">
      {/* ===== Top Bar ===== */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 font-bold text-sm tracking-wider font-mono">
              DT
            </span>
          </div>
          <span className="text-white font-mono text-lg">dawit.tsegei</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
          <a
            href="/cv.pdf"
            download="Dawit_Tsegie_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-colors cursor-pointer"
          >
            <Download size={14} />
            CV
          </a>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-amber-200/60 text-xs font-mono tracking-[0.4em] uppercase mb-8">
            I Share My Thoughts Here
          </span>

          <h1 className="text-7xl md:text-[120px] font-black leading-[0.9] mb-8 tracking-tight">
            <span className="text-white">THE</span>
            <span className="ml-4 md:ml-8 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              LOG
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-mono">
            Notes from production — sync engines, AI pairing, API design. Served
            by a <span className="text-cyan-400">Postgres</span> backend,
            rendered on <span className="text-amber-300">Next.js</span> edges,
            waving to you through{" "}
            <span className="text-emerald-400">Three.js</span>.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block relative bg-[#0d0d16]/70 backdrop-blur-sm border border-[#1f2937] rounded-2xl p-8 hover:border-amber-300/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 to-orange-500/0 group-hover:from-amber-300/5 group-hover:to-orange-500/5 transition-all" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono tracking-widest uppercase text-amber-300 bg-amber-300/10 border border-amber-300/20 px-3 py-1 rounded-full">
                      #{post.category.toLowerCase().replace(" ", "-")}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Calendar size={12} />
                      {post.formattedDate}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-5 max-w-2xl">
                    {post.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                    READ MORE
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>

                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#1f2937] flex items-center justify-center text-gray-600 group-hover:text-amber-300 group-hover:border-amber-300/50 group-hover:rotate-45 transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20 border border-dashed border-[#1f2937] rounded-2xl">
              <p className="text-gray-500 font-mono">
                // No posts yet. Coming soon!
              </p>
            </div>
          )}
        </div>

        {/* Return Home */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1f2937] text-gray-400 hover:text-white hover:border-amber-300/40 transition-all font-mono text-sm"
          >
            <ArrowLeft size={16} />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}