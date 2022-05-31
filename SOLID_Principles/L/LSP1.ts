// Liskov Substitution Principle
// Принцип подстановки Барбары Лисков

// Функции, сущности, модули используют родительский тип должны точно также работать и с дочерними классами

// Наследуемый класс должен дополнять а не изменять базовый класс

// Принцип простой
// Если у нас есть родитель и дочерние классы
// То мы не должны делать логику какого то дочернего класса в родителе
// А необходимо это делать в дочернем классе, а родителя не менять

class Database {
    connect() {}
    read() {}
    write() {}
  }
  
  class SQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
  }
  
  class NOSQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
  }
  
  class MySQLDatabase extends SQLDatabase {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
  }
  
  class MongoDatabase extends NOSQLDatabase {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
    mergeDocuments() {}
  }
  
  
  function startApp(database: Database) {
    database.connect()
  }
  startApp(new MongoDatabase())
  startApp(new MySQLDatabase())
  
  