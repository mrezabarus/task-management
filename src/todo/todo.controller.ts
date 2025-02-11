import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }


  @Get()
  findMany(){
    return this.todoService.findMany();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
    return this.todoService.update(id, dto);
  }
}
