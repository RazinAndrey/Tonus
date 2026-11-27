import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";
import { Router } from "@angular/router";
import { TranslatePipe } from "../../../../../../core/i18n/translate.pipe";

@Component({
  selector: "app-profile-actions",
  templateUrl: "./profile-actions.component.html",
  styleUrls: ["./profile-actions.component.scss"],
  imports: [ButtonComponent, TranslatePipe],
})
export class ProfileActionsComponent {
  private readonly router = inject(Router);

  logout() {
    this.router.navigate(["/login"]);
  }
}
