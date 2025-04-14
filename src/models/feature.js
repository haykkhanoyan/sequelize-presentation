import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';
import Car from "./car.js";

const Feature = sequelize.define('feature', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {type: DataTypes.STRING, allowNull: false},
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, { timestamps: false });


export default Feature;