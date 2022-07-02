# Kanban Board - React

## About the project:
The aim of the project was to create application "Kanban Board" to manage tasks. My "Kanban Board" application has a form to add new tasks and consist with three columns:
* TO DO
* DOING
* DONE

Form features:
* user can add a new task by form
* when a task is added, user will see a confirmation, which disappear after 5 second
* every a new task is added to the first column "TODO"
* the first column has a limit (4 tasks), so if the limit will be achieved, user will see an alert, and a new task will not be added

Columns features:
* user can move tasks between columns using button with arrows
* every column has a limit, if tasks limit will be achieved, user will see an alert, and a task will not be moved
* user can remove task, before removing confirmation will be displaying

To storage a data I have used localStorage. After first rendering, application checking if there are any values in localStorage to loaded, if not, initial values are added to the localStorage.

```
useEffect(()=> {
        const data = window.localStorage.getItem("tasks"); // powtorzenie
        if(data){
            setTasks(JSON.parse(data));
        }
        else setTasks(tasks)
    },[])

```




## How to see it
Please, refer to the screenshots, which are attached below. Moreover, I am working on a form of a video preview as an additional reference guide.

## Technologies:
* JavaScript
* React
* HTML
* CSS
* LocalStorage
* Desktop only version

## Solutions
When creating this project I had an opportunity to practice/learn:
* the "Lifecycle of Components" 
* how and when to use lifecycle methods
* how to work with state, how to update values using this.setState method
* how to use events in React
* why we need to bind event handlers in class and how to ommit it by using plugin and babel transpilator
* controlled vs. uncontrolled components in React
* conditional rendering 

Using fetch method after render component in componentDidMount function
```
 async componentDidMount(){
        try{
            const response = await fetch(`${this.api}`);
            const tasks = await response.json();
            this.setState({tasks})
        }
        catch(error){
            console.error(error.message);
        }
    }
```
Conditional Rendering
```
startStopHandler = item => {
        const {isRunning} = item;
        isRunning ? this.stopHandler(item.id) : this.startHandler(item.id);
    }
```

Taking data from inputs and updating the state
```
changeHandler = e => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }

<input className='task__input' name="task" onChange={this.changeHandler} value={this.state.task} placeholder='Write new task' />
```

While working on this project I have tried to split the code into a small function (Single-responsibility principle).


### Rozwój
* rozbudowa formularza o kolejne pola jak: piorytet

### Project preview
List of tasks
![Project-preview](./gallery/preview.png)

Confirmation before remove task
![Project-preview](./gallery/preview2.png)

### Feel free to contact me:
* [Linkedin](https://www.linkedin.com/in/ewelina-kopacz-929559100/) - Ewelina Kopacz

### Sources:
* [Conditional Rendering](https://pl.reactjs.org/docs/conditional-rendering.html)
* [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Thanks for project and support to Mateusz Bogolubow:
* Mentor i Trener Programowania JavaScript - [DevMentor](https://devmentor.pl/) - Mateusz Bogolubow