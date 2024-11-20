# RemindMe

RemindMe is a fully serverless web application designed to help users efficiently manage reminders. The app allows users to create, update, delete, and view reminders with additional functionality like file attachments and scheduled email notifications.

## **Features**
- **User Authentication**: Secure login and signup functionality powered by AWS Cognito.
- **Reminder Management**: 
  - Create reminders with title, description, date, time, and optional file attachments.
  - Update, view, and delete existing reminders.
- **File Attachment**: Upload files directly to Amazon S3 for secure storage.
- **Email Notifications**: Receive automated email reminders with all relevant details using AWS SES at the scheduled time.
- **Serverless Architecture**: Built entirely using AWS services for scalability and cost efficiency.

## **Technologies Used**
- **Frontend**: React.js (hosted with AWS Amplify)
- **Backend**: AWS Lambda, AWS DynamoDB, AWS API Gateway
- **Authentication**: AWS Cognito
- **Storage**: Amazon S3
- **Notifications**: AWS Simple Email Service (SES)

## **Setup and Deployment**
### **Prerequisites**
- AWS account with permissions for Cognito, S3, Lambda, DynamoDB, and SES.
- Node.js installed on your local machine.
- AWS CLI configured for deployment.

### **Installation**
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/remindme.git
   cd remindme
Install dependencies:

      npm install
Deploy the backend using AWS SAM (or any framework used). Make sure to update the environment variables for AWS services.

Start the frontend server:

        npm start
 #**Screenshots**

   ## **Home Page**
   
   ![HomePage1](https://github.com/user-attachments/assets/30ce79fe-020c-4cd4-a049-0c20a90467c4)
   ![HomePage2](https://github.com/user-attachments/assets/1d549427-806c-43ca-81ac-4d80b0e917d5)



  
   ## **Login Page**
   
   ![Login](https://github.com/user-attachments/assets/347f4e5c-9c01-4a62-8671-465ae6982cc1)
   
   ## **Signup Page**
   
   ![Signup](https://github.com/user-attachments/assets/c2f4f460-c2ff-41a3-8046-6f25fcfd178b)

   ## **Verification Page**
   
   ![VarifyPage](https://github.com/user-attachments/assets/3d5b1d79-f47a-4393-80af-37b26eb5820c)

   ## **DashBoard**
   
   ![all_the_Reminder](https://github.com/user-attachments/assets/7bf00f6d-f314-4433-ae83-ff86ab1671f8)
 
   ## **Creat Reminder**
   
   ![creat Reminder](https://github.com/user-attachments/assets/c1dec6ed-6078-491b-aa5e-4081bfecd2bd)


## **Usage**
**Login/Signup**: Users must sign up using their email and password.
**Create Reminder**: Add details like title, description, date, and time, and upload optional file attachments.
**Manage Reminders**: View, update, and delete existing reminders from the dashboard.
**Email Alert**s: Automatically receive an email at the scheduled time.

## **Contributing**
Contributions are welcome! Feel free to submit a pull request or open an issue for any enhancements or bug fixes.

License
This project is licensed under the MIT License.

Contact:
vaghanirutvik777@gmail.com
