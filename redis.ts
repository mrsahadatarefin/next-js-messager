import { Redis } from "ioredis"



const redis = new Redis("rediss://default:82a482d07db94d86b3f55a1416f88049@usw1-famous-yeti-34015.upstash.io:34015")
export default redis
