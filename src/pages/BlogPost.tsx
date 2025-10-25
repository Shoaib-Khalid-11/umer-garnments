import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const post = {
    id: Number(id),
    title: "The Future of Web Development: Trends to Watch in 2025",
    category: "Technology",
    date: "2024-12-15",
    readTime: "5 min read",
    author: "Sarah Martinez",
    authorRole: "CTO",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    content: `
      <p>The landscape of web development is constantly evolving, and 2025 promises to bring exciting new technologies and methodologies that will reshape how we build for the web.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing the development process. From intelligent code completion to automated testing and bug detection, AI tools are becoming essential companions for developers. These tools don't just speed up development—they help us write better, more maintainable code.</p>

      <h2>2. Edge Computing and Serverless Architecture</h2>
      <p>The move toward edge computing continues to accelerate. By processing data closer to the user, we can deliver faster, more responsive applications. Serverless architectures complement this trend, allowing developers to focus on code rather than infrastructure management.</p>

      <h2>3. Enhanced Web Performance</h2>
      <p>Core Web Vitals and performance metrics are more important than ever. Users expect instant page loads and smooth interactions. Modern frameworks and build tools are optimizing for performance by default, with features like automatic code splitting and lazy loading.</p>

      <h2>4. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to blur the line between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs offer the best of both worlds—the reach of the web with the engagement of native apps.</p>

      <h2>5. WebAssembly Growth</h2>
      <p>WebAssembly is enabling new possibilities for web applications. From running complex computations in the browser to porting desktop applications to the web, WASM is expanding what's possible in web development.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning, developers can create amazing experiences that push the boundaries of what's possible on the web.</p>

      <p>At CompanyName, we're committed to staying at the forefront of these technologies, ensuring our clients benefit from the latest innovations in web development.</p>
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Building Scalable Applications",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "UX Design Principles",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={post.title}
        description="Learn more about our company and our mission."
      />
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
              <span>
                By {post.author}, {post.authorRole}
              </span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 w-4 h-4" /> Share Article
            </Button>
          </header>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8 shadow-elegant">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />

          {/* Author Card */}
          <Card className="p-6 mb-12 bg-muted">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{post.author}</h3>
                <p className="text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>
          </Card>

          {/* Related Posts */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
