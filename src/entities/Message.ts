// Core
import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    ManyToOne,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm'

// Entities
import Chat from './Chat'
import User from './User'

// Verification Entity 
@Entity()
class Message extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'text' })
    text!: string

    @Column({ nullable: true })
    chatId?: number

    // One chat have many messages
    @ManyToOne( type => Chat, chat => chat.messages)
    chat!: Chat
    
    // One user have many messages
    @ManyToOne( type => User, user => user.messages)
    user!: User



 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Message 