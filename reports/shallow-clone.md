# Shallow clone

- CPU: Intel® Core™ i7-10750H
- Memory: 16.9 GB
- Node: v14.18.0

## 1,000 items

| Test          | Execution Time |
| :------------ | -------------: |
| Destructing   |       0.0978ms |
| Manual        |       0.2112ms |
| Object.assign |       0.2805ms |

## 100,000 items

| Test          | Execution Time |
| :------------ | -------------: |
| Manual        |       3.9185ms |
| Destructing   |       6.2905ms |
| Object.assign |      42.5727ms |

## 1,000,000 items

| Test          | Execution Time |
| :------------ | -------------: |
| Manual        |       6.9883ms |
| Destructing   |      26.3928ms |
| Object.assign |     153.3781ms |
