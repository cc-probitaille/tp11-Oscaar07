type ClassConstructor = new () => any;

export class creationClasseParReflection {
  private static availableClasses: Record<string, ClassConstructor> = {
    ExampleClass: class {
      name: string;

      constructor() {
        this.name = "ExampleClass";
      }
    },
  };

  static createClassInstance(): object {
    const className = process.env.CLASS_NAME;

    if (!className) {
      throw new Error("La variable d'environnement CLASS_NAME n'est pas définie.");
    }

    const classe = this.availableClasses[className];
    if (!classe) {
      throw new Error(`Classe '${className}' non trouvée.`);
    }

    return new classe();
  }
}
