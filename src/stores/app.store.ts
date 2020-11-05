import { observable, action, makeObservable } from "mobx";
import { TodoListStore } from "./TodoList";
import { ITodoItem } from "./TodoItem";

export default class AppStore {
  public todoList = new TodoListStore();
  public newTodo: ITodoItem = {
    id: Date.now().toString(),
    name: "",
    completed: false,
  };

  constructor() {
    makeObservable(this, {
      newTodo: observable,
      addTodo: action,
      changeTodo: action,
    });
  }

  public changeTodo = (value: string): void => {
    this.newTodo.name = value;
  };

  public addTodo = (): void => {
    this.todoList.addTodo(this.newTodo);
  };
}
