import React from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = React.useState('online');
  
  const onOnline = () => setStatus('online');

  const onOffline = () => setStatus('offline');
  
  React.useEffect(() => {
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    }
  }, []);

  const className = 'status'.concat(status === 'offline' ? ' status_offline' : '');

  return (
    <div className={className}>{status}</div>
  );
}

export default ConnectionStatus;
