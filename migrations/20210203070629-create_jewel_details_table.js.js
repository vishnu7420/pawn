'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('jewel_details', {
      jewel_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        references: {
          model: 'jewel_group_details',
          key: 'group_id'
        }
      },

      jewel_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jewel_grams: {
        type: Sequelize.STRING,
      },
     
      jewel_make: {
        type: Sequelize.STRING,
      },
      jewel_quantity: {
        type: Sequelize.STRING,
      },
      jewel_description: {
        type: Sequelize.STRING,
      },
      jewel_amount: {
        type: Sequelize.STRING,
      },
      submitted_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
     
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('jewel_details');
  }
};
