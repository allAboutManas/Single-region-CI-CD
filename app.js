import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend is running successfully'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.get('/api/users', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Tony' },
    { id: 2, name: 'Steve' },{
        id:3,name:'Anil'
    }
  ]);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;