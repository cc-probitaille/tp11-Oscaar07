import {creationClasseParReflection} from '../creationClasseParReflection';

class TestClass {
  
}

describe('createClassInstance', () => {
  it('should create an instance of the class specified by the environment variable', () => {
    // Simuler une variable d'environnement
    process.env.CLASS_NAME = 'TestClass';

    // Appel de la fonction pour créer une instance
    const instance = creationClasseParReflection();

    // Vérifier que l'instance est bien de la classe souhaitée
    expect(instance).toBeInstanceOf(TestClass);
  });
});