// Core
import bcrypt from 'bcrypt'
import { IsEmail } from 'class-validator'
import { 
    BaseEntity, 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from 'typeorm'


// Salt for Hashing Password
const BCRYPT_ROUNDS = 10

// Create Entity (table) for user in PostgreSQL
@Entity()
class User extends BaseEntity {

    // Create Columns for User Table in PostgreSQL
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
    
    get fullname(): string {
        return `${this.firstName} ${this.lastName}`
    }

    // Verify password
    public comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare( this.password, password)
    }

    // Hash password before insert and update
    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if(this.password) {
            const hashedPassword = await this.hashPassword(this.password)
            this.password = hashedPassword

        }
    }
    // Hashed function
    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS)
    }
}

export default User