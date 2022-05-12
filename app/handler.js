const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")
const serverless = require('serverless-http')
const express = require('express')
const { v4: uuid } = require('uuid')
const app = express()

const client = new S3Client({
  region: 'us-east-1',
})

const BUCKET_NAME = 'br-20220512-bucket-1' // FIXME
const INDEX_NAME = 'seller' // FIXME

// LIST
app.post('/', ({ params }, res) => {
  return res.status(200).json({ data: { list: [] } })
})

// CREATE
app.post('/create', ({ params }, res) => {
  const Bucket = BUCKET_NAME
  const Key = `/data/${INDEX_NAME}/${uuid()}/`
  const Body = { ...params, datetime: Date.now().toString(), }

  const result = await client.send(new PutObjectCommand({
    Bucket, Key, Body: JSON.stringify(Body),
  }))

  return res.status(200).json({ data: { result } })
})

// READ
app.post('/read/:id', ({ params }, res) => {
  return res.status(200).json({ data: {} })
})

// UPDATE
app.post('/update/:id', ({ params }, res) => {
  return res.status(200).json({ data: {} })
})

// DELETE
app.post('/delete/:id', ({ params }, res) => {
  return res.status(200).json({ data: {} })
})

app.use((_, res) => {
  return res.status(404).json({
    error: 'Not Found',
  })
})

module.exports.handler = serverless(app)
