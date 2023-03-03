import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TrackedEntity } from "../interface/tracked";

@Entity("Test", { schema: "nuxtTypeorm" })
export class Test extends TrackedEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar")
  name: string;

  @Column("int", { nullable: true })
  age: number;

  // status 1 = from nuxt 2, status 2 = from nuxt 3
  @Column("int", { nullable: true })
  status: number;
}
