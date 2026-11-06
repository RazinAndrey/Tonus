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
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import EasyMDE from 'easymde';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownEditorComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('textarea', { static: true }) private textarea!: ElementRef<HTMLTextAreaElement>;

  private readonly sanitizer = inject(DomSanitizer);
  private editor?: EasyMDE;

  ngAfterViewInit(): void {
    const editor = new EasyMDE({
      element: this.textarea.nativeElement,
      initialValue: this.value,
      placeholder: 'Напишите заметку в Markdown…',
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
