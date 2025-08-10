# 1. Project Context & Why You Chose It

I decided to build the MegaVlog app because I wanted to create a platform where users can share their thoughts, experiences, and stories in a vlog format, but with enhanced text formatting and multimedia support.

Many existing platforms either don’t provide a smooth experience for rich text editing or real-time collaboration, so I wanted to solve this problem by developing an app that makes writing, editing, and reading vlogs easy, interactive, and secure.

My goal was to combine a user-friendly interface with powerful editing features, and to ensure data security with proper login and authentication.”


---

# 2. Technologies Used & Why (Focus on React Hook Form)

“To build this app, I chose React as the frontend framework due to its component-based architecture and efficient rendering.

For managing form inputs — especially for adding and editing posts — I used React Hook Form. This library simplifies form handling by minimizing the number of re-renders during user input and providing built-in validation capabilities. Compared to alternatives like using React’s controlled components or libraries such as Formik, React Hook Form offers better performance and cleaner code, which made it an ideal choice for this project.

I also used Redux Toolkit and React Redux to manage the global state, including user authentication status and post data, which helps keep the UI consistent across different pages.

For routing between pages like login, vlog listing, and the editor, I used React Router DOM.

For the backend, I integrated AppWrite, which offers real-time database services and user authentication, simplifying the implementation of secure login/signup and live data updates.

For rich text editing, I integrated TinyMCE React to provide users with features like bold, italic, image upload, and more, enhancing the vlog creation experience.

For styling, I used Tailwind CSS to create a clean, responsive, and modern UI.”


---

# 3. Action Flow & Project Structure

## Pages and Navigation:

### Login Page:
This is the landing page where users enter their credentials to access the app. The login system is powered by AppWrite’s authentication service, ensuring secure handling of user data. If a user is not logged in, they cannot access other parts of the app.

### Main Vlog Listing Page:
After successful login, users are taken here to view all the vlogs posted by themselves and others. Users can read, like, or choose to create new posts.

### Real-Time Editor Page:
When a user chooses to create or edit a post, they are directed to this page, where TinyMCE React is used for rich text editing. Users can format text (bold, italic, underline), insert images, and more.


## How It Works:

1. The user opens the app and lands on the Login Page. Using AppWrite’s authentication, the app verifies the user’s credentials securely.


2. Upon successful login, the app navigates to the Main Page, where all vlogs are displayed, fetched in real-time from AppWrite’s database.


3. The user can choose to add a new post or edit an existing one, which opens the Real-Time Editor with TinyMCE React integrated.


4. The editor uses React Hook Form to manage form data efficiently. When the user submits the post, the data (including formatted text and images) is sent to AppWrite’s backend, which updates the real-time database.


5. Thanks to real-time syncing via AppWrite, changes reflect instantly across all users who are viewing the vlogs.



## State Management:

I used Redux Toolkit to manage the global state, such as user authentication status and the current list of posts. This allowed me to easily share data across components without prop drilling.


Challenges and Solutions:

One major challenge was integrating real-time data synchronization with AppWrite. Initially, handling multiple users editing or viewing posts simultaneously caused state conflicts and UI glitches.

To solve this, I carefully studied AppWrite’s SDK and used Redux Toolkit to manage state updates effectively, ensuring the UI stayed consistent and responsive.

Another challenge was handling the rich text editor’s complex input, especially with image uploads and formatting. I tested TinyMCE React extensively and used React Parser to safely render HTML content on the frontend.



---

Summary

This project helped me strengthen my skills in React, state management with Redux Toolkit, backend integration with AppWrite, and building rich user experiences with TinyMCE React and React Hook Form. It also taught me how to handle real-time data and solve challenges related to synchronization and complex UI components.
