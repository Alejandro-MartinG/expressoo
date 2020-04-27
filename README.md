## Objetive
This project is oriented to grow my personal knowledge about JS envs and techs

## Install
Clone this repository, setup the `.env` file variables and run:

```
npm install
```


## Launch API
```
docker-compose up
npm run dev
```


## API Routes
* `HTTP POST /users` — Register users.
* `HTTP POST /users/login` — Allow users to login.
* `HTTP GET /users/me` — Get user profile.
* `HTTP POST /users/logout` — Logout the user.
* `HTTP POST /users/logoutall` — Logout from all devices.
* `HTTP GET /docs` — Routes documentation powered by Swagger.

## Others
[Swagger editor](https://editor.swagger.io/)

## TODO
* Testing with Jest