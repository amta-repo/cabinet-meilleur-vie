import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "./BlogPage";

const DOMAIN = "https://cabinetmeilleurvie.com";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground">Article non trouvé</h1>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-accent hover:underline">
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Cabinet Meilleure Vie" },
    url: `${DOMAIN}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${post.slug}` },
  };

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*\s*:\s*(.+)/);
        if (match) {
          return (
            <li key={i} className="flex items-start gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><strong className="text-foreground">{match[1]}</strong> : {match[2]}</span>
            </li>
          );
        }
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="flex items-start gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span>{line.replace("- ", "")}</span>
          </li>
        );
      }
      if (line.match(/^\d+\./)) {
        const match = line.match(/^\d+\.\s*\*\*(.+?)\*\*\s*:\s*(.+)/);
        if (match) {
          return (
            <li key={i} className="flex items-start gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><strong className="text-foreground">{match[1]}</strong> : {match[2]}</span>
            </li>
          );
        }
        return (
          <li key={i} className="flex items-start gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span>{line.replace(/^\d+\.\s*/, "")}</span>
          </li>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="mb-4">{line}</p>;
    });
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | Cabinet Meilleure Vie Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`${DOMAIN}/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`${DOMAIN}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-20">
        <article className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>

            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-4">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>

            {post.image && (
              <div className="mb-10 overflow-hidden rounded-3xl">
                <img src={post.image} alt={post.imageAlt || post.title} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            )}

            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
              {renderContent(post.content)}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-xl bg-accent/5 border border-accent/20 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Besoin d'un accompagnement ?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Nos psychologues sont à votre écoute pour vous accompagner. Prenez rendez-vous dès aujourd'hui.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>

        {/* Related articles */}
        {otherPosts.length > 0 && (
          <section className="bg-secondary section-padding">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Articles similaires</h2>
              <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
                {otherPosts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                    <span className="text-xs font-semibold text-accent">{p.category}</span>
                    <h3 className="text-base font-bold text-foreground mt-2 mb-2 line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPostPage;
