const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Parse JSON request bodies


// Mock data for communities
const communities = [
  { id: 1, name: 'Jakarta Education Community' },
  { id: 2, name: 'Bandung Learning Network' },
  { id: 3, name: 'Surabaya Teachers Association' },
  { id: 4, name: 'Yogyakarta Student Forum' },
  { id: 5, name: 'Medan Science Enthusiasts' },
  { id: 6, name: 'Semarang Academic Circle' },
  { id: 7, name: 'Makassar Knowledge Hub' },
  { id: 8, name: 'Denpasar Creative Learning Group' },
  { id: 9, name: 'Palembang Educators Alliance' },
  { id: 10, name: 'Malang Innovation Network' },
];

// Mock data for subscriptions
const subscriptions = [
  { id: 1, name: 'Early Access Subscription', applicant: 'Ayu Lestari', authorizer: 'Asnawi', subscriptionDate: '2022-01-15', price: '$8500', status: 'Finished' },
  { id: 2, name: 'Early Access Subscription Renewal', applicant: 'Ayu Lestari', authorizer: 'Asnawi', subscriptionDate: '2023-01-10', price: '$8500', status: 'Finished' },
  { id: 3, name: 'Early Access Subscription Renewal', applicant: 'Ayu Lestari', authorizer: 'Asnawi', subscriptionDate: '2024-01-02', price: '$8500', status: 'Finished' },
  { id: 4, name: 'Subscription Renewal', applicant: 'Ayu Lestari', authorizer: 'Asnawi', subscriptionDate: '2025-01-05', price: '$12500', status: 'Active' },
];

// Mock data for students
const students = [
  { id: 1, name: 'Fatima', enrolmentstatus: 'Finished', authorizer: 'Khairunnisa', enrolmentCompletitionDate: '2025-01-15', college: 'ECG' },
  { id: 2, name: 'Sinem', enrolmentstatus: 'Finished', authorizer: 'Khairunnisa', enrolmentCompletitionDate: '2025-01-10', college: 'ECG'},
  { id: 3, name: 'Zeiad', enrolmentstatus: 'Finished', authorizer: 'Khairunnisa', enrolmentCompletitionDate: '2025-01-05', college: 'ECG'},
  { id: 4, name: 'Xavi', enrolmentstatus: 'Waiting', authorizer: 'Khairunnisa', enrolmentCompletitionDate: 'TBD', college: 'ECG'},
  { id: 5, name: 'Jason', enrolmentstatus: 'Waiting', authorizer: 'Khairunnisa', enrolmentCompletitionDate: 'TBD', college: 'ECG' },
];

// Mock data for schools
const schools = [
  { id: 1, name: 'Ujung Raya Primary School', location: 'Ujung Kulon', subscriptionDate: '2023-01-15' },
  { id: 2, name: 'Green Valley School', location: 'Jakarta', subscriptionDate: '2023-02-10' },
  { id: 3, name: 'Mountain View School', location: 'Bandung', subscriptionDate: '2023-03-05' },
  { id: 4, name: 'Sunrise Academy', location: 'Surabaya', subscriptionDate: '2023-04-12' },
  { id: 5, name: 'Harmony High School', location: 'Yogyakarta', subscriptionDate: '2023-05-20' },
  { id: 6, name: 'Bright Future School', location: 'Medan', subscriptionDate: '2023-06-18' },
  { id: 7, name: 'Pioneer Elementary', location: 'Semarang', subscriptionDate: '2023-07-22' },
  { id: 8, name: 'Ocean View School', location: 'Makassar', subscriptionDate: '2023-08-30' },
  { id: 9, name: 'Bali Green School', location: 'Denpasar', subscriptionDate: '2023-09-05' },
  { id: 10, name: 'Sumatra International School', location: 'Palembang', subscriptionDate: '2023-10-10' },
  { id: 11, name: 'Java Creative Academy', location: 'Malang', subscriptionDate: '2023-11-15' },
  { id: 12, name: 'Lombok Learning Center', location: 'Mataram', subscriptionDate: '2023-12-01' },
  { id: 13, name: 'Papua Highlands School', location: 'Jayapura', subscriptionDate: '2024-01-10' },
  { id: 14, name: 'Kalimantan Nature School', location: 'Balikpapan', subscriptionDate: '2024-02-14' },
  { id: 15, name: 'Sulawesi Tech Academy', location: 'Manado', subscriptionDate: '2024-03-20' },
];

// Mock data for total users
const totalUsers = 2500; // Example data (can be dynamic)

// Mock data for total students
const totalStudents = 2100;

// Mock data for user types
const userTypesData = {
  schools: 15, // Example data (can be dynamic)
  communities: 10, // Example data (can be dynamic)
  individualUsers: 5, // Example data (can be dynamic)
};

