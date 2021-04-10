// Core
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'

// Types
import {  VerificationTarget } from 'src/types/types'

// Entities
import User from './User'

const PHONE = 'PHONE' 
const EMAIL = 'EMAIL'

// Verification Entity 
@Entity()
class Verification extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({ type: 'text', enum: [ PHONE, EMAIL ]})
    target!: VerificationTarget

    @Column({ type: 'text'})
    payload!: string

    @Column({ type: 'text'})
    key!: string
    
    @Column({ type: 'boolean', default: false })
    used!: boolean

    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

    // Generate Key by target value ( PHONE | EMAIL )
    @BeforeInsert()
    createKey(): void {
        if(this.target === PHONE) {
            this.key = Math
                .floor(Math.random() * 10000)
                .toString()
        } else {
            this.key = Math.random()
                .toString(36)
                .substr(2)
        }
    }


}


export default Verification 