// Core
import { IsEmail } from 'class-validator'
import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from 'typeorm'

// Create Entity (table) for user in PostgreSQL
@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number | undefined

    @Column({ type: 'text', unique: true })
    @IsEmail()
    email: string | undefined 

    @Column({ type: 'text' })
    firstName: string | undefined 

    @Column({ type: 'text' })
    lastName: string | undefined 
    
    @Column({ type: 'int' }) 
    age: number | undefined 

    @Column({ type: 'text' })
    password: string | undefined
    
    @Column({ type: 'text' })
    phoneNumber: string | undefined
    
    @Column({ type: 'boolean', default: false })
    verifiedPhoneNumber: boolean  | undefined

    @Column({ type: 'text' })
    profilePhoto: string | undefined

    @Column({ type: 'text' }) 
    facebookID: string | undefined

    get fullname(): string {
        return `${this.firstName} ${this.lastName}`
    }
    
    @Column({ type: 'boolean', default: false }) 
    isDriving: boolean | undefined


    @Column({ type: 'boolean', default: false }) 
    isRiding: boolean | undefined

    @Column({ type: 'boolean', default: false }) 
    isTaken: boolean | undefined

    @Column({ type: 'double precision', default: 0 }) 
    lastLng: number | undefined

    @Column({ type: 'double precision', default: 0 }) 
    lastLat: number | undefined

    @Column({ type: 'double precision', default: 0 }) 
    lastOrientation: number | undefined


    @CreateDateColumn() 
    createdAt: string | undefined
    
    @UpdateDateColumn() 
    updatedAt: string | undefined
    
}

export default User