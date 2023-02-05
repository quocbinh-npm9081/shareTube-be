import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
class Mongo {
  public mongodb_connection_string = '';
  constructor(url: string) {
    this.mongodb_connection_string = url;
  }
  public async Contect(): Promise<void> {
    try {
      await mongoose.connect(this.mongodb_connection_string);
      console.log('Connect succesfully !');
    } catch (error) {
      console.log('Connect failure  !');
    }
  }
}

export default Mongo;
