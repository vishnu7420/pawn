'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('customer_details', {
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       customer_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      customer_address1: {
        type: Sequelize.STRING,
      },
      customer_address2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      customer_mobile_no1: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      customer_mobile_no2: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      customer_land_line: {
        type: Sequelize.STRING,
      },
      shop_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        references: {
          model: 'shop_details',
          key: 'shop_id'
        }
      },
      customer_status: {
        type: Sequelize.STRING,
      },
      customer_created_by: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
        references: {
          model: 'shop_details',
          key: 'shop_id'
        },
        customer_image: {
          type: Sequelize.STRING,
        }, 
        customer_added_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
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
    await queryInterface.dropTable('customer_details');
  }
};
