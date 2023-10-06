export const nav = [
  {
    title: "Home",
    slug: "/",
    dropdown: false,
  },
  {
    title: "Topics",
    slug: "/topics",
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
    title: "Categories",
    slug: "/categories",
    subcat: [
      { title: "Economics", slug: "/topics/categories/economics" },
      {
        title: "Sports and Outdoors",
        slug: "/topics/categories/sports-and-outdoors",
      },
      { title: "Motivational", slug: "/topics/categories/motivational" },
      { title: "Success", slug: "/topics/categories/success" },
    ],
    dropdown: true,
  },
];
