import { Component } from "@angular/core";

@Component({
    selector: 'unmatched-string',
    templateUrl: 'unmatched-string.component.html',
    styleUrls: ['./unmatched-string.component.scss']
})
export class UnmatchedStringComponent {
    title='Find Unmatched String';
    input1: string = '';
    input2: string = '';
    unmatchedInput1: string = '';
    unmatchedInput2: string = '';
    msg: string = '';

    onSubmit() {
        this.clearOutput();
        if (this.validateInput() && !this.isSame()) {
            this.findUnMatchString(this.input1, this.input2, 1);
            this.findUnMatchString(this.input2, this.input1, 2);
        } else {
            this.msg = 'No Unmatched Strings Found!!';
        }
    }

    private findUnMatchString(inputA, inputB, order: number) {
        for (let i in inputA) {
            if (!inputB.includes(inputA[i])) {
                order == 1 ? this.unmatchedInput1 += inputA[i] : this.unmatchedInput2 += inputA[i];
            }
        }
    }

    private clearOutput() {
        this.msg = '';
        this.unmatchedInput1 = '';
        this.unmatchedInput2 = '';
    }

    private validateInput(): boolean {
        return this.input1 || this.input2 ? true : false;
    }

    private isSame(): boolean {
        return this.input1 === this.input2 ? true : false;
    }

}

