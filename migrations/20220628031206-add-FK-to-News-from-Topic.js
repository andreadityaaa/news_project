'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('News', {
      fields: ['TopicId'],
      type: 'foreign key',
      name: 'fkey_topicId',
      references: {
        table: 'Topics',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("News", "fkey_topicId")
  }
};
