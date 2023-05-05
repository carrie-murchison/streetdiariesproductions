# Street Diaries Productions

An eCommerce website that sells t-shirts and hats.

## Getting Started

### Prerequisites

- Node.js 14 or later
- MongoDB 4.2 or later

### Installing

1. Clone the repository  

git clone https://github.com/username/streetdiariesproductions.git
cd streetdiariesproductions


2. Install dependencies


npm install


3. Set the environment variables

export MONGODB_URI=<your-mongodb-uri>
export PORT=3000
  
4. Start the server
  
npm start


## Deployment

### Heroku

1. Create a new app on Heroku

2. Set the environment variables

  heroku config:set MONGODB_URI=<your-mongodb-uri>
heroku config:set PORT=3000
  

3. Deploy the app

git push heroku main
  

### AWS Elastic Beanstalk

1. Build the app

npm run build

2. Initialize Elastic Beanstalk

eb init

3. Create a new environment
  
eb create streetdiariesproductions-prod

4. Deploy the app

eb deploy


## Built With

- Node.js
- Express
- MongoDB

## Authors

- Carrie Murchison - Initial work

## License

This project is licensed under the MIT License - see the LICENSE file for details.




