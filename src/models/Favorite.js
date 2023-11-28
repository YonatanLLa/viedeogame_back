const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "favorite",
    {
        id: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },
    {
        userId: DataTypes.INTEGER,
        allowNull: false,
    },
    {
        postId: DataTypes.INTEGER,
        allowNull: false,
    }
    
  );
};
