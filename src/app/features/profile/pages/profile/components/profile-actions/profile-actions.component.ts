import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-actions",
  templateUrl: "./profile-actions.component.html",
  styleUrls: ["./profile-actions.component.scss"],
  imports: [ButtonComponent],
})
export class ProfileActionsComponent {
  private readonly router = inject(Router);

  logout() {
    this.router.navigate(["/login"]);
  }
}
