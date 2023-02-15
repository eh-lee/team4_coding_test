//코딩테스트 연습

//직사각형 별찍기
const n = data.split(" ");
const a = Number(n[0]), b = Number(n[1]);
for (let i = 0; i < b; i++) {
    let star = "";
    for (let j = 0; j < a; j++) {
        star = star + "*"
    };
    console.log(star);
};
});