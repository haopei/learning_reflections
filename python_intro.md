# Python Object Oriented Programming

### General
- given a file turtle.py and a class Turtle, a call to turtle.Turtle() actually calls the Turtle()'s __init__ function which creates space in memory for a new  instance or object of Turtle().
- the __init__(self, params) constructor function creates space in memory for the new instance of a class or object.
- The __init__.py file inside a folder tells python to treat the folder as Python packages. They can contain Classes. When we call a folder.ClassName(), we are actually actually calling the __init__.py file which then creates an instance of the class. Example: twilio.rest.SendText()
- Python comes with its 'Standard Library' which contains modules like webbrowser, os, turtle, urllib, etc.
- Python has built-in functions inside standard lib like open() which are accessible without importing modules.
- each method inside a class takes a first parameter of 'self'
- you can access class variables by using file_name.ClassName.variable_name
- __doc__ is a prepackages class variable. Example: turtle.Turtle.__doc__
- Inheritance: Parent.__init__(self, params_to_inherit)
- a Child class can use the methods defined inside its parent class. If a method of the same name is defined inside the Child class, then this new method will take precedence.