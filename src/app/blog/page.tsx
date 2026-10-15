import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Blog | Dawit Tsegei",
  description:
    "Articles on web development, TypeScript, Next.js, and my journey as a developer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Writing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
              My Blog
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Thoughts, tutorials, and lessons from my journey as a full-stack
            developer.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1">
                  {/* Category + Read Time */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-5">
                    {post.description}
                  </p>

                  {/* Read More Button (replaces invalid date) */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-gray-600 group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:rotate-45 transition-all duration-300 mt-2">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No posts yet. Coming soon!</p>
            </div>
          )}
        </div>

        {/* Back Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}