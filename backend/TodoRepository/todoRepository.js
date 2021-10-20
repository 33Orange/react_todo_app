import Todo from '../models/todo.js';

class TodosRepository {
  getAll() {
    return Todo.find();
  }
  create(todo) {
    return Todo.create(todo);
  }
  update(todo) {
    return Todo.findByIdAndUpdate(todo._id, todo, { new: true });
  }
  delete(id) {
    return Todo.findByIdAndDelete(id);
  }
  async deleteCompleted() {
    await Todo.deleteMany({ isDone: true });
    return Todo.find();
  }
  async toggleStatus(before, after) {
    await Todo.updateMany({ isDone: before }, { isDone: after });
    return Todo.find();
  }
}

export default new TodosRepository();
