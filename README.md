# Typescript Data Structures and Algorithms

## Data Structures

- Tuples
- Arrays

## Measurements

- Memory Usage
- Performance

### Memory Usage

```typescript
let size_one = await performance.measureUserAgentSpecificMemory()
add()
let size_two = await performance.measureUserAgentSpecificMemory()
let size_total = size_two - size_one
logger({
  type: 'memory',
  size: size_total
  operation: 'add'
})
```

### Performance

```typescript
let time_one = performance.now();
add();
let time_two = performance.now();
let time_total = time_two - time_one;
logger({
  type: "performance",
  time: time_total,
  operation: "add",
});
```

## Operations

- Plot Node
- Add Node
- Remove Node
- Find Specific Node by ID
- Update Specific Node by ID
