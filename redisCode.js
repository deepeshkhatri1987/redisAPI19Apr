const { createClient } = require('redis');

async function connectToRedis() {
  const client = createClient({ host: "127.0.0.1", port: 6379 });
  client.on('error', err => console.log('Redis Client Error', err));

  await client.connect();
  return client;
}

async function getRedisValue(key) {
  const client = await connectToRedis();

  try {
    const result = await client.get(key);
    console.log("Value of key: '"+key+"' was retrieved as: "+result);;
  } catch (e) {
    console.log(e);
  }
}

async function setValueToKey(key, value) {
  const client = await connectToRedis();

  try {
    const result = await client.set(key, value);

    if (result === 'OK') {
      console.log("Key with name: '"+key+"' has been saved with value as: "+value);
    }
  } catch (e) {
    console.log(e);
  }
}

async function executeMethodsInSequence() {
  await setValueToKey('cricket', 'game:1');
  await getRedisValue('cricket');
  await getRedisValue('football');
}

executeMethodsInSequence();
