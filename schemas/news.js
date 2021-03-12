export default {
  name: "news",
  title: "News Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them.",
      type: "datetime",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        'This will dynamically create a link based on the title of the post. Click "generate" unless you want to choose your own slug name.',
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockText",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
    {
      name: "body",
      title: "Body Text",
      type: "blockText",
    },
  ],
  orderings: [
    {
      title: "Publishing date new->old",
      name: "publishingDateAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImage",
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image,
      };
    },
  },
};
