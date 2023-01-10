import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

    constructor(
        @InjectRepository(Todo) private todoRepository: Repository<Todo>,
        ) {}

    findAll(): Promise<Todo[]> {
        this.logger.log(`Retrieve all todo`);
        return this.todoRepository.find();
    }

    findOne(id: number): Promise<Todo> {
        this.logger.log(`This action returns a #${id} todo`);
        return this.todoRepository.findOneBy({ id });
    }

    create(createTodoDto: CreateTodoDto): Promise<Todo> {
        this.logger.log('This action adds a new todo');
        const todo = new Todo();
        todo.text = createTodoDto.text;
        todo.status = createTodoDto.status;
        return this.todoRepository.save(todo);
    }

    update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        this.logger.log(`This action updates a #${id} todo`);
        const todo = new Todo();
        todo.id = id;
        todo.text = updateTodoDto.text;
        todo.status = updateTodoDto.status;
        return this.todoRepository.save(todo);
    }

    remove(id: number) {
        this.logger.log(`This action removes a #${id} todo`);
        this.todoRepository.delete(id);
    }
}
