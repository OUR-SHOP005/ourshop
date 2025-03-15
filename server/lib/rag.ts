
import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';

interface Document {
  content: string;
  path: string;
}

class RAGSystem {
  private documents: Document[] = [];
  
  constructor() {
    this.loadDocuments();
  }

  private loadDocuments() {
    // Load content from client/src/pages
    const pagesDir = join(process.cwd(), 'client/src/pages');
    const files = readdirSync(pagesDir);
    
    for (const file of files) {
      if (file.endsWith('.tsx')) {
        const content = readFileSync(join(pagesDir, file), 'utf-8');
        this.documents.push({
          content,
          path: join('pages', file)
        });
      }
    }
  }

  public findRelevantContent(query: string): string {
    const relevantDocs = this.documents.filter(doc => 
      doc.content.toLowerCase().includes(query.toLowerCase())
    );
    
    return relevantDocs.map(doc => `Content from ${doc.path}:\n${doc.content}`).join('\n\n');
  }
}

export const ragSystem = new RAGSystem();
