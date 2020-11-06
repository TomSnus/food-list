import { Category } from './food.category';

export class Food{
    constructor(public name: string, public date: Date, public category: Category, public imageUrl: string) {}

    getExpDays(){
        return new Date(this.date).toISOString
    }
}