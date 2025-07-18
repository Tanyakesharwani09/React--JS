🧠 What Is Prop Drilling?
Prop Drilling refers to the process of passing data from a parent component down to deeply nested child components via props—even if intermediate components don’t need that data.

🔍 Why It’s Problematic

Boilerplate Overhead: You end up writing repetitive code just to pass props.

Tight Coupling: Components become dependent on their ancestors.

Reduced Reusability: Harder to refactor or reuse components.

Performance Issues: Unnecessary re-renders in intermediary components.

🛠️ Example
jsx
--------------------------------------
function App() {
  const user = "Tanya";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
---------------------------------------

Here, only GrandChild uses user, but it’s passed through Parent and Child.

🌐 What Is the Context API?
The Context API is React’s built-in solution to avoid prop drilling. It allows you to share data across the component tree without manually passing props at every level.

🧩 Core Components
Component	Purpose
createContext() ->	Creates a context object
Provider ->	Supplies the context value to its children
Consumer ->	(Legacy) Reads the context value
useContext()-> Hook to access context in functional components
🛠️ Example
jsx
-------------------------------------------
// Create context
const UserContext = React.createContext();

// Provider
function App() {
  const user = "Tanya";
  return (
    <UserContext.Provider value={user}>
      <GrandChild />
    </UserContext.Provider>
  );
}

// Consumer with useContext
function GrandChild() {
  const user = useContext(UserContext);
  return <h1>Hello, {user}!</h1>;
}
------------------------------------------

🧪 What Is useContext?
useContext is a React Hook that lets you access the current value of a context directly inside functional components.

✅ Benefits
Avoids prop drilling

Cleaner syntax than <Context.Consumer>

Automatically re-renders when context value changes

🛠️ Syntax
jsx
-------------------------------------
const value = useContext(MyContext);
-------------------------------------

🧰 What Is useContextProvider?
There’s no built-in hook called useContextProvider in React. However, developers often create custom hooks that wrap both the context and its provider logic for cleaner usage.

🛠️ Example
jsx
------------------------------------------------------
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

--------------------------------------------------------

Now you can use useAuth() anywhere in your app to access user and setUser.

🧭 When and Where to Use These

Use Case	Recommended Approach

-->Deeply nested components need shared state	Context API + useContext
-->Global themes, auth, language settings	Context API
-->Small apps with simple state	useState + Context
-->Complex state logic or frequent updates	Redux, Zustand, or MobX
-->Avoiding prop drilling	Context API or custom hooks
