import { getAllArtciles } from "../../lib/articles";

export default async function handler(req, res) {
  var test = await getAllArtciles();
  res.status(200).json(test);
}
