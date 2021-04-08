// Core
import { TRideStatus } from 'src/types/types'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'

// Verification Entity 
@Entity()
class Verification extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({ 
        type: 'text',
        enum: [ 'ACCEPTED', 'FINISHED', 'CANCELED', 'REQUESING', 'ONROUTE' ]
    })
    status!: TRideStatus
    
    @Column({ type: 'text' })
    pickUpAddress!: string
    
    @Column({ type: 'double precision' })
    picUpLat!: number
    
    @Column({ type: 'double precision' })
    picUpLng!: number
    
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
    
        
 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Verification 