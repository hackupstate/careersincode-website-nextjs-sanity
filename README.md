# Careers in Code - New Website Documentation

## Code Project Setup

1. Run the following command to clone the project:
   ```bash
   git clone https://github.com/AndrewWladis/Careers-In-Code-Site.git
   ```
2. Ensure that the Sanity CLI is installed globally.
3. Run the following commands in the `/studio` folder:
   ```bash
   yarn
   sanity init
   ```
   During Sanity's initialization, reconfigure it using the Careers in Code Sanity Studio credentials when prompted (Type Y and hit enter).
4. Run the following command in the root project folder:
   ```bash
   yarn
   ```
5. Create an `.env.local` file in the project folder and add the following variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_DATASET="production-cic"
   NEXT_PUBLIC_SANITY_PROJECT_ID="z6et1xzs"
   SANITY_API_TOKEN="skgpopu6idmKArNFwBUZAIQd5uDvEpgx5OUMpT2m5ZGt9Aj0ygwu6HFpQPzcejyxUdIix6QCpwIvEkSIO4U5uTgX3SCb0aZdGjsxh1wgINKl7k4uEQPk82HLlxC3ijFWkNqlvqGWkNA9bfHc9uwNAfQJTQ9ErBmZ0jDlY3uyWxaIYzi7x4P9"
   SANITY_STUDIO_PREVIEW_SECRET=""
   ```

## Running on Your Own Device

1. Run the following command in the root project folder to start the front end locally:
   ```bash
   yarn dev
   ```
2. The front end should be running on [http://localhost:3000](http://localhost:3000).
3. Run the following command in the `/studio` folder to start the studio locally:
   ```bash
   yarn dev
   ```

## Editing Site Content on Sanity Studio

1. Login to [Sanity Studio](https://careers-in-code.sanity.studio/studio/desk) using the Careers in Code Sanity Studio credentials.
2. To edit the home page, click **Pages**, then **Home Page**.
3. To edit an error page, click **Pages**, then **Error Page**.
4. To edit any other page, click **Pages**, then **Other Pages**, then select the page you would like to edit.
5. When changing or adding images, ensure the following:
   - For images of Instructors, Students, or Speakers, set the Alternative Text to "Instructor/Student."
   - For images not featuring Instructors, Students, or Speakers, set the Alternative Text to "Company."
6. After making an edit, click the **Publish** button in the bottom right corner to publish those changes.