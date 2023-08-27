export const nav = [
  {
    title: "Home",
    slug: "/",
    dropdown: false,
  },
  {
    title: "Topics",
    slug: "/categories",
    subcat: [
      { title: "Biographies & Memoirs", slug: "/topics/bio-memoirs" },
      { title: "Business & Money", slug: "/topics/business-money" },
      { title: "Self-Help", slug: "/topics/self-help" },
    ],
    dropdown: true,
  },
  {
    title: "Best Sellers",
    slug: "/best-sellers",
    dropdown: false,
  },
  {
    title: "Most Reviews Categories",
    slug: "/categories",
    subcat: [
      { title: "Economics", slug: "/topics/categories/economics" },
      {
        title: "Sports and Outdoors",
        slug: "/topics/categories/sports-and-outdoors",
      },
      { title: "Motivational", slug: "/topics/categories/otivational" },
    ],
    dropdown: true,
  },
  {
    title: "Community",
    slug: "/community",
    subcat: [
      { title: "Books reviews", slug: "/community/books-reviews" },
      { title: "Blog", slug: "/blog" },
      { title: "About us", slug: "/community/about-us" },
    ],
    dropdown: true,
  },
];
