const BFS = (G, SourceRoot, DestinationRoot) => {
    
    let queue = [SourceRoot];
    let distance = {};

    for (let i=0; i < Object.keys(G).length; i++) distance[i] = Infinity ;

    distance[SourceRoot] = 0;

    while (queue.length !== 0){
        let currentVertex = queue.pop();
    
        // all vertices that connencted with currentVertex
        for (let v of G[currentVertex]){
            if (distance[v] === Infinity){
                distance[v] = distance[currentVertex] + 1;
                queue.push(v);
            }
        }
    }
    // return distance[DestinationRoot];
    return distance
}

AdjList = {
    0: [1],
    1: [0, 2, 4],
    2: [1, 3, 4],
    3: [2, 4, 5],
    4: [1, 2, 3, 6, 7],
    5: [3],
    6: [4],
    7: [4],
}

// BFS(AdjList, 0, 7)
console.log(BFS(AdjList, 3))