export const nav = [
  {
    title: "Home",
    slug: "/",
    dropdown: false,
  },
  {
    title: "Blog",
    slug: "/blog",
    dropdown: false,
  },
  {
    title: "Contact",
    slug: "/contact",
    dropdown: false,
  },
  {
    title: "About Us",
    slug: "/about-us",
    dropdown: false,
  },
  {
    title: "Reviews",
    slug: "/reviews",
    subcat: [
      { title: "The Power Of Now", slug: "/reviews/the-power-of-now-review" },
    ],
    dropdown: true,
  },
  {
    title: "Categories",
    slug: "/categories",
    subcat: [
      { title: "Economics", slug: "/categories/economics" },
      {
        title: "Sports and Outdoors",
        slug: "/categories/sports-and-outdoors",
      },
      { title: "Motivational", slug: "/categories/motivational" },
      { title: "Success", slug: "/categories/success" },
    ],
    dropdown: true,
  },
  {
    title: "Topics",
    slug: "/topics",
    subcat: [
      {
        title: "Books to Overcome Stress",
        slug: "/topics/books-for-overcoming-stress",
      },
    ],
    dropdown: true,
  },
];
