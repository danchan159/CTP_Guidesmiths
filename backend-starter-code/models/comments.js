
module.exports = (sequelize, DataTypes) => {
	const Comments = sequelize.define('Comments', {
		commentID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		commentText: DataTypes.STRING,
	});

	Comments.associate = (models) => {
		models.Comments.belongsTo(models.Users);
	}

	return Comments;

}