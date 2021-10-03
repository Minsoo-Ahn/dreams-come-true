const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id:{ type: Number, default: 1 },
    title: String,
    content: String,
    imageUrl: { type: String, default: null  },
    createdAt: { type: Date, default: Date.now  },
    updatedAt: { type: Date, default: Date.now  },
    isShow: { type: Boolean, default: true  }
});

module.exports = mongoose.model('post', postSchema);