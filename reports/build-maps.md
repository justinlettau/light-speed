# Build maps

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test               | Execution Time |
| :----------------- | -------------: |
| Object in for loop |       0.1030ms |
| Map in for loop    |       0.1410ms |
| Reduce object      |       1.7600ms |

## 10,00 items

| Test               | Execution Time |
| :----------------- | -------------: |
| Object in for loop |       0.6044ms |
| Map in for loop    |       1.3205ms |
| Reduce object      |      52.7490ms |

## 100,000 items

| Test               | Execution Time |
| :----------------- | -------------: |
| Object in for loop |       4.6332ms |
| Map in for loop    |      14.6802ms |
| Reduce object      |          19.5s |
