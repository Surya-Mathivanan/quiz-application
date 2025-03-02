const homePage = document.getElementById('home-page');
const userPage = document.getElementById('user-page');
const quizPage = document.getElementById('quiz-page');
const scoreboardPage = document.getElementById('scoreboard-page');
const leaderboardPage = document.getElementById('leaderboard-page');

const startBtn = document.getElementById('start-btn');
const loginBtn = document.getElementById('login-btn');
const nextBtn = document.getElementById('next-btn');
const deleteDataBtn = document.getElementById('delete-data-btn');

const usernameInput = document.getElementById('username');
const departmentInput = document.getElementById('department');
const collegeInput = document.getElementById('college');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const userScoreElement = document.getElementById('user-score');
const leaderboardBody = document.querySelector('#leaderboard tbody');

let currentUser = {};
let currentQuestionIndex = 0;
let score = 0;
let startTime;

// Quiz Questions
const questions = [
  {
    question: "Which optimization algorithm is commonly used for training deep learning models?",
    options: ["Gradient Descent", "Genetic Algorithm", "Apriori Algorithm", "K-Means"],
    answer: "Gradient Descent"
  },
  {
    question: "Which deep learning architecture is best suited for sequential data like text and speech?",
    options: ["Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN)", "Generative Adversarial Networks (GAN)", "Autoencoders"],
    answer: "Recurrent Neural Networks (RNN)"
  },
  {
    question: "A binary tree with n nodes has how many edges?",
    options: [
      "n+1",
      "n-1",
      "2n",
      "n/2"
    ],
    answer: "n-1"
  },
  {
    question: "Which sorting algorithm is in-place and unstable?",
    options: [
      "Bubble Sort",
      "Merge Sort",
      "Quick Sort",
      "Selection Sort"
    ],
    answer: "Quick Sort"
  },
  {
    question: "What is the output of: print(2 ** 3 ** 2) in Python?",
    options: [
      "64",
      "512",
      "9",
      "36"
    ],
    answer: "512"
  },
  {
    question: "What does a Deadlock in OS mean?",
    options: [
      "Process execution halts permanently",
      "System restarts automatically",
      "Processes finish execution in sequence",
      "All resources are free"
    ],
    answer: "Process execution halts permanently"
  },
  {
    question: "What is the default port number of HTTP?",
    options: [
      "21",
      "25",
      "80",
      "443"
    ],
    answer: "80"
  },
  {
    question: "In SQL, which command is used to remove all records but keep the table structure?",
    options: [
      "DELETE",
      "DROP",
      "TRUNCATE",
      "REMOVE"
    ],
    answer: "TRUNCATE"
  },
  {
    question: "In Machine Learning, which algorithm is used for classification?",
    options: [
      "K-Means",
      "Decision Tree",
      "BFS Algorithm",
      "Dijkstra's Algorithm"
    ],
    answer: "Decision Tree"
  },
  {
    question: "What does malloc() return when memory allocation fails?",
    options: [
      "0",
      "NULL",
      "-1",
      "Garbage value"
    ],
    answer: "NULL"
  },
  {
    question: "What is the output of 5 & 3 in Python?",
    options: [
      "5",
      "3",
      "1",
      "2"
    ],
    answer: "2"
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    options: [
      "Stack",
      "Queue",
      "Heap",
      "Linked List"
    ],
    answer: "Heap"
  },
  {
    question: "Which protocol is used for sending email?",
    options: [
      "HTTP",
      "SMTP",
      "FTP",
      "IMAP"
    ],
    answer: "SMTP"
  },
  {
    question: "What is the default subnet mask for a Class C IPv4 address?",
    options: [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    answer: "255.255.255.0"
  },
  {
    question: "Which ML technique is unsupervised learning?",
    options: [
      "Linear Regression",
      "K-Means Clustering",
      "Decision Tree",
      "Logistic Regression"
    ],
    answer: "K-Means Clustering"
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    options: [
      "Queue",
      "Stack",
      "Heap",
      "Array"
    ],
    answer: "Stack"
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: [
      "O(n log n)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    answer: "O(n²)"
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Oracle"
    ],
    answer: "MongoDB"
  },
  {
    question: "Which of the following is not a programming language?",
    options: [
      "Java",
      "Python",
      "HTML",
      "C++"
    ],
    answer: "HTML"
  },
  {
    question: "Which of the following is used to uniquely identify a record in a database?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Index",
      "View"
    ],
    answer: "Primary Key"
  },
  {
    question: "What is the primary purpose of an API?",
    options: [
      "To create UI designs",
      "To facilitate communication between software applications",
      "To store data permanently",
      "To secure a network"
    ],
    answer: "To facilitate communication between software applications"
  },
  {
    question: "What is the default port number for DNS?",
    options: [
      "53",
      "443",
      "21",
      "22"
    ],
    answer: "53"
  },
  {
    question: "Which of the following programming paradigms does Python support?",
    options: [
      "Procedural",
      "Object-Oriented",
      "Functional",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is overfitting in machine learning?",
    options: [
      "When the model performs well on training data but poorly on test data",
      "When the model performs equally well on training and test data",
      "When the model underperforms on both training and test data",
      "When the model has too few features"
    ],
    answer: "When the model performs well on training data but poorly on test data"
  },
  {
    question: "Which of the following is a dimensionality reduction technique?",
    options: [
      "Decision Trees",
      "K-Nearest Neighbors",
      "Principal Component Analysis (PCA)",
      "Support Vector Machines"
    ],
    answer: "Principal Component Analysis (PCA)"
  },
  {
    question: "In statistics, what is the purpose of the standard deviation?",
    options: [
      "Measuring central tendency",
      "Describing the spread or dispersion of data",
      "Identifying outliers",
      "Calculating probabilities"
    ],
    answer: "Describing the spread or dispersion of data"
  },
  {
    question: "What is the purpose of a histogram in data visualization?",
    options: [
      "Displaying hierarchical relationships",
      "Comparing multiple datasets",
      "Showing the distribution of a single variable",
      "Representing geographical data"
    ],
    answer: "Showing the distribution of a single variable"
  },
  {
    question: "What is the primary purpose of a scatter plot?",
    options: [
      "Showing the distribution of a single variable",
      "Representing hierarchical relationships",
      "Visualizing the relationship between two variables",
      "Displaying the summary statistics of a dataset"
    ],
    answer: "Visualizing the relationship between two variables"
  },
  {
    question: "In statistics, what does the term 'mean' refer to?",
    options: [
      "The middle value of a dataset",
      "The most frequently occurring value in a dataset",
      "The sum of all values divided by the number of values",
      "The range of values in a dataset"
    ],
    answer: "The sum of all values divided by the number of values"
  },
  {
    question: "What is the key principle behind the k-nearest neighbors (KNN) algorithm?",
    options: [
      "Minimizing the sum of squared errors",
      "Maximizing the margin between classes",
      "Assigning a data point the most common label among its k-nearest neighbors",
      "Minimizing the cross-entropy loss"
    ],
    answer: "Assigning a data point the most common label among its k-nearest neighbors"
  }
];

// Function to show different pages
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  page.classList.remove('hidden');
  page.classList.add('active');
}

