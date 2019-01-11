const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  poll_url: {
    type: String
  },
  ep_title: {
    type: String
  },
  ep_title: {
    type: String
  },
  week_date: {
    type: Date
  }
});

module.exports = Episode = mongoose.model("Episode", EpisodeSchema);