// Mock data for users (for messaging functionality)
let users = [
  { id: 1, name: 'John', role: 'Developer',    age: 32 },
  { id: 2, name: 'Jane', role: 'Developer',    age: 28 },
  { id: 3, name: 'Zeiad', role: 'Student',     age: 29 },
  { id: 4, name: 'Fatima', role: 'Teacher',    age: 24 },
  { id: 5, name: 'Aliviah', role: 'Coordinator', age: 27 },
  { id: 6, name: 'Xavi', role: 'Intern',       age: 20 },
  { id: 7, name: 'Ahmed', role: 'Designer',    age: 35 },
  { id: 8, name: 'Sinem', role: 'QA Tester',   age: 26 },
  { id: 9, name: 'Admin', role: 'Admin',       age: 33 },
];
// Mock data for messages (for messaging functionality)
let messages = [];

// Mock data to store logs (in-memory for now)
let logs = [];


// API endpoint to get the total number of users
app.get('/api/users/count', (req, res) => {
  res.json({ count: totalUsers }); // Dynamically count schools
});

// API endpoint to get the number of schools subscribed
app.get('/api/schools/count', (req, res) => {
  res.json({ count: schools.length });
});

// API endpoint to get the total number of students
app.get('/api/students/count', (req, res) => {
  res.json({ count: totalStudents });
});

// API endpoint to get user data
app.get('/api/users/data', (req, res) => {
  res.json(users);
});

// API endpoint to get student data
app.get('/api/students/data', (req, res) => {
  res.json(students);
});

// API endpoint to get the list of communities
app.get('/api/communities', (req, res) => {
  res.json(communities);
});

// API endpoint to get the total number of communities
app.get('/api/communities/count', (req, res) => {
  res.json({ count: communities.length });
});

// API endpoint to get the list of schools
app.get('/api/schools', (req, res) => {
  res.json(schools);
});

// API endpoint to get user type proportions
app.get('/api/user-types', (req, res) => {
  res.json(userTypesData);
});

// API endpoint to get subscriptions
app.get('/api/subscriptions', (req, res) => {
  res.json(subscriptions);
});

// API endpoint to get users you've messaged
app.get('/api/messages/users', (req, res) => {
  const searchTerm = req.query.search || ''; // Get search term from query params

  // Find users you've messaged
  const messagedUsers = users.filter((user) =>
    messages.some((message) => message.userId === user.id && message.sender === 'You')
  );

  // Filter messaged users based on search term
  const filteredUsers = messagedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.json(filteredUsers);
});

// API endpoint to get messages for a specific user (for messaging functionality)
app.get('/api/messages/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userMessages = messages.filter((message) => message.userId === userId);
  res.json(userMessages);
});

// API endpoint to send a message (for messaging functionality)
app.post('/api/messages/send', (req, res) => {
  const { userId, text, sender } = req.body;

  if (!userId || !text || !sender) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newMessage = {
    id: messages.length + 1,
    userId,
    text,
    sender,
    timestamp: new Date().toLocaleTimeString(),
  };

  messages.push(newMessage);

  // Simulate a response from the opposite side after 2 seconds
  setTimeout(() => {
    const oppositeMessage = {
      id: messages.length + 1,
      userId,
      text: `You said: "${text}". This is a response from the opposite side.`,
      sender: 'Admin', // Simulate the opposite side
      timestamp: new Date().toLocaleTimeString(),
    };
    messages.push(oppositeMessage);
  }, 2000); // 2 seconds delay

  res.status(201).json(newMessage);
});

// API endpoint to send a message to a new user
app.post('/api/messages/send-to-new-user', (req, res) => {
  const { name, text, sender } = req.body;

  if (!name || !text || !sender) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if the user already exists
  let user = users.find((u) => u.name.toLowerCase() === name.toLowerCase());

  // If user doesn't exist, create a new one
  if (!user) {
    user = {
      id: users.length + 1,
      name: name,
    };
    users.push(user);
  }

  // Add the message to the messages array
  const newMessage = {
    id: messages.length + 1,
    userId: user.id,
    text,
    sender,
    timestamp: new Date().toLocaleTimeString(),
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// API endpoint to delete a message
app.delete('/api/messages/:messageId', (req, res) => {
  const messageId = parseInt(req.params.messageId);

  // Find the index of the message to delete
  const messageIndex = messages.findIndex((message) => message.id === messageId);

  if (messageIndex === -1) {
    return res.status(404).json({ error: 'Message not found' });
  }

  messages.splice(messageIndex, 1);
  res.status(200).json({ success: true });
});

   
// API endpoint to assign role to a user
app.post('/api/users/:userId/assign-role', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ error: 'Missing "role" in request body.' });
  }

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Update the role
  user.role = role;

  // Log the change
  const newLog = {
    id: logs.length + 1,
    message: `User ID ${userId} role changed to "${role}"`,
    timestamp: new Date().toISOString(),
  };
  logs.push(newLog);

  res.json({ success: true, user });
});

// API endpoint to get all logs
app.get('/api/logs', (req, res) => {
  res.json(logs);
});

// API endpoint to create a new log
app.post('/api/logs', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Missing "message" in request body.' });
  }

  const newLog = {
    id: logs.length + 1,
    message,
    timestamp: new Date().toISOString(),
  };
  logs.push(newLog);

  res.status(201).json(newLog);
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
