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
    const user = new User(name, email)
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
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };

