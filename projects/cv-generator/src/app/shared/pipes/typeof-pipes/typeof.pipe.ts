import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'typeof"'
})
export class TypeofPipe implements PipeTransform{
    transform(value: string | number | object): string{
        return typeof value;
    }
}