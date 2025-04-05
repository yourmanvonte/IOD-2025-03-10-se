const name = ['John', 'Bill', 'Karen', 'Steve', 'Mike'];
name[0] = 'Sarah';
name[3] = 'Emma';
name.unshift('Jesus');
name.pop();
console.log(name);

const numbers = [1, 3, 5, 7, 9];
numbers.push(15);
function totalNumber() {
    return numbers.length;
}
console.log(totalNumber());

function newArray(dog, cat) {
 return [dog, cat];
}

console.log(newArray('Bulldog', 'Siamese'));