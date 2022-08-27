import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { comparePassword, saveEncryptedPassword } from '../utils/password';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  year: number;

  @Column()
  password: string;

  @BeforeInsert()
  async saveEncryptedPasswordTrigger() {
    this.password = await saveEncryptedPassword(this.password);
  }

  async isCorrectPassword(password: string): Promise<boolean> {
    return await comparePassword(password, this.password);
  }
}
