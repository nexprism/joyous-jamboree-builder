import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Latest Birthday Decoration Trends for 2025",
    excerpt: "Discover the newest trends in birthday decorations that will make your celebration unforgettable.",
    image: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg",
    link: "#",
  },
  {
    title: "Planning the Perfect Anniversary Celebration",
    excerpt: "Tips and ideas for creating a romantic and memorable anniversary celebration.",
    image: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg",
    link: "#",
  },
  {
    title: "Creative Baby Shower Theme Ideas",
    excerpt: "Unique and creative themes to make your baby shower extra special.",
    image: "https://divyanshiballoondecorations.com/img/baby/1.jpeg",
    link: "#",
  },
];

export const BlogSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-muted-foreground">
            Stay Updated with Our Latest News and Tips
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link to={post.link} key={post.title}>
              <Card
                className="group overflow-hidden card-hover shadow-card hover:shadow-card-hover border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Read More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
