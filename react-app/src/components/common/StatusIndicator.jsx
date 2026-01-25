import { useEffect, useState } from 'react';

const STATUS_ENDPOINT = 'https://status.salmoncloud.co.uk/api/v2/status.json';

const STATUS_STYLES = {
  none: { color: '#22c55e', fallback: 'All Systems Operational' },
  minor: { color: '#facc15', fallback: 'Minor Service Outage' },
  major: { color: '#f87171', fallback: 'Major Service Disruption' },
  critical: { color: '#ef4444', fallback: 'Critical Service Outage' }
};

const StatusIndicator = ({ label = 'Live Status' }) => {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'Checking status…'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchStatus = async () => {
      try {
        const response = await fetch(STATUS_ENDPOINT, { cache: 'no-store' });
        if (!response.ok) throw new Error('Failed to fetch status');
        const data = await response.json();
        if (!isMounted) return;
        setStatus({
          indicator: data?.status?.indicator ?? 'none',
          description: data?.status?.description ?? STATUS_STYLES.none.fallback
        });
        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        if (!isMounted) return;
        setHasError(true);
        setIsLoading(false);
        setStatus({
          indicator: 'minor',
          description: 'Status unavailable'
        });
      }
    };

    fetchStatus();
    const intervalId = setInterval(fetchStatus, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  const style = STATUS_STYLES[status.indicator] ?? STATUS_STYLES.none;
  const indicatorColor = hasError || isLoading ? '#94a3b8' : style.color;
  const statusText = isLoading ? 'Checking status…' : status.description || style.fallback;

  return (
    <a href="https://status.salmoncloud.co.uk" target="_blank" rel="noreferrer">
      <div className={`footer-status ${label ? '' : 'footer-status-inline'}`.trim()}>
        {label && <span className="footer-status-label">{label}</span>}
        <div className="footer-status-pill" aria-live="polite">
          <span
            className="footer-status-dot"
            style={{ backgroundColor: indicatorColor }}
            aria-hidden="true"
          />
          <span className="footer-status-text">{statusText}</span>
        </div>
      </div>
    </a>
  );
};

export default StatusIndicator;
