import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;

  @Column("text")
  description!: string;

  @Column()
  filename!: string;

  @Column("double")
  views!: number;

  @Column()
  isPublished!: boolean;

  @ManyToOne((type) => User, (user) => user.photos)
  user!: User;
}
