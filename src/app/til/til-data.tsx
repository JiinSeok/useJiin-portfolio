export interface TILEntry {
  title: string;
  date: string;
  description: string;
  tags: string[];
  url?: string;
}

export const tilEntries: TILEntry[] = [
  {
    title: "React Hooks Best Practices",
    date: "2023-05-15",
    description:
      "Learned about best practices for using React hooks, including the dependency array in useEffect and custom hooks for reusable logic.",
    tags: ["React", "Hooks", "Frontend"],
  },
  {
    title: "TypeScript Utility Types",
    date: "2023-05-10",
    description:
      "Explored TypeScript utility types like Partial, Pick, Omit, and Record. These types help create derived types from existing ones.",
    tags: ["TypeScript", "Frontend"],
    url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
  },
  {
    title: "Next.js App Router",
    date: "2023-05-05",
    description:
      "Studied the new App Router in Next.js 13+. It provides a new way to handle routing with nested layouts, loading states, and error boundaries.",
    tags: ["Next.js", "React", "Frontend"],
    url: "https://nextjs.org/docs/app/building-your-application/routing",
  },
  {
    title: "CSS Grid Layout",
    date: "2023-04-28",
    description:
      "Practiced using CSS Grid for complex layouts. Grid is powerful for two-dimensional layouts with rows and columns.",
    tags: ["CSS", "Frontend", "Layout"],
  },
  {
    title: "JavaScript Promises and Async/Await",
    date: "2023-04-20",
    description:
      "Deepened understanding of JavaScript Promises and the async/await syntax for handling asynchronous operations.",
    tags: ["JavaScript", "Async", "Frontend"],
  },
];