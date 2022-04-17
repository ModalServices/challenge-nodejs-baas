import app from './app'
import express from 'express'

app.listen(3000)
app.use(express.static('upload'))
