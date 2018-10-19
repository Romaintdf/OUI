import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() TaskName: string;
  @Input() TaskStatus: string;
  @Output() NewStatus = new EventEmitter();
  test = '';

  constructor() { }

  onClickOUI() {
    if (this.TaskStatus != "Done") {
      this.TaskStatus = "Done";
    }
    else {
      this.TaskStatus = "ToBeDone";
    }
    this.test = this.TaskStatus;
    this.NewStatus.emit(this.test);
  }

  ngOnInit() {
  }

}
