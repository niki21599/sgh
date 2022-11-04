import * as contentful from "contentful";

const client = contentful.createClient({
  space: "81f6fq9ivosc",
  environment: "master",
  accessToken: "7PSSrw-6bqxadxpt4XrOzMYPUW8hyhbwXf6JmT3J2RQ",
});

export async function getArticles() {
  let articles = await client.getEntries();

  return articles;
}

export async function getArticle(id) {
  let article = await client.getEntry(id);
  console.log("der artikel ", article);

  return article;
}
