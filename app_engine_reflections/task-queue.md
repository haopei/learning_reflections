# Task Queue

## General
- Task queues is for background processing, external to the user request.
- configuration inside the queue.yaml
- There are two types of queue configutations: Push and Pull queues
- each task is an instance of the Task() object
- each task name must be unique
- Sometimes, multiple calls to create the same tasks may succeed and a task may also be executed multiple times. It is importaht that repeated execution of a task does not break the app.
- A task will be deleted within a maximum of 7 days.
- Tasks can be deleted by purge() or delete_tasks()
- use taskqueue.add() to enqueue a task, or use Task.add() method on the Task object
-



## Push Queues
- Push queues (default) process tasks based on the processing rate configured in the 'queue definition'.
- Appengine automatically scales 'processing capacity' to match the 'queue configuration' and process volume.
- It also automatically deletes tasks after processing.
- Only functions within the GAE environment
- Get started by just configuring a queue and add tasks to it
- The default earliest time to execute a task is ASAP. This can be configurable.

#### Push Queue Steps
- Import the api
- include taskqueue.add(url, params)
- create handler for the url
- create queue.yaml and set configurations

## Pull Queues
- Pull queues allow task consumers (your app, or code external to your app) to lease tasks as a specific time for processing withing a specific timeframe.
- Task consumer needs to handle 'scaling of instances based on processing volume.
- Task consumer needs to delete the tasks after processing.

## Deferred Built-in Library
- The deferred library packages your function call and its arguments then adds it to the taskqueue. When the task is executed, the deferred library executes your passed-in function.
- the deferred.defer(function, **params) allow you to bypass all the trouble of setting up a taskqueue handler, and the serializing and deserialiing of its parameters
- from google.appengine.ext import deferred