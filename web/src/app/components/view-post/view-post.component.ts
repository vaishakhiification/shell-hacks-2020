import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  modalOptions: NgbModalOptions;
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    //   this.bookAppointment();
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}