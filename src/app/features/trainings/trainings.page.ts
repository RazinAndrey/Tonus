import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardLayoutComponent } from '../../shared/layouts/card-layout/card-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';
import { MarkdownEditorComponent } from '../../shared/widgets/markdown-editor/markdown-editor.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

// Keep the existing key so notes saved on the dashboard remain available.
const DRAFT_STORAGE_KEY = 'tonus-dashboard-note';

@Component({
  selector: 'app-trainings',
  templateUrl: 'trainings.page.html',
  styleUrls: ['trainings.page.scss'],
  imports: [
    PageLayoutComponent,
    CardLayoutComponent,
    MarkdownEditorComponent,
    ButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingsPage {
  readonly draft = signal(localStorage.getItem(DRAFT_STORAGE_KEY) ?? '');

  saveDraft(markdown: string): void {
    this.draft.set(markdown);
    localStorage.setItem(DRAFT_STORAGE_KEY, markdown);
  }
}
