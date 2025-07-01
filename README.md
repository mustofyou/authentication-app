# User Authentication Web Application

This is a web application built using Node.js and Express.js that implements user authentication. Users can register and log in either with a local username/password combination or via Google OAuth 2.0. Authenticated users can access a protected "secrets" page.

## 🔑 Features

- User registration and login
- Google OAuth 2.0 authentication
- Protected route accessible only to logged-in users
- Session management (login/logout)
- MongoDB integration for user data storage
- Environment variable management using dotenv

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime for backend development
- **Express.js** – Web server framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM (Object Data Modeling) for MongoDB
- **EJS** – Template engine for rendering dynamic HTML
- **Passport.js** – Authentication middleware
  - Local Strategy
  - Google OAuth 2.0 Strategy
- **dotenv** – Loads environment variables from a `.env` file
- **body-parser** – Parses incoming request bodies
- **express-session** – Manages user sessions

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
2. install dependencies:
npm install
3. Create a .env file and add the following:
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
API_KEY=your_optional_api_key
4. Start the server:
node app.js / nodemon app.js

🧠 Skills Gained from This Project
Understanding of user authentication flows (Local & OAuth)
Integration of third-party login with Google
Structuring RESTful routes in Express
Modeling and interacting with MongoDB using Mongoose
Managing sensitive data securely using environment variables
Handling sessions and middleware effectively
📌 Notes
To enable Google login, create a project in the Google Cloud Console, enable the OAuth consent screen, and set the redirect URI to http://localhost:3000/auth/google/callback.
MongoDB Atlas was used for the database connection.


---

Feel free to open an issue or contact me if you have any questions!


git command:
	cases in commits
		if you want to discard the last change you made in your local repo and go back to the last commit:
			git restore .
		
		if ypu want to go to a previous commit:
			git checkout commit log id

		if ypu want to delete the last commit completely:
			git reset --hard 

	git add remote get-url origin:
		to see the remote repository github url

