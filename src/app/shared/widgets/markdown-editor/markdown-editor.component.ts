import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SecurityContext,
  ViewChild,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import EasyMDE from 'easymde';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  imports: [TranslatePipe],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownEditorComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('textarea', { static: true }) private textarea!: ElementRef<HTMLTextAreaElement>;

  private readonly sanitizer = inject(DomSanitizer);
  private readonly languageService = inject(LanguageService);
  private editor?: EasyMDE;

  constructor() {
    effect(() => {
      const placeholder = this.languageService.translate('editor.placeholder');
      this.editor?.codemirror.setOption('placeholder', placeholder);
    });
  }

  ngAfterViewInit(): void {
    const editor = new EasyMDE({
      element: this.textarea.nativeElement,
      initialValue: this.value,
      placeholder: this.languageService.translate('editor.placeholder'),
      minHeight: '220px',
      autoDownloadFontAwesome: false,
      toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'unordered-list',
        'ordered-list',
        'link',
        '|',
        'preview',
      ],
      status: false,
      renderingConfig: {
        sanitizerFunction: (html) => this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '',
      },
    });

    editor.codemirror.on('change', () => this.valueChange.emit(editor.value()));
    this.editor = editor;
  }

  ngOnChanges(): void {
    if (this.editor && this.editor.value() !== this.value) {
      this.editor.value(this.value);
    }
  }

  ngOnDestroy(): void {
    this.editor?.cleanup();
    this.editor?.toTextArea();
  }
}
