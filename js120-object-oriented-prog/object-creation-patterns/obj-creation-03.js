// Circular Queue

// A circular queue is a collection of objects stored in a buffer that is
// treated as though it is connected end-to-end in a circle. When an object
// is added to this circular queue, it is added to the position that
// immediately follows the most recently added object, while removing an
// object always removes the object that has been in the queue the longest.

// This works as long as there are empty spots in the buffer. If the buffer
// becomes full, adding a new object to the queue requires getting rid of an
// existing object; with a circular queue, the object that has been in the
// queue the longest is discarded and replaced by the new object.

// Assuming we have a circular queue with room for 3 objects, the circular
// queue looks and acts like this:
// P1  P2  P3   Comments
//              All positions are initially empty
// 1            Add 1 to the queue
// 1   2        Add 2 to the queue
//     2        Remove oldest item from the queue (1)
//     2   3    Add 3 to the queue
// 4   2   3    Add 4 to the queue, queue is now full
// 4       3    Remove oldest item from the queue (2)
// 4   5   3    Add 5 to the queue, queue is full again
// 4   5   6    Add 6 to the queue, replaces oldest element (3)
// 7   5   6    Add 7 to the queue, replaces oldest element (4)
// 7       6    Remove oldest item from the queue (5)
// 7            Remove oldest item from the queue (6)
//              Remove oldest item from the queue (7)
//              Remove non-existent item from the queue (nil)

// Your task is to write a CircularQueue class that implements a circular
// queue for arbitrary objects. The class should obtain the buffer size with
// an argument provided to the constructor, and should provide the following
// methods:

// - `enqueue` to add an object to the queue
// - `dequeue` to remove (and return) the oldest object in the queue. It
//    should return null if the queue is empty.

// You may assume that none of the values stored in the queue are null
// (however, null may be used to designate empty spots in the buffer).

// Examples:
// (The below code should log true 15 times.)
let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);

//

class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = Array(bufferSize).fill(null);
    this.enqueueIdx = 0;
    this.dequeueIdx = 0;
  }

  incrementIdx(idx) {
    return (idx + 1) % this.bufferSize;
  }

  enqueue(element) {
    if (this.buffer[this.enqueueIdx] !== null) {
      this.dequeueIdx = this.incrementIdx(this.dequeueIdx);
    }
    this.buffer[this.enqueueIdx] = element;
    this.enqueueIdx = this.incrementIdx(this.enqueueIdx);
  }

  dequeue() {
    let value = this.buffer[this.dequeueIdx];
    if (value === null) return null;

    this.buffer[this.dequeueIdx] = null;
    this.dequeueIdx = this.incrementIdx(this.dequeueIdx);

    return value;
  }
}
