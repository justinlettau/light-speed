# Loops

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test     | Execution Time |
| :------- | -------------: |
| while    |       0.0320ms |
| forEach  |       0.0338ms |
| for      |       0.0346ms |
| for...of |       0.0629ms |
| for...in |       0.0987ms |

## 100,000 items

| Test     | Execution Time |
| :------- | -------------: |
| for      |       0.9389ms |
| while    |       1.3399ms |
| forEach  |       2.1317ms |
| for...of |       3.7091ms |
| for...in |       9.0917ms |

## 1,000,000 items

| Test     | Execution Time |
| :------- | -------------: |
| while    |       1.3498ms |
| for...of |       2.4616ms |
| for      |       3.2412ms |
| forEach  |      10.9857ms |
| for...in |     198.8667ms |
