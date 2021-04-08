// Core
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
    
    @Column({ type: 'text'})
    name!: string

    @Column({ type: 'double precision'})
    lat!: number

    @Column({ type: 'double precision'})
    lng!: number

    @Column({ type: 'text'})
    address!: string

    @Column({ type: 'boolean'})
    isFav!: boolean
    
 
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Verification 