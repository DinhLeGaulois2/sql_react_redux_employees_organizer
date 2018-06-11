# Employees Organizer

# [Project will be upgraded: Authentication will be set up for SERVER, DATABASE and UI to protect every "route" that need protection]

## Aim
Building a project based on an EER (Enhanced Entity-Relationship). The goal is to learn to build project base on someone's idea, which is much more difficult than with ours.

> This project is one of about 30-35 others building by mixing:
>   * Front-End: **jQuery**, **ReactJS**, **React-Redux**, **Angular** (2-5), **Ionic3**, **View.js**
>   * Back-End: 5 APIs (2 with **MongoDB** and 3 with **SQL**)
> 
> These are **3-tier Architecture** projects. Everything is started (almost) from scratch (the diagrams for the databases come from the Internet - with link to to source on each picture - with errors which were fixed)
>
> The **Front-End** are NOT the most beautiful because not much work on it. The goal is to use very different technologies on very different purposes.

---

## Technologies
> * **Security**: **JWT-simple**, **bcrypt-nodejs**, **passport** (**passport-jwt**, **passport-local**)
> * **Front End**: ***React-Redux***
> * **Back End**: ***Express/Node.js*** + ***Sequelize*** (ORM)
> * **Database**: ***mySQL***

## Enhanced Entity-Relationship

![alt text](client/assets/img/SampleEmployees.jpg)

---

## User Interfaces
### Add New Employee

![alt text](client/assets/img/addEmployee.jpg)

### Display All Departments

![alt text](client/assets/img/display_dpts.jpg)

### Display All Employees

![alt text](client/assets/img/display_empls.jpg)

---


## Execution

> 1 - Create a database name '**courses_organizer**' (enter the password of **YOUR** database. Instruction in this file [here](https://github.com/DinhLeGaulois2/sql_react_redux_employees_organizer/blob/master/server/models/index.js)).<br/>
> 2 - Execute (on the application's **root** folder): **npm install** (to install **dependencies**)<br/>
> 3 - Execute (on the application's **root** folder): **npm run build** (to run the **server**)<br/>
> 4 - Open your web browser (***Firefox***, ***Chrome***, etc.) then, enter: **localhost:3000**<br/>


---


## Configuration (VERY IMPORTANT)

At the project's root folder, we have a file name [**server.js**](https://github.com/DinhLeGaulois2/sql_react_redux_employees_organizer/blob/master/server.js), by the end, we have:

![alt text](client/assets/img/server_config.jpg)

It's very important to follow the instruction, otherwise, you could have very disappointed surprises ...

---------------

## Author
* Dinh HUYNH - All Rights Reserved!
* dinh.hu19@yahoo.com