// Home Page - Start Button
startBtn?.addEventListener('click', () => {
  localStorage.removeItem('quizProgress');
  localStorage.removeItem('username');
  // startTime = Date.now();
  showPage(userPage);
});

// User Login Page - Login Button
loginBtn?.addEventListener('click', () => {
  const usernameValue = usernameInput.value.trim();

  if (!usernameValue) {
    alert("Please enter a username before starting the quiz!");
    return;
  }

  localStorage.setItem('username', usernameValue);

  currentUser = {
    username: usernameValue,
    department: departmentInput.value.trim() || "N/A",
    college: collegeInput.value.trim() || "N/A",
    score: 0
  };
  startTime = Date.now();
  showPage(quizPage);
  loadQuestion();
});

// Load Quiz Question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  localStorage.setItem('quizProgress', JSON.stringify({
    currentQuestionIndex,
    score,
    startTime
  }));

  optionsElement.innerHTML = '';

  const form = document.createElement('form');
  form.id = "quiz-form";

  question.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.margin = "5px 0";
    label.style.gap = "10px";

    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "quiz-option";
    radio.value = option;
    radio.id = `option${index}`;

    radio.addEventListener('change', () => {
      nextBtn.classList.remove('hidden'); 
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(` ${option}`));
    form.appendChild(label);
  });

  optionsElement.appendChild(form);
  nextBtn.classList.add('hidden');
}

