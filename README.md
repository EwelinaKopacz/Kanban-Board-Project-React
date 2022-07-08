# Kanban Board - React

## Table of Contents
1. [About the project](#about-the-project)
2. [How to see it](#how-to-see-it)
3. [Technologies](#technologies)
4. [Solutions](#solutions)
5. [Development](#development)
6. [Project preview](#project-preview)
7. [Contact](#feel-free-to-contact-me)
8. [Sources](#sources)
9. [Thanks](#thanks-for-project-and-support-to-Mateusz-Bogolubow)

## About the project
The aim of the project was to create application "Kanban Board" to manage tasks. Application has a feature, which allowes to add new tasks by using a form to add new tasks and it is consisted with three columns:
* TO DO
* DOING
* DONE

####  Form features:
* user can add a new task by using a form
* when a task is added, user will see a confirmation of it, which disappears after 5 seconds
* every a new task is added to the first column "TODO"
* the first column has a limit of 4 tasks, so if the limit will be exhausted, a user will see an alert, and a new task will not be added

#### Columns features:
* a user can move tasks between columns using buttons with arrows
* every column has a limit of tasks, if tasks limit will be exhausted, user will see an alert, and a task will not be moved
* a user can remove a task, and confirmation alert will be dispplayed to proceed with it or not 

I have used localStorage to store a data. After first rendering, application checks if there are any values in localStorage to loaded, if not, initial values are added to the localStorage.

```
useEffect(()=> {
        const data = window.localStorage.getItem("tasks");
        if(data){
            setTasks(JSON.parse(data));
        }
    },[])

```

Informations about default tasks (loaded when localStorage is empty) and columns are storaged in json file, so it is easy to manage it, such as change the value for example task limit in column or name of the column.

```
columns.json

[
    {
        "id":1,
        "columnName":"to do",
        "limit": 4,
        "class":"todo",
        "classIcon":"fa-solid fa-trowel"
    },

...
]
```

#### The application consists with 9 components:
1. ```<App/>``` - the main component, there is a state, functions, which are transferred to the children components via Context API.
2. ```<Board/>``` - the component which renders a form and columns
3. ```<Columns/>``` - the component which renders ```<ColumnsItem/>``` and ```<Task/>``` components
4. ```<Form/>``` - the component which render a form
5. ```<Confirmation/>``` - the component which confirms when a task was added
6. ```<ConfirmDeleteTask>``` - component which renders a pop up when user want to remove a task
7. ```<Alert>``` - the component which render an alert when the limit in columns was exhausted

## How to see it
I have prepared a short video, to show how my application works. Please click the link below. You can check the screenshots, which are attached below, as well.
* [Kanban Board - React | Ewelina Kopacz](https://www.awesomescreenshot.com/video/9768573?key=a13cc2551935f5b52d5250828a2df5aa
)

## Technologies:
* JavaScript
* React
* HTML
* CSS
* Desktop only version

## Solutions
When creating this project I had an opportunity :
* to learn what is it Context API - and how to use: ```<Provider/>``` and ```<Consumer/>```
* to learn what is it "props drilling" and how to avoid it
* to meet and use hooks such as:
    * useState()
    * useEffect()
    * useContext()
    * useCustom()
* to write a code with ESLint

### Development
I am going to develop application by adding additional functionalities such as:
* development a form: adding more fields like:
    * priority
    * deadline

### Project preview
Kanban Board
![Project-preview](./preview/preview1.png)

Alert
![Project-preview](./preview/preview2.png)

### Feel free to contact me:
* [Linkedin](https://www.linkedin.com/in/ewelina-kopacz-929559100/) - Ewelina Kopacz

### Sources:
* [Using localStorage with React Hooks](https://blog.logrocket.com/using-localstorage-react-hooks/)
* [Hooki React – useContext tutorial](https://love-coding.pl/hooki-react-usecontext-tutorial/)
* [Passing Data Between React Components — Parent, Children, Siblings](https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf)

### Thanks for project and support to Mateusz Bogolubow:
* Mentor i Trener Programowania JavaScript - [DevMentor](https://devmentor.pl/) - Mateusz Bogolubow