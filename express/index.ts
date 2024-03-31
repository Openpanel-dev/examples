import express from 'express'
import createMiddleware from '@openpanel/express';
import { getClientIp } from 'request-ip';

const PORT = Number(process.env.PORT || 3000)
const app = express()

app.use(
  createMiddleware({
    clientId: 'ef38d50e-7d8e-4041-9c62-46d4c3b3bb01',
    clientSecret: 'f0607566-791a-4b20-b42e-cadafcced4e0',
    trackRequest: (url) => {
      return true
    },
  })
)

app.get('/', (req, res) => {
  res.json({
    message: 'Home',
  })
})
app.get('/foo', (req, res) => {
  req.op.event('foo')
  res.json({
    message: 'Foo',
  })
})
app.get('/bar/:id', (req, res) => {
  req.op.event('bar', {
    params: req.params,
  })
  res.json({
    message: 'Foo',
    params: req.params,
  })
})
app.get('/ip', (req, res) => {
  res.json({
    ip: req.ip,
    getClientIp: getClientIp(req),
    xForwardedFor: req.headers['x-forwarded-for'],
    cfConnectingIp: req.headers['cf-connecting-ip'],
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
