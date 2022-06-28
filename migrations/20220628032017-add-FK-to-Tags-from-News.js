'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Tags', {
      fields: ['NewsId'],
      type: 'foreign key',
      name: 'fkey_newsId',
      references: {
        table: 'News',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Tags", "fkey_newsId")
  }
};
