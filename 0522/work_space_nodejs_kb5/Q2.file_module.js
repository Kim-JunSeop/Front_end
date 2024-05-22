const fs = require('fs');
const path = require('path');

const meFilePath = path.join(__dirname, 'me.txt');
const youFilePath = path.join(__dirname, 'you.txt');

fs.writeFileSync(meFilePath, '오늘은 바람이 차가워.\n어디를 가야 바람이 차갑지 않을까?\n네가 제일 평안한 곳이 어디야?\n', 'utf8');

const meContent = fs.readFileSync(meFilePath, 'utf8');
console.log('me.txt 내용:');
console.log(meContent);

if (fs.existsSync(meFilePath)) {
    fs.writeFileSync(youFilePath, meContent, 'utf8');

    const additionalContent = `************************\n나는 별이야\n제일 빛나\n************************\n`;
    fs.appendFileSync(youFilePath, additionalContent, 'utf8');

    const youContent = fs.readFileSync(youFilePath, 'utf8');
    console.log('you.txt 내용:');
    console.log(youContent);
} else {
    console.log('me.txt 파일이 존재하지 않습니다.');
}
