# Maps write

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.0614ms |
| Object in for loop      |       0.0874ms |
| Map in for loop         |       0.1072ms |
| Reduce with destructing |       2.1324ms |

## 10,00 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.3302ms |
| Object in for loop      |       0.4730ms |
| Map in for loop         |       1.4206ms |
| Reduce with destructing |      40.8585ms |

## 100,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       3.1645ms |
| Object in for loop      |       4.9085ms |
| Map in for loop         |      14.0719ms |
| Reduce with destructing |          18.9s |
