export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#FFCC80'); // Light Orange
    static readonly TYPESCRIPT = new Tag('TypeScript', '#A5D6A7'); // Light Green
    static readonly HTML = new Tag('HTML', '#FFAB91'); // Light Pink
    static readonly CSS = new Tag('CSS', '#81D4FA'); // Light Blue
    static readonly JAVASCRIPT = new Tag('JavaScript', '#FFE082'); // Light Yellow
    static readonly NODEJS = new Tag('Node.js', '#B39DDB'); // Light Purple
    static readonly KOTLIN = new Tag('Kotlin', '#80CBC4'); // Light Teal
    static readonly FLUTTER = new Tag('Flutter', '#B0BEC5'); // Light Blue-Grey
    static readonly MYSQL = new Tag('MySQL', '#FF8A65'); // Light Red
    static readonly DART = new Tag('Dart', '#FFD54F'); // Light Amber
    static readonly JAVA = new Tag('Java', '#90CAF9'); // Light Sky Blue
    static readonly CSHARP = new Tag('C#', '#FFAB91'); // Light Pink (Same as HTML for consistency)
    static readonly PYTHON = new Tag('Python', '#4DB6AC'); // Light Blue-Green
  
    private constructor(private readonly key: string, public readonly color: string) { }
  
    toString() {
      return this.key;
    }
  }
  