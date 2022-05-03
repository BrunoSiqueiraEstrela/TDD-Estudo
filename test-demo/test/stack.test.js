class Stack{
  constructor(){
    this.top = -1;
    this.items = {};
  }

  get peek(){
    return this.items[this.top];
  }

  push(value){
    this.top +=1;
    this.items[this.top] = value;
  }
}

describe('My stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push an item', () => {
    stack.push('💪 GRIND')
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('💪 GRIND');
   
  });

  it.todo('can pop an item');

});