import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

if (MONGODB_URI === null || MONGODB_URI === undefined) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

export default async function conectDB () {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI as string)

    if (connection.readyState === 1) {
      console.log('MongoDB connected')
      return await Promise.resolve(true)
    } else {
      console.log('MongoDB connection failed')
      return await Promise.resolve(false)
    }
  } catch (error) {
    console.log(`Error Conection: ${error as string}`)
  }
}
