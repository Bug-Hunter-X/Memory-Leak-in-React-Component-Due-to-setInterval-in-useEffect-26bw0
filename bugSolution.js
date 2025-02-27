```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [count]); // Add count to dependency array to avoid infinite loop

  return <div>Count: {count}</div>;
}
```