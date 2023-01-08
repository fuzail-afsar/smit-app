const prodConfig = {
  // apiKey           : "YOUR_API_KEY",
  // authDomain       : "your-app.firebaseapp.com",
  // databaseURL      : "https://your-app.firebaseio.com",
  // projectId        : "your-app",
  // storageBucket    : "your-app.appspot.com",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
  apiKey: "AIzaSyAhemkIjW5X35TuLZLAKKRTtDoWNF7VRmM",
  authDomain: "smit-app-536ef.firebaseapp.com",
  //   databaseURL: "https://your-app.firebaseio.com",
  projectId: "smit-app-536ef",
  storageBucket: "smit-app-536ef.appspot.com",
  messagingSenderId: "289814193919",
  appId: "1:289814193919:web:9c64d7462c7c5ccc904eca",
};

export default process.env.NODE_ENV === "production" ? prodConfig : devConfig;
