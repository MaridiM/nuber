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
    target!: string
    
    @Column({ type: 'text'})
    payload!: string
    
    @Column({ type: 'text'})
    key!: string
    
    @Column({ type: 'boolean', default: false })
    used!: boolean
    
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

}


export default Verification 