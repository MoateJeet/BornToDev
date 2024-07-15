document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // รับค่าจากฟอร์ม
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // แปลงเป็นเมตร

    // คำนวณ BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // แสดงผลลัพธ์
    let resultText = `ค่า BMI ของคุณคือ ${bmi}, อยู่ในเกณฑ์ `;
    if (bmi < 18.5) {
        resultText += 'น้ำหนักน้อย';
    } else if (bmi < 24.9) {
        resultText += 'น้ำหนักปกติ';
    } else if (bmi < 29.9) {
        resultText += 'น้ำหนักเกิน';
    } else {
        resultText += 'โรคอ้วน';
    }

    document.getElementById('result').innerText = resultText;
});
