import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TrackedEntity } from "../interface/tracked";


@Entity("Test", { schema: "nuxt3Typeorm" })
export class Test extends TrackedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  age: number;
}
