// Core
import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

// Entities
import Message from './Message'
import User from './User'

// Verification Entity 
@Entity()
class Chat extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    // Inside one, many messages
    @OneToMany( type => Message, message => message.chat ) 
    messages!: Message[]

    @OneToMany(type => User, user => user.chat)
    participants!: User[]
        
 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Chat 