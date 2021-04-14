// Core
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm'

// Entities
import User from './User'

@Entity()
class Place extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({ type: 'text'})
    name!: string

    @Column({ type: 'double precision',  default: 0 })
    lat!: number

    @Column({ type: 'double precision', default: 0 })
    lng!: number

    @Column({ type: 'text'})
    address!: string

    @Column({ type: 'boolean', default: false})
    isFav!: boolean
    
    @Column({ nullable: true})
    userID!: number 

    @ManyToOne(type => User, user => user.places)
    user!: User

 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Place 