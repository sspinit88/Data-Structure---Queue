class QueueV1 {
  protected storage: any[];

  constructor() {
    this.storage = [];
  }

  get size(): number {
    return this.storage.length;
  }

  /// отвечает за вставку или отправку нового элемента в очередь
  enqueue(item): void {
    this.storage.push(item);
  }

  /// отвечает за удаление первого элемента из очереди
  get dequeue() {
    return this.storage.shift();
  }

  get peek() {
    return this.storage[0];
  }
}

class QueueV2 {
  protected storage: {};
  protected head: number;
  protected tail: number;

  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  get size(): number {
    return this.tail - this.head;
  }

  /// отвечает за вставку или отправку нового элемента в очередь
  enqueue(item): void {
    this.storage[this.tail] = item;
    this.tail++;
  }

  /// отвечает за удаление первого элемента из очереди
  get dequeue() {
    const res = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;

    return res;
  }

  get peek() {
    return this.storage[this.head];
  }
}

/////

const v1 = new QueueV1();

console.log('v1 size:', v1.size); // 0

v1.enqueue(1);
v1.enqueue(2);
v1.enqueue(3);
v1.enqueue(4);
v1.enqueue(5);

console.log('v1 size:', v1.size); // 5
console.log('v1 dequeue:', v1.dequeue); // 1
console.log('v1 size:', v1.size); // 4
console.log('v1 peek:', v1.peek); // 2

/////
console.log('-----');
/////

const v2 = new QueueV2();

console.log('v2 size:', v2.size); // 0

v2.enqueue(1);
v2.enqueue(2);
v2.enqueue(3);
v2.enqueue(4);
v2.enqueue(5);

console.log('v2 size:', v2.size); // 5
console.log('v2 dequeue:', v2.dequeue); // 1
console.log('v2 size:', v2.size); // 4
console.log('v2 peek:', v2.peek); // 2
