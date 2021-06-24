const redis = require("redis");
const client = redis.createClient();
client.on("error", (error) => {
  console.error(error);
});
//SET
client.set("user_name", "burak", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});
//GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("GET", message);
});
//DEL
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("DEL", message);
});
//EXİST
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("EXİST", message);
});
//Append
client.append("last_name", "uslu", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
});
client.get("last_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("GET", message);
});
client.on("message", (channel, massage) => {
  console.log(`${channel} isimli kanala ${massage} geldi`);
});
client.subscribe("kablosuzkedi");
