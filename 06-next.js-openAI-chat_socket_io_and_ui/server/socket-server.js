import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

import dotenvSafe from 'dotenv-safe';

dotenvSafe.config({ allowEmptyValues: false });

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
app.use(cors({ origin: clientOrigin }));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: clientOrigin } });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('chat', async ({ chatId, messages, model, messageId }) => {
    try {
      //let fullContent = '';
      const stream = await openai.chat.completions.create({
        model: model || 'gpt-4',
        messages,
        stream: true,
      });
      for await (const chunk of stream) {
        const delta = chunk.choices?.[0]?.delta?.content || '';
        if (delta) {
          //fullContent += delta;
          socket.emit('reply', {
            chatId,
            messageId,
            content: delta,
            isStream: true,
          });
        }
      }
      // Final message (optional, can be used to mark completion)
      /*
      socket.emit('reply', {
        chatId,
        messageId,
        content: fullContent,
        isStream: false,
      });*/
    } catch (err) {
      socket.emit('error', err.message || 'OpenAI error');
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
