

# EcoBots: Your AI Recycling Companion

An AI full-stack application utilizing React, Node.js, Express.js, YOLOv8 model, and the Hugging Face API. This application aims to provide users with an interface to identify the value of their individual recycling habits and impact. Users can upload a picture of their recyclable item to have it identified by our AI model as well as given summary findings of the impact they will have to the environment for recycling the item.

The frontend is built with React, while the backend utilizes Node.js and Express.js. The application is hosted on Vercel for the frontend and Heroku for the backend.

**A live frontend can be found [here](https://ecobots.vercel.app/)**

**A live backend has been deployed to Heroku**

**A Demo video of the app can be found [here](https://www.veed.io/view/3bd6139a-fbc3-489b-8b9a-05b038943096?panel=share)**

**A copy of our presentation deck can be found [here](https://docs.google.com/presentation/d/1Ib7NzBV7Tey3bO-iGzwfbM_2XMVUgBhw-VDi8QtuXKM/edit?usp=sharing)**
#

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGg2YzNoeTZoODdhZThjYXd2ZHN1MnFmczJwYjdvMGF1bjZ5b2llcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehjauxt83AbfFDNxrx/giphy.gif" width="600" height="300" />
</p>

#
## Project Development

### Technologies
* React
* NodeJS
* ExpressJS
* Python + Jupyter Notebooks
* YOLOv8 Training Model
* Hugging Face API


### Development Tools
* Visual Studio
* Git and GitHub
* Jupyter Notebooks
* Hugging Face
* Roboflow
* NPM
* Vercel + Heroku

### Development Phases and Links
* [Miro Whiteboard Planning](https://miro.com/app/board/uXjVMxqjX5o=/?share_link_id=806109161243)
* [Frontend Wireframe](https://www.figma.com/file/SeYMvbFpdk7kfnWOmHrBFh/EcoBot-Sketching?type=design&node-id=0%3A1&mode=design&t=rdgumE2BkMeB40SD-1)
* [Frontend Prototype](https://drive.google.com/file/d/1ic8-e4ffWkdRoc9LqpmIO9ZM-W0Fd8aX/view?usp=drive_link)
* [Demo Video](https://www.veed.io/view/3bd6139a-fbc3-489b-8b9a-05b038943096?panel=share)

## 🤖 AI Model Development

### Overview
Our AI model is designed to leverage the power of computer vision to recognize recyclables and provide insights into the materials they're made of and their impact on the environment. We've employed state-of-the-art technologies and platforms for an efficient and transparent development workflow.

###  Model Architecture: YOLOv8 by Ultralytics

**YOLO (You Only Look Once)** is a real-time object detection system that's incredibly efficient and accurate. We chose the latest iteration, **YOLOv8**, for our project due to its remarkable performance and the strong support from the Ultralytics team.

- **GitHub Repository:** [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- **Features:**
  - Efficient object detection with minimal computational cost.
  - Advanced techniques to minimize false positives and increase accuracy.
  - Seamless integration with PyTorch.

###  Data Storage and Handling: Roboflow

Our dataset, crucial to the training of our model, is stored in **Roboflow**. Roboflow offers a streamlined platform for storing, versioning, and augmenting datasets, ensuring our data remains consistent and easily accessible for training.

- **Features of Using Roboflow:**
  - Seamless dataset versioning.
  - A plethora of augmentation techniques to enrich our data.
  - Easy integration with popular ML frameworks.

### Training Environment: Jupyter Notebooks

For the model training process, we utilized **Jupyter Notebooks**. These interactive computational environments allowed us to:

- Write and execute Python code interactively.
- Visualize the training process and metrics in real-time.
- Tweak hyperparameters on-the-fly and observe their impact.
- Document our training process step-by-step for full transparency and reproducibility.

### Model Deployment: Hugging Face

Once our model was trained and optimized, we deployed it using the **Hugging Face** platform. Renowned for its vast collection of pre-trained models and user-friendly deployment solutions, Hugging Face allowed us to:

- [Share our model with the community.](https://huggingface.co/spaces/Haha777/Ecobots-predict-text/tree/main)
- Ensure easy integration with different platforms and services.
- Benefit from the platform's scalability and performance optimizations.


## Functionality

### EcoBots Recycling Assistant

  * Image Recognition for Recyclables: Users can upload images of objects, and the AI model identifies whether the objects are recyclable.

  * Informative Dashboard:
     * Recycling Instructions: Once an object is identified, the platform provides guidance on how to properly recycle it.
     * Resource Impact: Displays the resources used to create the object and the potential savings from recycling.
     * Environmental Contribution: Shows the positive environmental impact of recycling the object, emphasizing sustainability.
  * Interactive Chat Interface:
      * Users can engage in a chat-like interface, similar to ChatGPT, where they can ask questions and receive automated responses.
      * The chat interface also displays the results and feedback from the AI after image analysis, as well as navigation for a more detailed summary of their findings.

## What we learned

 **Full-Stack Development** 

  * Learned how to develop a full-stack application, working on both the backend and frontend. 
  The backend was developed using Node.js, while the frontend was developed using React.

**AI Model Development**
  * Applied theoretical understanding of machine learning models to develop practical AI solutions during the Create-a-thon event, including data preprocessing, model selection, training, and evaluation.
  * Trained ad deployed YOLOv8 model with an accuracy of 85.7% on a customized dataset from Roboflow Universe.
  * Participated in a diverse team to architect and implement machine learning solutions, employing Python, TensorFlow, and Scikit-Learn to solve complex real-world problems.
  *  Navigated complex ML problems by leveraging mentor support, demonstrating problem-solving skills, and efficiently learning new concepts in an independent, remote environment.

  **API Integration**

  * Learned how to integrate the hugging face API to fetch real-time data from our AI model, handle asynchronous operations, and manage responses and errors.


  **Data Formatting**

  * Learned to manage and format data effectively for display on the frontend.

  
 **Server-Client Communication** 

  * Developed an understanding of how the client and server communicate, using various HTTP methods.
  
  
 **Error Handling and Debugging** 
  
  * Throughout the project, faced and resolved numerous errors, which improved our debugging skills and understanding of error handling.
  
  
 **Asynchronous JavaScript** 
  
  * Used asynchronous JavaScript (async/await) to handle asynchronous operations, gaining a deeper understanding of promises and asynchronous execution in JavaScript.
  
 **Deployment and Environment Management** 

  * Learned how to deploy your applications on Heroku and Vercel, and manage different environments for development, testing, and production.
  
  
  
 **Version Control with Git** 
   
  * Learned to manage changes in our project, especially in a group settings with merge conflicts.

## This project was submitted as part of the [SureStart](https://mysurestart.com/) x [MIT | Raise](https://raise.mit.edu/) Futuremakers Create-a-thon
  * Mentor & Project Lead: Shwetha Tinniun Raju
  * Team: Jesse Perez, Hazel Zhou, Averi Luo and Kwasi Debrah-Pinamang
  * Roles and Participation (In order of contribution)
      * Project/Product Management: Shwetha, Jesse, Hazel, Kwasi
      * Application Development: Jesse, Hazel
      * AI Model Development: Hazel, Jesse, Kwasi
      * Event Presentation Deck: Averi, Jesse, Hazel, Kwasi
 
