
module.exports = (sequelize, DataTypes) => {
	const Guide = sequelize.define('Guide', {
		guide_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		cover_Image_Location: DataTypes.STRING,
	});

	Guide.associate = (models) => {
		models.Guide.belongsTo(models.Users);
		models.Guide.hasMany(models.Steps);
		models.Guide.hasMany(models.Categories);
	}

	return Guide;

}