## React Fasting App

React Fasting App is a web application designed to help users track their health and fitness progress. This app provides a variety of features to help users manage their fasting journey and maintain a healthy lifestyle.

### Features

1. **Quiz Page:** The app starts with a quiz that guides users through a series of questions with different variants. This information is essential for tailoring the fasting and health recommendations provided by the app.

2. **Redux Toolkit Slices:** The app leverages Redux Toolkit slices for efficient state management, ensuring structured and organized data handling across various components and pages.

3. **Height and Weight Pages:** Users can input their height and weight, and the app offers a switcher to toggle between metric and imperial units, enabling users to calculate their Body Mass Index (BMI) easily.

4. **BMI Results Page:** Based on the height, weight, and other user-provided information, the app calculates the user's BMI and classifies it into one of four categories: UNDERWEIGHT, NORMAL, OVERWEIGHT, or OBESE. Additionally, it provides detailed descriptions for each BMI category.

5. **Testimonials:** The app now includes a Testimonials component that showcases feedback from satisfied users who have successfully achieved their health goals using the React Fasting App.

6. **Loader:** Introducing a Loader component that displays a loading animation, providing a visually appealing transition between different sections of the app.

7. **Progress Bars:** The app features a progress bar that dynamically reflects the user's BMI category. This allows users to monitor their health progress at a glance.

8. **Routing and Communication:** The app includes routing for all pages, allowing users to navigate seamlessly between the quiz, question variants, height and weight input, and results page. It also implements communication between components to provide a smooth and interactive user experience.

9. **Navigation:** Users can move between 13 different pages in the app, including the quiz, question variants, height and weight input, and results page. The app includes a "Step Back" button component that makes it easy for users to return to the previous step in the process.ncludes a "Step Back" button component that makes it easy for users to return to the previous step in the process.

10. **Email:** The app introduces an Email component that enables users to save their data to the backend API. It includes frontend and backend validation to ensure data accuracy.

11. **Offer:** A new Offer component allows users to choose from three available plans.

12. **Checkout:** The app now includes a Checkout component that simulates payment, performs form validation, and sends data to the backend server using the /submit-checkout endpoint.

### Usage

To use this app, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/njordulv/React-Fasting-App.git`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and navigate to http://localhost:3000 to access the app.

### Future Enhancements

This project is actively maintained and open to further improvements. Some possible future enhancements include:

- Additional questions and quiz variants to gather more comprehensive user data.
- Integration with a user account system to save and track progress over time.
- Enhanced data visualization and analysis to provide more personalized health recommendations.

### Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature or bug fix"`
4. Push your changes to your fork: `git push origin feature/your-feature-name`
5. Create a pull request on the original repository's main branch.

### License

This project is licensed under the MIT License.
See the [MIT License](LICENSE) file for more details.

### Credits

- Created by Njordr
- This project was created with [Create React App](https://create-react-app.dev/).
