## Instructions

Begin by cloning this project with 'git clone https://github.com/13illydakid/api-design.git'

1. Install dependencies by running npm install using the package.json file
      ```bash
      npm install
      ```

2. Create a .env file based on your environments.

   This file should include:
   * A secret key for your app
   * Database configuration, including the database name, username, password, and host.
   * You can run the sequelize commands to migrate the database and seed data by running the following commands:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
3. You can start the application by running the following command:

   ```bash
   Copy code
   npm start
   ```
   Note: If you want to run the application in development mode, you can use the command npm run start:development. Similarly, to run the application in production mode, use the command npm run start:production.

4. In order to run the React App, run the following commands

	```bash
	cd react-app
	```

	```bash
	npm install
	```

	```bash
	npm start
	```
