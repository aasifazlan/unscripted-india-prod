// /lib/pinecone.ts
import { Pinecone } from '@pinecone-database/pinecone'

const client = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! })

export const index = client.Index(process.env.PINECONE_INDEX!)