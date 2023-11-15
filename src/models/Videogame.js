const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"videogame",
		{
			id: {
				type: DataTypes.UUID, //TIPO UUID
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4, //SE VAN A CREAR AUTOMATICAME
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			description: {
				type: DataTypes.TEXT,
			},
			platforms: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			background_image: {
				type: DataTypes.STRING,
			},
			updated: {
				type: DataTypes.STRING,
			},
			rating: {
				type: DataTypes.FLOAT,
			},
			created: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
