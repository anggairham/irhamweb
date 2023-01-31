const fs = require("fs");
const { join } = require("path");
const matter = require("gray-matter");
const { paginate } = require("./paginator");
const { parse } = require("./markdown-parser-markdownit");

const POSTS_DIR = join(process.cwd(), "_posts");

function getAllDirs() {
  return fs.readdirSync(POSTS_DIR);
}

function findSlug(slug) {
  const all = getAllDirs();
  return all.find((item) => item.includes(slug));
}

async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const validSlug = findSlug(realSlug);

  const fullPath = join(POSTS_DIR, validSlug, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // eslint-disable-next-line no-unused-vars
  // const [year, month, date, ...slugArr] = realSlug.split('-')

  const items = {
    slug: realSlug,
    excerpt: data.excerpt,
    summary: data.summary,
    tags: data.tags,
    date: data.date,
    title: data.title,
    author: data.author,
    content: await parse(content),
  };

  return items;
}

async function getAllPosts() {
  const allDirs = getAllDirs();
  const posts = [];
  for (const dir of allDirs) {
    // eslint-disable-next-line no-unused-vars
    const [year, month, date, ...slugArr] = dir.split("-");
    const p = await getPostBySlug(slugArr.join("-"));
    posts.push(p);
  }

  return posts.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
}

async function getPagedPosts(page = 1) {
  const allDirs = getAllDirs();
  const postsPaginate = paginate(allDirs.reverse(), page);

  const posts = [];
  for (const slug of postsPaginate.slugs) {
    // eslint-disable-next-line no-unused-vars
    const [year, month, date, ...slugArr] = slug.split("-");
    const p = await getPostBySlug(slugArr.join("-"));
    posts.push(p);
  }

  const sortedPost = posts.sort((post1, post2) =>
    post1.date > post2.date ? "-1" : "1"
  );

  return {
    ...postsPaginate,
    data: sortedPost,
  };
}

async function getAvailablePostPage() {
  const allDirs = getAllDirs();
  const { pages } = paginate(allDirs, 1);
  return pages;
}

exports.getAvailablePostPage = getAvailablePostPage;
exports.getPagedPosts = getPagedPosts;
exports.getAllPosts = getAllPosts;
exports.getPostBySlug = getPostBySlug;
exports.findSlug = findSlug;
exports.getAllDirs = getAllDirs;
