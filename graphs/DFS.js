const doDFS = (G) => {
    
    let color = {};
    for (let i of Object.keys(G)) color[i] = 'white';

    const dfs = (currentVertex) => {
        console.log(color);

        color[currentVertex] = 'gray';
        for (let v of G[currentVertex]){
            if (color[v] === 'white'){
                dfs(v);
            }
        }
        
        color[currentVertex] = 'black';
    }

    for (let currentVertex of Object.keys(G)){
        if (color[currentVertex] === 'white'){
            dfs(currentVertex)
        }
    }

    console.log(color);
}

AdjList = {
    0: [2],
    1: [7],
    2: [2, 3, 4],
    3: [2, 4, 5],
    4: [2, 3, 6, 7],
    5: [3],
    6: [4],
    7: [4,1],
}

doDFS(AdjList)