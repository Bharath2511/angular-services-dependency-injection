import { Component } from "@angular/core";
import { LoggingService } from "src/app/logging.service";
import { AccountsService } from "src/app/accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private LoggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.LoggingService.logStatusChange(accountStatus);
  }
}
