import {MongoClient} from 'mongodb';

export default (url) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log('Sorry unable to connect to MongoDB Error:', err);
        reject(err);
      } else {
        console.log("Connected successfully to server", url);
        resolve(client.db());
      }
    });
  });
}
