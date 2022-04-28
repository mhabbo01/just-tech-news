const User = require('./User');
const Post = require('./Post');

//create associations
User.hasMany(Post, {  //defining relationship of the User model to the Post
    foreignKey: 'user_id'
});

Post.belongsTo(User, {  // defining relationship of the Post model to the User
    foreignKey: 'user_id'
});


module.exports = { User, Post };