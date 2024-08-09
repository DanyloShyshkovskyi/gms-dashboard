import { useEffect, useState } from "react";

export const useWebsocket = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any>(null);
  const [webId, setWebId] = useState(() => {
    return localStorage.getItem('webId') || null;
  });
  const [taskResult, setTaskResult] = useState('');
  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8081');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true)

      if (webId) ws.send(JSON.stringify({ type: 'identify', key: webId }));
      else ws.send(JSON.stringify({ type: 'assignKey' }));

    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'assignKey') {
        localStorage.setItem('webId', data.key);
        setWebId(data.key);
      } else if (data.type === 'taskResult') {
        setTaskResult(data.actionsResults);
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);


  return {taskResult, webId, socket, setTaskResult, isConnected}
}