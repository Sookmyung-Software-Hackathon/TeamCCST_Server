import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreate1651740511420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE user(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            nickname VARCHAR(500) NOT NULL,
            name VARCHAR(255) NOT NULL,
            year INT NOT NULL,
            password VARCHAR(1000) NOT NULL
        )`);

    await queryRunner.query(`CREATE TABLE image(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            url VARCHAR(1000) NOT NULL
        )`);

    await queryRunner.query(`CREATE TABLE recipe(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            food VARCHAR(500) NOT NULL,
            ingredient VARCHAR(1000) NOT NULL,
            content VARCHAR(1000) NOT NULL,
            imageId INT NOT NULL,
            FOREIGN KEY(imageId) REFERENCES image(id) ON DELETE CASCADE ON UPDATE CASCADE
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
