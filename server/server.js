const express = require('express');
const app = express();
const api = require('./routes/login');
 
// Cross-Origin Resource Sharing(CORS) 오류 해결을 위해 사용
const cors = require('cors');
app.use(cors());
 
app.use('/api', api);
 
// client서버는 3000
// 충돌하지 않도록 다른 번호 할당
const port = 3002;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));
