//wordStaked เป็นฟังชั่นที่ใช้ส่งออกไป เพื่อให้ sript อื่นสามารถใช้งาน Function นี้ได้โดยผ่านการ import
//มีการใช้ defult parameter โดยกำหนดค่าเริ่มต้นเป็น String (str = 'hello')
//ใช้ closure function โดยที่ให้ return arrow function 
//ที่ใช้ตัวแปรของ function แรก(str)มาทำการ += parameter ของ arrow function(str1) และ return str
export function wordStaked(str = 'hello') {
    return (str1) => { str += ` ${str1}`; return str }
}