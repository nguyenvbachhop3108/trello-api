import { MongoClient, ServerApiVersion } from "mongodb";

//khởi tạo 1 đối tượng trelloDatabaseInstance ban đầu là null (vì chưa connect)
let trelloDatabaseInstance = null;

//khởi tạo 1 đói tượng  mongoClientInstance để connect to MongoDb
const mongoClientInstance = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//kết nối tới Database
export const CONNECT_DB = async () => {
  //Gọi kết nối tới mongoDb Atlas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect();

  //kết nối thành công thì lấy ra db theo tên và gán ngược lại vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(process.env.DATABASE_NAME);
};

export const CLOSE_DB = async () => {
  await trelloDatabaseInstance.close();
};
// Fn GET_DB có nhiệm vụ export ra cái Trello Database Instance sau khi đã connect thành công tới MongoDb
//để chúng ta sử dụng ở nhiều nơi khác nhau trong code
// lưu ý phải đảm bảo kết nối tới MongoDB trước mới gọi tới Instance GET_DB này
export const GET_DB = () => {
  if (!trelloDatabaseInstance)
    throw new Error("Must connect to database first");
  return trelloDatabaseInstance;
};
