import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from './User';
import { Tag } from './Tag';

@Entity("compliments")
class Compliments {

  @PrimaryColumn()
  id: string;

  @Column()
  user_sender: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_sender" })
  userSender: User;

  @Column()
  user_receiver: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_receiver" })
  userReceiver: User;

  @Column()
  tag_id: string;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: "tag_id" })
  tagId: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliments }