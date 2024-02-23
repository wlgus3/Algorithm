function solution(routes) {
    let answer = 0;

    // 1. routes[i][0] 기준으로 오름차순 정렬한다
    routes.sort(function compare(a, b) { 
    return a[0] - b[0];
    });
    let min = 0;
    let max = 0;

    for(let i = 0; i < routes.length; i++){ 
        // 첫번째 차를 무조건 min, max로 설정하고, 카메라 개수를 하나 더해준다.
        if(i == 0){
            answer+=1;
            min = routes[i][0];
            max = routes[i][1];
            continue;
        }
        else{ 
            // 이전의 min, max 안에 다음 차의 범위가 포함되면, min, max를 재설정하고 continue한다.
            if(min<=routes[i][0] && routes[i][1]<=max){
                min = routes[i][0];
                max = routes[i][1];
                continue;
            }

            // 이번 차량의 진입점이 min, max 사이이면 continue한다. 
            if(min<=routes[i][0] && routes[i][0]<=max){
                continue;
            }
            else{ // 그렇지 않으면, answer 값을 하나 더해주고 
                answer+=1;
                min = routes[i][0];
                max = routes[i][1];
            }
        }
    }
    return answer;
}