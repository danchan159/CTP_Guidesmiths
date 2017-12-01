const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
	});

	Users.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.passwordHash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.passwordHash = hashedPw;
    })
  );

	return Users;
}