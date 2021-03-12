export default {
  title: "Work",
  name: "work",
  type: "document",
  fields: [
    {
      name: "workTitle",
      title: "Work Title",
      description: "Title Your Work",
      type: "string",
    },
    {
      name: "workSummary",
      title: "Work Summary",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "Press generate button to create a slug. This is used to dynamically generate a work project page",
      type: "slug",
      options: {
        source: "workTitle",
      },
    },
  ],
};
