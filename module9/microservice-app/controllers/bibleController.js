const axios = require("axios");

const getBibleVerse = async (req, res) => {
  const { passage } = req.params;
  const { translation } = req.query;
  try {
    let url = `https://bible-api.com/${passage}`;
    if (translation) {
        url += `?translation=${translation}`;
    }
    const response = await axios.get(`https://bible-api.com/${passage}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch verse", details: error.message });
  }
};

module.exports = { getBibleVerse };
