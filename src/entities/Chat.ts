// Core
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
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
    
    // One chat can have many messages
    @OneToMany( type => Message, message => message.chat ) 
    messages!: Message[]
    
    @Column({ nullable: true }) 
    passengerId!: number
    
    // One chat can have many users
    @ManyToOne( type => User, user => user.chatAsPassenger)
    passenger!: User
    
    @Column({ nullable: true }) 
    driverId?: number

    // One chat can have many users
    @ManyToOne( type => User, user => user.chatAsDriver)
    driver!: User
        
 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Chat