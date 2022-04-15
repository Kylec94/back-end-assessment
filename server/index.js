const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {deleteFortune, createFortune, updateFortune} = require('./controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = [
    "You won't die the next time you fall", "Feel fortunate enough to have even eaten this cookie", "You won't always lose", "You win. Yes you actually did this is not a joke. What did you win? Click the fotune button again.", "You lose. Sorry, I can't always give you good news. If you got this fortune after the winning fortune, then there's no hope for you."
  ]

  let index = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[index]

  res.status(200).send(randomFortune)
})

app.delete('/api/fortune/:id', deleteFortune)
app.post('/api/fortunes', createFortune)
app.put('/api/fortunes/:id', updateFortune)


app.listen(4000, () => console.log("Server running on 4000"));
