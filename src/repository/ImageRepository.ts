import { EntityRepository, Repository } from 'typeorm';
import { Image } from '../entity/Image';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {}
