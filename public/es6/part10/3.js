function addThreeSquareAddFiveTakeSquareRoot(x){
    return Math.sqrt(Math.pow(x+3,2)+5);
}
// 별명을 쓰기 전
const answer = addThreeSquareAddFiveTakeSquareRoot(5)+
addThreeSquareAddFiveTakeSquareRoot(2) /
addThreeSquareAddFiveTakeSquareRoot(7);
// 별명 쓴 후
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5)+f(2))/f(7);
