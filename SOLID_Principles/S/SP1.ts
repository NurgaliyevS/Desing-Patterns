// SOLID PRINCIPLES

// PRINCIPLE FIRST

// S - Single responsibility 
// 1 CLASS - 1 TASK
// 1 СУЩНОСТЬ - 1 TASK

// Single Responsibility Principle
// Принцип единственной ответственности
const http = {send: () => ({})};

const generateId = () => Date.now() * Math.random();

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }
}

class UserRepository {
  save(user: User) {
    // сохранение пользователя в бд
  }
}

class UserLogger {
  log(user: User) {
    console.log(user)
  }
}

class UserController {
  send(user: User) {
    return http.send()
  }
}