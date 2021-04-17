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

// Types
import { RideStatus } from 'src/types/types'

// Entities
import User from './User'


// Verification Entity 
@Entity()
class Ride extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({
        type: "text",
        enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"],
        default: "REQUESTING"
    })
    status!: RideStatus
    
    @Column({ type: 'text' })
    pickUpAddress!: string
    
    @Column({ type: 'double precision' })
    pickUpLat!: number
    
    @Column({ type: 'double precision' })
    pickUpLng!: number
    
    @Column({ type: 'text'})
    dropOffAddress!: string
    
    @Column({ type: 'double precision' })
    dropOffLat!: number
    
    @Column({ type: 'double precision' })
    dropOffLng!: number
    
    @Column({ type: 'double precision' })
    price!: number
    
    @Column({ type: 'text' })
    distance!: string
    
    @Column({ type: 'text' })
    duration!: string
    
    // One users(Passengers) can have many ridesAsPassenger
    @ManyToOne( type => User, user => user.ridesAsPassenger)
    passenger!: User
    
    // One users(Passengers) can have many ridesAsDriver
    @ManyToOne( type => User, user => user.ridesAsDriver, { nullable: true })       
    driver!: User

    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Ride 