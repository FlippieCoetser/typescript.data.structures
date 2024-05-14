# Typescript Data Structures and Algorithms

## Data Structures

- Tuples
- Arrays

## Measurements

- Memory Usage
- Performance

### Memory Usage

```typescript
let start = (performance as any).memory.usedJSHeapSize;
let nodes: node[] = [];
for (let i = 0; i < 10; i++) {
  nodes.push({ id: `id${i}`, name: `name${i}`, x: i, y: i });
}
let end = (performance as any).memory.usedJSHeapSize;
let size = end - start;
logger({
  type: "memory",
  size: size,
  operation: "add",
});
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

- Add Nodes
- Find Nodes
- Find Specific Node (example node with specific `id`)
- Find Nodes by condition (example return all nodes with name is `Clinical Assessment`)
- Update Nodes
- Update Specific Node (example update node with specific `id`)
- Update Nodes by condition (example update all nodes with name is `Clinical Assessment`)
- Delete Nodes
- Delete Specific Node (example delete node with specific `id`)
- Delete Nodes by condition (example delete all nodes with name is `Clinical Assessment`)
