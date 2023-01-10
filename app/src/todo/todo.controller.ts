require('dotenv').config()
import { Logger, Req, ParseIntPipe, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Request } from 'express';

// const port = process.env.PORT;

@Controller('todo')
export class TodoController {
    private readonly logger = new Logger(TodoController.name);

    constructor(private readonly todoService: TodoService) {}

    @Get()
    async findAll(
        @Req() request: Request
        )
    {
        this.logger.log('findAll()', JSON.stringify(request.query));
        return this.todoService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: string
        )
    {
        this.logger.log('findOne()', id);
        return this.todoService.findOne(+id);
    }

    @Post('create')
    create(
        @Body() createTodoDto: CreateTodoDto
        )
    {
        this.logger.log('create()', JSON.stringify(createTodoDto));
        return this.todoService.create(createTodoDto);
    }

    @Patch('update/:id')
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateTodoDto: UpdateTodoDto
        )
    {
        this.logger.log('update()', id, JSON.stringify(updateTodoDto));
        return this.todoService.update(+id, updateTodoDto);
    }

    @Delete('delete/:id')
    remove(
        @Param('id', ParseIntPipe) id: string
        )
    {
        this.logger.log('remove()', id);
        return this.todoService.remove(+id);
    }

// @All(), @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head()
}


