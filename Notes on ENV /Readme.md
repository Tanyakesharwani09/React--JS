# Environment Variable -->

An environment variable is a key–value pair stored outside your application code that influences how your app behaves at runtime. Think of it as a configuration setting that your app can read without hardcoding sensitive or environment-specific data.



## Why Use Environment Variables?
### Security:
Keeps secrets like API keys, tokens, and database URLs out of your source code.

### Flexibility: 
Easily switch between development, staging, and production setups.

### Maintainability:
Change values without touching your codebase.

### Portability:
Share your code without exposing sensitive data.
________________________________________________________________________________________________________


In a React project using Vite, environment variables are stored in special .env files located at the root of your project directory—that is, the same level as your package.json, not inside the src folder.
## 🔐 Important:
Only variables prefixed with VITE_ are exposed to your Vite app via import.meta.env

## 🛠️ Example Setup
.env

env
________________________________________
VITE_API_URL=https://api.example.com

VITE_PROJECT_ID=abc123
__________________________________________
Usage in Code

js
______________________________________________
const apiUrl = import.meta.env.VITE_API_URL;

console.log("API URL:", apiUrl);
______________________________________________
## 🧠 Tips
Restart your dev server after editing .env files.

