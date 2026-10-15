import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Dawit Tsegei`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown renderer
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");

    return blocks.map((block, i) => {
      // Headings
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="text-xl md:text-2xl font-bold text-white mt-8 mb-3"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }

      // Code blocks
      if (block.startsWith("```")) {
        const code = block.replace(/```\w*\n?/g, "").replace(/```/g, "");
        return (
          <pre
            key={i}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 overflow-x-auto my-6"
          >
            <code className="text-sm text-indigo-300 font-mono">{code}</code>
          </pre>
        );
      }

      // Lists
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-5 pl-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-gray-400 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace("- ", "")
                      .replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      )
                      .replace(
                        /\[(.+?)\]\((.+?)\)/g,
                        '<a href="$2" class="text-indigo-400 hover:text-indigo-300 underline">$1</a>'
                      ),
                  }}
                />
              </li>
            ))}
          </ul>
        );
      }

      // Numbered lists
      if (/^\d+\.\s/.test(block)) {
        const items = block
          .split("\n")
          .filter((l) => /^\d+\.\s/.test(l));
        return (
          <ol key={i} className="space-y-2 my-5 pl-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-gray-400 leading-relaxed"
              >
                <span className="text-indigo-400 font-bold">{j + 1}.</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(/^\d+\.\s/, "")
                      .replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                  }}
                />
              </li>
            ))}
          </ol>
        );
      }

      // Regular paragraphs
      return (
        <p
          key={i}
          className="text-gray-400 leading-relaxed my-4 text-base md:text-lg"
          dangerouslySetInnerHTML={{
            __html: block
              .replace(
                /\*\*(.+?)\*\*/g,
                '<strong class="text-white">$1</strong>'
              )
              .replace(/\*(.+?)\*/g, '<em class="text-gray-300">$1</em>')
              .replace(
                /\[(.+?)\]\((.+?)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 underline">$1</a>'
              ),
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[var(--border)]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readTime}</span>
            <span className="text-xs text-gray-600">·</span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar size={12} />
              {post.formattedDate}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* Content */}
        <article>{renderContent(post.content)}</article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Read more articles
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors font-semibold"
          >
            Let's work together →
          </Link>
        </div>
      </div>
    </div>
  );
}