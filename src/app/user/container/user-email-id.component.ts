import { Component } from "@angular/core";
import { USER_CONST } from "src/app/constant/user.constant";
import { UserModel } from "src/app/model/data.interface";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: 'user-email',
    templateUrl: 'user-email-id.component.html',
    styleUrls: ['./user-email-id.component.scss']
})
export class UserEmailComponent {
    title='Find User Email By Id';
    userModel: UserModel;
    userId: string | any;
    loading: boolean = false;
    errorMsg: string = '';
    userEmail: string = '';

    constructor(private readonly userService: UserService) {
    }

    onSubmit() {
        this.clearTexts();
        if (this.validateUserId()) {
            this.loading = true;
            this.loadUser(this.userId);
        } else {
            this.errorMsg = USER_CONST.WARNING;
        }
        this.loading = false;
    }

    private loadUser(userId: string) {
        this.userService.getUserById(userId).subscribe(response => {
            if (response) {
                this.userModel = response;
                this.userEmail = this.userModel.data.email;
            } else {
                this.errorMsg = USER_CONST.NOT_FOUND;
            }
        }, (error => {
            this.errorMsg = USER_CONST.ERROR;
        }));
    }

    private validateUserId(): boolean {
        return parseInt(this.userId) > 0 ? true : false;
    }

    private clearTexts() {
        this.errorMsg = '';
        this.userEmail = '';
    }
}

