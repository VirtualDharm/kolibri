import PDFComponent from './views/PdfRendererRoot';
import ContentRendererModule from 'content_renderer_module';

class DocumentPDFModule extends ContentRendererModule {
  get rendererComponent() {
    return PDFComponent;
  }
}

const documentPDFModule = new DocumentPDFModule();

export { documentPDFModule as default };
