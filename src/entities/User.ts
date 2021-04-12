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
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from 'typeorm'

// Entities
import Chat from './Chat'
import Message from './Message'
import Ride from './Ride'

// Salt for Hashing Password
const BCRYPT_ROUNDS = 10

// Create Entity (table) for user in PostgreSQL
@Entity()
class User extends BaseEntity {

    // Create Columns for User Table in PostgreSQL
    @PrimaryGeneratedColumn() 
    id!: number

    @Column({ type: 'text', nullable: true })
    @IsEmail()
    email?: string | null
    
    @Column({ type: 'boolean', default: false }) 
    verifiedEmail!: boolean 

    @Column({ type: 'text' })
    firstName!: string 

    @Column({ type: 'text' })
    lastName!: string 
    
    @Column({ type: 'int', nullable: true }) 
    age?: number 

    @Column({ type: 'text', nullable: true })
    password?: string 
    
    @Column({ type: 'text', nullable: true })
    phoneNumber?: string
    
    @Column({ type: 'boolean', default: false })
    verifiedPhoneNumber!: boolean
  
    @Column({ type: 'text' })
    profilePhoto?: string
    
    @Column({ type: 'boolean', default: false }) 
    isDriving!: boolean

    @Column({ type: 'boolean', default: false }) 
    isRiding!: boolean
    
    @Column({ type: 'boolean', default: false }) 
    isTaken!: boolean
    
    @Column({ type: 'double precision', default: 0 }) 
    lastLng?: number
    
    @Column({ type: 'double precision', default: 0 }) 
    lastLat?: number
    
    @Column({ type: 'double precision', default: 0 }) 
    lastOrientation?: number
      
    @Column({ type: 'text', nullable: true })
    facebookID?: string

    // One chat can have many participants
    @ManyToOne( type => Chat, chat => chat.participants)
    chat?: Chat // Chat in user

    // One User can have many  messages
    @OneToMany( type => Message, message => message.user)
    messages?: Message[] // Message in user

    // One passenger can have many rides  
    @OneToMany( type => Ride, ride => ride.passenger)
    ridesAsPassenger?: Ride[]
    
    // One driver can have many rides  
    @OneToMany( type => Ride, ride => ride.driver)
    ridesAsDriver?: Ride[]

    @CreateDateColumn() 
    createdAt!: string
    
    @UpdateDateColumn() 
    updatedAt?: string
    
    get fullname(): string {
        return `${this.firstName} ${this.lastName}`
    }

    // Verify password
    public comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password || '')
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