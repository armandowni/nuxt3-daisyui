import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TrackedEntity } from "../interface/tracked";

@Entity("Test", { schema: "nuxt3Typeorm" })
export class Test extends TrackedEntity {
  @PrimaryGeneratedColumn({ type: "integer" })
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ nullable: true, type: "integer" })
  age!: number;
}
