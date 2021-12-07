export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61afb3510075ac38e0d30780",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ttkee351",
                  apiId: "122cfa44-e2d5-40e0-830f-be4598873811",
                },
                {
                  buildHookId: "61afb3518d908149b255efd0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1zqsy9s5",
                  apiId: "0da4d99c-da19-422f-90b7-cf5d8f7e55a3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/drooJohnson/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1zqsy9s5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
