WeApprove – Loan Approval Prediction System
Project Overview
WeApprove is an AI-powered loan approval prediction system that helps users determine their loan eligibility based on key financial and personal details. It leverages machine learning to analyze user data and predict approval outcomes efficiently. The platform also features a smart NLP-based chatbot for assisting users and a real-time help desk chatbot for support.

Features
Loan Eligibility Prediction: AI/ML model-based prediction of loan approvals
User Roles: Admins, Loan Applicants
NLP-based Chatbot: Smart assistant to guide users through the loan application process
Help Desk Chatbot: Provides real-time support for user queries
Secure Authentication: User login and signup with JWT authentication
Application Management: Users can apply for loans and track their status
Admin Dashboard: Admins can manage applications, view analytics, and oversee system operations
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Machine Learning: Python (Flask API for ML model), Scikit-learn, Pandas, NumPy
Chatbot: NLP-based chatbot using Dialogflow/Rasa
Authentication: JWT-based authentication
Email Notifications: Nodemailer
Installation Guide
Backend Setup
Clone the repository:
git clone https://github.com/your-repo/WeApprove.git
cd WeApprove  
Install dependencies:
npm install  
Set up environment variables (.env file) with MongoDB URI, JWT secret, and other keys.
Start the backend server:
npm start  
Frontend Setup
Navigate to the frontend directory:
cd client  
Install dependencies:
npm install  
Start the frontend server:
npm start  
Machine Learning API Setup
Navigate to the ML model directory:
cd ml-model  
Install Python dependencies:
pip install -r requirements.txt  
Run the Flask server:
python app.py  
Usage
Applicants: Sign up, enter financial details, and receive loan predictions
Admin: Monitors applications, manages users, and oversees predictions
Chatbot: Assists users with loan-related queries and FAQs
Contribution
Fork the repository
Create a feature branch:
git checkout -b feature-name  
Commit changes and push to GitHub
Open a pull request
License
This project is open-source under the MIT License.

Contact
For queries or contributions, contact Anamika Pandey.
