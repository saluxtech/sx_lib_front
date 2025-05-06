import { Injectable, TemplateRef } from "@angular/core";
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SideModalService {

    constructor(private offCanvas: NgbOffcanvas) {}

    showSideBar(content: TemplateRef<Element>, panelClass: string, data?: any): NgbOffcanvasRef {
        return this.offCanvas.open(content, {
          position: 'end',
          panelClass,
        });
    }

    closeSideBar() {
      return this.offCanvas.dismiss();
    }
}