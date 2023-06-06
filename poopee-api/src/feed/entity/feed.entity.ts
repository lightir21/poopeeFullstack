import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Feed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  time: string;

  @Column({ type: 'date', nullable: true })
  date: Date | null;

  @Column()
  amount: number;
}
