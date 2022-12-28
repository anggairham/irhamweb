import { getAllPosts } from "../../libs/posts";

export default async function handler(req, res) {
  var test = await getAllPosts();
  res.status(200).json(test);
}
