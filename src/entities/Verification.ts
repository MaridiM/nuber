// Core
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    BeforeInsert,
} from 'typeorm'

// Types
import { TVerificationTarget } from 'src/types/types'

const PHONE = 'PHONE' 
const EMAIL = 'EMAIL'

// Verification Entity 
@Entity()
class Verification extends BaseEntity {
    // Create  Verification table in PostgreSQL
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({ type: 'text', enum: [ PHONE, EMAIL ]})
    target!: TVerificationTarget
    
    @Column({ type: 'text'})
    payload!: string
    
    @Column({ type: 'text'})
    key!: string
    
    @Column({ type: 'boolean', default: false })
    used!: boolean
    
    @CreateDateColumn() createdAt!: string
    @UpdateDateColumn() updatedAt?: string

    // 
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