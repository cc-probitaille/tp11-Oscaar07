import {creationClasseParReflection} from '../creationClasseParReflection';

describe('createClassInstance', () => {
  it("devrait créer une instance de ExampleClass", () => {
    process.env.CLASS_NAME = "ExampleClass";
    const instance = creationClasseParReflection.createClassInstance();

    expect(instance).toBeDefined();
    expect((instance as any).name).toBe("ExampleClass");
  });

  test("devrait lever une erreur si CLASS_NAME est manquant", () => {
    process.env.CLASS_NAME = "";
    expect(() => creationClasseParReflection.createClassInstance()).toThrow(
      "La variable d'environnement CLASS_NAME n'est pas définie."
    );
  });

  test("devrait lever une erreur si la classe est introuvable", () => {
    process.env.CLASS_NAME = "NonExistentClass";
    expect(() => creationClasseParReflection.createClassInstance()).toThrow(
      "Classe 'NonExistentClass' non trouvée."
    );
  });
});