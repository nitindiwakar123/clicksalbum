import session from "express-session";

class RedisHashStore extends session.Store {
  constructor({ client, prefix = "sess:" }) {
    super();
    this.client = client;
    this.prefix = prefix;
  }

  get(sid, callback) {
    const key = `${this.prefix}${sid}`;
    this.client
      .hGetAll(key)
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          return callback(null, null);
        }
        const sessionData = JSON.parse(data.session);
        return callback(null, sessionData);
      })
      .catch((error) => callback(error));
  }

  set(sid, sessionData, callback) {
    const key = `${this.prefix}${sid}`;
    const ttl = sessionData.cookie?.maxAge
      ? Math.floor(sessionData.cookie.maxAge / 1000)
      : 60 * 60 * 24 * 7;

    this.client
      .hSet(key, { session: JSON.stringify(sessionData) })
      .then(() => this.client.expire(key, ttl))
      .then(() => callback(null))
      .catch((error) => callback(error));
  }

  destroy(sid, callback) {
    const key = `${this.prefix}${sid}`;
    this.client
      .del(key)
      .then(() => callback(null))
      .catch((error) => callback(error));
  }
}

export default RedisHashStore;
