import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'rangepipe'
})
export class RangePipesssssComponent implements PipeTransform {
    public transform ( value: any[] , min: number, max: number ): any[] {
        const output: any[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i].sal >= min && value[i].sal <= max ) {
                output.push(value[i]);
            }
        }
        return output;
    }

}
