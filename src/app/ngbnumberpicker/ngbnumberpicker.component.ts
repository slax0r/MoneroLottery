import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-ngbnumberpicker',
  templateUrl: './ngbnumberpicker.component.html',
  styleUrls: ['./ngbnumberpicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgbNumberpickerComponent),
      multi: true
    }
  ]
})

export class NgbNumberpickerComponent implements OnInit, ControlValueAccessor {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() precision: number;
  @Input() inputDisabled: boolean;
  @Output() onChange: EventEmitter<Number> = new EventEmitter();

  numberPicker: FormControl;
  pattern: any;

  constructor() {
    if (this.inputDisabled == null) {
      this.inputDisabled = false;
    }
    if (this.min == null) {
      this.min = 0;
    }
    if (this.max == null) {
      this.max = 100;
    }
    if (this.precision == null) {
      this.precision = 1;
    }
    if (this.step == null) {
      this.step = 1;
    }

    this.numberPicker = new FormControl({value: this.min, disabled: this.inputDisabled});
    this.numberPicker.registerOnChange(() => {
      this.onChange.emit(this.numberPicker.value);
    });
  }

  increaseValue(): void {
    let currentValue = this.numberPicker.value;
    if (currentValue < this.max) {
      currentValue = currentValue + this.step;
      if (this.precision != null) {
        currentValue = this.round(currentValue, this.precision);
      }
      this.numberPicker.setValue(currentValue);
    }
  }

  decreaseValue(): void {
    let currentValue = this.numberPicker.value;
    if (currentValue > this.min) {
      currentValue = currentValue - this.step;
      if (this.precision != null) {
        currentValue = this.round(currentValue, this.precision);
      }
      this.numberPicker.setValue(currentValue);
    }
  }

  private round(value: number, precision: number): number {
    const multiplier: number = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  public getValue(): number {
    return this.numberPicker.value;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  ngOnInit(): void {
  }
}
