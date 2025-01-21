# React setInterval Memory Leak

This repository demonstrates a common React bug: memory leaks caused by the improper use of `setInterval` within the `useEffect` hook.  The `bug.js` file contains the flawed component, and `bugSolution.js` shows the corrected version.

**Problem:**
The original component uses `setInterval` to update the count every second. However, it fails to clear the interval when the component unmounts. This leads to the interval continuing to run, consuming memory and potentially causing unexpected behavior.

**Solution:**
The solution uses `clearInterval` to stop the interval before the component unmounts.  This ensures that memory resources are released when the component is no longer needed.