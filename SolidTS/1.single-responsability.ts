//@ts-nocheck
//BAD 
class Products {
    products = [];
    getAllProducts() {
      const connection = new SQLConnection().get("products");
      return connection.data;
    }
}

//BETTER
class Connection {
    SQLConnection = new SQLConnection();
    get(table: string) {
      return this.SQLConnection.get(table);
    }
  }
  
  class Products {
    products = [];
    constructor(connection: Connection);
    getAllProducts() {
      this.products = this.connection.get("products").data;
    }
}