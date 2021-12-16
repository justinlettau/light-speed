# Maps write

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.0714ms |
| Object in for loop      |       0.0992ms |
| Map in for loop         |       0.1215ms |
| Reduce with destructing |       2.2698ms |

## 10,00 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.3185ms |
| Object in for loop      |       0.9165ms |
| Map in for loop         |       1.1980ms |
| Reduce with destructing |      53.2058ms |

## 100,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       3.4478ms |
| Object in for loop      |       6.3086ms |
| Map in for loop         |      15.9883ms |
| Reduce with destructing |          22.3s |

## 1,000,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |      48.6008ms |
| Object in for loop      |      57.2067ms |
| Map in for loop         |     272.6526ms |
| Reduce with destructing |        skipped |
