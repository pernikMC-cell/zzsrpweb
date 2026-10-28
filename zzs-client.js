
const ZZS_SERVER_URL = "https://37.60.241.137:2584"


const socket = io(ZZS_SERVER_URL, {
  secure: true,
  rejectUnauthorized: false, // Povolí samopodepsané certifikáty pro lokální testování
  transports: ['websocket', 'polling']
});

socket.on('connect', () => {
  console.log('[WSS] Bezpečné šifrované spojení navázáno.');
});