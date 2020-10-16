/* 数组 */
let arr1:number[] = [1,2,3]
arr1.push(4)
//.push('2')
console.log(arr1);



/* 元组  与数组类似，但可以存储不同类型   注意赋值时顺序要对应，越界部分采用联合类型，但不能是其他类型*/
 let data:[number,string] = [1,'2'] 

 data.push(3)
 console.log(data);




/* 联合类型 */
let c: string|number; // 类型可以为二者之一
/* 交叉类型   必须包含所有类型*/

/* 枚举enum
*/
enum Gender {male=1,famale} // famale从2开始

