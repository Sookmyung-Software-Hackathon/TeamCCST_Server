import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreate1651740511420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE user(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            email VARCHAR(500) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(1000) NOT NULL
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
