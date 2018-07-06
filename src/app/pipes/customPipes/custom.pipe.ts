import { Component } from '@angular/core';
import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'enentPipe'
})
export class EventPipe implements PipeTransform {
    public transform(value: number[]): number[] {
        const output: number[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i] % 2 === 0) {
                output.push(value[i]);
            }
        }
        return output;
    }
}
