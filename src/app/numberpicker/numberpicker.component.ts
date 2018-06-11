import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-numberpicker',
  templateUrl: './numberpicker.component.html',
  styleUrls: ['./numberpicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberpickerComponent),
      multi: true
    }
  ]
})
export class NumberpickerComponent implements OnInit, ControlValueAccessor {

  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() precision: number;
  @Input() isDisabled: boolean;
  @Output() onChange: (currentValue: number) => {};

  currentValue: number;

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: (currentValue: number) => number): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: any): void {
  }


  increaseValue(): void {
    let currentValue = this.currentValue;
    if (currentValue < this.max) {
      currentValue = currentValue + this.step;
      if (this.precision != null) {
        currentValue = this.round(currentValue, this.precision);
      }
      // this.numberPicker.setValue(currentValue);
      this.currentValue = currentValue;
    }
  }

  decreaseValue(): void {
    let currentValue = this.currentValue;
    if (currentValue > this.min) {
      currentValue = currentValue - this.step;
      if (this.precision != null) {
        currentValue = this.round(currentValue, this.precision);
      }
      this.currentValue = currentValue;
    }
  }

  private round(value: number, precision: number): number {
    const multiplier: number = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}
