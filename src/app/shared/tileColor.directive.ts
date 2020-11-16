import { ElementRef, Input, Renderer2 } from '@angular/core';
import { Directive, OnInit } from '@angular/core';
@Directive({
    selector: '[appTileColor]'
})
export class TileColorDirective implements OnInit {
    @Input() expDays: number;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
          //set color of the tile based on expiration date
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.getColor());
    }

    getColor(){
        var color='white';
        if(this.expDays <= 5){
            color='lightcoral';
        }else if(this.expDays < 15 && this.expDays > 5){
            color = 'yellow'
        }else if(this.expDays >= 15) {
            color = 'greenyellow';
        }
        return color;
    }
}
