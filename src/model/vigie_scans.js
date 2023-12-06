const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Entities = require("./entities");

const VigieScan = sequelize.define('vigie_scans', {
    VigieScansId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Ean: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    Price: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: true,
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    Promo: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: true,
    },
    IsPromo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    Brand: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Weight: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Unit: {
        type: DataTypes.STRING(8),
        allowNull: true,
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Source: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Photo: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    EntityCode: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    EntityUDID: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    TerrainDataId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    PriceChecked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    // Other model options go here
    tableName: 'vigie_scans', // Set your actual table name
    timestamps: false, // If you don't want Sequelize to manage timestamps
});
// VigieScan.hasOne(Entities,{as: 'entity', foreignKey: 'EntityCode'})
VigieScan.belongsTo(Entities,{
    targetKey: 'code',
    foreignKey: "EntityCode",
    as: "entity",
})

VigieScan.sync()

// Export the Sequelize model
module.exports = VigieScan;