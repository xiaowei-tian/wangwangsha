/* 身份对照表
0: 复刻
1：平民
2：狼王
3：普通狼
4：预言家
5：女巫
6：猎人
7：白痴
8：禁言长老
9: 守卫
*/

function validate(currentAlloc) {
    var totalwangwang = 0
    for (var i = 0; i < currentAlloc.length; i++) {
        if ((currentAlloc[i][0] == currentAlloc[i][1] && currentAlloc[i][0] == 1) 
           || (currentAlloc[i][0] + currentAlloc[i][1]) == 1 ) { // we have a replica wangwang.
            totalwangwang += 1
        }
        if (currentAlloc[i][0] == currentAlloc[i][1] && currentAlloc[i][0] == 3) {
            return false
        }
        if (currentAlloc[i][0] == 2 && currentAlloc[i][1] == 3) {
            return false
        }
        if (currentAlloc[i][0] == 3 && currentAlloc[i][1] == 2) {
            return false
        }
    }
    console.log(totalwangwang)
    if (totalwangwang <= 1 || totalwangwang > 2) return false
    return true
}

module.exports.validate = validate;