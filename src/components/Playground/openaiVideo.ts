import { allVideoList } from "@/constants/videos";

export const randomVideo = (numbers = 10) => {
  // 定义一个空数组来存放随机数
  let randomNumbers:number[] = [];
  const resultVideoList = [];
  // 循环获取多个不同的随机数
  while (randomNumbers.length < numbers) {
    let randomNumber = Math.floor(Math.random() * (allVideoList.length + 1));
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      resultVideoList.push(allVideoList[randomNumber])
    }
  }
  return resultVideoList;
}
