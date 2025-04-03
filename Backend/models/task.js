module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return Task;
  };
  