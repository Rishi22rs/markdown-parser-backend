const { marked } = require("marked"); // Library to to parse markdown data to HTML

exports.markdown = (req, res) => {
  const { markdownText } = req.body;
  const html = marked(markdownText);
  res.json({ html });
};
