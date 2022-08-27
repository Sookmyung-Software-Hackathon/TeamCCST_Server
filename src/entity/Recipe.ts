import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Image } from './Image';

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
}
