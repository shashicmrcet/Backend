require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "shashicmrcet",
  "id": 77869878,
  "node_id": "MDQ6VXNlcjc3ODY5ODc4",
  "avatar_url": "https://avatars.githubusercontent.com/u/77869878?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shashicmrcet",
  "html_url": "https://github.com/shashicmrcet",
  "followers_url": "https://api.github.com/users/shashicmrcet/followers",
  "following_url": "https://api.github.com/users/shashicmrcet/following{/other_user}",
  "gists_url": "https://api.github.com/users/shashicmrcet/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shashicmrcet/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shashicmrcet/subscriptions",
  "organizations_url": "https://api.github.com/users/shashicmrcet/orgs",
  "repos_url": "https://api.github.com/users/shashicmrcet/repos",
  "events_url": "https://api.github.com/users/shashicmrcet/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shashicmrcet/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-01-23T03:40:50Z",
  "updated_at": "2023-05-14T05:07:02Z"
}

//use to listen on port 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//listen port on 3000/login
app.get('/login', (req, res) => {
    res.send('<h1>please login in this</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

//to get in production we need to change port to process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})