export const nav = [
  {
    title: "Home",
    slug: "/",
    dropdown: false,
  },
  {
    title: "Categories",
    slug: "/categories",
    subcat: [
      { title: "Biographies & Memoirs", slug: "/categories/bio-memoirs" },
      { title: "Business & Money", slug: "/categories/business-money" },
      { title: "Self-Help", slug: "/categories/self-help" },
      { title: "All", slug: "/categories/all" },
    ],
    // subcatslug: ["/bio-memoirs", "/business-money", "/self-help"],
    dropdown: true,
  },
  {
    title: "Best Sellers",
    slug: "/best-sellers",
    dropdown: false,
  },
  {
    title: "Deals and Discounts",
    slug: "/deals",
    dropdown: false,
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
