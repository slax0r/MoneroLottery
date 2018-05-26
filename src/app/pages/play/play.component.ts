import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
  title = 'play';
  angularForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
