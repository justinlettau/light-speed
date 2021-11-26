# Build maps

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.0582ms |
| Object in for loop      |       0.0887ms |
| Map in for loop         |       0.1086ms |
| Reduce with destructing |       2.2331ms |

## 10,00 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       0.3245ms |
| Object in for loop      |       0.4358ms |
| Map in for loop         |       1.1688ms |
| Reduce with destructing |      53.4152ms |

## 100,000 items

| Test                    | Execution Time |
| :---------------------- | -------------: |
| Reduce                  |       3.1668ms |
| Object in for loop      |       6.3905ms |
| Map in for loop         |      15.1226ms |
| Reduce with destructing |            19s |
