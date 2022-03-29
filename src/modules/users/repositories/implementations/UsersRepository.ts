import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const userAlreadyExists = this.findByEmail(email);
    if(userAlreadyExists) throw new Error("User already exist.")
    const user = new User()
    Object.assign(user, {
      name: name,
      email: email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.turnAdmin();
    receivedUser.attUpdate_at();
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };

