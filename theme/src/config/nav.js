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
];
