const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const VigieScan = require("./vigie_scans");
const Entities = sequelize.define('entities', {
    LocalId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    uuid: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_commercial_name: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    company_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_sign: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_address1: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_zipcode: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_city: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_country: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    lat: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: true,
    },
    lng: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: true,
    },
    region: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    group_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    format_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    logo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    affiliate_group_name: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'entities', // Replace with your actual table name
    timestamps: false, // Assuming the table doesn't have createdAt and updatedAt columns
});

Entities.associate = (models) => {
    Entities.hasMany(models.VigieScan, {
      foreignKey: "code",
      as: "vigiescan",
    });
}
Entities.sync()
// Export the Sequelize model
module.exports = Entities;