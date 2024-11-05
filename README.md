![CS| Recursion](./src/misc/banner.png)

![Static Badge](https://img.shields.io/badge/make_%26_leave_project-p?style=for-the-badge)

# About
A demonstration of what recursion can do using JavaScript.

## Topics Used
- Fibonacci
- Merge Sort

# Installation
`npm install @tekksunn/cs-recursion`

## How To Use
### Fibonacci
There are two functions for fibonacci, namely `fibs`*(fibonacci)* and `fibsRec`*(fibonacci, but recursive)*.
They both return an array of numbers, and return the same thing.

**fibs**
```
fibs(number) {}

fibs(8) // [0, 1, 1, 2, 3, 5, 8, 13]
```

**fibsRec**
```
fibsRec(number)
fibs(8) // [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge Sort
This will sort any *array of numbers* using the *merge sort algorithm*.
The function to use this is `mergeSort`.

**mergeSort**
```
mergeSort(array) {}

mergeSort([9, 8, 7, 6, 4, 2, 1, 3, 5]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
