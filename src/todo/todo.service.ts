import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  findMany() {
    return this.todoRepository.find();
  }

  async update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne( { where: { id }} );

    Object.assign(todo, dto);

    //this.todoRepository.save(todo);

    return await this.todoRepository.save(todo);
  }
}
