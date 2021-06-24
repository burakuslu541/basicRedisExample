const redis = require("redis");
const client = redis.createClient();
client.on("error", (error) => {
  console.error(error);
});

client.publish("kablosuzkedi", "giden mesaj", (err, number) => {
  console.log(`message ${number} kişiye gönderildi`);
});