// Handle Answer Selection
function selectAnswer() {
  const selectedOption = document.querySelector('input[name="quiz-option"]:checked');

  if (!selectedOption) {
    alert("Please select an answer before proceeding!");
    return;
  }

  const question = questions[currentQuestionIndex];

  if (selectedOption.value === question.answer) {
    score++; 
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScoreboard(); 
  }
}

nextBtn?.addEventListener('click', selectAnswer);

// Show Scoreboard Page
function showScoreboard() {
  const endTime = Date.now(); 
  const timeTaken = Math.floor((endTime - startTime) / 1000); 

  currentUser.score = score; 
  currentUser.timeTaken = timeTaken;

  userScoreElement.textContent = `Your Score: ${score} / ${questions.length} (Time: ${timeTaken} sec)`;

  saveToLeaderboard(); 
  updateLeaderboard(); 
  showPage(scoreboardPage); 
}

// Save Score to Leaderboard
function saveToLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

  leaderboard.push({
    Rank: leaderboard.length + 1,
    Name: currentUser.username,
    Department: currentUser.department,
    College: currentUser.college,
    Score: currentUser.score,
    Time: currentUser.timeTaken
  });

  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function updateLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  leaderboardBody.innerHTML = ''; 

  if (leaderboard.length === 0) {
    leaderboardBody.innerHTML = '<tr><td colspan="6">No data available</td></tr>';
    return;
  }

  // Sort leaderboard by score (descending)
  leaderboard.sort((a, b) => b.Score - a.Score);

  // Add rank to each user and update the table
  leaderboard.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td> <!-- Rank -->
      <td>${user.Department}</td> <!-- Department -->
      <td>${user.Name}</td> <!-- Name -->
      <td>${user.College}</td> <!-- College --> 
      <td>${user.Score}</td> <!-- Score -->
      <td>${user.Time} sec</td> <!-- Time -->
    `;
    leaderboardBody.appendChild(row);
  });
}

// Delete Leaderboard Data
deleteDataBtn?.addEventListener('click', () => {
  const confirmDelete = confirm("Are you sure you want to delete all leaderboard data?");
  if (confirmDelete) {
    localStorage.removeItem('leaderboard');
    alert("Leaderboard data has been deleted.");
    updateLeaderboard();
  }
});

// Submit Leaderboard to Google Sheets
function submitLeaderboard() {


  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  const data = leaderboard.map(user => ({
    Rank: user.Rank,
    Name: user.Name,
    Department: user.Department,
    College: user.College,
    Score: user.Score,
    Time: user.Time
  }));

  fetch('https://script.google.com/macros/s/AKfycbwNieuH6WeDccn1SHasG5Y6V5h4mfPsMXhsHjrsfRuBARUBX97oWpuAZPv3vBE5cJJrpw/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
      alert("Leaderboard updated successfully!");
      location.reload(); 
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Thank you for submitting your answers!");
      location.reload();
    });
}


// Handle Page Visibility Changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    localStorage.setItem("quizPaused", "true");
  } else {
    localStorage.setItem("quizPaused", "false");
    restoreQuizProgress();
  }
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
  alert("Copying is not allowed!");
});


document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    alert("You switched tabs! Your quiz attempt has been reset.");
    location.reload(); 
  }
});

function startCountdown() {
  // Disable the button to prevent multiple clicks
  const button = document.getElementById("oggie");
  button.disabled = true;

  let timeLeft = 5; // Set the countdown time (5 seconds)
  const countdownElement = document.getElementById("countdown");

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
      countdownElement.textContent = `Please wait while we process your score! ${timeLeft} seconds`;
      timeLeft--;

      // When the countdown reaches 0, stop the interval and re-enable the button
      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = "Score uploaded!";
          button.disabled = false; // Re-enable the button
      }
  }, 1000); // Update every 1000ms (1 second)
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.userSelect = "none"; // Disable text selection
  document.body.style.webkitUserSelect = "none"; // For Safari
  document.body.style.msUserSelect = "none"; // For old IE
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});


