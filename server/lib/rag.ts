
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
    const directories = [
      'client/src/pages',
      'client/src/components',
      'server/lib'
    ];
    
    directories.forEach(dir => {
      const fullPath = join(process.cwd(), dir);
      try {
        const files = readdirSync(fullPath);
        files.forEach(file => {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = readFileSync(join(fullPath, file), 'utf-8');
            // Clean the content to remove code and keep comments/text
            const cleanContent = content
              .replace(/```[\s\S]*?```/g, '') // Remove code blocks
              .replace(/import.*?;/g, '') // Remove imports
              .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
              .replace(/\/\/.*/g, ''); // Remove single-line comments
            
            this.documents.push({
              content: cleanContent,
              path: join(dir, file)
            });
          }
        });
      } catch (error) {
        console.error(`Error loading documents from ${dir}:`, error);
      }
    });
  }

  public findRelevantContent(query: string): string {
    const relevantDocs = this.documents.filter(doc => 
      doc.content.toLowerCase().includes(query.toLowerCase())
    );
    
    return relevantDocs.map(doc => `Content from ${doc.path}:\n${doc.content}`).join('\n\n');
  }
}

export const ragSystem = new RAGSystem();
