import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal } from "@angular/core";
import { email, form, FormField, required, submit } from "@angular/forms/signals";
import { Router } from "@angular/router";
import { NotificationService } from "../../../../core/services/notification.service";
import { ProfileService } from "../../services/profile.service";
import { PageLayoutComponent } from "../../../../shared/layouts/page-layout/page-layout.component";
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { InputComponent } from "../../../../shared/ui/input/input.component";
import { TextareaComponent } from "../../../../shared/ui/textarea/textarea.component";
import { SpinnerComponent } from "../../../../shared/ui/spinner/spinner.component";
import { Profile } from "../../models/profile.model";

interface ProfileFormData {
  name: string;
  level: string;
  email: string;
  phone: string;
  about: string;
}

function toFormData(profile: Profile | null): ProfileFormData {
  return {
    name: profile?.name ?? "",
    level: profile?.level ?? "",
    email: profile?.email ?? "",
    phone: profile?.phone ?? "",
    about: profile?.about ?? "",
  };
}

@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.page.html",
  styleUrls: ["./profile-form.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayoutComponent, FormField, ButtonComponent, InputComponent, TextareaComponent, SpinnerComponent],
})
export class ProfileFormPage {
  private readonly profileService = inject(ProfileService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  protected readonly profile = this.profileService.profile;
  protected readonly loading = this.profileService.loading;
  protected readonly loadError = this.profileService.loadError;

  private readonly formModel = linkedSignal(() => toFormData(this.profile()));
  readonly profileForm = form(this.formModel, (fieldPath) => {
    required(fieldPath.name, { message: "Введите имя" });
    required(fieldPath.email, { message: "Введите электронную почту" });
    email(fieldPath.email, { message: "Некорректная электронная почта" });
  });

  readonly nameError = computed(() => {
    const field = this.profileForm.name();
    return field.touched() && field.invalid()
      ? field
          .errors()
          .map((error) => error.message ?? "")
          .join(". ")
      : "";
  });
  readonly emailError = computed(() => {
    const field = this.profileForm.email();
    return field.touched() && field.invalid()
      ? field
          .errors()
          .map((error) => error.message ?? "")
          .join(". ")
      : "";
  });

  ionViewWillEnter(): void {
    const profile = this.profile();
    if (profile) {
      this.profileForm().reset(toFormData(profile));
    } else {
      void this.profileService.loadProfile();
    }
  }

  protected reload(): void {
    void this.profileService.loadProfile();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.profileForm().submitting()) return;

    void submit(this.profileForm, async () => {
      try {
        await this.profileService.updateProfile(this.formModel());
      } catch {
        await this.notifications.error("Не удалось сохранить профиль. Попробуйте ещё раз.");
        return;
      }

      await this.notifications.success("Профиль сохранён");
      await this.router.navigateByUrl("/profile");
    });
  }
}
