import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeParameters'
})
export class PipeParameters implements PipeTransform {
    public transform(value: any[], dno: number): any[] {
        const output: any[] = [];
        for ( let i = 0; i < value.length; i++) {
            if (value[i].deptno ==  dno) {
                output.push(value[i]);
            }
        }
        return output;
    }
}

