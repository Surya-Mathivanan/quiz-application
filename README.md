# Quiz Application
This is a web-based Quiz Application designed for the intercollege event Udhayam-2025 Department Event at KIT-Kalaignarkarunanidhi Institute of Technology, Coimbatore. The application allows users to take a quiz, track their scores, and maintain a leaderboard.

## View Online:
 - Website : https://udhayam25-technicalquiz.netlify.app/

## College Posters
### 1. department poster
![Image](https://github.com/user-attachments/assets/1bbce667-a473-4a3f-8324-2abc454dfed0)
### 2. Qr Code 
![Image](https://github.com/user-attachments/assets/b1a00a75-5e5b-4b14-a35a-693cd1fc30aa)
### Registration Poster
![Image](https://github.com/user-attachments/assets/82d32778-82d3-430b-836e-d555241b541b)


## Features
 - User Registration: Enter name, department, and college before starting the quiz.

 - Quiz Functionality: Displays multiple-choice questions one by one.

 - Automatic Scoring: Tracks and updates user scores based on correct answers.

 - Leaderboard System: Saves and ranks scores in local storage.

 - Google Sheets Integration: Submits leaderboard data for external storage.

 - Security Features: Prevents tab switching, copying, and right-click actions.

 - Countdown Timer: Displays a countdown before uploading scores.

## Technologies Used
 - HTML, CSS, JavaScript: For frontend and UI interactions.

 - Local Storage: To store user progress and leaderboard data.

 - Google Apps Script: For submitting leaderboard scores to Google Sheets.

## Installation & Usage
### 1. Clone or Download the Repository
```
git clone https://github.com/Surya-Mathivanan/quiz-application.git
cd quiz-application
```
### 2. Open in Browser
 - Simply open index.html in a browser to start the quiz.

## 3. How to Play
 - Click Start Quiz on the home page.

 - Enter your Name, Department, and College.

 - Answer the multiple-choice questions.

 - View your score and time taken at the end.

 - Your score is saved in the Leaderboard.

 - Click Submit Leaderboard to upload data to Google Sheets.

## File Structure
```
quiz-application/
│── index.html         # Main page of the quiz
│── styles.css         # Styling file for the quiz UI
│── script.js          # JavaScript logic for quiz functionality
│── leaderboard.js     # Handles leaderboard storage and display
│── google-script.js   # Submits leaderboard data to Google Sheets
```

## Security & Restrictions
 - Tab Switching: If a user switches tabs, the quiz resets.

 - Copying & Pasting: Disabled to prevent cheating.

 - Right-Click: Disabled on the quiz page.

## Future Enhancements
 - More Questions & Categories: Expand quiz categories and difficulty levels.

 - Timer-based Questions: Limit time per question.

 - User Authentication: Allow users to log in and track their progress.

## Contributors
 - Surya M - Developer & Event Organizer
 - Subhash VV - Developer & Question Organizer

## License
 - This project is for educational purposes only.




























