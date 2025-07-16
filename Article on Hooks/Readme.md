⚛️ React Hooks Deep Dive: useState, useEffect, useRef, useCallback
React Hooks revolutionized functional components, giving them the ability to manage state, side effects, DOM references, and performance optimizations. Here's a breakdown of four foundational hooks that power dynamic React applications.

🧮 useState — Managing Local State
Purpose: To hold and update local, reactive state inside a component.

Syntax:

jsx
const [state, setState] = useState(initialValue);
Features:

Triggers a re-render when state updates.

Stores any type — string, number, object, array, etc.

Can be used multiple times for different state variables.

Example:

jsx
const [color, setColor] = useState("red");

<button onClick={() => setColor("blue")}>Change Color</button>
🔄 useEffect — Handling Side Effects
Purpose: To run code after component render — great for data fetching, subscriptions, and manual DOM interactions.

Syntax:

jsx
useEffect(() => {
  // side effect logic
  return () => {
    // cleanup logic (optional)
  };
}, [dependencies]);
Features:

Executes after the component has mounted or updated.

Optional cleanup using return.

Controlled by a dependency array.

Example:

jsx
useEffect(() => {
  document.title = `Color: ${color}`;
}, [color]);
📌 useRef — Persistent References Without Re-render
Purpose: To access DOM nodes or store mutable values that survive re-renders without triggering them.

Syntax:

jsx
const ref = useRef(initialValue);
Features:

Commonly used to access input fields or canvas elements.

Also useful for timers or cached values between renders.

Example:

jsx
const inputRef = useRef(null);

<button onClick={() => inputRef.current.focus()}>Focus</button>
<input ref={inputRef} />
🚀 useCallback — Memoizing Functions for Performance
Purpose: To prevent recreation of functions on every render, especially when passing them to child components.

Syntax:

jsx
const memoizedFn = useCallback(() => {
  // function logic
}, [dependencies]);
Features:

Reduces unnecessary renders in child components.

Useful in component trees with props or handlers that don’t change often.

Example:

jsx
const handleClick = useCallback(() => {
  setColor("green");
}, [setColor]);
🛠️ How They Work Together
In a dynamic app (like your inventory dashboard or password generator):

useState holds current UI data or user input.

useEffect syncs with external data or updates the DOM.

useRef helps manage focus or visualize elements.

useCallback boosts performance when props are passed down multiple layers.

✍️ Final Thoughts
These four hooks are the backbone of modern React development. Mastering them helps build scalable, performant, and readable components — exactly what your projects deserve.
