import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  // const ID = todo.ID;
  // const title = todo.Title;
  // const finished = todo.finished;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(todo);

  // console.log(`
  // todo is ${JSON.stringify(todo)}`);

  // console.log(`
  // The Todo with ID: ${id}
  // Has a title of: ${title}
  // Is it finished? ${completed}
  // `);

  // logTodo(id, completed, title);

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};
