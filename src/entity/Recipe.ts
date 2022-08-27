import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { Image } from './Image';
import { User } from './User';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  food: string;

  @Column()
  ingredient: string;

  @Column()
  content: string;

  @OneToOne(() => Image, image => image.id, { cascade: true })
  @JoinColumn()
  image: Image;

  @ManyToOne(() => User, user => user.id, { cascade: true })
  user: User;
}
