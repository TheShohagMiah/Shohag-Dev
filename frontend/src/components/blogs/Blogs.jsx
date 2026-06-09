import React from "react";
import SectionHeader from "../ui/common/SectionHeader";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: "nextjs-performance-optimization-2026",
    title: "Mastering Core Web Vitals in Next.js: A Practical Guide",
    slug: "mastering-core-web-vitals-nextjs",
    description:
      "Learn how to optimize your Next.js application for peak performance, focusing on INP, LCP, and CLS with real-world, production-ready strategies.",
    meta: {
      title: "Mastering Core Web Vitals in Next.js | Frontend Performance",
      description:
        "Discover actionable techniques to optimize Next.js performance. Improve your Interaction to Next Paint (INP) and Largest Contentful Paint (LCP) scores today.",
      keywords:
        "Next.js, Core Web Vitals, Web Performance, INP, Frontend Optimization",
      robots: "index, follow",
      ogImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance", "SEO", "JavaScript"],
    author: {
      name: "Sarah Jenkins",
      role: "Principal Frontend Engineer",
    },
    readingTime: "6 min read",
    publishedAt: "2026-06-05T09:00:00Z",
  },
  {
    id: "designing-for-spatial-interfaces",
    title: "Designing for Spatial Computing: New Rules for UX/UI",
    slug: "designing-for-spatial-computing-ux-ui",
    description:
      "As immersive hardware becomes mainstream, explore the shift from traditional 2D screens to infinite spatial canvases and how user psychology adapts.",
    meta: {
      title: "Spatial Computing UX/UI Design Principles & Rules",
      description:
        "Step into the future of UI/UX. Learn the essential design patterns, depth mechanics, and accessibility standards for spatial computing interfaces.",
      keywords:
        "Spatial Computing, UX Design, UI Trends, AR VR Design, Immersive tech",
      robots: "index, follow",
      ogImage: "/images/blog/spatial-ux-og.jpg",
    },
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=60",
    tags: ["UI Design", "UX Research", "Spatial Computing", "AR/VR", "Figma"],
    author: {
      name: "Marcus Chen",
      role: "Lead Product Designer",
    },
    readingTime: "8 min read",
    publishedAt: "2026-05-28T14:30:00Z",
  },
  {
    id: "clean-architecture-scalable-apis",
    title: "Applying Clean Architecture to Modern Node.js Microservices",
    slug: "clean-architecture-nodejs-microservices",
    description:
      "A deep dive into separating concerns, decoupling business logic from frameworks, and building highly testable Node.js backends.",
    meta: {
      title: "Clean Architecture in Node.js Microservices | Backend Guide",
      description:
        "Stop building tangled backends. Learn how to implement Clean Architecture in Node.js to keep your microservices scalable, testable, and maintainable.",
      keywords:
        "Clean Architecture, Node.js, Microservices, Software Architecture, TypeScript",
      robots: "index, follow",
      ogImage: "/images/blog/clean-architecture-node.jpg",
    },
    category: "Backend Engineering",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    tags: ["Node.js", "TypeScript", "Architecture", "Microservices", "DevOps"],
    author: {
      name: "Elena Rostova",
      role: "Software Architect",
    },
    readingTime: "11 min read",
    publishedAt: "2026-06-01T11:15:00Z",
  },
  {
    id: "zero-trust-security-cloud-native",
    title: "Implementing Zero Trust Security in Cloud-Native Environments",
    slug: "zero-trust-cloud-native-security",
    description:
      "Security is no longer about perimeter defense. Learn how to enforce strict, continuous verification across your cloud infrastructure.",
    meta: {
      title: "Cloud-Native Zero Trust Security Implementation Guide",
      description:
        "Shift your security posture. A comprehensive look into implementing Zero Trust architectures for modern cloud applications, containers, and APIs.",
      keywords: "Zero Trust, Cloud Security, Cyber Security, Kubernetes, IAM",
      robots: "index, follow",
      ogImage: "/images/blog/zero-trust-cloud.jpg",
    },
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    tags: ["Security", "Cloud", "Kubernetes", "DevSecOps", "AWS"],
    author: {
      name: "David Vance",
      role: "Head of Security",
    },
    readingTime: "7 min read",
    publishedAt: "2026-06-08T08:00:00Z",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="Growth Resources" title="" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
