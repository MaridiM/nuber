// Core
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'

// Types
import { TVerificationTarget } from 'src/types/types'

// Verification Entity 
@Entity()
class Verification extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({ type: 'text', enum: ['PHONE', 'EMAIL']})
    target!: TVerificationTarget
    
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