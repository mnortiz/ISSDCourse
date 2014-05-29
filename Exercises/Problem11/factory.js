// Create a factory that creates new objects
// on demand.

var fo = factory.create("myConcreteObject");
fo.valueToWrite = 10;
fo.write();

// Also allow to access the object directly
// over the factory

factory.myConcreteObject.write();